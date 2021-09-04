let open = document.getElementById('open');
let close = document.getElementById('close');
let menu = document.getElementById('menu');

open.addEventListener('click', () => {
  open.classList.toggle('hide');
  close.classList.toggle('hide');
  menu.classList.toggle('slide');
});

close.addEventListener('click', (e) => {
  open.classList.toggle('hide');
  close.classList.toggle('hide');
  menu.classList.toggle('slide');
});
