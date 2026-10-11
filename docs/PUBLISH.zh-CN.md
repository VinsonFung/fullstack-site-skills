# 上传到 GitHub：只发布这个技能包

这份指南只帮助你手动发布技能包，不会上传个人网站。技能包采用 MIT 许可证，可以作为独立公开仓库发布。下面的 `v2.0.0` 是**技能包版本**，不是网站版本。

## 先保护提交信息

进入 GitHub 头像菜单 → **Settings → Emails**，开启 **Keep my email addresses private**。网页创建的提交将使用 GitHub 提供的 noreply 地址。检查 GitHub 公开资料中的姓名，使用你愿意公开的昵称。若改用 GitHub Desktop 或 Git 命令，还要检查它们自己的提交姓名和邮箱：公开仓库的提交记录也会公开，不仅文件内容会公开。使用公开昵称和 GitHub noreply 地址，不要填写私人邮箱或真实姓名。

[GitHub 官方邮箱隐私说明](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)。

## 推荐：网页上传，无需 Git 命令

1. 登录 GitHub，右上角 **＋ → New repository**。
2. 仓库名填 `fullstack-site-skills`，选择 **Public**。不要自动生成 README、`.gitignore` 或许可证，因为包里已经包含这些文件。点击 **Create repository**。
3. 空仓库页面点击 **uploading an existing file**；已有文件的仓库则点击 **Add file → Upload files**。
4. 打开本地 `fullstack-site-skills` 文件夹，将**里面的文件和子文件夹**拖入网页，保留目录结构。不要把外层同名文件夹作为仓库里的又一层，也不要上传 ZIP 代替源码。
5. 确认包含 `README.md`、`README.zh-CN.md`、`README.zh-TW.md`、`LICENSE`、`package.json`、`docs/`、`scripts/`、`tests/`、`skills/`，以及 `.gitignore`、`.gitattributes`。点开头的文件也不能漏掉。
6. 提交说明可填 `Add portable full-stack site skills`，完成页面上的 **Commit changes / Propose changes**。若页面要求使用分支，按提示提交并合并到默认分支。
7. 上传后打开 `skills/fullstack-frontend-development/SKILL.md`，确认能看到内容；检查 `skills/` 只有三个当前入口。首页应自动展示英文 README，其顶部可以切换简体中文、繁体中文。

网页上传一次最多 100 个文件；这份包在该范围内。浏览器上传不会应用 `.gitattributes` 的自动处理。如有部分文件或目录没有被上传，可以继续用 **Upload files** 补齐并检查完整目录，不要重新上传整个个人网站。[GitHub 官方文件上传说明](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)。

## 可选：供别人直接下载的 Release

源码上传完成后，在仓库的 **Releases → Draft a new release** 创建标签 `v2.0.0`，选择已上传源码的默认分支，标题填 `Fullstack Site Skills v2.0.0`。把对应的 `fullstack-site-skills-v2.0.0.zip` 拖到附件区，然后发布 Release。不要附上旧版本压缩包或个人项目备份。更新已有仓库时使用新的版本标签，不覆盖旧标签和旧版本附件。

从第 1 版升级已有仓库时，网页上传不会自动删除旧目录。按[迁移指南](MIGRATION.md)的旧入口清单移除仓库中的旧技能文件夹，保留其他文件和历史版本；不要把新旧入口同时留在当前 `skills/` 中。

别人可以下载 ZIP 解压后，照三语 README 安装。安装这些技能不需要你的账号、密钥、网站数据库或云端权限。

## 如果使用 GitHub Desktop

在**个人网站目录之外**创建一个全新的、独立的仓库，再复制技能包内部文件进去；检查本次修改列表后提交、发布。不要把已经有 Git 历史的完整网站目录添加为此开源仓库，也不要把原网站 `.git/` 复制过去。先检查 Desktop 的 Git 提交邮箱设置，然后确认 `Publish repository` 的公开/私密选项符合你的意愿。

## 最后检查

- 仓库根目录直接有 README 和 `skills/`，没有多套嵌套的同名包。
- 没有 `.git/`、个人网站源码、文章、照片、用户数据库、日志导出、凭据、`.env` 或私钥；不要从外围项目继续补文件。
- 使用公开的昵称和 noreply 提交邮箱；公开 GitHub 账号本身也会暴露它原有的公开个人资料，请自行检查头像、简介和历史活动。
- 在这个技能包的终端运行 `node scripts/validate.mjs`、`node --test` 和 `node scripts/check-links.mjs`，只把检查通过的版本上传。上传后点开几个技能和说明链接，确认子目录没有遗漏。
- 密钥一旦误传，单纯在下一次提交中删除不够：它可能留在历史中。应立即撤销该密钥，并按 GitHub 官方指南处理历史记录，不要依赖 `.gitignore` 隐藏已经上传的文件。
