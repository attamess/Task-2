$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop();
   $('.layer-1').css('top',(0-(scrolled*.25))+'px');
   $('.star-1').css('top',(400-(scrolled*.8))+'px');
   $('.star-2').css('top',(200-(scrolled*.6))+'px');
   $('.star-3').css('top',(500-(scrolled*.4))+'px');
   $('.star-4').css('top',(600-(scrolled*.5))+'px');
   $('.star-5').css('top',(600-(scrolled*.7))+'px');
   $('.star-6').css('top',(400-(scrolled*.7))+'px');
}
