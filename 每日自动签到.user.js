// ==UserScript==
// @name         每日自动打开签到网页（带设置面板）
// @namespace    https://github.com/acheng-byte
// @version      0.0.6
// @description  每日定时自动打开多个签到网页，以北京时间8:00为每日分界，支持全局打开方式（后台标签/各自新窗口/集中到单窗口）、浅色/深色主题切换，可拖拽悬浮按钮，提供可视化设置面板与操作日志。每条网址可单独启用/禁用，图标默认隐藏，支持 setInterval 轮询。
// @author       阿成
// @homepageURL  https://github.com/acheng-byte
// @supportURL   https://github.com/acheng-byte
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_openInTab
// @grant        GM_log
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    const LOG_PREFIX = '[每日自动签到]';
    const KEY_URLS = 'as_urls_v3';
    const KEY_TIME = 'as_time';
    const KEY_DATES = 'as_dates';
    const KEY_BTN_POS = 'as_btn_pos';
    const KEY_MODE = 'as_open_mode';
    const KEY_LOGS = 'as_logs';
    const KEY_THEME = 'as_theme';

    const POLL_INTERVAL_MS = 60 * 1000;

    const DEFAULT_URLS = [
        { url: 'https://www.52pojie.cn/', enabled: false },
        { url: 'https://github.com/', enabled: false },
        { url: 'https://linux.do', enabled: false },
        { url: 'https://www.oiioii.ai/', enabled: false },
        { url: 'https://enter.pro/', enabled: false },
        { url: 'https://www.oracle.com/cn/cloud/free/', enabled: true },
        { url: 'https://anyrouter.top/console/token', enabled: true },
        { url: 'https://newapi.acheng.eu.cc/console/token', enabled: true },
        { url: 'https://weread.qq.com/', enabled: true },
        { url: 'https://git.acheng.eu.cc/', enabled: true },
    ];
    const DEFAULT_TIME = '09:00';
    const DEFAULT_MODE = 'tab';
    const DEFAULT_THEME = 'light';
    const DAY_BOUNDARY_HOUR = 8;

    let openedWindows = [];
    let fabVisible = false;

    // ─── 存储工具 ────────────────────────────────────────────────
    const getUrls = () => GM_getValue(KEY_URLS, DEFAULT_URLS);
    const getTime = () => GM_getValue(KEY_TIME, DEFAULT_TIME);
    const getDates = () => GM_getValue(KEY_DATES, {});
    const getBtnPos = () => GM_getValue(KEY_BTN_POS, null);
    const getMode = () => GM_getValue(KEY_MODE, DEFAULT_MODE);
    const getLogs = () => GM_getValue(KEY_LOGS, []);
    const getTheme = () => GM_getValue(KEY_THEME, DEFAULT_THEME);

    const saveUrls = v => GM_setValue(KEY_URLS, v);
    const saveTime = v => GM_setValue(KEY_TIME, v);
    const saveDates = v => GM_setValue(KEY_DATES, v);
    const saveBtnPos = v => GM_setValue(KEY_BTN_POS, v);
    const saveMode = v => GM_setValue(KEY_MODE, v);
    const saveLogs = v => GM_setValue(KEY_LOGS, v);
    const saveTheme = v => GM_setValue(KEY_THEME, v);

    // ─── 北京时间工具 ─────────────────────────────────────────────
    const getBeijingDate = () => new Date(Date.now() + 8 * 3600 * 1000);

    const getPeriodKey = () => {
        const bj = getBeijingDate();
        if (bj.getUTCHours() < DAY_BOUNDARY_HOUR) {
            bj.setUTCDate(bj.getUTCDate() - 1);
        }
        return bj.toISOString().slice(0, 10);
    };

    const nowMinBeijing = () => {
        const bj = getBeijingDate();
        return bj.getUTCHours() * 60 + bj.getUTCMinutes();
    };

    const hhmm2min = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };

    const fmtBJ = iso => {
        const d = new Date(new Date(iso).getTime() + 8 * 3600 * 1000);
        return d.toISOString().replace('T', ' ').slice(0, 19) + ' (北京)';
    };

    // ─── HTML 转义 ────────────────────────────────────────────────
    const escHtml = s => String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    // ─── 日志工具 ─────────────────────────────────────────────────
    async function addLog(type, msg, url) {
        const logs = await getLogs();
        logs.unshift({ time: new Date().toISOString(), type, msg, url: url || '' });
        if (logs.length > 500) logs.splice(500);
        await saveLogs(logs);
    }

    // ─── 样式（CSS 变量双主题） ───────────────────────────────────
    GM_addStyle(`
        /* ── 浅色主题变量（默认） ── */
        #as-overlay, #as-log-overlay {
            --bg-base:    #f5f7fa;
            --bg-panel:   #ffffff;
            --bg-head:    #f0f2f5;
            --bg-item:    #f5f7fa;
            --bg-input:   #ffffff;
            --bg-btn-off: #eef0f3;
            --bg-log-entry: #fafafa;
            --c-text:     #1e293b;
            --c-label:    #64748b;
            --c-muted:    #94a3b8;
            --c-border:   #cbd5e1;
            --c-btn-off:  #64748b;
            --c-title:    #7c3aed;
            --c-title-log:#16a34a;
            --c-x:        #94a3b8;
            --shadow:     0 20px 60px rgba(0,0,0,.15);
        }
        /* ── 深色主题变量 ── */
        #as-overlay.as-dark, #as-log-overlay.as-dark {
            --bg-base:    #1e1e2e;
            --bg-panel:   #1e1e2e;
            --bg-head:    #313244;
            --bg-item:    #313244;
            --bg-input:   #313244;
            --bg-btn-off: #1e1e2e;
            --bg-log-entry: #181825;
            --c-text:     #cdd6f4;
            --c-label:    #a6adc8;
            --c-muted:    #6c7086;
            --c-border:   #45475a;
            --c-btn-off:  #6c7086;
            --c-title:    #cba6f7;
            --c-title-log:#a6e3a1;
            --c-x:        #a6adc8;
            --shadow:     0 20px 60px rgba(0,0,0,.7);
        }

        /* ── 遮罩层 ── */
        #as-overlay {
            position:fixed;inset:0;background:rgba(0,0,0,.5);
            z-index:2147483646;display:flex;align-items:center;justify-content:center;
        }
        #as-log-overlay {
            position:fixed;inset:0;background:rgba(0,0,0,.5);
            z-index:2147483647;display:flex;align-items:center;justify-content:center;
        }

        /* ── 面板主体 ── */
        #as-panel, #as-log-panel {
            border-radius:12px;
            width:500px;max-width:95vw;max-height:90vh;
            display:flex;flex-direction:column;
            font-family:'Segoe UI',system-ui,sans-serif;font-size:13px;
            background:var(--bg-panel);color:var(--c-text);
            box-shadow:var(--shadow);
            transition:background .2s,color .2s;
        }
        #as-log-panel { width:540px; }

        /* ── 面板头部 ── */
        #as-panel-head, #as-log-head {
            background:var(--bg-head);padding:13px 16px;
            border-radius:12px 12px 0 0;
            display:flex;align-items:center;justify-content:space-between;flex-shrink:0;
            border-bottom:1px solid var(--c-border);
        }
        #as-panel-head h2, #as-log-head h2 {
            margin:0;font-size:14px;font-weight:600;
        }
        #as-panel-head h2 { color:var(--c-title); }
        #as-log-head h2   { color:var(--c-title-log); }
        .as-head-actions { display:flex;align-items:center;gap:6px; }
        #as-theme-btn, #as-log-theme-btn {
            cursor:pointer;background:none;border:none;font-size:15px;
            line-height:1;padding:2px;opacity:.8;transition:opacity .15s;
        }
        #as-theme-btn:hover, #as-log-theme-btn:hover { opacity:1; }
        #as-x, #as-log-x {
            cursor:pointer;background:none;border:none;
            color:var(--c-x);font-size:18px;line-height:1;padding:0;
            transition:color .15s;
        }
        #as-x:hover, #as-log-x:hover { color:#f38ba8; }

        /* ── 面板正文 ── */
        #as-panel-body { padding:16px;overflow-y:auto;background:var(--bg-base); }
        #as-log-body { padding:12px 16px;overflow-y:auto;flex:1;min-height:0;background:var(--bg-base); }

        /* ── 标签 & 提示 ── */
        .as-label {
            font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;
            color:var(--c-label);margin:0 0 7px;
        }
        .as-hint { font-size:11px;color:var(--c-muted); }

        /* ── 触发时间行 ── */
        #as-time-row { display:flex;align-items:center;gap:10px;margin-bottom:12px; }
        #as-time-in {
            background:var(--bg-input);border:1px solid var(--c-border);
            color:var(--c-text);border-radius:6px;padding:5px 9px;font-size:13px;outline:none;
            transition:border-color .15s;
        }
        #as-time-in:focus { border-color:#7c3aed; }

        /* ── 全局打开方式 ── */
        #as-mode-row { display:flex;align-items:center;gap:10px;margin-bottom:16px; }
        .as-global-mode { display:flex; }
        .as-gmode-btn {
            cursor:pointer;border:1px solid var(--c-border);
            background:var(--bg-btn-off);color:var(--c-btn-off);
            font-size:11px;padding:4px 10px;transition:.15s;white-space:nowrap;
        }
        .as-gmode-btn:first-child { border-radius:4px 0 0 4px; }
        .as-gmode-btn:last-child  { border-radius:0 4px 4px 0;border-left:none; }
        .as-gmode-btn:not(:first-child):not(:last-child) { border-left:none; }
        .as-gmode-btn.active-tab { background:#89b4fa;color:#1e1e2e;border-color:#89b4fa; }
        .as-gmode-btn.active-win { background:#fab387;color:#1e1e2e;border-color:#fab387; }
        .as-gmode-btn.active-single { background:#a6e3a1;color:#1e1e2e;border-color:#a6e3a1; }

        /* ── URL 列表 ── */
        #as-url-list { list-style:none;margin:0 0 10px;padding:0; }
        #as-url-list li {
            display:flex;align-items:center;gap:6px;
            background:var(--bg-item);border:1px solid var(--c-border);
            border-radius:7px;padding:6px 8px;margin-bottom:5px;
            transition:opacity .2s;
        }
        /* 禁用状态：整行半透明 */
        #as-url-list li.as-item-disabled {
            opacity:.45;
        }
        /* 禁用状态：URL 文字加删除线 */
        #as-url-list li.as-item-disabled .as-url-text {
            text-decoration:line-through;
        }

        /* ── 自定义复选框 ── */
        .as-url-cb {
            flex-shrink:0;
            width:16px;height:16px;
            cursor:pointer;
            accent-color:#7c3aed;
        }
        .as-dark .as-url-cb { accent-color:#cba6f7; }

        #as-url-list li .as-url-text {
            flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
            color:#2563eb;font-size:12px;
        }
        .as-dark #as-url-list li .as-url-text { color:#89b4fa; }
        .as-badge { font-size:10px;flex-shrink:0;padding:2px 5px;border-radius:4px; }
        .as-badge-done { background:#dcfce7;color:#16a34a; }
        .as-badge-wait { background:var(--bg-item);color:var(--c-muted);border:1px solid var(--c-border); }
        .as-badge-off  { background:var(--bg-btn-off);color:var(--c-muted);border:1px solid var(--c-border); }
        .as-dark .as-badge-done { background:#1e3a2f;color:#a6e3a1; }
        .as-dark .as-badge-wait { background:#2a2a3e;color:#6c7086;border:none; }
        .as-dark .as-badge-off  { background:#2a2a3e;color:#6c7086;border:none; }
        .as-open-btn {
            cursor:pointer;border:none;border-radius:4px;flex-shrink:0;
            background:#2563eb;color:#fff;font-size:11px;padding:2px 7px;
            transition:opacity .15s;white-space:nowrap;
        }
        .as-dark .as-open-btn { background:#89b4fa;color:#1e1e2e; }
        .as-open-btn:hover { opacity:.8; }
        .as-del {
            cursor:pointer;background:none;border:none;
            color:var(--c-muted);font-size:14px;flex-shrink:0;padding:0;transition:color .15s;
        }
        .as-del:hover { color:#ef4444; }

        /* ── 添加输入行 ── */
        #as-add-row { display:flex;gap:7px;margin-bottom:14px; }
        #as-url-in {
            flex:1;background:var(--bg-input);border:1px solid var(--c-border);
            color:var(--c-text);border-radius:6px;padding:6px 9px;font-size:12px;outline:none;
            transition:border-color .15s;
        }
        #as-url-in:focus { border-color:#2563eb; }

        /* ── 按钮 ── */
        .as-btn {
            cursor:pointer;border:none;border-radius:6px;padding:6px 12px;
            font-size:12px;font-weight:600;transition:opacity .15s;
        }
        .as-btn:hover { opacity:.85; }
        .as-btn-add        { background:#2563eb;color:#fff; }
        .as-dark .as-btn-add { background:#89b4fa;color:#1e1e2e; }
        .as-btn-save       { background:#16a34a;color:#fff;width:100%;padding:9px;font-size:13px; }
        .as-dark .as-btn-save { background:#a6e3a1;color:#1e1e2e; }
        .as-btn-reset { background:var(--bg-item);color:var(--c-label);font-size:11px;padding:5px 10px;border:1px solid var(--c-border); }
        .as-btn-close-win { background:#fab387;color:#1e1e2e;font-size:11px;padding:5px 10px; }
        .as-btn-log        { background:#7c3aed;color:#fff;font-size:11px;padding:5px 10px; }
        .as-dark .as-btn-log { background:#cba6f7;color:#1e1e2e; }
        .as-btn-clear-log  { background:#ef4444;color:#fff;font-size:11px;padding:4px 10px; }
        .as-dark .as-btn-clear-log { background:#f38ba8;color:#1e1e2e; }
        .as-btn-fab-toggle { background:#7c3aed;color:#fff;font-size:11px;padding:5px 10px; }
        .as-dark .as-btn-fab-toggle { background:#cba6f7;color:#1e1e2e; }

        /* ── 状态栏 ── */
        #as-status {
            margin-top:10px;padding:7px 10px;
            background:var(--bg-item);border:1px solid var(--c-border);
            border-radius:6px;font-size:11px;color:var(--c-label);min-height:28px;
        }
        #as-bottom-row { display:flex;gap:7px;margin-top:8px;flex-wrap:wrap; }

        /* ── 悬浮按钮（默认隐藏，64×64） ── */
        #as-fab {
            position:fixed;z-index:2147483645;
            background:#7c3aed;color:#fff;
            border:none;border-radius:50%;
            width:64px;height:64px;font-size:30px;
            cursor:pointer;user-select:none;
            box-shadow:0 4px 16px rgba(0,0,0,.35);
            display:none;
            align-items:center;justify-content:center;
            transition:box-shadow .2s,opacity .2s;
        }
        #as-fab.as-fab-visible { display:flex; }
        #as-fab:hover { box-shadow:0 7px 22px rgba(0,0,0,.45); }
        #as-fab.dragging { opacity:.8;box-shadow:0 10px 30px rgba(0,0,0,.55); }

        #as-win-badge {
            position:fixed;z-index:2147483645;
            background:#fab387;color:#1e1e2e;
            border:none;border-radius:20px;
            padding:3px 9px;font-size:11px;font-weight:700;
            cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.3);
            font-family:'Segoe UI',sans-serif;
        }
        #as-win-badge:hover { opacity:.85; }

        /* ── 日志面板 ── */
        #as-log-footer {
            padding:10px 16px;border-top:1px solid var(--c-border);
            display:flex;align-items:center;justify-content:space-between;flex-shrink:0;
            background:var(--bg-head);border-radius:0 0 12px 12px;
        }
        #as-log-count { font-size:11px;color:var(--c-muted); }
        .as-log-entry {
            border-left:3px solid var(--c-border);padding:6px 10px;margin-bottom:6px;
            background:var(--bg-log-entry);border-radius:0 6px 6px 0;
        }
        .as-log-open   { border-color:#16a34a; }
        .as-log-skip   { border-color:#f59e0b; }
        .as-log-info   { border-color:#2563eb; }
        .as-log-reset  { border-color:#ef4444; }
        .as-log-save   { border-color:#7c3aed; }
        .as-log-close  { border-color:#fab387; }
        .as-dark .as-log-open  { border-color:#a6e3a1; }
        .as-dark .as-log-info  { border-color:#89b4fa; }
        .as-dark .as-log-skip  { border-color:#f9e2af; }
        .as-dark .as-log-save  { border-color:#cba6f7; }
        .as-dark .as-log-close { border-color:#fab387; }
        .as-log-time { font-size:10px;color:var(--c-muted);margin-bottom:3px; }
        .as-log-msg  { font-size:11px;color:var(--c-text); }
        .as-log-url  { font-size:11px;color:#2563eb;word-break:break-all;margin-top:2px; }
        .as-dark .as-log-url { color:#89b4fa; }
        #as-log-empty { color:var(--c-muted);font-size:12px;text-align:center;padding:24px 0; }
    `);

    // ─── 主题工具函数 ─────────────────────────────────────────────
    function applyTheme(overlayEl, theme) {
        if (theme === 'dark') {
            overlayEl.classList.add('as-dark');
        } else {
            overlayEl.classList.remove('as-dark');
        }
    }

    function makeThemeBtn(overlayEl, currentTheme, btnId = 'as-theme-btn') {
        const btn = document.createElement('button');
        btn.id = btnId;
        btn.title = '切换主题';
        btn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        btn.addEventListener('click', async () => {
            const isDark = overlayEl.classList.toggle('as-dark');
            btn.textContent = isDark ? '☀️' : '🌙';
            await saveTheme(isDark ? 'dark' : 'light');
        });
        return btn;
    }

    // ─── FAB 显示/隐藏 ───────────────────────────────────────────
    function setFabVisible(visible) {
        fabVisible = visible;
        const fab = document.getElementById('as-fab');
        if (!fab) return;
        if (visible) {
            fab.classList.add('as-fab-visible');
        } else {
            fab.classList.remove('as-fab-visible');
        }
        positionBadge();
        const toggleBtn = document.getElementById('as-fab-toggle-btn');
        if (toggleBtn) {
            toggleBtn.textContent = visible ? '🙈 隐藏图标' : '👁 显示图标';
        }
    }

    function toggleFab() {
        setFabVisible(!fabVisible);
    }

    // ─── 集中到单窗口：使用 Blob URL 打开一个启动页 ──────────────
    function openAllInOneWindow(urlList) {
        if (!urlList.length) return null;

        const urlsJson = JSON.stringify(urlList);
        const html = `<!doctype html><html><head>
<meta charset="utf-8">
<title>签到启动页</title>
<style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;
height:100vh;margin:0;background:#1e1e2e;color:#cdd6f4;flex-direction:column;gap:12px;}
p{margin:0;font-size:14px;}small{color:#6c7086;font-size:12px;}</style>
</head><body>
<p>⏰ 签到中，已打开 <b id="n">0</b> / <b id="t">0</b> 个标签页…</p>
<small>所有标签打开后可关闭本页</small>
<script>
(function(){
  var urls = ${urlsJson};
  document.getElementById('t').textContent = urls.length;
  var i = 0;
  function next(){
    if(i >= urls.length){ document.querySelector('p').textContent = '✅ 已全部打开，可关闭本页'; return; }
    window.open(urls[i], '_blank');
    i++;
    document.getElementById('n').textContent = i;
    setTimeout(next, 120);
  }
  next();
})();
<\/script></body></html>`;

        const blob = new Blob([html], { type: 'text/html' });
        const blobUrl = URL.createObjectURL(blob);
        const w = window.open(blobUrl, '_blank',
            'resizable=yes,scrollbars=yes,width=480,height=220');
        setTimeout(() => URL.revokeObjectURL(blobUrl), 8000);

        if (!w) {
            GM_log(`${LOG_PREFIX} 单窗口弹出被拦截，降级为后台标签`);
            urlList.forEach(u =>
                GM_openInTab(u, { active: false, insert: true, setParent: true }));
            return null;
        }
        return w;
    }

    // ─── 核心打开逻辑（页面加载和轮询共用） ──────────────────────
    async function tryOpenUrls(silent) {
        const urls = await getUrls();
        const time = await getTime();
        const dates = await getDates();
        const mode = await getMode();
        const periodKey = getPeriodKey();

        if (nowMinBeijing() < hhmm2min(time)) {
            GM_log(`${LOG_PREFIX} 北京时间未到触发时间 ${time}，跳过。`);
            if (!silent) {
                await addLog('skip', `页面加载时北京时间未到触发时间 ${time}，本次跳过`);
            }
            return false;
        }

        // 只处理已启用（enabled !== false）且本期次未打开的 URL
        const pending = urls.filter(item => item.enabled !== false && dates[item.url] !== periodKey);
        if (!pending.length) {
            GM_log(`${LOG_PREFIX} 本期次所有已启用网址已打开过，跳过。`);
            if (!silent) {
                await addLog('skip', `本期次（${periodKey}）所有已启用网址已打开过，跳过`);
            }
            return false;
        }

        if (mode === 'single-window') {
            const urlList = pending.map(item => item.url);
            const w = openAllInOneWindow(urlList);
            if (w) openedWindows.push(w);
            for (const item of pending) {
                dates[item.url] = periodKey;
                await addLog('open',
                    silent ? '轮询触发，已打开 [集中单窗口]' : '已打开 [集中单窗口]',
                    item.url);
            }
            await saveDates(dates);
            updateWinBadge();
        } else {
            for (const item of pending) {
                GM_log(`${LOG_PREFIX} 打开 [${mode}]: ${item.url}`);
                if (mode === 'window') {
                    const w = window.open(item.url, '_blank',
                        'resizable=yes,scrollbars=yes,width=1280,height=800');
                    if (w) {
                        openedWindows.push(w);
                    } else {
                        GM_log(`${LOG_PREFIX} 新窗口被拦截，降级为后台标签: ${item.url}`);
                        GM_openInTab(item.url, { active: false, insert: true, setParent: true });
                    }
                } else {
                    GM_openInTab(item.url, { active: false, insert: true, setParent: true });
                }
                dates[item.url] = periodKey;
                const modeLabel = mode === 'window' ? '新窗口' : '后台标签';
                await addLog('open',
                    silent ? `轮询触发，已打开 [${modeLabel}]` : `已打开 [${modeLabel}]`,
                    item.url);
            }
            await saveDates(dates);
            updateWinBadge();
        }
        return true;
    }

    async function runDailyCheck() {
        await tryOpenUrls(false);
    }

    function startPoller() {
        setInterval(async () => {
            await tryOpenUrls(true);
        }, POLL_INTERVAL_MS);
    }

    // ─── 关闭新窗口徽标 ───────────────────────────────────────────
    function updateWinBadge() {
        const alive = openedWindows.filter(w => w && !w.closed);
        openedWindows = alive;
        let badge = document.getElementById('as-win-badge');
        if (alive.length === 0) { if (badge) badge.remove(); return; }
        if (!badge) {
            badge = document.createElement('button');
            badge.id = 'as-win-badge';
            badge.addEventListener('click', closeAllWindows);
            document.documentElement.appendChild(badge);
            positionBadge();
        }
        badge.textContent = `✕ 关闭新窗口 (${alive.length})`;
    }

    function positionBadge() {
        const fab = document.getElementById('as-fab');
        const badge = document.getElementById('as-win-badge');
        if (!fab || !badge) return;
        if (!fabVisible) {
            badge.style.bottom = '20px';
            badge.style.right = '20px';
            badge.style.top = 'auto';
            badge.style.left = 'auto';
            return;
        }
        const r = fab.getBoundingClientRect();
        badge.style.top = (r.bottom + 6) + 'px';
        badge.style.left = r.left + 'px';
        badge.style.bottom = 'auto';
        badge.style.right = 'auto';
    }

    async function closeAllWindows() {
        const count = openedWindows.filter(w => w && !w.closed).length;
        openedWindows.forEach(w => { try { if (!w.closed) w.close(); } catch (_) {} });
        openedWindows = [];
        updateWinBadge();
        if (count > 0) {
            await addLog('close', `已关闭 ${count} 个新窗口`);
        }
    }

    // ─── 日志面板 ─────────────────────────────────────────────────
    async function openLogPanel() {
        if (document.getElementById('as-log-overlay')) {
            document.getElementById('as-log-overlay').remove(); return;
        }
        const [logs, theme] = await Promise.all([getLogs(), getTheme()]);

        const overlay = document.createElement('div');
        overlay.id = 'as-log-overlay';
        applyTheme(overlay, theme);

        const panel = document.createElement('div');
        panel.id = 'as-log-panel';
        panel.innerHTML = `
            <div id="as-log-head">
                <h2>📋 操作日志</h2>
                <div class="as-head-actions">
                    <button id="as-log-x">✕</button>
                </div>
            </div>
            <div id="as-log-body"></div>
            <div id="as-log-footer">
                <span id="as-log-count">共 ${logs.length} 条</span>
                <button class="as-btn as-btn-clear-log" id="as-clear-log-btn">清空日志</button>
            </div>
        `;
        overlay.appendChild(panel);
        document.documentElement.appendChild(overlay);

        const headActions = panel.querySelector('.as-head-actions');
        headActions.insertBefore(
            makeThemeBtn(overlay, theme, 'as-log-theme-btn'),
            panel.querySelector('#as-log-x')
        );

        const body = panel.querySelector('#as-log-body');

        const typeLabel = {
            open: '打开网址',
            skip: '跳过',
            info: '信息',
            save: '保存设置',
            reset: '重置记录',
            close: '关闭窗口',
        };

        function renderLogs(list) {
            body.innerHTML = '';
            if (!list.length) {
                body.innerHTML = '<div id="as-log-empty">暂无日志记录</div>';
                return;
            }
            list.forEach(entry => {
                const type = entry.type || 'info';
                const div = document.createElement('div');
                div.className = `as-log-entry as-log-${type}`;
                const label = typeLabel[type] || type;
                div.innerHTML = `
                    <div class="as-log-time">${entry.time ? fmtBJ(entry.time) : '—'} · <b>${escHtml(label)}</b></div>
                    <div class="as-log-msg">${escHtml(entry.msg || '')}</div>
                    ${entry.url ? `<div class="as-log-url">${escHtml(entry.url)}</div>` : ''}
                `;
                body.appendChild(div);
            });
        }
        renderLogs(logs);

        panel.querySelector('#as-log-x').addEventListener('click', () => overlay.remove());
        overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
        panel.querySelector('#as-clear-log-btn').addEventListener('click', async () => {
            await saveLogs([]);
            renderLogs([]);
            panel.querySelector('#as-log-count').textContent = '共 0 条';
        });
    }

    // ─── 设置面板 ─────────────────────────────────────────────────
    async function openPanel() {
        if (document.getElementById('as-overlay')) {
            document.getElementById('as-overlay').remove(); return;
        }
        const [urls, time, dates, mode, theme] = await Promise.all([
            getUrls(), getTime(), getDates(), getMode(), getTheme()
        ]);
        const periodKey = getPeriodKey();
        // 兼容旧数据：enabled 字段缺失时默认为 true
        let localUrls = urls.map(u => ({ enabled: true, ...u }));
        let localMode = mode;

        const overlay = document.createElement('div');
        overlay.id = 'as-overlay';
        applyTheme(overlay, theme);

        const modeHint = {
            'tab': '在当前窗口静默新开标签页',
            'window': '每个网址各自弹出一个新窗口',
            'single-window': '所有网址集中到同一个新窗口的多个标签页中',
        };

        const panel = document.createElement('div');
        panel.id = 'as-panel';
        overlay.appendChild(panel);
        document.documentElement.appendChild(overlay);

        panel.innerHTML = `
            <div id="as-panel-head">
                <h2>⏰ 每日自动签到 · 设置</h2>
                <div class="as-head-actions">
                    <button id="as-theme-btn" title="切换主题">${theme === 'dark' ? '☀️' : '🌙'}</button>
                    <button id="as-x">✕</button>
                </div>
            </div>
            <div id="as-panel-body">
                <p class="as-label">每日触发时间（北京时间，以08:00为新一天起点）</p>
                <div id="as-time-row">
                    <input id="as-time-in" type="time" value="${escHtml(time)}" />
                    <span class="as-hint">到达此时间后，首次访问任意网页时触发；页面不关闭时轮询自动触发</span>
                </div>
                <p class="as-label">打开方式（全局）</p>
                <div id="as-mode-row">
                    <div class="as-global-mode">
                        <button class="as-gmode-btn ${localMode === 'tab' ? 'active-tab' : ''}" data-m="tab">后台标签页</button>
                        <button class="as-gmode-btn ${localMode === 'single-window' ? 'active-single' : ''}" data-m="single-window">集中到单窗口</button>
                        <button class="as-gmode-btn ${localMode === 'window' ? 'active-win' : ''}" data-m="window">各自独立窗口</button>
                    </div>
                    <span class="as-hint" id="as-mode-hint">${modeHint[localMode]}</span>
                </div>
                <p class="as-label">签到网址列表 <span class="as-hint" style="text-transform:none;letter-spacing:0">（勾选 = 启用自动打开）</span></p>
                <ul id="as-url-list"></ul>
                <div id="as-add-row">
                    <input id="as-url-in" type="url" placeholder="https://example.com/signin" />
                    <button class="as-btn as-btn-add" id="as-add-btn">+ 添加</button>
                </div>
                <button class="as-btn as-btn-save" id="as-save-btn">保存设置</button>
                <div id="as-bottom-row">
                    <button class="as-btn as-btn-reset" id="as-reset-btn">重置今日记录</button>
                    <button class="as-btn as-btn-close-win" id="as-close-win-btn">关闭所有新窗口</button>
                    <button class="as-btn as-btn-log"        id="as-log-btn">📋 查看日志</button>
                    <button class="as-btn as-btn-fab-toggle" id="as-fab-toggle-btn">${fabVisible ? '🙈 隐藏图标' : '👁 显示图标'}</button>
                </div>
                <div id="as-status">就绪。当前期次：${escHtml(periodKey)}</div>
            </div>
        `;

        // 主题切换
        panel.querySelector('#as-theme-btn').addEventListener('click', async () => {
            const isDark = overlay.classList.toggle('as-dark');
            panel.querySelector('#as-theme-btn').textContent = isDark ? '☀️' : '🌙';
            await saveTheme(isDark ? 'dark' : 'light');
        });

        const ul = panel.querySelector('#as-url-list');
        const urlIn = panel.querySelector('#as-url-in');
        const status = panel.querySelector('#as-status');

        // 全局模式切换
        panel.querySelectorAll('.as-gmode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                localMode = btn.dataset.m;
                panel.querySelectorAll('.as-gmode-btn').forEach(b => {
                    b.classList.remove('active-tab', 'active-win', 'active-single');
                });
                const cls = { tab: 'active-tab', window: 'active-win', 'single-window': 'active-single' };
                btn.classList.add(cls[localMode]);
                panel.querySelector('#as-mode-hint').textContent = modeHint[localMode];
            });
        });

        // FAB 显示/隐藏切换
        panel.querySelector('#as-fab-toggle-btn').addEventListener('click', () => {
            toggleFab();
        });

        function renderList() {
            ul.innerHTML = '';
            localUrls.forEach((item, i) => {
                const done = dates[item.url] === periodKey;
                const enabled = item.enabled !== false;
                const li = document.createElement('li');
                if (!enabled) li.classList.add('as-item-disabled');

                // 复选框
                const cb = document.createElement('input');
                cb.type = 'checkbox';
                cb.className = 'as-url-cb';
                cb.checked = enabled;
                cb.title = enabled ? '点击禁用此网址（不再自动打开）' : '点击启用此网址';
                cb.addEventListener('change', () => {
                    localUrls[i].enabled = cb.checked;
                    li.classList.toggle('as-item-disabled', !cb.checked);
                    // 同步更新状态徽章文字
                    const badge = li.querySelector('.as-badge');
                    if (!cb.checked) {
                        badge.className = 'as-badge as-badge-off';
                        badge.textContent = '已禁用';
                    } else {
                        const isDone = dates[item.url] === periodKey;
                        badge.className = `as-badge ${isDone ? 'as-badge-done' : 'as-badge-wait'}`;
                        badge.textContent = isDone ? '✔ 已打开' : '待触发';
                    }
                });
                li.appendChild(cb);

                // URL 文字
                const urlSpan = document.createElement('span');
                urlSpan.className = 'as-url-text';
                urlSpan.title = item.url;
                urlSpan.textContent = item.url;
                li.appendChild(urlSpan);

                // 状态徽章
                const badge = document.createElement('span');
                if (!enabled) {
                    badge.className = 'as-badge as-badge-off';
                    badge.textContent = '已禁用';
                } else {
                    badge.className = `as-badge ${done ? 'as-badge-done' : 'as-badge-wait'}`;
                    badge.textContent = done ? '✔ 已打开' : '待触发';
                }
                li.appendChild(badge);

                // 立即打开按钮
                const openBtn = document.createElement('button');
                openBtn.className = 'as-open-btn';
                openBtn.dataset.i = i;
                openBtn.title = '立即打开此网址';
                openBtn.textContent = '▶ 打开';
                openBtn.addEventListener('click', async () => {
                    if (localMode === 'single-window') {
                        const w = openAllInOneWindow([item.url]);
                        if (w) openedWindows.push(w);
                    } else if (localMode === 'window') {
                        const w = window.open(item.url, '_blank',
                            'resizable=yes,scrollbars=yes,width=1280,height=800');
                        if (w) openedWindows.push(w);
                        else GM_openInTab(item.url, { active: false, insert: true, setParent: true });
                    } else {
                        GM_openInTab(item.url, { active: false, insert: true, setParent: true });
                    }
                    dates[item.url] = periodKey;
                    await saveDates(dates);
                    const modeLabel = { tab: '后台标签', window: '独立窗口', 'single-window': '集中单窗口' };
                    await addLog('open', `手动打开 [${modeLabel[localMode]}]`, item.url);
                    updateWinBadge();
                    renderList();
                    status.textContent = `✔ 已手动打开：${item.url}`;
                });
                li.appendChild(openBtn);

                // 删除按钮
                const delBtn = document.createElement('button');
                delBtn.className = 'as-del';
                delBtn.dataset.i = i;
                delBtn.title = '删除';
                delBtn.textContent = '✕';
                delBtn.addEventListener('click', () => {
                    localUrls.splice(i, 1);
                    renderList();
                });
                li.appendChild(delBtn);

                ul.appendChild(li);
            });
        }
        renderList();

        // 添加（新网址默认启用）
        panel.querySelector('#as-add-btn').addEventListener('click', () => {
            const v = urlIn.value.trim();
            if (!v) return;
            try { new URL(v); } catch (_) { status.textContent = '❌ 网址格式不正确'; return; }
            if (localUrls.find(u => u.url === v)) { status.textContent = '⚠️ 已存在该网址'; return; }
            localUrls.push({ url: v, enabled: true });
            urlIn.value = '';
            renderList();
            status.textContent = '✔ 已添加，记得保存';
        });
        urlIn.addEventListener('keydown', e => { if (e.key === 'Enter') panel.querySelector('#as-add-btn').click(); });

        // 保存
        panel.querySelector('#as-save-btn').addEventListener('click', async () => {
            const t = panel.querySelector('#as-time-in').value || DEFAULT_TIME;
            await saveUrls(localUrls);
            await saveTime(t);
            await saveMode(localMode);
            const modeLabel = { tab: '后台标签', window: '各自新窗口', 'single-window': '集中单窗口' };
            const enabledCount = localUrls.filter(u => u.enabled !== false).length;
            const msg = `已保存 ${localUrls.length} 条网址（${enabledCount} 条启用），触发时间 ${t}，打开方式：${modeLabel[localMode]}`;
            status.textContent = `✅ ${msg}`;
            await addLog('save', msg);
        });

        // 重置
        panel.querySelector('#as-reset-btn').addEventListener('click', async () => {
            await saveDates({});
            status.textContent = '🔄 今日记录已清除，下次轮询或页面加载时将重新触发';
            await addLog('reset', `手动重置今日记录（期次 ${periodKey}），下次轮询或页面加载时将重新触发`);
        });

        // 关闭新窗口
        panel.querySelector('#as-close-win-btn').addEventListener('click', async () => {
            const count = openedWindows.filter(w => w && !w.closed).length;
            await closeAllWindows();
            if (count > 0) {
                status.textContent = `✔ 已关闭 ${count} 个新窗口`;
            } else {
                status.textContent = '⚠️ 没有可关闭的新窗口（后台标签页无法通过此按钮关闭）';
            }
        });

        // 查看日志
        panel.querySelector('#as-log-btn').addEventListener('click', () => {
            overlay.remove();
            openLogPanel();
        });

        panel.querySelector('#as-x').addEventListener('click', () => overlay.remove());
        overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    }

    // ─── 可拖拽悬浮按钮 ───────────────────────────────────────────
    async function addFab() {
        const fab = document.createElement('button');
        fab.id = 'as-fab';
        fab.title = '每日签到设置';
        fab.textContent = '⏰';

        fab.classList.remove('as-fab-visible');

        const savedPos = await getBtnPos();
        if (savedPos) {
            fab.style.left = savedPos.left;
            fab.style.top = savedPos.top;
        } else {
            fab.style.right = '20px';
            fab.style.top = '20px';
        }
        document.documentElement.appendChild(fab);

        let isDragging = false, moved = false, ox = 0, oy = 0, startX = 0, startY = 0;
        const DRAG_THRESHOLD = 6;

        fab.addEventListener('mousedown', e => {
            isDragging = true;
            moved = false;
            const r = fab.getBoundingClientRect();
            ox = e.clientX - r.left;
            oy = e.clientY - r.top;
            startX = e.clientX;
            startY = e.clientY;
            e.preventDefault();
        });

        document.addEventListener('mousemove', e => {
            if (!isDragging) return;
            const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
            if (dist < DRAG_THRESHOLD) return;
            if (!moved) fab.classList.add('dragging');
            moved = true;
            let x = e.clientX - ox;
            let y = e.clientY - oy;
            x = Math.max(0, Math.min(window.innerWidth - fab.offsetWidth, x));
            y = Math.max(0, Math.min(window.innerHeight - fab.offsetHeight, y));
            fab.style.left = x + 'px';
            fab.style.top = y + 'px';
            fab.style.right = 'auto';
            fab.style.bottom = 'auto';
            positionBadge();
        });

        document.addEventListener('mouseup', async () => {
            if (!isDragging) return;
            isDragging = false;
            fab.classList.remove('dragging');
            if (moved) {
                await saveBtnPos({ left: fab.style.left, top: fab.style.top });
            }
        });

        fab.addEventListener('click', () => {
            if (moved) { moved = false; return; }
            openPanel();
        });
    }

    // ─── 主入口 ───────────────────────────────────────────────────
    GM_registerMenuCommand('⚙️ 打开签到设置', openPanel);
    GM_registerMenuCommand('📋 查看操作日志', openLogPanel);
    GM_registerMenuCommand('👁 显示/隐藏 悬浮图标', toggleFab);

    (async function main() {
        if (document.body) {
            await addFab();
        } else {
            await new Promise(resolve => {
                document.addEventListener('DOMContentLoaded', async () => {
                    await addFab();
                    resolve();
                });
            });
        }
        await runDailyCheck();
        startPoller();
    })();

})();
