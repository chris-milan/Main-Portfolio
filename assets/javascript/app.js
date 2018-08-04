$(window).scroll(function() {
var scroll = $(window).scrollTop();
$(".zoom img").css({
width: (100 + scroll/5)  + "%",
top: -(scroll/10)  + "%",
});
//});
    
var s = skrollr.init();

$(document).ready(function (){
skrollr.init();


//$(function() {
//    $('.zoom-1').hide().fadeIn(500).fadeOut(700);
////    $('.zoom-1').fadeOut(1000);
//    $('.zoom-2').hide().fadeIn(700).fadeOut(900);
////    $('.zoom-3').hide().fadeIn(2000);
////    $("#scoreContainer" ).hide().fadeIn(3000);
////    $("#randomNumber" ).hide().fadeIn(3500);
////    $("#winLossContainer" ).hide().fadeIn(4000);
////    $(".crystalsContainer" ).hide().fadeIn(4500);
//});

//  $( ".zoom-1" ).fadeToggle( "slow", "linear" ) {
//  $( ".zoom-2" ).fadeToggle( "fast", function() {
//    $( ".zoom-2" ).append( ".zoom3" );
//  });
//});
//    
    
    
});