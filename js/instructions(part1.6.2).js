
$('.b1').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
$('.b2').css({'border':'5px solid lime', 'opacity':'1'});



$('.1a2').css({'opacity':'1'});
$('.d1,.d2').css({'opacity':'1'});

setTimeout('showRest()', 0);
var showRest = function() {
    $('.2a3, .b3').css({'opacity':'0.2'});
    $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
    .css({'opacity':'0.2'});
}



$('.fadein').css({'opacity':'1'});
setTimeout('unlockhover()', 5000);
$('.d0').css({'cursor':'pointer'});
var hoveron = false;
unlockhover = function() {
    hoveron = true;
}

var firsttime = true;
$('.d0').hover(
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'yellow', 'border':'5px solid black','opacity':'1'})
            $('.stagetextwrap').css({'opacity':'0'});
            $('.stagetextwrap1').css({'opacity':'1'});
            // $('.titles1').css({'opacity':'1'});
            $('.titles2').css({'transition':'1s', 'transition-delay':'0s', 'opacity':'0'});
            $('.x').css({'opacity':'1'});
            $('.y').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1').css({'opacity':'0'});
            // $('.titles1').css({'opacity':'0'});
            $('.titles2').css({'opacity':'1'});
            $('.x').css({'opacity':'1'});
            $('.y').css({'opacity':'1'});
            if(firsttime) {
                $('.additionalclass').css({'margin-top':'0px', 'padding-bottom':'0px'});
                $('.f3, .f4').css({'transition-delay':'0s','transition':'0s', 'opacity':'0'});
                $('.fadein2').css({'opacity':'1'});
                firsttime = false;
            }
        }

    }
);
