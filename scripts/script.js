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
            slidesToScroll: 3,
            // autoplay: true,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            infinite: true,
            speed: 500,
            // dots: false,
            dots: true,
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
                        slidesToScroll: 1,
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
    if ($(".slider-brand-products")) {
        $('.slider-brand-products').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            infinite: true,
            speed: 800,
            dots: true,
            prevArrow: false,
            nextArrow: false,
            swipe: true,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 441,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
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
    if ($(".slider-brand-logos")) {
        $('.slider-brand-logos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            // autoplay: false,
            autoplaySpeed: 2000,
            arrows: true,
            infinite: true,
            speed: 700,
            dots: false,
            prevArrow: false,
            nextArrow: false,
            swipe: true,
            pauseOnHover: true,
            draggable: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 441,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }
}

// resizing slider function
var slickEthos = () => {
    $('.slider-ethos').not('.slick-initialized').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        infinite: true,
        speed: 500,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        swipe: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: false,
                    swipe: true,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    swipe: true,
                    dots: true,
                }
            },
        ]
    });    
    // if ($(".slider-ethos")) {
    //     $('.slider-ethos').slick({
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 3000,
    //         arrows: true,
    //         infinite: true,
    //         speed: 500,
    //         dots: true,
    //         // dots: false,
    //         prevArrow: false,
    //         nextArrow: false,
    //         // swipe: true,
    //         swipe: false,
    //         pauseOnHover: true,
    //         responsive: [
    //             {
    //                 breakpoint: 9999,
    //                 settings: "unslick"
    //             },
    //             {
    //                 breakpoint: 767,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1,
    //                     swipe: true,
    //                     dots: true,
    //                 }
    //             },
    //             {
    //                 breakpoint: 575,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     swipe: true,
    //                     dots: true,
    //                 }
    //             },
    //         ]
    //     });
    // }
}
var slickNews = () => {
    $('.slider-news').not('.slick-initialized').slick({
        // autoplay: true,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: false,
        speed: 500,
        dots: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: true,
                    arrows: false,
                    // arrows: true,
                    // prevArrow: '<button type="button" class="slick-prev"></button>',
                    // nextArrow: '<button type="button" class="slick-next"></button>',
                    draggable: true,
                    swipe: true,
                    touchMove: true,
                    fade: true,
                }
            },
        ]
    });
}
var slickLocations = () => {
    $('.slider-locations').not('.slick-initialized').slick({
        // autoplay: true,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: false,
        speed: 500,
        dots: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: true,
                    arrows: false,
                    // arrows: true,
                    // prevArrow: '<button type="button" class="slick-prev"></button>',
                    // nextArrow: '<button type="button" class="slick-next"></button>',
                    draggable: true,
                    swipe: true,
                    touchMove: true,
                    fade: true,
                }
            },
        ]
    });
}
var slickTestimonials = () => {
    $('.slider-testimonials').not('.slick-initialized').slick({
        // autoplay: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // autoplay: true,
                    autoplay: false,
                    infinite: true,
                    adaptiveHeight: true,
                    // dots: true,
                    dots: false,
                    // arrows: false,
                    arrows: true,
                    // prevArrow: '<button type="button" class="slick-prev"></button>',
                    // nextArrow: '<button type="button" class="slick-next"></button>',
                    draggable: true,
                    swipe: true,
                    touchMove: true,
                    fade: true,
                }
            },
        ]
    });
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
    slickEthos();
    slickNews();
    slickLocations();
    slickTestimonials();
});

$(window).resize(function() {
    if (!$('.slider-ethos').hasClass('slick-initialized')) {
        slickEthos();
    }
    if (!$('.slider-news').hasClass('slick-initialized')) {
        slickNews();
    }
    if (!$('.slider-locations').hasClass('slick-initialized')) {
        slickLocations();
    }
    if (!$('.slider-testimonials').hasClass('slick-initialized')) {
        slickTestimonials();
    }
});