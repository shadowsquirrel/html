
$('.b1, .b2, .b3').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
$('.b4').css({'border':'5px solid lime', 'opacity':'1'});

// $('.b5').css({'border':'3px dashed red', 'background-color':'white'});
// $('.b6').css({'border':'3px solid blue', 'background-color':'white'});

$('.1a2, .2a3, .songoster').css({'opacity':'1'});

$('.3al, .3aw').css({'opacity':'0.2'});

var sonradangoster = function() {
    $('.5a6, .b5, .b6').css({'transition-delay':'0', 'transition':'8s'});
    $('.5a6, .b5, .b6').css({'opacity':'0.2'});
}
setTimeout('sonradangoster()', 7500);


$('.bluearrow, .redarrow').css({'opacity':'0'});
// $('.b5, .b6').css({'opacity':'0'});

$('.redtext').css({'color':'red'});
$('.bluetext').css({'color':'blue'});

// $('.d2,.d4, .d6, .d8, .d85 ').css({'opacity':'1'});
$('.d1, .d2, .d3, .d4, .d5, .d6, .d7 ').css({'opacity':'1'});
$('.t1, .t2, .t3, .t4').css({'opacity':'1'});
$('.d65 ').css({'opacity':'0.4'});

$('.l34, .w34').css({'opacity':'0.2'});


var lwon = function() {
    $('.5a6, .b5, .b6').css({'transition-delay':'0', 'transition':'1s'});
    $('.t35').css({'transition-delay':'0', 'transition':'1s', 'opacity':'1'});
    $('.t45').css({'transition-delay':'0', 'transition':'1s', 'opacity':'0'});
    $('.l34').css({'border':'5px solid black'});
    $('.w34').css({'border':'5px solid rosybrown'});
    $('.3al, .la4, .l34, .3aw, .wa5, .w34, .b5, .b4, .wa5, .wa6,.4a5, .4a6 ').css({'transition':'0.5s', 'transition-delay':'0s' });
    $('.3al, .la4, .l34, .b4').css({'opacity':'0.1'});
    $('.4a5, .4a6').css({'opacity':'0'});
    $('.3aw, .w34, .wa5, .wa6').css({'opacity':'0.8'});
    $('.la5').css({'opacity':'0'});
    // $('.b5').css({'opacity':'0.6'});
    // $('.b5 ').css({'opacity':'0'});
    setTimeout('llost()', 10000)
}
var llost = function() {
    $('.5a6, .b5, .b6').css({'transition-delay':'0', 'transition':'1s'});
    $('.t45').css({'transition-delay':'0', 'transition':'1s', 'opacity':'1'});
    $('.t35').css({'transition-delay':'0', 'transition':'1s', 'opacity':'0'});
    $('.3al, .la4, .l34, .3aw, .wa5, .w34, .b5, .b4, .wa5, .wa6,.4a5, .4a6 ').css({'transition':'0.5s', 'transition-delay':'0s' });
    $('.w34').css({'border':'5px solid black'});
    $('.l34').css({'border':'5px solid rosybrown'});
    $('.3al, .l34, .b4').css({'opacity':'0.8'});
    $('.la5').css({'opacity':'0.8'});
    $('.3aw, .w34').css({'opacity':'0.1'});
    $('.wa5, .wa6').css({'opacity':'0'});
    $('.4a5, .4a6').css({'opacity':'0.8'});
    setTimeout('lwon()', 12000)
}

setTimeout('lwon()', 15000);


setTimeout('unlockhover()', 35000);
var hoveron = false;
unlockhover = function() {
    $('.hover').css({'opacity':'1'});
    hoveron = true;
    $('.b1, .b2, .b3, .w34, .l34, .b4, .b5, .b6, .a0').css({'transition-delay':'0s', 'transition':'1s'});
    $('.3aw, .w34').css({'opacity':'0.2'});
    $('.x1, .x2, .x3, .xw, .xl, .x4, .x5, .x6').css({'cursor':'pointer'});
}


$('.x1').hover(
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'yellow','border':'5px solid black', 'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap1').css({'opacity':'1'});
            // $('.b2, .b3, .w34, .b5, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'white', 'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            // $('.b1, .b2, .b3,  .b5, .b4,  .b6,.a0, .l34').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});

        }

    }
);

$('.x2').hover(
    function() {
        if(hoveron) {
            $('.b2').css({'background-color':'yellow', 'border':'5px solid black', 'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap2').css({'opacity':'1'});
            // $('.b1,  .b3, .w34, .b5, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b2').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            // $('.b1, .b2, .b3,  .b5, .b4, .b6,.a0, .l34').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);

$('.x3').hover(
    function() {
        if(hoveron) {
            $('.b3').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap3').css({'opacity':'1'});
            // $('.b1, .b2, .w34, .b5, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b3').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            // $('.b1, .b2, .b3,  .b5, .b4, .b6,.a0, .l34').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);

$('.xw').hover(
    function() {
        if(hoveron) {
            $('.w34').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap4').css({'opacity':'1'});
            // $('.b6').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
            // $('.b1, .b2, .b3, .b5, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.w34').css({'background-color':'white',  'border':'5px solid black','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0.2'});
            // $('.b1, .b2, .b3, .b5, .b4, .b6, .a0, .l34').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);
$('.xl').hover(
    function() {
        if(hoveron) {
            $('.l34').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap5').css({'opacity':'1'});
            $('.b6').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
            // $('.b1, .b2, .b3, .w34, .b5, .b6, .a0').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.l34').css({'background-color':'white',  'border':'5px solid black','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b6').css({'opacity':'0.2'});
            // $('.b1, .b2, .b3, .b4,.a0').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);
$('.x4').hover(
    function() {
        if(hoveron) {
            $('.b4').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap6').css({'opacity':'1'});
            $('.b6').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
            // $('.b1, .b2, .b3, .w34, .a0').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b4').css({'background-color':'white',  'border':'5px solid green','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b6').css({'opacity':'0.2'});
            // $('.b1, .b2, .b3, .b4, .a0').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);

$('.x5').hover(
    function() {
        if(hoveron) {
            $('.b5').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap7').css({'opacity':'1'});

            $('.hover').css({'opacity':'0'});
            // $('.b1, .b2, .b3, .w34, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.b5').css({'background-color':'white',  'border':'5px solid black','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            // $('.b1, .b2, .b3, .b5, .b4, .b6,.a0, .l34').css({'opacity':'1'});
            // $('.b6').css({'opacity':'0'});
            $('.a0').css({'opacity':'1'});
        }

    }
);

$('.x6').hover(
    function() {
        if(hoveron) {
            $('.b6').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap8').css({'opacity':'1'});
            // $('.b1, .b2, .b3, .w34, .b5').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
            // $('.b1, .b2, .b3, .w34, .b5, .b4, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.b6').css({'background-color':'white',  'border':'5px solid black','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            // $('.b1, .b2, .b3, .b5, .b4, .b6,.a0, .l34').css({'opacity':'1'});
            // $('.b6').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'1'});
        }

    }
);
