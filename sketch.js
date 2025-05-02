let capture;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#ffecd1'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始影像，僅顯示在畫布上

  // 建立與視訊畫面相同大小的圖形內容
  graphics = createGraphics(capture.width, capture.height);
  graphics.background(0); // 設定圖形內容的背景顏色為黑色
}

function draw() {
  background('#ffecd1'); // 確保背景顏色持續更新
  let x = (width - capture.width) / 2; // 計算影像的水平居中位置
  let y = (height - capture.height) / 2; // 計算影像的垂直居中位置

  // 更新 graphics 的內容
  graphics.background(0); // 設定背景為黑色
  capture.loadPixels(); // 加載攝影機影像的像素
  graphics.noStroke(); // 移除邊框
  for (let i = 0; i < capture.width; i += 20) {
    for (let j = 0; j < capture.height; j += 20) {
      let index = (j * capture.width + i) * 4; // 計算像素索引
      let r = capture.pixels[index]; // 紅色通道
      let g = capture.pixels[index + 1]; // 綠色通道
      let b = capture.pixels[index + 2]; // 藍色通道
      graphics.fill(r, g, b); // 設定圓的顏色
      graphics.ellipse(i + 10, j + 10, 15, 15); // 繪製圓，中心點偏移 10 以對齊單位格
    }
  }

  // 繪製圖形內容在視訊畫面的上方
  image(graphics, x, y - graphics.height);

  // 繪製視訊畫面
  push(); // 儲存當前畫布狀態
  translate(width, 0); // 將畫布的原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, x, y); // 在畫布中央繪製翻轉後的影像
  pop(); // 恢復畫布狀態
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
}
