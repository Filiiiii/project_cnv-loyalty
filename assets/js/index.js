new WOW().init();

// Sidebar Mobile
jQuery(document).ready(function () {
    // Sidebar
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});


// PopUp on Load
function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('modal__inpage').style.display = "none";
    else document.getElementById('modal__inpage').removeAttribute('style');
};
window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 3000);
};

// Carousel
var carouselEl = $('.owl-carousel');
carouselEl.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 2000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        768: {
            items: 6
        },
    }
});

// Scroll Navbar
const navbar = document.querySelector('.header__navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('header__fixed-top');
    } else {
        navbar.classList.remove('header__fixed-top');
    }
};


// Autoplay video pop-up
$(document).ready(function () {
    var url = $("#video").attr('src');

    $("#video").attr('src', '');


    $("#modelVideo").on('shown.bs.modal', function () {
        $("#video").attr('src', url);
    });

    $("#modelVideo").on('hide.bs.modal', function () {
        $("#video").attr('src', '');
    });
});