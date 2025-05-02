202050502

## 第一條指令
產生一個全螢幕的畫布，背景顏色為ffecd1
擷取攝影機的影像，正常的顯示在視窗的中間
影像畫面寬高為視窗大小的80%
請把程式碼寫在sketch.js

說明:
建立全螢幕畫布：

在 setup() 函式中，使用 createCanvas(windowWidth, windowHeight) 建立一個與視窗大小相同的畫布。
畫布的背景顏色設為 #ffecd1。
擷取攝影機影像：

使用 createCapture(VIDEO) 啟用攝影機，並將影像大小設定為視窗寬高的 80% (capture.size(windowWidth * 0.8, windowHeight * 0.8))。
使用 capture.hide() 隱藏原始的 HTML 視訊元素，僅在畫布上顯示影像。
繪製影像在畫布中央：

在 draw() 函式中，計算影像的水平與垂直居中位置：
水平居中：(width - capture.width) / 2
垂直居中：(height - capture.height) / 2
使用 image(capture, x, y) 將影像繪製在畫布中央。
動態調整畫布大小：

當視窗大小改變時，windowResized() 函式會被呼叫，使用 resizeCanvas(windowWidth, windowHeight) 重新調整畫布大小，確保畫布始終填滿視窗。
這段程式碼的主要目的是建立一個簡單的攝影機影像顯示應用，並確保影像在畫布中央顯示，且畫布大小能動態適應視窗變化。
