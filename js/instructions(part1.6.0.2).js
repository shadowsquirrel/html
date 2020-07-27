$('.f1, .f2, .f3, .f4, .f50,.f51,.f52, .f6, .f7, .f8, .f9').css({'opacity':'1'});
var goDown = function() {
    $('html, body').animate({scrollTop: $(document).height()}, 3000);
}

setTimeout('goDown()', 18500);
