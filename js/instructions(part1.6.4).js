
$('.b1, .b2, .b3').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
$('.w34').css({'border':'5px solid lime', 'opacity':'1'});


// $('.3al, .l34, .la4, .b4, .4a5, .5a6')
// .css({'opacity':'0'});
// $('.wa5, .yoyo')
// .css({'opacity':'0'});

$('.a0, .a1, .a2, .a3, .a4, .a5, .a6, .a7, .continueButton').css({'opacity':'1'});

setTimeout('showBlue()', 9000);
setTimeout('showRed()', 18000);

var showRed = function() {
    $('.redarrow').css({'opacity':'0.6'});
    $('.b5').css({'opacity':'0.6'});
    $('.a5, .a7').css({'transition-delay':'0s', 'transition':'1s'});
    $('.redtext').css({'color':'red'});
    $('.b5').css({'border':'3px dashed red', 'background-color':'white'});
    $('.wa5, .yoyo').css({'opacity':'0'});

}
var showBlue = function() {
    $('.b6').css({'border':'3px solid blue', 'background-color':'white'});
    $('.bluearrow').css({'opacity':'0.6'});
    $('.a4, .a1').css({'transition-delay':'0s', 'transition':'1s'});
    $('.b6').css({'opacity':'0.6'});

    $('.bluetext').css({'color':'blue'});
    $('.yoyo')
    .css({'opacity':'0'});

}






// $('.notvisited').css({'opacity':'1'})
// $('.notvisited2').css({'opacity':'0'})
$('.arrow').css({'opacity':'0.1'});
$('.1a2, .2a3, .3aw').css({'opacity':'1'});
$('.d2,.d4').css({'opacity':'1'});
$('.d1,.d3').css({'opacity':'1'});
$('.gorunmezt').css({'opacity':'1'});
$('.straighttext, .lastthing').css({'opacity':'1'});

// $('.3al, .l34').css({'opacity':'0.1'});






setTimeout('unlockhover()', 19000);
var hoveron = false;
unlockhover = function() {
    $('.hover').css({'opacity':'1'});
    hoveron = true;
    $('.b1, .b2, .b3, .b5, .b6, .a0').css({'transition-delay':'0s', 'transition':'1s'});
    $('.d0, .d1, .d2, .d5, .d4, .d6').css({'cursor':'pointer'});
}


$('.d0').hover(
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'yellow','border':'5px solid black', 'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap2, .stagetextwrap3, .a0').css({'opacity':'0'});
            $('.stagetextwrap1').css({'opacity':'1'});
            $('.b2, .b3, .w34, .b5, .b6').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'white', 'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3').css({'opacity':'0'});
            $('.b1, .b2, .b3, .w34, .b5, .b6, .a0').css({'opacity':'1'});
        }

    }
);

$('.d2').hover(
    function() {
        if(hoveron) {
            $('.b2').css({'background-color':'yellow', 'border':'5px solid black', 'opacity':'1'})
            $('.stagetextwrap1, .stagetextwrap, .stagetextwrap3, .a0').css({'opacity':'0'});
            $('.stagetextwrap2').css({'opacity':'1'});
            $('.b1, .b3, .w34, .b5, .b6').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b2').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3').css({'opacity':'0'});
            $('.b1, .b2, .b3, .w34, .b5, .b6, .a0').css({'opacity':'1'});
        }

    }
);

$('.d4').hover(
    function() {
        if(hoveron) {
            $('.b3').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap1, .stagetextwrap, .stagetextwrap2, .a0').css({'opacity':'0'});
            $('.stagetextwrap3').css({'opacity':'1'});
            $('.b1, .b2, .w34, .b5, .b6').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
        }

    },
    function() {
        if(hoveron) {
            $('.b3').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3').css({'opacity':'0'});
            $('.b1, .b2, .b3, .w34, .b5, .b6, .a0').css({'opacity':'1'});
        }

    }
);

$('.d5').hover(
    function() {
        if(hoveron) {
            $('.b5').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap, .stagetextwrap5, .stagetextwrap6, .a0').css({'opacity':'0'});
            $('.stagetextwrap7').css({'opacity':'1'});
            $('.b1, .b2, .b3, .w34, .b6').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.b5').css({'background-color':'white',  'border':'3px dotted red','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7').css({'opacity':'0'});
            $('.b1, .b2, .b3, .w34, .b5, .b6, .a0').css({'opacity':'1'});
            // $('.b6').css({'opacity':'0'});
        }

    }
);

$('.d6').hover(
    function() {
        if(hoveron) {
            $('.b6').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .a0').css({'opacity':'0'});
            $('.stagetextwrap8').css({'opacity':'1'});
            $('.b1, .b2, .b3, .w34, .b5').css({'opacity':'0.2'});
            $('.hover').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.b6').css({'background-color':'white',  'border':'3px solid blue','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5, .stagetextwrap6, .stagetextwrap7, .stagetextwrap8').css({'opacity':'0'});
            $('.b1, .b2, .b3, .w34, .b5, .b6, .a0').css({'opacity':'1'});
            // $('.b6').css({'opacity':'0'});
        }

    }
);
