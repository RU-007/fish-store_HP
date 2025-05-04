document.addEventListener("DOMContentLoaded", () => {
const menu = document.querySelector("#menu");
const menu2 = document.querySelector("#menu2");

const lists1 = [
  { name: 'サーモン', img: 'サーモン.jpeg', price: '1,000' },
  { name: 'サーモン２', img: 'サーモン２.jpeg', price: '1,200' },
  { name: '金目鯛刺身', img: '金目鯛刺身.jpeg', price: '1,500' },
  { name: '鯛刺身', img: '鯛刺身.jpeg', price: '1,300' },
  { name: '銀たら', img: '銀たら.jpeg', price: '1,400' },
  { name: 'たら切り身', img: 'たら切り身.jpeg', price: '1,100' },
  { name: 'ふり刺身', img: 'ふり刺身.jpeg', price: '1,600' },
  { name: 'さわら刺身', img: 'さわら刺身.jpeg', price: '1,700' },
];

const lists2 = [
  { name: '銀たら', img: '銀たら.jpeg', price: '1,400' },
  { name: 'たら切り身', img: 'たら切り身.jpeg', price: '1,100' },
  { name: 'ふり刺身', img: 'ふり刺身.jpeg', price: '1,600' },
  { name: 'さわら刺身', img: 'さわら刺身.jpeg', price: '1,700' },
  { name: 'サーモン', img: 'サーモン.jpeg', price: '1,000' },
  { name: 'サーモン２', img: 'サーモン２.jpeg', price: '1,200' },
];

// 共通の関数を作成
function renderMenu(targetMenu, items) {
  for (let i = 0; i < items.length; i++) {
    const { name, img, price } = items[i];
    const content = `
      <div class="menu-item">
        <img src="./images/${img}" alt="${name}">
        <h2>${name}</h2>
        <p>${price}円</p>
      </div>`;
    targetMenu.insertAdjacentHTML('beforeend', content);
  }
}

// menuとmenu2にそれぞれ異なるリストを追加
renderMenu(menu, lists1);
renderMenu(menu2, lists2);

});
