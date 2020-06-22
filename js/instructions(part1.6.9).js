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






var stagenumberDisplay = document.getElementById('stagenumber');
var stageshortTextDisplay = document.getElementById('stageshortexplanation');
var nbutton = document.getElementById('nextstage');
var pbutton = document.getElementById('previousstage');

var changeMap = function(mystageIndex) {
    stagenumberDisplay.innerHTML = mystageIndex;

    if(mystageIndex===1) {
        $('.b1').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1'});
        stageshortTextDisplay.innerHTML = 'Assignement of Roles';
    }
    if(mystageIndex===2) {
        $('.b1').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b2').css({'border':'5px solid lime', 'opacity':'1'});
        $('.2a3, .b3').css({'opacity':'0.1'});
        $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1'});
        stageshortTextDisplay.innerHTML = 'Followers\' Help or Sabotage Decision ';
    }
    if(mystageIndex===3) {
        $('.b1, .b2').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b3').css({'border':'5px solid lime', 'opacity':'1'});

        $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1'});
        stageshortTextDisplay.innerHTML = 'First Leaders\' Competition';
    }
    if(mystageIndex===4) {
        $('.b1, .b2, .b3, .l34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b4').css({'border':'5px solid lime', 'opacity':'1'});

        $('.3aw, .w34, .wa5, .5a6, .b5, .b6, .4a5, .5a6')
        .css({'opacity':'0.1'});
        stageshortTextDisplay.innerHTML = 'Followers\' New Leadership Competition ';
    }
    if(mystageIndex===5) {
        $('.b1, .b2, .b3, .l34, .w34, .b4').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
        $('.5a6, .b6').css({'opacity':'0.15'});
        stageshortTextDisplay.innerHTML = 'Followers\' Help or Sabotage Decision ';
    }
    if(mystageIndex===6) {
        $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b6').css({'border':'5px solid lime', 'opacity':'1'});
        stageshortTextDisplay.innerHTML = 'Second Leaders\' Competition';
    }
}

var stageIndex;
stageIndex=1;
changeMap(1);

nbutton.onclick = function() {
    if(stageIndex < 6) {
        stageIndex = stageIndex + 1;
        changeMap(stageIndex);
    }
}
pbutton.onclick = function() {
    if(stageIndex > 1) {
        stageIndex = stageIndex - 1;
        changeMap(stageIndex);
    }
}
