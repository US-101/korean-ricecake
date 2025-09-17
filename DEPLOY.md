# 部署到 GitHub Pages

## 步驟 1: 創建 GitHub Repository

1. 前往 [GitHub](https://github.com) 並登入
2. 點擊 "New repository"
3. 輸入 repository 名稱：`koreanricecake-PWA`
4. 選擇 "Public"
5. 不要勾選 "Add a README file"
6. 點擊 "Create repository"

## 步驟 2: 連接本地專案到 GitHub

```bash
# 在終端機中執行（替換 YOUR_USERNAME）
git remote add origin https://github.com/YOUR_USERNAME/koreanricecake-PWA.git
git branch -M main
git push -u origin main
```

## 步驟 3: 啟用 GitHub Pages

1. 在 GitHub repository 頁面
2. 點擊 "Settings" 標籤
3. 滾動到 "Pages" 部分
4. 在 "Source" 下選擇 "Deploy from a branch"
5. 選擇 "main" branch 和 "/ (root)" 資料夾
6. 點擊 "Save"

## 步驟 4: 訪問您的 PWA

幾分鐘後，您的 PWA 將在以下網址可用：
```
https://YOUR_USERNAME.github.io/koreanricecake-PWA/
```

## 測試啟動畫面

1. 在手機瀏覽器中打開上述網址
2. 點擊瀏覽器選單 → "添加到主畫面"
3. 從主畫面點擊圖標啟動
4. 應該會看到啟動畫面

## 故障排除

如果啟動畫面是黑屏：
1. 清除瀏覽器快取
2. 重新安裝 PWA
3. 檢查 `splash.png` 是否正確載入
