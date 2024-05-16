var $ = jQuery;

// top navigation function
var windowScrolled = () => {
    function checkScroll() {
        if ($(window).scrollTop() >= 50) {
            $("body").addClass("scrolled");
        } else {
            $("body").removeClass("scrolled");
        }
    }

    $(document).ready(function() {
        checkScroll();
        $(window).scroll(checkScroll);
    });
}
  
// slider function
var customSlider = () => {
    if ($(".slider-single")) {
        $('.slider-single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplay: false,
            autoplaySpeed: 5000,
            arrows: true,
            infinite: true,
            speed: 500,
            dots: true,
            prevArrow: false,
            nextArrow: false,
            swipe: true,
            fade: true,
            cssEase: 'linear',            
            pauseOnHover: true,
        });
    }
    if ($(".slider-team")) {
        $('.slider-team').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            infinite: true,
            speed: 500,
            dots: true,
            // dots: false,
            prevArrow: false,
            nextArrow: false,
            // swipe: true,
            swipe: false,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                // {
                //     breakpoint: 576,
                //     settings: {
                //         slidesToShow: 1,
                //     }
                // }
            ]
        });
    }
}

// main element - auto padding-top
var mainAutoPadding = () => {
    if ($(".top-navigation")) {
        var topNavHeight = $(".top-navigation").height();
    
        $(".top-navigation + main").css("padding-top", topNavHeight+"px");
        
        var footerHeight = $(".footer-section").outerHeight();
        var heroHeight = topNavHeight + footerHeight;
        
        $(".hero").css("height", "calc(100vh - " + heroHeight + "px)");
    
        var contentHeight = $(".hero .wrapper").outerHeight();
        var heroHeight = contentHeight + 200;
        var heroHeightMobile = contentHeight + 100;
    
        if ($(window).width() <= 767) {
            $(".hero").css("min-height", heroHeightMobile);
        }
        else {
            $(".hero").css("min-height", heroHeight);
        }
    }
}
  
// initialize the functions
windowScrolled();
  
$(document).ready(function() {
    customSlider();
    // mainAutoPadding();
});
  
// $(window).resize(function() {
//     mainAutoPadding();
// });