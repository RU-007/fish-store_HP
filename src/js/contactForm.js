document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('wpcf7submit', function () {
    const spinner = document.querySelector('.wpcf7-spinner');
    if (spinner) {
      spinner.style.display = 'none'; // 完了後は非表示に
    }
  });

  document.addEventListener('wpcf7beforesubmit', function () {
    const spinner = document.querySelector('.wpcf7-spinner');
    if (spinner) {
      spinner.style.display = 'block';
    }
  });
});
