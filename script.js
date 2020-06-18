
let y = document.querySelector('#two2');
let myslide = document.querySelector('#myslide');
 
myslide.addEventListener('mousemove', funcOne);

function funcOne(e){
  let x = e.offsetX;
  y.style.width = x + 'px';
}
  
myslide.addEventListener('mouseleave', funcTwo);
function funcTwo(e){
document.querySelector('#two2').style.width = '533px';
}

