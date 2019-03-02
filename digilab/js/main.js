jQuery(function ($) {

    /*-- Strict mode enabled --*/
    "use strict";

    //Global variables
    var _document = $(document),
        _window = $(window),
        _navbarCollapse = $('.navbar-collapse'),
        _navbarToggler = $(".navbar-toggler"),
        _customDropdownMenu = $('.custom-dropdown-menu'),
        _customDropdownSubMenu = $('.dropdown-submenu');


    //animated navbar-toggler button
    _document.on('click', '.navbar .navbar-toggler', function () {
        $(this).toggleClass("change");
    });

    //Close menu when clicked menu-items or outside
    $(".onepage-navbar .navbar-nav li a").on('click', function () {
        _navbarCollapse.removeClass('show');
        _navbarToggler.removeClass('change');
    });

    _document.on('click', function (e) {
        var _navMenu = $('.navbar-nav li');
        if (!_navMenu.is(e.target) && !_navMenu.find('li,a').is(e.target)) {
            if (_navbarCollapse.hasClass('show')) {
                _navbarCollapse.removeClass('show');
                $(".navbar-toggler").removeClass('change');
            }
            _customDropdownMenu.fadeOut('fast');
        }
    });

    //Toggle dropdown menu on click events
    _window.on('load resize', function () {
        if (_window.width() < 991) {
            $('.navbar-nav .custom-megamenu .megamenu > li > a').toggleClass('dropdown-opener');
        }
    });

    _document.on('click', '.dropdown-opener', function (e) {
        e.preventDefault();
        if (_window.width() < 991) {
            if ($(this).next(_customDropdownMenu)) {
                $(this).next(_customDropdownMenu).slideToggle('fast');
            } else if ($(this).next(_customDropdownSubMenu)) {
                $(this).next(_customDropdownSubMenu).slideToggle('fast');
            }
        } else {
            $(this).next(_customDropdownMenu).fadeToggle('fast');
        }
    });

    // .navbar - nav.custom - megamenu.megamenu > li > a

    //affixed nav with scrollspy
    $('body').scrollspy({
        target: ".onepage-navbar",
        offset: 100
    });

    //Tab nav
    var _navLink = $('.service-process-tab');
    _navLink.on('click', '.nav-item a[data-toggle="tab"]', function () {
        var _curr = $(this).closest('li');
        _curr.prevAll().addClass("visited");
        _curr.removeClass("visited");
        _curr.nextAll().removeClass("visited");
    });

    //Video modal
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-with-zoom',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    });

    //script for page scroll to top and bottom
    $('.page-scroll').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                if (_window.width() < 768) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000, 'easeInOutExpo');
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000, 'easeInOutExpo');
                }
                return false;
            }
        }
    });

    //Counter Up js
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // Team slider 
    $('.common-slider .carousel-container').slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.case-study-slider').slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //Global Form validation
    $('.contact-form').on('submit', function (e) {
        e.preventDefault();
        var _self = $(this),
            data = $(this).serialize(),
            __selector = _self.closest('input, textarea');

        _self.closest('div').find('input,textarea').removeAttr('style');
        _self.find('.err-msg').remove();
        _self.find('.form-success').removeClass('form-success');

        $('.submit-loading-img').css('display', 'block');
        _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');

        $.ajax({
            url: 'email/email.php',
            type: "post",
            dataType: 'json',
            data: data,
            success: function (data) {
                $('.submit-loading-img').css('display', 'none');
                _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                if (data.code == false) {
                    _self.closest('div').find('[name="' + data.field + '"]').addClass('form-success');
                    _self.closest('div').find('[name="' + data.field + '"]').after('<div class="err-msg">*' + data.err + '</div>');
                } else {
                    _self.find('textarea:last-child').after('<div class="success-msg">' + data.success + '</div>');
                    _self[0].reset();
                    _self.find('.success-msg').css({
                        'display': 'block'
                    });

                    setTimeout(function () {
                        $('.success-msg').fadeOut('slow');
                    }, 5000);
                }
            }
        });
    });

    _window.on("load", function () {

        //isotope initialization
        var $grid = $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            percentPosition: true
        });

        // filter items on button click
        $('.filter-button-group').on('click', '.filter-button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        $('.filter-button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.filter-button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    });

    // script for box-equal-height
    var maxHeight = 0;
    var _equalHeight = function (eq) {
        $(eq).each(function () {
            $(this).find('.equalHeight').each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            $(this).find('.equalHeight').height(maxHeight);
        });
    }
    _equalHeight('.equalHeightWrapper');

    //Change navbar style on scroll
    _window.on('scroll', function () {
        if (_window.scrollTop() >= 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    //show/hide map
    var _contactWrapper = $('.contact-wrapper'),
        _txt = 'VIEW MAP <i class="ml-symone-2-arrow-left-right-up-down-increase-decrease"></i>',
        _alterTxt = '<i class="ml-symone-1-arrow-left-right-up-down-increase-decrease"></i> CONTACT US';

    $.fn.extend({
        toggleText: function (a, b) {
            return this.html(this.html() === b ? a : b);
        }
    });

    _document.on('click', '.contact-wrapper .view-map-btn', function (e) {
        e.preventDefault();
        _contactWrapper.toggleClass('show-map');
        $(this).toggleText(_txt, _alterTxt);
    });

    //Service process tab
    var _serviceProcessTab = $('.service-process-tab');
    _serviceProcessTab.on('click', '.text-only-btn', function (e) {
        e.preventDefault();
        if (_serviceProcessTab.find('.nav-item:last-child .nav-link').hasClass('active')) {
            _serviceProcessTab.find('.nav-item:first-child .nav-link').trigger('click');
        } else {
            _serviceProcessTab.find('.nav-link.active').parent().next('.nav-item').find('.nav-link').trigger('click');
        }
    });


    if (_window.width() < 992) {
        var _mapLocAltTxt,
            _mapLocAlt = $('.map-loc-alt'),
            _locNavTab = $('.location-tab-nav'),
            _firstLocNavTabText = $('.location-tab-nav li:nth-of-type(1) a .map-loc').text();
        _mapLocAlt.text(_firstLocNavTabText);

        _locNavTab.on('click', 'li a', function () {
            _mapLocAltTxt = $(this).find('.map-loc').text();
            _mapLocAlt.text(_mapLocAltTxt);
        });
    }

}(jQuery));