$(document).ready(function (){
    $('nav').removeClass('sticky');
    /* for the sticky navigation */
    $('.js-sec').waypoint(function(direction){
     if(direction=="down")
    {
        $('nav').addClass('sticky');
    }
    else{
        $('nav').removeClass('sticky');
    }
    },{
        offset:'65px'
    });
    
/* for scrolling to the respective sections */

    $('.js--scroll-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--sec-plans').offset().top},200);   
    });
    
    $('.js--scroll-more').click(function(){
        $('html, body').animate({scrollTop: $('.js-sec').offset().top},200);   
    });
    /* animation */
    $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('animated pulse');
    },{
        offset:'50%'
    });
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
});
