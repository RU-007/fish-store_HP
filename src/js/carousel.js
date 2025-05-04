document.addEventListener("DOMContentLoaded", () => {
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.product-carousel-item');
const indicators = document.querySelectorAll('.indicator-list');

let currentIndex = 0;
let totalItems = items.length;

function getItemWidth() {
  return items[0].getBoundingClientRect().width + 16; // gapを含める
}

function updateCarousel() {
  const offset = getItemWidth();
  // スライド中央寄せのため、wrapperのpaddingを含めて調整
  const translateX = -(currentIndex * offset);
  carousel.style.transform = `translateX(${translateX}px)`;

  indicators.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

// 初期表示
updateCarousel();
let interval = setInterval(autoSlide, 3000);

// インジケータークリック対応
indicators.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
    clearInterval(interval);
    interval = setInterval(autoSlide, 3000); // 再開
  });
});

// ウィンドウリサイズ時の再計算
window.addEventListener('resize', () => {
  updateCarousel();
});

});
