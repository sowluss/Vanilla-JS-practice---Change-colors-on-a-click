let colorBtn = document.querySelector('.color-btn');
let bodyBkg = document.querySelector('body');

// Arrays that hold the colours

let colours = ['blue', 'orange', 'green', '#3b5998', '#9f8924'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  // bodyBkg.style.backgroundColor = colours[2];
  let random = Math.floor(Math.random()*colours.length);
  bodyBkg.style.backgroundColor = colours[random];
  bodyBkg.style.transition = '.5s';

}