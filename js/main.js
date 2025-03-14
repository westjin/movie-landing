const snbBtn = document.querySelector('#snb .btn_menu');
const subMenu = document.querySelector('#snb .snb_menu');

snbBtn.addEventListener('click', () => {
  if (subMenu.classList.contains('hide')) {
    subMenu.classList.remove('hide');
  } else {
    subMenu.classList.add('hide');
  }
});
