
$(document).ready(function() {
  $('.header__burger').click(function(event){
 	$('.header__burger,.header__menu,.span1,.span2,.span3').toggleClass('active');
     $('body').toggleClass('lock');
 });
 });