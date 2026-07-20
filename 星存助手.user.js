// ==UserScript==
// @name         星存助手
// @namespace    https://git.acheng.eu.cc/acheng/xingcunzhushou
// @version      0.9.9
// @description  内容保存脚本 v0.9.9 Raw版 - 支持公众号/知乎/微博/X/YouTube/头条/抖音/B站/人民日报/澎湃/36氪/少数派/掘金/IT之家/Trae社区/飞书云文档/Discourse论坛/V2EX/Linux.do/NodeSeek/51吃瓜网/x6d3i等，悬浮按钮长按菜单，保存到飞书多维表格/Obsidian/百度网盘，含翻译面板，Raw直出无需懒加载，适配Edge/Chrome+脚本猫
// @author       阿成
// @icon         data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect x='8' y='8' width='48' height='48' rx='10' fill='%231f6feb'/><path d='M20 22h24v6H20zm0 10h24v6H20zm0 10h16v6H20z' fill='white'/><path d='M46 42l6 6 10-12' stroke='white' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>
// @match        https://linux.do/*
// @match        https://meta.discourse.org/*
// @match        https://users.rust-lang.org/*
// @match        https://forums.docker.com/*
// @match        https://community.openai.com/*
// @match        https://discuss.python.org/*
// @match        https://*.discourse.group/*
// @match        https://forum.obsidian.md/*
// @match        https://community.cloudflare.com/*
// @match        https://forum.cursor.com/*
// @match        https://community.render.com/*
// @match        https://community.fly.io/*
// @match        https://discourse.haskell.org/*
// @match        https://discourse.julialang.org/*
// @match        https://forum.rclone.org/*
// @match        https://discourse.nixos.org/*
// @match        https://discuss.kotlinlang.org/*
// @match        https://forum.gitlab.com/*
// @match        https://discuss.elastic.co/*
// @match        https://discuss.hashicorp.com/*
// @match        https://community.grafana.com/*
// @match        https://discuss.codecademy.com/*
// @match        https://community.letsencrypt.org/*
// @match        https://discuss.atom.io/*
// @match        https://forum.proxmox.com/*
// @match        https://discuss.rubyonrails.org/*
// @match        https://community.home-assistant.io/*
// @match        https://forum.unity.com/*
// @match        https://forums.unrealengine.com/*
// @match        https://discourse.llvm.org/*
// @match        https://discuss.ocaml.org/*
// @match        https://elixirforum.com/*
// @match        https://discuss.flarum.org/*
// @match        https://community.paperspace.com/*
// @match        https://forum.seafile.com/*
// @match        https://forum.syncthing.net/*
// @match        https://community.hivemq.com/*
// @match        https://forum.owncloud.com/*
// @match        https://community.bitwarden.com/*
// @match        https://discuss.emberjs.com/*
// @match        https://mp.weixin.qq.com/*
// @match        https://*.weixin.qq.com/*
// @match        https://zhuanlan.zhihu.com/*
// @match        https://www.zhihu.com/question/*
// @match        https://www.zhihu.com/p/*
// @match        https://daily.zhihu.com/*
// @match        https://*.zhihu.com/*
// @match        https://weibo.com/*
// @match        https://www.weibo.com/*
// @match        https://m.weibo.cn/*
// @match        https://weibo.cn/*
// @match        https://*.weibo.com/*
// @match        https://*.weibo.cn/*
// @match        https://x.com/*
// @match        https://twitter.com/*
// --- 新闻媒体 ---
// @match        https://*.people.com.cn/*
// @match        https://people.com.cn/*
// @match        https://*.rmrb.com.cn/*
// @match        https://rmrb.com.cn/*
// @match        https://www.xinhuanet.com/*
// @match        https://*.xinhuanet.com/*
// @match        https://*.news.cn/*
// @match        https://*.thepaper.cn/*
// @match        https://thepaper.cn/*
// --- 科技/效率/开发 ---
// @match        https://36kr.com/*
// @match        https://www.36kr.com/*
// @match        https://sspai.com/*
// @match        https://juejin.cn/*
// @match        https://*.ithome.com/*
// @match        https://ithome.com/*
// --- 头条/抖音/B站/YouTube ---
// @match        https://*.toutiao.com/*
// @match        https://www.douyin.com/*
// @match        https://www.bilibili.com/read/*
// @match        https://www.bilibili.com/opus/*
// @match        https://www.youtube.com/watch*
// @match        https://m.youtube.com/watch*
// @match        https://www.youtube.com/shorts/*
// --- Trae社区 ---
// @match        https://trae.ai/*
// @match        https://www.trae.ai/*
// @match        https://trae.com.cn/*
// @match        https://www.trae.com.cn/*
// --- 飞书云文档 ---
// @match        https://*.feishu.cn/wiki/*
// @match        https://*.feishu.cn/docx/*
// @match        https://*.feishu.cn/docs/*
// @match        https://*.feishu.cn/minutes/*
// @match        https://*.feishu.cn/sheets/*
// @match        https://*.feishu.cn/drive/*
// @match        https://*.feishu.cn/base/*
// @match        https://*.feishu.cn/mindnotes/*
// @match        https://*.larksuite.com/wiki/*
// @match        https://*.larksuite.com/docx/*
// @match        https://*.larksuite.com/docs/*
// --- 中文 Discourse 论坛 ---
// @match        https://nodeseek.com/*
// @match        https://www.nodeseek.com/*
// @match        https://1panel.cn/forum/*
// @match        https://bbs.1panel.cn/*
// @match        https://talkgpt.cn/*
// @match        https://hostpost.org/*
// @match        https://v2ex.com/*
// @match        https://www.v2ex.com/*
// @match        https://learnku.com/*
// @match        https://testerhome.com/*
// @match        https://ruby-china.org/*
// @match        https://www.ruby-china.org/*
// @match        https://discourse.naaln.com/*
// @match        https://discuss.grin.mw/*
// @match        https://forum.taichi-lang.org/*
// --- 国际开发工具/云服务 ---
// @match        https://discourse.ubuntu.com/*
// @match        https://discourse.mozilla.org/*
// @match        https://discourse.ros.org/*
// @match        https://discourse.wicg.io/*
// @match        https://discourse.threejs.org/*
// @match        https://discourse.gohugo.io/*
// @match        https://discourse.pi-hole.net/*
// @match        https://forum.vuejs.org/*
// @match        https://forum.pine64.org/*
// @match        https://forum.logseq.com/*
// @match        https://forum.affinity.serif.com/*
// @match        https://forum.standardnotes.com/*
// @match        https://forum.micro.blog/*
// @match        https://forum.slicer.org/*
// @match        https://forum.freecodecamp.org/*
// @match        https://discuss.ipfs.io/*
// @match        https://discuss.dev.to/*
// @match        https://discuss.gradle.org/*
// @match        https://community.n8n.io/*
// @match        https://community.retool.com/*
// @match        https://community.supabase.com/*
// @match        https://community.openhab.org/*
// @match        https://community.make.com/*
// @match        https://community.zapier.com/*
// @match        https://community.appsmith.com/*
// @match        https://community.descript.com/*
// @match        https://community.linear.app/*
// @match        https://community.airtable.com/*
// @match        https://community.atlassian.com/*
// @match        https://community.intersystems.com/*
// @match        https://community.ifixit.com/*
// @match        https://talk.jekyllrb.com/*
// @match        https://talk.commonmark.org/*
// @match        https://ask.fedoraproject.org/*
// @include      *://*discourse*/*
// @include      *://*forum*/*
// @include      *://*discuss*/*
// @include      *://*community*/*
// @include      *://*community*/*
// --- Raw版新增论坛 ---
// @match        https://www.1point3acres.com/*
// @match        https://1point3acres.com/*
// @match        https://www.v2ex.com/*
// @match        https://v2ex.com/*
// @match        https://www.nodeseek.com/*
// @match        https://nodeseek.com/*
// @match        https://www.hostloc.com/*
// @match        https://hostloc.com/*
// @match        https://www.right.com.cn/forum/*
// @match        https://right.com.cn/forum/*
// @match        https://www.chiphell.com/*
// @match        https://chiphell.com/*
// @match        https://bbs.nga.cn/*
// @match        https://bbs.nga.cn/read.php*
// --- 51吃瓜网/x6d3i ---
// @match        https://95wiki7.drbymvei.cc/*
// @match        https://*.drbymvei.cc/*
// @match        https://95wiki7.gwzyscfz.cc/*
// @match        https://*.gwzyscfz.cc/*
// @match        https://51cg1.com/*
// @match        https://51cg*.com/*
// @match        https://51cge*.com/*
// @match        https://51cge2.com/*
// @match        https://*.51cge2.com/*
// @match        https://chigua.com/*
// @match        https://*.chigua.com/*
// @match        https://51hl.cc/*
// @match        https://*.51hl.cc/*
// @match        https://51cl.cc/*
// @match        https://*.51cl.cc/*
// @match        https://*.7ngja91iap.cc/*
// @match        https://www.x6d3i.top/*
// @match        https://x6d3i.top/*
// @match        https://*.x6d3i.top/*
// @require      https://cdn.jsdelivr.net/npm/turndown@7.1.2/dist/turndown.js
// @require      https://cdn.jsdelivr.net/npm/marked@9.1.0/marked.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @grant        GM_setClipboard
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @include      *://*/*
// @connect      *
// @run-at       document-end
// @license      MIT
// @downloadURL  https://git.acheng.eu.cc/acheng/xingcunzhushou/raw/branch/main/xingcunzhushou.user.js
// @updateURL    https://git.acheng.eu.cc/acheng/xingcunzhushou/raw/branch/main/xingcunzhushou.user.js
// ==/UserScript==

(function() {
  'use strict';

  // ============================================================
  // 模块1: 配置管理 (ConfigModule)
  // ============================================================
  const ConfigModule = (function() {
    const DEFAULT_CONFIG = {
      // 保存目标
      saveToObsidian: true,
      saveToFeishu: false,

      // Obsidian 设置
      vaultName: '',
      folderPath: 'Discourse收集箱',
      useAdvancedUri: true,
      saveConflictMode: 'overwrite', // overwrite | timestamp | prompt(重名时询问，仅百度网盘)
      // 飞书设置
      feishuApiDomain: 'feishu',
      feishuAppId: '',
      feishuAppSecret: '',
      feishuAppToken: '',
      feishuTableId: '',
      feishuUploadContent: true,
      feishuUploadContentAsCloudDoc: false,
      feishuUploadAttachment: false,
      feishuUploadHtml: false,

      // 内容设置
      addMetadata: true,
      addCallout: true,    // 是否添加 > [!info] 帖子信息 Callout 块
      calloutFollowMeta: true, // 字段跟随元数据设置
      // Callout 各字段开关和自定义名称
      calloutField_url: true,
      calloutFieldName_url: '来源',
      calloutField_title: true,
      calloutFieldName_title: '标题',
      calloutField_author: true,
      calloutFieldName_author: '作者',
      calloutAuthorLink: true, // 作者字段附带主页链接
      calloutField_category: true,
      calloutFieldName_category: '类别',
      calloutField_tags: true,
      calloutFieldName_tags: 'tags',
      calloutField_time: true,
      calloutFieldName_time: '保存时间',
      calloutField_platform: true,
      calloutFieldName_platform: '平台',
      calloutField_commentCount: true,
      calloutFieldName_commentCount: '评论数',
      calloutField_reactions: true,
      calloutFieldName_reactions: '反应',
      calloutField_boosts: true,
      calloutFieldName_boosts: '打call',
      includeImages: true,
      embedImages: false,  // 将图片嵌入为 Base64（解决手机端图片无法显示问题）

      // 下载图片/视频到本地 Vault（通过 Obsidian Local REST API 插件）
      downloadImages: false,
      downloadVideos: true,
      restApiKey: '',
      restApiPort: 27124,
      mediaFolderName: 'media',
      mediaFolderPerTitle: false,  // 按帖子标题建立子文件夹（{title}占位）

      // 评论设置
      saveComments: false,
      commentCount: 100,
      saveAllComments: false,  // 与 useFloorRange 互斥
      foldComments: false,
      saveCommentReactions: false,  // 评论的反应默认关闭
      saveCommentBoosts: false,    // 评论的Boosts默认关闭

      // 楼层范围（与 saveAllComments 互斥）
      useFloorRange: false,
      floorFrom: 1,
      floorTo: 100,

      // 自定义站点（逗号分隔的域名列表，用于检测不到的自建 Discourse）
      customSites: '',
      // 自定义51吃瓜域名（逗号分隔，51吃瓜经常换域名，加在这里不用等脚本更新）
      cgCustomSites: '',

      // 各站点启用/禁用开关（true=启用，false=禁用）
      siteEnabled_wechat: true,
      siteEnabled_zhihu: true,
      siteEnabled_weibo: true,
      siteEnabled_x: true,
      siteEnabled_discourse: true,
      siteEnabled_people: true,
      siteEnabled_xinhua: true,
      siteEnabled_thepaper: true,
      siteEnabled_36kr: true,
      siteEnabled_sspai: true,
      siteEnabled_juejin: true,
      siteEnabled_ithome: true,
      siteEnabled_toutiao: true,
      siteEnabled_douyin: true,
      siteEnabled_bilibili: true,
      siteEnabled_youtube: true,
      siteEnabled_trae: true,
      siteEnabled_feishu_doc: true,
      siteEnabled_51cg: true,
      siteEnabled_x6d3i: true,

      // 按平台分文件夹
      usePlatformFolders: true, // 是否启用按平台分目录（默认开启）
      platformFolders: {
        wechat: '公众号',
        zhihu: '知乎',
        weibo: '微博',
        x: 'X-Twitter',
        youtube: 'YouTube',
        people: '新闻/人民日报',
        xinhua: '新闻/新华网',
        thepaper: '新闻/澎湃',
        '36kr': '科技/36氪',
        sspai: '科技/少数派',
        juejin: '技术/掘金',
        ithome: '科技/IT之家',
        toutiao: '头条',
        douyin: '抖音',
        bilibili: 'B站',
        trae: '论坛/Trae',
        feishu_doc: '飞书/云文档',
        discourse: '论坛',
        '51cg': '51吃瓜网',
        x6d3i: 'x6d3i视频'
      },
      // 按站点细分文件夹（仅 Discourse 论坛类生效，覆盖 platformFolders.discourse 下的子路径）
      // 可按需修改目录名或留空（留空则自动取域名首段）
      discourseSiteFolders: {
        // 中文社区
        'linux.do': 'Linux.do',
        '1panel.cn': '1Panel',
        'hostpost.org': 'HostPost',
        'hostloc.com': 'HostLoc',
        'chiphell.com': 'Chiphell',
        'bbs.nga.cn': 'NGA',
        '1point3acres.com': '一亩三分地',
        'right.com.cn': '恩山论坛',
        'v2ex.com': 'V2EX',
        'nodeseek.com': 'NodeSeek',
        // Discourse 官方
        'meta.discourse.org': 'Discourse官方',
        // 编程语言
        'users.rust-lang.org': 'Rust',
        'forums.swift.org': 'Swift',
        'forum.golangbridge.org': 'Go',
        'discourse.julialang.org': 'Julia',
        'elixirforum.com': 'Elixir',
        'discourse.haskell.org': 'Haskell',
        'users.scala-lang.org': 'Scala',
        'discuss.ocaml.org': 'OCaml',
        'forum.crystal-lang.org': 'Crystal',
        'clojureverse.org': 'Clojure',
        'discourse.purescript.org': 'Purescript',
        'ziggit.dev': 'Zig',
        'discuss.kotlinlang.org': 'Kotlin',
        'discuss.rubyonrails.org': 'Rails',
        'discuss.emberjs.com': 'Ember',
        'discourse.llvm.org': 'LLVM',
        // AI / ML
        'community.openai.com': 'OpenAI',
        'discuss.huggingface.co': 'HuggingFace',
        'discuss.pytorch.org': 'PyTorch',
        // Web 框架
        'forum.djangoproject.com': 'Django',
        'forum.vuejs.org': 'Vue',
        'discourse.gohugo.io': 'Hugo',
        'discourse.threejs.org': 'Three.js',
        // DevOps / 云服务
        'forums.docker.com': 'Docker',
        'discuss.kubernetes.io': 'Kubernetes',
        'discuss.hashicorp.com': 'HashiCorp',
        'forum.ansible.com': 'Ansible',
        'forum.gitlab.com': 'GitLab',
        'discuss.circleci.com': 'CircleCI',
        'community.fly.io': 'Fly.io',
        'vercel.community': 'Vercel',
        'community.cloudflare.com': 'Cloudflare',
        // 数据库
        'discuss.elastic.co': 'Elastic',
        'forum.redis.io': 'Redis',
        'forum.cockroachlabs.com': 'CockroachDB',
        // 开源项目
        'discourse.ubuntu.com': 'Ubuntu',
        'discourse.nixos.org': 'NixOS',
        'discourse.mozilla.org': 'Mozilla',
        'discussion.fedoraproject.org': 'Fedora',
        'community.home-assistant.io': 'HA',
        'community.letsencrypt.org': 'LetsEncrypt',
        'community.grafana.com': 'Grafana',
        'forum.torproject.net': 'Tor',
        'forum.rclone.org': 'Rclone',
        // 游戏开发
        'forum.godotengine.org': 'Godot',
        'forum.defold.com': 'Defold',
        'phaser.discourse.group': 'Phaser',
        'devforum.roblox.com': 'Roblox',
        'forums.unrealengine.com': 'Unreal',
        'forum.unity.com': 'Unity',
        // 区块链 / Web3
        'ethresear.ch': 'Ethereum',
        'forum.polkadot.network': 'Polkadot',
        'forum.cosmos.network': 'Cosmos',
        'gov.near.org': 'Near',
        // 生产力工具
        'forum.obsidian.md': 'Obsidian',
        'discuss.logseq.com': 'Logseq',
        'forum.cursor.com': 'Cursor',
        'community.n8n.io': 'n8n',
        'community.supabase.com': 'Supabase',
        // 浏览器 / 安全
        'community.brave.com': 'Brave',
        'community.bitwarden.com': 'Bitwarden',
        // 其他
        'answers.netlify.com': 'Netlify',
        'forum.webflow.com': 'Webflow',
        'forum.freecodecamp.org': 'freeCodeCamp',
        'forum.proxmox.com': 'Proxmox',
        'community.linear.app': 'Linear',
        'community.appsmith.com': 'Appsmith',
        'testerhome.com': 'TesterHome',
        'forum.affinity.serif.com': 'Affinity',
        // Trae 社区
        'trae.com.cn': 'Trae',
        'trae.ai': 'Trae',
        // 需要登录的站点（登录后可用）
        'forums.envato.com': 'Envato',
        'community.revolut.com': 'Revolut',
        'discussions.unity.com': 'Unity讨论',
        // MongoDB / TimescaleDB（子路径型 Discourse）
        'mongodb.com': 'MongoDB',
        'timescale.com': 'TimescaleDB'
      },

      // 翻译设置
      enableTranslation: false,     // 默认关闭翻译
      transToLang: 'zh-CN',         // 翻译目标语言（auto=自动检测源语言）

      // 百度网盘备份设置
      saveToBaiduPan: false,
      baiduPanClientId: 'IGnQAQKyA1T2WblSYNlpCb3oTbeVorO1',
      baiduPanClientSecret: 'ppH8ptFNWUUId5wkxGSIknxTqHtJAbLW',
      baiduPanAppFolder: 'obsidian-sync',
      baiduPanVaultName: '精华帖子收集箱',
      baiduPanFolderPath: '',  // 远端子文件夹（空则按 OB folderPath）
      baiduPanToken: null      // { accessToken, refreshToken, expiresAt, scope, username }
    };

    function get(key) {
      if (key) {
        const value = GM_getValue(key, DEFAULT_CONFIG[key]);
        console.log(`[Discourse Saver] Config.get('${key}') = '${value}'`);
        return value;
      }
      // 获取全部配置
      const config = {};
      for (const k in DEFAULT_CONFIG) {
        config[k] = GM_getValue(k, DEFAULT_CONFIG[k]);
      }
      console.log('[Discourse Saver] Config loaded:', JSON.stringify({
        vaultName: config.vaultName,
        folderPath: config.folderPath,
        saveToObsidian: config.saveToObsidian,
        useAdvancedUri: config.useAdvancedUri
      }));
      return config;
    }

    function set(key, value) {
      console.log(`[Discourse Saver] Config.set('${key}', '${value}')`);
      GM_setValue(key, value);
    }

    function setAll(config) {
      console.log('[Discourse Saver] Config.setAll:', JSON.stringify({
        vaultName: config.vaultName,
        folderPath: config.folderPath
      }));
      for (const k in config) {
        GM_setValue(k, config[k]);
      }
      // 立即验证保存是否成功
      const savedVault = GM_getValue('vaultName', '');
      console.log(`[Discourse Saver] 验证保存: vaultName = '${savedVault}'`);
    }

    function getDefault() {
      return { ...DEFAULT_CONFIG };
    }

    return { get, set, setAll, getDefault };
  })();

  // ============================================================
  // 模块2: 日志模块 (LogModule)
  // ============================================================
  const LogModule = (function() {
    const MAX_LOGS = 500;
    const STORAGE_KEY = 'xingcun_logs';
    let logs = [];

    // 从本地存储恢复日志
    try {
      const saved = GM_getValue(STORAGE_KEY, '[]');
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) logs = parsed.slice(-MAX_LOGS);
    } catch (e) { console.warn('[Discourse Saver] 日志存储损坏，已重置:', e); logs = []; }

    function _persist() {
      try { GM_setValue(STORAGE_KEY, JSON.stringify(logs.slice(-MAX_LOGS))); } catch (e) {}
    }

    function add(level, message, extra = null) {
      const item = {
        ts: new Date().toISOString(),
        level: level || 'info',
        message: String(message || ''),
        extra: extra || null
      };
      logs.push(item);
      if (logs.length > MAX_LOGS) logs = logs.slice(logs.length - MAX_LOGS);
      _persist();
    }

    function list(level = 'all') {
      if (level === 'all') return logs.slice();
      return logs.filter(x => x.level === level);
    }

    function clear() {
      logs = [];
      _persist();
    }

    function renderPanel() {
      const old = document.getElementById('ds-log-panel');
      if (old) old.remove();

      const wrap = document.createElement('div');
      wrap.id = 'ds-log-panel';
      wrap.setAttribute('translate', 'no');
      wrap.classList.add('notranslate');
      wrap.style.cssText = 'position:fixed;left:10px;right:10px;bottom:10px;z-index:2147483647;background:#fff;border:1px solid #ddd;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.18);max-height:60vh;';
      wrap.innerHTML = `
        <div style="padding:10px 12px;font-weight:600;color:#1f2937;border-bottom:1px solid #eee;">日志面板（最多500条）</div>
        <div style="padding:0 12px 12px 12px;">
          <div style="display:flex;gap:6px;align-items:center;margin-bottom:8px;flex-wrap:wrap;">
            <button data-filter="all" class="ds-log-filter">全部</button>
            <button data-filter="success" class="ds-log-filter">成功</button>
            <button data-filter="error" class="ds-log-filter">失败</button>
            <button data-filter="info" class="ds-log-filter">信息</button>
            <button id="ds-log-refresh">刷新</button>
            <button id="ds-log-copy">复制全部</button>
            <button id="ds-log-export">导出TXT</button>
            <button id="ds-log-clear">清空</button>
            <button id="ds-log-close">关闭</button>
          </div>
          <div id="ds-log-list" style="font-size:12px;line-height:1.45;max-height:44vh;overflow:auto;border:1px solid #eee;border-radius:8px;padding:8px;background:#fafafa;"></div>
        </div>
      `;
      document.body.appendChild(wrap);

      const styleBtns = (root) => {
        root.querySelectorAll('button').forEach((b) => {
          b.style.cssText = 'padding:5px 10px;border:1px solid #d1d5db;background:#fff;border-radius:6px;cursor:pointer;font-size:12px;';
        });
      };
      styleBtns(wrap);

      const listEl = wrap.querySelector('#ds-log-list');
      let currentFilter = 'all';
      const render = (filter = 'all') => {
        currentFilter = filter;
        const arr = list(filter);
        if (arr.length === 0) {
          listEl.textContent = '暂无日志';
          return;
        }
        listEl.innerHTML = arr.map((x) => {
          const t = new Date(x.ts).toLocaleString('zh-CN', { hour12: false });
          const lv = x.level === 'error' ? '❌失败' : x.level === 'success' ? '✅成功' : 'ℹ️信息';
          const color = x.level === 'error' ? '#dc2626' : x.level === 'success' ? '#059669' : '#374151';
          return `<div style="margin:0 0 6px 0;padding-bottom:6px;border-bottom:1px dashed #e5e7eb;color:${color};"><strong>[${lv}]</strong> ${t} - ${x.message}</div>`;
        }).join('');
        listEl.scrollTop = listEl.scrollHeight;
      };
      render('all');

      wrap.querySelectorAll('.ds-log-filter').forEach((b) => {
        b.addEventListener('click', () => render(b.getAttribute('data-filter') || 'all'));
      });
      wrap.querySelector('#ds-log-refresh').addEventListener('click', () => render(currentFilter));
      wrap.querySelector('#ds-log-copy').addEventListener('click', async () => {
        const arr = list(currentFilter);
        const text = arr.map((x) => {
          const t = new Date(x.ts).toLocaleString('zh-CN', { hour12: false });
          return `[${x.level.toUpperCase()}] ${t} ${x.message}`;
        }).join('\n') || '暂无日志';
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
          } else {
            GM_setClipboard(text, 'text');
          }
          add('success', '日志已复制到剪贴板');
          render(currentFilter);
        } catch (e) {
          add('error', '复制日志失败: ' + (e.message || 'unknown'));
          render(currentFilter);
        }
      });
      wrap.querySelector('#ds-log-export').addEventListener('click', () => {
        const arr = list(currentFilter);
        const text = arr.map((x) => {
          const t = new Date(x.ts).toLocaleString('zh-CN', { hour12: false });
          return `[${x.level.toUpperCase()}] ${t} ${x.message}`;
        }).join('\n');
        const blob = new Blob([text || '暂无日志'], { type: 'text/plain;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `xingcun-logs-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      });
      wrap.querySelector('#ds-log-clear').addEventListener('click', () => { clear(); render('all'); });
      wrap.querySelector('#ds-log-close').addEventListener('click', () => wrap.remove());
    }

    return { add, list, clear, renderPanel };
  })();

  // ============================================================
  // 模块3: 工具函数 (UtilModule)
  // ============================================================
  const UtilModule = (function() {
    function shouldRetryStatus(status) {
      return status === 408 || status === 409 || status === 425 || status === 429 || (status >= 500 && status <= 599);
    }

    async function retryWithBackoff(task, options = {}) {
      const retries = Number.isInteger(options.retries) ? options.retries : 3;
      const baseDelayMs = options.baseDelayMs || 500;
      const factor = options.factor || 2;
      const classify = options.classifyError || (() => 'unknown');
      let lastError = null;

      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          const result = await task(attempt);
          return result;
        } catch (err) {
          lastError = err;
          const code = classify(err);
          LogModule.add('error', `重试第 ${attempt}/${retries} 次失败: ${code}`);
          if (attempt >= retries) break;
          const wait = Math.round(baseDelayMs * Math.pow(factor, attempt - 1));
          await new Promise(r => setTimeout(r, wait));
        }
      }

      throw lastError || new Error('重试失败');
    }

    function classifyDownloadError(error) {
      const msg = String(error?.message || error || '').toLowerCase();
      if (msg.includes('timeout') || msg.includes('超时')) return 'timeout';
      if (msg.includes('403') || msg.includes('forbidden')) return 'forbidden';
      if (msg.includes('404') || msg.includes('not found')) return 'not_found';
      if (msg.includes('429') || msg.includes('too many')) return 'rate_limited';
      if (msg.includes('500') || msg.includes('502') || msg.includes('503') || msg.includes('504')) return 'server_error';
      if (msg.includes('network') || msg.includes('连接失败')) return 'network_error';
      return 'unknown';
    }
    // 获取北京时间
    function getBeijingTime() {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const beijing = new Date(utc + 8 * 3600000);
      const year = beijing.getFullYear();
      const month = String(beijing.getMonth() + 1).padStart(2, '0');
      const day = String(beijing.getDate()).padStart(2, '0');
      const hours = String(beijing.getHours()).padStart(2, '0');
      const minutes = String(beijing.getMinutes()).padStart(2, '0');
      const seconds = String(beijing.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // 清理文件名 - 全面处理各平台非法字符 (v0.8.1 增强版)
    // Obsidian 非法: \ / : * ? " < > | # ^ [ ]
    // 百度网盘 非法: \ / : * ? " < > |
    // 策略: 可见非法字符替换为全角版本(保持可读), 控制字符直接移除
    function sanitizeFileName(name) {
      let s = name;
      // 可见非法字符 -> 全角替代（保持可读性）
      s = s.replace(/[/\\]/g, '／');                    // 路径分隔符
      s = s.replace(/:/g, '：');                        // 冒号
      s = s.replace(/\*/g, '＊');                       // 星号
      s = s.replace(/\?/g, '？');                       // 问号
      s = s.replace(/"/g, '＂');                        // 双引号
      s = s.replace(/</g, '＜').replace(/>/g, '＞');     // 尖括号
      s = s.replace(/\|/g, '｜');                       // 竖线
      // 移除不可见/不建议的字符
      s = s.replace(/[#^[\]{}!\`~=+;%@&$]/g, '');      // 特殊符号
      s = s.replace(/[\u201C\u201D\u2018\u2019\u300C\u300D\u300E\u300F]/g, ''); // 引号变体
      s = s.replace(/[\x00-\x1F\x7F]/g, '');            // 控制字符
      // 清理首尾
      s = s.replace(/^[\s.]+|[\s.]+$/g, '');            // 去首尾空格和点号
      s = s.replace(/\s+/g, ' ');                       // 合并连续空格
      s = s.trim();
      // Windows 保留名检测（CON, PRN, AUX, NUL, COM1-9, LPT1-9）
      if (/^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i.test(s)) s = '_' + s;
      if (!s || /^[\s.]*$/.test(s)) s = '未命名';
      return s.substring(0, 120);
    }

    // 清理文件夹路径中每个分段（OB/百度网盘通用）
    function sanitizeFolderPath(folderPath) {
      if (!folderPath) return '';
      return folderPath.split('/').map(seg => sanitizeFileName(seg)).filter(Boolean).join('/');
    }

    function sanitizeTitleText(title) {
      let s = String(title == null ? '' : title);
      s = s.replace(/[\u0000-\u001F\u007F]/g, ' ');
      s = s.replace(/\r?\n+/g, ' ');
      // 移除 URL / t.co 短链（含被斜杠清洗后的 httpst.co 变体）
      s = s.replace(/https?:\/\/t\.co\/\S+/gi, ' ');
      s = s.replace(/https?:\/\/\S+/gi, ' ');
      s = s.replace(/\bhttpst\.co\S*/gi, ' ');
      s = s.replace(/\bhttpstco\S*/gi, ' ');
      // 去掉标题尾巴中的平台标识（- X / / X / | X）
      s = s.replace(/\s*[-–—|/]+\s*[Xx](?:\s*$)/g, ' ');
      s = s.replace(/\s+\/\s*[Xx]\s*$/g, ' ');
      s = s.replace(/\s+/g, ' ').trim();
      // 去掉两端多余引号和装饰符
      s = s.replace(/^[`"'“”‘’]+|[`"'“”‘’]+$/g, '').trim();
      // 收尾：清理多余尾随标点
      s = s.replace(/[\-–—|/:\s]+$/g, '').trim();
      return s.substring(0, 180) || '未命名内容';
    }

    function sanitizeExternalUrl(url) {
      const raw = String(url || '').trim();
      if (!raw) return '';
      try {
        const u = new URL(raw, window.location.href);
        if (u.protocol === 'http:' || u.protocol === 'https:') return u.toString();
      } catch (_) {}
      return '';
    }

    function buildWeChatAuthorProfileUrl(pageUrl) {
      const safePageUrl = sanitizeExternalUrl(pageUrl || window.location.href);
      if (!safePageUrl) return '';

      // 1) 优先从 URL 参数提取
      try {
        const u = new URL(safePageUrl);
        const biz = u.searchParams.get('__biz');
        if (biz) {
          return `https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=${encodeURIComponent(biz)}&scene=124#wechat_redirect`;
        }
      } catch (_) {}

      // 2) 从页面 HTML / 脚本中兜底提取 __biz
      try {
        const html = document.documentElement?.innerHTML || '';
        const m = html.match(/(?:__biz=|["']__biz["']\s*[:=]\s*["'])([A-Za-z0-9+/=_-]{8,})/i);
        const biz = m && m[1] ? m[1].trim() : '';
        if (biz) {
          return `https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=${encodeURIComponent(biz)}&scene=124#wechat_redirect`;
        }
      } catch (_) {}

      // 3) 从脚本变量兜底提取（var biz = "..."; / window.biz = "..."）
      try {
        let biz = '';
        const scripts = document.querySelectorAll('script');
        for (const s of scripts) {
          const txt = s.textContent || '';
          if (!txt) continue;
          const m1 = txt.match(/\bbiz\s*=\s*["']([A-Za-z0-9+/=_-]{8,})["']/i);
          const m2 = txt.match(/["']__biz["']\s*:\s*["']([A-Za-z0-9+/=_-]{8,})["']/i);
          biz = (m1 && m1[1]) || (m2 && m2[1]) || '';
          if (biz) break;
        }
        if (biz) {
          return `https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=${encodeURIComponent(biz)}&scene=124#wechat_redirect`;
        }
      } catch (_) {}

      return '';
    }

    function extractWeChatAuthorUrlFromDom() {
      const selectors = [
        '#js_name a',
        'a#js_name',
        '.account_nickname_inner a',
        '.rich_media_meta_link'
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (!el) continue;
        const candidates = [
          el.getAttribute('href'),
          el.getAttribute('data-href'),
          el.getAttribute('data-url'),
          el.getAttribute('data-link')
        ];
        const onclick = el.getAttribute('onclick') || '';
        const clickUrl = onclick.match(/https?:\/\/[^'"\s)]+/i)?.[0] || '';
        if (clickUrl) candidates.push(clickUrl);
        for (const c of candidates) {
          const safe = sanitizeExternalUrl(c || '');
          if (safe) return safe;
        }
      }
      return '';
    }

    // 显示通知
    let _notifTimer = null;
    let _notifEl = null;
    function showNotification(message, type = 'info') {
      LogModule.add(type === 'warning' ? 'info' : type, message);

      const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
      };

      // 复用已存在的通知元素（防止闪烁和堆叠）
      if (_notifEl && _notifEl.parentNode) {
        _notifEl.textContent = message;
        _notifEl.style.background = colors[type] || colors.info;
        // 重置自动消失计时
        if (_notifTimer) clearTimeout(_notifTimer);
        _notifTimer = setTimeout(() => { if (_notifEl) { _notifEl.remove(); _notifEl = null; } }, 3000);
        return;
      }

      // 移除残留
      const old = document.querySelector('.ds-notification');
      if (old) old.remove();

      const div = document.createElement('div');
      div.className = 'ds-notification';
      div.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background: ${colors[type] || colors.info};
        color: white;
        border-radius: 8px;
        font-size: 14px;
        z-index: 999999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: dsSlideIn 0.3s ease;
        transition: background 0.2s;
      `;
      div.textContent = message;
      document.body.appendChild(div);
      _notifEl = div;

      if (_notifTimer) clearTimeout(_notifTimer);
      _notifTimer = setTimeout(() => { if (_notifEl) { _notifEl.remove(); _notifEl = null; } }, 3000);
    }

    // 图片嵌入限制常量
    const IMAGE_LIMITS = {
      MAX_SINGLE_SIZE: 15 * 1024 * 1024,    // 单张图片最大 15MB
      MAX_TOTAL_SIZE: 100 * 1024 * 1024,    // 总大小最大 100MB
      MAX_IMAGE_COUNT: 50                    // 最多嵌入 50 张图片
    };

    // 通过 magic bytes 检测图片真实格式，返回正确的 MIME 类型
    // 解决服务器返回错误 Content-Type 导致图片无法显示的问题
    function detectImageMime(bytes) {
      if (!bytes || bytes.length < 4) return null;
      const u8 = new Uint8Array(bytes);
      // JPEG: FF D8 FF
      if (u8[0] === 0xFF && u8[1] === 0xD8 && u8[2] === 0xFF) return 'image/jpeg';
      // PNG: 89 50 4E 47
      if (u8[0] === 0x89 && u8[1] === 0x50 && u8[2] === 0x4E && u8[3] === 0x47) return 'image/png';
      // GIF: 47 49 46 38 (GIF8)
      if (u8[0] === 0x47 && u8[1] === 0x49 && u8[2] === 0x46 && u8[3] === 0x38) return 'image/gif';
      // WebP: 52 49 46 46 ... 57 45 42 50 (RIFF....WEBP)
      if (u8[0] === 0x52 && u8[1] === 0x49 && u8[2] === 0x46 && u8[3] === 0x46 &&
          u8.length >= 12 && u8[8] === 0x57 && u8[9] === 0x45 && u8[10] === 0x42 && u8[11] === 0x50) return 'image/webp';
      // BMP: 42 4D
      if (u8[0] === 0x42 && u8[1] === 0x4D) return 'image/bmp';
      // AVIF: ISOBMFF with avif brand
      if (u8.length >= 12 && u8[4] === 0x66 && u8[5] === 0x74 && u8[6] === 0x79 && u8[7] === 0x70 &&
          ((u8[8] === 0x61 && u8[9] === 0x76 && u8[10] === 0x69 && u8[11] === 0x66) ||
           (u8[8] === 0x6D && u8[9] === 0x69 && u8[10] === 0x66 && u8[11] === 0x31))) return 'image/avif';
      return null;
    }

    // 读取 Blob 的前若干字节用于 magic byte 检测
    function readBlobHeader(blob, byteCount = 16) {
      return new Promise((resolve, reject) => {
        if (blob.size < byteCount) { resolve(blob.slice(0)); return; }
        const slice = blob.slice(0, byteCount);
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsArrayBuffer(slice);
      });
    }

    // 强制使用正确的 MIME 重读 Blob 为 data URL
    function readBlobAsCorrectedDataURL(blob, correctMime) {
      return new Promise((resolve, reject) => {
        // 用正确的 MIME 类型创建新 Blob，再读为 data URL
        const fixedBlob = new Blob([blob], { type: correctMime });
        const reader = new FileReader();
        reader.onloadend = () => resolve({
          data: reader.result,
          size: fixedBlob.size
        });
        reader.onerror = () => reject(new Error('Failed to read blob'));
        reader.readAsDataURL(fixedBlob);
      });
    }

    // 对 URL 模式的 data URI，纠正其中的 MIME 类型
    function fixDataUriMime(dataUri, correctMime) {
      return dataUri.replace(/^data:[^;]+;/, `data:${correctMime};`);
    }

    // 从页面上已渲染的 <img> 元素通过 Canvas 捕获图片数据
    // 用于 51吃瓜 等加密图片场景：页面 JS 解密后渲染到 img，我们用 canvas 截图
    // 比重新下载更可靠，因为已经过页面解密
    function captureRenderedImage(imgEl, quality = 0.92) {
      return new Promise((resolve, reject) => {
        try {
          if (!imgEl || !imgEl.complete || imgEl.naturalWidth === 0) {
            reject(new Error('图片未加载完成'));
            return;
          }
          const canvas = document.createElement('canvas');
          const w = imgEl.naturalWidth || imgEl.width;
          const h = imgEl.naturalHeight || imgEl.height;
          if (!w || !h) { reject(new Error('图片尺寸为0')); return; }
          // 限制最大尺寸，防止超大图片导致性能问题
          const MAX_DIM = 4096;
          let sw = w, sh = h;
          if (w > MAX_DIM || h > MAX_DIM) {
            const ratio = Math.min(MAX_DIM / w, MAX_DIM / h);
            sw = Math.round(w * ratio);
            sh = Math.round(h * ratio);
          }
          canvas.width = sw;
          canvas.height = sh;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(imgEl, 0, 0, sw, sh);
          // 尝试获取 data URL，CORS 跨域图片会抛异常
          const dataUri = canvas.toDataURL('image/jpeg', quality);
          // 估算大小
          const sizeBytes = Math.round(dataUri.length * 0.75); // base64 overhead
          resolve({ data: dataUri, size: sizeBytes });
        } catch (e) {
          reject(new Error(`Canvas 截图失败（可能跨域）: ${e.message}`));
        }
      });
    }

    // 下载图片并转换为 Base64（带大小检测 + 图片格式校验）
    // 判断是否为需要鉴权的飞书/内部图片 URL
    function isAuthRequiredUrl(url) {
      if (!url) return false;
      return /internal-api-drive-stream\.feishu\.cn|feishu\.cn\/space\/api\/box\/stream|feishu\.cn\/api\/drive/.test(url);
    }

    // 通过 fetch() 带 cookie 下载图片（用于飞书等需要鉴权的内部 URL）
    async function fetchImageWithCredentials(url) {
      const resp = await fetch(url, { credentials: 'include', mode: 'cors' });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const blob = await resp.blob();
      // 检测图片真实格式，防止服务器返回错误 Content-Type
      const header = await readBlobHeader(blob, 16);
      const realMime = detectImageMime(header);
      if (!realMime) throw new Error('下载内容不是有效图片（无法识别格式）');
      return readBlobAsCorrectedDataURL(blob, realMime);
    }

    function fetchImageAsBase64(url, maxSize = IMAGE_LIMITS.MAX_SINGLE_SIZE) {
      // 飞书内部 URL 需要携带 cookie，使用 fetch() 代替 GM_xmlhttpRequest
      if (isAuthRequiredUrl(url)) {
        return fetchImageWithCredentials(url).then(result => {
          if (result.size > maxSize) {
            throw new Error(`图片过大 (${(result.size/1024/1024).toFixed(1)}MB > ${(maxSize/1024/1024).toFixed(0)}MB限制)`);
          }
          return result;
        });
      }
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'GET',
          url: url,
          responseType: 'blob',
          timeout: 30000,
          onload: async function(response) {
            if (response.status >= 200 && response.status < 300) {
              const blob = response.response;

              // 检查图片大小
              if (blob.size > maxSize) {
                reject(new Error(`图片过大 (${(blob.size/1024/1024).toFixed(1)}MB > ${(maxSize/1024/1024).toFixed(0)}MB限制)`));
                return;
              }

              // 检测图片真实格式（magic bytes），防止服务器返回错误 Content-Type
              try {
                const header = await readBlobHeader(blob, 16);
                const realMime = detectImageMime(header);
                if (!realMime) {
                  reject(new Error('下载内容不是有效图片（无法识别格式，可能为加密数据或错误页面）'));
                  return;
                }
                const result = await readBlobAsCorrectedDataURL(blob, realMime);
                resolve(result);
              } catch (e) {
                reject(e);
              }
            } else {
              reject(new Error(`HTTP ${response.status}`));
            }
          },
          onerror: function() {
            reject(new Error('Network error'));
          },
          ontimeout: function() {
            reject(new Error('Timeout'));
          }
        });
      });
    }

    // 批量将 Markdown 中的图片 URL 替换为 Base64
    async function embedImagesInMarkdown(markdown, onProgress = null) {
      // 参数验证
      if (!markdown || typeof markdown !== 'string') {
        console.warn('[Discourse Saver] embedImagesInMarkdown: 无效的 markdown 参数');
        return markdown || '';
      }

      // 匹配 Markdown 图片语法: ![alt](url)
      const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
      let matches;
      try {
        matches = [...markdown.matchAll(imageRegex)];
      } catch (regexError) {
        console.error('[Discourse Saver] 正则匹配失败:', regexError);
        return markdown;
      }

      if (matches.length === 0) {
        return markdown;
      }

      console.log(`[Discourse Saver] 发现 ${matches.length} 张图片`);

      // 收集所有图片 URL（去重）
      const urlList = [];
      const seenUrls = new Set();
      for (const match of matches) {
        const url = match[2];
        // 跳过已经是 base64 的图片和无效 URL
        if (url && !url.startsWith('data:') && url.startsWith('http') && !seenUrls.has(url)) {
          seenUrls.add(url);
          urlList.push(url);
        }
      }

      if (urlList.length === 0) {
        console.log('[Discourse Saver] 没有需要嵌入的图片');
        return markdown;
      }

      // 应用图片数量限制
      const effectiveUrls = urlList.slice(0, IMAGE_LIMITS.MAX_IMAGE_COUNT);
      if (urlList.length > IMAGE_LIMITS.MAX_IMAGE_COUNT) {
        console.warn(`[Discourse Saver] 图片数量 (${urlList.length}) 超过限制 (${IMAGE_LIMITS.MAX_IMAGE_COUNT})，只嵌入前 ${IMAGE_LIMITS.MAX_IMAGE_COUNT} 张`);
        showNotification(`图片过多，只嵌入前 ${IMAGE_LIMITS.MAX_IMAGE_COUNT} 张`, 'warning');
      }

      console.log(`[Discourse Saver] 开始嵌入 ${effectiveUrls.length} 张图片...`);

      // 用于存储结果和追踪总大小
      const urlMap = new Map();
      let totalSize = 0;
      let completed = 0;
      let skippedCount = 0;
      const total = effectiveUrls.length;
      const OVERALL_TIMEOUT = 180000; // 3分钟总超时（增加到3分钟以支持更多图片）

      try {
        await Promise.race([
          Promise.all(effectiveUrls.map(async (url) => {
            try {
              // 检查是否已超过总大小限制
              if (totalSize >= IMAGE_LIMITS.MAX_TOTAL_SIZE) {
                console.warn(`[Discourse Saver] 总大小已达限制，跳过: ${url.substring(0, 50)}...`);
                urlMap.set(url, null);
                skippedCount++;
                completed++;
                if (onProgress) onProgress(completed, total);
                return;
              }

              const result = await fetchImageAsBase64(url);
              const imageSize = result.size;

              // 检查添加此图片后是否超过总大小限制
              if (totalSize + imageSize > IMAGE_LIMITS.MAX_TOTAL_SIZE) {
                console.warn(`[Discourse Saver] 添加此图片将超过总大小限制，跳过 (${(imageSize/1024/1024).toFixed(1)}MB)`);
                urlMap.set(url, null);
                skippedCount++;
              } else {
                urlMap.set(url, result.data);
                totalSize += imageSize;
                console.log(`[Discourse Saver] 图片嵌入 ${completed+1}/${total}: ${(imageSize/1024).toFixed(0)}KB, 总计: ${(totalSize/1024/1024).toFixed(1)}MB`);
              }

              completed++;
              if (onProgress) onProgress(completed, total);
            } catch (error) {
              console.warn(`[Discourse Saver] 图片下载失败: ${url}`, error.message);
              urlMap.set(url, null);
              skippedCount++;
              completed++;
              if (onProgress) onProgress(completed, total);
            }
          })),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('图片嵌入总超时')), OVERALL_TIMEOUT)
          )
        ]);
      } catch (timeoutError) {
        console.warn('[Discourse Saver] 图片嵌入超时，部分图片可能未嵌入:', timeoutError.message);
      }

      // 替换 Markdown 中的图片 URL
      let result = markdown;
      try {
        for (const [url, base64] of urlMap.entries()) {
          if (base64 && typeof base64 === 'string') {
            result = result.split(`](${url})`).join(`](${base64})`);
          }
        }
      } catch (replaceError) {
        console.error('[Discourse Saver] 图片 URL 替换失败:', replaceError);
        return markdown;
      }

      const successCount = [...urlMap.values()].filter(v => v !== null).length;
      console.log(`[Discourse Saver] 图片嵌入完成: ${successCount}/${total} 成功, ${skippedCount} 跳过, 总大小: ${(totalSize/1024/1024).toFixed(1)}MB`);

      if (skippedCount > 0) {
        showNotification(`已嵌入 ${successCount} 张图片，${skippedCount} 张因过大或超限跳过`, 'info');
      }

      return result;
    }

    // 验证 URL 是否有效
    function isValidUrl(url) {
      if (!url || typeof url !== 'string') return false;
      try {
        // 去除空白字符
        url = url.trim();
        if (!url) return false;
        // 检查是否包含无效字符
        if (/[\s<>"{}|\\^`\[\]]/.test(url)) return false;
        // 尝试构造 URL 对象
        new URL(url);
        return true;
      } catch (e) {
        return false;
      }
    }

    // 构建安全的 URL
    function buildSafeUrl(url, baseUrl = window.location.origin) {
      if (!url || typeof url !== 'string') return '';
      try {
        url = url.trim();
        if (!url) return '';
        // 如果已经是完整 URL
        if (url.startsWith('http://') || url.startsWith('https://')) {
          return isValidUrl(url) ? url : '';
        }
        // 相对 URL
        if (url.startsWith('/')) {
          const fullUrl = baseUrl + url;
          return isValidUrl(fullUrl) ? fullUrl : '';
        }
        // 不是有效的 URL 格式
        return '';
      } catch (e) {
        console.warn('[Discourse Saver] URL 构建失败:', url, e.message);
        return '';
      }
    }

    // 清理 HTML 内容，防止崩溃
    function sanitizeHtml(html) {
      if (!html || typeof html !== 'string') return '';
      try {
        // 移除可能导致解析问题的字符
        html = html.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '');
        // 修复未闭合的标签
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.innerHTML;
      } catch (e) {
        console.warn('[Discourse Saver] HTML 清理失败:', e.message);
        // 返回纯文本版本
        return html.replace(/<[^>]*>/g, '');
      }
    }

    // V5.1: 收集 Markdown 中的媒体文件 URL（图片+视频）
    function collectMediaUrls(markdown, downloadVideos) {
      const mediaUrls = [];
      const seenUrls = new Set();

      // 匹配图片 ![alt](url)
      const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
      let match;
      while ((match = imageRegex.exec(markdown)) !== null) {
        const url = match[2];
        if (!seenUrls.has(url) && url.startsWith('http')) {
          seenUrls.add(url);
          mediaUrls.push({ url, type: 'image', alt: match[1] });
        }
      }

      // 匹配视频链接
      if (downloadVideos) {
        const videoRegex = /\[([^\]]*)\]\((https?:\/\/[^)]+\.(?:mp4|webm|mov|avi|mkv|m4v)[^)]*)\)/gi;
        while ((match = videoRegex.exec(markdown)) !== null) {
          const url = match[2];
          if (!seenUrls.has(url)) {
            seenUrls.add(url);
            mediaUrls.push({ url, type: 'video', alt: match[1] });
          }
        }
        // 独立的视频 URL 行
        const videoLineRegex = /^(https?:\/\/\S+\.(?:mp4|webm|mov|avi|mkv|m4v)\S*)$/gim;
        while ((match = videoLineRegex.exec(markdown)) !== null) {
          const url = match[1];
          if (!seenUrls.has(url)) {
            seenUrls.add(url);
            mediaUrls.push({ url, type: 'video', alt: '' });
          }
        }
      }

      return mediaUrls;
    }

    // V5.1: 通过 Obsidian Local REST API 下载媒体文件到 Vault 并替换路径
    async function downloadAndReplaceMedia(markdown, config, siteFolderPath, metadata = null) {
      if (!config.downloadImages) {
        return markdown;
      }

      const mediaUrls = collectMediaUrls(markdown, config.downloadVideos);
      if (mediaUrls.length === 0) {
        console.log('[Discourse Saver] 没有找到需要下载的媒体文件');
        return markdown;
      }

      console.log(`[Discourse Saver] 找到 ${mediaUrls.length} 个媒体文件，开始通过 REST API 写入...`);
      showNotification(`正在下载 ${mediaUrls.length} 个媒体文件到 Vault...`, 'info');
      let _lastProgressPct = 0;

      // 媒体文件夹路径：{siteFolderPath}/{mediaFolderName}
      // 支持 {title} 占位符按帖子标题建立子文件夹
      let mediaFolderName = config.mediaFolderName || 'media';
      if (config.mediaFolderPerTitle && metadata && metadata.title) {
        const titleSlug = UtilModule.sanitizeFileName(metadata.title);
        mediaFolderName = mediaFolderName.replace(/\{title\}/g, titleSlug);
        // 如果没有 {title} 占位符，自动追加标题子文件夹
        if (!mediaFolderName.includes(titleSlug) && config.mediaFolderPerTitle) {
          mediaFolderName = `${mediaFolderName}/${titleSlug}`;
        }
      }
      const vaultPath = siteFolderPath ? `${siteFolderPath}/${mediaFolderName}` : mediaFolderName;

      // 优先使用 HTTP (27123) 避免自签名证书问题
      const configPort = config.restApiPort || 27124;
      const httpPort = configPort === 27124 ? 27123 : configPort;
      const apiBase = `http://127.0.0.1:${httpPort}`;

      const results = [];

      for (let i = 0; i < mediaUrls.length; i++) {
        const media = mediaUrls[i];
        try {
          // 1. 获取图片/视频的二进制数据（飞书内部 URL 用 fetch+cookie，其他用 GM_xmlhttpRequest）
          const binaryData = await new Promise((resolve, reject) => {
            const downloadViaFetch = async () => {
              try {
                const resp = await fetch(media.url, { credentials: 'include', mode: 'cors' });
                if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                const buf = await resp.arrayBuffer();
                resolve(buf);
              } catch (e) { reject(e); }
            };
            if (UtilModule.isAuthRequiredUrl(media.url)) {
              downloadViaFetch();
              return;
            }
            GM_xmlhttpRequest({
              method: 'GET',
              url: media.url,
              responseType: 'arraybuffer',
              timeout: 30000,
              onload: function(response) {
                if (response.status >= 200 && response.status < 300) {
                  resolve(response.response);
                } else {
                  reject(new Error(`HTTP ${response.status}`));
                }
              },
              onerror: function(error) {
                reject(new Error('网络错误'));
              },
              ontimeout: function() {
                reject(new Error('下载超时'));
              }
            });
          });

          // 2. 从 URL 提取文件名
          let fileName;
          try {
            const urlObj = new URL(media.url);
            fileName = urlObj.pathname.split('/').pop() || `media_${i}`;
          } catch(e) {
            fileName = `media_${i}`;
          }
          fileName = fileName.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, '_');
          if (!fileName.includes('.')) {
            fileName += media.type === 'video' ? '.mp4' : '.jpg';
          }

          // 去重
          const existingNames = results.map(r => r.localName);
          let finalName = fileName;
          let counter = 1;
          while (existingNames.includes(finalName)) {
            const dotIdx = fileName.lastIndexOf('.');
            if (dotIdx > 0) {
              finalName = fileName.substring(0, dotIdx) + `_${counter}` + fileName.substring(dotIdx);
            } else {
              finalName = fileName + `_${counter}`;
            }
            counter++;
          }

          // 3. 通过 REST API 写入 Vault
          const filePath = `${vaultPath}/${finalName}`;
          const putResult = await new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
              method: 'PUT',
              url: `${apiBase}/vault/${encodeURIComponent(filePath)}`,
              headers: {
                'Authorization': `Bearer ${config.restApiKey}`,
                'Content-Type': 'application/octet-stream'
              },
              data: binaryData,
              responseType: 'text',
              timeout: 30000,
              onload: function(response) {
                if (response.status >= 200 && response.status < 300) {
                  resolve(true);
                } else {
                  reject(new Error(`REST API ${response.status}: ${response.responseText}`));
                }
              },
              onerror: function() {
                reject(new Error('REST API 连接失败'));
              },
              ontimeout: function() {
                reject(new Error('REST API 超时'));
              }
            });
          });

          console.log(`[Discourse Saver] 写入 Vault [${i + 1}/${mediaUrls.length}]: ${filePath}`);
          const pct = Math.round((i + 1) / mediaUrls.length * 100);
          if (pct >= _lastProgressPct + 10 || i === mediaUrls.length - 1) {
            _lastProgressPct = pct;
            showNotification(`下载媒体 ${i + 1}/${mediaUrls.length} (${pct}%)`, 'info');
          }

          results.push({
            originalUrl: media.url,
            localName: finalName,
            relativePath: `${mediaFolderName}/${finalName}`,
            success: true
          });
        } catch (dlError) {
          console.warn(`[Discourse Saver] 写入媒体失败: ${media.url}`, dlError);
          results.push({
            originalUrl: media.url,
            localName: null,
            relativePath: null,
            success: false,
            error: dlError.message
          });
        }
      }

      // 替换 Markdown 中的 URL 为相对路径
      let processedMarkdown = markdown;
      let successCount = 0;

      for (const result of results) {
        if (result.success && result.relativePath) {
          const escapedUrl = result.originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          processedMarkdown = processedMarkdown.replace(
            new RegExp(escapedUrl, 'g'),
            result.relativePath
          );
          successCount++;
        }
      }

      console.log(`[Discourse Saver] 媒体路径替换完成: ${successCount}/${mediaUrls.length} 成功`);
      if (successCount > 0) {
        showNotification(`已下载 ${successCount} 个媒体文件到 Vault`, 'success');
      }

      return processedMarkdown;
    }

    // V5.1: 测试 Obsidian Local REST API 连接
    async function testRestApiConnection(apiKey, apiPort) {
      const httpPort = (apiPort || 27124) === 27124 ? 27123 : apiPort;
      const apiBase = `http://127.0.0.1:${httpPort}`;

      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'GET',
          url: `${apiBase}/`,
          headers: {
            'Authorization': `Bearer ${apiKey}`
          },
          timeout: 5000,
          onload: function(response) {
            if (response.status >= 200 && response.status < 300) {
              resolve({ success: true, message: '连接成功' });
            } else if (response.status === 401 || response.status === 403) {
              resolve({ success: false, message: 'API Key 错误' });
            } else {
              resolve({ success: false, message: `HTTP ${response.status}` });
            }
          },
          onerror: function() {
            resolve({ success: false, message: '无法连接，请确认 Obsidian 已启动且已安装 Local REST API 插件' });
          },
          ontimeout: function() {
            resolve({ success: false, message: '连接超时' });
          }
        });
      });
    }

    // 表情符号名称到 Unicode emoji 字符的映射（Discourse reactions）
    const EMOJI_MAP = {
      'heart': '❤️', '+1': '👍', 'clap': '👏', 'smile': '😄',
      'laughing': '😆', 'tada': '🎉', 'rocket': '🚀', 'eyes': '👀',
      'thinking': '🤔', 'pray': '🙏', 'open_mouth': '😮', 'slight_smile': '🙂',
      'star_struck': '🤩', 'heart_eyes': '😍', 'cry': '😢', 'crying': '😢',
      'angry': '😠', 'thumbsdown': '👎', '-1': '👎', 'ok_hand': '👌',
      'wave': '👋', 'fire': '🔥', '100': '💯', 'sob': '😭', 'rofl': '🤣',
      'wink': '😉', 'smirk': '😏', 'sleeping': '😴', 'confused': '😕',
      'disappointed': '😞', 'sweat': '😓', 'fearful': '😨', 'scream': '😱',
      'hugs': '🤗', 'yum': '😋', 'sunglasses': '😎', 'nerd': '🤓',
      'rolling_eyes': '🙄', 'thinking_face': '🤔', 'zipper_mouth': '🤐',
      'face_with_thermometer': '🤒', 'face_with_head_bandage': '🤕',
      'money_mouth': '🤑', 'hushed': '😯', 'grimacing': '😬',
      'joy': '😂', 'smiley': '😃', 'grin': '😁', 'wink': '😉',
      'stuck_out_tongue': '😛', 'stuck_out_tongue_winking_eye': '😜',
      'stuck_out_tongue_closed_eyes': '😝', 'relieved': '😌',
      'unamused': '😒', 'pensive': '😔', 'worried': '😟',
      'confounded': '😖', 'persevere': '😣', 'rage': '😡',
      'triumph': '😤', 'weary': '😩', 'tired_face': '😫',
      'cold_sweat': '😰', 'astonished': '😲', 'flushed': '😳',
      'dizzy_face': '😵', 'mask': '😷', 'partying_face': '🥳',
      'pleading_face': '🥺', 'shushing_face': '🤫', 'raised_hands': '🙌',
      'muscle': '💪', 'brain': '🧠', 'bulb': '💡', 'book': '📖',
      'pin': '📌', 'check': '✅', 'x': '❌', 'question': '❓',
      'exclamation': '❗', 'white_check_mark': '✅', 'negative_squared_cross_mark': '❌',
      'heavy_plus_sign': '➕', 'heavy_minus_sign': '➖', 'heavy_division_sign': '➗',
      'spock_hand': '🖖', 'vulcan': '🖖', 'brown_heart': '🤎', 'white_heart': '🤍',
      'purple_heart': '💜', 'blue_heart': '💙', 'green_heart': '💚',
      'yellow_heart': '💛', 'orange_heart': '🧡', 'black_heart': '🖤',
      'two_hearts': '💕', 'sparkling_heart': '💖', 'gift_heart': '💝',
      'revolving_hearts': '💞', 'cupid': '💘', 'love_letter': '💌',
      'kiss': '💋', 'couplekiss': '💏', 'couple_with_heart': '💑',
      'rainbow': '🌈', 'sunny': '☀️', 'cloud': '☁️', 'zap': '⚡',
      'boom': '💥', 'collision': '💥', 'droplet': '💧', 'ocean': '🌊',
      'star': '⭐', 'star2': '🌟', 'sparkles': '✨', 'cake': '🎂',
      'beers': '🍻', 'clinking_glasses': '🥂', 'wine_glass': '🍷',
      'tropical_drink': '🍹', 'coffee': '☕', 'tea': '🍵', 'pizza': '🍕',
      'cookie': '🍪', 'popcorn': '🍿', 'rose': '🌹', 'bouquet': '💐',
      'cherry_blossom': '🌸', 'seedling': '🌱', 'earth_africa': '🌍',
      'earth_americas': '🌎', 'earth_asia': '🌏', 'recycle': '♻️',
      // 简体中文短代码
      '爱心': '❤️', '点赞': '👍', '鼓掌': '👏', '笑脸': '😄',
      '大笑': '😆', '庆祝': '🎉', '火箭': '🚀', '火': '🔥',
      '大哭': '😭', '哭': '😢', '生气': '😠', '思考': '🤔',
      '祈祷': '🙏', '握手': '🤝', '肌肉': '💪', '派对': '🥳'
    };

    function emojiNameToChar(name) {
      if (!name) return '';
      const trimmed = name.trim();
      // 如果已经是 emoji 字符（非 ASCII），直接返回第一个字符
      if (trimmed.length > 0 && trimmed.codePointAt(0) > 127) {
        return trimmed.charAt(0);
      }
      // 也检查是否以冒号包裹的短代码形式 (如 :heart:)
      const colonMatch = trimmed.match(/^:([^:]+):$/);
      const lookup = colonMatch ? colonMatch[1] : trimmed;
      return EMOJI_MAP[lookup] || EMOJI_MAP[lookup.toLowerCase()] || name;
    }

    // 将 reactions 数组转换为显示文本（emoji + 计数）
    function formatReactionsText(reactions) {
      if (!reactions || !reactions.length) return '';
      return reactions.map(r => {
        const emoji = emojiNameToChar(r.emoji || '');
        const isEmoji = emoji.length > 0 && emoji.codePointAt(0) > 127;
        if (isEmoji) return `${emoji} ${r.count}`;
        return `:${r.emoji}: ${r.count}`;
      }).join('  ');
    }

    // 根据 hostname 和 config 解析 Discourse 站点名称（用于按站点分文件夹）
    function getDiscourseSiteName(hostname, config) {
      const raw = (hostname || '').toLowerCase();
      // 去掉常见子域名前缀得到裸域名
      const bare = raw.replace(/^(www|forum|forums|community|discuss|discourse|discussion|users|gov|devforum|answers)\./, '');
      const siteFolders = (config && config.discourseSiteFolders) || {};
      // 先精确匹配原始域名，再匹配去前缀后的，最后 fallback 到域名首段
      return siteFolders[raw] || siteFolders[bare] || bare.split('.')[0];
    }

    return { getBeijingTime, sanitizeFileName, sanitizeFolderPath, sanitizeTitleText, sanitizeExternalUrl, buildWeChatAuthorProfileUrl, extractWeChatAuthorUrlFromDom, showNotification, fetchImageAsBase64, embedImagesInMarkdown, isValidUrl, buildSafeUrl, sanitizeHtml, collectMediaUrls, downloadAndReplaceMedia, testRestApiConnection, retryWithBackoff, classifyDownloadError, shouldRetryStatus, emojiNameToChar, formatReactionsText, getDiscourseSiteName, isAuthRequiredUrl };
  })();

  // ============================================================
  // 模块3: X 视频缓存与检测 (XVideoModule)
  // ============================================================
  const XVideoModule = (function() {
    function getVideoCache() {
      if (!window.__xSaverVideoCache || !(window.__xSaverVideoCache instanceof Map)) {
        window.__xSaverVideoCache = new Map();
      }
      return window.__xSaverVideoCache;
    }

    function parseVariantsFromText(text) {
      const variants = [];
      if (!text) return variants;
      const re = /https:\/\/video\.twimg\.com\/[^\\"']+\.mp4[^\\"']*/g;
      const all = String(text).match(re) || [];
      const uniq = [...new Set(all)];
      uniq.forEach((u) => variants.push({ url: u, bitrate: 0, content_type: 'video/mp4' }));
      return variants;
    }

    function extractTweetIdFromText(text) {
      const m = String(text || '').match(/"rest_id"\s*:\s*"(\d{8,})"/);
      return m ? m[1] : '';
    }

    function feedCacheFromPayload(payloadText) {
      const variants = parseVariantsFromText(payloadText);
      if (variants.length === 0) return;
      const tweetId = extractTweetIdFromText(payloadText) || (location.pathname.match(/\/status\/(\d+)/) || [])[1] || '';
      if (!tweetId) return;
      const cache = getVideoCache();
      cache.set(tweetId, variants);
      LogModule.add('info', `X视频缓存更新: ${tweetId} (${variants.length}条)`);
    }

    function initDetector() {
      if (window.__xSaverVideoDetectorInited) return;
      // 仅在 X/Twitter 站点注入视频缓存检测，避免其他站点性能开销
      const host = (window.location.hostname || '').toLowerCase();
      if (!host.includes('x.com') && !host.includes('twitter.com')) return;
      window.__xSaverVideoDetectorInited = true;

      try {
        const originalFetch = window.fetch;
        window.fetch = async function(...args) {
          const resp = await originalFetch.apply(this, args);
          try {
            const url = String(args?.[0]?.url || args?.[0] || '');
            if (url.includes('/graphql/') || url.includes('/TweetDetail') || url.includes('/TweetResultByRestId')) {
              const cloned = resp.clone();
              cloned.text().then(feedCacheFromPayload).catch(() => {});
            }
          } catch (_) {}
          return resp;
        };
      } catch (_) {}

      try {
        const originalOpen = XMLHttpRequest.prototype.open;
        const originalSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.open = function(method, url, ...rest) {
          this.__xsv_url = url;
          return originalOpen.call(this, method, url, ...rest);
        };
        XMLHttpRequest.prototype.send = function(...args) {
          this.addEventListener('load', function() {
            try {
              const u = String(this.__xsv_url || '');
              if (u.includes('/graphql/') || u.includes('/TweetDetail') || u.includes('/TweetResultByRestId')) {
                feedCacheFromPayload(this.responseText || '');
              }
            } catch (_) {}
          });
          return originalSend.apply(this, args);
        };
      } catch (_) {}
    }

    function getVariants(tweetId) {
      const cache = getVideoCache();
      return cache.get(tweetId) || [];
    }

    return { initDetector, getVariants };
  })();

  // ============================================================
  // 模块4: 内容提取 (ExtractModule)
  // ============================================================
  const ExtractModule = (function() {
    function getSiteType() {
      const host = (window.location.hostname || '').toLowerCase();
      if (host.includes('weixin.qq.com') || host.includes('mp.weixin')) return 'wechat';
      if (host.includes('zhihu.com')) return 'zhihu';
      if (host.includes('weibo.com') || host.includes('weibo.cn')) return 'weibo';
      if (host === 'x.com' || host.endsWith('.x.com') || host === 'twitter.com' || host.endsWith('.twitter.com')) return 'x';
      if (host === 'people.com.cn' || host.endsWith('.people.com.cn') || host.includes('rmrb.com.cn')) return 'people';
      if (host.includes('xinhuanet.com') || host.includes('xinhua.net') || host === 'news.cn' || host.endsWith('.news.cn')) return 'xinhua';
      if (host.includes('thepaper.cn')) return 'thepaper';
      if (host === '36kr.com' || host.endsWith('.36kr.com')) return '36kr';
      if (host === 'sspai.com' || host.endsWith('.sspai.com')) return 'sspai';
      if (host === 'juejin.cn' || host.endsWith('.juejin.cn')) return 'juejin';
      if (host.includes('ithome.com')) return 'ithome';
      if (host.includes('toutiao.com')) return 'toutiao';
      if (host.includes('douyin.com')) return 'douyin';
      if (host.includes('bilibili.com')) return 'bilibili';
      if (host.includes('youtube.com')) return 'youtube';
      if (host.includes('trae.ai') || host.includes('trae.com.cn')) return 'trae';
      if (host.endsWith('.feishu.cn') || host.endsWith('.larksuite.com')) return 'feishu_doc';
      // 51吃瓜网 / x6d3i 视频站（内置域名）
      if (/51cg|51cge|chigua|drbymvei|gwzyscfz|51hl|51cl|7ngja91iap/.test(host)) return '51cg';
      if (/x6d3i\.top/.test(host)) return 'x6d3i';
      // 用户自定义51吃瓜域名（51吃瓜经常换域名，用户可在设置里自行添加）
      const cgSites = parseCustomSiteList(GM_getValue('cgCustomSites', ''));
      if (cgSites.some(site => hostMatchesSite(host, site))) return '51cg';
      // 按页面结构推断（最兜底的检测方式，不依赖域名）
      // 51吃瓜 Typecho 文章页
      if (document.querySelector('.post-content[itemprop="articleBody"]')) return '51cg';
      // 51吃瓜 其他页面结构
      if (document.querySelector('h1.post-title[itemprop="name headline"]')) return '51cg';
      if (document.querySelector('.post-meta a[href*="/category/"]')) return '51cg';
      if (document.querySelector('[data-xkrkllgl]')) return '51cg';
      if (document.querySelector('.post-content')) {
        const h1 = document.querySelector('h1.post-title');
        if (h1 && document.body.textContent.includes('吃瓜')) return '51cg';
      }
      // x6d3i 视频站
      if (document.querySelector('.detail-left, #contents, #wrap-slider')) return 'x6d3i';
      return 'discourse';
    }

    function isSiteEnabled(siteType) {
      const key = `siteEnabled_${siteType}`;
      return GM_getValue(key, true) !== false;
    }

    function isDomesticMediaPage() {
      const siteType = getSiteType();
      if (siteType === 'discourse') return false;
      if (!isSiteEnabled(siteType)) return false;
      if (siteType === 'wechat') {
        return !!document.querySelector('#js_content, .rich_media_content, #img-content');
      }
      if (siteType === 'zhihu') {
        return !!document.querySelector('.Post-RichTextContainer, .RichText, .Question-main, article');
      }
      if (siteType === 'weibo') {
        // 兼容新旧版微博（含 weibo.com React 版 + m.weibo.cn 移动版）
        return !!(
          document.querySelector('[node-type="feed_list_content_full"]') ||
          document.querySelector('[node-type="feed_list_content"]') ||
          document.querySelector('[class*="wbpro-feed-content"]') ||
          document.querySelector('[class*="Feed_detail"]') ||
          document.querySelector('[class*="detail_feed"]') ||
          document.querySelector('.WB_feed_detail') ||
          document.querySelector('[data-testid="detail"]') ||
          document.querySelector('article.weibo-main') ||
          (document.querySelector('.m-detail') && window.location.href.includes('weibo.cn'))
        );
      }
      if (siteType === 'x') {
        return !!document.querySelector('article[data-testid="tweet"], [data-testid="tweetText"]');
      }
      if (siteType === 'people') {
        // 人民日报系列站（opinion/culture/politics/theory/paper等子站模板各异）
        return !!(
          document.querySelector('.article, #articleContent, .text_con, .col_l_a, #rwb_zw, .rm_txt_con, .text_c, .content, article, .detail_content') ||
          // 只在特定URL路径下才用 broad 选择器，避免首页/列表页误判
          (/(\/n\d+\/|\/opinion\/|\/culture\/|\/politics\/|\/theory\/|\/paper\/|\/rmrb\/|\/[a-z]+\/\d{4,}\/)/.test(window.location.pathname) &&
           !!document.querySelector('[class*="article"], [class*="content"]'))
        );
      }
      if (siteType === 'xinhua') {
        return !!(
          document.querySelector('.article, #detail, .content, article[class], #detailContent, .main-aticle') ||
          // 只在具体文章路径下才用 broad 选择器，避免首页/列表页误判
          (/(\/detail\/|\/info\/|\/politics\/|\/culture\/|\/fortune\/|\/sports\/|\/local\/|\/[\d]{4,}\/)/.test(window.location.pathname) &&
           !!document.querySelector('[class*="article"], [class*="content"]'))
        );
      }
      if (siteType === 'thepaper') {
        return !!(document.querySelector('.article-content, .newsDetail_main__k3K0A, [class*="newsDetail_main"]'));
      }
      if (siteType === '36kr') {
        return !!(document.querySelector('.article-content, .rich-text-wrap, [class*="articleContent"]'));
      }
      if (siteType === 'sspai') {
        return !!(document.querySelector('.article-body, .post-content, [class*="post_content"]'));
      }
      if (siteType === 'juejin') {
        return !!(document.querySelector('.article-content, .markdown-body, [class*="article-content"]'));
      }
      if (siteType === 'ithome') {
        return !!(document.querySelector('.post-content, article .con-txt, #con-txt'));
      }
      if (siteType === 'toutiao') {
        return !!(document.querySelector('article, .article-content, [class*="articleContent"], [class*="article-detail"]'));
      }
      if (siteType === 'douyin') {
        // 抖音笔记/视频详情页检测
        return !!document.querySelector(
          '[data-e2e="feed-detail-title"], ' +           // 详情页标题
          '[data-e2e="feed-active-title"], ' +            // 视频标题
          '.slider-video-container, ' +                   // 视频轮播容器
          '[class*="video-info-detail"], ' +              // 视频信息详情
          '[class*="detail-content"], ' +                 // 通用详情内容
          '[class*="video-detail"], ' +                   // 视频详情
          '[class*="note-detail"], ' +                    // 笔记详情
          '.douyin-detail, ' +                            // 抖音详情容器
          '[data-e2e="feed-detail-video"], ' +            // 视频详情页
          'article[class*="detail"]'                      // 详情页article标签
        );
      }
      if (siteType === 'bilibili') {
        return !!(document.querySelector('.article-content, .opus-module-content, [class*="article-content"]'));
      }
      if (siteType === 'youtube') {
        return !!(document.querySelector('ytd-watch-metadata, #info-contents, ytd-reel-video-renderer, #player'));
      }
      if (siteType === 'trae') {
        // Trae社区是 Discourse 论坛，通过父检测处理
        return !!(document.querySelector('.cooked, .post-stream, .topic-body'));
      }
      if (siteType === 'feishu_doc') {
        // 飞书云文档页面：wiki/docx/docs/minutes/sheets 等
        const path = window.location.pathname;
        return /^\/(wiki|docx|docs|minutes|sheets|drive|base|mindnotes)\/[^/]+/.test(path);
      }
      if (siteType === '51cg') {
        // 51吃瓜网 Typecho 文章页检测 + SPA视频站/列表页
        return !!(
          document.querySelector('.post-content[itemprop="articleBody"]') ||
          document.querySelector('.post-content') ||
          /\/archives\/\d+/.test(window.location.pathname) ||
          document.querySelector('.dplayer, iframe[src*="m3u8"], iframe[src*="player"], video[src], video source[src]') ||
          /\/#\/category\/|\/#\/video\/|\/#\/detail\/|\/#\/play\/|\/#\/tag\/|\/#\/search\/|\/#\/list\/|\/#\/home\//.test(window.location.hash)
        );
      }
      if (siteType === 'x6d3i') {
        // x6d3i 视频站：内容详情页检测
        return !!(document.querySelector('.detail-left, #contents, #wrap-slider'));
      }
      return false;
    }

    function parseCustomSiteList(raw) {
      if (!raw) return [];
      const seen = new Set();
      return String(raw)
        .split(',')
        .map(s => s.trim().toLowerCase())
        .filter(Boolean)
        .map(site => site.replace(/^https?:\/\//, '').replace(/\/.*$/, '').replace(/^\*\./, ''))
        .filter(Boolean)
        .filter(site => {
          if (seen.has(site)) return false;
          seen.add(site);
          return true;
        });
    }

    function hostMatchesSite(currentHost, site) {
      if (!currentHost || !site) return false;
      return currentHost === site || currentHost.endsWith('.' + site);
    }

    // 检测是否是 Discourse 论坛 - v4.6.6 增强版（支持自定义站点 + 51吃瓜DOM兜底）
    function isDiscourseForumPage() {
      if (isDomesticMediaPage()) return true;
      // 51吃瓜 DOM 二次兜底：即使 getSiteType() 没识别出来，只要有吃瓜页面特征就算
      if (isSiteEnabled('51cg') !== false || isSiteEnabled('51cg') === undefined) {
        if (document.querySelector('.post-content[itemprop="articleBody"]') ||
            document.querySelector('h1.post-title[itemprop="name headline"]') ||
            document.querySelector('.post-meta a[href*="/category/"]') ||
            document.querySelector('[data-xkrkllgl]') ||
            document.querySelector('.dplayer')) {
          console.log('[Discourse Saver] 51吃瓜 DOM 兜底检测命中');
          return true;
        }
      }
      // 检查 Discourse 开关
      if (!isSiteEnabled('discourse')) return false;
      // 首先检查自定义站点列表
      const config = ConfigModule.get();
      const customSites = parseCustomSiteList(config.customSites || '');
      const currentHost = window.location.hostname.toLowerCase();

      if (customSites.some(site => hostMatchesSite(currentHost, site))) {
        console.log('[Discourse Saver] 匹配自定义站点:', currentHost);
        return true;
      }

      // 多种检测方式
      const checks = [
        // 检查 Discourse 特有的 meta 标签
        () => document.querySelector('meta[name="discourse_theme_id"]') !== null,
        () => document.querySelector('meta[name="discourse_current_homepage"]') !== null,
        () => document.querySelector('meta[name="generator"][content*="Discourse"]') !== null,
        // 检查 Discourse 特有的 DOM 结构
        () => document.querySelector('#ember-basic-dropdown-wormhole') !== null,
        () => document.querySelector('.ember-application') !== null,
        () => document.querySelector('#main-outlet') !== null,
        () => document.querySelector('.post-stream') !== null,
        () => document.querySelector('.topic-list') !== null,
        () => document.querySelector('.d-header') !== null,
        () => document.querySelector('.discourse-root') !== null,
        // 检查 Discourse 特有的 CSS 类
        () => document.body.classList.contains('discourse-touch') ||
              document.body.classList.contains('docked') ||
              document.body.classList.contains('logged-in') ||
              document.body.classList.contains('navigation-topics') ||
              document.body.classList.contains('categories-list') ||
              document.body.classList.contains('archetype-regular'),
        // 检查 HTML 标签
        () => document.documentElement.classList.contains('discourse-no-hierarchical-menu') ||
              document.documentElement.classList.contains('discourse-hierarchical-menu'),
        // 检查 Discourse 特有的脚本
        () => typeof window.Discourse !== 'undefined',
        () => typeof window.Ember !== 'undefined',
        // 检查 Discourse 特有的预加载数据
        () => document.getElementById('data-preloaded') !== null,
        // 检查 Discourse 特有的 API 端点（通过已加载的脚本）
        () => {
          const scripts = document.querySelectorAll('script[src*="discourse"]');
          return scripts.length > 0;
        },
        // 检查页面上是否有 Discourse 特有的元素
        () => document.querySelector('.category-breadcrumb') !== null,
        () => document.querySelector('.topic-post') !== null,
        () => document.querySelector('.crawler-post') !== null
      ];

      const result = checks.some(check => {
        try {
          return check();
        } catch (e) {
          return false;
        }
      });

      if (result) {
        console.log('[Discourse Saver] 检测到 Discourse 论坛');
      }

      return result;
    }

    // 检查是否在帖子页面 - 增强版
    function isTopicPage() {
      if (isDomesticMediaPage()) return true;

      // 优先检测 DOM（适配 NodeSeek/hostloc 等非标准 Discourse URL 的站点）
      const titleSelectors = [
        '#topic-title h1',
        '.topic-title h1',
        '#topic-title .fancy-title',
        '.fancy-title',
        'h1.topic-title',
        '.topic-header h1',
        'h1[itemprop="headline"]',
        'article header h1',
        // 非标准论坛通用标题选择器
        '#thread_subject',       // Discuz!
        '.ts span',              // Discuz! 主题标题
        'h1.ts a',               // Discuz! 主题链接
        '.post-header h1',       // 通用帖子标题
        '.thread-title h1',      // 通用帖子标题
        '.viewthread-title',     // 通用帖子标题
        'meta[property="og:title"][content*="NGA"]'  // NGA论坛
      ];
      for (const selector of titleSelectors) {
        if (document.querySelector(selector)) return true;
      }

      const contentSelectors = [
        '.topic-body .cooked',
        '.topic-post .cooked',
        '.post-stream .cooked',
        'article .cooked',
        '[itemprop="articleBody"]',
        // 非标准论坛通用内容选择器
        '.t_f',                  // Discuz! 帖子正文
        '.postmessage',          // Discuz! 帖子内容
        '.pcb .t_fsz table',     // Discuz! 帖子内容表格
        '#postlist .plc',        // Discuz! 帖子容器
        '.post-entry',           // 通用帖子条目
        '.message-content',      // 通用消息内容
        '.topic-content',        // 通用主题内容
        '.read-content',         // NGA 阅读内容
        '#postcontent0',         // NGA 首帖内容
        '.topic-body-content',   // 通用主题正文
        '.forum-content'         // 通用论坛内容
      ];
      for (const selector of contentSelectors) {
        if (document.querySelector(selector)) return true;
      }

      // 兜底：URL 模式检查

      // 标准 Discourse /t/slug/id 或 /t/id
      if (/^\/t\/(?:[^/]+\/)?\d+(?:\/\d+)?$/.test(window.location.pathname.replace(/\/+$/, ''))) {
        return true;
      }

      // Discuz! /thread-数字-数字-数字.html (hostloc/chiphell/right.com.cn/1point3acres 等)
      if (/\/thread-\d+/.test(window.location.pathname)) {
        return true;
      }

      // Discuz! /forum.php?mod=viewthread&tid=数字
      const params = new URLSearchParams(window.location.search);
      if (params.get('mod') === 'viewthread' && params.get('tid')) {
        return true;
      }

      // NGA bbs.nga.cn /read.php?tid=数字
      if (/\/read\.php/.test(window.location.pathname) && params.get('tid')) {
        return true;
      }

      // 通用论坛 URL 模式
      if (/\/forum\.php\?.*tid=/.test(window.location.href)) {
        return true;
      }
      if (/\/viewthread\.php\?.*tid=/.test(window.location.href)) {
        return true;
      }

      return false;
    }

    // v0.8.9: 51吃瓜网视频/列表型页面回退提取（无传统文章正文时使用）
    function extract51cgVideoOnly(url) {
      try {
        // 1. 尝试提取页面标题
        let title = '';
        const h1 = document.querySelector('h1, .post-title, .entry-title, [class*="title"]');
        if (h1) title = UtilModule.sanitizeTitleText(h1.textContent.trim());
        if (!title) title = UtilModule.sanitizeTitleText((document.title || '').replace(/\s*[-|_]\s*.+$/, '').trim());
        if (!title || title.length < 2) return null; // 标题太短说明不是内容页

        // 2. 收集视频：DPlayer / iframe / video 标签 / script 中的 m3u8
        const wrapper = document.createElement('div');
        let videoCount = 0;

        // DPlayer
        document.querySelectorAll('.dplayer').forEach(dp => {
          try {
            const raw = dp.getAttribute('data-config'); if (!raw) return;
            const vcfg = JSON.parse(raw), vurl = vcfg?.video?.url; if (!vurl) return;
            const vt = dp.getAttribute('data-video_title') || '视频';
            const wrap = document.createElement('div'); wrap.className = 'x-video';
            wrap.style.cssText = 'margin:16px 0;';
            wrap.innerHTML = '<iframe src="' + vurl + '" allowfullscreen loading="lazy" style="width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;"></iframe><p><a href="' + vurl + '" target="_blank">视频直链: ' + vt + '</a></p>';
            wrapper.appendChild(wrap); videoCount++;
          } catch (_) {}
        });

        // iframe（含视频播放器）
        document.querySelectorAll('iframe[src*="m3u8"], iframe[src*="player"], iframe[src*="video"]').forEach(ifr => {
          const wrap = document.createElement('div'); wrap.className = 'x-video';
          wrap.style.cssText = 'margin:16px 0;';
          wrap.innerHTML = '<iframe src="' + ifr.src + '" allowfullscreen loading="lazy" style="width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;"></iframe><p><a href="' + ifr.src + '" target="_blank">视频直链</a></p>';
          wrapper.appendChild(wrap); videoCount++;
        });

        // <video> 标签
        document.querySelectorAll('video[src], video source[src]').forEach(v => {
          const vsrc = v.src || (v.querySelector('source')?.src) || '';
          if (!vsrc) return;
          const wrap = document.createElement('div'); wrap.className = 'x-video';
          wrap.style.cssText = 'margin:16px 0;';
          wrap.innerHTML = '<p><a href="' + vsrc + '" target="_blank">视频直链: ' + vsrc + '</a></p>';
          wrapper.appendChild(wrap); videoCount++;
        });

        // script 中搜索 m3u8 链接
        if (videoCount === 0) {
          const scripts = document.querySelectorAll('script:not([src])');
          for (const s of scripts) {
            const m = s.textContent.match(/["']([^"']*\.m3u8[^"']*)["']/);
            if (m) {
              const vurl = m[1];
              const wrap = document.createElement('div'); wrap.className = 'x-video';
              wrap.style.cssText = 'margin:16px 0;';
              wrap.innerHTML = '<iframe src="' + vurl + '" allowfullscreen loading="lazy" style="width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;"></iframe><p><a href="' + vurl + '" target="_blank">视频直链</a></p>';
              wrapper.appendChild(wrap); videoCount++; break;
            }
          }
        }

        // 如果没有找到任何视频，尝试把页面主体内容提取出来（SPA列表等）
        if (videoCount === 0) {
          const main = document.querySelector('main, .main, #main, .content, #content, article, [class*="container"]');
          if (main) {
            const clone = main.cloneNode(true);
            clone.querySelectorAll('script, style, noscript').forEach(el => el.remove());
            const text = (clone.textContent || '').replace(/\s+/g, ' ').trim();
            if (text.length < 20) return null; // 内容太少，放弃
            wrapper.innerHTML = clone.innerHTML;
          } else {
            return null; // 完全没有可提取的内容
          }
        }

        // 3. 提取元数据
        const am = document.querySelector('[itemprop="author"] [itemprop="name"]');
        let author = am ? (am.getAttribute('content') || am.textContent || '').trim() : '';
        if (!author) { const al = document.querySelector('.post-meta a[href*="/author/"], [class*="author"] a'); author = al ? al.textContent.trim() : ''; }
        if (!author) author = '51吃瓜网';

        const cls = document.querySelectorAll('.post-meta a[href*="/category/"], [class*="category"] a');
        let cat = Array.from(cls).map(a => a.textContent.trim()).filter(Boolean).join('/');
        if (!cat) { const d = document.querySelector('.dplayer'); if (d) cat = d.getAttribute('data-video_type_name') || ''; }
        if (!cat) cat = '视频';

        const tags = [];
        document.querySelectorAll('.tags .keywords a, .keywords a, [class*="tag"] a').forEach(a => { const t = a.textContent.trim(); if (t && !tags.includes(t) && t.length < 50) tags.push(t); });
        if (!tags.length) { const mk = document.querySelector('meta[name="keywords"]'); if (mk) (mk.getAttribute('content') || '').split(',').forEach(k => { const x = k.trim(); if (x && !tags.includes(x) && x.length < 50) tags.push(x); }); }

        return { sourceType: '51cg', title: title, contentHTML: wrapper.innerHTML, url, author: author, authorUrl: location.origin, topicId: null, category: cat || '51吃瓜网', tags: tags };
      } catch (_) {
        return null;
      }
    }

    // 提取主帖内容 - 增强版
    function extractDomesticContent() {
      const siteType = getSiteType();
      const url = window.location.href;
      const pageTitle = (document.title || '').replace(/\s*[-|_]\s*.+$/, '').trim() || '未命名内容';

      if (siteType === 'wechat') {
        const title = UtilModule.sanitizeTitleText(document.querySelector('#activity-name')?.textContent || pageTitle);
        const contentElement = document.querySelector('#js_content, .rich_media_content, #img-content');
        if (!contentElement) return null;
        const author = (document.querySelector('#js_name')?.textContent || document.querySelector('.account_nickname_inner')?.textContent || '微信公众号').trim();
        const rawAuthorLink = document.querySelector('#js_name a[href], .account_nickname_inner a[href], a#js_name[href]')?.href || '';
        const authorLink = UtilModule.sanitizeExternalUrl(rawAuthorLink) || UtilModule.extractWeChatAuthorUrlFromDom();
        const fallbackAuthorLink = UtilModule.buildWeChatAuthorProfileUrl(url);
        return {
          sourceType: 'wechat',
          title,
          contentHTML: contentElement.innerHTML,
          url,
          author,
          authorUrl: authorLink || fallbackAuthorLink || UtilModule.sanitizeExternalUrl(window.location.href),
          topicId: null,
          category: '微信公众号',
          tags: []
        };
      }

      if (siteType === 'zhihu') {
        const title = (document.querySelector('h1.Post-Title, h1.QuestionHeader-title, h1')?.textContent || pageTitle).trim();
        // 知乎专栏文章 / 问题页第一个回答 / 回答详情
        let contentElement = document.querySelector('.Post-RichTextContainer, .RichText.ztext.Post-RichText');
        if (!contentElement) {
          // 问答页：取第一个回答的正文
          contentElement = document.querySelector('.AnswerItem .RichText, .List-item .RichText, .RichText');
        }
        if (!contentElement) return null;

        // 作者：从回答卡片或文章作者栏获取
        const authorEl = document.querySelector('.AuthorInfo-name a, .PostIndex-authorName a, .UserLink-link, .AuthorInfo .UserLink-link');
        const author = (authorEl?.textContent || document.querySelector('.AuthorInfo-name, .PostIndex-authorName')?.textContent || '知乎用户').trim();
        const authorUrl = authorEl?.href ? UtilModule.sanitizeExternalUrl(authorEl.href) : '';

        // 知乎图片处理：data-original / data-actualsrc 属性存放大图
        const imgs = contentElement.querySelectorAll('img');
        imgs.forEach(img => {
          const bigSrc = img.getAttribute('data-original') || img.getAttribute('data-actualsrc') || '';
          if (bigSrc && /zhimg\.com/i.test(bigSrc)) {
            img.setAttribute('src', bigSrc);
          }
        });

        // 点击"展开阅读全文"
        const expandBtn = document.querySelector('.ContentItem-expandButton button, .RichContent-inner--collapsed + button, button.ContentItem-more');
        if (expandBtn) { try { expandBtn.click(); } catch (_) {} }

        return {
          sourceType: 'zhihu',
          title,
          contentHTML: contentElement.innerHTML,
          url,
          author,
          authorUrl: authorUrl || 'https://www.zhihu.com',
          topicId: null,
          category: '知乎',
          tags: []
        };
      }

      if (siteType === 'weibo') {
        // 微博 weibo.com 桌面版（React 改版后使用 CSS Modules 哈希类名）
        // 同时兼容旧版节点属性和移动端 m.weibo.cn
        // 支持 Feed 列表页（首条帖子）和单条详情页

        // 辅助：查找第一个有效帖子容器（Feed 页和详情页通用）
        const postContainerSelectors = [
          // 详情页容器
          '[class*="Feed_detail"]',
          '[class*="detail_feed"]',
          '[data-testid="detail"]',
          '.m-detail .m-con-ul .card-wrap .card',
          // Feed 列表页 - 单条帖子容器
          '[class*="Feed_body"]',
          '[class*="wbpro-feed"]',
          '[class*="card-wrap"][mid]',
          '.WB_feed_detail',
          'article.weibo-main',
          // 兜底
          'article'
        ];

        let postContainer = null;
        for (const sel of postContainerSelectors) {
          const el = document.querySelector(sel);
          if (el && el.textContent.trim().length > 10) { postContainer = el; break; }
        }
        if (!postContainer) return null;

        // 自动展开「展开全文」按钮
        const expandSelectors = [
          'a[action-type="fl_unfold"]',
          '[class*="expand"]',
          'a[href="javascript:;"][class*="more"]',
          'button[class*="expand"]',
          'span[class*="展开"]',
          '.wbpro-feed-content .expand',
        ];
        for (const sel of expandSelectors) {
          const expandBtn = postContainer.querySelector(sel) || document.querySelector(sel);
          if (expandBtn && /展开|全文|more|unfold/i.test(expandBtn.textContent)) {
            try { expandBtn.click(); } catch (_) {}
            break;
          }
        }

        // 提取正文内容
        const textSelectors = [
          '[node-type="feed_list_content_full"]',
          '[node-type="feed_list_content"]',
          '[class*="wbpro-feed-content"]',
          '[class*="detail_wbtext"]',
          '[class*="Feed_rePostContent"]',
          '[class*="Feed_text"]',
        ];
        let textElement = null;
        for (const sel of textSelectors) {
          const el = postContainer.querySelector(sel);
          if (el && el.textContent.trim().length > 5) { textElement = el; break; }
        }
        // 兜底用 postContainer 本身的文本区域
        if (!textElement) textElement = postContainer;

        const textContent = (textElement.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);
        const title = textContent || pageTitle || '微博帖子';

        // 提取作者（在帖子容器内找，而不是全局找）
        const authorSelectors = [
          '[class*="head_name"] a',
          '[class*="wbpro-screen-font"] a',
          '[class*="nick"] a',
          '[class*="name"] a',
          'a[href*="/u/"] span',
          '[class*="head-info"] a',
          'a[href*="/u/"]'
        ];
        let author = '微博用户';
        let authorUrl = '';
        for (const sel of authorSelectors) {
          const el = postContainer.querySelector(sel) || document.querySelector(sel);
          if (el && el.textContent.trim() && el.textContent.trim().length < 30) {
            author = el.textContent.trim();
            if (el.href) authorUrl = UtilModule.sanitizeExternalUrl(el.href);
            break;
          }
        }

        // 提取图片（微博使用 sinaimg.cn CDN）
        // 图片可能在 img[src], img[data-src], 或背景图中
        const images = [];
        const imgEls = postContainer.querySelectorAll('img');
        imgEls.forEach(img => {
          const src = img.getAttribute('src') || img.getAttribute('data-src') || '';
          if (!src) return;
          // 过滤：只保留 sinaimg / weibocdn 图片，排除 emoji/icon
          if (!/sinaimg\.cn|weibocdn|img\.t\.sinajs/i.test(src)) return;
          if (/emoticon|emoji|icon|face/i.test(src)) return;
          // 转换缩略图为大图（thumbnail → large/original）
          let fullSrc = src
            .replace(/\/thumb\d+\//, '/large/')
            .replace(/\/orj\d+\//, '/large/')
            .replace(/\/mw\d+\//, '/large/')
            .replace(/\/sq\d+\//, '/large/')
            .replace(/\/bmiddle\//, '/large/')
            .replace(/\/small\//, '/large/');
          if (!fullSrc.startsWith('http')) fullSrc = 'https:' + fullSrc;
          if (!images.includes(fullSrc)) images.push(fullSrc);
        });

        // 构建 contentHTML：正文 + 图片
        let contentHTML = textElement.innerHTML || '';
        if (images.length > 0) {
          contentHTML += '<div class="weibo-images">';
          images.forEach(src => {
            contentHTML += `<p><img src="${src}" alt="微博图片"></p>`;
          });
          contentHTML += '</div>';
        }

        return {
          sourceType: 'weibo',
          title,
          contentHTML,
          url,
          author,
          authorUrl: authorUrl || window.location.origin,
          topicId: null,
          category: '微博',
          tags: []
        };
      }

      if (siteType === 'x') {
        const mainArticle = document.querySelector('article[data-testid="tweet"]');
        if (!mainArticle) return null;

        const title = pageTitle || 'X/Twitter 推文';
        const author = (mainArticle.querySelector('[data-testid="User-Name"]')?.textContent || 'X用户').trim();
        const usernameMatch = author.match(/@([a-zA-Z0-9_]+)/);
        const authorName = usernameMatch ? `@${usernameMatch[1]}` : author;

        // 辅助：判断是否为广告/推广推文
        function isPromotedTweet(art) {
          const socialCtx = art.querySelector('[data-testid="socialContext"]');
          if (socialCtx && /promoted|推广|广告/i.test(socialCtx.textContent)) return true;
          const spans = art.querySelectorAll('span');
          for (const sp of spans) {
            if (/^(Promoted|Ad|推广|广告)$/i.test(sp.textContent.trim())) return true;
          }
          return false;
        }

        // 辅助：展开 t.co 链接（从 DOM <a> 的 title 或展示文本读取真实URL）
        function expandTcoLinks(el) {
          if (!el) return;
          el.querySelectorAll('a[href*="t.co"]').forEach(a => {
            const expanded = a.getAttribute('title') || a.getAttribute('data-expanded-url') || '';
            const displayText = a.textContent || '';
            // 优先使用 title 属性（X 会把完整URL放在title里）
            if (expanded && /^https?:\/\//i.test(expanded)) {
              a.href = expanded;
              if (displayText.startsWith('…') || displayText.endsWith('…') || /^t\.co/i.test(displayText)) {
                a.textContent = expanded;
              }
            } else if (displayText && /^https?:\/\//i.test(displayText) && !displayText.includes('t.co')) {
              a.href = displayText;
            }
          });
        }

        // 辅助：提取投票(Poll)
        function extractPoll(art) {
          const pollContainer = art.querySelector('[data-testid="cardPoll"], [role="group"][aria-label]');
          if (!pollContainer) return '';
          const choices = pollContainer.querySelectorAll('[data-testid*="Choice"], [role="radio"], [role="option"], div[dir="ltr"]');
          if (choices.length === 0) return '';
          let pollHtml = '<blockquote><strong>📊 投票</strong><br>';
          choices.forEach(c => {
            const text = c.textContent.trim();
            if (text && text.length < 200) pollHtml += `• ${text}<br>`;
          });
          // 尝试获取总票数
          const voteCount = pollContainer.querySelector('span[dir="ltr"]')?.textContent || '';
          if (voteCount && /vote|票/i.test(voteCount)) pollHtml += `<em>${voteCount}</em><br>`;
          pollHtml += '</blockquote>';
          return pollHtml;
        }

        // 辅助：提取引用推文
        function extractQuoteTweet(art) {
          const quoteEl = art.querySelector('[data-testid="quoteTweet"], [role="link"][tabindex="0"] article, [aria-labelledby] > div > div > article');
          if (!quoteEl) {
            // 尝试查找引用推文容器（嵌套的带边框区域）
            const innerLink = art.querySelector('div[role="link"] [data-testid="tweetText"]');
            if (innerLink && innerLink !== art.querySelector('[data-testid="tweetText"]')) {
              const quoteAuthor = innerLink.closest('[role="link"]')?.querySelector('[data-testid="User-Name"]')?.textContent || '';
              return `<blockquote><strong>引用 ${quoteAuthor}</strong><br>${innerLink.innerHTML}</blockquote>`;
            }
            return '';
          }
          const quoteText = quoteEl.querySelector('[data-testid="tweetText"]')?.innerHTML || quoteEl.textContent || '';
          const quoteAuthor = quoteEl.querySelector('[data-testid="User-Name"]')?.textContent || '';
          return `<blockquote><strong>引用 ${quoteAuthor}</strong><br>${quoteText}</blockquote>`;
        }

        // 辅助：提取时间戳
        function extractTimestamp(art) {
          const timeEl = art.querySelector('time[datetime]');
          if (!timeEl) return '';
          const dt = timeEl.getAttribute('datetime');
          try {
            return new Date(dt).toLocaleString('zh-CN', { hour12: false });
          } catch (_) { return dt; }
        }

        const contentBlocks = [];
        const allTweets = Array.from(document.querySelectorAll('article[data-testid="tweet"]')).slice(0, 20);
        let threadAuthor = '';
        for (let i = 0; i < allTweets.length; i++) {
          const art = allTweets[i];
          // 跳过广告推文
          if (isPromotedTweet(art)) continue;

          const head = (art.querySelector('[data-testid="User-Name"]')?.textContent || '').trim();
          const u = (head.match(/@([a-zA-Z0-9_]+)/) || [])[1] || '';
          if (i === 0) threadAuthor = u;
          if (threadAuthor && u && u !== threadAuthor) break;

          const textEl = art.querySelector('[data-testid="tweetText"]');
          // 展开 t.co 短链接
          if (textEl) expandTcoLinks(textEl);

          const tweetUrl = art.querySelector('a[href*="/status/"]')?.href || '';
          const tweetId = (tweetUrl.match(/\/status\/(\d+)/) || [])[1] || '';
          const mediaNodes = art.querySelectorAll('img[src*="pbs.twimg.com/media"], video[poster*="pbs.twimg.com"], [data-testid="tweetPhoto"] img');
          const cachedVideoVariants = tweetId ? XVideoModule.getVariants(tweetId) : [];
          const timestamp = extractTimestamp(art);

          let block = '<section>';
          // 时间戳
          if (timestamp) block += `<p style="color:#666;font-size:0.9em;">${timestamp}</p>`;
          // 正文
          if (textEl) block += textEl.innerHTML;
          // 投票
          block += extractPoll(art);
          // 引用推文
          block += extractQuoteTweet(art);
          // 原文链接
          if (tweetUrl) block += `<p><a href="${tweetUrl}" target="_blank">原推文链接</a></p>`;
          // 图片
          mediaNodes.forEach((m) => {
            const src = m.getAttribute('src') || m.getAttribute('poster') || '';
            if (src && /pbs\.twimg\.com/i.test(src)) {
              block += `<p><img src="${src}" alt="tweet-media"></p>`;
            }
          });
          // 视频
          if (cachedVideoVariants.length > 0) {
            cachedVideoVariants.slice(0, 4).forEach((v, idx) => {
              block += `<p><a href="${v.url}" target="_blank">视频${idx + 1}：${v.url}</a></p>`;
            });
          } else if (art.querySelector('video')) {
            block += `<p><em>检测到视频，但暂未命中缓存，建议稍后重试保存。</em></p>`;
          }
          block += '</section>';
          if (block.replace(/<[^>]+>/g, '').trim()) contentBlocks.push(block);
        }

        return {
          sourceType: 'x',
          title,
          contentHTML: contentBlocks.join('<hr>') || (mainArticle.innerHTML || ''),
          url,
          author: authorName,
          authorUrl: `https://x.com/${usernameMatch ? usernameMatch[1] : ''}`,
          topicId: null,
          category: 'X/Twitter',
          tags: []
        };
      }

      if (siteType === 'people') {
        const contentEl = document.querySelector('#articleContent, .text_con, .col_l_a, #rwb_zw, .rm_txt_con, .text_c, .detail_content, .article, [class*="article"], article, .content');
        if (!contentEl) return null;
        const title = (document.querySelector('h1, .article-title, .title, .detail_title, [class*="title"]')?.textContent || pageTitle).trim();
        const author = (document.querySelector('.author, .source, .sou, [class*="author"], [class*="source"], .editor')?.textContent || '人民日报').trim().replace(/^(来源|作者|责编|编辑)[:：]?\s*/, '');
        return { sourceType: 'people', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: 'https://www.people.com.cn', topicId: null, category: '人民日报', tags: ['新闻'] };
      }

      if (siteType === 'xinhua') {
        const contentEl = document.querySelector('#detail, #detailContent, .main-aticle, .article, [class*="article"], .content, [class*="content"]');
        if (!contentEl) return null;
        const title = (document.querySelector('h1, .article-title, .title')?.textContent || pageTitle).trim();
        const author = (document.querySelector('.author, .source, [class*="author"]')?.textContent || '新华网').trim().replace(/^(来源|作者|记者)[:：]?\s*/, '');
        return { sourceType: 'xinhua', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: 'https://www.xinhuanet.com', topicId: null, category: '新华网', tags: ['新闻'] };
      }

      if (siteType === 'thepaper') {
        const contentEl = document.querySelector('.article-content, [class*="newsDetail_main"], [class*="articleContent"]');
        if (!contentEl) return null;
        const title = (document.querySelector('h1, [class*="newsDetail_title"], [class*="headline"]')?.textContent || pageTitle).trim();
        const author = (document.querySelector('[class*="newsDetail_author"], [class*="source"], .author')?.textContent || '澎湃新闻').trim().replace(/^(来源|作者)[:：]?\s*/, '');
        return { sourceType: 'thepaper', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: 'https://www.thepaper.cn', topicId: null, category: '澎湃新闻', tags: ['新闻'] };
      }

      if (siteType === '36kr') {
        const contentEl = document.querySelector('[class*="articleContent"], .article-content, .rich-text-wrap, .common-content');
        if (!contentEl) return null;
        const title = (document.querySelector('h1, [class*="articleTitle"], [class*="article-title"]')?.textContent || pageTitle).trim();
        const author = (document.querySelector('[class*="authorName"], [class*="author_name"], .author')?.textContent || '36氪').trim();
        return { sourceType: '36kr', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: 'https://36kr.com', topicId: null, category: '36氪', tags: ['科技'] };
      }

      if (siteType === 'sspai') {
        const contentEl = document.querySelector('.article-body, .post-content, [class*="post_content"], .content-inner');
        if (!contentEl) return null;
        const title = (document.querySelector('h1, .article-title, [class*="title"]')?.textContent || pageTitle).trim();
        const author = (document.querySelector('[class*="author"] a, [class*="AuthorInfo"] .name')?.textContent || '少数派').trim();
        const authorHref = UtilModule.sanitizeExternalUrl(document.querySelector('[class*="author"] a, [class*="AuthorInfo"] a')?.href || '');
        return { sourceType: 'sspai', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: authorHref || 'https://sspai.com', topicId: null, category: '少数派', tags: ['效率'] };
      }

      if (siteType === 'juejin') {
        const contentEl = document.querySelector('.article-content, .markdown-body, [class*="article-content"]');
        if (!contentEl) return null;
        const title = (document.querySelector('h1, [class*="article-title"], .title-article')?.textContent || pageTitle).trim();
        const author = (document.querySelector('[class*="username"], .author-name, [class*="name"]')?.textContent || '掘金').trim();
        const authorHref = UtilModule.sanitizeExternalUrl(document.querySelector('[class*="user-popover"] a, [class*="avatar-box"] a')?.href || '');
        return { sourceType: 'juejin', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: authorHref || 'https://juejin.cn', topicId: null, category: '掘金', tags: ['技术'] };
      }

      if (siteType === 'ithome') {
        const contentEl = document.querySelector('.post-content, article .con-txt, #con-txt, .con');
        if (!contentEl) return null;
        const title = (document.querySelector('h1, .article-title')?.textContent || pageTitle).trim();
        const author = (document.querySelector('.source, [class*="author"]')?.textContent || 'IT之家').trim().replace(/^来源[:：]?\s*/, '');
        return { sourceType: 'ithome', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: 'https://www.ithome.com', topicId: null, category: 'IT之家', tags: ['科技'] };
      }

      if (siteType === 'toutiao') {
        const contentEl = document.querySelector('article, .article-content, [class*="articleContent"], [class*="article-detail"]');
        if (!contentEl) return null;
        const title = (document.querySelector('h1, [class*="article-title"], [class*="title"]')?.textContent || pageTitle).trim();
        const author = (document.querySelector('[class*="author-name"], [class*="name"], [class*="user-info"] a')?.textContent || '头条号').trim();
        const authorHref = UtilModule.sanitizeExternalUrl(document.querySelector('[class*="author-name"] a, [class*="user-info"] a')?.href || '');
        return { sourceType: 'toutiao', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: authorHref || 'https://www.toutiao.com', topicId: null, category: '今日头条', tags: ['资讯'] };
      }

      if (siteType === 'douyin') {
        const contentEl = document.querySelector(
          '[class*="video-info-detail"], ' +       // 视频详情信息区
          '[class*="detail-content"], ' +           // 详情内容
          '[class*="note-detail"], ' +              // 笔记详情
          '[class*="desc"], ' +                     // 描述区
          '.slider-video-container, ' +             // 视频轮播容器
          'article[class*="detail"]'                // 详情页article
        );
        if (!contentEl) return null;
        const title = (document.querySelector('h1, [class*="title"], [class*="desc"]')?.textContent || pageTitle).trim().slice(0, 100);
        const author = (document.querySelector('[class*="author-name"], [class*="nickname"], [class*="name"]')?.textContent || '抖音用户').trim();
        const authorHref = UtilModule.sanitizeExternalUrl(document.querySelector('[class*="author"] a, [class*="user-info"] a')?.href || '');
        return { sourceType: 'douyin', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: authorHref || url, topicId: null, category: '抖音', tags: ['短视频'] };
      }

      if (siteType === 'bilibili') {
        const contentEl = document.querySelector('.article-content, .opus-module-content, [class*="article-content"], .article-holder');
        if (!contentEl) return null;
        const title = (document.querySelector('h1, [class*="title"], .article-title')?.textContent || pageTitle).trim();
        const author = (document.querySelector('[class*="author-name"], .up-name, [class*="nickname"]')?.textContent || 'B站用户').trim();
        const authorHref = UtilModule.sanitizeExternalUrl(document.querySelector('.up-name[href], [class*="author"] a')?.href || '');
        return { sourceType: 'bilibili', title, contentHTML: contentEl.innerHTML, url, author, authorUrl: authorHref || 'https://www.bilibili.com', topicId: null, category: 'B站', tags: ['创作'] };
      }

      if (siteType === 'youtube') {
        // YouTube 视频/Shorts 页面提取
        const isShorts = /\/shorts\//.test(window.location.pathname);
        const videoId = (() => {
          const m = window.location.href.match(/[?&]v=([a-zA-Z0-9_-]{11})/) ||
                    window.location.pathname.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
          return m ? m[1] : '';
        })();

        // 标题
        const titleEl = document.querySelector('h1.ytd-watch-metadata yt-formatted-string, h1.title yt-formatted-string, #title h1, ytd-reel-video-renderer h2');
        const title = (titleEl?.textContent || document.title.replace(/ - YouTube$/, '')).trim();

        // 频道名
        const channelEl = document.querySelector('#channel-name a, ytd-channel-name a, #owner #channel-name yt-formatted-string a');
        const author = (channelEl?.textContent || 'YouTube用户').trim();
        const authorUrl = channelEl?.href ? UtilModule.sanitizeExternalUrl(channelEl.href) : '';

        // 描述
        const descEl = document.querySelector('#description-inner, ytd-text-inline-expander #plain-snippet-text, #description .content, ytd-expander[slot="description"] span');
        const description = (descEl?.textContent || '').trim();

        // 发布时间
        const dateEl = document.querySelector('#info-strings yt-formatted-string, .date yt-formatted-string, [class*="publishDate"], #info span:last-child');
        const publishDate = (dateEl?.textContent || '').trim();

        // 构建内容HTML
        let contentHTML = '';
        // 缩略图
        if (videoId) {
          contentHTML += `<p><img src="https://img.youtube.com/vi/${videoId}/maxresdefault.jpg" alt="video thumbnail"></p>`;
          contentHTML += `<p><strong>视频链接：</strong><a href="https://www.youtube.com/watch?v=${videoId}">https://www.youtube.com/watch?v=${videoId}</a></p>`;
        }
        if (publishDate) contentHTML += `<p><strong>发布时间：</strong>${publishDate}</p>`;
        if (description) {
          // 将换行转为 <br>，链接保持纯文本
          const descHtml = description.replace(/\n/g, '<br>').replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1">$1</a>');
          contentHTML += `<h2>视频描述</h2><div>${descHtml}</div>`;
        }

        // 章节/时间戳列表
        const chapters = document.querySelectorAll('ytd-macro-markers-list-item-renderer, .ytp-chapter-container');
        if (chapters.length > 0) {
          contentHTML += '<h2>章节</h2><ul>';
          chapters.forEach(ch => {
            const time = (ch.querySelector('#time, .timestamp')?.textContent || '').trim();
            const label = (ch.querySelector('h4, #details h4, .chapter-title')?.textContent || ch.textContent || '').trim().slice(0, 100);
            if (label) contentHTML += `<li>${time ? time + ' - ' : ''}${label}</li>`;
          });
          contentHTML += '</ul>';
        }

        // 评论区前几条（如果展开可见）
        const comments = document.querySelectorAll('ytd-comment-thread-renderer #content-text');
        if (comments.length > 0) {
          contentHTML += '<h2>热门评论</h2>';
          Array.from(comments).slice(0, 5).forEach(c => {
            const commentAuthor = c.closest('ytd-comment-thread-renderer')?.querySelector('#author-text')?.textContent?.trim() || '';
            contentHTML += `<blockquote><strong>${commentAuthor}</strong><br>${c.textContent.trim()}</blockquote>`;
          });
        }

        return {
          sourceType: 'youtube',
          title: isShorts ? `[Shorts] ${title}` : title,
          contentHTML: contentHTML || `<p>视频：${title}</p>`,
          url,
          author,
          authorUrl: authorUrl || `https://www.youtube.com`,
          topicId: videoId || null,
          category: 'YouTube',
          tags: isShorts ? ['Shorts'] : ['视频']
        };
      }

      if (siteType === 'feishu_doc') {
        // 飞书云文档异步提取，在 extractData 中直接处理
        // 这里返回占位符以通过 isDomesticMediaPage 检测
        return null;
      }

      // 51吃瓜网
      if (siteType === '51cg') {
        const body51 = document.querySelector('.post-content[itemprop="articleBody"]');
        if (!body51) {
          // v0.8.9: 视频/列表型页面回退 — 无传统文章正文，尝试提取视频
          const videoOnlyResult = extract51cgVideoOnly(url);
          if (videoOnlyResult) return videoOnlyResult;
          return null;
        }
        const titleEl51 = document.querySelector('h1.post-title[itemprop="name headline"]');
        const title51 = UtilModule.sanitizeTitleText(titleEl51 ? titleEl51.textContent.trim() : (document.title.split('|')[0] || document.title));
        const contentEl51 = body51.cloneNode(true);
        ['.txt-apps', '.horizontal-block', '.btn-download', '.copy-box', '.hot-news-section',
         '.content-tabs', '.content-copyright', '.post-near', '.tags', '.modify-time',
         '.tjtagmanager', '.line', 'div[style*="text-align:center"][style*="margin-block"]']
          .forEach(sel => { try { contentEl51.querySelectorAll(sel).forEach(el => el.remove()); } catch (_) {} });
        contentEl51.querySelectorAll('blockquote').forEach(el => {
          const t = el.textContent || '';
          if (/(?:51吃瓜最新地址|加入交流群|播放异常|最新地址|吃瓜.*地址|.*@pm\.me|chigua\.com|51cg[12]?\.com|51cge[12]?\.com)/i.test(t)) el.remove();
        });
        contentEl51.querySelectorAll('table').forEach(el => {
          if (/吃瓜中心|必看大瓜|吃瓜榜单|每日大赛/.test(el.textContent||'')) el.remove();
        });
        // 过滤51吃瓜广告段落：淫秽/赌博/VPN广告链接
        const adLinkPatterns = [
          '美女约炮', '皇冠体育', '开云体育', 'PA视讯', '空降上门',
          '免费看', 'VPN', '91por', '抖阴', '成人抖阴',
          '操逼', '免费海角', '免费毛片', '免费A片', 'ai操逼',
          '买球', '世界杯买球', '暗网xvideo', '91免费看',
          '淫妻', '小马拉大车', '快手视频', '免费看萝莉',
          '黑料专区', '热门吃瓜'
        ];
        contentEl51.querySelectorAll('p').forEach(p => {
          const t = p.textContent || '';
          if (/版权声明|转载请注明|该文章由|本文著作权|追究/.test(t)) p.remove();
          else if (t.startsWith('关键词：') || t.startsWith('关键词:')) p.remove();
          else if (adLinkPatterns.some(kw => t.includes(kw))) p.remove();
        });
        // 处理图片：先过滤掉主题UI图标，再处理内容图片
        ['.danmaku', '.danmaku-bar', '.danmaku-box', '.comment-info', '.theme-img',
         'img[src*="/usr/themes/"]', 'img[src*="download.png"]', 'img[src*="chigua.png"]']
          .forEach(sel => { try { contentEl51.querySelectorAll(sel).forEach(el => el.remove()); } catch (_) {} });
        contentEl51.querySelectorAll('p, div, span').forEach(el => {
          const t = (el.textContent || '').trim();
          if (/^(?:弹幕加载中|设置弹幕颜色|设置弹幕类型|弹幕列表)$/.test(t) && el.children.length === 0) el.remove();
        });
        // 获取页面中所有已渲染的图片（此时已通过 waitForCgImagesLoaded 等待加载完成）
        const liveAllImgs = document.querySelectorAll('.post-content[itemprop="articleBody"] img');
        // 收集 clone 中有 data-xkrkllgl 的内容图片（排除已过滤的主题图标）
        const cloneContentImgs = Array.from(contentEl51.querySelectorAll('img')).filter(img => img.hasAttribute('data-xkrkllgl'));
        cloneContentImgs.forEach(img => {
          const real = img.getAttribute('data-xkrkllgl');
          if (!real) return;
          // 判断是直接URL还是加密数据
          if (/^https?:\/\//.test(real)) {
            // 是有效URL，直接使用（后续 embedImagesInMarkdown 会下载）
            img.src = real;
            img.setAttribute('data-src', real);
          } else {
            // 是加密数据，从页面已渲染的 img 用 canvas 截图捕获
            // 按 clone 中内容图片的顺序匹配 live DOM 中有 data-xkrkllgl 的图片
            const liveContentImgs = Array.from(liveAllImgs).filter(li => li.hasAttribute('data-xkrkllgl'));
            const idx = cloneContentImgs.indexOf(img);
            const liveImg = idx >= 0 && idx < liveContentImgs.length ? liveContentImgs[idx] : null;
            // Canvas 截图
            if (liveImg && liveImg.complete && liveImg.naturalWidth > 0) {
              try {
                const canvas = document.createElement('canvas');
                const w = liveImg.naturalWidth, h = liveImg.naturalHeight;
                if (w && h) {
                  const maxDim = 4096;
                  let sw = w, sh = h;
                  if (w > maxDim || h > maxDim) {
                    const ratio = Math.min(maxDim / w, maxDim / h);
                    sw = Math.round(w * ratio); sh = Math.round(h * ratio);
                  }
                  canvas.width = sw; canvas.height = sh;
                  const ctx = canvas.getContext('2d');
                  ctx.drawImage(liveImg, 0, 0, sw, sh);
                  const dataUri = canvas.toDataURL('image/jpeg', 0.90);
                  img.src = dataUri;
                  img.setAttribute('data-src', dataUri);
                  console.log('[Discourse Saver] 51吃瓜图片 canvas 截图成功', liveImg.naturalWidth + 'x' + liveImg.naturalHeight);
                }
              } catch (e) {
                // Canvas 失败，尝试用 live img 的当前 src（页面JS可能已解密为 blob/data URL）
                console.warn('[Discourse Saver] Canvas截图失败，尝试读取已解密src:', e.message);
                try {
                  const decSrc = liveImg.currentSrc || liveImg.src;
                  if (decSrc && !/banner\.png/i.test(decSrc) && decSrc !== img.src) {
                    img.src = decSrc;
                    img.setAttribute('data-src', decSrc);
                  }
                } catch (_) {}
              }
            } else if (liveImg) {
              // 图片未加载完成（不应发生，因为前面已等待），用 live src 作为兜底
              const fallbackSrc = liveImg.currentSrc || liveImg.src;
              if (fallbackSrc && !/^data:/.test(fallbackSrc) && /^https?:\/\//.test(fallbackSrc)) {
                img.src = fallbackSrc;
                img.setAttribute('data-src', fallbackSrc);
                console.log('[Discourse Saver] 51吃瓜图片未加载完成，使用live src兜底');
              }
            }
          }
        });
        contentEl51.querySelectorAll('.dplayer').forEach(dp => {
          try {
            const raw = dp.getAttribute('data-config'); if (!raw) return;
            const vcfg = JSON.parse(raw), vurl = vcfg?.video?.url; if (!vurl) return;
            const vt = dp.getAttribute('data-video_title') || '视频';
            const wrap = document.createElement('div'); wrap.className = 'x-video';
            wrap.style.cssText = 'margin:16px 0;';
            wrap.innerHTML = '<iframe src="' + vurl + '" allowfullscreen loading="lazy" style="width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;"></iframe><p><a href="' + vurl + '" target="_blank">视频直链: ' + vt + '</a></p>';
            dp.replaceWith(wrap);
          } catch (_) {}
        });
        const am51 = document.querySelector('[itemprop="author"] [itemprop="name"]');
        let author51 = am51 ? (am51.getAttribute('content') || am51.textContent || '').trim() : '';
        if (!author51) { const al51 = document.querySelector('.post-meta a[href*="/author/"]'); author51 = al51 ? al51.textContent.trim() : ''; }
        if (!author51) author51 = '51吃瓜网';
        const cls51 = document.querySelectorAll('.post-meta a[href*="/category/"]');
        let cat51 = Array.from(cls51).map(a => a.textContent.trim()).filter(Boolean).join('/');
        if (!cat51) { const d51 = document.querySelector('.dplayer'); if (d51) cat51 = d51.getAttribute('data-video_type_name') || ''; }
        if (!cat51) cat51 = '吃瓜';
        const tags51 = [];
        document.querySelectorAll('.tags .keywords a, .keywords a').forEach(a => { const t = a.textContent.trim(); if (t && !tags51.includes(t) && t.length < 50) tags51.push(t); });
        if (!tags51.length) { const mk51 = document.querySelector('meta[name="keywords"]'); if (mk51) (mk51.getAttribute('content') || '').split(',').forEach(k => { const x = k.trim(); if (x && !tags51.includes(x) && x.length < 50) tags51.push(x); }); }
        return { sourceType: '51cg', title: title51, contentHTML: contentEl51.innerHTML, url, author: author51, authorUrl: location.origin, topicId: null, category: cat51 || '51吃瓜网', tags: tags51 };
      }

      // x6d3i 视频站
      if (siteType === 'x6d3i') {
        const detailBox = document.querySelector('.detail-left, #contents');
        if (!detailBox) return null;
        let xtitle = '';
        const h1 = document.querySelector('.detail-left h1, #contents h1, .nav02-title');
        if (h1) xtitle = h1.textContent.trim();
        if (!xtitle) xtitle = UtilModule.sanitizeTitleText(document.title || 'x6d3i视频');
        const xcontentEl = detailBox.cloneNode(true);
        ['.bx-wrapper', '.bx-controls', 'script', 'style', '.d-btn', '.download_11',
         'a[href*="javascript"]', '.right-bar', '.detail-right']
          .forEach(sel => { try { xcontentEl.querySelectorAll(sel).forEach(el => el.remove()); } catch (_) {} });
        let videoUrl = '';
        const scripts = document.querySelectorAll('script:not([src])');
        for (const s of scripts) { const m = s.textContent.match(/["']([^"']*\\.m3u8[^"']*)["']/); if (m) { videoUrl = m[1]; break; } }
        if (videoUrl) {
          const wrap = document.createElement('div'); wrap.className = 'x-video';
          wrap.style.cssText = 'margin:16px 0;';
          wrap.innerHTML = '<iframe src="' + videoUrl + '" allowfullscreen loading="lazy" style="width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;"></iframe><p><a href="' + videoUrl + '" target="_blank">视频直链</a></p>';
          xcontentEl.insertBefore(wrap, xcontentEl.firstChild);
        }
        xcontentEl.querySelectorAll('img').forEach(img => { const ds = img.getAttribute('data-src'); if (ds) img.src = ds; });
        const meta6 = {};
        const dts6 = document.querySelectorAll('#contents dl dt, .detail-left dl dt');
        const dds6 = document.querySelectorAll('#contents dl dd, .detail-left dl dd');
        dts6.forEach((dt, i) => { const key = dt.textContent.replace(/[\\s:：]/g, '').trim(); const val = dds6[i] ? dds6[i].textContent.trim() : ''; meta6[key] = val; });
        const xauthor = meta6['演员'] || meta6['出演'] || meta6['作者'] || meta6['演者'] || 'x6d3i';
        let xcat = meta6['类型'] || meta6['类别'] || '视频';
        const xtags = [];
        const tagRaw = meta6['标签'] || meta6['タグ'] || '';
        if (tagRaw) tagRaw.split(/[\\s,，、]+/).forEach(t => { const x = t.trim(); if (x && !xtags.includes(x)) xtags.push(x); });
        if (!xcontentEl.innerHTML.trim()) return null;
        return { sourceType: 'x6d3i', title: xtitle, contentHTML: xcontentEl.innerHTML, url, author: xauthor, authorUrl: location.origin, topicId: null, category: xcat, tags: xtags };
      }

      return null;
    }

    function extractContent() {
      const domestic = extractDomesticContent();
      if (domestic) return domestic;

      // 多种标题选择器
      const titleSelectors = [
        '#topic-title h1',
        '.topic-title h1',
        '#topic-title .fancy-title',
        '.fancy-title',
        'h1.topic-title',
        '.topic-header h1',
        'h1[itemprop="headline"]',
        'article header h1'
      ];

      let titleElement = null;
      for (const selector of titleSelectors) {
        titleElement = document.querySelector(selector);
        if (titleElement) break;
      }

      // 多种内容选择器
      const contentSelectors = [
        '.topic-body .cooked',
        '.topic-post:first-of-type .cooked',
        '.post-stream .topic-post:first-child .cooked',
        '#post_1 .cooked',
        'article:first-of-type .cooked',
        '[itemprop="articleBody"]'
      ];

      let contentElement = null;
      for (const selector of contentSelectors) {
        contentElement = document.querySelector(selector);
        if (contentElement) break;
      }

      // 多种作者选择器
      const authorSelectors = [
        '.topic-meta-data .creator a',
        '.names .first a',
        '.topic-post:first-of-type .username a',
        '.topic-avatar a[data-user-card]',
        '[itemprop="author"] a',
        '.first-post .username'
      ];

      let authorElement = null;
      for (const selector of authorSelectors) {
        authorElement = document.querySelector(selector);
        if (authorElement) break;
      }

      // 如果没有标题，尝试从页面标题提取
      if (!titleElement) {
        const pageTitle = document.title;
        // 通常格式是 "帖子标题 - 论坛名称"
        const titlePart = pageTitle.split(' - ')[0] || pageTitle;
        if (titlePart && contentElement) {
          // 创建一个虚拟元素来获取标题
          titleElement = { textContent: titlePart };
        }
      }

      if (!titleElement || !contentElement) {
        // 回退：尝试通用论坛提取（Discuz!/NGA/通用论坛等非标准 Discourse 站点）
        const genericResult = extractGenericForumContent();
        if (genericResult) return genericResult;

        console.log('[Discourse Saver] 无法找到标题或内容元素');
        console.log('[Discourse Saver] titleElement:', titleElement);
        console.log('[Discourse Saver] contentElement:', contentElement);
        return null;
      }

      const title = titleElement.textContent.trim();
      const contentHTML = contentElement.innerHTML;
      const url = window.location.href;
      const author = authorElement ? authorElement.textContent.trim() : '未知作者';
      let authorUrl = UtilModule.sanitizeExternalUrl(authorElement?.href || '');
      if (!authorUrl && author && /^[a-zA-Z0-9_.-]+$/.test(author)) {
        authorUrl = `${window.location.origin}/u/${author}`;
      }
      const topicId = window.location.pathname.match(/\/t\/[^/]+\/(\d+)/)?.[1];

      // 提取分类 - v4.6.0 终极增强版（过滤图标）
      let category = '';

      // 辅助函数：从元素中提取纯文本（过滤SVG图标）
      function extractTextWithoutIcons(element) {
        if (!element) return '';
        // 克隆元素以避免修改原始 DOM
        const clone = element.cloneNode(true);
        // 删除所有 SVG 和图标元素
        clone.querySelectorAll('svg, .d-icon, .svg-icon, [class*="icon"], use').forEach(el => el.remove());
        // 获取纯文本
        return clone.textContent.trim();
      }

      // 方法0（最优先）: Linux.do 专用 - 查找第一个分类徽章
      console.log('[Discourse Saver] 开始提取分类...');
      const badgeCategoryContainers = document.querySelectorAll('.badge-category-parent-box, .badge-category-bg, .badge-category, .topic-category .badge-wrapper');
      for (const container of badgeCategoryContainers) {
        // 优先查找专门的名称元素
        const nameEl = container.querySelector('.badge-category__name, .badge-category-name, .category-name');
        if (nameEl) {
          const text = nameEl.textContent.trim();
          if (text && text.length > 0 && text.length < 100) {
            category = text;
            console.log(`[Discourse Saver] 方法0找到分类: "${category}" (从badge名称元素)`);
            break;
          }
        }
        // 如果没有名称元素，提取过滤图标后的文本
        if (!category) {
          const text = extractTextWithoutIcons(container);
          if (text && text.length > 0 && text.length < 100) {
            category = text;
            console.log(`[Discourse Saver] 方法0找到分类: "${category}" (从badge容器过滤图标后)`);
            break;
          }
        }
      }

      // 方法1: DOM 选择器 - 覆盖各种可能的情况
      if (!category) {
        const categorySelectors = [
          // Discourse 标准选择器
          '.topic-category .badge-category__name',
          '.badge-category-bg .badge-category__name',
          '.category-name',
          '.badge-wrapper .badge-category-name',
          '[itemprop="articleSection"]',
          // 更多变体
          '.topic-category .badge-category-name',
          '.topic-header-extra .badge-category__name',
          '.topic-header-extra .badge-category-name',
          '#topic-title .badge-category__name',
          '#topic-title .badge-category-name',
          '.title-wrapper .badge-category__name',
          '.title-wrapper .badge-category-name',
          // Linux.do 更多选择器
          '.extra-info-wrapper .badge-category__name',
          '.extra-info-wrapper .badge-category-name',
          '.extra-info .badge-category__name',
          '.extra-info .badge-category-name',
          // 分类链接内的文本
          'a[href*="/c/"] .badge-category__name',
          'a[href*="/c/"] .badge-category-name',
          'a[href*="/c/"] span.category-name'
        ];

        for (const selector of categorySelectors) {
          try {
            const categoryBadge = document.querySelector(selector);
            if (categoryBadge) {
              const text = categoryBadge.textContent.trim();
              if (text && text.length > 0 && text.length < 100) {
                category = text;
                console.log(`[Discourse Saver] 方法1找到分类: "${category}" (选择器: ${selector})`);
                break;
              }
            }
          } catch (e) {
            // 忽略选择器错误
          }
        }
      }

      // 方法2: 查找 topic-category 容器并过滤图标
      if (!category) {
        const topicCategoryContainers = [
          '.topic-category',
          '.extra-info-wrapper .topic-category',
          '#topic-title .topic-category',
          '.title-wrapper .topic-category'
        ];

        for (const selector of topicCategoryContainers) {
          const container = document.querySelector(selector);
          if (container) {
            // 优先找第一个链接
            const firstLink = container.querySelector('a[href*="/c/"]');
            if (firstLink) {
              const text = extractTextWithoutIcons(firstLink);
              if (text && text.length > 0 && text.length < 100) {
                category = text;
                console.log(`[Discourse Saver] 方法2找到分类: "${category}" (从topic-category链接)`);
                break;
              }
            }
            // 如果没有链接，从容器提取
            if (!category) {
              const text = extractTextWithoutIcons(container);
              if (text && text.length > 0 && text.length < 100) {
                // 可能包含多个分类/标签，取第一个
                const firstPart = text.split(/[\s,，、]+/)[0];
                if (firstPart && firstPart.length > 0) {
                  category = firstPart;
                  console.log(`[Discourse Saver] 方法2找到分类: "${category}" (从topic-category容器)`);
                  break;
                }
              }
            }
          }
        }
      }

      // 方法3: 查找所有指向分类的链接（过滤图标版）
      if (!category) {
        const categoryLinks = document.querySelectorAll('a[href*="/c/"]');
        for (const link of categoryLinks) {
          // 检查链接是否在标题区域
          const isInTitleArea = link.closest('#topic-title') ||
                                link.closest('.topic-category') ||
                                link.closest('.extra-info') ||
                                link.closest('.title-wrapper') ||
                                link.closest('.topic-header');
          if (isInTitleArea) {
            const text = extractTextWithoutIcons(link);
            if (text && text.length > 0 && text.length < 100) {
              category = text;
              console.log(`[Discourse Saver] 方法3找到分类: "${category}" (从分类链接过滤图标后)`);
              break;
            }
          }
        }
      }

      // 方法4: 从 Discourse 预加载数据提取
      if (!category) {
        try {
          // 尝试从页面的 preloaded data 获取
          const preloadedData = document.getElementById('data-preloaded');
          if (preloadedData) {
            const data = preloadedData.dataset.preloaded;
            if (data) {
              const parsed = JSON.parse(data);
              // 查找 topic 数据
              for (const key in parsed) {
                if (key.includes('topic')) {
                  try {
                    const topicData = JSON.parse(parsed[key]);
                    if (topicData && topicData.category_id) {
                      // 从 categories 数据中查找名称
                      const categoriesKey = Object.keys(parsed).find(k => k.includes('categories'));
                      if (categoriesKey) {
                        const categoriesData = JSON.parse(parsed[categoriesKey]);
                        const cat = categoriesData?.category_list?.categories?.find(
                          c => c.id === topicData.category_id
                        );
                        if (cat && cat.name) {
                          category = cat.name;
                          console.log(`[Discourse Saver] 方法4找到分类: "${category}" (从preloaded data categories)`);
                          break;
                        }
                      }
                    }
                    // 直接从 topic 数据获取 category
                    if (!category && topicData && topicData.category) {
                      if (typeof topicData.category === 'string') {
                        category = topicData.category;
                        console.log(`[Discourse Saver] 方法4找到分类: "${category}" (从topic.category字符串)`);
                      } else if (topicData.category.name) {
                        category = topicData.category.name;
                        console.log(`[Discourse Saver] 方法4找到分类: "${category}" (从topic.category.name)`);
                      }
                    }
                  } catch (e) {
                    // 忽略解析错误
                  }
                }
              }
            }
          }
        } catch (e) {
          console.log('[Discourse Saver] 方法4解析preloaded data失败:', e.message);
        }
      }

      // 方法5: 从 Discourse 全局对象提取（多种方式）
      if (!category) {
        try {
          // 方式1: Discourse.Topic.current
          if (typeof window.Discourse !== 'undefined') {
            const topic = window.Discourse?.Topic?.current ||
                          window.Discourse?.__container__?.lookup('controller:topic')?.model ||
                          window.Discourse?.__container__?.lookup('route:topic')?.modelFor('topic');
            if (topic && topic.category) {
              category = topic.category.name || topic.category;
              console.log(`[Discourse Saver] 方法5找到分类: "${category}" (从Discourse.Topic)`);
            }
          }

          // 方式2: Ember 路由
          if (!category && typeof window.Ember !== 'undefined') {
            const appInstance = window.Ember?.Namespace?.NAMESPACES?.find(n => n.toString() === 'Discourse');
            if (appInstance) {
              const router = appInstance.__container__?.lookup('router:main');
              const topicController = appInstance.__container__?.lookup('controller:topic');
              if (topicController?.model?.category) {
                category = topicController.model.category.name;
                console.log(`[Discourse Saver] 方法5找到分类: "${category}" (从Ember controller)`);
              }
            }
          }

          // 方式3: 页面上的隐藏数据
          if (!category) {
            const topicData = document.querySelector('[data-topic-id]');
            if (topicData && topicData.dataset.categoryId) {
              // 通过 category ID 查找名称
              const categoryId = parseInt(topicData.dataset.categoryId);
              const categoryLink = document.querySelector(`a[href*="/c/"][data-category-id="${categoryId}"]`);
              if (categoryLink) {
                category = extractTextWithoutIcons(categoryLink);
                console.log(`[Discourse Saver] 方法5找到分类: "${category}" (从data-category-id)`);
              }
            }
          }
        } catch (e) {
          console.log('[Discourse Saver] 方法5访问Discourse对象失败:', e.message);
        }
      }

      // 方法5.5: 从页面 script 标签中的 JSON 数据提取
      if (!category) {
        try {
          const scripts = document.querySelectorAll('script[type="application/json"], script:not([src])');
          for (const script of scripts) {
            const content = script.textContent;
            if (content && content.includes('category') && content.includes('name')) {
              try {
                // 尝试解析 JSON
                const data = JSON.parse(content);
                if (data.category?.name) {
                  category = data.category.name;
                  console.log(`[Discourse Saver] 方法5.5找到分类: "${category}" (从script JSON)`);
                  break;
                }
              } catch (e) {
                // 尝试从文本中提取
                const match = content.match(/"category":\s*\{[^}]*"name":\s*"([^"]+)"/);
                if (match) {
                  category = match[1];
                  console.log(`[Discourse Saver] 方法5.5找到分类: "${category}" (从script文本匹配)`);
                  break;
                }
              }
            }
          }
        } catch (e) {
          console.log('[Discourse Saver] 方法5.5解析script失败:', e.message);
        }
      }

      // 方法6: 从 URL 路径提取（最后的 fallback）
      if (!category) {
        // 标准 /c/category/subcategory 路径
        const categoryMatch = window.location.pathname.match(/\/c\/([^/]+)/);
        if (categoryMatch) {
          category = decodeURIComponent(categoryMatch[1]).replace(/-/g, ' ');
          console.log(`[Discourse Saver] 方法6找到分类: "${category}" (从URL /c/ 路径)`);
        }
      }

      // 方法7: 遍历所有带有特定样式的元素（过滤图标版）
      if (!category) {
        // 查找带有背景色样式的 span（分类通常有颜色）
        const allSpans = document.querySelectorAll('span[style*="background"], span[style*="color"]');
        for (const span of allSpans) {
          const isInTitleArea = span.closest('#topic-title') ||
                                span.closest('.topic-category') ||
                                span.closest('.extra-info');
          if (isInTitleArea) {
            const text = span.textContent.trim();
            if (text && text.length > 0 && text.length < 50 && !/^[\s\u200b]*$/.test(text)) {
              // 排除一些明显不是分类的文本
              if (!/^\d+$/.test(text) && !text.includes('http') && text !== '×') {
                category = text;
                console.log(`[Discourse Saver] 方法7找到分类: "${category}" (从带样式的span)`);
                break;
              }
            }
          }
        }
      }

      if (category) {
        console.log(`[Discourse Saver] 最终分类: "${category}"`);
      } else {
        console.log('[Discourse Saver] 所有方法都未能提取到分类');
        // 输出调试信息
        console.log('[Discourse Saver] 调试 - topic-category 元素:', document.querySelector('.topic-category'));
        console.log('[Discourse Saver] 调试 - 分类链接:', document.querySelectorAll('a[href*="/c/"]'));
      }

      // 提取标签 - v4.5.10 超级增强版
      const tags = [];
      const tagSelectors = [
        // Discourse 标准选择器
        '.discourse-tags .discourse-tag',
        '.list-tags .discourse-tag',
        '.topic-header-extra .discourse-tag',
        '.tag-drop .discourse-tag',
        // 更多变体
        '.topic-tags .discourse-tag',
        '.tags-wrapper .discourse-tag',
        'a.discourse-tag',
        '.tag-list .tag',
        '.topic-map .tag',
        // Linux.do 特殊选择器
        '.extra-info-wrapper .discourse-tag',
        '.extra-info .discourse-tag',
        '#topic-title .discourse-tag',
        '.title-wrapper .discourse-tag',
        // 链接形式的标签
        'a[href*="/tag/"]',
        'a[href*="/tags/"]',
        // 带 data 属性的标签
        '[data-tag-name]',
        '.tag-badge'
      ];

      for (const selector of tagSelectors) {
        try {
          const tagElements = document.querySelectorAll(selector);
          tagElements.forEach(tag => {
            let tagText = tag.textContent.trim();
            // 如果有 data-tag-name 属性，优先使用
            if (tag.dataset && tag.dataset.tagName) {
              tagText = tag.dataset.tagName;
            }
            // 从 href 提取标签名
            if (!tagText && tag.href) {
              const tagMatch = tag.href.match(/\/tags?\/([^/?]+)/);
              if (tagMatch) {
                tagText = decodeURIComponent(tagMatch[1]);
              }
            }
            if (tagText && !tags.includes(tagText) && tagText.length < 50) {
              // 过滤一些明显不是标签的内容
              if (!/^[\d\s]+$/.test(tagText) && !tagText.includes('http')) {
                tags.push(tagText);
              }
            }
          });
        } catch (e) {
          // 忽略选择器错误
        }
      }

      if (tags.length > 0) {
        console.log(`[Discourse Saver] 找到 ${tags.length} 个标签:`, tags);
      } else {
        console.log('[Discourse Saver] 未找到标签');
      }

      // 对 Trae 社区等使用 Discourse 框架但有独立标识的站点，覆盖 sourceType
      const hostType = getSiteType();
      const effectiveSourceType = (hostType !== 'discourse') ? hostType : 'discourse';

      // 提取反应(Reactions) - Linux.do 等使用 discourse-reactions 插件
      let reactions = [];
      try {
        const reactionEmojis = document.querySelectorAll('.discourse-reactions-list-emoji img');
        reactionEmojis.forEach(img => {
          const alt = (img.getAttribute('alt') || '').trim();
          if (alt && !reactions.find(r => r.emoji === alt)) {
            reactions.push({ emoji: alt, count: 1 });
          } else if (alt) {
            const found = reactions.find(r => r.emoji === alt);
            if (found) found.count++;
          }
        });
        // 也尝试从 discourse-reactions-counter 中提取准确计数
        document.querySelectorAll('.discourse-reactions-counter').forEach(counter => {
          const imgs = counter.querySelectorAll('.discourse-reactions-list-emoji img');
          imgs.forEach(img => {
            const alt = (img.getAttribute('alt') || '').trim();
            if (alt) {
              // 检查旁边的数字
              const parent = img.closest('.discourse-reactions-list-emoji');
              const countText = parent ? (parent.textContent || '').replace(/[^0-9]/g, '') : '';
              const count = parseInt(countText) || 1;
              const found = reactions.find(r => r.emoji === alt);
              if (found) found.count = Math.max(found.count, count);
            }
          });
        });
      } catch (_) {}

      return { sourceType: effectiveSourceType, title, contentHTML, url, author, authorUrl, topicId, category, tags, reactions };
    }

    // 通用论坛内容提取（Discuz!/NGA/通用非标准论坛等非 Discourse 站点回退）
    function extractGenericForumContent() {
      const url = window.location.href;
      const host = (window.location.hostname || '').toLowerCase();

      // 通用标题选择器（Discuz!/NGA/generic forums）
      const genericTitleSelectors = [
        '#thread_subject',           // Discuz! 主题标题
        '.ts span',                   // Discuz!
        'h1.ts a',                    // Discuz!
        '#postlist h1',               // 通用帖子标题
        '.thread-title h1',           // 通用帖子标题
        '.viewthread-title',          // 通用帖子标题
        'h1[itemprop="headline"]',    // 标准 HTML5
        '#firstpost .subject',        // 首帖标题
        '.first-post h1',             // 首帖标题
        '.post-header h1',            // 帖子头部标题
        'meta[property="og:title"]',  // Open Graph 标题（回退）
        '#pagetitle h1',              // 页面标题
        'h1 a[href*="thread"]',       // 线程链接
        '.subject h1',                // 主题标题
        '.title h1'                   // 通用标题
      ];

      let titleElement = null;
      for (const sel of genericTitleSelectors) {
        const el = document.querySelector(sel);
        if (el) {
          const text = (el.getAttribute('content') || el.textContent || '').trim();
          if (text && text.length > 3) {
            titleElement = { textContent: text };
            break;
          }
        }
      }
      if (!titleElement) {
        // 从 document.title 中提取
        const pageTitle = document.title;
        const parts = pageTitle.split(/[-|_–—·]\s*/);
        const bestTitle = parts.find(p => p.trim().length > 3) || pageTitle;
        if (bestTitle && bestTitle.trim().length > 3) {
          titleElement = { textContent: bestTitle.trim() };
        }
      }

      // 通用内容选择器（Discuz!/NGA/generic forums）
      const genericContentSelectors = [
        '.t_f',                      // Discuz! 帖子正文
        '.postmessage',              // Discuz! 帖子内容
        '.pcb .t_fsz table',         // Discuz! X 系列帖子内容表格
        '#postlist .plc .pct',       // Discuz! 帖子内容区
        '.post-entry .message',      // 通用帖子消息
        '.message-content',          // 通用消息内容
        '.topic-content',            // 通用主题内容
        '.read-content',             // NGA 阅读内容
        '#postcontent0',             // NGA 首帖内容
        '#post_0 .content',          // 首帖内容
        '.first-post .message',      // 首帖消息
        '.postbody',                 // 通用帖子正文
        '.entry-content',            // 通用条目内容
        '.post-detail .content',     // 帖子详情内容
        'article .message-body',    // 文章消息体
        '[itemprop="articleBody"]',  // 标准 HTML5
        '.article-content',          // 通用文章内容
        '.post .message',           // 帖子消息
        '#main-content article',     // 主内容区域
        '.forum-content .post',     // 论坛内容
        '#content .post',            // 内容区帖子
        '.main-content .content',    // 主内容
      ];

      let contentElement = null;
      for (const sel of genericContentSelectors) {
        const el = document.querySelector(sel);
        if (el && el.textContent.trim().length > 50) {
          contentElement = el;
          break;
        }
      }

      // NGA 特殊处理：postcontent0 可能在 iframe 中
      if (!contentElement && host.includes('nga.cn')) {
        const iframes = document.querySelectorAll('iframe');
        for (const iframe of iframes) {
          try {
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            if (doc) {
              for (const sel of genericContentSelectors) {
                const el = doc.querySelector(sel);
                if (el && el.textContent.trim().length > 50) {
                  contentElement = el;
                  break;
                }
              }
              if (contentElement) break;
            }
          } catch (_) {}
        }
      }

      if (!titleElement || !contentElement) return null;

      const title = UtilModule.sanitizeTitleText(titleElement.textContent.trim());
      if (!title || title.length < 3) return null;

      const contentHTML = contentElement.innerHTML;

      // 通用作者选择器
      const genericAuthorSelectors = [
        '.authi a',                  // Discuz! 作者链接
        '.pi .authi em',             // Discuz! 作者
        '.post-author a',            // 通用帖子作者
        '.author a',                 // 通用作者链接
        '.username a',               // 通用用户名
        '[itemprop="author"]',       // 标准 HTML5
        '.byline a',                 // 署名行
        '.post-info .author a',      // 帖子信息作者
        '.psta a',                   // 帖子统计作者链接
        '.poster-info .name a'       // 发帖人信息
      ];
      let authorElement = null;
      for (const sel of genericAuthorSelectors) {
        const el = document.querySelector(sel);
        if (el) { authorElement = el; break; }
      }
      const author = authorElement ? authorElement.textContent.trim() : '未知作者';
      let authorUrl = UtilModule.sanitizeExternalUrl(authorElement?.href || '');
      if (!authorUrl && author !== '未知作者') {
        authorUrl = window.location.origin;
      }

      // 确定 sourceType（统一使用 discourse，站点文件夹名由 getDiscourseSiteName 根据 discourseSiteFolders 配置决定）
      const sourceType = 'discourse';

      // 提取分类（Discuz! / NGA 等）
      let category = '';
      const categorySelectors = [
        '.crb a',                    // Discuz! 面包屑最后一项
        '#pt .z a:last-child',       // Discuz! X 导航
        '.crumbs a:last-child',      // 通用面包屑
        '.breadcrumb a:last-child',  // 面包屑
        '#nav a:last-child',         // 导航
        '.thread-category a',        // 线程分类
        '.forum-path a:last-child'   // 论坛路径
      ];
      for (const sel of categorySelectors) {
        const el = document.querySelector(sel);
        if (el) {
          const text = el.textContent.trim();
          if (text && text.length > 1 && text.length < 50) {
            category = text;
            break;
          }
        }
      }
      // NGA 从版块导航提取
      if (!category && host.includes('nga.cn')) {
        const ngaBoard = document.querySelector('#poststats td a, .nav a, #forumtitle h1');
        if (ngaBoard) category = ngaBoard.textContent.trim();
      }
      if (!category) category = '论坛';

      // 提取标签
      const tags = [];
      const tagSelectors = [
        '.tag a', '#threadtags a',
        '.post-tags a', '.tags a',
        '[class*="tag"] a', '.keywords a'
      ];
      for (const sel of tagSelectors) {
        document.querySelectorAll(sel).forEach(a => {
          const t = a.textContent.trim();
          if (t && !tags.includes(t) && t.length < 30 && !/^\d+$/.test(t)) {
            tags.push(t);
          }
        });
      }

      // 提取 topicId
      let topicId = null;
      const tidMatch = window.location.href.match(/tid[=/](\d+)/);
      if (tidMatch) topicId = tidMatch[1];
      if (!topicId) {
        const threadMatch = window.location.pathname.match(/thread-(\d+)/);
        if (threadMatch) topicId = threadMatch[1];
      }
      if (!topicId) {
        const tMatch = window.location.pathname.match(/\/t\/(\d+)/);
        if (tMatch) topicId = tMatch[1];
      }

      console.log('[Discourse Saver] 通用论坛提取成功:', { title, sourceType, author, category, tags });

      return {
        sourceType,
        title,
        contentHTML,
        url,
        author,
        authorUrl: authorUrl || window.location.origin,
        topicId,
        category,
        tags,
        reactions: []
      };
    }

    // 提取评论（DOM方式）- v4.5.10 增强版
    async function extractComments(maxCount = 100) {
      const comments = [];
      const baseUrl = window.location.origin;

      // 多种评论容器选择器
      const containerSelectors = [
        'div.crawler-post',
        '.topic-post',
        '.post-stream .post',
        'article.post',
        '[itemtype*="Comment"]',
        '.reply'
      ];

      let commentElements = [];
      for (const selector of containerSelectors) {
        commentElements = document.querySelectorAll(selector);
        if (commentElements.length > 0) {
          console.log(`[Discourse Saver] 使用选择器 "${selector}" 找到 ${commentElements.length} 个评论元素`);
          break;
        }
      }

            // Raw Edition: 尝试展开所有已折叠的评论（点击"展开"按钮）
      document.querySelectorAll('.post-stream .gap, .topic-post .expand-hidden, button[title*="展开"], .expand-post, .show-more, .topic-above-suggested-outlet .btn, .small-action button').forEach(btn => {
        try { if (btn.offsetParent !== null) btn.click(); } catch(_) {}
      });
      // 等待展开动画完成
      await new Promise(r => setTimeout(r, 300));

      const commentNodes = Array.from(commentElements).slice(1, maxCount + 1);

      for (const el of commentNodes) {
        // 增强的用户名选择器
        const usernameSelectors = [
          '.creator span[itemprop="name"]',
          '.names .first a',
          '.username a',
          '.author-name',
          '[itemprop="author"] [itemprop="name"]',
          '.post-user a',
          '.user-info .name'
        ];

        let usernameEl = null;
        for (const selector of usernameSelectors) {
          usernameEl = el.querySelector(selector);
          if (usernameEl) break;
        }
        const username = usernameEl ? usernameEl.textContent.trim() : '匿名用户';

        // 提取该评论的反应
        let commentReactions = [];
        try {
          el.querySelectorAll('.discourse-reactions-list-emoji img').forEach(img => {
            const alt = (img.getAttribute('alt') || '').trim();
            if (alt && !commentReactions.find(r => r.emoji === alt)) {
              commentReactions.push({ emoji: alt, count: 1 });
            } else if (alt) {
              const found = commentReactions.find(r => r.emoji === alt);
              if (found) found.count++;
            }
          });
        } catch (_) {}

        // 提取该评论的 Boosts (打call)
        let commentBoosts = [];
        try {
          el.querySelectorAll('.post-boost, .boosts-list .boost, [class*=\"boost-item\"]').forEach(boostEl => {
            const txt = (boostEl.textContent || '').trim();
            if (txt && txt.length < 200 && !commentBoosts.includes(txt)) commentBoosts.push(txt);
          });
        } catch (_) {}

        // 提取用户主页链接
        let userUrl = '';
        const userLinkSelectors = [
          '.creator a[href*="/u/"]',
          '.names .first a[href*="/u/"]',
          '.username a[href*="/u/"]',
          'a[data-user-card]',
          '.author-name a',
          '.post-user a[href*="/u/"]'
        ];

        for (const selector of userLinkSelectors) {
          const userLinkEl = el.querySelector(selector);
          if (userLinkEl) {
            userUrl = userLinkEl.href;
            break;
          }
        }

        if (!userUrl && username && username !== '匿名用户') {
          userUrl = `${baseUrl}/u/${username}`;
        }

        // 增强的内容选择器
        const contentSelectors = [
          '.post[itemprop="text"]',
          '.cooked',
          '.post-content',
          '.post-body',
          '[itemprop="text"]',
          '.content'
        ];

        let contentEl = null;
        for (const selector of contentSelectors) {
          contentEl = el.querySelector(selector);
          if (contentEl) break;
        }
        const contentHTML = contentEl ? contentEl.innerHTML : '';

        // 增强的楼层选择器
        const positionSelectors = [
          'span[itemprop="position"]',
          '.post-number',
          '.post-count',
          '[data-post-number]'
        ];

        let positionEl = null;
        for (const selector of positionSelectors) {
          positionEl = el.querySelector(selector);
          if (positionEl) break;
        }
        let position = (comments.length + 2).toString();
        if (positionEl) {
          position = positionEl.textContent.trim() || positionEl.dataset?.postNumber || position;
        }
        // 尝试从元素属性获取
        if (el.dataset && el.dataset.postNumber) {
          position = el.dataset.postNumber;
        }

        // 增强的时间选择器
        const timeSelectors = [
          'time.post-time',
          '.relative-date',
          'time[datetime]',
          '.post-date',
          '[itemprop="datePublished"]'
        ];

        let timeEl = null;
        for (const selector of timeSelectors) {
          timeEl = el.querySelector(selector);
          if (timeEl) break;
        }
        const time = timeEl ? (timeEl.getAttribute('datetime') || timeEl.textContent) : '';

        // 增强的点赞选择器
        const likesSelectors = [
          'meta[itemprop="userInteractionCount"]',
          '.post-likes',
          '.like-count',
          '.likes',
          '[data-likes]'
        ];

        let likesEl = null;
        for (const selector of likesSelectors) {
          likesEl = el.querySelector(selector);
          if (likesEl) break;
        }
        let likes = '0';
        if (likesEl) {
          likes = likesEl.getAttribute('content') ||
                  likesEl.dataset?.likes ||
                  likesEl.textContent.replace(/[^\d]/g, '') ||
                  '0';
        }

        if (contentHTML) {
          comments.push({
            username,
            userUrl,
            contentHTML,
            position,
            time,
            likes,
            reactions: commentReactions,
            boosts: commentBoosts
          });
        }
      }

      console.log(`[Discourse Saver] 提取到 ${comments.length} 条评论`);
      return comments;
    }

    // 使用API获取评论
    async function extractCommentsViaAPI(topicId, maxCount, saveAll = false, progressCallback = null) {
      const comments = [];
      const baseUrl = window.location.origin;
      let fetchErrors = 0;

      try {
        if (progressCallback) progressCallback('正在获取帖子信息...');
        console.log(`[Discourse Saver] API提取评论: topicId=${topicId}, maxCount=${maxCount}, saveAll=${saveAll}`);

        const topicUrl = `${baseUrl}/t/${topicId}.json`;
        const topicResponse = await fetch(topicUrl, { credentials: 'include' });

        if (!topicResponse.ok) {
          throw new Error(`获取帖子信息失败: ${topicResponse.status}`);
        }

        const topicData = await topicResponse.json();
        const stream = topicData.post_stream?.stream || [];
        const totalPosts = stream.length;
        console.log(`[Discourse Saver] 帖子流长度: ${totalPosts}`);

        if (totalPosts === 0) {
          console.log('[Discourse Saver] 帖子流为空，无评论');
          return comments;
        }

        const commentIds = stream.slice(1); // 排除主帖
        const targetCount = saveAll ? commentIds.length : Math.min(maxCount, commentIds.length);
        const idsToFetch = commentIds.slice(0, targetCount);
        console.log(`[Discourse Saver] 需要获取 ${idsToFetch.length} 条评论 (目标: ${targetCount})`);

        // 分批获取
        const batchSize = 20;
        for (let i = 0; i < idsToFetch.length; i += batchSize) {
          const batch = idsToFetch.slice(i, i + batchSize);
          const params = batch.map(id => `post_ids[]=${id}`).join('&');
          const postsUrl = `${baseUrl}/t/${topicId}/posts.json?${params}`;

          if (progressCallback) {
            const progress = Math.min(i + batchSize, idsToFetch.length);
            progressCallback(`正在加载评论 ${progress}/${targetCount}...`);
          }

          try {
            const postsResponse = await fetch(postsUrl, { credentials: 'include' });
            if (!postsResponse.ok) {
              console.warn(`[Discourse Saver] 批次 ${Math.floor(i/batchSize)+1} 请求失败: ${postsResponse.status}`);
              fetchErrors++;
              continue;
            }

            const postsData = await postsResponse.json();
            const posts = postsData.post_stream?.posts || [];
            console.log(`[Discourse Saver] 批次 ${Math.floor(i/batchSize)+1}: 获取 ${posts.length} 个帖子`);

            for (const post of posts) {
              if (post.post_number === 1) continue;

              try {
                const postUsername = post.username || post.display_username || '匿名用户';
                const userUrl = postUsername !== '匿名用户' ? `${baseUrl}/u/${postUsername}` : '';

                // 从 API 提取 reactions
                let apiReactions = [];
                try {
                  if (Array.isArray(post.reactions)) {
                    // discourse-reactions 插件: [{emoji: "heart", count: 5}, ...]
                    apiReactions = post.reactions.map(r => ({
                      emoji: r.emoji || r.id || '',
                      count: r.count || r.users_count || 1
                    }));
                  } else if (post.reaction_users_count && typeof post.reaction_users_count === 'object') {
                    // 旧版格式: {heart: 5, clap: 3}
                    apiReactions = Object.entries(post.reaction_users_count).map(([emoji, count]) => ({
                      emoji, count: parseInt(count) || 1
                    }));
                  } else if (Array.isArray(post.retorts)) {
                    // 新版 Discourse retorts: [{emoji: "heart", usernames: [...]}, ...]
                    apiReactions = post.retorts.map(r => ({
                      emoji: r.emoji || '',
                      count: Array.isArray(r.usernames) ? r.usernames.length : (r.count || 1)
                    }));
                  }
                } catch (_) {}

                // 从 API 提取 boosts (打call)
                let apiBoosts = [];
                try {
                  if (Array.isArray(post.boosts)) {
                    apiBoosts = post.boosts.map(b => {
                      // cooked 是 HTML 如 <p>太强了佬</p>，提取纯文本
                      const html = b.cooked || b.html || '';
                      const text = html.replace(/<[^>]*>/g, '').trim();
                      return text || (b.text || '').trim();
                    }).filter(Boolean);
                  }
                } catch (_) {}

                comments.push({
                  username: postUsername,
                  userUrl,
                  contentHTML: post.cooked || '',
                  position: String(post.post_number),
                  time: post.created_at || '',
                  likes: String(post.like_count || 0),
                  reactions: apiReactions,
                  boosts: apiBoosts
                });
              } catch (postError) {
                console.warn(`[Discourse Saver] 解析帖子 ${post.post_number} 失败:`, postError.message);
              }
            }
          } catch (batchError) {
            console.warn(`[Discourse Saver] 批次 ${Math.floor(i/batchSize)+1} 处理失败:`, batchError.message);
            fetchErrors++;
          }

          if (i + batchSize < idsToFetch.length) {
            await new Promise(r => setTimeout(r, 100));
          }
        }

        comments.sort((a, b) => parseInt(a.position) - parseInt(b.position));
        console.log(`[Discourse Saver] API评论提取完成: 成功 ${comments.length} 条, 失败批次 ${fetchErrors}`);

        // 即使有部分失败，也返回已获取的评论
        return comments;

      } catch (error) {
        console.error('[Discourse Saver] API获取评论失败:', error);
        // 如果已经获取了一些评论，返回它们而不是抛出错误
        if (comments.length > 0) {
          console.log(`[Discourse Saver] 部分成功，返回 ${comments.length} 条评论`);
          return comments;
        }
        throw error;
      }
    }

    // 提取单条评论
    function extractSingleComment(postNumber) {
      const commentElements = document.querySelectorAll('.topic-post, article[data-post-id]');
      const baseUrl = window.location.origin;

      for (const el of commentElements) {
        const posNum = el.getAttribute('data-post-number') ||
                       el.querySelector('[data-post-number]')?.getAttribute('data-post-number');

        if (posNum === postNumber) {
          const usernameEl = el.querySelector('.creator span[itemprop="name"]') ||
                             el.querySelector('.names .first a') ||
                             el.querySelector('.username a');
          const username = usernameEl ? usernameEl.textContent.trim() : '匿名用户';

          let userUrl = '';
          const userLinkEl = el.querySelector('.creator a[href*="/u/"]') ||
                             el.querySelector('.names .first a[href*="/u/"]') ||
                             el.querySelector('.username a[href*="/u/"]') ||
                             el.querySelector('a[data-user-card]');
          if (userLinkEl) {
            userUrl = userLinkEl.href;
          } else if (username && username !== '匿名用户') {
            userUrl = `${baseUrl}/u/${username}`;
          }

          const contentEl = el.querySelector('.post[itemprop="text"]') ||
                            el.querySelector('.cooked');
          const contentHTML = contentEl ? contentEl.innerHTML : '';

          const timeEl = el.querySelector('time.post-time') ||
                         el.querySelector('.relative-date');
          const time = timeEl ? (timeEl.getAttribute('datetime') || timeEl.textContent) : '';

          const likesEl = el.querySelector('meta[itemprop="userInteractionCount"]') ||
                          el.querySelector('.post-likes');
          const likes = likesEl ?
                        (likesEl.getAttribute('content') || likesEl.textContent.replace(/[^\d]/g, '')) : '0';

          return {
            username,
            userUrl,
            contentHTML,
            position: postNumber,
            time,
            likes
          };
        }
      }
      return null;
    }

    return {
      getSiteType,
      isDomesticMediaPage,
      isDiscourseForumPage,
      isTopicPage,
      extractContent,
      extractComments,
      extractCommentsViaAPI,
      extractSingleComment
    };
  })();

  // ============================================================
  // 模块3.5: 飞书云文档提取 (FeishuDocModule)
  // ============================================================
  const FeishuDocModule = (function() {

    // --- 复制保护绕过 ---
    function neutralizeCopyProtection() {
      if (document.__xc_copy_unlocked) return;
      document.__xc_copy_unlocked = true;

      // CSS: 强制恢复文字可选中
      const style = document.createElement('style');
      style.textContent = `
        * { -webkit-user-select: text !important; user-select: text !important; }
        .copy-forbidden-toast, .copy-protection-mask, .copy-tip-container,
        .gpf-biz-action-manager-forbidden-placeholder,
        .suite-permission-toast, .permission-denied-dialog,
        [class*='copy-forbidden'], [class*='copy-protection'],
        [class*='permission-toast'], [class*='no-copy'] {
          display: none !important; visibility: hidden !important; pointer-events: none !important;
        }`;
      (document.head || document.documentElement).appendChild(style);

      // 事件拦截：在捕获阶段阻止飞书复制保护
      ['copy', 'cut', 'contextmenu', 'selectstart', 'beforecopy'].forEach(evType => {
        document.addEventListener(evType, e => e.stopPropagation(), true);
      });

      // 页面上下文注入
      const script = document.createElement('script');
      script.textContent = `(function(){
        document.oncopy=null;document.oncut=null;document.onselectstart=null;document.oncontextmenu=null;
        try{var _dp=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){
        if(this instanceof ClipboardEvent||this.type==='copy'||this.type==='cut'||this.type==='selectstart')return;
        _dp.call(this);};}catch(e){}
      })();`;
      (document.head || document.documentElement).appendChild(script);
      script.remove();
    }

    // --- 页面类型检测 ---
    function detectFeishuPageType() {
      const host = (window.location.hostname || '').toLowerCase();
      if (!host.endsWith('.feishu.cn') && !host.endsWith('.larksuite.com')) return null;
      const path = window.location.pathname;
      if (/^\/(wiki)\/[^/]+/.test(path)) return 'wiki';
      if (/^\/(docx)\/[^/]+/.test(path)) return 'docx';
      if (/^\/(docs)\/[^/]+/.test(path)) return 'docs';
      if (/^\/(minutes)\/[^/]+/.test(path)) return 'minutes';
      if (/^\/(sheets)\/[^/]+/.test(path)) return 'sheets';
      if (/^\/(drive)\/[^/]+/.test(path)) return 'drive';
      if (/^\/(base)\/[^/]+/.test(path)) return 'base';
      if (/^\/(mindnotes)\/[^/]+/.test(path)) return 'mindnotes';
      return null;
    }

    // --- URL 工具 ---
    function cleanFeishuUrl(url) {
      if (!url) return '';
      try {
        const parsed = new URL(url);
        parsed.search = '';
        parsed.hash = '';
        return parsed.href;
      } catch { return String(url).replace(/[?#].*$/, ''); }
    }

    function resolveFeishuUrl(url) {
      const raw = String(url || '').trim();
      if (!raw || /^(data|blob|javascript):/i.test(raw)) return '';
      if (/^https?:\/\//i.test(raw)) return raw;
      if (/^\/\//.test(raw)) return 'https:' + raw;
      try { return new URL(raw, window.location.href).href; } catch {}
      return raw;
    }

    // --- 内联 Markdown 提取 ---
    function cleanZeroWidth(text) {
      return String(text || '').replace(/[\u200B-\u200D\u2060\uFEFF]/g, '');
    }

    function shouldSkipNode(node) {
      const tag = (node.tagName || '').toLowerCase();
      const cls = (node.className || '').toString();
      return tag === 'button' || tag === 'svg' || tag === 'style' || tag === 'script' ||
        cls.includes('docx-block-zero-space') || cls.includes('fold-wrapper') ||
        cls.includes('block-area-comment-container') ||
        cls.includes('gpf-biz-action-manager-forbidden-placeholder');
    }

    function extractInlineMarkdown(node) {
      if (!node) return '';
      if (node.nodeType === 3) return cleanZeroWidth(node.textContent || '');
      if (node.nodeType !== 1) return '';
      if (shouldSkipNode(node)) return '';

      if (node.getAttribute?.('data-zero-space') === 'true' || node.getAttribute?.('data-enter') === 'true') return '';

      const tag = (node.tagName || '').toLowerCase();

      if (tag === 'img') {
        const src = resolveFeishuUrl(node.currentSrc || node.src || node.getAttribute('src') || '');
        return src ? `![](${src})` : '';
      }

      let md = '';
      for (const child of node.childNodes || []) {
        md += extractInlineMarkdown(child);
      }
      md = cleanZeroWidth(md);

      if (tag === 'a') {
        const href = resolveFeishuUrl(node.getAttribute('href') || '');
        const text = md.trim();
        if (!href || !text) return md;
        if (text.includes('![](')) return `[${text}](${href})`;
        return `[${text.replace(/[[\]]/g, '\\$&')}](${href.replace(/[()]/g, s => '%' + s.charCodeAt(0).toString(16))})`;
      }

      if (tag === 'strong' || tag === 'b' || (node.style?.fontWeight && parseInt(node.style.fontWeight) >= 700)) {
        return md.trim() ? `**${md.replace(/\*\*/g, '')}**` : md;
      }
      if (tag === 'em' || tag === 'i') return md.trim() ? `*${md.trim()}*` : md;
      if (tag === 'del' || tag === 's') return md.trim() ? `~~${md.trim()}~~` : md;
      if (tag === 'code' && md.trim() && !md.includes('\n')) return `\`${md.trim()}\``;
      if (tag === 'div' && (node.className || '').includes('ace-line')) return `${md}\n`;

      return md;
    }

    // --- 块级 Markdown 提取 ---
    function extractBlockMarkdown(block) {
      if (!block) return '';
      const type = block.getAttribute?.('data-block-type') || '';
      const cls = (block.className || '').toString();

      // 跳过容器类型
      if (['ai-summary', 'page', 'grid', 'grid_column', 'callout', 'quote_container', 'synced_source', 'table_cell'].includes(type)) return '';
      if (cls.includes('isEmpty')) return '';

      const getBlockText = (el) => cleanZeroWidth(extractInlineMarkdown(el || block)).replace(/\n{3,}/g, '\n\n').trim();

      if (type.startsWith('heading')) {
        const level = Math.min(parseInt(type.replace('heading', '')) || 1, 6);
        return `${'#'.repeat(level)} ${getBlockText()}`.trim();
      }
      if (type === 'todo') {
        const checkbox = block.querySelector("input[type='checkbox'], .checkbox, .todo-checkbox");
        const checked = checkbox?.checked || (checkbox?.className || '').includes('checked');
        const content = getBlockText(block.querySelector('.list-content, .todo-content') || block);
        return content ? `- [${checked ? 'x' : ' '}] ${content}` : '';
      }
      if (type === 'ordered') {
        const order = (block.querySelector('.order')?.innerText || '1.').trim();
        const content = getBlockText(block.querySelector('.list-content') || block);
        return content ? `${order} ${content}` : '';
      }
      if (type === 'bullet' || type === 'unordered') {
        const content = getBlockText(block.querySelector('.list-content') || block);
        return content ? `- ${content}` : '';
      }
      if (type === 'image') {
        const img = block.querySelector('img.docx-image, .img img, img');
        const src = resolveFeishuUrl(img?.currentSrc || img?.src || img?.getAttribute('src') || '');
        return src ? `![](${src})` : '';
      }
      if (type === 'divider') return '---';
      if (type === 'code') {
        const code = cleanZeroWidth(block.querySelector('code, pre')?.innerText || block.innerText || '').trim();
        const lang = block.getAttribute('data-code-language') || '';
        return code ? `\`\`\`${lang}\n${code}\n\`\`\`` : '';
      }
      if (type === 'table') {
        const cells = block.querySelectorAll(".block[data-block-type='table_cell']") || [];
        if (!cells.length) return '';
        let cols = 0;
        const gridStyle = block.querySelector('.table-block-wrapper, table, .docx-table-block')?.style;
        if (gridStyle?.gridTemplateColumns) cols = gridStyle.gridTemplateColumns.split(/\s+/).filter(Boolean).length;
        if (!cols) { const firstRow = block.querySelector('tr'); cols = firstRow?.children?.length || 0; }
        if (!cols) cols = Math.ceil(Math.sqrt(cells.length)) || 1;
        const rows = [];
        for (let i = 0; i < cells.length; i += cols) {
          const row = [];
          for (let j = 0; j < cols && (i + j) < cells.length; j++) {
            row.push(getBlockText(cells[i + j]).replace(/\|/g, '\\|').replace(/\n/g, ' '));
          }
          rows.push(row);
        }
        if (!rows.length) return '';
        const header = '| ' + rows[0].join(' | ') + ' |';
        const sep = '| ' + rows[0].map(() => '---').join(' | ') + ' |';
        const body = rows.slice(1).map(r => '| ' + r.join(' | ') + ' |').join('\n');
        return [header, sep, body].filter(Boolean).join('\n');
      }
      if (type === 'iframe') {
        const src = block.querySelector('iframe')?.src || '';
        return src ? `[嵌入内容](${cleanFeishuUrl(src)})` : '';
      }

      const text = getBlockText();
      if (!text) return '';
      // 引用块内的文本
      if (block.closest?.('.docx-callout-block, .docx-quote_container-block')) {
        return text.split('\n').map(l => l.trim() ? `> ${l}` : '>').join('\n');
      }
      return text;
    }

    // --- 从 DOM 块列表提取完整 Markdown ---
    function extractMarkdownFromBlocks(blocks) {
      const listTypes = new Set(['bullet', 'unordered', 'ordered', 'todo']);
      const entries = [];
      for (const block of blocks || []) {
        const md = extractBlockMarkdown(block);
        if (!md) continue;
        const blockType = block.getAttribute?.('data-block-type') || '';
        entries.push({ markdown: md, isList: listTypes.has(blockType) });
      }
      if (!entries.length) return '';
      let result = entries[0].markdown;
      for (let i = 1; i < entries.length; i++) {
        const sep = (entries[i - 1].isList && entries[i].isList) ? '\n' : '\n\n';
        result += sep + entries[i].markdown;
      }
      return result.replace(/\n{3,}/g, '\n\n').trim();
    }

    // --- 标题提取 ---
    function extractTitle() {
      const selectors = [
        '#ssrHeaderTitle',
        '.note-title__input .header-ssr-layout-component-Title',
        '.note-title__input',
        '.doc-header-title',
        "[data-testid='doc-title']",
        '.suite-title-input'
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        const text = cleanZeroWidth(el?.innerText || el?.textContent || '').trim();
        if (text && text.length >= 3 && text !== '飞书云文档' && text !== '飞书') return text;
      }
      // h1 fallback
      const h1s = document.querySelectorAll('h1');
      let bestH1 = '';
      for (const h1 of h1s) {
        const t = cleanZeroWidth(h1.textContent || '').trim();
        if (t.length > bestH1.length && t !== '飞书云文档' && t !== '飞书') bestH1 = t;
      }
      if (bestH1.length >= 3) return bestH1;
      // document.title fallback
      return cleanZeroWidth(document.title || '').replace(/\s*-\s*飞书.*$/, '').trim() || '未命名飞书文档';
    }

    // --- 作者提取 ---
    function extractAuthor() {
      const selectors = ['.doc-info-editor-wrapper', '.docs-info-editor', '.docs-info-editor-list-avatar-with-name'];
      for (const sel of selectors) {
        const text = cleanZeroWidth(document.querySelector(sel)?.textContent || '').trim();
        if (text) return text;
      }
      return window.location.hostname.split('.')[0] || '飞书用户';
    }

    // --- 通过飞书内部 API 获取文档（利用页面 cookies） ---
    function fetchDocViaApi() {
      const urlMatch = window.location.pathname.match(/\/(wiki|docx)\/([A-Za-z0-9]+)/);
      if (!urlMatch) return Promise.resolve(null);
      const docType = urlMatch[1];
      const docToken = urlMatch[2];

      return new Promise(resolve => {
        const msgId = '__xc_feishu_' + Date.now() + '_' + Math.random().toString(36).slice(2);

        function onMessage(event) {
          if (event.origin !== window.location.origin) return;
          if (event.data && event.data.type === msgId) {
            window.removeEventListener('message', onMessage);
            clearTimeout(timer);
            resolve(event.data.result || null);
          }
        }
        window.addEventListener('message', onMessage);

        const timer = setTimeout(() => {
          window.removeEventListener('message', onMessage);
          resolve(null);
        }, 10000);

        // 注入到页面上下文以携带 cookies
        const script = document.createElement('script');
        script.textContent = `(function(){
          var msgId = ${JSON.stringify(msgId)};
          var docType = ${JSON.stringify(docType)};
          var docToken = ${JSON.stringify(docToken)};
          var origin = location.origin;
          function sendResult(data) { window.postMessage({ type: msgId, result: data }, location.origin); }
          async function run() {
            try {
              var realDocToken = docToken;
              if (docType === 'wiki') {
                var wikiResp = await fetch(origin + '/space/api/wiki/v2/tree/get_info?token=' + docToken, { credentials: 'include' });
                if (wikiResp.ok) {
                  var wikiData = await wikiResp.json();
                  realDocToken = (wikiData && wikiData.data && wikiData.data.wiki_info && wikiData.data.wiki_info.doc_token) || docToken;
                }
              }
              var resp = await fetch(origin + '/space/api/docx/v2/' + realDocToken + '/raw_content', { credentials: 'include' });
              if (!resp.ok) { sendResult(null); return; }
              var json = await resp.json();
              if (!json || json.code !== 0 || !json.data) { sendResult(null); return; }
              sendResult(json.data);
            } catch(e) { console.error('[星存助手] Feishu API fetch failed:', e); sendResult(null); }
          }
          run();
        })();`;
        (document.head || document.documentElement).appendChild(script);
        script.remove();
      });
    }

    // --- API 数据转 Markdown ---
    const CODE_LANG_MAP = {
      1:'plaintext',2:'bash',3:'c',4:'cpp',5:'csharp',6:'css',7:'go',8:'html',9:'java',10:'javascript',
      11:'json',12:'kotlin',13:'lua',14:'markdown',15:'objc',16:'perl',17:'php',18:'python',19:'ruby',20:'rust',
      21:'scala',22:'shell',23:'sql',24:'swift',25:'typescript',26:'xml',27:'yaml'
    };

    function convertApiTextElements(elements) {
      let md = '';
      for (const el of elements || []) {
        if (el.text_run) {
          let text = el.text_run.content || '';
          if (!text) continue;
          const style = el.text_run.text_element_style || {};
          if (style.inline_code) text = `\`${text}\``;
          else {
            if (style.bold && style.italic) text = `***${text}***`;
            else if (style.bold) text = `**${text}**`;
            else if (style.italic) text = `*${text}*`;
            if (style.strikethrough) text = `~~${text}~~`;
          }
          if (style.link?.url) {
            let linkUrl = style.link.url;
            try { linkUrl = decodeURIComponent(linkUrl); } catch {}
            linkUrl = resolveFeishuUrl(linkUrl);
            text = `[${text.replace(/[[\]]/g, '\\$&')}](${linkUrl})`;
          }
          md += text;
        } else if (el.mention_doc) {
          const title = el.mention_doc.title || '文档';
          let url = el.mention_doc.url || '';
          if (url) { try { url = decodeURIComponent(url); } catch {} url = resolveFeishuUrl(url); }
          md += url ? `[${title}](${url})` : title;
        } else if (el.equation) {
          md += `$${el.equation.content || ''}$`;
        }
      }
      return md;
    }

    function convertApiBlock(block, allBlocks, depth) {
      if (!block) return '';
      const type = block.block_type;
      const textElements = block.text?.elements || block.heading?.elements || [];
      const text = convertApiTextElements(textElements);
      const listTypes = new Set([12, 13, 16]);

      function convertChildren(childDepth) {
        const entries = [];
        for (const id of block.children || []) {
          const child = allBlocks[id];
          if (!child) continue;
          const md = convertApiBlock(child, allBlocks, typeof childDepth === 'number' ? childDepth : depth);
          if (!md) continue;
          entries.push({ markdown: md, isList: listTypes.has(child.block_type) });
        }
        if (!entries.length) return '';
        let result = entries[0].markdown;
        for (let i = 1; i < entries.length; i++) {
          const sep = (entries[i - 1].isList && entries[i].isList) ? '\n' : '\n\n';
          result += sep + entries[i].markdown;
        }
        return result;
      }

      switch (type) {
        case 1: return convertChildren(0); // page
        case 2: return text || ''; // text
        case 3: return text ? `# ${text}` : '';
        case 4: return text ? `## ${text}` : '';
        case 5: return text ? `### ${text}` : '';
        case 6: return text ? `#### ${text}` : '';
        case 7: return text ? `##### ${text}` : '';
        case 8: case 9: case 10: case 11: return text ? `###### ${text}` : '';
        case 12: { // bullet
          const children = convertChildren(depth + 1);
          const indent = '  '.repeat(depth);
          const line = text ? `${indent}- ${text}` : '';
          return [line, children].filter(Boolean).join('\n');
        }
        case 13: { // ordered
          const children = convertChildren(depth + 1);
          const indent = '  '.repeat(depth);
          const line = text ? `${indent}1. ${text}` : '';
          return [line, children].filter(Boolean).join('\n');
        }
        case 14: { // code
          const codeElements = block.code?.text?.elements || textElements;
          const codeText = codeElements.map(e => e.text_run?.content || '').join('');
          const langVal = block.code?.style?.language;
          const langStr = typeof langVal === 'number' ? (CODE_LANG_MAP[langVal] || '') : String(langVal || '').toLowerCase();
          return codeText ? `\`\`\`${langStr}\n${codeText}\n\`\`\`` : '';
        }
        case 15: { // quote
          const content = text || convertChildren(depth);
          return content ? content.split('\n').map(l => `> ${l}`).join('\n') : '';
        }
        case 16: { // todo
          const checked = block.todo?.style?.done === true;
          return text ? `- [${checked ? 'x' : ' '}] ${text}` : '';
        }
        case 17: return '---'; // divider
        case 18: { // image - 保留外链 token 引用
          const token = block.image?.token || '';
          return token ? `![](feishu-image://${token})` : '';
        }
        case 19: { // table
          const cellIds = block.children || [];
          if (!cellIds.length) return '';
          const cols = block.table?.property?.column_size || 1;
          const rows = [];
          for (let i = 0; i < cellIds.length; i += cols) {
            const row = [];
            for (let j = 0; j < cols && (i + j) < cellIds.length; j++) {
              const cell = allBlocks[cellIds[i + j]];
              const cellContent = cell ? (cell.children || [])
                .map(id => convertApiBlock(allBlocks[id], allBlocks, 0))
                .filter(Boolean).join(' ').replace(/\|/g, '\\|').replace(/\n/g, ' ') : '';
              row.push(cellContent);
            }
            rows.push(row);
          }
          if (!rows.length) return '';
          const header = '| ' + rows[0].join(' | ') + ' |';
          const sep = '| ' + rows[0].map(() => '---').join(' | ') + ' |';
          const body = rows.slice(1).map(r => '| ' + r.join(' | ') + ' |').join('\n');
          return [header, sep, body].filter(Boolean).join('\n');
        }
        case 20: return ''; // table_cell
        case 22: case 23: return convertChildren(depth); // grid, grid_column
        case 27: { // callout
          const content = convertChildren(depth);
          return content ? content.split('\n').map(l => `> ${l}`).join('\n') : '';
        }
        default: return text || convertChildren(depth);
      }
    }

    function convertApiDataToMarkdown(apiData) {
      if (!apiData) return null;
      const blocks = apiData.blocks || {};
      const doc = apiData.document;
      if (!doc || !doc.block_id) return null;
      const rootBlock = blocks[doc.block_id];
      if (!rootBlock) return null;
      rootBlock.children = doc.children || rootBlock.children || [];
      const md = convertApiBlock(rootBlock, blocks, 0);
      return md ? md.replace(/\n{3,}/g, '\n\n').trim() : null;
    }

    // --- 虚拟滚动收集（飞书虚拟渲染只渲染可见区域） ---
    async function scrollAndCollectBlocks(progressCallback = null) {
      // 飞书 docx 滚动容器探测
      const containerSelectors = [
        '.docx-page-content-wrapper',
        '.bear-web-x-container',
        '.docx-page-content',
        '[class*=\"page-content\"]',
        '.minutes-body', '.vc-minutes-body',
        "[class*='minutes-content']",
        '.main-content', 'main', '#content'
      ];
      let scrollContainer = null;
      for (const sel of containerSelectors) {
        const el = document.querySelector(sel);
        if (el && el.scrollHeight > el.clientHeight + 100) { scrollContainer = el; break; }
      }
      if (!scrollContainer) scrollContainer = document.documentElement;

      const collected = new Map(); // data-block-id → cloned node
      const step = Math.max(Math.floor(scrollContainer.clientHeight * 0.35), 150);
      const waitMs = 400; // 等待虚拟渲染的时间

      function collect() {
        const roots = [
          document.querySelector('#docx'),
          document.querySelector('.garr-container-docx'),
          document.querySelector('[class*=\"docx-container\"]'),
          document.body
        ];
        for (const root of roots) {
          if (!root) continue;
          const blocks = root.querySelectorAll('.block[data-block-type]');
          for (const block of blocks) {
            const id = block.getAttribute('data-block-id');
            if (id && !collected.has(id)) collected.set(id, block.cloneNode(true));
          }
          if (blocks.length > 0) break; // 找到有内容的容器就停
        }
      }

      // 辅助：平滑滚动到指定位置（模拟 wheel 事件触发飞书渲染）
      async function smoothScrollTo(target) {
        const current = scrollContainer.scrollTop;
        const delta = target - current;
        const steps = Math.max(Math.ceil(Math.abs(delta) / 100), 1);
        for (let i = 1; i <= steps; i++) {
          scrollContainer.scrollTop = current + (delta * i) / steps;
          await new Promise(r => setTimeout(r, Math.max(waitMs / steps, 50)));
        }
      }

      const totalHeight = scrollContainer.scrollHeight;
      const viewHeight = scrollContainer.clientHeight;
      const maxScrollTop = totalHeight - viewHeight;
      if (progressCallback) progressCallback(`文档高度 ${totalHeight}px，开始滚动收集...`);

      // === 第一遍：从上到下完整滚动 ===
      collect(); // 先收集当前可见内容
      let lastCollected = collected.size;
      let noNewBlocks = 0;

      for (let pos = step; pos <= maxScrollTop + step; pos += step) {
        const target = Math.min(pos, maxScrollTop);
        await smoothScrollTo(target);
        await new Promise(r => setTimeout(r, waitMs));
        collect();

        const newBlocks = collected.size - lastCollected;
        if (progressCallback && newBlocks > 0) {
          progressCallback(`滚动中... 已收集 ${collected.size} 个内容块`);
        }

        if (newBlocks === 0) {
          noNewBlocks++;
          if (noNewBlocks >= 4) break; // 连续4步无新块，可能已到底
        } else {
          noNewBlocks = 0;
        }
        lastCollected = collected.size;

        // 动态更新：页面可能在滚动中变高
        const newMax = scrollContainer.scrollHeight - viewHeight;
        if (newMax > maxScrollTop + step * 2) {
          // 页面变高了，继续滚动
        }
      }

      // === 第二遍：从下到上回扫 ===
      if (progressCallback) progressCallback(`回扫中... 已收集 ${collected.size} 个块`);
      noNewBlocks = 0;
      for (let pos = scrollContainer.scrollTop; pos >= 0; pos -= step * 1.5) {
        const target = Math.max(pos, 0);
        await smoothScrollTo(target);
        await new Promise(r => setTimeout(r, waitMs * 0.6));
        collect();
        if (collected.size === lastCollected) noNewBlocks++;
        else { noNewBlocks = 0; lastCollected = collected.size; }
        if (noNewBlocks >= 5) break;
      }

      // === 第三遍：快速到底再回顶（补漏） ===
      await smoothScrollTo(maxScrollTop);
      await new Promise(r => setTimeout(r, 600));
      collect();
      await smoothScrollTo(0);
      await new Promise(r => setTimeout(r, 400));
      collect();

      if (progressCallback) progressCallback(`滚动收集完成，共 ${collected.size} 个内容块`);

      // 按 data-block-id 排序（保持文档顺序）
      const sorted = [...collected.entries()]
        .sort((a, b) => (parseInt(a[0]) || 0) - (parseInt(b[0]) || 0))
        .map(([, node]) => node);

      // 恢复滚动位置到顶部
      scrollContainer.scrollTop = 0;
      window.scrollTo(0, 0);
      return sorted;
    }

    // --- 主提取函数（三策略瀑布） ---
    async function extractFeishuDocContent() {
      const pageType = detectFeishuPageType();
      if (!pageType) return null;

      // 解除复制保护
      neutralizeCopyProtection();

      const url = cleanFeishuUrl(window.location.href);
      const title = extractTitle();
      const author = extractAuthor();
      let articleContent = '';
      let images = [];

      // 策略1: 内部 API（wiki/docx 页面最佳方案）
      if (pageType === 'wiki' || pageType === 'docx') {
        try {
          const apiData = await fetchDocViaApi();
          if (apiData) {
            const md = convertApiDataToMarkdown(apiData);
            if (md && md.length > 50) {
              articleContent = md;
              // 从 API 数据提取图片 token
              const imgMatches = md.match(/!\[\]\(feishu-image:\/\/([^)]+)\)/g);
              if (imgMatches) {
                images = imgMatches.map(m => m.match(/feishu-image:\/\/([^)]+)/)?.[1]).filter(Boolean);
              }
            }
          }
        } catch (e) {
          console.warn('[星存助手] Feishu API strategy failed:', e);
        }
      }

      // 策略2: DOM 直接读取（取当前可见的块）
      let domBlockCount = 0;
      if (!articleContent) {
        const root = document.querySelector('#docx') || document.querySelector('.garr-container-docx');
        if (root) {
          const blocks = Array.from(root.querySelectorAll('.block[data-block-type]') || []);
          domBlockCount = blocks.length;
          if (blocks.length > 3) {
            articleContent = extractMarkdownFromBlocks(blocks);
          }
        }
      }

      // 策略3: 虚拟滚动收集（始终执行以确保获取完整内容）
      if (!articleContent || articleContent.length < 100 || domBlockCount < 5 || (pageType === 'docx' && document.querySelector('.block[data-block-type]'))) {
        try {
          UtilModule.showNotification('飞书文档较长，正在滚动加载完整内容...', 'info');
          const scrollBlocks = await scrollAndCollectBlocks(
            (msg) => UtilModule.showNotification(msg, 'info')
          );
          if (scrollBlocks.length > 3) {
            console.log(`[星存助手] 滚动收集到 ${scrollBlocks.length} 个块 (API: ${articleContent ? articleContent.length : 0} 字符, DOM: ${domBlockCount} 块)`);
            const scrollMd = extractMarkdownFromBlocks(scrollBlocks);
            // 取更完整的结果
            if (scrollMd.length > (articleContent?.length || 0) * 1.2 || scrollMd.length > 500) {
              articleContent = scrollMd;
            }
          }
        } catch (e) {
          console.warn('[星存助手] Scroll strategy failed:', e);
        }
      }

      if (!articleContent || articleContent.length < 30) return null;

      // 收集 DOM 中可见的图片外链
      const imgEls = document.querySelectorAll('#docx img, .garr-container-docx img');
      for (const img of imgEls) {
        const src = resolveFeishuUrl(img.currentSrc || img.src || img.getAttribute('src') || '');
        if (src && /^https?:\/\//.test(src) && !src.includes('data:') && !images.includes(src)) {
          images.push(src);
        }
      }

      return {
        sourceType: 'feishu_doc',
        title,
        contentHTML: '', // 飞书文档直接输出 Markdown，不使用 HTML
        contentMarkdown: articleContent, // 直接提供 Markdown，跳过 TurndownService
        url,
        author,
        authorUrl: window.location.origin,
        topicId: null,
        category: '飞书云文档',
        tags: ['飞书'],
        images
      };
    }

    return {
      detectFeishuPageType,
      extractFeishuDocContent,
      neutralizeCopyProtection
    };
  })();

  // ============================================================
  // 模块4: Markdown转换 (ConvertModule)
  // ============================================================
  const ConvertModule = (function() {
    let turndownService = null;

    function getBestLazySource(el) {
      const candidates = [
        el.getAttribute('data-src'),
        el.getAttribute('data-original'),
        el.getAttribute('data-actualsrc'),
        el.getAttribute('data-lazy-src'),
        el.getAttribute('data-lazyload'),
        el.getAttribute('data-url'),
        el.getAttribute('data-backupsrc'),
        el.getAttribute('data-origin'),
        el.getAttribute('data-thumb'),
        el.getAttribute('src')
      ].filter(Boolean);

      let fallbackDataUri = '';
      for (const raw of candidates) {
        const v = String(raw).trim();
        if (!v) continue;
        if (v.startsWith('data:image')) {
          // 微信常见 1x1 SVG 占位图，不应作为最终资源地址
          if (/^data:image\/svg\+xml/i.test(v) || v.length < 220) {
            fallbackDataUri = fallbackDataUri || v;
            continue;
          }
          fallbackDataUri = fallbackDataUri || v;
          continue;
        }
        if (/^https?:\/\//i.test(v)) return v;
        if (v.startsWith('//')) return 'https:' + v;
        if (v.startsWith('/')) return window.location.origin + v;
      }
      return fallbackDataUri || '';
    }

    function preprocessContentHtml(contentHTML, metadata = {}) {
      const sourceType = metadata.sourceType || '';
      const articleTitle = (metadata.title || '').trim();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = contentHTML || '';

      wrapper.querySelectorAll('script, style, noscript').forEach((n) => n.remove());

      // 懒加载图片/视频 source 归一化
      wrapper.querySelectorAll('img, source').forEach((node) => {
        const src = getBestLazySource(node);
        if (src) {
          node.setAttribute('src', src);
          if (node.tagName === 'SOURCE') node.setAttribute('srcset', src);
        }
      });

      // 处理微信图片说明
      wrapper.querySelectorAll('figure, section').forEach((box) => {
        const img = box.querySelector('img');
        if (!img) return;
        const captionNode = box.querySelector('figcaption, .img_desc, .image_caption, .pictext');
        const caption = captionNode ? captionNode.textContent.trim() : '';
        if (caption) {
          const hint = document.createElement('p');
          hint.innerHTML = `<em>图片说明：${caption}</em>`;
          box.parentNode?.insertBefore(hint, box.nextSibling);
          if (!img.getAttribute('alt')) img.setAttribute('alt', caption);
        }
      });

      // 公众号段落标题层级增强
      if (sourceType === 'wechat') {
        wrapper.querySelectorAll('p, section').forEach((el) => {
          const text = (el.textContent || '').trim();
          if (!text || text.length > 48) return;
          const style = (el.getAttribute('style') || '').toLowerCase();
          const hasStrong = !!el.querySelector('strong, b');
          const sizeMatch = style.match(/font-size\s*:\s*(\d+)px/);
          const size = sizeMatch ? parseInt(sizeMatch[1], 10) : 0;
          if (hasStrong || size >= 18) {
            const tag = size >= 22 ? 'h2' : 'h3';
            const h = document.createElement(tag);
            h.textContent = text;
            el.replaceWith(h);
          }
        });
      }

      // 标题归一化（用于去重，避免样式差异导致重复）
      const normalizeHeading = (s) => String(s || '')
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .replace(/[“”"'`‘’]/g, '')
        .replace(/[：:·\-—_]/g, '')
        .replace(/\s+/g, '')
        .trim();

      // 删除正文开头重复标题
      if (articleTitle) {
        const firstTextNode = wrapper.querySelector('h1, h2, h3, h4, p, section, div');
        if (firstTextNode) {
          const t = (firstTextNode.textContent || '').trim();
          if (t && normalizeHeading(t) === normalizeHeading(articleTitle)) firstTextNode.remove();
        }
      }

      // 连续重复标题去重（常见于公众号粘贴结构）
      const headingNodes = Array.from(wrapper.querySelectorAll('h1, h2, h3'));
      for (let i = 1; i < headingNodes.length; i++) {
        const prev = normalizeHeading(headingNodes[i - 1].textContent || '');
        const curr = normalizeHeading(headingNodes[i].textContent || '');
        if (prev && curr && prev === curr) {
          headingNodes[i].remove();
        }
      }

      // 公众号正文头部噪音过滤（作者/时间/来源行）
      if (sourceType === 'wechat') {
        // 透明字与内联样式解包：避免正文“看不见”或保留无效 span
        wrapper.querySelectorAll('span, font').forEach((el) => {
          const style = (el.getAttribute('style') || '').toLowerCase();
          const text = (el.textContent || '').trim();
          const transparentLike = /color\s*:\s*transparent/.test(style) || /opacity\s*:\s*0(?:[;)]|$)/.test(style);
          // 只含装饰符号（如 ***）直接删掉
          if (text && /^[*＊_~\s]+$/.test(text)) {
            el.remove();
            return;
          }
          // 透明文本改为可见文本（保留内容，不保留透明样式）
          if (transparentLike) {
            const span = document.createElement('span');
            span.textContent = text;
            el.replaceWith(span);
            return;
          }
          // 普通 span/font 仅做轻量解包，减少样式污染
          if (el.tagName === 'FONT' || (el.tagName === 'SPAN' && style)) {
            const frag = document.createDocumentFragment();
            while (el.firstChild) frag.appendChild(el.firstChild);
            el.replaceWith(frag);
          }
        });

        const topNodes = Array.from(wrapper.querySelectorAll('p, section, div')).slice(0, 12);
        topNodes.forEach((el) => {
          const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
          if (!t) return;
          const isMetaNoise =
            /^原创(?:\s|$|[a-zA-Z0-9])/.test(t) && t.length < 60 ||
            /^(发表于|发布于|作者|来源)[:：]/.test(t) ||
            /^@\w+/.test(t) && /20\d{2}[-/年]\d{1,2}/.test(t) ||
            /20\d{2}[-/年]\d{1,2}[-/月]\d{1,2}/.test(t) && t.length < 60;
          if (isMetaNoise) el.remove();
        });

        // 过滤公众号内“小说阅读器”类导流文案/按钮
        const readerPromoPattern = /(在小说阅读器读本章|在小说阅读器中沉浸阅读|去阅读)/;
        wrapper.querySelectorAll('p, a, span, div, section').forEach((el) => {
          const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
          if (!text) return;
          if (readerPromoPattern.test(text) && text.length <= 32) {
            el.remove();
            return;
          }
          // 兼容“超链接文本 + javascript:void(0)”的伪链接块
          if (el.tagName === 'A') {
            const href = (el.getAttribute('href') || '').trim().toLowerCase();
            if (href === 'javascript:void(0)' || href.startsWith('javascript:')) {
              if (readerPromoPattern.test(text) || /在小说阅读器/.test(text)) {
                el.remove();
              } else {
                // 非导流文本不删除，保留可见文字，避免正文出现“隐身”与孤立 * 号
                const span = document.createElement('span');
                span.textContent = text;
                el.replaceWith(span);
              }
            }
          }
        });
      }

      // 视频号/嵌入视频转嵌入块（可嵌入页面优先 iframe，直链 mp4 用 video）
      wrapper.querySelectorAll('iframe, video').forEach((node) => {
        const src = node.getAttribute('src') || node.getAttribute('data-src') || node.querySelector('source')?.getAttribute('src') || '';
        const fixed = UtilModule.buildSafeUrl(src, window.location.href);
        if (!fixed) return;
        const box = document.createElement('div');
        const isDirectMp4 = /\.mp4(?:$|\?)/i.test(fixed) || /mpvideo\.qpic\.cn/i.test(fixed);
        if (isDirectMp4) {
          const v = document.createElement('video');
          v.setAttribute('src', fixed);
          v.setAttribute('controls', 'true');
          v.setAttribute('playsinline', 'true');
          v.setAttribute('style', 'width:100%;max-height:480px;border-radius:8px;');
          box.appendChild(v);
        } else {
          const iframe = document.createElement('iframe');
          iframe.setAttribute('src', fixed);
          iframe.setAttribute('style', 'width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;');
          iframe.setAttribute('allowfullscreen', 'true');
          iframe.setAttribute('loading', 'lazy');
          box.appendChild(iframe);
        }
        node.replaceWith(box);
      });

      // 公众号视频兜底：从 data-mpvid / data-vid / vid 提取 vid，生成腾讯播放器 iframe
      if (sourceType === 'wechat') {
        const seenVid = new Set();
        wrapper.querySelectorAll('[data-mpvid], [data-vid], [vid]').forEach((el) => {
          const vid = (el.getAttribute('data-mpvid') || el.getAttribute('data-vid') || el.getAttribute('vid') || '').trim();
          if (!/^[A-Za-z0-9]{8,24}$/.test(vid)) return;
          if (seenVid.has(vid)) return;
          seenVid.add(vid);
          const iframe = document.createElement('iframe');
          iframe.setAttribute('src', `https://v.qq.com/txp/iframe/player.html?vid=${encodeURIComponent(vid)}`);
          iframe.setAttribute('style', 'width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;');
          iframe.setAttribute('allowfullscreen', 'true');
          iframe.setAttribute('loading', 'lazy');
          el.replaceWith(iframe);
        });
      }

      // 卡片节点统一保留文本+链接
      wrapper.querySelectorAll('[data-url], [data-href], .card_link, .weapp_display_element').forEach((el) => {
        const raw = el.getAttribute('data-url') || el.getAttribute('data-href') || '';
        const href = UtilModule.buildSafeUrl(raw, window.location.href);
        if (!href) return;
        if (el.tagName === 'A') return;
        const txt = (el.textContent || '').trim() || '卡片链接';
        const p = document.createElement('p');
        p.innerHTML = `<a href="${href}" target="_blank">${txt}</a>`;
        el.replaceWith(p);
      });

      // 分割线兼容
      wrapper.querySelectorAll('section, p, div').forEach((el) => {
        const style = (el.getAttribute('style') || '').toLowerCase();
        if (style.includes('border-top') && (el.textContent || '').trim() === '') {
          const hr = document.createElement('hr');
          el.replaceWith(hr);
        }
      });

      // 卡片链接兜底：把 data-url 提升为标准链接
      wrapper.querySelectorAll('[data-url]').forEach((el) => {
        const u = (el.getAttribute('data-url') || '').trim();
        if (!u) return;
        const href = /^https?:\/\//i.test(u) ? u : UtilModule.buildSafeUrl(u, window.location.href);
        if (!href) return;
        if (el.tagName === 'A') {
          el.setAttribute('href', href);
          return;
        }
        const txt = (el.textContent || '').trim() || '卡片链接';
        const a = document.createElement('a');
        a.href = href;
        a.textContent = txt;
        a.target = '_blank';
        el.appendChild(document.createElement('br'));
        el.appendChild(a);
      });

      return wrapper.innerHTML;
    }

    // 解析视频URL
    function parseVideoUrl(href) {
      // YouTube
      const ytMatch = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
      if (ytMatch) {
        return { embedUrl: 'https://www.youtube.com/embed/' + ytMatch[1], isVideo: true, platform: 'youtube' };
      }
      // Bilibili（包含 b23.tv 短链 - 返回原链接让用户点击跳转）
      const biliMatch = href.match(/bilibili\.com\/video\/(BV[a-zA-Z0-9]+|av\d+)/i);
      if (biliMatch) {
        const vid = biliMatch[1];
        if (vid.toLowerCase().startsWith('bv')) {
          return { embedUrl: '//player.bilibili.com/player.html?bvid=' + vid, isVideo: true, platform: 'bilibili' };
        } else {
          return { embedUrl: '//player.bilibili.com/player.html?aid=' + vid.replace(/^av/i, ''), isVideo: true, platform: 'bilibili' };
        }
      }
      // b23.tv 短链（Bilibili）- 无法直接解析，作为视频链接显示
      if (/b23\.tv/i.test(href)) {
        return { embedUrl: '', isVideo: true, platform: 'bilibili-short', originalUrl: href };
      }
      // Vimeo
      const vimeoMatch = href.match(/vimeo\.com\/(\d+)/);
      if (vimeoMatch) {
        return { embedUrl: 'https://player.vimeo.com/video/' + vimeoMatch[1], isVideo: true, platform: 'vimeo' };
      }
      // 优酷
      const youkuMatch = href.match(/v\.youku\.com\/v_show\/id_([a-zA-Z0-9=]+)/);
      if (youkuMatch) {
        return { embedUrl: 'https://player.youku.com/embed/' + youkuMatch[1], isVideo: true, platform: 'youku' };
      }
      // 腾讯视频
      const qqMatch = href.match(/v\.qq\.com\/x\/(?:cover\/[^\/]+\/|page\/|play\/)([a-zA-Z0-9]+)/);
      if (qqMatch) {
        return { embedUrl: 'https://v.qq.com/txp/iframe/player.html?vid=' + qqMatch[1], isVideo: true, platform: 'qq' };
      }
      return { embedUrl: '', isVideo: false, platform: '' };
    }

    // 解析网盘链接
    function parseCloudUrl(href) {
      // 百度网盘
      if (/pan\.baidu\.com|yun\.baidu\.com/i.test(href)) {
        return { isCloud: true, platform: 'baidu', name: '百度网盘', icon: '📦' };
      }
      // 夸克网盘
      if (/pan\.quark\.cn/i.test(href)) {
        return { isCloud: true, platform: 'quark', name: '夸克网盘', icon: '📦' };
      }
      // 123云盘
      if (/123pan\.com|123云盘/i.test(href)) {
        return { isCloud: true, platform: '123pan', name: '123云盘', icon: '📦' };
      }
      // 蓝奏云
      if (/lanzou[a-z]*\.(com|cn)|lanzoui\.com|lanzoux\.com/i.test(href)) {
        return { isCloud: true, platform: 'lanzou', name: '蓝奏云', icon: '📦' };
      }
      // 阿里云盘
      if (/aliyundrive\.com|alipan\.com/i.test(href)) {
        return { isCloud: true, platform: 'aliyun', name: '阿里云盘', icon: '📦' };
      }
      // 天翼云盘
      if (/cloud\.189\.cn/i.test(href)) {
        return { isCloud: true, platform: 'tianyi', name: '天翼云盘', icon: '📦' };
      }
      return { isCloud: false, platform: '', name: '', icon: '' };
    }

    // 生成视频嵌入
    function generateVideoEmbed(videoInfo, originalUrl) {
      if (videoInfo.embedUrl) {
        return '\n\n<div style="position:relative;width:100%;padding-bottom:56.25%;"><iframe src="' + videoInfo.embedUrl + '" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;" allowfullscreen></iframe></div>\n\n';
      }
      // 无法嵌入的视频链接（如 b23.tv 短链），使用视频图标显示
      if (videoInfo.isVideo) {
        return '\n\n> 🎬 **视频链接**: [点击观看](' + originalUrl + ')\n\n';
      }
      return '\n\n' + originalUrl + '\n\n';
    }

    // 生成网盘链接块
    function generateCloudBlock(cloudInfo, originalUrl, linkText) {
      return '\n\n> ' + cloudInfo.icon + ' **' + cloudInfo.name + '**: [' + (linkText || '点击下载') + '](' + originalUrl + ')\n\n';
    }

    // 初始化Turndown
    function initTurndown() {
      if (turndownService) return turndownService;

      turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced',
        emDelimiter: '*'
      });

      // HTML 表格转 Markdown 表格
      turndownService.addRule('tables', {
        filter: 'table',
        replacement: (content, node) => {
          try {
            const rows = node.querySelectorAll('tr');
            if (rows.length === 0) return content;

            const tableData = [];
            let maxCols = 0;

            // 收集所有行的数据
            rows.forEach(row => {
              const cells = row.querySelectorAll('th, td');
              const rowData = [];
              cells.forEach(cell => {
                // 获取单元格文本，处理内部链接
                let cellText = '';
                const links = cell.querySelectorAll('a');
                if (links.length > 0) {
                  // 处理带链接的单元格
                  const parts = [];
                  cell.childNodes.forEach(child => {
                    if (child.nodeType === Node.TEXT_NODE) {
                      parts.push(child.textContent.trim());
                    } else if (child.nodeName === 'A') {
                      const linkText = child.textContent.trim();
                      const linkHref = child.href || '';
                      if (linkHref) {
                        parts.push(`[${linkText}](${linkHref})`);
                      } else {
                        parts.push(linkText);
                      }
                    } else {
                      parts.push(child.textContent.trim());
                    }
                  });
                  cellText = parts.join(' ').trim();
                } else {
                  cellText = cell.textContent.trim();
                }
                // 清理单元格内容（移除换行、多余空格）
                cellText = cellText.replace(/\s+/g, ' ').trim();
                rowData.push(cellText);
              });
              if (rowData.length > maxCols) maxCols = rowData.length;
              tableData.push(rowData);
            });

            if (tableData.length === 0 || maxCols === 0) return content;

            // 构建 Markdown 表格
            let markdown = '\n\n';

            // 第一行作为表头
            const headerRow = tableData[0];
            while (headerRow.length < maxCols) headerRow.push('');
            markdown += '| ' + headerRow.join(' | ') + ' |\n';

            // 分隔行
            markdown += '| ' + headerRow.map(() => '---').join(' | ') + ' |\n';

            // 数据行
            for (let i = 1; i < tableData.length; i++) {
              const row = tableData[i];
              while (row.length < maxCols) row.push('');
              markdown += '| ' + row.join(' | ') + ' |\n';
            }

            markdown += '\n';
            console.log(`[Discourse Saver] 转  表格: ${tableData.length} 行, ${maxCols} 列`);
            return markdown;
          } catch (e) {
            console.warn('[Discourse Saver] 表格转换失败:', e.message);
            return content;
          }
        }
      });

      // 高亮文本 → Obsidian ==text== 语法
      turndownService.addRule('highlightMark', {
        filter: (node) => {
          if (node.nodeName === 'MARK') return true;
          if (node.nodeName === 'SPAN') {
            const style = (node.getAttribute('style') || '').toLowerCase();
            return /background(-color)?\s*:\s*(?!none|transparent|inherit|initial|unset)/i.test(style) &&
                   !/background(-color)?\s*:\s*(white|#fff|rgb\(255)/i.test(style);
          }
          return false;
        },
        replacement: (content) => {
          const text = content.trim();
          if (!text) return '';
          return `==${text}==`;
        }
      });

      // 保留颜色样式 → Obsidian 支持 inline HTML
      turndownService.addRule('coloredText', {
        filter: (node) => {
          if (node.nodeName !== 'SPAN' && node.nodeName !== 'FONT') return false;
          const style = node.getAttribute('style') || '';
          const color = node.getAttribute('color') || '';
          // 排除已被 highlight 规则处理的节点
          if (/background(-color)?\s*:/i.test(style)) return false;
          return style.includes('color') || !!color;
        },
        replacement: (content, node) => {
          if (!content.trim()) return content;
          const style = node.getAttribute('style') || '';
          const attrColor = node.getAttribute('color') || '';
          const colorMatch = style.match(/(?:^|;)\s*color:\s*([^;]+)/i);
          const color = (colorMatch ? colorMatch[1].trim() : attrColor).replace(/[;"']/g, '');
          if (!color || color === 'inherit' || color === 'initial') return content;
          // Obsidian 渲染支持 <font color="..."> 和 <span style="color:...">
          return `<font color="${color}">${content}</font>`;
        }
      });

      // 下划线保留 → Obsidian 支持 <u> 内联 HTML
      turndownService.addRule('underline', {
        filter: (node) => node.nodeName === 'U' || node.nodeName === 'INS',
        replacement: (content) => content.trim() ? `<u>${content}</u>` : content
      });

      // 上标/下标保留 → Obsidian 支持 <sup>/<sub>
      turndownService.addRule('supSub', {
        filter: (node) => node.nodeName === 'SUP' || node.nodeName === 'SUB',
        replacement: (content, node) => {
          if (!content.trim()) return content;
          const tag = node.nodeName.toLowerCase();
          return `<${tag}>${content}</${tag}>`;
        }
      });

      // 处理代码块
      turndownService.addRule('codeBlocks', {
        filter: (node) => {
          return node.nodeName === 'PRE' && node.querySelector('code');
        },
        replacement: (content, node) => {
          // Raw版: 提取代码块语言标识
          const codeEl = node.querySelector('code');
          let lang = '';
          if (codeEl) {
            // 从 class 中提取语言 (如 "lang-js", "language-python")
            const cls = codeEl.className || '';
            const langMatch = cls.match(/(?:lang|language)-(\w+)/);
            if (langMatch) lang = langMatch[1];
            // 从 data-lang 属性提取
            if (!lang && codeEl.getAttribute('data-lang')) {
              lang = codeEl.getAttribute('data-lang');
            }
            // 从 pre 的 data-code-language 属性提取
            if (!lang) {
              lang = node.getAttribute('data-code-language') || '';
            }
          }
          const codeNode = node.querySelector('code');
          if (!codeNode) return content;

          const clonedCode = codeNode.cloneNode(true);
          const brTags = clonedCode.querySelectorAll('br');
          brTags.forEach(br => br.replaceWith('\n'));
          const code = clonedCode.textContent;

          return '\n\n```' + lang + '\n' + code + '\n```\n\n';
        }
      });

      // 处理lightbox图片
      turndownService.addRule('lightboxImages', {
        filter: (node) => {
          return node.nodeName === 'A' &&
                 node.classList.contains('lightbox') &&
                 node.querySelector('img');
        },
        replacement: (content, node) => {
          const img = node.querySelector('img');
          if (!img) return '';

          const src = node.href || img.src;
          if (!src || /^data:image/i.test(src) || /mp\.weixin\.qq\.comdata:image/i.test(src)) return '';
          const fullSrc = src.startsWith('http') ? src : window.location.origin + src;
          // 清理 alt：去掉 |WxH 尺寸标注、末尾数字下划线
          const rawAlt = img.getAttribute('data-base62-sha1') || img.alt || '';
          const alt = rawAlt.replace(/\|[^\]|]+/g, '').replace(/[_\d]+$/, '').replace(/[\r\n]+/g, ' ').trim() || 'image';

          return '\n\n![' + alt + '](' + fullSrc + ')\n\n';
        }
      });

      // 处理普通图片
      turndownService.addRule('images', {
        filter: (node) => {
          if (node.nodeName !== 'IMG') return false;
          if (node.classList.contains('emoji')) return false;
          if (node.parentNode?.classList?.contains('lightbox')) return false;
          return true;
        },
        replacement: (content, node) => {
          const src = node.src;
          if (!src) return '';
          if (/^data:image/i.test(src) || /mp\.weixin\.qq\.comdata:image/i.test(src)) return '';

          const fullSrc = src.startsWith('http') ? src : window.location.origin + src;
          // 清理 alt：去掉 |WxH 尺寸标注、末尾数字下划线
          const rawAlt = node.alt || '';
          const alt = rawAlt.replace(/\|[^\]|]+/g, '').replace(/[_\d]+$/, '').replace(/[\r\n]+/g, ' ').trim() || 'image';

          return '\n\n![' + alt + '](' + fullSrc + ')\n\n';
        }
      });

      // 移除emoji
      turndownService.addRule('emojiImages', {
        filter: (node) => {
          if (node.nodeName !== 'IMG') return false;
          const className = node.className || '';
          const src = node.src || '';
          const alt = node.alt || '';
          if (className.includes('emoji') ||
              src.includes('/emoji/') ||
              src.includes('twemoji') ||
              /^:[^:]+:$/.test(alt)) return true;
          return false;
        },
        replacement: () => ''
      });

      // 视频链接转iframe
      turndownService.addRule('onlineVideoEmbed', {
        filter: (node) => {
          if (node.nodeName !== 'A') return false;
          const txt = (node.textContent || '').trim();
          if (txt.startsWith('视频直链')) return false;
          const href = node.href || '';
          const videoInfo = parseVideoUrl(href);
          return videoInfo.isVideo;
        },
        replacement: (content, node) => {
          const href = node.href || '';
          const videoInfo = parseVideoUrl(href);
          if (videoInfo.isVideo) {
            return generateVideoEmbed(videoInfo, href);
          }
          return '[' + content + '](' + href + ')';
        }
      });

      // 保留 iframe 嵌入（公众号/微博等）
      turndownService.addRule('iframeEmbed', {
        filter: (node) => node.nodeName === 'IFRAME',
        replacement: (content, node) => {
          const src = node.getAttribute('src') || '';
          const safe = UtilModule.buildSafeUrl(src, window.location.href);
          if (!safe) return '';
          return '\n\n<iframe src="' + safe + '" style="width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;" allowfullscreen loading="lazy"></iframe>\n\n[视频直链](' + safe + ')\n\n';
        }
      });

      // 保留 video 嵌入（当源里确实是 video 节点时，仍转换为 iframe 优先）
      turndownService.addRule('videoEmbed', {
        filter: (node) => node.nodeName === 'VIDEO',
        replacement: (content, node) => {
          const src = node.getAttribute('src') || node.querySelector('source')?.getAttribute('src') || '';
          const safe = UtilModule.buildSafeUrl(src, window.location.href);
          if (!safe) return '';
          return '\n\n<iframe src="' + safe + '" style="width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;" allowfullscreen loading="lazy"></iframe>\n\n[视频直链](' + safe + ')\n\n';
        }
      });

      // 网盘链接特殊处理
      turndownService.addRule('cloudStorageLink', {
        filter: (node) => {
          if (node.nodeName !== 'A') return false;
          const href = node.href || '';
          const cloudInfo = parseCloudUrl(href);
          return cloudInfo.isCloud;
        },
        replacement: (content, node) => {
          const href = node.href || '';
          const cloudInfo = parseCloudUrl(href);
          if (cloudInfo.isCloud) {
            return generateCloudBlock(cloudInfo, href, content);
          }
          return '[' + content + '](' + href + ')';
        }
      });

      // 文档链接
      turndownService.addRule('documentEmbed', {
        filter: (node) => {
          if (node.nodeName !== 'A') return false;
          if (node.classList?.contains('lightbox')) return false;
          const href = (node.href || '').toLowerCase();
          return /\.(pdf|docx?|xlsx?|pptx?|svg|csv|txt)(\?|$)/i.test(href);
        },
        replacement: (content, node) => {
          const href = node.href || '';
          const hrefLower = href.toLowerCase();

          let fileName = content.trim().replace(/[\r\n]+/g, ' ').trim();
          const imgMatch = fileName.match(/^!\[([^\]]*)\]\([^)]+\)$/);
          if (imgMatch) {
            fileName = imgMatch[1] || '';
          }
          fileName = fileName || href.split('/').pop().split('?')[0] || '文档';

          if (/\.svg(\?|$)/i.test(hrefLower)) {
            return '\n\n![' + fileName + '](' + href + ')\n\n';
          }
          if (/\.pdf(\?|$)/i.test(hrefLower)) {
            return '\n\n📄 **' + fileName + '**\n📥 [下载 PDF](' + href + ')\n\n';
          }
          return '\n\n📎 **' + fileName + '**\n📥 [下载文件](' + href + ')\n\n';
        }
      });

      // Raw版: Discourse 引用块 (aside.quote, blockquote.quote)
      turndownService.addRule('discourseQuotes', {
        filter: function (node) {
          return node.nodeName === 'ASIDE' && node.classList.contains('quote') ||
                 node.nodeName === 'BLOCKQUOTE' && (node.classList.contains('quote') || node.getAttribute('data-discourse') === 'quote');
        },
        replacement: function (content, node) {
          // 提取引用作者和帖子链接
          const titleEl = node.querySelector('.title, [class*="quote-title"]');
          const authorName = titleEl ? titleEl.textContent.replace(/^\s*quote:|：|:\s*/i, '').trim() : '';
          const postLink = node.querySelector('a[href*="/t/"]');
          const quoteUrl = postLink ? postLink.href : '';
          
          let header = '';
          if (authorName && quoteUrl) {
            header = `**${authorName}** ([原文](${quoteUrl}))`;
          } else if (authorName) {
            header = `**${authorName}**`;
          }
          
          content = content.replace(/\n{3,}/g, '\n\n').trim();
          if (!content) return '';
          
          return `\n> ${header}\n> \n> ${content.split('\n').join('\n> ')}\n\n`;
        }
      });

      // v0.8.2: 51吃瓜网/x6d3i 视频嵌入 (x-video div)
      turndownService.addRule('xvideoEmbed', {
        filter: function (node) {
          return node.classList && node.classList.contains('x-video');
        },
        replacement: function (content, node) {
          const ifr = node.querySelector('iframe');
          const a = node.querySelector('a');
          const vu = (ifr && ifr.src) || (a && a.href) || '';
          if (!vu || !vu.startsWith('http')) return content || '';
          return '\n\n<iframe src="' + vu + '" style="width:100%;aspect-ratio:16/9;height:auto;border:none;border-radius:8px;" allowfullscreen loading="lazy"></iframe>\n\n[视频直链](' + vu + ')\n\n';
        }
      });

      // Raw版: 处理 [quote] BBCode 标签
      turndownService.addRule('bbcodeQuotes', {
        filter: function (node, options) {
          return node.nodeName === 'DIV' && node.classList.contains('bbcode-quote');
        },
        replacement: function (content, node) {
          content = content.replace(/\n{3,}/g, '\n\n').trim();
          if (!content) return '';
          const author = node.getAttribute('data-author') || '';
          const header = author ? `**${author}:**` : '';
          return `\n> ${header}\n> ${content.split('\n').join('\n> ')}\n\n`;
        }
      });

      // Raw版: Discourse onebox 链接预览
      turndownService.addRule('oneboxPreviews', {
        filter: function (node) {
          return node.classList && node.classList.contains('onebox');
        },
        replacement: function (content, node) {
          const link = node.querySelector('a.onebox-source, a[href]');
          const titleEl = node.querySelector('h3, h4, .onebox-title, header a');
          const descEl = node.querySelector('p, .onebox-description');
          const imgEl = node.querySelector('img.onebox-avatar, img.thumbnail, img');
          
          const url = link ? link.href : '';
          const title = titleEl ? titleEl.textContent.trim() : '';
          const desc = descEl ? descEl.textContent.trim() : '';
          const img = imgEl ? imgEl.src : '';
          
          if (!url) return content || '';
          
          let result = '';
          if (img && !img.includes('data:image')) {
            result += `![${title || 'preview'}](${img})\n`;
          }
          if (title) {
            result += `**[${title}](${url})**\n`;
          } else {
            result += `[${url}](${url})\n`;
          }
          if (desc && desc.length < 300) {
            result += `> ${desc}\n`;
          }
          return `\n${result}\n`;
        }
      });

      return turndownService;
    }

    // 清理Markdown
    function cleanupMarkdown(markdown) {
      // 先清理零宽字符，避免“看起来一样但匹配不到”
      markdown = markdown.replace(/[\u200B-\u200D\uFEFF]/g, '');
      // 移除空锚点链接
      markdown = markdown.replace(/\[\s*\]\(#[^)]*\)/g, '');
      // 移除 javascript 伪链接
      markdown = markdown.replace(/\[[^\]]*\]\(\s*javascript:[^)]+\)/gi, '');
      // 移除emoji图片语法
      markdown = markdown.replace(/!\[:[a-z_]+:\]\([^)]+\)/gi, '');
      // 移除图片尺寸信息行
      markdown = markdown.replace(/^\s*\d+×\d+\s+\d+(?:\.\d+)?\s*(?:KB|MB|GB)\s*$/gim, '');
      // 移除转义下划线
      markdown = markdown.replace(/\\_/g, '_');
      // 清理嵌套图片链接
      markdown = markdown.replace(/\[!\[([^\]]*)\]\([^)]+\)\]\(([^)]+)\)/g, '![$1]($2)');
      markdown = markdown.replace(/!\[!\[([^\]]*)\]\([^)]+\)\]\(([^)]+)\)/g, '![$1]($2)');
      markdown = markdown.replace(/!!\[/g, '![');
      // 移除GIF
      markdown = markdown.replace(/!\[[^\]]*\]\([^)]*\.gif[^)]*\)/gi, '');
      // 移除 data:image 占位图（包括被错误拼接为 mp.weixin.qq.comdata:image）
      markdown = markdown.replace(/!\[[^\]]*\]\((?:https?:\/\/[^)]*data:image[^)]*|data:image[^)]*)\)/gi, '');
      // 清理 Discourse 图片 alt 中的尺寸标注 ![name|230x500](url) → ![name](url)
      markdown = markdown.replace(/!\[([^\]]*?)\|[^\]]+\]/g, '![$1]');
      // 处理 [spoiler]...[/spoiler] BBCode：保留内容，去掉标签
      markdown = markdown.replace(/\[spoiler\]([\s\S]*?)\[\/spoiler\]/gi, (_, content) => {
        return '\n\n' + content.trim() + '\n\n';
      });
      // 处理单独的未闭合 [spoiler] / [/spoiler] 标签
      markdown = markdown.replace(/\[\/?spoiler\]/gi, '');
      // 公众号“小说阅读器”导流文案清理
      markdown = markdown.replace(/^\s*(在小说阅读器读本章|去阅读|在小说阅读器中沉浸阅读)\s*$/gim, '');
      // 清理视频播放器控件文案/状态行
      markdown = markdown.replace(/^\s*(更多|退出全屏|切换到竖屏全屏退出全屏|切换到横屏模式|分享视频|继续播放|播放|全屏|倍速|倍速播放中|超清流畅)\s*$/gim, '');
      markdown = markdown.replace(/^\s*(进度条[，,]?\s*百分之?\d+|时长\s*\d{1,2}:\d{2}|0\/0|00:00\/\d{1,2}:\d{2}|[0-2]?\d:[0-5]\d\s*\/\s*[0-2]?\d:[0-5]\d)\s*$/gim, '');
      markdown = markdown.replace(/^\s*(0\.5倍0\.75倍1\.0倍1\.5倍2\.0倍|0\.5倍|0\.75倍|1\.0倍|1\.5倍|2\.0倍)\s*$/gim, '');
      // 清理视频号相关推荐/互动噪音
      markdown = markdown.replace(/^\s*(关注|已关注|重播|分享|赞|关闭|观看更多|继续观看|继续播放|转载|分享点赞在看|分享点赞|点赞在看|在看)\s*$/gim, '');
      markdown = markdown.replace(/^\s*(新华网已关注|央视新闻已关注|[^\s]{1,16}已关注)\s*$/gim, '');
      markdown = markdown.replace(/^\s*(订单已排到\d{4}年[！!，,].*|硬核国产[，,].*|爆单)\s*$/gim, '');
      // 清理纯时间行，如 00:41 / 0:41 / 00:00
      markdown = markdown.replace(/^\s*\d{1,2}:\d{2}\s*$/gim, '');
      // 清理播放器“组合控件行”（如：重播 分享 赞 / 切换到竖屏全屏退出全屏 / ，时长00:41）
      markdown = markdown.replace(/^\s*(?:[，,]?\s*)?(?:重播|分享|赞|退出全屏|全屏|观看更多|切换到竖屏全屏退出全屏|切换到横屏模式|继续观看|继续播放|倍速|播放|关闭)(?:\s+(?:重播|分享|赞|退出全屏|全屏|观看更多|切换到竖屏全屏退出全屏|切换到横屏模式|继续观看|继续播放|倍速|播放|关闭))*\s*$/gim, '');
      markdown = markdown.replace(/^\s*[，,]?\s*时长\s*\d{1,2}:\d{2}\s*$/gim, '');
      // 清理孤立占位图片行（仅清理无效/占位链接，不清理正常外链图片）
      markdown = markdown.replace(/^\s*!\[(?:image|图片)?\]\(\s*(?:javascript:[^)]*|data:image[^)]*|#|)\s*\)\s*$/gim, '');
      markdown = markdown.replace(/^\s*(?:image|图片)\s*$/gim, '');
      // 强兜底：播放器控件残留行（含无空格连写）
      markdown = markdown.replace(/^\s*(?:观看更多|退出全屏|切换到竖屏全屏退出全屏|全屏|关闭|重播分享赞|重播|分享|赞)\s*$/gim, '');
      markdown = markdown.replace(/^\s*(?:\[\]|［］)\s*$/gim, '');
      markdown = markdown.replace(/^\s*[，,\/]\s*$/gim, '');
      // === 广告/推广/噪音过滤 ===
      // 微信公众号常见广告/引流
      markdown = markdown.replace(/^\s*(?:点击[上下]方卡片|长按识别|扫码关注|点击阅读原文|阅读原文|点击蓝字关注|关注我们|戳这里|👆点击|↑↑↑|↓↓↓|点击了解更多|广告|推广|商务合作|合作推广).*$/gim, '');
      // 知乎噪音：推荐/关注/登录引导
      markdown = markdown.replace(/^\s*(?:写回答|邀请回答|关注问题|添加评论|举报|收藏|喜欢|查看全部\s*\d+\s*个回答|继续浏览内容|发现更大的世界|打开知乎|登录后你可以|知乎用户|下载知乎客户端|编辑于|发布于\s*\d{4}-\d{2}-\d{2}).*$/gim, '');
      // 微博噪音：互动区域
      markdown = markdown.replace(/^\s*(?:转发\s*\d*|评论\s*\d*|赞\s*\d*|收藏\s*\d*|分享\s*\d*|转发微博|原文转发|快转微博|特别声明：以上内容仅代表作者本人).*$/gim, '');
      // 通用平台推广
      markdown = markdown.replace(/^\s*(?:相关推荐|猜你喜欢|你可能感兴趣|热门文章|热门推荐|更多精彩|延伸阅读|精彩回顾)\s*$/gim, '');
      // 36氪/少数派/IT之家等 footer 噪音
      markdown = markdown.replace(/^\s*(?:本文来自|本文编辑|编辑[:：]|责编[:：]|作者联系方式|投稿邮箱|原创声明：本文系作者授权).*$/gim, '');
      // YouTube 噪音
      markdown = markdown.replace(/^\s*(?:Subscribe|SUBSCRIBE|订阅|Like and subscribe|点赞订阅|👍.*订阅|🔔.*铃铛).*$/gim, '');
      // 清理空格式残留（例如只剩 "*" 或 "**"）
      markdown = markdown.replace(/^\s*(\*{1,3}|_{1,3}|~~)\s*$/gim, '');
      // 清理“仅由强调符号和空白组成”的整行（例如 "*   **"）
      markdown = markdown.replace(/^\s*[*_~\s]+\s*$/gim, '');

      // 行级语义清洗：播放器控件文案（去符号后匹配）
      markdown = markdown.split('\n').filter((line) => {
        const trimmed = (line || '').trim();
        // 保留空行（段落分隔符对 Obsidian 至关重要）
        if (!trimmed) return true;
        const norm = trimmed
          .replace(/[\u200B-\u200D\uFEFF]/g, '')
          .replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '')
          .toLowerCase();
        if (!norm) return false; // 纯符号行移除
        if (
          norm.includes('观看更多') ||
          norm.includes('退出全屏') ||
          norm.includes('切换到竖屏全屏退出全屏') ||
          norm === '全屏' ||
          norm === '关闭' ||
          norm === '分享' ||
          norm === '重播' ||
          norm === '赞'
        ) return false;
        return true;
      }).join('\n');

      // 空行规范化：行尾空白清理，3+连续空行压缩为2行（保留段落分隔）
      markdown = markdown.replace(/[ \t]+\n/g, '\n');
      markdown = markdown.replace(/\n{3,}/g, '\n\n');

      // 标题去重：前两行若是同一标题，只保留一行
      const lines = markdown.split('\n');
      let first = -1, second = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim()) { first = i; break; }
      }
      if (first >= 0) {
        for (let j = first + 1; j < lines.length; j++) {
          if (lines[j].trim()) { second = j; break; }
        }
      }
      if (first >= 0 && second >= 0) {
        const a = lines[first].replace(/^#+\s*/, '').trim();
        const b = lines[second].replace(/^#+\s*/, '').trim();
        if (a && b && a === b) lines.splice(second, 1);
      }
      markdown = lines.join('\n');

      // 连续重复行去重：页面常把署名/作者渲染两次（如“作者：XXX”出现两遍）
      {
        const arr = markdown.split('\n');
        const out = [];
        let prevNonEmpty = null;
        for (const ln of arr) {
          const t = ln.trim();
          // Markdown 结构行（标题/引用/表格/代码块/列表）不参与去重，避免误删
          const isStructural = /^\s*(?:#|>|\||`{3}|[-*+]\s|\d+\.\s)/.test(ln);
          if (t && t === prevNonEmpty && !isStructural) continue; // 与上一非空行完全相同则跳过
          out.push(ln);
          if (t) prevNonEmpty = t;
        }
        markdown = out.join('\n');
      }

      // 将正文开头的署名/时间/来源行转换为斜体归属行
      // 同时处理公众号防复制产生的”o王杨oo王杨o”类拼接：剥除装饰性o、折叠重复
      {
        const arr = markdown.split('\n');
        const isByline = (s) => {
          const t = s.trim();
          if (!t || t.length >= 60) return false;
          if (/^原创(?:\s|$|[a-zA-Z0-9])/.test(t)) return true;
          if (/^(?:作者|来源|出处|编辑|责编|记者|撰文)\s*[:：]/.test(t)) return true;
          if (/^(?:发表于|发布于|更新于)/.test(t)) return true;
          // 日期/时间/地点行，但排除含逗号/冒号的正常正文句（表示有上下文叙述）
          if (/20\d{2}[-/年.]\d{1,2}[-/月.]\d{1,2}/.test(t) && !/[。！？!?，,、：:]/.test(t)) return true;
          return false;
        };
        const collected = [];
        let guard = 0;
        while (guard++ < 8) {
          const idx = arr.findIndex((l) => l.trim());
          if (idx < 0) break;
          const line = arr[idx];
          if (/^\s*(?:#|!\[|\[!|>|[-*]\s|\d+\.\s)/.test(line)) break;
          if (isByline(line)) { collected.push(line.trim()); arr.splice(idx, 1); }
          else break;
        }
        if (collected.length > 0) {
          let combined = collected.join(' ');
          // 剥除中文名两侧的装饰性 o（如 “o王杨o” → “王杨”，”oo王杨oo” → “王杨”）
          for (let i = 0; i < 3; i++) {
            combined = combined
              .replace(/o+([\u4e00-\u9fa5])/g, '$1')
              .replace(/([\u4e00-\u9fa5])o+/g, '$1');
          }
          // 折叠连续重复的中文序列：王杨王杨 → 王杨
          combined = combined.replace(/([\u4e00-\u9fa5]{2,})\1+/g, '$1');
          // 去除”原创”直接黏连在中文名前的情况：原创王杨 → 王杨
          combined = combined.replace(/原创(?=[\u4e00-\u9fa5])/g, '');
          // 时间与中文地名相连时补空格：17:50广东 → 17:50 广东
          combined = combined.replace(/(\d{1,2}:\d{2})([\u4e00-\u9fa5])/g, '$1 $2');
          // 去除署名前缀标签（”作者：”、”来源：”等）
          combined = combined.replace(/(?:^|\s)(?:作者|来源|出处|编辑|责编|记者|撰文)\s*[:：]\s*/g, ' ');
          combined = combined.replace(/\s+/g, ' ').trim();
          // 按空格分词，去重，过滤噪音词
          const noiseSet = new Set(['原创', '微信公众号', '公众号', '订阅号', '服务号']);
          const seen = new Set();
          const tokens = [];
          for (const t of combined.split(/\s+/)) {
            if (!t || noiseSet.has(t)) continue;
            const key = t.toLowerCase().replace(/\s+/g, '');
            if (!key || seen.has(key)) continue;
            seen.add(key);
            tokens.push(t);
          }
          if (tokens.length > 0) {
            arr.unshift('', '*' + tokens.join(' · ') + '*');
          }
        }
        markdown = arr.join('\n');
      }

      // 收尾：再次压缩可能产生的多余空行
      markdown = markdown.replace(/^\s+/, '').replace(/\n{3,}/g, '\n\n');

      return markdown;
    }

    function sanitizeYamlScalar(value) {
      let s = String(value == null ? '' : value);
      // 去掉不可见控制字符（保留 \n 后续再折叠）
      s = s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
      // 折叠换行为单空格，避免打断 frontmatter
      s = s.replace(/\r?\n+/g, ' ');
      // 压缩多空白
      s = s.replace(/\s+/g, ' ').trim();
      return s;
    }

    function toYamlQuoted(value) {
      const s = sanitizeYamlScalar(value);
      return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
    }

    // 转换为带评论的Markdown
    function convertToMarkdownWithComments(contentHTML, metadata, comments, config) {
      const td = initTurndown();
      const safeAuthorUrl = UtilModule.sanitizeExternalUrl(metadata?.authorUrl || '') ||
        UtilModule.sanitizeExternalUrl(metadata?.url || '');

      // 安全地转换主内容
      let mainContent = '';
      try {
        const preprocessedHtml = preprocessContentHtml(contentHTML || '', metadata || {});
        const cleanedMainHtml = UtilModule.sanitizeHtml(preprocessedHtml || '');
        mainContent = td.turndown(cleanedMainHtml);
        mainContent = cleanupMarkdown(mainContent);
      } catch (mainContentError) {
        console.error('[Discourse Saver] 主内容转换失败:', mainContentError.message);
        // 备选方案：使用纯文本
        mainContent = (contentHTML || '').replace(/<[^>]*>/g, '').trim() || '*[主内容转换失败]*';
      }

      let markdown = '';

      // 添加元数据
      if (config.addMetadata) {
        const timeStr = UtilModule.getBeijingTime();
        const safeUrl = sanitizeYamlScalar(metadata.url || '');
        const safeTitle = sanitizeYamlScalar(metadata.title || '');
        const safeAuthor = sanitizeYamlScalar(metadata.author || '');
        const safeCategory = sanitizeYamlScalar(metadata.category || '未分类');
        const baseTag = metadata.sourceType ? String(metadata.sourceType).trim() : 'media';
        const allTags = [baseTag];
        if (metadata.tags && metadata.tags.length > 0) {
          metadata.tags.forEach(tag => {
            const cleanTag = String(tag).trim();
            if (cleanTag && !allTags.includes(cleanTag)) {
              allTags.push(cleanTag);
            }
          });
        }
        // 生成 YAML 列表格式的 tags
        const tagsYaml = allTags
          .map(t => sanitizeYamlScalar(t).replace(/[,\[\]#]/g, '').trim())
          .filter(t => t)
          .map(t => `  - ${t}`)
          .join('\n');

        markdown += `---
来源: ${toYamlQuoted(safeUrl)}
标题: ${toYamlQuoted(safeTitle)}
作者: ${toYamlQuoted(safeAuthor)}
作者链接: ${toYamlQuoted(safeAuthorUrl)}
分类: ${toYamlQuoted(safeCategory)}
tags:
${tagsYaml}
保存时间: ${toYamlQuoted(timeStr)}
评论数: ${comments.length}
---

`;
      }

      // 引用信息 Callout 块（参考 Discourse Saver 扩展的帖子信息格式）
      if (config.addCallout !== false) {
        const timeStr2 = UtilModule.getBeijingTime();
        const platformName = metadata.sourceType === 'wechat' ? '微信公众号'
          : metadata.sourceType === 'zhihu' ? '知乎'
          : metadata.sourceType === 'weibo' ? '微博'
          : metadata.sourceType === 'x' ? 'X/Twitter'
          : metadata.sourceType === 'people' ? '人民日报'
          : metadata.sourceType === 'xinhua' ? '新华网'
          : metadata.sourceType === 'thepaper' ? '澎湃新闻'
          : metadata.sourceType === '36kr' ? '36氪'
          : metadata.sourceType === 'sspai' ? '少数派'
          : metadata.sourceType === 'juejin' ? '掘金'
          : metadata.sourceType === 'ithome' ? 'IT之家'
          : metadata.sourceType === 'trae' ? 'Trae社区'
          : metadata.sourceType === 'toutiao' ? '今日头条'
          : metadata.sourceType === 'douyin' ? '抖音'
          : metadata.sourceType === 'bilibili' ? 'B站'
          : metadata.sourceType === 'feishu_doc' ? '飞书云文档'
          : metadata.sourceType === '51cg' ? '51吃瓜网'
          : metadata.sourceType === 'x6d3i' ? 'x6d3i视频'
          : 'Discourse';
        const cf = (field) => config[`calloutField_${field}`] !== false;
        const cn = (field, fallback) => config[`calloutFieldName_${field}`] || fallback;
        const calloutLines = ['> [!info] 帖子信息'];
        if (cf('url') && metadata.url) calloutLines.push(`> - ${cn('url','来源')}: ${metadata.url}`);
        if (cf('title') && metadata.title) calloutLines.push(`> - ${cn('title','标题')}: ${metadata.title.replace(/[[\]]/g, '')}`);
        if (cf('author') && metadata.author) {
          const safeAuthorDisplay = metadata.author.replace(/[[\]]/g, '');
          if (config.calloutAuthorLink !== false && safeAuthorUrl) {
            calloutLines.push(`> - ${cn('author','作者')}: [${safeAuthorDisplay}](${safeAuthorUrl})`);
          } else {
            calloutLines.push(`> - ${cn('author','作者')}: ${safeAuthorDisplay}`);
          }
        }
        if (cf('category') && metadata.category && metadata.category !== '未分类') calloutLines.push(`> - ${cn('category','类别')}: ${metadata.category}`);
        if (cf('tags') && metadata.tags && metadata.tags.length > 0) calloutLines.push(`> - ${cn('tags','tags')}: ${metadata.tags.join(', ')}`);
        if (cf('time')) calloutLines.push(`> - ${cn('time','保存时间')}: ${timeStr2}`);
        if (cf('platform') && platformName) calloutLines.push(`> - ${cn('platform','平台')}: ${platformName.toUpperCase()}`);
        if (cf('commentCount') && comments && comments.length > 0) calloutLines.push(`> - ${cn('commentCount','评论数')}: ${comments.length}`);
        // 反应 & Boosts (Linux.do discourse-reactions / discourse-boosts)
        if (cf('reactions') && metadata.reactions && metadata.reactions.length > 0) {
          const rText = UtilModule.formatReactionsText(metadata.reactions);
          if (rText) calloutLines.push(`> - ${cn('reactions','反应')}: ${rText}`);
        }
        if (cf('boosts') && metadata.boosts && metadata.boosts.length > 0) {
          calloutLines.push(`> - ${cn('boosts','打call')}: ${metadata.boosts.join(' / ')}`);
        }
        markdown += calloutLines.join('\n') + '\n\n';
      }

      // 正文开头拼接作者行（带超链接），避免与正文已有的"作者：XXX"重复
      if (metadata.author) {
        const safeAuthor = metadata.author.replace(/[[\]]/g, '');
        const authorLink = safeAuthorUrl || metadata.url || '';
        const authorLine = authorLink
          ? `**作者：[${safeAuthor}](${authorLink})**`
          : `**作者：${safeAuthor}**`;
        // 检查正文开头是否已包含相同作者信息，避免重复
        const contentStart = (mainContent || '').slice(0, 200);
        const hasAuthorInContent = contentStart.includes(`作者`) && contentStart.includes(safeAuthor);
        if (!hasAuthorInContent) {
          markdown += authorLine + '\n\n';
        }
      }

      // 正文不重复写标题（标题已在属性中）
      markdown += mainContent;

      // 添加评论区
      if (config.saveComments && comments.length > 0) {
        markdown += '\n\n---\n\n';
        markdown += `## 评论区（共${comments.length}条）\n\n`;
        console.log(`[Discourse Saver] 开始处理 ${comments.length} 条评论`);

        let processedCount = 0;
        let errorCount = 0;

        for (const comment of comments) {
          try {
            // 清理 HTML 内容，防止解析崩溃
            const cleanedHtml = UtilModule.sanitizeHtml(comment.contentHTML || '');

            // 安全地转换为 Markdown
            let commentContent = '';
            try {
              commentContent = td.turndown(cleanedHtml);
              commentContent = cleanupMarkdown(commentContent);
              commentContent = commentContent.trim();
            } catch (turndownError) {
              console.warn(`[Discourse Saver] Turndown 转换失败 (第${comment.position}楼):`, turndownError.message);
              // 备选方案：使用纯文本
              commentContent = cleanedHtml.replace(/<[^>]*>/g, '').trim() || '*[内容转换失败]*';
            }

            // 构建安全的用户 URL
            const safeUserUrl = UtilModule.buildSafeUrl(comment.userUrl);
            const safeUsername = (comment.username || '用户').replace(/[[\]]/g, '');

            const usernameDisplay = safeUserUrl
              ? `[${safeUsername}](${safeUserUrl})`
              : safeUsername;
            const usernameDisplayHtml = safeUserUrl
              ? `<a href="${safeUserUrl}"><b>${safeUsername}</b></a>`
              : `<b>${safeUsername}</b>`;

            // 构建评论底部的 reactions / boosts 信息
            let commentMetaHtml = '';
            let commentMetaMd = '';
            try {
              const hasReactions = config.saveCommentReactions && comment.reactions && comment.reactions.length > 0;
              const hasBoosts = config.saveCommentBoosts && comment.boosts && comment.boosts.length > 0;
              if (hasReactions || hasBoosts) {
                const metaParts = [];
                if (hasReactions) {
                  const rText = UtilModule.formatReactionsText(comment.reactions);
                  if (rText) metaParts.push(`${rText}`);
                }
                if (hasBoosts) {
                  metaParts.push(`打call: ${comment.boosts.join(' / ')}`);
                }
                commentMetaHtml = metaParts.length > 0 ? `<p style="color:#6b7280;font-size:12px;margin-top:4px;">${metaParts.join(' &nbsp;|&nbsp; ')}</p>` : '';
                commentMetaMd = metaParts.length > 0 ? `\n\n*${metaParts.join(' | ')}*` : '';
              }
            } catch (_) {}

            if (config.foldComments) {
              // 折叠模式：转换Markdown为HTML
              let htmlContent = commentContent.trim();
              // 保护代码块(```)不被后续替换破坏
              const codeBlocks = [];
              htmlContent = htmlContent.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
                codeBlocks.push({ lang, code: code.trim() });
                return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
              });
              htmlContent = htmlContent.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
              htmlContent = htmlContent.replace(/~~(.+?)~~/g, '<del>$1</del>');
              htmlContent = htmlContent.replace(/`([^`]+)`/g, (match, code) => {
                // 跳过代码块占位符
                if (match.includes('__CODE_BLOCK_')) return match;
                return '<code>' + code.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code>';
              });

              // 保护图片，转换链接
              const imgPlaceholders = [];
              htmlContent = htmlContent.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match) => {
                imgPlaceholders.push(match);
                return `__IMG_PLACEHOLDER_${imgPlaceholders.length - 1}__`;
              });
              htmlContent = htmlContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
              // 还原代码块
              codeBlocks.forEach((block, i) => {
                htmlContent = htmlContent.replace(
                  `__CODE_BLOCK_${i}__`,
                  `<pre><code class="${block.lang || ''}">${block.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
                );
              });
              imgPlaceholders.forEach((img, i) => {
                htmlContent = htmlContent.replace(`__IMG_PLACEHOLDER_${i}__`, img);
              });

              markdown += `<details>\n<summary><b>${comment.position}楼 - ${usernameDisplayHtml}</b></summary>\n\n`;
              markdown += htmlContent;
              markdown += commentMetaHtml;
              markdown += '\n\n</details>\n\n';
            } else {
              markdown += `### ${comment.position}楼 - ${usernameDisplay}\n\n`;
              markdown += commentContent;
              markdown += commentMetaMd;
              markdown += '\n\n';
            }
            processedCount++;
          } catch (e) {
            console.error(`[Discourse Saver] 处理第 ${comment.position || '?'} 楼评论失败:`, e.message);
            console.error('[Discourse Saver] 失败评论数据:', {
              position: comment.position,
              username: comment.username,
              contentLength: (comment.contentHTML || '').length,
              userUrl: comment.userUrl
            });
            errorCount++;
            // 尝试保存基本信息
            const fallbackUsername = (comment.username || '用户').replace(/[[\]<>]/g, '');
            const fallbackPosition = comment.position || '?';
            markdown += `### ${fallbackPosition}楼 - ${fallbackUsername}\n\n`;
            // 尝试保存纯文本内容
            try {
              const plainText = (comment.contentHTML || '').replace(/<[^>]*>/g, '').trim();
              if (plainText) {
                markdown += plainText.substring(0, 2000) + '\n\n';
              } else {
                markdown += `*[评论内容处理失败]*\n\n`;
              }
            } catch (fallbackError) {
              markdown += `*[评论内容处理失败]*\n\n`;
            }
          }
        }

        console.log(`[Discourse Saver] 评论处理完成: 成功 ${processedCount} 条, 失败 ${errorCount} 条`);
      }

      return markdown;
    }

    return {
      initTurndown,
      cleanupMarkdown,
      convertToMarkdownWithComments
    };
  })();

  // ============================================================
  // 模块5: 保存功能 (SaveModule)
  // ============================================================
  const SaveModule = (function() {
    const NOTION_API_VERSION = '2022-06-28';

    // 通用：提取内容和评论
    // 等待51吃瓜页面图片全部加载完成（页面JS需要时间解密渲染）
    async function waitForCgImagesLoaded(timeoutMs = 8000) {
      const container = document.querySelector('.post-content[itemprop="articleBody"]');
      if (!container) return;
      const imgs = container.querySelectorAll('img');
      if (imgs.length === 0) return;
      const start = Date.now();
      const checkInterval = 400;
      console.log(`[Discourse Saver] 等待 ${imgs.length} 张51吃瓜图片加载...`);
      while (Date.now() - start < timeoutMs) {
        let allReady = true;
        let readyCount = 0;
        for (const img of imgs) {
          if (img.complete && img.naturalWidth > 0) {
            readyCount++;
          } else {
            allReady = false;
          }
        }
        console.log(`[Discourse Saver] 图片就绪: ${readyCount}/${imgs.length}`);
        if (allReady) {
          console.log('[Discourse Saver] 所有51吃瓜图片已加载完成');
          return;
        }
        await new Promise(r => setTimeout(r, checkInterval));
      }
      console.log('[Discourse Saver] 等待超时，继续提取（部分图片可能未加载）');
    }

    async function extractData(config, targetPostNumber = null) {
      // 飞书云文档使用异步提取（API + 虚拟滚动）
      let extracted;
      const currentSiteType = ExtractModule.getSiteType();
      if (currentSiteType === 'feishu_doc') {
        extracted = await FeishuDocModule.extractFeishuDocContent();
      } else {
        // 51吃瓜：先等待图片加载解密，再提取内容
        if (currentSiteType === '51cg') {
          try {
            await waitForCgImagesLoaded(8000);
          } catch (_) {}
        }
        extracted = ExtractModule.extractContent();
      }
      if (!extracted) {
        throw new Error('无法提取页面内容，请确认当前页面是公众号/知乎/微博文章页');
      }

      const { sourceType = 'discourse', title, contentHTML, contentMarkdown, url, author, authorUrl, topicId, category, tags, reactions } = extracted;
      let comments = [];
      const supportsFloorComments = sourceType === 'discourse' || sourceType === 'trae';
      let isSingleCommentMode = supportsFloorComments && targetPostNumber && targetPostNumber !== '1';

      if (isSingleCommentMode) {
        UtilModule.showNotification(`正在提取第${targetPostNumber}楼评论...`, 'info');
        const singleComment = ExtractModule.extractSingleComment(targetPostNumber);
        if (singleComment) {
          comments = [singleComment];
        } else {
          throw new Error(`未找到第${targetPostNumber}楼评论`);
        }
      } else if (config.saveComments && supportsFloorComments) {
        let effectiveCommentCount = config.commentCount;
        let effectiveSaveAll = config.saveAllComments;

        console.log('[Discourse Saver] 评论配置:', {
          saveComments: config.saveComments,
          saveAllComments: config.saveAllComments,
          commentCount: config.commentCount,
          useFloorRange: config.useFloorRange
        });

        if (config.useFloorRange) {
          effectiveCommentCount = config.floorTo || 100;
        }

        const useAPI = effectiveSaveAll || effectiveCommentCount > 30;
        console.log(`[Discourse Saver] 使用API: ${useAPI}, topicId: ${topicId}, saveAll: ${effectiveSaveAll}`);

        if (useAPI && topicId) {
          UtilModule.showNotification('正在通过API加载评论...', 'info');
          try {
            comments = await ExtractModule.extractCommentsViaAPI(
              topicId,
              effectiveCommentCount,
              effectiveSaveAll,
              (msg) => UtilModule.showNotification(msg, 'info')
            );
            console.log(`[Discourse Saver] API获取评论成功: ${comments.length} 条`);
          } catch (apiError) {
            console.warn('[Discourse Saver] API获取失败，回退到DOM方式:', apiError);
            comments = await ExtractModule.extractComments(effectiveCommentCount);
            console.log(`[Discourse Saver] DOM获取评论: ${comments.length} 条`);
          }
        } else {
          UtilModule.showNotification('正在提取评论...', 'info');
          comments = await ExtractModule.extractComments(effectiveCommentCount);
          console.log(`[Discourse Saver] DOM提取评论: ${comments.length} 条`);
        }
      } else if (config.saveComments && !supportsFloorComments) {
        console.log('[Discourse Saver] 当前站点不支持楼层评论提取，已跳过评论。');
      } else {
        console.log('[Discourse Saver] 评论保存未启用 (saveComments=false)');
      }

      // 楼层范围过滤
      if (config.useFloorRange && comments.length > 0) {
        const floorFrom = config.floorFrom || 1;
        const floorTo = config.floorTo || 100;
        comments = comments.filter(c => {
          const pos = parseInt(c.position);
          return pos >= floorFrom && pos <= floorTo;
        });
      }

      // 提取 Boosts (Linux.do 的 discourse-boosts 插件，如"太强了佬""太棒了")
      let boosts = [];
      try {
        document.querySelectorAll('.post-boost, .boosts-list .boost, [class*=\"boost-item\"]').forEach(el => {
          const txt = (el.textContent || '').trim();
          if (txt && txt.length < 200) boosts.push(txt);
        });
        // 也尝试从 .boosts-container 提取
        const boostsContainer = document.querySelector('.boosts-container, [class*=\"post-boosts\"]');
        if (boostsContainer) {
          boostsContainer.querySelectorAll('.boost-text, .boost-message, p').forEach(el => {
            const txt = (el.textContent || '').trim();
            if (txt && txt.length < 200 && !boosts.includes(txt)) boosts.push(txt);
          });
        }
      } catch (_) {}

      return {
        title, contentHTML, contentMarkdown, url, author, authorUrl, topicId, category, tags,
        comments, isSingleCommentMode, sourceType, reactions, boosts
      };
    }

    // 下载 Markdown 文件（备选方案：当剪贴板模式失败时使用）
    function downloadMarkdownFile(markdown, fileName, folderPath) {
      const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // 提示用户
      const vaultPath = folderPath || 'Discourse收集箱';
      UtilModule.showNotification(`文件已下载，请手动放入 Obsidian: ${vaultPath}/`, 'info');
      console.log(`[Discourse Saver] 备选方案：已下载为文件: ${fileName}.md`);
      console.log(`[Discourse Saver] 请将文件移动到 Obsidian vault 的 "${vaultPath}" 文件夹`);
    }

    // 存储最后一次大文件保存的信息（用于备选下载）
    let lastLargeFileSave = null;

    // 保存到 Obsidian（使用 v4.3.8 验证过的方式：始终用剪贴板模式）
    // folderOverride: 可选，按平台分流时传入计算好的路径
    // v0.8.8: 清理 markdown 中的 iframe，转为 Obsidian 兼容格式
    function cleanIframesForObsidian(md) {
      if (!md) return md;
      // 匹配 <iframe src="..." ...></iframe>
      return md.replace(/<iframe\s+src="([^"]+)"[^>]*><\/iframe>/gi, (match, url) => {
        const isM3u8 = /\.m3u8(\?|$)/i.test(url);
        if (isM3u8) {
          return '\n\n> [!tip] 视频（HLS 流媒体）\n> [点击播放视频](' + url + ')\n> *HLS 流媒体链接，请复制到 VLC / IINA / PotPlayer 等外部播放器打开*\n\n';
        }
        // YouTube / B站等普通视频嵌入
        if (/youtube\.com|youtu\.be|bilibili\.com/i.test(url)) {
          return '\n\n> [!tip] 视频\n> [点击播放视频](' + url + ')\n\n';
        }
        return '\n\n> [!tip] 视频\n> [点击播放视频](' + url + ')\n\n';
      });
    }

    async function sendToObsidian(markdown, fileName, config, folderOverride) {
      // v0.8.8: 清理 iframe 为 Obsidian 兼容格式
      markdown = cleanIframesForObsidian(markdown);

      // 读取配置
      const vaultName = GM_getValue('vaultName', '') || config.vaultName || '';
      const folderPath = UtilModule.sanitizeFolderPath(folderOverride || GM_getValue('folderPath', 'Discourse收集箱') || config.folderPath || 'Discourse收集箱');
      const encode = (str) => encodeURIComponent(str);

      console.log('[Discourse Saver] ========== Obsidian 保存 ==========');
      console.log('[Discourse Saver] Vault:', vaultName || '(默认)');
      console.log('[Discourse Saver] 文件夹:', folderPath);

      // 文件名已在 prepareData 中通过 sanitizeFileName 清洗过，此处仅做最终兜底
      const sanitizedTitle = UtilModule.sanitizeFileName(fileName).substring(0, 80) || 'Discourse-' + Date.now();

      const conflictMode = config.saveConflictMode || 'overwrite';
      const withTs = conflictMode === 'timestamp';
      const ts = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
      const finalTitle = withTs ? `${sanitizedTitle}-${ts}` : sanitizedTitle;

      // 构建文件路径（不含 .md 后缀，Advanced URI 会自动加）
      const filePath = folderPath ? `${folderPath}/${finalTitle}` : finalTitle;

      // 构建 vault 参数
      const vaultParam = vaultName && vaultName.trim() !== ''
        ? 'vault=' + encode(vaultName.trim()) + '&'
        : '';

      console.log('[Discourse Saver] 文件路径:', filePath + '.md');
      console.log('[Discourse Saver] 内容大小:', Math.round(markdown.length / 1024) + 'KB');

      // ===== 核心：始终使用剪贴板模式（v4.3.8 验证过的方式）=====
      try {
        // 步骤1：写入剪贴板
        // 优先使用原生 Clipboard API（v4.3.8 方式）
        if (navigator.clipboard && navigator.clipboard.writeText) {
          console.log('[Discourse Saver] 使用原生 Clipboard API');
          await navigator.clipboard.writeText(markdown);
        } else {
          // 回退到 GM_setClipboard
          console.log('[Discourse Saver] 回退到 GM_setClipboard');
          GM_setClipboard(markdown, 'text');
        }

        // 步骤2：构建 Advanced URI（始终用 clipboard=true，不传 data）
        let advancedUri = 'obsidian://advanced-uri?' + vaultParam;
        advancedUri += 'filepath=' + encode(filePath + '.md') + '&';
        advancedUri += 'clipboard=true&';
        advancedUri += 'mode=overwrite';

        console.log('[Discourse Saver] URI:', advancedUri);

        // 步骤3：打开 Obsidian
        window.location.href = advancedUri;
        return true;

      } catch (clipboardError) {
        console.error('[Discourse Saver] 剪贴板失败:', clipboardError);

        // 备用方案：使用普通 URI（带 content 参数，有长度限制）
        console.log('[Discourse Saver] 尝试备用方案...');
        const encodedContent = encode(markdown);

        if (encodedContent.length > 100000) {
          UtilModule.showNotification('内容过大，剪贴板不可用，请手动复制', 'error');
          // 提供下载选项
          downloadMarkdownFile(markdown, sanitizedTitle, folderPath);
          return false;
        }

        try {
          let basicUri = 'obsidian://new?' + vaultParam;
          basicUri += 'file=' + encode(filePath) + '&';
          basicUri += 'overwrite=true&';
          basicUri += 'content=' + encodedContent;

          window.location.href = basicUri;
          return true;
        } catch (e) {
          console.error('[Discourse Saver] 备用方案失败:', e);
          UtilModule.showNotification('保存失败，已下载文件', 'warning');
          downloadMarkdownFile(markdown, sanitizedTitle, folderPath);
          return false;
        }
      }
    }

    // 备选方案：下载上次大文件（供油猴菜单调用）
    function downloadLastLargeFile() {
      if (lastLargeFileSave) {
        downloadMarkdownFile(
          lastLargeFileSave.markdown,
          lastLargeFileSave.fileName,
          lastLargeFileSave.folderPath
        );
      } else {
        UtilModule.showNotification('没有待下载的大文件', 'warning');
      }
    }

    // 保存为 HTML 文件下载
    function downloadAsHtml(markdown, metadata, fileName, config) {
      const htmlContent = generateHtmlContent(markdown, metadata);
      const folder = config.htmlExportFolder || 'Discourse导出';
      const fullFileName = `${folder}/${fileName}.html`;

      // 创建 Blob 并下载
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      return true;
    }

    // 生成 HTML 内容（V5.6.0：5主题切换、PDF导出、代码复制、图片 Lightbox）
    function generateHtmlContent(markdown, metadata) {
      // 去掉 YAML frontmatter（---...---）
      const cleanMarkdown = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '').trimStart();

      // 使用 marked.js 转换（未加载则降级为基础转换）
      let htmlContent;
      if (typeof marked !== 'undefined') {
        marked.setOptions({ breaks: true, gfm: true });
        htmlContent = marked.parse(cleanMarkdown);
      } else {
        let h = cleanMarkdown
          .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/^### (.+)$/gm, '<h3>$1</h3>')
          .replace(/^## (.+)$/gm, '<h2>$1</h2>')
          .replace(/^# (.+)$/gm, '<h1>$1</h1>')
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.+?)\*/g, '<em>$1</em>')
          .replace(/`([^`]+)`/g, '<code>$1</code>')
          .replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>');
        htmlContent = '<p>' + h + '</p>';
      }

      function esc(t) {
        if (!t) return '';
        return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      }
      const exportTime = new Date().toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit',
        day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
      });
      const safeTitle = esc(metadata.title || '');
      const tagsHtml = metadata.tags && metadata.tags.length > 0 ? metadata.tags.map(t => esc(t)).join(', ') : '无';
      const safeAuthorUrl = UtilModule.sanitizeExternalUrl(metadata.authorUrl || '');
      const authorHtml = safeAuthorUrl
        ? `<a href="${esc(safeAuthorUrl)}" target="_blank" rel="noopener">${esc(metadata.author || '作者')}</a>`
        : esc(metadata.author || '作者');

      return `<!DOCTYPE html>
<html lang="zh-CN" data-theme="linuxdo">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeTitle}</title>
  <style>
    :root { --transition-speed: 0.3s; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif;
      max-width: 800px; margin: 0 auto; padding: 20px; padding-top: 70px;
      line-height: 1.75; background: var(--bg-page); color: var(--text-primary);
      transition: background var(--transition-speed), color var(--transition-speed);
      -webkit-font-smoothing: antialiased; min-height: 100vh;
    }
    [data-theme="linuxdo"] {
      --bg-page: #ffffff; --bg-card: #ffffff; --bg-code: #f4f4f4; --bg-quote: #e8f4fc;
      --bg-table-header: #f8f9fa; --bg-details: #f8f9fa; --bg-details-hover: #e9ecef;
      --bg-tip: linear-gradient(135deg, #4b9ed9 0%, #3a8bc9 100%);
      --text-primary: #222222; --text-secondary: #555555; --text-muted: #999999; --text-code: #333333;
      --border-color: #e9e9e9; --accent-color: #4b9ed9; --accent-hover: #3a8bc9;
      --quote-border: #4b9ed9; --shadow: 0 1px 3px rgba(0,0,0,0.08); --radius: 4px; --radius-lg: 8px;
    }
    [data-theme="dark-geek"] {
      --bg-page: #0d1117; --bg-card: #161b22; --bg-code: #1f2428; --bg-quote: #1f2937;
      --bg-table-header: #21262d; --bg-details: #21262d; --bg-details-hover: #30363d;
      --bg-tip: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
      --text-primary: #e6edf3; --text-secondary: #8b949e; --text-muted: #6e7681; --text-code: #79c0ff;
      --border-color: #30363d; --accent-color: #00ff88; --accent-hover: #00cc6a;
      --quote-border: #00ff88; --shadow: 0 4px 20px rgba(0,255,136,0.08); --radius: 6px; --radius-lg: 10px;
    }
    [data-theme="business"] {
      --bg-page: #f8fafc; --bg-card: #ffffff; --bg-code: #1e293b; --bg-quote: #f1f5f9;
      --bg-table-header: #e2e8f0; --bg-details: #f1f5f9; --bg-details-hover: #e2e8f0;
      --bg-tip: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      --text-primary: #0f172a; --text-secondary: #475569; --text-muted: #94a3b8; --text-code: #e2e8f0;
      --border-color: #e2e8f0; --accent-color: #3b82f6; --accent-hover: #2563eb;
      --quote-border: #3b82f6; --shadow: 0 1px 2px rgba(0,0,0,0.05); --radius: 6px; --radius-lg: 8px;
    }
    [data-theme="sakura"] {
      --bg-page: #fef7f8; --bg-card: #ffffff; --bg-code: #3d3d3d; --bg-quote: #fff0f3;
      --bg-table-header: #ffeef1; --bg-details: #fff5f7; --bg-details-hover: #ffecef;
      --bg-tip: linear-gradient(135deg, #ff7eb3 0%, #ff5c8a 100%);
      --text-primary: #4a4a4a; --text-secondary: #777777; --text-muted: #aaaaaa; --text-code: #ffb3c6;
      --border-color: #ffd6de; --accent-color: #ff7eb3; --accent-hover: #ff5c8a;
      --quote-border: #ff7eb3; --shadow: 0 4px 15px rgba(255,126,179,0.12); --radius: 12px; --radius-lg: 16px;
    }
    [data-theme="lavender"] {
      --bg-page: #faf8ff; --bg-card: #ffffff; --bg-code: #2d2a3e; --bg-quote: #f5f0ff;
      --bg-table-header: #efe8ff; --bg-details: #f5f2ff; --bg-details-hover: #ede6ff;
      --bg-tip: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
      --text-primary: #2e2942; --text-secondary: #5c5672; --text-muted: #9f96b8; --text-code: #d4bcff;
      --border-color: #e2d9f3; --accent-color: #a78bfa; --accent-hover: #8b5cf6;
      --quote-border: #a78bfa; --shadow: 0 4px 15px rgba(167,139,250,0.12); --radius: 10px; --radius-lg: 14px;
    }
    .toolbar {
      position: fixed; top: 0; left: 0; right: 0; background: var(--bg-card);
      border-bottom: 1px solid var(--border-color); z-index: 1000; box-shadow: var(--shadow);
      transition: transform var(--transition-speed), background var(--transition-speed);
    }
    .toolbar-inner {
      display: flex; gap: 6px; padding: 10px 16px; flex-wrap: wrap;
      justify-content: center; max-width: 900px; margin: 0 auto;
    }
    .toolbar-btn {
      padding: 6px 12px; border: 1px solid var(--border-color); border-radius: var(--radius);
      background: var(--bg-card); color: var(--text-primary); font-size: 13px; font-weight: 500;
      cursor: pointer; transition: all 0.2s ease; white-space: nowrap; touch-action: manipulation;
    }
    .toolbar-btn:hover, .toolbar-btn:active { background: var(--accent-color); color: white; border-color: var(--accent-color); transform: translateY(-1px); }
    .toolbar-btn.active { background: var(--accent-color); color: white; border-color: var(--accent-color); }
    .toolbar-btn.pdf-btn { background: var(--bg-tip); color: white; border: none; }
    .toolbar-btn.pdf-btn:hover { opacity: 0.9; transform: translateY(-1px); }
    .article-container { display: flex; flex-direction: column; gap: 20px; }
    .metadata {
      background: var(--bg-card); padding: 20px; border-radius: var(--radius-lg);
      box-shadow: var(--shadow); border: 1px solid var(--border-color);
    }
    .metadata h1 { font-size: 20px; color: var(--text-primary); margin-bottom: 14px; line-height: 1.4; font-weight: 600; cursor: pointer; }
    .meta-info { display: flex; flex-wrap: wrap; gap: 8px 16px; margin-bottom: 8px; }
    .meta-item { font-size: 13px; color: var(--text-secondary); }
    .meta-item strong { color: var(--text-primary); font-weight: 500; }
    .meta-link { font-size: 13px; color: var(--text-secondary); margin: 0; word-break: break-all; }
    .meta-link strong { color: var(--text-primary); font-weight: 500; }
    .metadata a { color: var(--accent-color); text-decoration: none; }
    .metadata a:hover { text-decoration: underline; }
    .content {
      background: var(--bg-card); padding: 24px 20px; border-radius: var(--radius-lg);
      box-shadow: var(--shadow); border: 1px solid var(--border-color);
      overflow-wrap: break-word; word-wrap: break-word;
    }
    .content h1, .content h2, .content h3, .content h4, .content h5, .content h6 { margin: 20px 0 10px 0; color: var(--text-primary); font-weight: 600; line-height: 1.3; }
    .content h1 { font-size: 24px; }
    .content h2 { font-size: 20px; border-bottom: 1px solid var(--border-color); padding-bottom: 8px; }
    .content h3 { font-size: 18px; }
    .content h4 { font-size: 16px; }
    .content p { margin: 12px 0; color: var(--text-primary); }
    .content img { max-width: 100%; height: auto; border-radius: var(--radius); margin: 12px 0; display: block; cursor: zoom-in; transition: transform 0.2s, box-shadow 0.2s; }
    .content img:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
    .lightbox-overlay { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.9); z-index: 10000; cursor: zoom-out; }
    .lightbox-overlay.active { display: flex; align-items: center; justify-content: center; }
    .lightbox-overlay img { max-width: 95%; max-height: 95%; object-fit: contain; border-radius: var(--radius); box-shadow: 0 10px 50px rgba(0,0,0,0.5); cursor: default; }
    .lightbox-close { position: fixed; top: 20px; right: 20px; width: 40px; height: 40px; background: rgba(255,255,255,0.2); border: none; border-radius: 50%; color: white; font-size: 24px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
    .lightbox-close:hover { background: rgba(255,255,255,0.3); }
    .lightbox-caption { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); color: white; font-size: 14px; padding: 8px 16px; background: rgba(0,0,0,0.6); border-radius: var(--radius); max-width: 80%; text-align: center; }
    .content video { width: 100%; max-width: 800px; border-radius: var(--radius); margin: 16px 0; }
    .content audio { width: 100%; max-width: 500px; margin: 12px 0; border-radius: var(--radius); }
    .content pre { position: relative; background: var(--bg-code); color: var(--text-code); padding: 14px; padding-top: 38px; border-radius: var(--radius); overflow-x: auto; margin: 14px 0; font-family: "SF Mono","Fira Code",Consolas,monospace; font-size: 13px; line-height: 1.5; }
    .copy-btn { position: absolute; top: 6px; right: 6px; padding: 4px 10px; font-size: 12px; background: var(--bg-details); color: var(--text-secondary); border: 1px solid var(--border-color); border-radius: var(--radius); cursor: pointer; opacity: 0.7; transition: all 0.2s; z-index: 10; }
    .copy-btn:hover { opacity: 1; background: var(--accent-color); color: white; border-color: var(--accent-color); }
    .copy-btn.copied { background: #22c55e; color: white; border-color: #22c55e; opacity: 1; }
    .copy-link-btn { display: inline-flex; align-items: center; padding: 2px 8px; margin-left: 8px; font-size: 12px; background: var(--bg-details); color: var(--text-secondary); border: 1px solid var(--border-color); border-radius: var(--radius); cursor: pointer; transition: all 0.2s; vertical-align: middle; }
    .copy-link-btn:hover { background: var(--accent-color); color: white; border-color: var(--accent-color); }
    .copy-link-btn.copied { background: #22c55e; color: white; border-color: #22c55e; }
    .toast { position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%) translateY(20px); padding: 10px 20px; background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: var(--radius-lg); box-shadow: 0 4px 20px rgba(0,0,0,0.15); font-size: 14px; opacity: 0; transition: all 0.3s; z-index: 10000; pointer-events: none; }
    .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
    .content code { background: var(--bg-details); padding: 2px 6px; border-radius: 3px; font-family: "SF Mono","Fira Code",Consolas,monospace; font-size: 0.88em; color: var(--accent-color); }
    .content pre code { background: none; padding: 0; color: inherit; font-size: inherit; }
    .content blockquote { border-left: 4px solid var(--quote-border); padding: 12px 16px; margin: 14px 0; background: var(--bg-quote); border-radius: 0 var(--radius) var(--radius) 0; color: var(--text-secondary); }
    .content ul, .content ol { margin: 12px 0; padding-left: 20px; }
    .content li { margin: 6px 0; color: var(--text-primary); }
    .content a { color: var(--accent-color); text-decoration: none; }
    .content a:hover { text-decoration: underline; }
    .content hr { border: none; border-top: 1px solid var(--border-color); margin: 20px 0; }
    .content .table-wrapper { position: relative; margin: 16px 0; border: 1px solid var(--border-color); border-radius: var(--radius); overflow: hidden; }
    .content .table-toolbar { display: flex; gap: 6px; padding: 8px 12px; background: var(--bg-details); border-bottom: 1px solid var(--border-color); }
    .content .table-btn { padding: 4px 10px; font-size: 12px; background: var(--bg-card); color: var(--text-secondary); border: 1px solid var(--border-color); border-radius: var(--radius); cursor: pointer; transition: all 0.2s; }
    .content .table-btn:hover { background: var(--bg-details-hover); color: var(--text-primary); }
    .content .table-btn.copied { background: var(--accent-color); color: white; border-color: var(--accent-color); }
    .content .table-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .content table { width: 100%; border-collapse: collapse; font-size: 14px; }
    .content th, .content td { border: 1px solid var(--border-color); padding: 10px 12px; text-align: left; }
    .content th { background: var(--bg-table-header); font-weight: 600; color: var(--text-primary); }
    .content tr:nth-child(even) td { background: var(--bg-details); }
    .content tr:hover td { background: var(--bg-details-hover); }
    .table-fullscreen { position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important; margin: 0 !important; border-radius: 0 !important; z-index: 9999 !important; background: var(--bg-card) !important; }
    .table-fullscreen .table-scroll { max-height: calc(100vh - 60px); }
    .content .table-scroll-hint { display: none; font-size: 12px; color: var(--text-muted); text-align: center; padding: 6px; background: var(--bg-details); border-top: 1px solid var(--border-color); }
    .content details { margin: 14px 0; border: 1px solid var(--border-color); border-radius: var(--radius); overflow: hidden; }
    .content summary { cursor: pointer; padding: 12px 14px; background: var(--bg-details); font-weight: 500; user-select: none; color: var(--text-primary); transition: background 0.2s; }
    .content summary:hover { background: var(--bg-details-hover); }
    .content details[open] summary { border-bottom: 1px solid var(--border-color); }
    .content details > div { padding: 14px; }
    .footer { text-align: center; margin-top: 24px; padding: 16px; font-size: 12px; color: var(--text-muted); }
    .footer a { color: var(--accent-color); text-decoration: underline; }
    @media (min-width: 768px) { body { padding: 30px; padding-top: 80px; } .toolbar-btn { padding: 8px 16px; font-size: 14px; } .metadata { padding: 24px; } .metadata h1 { font-size: 24px; } .content { padding: 32px; } }
    @media (min-width: 1024px) { body { max-width: 900px; padding: 40px; padding-top: 90px; } .content { padding: 40px; } }
    @media (max-width: 768px) { .content .table-scroll-hint { display: block; } }
    @media (max-width: 375px) { body { padding: 12px; padding-top: 65px; } .toolbar-btn { padding: 5px 8px; font-size: 11px; } .metadata h1 { font-size: 17px; } .content { padding: 16px 14px; } }
    @media print { .toolbar { display: none !important; } body { padding: 0 !important; background: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; } .metadata, .content { box-shadow: none; border: 1px solid #ddd; } .content pre { white-space: pre-wrap; } .content img { max-width: 100% !important; } }
  </style>
</head>
<body>
  <div class="toolbar" id="toolbar">
    <div class="toolbar-inner">
      <button class="toolbar-btn active" data-theme="linuxdo" title="L站原风格">L站</button>
      <button class="toolbar-btn" data-theme="dark-geek" title="暗夜极客">极客</button>
      <button class="toolbar-btn" data-theme="business" title="商务精英">商务</button>
      <button class="toolbar-btn" data-theme="sakura" title="樱花粉">樱花</button>
      <button class="toolbar-btn" data-theme="lavender" title="薰衣草">薰衣草</button>
      <button class="toolbar-btn pdf-btn" id="pdf-btn" title="导出PDF">PDF</button>
    </div>
  </div>
  <article class="article-container">
    <header class="metadata">
      <h1 title="点击复制标题">${safeTitle}</h1>
      <div class="meta-info">
        <span class="meta-item"><strong>作者：</strong>${authorHtml}</span>
        <span class="meta-item"><strong>分类：</strong>${esc(metadata.category || '未分类')}</span>
        <span class="meta-item"><strong>标签：</strong>${tagsHtml}</span>
        <span class="meta-item"><strong>导出时间：</strong>${exportTime}</span>
      </div>
      <p class="meta-link"><strong>原文链接：</strong><a href="${esc(metadata.url)}" target="_blank" rel="noopener">${esc(metadata.url)}</a></p>
    </header>
    <main class="content">
      ${htmlContent}
    </main>
  </article>
  <footer class="footer">
    <p>由 <a href="https://github.com/acheng-byte/discourse-saver" target="_blank" rel="noopener">Discourse Saver</a> 导出</p>
  </footer>
  <script>
    // 主题切换
    const themeButtons = document.querySelectorAll('.toolbar-btn[data-theme]');
    const htmlEl = document.documentElement;
    const savedTheme = localStorage.getItem('discourse-saver-theme') || 'linuxdo';
    htmlEl.setAttribute('data-theme', savedTheme);
    (function updateActive(t) { themeButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-theme') === t)); })(savedTheme);
    themeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.getAttribute('data-theme');
        htmlEl.setAttribute('data-theme', t);
        localStorage.setItem('discourse-saver-theme', t);
        themeButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-theme') === t));
      });
    });
    // PDF 导出
    const pdfBtn = document.getElementById('pdf-btn');
    if (pdfBtn) pdfBtn.addEventListener('click', () => window.print());
    // 滚动隐藏/显示工具栏
    let lastScrollY = 0;
    const toolbar = document.querySelector('.toolbar');
    window.addEventListener('scroll', () => {
      const cy = window.scrollY;
      toolbar.style.transform = (cy > lastScrollY && cy > 100) ? 'translateY(-100%)' : 'translateY(0)';
      lastScrollY = cy;
    }, { passive: true });
    // Toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
    function showToast(msg) { toast.textContent = msg; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2000); }
    // 代码块复制
    document.querySelectorAll('.content pre').forEach(pre => {
      const btn = document.createElement('button');
      btn.className = 'copy-btn'; btn.textContent = '复制'; btn.title = '复制代码';
      btn.addEventListener('click', async () => {
        const code = pre.querySelector('code');
        const text = code ? code.textContent : pre.textContent;
        try { await navigator.clipboard.writeText(text); } catch (e) {
          const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
          document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        }
        btn.textContent = '已复制'; btn.classList.add('copied'); showToast('代码已复制');
        setTimeout(() => { btn.textContent = '复制'; btn.classList.remove('copied'); }, 2000);
      });
      pre.appendChild(btn);
    });
    // 原文链接复制
    const metaLink = document.querySelector('.meta-link a');
    if (metaLink) {
      const clBtn = document.createElement('button');
      clBtn.className = 'copy-link-btn'; clBtn.textContent = '复制链接'; clBtn.title = '复制原文链接';
      clBtn.addEventListener('click', async e => {
        e.preventDefault();
        try { await navigator.clipboard.writeText(metaLink.href); } catch (err) {
          const ta = document.createElement('textarea'); ta.value = metaLink.href; ta.style.cssText = 'position:fixed;opacity:0';
          document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        }
        clBtn.textContent = '已复制'; clBtn.classList.add('copied'); showToast('链接已复制');
        setTimeout(() => { clBtn.textContent = '复制链接'; clBtn.classList.remove('copied'); }, 2000);
      });
      metaLink.parentNode.appendChild(clBtn);
    }
    // 标题点击复制
    const titleEl = document.querySelector('.metadata h1');
    if (titleEl) {
      titleEl.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(titleEl.textContent); } catch (e) {
          const ta = document.createElement('textarea'); ta.value = titleEl.textContent; ta.style.cssText = 'position:fixed;opacity:0';
          document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        }
        showToast('标题已复制');
      });
    }
    // Lightbox 图片放大
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = '<button class="lightbox-close">&times;<\\/button><img src="" alt=""><div class="lightbox-caption"></div>';
    document.body.appendChild(lightbox);
    const lbImg = lightbox.querySelector('img');
    const lbCap = lightbox.querySelector('.lightbox-caption');
    function closeLb() { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
    lightbox.addEventListener('click', e => { if (e.target === lightbox || e.target.classList.contains('lightbox-close')) closeLb(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLb(); });
    document.querySelectorAll('.content img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        const w = img.naturalWidth || img.width;
        if (w < 50 || img.classList.contains('emoji')) return;
        lbImg.src = img.src; lbCap.textContent = img.alt || img.title || '';
        lbCap.style.display = lbCap.textContent ? 'block' : 'none';
        lightbox.classList.add('active'); document.body.style.overflow = 'hidden';
      });
      img.addEventListener('error', () => { img.classList.add('error'); img.style.cursor = 'default'; });
    });
    // 表格增强
    document.querySelectorAll('.content table').forEach(table => {
      if (table.parentElement.classList.contains('table-scroll')) return;
      const wrapper = document.createElement('div'); wrapper.className = 'table-wrapper';
      const tb = document.createElement('div'); tb.className = 'table-toolbar';
      const copyBtn = document.createElement('button'); copyBtn.className = 'table-btn'; copyBtn.textContent = '复制表格';
      copyBtn.addEventListener('click', async () => {
        const text = Array.from(table.querySelectorAll('tr')).map(r => Array.from(r.querySelectorAll('th,td')).map(c => c.textContent.trim()).join('\\t')).join('\\n');
        try { await navigator.clipboard.writeText(text); } catch (e) {
          const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
          document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        }
        copyBtn.textContent = '已复制'; copyBtn.classList.add('copied'); showToast('表格已复制');
        setTimeout(() => { copyBtn.textContent = '复制表格'; copyBtn.classList.remove('copied'); }, 2000);
      });
      const fsBtn = document.createElement('button'); fsBtn.className = 'table-btn'; fsBtn.textContent = '全屏';
      fsBtn.addEventListener('click', () => {
        if (wrapper.classList.contains('table-fullscreen')) { wrapper.classList.remove('table-fullscreen'); fsBtn.textContent = '全屏'; document.body.style.overflow = ''; }
        else { wrapper.classList.add('table-fullscreen'); fsBtn.textContent = '退出全屏'; document.body.style.overflow = 'hidden'; }
      });
      tb.appendChild(copyBtn); tb.appendChild(fsBtn);
      const sc = document.createElement('div'); sc.className = 'table-scroll';
      const hint = document.createElement('div'); hint.className = 'table-scroll-hint'; hint.textContent = '左右滑动查看完整表格';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(tb); wrapper.appendChild(sc); sc.appendChild(table); wrapper.appendChild(hint);
    });
  </script>
</body>
</html>`;
    }

    // 获取 Notion 数据库属性
    async function getDatabaseProperties(token, databaseId) {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'GET',
          url: `https://api.notion.com/v1/databases/${databaseId}`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Notion-Version': NOTION_API_VERSION
          },
          onload: function(response) {
            if (response.status >= 200 && response.status < 300) {
              const data = JSON.parse(response.responseText);
              resolve(data.properties || {});
            } else {
              const error = JSON.parse(response.responseText);
              reject(new Error(error.message || '获取数据库属性失败'));
            }
          },
          onerror: function() {
            reject(new Error('网络请求失败'));
          }
        });
      });
    }

    // 查找匹配的属性名（支持模糊匹配）
    function findMatchingProperty(dbProps, targetName, expectedType = null) {
      if (!targetName) return null;

      const normalizedTarget = targetName.toLowerCase().trim();

      for (const [propName, propInfo] of Object.entries(dbProps)) {
        const normalizedProp = propName.toLowerCase().trim();

        // 精确匹配或模糊匹配
        if (normalizedProp === normalizedTarget ||
            propName === targetName ||
            normalizedProp.includes(normalizedTarget) ||
            normalizedTarget.includes(normalizedProp)) {

          // 如果指定了类型，检查类型是否匹配
          if (expectedType && propInfo.type !== expectedType) {
            console.warn(`[Discourse Saver] 属性 "${propName}" 类型不匹配: 期望 ${expectedType}, 实际 ${propInfo.type}`);
            continue;
          }

          return { name: propName, type: propInfo.type };
        }
      }

      return null;
    }

    // 根据 URL 查找已存在的 Notion 页面（去重）
    async function findExistingPageByUrl(token, databaseId, url, urlPropName) {
      return new Promise((resolve, reject) => {
        const filter = {
          property: urlPropName,
          url: { equals: url }
        };

        GM_xmlhttpRequest({
          method: 'POST',
          url: `https://api.notion.com/v1/databases/${databaseId}/query`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Notion-Version': NOTION_API_VERSION,
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({ filter, page_size: 1 }),
          onload: function(response) {
            if (response.status >= 200 && response.status < 300) {
              const data = JSON.parse(response.responseText);
              if (data.results && data.results.length > 0) {
                console.log(`[Discourse Saver] 找到已存在的页面: ${data.results[0].id}`);
                resolve(data.results[0]);
              } else {
                resolve(null);
              }
            } else {
              console.warn('[Discourse Saver] 查询已存在页面失败:', response.responseText);
              resolve(null); // 查询失败时继续创建新页面
            }
          },
          onerror: function() {
            resolve(null); // 网络错误时继续创建新页面
          }
        });
      });
    }

    // 归档（删除）已存在的 Notion 页面
    async function archiveNotionPage(token, pageId) {
      return new Promise((resolve) => {
        GM_xmlhttpRequest({
          method: 'PATCH',
          url: `https://api.notion.com/v1/pages/${pageId}`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Notion-Version': NOTION_API_VERSION,
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({ archived: true }),
          onload: function(response) {
            if (response.status >= 200 && response.status < 300) {
              console.log('[Discourse Saver] 已归档旧页面:', pageId);
              resolve(true);
            } else {
              console.warn('[Discourse Saver] 归档页面失败:', response.responseText);
              resolve(false);
            }
          },
          onerror: function() {
            resolve(false);
          }
        });
      });
    }

    // 保存到 Notion（使用 GM_xmlhttpRequest 解决 CORS）
    async function saveToNotion(markdown, metadata, config) {
      const token = config.notionToken;
      const databaseId = config.notionDatabaseId.replace(/-/g, '');

      if (!token || !databaseId) {
        throw new Error('请先配置 Notion Token 和 Database ID');
      }

      // 先获取数据库属性
      console.log('[Discourse Saver] 正在获取数据库属性...');
      let dbProps;
      try {
        dbProps = await getDatabaseProperties(token, databaseId);
        console.log('[Discourse Saver] 数据库属性:', Object.keys(dbProps));
      } catch (e) {
        throw new Error('获取数据库属性失败: ' + e.message);
      }

      // 构建 Notion 页面属性（只使用数据库中存在的属性）
      const properties = {};

      // 标题（必需）- 查找 title 类型的属性
      const titleProp = findMatchingProperty(dbProps, config.notionPropTitle || '标题', 'title') ||
                        findMatchingProperty(dbProps, 'Name', 'title') ||
                        findMatchingProperty(dbProps, '名称', 'title');

      if (!titleProp) {
        // 如果没找到，使用数据库中第一个 title 类型的属性
        for (const [propName, propInfo] of Object.entries(dbProps)) {
          if (propInfo.type === 'title') {
            console.log(`[Discourse Saver] 使用 "${propName}" 作为标题属性`);
            properties[propName] = {
              title: [{ text: { content: metadata.title.substring(0, 2000) } }]
            };
            break;
          }
        }
        if (Object.keys(properties).length === 0) {
          throw new Error('数据库中没有找到标题属性（title 类型）');
        }
      } else {
        console.log(`[Discourse Saver] 标题属性: "${titleProp.name}"`);
        properties[titleProp.name] = {
          title: [{ text: { content: metadata.title.substring(0, 2000) } }]
        };
      }

      // URL - 查找 url 类型的属性
      const urlProp = findMatchingProperty(dbProps, config.notionPropUrl || '链接', 'url');
      if (urlProp) {
        console.log(`[Discourse Saver] URL属性: "${urlProp.name}"`);
        properties[urlProp.name] = { url: metadata.url };
      }

      // 作者 - 查找 rich_text 类型的属性
      const authorProp = findMatchingProperty(dbProps, config.notionPropAuthor || '作者', 'rich_text');
      if (authorProp) {
        console.log(`[Discourse Saver] 作者属性: "${authorProp.name}"`);
        properties[authorProp.name] = {
          rich_text: [{ text: { content: metadata.author || '未知' } }]
        };
      }

      // 分类 - 支持多种类型（select、multi_select、rich_text）
      console.log(`[Discourse Saver] metadata.category = "${metadata.category || '(空)'}"`);
      // 先尝试 select 类型
      let categoryProp = findMatchingProperty(dbProps, config.notionPropCategory || '分类', 'select');
      // 再尝试 multi_select 类型
      if (!categoryProp) {
        categoryProp = findMatchingProperty(dbProps, config.notionPropCategory || '分类', 'multi_select');
      }
      // 再尝试 rich_text 类型
      if (!categoryProp) {
        categoryProp = findMatchingProperty(dbProps, config.notionPropCategory || '分类', 'rich_text');
      }
      // 最后不限类型查找
      if (!categoryProp) {
        categoryProp = findMatchingProperty(dbProps, config.notionPropCategory || '分类', null);
      }

      if (categoryProp && metadata.category && metadata.category.trim()) {
        console.log(`[Discourse Saver] 分类属性: "${categoryProp.name}" (类型: ${categoryProp.type})`);
        const categoryValue = metadata.category.trim();

        // 根据属性类型设置值
        switch (categoryProp.type) {
          case 'select':
            properties[categoryProp.name] = {
              select: { name: categoryValue }
            };
            break;
          case 'multi_select':
            properties[categoryProp.name] = {
              multi_select: [{ name: categoryValue }]
            };
            break;
          case 'rich_text':
            properties[categoryProp.name] = {
              rich_text: [{ text: { content: categoryValue } }]
            };
            break;
          default:
            // 尝试作为 rich_text 处理
            properties[categoryProp.name] = {
              rich_text: [{ text: { content: categoryValue } }]
            };
        }
        console.log(`[Discourse Saver] 分类值已设置: "${categoryValue}" (类型: ${categoryProp.type})`);
      } else if (!categoryProp) {
        console.log('[Discourse Saver] 未找到分类属性');
        // 尝试查找任何包含"分类"的属性
        for (const [propName, propInfo] of Object.entries(dbProps)) {
          if (propName.includes('分类') || propName.toLowerCase().includes('category')) {
            console.log(`[Discourse Saver] 发现可能的分类属性: "${propName}" (类型: ${propInfo.type})`);
          }
        }
      } else {
        console.log('[Discourse Saver] 分类为空，跳过设置');
      }

      // 标签 - 查找 multi_select 类型的属性
      if (metadata.tags && metadata.tags.length > 0) {
        const tagsProp = findMatchingProperty(dbProps, config.notionPropTags || '标签', 'multi_select');
        if (tagsProp) {
          console.log(`[Discourse Saver] 标签属性: "${tagsProp.name}"`);
          properties[tagsProp.name] = {
            multi_select: metadata.tags.slice(0, 10).map(tag => ({ name: tag.substring(0, 100) }))
          };
        }
      }

      // 保存日期 - 查找 date 类型的属性
      const dateProp = findMatchingProperty(dbProps, config.notionPropSavedDate || '保存日期', 'date');
      if (dateProp) {
        console.log(`[Discourse Saver] 日期属性: "${dateProp.name}"`);
        properties[dateProp.name] = {
          date: { start: new Date().toISOString().split('T')[0] }
        };
      }

      // 评论数 - 查找 number 类型的属性
      const commentCountProp = findMatchingProperty(dbProps, config.notionPropCommentCount || '评论数', 'number');
      if (commentCountProp) {
        console.log(`[Discourse Saver] 评论数属性: "${commentCountProp.name}"`);
        properties[commentCountProp.name] = {
          number: metadata.commentCount || 0
        };
      }

      console.log('[Discourse Saver] 最终属性:', Object.keys(properties));

      // 将 Markdown 转换为 Notion blocks
      const children = markdownToNotionBlocks(markdown);

      // 去重检查：根据 URL 查找已存在的页面
      let existingPage = null;
      if (urlProp) {
        console.log('[Discourse Saver] 检查是否已存在相同 URL 的页面...');
        existingPage = await findExistingPageByUrl(token, databaseId, metadata.url, urlProp.name);
      }

      if (existingPage) {
        // 归档已存在的页面，然后创建新页面
        console.log('[Discourse Saver] 找到已   在的页面，正在归档后重新创建...');
        await archiveNotionPage(token, existingPage.id);
      }

      // 创建新页面（先添加前100个块）
      console.log(`[Discourse Saver] 总块数: ${children.length}`);

      const pageData = await new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'POST',
          url: 'https://api.notion.com/v1/pages',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Notion-Version': NOTION_API_VERSION,
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({
            parent: { database_id: databaseId },
            properties: properties,
            children: children.slice(0, 100)
          }),
          onload: function(response) {
            try {
              if (response.status >= 200 && response.status < 300) {
                const data = JSON.parse(response.responseText);
                console.log('[Discourse Saver] Notion 页面创建成功:', data.id);
                resolve(data);
              } else {
                let errorMessage = `HTTP ${response.status}`;
                try {
                  const error = JSON.parse(response.responseText);
                  console.error('[Discourse Saver] Notion 错误:', error);
                  errorMessage = error.message || errorMessage;
                  // 打印失败的块信息便于调试
                  if (error.code === 'validation_error') {
                    console.error('[Discourse Saver] 验证错误，前3个块:', JSON.stringify(children.slice(0, 3), null, 2));
                  }
                } catch (parseErr) {
                  console.error('[Discourse Saver] Notion 响应:', response.responseText);
                }
                console.error('[Discourse Saver] 请求数据:', { properties, childrenCount: children.length });
                reject(new Error(errorMessage));
              }
            } catch (e) {
              console.error('[Discourse Saver] 处理Notion响应失败:', e);
              reject(new Error('处理Notion响应失败: ' + e.message));
            }
          },
          onerror: function(error) {
            console.error('[Discourse Saver] Notion 网络错误:', error);
            reject(new Error('网络请求失败'));
          }
        });
      });

      // 如果有超过100个块，分批追加剩余的块
      if (children.length > 100) {
        const pageId = pageData.id;
        const remainingChildren = children.slice(100);
        const totalBatches = Math.ceil(remainingChildren.length / 100);
        console.log(`[Discourse Saver] 需要追加 ${remainingChildren.length} 个块，分 ${totalBatches} 批`);

        let successBatches = 0;
        let failedBatches = 0;

        // 每批最多100个块
        for (let i = 0; i < remainingChildren.length; i += 100) {
          const batchNum = Math.floor(i/100) + 1;
          const batch = remainingChildren.slice(i, i + 100);
          console.log(`[Discourse Saver] 追加第 ${batchNum}/${totalBatches} 批，${batch.length} 个块`);

          // 重试机制
          let retries = 3;
          let success = false;

          while (retries > 0 && !success) {
            try {
              await new Promise((resolve, reject) => {
                GM_xmlhttpRequest({
                  method: 'PATCH',
                  url: `https://api.notion.com/v1/blocks/${pageId}/children`,
                  headers: {
                    'Authorization': `Bearer ${token}`,
                    'Notion-Version': NOTION_API_VERSION,
                    'Content-Type': 'application/json'
                  },
                  data: JSON.stringify({ children: batch }),
                  onload: function(response) {
                    if (response.status >= 200 && response.status < 300) {
                      success = true;
                      resolve();
                    } else if (response.status === 429) {
                      // API 限流，等待后重试
                      console.warn(`[Discourse Saver] 批次 ${batchNum} API 限流，等待重试...`);
                      reject(new Error('rate_limited'));
                    } else {
                      console.warn(`[Discourse Saver] 批次 ${batchNum} 失败 (${response.status}):`, response.responseText.substring(0, 500));
                      reject(new Error(`HTTP ${response.status}`));
                    }
                  },
                  onerror: function(error) {
                    console.warn(`[Discourse Saver] 批次 ${batchNum} 网络错误`);
                    reject(new Error('network_error'));
                  }
                });
              });
            } catch (batchError) {
              retries--;
              if (retries > 0) {
                // 等待后重试（限流情况等待更长时间）
                const waitTime = batchError.message === 'rate_limited' ? 2000 : 500;
                console.log(`[Discourse Saver] 批次 ${batchNum} 重试中... (剩余 ${retries} 次)`);
                await new Promise(r => setTimeout(r, waitTime));
              }
            }
          }

          if (success) {
            successBatches++;
          } else {
            failedBatches++;
            console.error(`[Discourse Saver] 批次 ${batchNum} 最终失败，跳过`);
          }

          // 避免 API 限流，稍微延迟
          if (i + 100 < remainingChildren.length) {
            await new Promise(r => setTimeout(r, 400));
          }
        }

        console.log(`[Discourse Saver] 块追加完成: 成功 ${successBatches}/${totalBatches} 批`);
        if (failedBatches > 0) {
          console.warn(`[Discourse Saver] ${failedBatches} 批追加失败，部分内容可能丢失`);
        }
      }

      return pageData;
    }

    // Markdown 转 Notion Blocks（v4.6.0 增强版 - 支持更多内容类型）
    function markdownToNotionBlocks(markdown) {
      const blocks = [];
      const lines = markdown.split('\n');
      let i = 0;

      // 辅助函数：检测URL类型
      function getUrlType(url) {
        // 视频链接（YouTube、Bilibili、Vimeo、优酷、腾讯视频）
        if (/youtube\.com|youtu\.be|vimeo\.com|bilibili\.com|b23\.tv|v\.youku\.com|v\.qq\.com/i.test(url)) {
          return 'video';
        }
        // 网盘链接
        if (/pan\.baidu\.com|yun\.baidu\.com|pan\.quark\.cn|123pan\.com|lanzou[a-z]*\.(com|cn)|lanzoui\.com|lanzoux\.com|aliyundrive\.com|alipan\.com|cloud\.189\.cn/i.test(url)) {
          return 'cloud';
        }
        // 音频链接
        if (/\.mp3|\.wav|\.ogg|\.m4a|\.aac|soundcloud\.com|spotify\.com|music\./i.test(url)) {
          return 'audio';
        }
        // 图片链接
        if (/\.(jpg|jpeg|png|gif|webp|svg|bmp)(\?|$)/i.test(url)) {
          return 'image';
        }
        // PDF 链接
        if (/\.pdf(\?|$)/i.test(url)) {
          return 'pdf';
        }
        return 'link';
      }

      // 辅助函数：获取网盘名称
      function getCloudName(url) {
        if (/pan\.baidu\.com|yun\.baidu\.com/i.test(url)) return '百度网盘';
        if (/pan\.quark\.cn/i.test(url)) return '夸克网盘';
        if (/123pan\.com/i.test(url)) return '123云盘';
        if (/lanzou[a-z]*\.(com|cn)|lanzoui\.com|lanzoux\.com/i.test(url)) return '蓝奏云';
        if (/aliyundrive\.com|alipan\.com/i.test(url)) return '阿里云盘';
        if (/cloud\.189\.cn/i.test(url)) return '天翼云盘';
        return '网盘';
      }

      // 辅助函数：验证并补全 URL
      function normalizeUrl(url) {
        if (!url) return null;
        let normalized = url.trim();
        // 如果是相对路径，补全为完整 URL
        if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
          if (normalized.startsWith('/')) {
            normalized = window.location.origin + normalized;
          } else if (normalized.startsWith('#')) {
            normalized = window.location.href.split('#')[0] + normalized;
          } else if (!normalized.includes(':')) {
            // 不是特殊协议（如 mailto:, tel:），添加 https://
            normalized = 'https://' + normalized;
          }
        }
        // 验证 URL 是否有效
        try {
          new URL(normalized);
          return normalized;
        } catch {
          return null;
        }
      }

      // 辅助函数：解析富文本（支持加粗、斜体、链接、代码）- 增强错误处理
      function parseRichText(text) {
        // 确保输入有效
        if (!text || typeof text !== 'string') {
          return [{ text: { content: ' ' } }];
        }

        const safeText = text.substring(0, 2000); // Notion 限制
        const richText = [];

        try {
          // 检测链接 [text](url)
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          let lastIndex = 0;
          let match;

          while ((match = linkRegex.exec(safeText)) !== null) {
            // 添加链接前的文本
            if (match.index > lastIndex) {
              const before = safeText.substring(lastIndex, match.index);
              if (before && before.trim()) {
                const formatted = parseInlineFormatting(before);
                if (formatted && formatted.length > 0) {
                  richText.push(...formatted);
                }
              }
            }

            // 处理链接
            const linkText = match[1] || '链接';
            const linkUrl = normalizeUrl(match[2]);

            if (linkUrl) {
              richText.push({
                text: { content: linkText.substring(0, 2000), link: { url: linkUrl } }
              });
            } else {
              // URL 无效，只显示文本
              richText.push({
                text: { content: linkText.substring(0, 2000) }
              });
            }
            lastIndex = match.index + match[0].length;
          }

          // 添加剩余文本
          if (lastIndex < safeText.length) {
            const remaining = safeText.substring(lastIndex);
            if (remaining && remaining.trim()) {
              const formatted = parseInlineFormatting(remaining);
              if (formatted && formatted.length > 0) {
                richText.push(...formatted);
              }
            }
          }
        } catch (e) {
          console.warn('[Discourse Saver] parseRichText 错误:', e.message);
          return [{ text: { content: safeText || ' ' } }];
        }

        // 确保不返回空数组
        if (richText.length === 0) {
          return [{ text: { content: safeText || ' ' } }];
        }

        return richText;
      }

      // 辅助函数：解析内联格式（加粗、斜体、代码）- 修复顺序问题
      function parseInlineFormatting(text) {
        if (!text || text.trim() === '') {
          return [{ text: { content: ' ' } }]; // Notion 不允许空 rich_text
        }

        const parts = [];
        // 使用正则分割并保持顺序
        const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
          // 添加匹配前的普通文本
          if (match.index > lastIndex) {
            const before = text.substring(lastIndex, match.index);
            if (before) {
              parts.push({ text: { content: before.substring(0, 2000) } });
            }
          }

          const matched = match[1];
          // 加粗 **text**
          if (matched.startsWith('**') && matched.endsWith('**')) {
            const content = matched.slice(2, -2);
            if (content) {
              parts.push({ text: { content: content.substring(0, 2000) }, annotations: { bold: true } });
            }
          }
          // 行内代码 `text`
          else if (matched.startsWith('`') && matched.endsWith('`')) {
            const content = matched.slice(1, -1);
            if (content) {
              parts.push({ text: { content: content.substring(0, 2000) }, annotations: { code: true } });
            }
          }
          // 斜体 *text*
          else if (matched.startsWith('*') && matched.endsWith('*')) {
            const content = matched.slice(1, -1);
            if (content) {
              parts.push({ text: { content: content.substring(0, 2000) }, annotations: { italic: true } });
            }
          }

          lastIndex = match.index + match[0].length;
        }

        // 添加剩余文本
        if (lastIndex < text.length) {
          const remaining = text.substring(lastIndex);
          if (remaining) {
            parts.push({ text: { content: remaining.substring(0, 2000) } });
          }
        }

        // 确保不返回空数组
        return parts.length > 0 ? parts : [{ text: { content: text.substring(0, 2000) || ' ' } }];
      }

      while (i < lines.length) {
        const line = lines[i];

        // 跳过 YAML frontmatter
        if (line === '---' && i === 0) {
          i++;
          while (i < lines.length && lines[i] !== '---') i++;
          i++;
          continue;
        }

        // 标题
        if (line.startsWith('# ')) {
          blocks.push({
            type: 'heading_1',
            heading_1: { rich_text: parseRichText(line.substring(2)) }
          });
        } else if (line.startsWith('## ')) {
          blocks.push({
            type: 'heading_2',
            heading_2: { rich_text: parseRichText(line.substring(3)) }
          });
        } else if (line.startsWith('### ')) {
          blocks.push({
            type: 'heading_3',
            heading_3: { rich_text: parseRichText(line.substring(4)) }
          });
        }
        // 代码块
        else if (line.startsWith('```')) {
          // Notion 支持的语言映射
          const notionLanguageMap = {
            'plaintext': 'plain text',
            'text': 'plain text',
            'txt': 'plain text',
            'sh': 'bash',
            'shell': 'bash',
            'zsh': 'bash',
            'ps1': 'powershell',
            'ps': 'powershell',
            'yml': 'yaml',
            'js': 'javascript',
            'ts': 'typescript',
            'py': 'python',
            'rb': 'ruby',
            'cs': 'c#',
            'cpp': 'c++',
            'objc': 'objective-c',
            'kt': 'kotlin',
            'rs': 'rust',
            'md': 'markdown',
            'htm': 'html',
            'dockerfile': 'docker',
            'make': 'makefile',
            'asm': 'assembly',
            '': 'plain text'
          };
          const rawLang = line.substring(3).trim().toLowerCase();
          const lang = notionLanguageMap[rawLang] || rawLang || 'plain text';
          let code = '';
          i++;
          while (i < lines.length && !lines[i].startsWith('```')) {
            code += lines[i] + '\n';
            i++;
          }
          blocks.push({
            type: 'code',
            code: {
              language: lang,
              rich_text: [{ text: { content: code.trimEnd().substring(0, 2000) } }]
            }
          });
        }
        // Obsidian callout / 折叠块
        else if (line.startsWith('> [!')) {
          const calloutMatch = line.match(/^> \[!([^\]]+)\]([+-])?\s*(.*)$/);
          if (calloutMatch) {
            const calloutType = calloutMatch[1];
            const isCollapsed = calloutMatch[2] === '-';
            const title = calloutMatch[3] || calloutType;

            // 收集 callout 内容
            let content = '';
            i++;
            while (i < lines.length && lines[i].startsWith('> ')) {
              content += lines[i].substring(2) + '\n';
              i++;
            }
            i--; // 回退一行

            // 使用 callout 块
            blocks.push({
              type: 'callout',
              callout: {
                rich_text: [{ text: { content: title + '\n' + content.trim() } }],
                icon: { type: 'emoji', emoji: calloutType === 'note' ? '📝' : calloutType === 'warning' ? '⚠️' : '💡' }
              }
            });
          }
        }
        // HTML <details> 块（折叠评论）- 转换为 Notion toggle 块
        else if (line.startsWith('<details>') || line.match(/^<details\s/)) {
          try {
            // 提取 summary 标题
            let summaryTitle = '展开';
            let detailsContent = '';
            const startIndex = i;
            i++;

            // 查找 summary 行
            while (i < lines.length) {
              const currentLine = lines[i];
              if (currentLine.includes('<summary>')) {
                // 提取 summary 内容
                const summaryMatch = currentLine.match(/<summary>(.+?)<\/summary>/);
                if (summaryMatch) {
                  // 移除 HTML 标签
                  summaryTitle = summaryMatch[1].replace(/<[^>]+>/g, '').trim() || '展开';
                }
                i++;
                continue;
              }
              if (currentLine.includes('</details>')) {
                break;
              }
              if (currentLine.trim()) {
                detailsContent += currentLine + '\n';
              }
              i++;
            }

            // 创建 toggle 块
            const safeTitle = (summaryTitle || '展开').substring(0, 2000);
            const safeContent = (detailsContent.trim() || ' ').substring(0, 2000);

            blocks.push({
              type: 'toggle',
              toggle: {
                rich_text: [{ text: { content: safeTitle } }],
                children: [{
                  type: 'paragraph',
                  paragraph: {
                    rich_text: parseRichText(safeContent)
                  }
                }]
              }
            });
          } catch (detailsError) {
            console.warn('[Discourse Saver] details 块解析失败:', detailsError.message);
            // 作为普通段落处理
            blocks.push({
              type: 'paragraph',
              paragraph: { rich_text: [{ text: { content: line.replace(/<[^>]+>/g, '') } }] }
            });
          }
        }
        // 跳过 </details> 结束标签
        else if (line.includes('</details>')) {
          // 已在上面处理，跳过
        }
        // 引用块
        else if (line.startsWith('> ')) {
          let quoteContent = line.substring(2);
          i++;
          while (i < lines.length && lines[i].startsWith('> ')) {
            quoteContent += '\n' + lines[i].substring(2);
            i++;
          }
          i--; // 回退一行
          blocks.push({
            type: 'quote',
            quote: { rich_text: parseRichText(quoteContent) }
          });
        }
        // 列表项（无序）
        else if (line.match(/^[-*]\s+/)) {
          const content = line.replace(/^[-*]\s+/, '');
          blocks.push({
            type: 'bulleted_list_item',
            bulleted_list_item: { rich_text: parseRichText(content) }
          });
        }
        // 列表项（有序）
        else if (line.match(/^\d+\.\s+/)) {
          const content = line.replace(/^\d+\.\s+/, '');
          blocks.push({
            type: 'numbered_list_item',
            numbered_list_item: { rich_text: parseRichText(content) }
          });
        }
        // 任务列表
        else if (line.match(/^[-*]\s+\[[ x]\]\s+/)) {
          const isChecked = line.includes('[x]');
          const content = line.replace(/^[-*]\s+\[[ x]\]\s+/, '');
          blocks.push({
            type: 'to_do',
            to_do: {
              rich_text: parseRichText(content),
              checked: isChecked
            }
          });
        }
        // Markdown 表格
        else if (line.startsWith('|') && line.endsWith('|')) {
          try {
            // 收集所有表格行
            const tableRows = [];
            let tableIndex = i;

            while (tableIndex < lines.length) {
              const tableLine = lines[tableIndex];
              if (tableLine.startsWith('|') && tableLine.endsWith('|')) {
                // 跳过分隔行 (|---|---|)
                if (!tableLine.match(/^\|[\s\-:]+\|$/)) {
                  // 解析单元格
                  const cells = tableLine
                    .slice(1, -1) // 移除首尾的 |
                    .split('|')
                    .map(cell => cell.trim());
                  if (cells.length > 0) {
                    tableRows.push(cells);
                  }
                }
                tableIndex++;
              } else {
                break;
              }
            }

            // 如果有有效的表格行，创建 Notion table
            if (tableRows.length > 0 && tableRows.some(row => row.length > 0)) {
              const columnCount = Math.max(1, ...tableRows.map(row => row.length || 1));

              // 创建表格行
              const notionRows = tableRows.map((row, rowIndex) => {
                // 补齐单元格数量
                while (row.length < columnCount) {
                  row.push('');
                }

                return {
                  type: 'table_row',
                  table_row: {
                    cells: row.slice(0, columnCount).map(cellContent => {
                      // 解析单元格内容中的链接和格式
                      try {
                        return parseRichText((cellContent || '').substring(0, 2000) || ' ');
                      } catch (e) {
                        return [{ text: { content: cellContent || ' ' } }];
                      }
                    })
                  }
                };
              });

              // 创建表格块
              blocks.push({
                type: 'table',
                table: {
                  table_width: columnCount,
                  has_column_header: true,
                  has_row_header: false,
                  children: notionRows
                }
              });

              // 更新索引，跳过已处理的表格行
              i = tableIndex - 1; // -1 因为循环末尾会 i++
              console.log(`[Discourse Saver] 解析表格: ${tableRows.length} 行, ${columnCount} 列`);
            } else {
              // 表格解析失败，作为普通段落处理
              blocks.push({
                type: 'paragraph',
                paragraph: { rich_text: [{ text: { content: line } }] }
              });
            }
          } catch (tableError) {
            console.warn('[Discourse Saver] 表格解析失败:', tableError.message);
            // 作为普通段落处理
            blocks.push({
              type: 'paragraph',
              paragraph: { rich_text: [{ text: { content: line } }] }
            });
          }
        }
        // 分割线
        else if (line === '---' || line === '***' || line === '___') {
          blocks.push({ type: 'divider', divider: {} });
        }
        // 图片（支持带链接的图片）
        else if (line.match(/^!\[.*\]\(.+\)$/)) {
          const match = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
          if (match) {
            const rawUrl = match[2];
            // 检查是否是 base64 数据（太大不支持）
            if (rawUrl.startsWith('data:')) {
              blocks.push({
                type: 'paragraph',
                paragraph: { rich_text: [{ text: { content: '[内嵌图片 - Notion 不支持 Base64]' } }] }
              });
            } else {
              const imageUrl = normalizeUrl(rawUrl);
              if (imageUrl) {
                blocks.push({
                  type: 'image',
                  image: { type: 'external', external: { url: imageUrl } }
                });
              } else {
                blocks.push({
                  type: 'paragraph',
                  paragraph: { rich_text: [{ text: { content: '[图片链接无效]' } }] }
                });
              }
            }
          }
        }
        // 独立链接行（可能是视频/音频/书签）
        else if (line.match(/^https?:\/\/[^\s]+$/)) {
          const url = line.trim();
          const urlType = getUrlType(url);

          switch (urlType) {
            case 'video':
              blocks.push({
                type: 'video',
                video: { type: 'external', external: { url } }
              });
              break;
            case 'cloud':
              // 网盘链接：使用 callout 块突出显示
              blocks.push({
                type: 'callout',
                callout: {
                  icon: { emoji: '📦' },
                  rich_text: [{
                    text: { content: getCloudName(url) + ': ', link: null },
                    annotations: { bold: true }
                  }, {
                    text: { content: '点击下载', link: { url } }
                  }]
                }
              });
              break;
            case 'audio':
              // Notion 不直接支持音频块，使用书签
              blocks.push({
                type: 'bookmark',
                bookmark: { url }
              });
              break;
            case 'image':
              blocks.push({
                type: 'image',
                image: { type: 'external', external: { url } }
              });
              break;
            case 'pdf':
              blocks.push({
                type: 'pdf',
                pdf: { type: 'external', external: { url } }
              });
              break;
            default:
              // 普通链接，使用书签预览
              blocks.push({
                type: 'bookmark',
                bookmark: { url }
              });
          }
        }
        // Markdown 链接行 [text](url)
        else if (line.match(/^\[.+\]\(.+\)$/)) {
          const match = line.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (match) {
            const text = match[1];
            const url = normalizeUrl(match[2]);

            if (!url) {
              // URL 无效，只显示文本
              blocks.push({
                type: 'paragraph',
                paragraph: { rich_text: [{ text: { content: text } }] }
              });
            } else {
              const urlType = getUrlType(url);

              // 视频链接使用 embed
              if (urlType === 'video') {
                blocks.push({
                  type: 'video',
                  video: { type: 'external', external: { url } }
                });
              } else if (urlType === 'cloud') {
                // 网盘链接：使用 callout 块
                blocks.push({
                  type: 'callout',
                  callout: {
                    icon: { emoji: '📦' },
                    rich_text: [{
                      text: { content: getCloudName(url) + ': ', link: null },
                      annotations: { bold: true }
                    }, {
                      text: { content: text || '点击下载', link: { url } }
                    }]
                  }
                });
              } else if (urlType === 'image') {
                blocks.push({
                  type: 'image',
                  image: { type: 'external', external: { url } }
                });
              } else {
                // 普通链接
                blocks.push({
                  type: 'paragraph',
                  paragraph: {
                    rich_text: [{
                      text: { content: text, link: { url } }
                    }]
                  }
                });
              }
            }
          }
        }
        // 普通段落（带格式解析）
        else if (line.trim()) {
          blocks.push({
            type: 'paragraph',
            paragraph: { rich_text: parseRichText(line) }
          });
        }

        i++;
      }

      // 辅助函数：验证并修复 rich_text 数组
      function validateRichText(richText) {
        if (!Array.isArray(richText) || richText.length === 0) {
          return [{ text: { content: ' ' } }];
        }

        const validated = [];
        for (const item of richText) {
          try {
            if (!item || typeof item !== 'object') {
              validated.push({ text: { content: ' ' } });
              continue;
            }

            if (!item.text || typeof item.text !== 'object') {
              validated.push({ text: { content: ' ' } });
              continue;
            }

            // 确保 content 是字符串且不为空
            let content = item.text.content;
            if (content === null || content === undefined || content === '') {
              content = ' ';
            } else if (typeof content !== 'string') {
              content = String(content);
            }
            // Notion 限制内容长度为 2000
            content = content.substring(0, 2000);

            const validItem = {
              text: { content: content }
            };

            // 验证链接
            if (item.text.link && item.text.link.url) {
              try {
                const url = item.text.link.url.trim();
                if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
                  new URL(url); // 验证 URL 格式
                  validItem.text.link = { url: url };
                }
              } catch (urlError) {
                // URL 无效，不添加链接
              }
            }

            // 保留格式注解
            if (item.annotations && typeof item.annotations === 'object') {
              validItem.annotations = {};
              if (item.annotations.bold === true) validItem.annotations.bold = true;
              if (item.annotations.italic === true) validItem.annotations.italic = true;
              if (item.annotations.code === true) validItem.annotations.code = true;
              if (item.annotations.strikethrough === true) validItem.annotations.strikethrough = true;
              if (item.annotations.underline === true) validItem.annotations.underline = true;
            }

            validated.push(validItem);
          } catch (itemError) {
            console.warn('[Discourse Saver] rich_text 项验证失败:', itemError.message);
            validated.push({ text: { content: ' ' } });
          }
        }

        return validated.length > 0 ? validated : [{ text: { content: ' ' } }];
      }

      // 过滤并验证所有块，确保每个块都有效
      const validBlocks = blocks.filter(block => {
        try {
          if (!block || !block.type) return false;

          // 检查需要 rich_text 的块类型
          const richTextTypes = ['paragraph', 'heading_1', 'heading_2', 'heading_3',
                                 'bulleted_list_item', 'numbered_list_item', 'quote',
                                 'to_do', 'callout', 'code'];

          if (richTextTypes.includes(block.type)) {
            const content = block[block.type];
            if (!content) return false;

            // 检查并修复 rich_text
            if (content.rich_text) {
              content.rich_text = validateRichText(content.rich_text);
            }
          }

          // 检查图片/视频/PDF 块
          if (['image', 'video', 'pdf'].includes(block.type)) {
            const content = block[block.type];
            if (!content || !content.external || !content.external.url) {
              return false;
            }
          }

          // 检查书签块
          if (block.type === 'bookmark') {
            if (!block.bookmark || !block.bookmark.url) {
              return false;
            }
          }

          // 检查表格块
          if (block.type === 'table') {
            if (!block.table || !block.table.children || block.table.children.length === 0) {
              return false;
            }
            // 验证每个表格行
            const tableWidth = block.table.table_width || 1;
            block.table.children = block.table.children.filter(row => {
              if (!row || row.type !== 'table_row' || !row.table_row || !row.table_row.cells) {
                return false;
              }
              // 确保每行有正确数量的单元格，每个单元格都是有效的 rich_text
              while (row.table_row.cells.length < tableWidth) {
                row.table_row.cells.push([{ text: { content: ' ' } }]);
              }
              row.table_row.cells = row.table_row.cells.slice(0, tableWidth).map(cell => {
                return validateRichText(cell);
              });
              return true;
            });
            if (block.table.children.length === 0) return false;
          }

          // 检查 toggle 块
          if (block.type === 'toggle') {
            if (!block.toggle) return false;
            block.toggle.rich_text = validateRichText(block.toggle.rich_text);
            // 验证 children
            if (block.toggle.children && Array.isArray(block.toggle.children)) {
              block.toggle.children = block.toggle.children.filter(child => {
                if (!child || !child.type) return false;
                if (child.type === 'paragraph' && child.paragraph) {
                  child.paragraph.rich_text = validateRichText(child.paragraph.rich_text);
                }
                return true;
              });
            }
          }

          return true;
        } catch (e) {
          console.warn('[Discourse Saver] 块验证失败:', e.message);
          return false;
        }
      });

      console.log(`[Discourse Saver] Notion 块: 总计 ${blocks.length}, 有效 ${validBlocks.length}`);
      return validBlocks;
    }

    // 测试 Notion 连接（支持两种调用方式）
    async function testNotionConnection(tokenOrConfig, dbId = null) {
      let token, databaseId;

      // 支持两种调用方式：testNotionConnection(config) 或 testNotionConnection(token, dbId)
      if (typeof tokenOrConfig === 'object') {
        token = tokenOrConfig.notionToken;
        databaseId = tokenOrConfig.notionDatabaseId;
      } else {
        token = tokenOrConfig;
        databaseId = dbId;
      }

      databaseId = databaseId.replace(/-/g, '');

      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'GET',
          url: `https://api.notion.com/v1/databases/${databaseId}`,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Notion-Version': NOTION_API_VERSION
          },
          onload: function(response) {
            if (response.status >= 200 && response.status < 300) {
              const data = JSON.parse(response.responseText);
              resolve({ success: true, title: data.title?.[0]?.plain_text || 'Database' });
            } else {
              const error = JSON.parse(response.responseText);
              reject(new Error(error.message || 'Connection failed'));
            }
          },
          onerror: function() {
            reject(new Error('网络请求失败'));
          }
        });
      });
    }

    // ============================================================
    // 飞书多维表格功能（从 background.js 移植，使用 GM_xmlhttpRequest）
    // ============================================================

    // GM_xmlhttpRequest 的 fetch 兼容包装（用于跨域请求）
    function gmFetch(url, options = {}) {
      return new Promise((resolve, reject) => {
        const details = {
          method: options.method || 'GET',
          url: url,
          headers: options.headers || {},
          responseType: options.responseType || '',
          timeout: 30000,
          onload: function(resp) {
            const text = resp.responseText;
            const status = resp.status;
            resolve({
              ok: status >= 200 && status < 300,
              status: status,
              url: resp.finalUrl || url,
              response: resp.response,
              text: () => Promise.resolve(text),
              json: () => {
                try { return Promise.resolve(JSON.parse(text)); }
                catch(e) { return Promise.reject(e); }
              }
            });
          },
          onerror: function() { reject(new Error('网络请求失败: ' + url)); },
          ontimeout: function() { reject(new Error('请求超时: ' + url)); }
        };
        if (options.body) {
          details.data = options.body;
        }
        GM_xmlhttpRequest(details);
      });
    }

    function normalizeMarkdownForRemote(markdown) {
      if (!markdown || typeof markdown !== 'string') return markdown || '';
      let result = markdown;
      // 将 feishu-image:// token 转为飞书内部可下载 URL（配合 embedImages 可嵌入为 base64）
      result = result.replace(/!\[([^\]]*)\]\(feishu-image:\/\/([^)]+)\)/g, (_m, alt, token) => {
        const dlUrl = `https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/v2/cover/${token}/?mount_node_token=${token}&mount_point=docx_image&policy=equal`;
        return `![${alt || ''}](${dlUrl})`;
      });
      // 修复异常语法 ".![alt](url)"
      result = result.replace(/(^|\n)\s*\.\s*!\[/g, '$1![');
      // upload://xxx -> /uploads/short-url/xxx
      result = result.replace(/\((upload:\/\/[^)\s]+)\)/g, (_m, u) => {
        const token = u.replace(/^upload:\/\//, '');
        return `(${window.location.origin}/uploads/short-url/${token})`;
      });
      // 相对 short-url -> 绝对
      result = result.replace(/\((\/uploads\/short-url\/[^)\s]+)\)/g, (_m, u) => `(${window.location.origin}${u})`);
      return result;
    }

    async function resolveImageUrlsInMarkdown(markdown) {
      if (!markdown || typeof markdown !== 'string') return markdown || '';
      const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
      const urls = new Set();
      let m;
      while ((m = imageRegex.exec(markdown)) !== null) {
        const u = (m[2] || '').trim();
        if (!u || u.startsWith('data:')) continue;
        if (u.startsWith('http://') || u.startsWith('https://')) {
          if (u.includes('/uploads/short-url/') || u.includes('/uploads/default/')) urls.add(u);
        }
      }
      if (urls.size === 0) return markdown;

      const entries = [...urls].slice(0, 20); // 限流，避免大帖解析过慢
      const resolvedMap = new Map();
      await Promise.all(entries.map(async (u) => {
        try {
          let resp = await UtilModule.retryWithBackoff(async () => {
            const r = await gmFetch(u, { method: 'HEAD', headers: {} });
            if (r.status === 405 || !r.ok) throw new Error(`HEAD ${r.status}`);
            return r;
          }, { retries: 2, baseDelayMs: 300, factor: 2, classifyError: (e) => UtilModule.classifyDownloadError(e) })
          .catch(async () => {
            return UtilModule.retryWithBackoff(async () => {
              const r2 = await gmFetch(u, { method: 'GET', headers: {} });
              if (!r2.ok && UtilModule.shouldRetryStatus(r2.status)) throw new Error(`GET ${r2.status}`);
              return r2;
            }, { retries: 3, baseDelayMs: 300, factor: 2, classifyError: (e) => UtilModule.classifyDownloadError(e) });
          });
          const finalUrl = resp.url || u;
          if (finalUrl && finalUrl !== u) resolvedMap.set(u, finalUrl);
        } catch (_) {
          // 保留原始 URL
        }
      }));

      if (resolvedMap.size === 0) return markdown;
      let out = markdown;
      for (const [from, to] of resolvedMap.entries()) {
        const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        out = out.replace(new RegExp(`!\\[([^\\]]*)\\]\\(${escaped}\\)`, 'g'), `![$1](${to})`);
      }
      return out;
    }

    const FEISHU_API_DOMAINS = { feishu: 'https://open.feishu.cn', lark: 'https://open.larksuite.com' };
    const FEISHU_TEXT_LIMIT = 100000;
    let feishuTokenCache = { feishu: { token: null, expireTime: 0 }, lark: { token: null, expireTime: 0 } };

    const FEISHU_ERR = {
      10003: { msg: 'App ID 或 App Secret 错误', hint: '请检查飞书开放平台的应用凭证是否正确复制' },
      10014: { msg: 'App Secret 错误', hint: '请重新复制 App Secret' },
      99991663: { msg: 'App ID 格式错误', hint: 'App ID 应该以「cli_」开头' },
      99991664: { msg: 'App Secret 格式错误', hint: 'App Secret 格式不正确，请重新复制' },
      1254043: { msg: '应用权限不足', hint: '请在飞书开放平台添加 bitable:app 权限，并将应用添加为多维表格的协作者' },
      1254044: { msg: '无访问此文档的权限', hint: '请确保已将应用添加为多维表格的「可编辑」协作者' },
      1254045: { msg: '文档不存在或无权限', hint: '请检查 app_token 是否正确' },
      1254607: { msg: '数据表不存在', hint: 'table_id 错误，请从 URL「?table=」后面复制（以 tbl 开头）' },
      1254301: { msg: '多维表格不存在', hint: 'app_token 错误，请从 URL「/base/」后到「?」之间复制' },
      1254016: { msg: '字段不存在', hint: '请确保多维表格有：标题、链接、作者、分类、标签、保存时间、评论数、附件、正文 字段' },
      1254017: { msg: '字段类型不匹配', hint: '链接字段必须是「超链接」类型，保存时间必须是「日期」类型，评论数必须是「数字」类型' },
      1254060: { msg: '多行文本字段格式错误', hint: '「正文」字段类型需为「多行文本」，或内容超过10万字符' },
      99991400: { msg: 'API 调用频率超限', hint: '请稍后再试' }
    };

    async function feishuRequestWithRetry(url, options, ctx) {
      return UtilModule.retryWithBackoff(async () => {
        const resp = await gmFetch(url, options);
        if (!resp.ok && UtilModule.shouldRetryStatus(resp.status)) {
          throw new Error(`${ctx} HTTP ${resp.status}`);
        }
        return resp;
      }, {
        retries: 3,
        baseDelayMs: 600,
        factor: 2,
        classifyError: (e) => UtilModule.classifyDownloadError(e)
      });
    }

    function feishuParseError(code, msg, ctx) {
      const e = FEISHU_ERR[code];
      return e ? `${ctx}失败：${e.msg}\n💡 ${e.hint}` : `${ctx}失败：${msg}（错误码: ${code}）`;
    }

    async function feishuSafeJson(response, ctx) {
      const text = await response.text();
      if (!text || text.trim() === '') throw new Error(`${ctx}失败：服务器返回空响应`);
      if (!response.ok) {
        try {
          const d = JSON.parse(text);
          if (d.code !== undefined) throw new Error(feishuParseError(d.code, d.msg || '未知错误', ctx));
        } catch(pe) {
          if (pe.message.includes('失败：')) throw pe;
        }
        throw new Error(`${ctx}失败：HTTP ${response.status}`);
      }
      try { return JSON.parse(text); }
      catch(e) { throw new Error(`${ctx}失败：无法解析服务器响应\n${text.substring(0, 100)}`); }
    }

    async function getFeishuToken(appId, appSecret, domain = 'feishu') {
      if (!appId || !appId.trim()) throw new Error('App ID 未填写');
      if (!appSecret || !appSecret.trim()) throw new Error('App Secret 未填写');
      if (!appId.startsWith('cli_')) throw new Error(`App ID 格式错误，应以「cli_」开头`);

      const cache = feishuTokenCache[domain] || feishuTokenCache.feishu;
      if (cache.token && Date.now() < cache.expireTime - 300000) return cache.token;

      const baseUrl = FEISHU_API_DOMAINS[domain] || FEISHU_API_DOMAINS.feishu;
      let response;
      try {
        response = await feishuRequestWithRetry(`${baseUrl}/open-apis/auth/v3/tenant_access_token/internal`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ app_id: appId.trim(), app_secret: appSecret.trim() })
        }, '获取访问令牌');
      } catch(err) {
        throw new Error(`无法访问飞书服务器，请检查网络：${err.message}`);
      }

      const data = await feishuSafeJson(response, '获取访问令牌');
      if (data.code !== 0) throw new Error(feishuParseError(data.code, data.msg, '获取访问令牌'));

      if (!feishuTokenCache[domain]) feishuTokenCache[domain] = {};
      feishuTokenCache[domain].token = data.tenant_access_token;
      feishuTokenCache[domain].expireTime = Date.now() + (data.expire * 1000);
      return data.tenant_access_token;
    }

    function feishuSanitizeContent(content) {
      if (!content || typeof content !== 'string') return '';
      let s = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
      s = s.replace(/[\u200B-\u200D\uFEFF\u2028\u2029]/g, '');
      s = s.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      s = s.replace(/!\[([^\]]*)\]\([^)]+\)/g, (m, alt) => alt.trim() ? `[图片: ${alt.trim()}]` : '');
      s = s.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (m, text, url) => text.trim() || '');
      s = s.replace(/\n{3,}/g, '\n\n');
      s = s.replace(/[ \t]+/g, ' ');
      s = s.replace(/^ +| +$/gm, '');
      if (s.length > FEISHU_TEXT_LIMIT) {
        s = s.substring(0, FEISHU_TEXT_LIMIT - 100) + '\n\n... (内容过长，已截断)';
      }
      return s;
    }

    async function feishuUploadMd(token, appToken, title, content, domain) {
      const safeTitle = title.replace(/[《》<>:"/\\|?*]/g, '').replace(/\s+/g, '-').substring(0, 50);
      const fileName = `${safeTitle}.md`;
      const blob = new Blob([content], { type: 'text/markdown' });
      const formData = new FormData();
      formData.append('file', blob, fileName);
      formData.append('file_name', fileName);
      formData.append('parent_type', 'bitable_file');
      formData.append('parent_node', appToken);
      formData.append('size', blob.size.toString());

      const baseUrl = FEISHU_API_DOMAINS[domain] || FEISHU_API_DOMAINS.feishu;
      const response = await feishuRequestWithRetry(`${baseUrl}/open-apis/drive/v1/medias/upload_all`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      }, '上传MD文件');
      const data = await feishuSafeJson(response, '上传MD文件');
      if (data.code !== 0) throw new Error(`上传MD文件失败: ${data.msg}`);
      return data.data.file_token;
    }

    async function feishuUploadHtmlFile(token, appToken, title, htmlContent, domain) {
      const safeTitle = title.replace(/[《》<>:"/\\|?*]/g, '').replace(/\s+/g, '-').substring(0, 50);
      const fileName = `${safeTitle}.html`;
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const formData = new FormData();
      formData.append('file', blob, fileName);
      formData.append('file_name', fileName);
      formData.append('parent_type', 'bitable_file');
      formData.append('parent_node', appToken);
      formData.append('size', blob.size.toString());
      const baseUrl = FEISHU_API_DOMAINS[domain] || FEISHU_API_DOMAINS.feishu;
      const response = await feishuRequestWithRetry(`${baseUrl}/open-apis/drive/v1/medias/upload_all`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      }, '上传HTML文件');
      const data = await feishuSafeJson(response, '上传HTML文件');
      if (data.code !== 0) throw new Error(`上传HTML文件失败: ${data.msg}`);
      return data.data.file_token;
    }

    const FEISHU_FIELD_TYPES = { TEXT: 1, HYPERLINK: 15 };

    async function feishuGetFieldMap(token, appToken, tableId, domain) {
      const baseUrl = FEISHU_API_DOMAINS[domain] || FEISHU_API_DOMAINS.feishu;
      const response = await feishuRequestWithRetry(`${baseUrl}/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/fields`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
      }, '获取飞书字段列表');
      const data = await feishuSafeJson(response, '获取飞书字段列表');
      if (data.code !== 0) throw new Error(feishuParseError(data.code, data.msg, '获取飞书字段列表'));
      const map = {};
      for (const f of (data.data?.items || [])) {
        map[f.field_name] = { type: f.type };
      }
      return map;
    }

    function feishuFindDocLinkFieldName(fieldMap) {
      if (!fieldMap || typeof fieldMap !== 'object') return null;
      const candidates = ['云文档链接', '云文档', '文档链接', 'Doc Link', 'Cloud Doc Link'];
      for (const n of candidates) {
        if (fieldMap[n]) return n;
      }
      const names = Object.keys(fieldMap);
      return names.find(n => /云文档|文档|doc/i.test(n) && /链接|link|url/i.test(n)) || null;
    }

    function feishuPrependDocLink(content, docUrl, title) {
      const line = `云文档链接: ${(title || '云文档').trim()} - ${docUrl}`;
      if (!content || !content.trim()) return line;
      return `${line}\n\n${content}`;
    }

    function feishuSetAuthorField(fields, fieldMap, authorName, authorUrl, uploadErrors) {
      const name = (authorName || '').trim() || '未知作者';
      const url = UtilModule.sanitizeExternalUrl(authorUrl);
      const authorField = fieldMap?.['作者'];

      if (!authorField) {
        fields['作者'] = url ? `${name} - ${url}` : name;
        return;
      }

      if (authorField.type === FEISHU_FIELD_TYPES.HYPERLINK) {
        if (url) {
          fields['作者'] = { link: url, text: name };
        } else {
          uploadErrors.push('作者字段为超链接，但未提取到作者主页链接，已跳过作者字段写入');
        }
        return;
      }

      fields['作者'] = url ? `${name} - ${url}` : name;
    }

    function feishuSetAuthorLinkField(fields, fieldMap, authorName, authorUrl) {
      const url = UtilModule.sanitizeExternalUrl(authorUrl);
      if (!url) return;
      const text = (authorName || '').trim() || '作者主页';
      const candidates = ['作者链接', '作者主页', '作者URL', 'Author Link', 'Author URL'];
      const fieldName = candidates.find((n) => fieldMap?.[n]);
      if (!fieldName) return;
      const targetField = fieldMap[fieldName];
      if (targetField?.type === FEISHU_FIELD_TYPES.HYPERLINK) {
        fields[fieldName] = { link: url, text };
      } else {
        fields[fieldName] = url;
      }
    }

    function feishuSanitizeCloudDocMarkdown(markdown, title = '') {
      if (!markdown || typeof markdown !== 'string') return '# 空内容\n';
      let result = normalizeMarkdownForRemote(markdown);
      result = result.replace(/^---\n[\s\S]*?\n---\n*/m, '');
      if (title && title.trim()) {
        const escaped = title.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        result = result.replace(new RegExp(`^#\\s+${escaped}\\s*\\n+`, 'm'), '');
      }
      result = result.replace(/(^|\n)\s*\.\s*!\[/g, '$1![');
      result = result.replace(
        /!\[([^\]]*)\]\((https?:\/\/[^\s)]+\.webp(?:\?[^\s)]*)?)\)/gi,
        (_m, alt, url) => `<img src="${url}" alt="${String(alt || '').replace(/"/g, '&quot;')}" />`
      );
      return result.trim() || '# 空内容\n';
    }

    function sanitizeMarkdownForFeishuArtifacts(markdown, title = '') {
      if (!markdown || typeof markdown !== 'string') return '';
      let s = normalizeMarkdownForRemote(markdown);
      s = s.replace(/^---\n[\s\S]*?\n---\n*/m, '');
      if (title && title.trim()) {
        const escaped = title.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        s = s.replace(new RegExp(`^#\\s+${escaped}\\s*\\n+`, 'm'), '');
      }
      // 去掉 Obsidian Callout 块（> [!info] 帖子信息...），飞书不支持此语法
      s = s.replace(/^> \[!(?:info|tip|warning|note|quote)[^\]]*\][^\n]*\n(?:^>.*\n)*/gm, '');
      // 将 feishu-image:// token 转为飞书内部可下载 URL（配合 embedImages 可嵌入为 base64）
      s = s.replace(/!\[([^\]]*)\]\(feishu-image:\/\/([^)]+)\)/g, (_m, alt, token) => {
        const dlUrl = `https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/v2/cover/${token}/?mount_node_token=${token}&mount_point=docx_image&policy=equal`;
        return `![${alt || ''}](${dlUrl})`;
      });
      // 去掉错误拼接的占位图 URL 和 data:image 占位图
      s = s.replace(/!\[[^\]]*\]\((?:https?:\/\/[^)\s]*data:image[^)\s]*|data:image[^)\s]*)\)/gi, '');
      // 去掉空图片语法
      s = s.replace(/!\[[^\]]*\]\(\s*\)/g, '');
      s = s.replace(/\n{3,}/g, '\n\n');
      return s.trim();
    }

    async function feishuGetRootFolderToken(token, domain) {
      const baseUrl = FEISHU_API_DOMAINS[domain] || FEISHU_API_DOMAINS.feishu;
      const response = await gmFetch(`${baseUrl}/open-apis/drive/explorer/v2/root_folder/meta`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await feishuSafeJson(response, '获取飞书根目录 token');
      if (data.code !== 0 || !data.data?.token) {
        throw new Error(`获取飞书根目录 token 失败: ${data.msg || '未知错误'}`);
      }
      return data.data.token;
    }

    async function feishuUploadMdForImport(token, title, mdContent, domain, folderToken) {
      const safeTitle = (title || 'Discourse-Post').replace(/[《》<>:"/\\|?*]/g, '').replace(/\s+/g, '-').substring(0, 100) || 'Discourse-Post';
      const fileName = `${safeTitle}.md`;
      const blob = new Blob([mdContent], { type: 'text/markdown; charset=utf-8' });
      const formData = new FormData();
      formData.append('file', blob, fileName);
      formData.append('file_name', fileName);
      formData.append('parent_type', 'explorer');
      formData.append('parent_node', folderToken);
      formData.append('size', String(blob.size));

      const baseUrl = FEISHU_API_DOMAINS[domain] || FEISHU_API_DOMAINS.feishu;
      const response = await gmFetch(`${baseUrl}/open-apis/drive/v1/files/upload_all`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      const data = await feishuSafeJson(response, '上传云文档导入源文件');
      if (data.code !== 0 || !data.data?.file_token) {
        throw new Error(`上传云文档导入源文件失败: ${data.msg || '未知错误'}`);
      }
      return data.data.file_token;
    }

    async function feishuCreateDocFromMarkdown(token, title, markdown, domain) {
      const baseUrl = FEISHU_API_DOMAINS[domain] || FEISHU_API_DOMAINS.feishu;
      const mountToken = await feishuGetRootFolderToken(token, domain);
      const mdToken = await feishuUploadMdForImport(token, title, markdown, domain, mountToken);

      const safeTitle = (title || 'Discourse-Post').replace(/[《》<>:"/\\|?*]/g, '').replace(/\s+/g, '-').substring(0, 100) || 'Discourse-Post';
      const createResp = await gmFetch(`${baseUrl}/open-apis/drive/v1/import_tasks`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          file_extension: 'md',
          file_token: mdToken,
          type: 'docx',
          file_name: safeTitle,
          point: { mount_type: 1, mount_key: mountToken }
        })
      });
      const createData = await feishuSafeJson(createResp, '创建云文档导入任务');
      if (createData.code !== 0 || !createData.data?.ticket) {
        throw new Error(`创建云文档导入任务失败: ${createData.msg || '未知错误'}`);
      }

      const ticket = createData.data.ticket;
      const contentLength = markdown.length;
      let maxAttempts = 90;
      let intervalMs = 1000;
      if (contentLength >= 120000) { maxAttempts = 150; intervalMs = 1200; }
      if (contentLength >= 300000) { maxAttempts = 180; intervalMs = 1500; }

      for (let i = 0; i < maxAttempts; i++) {
        await new Promise(r => setTimeout(r, intervalMs));
        const statusResp = await gmFetch(`${baseUrl}/open-apis/drive/v1/import_tasks/${encodeURIComponent(ticket)}`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const statusData = await feishuSafeJson(statusResp, '查询云文档导入结果');
        if (statusData.code !== 0) {
          throw new Error(`查询云文档导入结果失败: ${statusData.msg || '未知错误'}`);
        }
        const job = statusData.data?.result;
        if (job?.job_status === 0) {
          if (!job.url) throw new Error('导入成功但未返回云文档链接');
          return job.url;
        }
        if (job?.job_status === 1 || job?.job_status === 2) continue;
        throw new Error(`云文档导入失败: ${job?.job_error_msg || '未知错误'}`);
      }
      throw new Error('云文档导入超时，请稍后重试');
    }

    async function feishuBuildAndSaveRecord(token, appToken, tableId, domain, postData, uploadContent, uploadAttachment, uploadHtml = false, isUpdate = false, recordId = null, options = {}) {
      const baseUrl = FEISHU_API_DOMAINS[domain] || FEISHU_API_DOMAINS.feishu;
      const fieldMap = await feishuGetFieldMap(token, appToken, tableId, domain).catch(() => ({}));
      const uploadErrors = [];
      const fields = {
        '标题': postData.title,
        '链接': { link: postData.url, text: postData.title },
        '分类': postData.category || '',
        '标签': postData.tags && postData.tags.length > 0 ? postData.tags.join(', ') : '',
        '保存时间': Date.now(),
        '评论数': postData.commentCount || 0
      };
      feishuSetAuthorField(fields, fieldMap, postData.author, postData.authorUrl, uploadErrors);
      feishuSetAuthorLinkField(fields, fieldMap, postData.author, postData.authorUrl);

      const attachments = [];

      if (uploadAttachment && postData.content) {
        try {
          const fileToken = await feishuUploadMd(token, appToken, postData.title, postData.content, domain);
          attachments.push({ file_token: fileToken });
        } catch(e) {
          uploadErrors.push('MD附件: ' + e.message);
        }
      }

      if (uploadHtml && postData.content && postData.metadata) {
        try {
          const htmlContent = generateHtmlContent(postData.content, postData.metadata);
          const fileToken = await feishuUploadHtmlFile(token, appToken, postData.title, htmlContent, domain);
          attachments.push({ file_token: fileToken });
        } catch(e) {
          uploadErrors.push('HTML附件: ' + e.message);
        }
      }

      if (attachments.length > 0) fields['附件'] = attachments;

      if (uploadContent !== false) {
        let textContent = feishuSanitizeContent(postData.content);

        if (options.uploadContentAsCloudDoc) {
          try {
            const cloudDocSource = feishuSanitizeCloudDocMarkdown(postData.cloudDocContent || postData.content, postData.title);
            const docUrl = await feishuCreateDocFromMarkdown(token, postData.title, cloudDocSource, domain);
            const linkFieldName = feishuFindDocLinkFieldName(fieldMap);
            if (linkFieldName) {
              const linkField = fieldMap[linkFieldName];
              if (linkField?.type === FEISHU_FIELD_TYPES.HYPERLINK) {
                fields[linkFieldName] = { link: docUrl, text: postData.title || '云文档' };
              } else {
                fields[linkFieldName] = docUrl;
              }
            } else {
              textContent = feishuPrependDocLink(textContent, docUrl, postData.title);
            }
          } catch (e) {
            uploadErrors.push('云文档正文: ' + e.message);
          }
        }

        fields['正文'] = textContent;
      }

      const url = isUpdate
        ? `${baseUrl}/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records/${recordId}`
        : `${baseUrl}/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records`;

      const response = await feishuRequestWithRetry(url, {
        method: isUpdate ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ fields })
      }, isUpdate ? '更新记录' : '保存记录');

      const data = await feishuSafeJson(response, isUpdate ? '更新记录' : '保存记录');
      if (data.code !== 0) throw new Error(feishuParseError(data.code, data.msg, isUpdate ? '更新记录' : '保存记录'));

      const result = data.data.record;
      if (uploadErrors.length > 0) result._uploadWarnings = uploadErrors;
      return result;
    }

    async function feishuFindRecord(config, url, title) {
      const { feishuApiDomain, feishuAppId, feishuAppSecret, feishuAppToken, feishuTableId } = config;
      const domain = feishuApiDomain || 'feishu';
      const token = await getFeishuToken(feishuAppId, feishuAppSecret, domain);
      const baseUrl = FEISHU_API_DOMAINS[domain] || FEISHU_API_DOMAINS.feishu;
      const baseTitle = title.replace(/\s*\[\d+楼\]$/, '');

      const response = await feishuRequestWithRetry(`${baseUrl}/open-apis/bitable/v1/apps/${feishuAppToken}/tables/${feishuTableId}/records/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
          filter: { conjunction: 'and', conditions: [{ field_name: '标题', operator: 'contains', value: [baseTitle] }] },
          page_size: 20
        })
      }, '搜索记录');

      const data = await feishuSafeJson(response, '搜索记录');
      if (data.code !== 0) throw new Error(`飞书搜索失败(${data.code}): ${data.msg}`);

      if (data.data.total > 0 && data.data.items) {
        for (const item of data.data.items) {
          const recordLink = item.fields?.['链接'];
          const recordUrl = typeof recordLink === 'object' ? recordLink.link : recordLink;
          if (recordUrl === url) return item;
        }
      }
      return null;
    }

    async function saveToFeishu(markdown, metadata, config) {
      const domain = config.feishuApiDomain || 'feishu';
      if (!config.feishuAppId || !config.feishuAppSecret || !config.feishuAppToken || !config.feishuTableId) {
        LogModule.add('error', '飞书配置不完整');
        throw new Error('飞书配置不完整，请检查 App ID/Secret/Token/Table ID');
      }

      const cleanedMarkdown = sanitizeMarkdownForFeishuArtifacts(markdown, metadata.title);
      const conflictMode = config.saveConflictMode || 'overwrite';
      const withTimestamp = conflictMode === 'timestamp';
      const ts = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
      const effectiveTitle = withTimestamp ? `${metadata.title}-${ts}` : metadata.title;
      const token = await getFeishuToken(config.feishuAppId, config.feishuAppSecret, domain);
      const postData = {
        title: effectiveTitle,
        url: metadata.url,
        author: metadata.author || '',
        authorUrl: UtilModule.sanitizeExternalUrl(metadata.authorUrl || ''),
        category: metadata.category || '',
        tags: metadata.tags || [],
        commentCount: metadata.commentCount || 0,
        content: cleanedMarkdown,
        cloudDocContent: cleanedMarkdown,
        metadata: metadata  // 用于生成 HTML 附件
      };

      const uploadHtml = !!config.feishuUploadHtml;

      // 搜索是否已存在，决定新建还是更新
      let existingRecord = null;
      if (!withTimestamp) {
        try {
          existingRecord = await feishuFindRecord(config, metadata.url, metadata.title);
        } catch(e) {
          console.warn('[Discourse Saver→飞书] 搜索已有记录失败，将新建:', e.message);
        }
      }

      if (existingRecord) {
        console.log('[Discourse Saver→飞书] 更新已有记录:', existingRecord.record_id);
        LogModule.add('info', '飞书：更新已有记录');
        return await feishuBuildAndSaveRecord(token, config.feishuAppToken, config.feishuTableId, domain, postData,
          config.feishuUploadContent !== false, config.feishuUploadAttachment, uploadHtml, true, existingRecord.record_id, {
            uploadContentAsCloudDoc: !!config.feishuUploadContentAsCloudDoc
          });
      } else {
        console.log('[Discourse Saver→飞书] 新建记录');
        LogModule.add('info', '飞书：新建记录');
        return await feishuBuildAndSaveRecord(token, config.feishuAppToken, config.feishuTableId, domain, postData,
          config.feishuUploadContent !== false, config.feishuUploadAttachment, uploadHtml, false, null, {
            uploadContentAsCloudDoc: !!config.feishuUploadContentAsCloudDoc
          });
      }
    }

    async function testFeishuConnection(appId, appSecret, domain) {
      try {
        const token = await getFeishuToken(appId, appSecret, domain || 'feishu');
        return { success: true, token: token.substring(0, 8) + '...' };
      } catch(e) {
        return { success: false, error: e.message };
      }
    }

    // 独立导出：仅保存到飞书
    async function saveToFeishuOnly(targetPostNumber = null) {
      try {
        const config = ConfigModule.get();
        if (!config.feishuAppId || !config.feishuAppSecret || !config.feishuAppToken || !config.feishuTableId) {
          throw new Error('请先配置飞书 App ID/Secret/Token/Table ID');
        }

        UtilModule.showNotification('正在准备保存到飞书...', 'info');
        const { markdown, metadata, comments } = await prepareData(targetPostNumber);
        await saveToFeishu(markdown, metadata, config);
        LogModule.add('success', `飞书保存成功: ${metadata.title || '未命名'}`);
        const commentInfo = comments.length > 0 ? `（含${comments.length}条评论）` : '';
        UtilModule.showNotification(`已保存到飞书${commentInfo}`, 'success');
        return { success: true, target: '飞书' };
      } catch (error) {
        console.error('[Discourse Saver] 飞书保存失败:', error);
        LogModule.add('error', `飞书保存失败: ${error.message}`);
        UtilModule.showNotification('飞书保存失败: ' + error.message, 'error');
        return { success: false, target: '飞书', error: error.message };
      }
    }

    // 准备保存数据（公共函数）
    async function prepareData(targetPostNumber = null) {
      const config = ConfigModule.get();
      const data = await extractData(config, targetPostNumber);
      const { sourceType, title, contentHTML, contentMarkdown, url, author, authorUrl, topicId, category, tags, comments, isSingleCommentMode, reactions, boosts } = data;
      const cleanTitle = UtilModule.sanitizeTitleText(title);

      const effectiveConfig = isSingleCommentMode
        ? { ...config, saveComments: true, foldComments: false }
        : config;

      let markdown;
      if (contentMarkdown) {
        // 飞书云文档等已提供 Markdown，直接使用
        // 构建前缀部分（frontmatter + callout），与 convertToMarkdownWithComments 保持一致
        let prefix = '';

        // YAML frontmatter（如果启用）
        if (effectiveConfig.addMetadata !== false) {
          const timeStr = new Date().toLocaleString('zh-CN', { hour12: false });
          const safeTitle2 = (cleanTitle || '').replace(/"/g, '\\"');
          const safeAuthor2 = (author || '').replace(/"/g, '\\"');
          const safeUrl2 = (url || '').replace(/"/g, '\\"');
          const safeTags = (tags || []).map(t => `  - ${t.replace(/[,\[\]#]/g, '').trim()}`).filter(Boolean).join('\n');
          prefix += `---\n来源: "${safeUrl2}"\n标题: "${safeTitle2}"\n作者: "${safeAuthor2}"\n分类: "${category || ''}"\ntags:\n${safeTags || '  - 飞书'}\n保存时间: "${timeStr}"\n---\n\n`;
        }

        // Callout 块（仅 OB 使用）
        if (effectiveConfig.addCallout !== false) {
          const timeStr2 = new Date().toLocaleString('zh-CN', { hour12: false });
          const platformName = sourceType === 'feishu_doc' ? '飞书云文档' : sourceType === '51cg' ? '51吃瓜网' : sourceType === 'x6d3i' ? 'x6d3i视频' : sourceType;
          const cf = (field) => effectiveConfig[`calloutField_${field}`] !== false;
          const cn = (field, fallback) => effectiveConfig[`calloutFieldName_${field}`] || fallback;
          const calloutLines = ['> [!info] 帖子信息'];
          if (cf('url') && url) calloutLines.push(`> - ${cn('url','来源')}: ${url}`);
          if (cf('title') && cleanTitle) calloutLines.push(`> - ${cn('title','标题')}: ${cleanTitle.replace(/[[\]]/g, '')}`);
          if (cf('author') && author) {
            const safeAuthorDisplay = author.replace(/[[\]]/g, '');
            const authorUrl2 = authorUrl || '';
            if (effectiveConfig.calloutAuthorLink !== false && authorUrl2) {
              calloutLines.push(`> - ${cn('author','作者')}: [${safeAuthorDisplay}](${authorUrl2})`);
            } else {
              calloutLines.push(`> - ${cn('author','作者')}: ${safeAuthorDisplay}`);
            }
          }
          if (cf('category') && category && category !== '未分类') calloutLines.push(`> - ${cn('category','类别')}: ${category}`);
          if (cf('tags') && tags && tags.length > 0) calloutLines.push(`> - ${cn('tags','tags')}: ${tags.join(', ')}`);
          if (cf('time')) calloutLines.push(`> - ${cn('time','保存时间')}: ${timeStr2}`);
          if (cf('platform') && platformName) calloutLines.push(`> - ${cn('platform','平台')}: ${platformName.toUpperCase()}`);
          // 反应 & Boosts (Linux.do discourse-reactions / discourse-boosts)
          if (cf('reactions') && reactions && reactions.length > 0) {
            const rText = UtilModule.formatReactionsText(reactions);
            if (rText) calloutLines.push(`> - ${cn('reactions','反应')}: ${rText}`);
          }
          if (cf('boosts') && boosts && boosts.length > 0) {
            calloutLines.push(`> - ${cn('boosts','打call')}: ${boosts.join(' / ')}`);
          }
          prefix += calloutLines.join('\n') + '\n\n';
        }

        // 正文开头拼接作者行（带超链接），避免与正文已有的"作者：XXX"重复
        if (author) {
          const safeAuthor = author.replace(/[[\]]/g, '');
          const aLink = authorUrl || url || '';
          const authorLine = aLink
            ? `**作者：[${safeAuthor}](${aLink})**`
            : `**作者：${safeAuthor}**`;
          const contentStart = (contentMarkdown || '').slice(0, 200);
          const hasAuthorInContent = contentStart.includes('作者') && contentStart.includes(safeAuthor);
          if (!hasAuthorInContent) {
            prefix += authorLine + '\n\n';
          }
        }

        markdown = prefix + contentMarkdown;
      } else {
        markdown = ConvertModule.convertToMarkdownWithComments(
          contentHTML,
          { title: cleanTitle, url, author, authorUrl, topicId, category, tags, sourceType },
          comments,
          effectiveConfig
        );
      }

      // rawMarkdown：外链版本，用于飞书/Notion/HTML（先修复语法，再解析短链到最终可访问 URL）
      let rawMarkdown = normalizeMarkdownForRemote(markdown);
      rawMarkdown = await resolveImageUrlsInMarkdown(rawMarkdown);

      let fileName = UtilModule.sanitizeFileName(cleanTitle);
      let displayTitle = cleanTitle;

      if (isSingleCommentMode) {
        fileName += `-${targetPostNumber}楼`;
        displayTitle = `${cleanTitle} #${targetPostNumber}楼`;
      }

      const metadata = { sourceType, title: displayTitle, url, author, authorUrl, category, tags, commentCount: comments.length };

      return { markdown: rawMarkdown, rawMarkdown, fileName, metadata, comments, config, isSingleCommentMode, targetPostNumber };
    }

    // 独立导出：仅保存到 Obsidian
    async function saveToObsidianOnly(targetPostNumber = null) {
      try {
        UtilModule.showNotification('正在准备保存到 Obsidian...', 'info');
        const { rawMarkdown, fileName, metadata, comments, config } = await prepareData(targetPostNumber);
        // 按平台分流文件夹（在总文件夹下）
        const obBaseFolder = config.folderPath || 'Discourse收集箱';
        let effectiveFolder = null;
        if (config.usePlatformFolders && metadata && metadata.sourceType) {
          const pf = config.platformFolders || {};
          const st = metadata.sourceType;
          let platformFolder = pf[st] || null;
          // 论坛类按站点名细分
          if ((st === 'discourse' || st === 'trae') && platformFolder) {
            const siteName = UtilModule.getDiscourseSiteName(window.location.hostname, config);
            platformFolder = `${platformFolder}/${siteName}`;
          }
          if (platformFolder) {
            effectiveFolder = `${obBaseFolder}/${platformFolder}`;
          }
        }
        let obsidianMarkdown = rawMarkdown;
        // 飞书文档/51吃瓜/x6d3i 图片可能有防盗链，强制嵌入 Base64 或下载到本地
        const isFeishuDoc = metadata && metadata.sourceType === 'feishu_doc';
        const isCgSite = metadata && (metadata.sourceType === '51cg' || metadata.sourceType === 'x6d3i');
        const shouldEmbed = config.embedImages || isFeishuDoc || isCgSite;
        if (shouldEmbed) {
          try {
            const result = await UtilModule.embedImagesInMarkdown(rawMarkdown);
            if (result && result.length > 0) obsidianMarkdown = result;
          } catch (e) { console.error('[Discourse Saver] 图片嵌入失败，使用外链:', e); }
        } else if (config.downloadImages && config.restApiKey) {
          try {
            const siteName = window.location.hostname.replace(/\./g, '_');
            const basePath = effectiveFolder || obBaseFolder;
            const siteFolderPath = `${basePath}/${siteName}`;
            obsidianMarkdown = await UtilModule.downloadAndReplaceMedia(rawMarkdown, config, siteFolderPath, metadata);
          } catch (e) { console.error('[Discourse Saver] 媒体下载失败，使用外链:', e); }
        }
        await sendToObsidian(obsidianMarkdown, fileName, config, effectiveFolder);
        const obFolder = effectiveFolder || obBaseFolder;
        LogModule.add('success', `Obsidian 保存成功: ${obFolder}/${fileName}`);
        const commentInfo = comments.length > 0 ? `（含${comments.length}条评论）` : '';
        UtilModule.showNotification(`已保存到 Obsidian${commentInfo}`, 'success');
        return { success: true, target: 'Obsidian' };
      } catch (error) {
        console.error('[Discourse Saver] Obsidian 保存失败:', error);
        LogModule.add('error', `Obsidian 保存失败: ${error.message}`);
        UtilModule.showNotification('Obsidian 保存失败: ' + error.message, 'error');
        return { success: false, target: 'Obsidian', error: error.message };
      }
    }

    // 独立导出：仅保存到百度网盘
    async function saveToBaiduPanOnly(targetPostNumber = null) {
      try {
        // 该菜单为用户主动触发，只要已授权即可保存（不受保存目标勾选框限制）
        if (!BaiduPanBackupModule.getToken()) {
          throw new Error('请先在设置中授权百度网盘');
        }
        UtilModule.showNotification('正在准备保存到百度网盘...', 'info');
        const { rawMarkdown, fileName, metadata, config: cfg } = await prepareData(targetPostNumber);
        // 强制开启百度网盘标志，绕过 backupMarkdown 内部的 saveToBaiduPan 早退判断
        const baiduCfg = { ...cfg, saveToBaiduPan: true };
        // 按平台分流文件夹（在总文件夹下）
        const bdBaseFolder = cfg.baiduPanFolderPath || cfg.folderPath || 'Discourse收集箱';
        let effectiveFolder = null;
        if (cfg.usePlatformFolders && metadata && metadata.sourceType) {
          const pf = cfg.platformFolders || {};
          const st = metadata.sourceType;
          let platformFolder = pf[st] || null;
          if ((st === 'discourse' || st === 'trae') && platformFolder) {
            const siteName = UtilModule.getDiscourseSiteName(window.location.hostname, cfg);
            platformFolder = `${platformFolder}/${siteName}`;
          }
          if (platformFolder) {
            effectiveFolder = `${bdBaseFolder}/${platformFolder}`;
          }
        }
        await BaiduPanBackupModule.backupMarkdown(rawMarkdown, fileName, baiduCfg, effectiveFolder);
        const bdFolder = effectiveFolder || bdBaseFolder;
        LogModule.add('success', `百度网盘保存成功: ${bdFolder}/${fileName}`);
        UtilModule.showNotification('已保存到百度网盘', 'success');
        return { success: true, target: '百度网盘' };
      } catch (error) {
        console.error('[Discourse Saver] 百度网盘保存失败:', error);
        LogModule.add('error', `百度网盘保存失败: ${error.message}`);
        UtilModule.showNotification('百度网盘保存失败: ' + error.message, 'error');
        return { success: false, target: '百度网盘', error: error.message };
      }
    }

    // 独立导出：仅保存到 Notion
    async function saveToNotionOnly(targetPostNumber = null) {
      try {
        const config = ConfigModule.get();
        if (!config.notionToken || !config.notionDatabaseId) {
          throw new Error('请先配置 Notion Token 和 Database ID');
        }

        UtilModule.showNotification('正在准备保存到 Notion...', 'info');
        const { markdown, metadata, comments } = await prepareData(targetPostNumber);
        await saveToNotion(markdown, metadata, config);
        const commentInfo = comments.length > 0 ? `（含${comments.length}条评论）` : '';
        UtilModule.showNotification(`已保存到 Notion${commentInfo}`, 'success');
        return { success: true, target: 'Notion' };
      } catch (error) {
        console.error('[Discourse Saver] Notion 保存失败:', error);
        UtilModule.showNotification('Notion 保存失败: ' + error.message, 'error');
        return { success: false, target: 'Notion', error: error.message };
      }
    }

    // 独立导出：仅导出为 HTML
    async function exportHtmlOnly(targetPostNumber = null) {
      try {
        UtilModule.showNotification('正在准备导出 HTML...', 'info');
        const { markdown, fileName, metadata, comments, config } = await prepareData(targetPostNumber);
        downloadAsHtml(markdown, metadata, fileName, config);
        const commentInfo = comments.length > 0 ? `（含${comments.length}条评论）` : '';
        UtilModule.showNotification(`已导出 HTML${commentInfo}`, 'success');
        return { success: true, target: 'HTML' };
      } catch (error) {
        console.error('[Discourse Saver] HTML 导出失败:', error);
        UtilModule.showNotification('HTML 导出失败: ' + error.message, 'error');
        return { success: false, target: 'HTML', error: error.message };
      }
    }

    // 主保存函数（并行处理所有选中的目标，Obsidian 最后执行）
    async function save(targetPostNumber = null) {
      try {
        // 多楼层批量保存：逐个执行
        if (Array.isArray(targetPostNumber)) {
          const floors = targetPostNumber;
          UtilModule.showNotification(`正在批量保存 ${floors.length} 个楼层...`, 'info');
          const results = [];
          for (let i = 0; i < floors.length; i++) {
            const floor = floors[i];
            UtilModule.showNotification(`正在保存第 ${floor} 楼（${i + 1}/${floors.length}）...`, 'info');
            const result = await save(Number(floor) === 1 ? null : String(floor));
            results.push(result);
            // Obsidian 保存会跳转页面，批量时只保存到飞书
            if (i < floors.length - 1) await new Promise(r => setTimeout(r, 800));
          }
          const successCount = results.filter(r => r && r.succeeded && r.succeeded.length > 0).length;
          UtilModule.showNotification(`批量保存完成：${successCount}/${floors.length} 成功`, successCount > 0 ? 'success' : 'error');
          return { succeeded: [`批量${successCount}个`], failed: [] };
        }

        const config = ConfigModule.get();
        console.log('[Discourse Saver] 配置:', config);

        // 检查是否至少选择了一个保存目标
        if (!config.saveToObsidian && !config.saveToFeishu && !config.saveToBaiduPan) {
          UtilModule.showNotification('请在设置中至少选择一个保存目标', 'warning');
          return;
        }

        // 提取数据（只提取一次）
        UtilModule.showNotification('正在提取内容...', 'info');
        const { rawMarkdown, fileName, metadata, comments } = await prepareData(targetPostNumber);
        LogModule.add('info', `内容提取完成: ${metadata.title || fileName} [${metadata.sourceType}] ${comments.length > 0 ? `含${comments.length}条评论` : ''}`);

        // 按平台分流文件夹（如果启用）
        // 分流文件夹在"默认保存文件夹路径"（总文件夹）下，如：Discourse收集箱/公众号/
        const baseFolder = config.folderPath || 'Discourse收集箱';
        let effectiveFolderPath = baseFolder;
        if (config.usePlatformFolders && metadata && metadata.sourceType) {
          const platformFolders = config.platformFolders || {};
          const st = metadata.sourceType;
          let platformFolder = platformFolders[st];
          // 论坛类(discourse/trae)进一步按站点名细分子文件夹
          if ((st === 'discourse' || st === 'trae') && platformFolder) {
            const siteName = UtilModule.getDiscourseSiteName(window.location.hostname, config);
            platformFolder = `${platformFolder}/${siteName}`;
          }
          if (platformFolder) {
            effectiveFolderPath = `${baseFolder}/${platformFolder}`;
          }
        }

        // 构建任务列表（Obsidian 单独处理，因为会跳转页面）
        const tasks = [];
        const taskNames = [];
        let shouldSaveToObsidian = false;
        if (config.saveToFeishu && config.feishuAppId && config.feishuAppSecret && config.feishuAppToken && config.feishuTableId) {
          tasks.push(
            saveToFeishu(rawMarkdown, metadata, config)
              .then(() => ({ success: true, target: '飞书' }))
              .catch(e => ({ success: false, target: '飞书', error: e.message }))
          );
          taskNames.push('飞书');
        }

        // 百度网盘备份（传入按平台分流后的文件夹路径）
        if (config.saveToBaiduPan && BaiduPanBackupModule.getToken()) {
          tasks.push(
            BaiduPanBackupModule.backupMarkdown(rawMarkdown, fileName, config, effectiveFolderPath)
              .then(() => ({ success: true, target: '百度网盘' }))
              .catch(e => ({ success: false, target: '百度网盘', error: e.message }))
          );
          taskNames.push('百度网盘');
        }

        // 记录是否需要保存到 Obsidian（最后执行）
        if (config.saveToObsidian) {
          shouldSaveToObsidian = true;
          taskNames.push('Obsidian');
        }

        if (taskNames.length === 0) {
          if (config.saveToFeishu && (!config.feishuAppId || !config.feishuAppSecret || !config.feishuAppToken || !config.feishuTableId)) {
            UtilModule.showNotification('飞书配置不完整，请在设置中填写 App ID/Secret/Token/Table ID', 'warning');
          } else {
            UtilModule.showNotification('没有可执行的保存任务，请检查设置', 'warning');
          }
          return;
        }

        // 显示正在保存
        UtilModule.showNotification(`正在保存到 ${taskNames.join('、')}...`, 'info');

        // 先并行执行飞书任务
        let results = [];
        if (tasks.length > 0) {
          results = await Promise.allSettled(tasks);
        }

        // 统计结果
        const succeeded = [];
        const failed = [];

        // tasks 数组只含非 Obsidian 任务（Obsidian 单独最后执行），results 与之一一对应
        const nonObsidianTaskNames = taskNames.filter(t => t !== 'Obsidian');
        results.forEach((result, index) => {
          if (result.status === 'fulfilled' && result.value.success) {
            succeeded.push(result.value.target);
            LogModule.add('success', `${result.value.target} 保存成功: ${fileName} → ${effectiveFolderPath}`);
          } else {
            const target = result.status === 'fulfilled' ? result.value.target : nonObsidianTaskNames[index];
            const error = result.status === 'fulfilled' ? result.value.error : result.reason?.message;
            failed.push({ target, error });
            LogModule.add('error', `${target} 保存失败: ${error || '未知错误'}`);
            console.error(`[Discourse Saver] ${target} 保存失败:`, error);
          }
        });

        // 显示并行任务结果（如果有）
        const commentInfo = comments.length > 0 ? `（含${comments.length}条评论）` : '';

        if (succeeded.length > 0 && !shouldSaveToObsidian) {
          // 没有 Obsidian 任务，直接显示最终结果
          if (failed.length === 0) {
            UtilModule.showNotification(`已保存到 ${succeeded.join('、')}${commentInfo}`, 'success');
          } else {
            const failDetail = failed.map(f => `${f.target}: ${f.error || '未知错误'}`).join('；');
            UtilModule.showNotification(
              `已保存到 ${succeeded.join('、')}${commentInfo}，失败: ${failDetail}`,
              'warning'
            );
          }
        } else if (failed.length > 0 && !shouldSaveToObsidian) {
          const failDetail = failed.map(f => `${f.target}: ${f.error || '未知错误'}`).join('；');
          UtilModule.showNotification(`保存失败: ${failDetail}`, 'error');
        }

        // 执行 Obsidian 保存（会跳转页面，所以放在最后）
        if (shouldSaveToObsidian) {
          // 先显示其他任务的结果
          if (succeeded.length > 0) {
            const msg = `${succeeded.join('、')} 已完成${commentInfo}，正在打开 Obsidian...`;
            UtilModule.showNotification(msg, 'info');
          } else if (failed.length > 0) {
            const failDetail = failed.map(f => `${f.target}: ${f.error || '未知错误'}`).join('；');
            UtilModule.showNotification(`${failDetail}，正在打开 Obsidian...`, 'warning');
          } else {
            UtilModule.showNotification('正在打开 Obsidian...', 'info');
          }

          // OB 专属图片处理（embedImages / downloadImages），失败则 fallback 外链
          // 飞书文档/51吃瓜/x6d3i 图片可能有防盗链，强制嵌入 Base64
          let obsidianMarkdown = rawMarkdown;
          const isFeishu = metadata && metadata.sourceType === 'feishu_doc';
          const isCg = metadata && (metadata.sourceType === '51cg' || metadata.sourceType === 'x6d3i');
          const doEmbed = config.embedImages || isFeishu || isCg;
          if (doEmbed) {
            try {
              UtilModule.showNotification('正在嵌入图片...', 'info');
              const result = await UtilModule.embedImagesInMarkdown(rawMarkdown, (c, t) => {
                UtilModule.showNotification(`正在嵌入图片 ${c}/${t}...`, 'info');
              });
              if (result && result.length > 0) obsidianMarkdown = result;
            } catch (e) {
              console.error('[Discourse Saver] 图片嵌入失败，使用外链:', e);
              UtilModule.showNotification('图片嵌入失败，使用外链', 'warning');
            }
          } else if (config.downloadImages && config.restApiKey) {
            try {
              const siteName = window.location.hostname.replace(/\./g, '_');
              const basePath = effectiveFolderPath || config.folderPath || 'Discourse收集箱';
              const siteFolderPath = `${basePath}/${siteName}`;
              obsidianMarkdown = await UtilModule.downloadAndReplaceMedia(rawMarkdown, config, siteFolderPath, metadata);
            } catch (e) {
              console.error('[Discourse Saver] 媒体下载失败，使用外链:', e);
              UtilModule.showNotification('媒体下载失败，使用外链', 'warning');
            }
          }

          // 等待一段时间让用户看到通知
          await new Promise(resolve => setTimeout(resolve, 1500));

          try {
            await sendToObsidian(obsidianMarkdown, fileName, config, effectiveFolderPath);
            succeeded.push('Obsidian');
            LogModule.add('success', `Obsidian 保存成功: ${effectiveFolderPath}/${fileName}`);
          } catch (e) {
            failed.push({ target: 'Obsidian', error: e.message });
            LogModule.add('error', `Obsidian 保存失败: ${e.message}`);
            console.error('[Discourse Saver] Obsidian 保存失败:', e);
            UtilModule.showNotification('Obsidian 打开失败: ' + e.message, 'error');
          }
        }

        return { succeeded, failed };

      } catch (error) {
        console.error('[Discourse Saver] 保存失败:', error);
        UtilModule.showNotification('保存失败: ' + error.message, 'error');
        return { succeeded: [], failed: [{ target: 'all', error: error.message }] };
      }
    }

    async function saveImagesOnly() {
      try {
        UtilModule.showNotification('正在提取图片...', 'info');
        let extracted;
        const st = ExtractModule.getSiteType();
        if (st === 'feishu_doc') {
          extracted = await FeishuDocModule.extractFeishuDocContent();
        } else {
          extracted = ExtractModule.extractContent();
        }
        if (!extracted || (!extracted.contentHTML && !extracted.contentMarkdown)) throw new Error('未找到可保存的正文内容');

        const normalizeImageUrl = (raw) => {
          const v = String(raw || '').trim();
          if (!v) return '';
          if (/^data:image/i.test(v)) return '';
          if (/^https?:\/\/[^)\s]*data:image/i.test(v)) return '';
          if (/^https?:\/\//i.test(v)) return v;
          if (v.startsWith('//')) return 'https:' + v;
          if (v.startsWith('/')) return window.location.origin + v;
          return '';
        };

        const imageUrls = new Set();

        // 飞书云文档：从 images 数组和 Markdown 中提取图片
        if (extracted.images && extracted.images.length > 0) {
          extracted.images.forEach(u => { const abs = normalizeImageUrl(u); if (abs) imageUrls.add(abs); });
        }
        if (extracted.contentMarkdown) {
          const mdImgRegex = /!\[.*?\]\((https?:\/\/[^)]+)\)/g;
          let mdMatch;
          while ((mdMatch = mdImgRegex.exec(extracted.contentMarkdown)) !== null) {
            const abs = normalizeImageUrl(mdMatch[1]);
            if (abs) imageUrls.add(abs);
          }
        }

        const wrap = document.createElement('div');
        wrap.innerHTML = extracted.contentHTML || '';
        wrap.querySelectorAll('img').forEach((img) => {
          const rawCandidates = [
            img.getAttribute('data-src'),
            img.getAttribute('data-original'),
            img.getAttribute('data-actualsrc'),
            img.getAttribute('data-lazy-src'),
            img.getAttribute('src')
          ];
          for (const raw of rawCandidates) {
            const abs = normalizeImageUrl(raw);
            if (abs) {
              imageUrls.add(abs);
              break;
            }
          }
        });

        // 兜底：从 HTML 字符串直接提取 data-src / src
        const rawHtml = extracted.contentHTML || '';
        const attrRegex = /\b(?:data-src|data-original|data-actualsrc|data-lazy-src|src)\s*=\s*["']([^"']+)["']/gi;
        let mm;
        while ((mm = attrRegex.exec(rawHtml)) !== null) {
          const abs = normalizeImageUrl(mm[1]);
          if (abs) imageUrls.add(abs);
        }

        const urls = Array.from(imageUrls);
        if (urls.length === 0) {
          UtilModule.showNotification('当前页面没有可下载图片', 'warning');
          LogModule.add('error', '图片提取为空');
          return { success: false, target: '图片', error: 'no_images' };
        }
        LogModule.add('info', `图片提取完成，共 ${urls.length} 张`);

        const baseName = UtilModule.sanitizeFileName(extracted.title || 'media');
        let ok = 0;
        let fail = 0;
        const failedUrls = [];
        const absoluteRefs = [];

        for (let i = 0; i < urls.length; i++) {
          try {
            const resp = await UtilModule.retryWithBackoff(async () => {
              const r = await gmFetch(urls[i], {
                method: 'GET',
                responseType: 'blob',
                headers: {
                  Referer: window.location.href,
                  Origin: window.location.origin
                }
              });
              if (!r.ok && UtilModule.shouldRetryStatus(r.status)) {
                throw new Error(`HTTP ${r.status}`);
              }
              return r;
            }, {
              retries: 3,
              baseDelayMs: 500,
              factor: 2,
              classifyError: (e) => UtilModule.classifyDownloadError(e)
            });
            const blob = resp.response;
            const extMatch = urls[i].match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)(?:$|[?#])/i);
            const mime = (blob && blob.type) ? blob.type.toLowerCase() : '';
            const mimeExt = mime.includes('png') ? 'png' :
              mime.includes('webp') ? 'webp' :
              mime.includes('gif') ? 'gif' :
              mime.includes('svg') ? 'svg' :
              mime.includes('bmp') ? 'bmp' : 'jpg';
            const ext = extMatch ? extMatch[1].toLowerCase() : mimeExt;
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `${baseName}-img-${String(i + 1).padStart(2, '0')}.${ext}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(a.href), 1500);
            // Edge 浏览器多文件下载保护：每张图片间隔 600ms 避免被拦截
            if (i < urls.length - 1) await new Promise(r => setTimeout(r, 600));
            ok++;
            absoluteRefs.push(`![${baseName}-img-${String(i + 1).padStart(2, '0')}](${urls[i]})`);
            LogModule.add('success', `图片下载成功 #${i + 1}`);
          } catch (err) {
            fail++;
            failedUrls.push(urls[i]);
            const reason = UtilModule.classifyDownloadError(err);
            const detail = err && err.message ? err.message : 'unknown error';
            LogModule.add('error', `图片下载失败 #${i + 1} (${reason}: ${detail})`);
          }
        }

        if (absoluteRefs.length > 0) {
          const refText = absoluteRefs.join('\n');
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              await navigator.clipboard.writeText(refText);
            } else {
              GM_setClipboard(refText, 'text');
            }
            LogModule.add('success', `绝对引用已复制到剪贴板（${absoluteRefs.length}条）`);
          } catch (e) {
            LogModule.add('error', `复制绝对引用失败: ${e.message}`);
          }
        }

        if (ok > 0) {
          if (fail > 0) {
            UtilModule.showNotification(`图片提取成功 ${urls.length} 张，但下载失败 ${fail} 张（成功 ${ok} 张）`, 'warning');
            LogModule.add('info', `图片提取成功 ${urls.length} 张，下载成功 ${ok} 张，失败 ${fail} 张`);
          } else {
            UtilModule.showNotification(`图片下载完成：成功 ${ok} 张`, 'success');
          }
          return { success: true, target: '图片', ok, fail, failedUrls };
        }
        UtilModule.showNotification('图片下载失败，请稍后重试', 'error');
        return { success: false, target: '图片', error: 'all_failed' };
      } catch (error) {
        console.error('[Discourse Saver] 图片下载失败:', error);
        UtilModule.showNotification('图片下载失败: ' + error.message, 'error');
        return { success: false, target: '图片', error: error.message };
      }
    }

    // 导出所有函数
    return {
      save,                    // 根据配置保存（并行）
      saveToObsidianOnly,      // 仅保存到 Obsidian
      saveToFeishuOnly,        // 仅保存到飞书
      saveToBaiduPanOnly,      // 仅保存到百度网盘
      saveImagesOnly,          // 仅保存图片
      testNotionConnection,    // 测试 Notion 连接
      testFeishuConnection,    // 测试飞书连接
      downloadLastLargeFile,   // 备选：下载大文件
      // v0.8.2: 暴露底层函数给翻译后保存使用
      sendToObsidian,
      saveToFeishu,
      prepareData
    };
  })();

  // ============================================================
  // 模块5.5: 百度网盘备份 (BaiduPanBackupModule)
  // ============================================================
  const BaiduPanBackupModule = (function() {
    const OAUTH_BASE = 'https://openapi.baidu.com/oauth/2.0';
    const PAN_BASE   = 'https://pan.baidu.com/rest/2.0/xpan';
    const PCS_BASE   = 'https://d.pcs.baidu.com/rest/2.0/pcs';
    const SMALL_LIMIT = 4 * 1024 * 1024; // 4MB

    // 百度网盘文件名非法字符
    const BAIDU_ILLEGAL_CHARS = ['%', '\\', ':', '*', '?', '<', '>', '|', '"', '\u201C', '\u201D', '\u2018', '\u2019', '#', '^', '[', ']', '{', '}', '!', '`', '~', '=', '+', ';', '@', '&', '$'];

    function buildQuery(params) {
      return Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== '')
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&');
    }

    function sanitizeFilename(name) {
      // 与 sanitizeFileName 统一规则：全角替代保持可读性
      let safe = String(name || '');
      safe = safe.replace(/[/\\]/g, '／');
      safe = safe.replace(/:/g, '：');
      safe = safe.replace(/\*/g, '＊');
      safe = safe.replace(/\?/g, '？');
      safe = safe.replace(/"/g, '＂');
      safe = safe.replace(/</g, '＜').replace(/>/g, '＞');
      safe = safe.replace(/\|/g, '｜');
      safe = safe.replace(/[#^[\]{}!\`~=+;%@&$]/g, '');
      safe = safe.replace(/[\u201C\u201D\u2018\u2019\u300C\u300D\u300E\u300F]/g, '');
      safe = safe.replace(/[\x00-\x1F\x7F]/g, '');
      safe = safe.replace(/^[\s.]+|[\s.]+$/g, '');
      safe = safe.replace(/\s+/g, ' ');
      safe = safe.trim();
      if (/^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i.test(safe)) safe = '_' + safe;
      return safe || '_untitled';
    }

    // SparkMD5 精简内联 - 核心算法接收"二进制字符串"（每字符 0-255）
    // md5String(str)：UTF-8 文本 hash；md5Bytes(uint8)：字节数组 hash（分片上传用）
    function _md5Core(binStr) {
      function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0; a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0; d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0; c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0; b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0; a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0; d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0; c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0; b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0; a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0; d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0; c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0; b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0; a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0; d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0; c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0; b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0; a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0; d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0; c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0; b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0; a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0; d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0; c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0; b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0; a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0; d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0; c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0; b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0; a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0; d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0; c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0; b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0; a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0; d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0; c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0; b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0; a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0; d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0; c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0; b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0; a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0; d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0; c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0; b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0; a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0; d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0; c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0; b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0; a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0; d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0; c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0; b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0; a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0; d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0; c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0; b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0; a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0; d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0; c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0; b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0; a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0; d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0; c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0; b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0; x[1] = b + x[1] | 0; x[2] = c + x[2] | 0; x[3] = d + x[3] | 0;
      }
      function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4)
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i+1) << 8) + (s.charCodeAt(i+2) << 16) + (s.charCodeAt(i+3) << 24);
        return md5blks;
      }
      function rhex(n) {
        var s = '', j, o = '0123456789abcdef';
        for (j = 0; j < 4; j++) s += o.charAt((n >> (j * 8 + 4)) & 0x0F) + o.charAt((n >> (j * 8)) & 0x0F);
        return s;
      }
      function hex(x) { for (var i = 0; i < x.length; i++) x[i] = rhex(x[i]); return x.join(''); }
      function md5(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, tail, tmp;
        for (i = 64; i <= n; i += 64) md5cycle(state, md5blk(s.substring(i - 64, i)));
        s = s.substring(i - 64);
        tail = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        for (i = 0; i < s.length; i++) tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) { md5cycle(state, tail); tail = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; }
        tmp = n * 8; tail[14] = tmp & 0xFFFFFFFF; tail[15] = 0;
        md5cycle(state, tail);
        return hex(state);
      }
      return md5(binStr);
    }

    // UTF-8 文本 MD5
    function md5String(str) {
      return _md5Core(unescape(encodeURIComponent(str)));
    }

    // 字节数组 MD5（Uint8Array），分块拼成二进制字符串避免栈溢出
    function md5Bytes(bytes) {
      var s = '';
      var CHUNK = 0x8000;
      for (var i = 0; i < bytes.length; i += CHUNK) {
        s += String.fromCharCode.apply(null, bytes.subarray(i, Math.min(i + CHUNK, bytes.length)));
      }
      return _md5Core(s);
    }

    // 获取 token（从 GM 存储读取）
    function getToken() {
      return GM_getValue('baiduPanToken', null);
    }
    function saveToken(tok) {
      GM_setValue('baiduPanToken', tok);
    }

    // 刷新 access token
    async function refreshToken(config) {
      const tok = getToken();
      if (!tok || !tok.refreshToken) throw new Error('百度网盘未授权，请先在设置中完成授权');
      const qs = buildQuery({
        grant_type: 'refresh_token',
        refresh_token: tok.refreshToken,
        client_id: config.baiduPanClientId,
        client_secret: config.baiduPanClientSecret
      });
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'GET',
          url: `${OAUTH_BASE}/token?${qs}`,
          onload: (resp) => {
            try {
              const res = JSON.parse(resp.responseText);
              if (res.error) {
                const errMsg = res.error === 'expired_token'
                  ? '百度网盘授权已过期，请在设置中重新授权'
                  : res.error === 'invalid_grant'
                    ? '百度网盘授权已失效（可能被手动撤销），请重新授权'
                    : `百度网盘Token刷新失败: ${res.error_description || res.error}`;
                reject(new Error(errMsg));
                return;
              }
              const newTok = {
                accessToken: res.access_token,
                refreshToken: res.refresh_token || tok.refreshToken,
                expiresAt: Date.now() + res.expires_in * 1000,
                scope: res.scope || tok.scope,
                username: tok.username
              };
              saveToken(newTok);
              resolve(newTok);
            } catch (e) { reject(new Error('百度网盘Token响应解析失败，请检查网络')); }
          },
          onerror: () => reject(new Error('百度网盘Token刷新网络失败，请检查网络连接'))
        });
      });
    }

    // 获取有效的 access token
    async function getAccessToken(config) {
      let tok = getToken();
      if (!tok) throw new Error('百度网盘未授权，请先在设置中完成授权');
      // 提前 30 分钟刷新（保持 Token 尽量新鲜，减少过期概率）
      if (Date.now() >= tok.expiresAt - 30 * 60 * 1000) {
        tok = await refreshToken(config);
      }
      return tok.accessToken;
    }

    // 通用 API 请求（GM_xmlhttpRequest 封装）
    function apiRequest(method, url, data, headers) {
      return new Promise((resolve, reject) => {
        const opts = {
          method,
          url,
          headers: headers || {},
          onload: (resp) => {
            if (resp.status >= 400) {
              try { const e = JSON.parse(resp.responseText); reject(new Error(`HTTP ${resp.status}: ${e.error_description || e.errmsg || resp.statusText}`)); }
              catch (_) { reject(new Error(`HTTP ${resp.status}: ${resp.statusText || '请求失败'}`)); }
              return;
            }
            try {
              resolve(JSON.parse(resp.responseText));
            } catch (e) {
              reject(new Error(`API响应解析失败: ${resp.status} - ${(resp.responseText || '').slice(0, 100)}`));
            }
          },
          onerror: (e) => reject(new Error('网络请求失败')),
          ontimeout: () => reject(new Error('请求超时'))
        };
        if (data && method === 'POST') {
          opts.data = data;
          if (!opts.headers['Content-Type']) opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        GM_xmlhttpRequest(opts);
      });
    }

    // 创建目录（递归确保存在）
    async function ensureFolder(path, accessToken) {
      const parts = path.replace(/^\//, '').split('/');
      let cur = '';
      for (const p of parts) {
        cur += '/' + p;
        try {
          const res = await apiRequest('POST', `${PAN_BASE}/file?method=create`,
            buildQuery({ path: cur, isdir: 1, rtype: 0, access_token: accessToken }),
            { 'Content-Type': 'application/x-www-form-urlencoded' }
          );
          // errno -8 或 111 = 已存在，正常忽略
          if (res.errno && res.errno !== -8 && res.errno !== 111 && res.errno !== 0) {
            // errno -6 = 路径不存在, -7 = 目录名非法, 12 = 路径超限
            const errMap = { '-6': '上级路径不存在', '-7': '目录名含非法字符', '12': '路径过长', '2': '参数错误' };
            const hint = errMap[String(res.errno)] || `错误码 ${res.errno}`;
            throw new Error(`创建目录 "${cur}" 失败：${hint}`);
          }
        } catch (e) {
          if (e.message.includes('创建目录')) throw e; // 已经是我们的错误，继续抛出
          throw new Error(`创建目录 "${cur}" 网络失败：${e.message}`);
        }
      }
    }

    // 上传单个分片（superfile2），返回该块在服务端确认的 MD5
    function uploadBlock(remotePath, uploadId, partseq, blockBytes, accessToken) {
      const encoder = new TextEncoder();
      const uploadQs = buildQuery({
        method: 'upload', type: 'tmpfile', path: remotePath,
        uploadid: uploadId, partseq: partseq, access_token: accessToken
      });
      const boundary = '----BaiduPanUpload' + Math.random().toString(36).slice(2);
      const filename = remotePath.split('/').pop();
      const headStr = `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${filename}"\r\nContent-Type: application/octet-stream\r\n\r\n`;
      const tailStr = `\r\n--${boundary}--\r\n`;
      const headBuf = encoder.encode(headStr);
      const tailBuf = encoder.encode(tailStr);
      const body = new Uint8Array(headBuf.byteLength + blockBytes.byteLength + tailBuf.byteLength);
      body.set(headBuf, 0);
      body.set(blockBytes, headBuf.byteLength);
      body.set(tailBuf, headBuf.byteLength + blockBytes.byteLength);

      // 使用 Blob 兼容 ScriptCat（ScriptCat 不支持 ArrayBuffer 作为 data）
      const uploadBlob = new Blob([body], { type: `multipart/form-data; boundary=${boundary}` });
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'POST',
          url: `${PCS_BASE}/superfile2?${uploadQs}`,
          headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` },
          data: uploadBlob,
          onload: (resp) => {
            if (resp.status >= 400) { reject(new Error(`上传分片#${partseq} HTTP错误: ${resp.status}`)); return; }
            try {
              const j = JSON.parse(resp.responseText);
              if (!j.md5) { reject(new Error(`上传分片#${partseq} 未返回有效MD5`)); return; }
              resolve(j.md5);
            } catch (e) { reject(new Error(`上传分片#${partseq} 响应解析失败`)); }
          },
          onerror: () => reject(new Error(`上传分片#${partseq} 网络失败`)),
          ontimeout: () => reject(new Error(`上传分片#${partseq} 超时`))
        });
      });
    }

    // 上传文件（支持任意大小，自动按 4MB 分片）
    async function uploadFile(remotePath, content, config) {
      const accessToken = await getAccessToken(config);
      const encoder = new TextEncoder();
      // content 可以是字符串（Markdown）或 Uint8Array（二进制）
      const buf = (content instanceof Uint8Array) ? content : encoder.encode(content);
      const size = buf.byteLength;

      // 确保目录存在
      const dir = remotePath.substring(0, remotePath.lastIndexOf('/'));
      if (dir) await ensureFolder(dir, accessToken);

      // 按 4MB 切分并计算每片 MD5（block_list）
      const BLOCK = SMALL_LIMIT; // 4MB
      const blocks = [];
      const blockMd5s = [];
      for (let off = 0; off < size; off += BLOCK) {
        const slice = buf.subarray(off, Math.min(off + BLOCK, size));
        blocks.push(slice);
        blockMd5s.push(md5Bytes(slice));
      }
      // 空文件兜底（百度网盘要求至少一个块）
      if (blocks.length === 0) {
        const empty = new Uint8Array(0);
        blocks.push(empty);
        blockMd5s.push(md5Bytes(empty));
      }

      // 1. precreate（预创建）
      const preRes = await apiRequest('POST', `${PAN_BASE}/file?method=precreate`,
        buildQuery({
          path: remotePath,
          size: size,
          isdir: 0,
          block_list: JSON.stringify(blockMd5s),
          autoinit: 1,
          rtype: 3,  // 覆盖同名文件
          access_token: accessToken
        }),
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      );

      if (preRes.errno !== 0) throw new Error(`预创建失败 [${preRes.errno}]`);
      // 秒传成功（整文件已存在）
      if (preRes.return_type === 2) {
        console.log('[BaiduPan] 秒传成功');
        return;
      }

      const uploadId = preRes.uploadid;
      // block_list 指明哪些分片还需要上传；缺省则全部上传
      const needList = Array.isArray(preRes.block_list) && preRes.block_list.length
        ? preRes.block_list
        : blocks.map((_, i) => i);

      // 2. 逐片上传（superfile2），收集服务端返回的 MD5
      const confirmedMd5 = blockMd5s.slice(); // 默认用本地 MD5
      for (const seq of needList) {
        const md5 = await uploadBlock(remotePath, uploadId, seq, blocks[seq], accessToken);
        confirmedMd5[seq] = md5;
        if (blocks.length > 1) {
          console.log(`[BaiduPan] 已上传分片 ${seq + 1}/${blocks.length}`);
        }
      }

      // 3. create（合并文件）
      const createRes = await apiRequest('POST', `${PAN_BASE}/file?method=create`,
        buildQuery({
          path: remotePath,
          size: size,
          isdir: 0,
          block_list: JSON.stringify(confirmedMd5),
          uploadid: uploadId,
          rtype: 3,
          access_token: accessToken
        }),
        { 'Content-Type': 'application/x-www-form-urlencoded' }
      );

      if (createRes.errno === -7) throw new Error('文件名包含百度网盘不支持的字符，请重命名');
      if (createRes.errno !== 0) throw new Error(`创建文件失败 [${createRes.errno}]`);
      console.log('[BaiduPan] 上传成功:', remotePath, `(${blocks.length} 分片, ${size} 字节)`);
    }

    // 获取设备授权码（OAuth Device Flow）
    async function getDeviceCode(config) {
      const qs = buildQuery({
        client_id: config.baiduPanClientId,
        scope: 'basic netdisk',
        response_type: 'device_code'
      });
      const res = await apiRequest('GET', `${OAUTH_BASE}/device/code?${qs}`);
      if (res.error) throw new Error(`获取设备码失败: ${res.error_description}`);
      return {
        deviceCode: res.device_code,
        userCode: res.user_code,
        verificationUrl: res.verification_url,
        expiresIn: res.expires_in,
        interval: res.interval || 5
      };
    }

    // 轮询设备授权（百度 OAuth Device Flow 在用户未完成授权时返回 HTTP 400 + authorization_pending，属正常行为）
    async function pollForToken(deviceCode, config) {
      const qs = buildQuery({
        grant_type: 'device_token',
        code: deviceCode,
        client_id: config.baiduPanClientId,
        client_secret: config.baiduPanClientSecret
      });
      // 不使用 apiRequest（它会对 HTTP 400 直接 reject），需要手动处理响应
      const res = await new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'GET',
          url: `${OAUTH_BASE}/token?${qs}`,
          onload: (resp) => {
            try {
              resolve(JSON.parse(resp.responseText));
            } catch (e) {
              reject(new Error(`授权响应解析失败: ${(resp.responseText || '').slice(0, 100)}`));
            }
          },
          onerror: () => reject(new Error('授权网络请求失败，请检查网络连接')),
          ontimeout: () => reject(new Error('授权请求超时'))
        });
      });
      if (res.error === 'authorization_pending' || res.error === 'slow_down') return null;
      if (res.error) throw new Error(`授权失败: ${res.error_description || res.error}`);
      // 获取用户名
      let username = '';
      try {
        const uRes = await apiRequest('GET', `${PAN_BASE}/nas?method=uinfo&access_token=${res.access_token}`);
        username = uRes.baidu_name || uRes.netdisk_name || '';
      } catch (_) {}
      const tok = {
        accessToken: res.access_token,
        refreshToken: res.refresh_token,
        expiresAt: Date.now() + res.expires_in * 1000,
        scope: res.scope,
        username
      };
      saveToken(tok);
      return tok;
    }

    // 测试连接（获取网盘容量）
    async function testConnection(config) {
      const accessToken = await getAccessToken(config);
      const res = await apiRequest('GET', `https://pan.baidu.com/api/quota?checkfree=1&checkexpire=1&access_token=${accessToken}`);
      if (res.errno !== 0) throw new Error(`获取配额失败 [${res.errno}]`);
      return { total: res.total, used: res.used, username: getToken()?.username || '' };
    }

    // 注销授权
    function revokeAuth() {
      const tok = getToken();
      if (tok && tok.accessToken) {
        GM_xmlhttpRequest({
          method: 'GET',
          url: `https://openapi.baidu.com/rest/2.0/auth/revokeAuthorization?access_token=${tok.accessToken}`,
          onload: () => {},
          onerror: () => {}
        });
      }
      saveToken(null);
    }

    // 检查指定目录下是否已存在同名文件
    async function fileExists(dir, filename, accessToken) {
      try {
        const res = await apiRequest('GET',
          `${PAN_BASE}/file?method=list&dir=${encodeURIComponent(dir)}&access_token=${accessToken}`);
        if (res.errno !== 0 || !Array.isArray(res.list)) return false; // 目录不存在等同不冲突
        return res.list.some(item => item.server_filename === filename);
      } catch (_) {
        return false; // 查询失败时不阻断上传
      }
    }

    // 在重名时寻找下一个可用文件名：name.md → name(1).md → name(2).md ...
    async function nextAvailableName(dir, filename, accessToken) {
      const m = filename.match(/^(.*?)(\.[^.]+)$/);
      const base = m ? m[1] : filename;
      const ext = m ? m[2] : '';
      let i = 1;
      let candidate = `${base}(${i})${ext}`;
      while (await fileExists(dir, candidate, accessToken)) {
        i += 1;
        candidate = `${base}(${i})${ext}`;
        if (i > 999) break; // 安全上限
      }
      return candidate;
    }

    // 保存 markdown 到百度网盘
    // folderOverride: 按平台分流时传入的文件夹路径
    async function backupMarkdown(markdown, fileName, config, folderOverride) {
      if (!config.saveToBaiduPan) return;
      const tok = getToken();
      if (!tok) throw new Error('百度网盘未授权');

      const appFolder = sanitizeFilename(config.baiduPanAppFolder || 'obsidian-sync');
      const vaultName = sanitizeFilename(config.baiduPanVaultName || '精华帖子收集箱');
      // subFolder: 优先用按平台分流路径，其次用网盘专用路径，最后用 OB 路径
      const rawSubFolder = folderOverride || config.baiduPanFolderPath || config.folderPath || 'Discourse收集箱';
      const subFolder = rawSubFolder.split('/').map(seg => sanitizeFilename(seg)).join('/');

      let safeFileName = sanitizeFilename(fileName);
      // 确保文件有 .md 扩展名
      if (!/\.md$/i.test(safeFileName)) safeFileName += '.md';

      const dirPath = `/apps/${appFolder}/${vaultName}/${subFolder}`;

      // 重名冲突处理
      const mode = config.saveConflictMode || 'overwrite';
      if (mode === 'timestamp') {
        // 文件名追加时间戳，永不覆盖
        const ts = new Date();
        const pad = (n) => String(n).padStart(2, '0');
        const stamp = `${ts.getFullYear()}${pad(ts.getMonth()+1)}${pad(ts.getDate())}${pad(ts.getHours())}${pad(ts.getMinutes())}${pad(ts.getSeconds())}`;
        safeFileName = safeFileName.replace(/\.md$/i, `-${stamp}.md`);
      } else if (mode === 'prompt') {
        // 重名时询问是否追加序号（如 name(1).md）
        const accessToken = await getAccessToken(config);
        if (await fileExists(dirPath, safeFileName, accessToken)) {
          const confirmAvailable = (typeof confirm === 'function');
          if (!confirmAvailable) LogModule.add('info', `百度网盘重名：当前环境不支持弹窗确认，自动追加序号: ${safeFileName}`);
          const rename = confirmAvailable
            ? confirm(`百度网盘已存在同名文件：\n${safeFileName}\n\n点「确定」自动追加序号(1)避免覆盖，点「取消」直接覆盖原文件。`)
            : true;
          if (rename) {
            const original = safeFileName;
            safeFileName = await nextAvailableName(dirPath, safeFileName, accessToken);
            LogModule.add('info', `百度网盘重名，自动改名: ${original} → ${safeFileName}`);
          } else {
            LogModule.add('info', `百度网盘重名，用户选择覆盖: ${safeFileName}`);
          }
        }
      }
      // mode === 'overwrite'：保持原名，uploadFile 内 rtype=3 覆盖

      const remotePath = `${dirPath}/${safeFileName}`;
      LogModule.add('info', `百度网盘上传路径: ${remotePath}`);
      await uploadFile(remotePath, markdown, config);
      LogModule.add('success', `百度网盘上传完成: ${remotePath}`);
    }

    return {
      getDeviceCode,
      pollForToken,
      testConnection,
      revokeAuth,
      backupMarkdown,
      getToken,
      saveToken,
      uploadFile
    };
  })();

  // ============================================================
  // 模块5.6: 悬浮按钮 (FloatingBtnModule) — v0.8.2 新增
  // 长按弹出菜单，短按快速保存，可拖拽移动
  // ============================================================
  const FloatingBtnModule = (function() {
    let _attached = false, pressing, moved, longPressed, longTimer, sx, sy, sl, st;
    const isMobile = /android|iphone|ipad|ipod|mobile|edga\//i.test(navigator.userAgent || '');

    function mkBtn() {
      if (document.getElementById('ds-float-btn')) return;
      const sz = isMobile ? 56 : 46;
      const fp = isMobile ? { right: '12px', bottom: '100px', top: 'auto' } : { right: '16px', top: '80px', bottom: 'auto' };
      let sp = null;
      try { sp = JSON.parse(GM_getValue('ds_float_pos', 'null')); } catch (_) {}
      const hs = !!(sp && typeof sp.left === 'string' && typeof sp.top === 'string');
      const btn = document.createElement('div'); btn.id = 'ds-float-btn';
      btn.title = '星存助手（单击保存 | 长按菜单 | 拖拽移动）';
      btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z"/><path d="M5 17h14"/><path d="M8 21h8"/></svg>';
      Object.assign(btn.style, {
        position: 'fixed', zIndex: '2147483646', right: hs ? 'auto' : fp.right, top: hs ? sp.top : fp.top,
        bottom: hs ? 'auto' : fp.bottom, left: hs ? sp.left : 'auto',
        width: sz + 'px', height: sz + 'px', borderRadius: '50%',
        background: 'linear-gradient(135deg,#1f6feb,#1557b0)', boxShadow: '0 4px 16px rgba(31,111,235,.45)',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        userSelect: 'none', touchAction: 'none', transition: 'transform .1s,box-shadow .1s',
        WebkitTapHighlightColor: 'transparent'
      });

      const gp = e => { const t = e.touches ? e.touches[0] : e; return { x: t.clientX, y: t.clientY }; };
      const onStart = e => {
        pressing = true; moved = false; longPressed = false;
        const p = gp(e); sx = p.x; sy = p.y;
        const r = btn.getBoundingClientRect(); sl = r.left; st = r.top;
        btn.style.transition = 'none';
        longTimer = setTimeout(() => { if (pressing && !moved) { longPressed = true; showMenu(); } }, 600);
        e.preventDefault(); e.stopPropagation();
      };
      btn.addEventListener('mousedown', onStart);
      btn.addEventListener('touchstart', onStart, { passive: false });

      if (!_attached) { _attached = true;
        const onMove = e => {
          if (!pressing) return; const p = gp(e);
          if (Math.abs(p.x - sx) > 4 || Math.abs(p.y - sy) > 4) { moved = true; clearTimeout(longTimer); }
          if (!moved) return;
          btn.style.left = Math.max(0, Math.min(window.innerWidth - sz, sl + p.x - sx)) + 'px';
          btn.style.top = Math.max(0, Math.min(window.innerHeight - sz, st + p.y - sy)) + 'px';
          btn.style.right = 'auto'; btn.style.bottom = 'auto';
          e.preventDefault();
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('touchmove', onMove, { passive: false });
        const onEnd = e => {
          if (!pressing) return; pressing = false; clearTimeout(longTimer);
          btn.style.transition = 'transform .1s,box-shadow .1s';
          if (moved) { GM_setValue('ds_float_pos', JSON.stringify({ left: btn.style.left, top: btn.style.top })); }
          else if (!longPressed) { btn.style.transform = 'scale(.85)'; setTimeout(() => btn.style.transform = '', 120); quickSave(); }
          moved = false; longPressed = false;
          if (e) e.stopPropagation();
        };
        window.addEventListener('mouseup', onEnd);
        window.addEventListener('touchend', onEnd);
        window.addEventListener('resize', () => {
          if (btn.style.left === 'auto' || !btn.style.left) return;
          const r2 = btn.getBoundingClientRect();
          btn.style.left = Math.max(0, Math.min(window.innerWidth - sz, r2.left)) + 'px';
          btn.style.top = Math.max(0, Math.min(window.innerHeight - sz, r2.top)) + 'px';
          btn.style.right = 'auto'; btn.style.bottom = 'auto';
          GM_setValue('ds_float_pos', JSON.stringify({ left: btn.style.left, top: btn.style.top }));
        }, { passive: true });
      }
      document.body.appendChild(btn);
    }

    function quickSave() {
      const config = ConfigModule.get();
      const st = ExtractModule.getSiteType();
      if (!ExtractModule.isSiteEnabled(st)) return;
      const isDomestic = st !== 'discourse' && st !== 'trae';
      if (isDomestic && !ExtractModule.isDomesticMediaPage()) return;
      if (!isDomestic && !ExtractModule.isTopicPage()) return;
      SaveModule.save(null);
    }

    function showMenu() {
      const old = document.getElementById('ds-float-menu'); if (old) { old.remove(); return; }
      const btn = document.getElementById('ds-float-btn');
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const el = document.createElement('div'); el.id = 'ds-float-menu';
      const ver = (typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || '0.9.9';
      el.innerHTML = '<div style="padding:10px 14px 6px;font-weight:600;font-size:13px;color:#1f6feb;border-bottom:1px solid #f0f0f0;">星存助手 V' + ver + '</div>' +
        '<div class="ds-mi" data-act="save-ob">💾 仅保存到 Obsidian</div>' +
        '<div class="ds-mi" data-act="save-feishu">📊 仅保存到飞书</div>' +
        '<div class="ds-mi" data-act="save-bd">📦 仅保存到百度网盘</div>' +
        '<div class="ds-mi" data-act="copy">📋 一键复制 Markdown</div>' +
        '<div class="ds-mi" data-act="trans-save" style="color:#1f6feb;font-weight:500;">🌐 翻译文本后保存</div>' +
        '<div class="ds-mi" data-act="settings">⚙️ 设置</div>' +
        '<div class="ds-mi" data-act="logs">📋 日志</div>' +
        '<div class="ds-mi" data-act="reset" style="border-top:1px solid #f0f0f0;text-align:center;color:#999;font-size:12px;">↺ 重置位置</div>';
      el.querySelectorAll('.ds-mi').forEach(x => {
        x.style.cssText += 'padding:11px 14px;cursor:pointer;font-size:14px;border-bottom:1px solid #f0f0f0;';
        x.addEventListener('pointerover', () => x.style.background = '#eff6ff');
        x.addEventListener('pointerout', () => x.style.background = '');
      });
      const w = 230, l = Math.max(8, Math.min(r.left - w - 8, r.right + 8)), t = Math.max(8, Math.min(r.top, window.innerHeight - 360));
      Object.assign(el.style, { position: 'fixed', zIndex: '1000000', left: l + 'px', top: t + 'px', background: '#fff', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,.18)', width: w + 'px', fontSize: '14px' });
      document.body.appendChild(el);
      const ot = Date.now();
      const close = () => { el.remove(); document.removeEventListener('click', oc, true); document.removeEventListener('touchstart', oc, true); };
      const oc = e => { if (Date.now() - ot < 800) return; if (!el.contains(e.target) && e.target !== btn) close(); };
      el.querySelector('[data-act="save-ob"]').addEventListener('click', () => { close(); SaveModule.saveToObsidianOnly(); });
      el.querySelector('[data-act="save-feishu"]').addEventListener('click', () => { close(); SaveModule.saveToFeishuOnly(); });
      el.querySelector('[data-act="save-bd"]').addEventListener('click', () => { close(); SaveModule.saveToBaiduPanOnly(); });
      el.querySelector('[data-act="copy"]').addEventListener('click', () => { close(); copyMdToClipboard(); });
      el.querySelector('[data-act="trans-save"]').addEventListener('click', () => { close(); showTransSaveSubMenu(r); });
      el.querySelector('[data-act="settings"]').addEventListener('click', () => { close(); UIModule.showSettingsPanel(); });
      el.querySelector('[data-act="logs"]').addEventListener('click', () => { close(); LogModule.renderPanel(); });
      el.querySelector('[data-act="reset"]').addEventListener('click', () => {
        GM_setValue('ds_float_pos', 'null'); const b = document.getElementById('ds-float-btn');
        if (b) { b.style.left = 'auto'; b.style.right = isMobile ? '12px' : '16px'; b.style.top = isMobile ? 'auto' : '80px'; b.style.bottom = isMobile ? '100px' : 'auto'; }
        UtilModule.showNotification('位置已重置', 'success'); close();
      });
      el.addEventListener('click', e => e.stopPropagation());
      setTimeout(() => { document.addEventListener('click', oc, true); document.addEventListener('touchstart', oc, true); }, 100);
    }

    // 翻译后保存子菜单
    function showTransSaveSubMenu(btnRect) {
      const old2 = document.getElementById('ds-trans-submenu'); if (old2) { old2.remove(); return; }
      const el2 = document.createElement('div'); el2.id = 'ds-trans-submenu';
      el2.innerHTML = '<div style="padding:8px 14px;font-weight:600;font-size:12px;color:#1f6feb;border-bottom:1px solid #f0f0f0;">翻译为：</div>' +
        '<div class="ds-mi" data-lang="zh-CN">🇨🇳 中文</div>' +
        '<div class="ds-mi" data-lang="en">🇺🇸 English</div>' +
        '<div class="ds-mi" data-lang="ja">🇯🇵 日本語</div>' +
        '<div class="ds-mi" data-lang="ko">🇰🇷 한국어</div>';
      el2.querySelectorAll('.ds-mi').forEach(x => {
        x.style.cssText += 'padding:10px 14px;cursor:pointer;font-size:14px;border-bottom:1px solid #f0f0f0;';
        x.addEventListener('pointerover', () => x.style.background = '#eff6ff');
        x.addEventListener('pointerout', () => x.style.background = '');
      });
      const w2 = 160, btnH = btnRect.height || 46;
      const l2 = Math.max(8, Math.min(btnRect.left - w2 - 8, btnRect.right + 8));
      const t2 = Math.max(8, Math.min(btnRect.top + btnH + 4, window.innerHeight - 260));
      Object.assign(el2.style, { position: 'fixed', zIndex: '1000001', left: l2 + 'px', top: t2 + 'px', background: '#fff', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,.18)', width: w2 + 'px', fontSize: '14px' });
      document.body.appendChild(el2);
      const ot2 = Date.now();
      const close2 = () => { el2.remove(); document.removeEventListener('click', oc2, true); document.removeEventListener('touchstart', oc2, true); };
      const oc2 = e => { if (Date.now() - ot2 < 500) return; if (!el2.contains(e.target)) close2(); };
      el2.querySelectorAll('.ds-mi').forEach(mi => mi.addEventListener('click', () => { const lang = mi.dataset.lang; close2(); translateAndSave(lang); }));
      el2.addEventListener('click', e => e.stopPropagation());
      setTimeout(() => { document.addEventListener('click', oc2, true); document.addEventListener('touchstart', oc2, true); }, 100);
    }

    async function translateAndSave(targetLang) {
      try {
        UtilModule.showNotification('正在提取内容...', 'info');
        let extracted;
        const st = ExtractModule.getSiteType();
        if (st === 'feishu_doc') extracted = await FeishuDocModule.extractFeishuDocContent();
        else extracted = ExtractModule.extractContent();
        if (!extracted) { UtilModule.showNotification('无法提取内容', 'warning'); return; }

        // 保存原文（飞书/百度网盘/HTML 用）
        const origTitle = extracted.title;
        const origHTML = extracted.contentHTML || '';
        const origMarkdown = extracted.contentMarkdown || '';

        // 提取纯文本正文进行翻译
        const tmpDiv = document.createElement('div');
        tmpDiv.innerHTML = origHTML || '';
        const bodyText = (tmpDiv.textContent || '').replace(/\s+/g, ' ').trim();
        if (!bodyText || bodyText.length < 10) { UtilModule.showNotification('正文内容太少，无法翻译', 'warning'); return; }

        UtilModule.showNotification('正在翻译（自动检测源语言）...', 'info');
        const result = await TranslateModule.translate(bodyText.slice(0, 8000), 'auto', targetLang);
        if (!result || !result.text) { UtilModule.showNotification('翻译失败', 'error'); return; }

        const detectedLang = result.from || 'auto';
        UtilModule.showNotification('翻译完成 (' + detectedLang + '→' + targetLang + ')，正在保存...', 'info');

        // 翻译版：仅保存到 OB（外链模式，不嵌入图片）
        const translatedHtml = '<p>' + result.text.replace(/\n/g, '</p><p>') + '</p>';
        const config = ConfigModule.get();
        const cleanTitle = UtilModule.sanitizeTitleText(origTitle) + '-' + targetLang;
        const sourceType = extracted.sourceType || 'discourse';
        const meta = {
          title: cleanTitle, url: extracted.url, author: extracted.author || '',
          authorUrl: extracted.authorUrl || '', category: extracted.category || '', tags: extracted.tags || [],
          sourceType, commentCount: 0
        };
        const markdown = ConvertModule.convertToMarkdownWithComments(translatedHtml, meta, [], config);
        const fileName = UtilModule.sanitizeFileName(cleanTitle);

        // 获取平台分流文件夹
        const obBaseFolder = config.folderPath || 'Discourse收集箱';
        let effectiveFolder = obBaseFolder;
        if (config.usePlatformFolders && sourceType) {
          const pf = config.platformFolders || {};
          let platformFolder = pf[sourceType] || null;
          if ((sourceType === 'discourse' || sourceType === 'trae') && platformFolder) {
            const siteName = UtilModule.getDiscourseSiteName(window.location.hostname, config);
            platformFolder = platformFolder + '/' + siteName;
          }
          if (platformFolder) effectiveFolder = obBaseFolder + '/' + platformFolder;
        }

        // 保存翻译版到 OB + 原文到飞书/百度网盘（并行）
        const tasks = [];
        if (config.saveToObsidian) {
          tasks.push(SaveModule.sendToObsidian(markdown, fileName, config, effectiveFolder)
            .then(() => ({ ok: true, target: 'Obsidian(翻译)' }))
            .catch(e => ({ ok: false, target: 'Obsidian', error: e.message })));
        }
        if (config.saveToFeishu && config.feishuAppId && config.feishuAppSecret) {
          const origMeta = { ...meta };
          origMeta.title = UtilModule.sanitizeTitleText(origTitle);
          let origMd = origMarkdown;
          if (!origMd) {
            origMd = ConvertModule.convertToMarkdownWithComments(origHTML, origMeta, [], config);
          }
          tasks.push(SaveModule.saveToFeishu(origMd, origMeta, config)
            .then(() => ({ ok: true, target: '飞书(原文)' }))
            .catch(e => ({ ok: false, target: '飞书', error: e.message })));
        }
        if (config.saveToBaiduPan && BaiduPanBackupModule.getToken()) {
          const origMeta2 = { ...meta };
          origMeta2.title = UtilModule.sanitizeTitleText(origTitle);
          let origMd2 = origMarkdown;
          if (!origMd2) {
            origMd2 = ConvertModule.convertToMarkdownWithComments(origHTML, origMeta2, [], config);
          }
          const origFileName = UtilModule.sanitizeFileName(UtilModule.sanitizeTitleText(origTitle));
          tasks.push(BaiduPanBackupModule.backupMarkdown(origMd2, origFileName, config, effectiveFolder)
            .then(() => ({ ok: true, target: '百度网盘(原文)' }))
            .catch(e => ({ ok: false, target: '百度网盘', error: e.message })));
        }
        if (tasks.length === 0) {
          UtilModule.showNotification('请先在设置中启用保存目标', 'warning');
          return;
        }
        const results = await Promise.allSettled(tasks);
        const succeeded = results.filter(r => r.status === 'fulfilled' && r.value && r.value.ok).map(r => r.value.target);
        if (succeeded.length > 0) {
          UtilModule.showNotification(succeeded.join(' + ') + ' [' + detectedLang + '→' + targetLang + ']', 'success');
          LogModule.add('success', '翻译后保存: ' + cleanTitle + ' ' + detectedLang + '→' + targetLang + ' → ' + succeeded.join(','));
        } else {
          UtilModule.showNotification('翻译保存失败', 'error');
        }
      } catch (e) {
        UtilModule.showNotification('翻译保存失败: ' + e.message, 'error');
        LogModule.add('error', '翻译保存失败: ' + e.message);
      }
    }

    async function copyMdToClipboard() {
      try {
        UtilModule.showNotification('正在提取...', 'info');
        let extracted;
        const st = ExtractModule.getSiteType();
        if (st === 'feishu_doc') extracted = await FeishuDocModule.extractFeishuDocContent();
        else extracted = ExtractModule.extractContent();
        if (!extracted) { UtilModule.showNotification('无法提取内容', 'warning'); return; }
        const config = ConfigModule.get();
        const { sourceType, title, contentHTML, contentMarkdown, url, author, authorUrl, category, tags } = extracted;
        const cleanTitle = UtilModule.sanitizeTitleText(title);
        let markdown;
        if (contentMarkdown) {
          markdown = contentMarkdown;
        } else {
          markdown = ConvertModule.convertToMarkdownWithComments(contentHTML, { title: cleanTitle, url, author, authorUrl, category, tags, sourceType }, [], config);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) await navigator.clipboard.writeText(markdown);
        else GM_setClipboard(markdown, 'text');
        UtilModule.showNotification('Markdown 已复制到剪贴板', 'success');
        LogModule.add('success', '一键复制: ' + cleanTitle);
      } catch (e) { UtilModule.showNotification('复制失败: ' + e.message, 'error'); LogModule.add('error', '复制失败: ' + e.message); }
    }

    function showIfContentPage() {
      const st = ExtractModule.getSiteType();
      if (!ExtractModule.isSiteEnabled(st)) return;
      if (st === 'discourse' || st === 'trae') {
        if (!ExtractModule.isTopicPage()) return;
      } else if (st !== 'feishu_doc') {
        if (!ExtractModule.isDomesticMediaPage()) return;
      }
      if (!document.getElementById('ds-float-btn')) mkBtn();
    }

    return { mkBtn, showMenu, showIfContentPage, quickSave, showTransSaveSubMenu };
  })();

  // ============================================================
  // 模块5.7: 翻译面板 (TranslateModule) — v0.8.2 新增
  // Google Translate API，日/英/韩/中多语互译
  // ============================================================
  const TranslateModule = (function() {
    const LANGS = { 'auto': '自动检测', 'zh-CN': '中文', 'en': 'English', 'ja': '日本語', 'ko': '한국어', 'fr': 'Français', 'de': 'Deutsch', 'es': 'Español', 'ru': 'Русский', 'th': 'ไทย', 'vi': 'Tiếng Việt', 'pt': 'Português', 'it': 'Italiano', 'ar': 'العربية' };
    const LANG_KEYS = Object.keys(LANGS);
    const PRESETS = [
      { f:'auto', t:'zh-CN', n:'→中' }, { f:'ja', t:'zh-CN', n:'日→中' }, { f:'en', t:'zh-CN', n:'英→中' },
      { f:'ko', t:'zh-CN', n:'韩→中' }, { f:'zh-CN', t:'en', n:'中→英' }, { f:'zh-CN', t:'ja', n:'中→日' },
      { f:'zh-CN', t:'ko', n:'中→韩' }, { f:'en', t:'ja', n:'英→日' }, { f:'ja', t:'en', n:'日→英' }, { f:'ko', t:'ja', n:'韩→日' }
    ];
    const isMob = /android|iphone|ipad|ipod|mobile|edga\//i.test(navigator.userAgent || '');

    async function translate(text, from, to) {
      const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + from + '&tl=' + to + '&dt=t&q=' + encodeURIComponent(text);
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: 'GET', url, headers: { 'Accept': 'application/json' }, timeout: 15000,
          onload(r) {
            try { const data = JSON.parse(r.responseText); resolve({ text: (data[0] || []).map(x => x[0] || '').join(''), from: data[2] || from, to }); }
            catch (_) { reject(new Error('解析翻译结果失败')); }
          },
          onerror() { reject(new Error('翻译服务不可用')); },
          ontimeout() { reject(new Error('翻译超时')); }
        });
      });
    }

    function show() {
      const old = document.getElementById('ds-trans-overlay'); if (old) { old.remove(); return; }
      const cfg = ConfigModule.get();
      const ov = document.createElement('div'); ov.id = 'ds-trans-overlay';
      ov.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483645;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;';
      ov.addEventListener('click', e => { if (e.target === ov) ov.remove(); });
      const w = isMob ? '96vw' : '520px';
      const p = document.createElement('div');
      p.style.cssText = 'background:#fff;border-radius:14px;box-shadow:0 12px 48px rgba(0,0,0,.25);width:' + w + ';max-width:96vw;max-height:90vh;overflow-y:auto;padding:18px;font-size:13px;color:#333;-webkit-overflow-scrolling:touch;';
      const langOpts = LANG_KEYS.map(l => '<option value="' + l + '">' + LANGS[l] + '</option>').join('');
      p.innerHTML = '<h2 style="display:flex;justify-content:space-between;margin:0 0 12px;font-size:15px;"><span>🌐 翻译面板</span><button id="dstrans-close" style="background:none;border:none;font-size:20px;cursor:pointer;color:#999;">&times;</button></h2>' +
        '<div style="display:flex;gap:4px;margin-bottom:10px;flex-wrap:wrap;">' + PRESETS.map(x => '<button class="dstrans-preset" data-f="' + x.f + '" data-t="' + x.t + '" style="font-size:10px;padding:3px 7px;border:1px solid #d0d0d0;border-radius:4px;background:#f5f5f5;cursor:pointer;">' + x.n + '</button>').join('') + '</div>' +
        '<div style="display:flex;gap:6px;margin-bottom:8px;align-items:center;"><select id="dstrans-from" style="padding:6px 8px;border:1px solid #d0d0d0;border-radius:6px;font-size:12px;"><option value="auto" selected>自动检测</option>' + langOpts + '</select><span>→</span><select id="dstrans-to" style="padding:6px 8px;border:1px solid #d0d0d0;border-radius:6px;font-size:12px;">' + langOpts + '</select></div>' +
        '<textarea id="dstrans-input" placeholder="输入文本或用下方按钮从页面提取..." style="width:100%;min-height:80px;padding:10px;border:1px solid #d0d0d0;border-radius:8px;font-size:13px;resize:vertical;box-sizing:border-box;margin-bottom:8px;"></textarea>' +
        '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;"><button id="dstrans-get-title" style="font-size:11px;padding:6px 10px;border:1px solid #d0d0d0;border-radius:6px;background:#f5f5f5;cursor:pointer;">📝 提取标题</button><button id="dstrans-get-body" style="font-size:11px;padding:6px 10px;border:1px solid #d0d0d0;border-radius:6px;background:#f5f5f5;cursor:pointer;">📄 提取正文</button><button id="dstrans-go" style="flex:1;padding:8px 12px;border:none;border-radius:6px;background:#1f6feb;color:#fff;cursor:pointer;font-weight:600;">🌐 翻译</button></div>' +
        '<div id="dstrans-result" style="min-height:80px;padding:12px;background:#fafafa;border-radius:8px;border:1px solid #eee;font-size:13px;line-height:1.7;white-space:pre-wrap;word-break:break-word;color:#999;">翻译结果将显示在这里</div>' +
        '<div style="display:flex;gap:6px;margin-top:8px;"><button id="dstrans-copy" style="font-size:11px;padding:6px 10px;border:1px solid #d0d0d0;border-radius:6px;background:#f5f5f5;cursor:pointer;">📋 复制结果</button><span id="dstrans-status" style="font-size:11px;color:#999;align-self:center;"></span></div>';
      ov.appendChild(p); document.body.appendChild(ov);

      p.querySelectorAll('.dstrans-preset').forEach(b => b.addEventListener('click', () => { p.querySelector('#dstrans-from').value = b.dataset.f; p.querySelector('#dstrans-to').value = b.dataset.t; }));
      p.querySelector('#dstrans-get-title').addEventListener('click', () => {
        let t = ''; const h1 = document.querySelector('h1.post-title, h1, #activity-name, .article-title');
        if (h1) t = h1.textContent.trim(); if (!t) t = document.title || '';
        p.querySelector('#dstrans-input').value = t;
      });
      p.querySelector('#dstrans-get-body').addEventListener('click', () => {
        let t = ''; const body = document.querySelector('.post-content, #js_content, .rich_media_content, article, .detail-left, #contents');
        if (body) { const ps = body.querySelectorAll('p'); ps.forEach(pp => { const tx = pp.textContent.trim(); if (tx.length > 10) t += tx + '\n\n'; }); }
        p.querySelector('#dstrans-input').value = t.slice(0, 5000);
      });
      const doTrans = async () => {
        const text = p.querySelector('#dstrans-input').value.trim(); if (!text) { UtilModule.showNotification('请输入文本', 'warning'); return; }
        const from = p.querySelector('#dstrans-from').value, to = p.querySelector('#dstrans-to').value;
        const result = p.querySelector('#dstrans-result'), status = p.querySelector('#dstrans-status');
        result.textContent = '翻译中...'; result.style.color = '#999'; status.textContent = '';
        try {
          const r = await translate(text, from, to);
          result.textContent = r.text; result.style.color = '#333';
          status.textContent = LANGS[r.from] + ' → ' + LANGS[r.to];
        } catch (e) { result.textContent = '翻译失败: ' + e.message; result.style.color = '#ef4444'; }
      };
      p.querySelector('#dstrans-go').addEventListener('click', doTrans);
      p.querySelector('#dstrans-input').addEventListener('keydown', e => { if (e.key === 'Enter' && e.ctrlKey) doTrans(); });
      p.querySelector('#dstrans-copy').addEventListener('click', () => {
        const t = p.querySelector('#dstrans-result').textContent;
        if (t && t !== '翻译结果将显示在这里' && !t.startsWith('翻译中') && !t.startsWith('翻译失败')) {
          try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t); else GM_setClipboard(t, 'text'); UtilModule.showNotification('翻译结果已复制', 'success'); } catch (_) {}
        }
      });
      p.querySelector('#dstrans-close').addEventListener('click', () => ov.remove());
    }

    return { translate, show };
  })();

  // ============================================================
  // 模块6: 用户界面 (UIModule)
  // ============================================================
  const UIModule = (function() {
    // 注入样式
    function injectStyles() {
      GM_addStyle(`
        @keyframes dsSlideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .ds-settings-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 999998;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ds-settings-panel {
          background: white;
          border-radius: 12px;
          padding: 24px;
          width: 480px;
          max-width: calc(100vw - 32px);
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .ds-settings-panel h2 {
          margin: 0 0 20px 0;
          font-size: 20px;
          color: #1f2937;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 12px;
        }

        .ds-form-group {
          margin-bottom: 16px;
        }

        .ds-form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #374151;
          font-size: 14px;
        }

        .ds-form-group input[type="text"],
        .ds-form-group input[type="number"] {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          box-sizing: border-box;
        }

        .ds-form-group input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
        }

        .ds-checkbox-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ds-checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .ds-checkbox-group label {
          margin: 0;
          cursor: pointer;
        }

        .ds-btn-group {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
        }

        .ds-btn {
          flex: 1;
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .ds-btn-primary {
          background: #3b82f6;
          color: white;
        }

        .ds-btn-primary:hover {
          background: #2563eb;
        }

        .ds-btn-secondary {
          background: #f3f4f6;
          color: #374151;
        }

        .ds-btn-secondary:hover {
          background: #e5e7eb;
        }

        .ds-section-title {
          font-size: 14px;
          font-weight: 600;
          color: #6b7280;
          margin: 20px 0 12px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .ds-hint {
          font-size: 12px;
          color: #9ca3af;
          margin-top: 4px;
        }

        .ds-collapsible {
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          margin: 12px 0;
          background: #fff;
        }

        .ds-collapsible > summary {
          list-style: none;
          cursor: pointer;
          padding: 10px 12px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ds-collapsible > summary::-webkit-details-marker {
          display: none;
        }

        .ds-collapsible > summary::after {
          content: "▾";
          font-size: 12px;
          color: #6b7280;
          transform: rotate(-90deg);
          transition: transform .18s ease;
        }

        .ds-collapsible[open] > summary::after {
          transform: rotate(0deg);
        }

        .ds-collapsible-body {
          padding: 0 12px 10px 12px;
        }
      `);
    }

    // V5.5.3: 悬浮保存按钮（支持拖拽、移动端）
    let _floatListenersAttached = false; // 防止 window 级监听器重复注册
    function createFloatingButton() {
      if (document.getElementById('ds-float-btn')) return;
      const isMobile = /android|iphone|ipad|ipod|mobile|edga\//i.test((navigator.userAgent || '').toLowerCase());
      const btn = document.createElement('div');
      btn.id = 'ds-float-btn';
      btn.title = '快速保存（长按更多选项）';
      btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z"/><path d="M5 17h14"/><path d="M8 21h8"/></svg>';
      const btnSize = isMobile ? 58 : 48;
      const fixedPos = isMobile ? { right: '16px', top: 'auto', bottom: '96px' } : { right: '18px', top: '80px', bottom: 'auto' };
      const savedPos = (() => { try { return JSON.parse(GM_getValue('ds_float_pos', 'null')); } catch(e) { return null; } })();
      const hasSavedPos = !!(savedPos && typeof savedPos.left === 'string' && typeof savedPos.top === 'string');
      Object.assign(btn.style, {
        position: 'fixed', zIndex: '2147483647',
        right: hasSavedPos ? 'auto' : fixedPos.right,
        top: hasSavedPos ? savedPos.top : fixedPos.top,
        bottom: hasSavedPos ? 'auto' : fixedPos.bottom,
        left: hasSavedPos ? savedPos.left : 'auto',
        width: `${btnSize}px`, height: `${btnSize}px`, borderRadius: '50%',
        background: 'linear-gradient(135deg,#0ea5e9,#2563eb)',
        boxShadow: '0 6px 18px rgba(37,99,235,.5)',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        userSelect: 'none', touchAction: 'none', transition: 'transform .1s,box-shadow .1s',
      });
      let pressing = false, moved = false, longPressed = false, longTimer;
      let startX = 0, startY = 0, startL = 0, startT = 0;
      function gp(e) { const t = e.touches ? e.touches[0] : e; return { x: t.clientX, y: t.clientY }; }
      function onStart(e) {
        pressing = true; moved = false; longPressed = false;
        const p = gp(e);
        startX = p.x; startY = p.y;
        const r = btn.getBoundingClientRect();
        startL = r.left; startT = r.top;
        btn.style.transition = 'none';
        longTimer = setTimeout(() => {
          if (pressing && !moved) { longPressed = true; showFloatMenu(); }
        }, 600);
        e.preventDefault();
        e.stopPropagation();
      }
      function onMove(e) {
        if (!pressing) return;
        const p = gp(e);
        const dx = p.x - startX;
        const dy = p.y - startY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          moved = true;
          clearTimeout(longTimer);
        }
        if (!moved) return;
        const maxLeft = Math.max(0, window.innerWidth - btnSize);
        const maxTop = Math.max(0, window.innerHeight - btnSize);
        const nextL = Math.max(0, Math.min(maxLeft, startL + dx));
        const nextT = Math.max(0, Math.min(maxTop, startT + dy));
        btn.style.left = `${nextL}px`;
        btn.style.top = `${nextT}px`;
        btn.style.right = 'auto';
        btn.style.bottom = 'auto';
        e.preventDefault();
      }
      function onEnd(e) {
        if (!pressing) return;
        pressing = false; clearTimeout(longTimer);
        btn.style.transition = 'transform .1s,box-shadow .1s';
        if (moved) {
          GM_setValue('ds_float_pos', JSON.stringify({ left: btn.style.left, top: btn.style.top }));
        } else if (!longPressed) {
          btn.style.transform = 'scale(.88)'; setTimeout(() => btn.style.transform = '', 120);
          SaveModule.save(null);
        }
        moved = false; longPressed = false;
        if (e) e.stopPropagation();
      }
      btn.addEventListener('mousedown', onStart);
      btn.addEventListener('touchstart', onStart, { passive: false });
      // 仅首次添加 window 级监听器，防止 SPA 重建按钮时泄漏
      if (!_floatListenersAttached) {
        _floatListenersAttached = true;
        window.addEventListener('mousemove', onMove);
        window.addEventListener('touchmove', onMove, { passive: false });
        window.addEventListener('mouseup', onEnd);
        window.addEventListener('touchend', onEnd);
      }
      window.addEventListener('resize', () => {
        const hasCustomPos = btn.style.left && btn.style.left !== 'auto';
        if (!hasCustomPos) {
          btn.style.right = fixedPos.right;
          btn.style.top = fixedPos.top;
          btn.style.bottom = fixedPos.bottom;
          btn.style.left = 'auto';
          return;
        }
        const r = btn.getBoundingClientRect();
        const maxLeft = Math.max(0, window.innerWidth - btnSize);
        const maxTop = Math.max(0, window.innerHeight - btnSize);
        const left = Math.max(0, Math.min(maxLeft, r.left));
        const top = Math.max(0, Math.min(maxTop, r.top));
        btn.style.left = `${left}px`;
        btn.style.top = `${top}px`;
        btn.style.right = 'auto';
        btn.style.bottom = 'auto';
        GM_setValue('ds_float_pos', JSON.stringify({ left: btn.style.left, top: btn.style.top }));
      }, { passive: true });
      document.body.appendChild(btn);
    }

    function showFloatMenu() {
      const ex = document.getElementById('ds-float-menu');
      if (ex) { ex.remove(); return; }
      const btn = document.getElementById('ds-float-btn');
      const r = btn.getBoundingClientRect();
      const menu = document.createElement('div');
      menu.id = 'ds-float-menu';

      // 解析楼层字符串："5" / "2,5,8" / "2-8" / "1-5,8,10-12"
      function parseFloors(str) {
        const floors = new Set();
        for (const part of str.replace(/\s/g, '').split(',')) {
          if (!part) continue;
          const m = part.match(/^(\d+)-(\d+)$/);
          if (m) {
            const a = +m[1], b = +m[2];
            if (a > b || b - a > 500) return null;
            for (let i = a; i <= b; i++) floors.add(i);
          } else if (/^\d+$/.test(part)) {
            floors.add(+part);
          } else return null;
        }
        return floors.size > 0 ? Array.from(floors).sort((a, b) => a - b) : null;
      }

      const config = ConfigModule.get();
      const siteType = ExtractModule.getSiteType ? ExtractModule.getSiteType() : 'discourse';
      const siteTypeLabel = siteType === 'discourse' ? 'Discourse' : siteType === 'wechat' ? '微信' : siteType === 'zhihu' ? '知乎' : siteType === 'weibo' ? '微博' : siteType === 'x' ? 'X/Twitter' : siteType === 'people' ? '人民日报' : siteType === 'xinhua' ? '新华网' : siteType === 'thepaper' ? '澎湃' : siteType === '36kr' ? '36氪' : siteType === 'sspai' ? '少数派' : siteType === 'juejin' ? '掘金' : siteType === 'ithome' ? 'IT之家' : siteType === 'toutiao' ? '头条' : siteType === 'douyin' ? '抖音' : siteType === 'bilibili' ? 'B站' : siteType === 'trae' ? 'Trae' : siteType === 'feishu_doc' ? '飞书文档' : siteType === '51cg' ? '51吃瓜网' : siteType === 'x6d3i' ? 'x6d3i视频' : siteType;
      menu.innerHTML = `
        <div style="padding:10px 14px 6px;font-weight:600;font-size:13px;color:#2563eb;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center;">
          <span>星存助手 V${(typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || '0.9.9'}</span>
          <span style="font-size:11px;font-weight:normal;background:#e0e7ff;color:#3730a3;padding:2px 6px;border-radius:4px;">${siteTypeLabel}</span>
        </div>
        <div id="dsm-settings" class="dsm-item" style="color:#2563eb;font-weight:500;">设置</div>
        <div id="dsm-save-all" class="dsm-item">保存整个帖子</div>
        <div id="dsm-save-images" class="dsm-item">保存全部图片</div>
        <div id="dsm-save-ob" class="dsm-item">💾 仅保存到 Obsidian</div>
        <div id="dsm-save-feishu" class="dsm-item">📊 仅保存到飞书</div>
        <div id="dsm-save-bd" class="dsm-item">📦 仅保存到百度网盘</div>
        <div id="dsm-copy-md" class="dsm-item">复制为 Markdown</div>
        <div id="dsm-copy-text" class="dsm-item">复制纯文本</div>
        <div id="dsm-trans-save" class="dsm-item" style="color:#1f6feb;font-weight:500;">🌐 翻译文本后保存</div>
        <div id="dsm-logs" class="dsm-item">📋 日志</div>
        <div style="padding:8px 14px 0;border-top:1px solid #f0f0f0;">
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:#444;cursor:pointer;">
            <input id="dsm-save-comments" type="checkbox" ${config.saveComments ? 'checked' : ''} style="width:14px;height:14px;">
            保存评论
          </label>
          <div style="display:flex;align-items:center;gap:6px;margin-top:6px;">
            <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#666;cursor:pointer;">
              <input id="dsm-save-all-comments" type="checkbox" ${config.saveAllComments ? 'checked' : ''} style="width:13px;height:13px;">
              全部
            </label>
            <input id="dsm-comment-count" type="number" min="1" max="9999" value="${config.commentCount || 100}" style="width:74px;padding:4px 6px;border:1px solid #ddd;border-radius:6px;font-size:12px;">
            <span style="font-size:12px;color:#888;">条</span>
          </div>
        </div>
        <div style="padding:8px 14px 4px;font-size:12px;color:#999;">指定楼层（如: 5 或 2-8 或 1,3,5-7）</div>
        <div style="padding:4px 14px 8px;display:flex;gap:6px;align-items:center;">
          <input id="dsm-floor-input" type="text" placeholder="楼层范围" style="flex:1;padding:6px 8px;border:1px solid #ddd;border-radius:6px;font-size:13px;outline:none;min-width:0;">
          <button id="dsm-floor-go" style="padding:6px 12px;background:#667eea;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;white-space:nowrap;">保存</button>
        </div>
        <div id="dsm-floor-hint" style="padding:0 14px 4px;font-size:11px;color:#999;min-height:16px;"></div>
        <div style="border-top:1px solid #f0f0f0;padding:6px 14px;display:flex;gap:8px;">
          <div id="dsm-reset-pos" class="dsm-item" style="flex:1;text-align:center;padding:8px 0;border-bottom:none;">重置位置</div>
        </div>
      `;
      // 菜单项统一 hover 样式
      menu.querySelectorAll('.dsm-item').forEach(el => {
        el.style.cssText += 'padding:10px 14px;cursor:pointer;font-size:14px;border-bottom:1px solid #f0f0f0;';
        el.addEventListener('pointerover', () => el.style.background = '#f5f5f5');
        el.addEventListener('pointerout', () => el.style.background = '');
      });

      // 先挂到DOM（不可见），测量真实尺寸后再定位
      Object.assign(menu.style, {
        position: 'fixed', zIndex: '1000000',
        left: '0px', top: '0px',
        visibility: 'hidden',
        background: '#fff', color: '#333', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: '1.5', textAlign: 'left', boxSizing: 'border-box',
        borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,.18)',
        width: '260px', maxWidth: 'calc(100vw - 16px)', fontSize: '14px',
      });
      // 强制所有子元素继承颜色，防止网站CSS覆盖导致白字
      const menuStyleId = 'ds-float-menu-reset';
      if (!document.getElementById(menuStyleId)) {
        const resetCSS = document.createElement('style');
        resetCSS.id = menuStyleId;
        resetCSS.textContent = `#ds-float-menu,#ds-float-menu *{color:inherit!important;font-family:inherit!important;line-height:inherit!important;box-sizing:inherit!important}#ds-float-menu .dsm-item{color:#444!important}#ds-float-menu .dsm-item[style*="color"]{color:inherit!important}#ds-float-menu a{color:#2563eb!important}#ds-float-menu input,#ds-float-menu button{color:initial!important}`;
        document.head.appendChild(resetCSS);
      }
      document.body.appendChild(menu);
      const menuRect = menu.getBoundingClientRect();
      const menuH = menuRect.height;
      const menuW = menuRect.width;
      const margin = 8;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // 水平：优先按钮左侧，不够则右侧
      let left = r.left - menuW - 10;
      if (left < margin) left = Math.max(margin, Math.min(r.right + 10, vw - menuW - margin));
      if (left + menuW > vw - margin) left = vw - menuW - margin;

      // 垂直：优先按钮顶部对齐，底部溢出则上移
      let top = r.top;
      if (top + menuH > vh - margin) top = Math.max(margin, vh - menuH - margin);
      if (top < margin) top = margin;

      menu.style.left = left + 'px';
      menu.style.top = top + 'px';
      menu.style.visibility = '';

      const openedAt = Date.now();
      function closeMenu() {
        menu.remove();
        document.removeEventListener('click', outsideClick, true);
        document.removeEventListener('touchstart', outsideClick, true);
      }
      function outsideClick(e) {
        // 忽略打开瞬间的 click/touchend，避免“松手即关闭”
        if (Date.now() - openedAt < 900) return;
        if (!menu.contains(e.target) && e.target !== btn) closeMenu();
      }
      menu.addEventListener('click', (e) => e.stopPropagation());
      menu.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: true });

      // 保存整帖
      const saveCommentsEl = menu.querySelector('#dsm-save-comments');
      const saveAllCommentsEl = menu.querySelector('#dsm-save-all-comments');
      const commentCountEl = menu.querySelector('#dsm-comment-count');
      function syncCommentControls() {
        const enabled = !!saveCommentsEl.checked;
        saveAllCommentsEl.disabled = !enabled;
        commentCountEl.disabled = !enabled || !!saveAllCommentsEl.checked;
        saveAllCommentsEl.style.opacity = enabled ? '1' : '.5';
        commentCountEl.style.opacity = (!enabled || saveAllCommentsEl.checked) ? '.5' : '1';
      }
      function applyQuickCommentSettings() {
        const saveComments = !!saveCommentsEl.checked;
        const saveAll = !!saveAllCommentsEl.checked;
        const count = Math.max(1, parseInt(commentCountEl.value, 10) || 100);
        ConfigModule.set('saveComments', saveComments);
        ConfigModule.set('saveAllComments', saveComments && saveAll);
        ConfigModule.set('commentCount', count);
      }
      saveCommentsEl.addEventListener('change', syncCommentControls);
      saveAllCommentsEl.addEventListener('change', syncCommentControls);
      syncCommentControls();

      menu.querySelector('#dsm-save-all').addEventListener('click', () => {
        applyQuickCommentSettings();
        closeMenu();
        SaveModule.save(null);
      });
      menu.querySelector('#dsm-save-images').addEventListener('click', () => {
        closeMenu();
        SaveModule.saveImagesOnly();
      });
      menu.querySelector('#dsm-save-ob').addEventListener('click', () => { closeMenu(); SaveModule.saveToObsidianOnly(); });
      menu.querySelector('#dsm-save-feishu').addEventListener('click', () => { closeMenu(); SaveModule.saveToFeishuOnly(); });
      menu.querySelector('#dsm-save-bd').addEventListener('click', () => { closeMenu(); SaveModule.saveToBaiduPanOnly(); });
      // 复制为 Markdown
      menu.querySelector('#dsm-copy-md').addEventListener('click', async () => {
        try {
          applyQuickCommentSettings();
          let extracted;
          const st = ExtractModule.getSiteType();
          if (st === 'feishu_doc') {
            extracted = await FeishuDocModule.extractFeishuDocContent();
          } else {
            extracted = ExtractModule.extractContent();
          }
          if (!extracted) { UtilModule.showNotification('未找到可提取的内容', 'warning'); closeMenu(); return; }
          const md = extracted.contentMarkdown || ConvertModule.convertToMarkdownWithComments(extracted.contentHTML, extracted, [], config);
          GM_setClipboard(md, 'text');
          UtilModule.showNotification('Markdown 已复制到剪贴板', 'success');
        } catch (err) {
          UtilModule.showNotification('复制失败: ' + err.message, 'error');
        }
        closeMenu();
      });

      // 复制纯文本
      menu.querySelector('#dsm-copy-text').addEventListener('click', async () => {
        try {
          let extracted;
          const st = ExtractModule.getSiteType();
          if (st === 'feishu_doc') {
            extracted = await FeishuDocModule.extractFeishuDocContent();
          } else {
            extracted = ExtractModule.extractContent();
          }
          if (!extracted) { UtilModule.showNotification('未找到可提取的内容', 'warning'); closeMenu(); return; }
          let text;
          if (extracted.contentMarkdown) {
            text = (extracted.title || '') + '\n\n' + extracted.contentMarkdown.replace(/[#*`>~\[\]()!-]/g, '').trim();
          } else {
            const div = document.createElement('div');
            div.innerHTML = extracted.contentHTML;
            text = (extracted.title || '') + '\n\n' + (div.textContent || div.innerText || '').trim();
          }
          GM_setClipboard(text, 'text');
          UtilModule.showNotification('纯文本已复制到剪贴板', 'success');
        } catch (err) {
          UtilModule.showNotification('复制失败: ' + err.message, 'error');
        }
        closeMenu();
      });

      menu.querySelector('#dsm-trans-save').addEventListener('click', () => { closeMenu(); FloatingBtnModule.showTransSaveSubMenu(r); });
      menu.querySelector('#dsm-logs').addEventListener('click', () => { closeMenu(); LogModule.renderPanel(); });

      // 设置
      menu.querySelector('#dsm-settings').addEventListener('click', () => {
        closeMenu();
        showSettingsPanel();
      });

      // 重置按钮位置
      menu.querySelector('#dsm-reset-pos').addEventListener('click', () => {
        GM_setValue('ds_float_pos', 'null');
        const fbtn = document.getElementById('ds-float-btn');
        if (fbtn) {
          fbtn.style.left = 'auto';
          fbtn.style.right = '18px';
          fbtn.style.top = '80px';
          fbtn.style.bottom = 'auto';
        }
        UtilModule.showNotification('按钮位置已重置', 'success');
        closeMenu();
      });

      // 楼层输入实时提示
      const input = menu.querySelector('#dsm-floor-input');
      const hint = menu.querySelector('#dsm-floor-hint');
      input.addEventListener('input', () => {
        const v = input.value.trim();
        if (!v) { hint.textContent = ''; return; }
        const floors = parseFloors(v);
        if (!floors) { hint.style.color = '#ef4444'; hint.textContent = '格式错误'; }
        else { hint.style.color = '#22c55e'; hint.textContent = `共 ${floors.length} 楼: ${floors.slice(0, 6).join(', ')}${floors.length > 6 ? '...' : ''}`; }
      });

      // 执行楼层保存
      function doFloorSave() {
        const v = input.value.trim();
        if (!v) { input.style.borderColor = '#ef4444'; input.focus(); return; }
        const floors = parseFloors(v);
        if (!floors) { input.style.borderColor = '#ef4444'; hint.style.color = '#ef4444'; hint.textContent = '格式错误'; return; }
        applyQuickCommentSettings();
        closeMenu();
        if (floors.length === 1) {
          SaveModule.save(floors[0] === 1 ? null : String(floors[0]));
        } else {
          SaveModule.save(floors);
        }
      }

      menu.querySelector('#dsm-floor-go').addEventListener('click', doFloorSave);
      input.addEventListener('keydown', e => { if (e.key === 'Enter') doFloorSave(); if (e.key === 'Escape') closeMenu(); });

      setTimeout(() => {
        document.addEventListener('click', outsideClick, true);
        document.addEventListener('touchstart', outsideClick, true);
        input.focus();
      }, 120);
    }

    let _lastFloatBtnVisible = null; // 防止重复设置 display 导致闪烁
    function ensureFloatingButtonVisible() {
      const siteType = ExtractModule.getSiteType ? ExtractModule.getSiteType() : 'discourse';
      // 检查该站点是否被用户启用
      const siteIsEnabled = GM_getValue(`siteEnabled_${siteType}`, true) !== false;
      if (!siteIsEnabled) {
        const btn2 = document.getElementById('ds-float-btn');
        if (btn2 && _lastFloatBtnVisible !== false) { btn2.style.display = 'none'; _lastFloatBtnVisible = false; }
        return;
      }
      const isNonDiscourseSite = siteType !== 'discourse';
      let shouldShow = false;
      if (isNonDiscourseSite) {
        // 非 Discourse/Trae 站点：需检测当前页是否是内容页面，避免在首页等非内容页面显示按钮
        shouldShow = ExtractModule.isDomesticMediaPage ? ExtractModule.isDomesticMediaPage() : true;
      } else {
        // 51吃瓜 兜底：即使 siteType 是 discourse，也检查吃瓜页面特征
        const cgEnabled = GM_getValue('siteEnabled_51cg', true) !== false;
        if (cgEnabled && (document.querySelector('.post-content[itemprop="articleBody"]') ||
            document.querySelector('h1.post-title[itemprop="name headline"]') ||
            document.querySelector('[data-xkrkllgl]') ||
            document.querySelector('.dplayer'))) {
          shouldShow = true;
        } else {
          // Discourse/Trae 站点：需要检测是否在 topic 页面
          const ua = (navigator.userAgent || '').toLowerCase();
          const isMobile = /android|iphone|ipad|ipod|mobile|edga\//i.test(ua);
          const path = window.location.pathname || '';
          const likelyTopicByUrl = /\/t\//.test(path) || /\/post[-/]/.test(path);
          const isTopic = ExtractModule.isTopicPage();
          shouldShow = isTopic || (isMobile && likelyTopicByUrl);
        }
      }
      const btn = document.getElementById('ds-float-btn');
      const menu = document.getElementById('ds-float-menu');
      if (!shouldShow) {
        if (btn && _lastFloatBtnVisible !== false) { btn.style.display = 'none'; _lastFloatBtnVisible = false; }
        if (menu) menu.remove();
        return;
      }
      if (!btn) {
        createFloatingButton();
        _lastFloatBtnVisible = true;
      } else if (_lastFloatBtnVisible !== true) {
        btn.style.display = 'flex';
        _lastFloatBtnVisible = true;
      }
    }

    // 显示设置面板
    function showSettingsPanel() {
      const config = ConfigModule.get();
      function collapseSectionsKeepTopTotal(overlayEl) {
        const panel = overlayEl.querySelector('.ds-settings-panel');
        if (!panel) return;
        const titles = Array.from(panel.querySelectorAll('.ds-section-title'));
        titles.forEach((titleEl) => {
          const sectionName = (titleEl.textContent || '').trim();
          if (sectionName === '总设置' || sectionName === '操作') return; // 总设置和操作常驻展开

          const details = document.createElement('details');
          details.className = 'ds-collapsible';
          details.open = false;

          const summary = document.createElement('summary');
          summary.textContent = sectionName;
          details.appendChild(summary);

          const body = document.createElement('div');
          body.className = 'ds-collapsible-body';
          details.appendChild(body);

          titleEl.parentNode.insertBefore(details, titleEl);
          titleEl.remove();

          let cursor = details.nextSibling;
          while (cursor) {
            const next = cursor.nextSibling;
            if (cursor.nodeType === 1 && cursor.classList.contains('ds-section-title')) break;
            body.appendChild(cursor);
            cursor = next;
          }
        });
      }

      const overlay = document.createElement('div');
      overlay.className = 'ds-settings-overlay';
      overlay.innerHTML = `
        <div class="ds-settings-panel">
          <h2 style="display:flex;align-items:center;justify-content:space-between;">
            <span>星存助手 V${(typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || '0.9.9'}</span>
            <span style="font-size:12px;font-weight:normal;color:#6b7280;">当前站点: ${window.location.hostname}</span>
          </h2>

          <div class="ds-section-title">操作</div>
          <div class="ds-btn-group" style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">
            <button class="ds-btn ds-btn-primary" id="ds-save" style="min-width:0;padding:10px 4px;font-weight:600;">保存设置</button>
            <button class="ds-btn ds-btn-secondary" id="ds-cancel" style="min-width:0;padding:10px 4px;">取消</button>
            <button class="ds-btn ds-btn-secondary" id="ds-open-logs" style="min-width:0;padding:10px 4px;">日志</button>
            <button class="ds-btn ds-btn-secondary" id="ds-export-config" style="min-width:0;padding:10px 4px;">导出配置</button>
            <label class="ds-btn ds-btn-secondary" id="ds-import-config-label" style="min-width:0;padding:10px 4px;text-align:center;cursor:pointer;margin:0;display:flex;align-items:center;justify-content:center;">导入配置<input type="file" id="ds-import-config" accept=".json" style="display:none;"></label>
          </div>

          <div class="ds-section-title">保存目标</div>
          <div class="ds-hint" style="margin-bottom:8px;">选择内容保存到哪里，可以同时开启多个。</div>
          <div style="display:flex;gap:16px;">
            <div class="ds-checkbox-group"><input type="checkbox" id="ds-save-obsidian" ${config.saveToObsidian ? 'checked' : ''}><label for="ds-save-obsidian">Obsidian</label></div>
            <div class="ds-checkbox-group"><input type="checkbox" id="ds-save-feishu" ${config.saveToFeishu ? 'checked' : ''}><label for="ds-save-feishu">飞书多维表格</label></div>
            <div class="ds-checkbox-group"><input type="checkbox" id="ds-save-baidupan-target" ${config.saveToBaiduPan ? 'checked' : ''}><label for="ds-save-baidupan-target">百度网盘</label></div>
          </div>

          <div class="ds-section-title">站点管理</div>
          <div class="ds-hint" style="margin-bottom:8px;">关闭后该站点不再显示保存按钮。子域名自动匹配（如 opinion.people.com.cn）。</div>
          <div style="margin-bottom:10px;">
            <strong style="font-size:12px;color:#374151;">社交媒体</strong>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:4px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-wechat" ${GM_getValue('siteEnabled_wechat', true) ? 'checked' : ''}><label for="ds-site-wechat">微信公众号</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-zhihu" ${GM_getValue('siteEnabled_zhihu', true) ? 'checked' : ''}><label for="ds-site-zhihu">知乎</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-weibo" ${GM_getValue('siteEnabled_weibo', true) ? 'checked' : ''}><label for="ds-site-weibo">微博</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-x" ${GM_getValue('siteEnabled_x', true) ? 'checked' : ''}><label for="ds-site-x">X/Twitter</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-douyin" ${GM_getValue('siteEnabled_douyin', true) ? 'checked' : ''}><label for="ds-site-douyin">抖音</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-bilibili" ${GM_getValue('siteEnabled_bilibili', true) ? 'checked' : ''}><label for="ds-site-bilibili">B站</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-youtube" ${GM_getValue('siteEnabled_youtube', true) ? 'checked' : ''}><label for="ds-site-youtube">YouTube</label></div>
            </div>
          </div>
          <div style="margin-bottom:10px;">
            <strong style="font-size:12px;color:#374151;">新闻媒体</strong>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:4px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-people" ${GM_getValue('siteEnabled_people', true) ? 'checked' : ''}><label for="ds-site-people">人民日报</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-xinhua" ${GM_getValue('siteEnabled_xinhua', true) ? 'checked' : ''}><label for="ds-site-xinhua">新华网</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-thepaper" ${GM_getValue('siteEnabled_thepaper', true) ? 'checked' : ''}><label for="ds-site-thepaper">澎湃新闻</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-toutiao" ${GM_getValue('siteEnabled_toutiao', true) ? 'checked' : ''}><label for="ds-site-toutiao">今日头条</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-ithome" ${GM_getValue('siteEnabled_ithome', true) ? 'checked' : ''}><label for="ds-site-ithome">IT之家</label></div>
            </div>
          </div>
          <div style="margin-bottom:10px;">
            <strong style="font-size:12px;color:#374151;">科技/效率</strong>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:4px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-36kr" ${GM_getValue('siteEnabled_36kr', true) ? 'checked' : ''}><label for="ds-site-36kr">36氪</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-sspai" ${GM_getValue('siteEnabled_sspai', true) ? 'checked' : ''}><label for="ds-site-sspai">少数派</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-juejin" ${GM_getValue('siteEnabled_juejin', true) ? 'checked' : ''}><label for="ds-site-juejin">掘金</label></div>
            </div>
          </div>
          <div style="margin-bottom:10px;">
            <strong style="font-size:12px;color:#374151;">云文档/协作</strong>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:4px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-feishu_doc" ${GM_getValue('siteEnabled_feishu_doc', true) ? 'checked' : ''}><label for="ds-site-feishu_doc">飞书云文档</label></div>
            </div>
          </div>
          <div style="margin-top:8px;">
            <strong style="font-size:12px;color:#374151;">吃瓜/视频</strong>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:4px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-51cg" ${GM_getValue('siteEnabled_51cg', true) ? 'checked' : ''}><label for="ds-site-51cg">51吃瓜网</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-x6d3i" ${GM_getValue('siteEnabled_x6d3i', true) ? 'checked' : ''}><label for="ds-site-x6d3i">x6d3i视频</label></div>
            </div>
          </div>
          <div style="margin-bottom:10px;">
            <strong style="font-size:12px;color:#374151;">论坛社区</strong>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:4px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-discourse" ${GM_getValue('siteEnabled_discourse', true) ? 'checked' : ''}><label for="ds-site-discourse">Discourse</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-site-trae" ${GM_getValue('siteEnabled_trae', true) ? 'checked' : ''}><label for="ds-site-trae">Trae社区</label></div>
            </div>
          </div>

          <div class="ds-section-title">自定义 Discourse 站点</div>
          <div class="ds-hint" style="margin-bottom:6px;">添加脚本未内置的 Discourse 论坛站点。</div>
          <div class="ds-form-group">
            <div style="display:flex;gap:8px;align-items:center;">
              <input type="text" id="ds-custom-sites-input" placeholder="输入域名，如 forum.example.com" style="flex:1;">
              <button type="button" id="ds-custom-sites-add" class="ds-btn ds-btn-secondary" style="flex:none;padding:6px 12px;">添加</button>
              <button type="button" id="ds-custom-sites-clear" class="ds-btn ds-btn-secondary" style="flex:none;padding:6px 10px;">清空</button>
            </div>
            <input type="hidden" id="ds-custom-sites" value="${config.customSites || ''}">
            <div id="ds-custom-sites-list" style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px;"></div>
          </div>

          <div class="ds-section-title">自定义51吃瓜域名 <span style="font-size:11px;color:#f97316;">（换域名不用等更新）</span></div>
          <div class="ds-hint" style="margin-bottom:6px;">51吃瓜经常换域名，把新域名加到这里就能继续用。内置DOM检测也会自动识别，加域名更保险。</div>
          <div class="ds-form-group">
            <div style="display:flex;gap:8px;align-items:center;">
              <input type="text" id="ds-cg-custom-sites-input" placeholder="输入域名，如 new51cg.com" style="flex:1;">
              <button type="button" id="ds-cg-custom-sites-add" class="ds-btn ds-btn-secondary" style="flex:none;padding:6px 12px;">添加</button>
              <button type="button" id="ds-cg-custom-sites-clear" class="ds-btn ds-btn-secondary" style="flex:none;padding:6px 10px;">清空</button>
            </div>
            <input type="hidden" id="ds-cg-custom-sites" value="${config.cgCustomSites || ''}">
            <div id="ds-cg-custom-sites-list" style="margin-top:8px;display:flex;flex-wrap:wrap;gap:6px;"></div>
          </div>

          <div class="ds-section-title">Obsidian 设置</div>

          <div class="ds-form-group">
            <label>Vault 名称</label>
            <input type="text" id="ds-vault" value="${config.vaultName}" placeholder="你的Vault名称">
            <div class="ds-hint">必须与 Obsidian 中的库名完全一致</div>
            <button type="button" id="ds-test-ob" style="margin-top:8px;padding:6px 12px;background:#7c3aed;color:white;border:none;border-radius:4px;cursor:pointer;">测试 Obsidian 连接</button>
          </div>

          <div class="ds-form-group">
            <label>默认保存文件夹路径</label>
            <input type="text" id="ds-folder" value="${config.folderPath}" placeholder="Discourse收集箱">
            <div class="ds-hint">未启用按平台分流时，所有内容保存到此目录</div>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-use-platform-folders" ${config.usePlatformFolders ? 'checked' : ''}>
            <label for="ds-use-platform-folders">按平台自动分流到不同文件夹</label>
          </div>
          <div id="ds-platform-folders-panel" style="${config.usePlatformFolders ? '' : 'display:none;'}margin-bottom:12px;padding:10px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;">
            <div class="ds-hint" style="margin-bottom:8px;">各平台文件夹均在上方"默认保存文件夹路径"下（如：总文件夹/公众号/），支持子目录如 "新闻/人民日报"</div>
            <div style="display:grid;grid-template-columns:80px 1fr;gap:4px 8px;font-size:12px;align-items:center;">
              ${Object.entries(config.platformFolders || {}).map(([key, val]) => {
                const labels = {wechat:'公众号',zhihu:'知乎',weibo:'微博',x:'X/Twitter',youtube:'YouTube',people:'人民日报',xinhua:'新华网',thepaper:'澎湃',sspai:'少数派',juejin:'掘金',ithome:'IT之家',toutiao:'头条',douyin:'抖音',bilibili:'B站','36kr':'36氪',trae:'Trae',feishu_doc:'飞书文档',discourse:'论坛','51cg':'51吃瓜网',x6d3i:'x6d3i视频'};
                return '<label style="color:#374151;">' + (labels[key]||key) + '</label><input type="text" class="ds-pf-input" data-platform="' + key + '" value="' + (val||'') + '" style="padding:4px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">';
              }).join('')}
            </div>
          </div>

          <div id="ds-discourse-site-folders-panel" style="${config.usePlatformFolders ? '' : 'display:none;'}margin-bottom:12px;padding:10px;background:#f0fdf4;border-radius:6px;border:1px solid #bbf7d0;">
            <div class="ds-hint" style="margin-bottom:8px;color:#166534;"><strong>论坛站点细分</strong> — 在「论坛」文件夹下按站点名建立子目录（留空则自动使用域名首段）</div>
            <div style="display:grid;grid-template-columns:130px 1fr;gap:4px 8px;font-size:12px;align-items:center;">
              ${Object.entries(config.discourseSiteFolders || {}).map(([host, val]) => {
                return '<label style="color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="' + host + '">' + host + '</label><input type="text" class="ds-dsf-input" data-host="' + host + '" value="' + (val||'') + '" placeholder="自动" style="padding:4px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">';
              }).join('')}
            </div>
          </div>

          <div class="ds-form-group">
            <label>同内容保存策略</label>
            <select id="ds-conflict-mode" style="width:100%;padding:8px;border:1px solid #d1d5db;border-radius:6px;">
              <option value="overwrite" ${(config.saveConflictMode || 'overwrite') === 'overwrite' ? 'selected' : ''}>覆盖同名（推荐）</option>
              <option value="timestamp" ${config.saveConflictMode === 'timestamp' ? 'selected' : ''}>新建并追加时间戳</option>
              <option value="prompt" ${config.saveConflictMode === 'prompt' ? 'selected' : ''}>重名时询问（追加序号，仅百度网盘）</option>
            </select>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-metadata" ${config.addMetadata ? 'checked' : ''}>
            <label for="ds-metadata">添加元数据到笔记 (Frontmatter)</label>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-callout" ${config.addCallout !== false ? 'checked' : ''}>
            <label for="ds-callout">添加「帖子信息」引用框 (Obsidian Callout)</label>
          </div>
          <div id="ds-callout-fields-panel" style="margin-left:20px;padding:10px;border:1px solid #e5e7eb;border-radius:6px;background:#f9fafb;${config.addCallout !== false ? '' : 'display:none;'}">
            <div class="ds-checkbox-group" style="margin-bottom:8px;">
              <input type="checkbox" id="ds-callout-follow-meta" ${config.calloutFollowMeta !== false ? 'checked' : ''}>
              <label for="ds-callout-follow-meta"><strong>字段跟随元数据设置（默认）</strong></label>
            </div>
            <div class="ds-hint" style="margin-bottom:8px;font-size:11px;">关闭上面的选项后，可独立选择引用框字段；勾选字段 / 可自定义字段名。</div>
            <div style="display:grid;grid-template-columns:auto 1fr;gap:4px 10px;align-items:center;font-size:13px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-url" ${config.calloutField_url !== false ? 'checked' : ''}><label for="ds-cf-url">来源 URL</label></div>
              <input type="text" id="ds-cfn-url" value="${config.calloutFieldName_url || '来源'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-title" ${config.calloutField_title !== false ? 'checked' : ''}><label for="ds-cf-title">标题</label></div>
              <input type="text" id="ds-cfn-title" value="${config.calloutFieldName_title || '标题'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-author" ${config.calloutField_author !== false ? 'checked' : ''}><label for="ds-cf-author">作者</label></div>
              <input type="text" id="ds-cfn-author" value="${config.calloutFieldName_author || '作者'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
              <div class="ds-checkbox-group" style="grid-column:1/-1;"><input type="checkbox" id="ds-cf-author-link" ${config.calloutAuthorLink !== false ? 'checked' : ''}><label for="ds-cf-author-link" style="font-size:12px;color:#6b7280;">作者字段附带主页链接（[名](URL) 格式）</label></div>
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-category" ${config.calloutField_category !== false ? 'checked' : ''}><label for="ds-cf-category">类别</label></div>
              <input type="text" id="ds-cfn-category" value="${config.calloutFieldName_category || '类别'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-tags" ${config.calloutField_tags !== false ? 'checked' : ''}><label for="ds-cf-tags">标签</label></div>
              <input type="text" id="ds-cfn-tags" value="${config.calloutFieldName_tags || 'tags'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-time" ${config.calloutField_time !== false ? 'checked' : ''}><label for="ds-cf-time">保存时间</label></div>
              <input type="text" id="ds-cfn-time" value="${config.calloutFieldName_time || '保存时间'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-platform" ${config.calloutField_platform !== false ? 'checked' : ''}><label for="ds-cf-platform">平台（自动识别）</label></div>
              <input type="text" id="ds-cfn-platform" value="${config.calloutFieldName_platform || '平台'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-commentCount" ${config.calloutField_commentCount !== false ? 'checked' : ''}><label for="ds-cf-commentCount">评论数</label></div>
              <input type="text" id="ds-cfn-commentCount" value="${config.calloutFieldName_commentCount || '评论数'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-reactions" ${config.calloutField_reactions !== false ? 'checked' : ''}><label for="ds-cf-reactions">反应(Reactions)</label></div>
              <input type="text" id="ds-cfn-reactions" value="${config.calloutFieldName_reactions || '反应'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
              <div class="ds-checkbox-group"><input type="checkbox" id="ds-cf-boosts" ${config.calloutField_boosts !== false ? 'checked' : ''}><label for="ds-cf-boosts">打call(Boosts)</label></div>
              <input type="text" id="ds-cfn-boosts" value="${config.calloutFieldName_boosts || '打call'}" style="padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:12px;">
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px;">
            <div class="ds-checkbox-group"><input type="checkbox" id="ds-advanced-uri" ${config.useAdvancedUri ? 'checked' : ''}><label for="ds-advanced-uri">Advanced URI</label></div>
            <div class="ds-checkbox-group"><input type="checkbox" id="ds-embed-images" ${config.embedImages ? 'checked' : ''}><label for="ds-embed-images">嵌入图片(Base64)</label></div>
          </div>

          <div class="ds-form-group ds-checkbox-group" style="margin-top:8px;">
            <input type="checkbox" id="ds-download-images" ${config.downloadImages ? 'checked' : ''}>
            <label for="ds-download-images">下载图片/视频到 Vault</label>
            <div class="ds-hint" style="margin-left: 26px; margin-top: 2px; color: #ef4444;">需要 Obsidian 插件「Local REST API」</div>
          </div>
          <div id="ds-download-images-panel" style="margin-left: 26px; ${config.downloadImages ? '' : 'display:none;'}">
            <div class="ds-form-group">
              <label>API Key</label>
              <input type="password" id="ds-rest-api-key" value="${config.restApiKey}" placeholder="粘贴你的 API Key">
            </div>
            <div class="ds-form-group" style="display:flex;gap:12px;align-items:center;">
              <div><label>端口</label><input type="number" id="ds-rest-api-port" value="${config.restApiPort}" min="1" max="65535" style="width:80px;"></div>
              <button class="ds-btn ds-btn-secondary" id="ds-test-rest-api" style="padding:6px 12px;margin-top:18px;">测试</button>
              <span id="ds-rest-api-status" style="margin-top:18px;color:#6b7280;font-size:13px;"></span>
            </div>
            <div class="ds-checkbox-group"><input type="checkbox" id="ds-download-videos" ${config.downloadVideos ? 'checked' : ''}><label for="ds-download-videos">同时下载视频</label></div>
            <div class="ds-form-group">
              <label>媒体文件夹</label>
              <input type="text" id="ds-media-folder-name" value="${config.mediaFolderName || 'media'}" placeholder="media">
              <div class="ds-hint">可用 {'{title}'} 代表帖子标题，例：media/{'{title}'}</div>
            </div>
            <div class="ds-checkbox-group"><input type="checkbox" id="ds-media-folder-per-title" ${config.mediaFolderPerTitle ? 'checked' : ''}><label for="ds-media-folder-per-title">按帖子标题建立子文件夹</label></div>
          </div>
                    <div class="ds-section-title">🌐 翻译设置 <span style="font-size:11px;color:#ef4444;">（仅OB保存翻译版，飞书/HTML保留原文）</span></div>
          <div class="ds-checkbox-group"><input type="checkbox" id="ds-enable-translation" ${config.enableTranslation ? 'checked' : ''}><label for="ds-enable-translation">启用翻译后保存</label></div>
          <div id="ds-trans-panel" style="margin-left:26px;${config.enableTranslation ? '' : 'display:none;'}">
            <div class="ds-form-group">
              <label>翻译目标语言</label>
              <select id="ds-trans-to-lang">
                <option value="zh-CN" ${(config.transToLang||'zh-CN') === 'zh-CN' ? 'selected' : ''}>中文（默认）</option>
                <option value="en" ${(config.transToLang||'') === 'en' ? 'selected' : ''}>English</option>
                <option value="ja" ${(config.transToLang||'') === 'ja' ? 'selected' : ''}>日本語</option>
                <option value="ko" ${(config.transToLang||'') === 'ko' ? 'selected' : ''}>한국어</option>
              </select>
              <div class="ds-hint">源语言自动检测，翻译后仅 OB 保存翻译版，飞书/百度网盘/HTML 保留原文</div>
            </div>
          </div>
          <div class="ds-section-title">飞书设置</div>

          <div class="ds-form-group">
            <label>API 版本</label>
            <select id="ds-feishu-domain" style="width:100%;padding:8px;border:1px solid #d1d5db;border-radius:6px;">
              <option value="feishu" ${config.feishuApiDomain !== 'lark' ? 'selected' : ''}>飞书国内版 (feishu.cn)</option>
              <option value="lark" ${config.feishuApiDomain === 'lark' ? 'selected' : ''}>Lark 国际版 (larksuite.com)</option>
            </select>
          </div>

          <div class="ds-form-group">
            <label>App ID</label>
            <input type="text" id="ds-feishu-app-id" value="${config.feishuAppId}" placeholder="cli_xxxxxxxxxxxxxxxx">
          </div>

          <div class="ds-form-group">
            <label>App Secret</label>
            <input type="password" id="ds-feishu-app-secret" value="${config.feishuAppSecret}" placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
          </div>

          <div class="ds-form-group">
            <label>多维表格 app_token</label>
            <input type="text" id="ds-feishu-app-token" value="${config.feishuAppToken}" placeholder="bascnxxxxxxxxxxxxxxxx">
            <div class="ds-hint">从多维表格 URL 中 /base/ 后到 ? 之前的部分</div>
          </div>

          <div class="ds-form-group">
            <label>数据表 table_id</label>
            <input type="text" id="ds-feishu-table-id" value="${config.feishuTableId}" placeholder="tblxxxxxxxxxxxxxxxx">
            <div class="ds-hint">从多维表格 URL 中 ?table= 后面的部分（以 tbl 开头）</div>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-feishu-upload-content" ${config.feishuUploadContent !== false ? 'checked' : ''}>
            <label for="ds-feishu-upload-content">上传正文到「正文」字段</label>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-feishu-upload-content-as-cloud-doc" ${config.feishuUploadContentAsCloudDoc ? 'checked' : ''}>
            <label for="ds-feishu-upload-content-as-cloud-doc">将正文导入飞书云文档，并写入「云文档链接」字段（无字段则追加到正文顶部）</label>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-feishu-upload-attachment" ${config.feishuUploadAttachment ? 'checked' : ''}>
            <label for="ds-feishu-upload-attachment">上传 MD 文件作为附件</label>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-feishu-upload-html" ${config.feishuUploadHtml ? 'checked' : ''}>
            <label for="ds-feishu-upload-html">上传 HTML 文件作为附件</label>
          </div>

          <div class="ds-form-group" style="display: flex; gap: 8px;">
            <button class="ds-btn ds-btn-secondary" id="ds-test-feishu" style="flex: none; padding: 8px 16px;">测试连接</button>
            <span id="ds-feishu-status" style="line-height: 36px; color: #6b7280; font-size: 13px;"></span>
          </div>

          <div class="ds-section-title">百度网盘备份</div>

          <div class="ds-hint" style="margin-bottom:8px;">在上方「保存目标」勾选「百度网盘」即可启用备份。</div>

          <div class="ds-form-group">
            <label>网盘应用文件夹</label>
            <input type="text" id="ds-baidupan-app-folder" value="${config.baiduPanAppFolder || 'obsidian-sync'}" placeholder="obsidian-sync">
            <div class="ds-hint">百度网盘 /apps/ 下的应用目录名</div>
          </div>

          <div class="ds-form-group">
            <label>Vault 名称（网盘子目录）</label>
            <input type="text" id="ds-baidupan-vault" value="${config.baiduPanVaultName || '精华帖子收集箱'}" placeholder="精华帖子收集箱">
          </div>

          <div class="ds-form-group">
            <label>保存子目录（可空，空则用 OB 文件夹路径）</label>
            <input type="text" id="ds-baidupan-folder" value="${config.baiduPanFolderPath || ''}" placeholder="留空则使用 Obsidian 文件夹路径">
          </div>

          <div class="ds-form-group" style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button class="ds-btn ds-btn-secondary" id="ds-baidupan-auth" style="flex: none; padding: 8px 16px;">${BaiduPanBackupModule.getToken() ? '重新授权' : '授权百度网盘'}</button>
            <button class="ds-btn ds-btn-secondary" id="ds-baidupan-test" style="flex: none; padding: 8px 16px;">测试连接</button>
            <button class="ds-btn ds-btn-secondary" id="ds-baidupan-revoke" style="flex: none; padding: 8px 12px; color: #dc2626; ${BaiduPanBackupModule.getToken() ? '' : 'display:none;'}">${BaiduPanBackupModule.getToken() ? '注销' : ''}</button>
            <span id="ds-baidupan-status" style="line-height: 36px; color: #6b7280; font-size: 13px; width: 100%;">${BaiduPanBackupModule.getToken() ? '已授权: ' + (BaiduPanBackupModule.getToken().username || '已连接') : '未授权'}</span>
          </div>

          <div class="ds-section-title">评论设置</div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-comments" ${config.saveComments ? 'checked' : ''}>
            <label for="ds-comments">保存评论</label>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-fold" ${config.foldComments ? 'checked' : ''}>
            <label for="ds-fold">折叠评论 (使用 details 标签)</label>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-save-comment-reactions" ${config.saveCommentReactions ? 'checked' : ''}>
            <label for="ds-save-comment-reactions">评论显示 Reactions</label>
            <div class="ds-hint" style="margin-left: 26px; margin-top: 2px;">每条评论下方显示反应表情 (如 ❤️ 358)</div>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-save-comment-boosts" ${config.saveCommentBoosts ? 'checked' : ''}>
            <label for="ds-save-comment-boosts">评论显示打call(Boosts)</label>
            <div class="ds-hint" style="margin-left: 26px; margin-top: 2px;">每条评论下方显示打call内容 (如 太强了佬 / 太棒了)</div>
          </div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-all-comments" ${config.saveAllComments ? 'checked' : ''}>
            <label for="ds-all-comments">保存全部评论</label>
            <div class="ds-hint" style="margin-left: 26px; margin-top: 2px;">与"楼层范围"互斥</div>
          </div>

          <div class="ds-form-group">
            <label>评论数量上限</label>
            <input type="number" id="ds-comment-count" value="${config.commentCount}" min="1" max="9999">
            <div class="ds-hint">当不勾选"保存全部"时生效</div>
          </div>

          <div class="ds-section-title">楼层范围</div>

          <div class="ds-form-group ds-checkbox-group">
            <input type="checkbox" id="ds-floor-range" ${config.useFloorRange ? 'checked' : ''}>
            <label for="ds-floor-range">启用楼层范围过滤</label>
            <div class="ds-hint" style="margin-left: 26px; margin-top: 2px;">与"保存全部评论"互斥</div>
          </div>

          <div class="ds-form-group" style="display: flex; gap: 12px;">
            <div style="flex: 1;">
              <label>起始楼层</label>
              <input type="number" id="ds-floor-from" value="${config.floorFrom}" min="1">
            </div>
            <div style="flex: 1;">
              <label>结束楼层</label>
              <input type="number" id="ds-floor-to" value="${config.floorTo}" min="1">
            </div>
          </div>

        </div>
      `;

      document.body.appendChild(overlay);
      collapseSectionsKeepTopTotal(overlay);

      const normalizeSiteInput = (siteRaw) => {
        if (!siteRaw) return '';
        return String(siteRaw).trim().toLowerCase()
          .replace(/^https?:\/\//, '')
          .replace(/\/.*$/, '')
          .replace(/^\*\./, '');
      };
      const parseCustomSites = (raw) => {
        const seen = new Set();
        return String(raw || '')
          .split(',')
          .map(normalizeSiteInput)
          .filter(Boolean)
          .filter(site => {
            if (seen.has(site)) return false;
            seen.add(site);
            return true;
          });
      };
      const customSitesHidden = overlay.querySelector('#ds-custom-sites');
      const customSitesInput = overlay.querySelector('#ds-custom-sites-input');
      const customSitesList = overlay.querySelector('#ds-custom-sites-list');
      let customSitesArray = parseCustomSites(customSitesHidden.value);

      const syncCustomSitesHidden = () => {
        customSitesHidden.value = customSitesArray.join(',');
      };
      const renderCustomSites = () => {
        customSitesList.innerHTML = '';
        if (customSitesArray.length === 0) {
          customSitesList.innerHTML = '<span style="font-size:12px;color:#9ca3af;">暂无自定义站点</span>';
          syncCustomSitesHidden();
          return;
        }
        customSitesArray.forEach((site) => {
          const item = document.createElement('span');
          item.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:3px 8px;border:1px solid #d1d5db;border-radius:999px;font-size:12px;color:#374151;background:#f9fafb;';
          item.textContent = site;
          const removeBtn = document.createElement('button');
          removeBtn.type = 'button';
          removeBtn.textContent = '×';
          removeBtn.style.cssText = 'border:none;background:transparent;color:#ef4444;cursor:pointer;font-size:14px;line-height:1;';
          removeBtn.addEventListener('click', () => {
            customSitesArray = customSitesArray.filter(s => s !== site);
            renderCustomSites();
          });
          item.appendChild(removeBtn);
          customSitesList.appendChild(item);
        });
        syncCustomSitesHidden();
      };
      overlay.querySelector('#ds-custom-sites-add').addEventListener('click', () => {
        const normalized = normalizeSiteInput(customSitesInput.value);
        if (!normalized) return;
        if (!customSitesArray.includes(normalized)) {
          customSitesArray.push(normalized);
          renderCustomSites();
        }
        customSitesInput.value = '';
      });
      customSitesInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          overlay.querySelector('#ds-custom-sites-add').click();
        }
      });
      overlay.querySelector('#ds-custom-sites-clear').addEventListener('click', () => {
        customSitesArray = [];
        renderCustomSites();
      });
      renderCustomSites();

      // ===== 51吃瓜自定义域名 =====
      const cgCustomSitesHidden = overlay.querySelector('#ds-cg-custom-sites');
      const cgCustomSitesInput = overlay.querySelector('#ds-cg-custom-sites-input');
      const cgCustomSitesList = overlay.querySelector('#ds-cg-custom-sites-list');
      let cgCustomSitesArray = parseCustomSites(cgCustomSitesHidden.value);

      const syncCgCustomSitesHidden = () => {
        cgCustomSitesHidden.value = cgCustomSitesArray.join(',');
      };
      const renderCgCustomSites = () => {
        cgCustomSitesList.innerHTML = '';
        if (cgCustomSitesArray.length === 0) {
          cgCustomSitesList.innerHTML = '<span style="font-size:12px;color:#9ca3af;">暂无自定义51吃瓜域名（换域名时来这里添加）</span>';
          syncCgCustomSitesHidden();
          return;
        }
        cgCustomSitesArray.forEach((site) => {
          const item = document.createElement('span');
          item.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:3px 8px;border:1px solid #f97316;border-radius:999px;font-size:12px;color:#c2410c;background:#fff7ed;';
          item.textContent = site;
          const removeBtn = document.createElement('button');
          removeBtn.type = 'button';
          removeBtn.textContent = '×';
          removeBtn.style.cssText = 'border:none;background:transparent;color:#ef4444;cursor:pointer;font-size:14px;line-height:1;';
          removeBtn.addEventListener('click', () => {
            cgCustomSitesArray = cgCustomSitesArray.filter(s => s !== site);
            renderCgCustomSites();
          });
          item.appendChild(removeBtn);
          cgCustomSitesList.appendChild(item);
        });
        syncCgCustomSitesHidden();
      };
      overlay.querySelector('#ds-cg-custom-sites-add').addEventListener('click', () => {
        const normalized = normalizeSiteInput(cgCustomSitesInput.value);
        if (!normalized) return;
        if (!cgCustomSitesArray.includes(normalized)) {
          cgCustomSitesArray.push(normalized);
          renderCgCustomSites();
        }
        cgCustomSitesInput.value = '';
      });
      cgCustomSitesInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          overlay.querySelector('#ds-cg-custom-sites-add').click();
        }
      });
      overlay.querySelector('#ds-cg-custom-sites-clear').addEventListener('click', () => {
        cgCustomSitesArray = [];
        renderCgCustomSites();
      });
      renderCgCustomSites();

      // 互斥逻辑：saveAllComments 和 useFloorRange
      const allCommentsCheckbox = overlay.querySelector('#ds-all-comments');
      const floorRangeCheckbox = overlay.querySelector('#ds-floor-range');

      allCommentsCheckbox.addEventListener('change', () => {
        if (allCommentsCheckbox.checked) {
          floorRangeCheckbox.checked = false;
        }
      });

      floorRangeCheckbox.addEventListener('change', () => {
        if (floorRangeCheckbox.checked) {
          allCommentsCheckbox.checked = false;
        }
      });
      // 测试飞书连接
      overlay.querySelector('#ds-test-feishu').addEventListener('click', async () => {
        const appId = overlay.querySelector('#ds-feishu-app-id').value.trim();
        const appSecret = overlay.querySelector('#ds-feishu-app-secret').value.trim();
        const domain = overlay.querySelector('#ds-feishu-domain').value;
        const statusEl = overlay.querySelector('#ds-feishu-status');

        if (!appId || !appSecret) {
          statusEl.textContent = '请先填写 App ID 和 App Secret';
          statusEl.style.color = '#ef4444';
          return;
        }

        statusEl.textContent = '测试中...';
        statusEl.style.color = '#6b7280';

        try {
          const result = await SaveModule.testFeishuConnection(appId, appSecret, domain);
          if (result.success) {
            statusEl.textContent = '连接成功，Token 已获取';
            statusEl.style.color = '#22c55e';
          } else {
            statusEl.textContent = '连接失败: ' + result.error;
            statusEl.style.color = '#ef4444';
          }
        } catch (e) {
          statusEl.textContent = '测试出错: ' + e.message;
          statusEl.style.color = '#ef4444';
        }
      });

      // 百度网盘授权
      // 百度网盘授权轮询 — 使用 abort 标志隔离
      let _baiduAuthAbort = false;
      overlay.querySelector('#ds-baidupan-auth').addEventListener('click', async () => {
        _baiduAuthAbort = true; // 取消可能正在进行的上一次轮询
        await new Promise(r => setTimeout(r, 100)); // 等上一轮退出
        _baiduAuthAbort = false;
        const statusEl = overlay.querySelector('#ds-baidupan-status');
        statusEl.textContent = '正在获取授权码...';
        statusEl.style.color = '#6b7280';
        try {
          const config = ConfigModule.get();
          const device = await BaiduPanBackupModule.getDeviceCode(config);
          statusEl.innerHTML = `请在浏览器中打开：<a href="${device.verificationUrl}" target="_blank" style="color:#2563eb;">${device.verificationUrl}</a><br>输入用户码：<strong>${device.userCode}</strong><br>等待授权中...`;
          window.open(device.verificationUrl, '_blank');
          const maxAttempts = Math.min(Math.floor(device.expiresIn / device.interval), 60); // 最多轮询 60 次
          for (let i = 0; i < maxAttempts; i++) {
            if (_baiduAuthAbort || !overlay.isConnected) return; // 面板关闭或重复点击时中止
            await new Promise(r => setTimeout(r, device.interval * 1000));
            if (_baiduAuthAbort || !overlay.isConnected) return;
            const tok = await BaiduPanBackupModule.pollForToken(device.deviceCode, config);
            if (tok) {
              statusEl.textContent = `授权成功！用户: ${tok.username || '已连接'}`;
              statusEl.style.color = '#22c55e';
              const authBtn = overlay.querySelector('#ds-baidupan-auth');
              const revokeBtn = overlay.querySelector('#ds-baidupan-revoke');
              if (authBtn) authBtn.textContent = '重新授权';
              if (revokeBtn) { revokeBtn.textContent = '注销'; revokeBtn.style.display = ''; }
              return;
            }
          }
          if (!_baiduAuthAbort) { statusEl.textContent = '授权超时，请重试'; statusEl.style.color = '#ef4444'; }
        } catch (e) {
          if (!_baiduAuthAbort) { statusEl.textContent = '授权失败: ' + e.message; statusEl.style.color = '#ef4444'; }
        }
      });

      // 百度网盘测试连接
      overlay.querySelector('#ds-baidupan-test').addEventListener('click', async () => {
        const statusEl = overlay.querySelector('#ds-baidupan-status');
        statusEl.textContent = '测试中...';
        statusEl.style.color = '#6b7280';
        try {
          const config = ConfigModule.get();
          const info = await BaiduPanBackupModule.testConnection(config);
          const usedGB = (info.used / 1024 / 1024 / 1024).toFixed(2);
          const totalGB = (info.total / 1024 / 1024 / 1024).toFixed(0);
          statusEl.textContent = `连接成功！用户: ${info.username || '未知'}，已用 ${usedGB}GB / ${totalGB}GB`;
          statusEl.style.color = '#22c55e';
        } catch (e) {
          statusEl.textContent = '连接失败: ' + e.message;
          statusEl.style.color = '#ef4444';
        }
      });

      // 百度网盘注销
      overlay.querySelector('#ds-baidupan-revoke').addEventListener('click', () => {
        if (confirm('确认注销百度网盘授权？\n注销后需重新扫码授权才能继续备份。')) {
          BaiduPanBackupModule.revokeAuth();
          const statusEl = overlay.querySelector('#ds-baidupan-status');
          statusEl.textContent = '已注销，如需使用请重新授权';
          statusEl.style.color = '#ef4444';
          overlay.querySelector('#ds-baidupan-auth').textContent = '授权百度网盘';
          const revokeBtn = overlay.querySelector('#ds-baidupan-revoke');
          revokeBtn.textContent = '';
          revokeBtn.style.display = 'none';
          // 自动取消百度网盘保存目标
          const bpCheckbox = overlay.querySelector('#ds-save-baidupan-target');
          if (bpCheckbox) bpCheckbox.checked = false;
        }
      });

            // 翻译设置 checkbox 显隐
      const transToggle = overlay.querySelector('#ds-enable-translation');
      const transPanel = overlay.querySelector('#ds-trans-panel');
      if (transToggle) {
        transToggle.addEventListener('change', (e) => {
          transPanel.style.display = e.target.checked ? '' : 'none';
        });
      }

      // 下载图片 checkbox 显隐
      overlay.querySelector('#ds-download-images').addEventListener('change', (e) => {
        overlay.querySelector('#ds-download-images-panel').style.display = e.target.checked ? '' : 'none';
      });

      // 按平台分流面板联动
      overlay.querySelector('#ds-use-platform-folders').addEventListener('change', (e) => {
        const display = e.target.checked ? '' : 'none';
        overlay.querySelector('#ds-platform-folders-panel').style.display = display;
        const dsfPanel = overlay.querySelector('#ds-discourse-site-folders-panel');
        if (dsfPanel) dsfPanel.style.display = display;
      });

      // Callout 面板联动
      overlay.querySelector('#ds-callout').addEventListener('change', (e) => {
        overlay.querySelector('#ds-callout-fields-panel').style.display = e.target.checked ? '' : 'none';
      });

      // 测试 REST API 连接
      overlay.querySelector('#ds-test-rest-api').addEventListener('click', async () => {
        const statusEl = overlay.querySelector('#ds-rest-api-status');
        const apiKey = overlay.querySelector('#ds-rest-api-key').value.trim();
        const apiPort = parseInt(overlay.querySelector('#ds-rest-api-port').value) || 27124;

        statusEl.textContent = '正在测试...';
        statusEl.style.color = '#6b7280';

        try {
          const result = await UtilModule.testRestApiConnection(apiKey, apiPort);
          if (result.success) {
            statusEl.textContent = '连接成功';
            statusEl.style.color = '#10b981';
          } else {
            statusEl.textContent = result.message;
            statusEl.style.color = '#ef4444';
          }
        } catch (e) {
          statusEl.textContent = '测试失败: ' + e.message;
          statusEl.style.color = '#ef4444';
        }
      });

      // OB 测试按钮（使用 v4.3.8 验证过的剪贴板方式）
      overlay.querySelector('#ds-test-ob').addEventListener('click', async () => {
        const vaultName = overlay.querySelector('#ds-vault').value.trim();
        const folderPath = overlay.querySelector('#ds-folder').value.trim() || 'Discourse收集箱';
        const encode = (str) => encodeURIComponent(str);

        console.log('[Discourse Saver] OB 测试: vault=' + vaultName + ', folder=' + folderPath);

        // 测试内容
        const testContent = '# Discourse Saver 测试\n\n如果你看到这个文件，说明连接成功！\n\n时间: ' + new Date().toISOString();

        try {
          // 步骤1：写入剪贴板（v4.3.8 方式）
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(testContent);
            console.log('[Discourse Saver] 测试内容已写入剪贴板 (原生API)');
          } else {
            GM_setClipboard(testContent, 'text');
            console.log('[Discourse Saver] 测试内容已写入剪贴板 (GM API)');
          }

          // 步骤2：构建 URI（始终用 clipboard=true）
          const vaultParam = vaultName ? 'vault=' + encode(vaultName) + '&' : '';
          const testUri = 'obsidian://advanced-uri?' + vaultParam +
            'filepath=' + encode(folderPath + '/DS-测试文件.md') + '&' +
            'clipboard=true&' +
            'mode=overwrite';

          console.log('[Discourse Saver] 测试 URI:', testUri);

          alert('测试内容已复制到剪贴板。\n\n即将打开 Obsidian，如果成功会在 "' + folderPath + '" 文件夹中看到 "DS-测试文件.md"');

          window.location.href = testUri;
        } catch (e) {
          console.error('[Discourse Saver] 测试失败:', e);
          alert('测试失败: ' + e.message + '\n\n请确保浏览器允许剪贴板访问。');
        }
      });

      // 取消按钮
      overlay.querySelector('#ds-cancel').addEventListener('click', () => {
        overlay.remove();
      });

      // 导出配置
      overlay.querySelector('#ds-export-config').addEventListener('click', () => {
        const cfg = ConfigModule.get();
        const json = JSON.stringify(cfg, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        a.download = `xingcun-config-${dateStr}.json`;
        a.click();
        URL.revokeObjectURL(url);
        UtilModule.showNotification('配置已导出', 'success');
      });

      overlay.querySelector('#ds-open-logs').addEventListener('click', () => {
        LogModule.renderPanel();
      });

      // 导入配置
      overlay.querySelector('#ds-import-config').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const imported = JSON.parse(ev.target.result);
            ConfigModule.setAll(imported);
            overlay.remove();
            UtilModule.showNotification('配置已导入，重新打开设置即可看到', 'success');
          } catch (err) {
            UtilModule.showNotification('导入失败：JSON 格式不正确', 'error');
          }
        };
        reader.readAsText(file);
      });

      // 保存按钮
      overlay.querySelector('#ds-save').addEventListener('click', () => {
        // 安全查询辅助：防止元素不存在时崩溃
        const _q = (sel) => overlay.querySelector(sel);
        const _val = (sel, def = '') => { const el = _q(sel); return el ? (el.value || '').trim() : def; };
        const _chk = (sel, def = false) => { const el = _q(sel); return el ? el.checked : def; };
        const _int = (sel, def = 0) => parseInt(_val(sel, String(def))) || def;

        const newConfig = {
          // 自定义站点
          customSites: _val('#ds-custom-sites'),
          cgCustomSites: _val('#ds-cg-custom-sites'),
          // 保存目标
          saveToObsidian: _chk('#ds-save-obsidian'),
          saveToFeishu: _chk('#ds-save-feishu'),
          // Obsidian设置
          vaultName: _val('#ds-vault'),
          folderPath: _val('#ds-folder', 'Discourse收集箱') || 'Discourse收集箱',
          saveConflictMode: _val('#ds-conflict-mode', 'overwrite'),
          addMetadata: _chk('#ds-metadata', true),
          addCallout: _chk('#ds-callout', true),
          calloutFollowMeta: _chk('#ds-callout-follow-meta', true),
          calloutField_url: _chk('#ds-cf-url', true),
          calloutFieldName_url: _val('#ds-cfn-url', '来源') || '来源',
          calloutField_title: _chk('#ds-cf-title', true),
          calloutFieldName_title: _val('#ds-cfn-title', '标题') || '标题',
          calloutField_author: _chk('#ds-cf-author', true),
          calloutFieldName_author: _val('#ds-cfn-author', '作者') || '作者',
          calloutAuthorLink: _chk('#ds-cf-author-link', true),
          calloutField_category: _chk('#ds-cf-category', true),
          calloutFieldName_category: _val('#ds-cfn-category', '类别') || '类别',
          calloutField_tags: _chk('#ds-cf-tags', true),
          calloutFieldName_tags: _val('#ds-cfn-tags', 'tags') || 'tags',
          calloutField_time: _chk('#ds-cf-time', true),
          calloutFieldName_time: _val('#ds-cfn-time', '保存时间') || '保存时间',
          calloutField_platform: _chk('#ds-cf-platform', true),
          calloutFieldName_platform: _val('#ds-cfn-platform', '平台') || '平台',
          calloutField_commentCount: _chk('#ds-cf-commentCount', true),
          calloutFieldName_commentCount: _val('#ds-cfn-commentCount', '评论数') || '评论数',
          calloutField_reactions: _chk('#ds-cf-reactions', true),
          calloutFieldName_reactions: _val('#ds-cfn-reactions', '反应') || '反应',
          calloutField_boosts: _chk('#ds-cf-boosts', true),
          calloutFieldName_boosts: _val('#ds-cfn-boosts', '打call') || '打call',
          useAdvancedUri: _chk('#ds-advanced-uri', true),
          embedImages: _chk('#ds-embed-images'),
          // 下载图片到本地
          downloadImages: _chk('#ds-download-images'),
          downloadVideos: _chk('#ds-download-videos', true),
          restApiKey: _val('#ds-rest-api-key'),
          restApiPort: _int('#ds-rest-api-port', 27124),
          mediaFolderName: _val('#ds-media-folder-name', 'media') || 'media',
          mediaFolderPerTitle: _chk('#ds-media-folder-per-title'),
          // 翻译设置
          enableTranslation: _chk('#ds-enable-translation'),
          transToLang: _val('#ds-trans-to-lang', 'zh-CN'),
          // 飞书设置
          feishuApiDomain: _val('#ds-feishu-domain', 'feishu'),
          feishuAppId: _val('#ds-feishu-app-id'),
          feishuAppSecret: _val('#ds-feishu-app-secret'),
          feishuAppToken: _val('#ds-feishu-app-token'),
          feishuTableId: _val('#ds-feishu-table-id'),
          feishuUploadContent: _chk('#ds-feishu-upload-content', true),
          feishuUploadContentAsCloudDoc: _chk('#ds-feishu-upload-content-as-cloud-doc'),
          feishuUploadAttachment: _chk('#ds-feishu-upload-attachment'),
          feishuUploadHtml: _chk('#ds-feishu-upload-html'),
          // 百度网盘
          saveToBaiduPan: _chk('#ds-save-baidupan-target'),
          baiduPanAppFolder: _val('#ds-baidupan-app-folder', 'obsidian-sync') || 'obsidian-sync',
          baiduPanVaultName: _val('#ds-baidupan-vault', '精华帖子收集箱') || '精华帖子收集箱',
          baiduPanFolderPath: _val('#ds-baidupan-folder'),
          // 评论设置
          saveComments: _chk('#ds-comments'),
          foldComments: _chk('#ds-fold'),
          saveCommentReactions: _chk('#ds-save-comment-reactions'),
          saveCommentBoosts: _chk('#ds-save-comment-boosts'),
          saveAllComments: _chk('#ds-all-comments'),
          commentCount: _int('#ds-comment-count', 100),
          // 楼层范围
          useFloorRange: _chk('#ds-floor-range'),
          floorFrom: _int('#ds-floor-from', 1),
          floorTo: _int('#ds-floor-to', 100),
          // 按平台分流
          usePlatformFolders: _chk('#ds-use-platform-folders')
        };

        // 收集按平台文件夹配置
        const pfInputs = overlay.querySelectorAll('.ds-pf-input');
        const platformFolders = {};
        pfInputs.forEach(input => {
          const platform = input.getAttribute('data-platform');
          const value = (input.value || '').trim();
          if (platform && value) platformFolders[platform] = value;
        });
        newConfig.platformFolders = platformFolders;

        // 收集 Discourse 站点细分文件夹配置
        const dsfInputs = overlay.querySelectorAll('.ds-dsf-input');
        const discourseSiteFolders = {};
        dsfInputs.forEach(input => {
          const host = input.getAttribute('data-host');
          const value = (input.value || '').trim();
          if (host && value) discourseSiteFolders[host] = value;
        });
        // 合并到默认值（保留未显示的默认站点）
        const defaultDsf = ConfigModule.getDefault()?.discourseSiteFolders || {};
        newConfig.discourseSiteFolders = { ...defaultDsf, ...discourseSiteFolders };

        ConfigModule.setAll(newConfig);
        // 保存站点开关（单独存储，不通过 ConfigModule）
        const siteKeys = ['wechat','zhihu','weibo','x','discourse','people','xinhua','thepaper','36kr','sspai','juejin','ithome','toutiao','douyin','bilibili','youtube','trae','feishu_doc','51cg','x6d3i','hostloc','chiphell','nga','1point3acres','right','v2ex','nodeseek'];
        siteKeys.forEach(k => {
          const el = overlay.querySelector(`#ds-site-${k}`);
          if (el) GM_setValue(`siteEnabled_${k}`, el.checked);
        });
        overlay.remove();
        UtilModule.showNotification('设置已保存', 'success');
      });

      // 点击遮罩关闭
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.remove();
        }
      });
    }

    // 初始化
    function init() {
      // 检测是否是支持的站点（加异常保护，防止单一页面错误阻断全局）
      let isDiscourse = false;
      let isTopicPageNow = false;
      let currentUrl = '';
      try {
        isDiscourse = ExtractModule.isDiscourseForumPage();
        isTopicPageNow = ExtractModule.isTopicPage();
        currentUrl = window.location.href;
      } catch (e) {
        console.warn('[Discourse Saver] 站点检测异常，跳过:', e.message);
      }

      console.log('[Discourse Saver] 检测结果:');
      console.log('[Discourse Saver] - 是否支持站点:', isDiscourse);
      console.log('[Discourse Saver] - 是否帖子页面:', isTopicPageNow);
      console.log('[Discourse Saver] - 当前 URL:', currentUrl);

      try { XVideoModule.initDetector(); } catch (_) {}
      // 飞书云文档页面：提前解除复制保护
      try {
        if (ExtractModule.getSiteType() === 'feishu_doc') {
          try { FeishuDocModule.neutralizeCopyProtection(); } catch (_) {}
        }
      } catch (_) {}
      try { injectStyles(); } catch (_) {}
      try { ensureFloatingButtonVisible(); } catch (_) {}
      // 异步渲染页面兜底重试（公众号/知乎/微博常见）
      [600, 1500, 3000].forEach((delay) => {
        setTimeout(() => { try { ensureFloatingButtonVisible(); } catch (_) {} }, delay);
      });

      // SPA 页面切换/重渲染后兜底恢复悬浮按钮
      if (!window.__dsFloatWatchStarted) {
        window.__dsFloatWatchStarted = true;
        const currentSiteType = ExtractModule.getSiteType ? ExtractModule.getSiteType() : 'discourse';
        const isFeishuSite = currentSiteType === 'feishu_doc';

        // 飞书页面使用更长的轮询间隔（减少无意义触发），其他页面保持 1200ms
        const pollInterval = isFeishuSite ? 5000 : 1200;
        window.setInterval(() => {
          try { ensureFloatingButtonVisible(); } catch (_) {}
        }, pollInterval);

        // 路由变化即时触发（移动端更依赖）
        const _pushState = history.pushState;
        history.pushState = function(...args) {
          const ret = _pushState.apply(this, args);
          _lastFloatBtnVisible = null; // 路由变化时重置状态
          setTimeout(() => { try { ensureFloatingButtonVisible(); } catch (_) {} }, 50);
          return ret;
        };
        const _replaceState = history.replaceState;
        history.replaceState = function(...args) {
          const ret = _replaceState.apply(this, args);
          _lastFloatBtnVisible = null;
          setTimeout(() => { try { ensureFloatingButtonVisible(); } catch (_) {} }, 50);
          return ret;
        };
        window.addEventListener('popstate', () => {
          _lastFloatBtnVisible = null;
          setTimeout(() => { try { ensureFloatingButtonVisible(); } catch (_) {} }, 50);
        }, { passive: true });
        window.addEventListener('hashchange', () => {
          _lastFloatBtnVisible = null;
          setTimeout(() => { try { ensureFloatingButtonVisible(); } catch (_) {} }, 50);
        }, { passive: true });

        // DOM 重绘兜底（Edge 浏览器常见延迟渲染），防抖 + 自触发隔离
        // 飞书页面 DOM 变更极为频繁，使用更长防抖避免闪烁
        const mutDebounceDelay = isFeishuSite ? 1500 : 300;
        let _mutDebounce = null;
        let _mutIgnore = false; // 防止 ensureFloatingButtonVisible 触发的 DOM 变更再次回调
        const observer = new MutationObserver((mutations) => {
          if (_mutIgnore) return;
          if (_mutDebounce) { clearTimeout(_mutDebounce); }
          // 忽略自身按钮引起的 DOM 变更
          const isOwnMutation = mutations.every(m =>
            Array.from(m.addedNodes).every(n => n.id === 'ds-float-btn' || n.id === 'ds-float-menu' || n.className === 'ds-notification') &&
            Array.from(m.removedNodes).every(n => n.id === 'ds-float-btn' || n.id === 'ds-float-menu' || n.className === 'ds-notification')
          );
          if (isOwnMutation) return;
          _mutDebounce = setTimeout(() => {
            _mutDebounce = null;
            _mutIgnore = true;
            try { ensureFloatingButtonVisible(); } catch (_) {}
            _mutIgnore = false;
          }, mutDebounceDelay);
        });
        if (document.body) {
          observer.observe(document.body, { childList: true, subtree: false });
        }
      }

      // 注册油猴菜单
      GM_registerMenuCommand('⚙️ 设置', showSettingsPanel);
      GM_registerMenuCommand('📥 保存当前内容（全部目标）', () => SaveModule.save(null));
      GM_registerMenuCommand('📝 仅保存到 Obsidian', () => SaveModule.saveToObsidianOnly(null));
      GM_registerMenuCommand('🐦 仅保存到飞书', () => SaveModule.saveToFeishuOnly(null));
      GM_registerMenuCommand('☁️ 仅保存到百度网盘', () => SaveModule.saveToBaiduPanOnly(null));
      GM_registerMenuCommand('🖼️ 一键保存图片（当前页）', () => SaveModule.saveImagesOnly());
      GM_registerMenuCommand('📋 打开日志面板', () => LogModule.renderPanel());
      GM_registerMenuCommand('💾 下载大文件（备选）', () => SaveModule.downloadLastLargeFile());
      GM_registerMenuCommand('🔍 调试信息', () => {
        const info = {
          isDiscourse: ExtractModule.isDiscourseForumPage(),
          isTopicPage: ExtractModule.isTopicPage(),
          url: window.location.href,
          title: document.title,
          hasTopicTitle: !!document.querySelector('#topic-title h1, .fancy-title'),
          hasCooked: !!document.querySelector('.cooked'),
          hasPostStream: !!document.querySelector('.post-stream, .topic-post')
        };
        console.log('[Discourse Saver] 调试信息:', info);
        alert('调试信息已输出到控制台 (F12)\n\n' +
              '是否 Discourse: ' + info.isDiscourse + '\n' +
              '是否帖子页面: ' + info.isTopicPage + '\n' +
              '找到标题: ' + info.hasTopicTitle + '\n' +
              '找到内容: ' + info.hasCooked + '\n' +
              '找到帖子流: ' + info.hasPostStream);
      });

      console.log(`[Discourse Saver] 星存助手已加载 (V${(typeof GM_info !== 'undefined' && GM_info.script && GM_info.script.version) || '0.9.9'})`);
    }

    return { init, showSettingsPanel };
  })();

  // ============================================================
  // 启动脚本
  // ============================================================
  // 悬浮按钮统一由 UIModule.init() -> ensureFloatingButtonVisible() 管理，
  // 避免 FloatingBtnModule.mkBtn() 与 UIModule 的双重创建冲突。
  UIModule.init();

})();