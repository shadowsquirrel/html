
$('.b1, .b2').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
$('.b3').css({'border':'5px solid lime', 'opacity':'1'});
$('.1a2, .2a3')
.css({'opacity':'1'});
// $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
// .css({'opacity':'0.2'});


$('.fadein').css({'opacity':'1'});
// $('.f4').css({'opacity':'0.6'});


$('.d1,.d2, .d3, .d4').css({'opacity':'1'});


// setTimeout('showRest()', 1250);
var showRest = function() {
    // $('.2a3, .b3').css({'opacity':'0.2'});
    $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
    .css({'opacity':'0.2'});
}


$('.leftpart').hover(
    function() {

        $('.f45').css({'opacity':'1'});
    },
    function() {
        $('.f45').css({'opacity':'0'});
    }
)



setTimeout('unlockhover()', 17000);
var hoveron = false;
unlockhover = function() {
    $('.hover').css({'opacity':'1'});
    hoveron = true;
}
$('.w0, .w1').css({'cursor':'pointer'});
$('.w0').hover(
    function() {
        if(hoveron) {
            $('.b2, .b3').css({'opacity':'0.2'});
            $('.b1').css({'background-color':'yellow', 'border':'5px solid black', 'opacity':'1'})
            $('.maintitles, .stagetextwrap, .stagetextwrap2').css({'opacity':'0'});
            $('.stagetextwrap1').css({'opacity':'1'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.hover').css({'opacity':'0'});
            $('.b2, .b3').css({'opacity':'1'});
            $('.b1').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.maintitles, .stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2').css({'opacity':'0'});
        }

    }
);

$('.w1').hover(
    function() {
        if(hoveron) {
            $('.hover').css({'opacity':'0'});
            $('.b1, .b3').css({'opacity':'0.2'});
            $('.b2').css({'background-color':'yellow', 'border':'5px solid black', 'opacity':'1'})
            $('.maintitles,.stagetextwrap1, .stagetextwrap').css({'opacity':'0'});
            $('.stagetextwrap2').css({'opacity':'1'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b1, .b3').css({'opacity':'1'});
            $('.b2').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.maintitles,.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2').css({'opacity':'0'});
        }

    }
);
$('.titles3').css({'opacity':'1'});

var showts1 = function() {
    // console.log('yoyoy');
    $('.titles1').css({'opacity':'1'});
    setTimeout('hidets1()', 500);
}
var hidets1 = function() {
    $('.titles1').css({'opacity':'0'});
    setTimeout('showts2()', 500);
}
var showts2 = function() {
    $('.titles2').css({'opacity':'1'});
    setTimeout('hidets2()', 500);
}
var hidets2 = function() {
    $('.titles2').css({'opacity':'0'});

    setTimeout('showts3()', 500);
}
var showts3 = function() {
    $('.titles3').css({'opacity':'1'});
    // setTimeout('hidets2()', 1500);
}
    // $('.titles3').css({'opacity':'1'});
// setTimeout('showts1()', 0);
