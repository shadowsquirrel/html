////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//////////////////////////////   SEXPLAIN   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

$('.explainstage').hover(
    function() {
        $('.explainstage').css({'opacity':'1'});
    },
    function() {
        $('.explainstage').css({'opacity':'0.2'});
    }
);

var explainStageSwitch = 1;
$('.explainstage').click(function() {

    if(explainStageSwitch===1) {
        $('.sexplain').css({'opacity':'1', 'z-index':'0', 'position':'static'});
        $('.sexplain2').css({'opacity':'0',  'z-index':'-2', 'position':'absolute'});
    }
    if(explainStageSwitch===0) {
        $('.sexplain').css({'opacity':'0',  'z-index':'-2', 'position':'absolute'});
        $('.sexplain2').css({'opacity':'1',  'z-index':'0', 'position':'static'});
    }
    explainStageSwitch = 1 - explainStageSwitch;
});


var stageIndex;
stageIndex=1;
if(stageIndex===1) {
    $('.b1').css({'border':'5px solid lime', 'opacity':'1'});
    $('.1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
    .css({'opacity':'0.1'});
}
if(stageIndex===2) {
    $('.b1').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
    $('.b2').css({'border':'5px solid lime', 'opacity':'1'});
    $('.2a3, .b3').css({'opacity':'0.1'});
    $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
    .css({'opacity':'0.1'});
}

if(stageIndex===3) {
    $('.b1, .b2').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
    $('.b3').css({'border':'5px solid lime', 'opacity':'1'});

    $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
    .css({'opacity':'0.1'});
}
if(stageIndex===4) {
    $('.b1, .b2, .b3, .l34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
    $('.b4').css({'border':'5px solid lime', 'opacity':'1'});

    $('.3aw, .w34, .wa5, .5a6, .b5, .b6, .4a5, .5a6')
    .css({'opacity':'0.1'});
}
if(stageIndex===5) {
    $('.b1, .b2, .b3, .l34, .w34, .b4').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
    $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
    $('.5a6, .b6').css({'opacity':'0.15'});
}
// if(stageIndex===6) {
//
// }
