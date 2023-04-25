const botaoLigar = document.querySelector('#ligar');
const botaoDesligar = document.querySelector('#desligar');

botaoLigar.addEventListener('click', function () {
  const img = document.querySelector('img');
  img.src = './assets/img/turnon.png';
})

botaoDesligar.addEventListener('click', function () {
  const img = document.querySelector('img');
  img.src = './assets/img/turnoff.png';
})
