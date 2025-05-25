document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector("#hero");

  const images = [
    'kiji1Img.jpg',
    'うなぎかば焼き.jpeg',
    '金目鯛刺身.jpeg',
  ];
  let current = 0;

  function showSlide(index) {
    hero.innerHTML = `
      <div class="hero-slide">
        <img src="./images/${images[index]}" class="hero-image" alt="">
      </div>
    `;
  }

  showSlide(current);

  setInterval(() => {
    current = (current + 1) % images.length;
    showSlide(current);
  }, 3000);
});