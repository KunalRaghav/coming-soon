
function blinker() {
	$('.blink').fadeOut(500);
	$('.blink').fadeIn(500);
}
function blinkerdash(){
    $('.blink_dash').fadeOut(250);
    $('.blink_dash').fadeIn(250);
}
setInterval(blinker, 1000);
setInterval(blinkerdash,1000);

window.onload = function(){
    $('#type_in').typeTo("Hack@BVP 2.0");
};