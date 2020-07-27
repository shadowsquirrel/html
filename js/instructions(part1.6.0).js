$('.f1, .f2, .f3, .f4, .f50,.f51,.f52, .f6, .f7, .f8, .f9').css({'opacity':'1'});

$('.payinfo').hover(
    function() {
        $('.payment').css({'opacity':'1'});
        $('.payinfo').css({'background-color':'black'});
    },
    function() {
        $('.payment').css({'opacity':'0'});
        $('.payinfo').css({'background-color':'gray'});
    }
);

var showButton = function() {
    $('.payinfo').css({'opacity':'1'});
}

setTimeout('showButton()', 20000)
