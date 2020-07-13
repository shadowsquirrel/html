$('.b1').css({'border':'5px solid lime', 'opacity':'1'});
$('.1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
.css({'opacity':'0.1'});
$('.fadein').css({'opacity':'1'});
setTimeout('goDown()', 11500);
goDown = function() {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 5000);
}
