;(function($) {
    "use strict";
  
    /*----------------------------------------------------*/
    /*  offcanvas menu js
    /*----------------------------------------------------*/
    function offcanvas_menu(){
        if ( $('.nav-button').length ){
            $('.nav-button').on('click',function(){
                if( $(".offcanvas_menu, .nav-button").hasClass('open') ){
                    $(".offcanvas_menu, .nav-button").removeClass('open')
                }
                else{
                    $(".offcanvas_menu, .nav-button").addClass('open')
                }
                return false
            });
        }
    }
    /*----------------------------------------------------*/
    /*  offcanvas From js
    /*----------------------------------------------------*/
    function offcanvas_from(){
        if ( $('.rotate_contact_btn').length ){
            $('.rotate_contact_btn').on('click',function(){
                if( $(".offcanvas_from, #offcanvas_hide_trigger, .contact_form").hasClass('open') ){
                    $(".offcanvas_from, #offcanvas_hide_trigger, .contact_form").removeClass('open')
                }
                else{
                    $(".offcanvas_from, #offcanvas_hide_trigger, .contact_form").addClass('open')
                }
                return false
            });
        }
    }
    
    $('#offcanvas_hide_trigger, .contact_form, .close-share').on('click',function(){
        if ( $(this).hasClass('open') ){
            $(".offcanvas_from, #offcanvas_hide_trigger, .contact_form").removeClass('open')
        }
    });
    
    $('.close-share').on('click',function(){
        $(".offcanvas_from, .contact_form").removeClass('open')
    });
    
    /*----------------------------------------------------*/
    /*  Main slider js
    /*----------------------------------------------------*/
    function home_main_slider(){
        if ( $('.home_slider_area').length ){
            var swiper = new Swiper('.home_slider_area', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                direction: 'vertical',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                spaceBetween: 30,
                speed: 2000,
            });
        }
    }
    
    /*----------------------------------------------------*/
    /*  why dope slider
    /*----------------------------------------------------*/
    
    function why_dope_slider(){
        if ( $('.why_dope_slider').length ){
            $(window).load(function() {
                $('.why_dope_slider').owlCarousel({
                    loop:true,
                    margin:0,
                    nav:true,
                    autoplay: false,
                    items: 1,
                    smartSpeed: 2000,
                    navContainer: ".why_dope_slider",
                    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                })
            });
        }
    }
        
    
    /*----------------------------------------------------*/
    /*  slider_client
    /*----------------------------------------------------*/
    function slider_client(){
        if ( $('.slider_client').length ){
            $('.slider_client').owlCarousel({
                loop:true,
                margin:0,
                nav:true,
                autoplay: true,
                items: 1,
                dots: true,
                smartSpeed: 3000,
                navContainer: ".slider_client",
                navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            })
        }
    }
    
    /*----------------------------------------------------*/
    /*  fullscreen_slider
    /*----------------------------------------------------*/
    function fullscreen_slider(){
        if ( $('.home_two_slider').length ){
            var owl = $('.home_two_slider');
            owl.owlCarousel({
                stagePadding: 245,
                loop:true,
                margin:0,
                nav:true,
                dots: true,
                items: 1,
                center: true,
                smartSpeed: 3000,
                autoplay: true,
                navText: ["<i class='fa fa-angle-up'></i>","<i class='fa fa-angle-down'></i>"],
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        margin: 0,
                        stagePadding: 0,
                        
                    },
                    1200:{
                        items:1,
                        stagePadding: 245,
                    },
                }
            });
            owl.on('mousewheel', '.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    }
    
    /*----------------------------------------------------*/
    /*  home_portfolio_slider
    /*----------------------------------------------------*/
    function home_portfolio_slider(){
        if ( $('.portfolio_slider').length ){
            var owl = $('.portfolio_slider');
            owl.owlCarousel({
                loop:true,
                margin:0,
                nav:true,
                dots: true,
                items: 1,
                autoplay: false,
                animateOut: 'slideOutUp',
                animateIn: 'slideInUp',
                navText: ["<i class='fa fa-angle-up'></i>","<i class='fa fa-angle-down'></i>"],
            });
            owl.on('.owl-stage', function (e) {
                if (e.deltaY>0) {
                    owl.trigger('prev.owl');
                } else {
                    owl.trigger('next.owl');
                }
                e.preventDefault();
            });
        }
    }
    

    /*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function portfolio_isotope(){
        if ( $('.portfolio_item, .portfolio_item_style2, .portfolio_filter ul li').length ){
            // Activate isotope in container
            $(".portfolio_item").imagesLoaded( function() {
                $(".portfolio_item").isotope({
                    itemSelector: ".single_facilities",
                    layoutMode: 'masonry',
                    percentPosition:true,
                    masonry: {
                        columnWidth: ".grid-sizer, .grid-sizer2"
                    }            
                }); 
            });
            // Activate isotope in container
            $(".portfolio_item_style2").imagesLoaded( function() {
                $(".portfolio_item_style2").isotope({
                    itemSelector: ".single_facilities",
                    layoutMode: 'fitRows',
                }); 
            }); 
            // Add isotope click function
            $(".portfolio_filter ul li").on('click',function(){
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".portfolio_item, .portfolio_item_style2").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    
    /*----------------------------------------------------*/
    /*  ourSkrill
    /*----------------------------------------------------*/
    function ourSkrill(){
         if ( $('.our_skill_inner').length ){
             $(".our_skill_inner").each(function() {
                $(this).waypoint(function() {
                    var progressBar = $(".progress-bar");
                    progressBar.each(function(indx){
                        $(this).css("width", $(this).attr("aria-valuenow") + "%")
                    })
                }, {
                    triggerOnce: true,
                    offset: 'bottom-in-view'
                });
            });
         }
    }
    
    /*----------------------------------------------------*/
    /*  waypoint js
    /*----------------------------------------------------*/
    function scroll_animate(){
         if ( $('.img_part').length ){
             $(".img_part").click(function(){
                $("body,html").animate({"scrollTop" : "0"}, 700);
            });
         }
    }
    
    /*----------------------------------------------------*/
    /*  waypoint js
    /*----------------------------------------------------*/
    function onepage_menu(){
         if ( $('.onepage_menu').length ){
             $('.onepage_menu ul li a[href*="#"]').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                && location.hostname == this.hostname) {
                  var $target = $(this.hash);
                  $target = $target.length && $target
                  || $('[name=' + this.hash.slice(1) +']');
                  if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body')
                    .animate({scrollTop: targetOffset}, 1000);
                   return false;
                  }
                }
              });
         }
    }
  
    /*----------------------------------------------------*/
    /*  Counter js
    /*----------------------------------------------------*/
	$('.counter').counterUp({
        delay: 100,
        time: 2500
    });
    
    
    	// Countdown JS
    $('#example').countdown({
        date: '6/24/2017 23:59:59',
        offset: -8,
        day: 'Day',
        days: 'Days'
    }, 
    function () {
        alert('Done!');
    });
    // stick menu function
    var nav_offset_top = $('.main_header_area').offset().top;
    
    if ( nav_offset_top == 0 ){
        nav_offset_top = 1
    }
    
    $('.main_header_area').affix({
        offset: {
            top: nav_offset_top,
        }
    });
    
    
    
    $(".height-emulator").css({
        height: $("footer").outerHeight(true)
    });

    $(".page_header_area").css({
        height: $(".page_header").outerHeight(true)
    });
    
    
   
    /*Function Calls*/
    offcanvas_menu();
    offcanvas_from();
    home_main_slider();
    why_dope_slider();
    slider_client();
    fullscreen_slider();
    home_portfolio_slider();
    portfolio_isotope();
    ourSkrill();
    scroll_animate();
    onepage_menu();
    
    
    // preloader js
    $(window).on('load', function() { // makes sure the whole site is loaded
		$('#preload_inner').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
    })
    
    
})(jQuery)