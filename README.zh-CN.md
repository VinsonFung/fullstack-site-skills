# Fullstack Site Skills

**简体中文** · [繁體中文](README.zh-TW.md) · [English](README.md)

## 这是什么？

这是一套给 **AI 编程助手使用的全栈网站开发工作指南**，包含九个可独立安装的技能，覆盖规划、视觉设计、交互检查、编辑器、内容同步、发布、AI 功能、安全和维护。安装到你正在使用的 Agent 中，再提出具体任务并说明要用哪个技能。

可以把 Skill 理解成给 AI 的工作手册：告诉它先检查什么、如何修改、哪些已有内容需要保护，以及用什么证据确认结果有效。每个技能都是独立文件夹，入口是 `SKILL.md`，并附有需要的参考资料或工具。

它适合个人博客、作品集、相册网站等项目：既有访客看到的页面，也有内容编辑和用户互动功能。它不是网站模板、在线服务，也不是新的 AI 模型；安装后不会自动生成或发布网站。使用时不限定前端框架、云平台或模型服务商。

## 每个 Skill 做什么？

按你想完成的事情选择。安装后，可以把表中的例子直接作为任务交给 Agent。

| 技能 | 帮助 Agent 完成什么 | 使用例子 |
| --- | --- | --- |
| [fullstack-workflow](skills/fullstack-workflow/SKILL.md) | 把网站目标变成前台、后台、接口和存储相互配合的计划与实现，并说明如何验收。 | “给博客增加相册，先梳理编辑、存储和公开展示怎样连起来。” |
| [fullstack-liquid-glass-design](skills/fullstack-liquid-glass-design/SKILL.md) | 建立以摄影和内容阅读为主的视觉风格，用透明玻璃导航、按钮和面板，统一主题、字体与动效。 | “把摄影作品集做成这种液态玻璃风格，文章要易读，手机上也要好用。” |
| [fullstack-ui-review](skills/fullstack-ui-review/SKILL.md) | 检查现有界面是否读得清、找得到、操作得了，覆盖主题、弹窗、拖动、焦点和被打断的动画；只要求审查时返回问题清单。 | “审查手机菜单和主题切换，先报告能复现的问题，不修改。” |
| [fullstack-editor-reliability](skills/fullstack-editor-reliability/SKILL.md) | 保护作者在排版、表格、图片操作、模式切换、保存和重新打开过程中的内容，并处理保存冲突。 | “修复图片不能移动、不能删除的问题，确认重新打开后描述和格式仍在。” |
| [fullstack-content-sync](skills/fullstack-content-sync/SKILL.md) | 明确哪份内容才是权威来源，让相关展示使用同一版本，刷新时保留草稿和共用媒体。 | “文章发布了，但搜索和日历没有更新，追查并修复同步问题。” |
| [fullstack-release](skills/fullstack-release/SKILL.md) | 把已授权、已检查的修改提交和部署，再确认正式网站显示预期版本。 | “发布这次已授权的修改，并确认正式网站已经更新。” |
| [fullstack-ai-safety](skills/fullstack-ai-safety/SKILL.md) | 开发基于本站内容的聊天或影像助手，使用已发布资料，在服务端保管密钥，并限制媒体访问、使用量和费用。 | “增加只使用已发布文章的网站助手，保护草稿，并设置费用上限。” |
| [fullstack-security-review](skills/fullstack-security-review/SKILL.md) | 检查权限、接口、上传和内容渲染中实际可触达的风险，审查发布文件里的密钥与私有数据。 | “上线前审查上传接口和管理员权限。” |
| [fullstack-maintenance](skills/fullstack-maintenance/SKILL.md) | 清理前追踪文件引用，准备限定范围的撤销和备份恢复，确认哪些资源仍在使用。 | “列出未使用媒体及其引用，准备能够恢复的清理方案。” |

### 视觉设计与 UI 审查有什么区别？

想按这套具体方向创建或改版网站外观时，用 `fullstack-liquid-glass-design`。它让照片承担主要构图：浅色主题采用暖纸色背景、柔和白色玻璃与克制的蓝色点缀，深色主题采用有层次的藏蓝；标题有辨识度，正文适合长篇阅读。导航、按钮和部分面板使用透明材质、细微高光与适量阴影，阅读和编辑区域保持安静清晰；动效从触发控件的位置展开，并适配手机和“减少动态效果”偏好。

想检查现有界面或修复具体操作时，用 `fullstack-ui-review`。它关注文字能否看清、弹窗是否对齐、键盘与触屏能否操作、动画中途打断是否正常，并尊重网站已经选定的视觉风格，不要求采用玻璃效果。

两者可以组合：先用 `fullstack-liquid-glass-design` 建立外观，再用 `fullstack-ui-review` 检查实际使用过程。设计技能是可选且独立的方向，不依赖 Hallmark，也不会把这套外观强加给另外八个技能。安装全部九个技能，不代表每项任务都要调用全部技能。

### 只用一个，还是组合使用？

- 问题明确且范围较小时，单独使用对应技能。例如正文图片操作出错，通常先用 `fullstack-editor-reliability`。
- 功能跨越多个层面时，先用 `fullstack-workflow`，再加上相关技能。例如新增相册可能需要视觉设计、内容同步和 UI 审查。
- 发布或维护时，只在你已授权的操作范围内调用相关技能。设计或审查任务本身不会自动授权部署或删除。

每个技能自带所需参考资料，不强制安装其他技能。这套指南提供可重复使用的工作方法，不保证 AI 生成的代码一定正确。Agent 仍需要合适的工具、项目访问权限和你的授权；重要修改仍然需要人工复核。

## 三步安装与使用

### 第一步：下载完整的技能包

到 [Releases](https://github.com/VinsonFung/fullstack-site-skills/releases) 下载 ZIP，或克隆[本仓库](https://github.com/VinsonFung/fullstack-site-skills)。解压后，在 `fullstack-site-skills` 文件夹里打开终端。

附带安装器需要 Node.js 20 或以上版本，建议使用仍在维护的 LTS 版本。没有 npm 依赖，无须运行 `npm install`。如果只手动复制技能文件夹，则不需要 Node.js，除非要运行某个辅助脚本。

### 第二步：先预览，再执行安装

安装到 Codex：

```sh
node scripts/install.mjs --agent codex --scope user
node scripts/install.mjs --agent codex --scope user --apply
```

安装到 WorkBuddy：

```sh
node scripts/install.mjs --agent workbuddy --scope user
node scripts/install.mjs --agent workbuddy --scope user --apply
```

第一条只显示准备复制到哪里，带 `--apply` 的命令才会复制文件。只安装一个技能，或同时安装到多个 Agent：

```sh
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,workbuddy --scope user --skill fullstack-workflow --apply
```

如果只想让当前项目使用，在目标项目的终端执行以下命令，并把脚本路径换成实际位置。目标项目文件夹必须已经存在：

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project . --apply
```

Windows 中，脚本路径含空格时要加引号。安装器会拒绝包含 `..` 的目标路径、符号链接或目录联接，以及内容不同的已有技能文件夹；内容完全相同的会跳过。它不请求网络、不改变 Agent 权限，也不会覆盖别人的技能。写入失败可能留下部分新文件，重试前请将不完整的文件夹移到别处。

### 第三步：确认识别，然后提出任务

必要时重新加载 Agent 或新建会话。确认它能识别 `fullstack-workflow`，然后描述具体任务，例如：

```text
使用 fullstack-workflow 规划我的博客下一版。
本轮只改本地文件，不部署。

使用 fullstack-liquid-glass-design 改版我的摄影首页。
再用 fullstack-ui-review 检查手机布局、对比度和键盘操作。

使用 fullstack-editor-reliability 修复正文图片不能移动、不能删除的问题。
检查保存后重新打开、图片描述和其他格式仍然正常。

使用 fullstack-release 发布我已经授权的修改。
核验正式网站后，再确认发布完成。
```

可以使用你习惯的语言。各客户端直接调用技能的方式有所不同，详见[兼容性指南](docs/COMPATIBILITY.md)。

## 支持哪些 Agent？

安装器提供 14 个默认安装目标，包含不同产品版本：

| Agent／版本 | 安装器 ID |
| --- | --- |
| Codex | `codex` |
| Claude Code | `claude-code` |
| Cursor | `cursor` |
| GitHub Copilot | `github-copilot` |
| Gemini CLI | `gemini-cli` |
| OpenCode | `opencode` |
| DeepSeek Harness | `deepseek-harness` |
| Kimi Code CLI (Node) | `kimi-code` |
| Kimi CLI (legacy Python) | `kimi-cli` |
| Qwen Code | `qwen-code` |
| WorkBuddy | `workbuddy` |
| Qoder CLI / IDE | `qoder` |
| TRAE mainland IDE | `trae-cn` |
| TRAE CLI | `trae-cli` |

WorkBuddy 官方文档中的代码项目兼容目录仍是 `.codebuddy/skills/` 和 `~/.codebuddy/skills/`。旧命令 `--agent codebuddy` 继续作为别名使用，不会让已有命令失效。[WorkBuddy 安装说明](docs/WORKBUDDY.md)介绍了文件复制与技能市场导入的区别。

手动安装时，复制整个 `skills/<名称>/` 文件夹，包括参考资料、脚本、素材、元数据和许可证，而不是只复制 `SKILL.md`。[兼容性指南](docs/COMPATIBILITY.md)列有安装目录、调用方式和官方依据。

安装器只使用默认目录，不读取 `DSH_HOME`、`KIMI_CODE_HOME` 或客户端自定义设置；自定义目录请手动复制。尚未在每款实际客户端中完成端到端验证。DeepSeek Harness 能加载本地技能，但 DeepSeek 普通网页聊天／API 不能单靠复制文件夹来安装，详见 [DeepSeek 使用方式](docs/DEEPSEEK.md)。

可选的 [Vercel Skills CLI](https://github.com/vercel-labs/skills) 是另一套安装工具：

```sh
npx skills add https://github.com/VinsonFung/fullstack-site-skills --list
```

该方式会下载并执行第三方工具；它的 Agent ID 和安装行为不一定与本包相同，也不在本包的测试范围内。

## 检查、隐私与许可

在本包目录中执行：

```sh
node scripts/validate.mjs
node --test
node scripts/check-links.mjs
```

验证器检查必需文件、技能信息、本地引用和可疑内容。测试使用隔离项目和模拟用户目录。链接检查器检查本地目标和公开 HTTPS 链接；第三方网页之后可能迁移，或在部分网络中不可访问。具体范围与限制见[验证记录](docs/VALIDATION.md)。

安装不需要模型密钥，不发送遥测。包内是可复用的指南和本地工具，不包含原网站的正文、用户、照片或私有配置。Agent 实际使用模型时，仍遵循它自身的配置和服务商条款；本包不会调用模型或绕过权限。

采用 MIT 许可证，保留[许可声明](LICENSE)后可使用、修改和分享。其他说明：[贡献指南](CONTRIBUTING.md)、[安全问题报告](SECURITY.md)、[来源说明](docs/PROVENANCE.md)、[GitHub 上传指南](docs/PUBLISH.zh-CN.md)。
