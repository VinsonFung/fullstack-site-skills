# Fullstack Site Skills

**繁體中文** · [简体中文](README.zh-CN.md) · [English](README.md)

## 這是什麼？

Fullstack Site Skills 2.0.0 是一套給 **AI 程式開發助手使用的全端網站開發工作指南**，只有三個可獨立安裝的入口：前台開發、可選的設計風格、後台開發（包含管理介面）。把需要的技能安裝到你正在使用的 Agent，再提出具體任務並說明要用哪個技能。

可以把 Skill 理解成給 AI 的工作手冊：告訴它先檢查什麼、如何修改、哪些既有內容需要保護，以及用什麼證據確認結果有效。每個技能都是獨立資料夾，入口是 `SKILL.md`，並附有所需的參考資料或工具。

它適合個人部落格、作品集、相簿網站等專案：既有訪客看到的頁面，也有內容編輯和使用者互動功能。它不是網站範本、線上服務，也不是新的 AI 模型；安裝後不會自動產生或發布網站。使用時不限定前端框架、雲端平台或模型服務商。

## 每個 Skill 做什麼？

按你想完成的事情選擇。安裝後，可以把表中的例子直接作為任務交給 Agent。

| 技能 | 幫助 Agent 完成什麼 | 使用例子 |
| --- | --- | --- |
| [fullstack-frontend-development](skills/fullstack-frontend-development/SKILL.md)（前台開發） | 開發和檢查訪客使用的頁面：閱讀、導覽、搜尋、相簿、留言等互動，兼顧手機版面、無障礙、效能和用戶端安全。 | 「修復手機文章選單和相簿瀏覽，檢查鍵盤操作、被打斷的動畫和圖片載入緩慢的問題。」 |
| [fullstack-design-style](skills/fullstack-design-style/SKILL.md)（設計風格） | 套用攝影主導、編輯式排版、藍灰色液態玻璃視覺風格，統一構圖、淺色／深色主題、字體、透明控制項和克制的動效。 | 「依照這套風格改版攝影首頁，讓文章在兩種主題下都清晰易讀。」 |
| [fullstack-backend-development](skills/fullstack-backend-development/SKILL.md)（後台開發） | 開發管理介面和編輯器，以及 API、資料、身分驗證、媒體、內容同步、發布、備份和伺服器端 AI 安全措施。 | 「修復編輯器圖片操作和儲存衝突，確認已發布內容同步到搜尋和相簿，草稿不會外洩。」 |

### 三個技能怎樣分工？

`fullstack-frontend-development` 負責公開的訪客體驗，讓閱讀、搜尋、相簿和互動在網站既有風格下正常運作。`fullstack-backend-development` 負責作者和管理員的工作流程，包含能看到的管理頁面、編輯器，以及背後的 API 和資料。這裡的「後台開發」包含後台 UI 和編輯可靠性，並不只指伺服器端程式碼。功能同時涉及前台與後台時，要一起約定 API 和內容版本。

只有想依照這套具體方向建立或改版外觀時，才使用 `fullstack-design-style`。它讓照片承擔主要構圖，以藍灰色貫穿淺色和深色主題：淺色採用暖紙色背景、柔和白色玻璃，深色採用有層次的藏藍；標題有辨識度，正文適合長篇閱讀。導覽列、按鈕和部分面板使用透明材質、細微高光與適量陰影，閱讀和編輯區域保持安靜清晰；動效從觸發控制項的位置展開，並適配手機和「減少動態效果」偏好。

設計技能決定視覺表現；前台和後台開發負責對應頁面的實際操作、資料保護與權限約束。功能修復或審查會保留既有視覺風格，除非你明確要求改版。設計技能是可選且獨立的方向，不依賴 Hallmark；提供的是風格指南，不附帶原網站的品牌標誌、照片或正文。

### 只用一個，還是組合使用？

- 範圍明確時單獨使用：公開搜尋或手機導覽用前台開發，視覺改版用設計風格，編輯器、上傳 API 或備份流程用後台開發。
- 新增相簿等跨層功能可組合前台與後台：後台管理編輯、媒體和發布，前台向訪客展示已發布內容。需要這套視覺方向時，再加入設計風格。
- 發布、安全檢查或維護時，只在你已授權的操作範圍內使用對應指引。設計或審查任務本身不會自動授權部署或刪除；只要求審查時回傳問題清單。

每個技能都能獨立安裝，自帶所需參考資料，不強制安裝另外兩個。安全、內容同步、發布、維護等專業指引保留在內部參考資料中，遇到相關任務時按需讀取；它們不是額外的可見技能，也不要求每項任務通讀全部資料。安裝全部三個技能，不代表每項任務都要呼叫全部技能。

這套指南提供可重複使用的工作方法，不保證 AI 產生的程式碼一定正確。Agent 仍需要合適的工具、專案存取權限和你的授權；重要修改仍然需要人工複核。

### 從第 1 版升級

2.0.0 將原來的九個入口合併為這三個。[遷移指南](docs/MIGRATION.md)說明了職責對應關係和新的呼叫方式。安裝器不會自動刪除 Agent 中已安裝的舊技能資料夾；請先檢查自己的修改，再有選擇地停用或移除舊入口，避免新舊指引重複出現。

## 三步安裝與使用

### 第一步：下載完整的技能包

到 [Releases](https://github.com/VinsonFung/fullstack-site-skills/releases) 下載 ZIP，或複製[本儲存庫](https://github.com/VinsonFung/fullstack-site-skills)。解壓縮後，在 `fullstack-site-skills` 資料夾裡開啟終端機。

附帶安裝器需要 Node.js 20 或以上版本，建議使用仍在維護的 LTS 版本。沒有 npm 相依套件，無須執行 `npm install`。如果只手動複製技能資料夾，則不需要 Node.js，除非要執行某個輔助指令碼。

### 第二步：先預覽，再執行安裝

安裝到 Codex：

```sh
node scripts/install.mjs --agent codex --scope user
node scripts/install.mjs --agent codex --scope user --apply
```

安裝到 WorkBuddy：

```sh
node scripts/install.mjs --agent workbuddy --scope user
node scripts/install.mjs --agent workbuddy --scope user --apply
```

第一條只顯示準備複製到哪裡，帶 `--apply` 的命令才會複製檔案。只安裝一個技能，或同時安裝到多個 Agent：

```sh
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,workbuddy --scope user --skill fullstack-frontend-development --apply
```

如果只想讓目前專案使用，在目標專案的終端機執行以下命令，並把指令碼路徑換成實際位置。目標專案資料夾必須已經存在：

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project . --apply
```

Windows 中，指令碼路徑含空格時要加引號。安裝器會拒絕包含 `..` 的目標路徑、符號連結或目錄接合點，以及內容不同的既有技能資料夾；內容完全相同的會略過。它不發出網路請求、不改變 Agent 權限，也不會覆蓋別人的技能。寫入失敗可能留下部分新檔案，重試前請將不完整的資料夾移到別處。

### 第三步：確認辨識，然後提出任務

必要時重新載入 Agent 或新建工作階段。確認它能辨識你安裝的技能，然後描述具體任務，例如：

```text
使用 fullstack-frontend-development 修復部落格的手機選單和文章搜尋。
檢查鍵盤與觸控操作。本輪只改本機檔案，不部署。

使用 fullstack-design-style 改版我的攝影首頁。
再用 fullstack-frontend-development 檢查手機版面、對比度和鍵盤操作。

使用 fullstack-backend-development 修復編輯器圖片不能移動、不能刪除的問題。
檢查儲存後重新開啟、圖片說明和其他格式仍然正常。

使用 fullstack-backend-development 發布我已經授權的修改。
核驗正式網站後，再確認發布完成。
```

可以使用你習慣的語言。各用戶端直接呼叫技能的方式有所不同，詳見[相容性指南](docs/COMPATIBILITY.md)。

## 支援哪些 Agent？

安裝器提供 14 個預設安裝目標，包含不同產品版本：

| Agent／版本 | 安裝器 ID |
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

WorkBuddy 官方文件中的程式專案相容目錄仍是 `.codebuddy/skills/` 和 `~/.codebuddy/skills/`。舊命令 `--agent codebuddy` 繼續作為別名使用，不會讓既有命令失效。[WorkBuddy 安裝說明](docs/WORKBUDDY.md)介紹了檔案複製與技能市場匯入的區別。

手動安裝時，複製整個 `skills/<名稱>/` 資料夾，包括參考資料、指令碼、素材、介面資訊和授權文件，而不是只複製 `SKILL.md`。[相容性指南](docs/COMPATIBILITY.md)列有安裝目錄、呼叫方式和官方依據。

安裝器只使用預設目錄，不讀取 `DSH_HOME`、`KIMI_CODE_HOME` 或用戶端自訂設定；自訂目錄請手動複製。尚未在每款實際用戶端中完成端到端驗證。DeepSeek Harness 能載入本機技能，但 DeepSeek 一般網頁聊天／API 不能單靠複製資料夾來安裝，詳見 [DeepSeek 使用方式](docs/DEEPSEEK.md)。

可選的 [Vercel Skills CLI](https://github.com/vercel-labs/skills) 是另一套安裝工具：

```sh
npx skills add https://github.com/VinsonFung/fullstack-site-skills --list
```

該方式會下載並執行第三方工具；它的 Agent ID 和安裝行為不一定與本包相同，也不在本包的測試範圍內。

## 檢查、隱私與授權

在本包目錄中執行：

```sh
node scripts/validate.mjs
node --test
node scripts/check-links.mjs
```

驗證器檢查必需檔案、技能資訊、本機引用和可疑內容。測試使用隔離專案和模擬使用者目錄。連結檢查器檢查本機目標和公開 HTTPS 連結；第三方網頁之後可能遷移，或在部分網路中無法存取。具體範圍與限制見[驗證紀錄](docs/VALIDATION.md)。

安裝不需要模型金鑰，不傳送遙測。包內是可重用的指南和本機工具，不包含原網站的正文、使用者、照片或私有設定。Agent 實際使用模型時，仍遵循它自身的設定和服務商條款；本包不會呼叫模型或繞過權限。

採用 MIT 授權，保留[授權聲明](LICENSE)後可使用、修改和分享。其他說明：[貢獻指南](CONTRIBUTING.md)、[安全問題回報](SECURITY.md)、[來源說明](docs/PROVENANCE.md)、[GitHub 上傳指南（簡體中文）](docs/PUBLISH.zh-CN.md)。
