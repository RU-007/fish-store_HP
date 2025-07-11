document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector("#carousel");

  const lists = [
    { name: 'サーモン', img: 'サーモン.jpeg', price: '1,000' },
    { name: 'サーモン２', img: 'サーモン２.jpeg', price: '1,200' },
    { name: '金目鯛刺身', img: '金目鯛刺身.jpeg', price: '1,500' },
    { name: '鯛刺身', img: '鯛刺身.jpeg', price: '1,300' },
    { name: '銀たら', img: '銀たら.jpeg', price: '1,400' },
    { name: 'たら切り身', img: 'たら切り身.jpeg', price: '1,100' },
    { name: 'ふり刺身', img: 'ふり刺身.jpeg', price: '1,600' },
    { name: 'さわら刺身', img: 'さわら刺身.jpeg', price: '1,700' },
    { name: 'さわら刺身', img: 'さわら刺身.jpeg', price: '1,700' },
    { name: 'さわら刺身', img: 'さわら刺身.jpeg', price: '1,700' },
    { name: 'さわら刺身', img: 'うなぎかば焼き.jpeg', price: '1,700' },
    { name: 'さわら刺身', img: 'ふぐ刺身.jpeg', price: '1,700' },
    { name: 'さわら刺身', img: '刺身.jpeg', price: '1,700' },
    { name: 'さわら刺身', img: '焼き鯛.jpeg', price: '1,700' },
  ];

  for (let i = 0; i < lists.length; i++) {
    const { name, img, price } = lists[i];

    // 商品アイテムを追加
    const content = `
      <div class="product-carousel-item">
        <img src="./images/${img}" alt="${name}" class="product-carousel-image">
        <div class="product-carousel-info">
          <h3 class="product-carousel-name">${name}</h3>
          <p class="product-carousel-text">${price}円（税込み）</p>
        </div>
      </div>`;
    carousel.insertAdjacentHTML('beforeend', content);
  }

  // Slickの初期化（jQueryで実行）
  $(function () {
    $('#carousel').slick({
      centerMode: true,
  centerPadding: '80px',     // ← 両端にチラ見せ
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,               // ← 自動再生を有効に
      autoplaySpeed: 3000,          // ← 自動再生の間隔（ミリ秒）
      pauseOnHover: false, // ← ホバー時に自動再生を停止しない
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });
});
