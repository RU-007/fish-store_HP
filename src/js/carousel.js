document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.product-carousel-list');
  const slides = document.querySelectorAll('.product-carousel-item');
  const indicators = document.querySelectorAll('.indicator-list');
  const slideCount = slides.length;

  //クローンを作成
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slideCount - 1].cloneNode(true);
  firstClone.classList.add('clone');
  lastClone.classList.add('clone');
  track.appendChild(firstClone); // 最後にクローンを追加
  track.insertBefore(lastClone, slides[0]); // 最初にクローンを追加

  // スライド再取得（クローン込み）
  const allSlides = document.querySelectorAll('.product-carousel-item');
  let currentIndex = 1; // 実際の1番目にスタート
  let slideWidth = allSlides[0].offsetWidth + parseInt(getComputedStyle(allSlides[0]).marginRight);

  // スライド移動関数
  function goToSlide(index, smooth = true) {
    track.style.transition = smooth ? 'transform 0.5s ease' : 'none';
    track.style.transform = `translateX(-${slideWidth * index}px)`;

    // インジケーターの更新
    indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === (index - 1 + slideCount) % slideCount);
    });
  }

  // 自動スライド
  function autoSlide() {
    currentIndex++;
    goToSlide(currentIndex);

    if (currentIndex === allSlides.length - 1) {
      // クローンが最後に来たら、本物の1番目にジャンプ
      setTimeout(() => {
        currentIndex = 1;
        goToSlide(currentIndex, false);
      }, 500);
    }
  }

  // 自動スライドのインターバル
  let interval = setInterval(autoSlide, 3000);

  // インジケータークリックで手動移動
  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(interval);
      currentIndex = i + 1;
      goToSlide(currentIndex);
      interval = setInterval(autoSlide, 3000);
    });
  });

  // ウィンドウリサイズ時の調整
  window.addEventListener('resize', () => {
    slideWidth = allSlides[0].offsetWidth + parseInt(getComputedStyle(allSlides[0]).marginRight);
    goToSlide(currentIndex, false);
  });

  // 初期位置セット（本物の1番目に設定）
  goToSlide(currentIndex, false);
});