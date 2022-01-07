
var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50){
        $(".header").css({"background": "white"})
           $(".header_link").css({"color": "black"}) 
            $(".span3").css({"background":   "black"}) 
             $(".span1").css({"background":  "black"}) 
              $(".span2").css({"background": "black"}) 
    }      
    if(50 > scrolled){
        $(".header").css({"background": "transparent"})   
        $(".header_link").css({"color": "white"}) 
            $(".span3").css({"background": "white"}) 
               $(".span2").css({"background": "white"}) 
                  $(".span1").css({"background": "white"}) 

    }}

   jQuery(document).ready(function($) {               
  const $img = $('.header_logo img');
  $img.data('src-orig', $img.attr('src'));

  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $img.attr('src', $img.data('pavel-mavel'));
    } else {
      $img.attr('src', $img.data('src-orig'));
    }
  });
});


$(document).ready(function() {
  $('.header_burger').click(function(event){
 	$('.header_burger,.header_menu,.span1,.span2,.span3').toggleClass('active');
     $('body').toggleClass('lock');
 });
 });

function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();

