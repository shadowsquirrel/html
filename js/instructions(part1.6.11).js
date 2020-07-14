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
        $('.explainstage').css({'background-color':'black'});
    },
    function() {
        $('.explainstage').css({'background-color':'lightgray'});
    }
);

var explainStageSwitch = 1;
$('.explainstage').click(function() {

    $('.sbutton').css({'border':'2px solid white'});
    $('.explainstage').css({'border':'2px solid white'});
    if(explainStageSwitch===1) {

        $('.sexplain').css({'opacity':'1', 'z-index':'0', 'position':'static'});
        $('.sexplain2').css({'opacity':'0',  'z-index':'-2', 'position':'absolute'});
    }
    if(explainStageSwitch===0) {

        $('.sexplain').css({'opacity':'0',  'z-index':'-2', 'position':'absolute'});
        $('.sexplain2').css({'opacity':'1',  'z-index':'0', 'position':'static'});
    }
    explainStageSwitch = 1 - explainStageSwitch;
    $('.locked').css({'opacity':'1'});
});






var stagenumberDisplay = document.getElementById('stagenumber');
var stageshortTextDisplay = document.getElementById('stageshortexplanation');
var nbutton = document.getElementById('dice2');
var pbutton = document.getElementById('dice1');

var changeMap2 = function(mystageIndex) {
    $('.b1, .1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
    .css({'background-color':'white'});

    if(mystageIndex===1) {

        $('.b1').css({'border':'5px solid black', 'background-color':'yellow',  'opacity':'1'});
        $('.1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1'});
        stageshortTextDisplay.innerHTML = 'You are <strong>randomly</strong> assigned to a role, group and an opposing group';

    }
    if(mystageIndex===2) {

        $('.b2').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
        $('.1a2, .b1, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1'});
        stageshortTextDisplay.innerHTML = '<strong>Help/Sabotage Decision I</strong> <br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader.';

    }
    if(mystageIndex===3) {

        $('.b3').css({'border':'5px solid black', 'background-color':'yellow',  'opacity':'1'});
        $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1'});
        stageshortTextDisplay.innerHTML = '<strong>Leaders\' Contest I</strong> <br> <u>Winner</u> <strong>continues as leader</strong> and <strong>receives 1000</strong> tokens.';

    }
    if(mystageIndex===4) {

        $('.b4').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
        $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b3, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1'});
        stageshortTextDisplay.innerHTML = '<strong>Followers\' Contest</strong> <br> Since the <strong>leader lost</strong> her leader role in Stage <strong>3</strong>, <br>her <strong>followers</strong> compete for the <strong>new</strong> leader role.';

    }
    if(mystageIndex===5) {

        $('.b5').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
        $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b3, .4a5, .b4, .5a6, .b6')
        .css({'opacity':'0.1'});
        $('.5a6, .b6, .w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = '<strong>Help/Sabotage Decision II</strong> <br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader. <br> <strong>Lost leader of stage 3</strong> is now one of the followers.';

    }
    if(mystageIndex===6) {
        $('.b6').css({'border':'5px solid black', 'background-color':'yellow', 'opacity':'1'});
        $('.1a2, .b1, .2a3, .b2, .3al, .3aw, .w34, .l34, .la4, .wa5, .b3, .4a5, .b4, .5a6, .b5')
        .css({'opacity':'0.1'});
        stageshortTextDisplay.innerHTML = '<strong>Leaders\' Contest II</strong> <br> <u>Winner</u> <strong>receives 1000</strong> tokens. <br> Your group\'s leader is the <strong>winner</strong> of Stage <strong>4</strong>, Followers\' Contest.';

    }

}

var changeMap = function(mystageIndex) {
    $('.b1, .1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
    .css({'background-color':'white'});

    if(mystageIndex===1) {
        $('.b1').css({'border':'5px solid lime', 'opacity':'1', 'background-color':'white'});
        $('.1a2, .b2, .2a3, .b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)', 'background-color':'white'});
        stageshortTextDisplay.innerHTML = 'You are <strong>randomly</strong> assigned to a role, group and an opposing group';
        stagenumberDisplay.innerHTML = mystageIndex;
    }
    if(mystageIndex===2) {
        $('.b1').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b2').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2').css({'opacity':'1'});
        $('.2a3, .b3').css({'opacity':'0.1'});
        $('.b3, .3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = '<strong>Help/Sabotage Decision I</strong> <br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader.';
        stagenumberDisplay.innerHTML = mystageIndex;
    }
    if(mystageIndex===3) {
        $('.b1, .b2').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b3').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3').css({'opacity':'1'});
        $('.3al, .3aw, .w34, .l34, .la4, .wa5, .b4, .4a5, .b5, .5a6, .b6')
        .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = '<strong>Leaders\' Contest I</strong> <br> <u>Winner</u> <strong>continues as leader</strong> and <strong>receives 1000</strong> tokens.';
        stagenumberDisplay.innerHTML = mystageIndex;
    }
    if(mystageIndex===4) {
        $('.b1, .b2, .b3, .l34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b4').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3, .3al, .la4').css({'opacity':'1'});
        $('.3aw, .w34, .wa5, .5a6, .b5, .b6, .4a5, .5a6')
        .css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = '<strong>Followers\' Contest</strong> <br> Since the <strong>leader lost</strong> her leader role in Stage <strong>3</strong>, <br>her <strong>followers</strong> compete for the <strong>new</strong> leader role.';
        stagenumberDisplay.innerHTML = mystageIndex;
    }
    if(mystageIndex===5) {
        $('.b1, .b2, .b3, .l34, .b4').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'0.1'});
        $('.1a2, .2a3, .3al, .la4, .4a5').css({'opacity':'1'});
        $('.5a6, .b6, .w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = '<strong>Help/Sabotage Decision II</strong> <br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader. <br> <strong>Lost leader of stage 3</strong> is now one of the followers.';
        stagenumberDisplay.innerHTML = 5;
    }
    if(mystageIndex===6) {
        $('.b1, .b2, .b3, .w34').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b5').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3, .3al, .la4, .4a5').css({'opacity':'0.1'});
        $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'1'});
        $('.5a6, .b6, .l34, .b4').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = '<strong>Help/Sabotage Decision II</strong> <br> <strong>Followers</strong> decide how much to <strong>help</strong> or <strong>sabotage</strong> <strong>their</strong> leader. <br> Your group\'s followers are the <strong>same followers</strong> from stage <strong>2</strong>.';
        stagenumberDisplay.innerHTML = 5;
    }
    if(mystageIndex===7) {
        $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.w34').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        $('.1a2, .2a3, .3aw, .wa5').css({'opacity':'0.1'});
        $('.1a2, .2a3, .3al, .la4, .4a5, .5a6').css({'opacity':'1'});
        $('.b6').css({'border':'5px solid lime', 'opacity':'1'});
        stageshortTextDisplay.innerHTML = '<strong>Leaders\' Contest II</strong> <br> <u>Winner</u> <strong>receives 1000</strong> tokens. <br> Your group\'s leader is the <strong>winner</strong> of Stage <strong>4</strong>, Followers\' Contest.';
        stagenumberDisplay.innerHTML = 6;
    }
    if(mystageIndex===8) {
        $('.b1, .b2, .b3, .l34, .w34, .b4, .b5').css({'border':'5px solid rosybrown', 'opacity':'0.7'});
        $('.b6').css({'border':'5px solid lime', 'opacity':'1'});
        $('.1a2, .2a3, .3al, .la4, .4a5, .5a6').css({'opacity':'0.1'});
        $('.1a2, .2a3, .3aw, .wa5, .5a6').css({'opacity':'1'});
        $('.l34, .b4').css({'opacity':'0.1', 'border':'solid 3px rgb(160, 160, 160)'});
        stageshortTextDisplay.innerHTML = '<strong>Leaders\' Contest II</strong> <br> <u>Winner</u> <strong>receives 1000</strong> tokens. <br> Your group\'s leader is the <strong>same leader</strong> from stage <strong>3</strong>, Leaders\' Contest I.';
        stagenumberDisplay.innerHTML = 6;
    }
}

var stageIndex;
stageIndex=1;
changeMap(1);

nbutton.onclick = function() {
    $('.afterbutton').css({'opacity':'0', 'margin-top':'-40px'});
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
    $('.afterbutton').css({'opacity':'0', 'margin-top':'-40px'});
    if(stageIndex > 1) {
        stageIndex = stageIndex - 1;
        changeMap(stageIndex);
    }
}




$('.b1, .b2, .b3, .b4, .b5, .b6').css({'transition-delay':'0s', 'transition':'1s'});
// $('.3aw, .w34').css({'opacity':'0.2'});
$('.x1, .x2, .x3, .x4, .x5, .x6').css({'cursor':'pointer'});



$('.x1').hover(
    function() {
        changeMap2(1);
    },
    function() {
        changeMap(stageIndex);
    }
);

$('.x2').hover(
    function() {
        changeMap2(2);
    },
    function() {
        changeMap(stageIndex);
    }
);

$('.x3').hover(
    function() {
        changeMap2(3);
    },
    function() {
        changeMap(stageIndex);
    }
);

$('.x4').hover(
    function() {
        changeMap2(4);
    },
    function() {
        changeMap(stageIndex);
    }
);

$('.x5').hover(
    function() {
        changeMap2(5);
    },
    function() {
        changeMap(stageIndex);
    }
);

$('.x6').hover(
    function() {
        changeMap2(6);
    },
    function() {
        changeMap(stageIndex);
    }
);
