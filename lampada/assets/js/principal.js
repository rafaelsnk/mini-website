const botaoLigar = document.querySelector('#ligar');
const botaoDesligar = document.querySelector('#desligar');
const img = document.querySelector('img');


botaoLigar.addEventListener('click', function () {
  img.src = './assets/img/turnon.png';
})

botaoDesligar.addEventListener('click', function () {
  img.src = './assets/img/turnoff.png';
})

img.addEventListener('click', function () {
  img.src = './assets/img/broken.png';

})
