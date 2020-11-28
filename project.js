
var buttonOnce = document.getElementById('changeColorOnce');

function switchColorOnce(){
  var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'; 
  buttonOnce.style.backgroundColor = randomColor
  buttonOnce.removeEventListener('click', switchColorOnce)
}

buttonOnce.addEventListener('click', switchColorOnce)