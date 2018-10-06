$(window).scroll(function() {
var scroll = $(window).scrollTop();
$(".zoom img").css({
width: (100 + scroll/5)  + "%",
top: -(scroll/10)  + "%",
});

var s = skrollr.init();

$(document).ready(function (){
skrollr.init();


});