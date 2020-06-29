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
var nbutton = document.getElementById('dice2');
var pbutton = document.getElementById('dice1');

var changeMap = function(mystageIndex) {


    if(mystageIndex===1) {
        $('.b1').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = 'Assignement of Group and Competing Group';
        stagenumberDisplay.innerHTML = mystageIndex;
    }
    if(mystageIndex===2) {
        $('.b1').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b2').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2').css({'opacity':'1'});
        $('.2a3, .b3').css({'opacity':'0.1'});
        $('.b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = 'Followers\' Help or Sabotage Decision ';
        stagenumberDisplay.innerHTML = mystageIndex;
    }
    if(mystageIndex===3) {
        $('.b1, .b2').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b3').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3').css({'opacity':'1'});
        $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = 'First Leaders\' Competition';
        stagenumberDisplay.innerHTML = mystageIndex;
    }
    if(mystageIndex===4) {
        $('.b1, .b2, .b3, .l34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b4').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3, .3al, .la4').css({'opacity':'1'});
        $('.3aw, .w34, .wa5, .5a6, .b5, .b6, .4a5, .5a6')
        .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = 'Followers\' New Leadership Competition ';
        stagenumberDisplay.innerHTML = mystageIndex;
    }
    if(mystageIndex===5) {
        $('.b1, .b2, .b3, .l34, .b4').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'0.1'});
        $('.1a2, .2a3, .3al, .la4, .4a5').css({'opacity':'1'});
        $('.5a6, .b6, .w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = 'Followers\' Help or Sabotage Decision <br> Leader Lost in Stage 3';
        stagenumberDisplay.innerHTML = 5;
    }
    if(mystageIndex===6) {
        $('.b1, .b2, .b3, .w34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3, .3al, .la4, .4a5').css({'opacity':'0.1'});
        $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'1'});
        $('.5a6, .b6, .l34, .b4').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = 'Followers\' Help or Sabotage Decision  <br> Leader won in Stage 3';
        stagenumberDisplay.innerHTML = 5;
    }
    if(mystageIndex===7) {
        $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'0.1'});
        $('.1a2, .2a3, .3al, .la4, .4a5, .5a6').css({'opacity':'1'});
        $('.b6').css({'border':'5px solid lime', 'opacity':'1'});
        stageshortTextDisplay.innerHTML = 'Second Leaders\' Competition  <br> Leader lost in Stage 3';
        stagenumberDisplay.innerHTML = 6;
    }
    if(mystageIndex===8) {
        $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b6').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3, .3al, .la4, .4a5, .5a6').css({'opacity':'0.1'});
        $('.1a2, .2a3, .3aw, .wa5, .5a6').css({'opacity':'1'});
        $('.l34, .b4').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = 'Second Leaders\' Competition <br> Leader won in Stage 3';
        stagenumberDisplay.innerHTML = 6;
    }
}

var stageIndex;
stageIndex=1;
changeMap(1);

nbutton.onclick = function() {
    // console.log(stageIndex);
    // console.log('test test');
    if(stageIndex < 9) {
        stageIndex = stageIndex + 1;
        changeMap(stageIndex);
    }
}

pbutton.onclick = function() {
    // console.log(stageIndex);
    // console.log('test2 test2');
    if(stageIndex > 1) {
        stageIndex = stageIndex - 1;
        changeMap(stageIndex);
    }
}
