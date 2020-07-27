$('.a1, .a2, .a3, .a4, .a5').css({'opacity':'1'});
goDown = function() {
        $('html, body').animate({scrollTop: $(document).height()}, 3000);
}

setTimeout('goDown()', 25500);
