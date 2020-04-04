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
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
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
