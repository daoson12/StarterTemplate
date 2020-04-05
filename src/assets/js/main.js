
$(function() {
    "use strict";
    var wind = $(window);
    $('#preloader').fadeOut('normall', function() {
        $(this).remove();
    });
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'swing',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -70
    });
    wind.on('scroll', function() {
        if (wind.width() > 600) {
            if (wind.scrollTop() > 600) {
                $('#back-to-top').addClass('reveal');
            } else {
                $('#back-to-top').removeClass('reveal');
            }
        }
    });
    $('#back-to-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    if ($("#sidebar_toggle").length) {
        $("body").addClass("sidebar-menu");
        $("#sidebar_toggle").on("click", function() {
            $(".sidebar-menu").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_sidebar").fadeIn(700)
        }), $("#close_sidebar").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".sidebar-menu").removeClass("active")
        }), $("#btn_sidebar_colse").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $("#close_sidebar").fadeOut(200), $(".sidebar-menu").removeClass("active")
        });
    }
    wind.on("scroll", function() {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            navbloglogo = $(".blog-nav .logo> img"),
            darkbg = $(".bg-black .logo> img"),
            logo = $(".navbar .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');
            darkbg.attr('src', 'img/logo-light.png');
        } else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
            navbloglogo.attr('src', 'img/logo-dark.png');
        }
    });
    var windowsize = wind.width();
    if (windowsize <= 991) {
        $('.navbar-nav .nav-link').on("click", function() {
            $('.navbar-collapse.show').removeClass('show');
            $('.navbar .navbar-toggler').addClass('collapsed');
        });
    }
    var pageSection = $(".bg-img, section, footer");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.story-video').magnificPopup({
        delegate: '.video',
        type: 'iframe'
    });
    var input = $('#time-input').clockpicker({
        placement: 'bottom',
        align: 'left',
        autoclose: true,
        'default': 'now'
    });
    if ($(".horizontaltab").length !== 0) {
        $('.horizontaltab').easyResponsiveTabs({
            type: 'default',
            width: 'auto',
            fit: true,
            tabidentify: 'hor_1',
            activate: function(event) {
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }
    $(window).on("load", function() {
        var wind = $(window);
        wind.stellar();
        $('.gallery').isotope({
            itemSelector: '.items'
        });
        var $gallery = $('.gallery').isotope({});
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({
                filter: filterValue
            });
        });
        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });
    $(window).resize(function(event) {
        setTimeout(function() {
            SetResizeContent();
        }, 500);
        event.preventDefault();
    });

    function fullScreenHeight() {
        var element = $(".full-screen");
        var $minheight = $(window).height();
        element.css('min-height', $minheight);
    }

    function SetResizeContent() {
        fullScreenHeight();
    }
    SetResizeContent();
    $(document).on("ready", function() {
        var owl = $('.header .owl-carousel');
        $('.slider-fade .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 500,
            mouseDrag: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
        $('.delicious-menu .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 500
        });
        $('.chef-section .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 500
        });
        $('.testimonials .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 500
        });
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            smartSpeed: 500
        });
        $('.slider .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            mouseDrag: false,
            autoplay: true,
            smartSpeed: 500
        });
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;
            $('h3').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('.btn').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.btn').addClass('animated fadeInUp');
        });
        if ($(".countdown").length !== 0) {
            $(".countdown").countdown({
                date: "01 Jan 2021 00:01:00",
                format: "on"
            });
        }
    });
});