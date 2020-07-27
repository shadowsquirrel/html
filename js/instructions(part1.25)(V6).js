
$('.lbutton, .maintitle, .introduction').css({'opacity':'1', 'z-index':'10'});


var Nbutton = document.getElementById('dice1');

Nbutton.onclick = function() {
    $('.introduction, .lbutton').css({'transition-delay':'0s','opacity':'0', 'z-index':'-10'})
    $('.lcontest, .fbutton').css({'opacity':'1', 'z-index':'10'});
}

///////////////////////////////////////////////////
var Nbutton2 = document.getElementById('dice2');

Nbutton2.onclick = function() {
    $('.lcontest,.fbutton').css({'transition-delay':'0s','opacity':'0', 'z-index':'-10'})
    $('.fcontest, .show, .son').css({'opacity':'1'});
    $('.lbutton2').css({'z-index':'0'});
    // son has a 19s delay
    // buraya nodegame icin 19s timerli emit koy
}
//////////////////////////////////////////////////////
var Nbutton3 = document.getElementById('dice3');

Nbutton3.onclick = function() {
    $('.son').css({'transition-delay':'0s'});
    $('.fcontest,.fcontest2').css({'transition-delay':'0s','opacity':'0', 'z-index':'-10'})
    $('.lcontest').css({'opacity':'1'});
    $('.lbutton2').css({'opacity':'0', 'z-index':'-10'});
    $('.fbutton2').css({'opacity':'1', 'z-index':'10'});
}


var Nbutton4 = document.getElementById('dice4');

Nbutton4.onclick = function() {
    $('.lcontest').css({'transition-delay':'0s','opacity':'0', 'z-index':'-10'})
    $('.fcontest, .fcontest2').css({'opacity':'1'});
    $('.fbutton2').css({'opacity':'0', 'z-index':'-10'});
    $('.lbutton2').css({'opacity':'1', 'z-index':'10'});
}



// var Nbutton3 = document.getElementById('dice4');
//
// Nbutton3.onclick = function() {
//     $('.somedefinitions').css({'margin-top':'-80px', 'z-index':'-10'});
//     $('.somedefinitions, .somedefinitions2').css({'transition-delay':'0s','opacity':'0'});
//     showMoreText();
// }
//
//
//
//
//
