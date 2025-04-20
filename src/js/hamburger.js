document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.querySelector(".header-container");
    const btn = document.querySelector(".hamburger-btn");
    const mask = document.getElementById("hamburger-mask");

    let toggleMenu = () => {
        headerContainer.classList.toggle('open');
    };

    // ハンバーガーメニュー開閉
    btn.addEventListener('click', toggleMenu);
    mask.addEventListener('click', toggleMenu);

    // スクロール時の処理
    window.addEventListener('scroll', function () {
        if (headerContainer.classList.contains('open')) {
            toggleMenu();
        }
    });
});
