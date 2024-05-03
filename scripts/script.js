var $ = jQuery;

// top navigation function
var windowScrolled = () => {
    function checkScroll() {
        if ($(window).scrollTop() >= 50) {
            $(".top-navigation").addClass("scrolled");
        } else {
            $(".top-navigation").removeClass("scrolled");
        }
    }

    $(document).ready(function() {
        checkScroll();
        $(window).scroll(checkScroll);
    });
}
  
// slider function
var customSlider = () => {
    if ($(".custom-slider")) {
        $('.custom-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 1500,
            dots: false,
            prevArrow: false,
            nextArrow: false,
            swipe: false,
            // fade: true,
            // cssEase: 'linear'
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
    // customSlider();
    mainAutoPadding();
});
  
$(window).resize(function() {
    mainAutoPadding();
});
  
  