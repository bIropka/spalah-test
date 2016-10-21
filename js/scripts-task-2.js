$(document).ready(function () {

    if ($(window).width() > '980') {

        if ($(window).scrollTop() > 106) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }

        $('.logo').appendTo('header .wrapper-inner');
        $('.phone-number').insertAfter('.logo');

    } else {

        $('.logo').appendTo('nav');
        $('.phone-number').insertAfter('.logo');

    }

    if ($(window).width() > '768') {

        $('aside').insertBefore('main');

    }  else {

        $('aside').insertAfter('main');

    }

    $(window).scroll(function() {

        if ($(window).width() > '980') {
            if ($(window).scrollTop() > 106) {
                $('nav').addClass('fixed');
            } else {
                $('nav').removeClass('fixed');
            }
        }

    });

    $(window).resize(function(){

        if ($(window).width() > '980'){

            $('.logo').appendTo('header .wrapper-inner');
            $('.phone-number').insertAfter('.logo');
            
        } else {

            $('.logo').appendTo('nav');
            $('.phone-number').insertAfter('.logo');

        }

        if ($(window).width() > '768') {

            $('aside').insertBefore('main');

        }  else {

            $('aside').insertAfter('main');

        }

    });

    $('.fa-bars').click(function() {

        $(this).toggleClass('fa-bars fa-times');
        $(this).siblings('ul').slideToggle();

    });

    $('.tab li').click(function() {
        
        var newChoice = $(this).index();

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tab').find('.tab-item .active').removeClass('active');
        $(this).parents('.tab').find('.tab-item li').eq(newChoice).addClass('active');
        
    });

});