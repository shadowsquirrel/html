
$('.b1, .b2, .b3, .l34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
$('.b4').css({'border':'5px solid lime', 'opacity':'1'});

$('.b5').css({'border':'3px dashed red', 'background-color':'white'});
$('.b6').css({'border':'3px solid blue', 'background-color':'white'});

$('.1a2, .2a3, .3al, .la4')
.css({'opacity':'1'});

$('.4a5, .5a6, .w34, .wa5, .3aw')
.css({'opacity':'0'});


$('.bluearrow, .redarrow').css({'opacity':'0.6'});
$('.b5, .b6').css({'opacity':'0.6'});

$('.redtext').css({'color':'red'});
$('.bluetext').css({'color':'blue'});


$('.d2,.d4, .d6, .d7, .d8, .d85, .d875, .d9, .d10, .d9t, .d10t').css({'opacity':'1'});
$('.d1,.d3,.d5, .songoster').css({'opacity':'1'});


setTimeout('unlockhover()', 30000);
var hoveron = false;
unlockhover = function() {
    hoveron = true;
    $('.b1, .b2, .b3, .w34').css({'transition-delay':'0s', 'transition':'1s'});
    $('.3aw, .w34').css({'opacity':'0.2'});
}


$('.b1').hover(
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'yellow','border':'5px solid black', 'opacity':'1'})
            $('.stagetextwrap, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5').css({'opacity':'0'});
            $('.stagetextwrap1').css({'opacity':'1'});
        }

    },
    function() {
        if(hoveron) {
            $('.b1').css({'background-color':'white', 'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5').css({'opacity':'0'});
        }

    }
);

$('.b2').hover(
    function() {
        if(hoveron) {
            $('.b2').css({'background-color':'yellow', 'border':'5px solid black', 'opacity':'1'})
            $('.stagetextwrap1, .stagetextwrap, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5').css({'opacity':'0'});
            $('.stagetextwrap2').css({'opacity':'1'});
        }

    },
    function() {
        if(hoveron) {
            $('.b2').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5').css({'opacity':'0'});
        }

    }
);

$('.b3').hover(
    function() {
        if(hoveron) {
            $('.b3').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap1, .stagetextwrap, .stagetextwrap2, .stagetextwrap4, .stagetextwrap5').css({'opacity':'0'});
            $('.stagetextwrap3').css({'opacity':'1'});
        }

    },
    function() {
        if(hoveron) {
            $('.b3').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5').css({'opacity':'0'});
        }

    }
);

$('.w34').hover(
    function() {
        if(hoveron) {
            $('.w34').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap1, .stagetextwrap, .stagetextwrap2, .stagetextwrap4, .stagetextwrap5').css({'opacity':'0'});
            $('.stagetextwrap4').css({'opacity':'1'});
            // $('.b6').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.w34').css({'background-color':'white',  'border':'5px solid black','opacity':'0.2'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0'});
        }

    }
);

$('.l34').hover(
    function() {
        if(hoveron) {
            $('.l34').css({'background-color':'yellow','border':'5px solid black',  'opacity':'1'})
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap').css({'opacity':'0'});
            $('.stagetextwrap5').css({'opacity':'1'});
            // $('.b6').css({'opacity':'0.2'});
        }

    },
    function() {
        if(hoveron) {
            $('.l34').css({'background-color':'white',  'border':'5px solid rosybrown','opacity':'0.7'})
            $('.stagetextwrap').css({'opacity':'1'});
            $('.stagetextwrap1, .stagetextwrap2, .stagetextwrap3, .stagetextwrap4, .stagetextwrap5').css({'opacity':'0'});
            // $('.b6').css({'opacity':'0'});
        }

    }
);
