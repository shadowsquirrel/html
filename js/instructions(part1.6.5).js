
$('.b1, .b2, .b3').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
$('.l34').css({'border':'5px solid lime', 'opacity':'1'});

$('.a0, .a1, .a15, .a2, .a3,.a35, .a4, .continueButton').css({'opacity':'1'});
$('.bluetext').css({'color':'blue'});
$('.redtext').css({'color':'red'});

$('.1a2, .2a3, .3al')
.css({'opacity':'1'});


setTimeout('showBlue()', 10000);
setTimeout('showRed()', 6000);


var showBlue = function() {
    $('.yoyol4').css({'opacity':'0'});
    $('.a2').css({'transition-delay':'7s'})
    $('.b4').css({'opacity':'0.6'});
    $('.bluearrow').css({'opacity':'0.6'});
    $('.b4').css({'border':'3px solid blue', 'background-color':'white'});
    $('.a1').css({'transition-delay':'0s'});
    setTimeout('showmoreBlue()', 2000);
}

var showmoreBlue = function() {
    $('.bluetext').css({'transition-delay':'0s', 'color':'blue'});
}

var showRed = function() {
    $('.a3').css({'transition-delay':'0s'})
    $('.redtext').css({'transition-delay':'0s', 'color':'red'});
    $('.yoyo45').css({'opacity':'0'});
    $('.redarrow').css({'opacity':'0.6'});
    $('.b5').css({'opacity':'0.6'});
    $('.b5').css({'border':'3px dashed red', 'background-color':'white'});



}


$(' .songoster').css({'opacity':'1'});

// $('.yoyo45').css({'opacity':'0'});
// $('.3aw, .w34').css({'opacity':'0'});




setTimeout('unlockhover()', 12000);
var hoveron = false;
unlockhover = function() {
    $('.hover').css({'opacity':'1'});
    hoveron = true;
    $('.b1, .b2, .b3, .w34, .b4, .b5, .b6').css({'transition-delay':'0s', 'transition':'1s'});
    $('.3aw, .w34').css({'opacity':'0.2'});
    $('.x1, .x2, .x3, .w34, .xb4, .x5, .x6').css({'cursor':'pointer'});
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
            $('.b1, .b2, .b3,  .b5, .b4,  .a0, .l34').css({'opacity':'1'});

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
            $('.b1, .b2, .b3,  .b5, .b4,  .a0, .l34').css({'opacity':'1'});
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
            $('.b1, .b2, .b3,  .b5, .b4, .a0, .l34').css({'opacity':'1'});
        }

    }
);

$('.w34').hover(
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
            $('.b1, .b2, .b3, .b5, .b4,  .a0, .l34').css({'opacity':'1'});
        }

    }
);
$('.xb4').hover(
    function() {
        if(hoveron) {
            $('.b4').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap5').css({'opacity':'1'});
            $('.b6').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
            $('.b1, .b2, .b3, .w34, .b5, .b6, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b4').css({'background-color':'white',  'border':'2px solid blue','opacity':'1'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b6').css({'opacity':'0.2'});
            $('.b1, .b2, .b3, .b5, .b4, .a0, .l34').css({'opacity':'1'});
        }

    }
);

$('.x5').hover(
    function() {
        if(hoveron) {
            $('.b5').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8, .a0').css({'opacity':'0'});
            $('.stagetextwrap7').css({'opacity':'1'});
            $('.b1, .b2, .b3, .w34, .b6').css({'opacity':'0.2'});
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
            $('.b1, .b2, .b3, .b5, .b4, .a0, .l34').css({'opacity':'1'});
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
            $('.b1, .b2, .b3, .w34, .b5').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
            $('.b1, .b2, .b3, .w34, .b5, .b4, .a0, .l34').css({'opacity':'0.2'});
            $('.a0').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.b6').css({'background-color':'white',  'border':'3px solid black','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3, .b5, .b4, .a0, .l34').css({'opacity':'1'});
            $('.b6').css({'opacity':'0.2'});
        }

    }
);
