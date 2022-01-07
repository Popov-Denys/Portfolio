
$(document).ready(function() {
  $('.header_burger').click(function(event){
 	$('.header_burger,.header_menu,.span1,.span2,.span3').toggleClass('active');
     $('body').toggleClass('lock');
 });
 });