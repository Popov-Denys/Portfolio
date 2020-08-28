$(document).ready(function() {
   $('.show').slick({
   	arrows:true, /**/
   	dots:true,  /**/
   	adaptiveHeight:false, /*высота слайда по высоте картинки(.slick-track{display:flex, align-items: flex-start,})*/
   	slidesToShow:2, /*количество отображаемых слайдов*/
   	slidesToScroll:1,/*количество пролистываемых слайдов*/
   	speed:300,/*скорость пролистывания слайдов*/
   	easing:'ease',/*тип анимации при смене слайда*/
   	infinite:true,/*бесконечность слайдера*/
   	initialSlide:0,/*первый по счёту слайд*/
   	autoplay:false, /*автопроигрывание*/
   	autoplaySpeed:0, /*скорость автопроигрывания*/
    pauseOnFocus:true,/*пауза авт. при клике*/
    pauseOnHover:true,/*пауза авт. при наведении*/
    pauseOnDotsHover:true,/*пауза авт. при наведении на точки*/
    draggable:true,/*свайп на пк*/
    swipe:true,/*свайп на телефоне*/
    touchThreshould:5,/*расстояние свайпов до конца слайдера*/
    touchMove:true,/*отключает свайп НО оставляет возможность использования стрелок*/
    waitForAnimate:true,/*ожидание конца анимации прокрутки*/
    centerMode:false,/* слайд по центру слайдера ВАЖНО*/
    variableWidth:false,/*слайды занимают весь слайдер ВАЖНО*/
    rows:1,/*количество картинок в 1 ряду в слайде*/
    slidesPerRow:0,/*количество рядов в слайде*/
    vertical:false,/*вертикальный слайдер*/
    verticalSwiping:false,/*свайп работает вертикально*/
    fade:false,/*показыватся одна картика,слайды не прокручиваются а затемняются */
    responsive:[
      { 
         breakpoint:768,
         settings: {}
      }
    ]
    mobileFirst:false,/*меняет брейкпоинты с max на min*/
    // appendArrows:$('.container') меняет элемент, где распологаются стрелки изначально на указаный
    // appendDots:$ ... тоже самое для точек



    // СОБЫТИЯ ДЛЯ СЛАЙДЕРА!!!!!


     });
    $('.show').on('beforeChange' , function(event, slick, currentSlide, nextSlide ){
    	console.log(nextSlide);  //либо next или current
    
   });
    $('.show').on('afterChange' , function(event, slick, currentSlide, nextSlide ){
    	console.log(currentSlide); //только current
    
   });
    $('.show').slick('setPosition');
    
   });
   $('.show').slick('golo', 3); 
 