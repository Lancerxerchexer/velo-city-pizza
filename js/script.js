$(document).ready(function(){
    $('.mobile-menu').click(function(){
        $('nav ul').toggleClass('show');
    });


    $(window).scroll(function(){
        var navOffset = $('#description').offset().top;

        var scrollPos = $(window).scrollTop();

        if(scrollPos >= navOffset){
            $('nav').addClass('othernavbar');
        } else {
            $('nav').removeClass('othernavbar');
        }
    });











});
