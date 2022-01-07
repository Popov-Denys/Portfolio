function fullscreen(){

let fullscreen=document.querySelectorAll(".fullscreen");
for (var i = 0; i < fullscreen.length; i++) {
if(fullscreen[i].querySelector('img')){
fullscreen[i].style.backgroundImage = 'url('+fullscreen[i].querySelector('img').getAttribute('src')+')';
}
}
}

fullscreen();