document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById('carousel');

  // 商品がDOMに追加された後にカルーセルを初期化
  setTimeout(() => {
    const items = document.querySelectorAll('.product-carousel-item');
    const indicators = document.querySelectorAll('.indicator-list');

    if (items.length === 0) return; // 商品が1つもなければ中止

    let currentIndex = 0;
    let totalItems = items.length;

    function getItemWidth() {
      return items[0].getBoundingClientRect().width + 16; // gapを含める
    }

    function updateCarousel() {
      const offset = getItemWidth();
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

    updateCarousel();
    let interval = setInterval(autoSlide, 3000);

    indicators.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        clearInterval(interval);
        interval = setInterval(autoSlide, 3000); // 再開
      });
    });

    window.addEventListener('resize', updateCarousel);
  }, 0);
});
