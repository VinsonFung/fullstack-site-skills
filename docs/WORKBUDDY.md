# WorkBuddy 安装说明

本包的展示名称和推荐安装命令使用 **WorkBuddy**。旧的 `--agent codebuddy` 仍可使用，安装器会把它识别为同一个目标；同时写两个名称也只安装一次。

## 代码项目中的文件安装

WorkBuddy 官方项目文档说明，它兼容 CodeBuddy 的项目和用户配置，所以这里保留已经有依据的路径，不机械地把目录名称改成 `.workbuddy`：

- 项目：`.codebuddy/skills/<技能名>/SKILL.md`
- 用户：`~/.codebuddy/skills/<技能名>/SKILL.md`

在本技能包目录中先预览，再复制：

```sh
node scripts/install.mjs --agent workbuddy --scope user
node scripts/install.mjs --agent workbuddy --scope user --apply
```

重新打开对应项目或会话，确认技能已识别，再说“使用 fullstack-frontend-development 改进我的网站手机导航”。管理界面和服务端任务用 `fullstack-backend-development`，需要这套视觉方向时用 `fullstack-design-style`。如你的版本使用自定义目录，请以实际客户端说明为准，复制完整技能文件夹。

## 技能市场／开放平台不是同一条安装路径

WorkBuddy 提供技能市场和本地导入入口。开放平台的发布规范还要求版本、作者和中英文简介等额外信息，本包保留的是通用 Agent Skills 格式，**没有声称整包 ZIP 可以直接作为一个市场技能导入，也没有代你向市场提交**。

需要走市场导入时，应单独选择一个技能，按该客户端或开放平台的要求补充信息并打包；不能只把整个仓库 ZIP 上传进去。普通代码项目的兼容目录安装不需要向市场发布。

官方依据：[WorkBuddy 项目配置](https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Project)、[技能界面](https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Skills-Market)、[开放平台技能规范](https://open.workbuddy.cn/en/docs/skill)。

## English summary

Use `--agent workbuddy` for the documented CodeBuddy-compatible project/user directories. `codebuddy` remains a deduplicated alias. Copy each complete skill, reload the project and confirm discovery. Marketplace/Open Platform submission is a different workflow with additional metadata requirements; this repository does not claim that its whole ZIP can be imported as one marketplace skill.
