
$('.b1, .b2, .b3, .l34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
$('.b4').css({'border':'5px solid lime', 'opacity':'1'});



$('.1a2, .2a3, .3al, .la4')
.css({'opacity':'1'});






setTimeout('showRed()', 8000);
setTimeout('showBlue()', 14000);

$('.songoster').css({'opacity':'1'});

$(' .a0, .a1, .a2, .a3, .a4, .a5, .a6, .a7, .a8, .a9').css({'opacity':'1'});

var showRed = function() {
    $('.a3, .a5').css({'transition':'1s', 'transition-delay':'0s'});
    $('.redtext').css({'color':'red'});
    $('.redarrow').css({'opacity':'0.6'});
    $('.b5').css({'opacity':'0.6'});
    $('.b5').css({'border':'3px dashed red', 'background-color':'white'});
    $('.4a5')
    .css({'opacity':'0'});

}

var showBlue = function() {
    $('.a6, .a9').css({'transition':'1s', 'transition-delay':'0s'});
    $('.bluetext').css({'color':'blue'});
    $('.bluearrow').css({'opacity':'0.6'});
    $('.b6').css({'opacity':'0.6'});
    $('.b6').css({'border':'3px solid blue', 'background-color':'white'});
    $('.5a6')
    .css({'opacity':'0'});
}



setTimeout('unlockhover()', 16000);
var hoveron = false;
unlockhover = function() {
    $('.hover').css({'opacity':'1'});
    hoveron = true;
    $('.b1, .b2, .b3, .w34, .l34, .b4, .b5, .b6, .a0').css({'transition-delay':'0s', 'transition':'1s'});
    $('.3aw, .w34').css({'opacity':'0.2'});
    $('.x1, .x2, .x3, .xw, .xl, .x5, .x6').css({'cursor':'pointer'});
}


$('.x1').hover(
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'yellow','border':'5px solid black', 'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap1').css({'opacity':'1'});
            $('.b2, .b3, .w34, .b5, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'white', 'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3,  .b5, .b4,  .b6,.a0, .l34').css({'opacity':'1'});

        }

    }
);

$('.x2').hover(
    function() {
        if(hoveron) {
            $('.b2').css({'background-color':'yellow', 'border':'5px solid black', 'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap2').css({'opacity':'1'});
            $('.b1,  .b3, .w34, .b5, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b2').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3,  .b5, .b4, .b6,.a0, .l34').css({'opacity':'1'});
        }

    }
);

$('.x3').hover(
    function() {
        if(hoveron) {
            $('.b3').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap3').css({'opacity':'1'});
            $('.b1, .b2, .w34, .b5, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b3').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3,  .b5, .b4, .b6,.a0, .l34').css({'opacity':'1'});
        }

    }
);

$('.xw').hover(
    function() {
        if(hoveron) {
            $('.w34').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap4').css({'opacity':'1'});
            $('.b6').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
            $('.b1, .b2, .b3, .b5, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.w34').css({'background-color':'white',  'border':'5px solid black','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b6').css({'opacity':'0.2'});
            $('.b1, .b2, .b3, .b5, .b4, .b6, .a0, .l34').css({'opacity':'1'});
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
            $('.b1, .b2, .b3, .w34, .b5, .b6, .a0').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.l34').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b6').css({'opacity':'0.2'});
            $('.b1, .b2, .b3, .b5, .b4, .b6,.a0, .l34').css({'opacity':'1'});
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
            $('.b1, .b2, .b3, .w34, .b4, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.b5').css({'background-color':'white',  'border':'3px dotted red','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3, .b5, .b4, .b6,.a0, .l34').css({'opacity':'1'});
            // $('.b6').css({'opacity':'0'});
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
            $('.b1, .b2, .b3, .w34, .b5, .b4, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.b6').css({'background-color':'white',  'border':'3px solid blue','opacity':'1'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3, .b5, .b4, .b6,.a0, .l34').css({'opacity':'1'});
            // $('.b6').css({'opacity':'0.2'});
        }

    }
);
