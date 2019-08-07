$(document).ready(function() {
	
	$('.header-contacts__button').on("click", function() {
		$('.overlay').css('display', 'block');
		//$('.overlay').show();
	});

	$('.popup-close').on("click", function() {
		$('.overlay').css('display', 'none');
		//$('.overlay').hide();
	});



// Скрипт для всплывающего меню

    var h_hght = 150; // высота шапки
    var h_mrg = 0;    // отступ когда шапка уже не видна
                 
    $(function(){
 
    var elem = $('#top_nav');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('top', h_mrg);
    }           
     
    $(window).scroll(function(){
            top = $(this).scrollTop();
             
            if (top+h_mrg < h_hght) {
                elem.css('top', (h_hght-top));
                $('.topmenu').css('display', 'none');
            } else {

                elem.css('top', h_mrg);
                $('.topmenu').css('display', 'block');
            }
       });
    });


/* Каруселька скрипт */
     
  $('.reviews-slider').owlCarousel({
    loop: true, /* зациклили карусель */
    nav: true,  /* сделали активными кнопки навигации, до этого они были дизайбл */
    smartSpeed: 600, /* уменьшили скорость прокрутки карусели */
    navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
    /* заменили стрелочки влево и вправо на иконки фонтосм */
    responsiveClass: true,
    responsive: {
        0: {
            items: 1 /*будет показан всего 1 итем до расширения 800*/
        },
        800: {
            items: 2
        },
        1100: {
            items: 3
        }
    }
  });



  /*Скрипт для меню бургер*/

  $(document).ready(function() {
    var link = $('.menu-link');
    var link_active = $('.menu-link__active');
    var menu = $('.menu');

    link.click(function(){
        link.toggleClass('menu-link__active');
        menu.toggleClass('menu-active');
    });

    link_active.click(function(){
        link.removeClass('menu-link__active');
        menu.removeClass('menu-active');
    });

    $('.list-close').click(function() {
        menu.removeClass('menu-active');
    })


  });





});