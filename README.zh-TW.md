# Skyrim Alchemy Lab（繁體中文版）

這是一個網頁版的天際（Skyrim）煉金工作台。你可以瀏覽所有材料、放入最多 3 種材料，並即時查看可觸發的藥水效果與估算價值。Smart Suggestions 會推薦最佳組合。

## 功能特色

- 完整材料資料庫（英文 + 中文）
- 3 材料煉金工作台，效果即時計算
- Smart Suggestions 智慧推薦最佳下一個材料
- 可搜尋、可排序材料清單
- 響應式設計（桌機 / 手機）

## 線上展示

👉 https://crowntailtw0608.github.io/skyrim-alchemy-lab/

## 本機執行

**需求：** Node.js 18+

```bash
npm install
npm run dev
```

開啟：http://localhost:3000

## 技術棧

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Motion
- Lucide Icons

## 部署說明（GitHub Pages）

此專案已設定 GitHub Actions 自動部署。推送到 `main` 分支後會自動 build 並部署到 GitHub Pages。

若你 fork 本專案，記得修改 Vite 的 `base` 路徑：

```ts
// vite.config.ts
export default defineConfig({
  base: '/你的-repo-名稱/',
});
```

## 授權

MIT License
