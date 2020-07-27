$('.fadein').css({'opacity':'1'});
$('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
$('.b6').css({'border':'5px solid lime', 'opacity':'1'});
// $('.5a6, .b6').css({'opacity':'0.1'});
$('.1a2, .2a3, .3aw, .3al, .la4, .4a5, .wa5, .5a6').css({'opacity':'1'});
$('.d1,.d2,.d3,.d4,.d5,.d6,.d7,.d8,.d9,.d10,.d11,.d12,.d13,.d14,.d15,.d17,.d18,.d19,.d20,.songoster').css({'opacity':'1'});
$('.d16').css({'opacity':'0.7'});

$('.p1, .p2,.p3,.p4,.p5,.p7,.p8').css({'opacity':'1'});
$('.p6').css({'opacity':'0.7'});

setTimeout('goDown()', 15000);

var goDown = function() {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 3000);
}



setTimeout('unlockhover()', 12000);
var hoveron = false;
unlockhover = function() {
    $('.hover').css({'opacity':'1'});
    hoveron = true;
    $('.b1, .b2, .b3, .w34, .l34, .b4, .b5, .b6, .a0').css({'transition-delay':'0s', 'transition':'1s'});
    // $('.3aw, .w34').css({'opacity':'0.2'});
    $('.x1, .x2, .x3, .xw, .xl, .x4, .x5').css({'cursor':'pointer'});
}


$('.x1').hover(
    function() {
        if(hoveron) {
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5, .b6').css({'opacity':'0.2'});
            $('.b1').css({'background-color':'yellow','border':'5px solid black', 'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap1').css({'opacity':'1'});

            $('.a0').css({'opacity':'0'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'white', 'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'opacity':'0.7'});
            $('.b6').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});

        }

    }
);

$('.x2').hover(
    function() {
        if(hoveron) {
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5, .b6').css({'opacity':'0.2'});
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
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'opacity':'0.7'});
            $('.b6').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);

$('.x3').hover(
    function() {
        if(hoveron) {
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5, .b6').css({'opacity':'0.2'});
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
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'opacity':'0.7'});
            $('.b6').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);

$('.xw').hover(
    function() {
        if(hoveron) {
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5, .b6').css({'opacity':'0.2'});
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
            $('.w34').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'opacity':'0.7'});
            $('.b6').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);
$('.xl').hover(
    function() {
        if(hoveron) {
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5, .b6').css({'opacity':'0.2'});
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
            $('.l34').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'opacity':'0.7'});
            $('.b6').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);
$('.x4').hover(
    function() {
        if(hoveron) {
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5, .b6').css({'opacity':'0.2'});
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
            $('.b4').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'opacity':'0.7'});
            $('.b6').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);

$('.x5').hover(
    function() {
        if(hoveron) {
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5, .b6').css({'opacity':'0.2'});
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
            $('.b5').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'opacity':'0.7'});
            $('.b6').css({'opacity':'1'});
            $('.a0').css({'opacity':'1'});
        }

    }
);

// $('.x6').hover(
//     function() {
//         if(hoveron) {
//             $('.b6').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
//             $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
//             $('.stagetextwrap8').css({'opacity':'1'});
//             // $('.b1, .b2, .b3, .w34, .b5').css({'opacity':'0.2'});
//             $('.hover').css({'opacity':'0'});
//             // $('.b1, .b2, .b3, .w34, .b5, .b4, .a0, .l34').css({'opacity':'0.2'});
//             $('.a0').css({'opacity':'0'});
//             // $('.b6').css({'opacity':'0.2'});
//         }
//
//     },
//     function() {
//         if(hoveron) {
//             $('.b6').css({'background-color':'white',  'border':'5px solid black','opacity':'0.2'})
//             $('.stagetextwrap').css({'opacity':'1'});
//             $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
//             // $('.b1, .b2, .b3, .b4, .b5, .b6,.a0, .l34, ').css({'opacity':'1'});
//             // $('.b6').css({'opacity':'0.2'});
//             $('.a0').css({'opacity':'1'});
//         }
//
//     }
// );
