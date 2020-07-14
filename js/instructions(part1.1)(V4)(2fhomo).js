////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Turning Wheel   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var theWheel;
var createWheel = function(myPwin) {
    var a = 100*myPwin;
    var b = 100-a;

    theWheel = new Winwheel({
        'canvasId': 'mywheel',
        'numSegments': 2,
        'outerRadius': 60, // controls the size of the theWheel
        'textOrientation' : 'vertical',    // Set orientation. horizontal, vertical, curved.
        // 'textOrientation' : 'curved',
        'textFontFamily'  : 'Courier',     // Monospace font best for vertical and curved.
        // 'textFontSize'    : 10,
        // 'textAlignment'  : 'Center',         // Set alignment: inner, outer, center.
        // 'textMargin'     : 15,
        // 'textDirection': 'reversed',
        'rotationAngle':Math.random()*360,

        'segments':
        [
            {
                'fillStyle' : 'rgb(80, 80, 80)',
                'textFillStyle': 'white',
                'text'      : '',
                'size'      : winwheelPercentToDegrees(a),
            },
            {
                'fillStyle' : 'rgb(225, 225, 225)',
                'textFillStyle': 'black',
                'text'      : '',
                'size'      : winwheelPercentToDegrees(b),
            },
        ],
        // 'pointerGuide' :        // Turn pointer guide on.
        // {
        //     'display'     : true,
        //     'strokeStyle' : 'red',
        //     'lineWidth'   : 3
        // },
        'animation' :
        {
            'type'     : 'spinToStop',
            'duration' : 5,
            'spins'    : 50,
            'callbackFinished' : 'showResult()',
        }
    });
}

createWheel(0.99);

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////////////////////////     CALCULATOR      //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var updatePie = function(a, myID) {


    var x = a;
    var y = 1-a;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if((x + y) === 0) {
        x = 1;
        y = 1;
    }
    var data = [{
        values: [y, x],
        labels: ['Opponent\'s Share', 'Your Share'],
        textfont: {
            color: ['black', 'white'],
        },
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(80, 80, 80)'],
            line: {
                color: 'black',
                width: 1,
            }
        }
    }];

    var layout = {
        autosize: false,
        // title: 'Probability to Win',
        // "titlefont": {
        //     "size": 14,
        // },
        height: 200,//120,
        width: 200,//150,
        font:{
            size: 10
        },
        margin: {"t": 40, "b": 40, "l": 40, "r": 40},
        showlegend: false,
    };

    Plotly.react(myID, data, layout, {displayModeBar: false});
}

var updateBarLeader = function(e, barId, ourSide, axisOn) {
    // var val1 = efi / (efi + oefi);
    // var val2 = oefi / (efi + oefi);
    var y = e;
    if(typeof(x) === 'undefined') x = 0;

    var mColor = ourSide ? 'rgb(80, 80, 80)' : 'rgb(225, 225, 225)';
    // var mColor = ourSide ? myColor(logistic(val1)) : myColor(logistic(val2));
    // var myLabel = x > 0 ? x : -x;
    // var myTextPosition = (x >= 0 || x === -100) ? 'outside' : 'inside';
    // var myTextFont = (x < 0 && x > -100 && !lighter) ? 'white' : 'black';

    var data = [{
        x: [y],
        name: [''],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        cliponaxis: false,
        marker:{
            color: mColor,
        },
        text: [y],
        textfont: {
            size: '14'
        },
        orientation: 'h',
        // textanchor: 'right',
        textposition: 'outside',
    }];

    var layout = {
        barmode: 'group',
        height: 75,
        width: 405,
        margin: {"t": 22, "b": 25, "l": 25, "r": 27},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: [0,800],
            layer: 'below traces',
            fixedrange: true,

            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals:  [0, 50, 100, 150, 200, 250, 300, 400, 500, 650, 800],
            ticktext:  [0, 50, 100, 150, 200, 250, 300, 400, 500, 650, 800],
            tickangle: -45,
            ticks:'',
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",
        },
        yaxis: {
            ticks: '',
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            showticklabels: false,
        },
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

//VARIABLES AND GRAPHICS INITIATIONS

// leader global variables
var efo, efi, efefo, oefo, oefi, oefefo, pwin;
efo = oefo = 250;
efi = oefi = 1;

// var efo1, efi1, efefo1, oefo1, oefi1, oefefo1, pwin1;
// efo1 = oefo1 = 250;
// efi = oefi = 1;


var updateBarYAxis = function(barId, axisSwitch) {
    var update = {
        'yaxis.showgrid': axisSwitch,
        'yaxis.showticklabels': axisSwitch
    };
    Plotly.relayout(barId, update);
}

var updateBarXAxis = function(barId, axisSwitch) {
    var update = {
        'xaxis.showgrid': axisSwitch,
        'xaxis.showticklabels': axisSwitch
    };
    Plotly.relayout(barId, update);
}

var updatePwin = function() {
    efefo = efi * efo;
    oefefo = oefi * oefo;
    pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));

    // efefo1 = efi * efo1;
    // oefefo1 = oefi * oefo1;
    // pwin1 = ((efo1 + oefo1) === 0) ? 0.5 : (efefo1 / (efefo1 + oefefo1));
}

var syncValues = function() {
    // efo = efo1;
    // oefo = oefo1;
}

var syncBars = function() {
    updateBarLeader(efo, 'barl', true, false);
    updateBarLeader(oefo, 'obarl', false, false);
}

var activeWheelSwitch = true;

var wheelresultDisplay2 = document.getElementById('wheelresulttext2');

var updateAll = function() {
    updatePwin();
    updatePie(pwin, 'pie1')
    updatePie(pwin, 'pie');
    if(activeWheelSwitch) {
        hideWheel();
        activeWheelSwitch = false;
    }
    var mytoken = (efo > 1) ? 'tokens' : 'token';
    wheelresultDisplay2.innerHTML = 'Your investment cost: <strong>' + efo + '</strong> ' + mytoken;
}

var hideWheel = function() {
    $('.piewrap').css({'display':'flex'});
    $('.piewrap').css({'opacity':'1', 'zIndex':'1'});
    $('.mywheel').css({'display':'none'});
    $('.mywheel').css({'opacity':'0', 'zIndex':'0'});
    liftArrow();
}

var resultIndex;
var animateWheel = function() {
    createWheel(pwin);
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;

    $('.piewrap').css({'display':'none'});
    $('.piewrap').css({'opacity':'0', 'zIndex':'-1'});
    $('.mywheel').css({'display':'flex'});
    $('.mywheel').css({'opacity':'1', 'zIndex':'0'});
    $('.arrow').css({'marginTop':'48px'});

    var stopAt = theWheel.getRandomForSegment(resultIndex);
    theWheel.animation.stopAngle = stopAt;
    theWheel.startAnimation();
    activeWheelSwitch = true;
}


var arrowButton = document.getElementById('arrow');

var canClickArrow = true;
var clickCount = 0;

var wonFirstTime = undefined;
var wonSecondTime = undefined;
arrowButton.onclick = function() {
    // console.log(canClickArrow);
    if(canClickArrow) {
        // $('.arrow').css({'border':'0px'});
        $('.wheelresult').css({'opacity':'0'});
        $('.wheelresult3').css({'opacity':'0'});
        $('.firstturn').css({'transition':'1s','transition-delay':'0s', 'opacity':'0'});
        $('.afterfirstturn').css({'opacity':'1', 'margin-top':'-61px'});


        if(clickCount === 0) {

            $('.secondhiddenpart').css({'transition-delay':'0s', 'transition':'1s'});
            $('.othercalculator').css({'margin-top':'-49px'});
            $('.colored').css({'margin-top':'-181px'});

            setTimeout('goDown()', 3000);
        }


        if(clickCount===0){resultIndex=2;}
        if(clickCount===1){resultIndex=1;}

        if(clickCount === 1) {
            $('.moreinstructions').css({'transition-delay':'2s', 'opacity':'0', 'margin-top':'-145px'});
        }
        animateWheel();

        canClickArrow = false;
        clickCount = clickCount + 1;
    }

}



var liftArrow = function() {
    $('.arrow').css({'marginTop':'34px'});
}


var firsttime = true;
var showResult = function() {
    $('.wheelresult').css({'opacity':'1'});
    $('.wheelresult2').css({'opacity':'1'});
    $('.wheelresult3').css({'opacity':'1'});


    canClickArrow = true;
    liftArrow();


    var wheelresultDisplay = document.getElementById('wheelresulttext');
    var youwon = 'You Won!';
    var youlost = 'You Lost.';
    var resultDisplay = (resultIndex===1) ? youwon : youlost;
    wheelresultDisplay.innerHTML = resultDisplay;

    var wheelresultDisplay3 = document.getElementById('wheelresulttext3');
    var mycost = -efo;
    var mypayoff = -efo + ((resultIndex===1) ? 1000 : 0);
    var mytoken = (Math.abs(mypayoff) > 1) ? 'tokens' : 'token';
    var mypayoffDisplay = 'Your Net Payoff: <strong>' + mypayoff + '</strong> ' + mytoken;
    wheelresultDisplay3.innerHTML = mypayoffDisplay;
    if(firsttime) {
        $('.thirdhiddenpart').css({'opacity':'1'});
        firsttime = false;
    }
    if(clickCount===2){
        setTimeout('showMoreText()', 1000);
    }

}

var showMoreText = function() {
    $('.colored').css({'margin-top':'10px'});
    $('.showmore').css({'opacity':'1', 'margin-bottom':'10px'});
    $('.dicewrap2').css({'margin-top':'-102px', 'margin-left':'-37px'});
    $('.showmore2').css({'margin-top':'-132px', 'margin-left':'78px'});
    $('.leftcolumn, .rightcolumn, .bottomcolumn, .dugmegoster').css({'opacity':'1'});
    setTimeout('goDown()', 3000);
    setTimeout('goDown3()', 9000);
}

var goDown = function() {
    $('html, body').animate({scrollTop: $(document).height()}, 3000);

}
var canClickSecondButton = false;
var goDown3 = function() {
    $('.dicewrap2').css({'opacity':'1'});
    $('.showmore2').css({'opacity':'1'});
    canClickSecondButton = true;


}



updateAll();

// Slider-bar initiations
// YOUR GROUP INITIATION
// leader
var lslider11Checked = false;
var lslider11 = document.getElementById('lSlider11');
var lvalue1 = efo;
updateBarLeader(lvalue1, 'barl1', 1, false);


// OPPOSING GROUP INITIATION
// leader
var olslider11Checked = false;
var olslider11 = document.getElementById('olSlider11');
var olvalue1 = oefo;
updateBarLeader(olvalue1, 'obarl1', 0, false);



// YOUR GROUP
//Leader



var firsttime2 = true;
lslider11.oninput = function() {
    lvalue1 = parseFloat(lslider11.value);
    efo = lvalue1;
    lslider11Checked = true
    updateBarLeader(lvalue1, 'barl1', 1, true);
    updateAll();
    syncValues();
    syncBars();
    $('#lSlider1').prop('value', lvalue1);
    $('#lSlider1').change();



    if(lslider11Checked && firsttime2) {
        setTimeout('show1()', 5000);
        firsttime2 = false;
    }
}

var show1 = function() {
    $('.lbar11').css({'border':'3px solid white'});
    $('.yoket').css({'opacity':'0', 'transition-delay':'1s', 'padding-top':'0px'});
    $('.goster1').css({'opacity':'1', 'padding-top':'112px'});
    $('#olSlider11').css({'z-index':'1'});
    $('.lbar11').css({'border':'3px solid white'});
    $('.lbar21').css({'transition-delay':'1s', 'border':'3px solid blue'});
}


// OPPOSING GROUP
//Leader
$('#olSlider11').css({'z-index':'-10'});
var firsttime3 = true;
olslider11.oninput = function() {
    olvalue1 = parseFloat(olslider11.value);
    oefo = olvalue1;
    olslider11Checked = true
    updateBarLeader(olvalue1, 'obarl1', 0, true);
    updateAll();
    syncValues();
    syncBars();
    $('#olSlider1').prop('value', olvalue1);
    $('#olSlider1').change();

    if(olslider11Checked && firsttime3) {
        setTimeout('show2()', 5000);
        firsttime3 = false;
    }
}

var show2 = function() {
    $('.lbar21').css({'border':'3px solid white'});
    $('.goster1').css({'opacity':'0'});
    $('.goster2').css({'opacity':'1', 'padding-top':'40px'});
    $('.dicewrap').css({'opacity':'1'});
}


var Nbutton = document.getElementById('dice1');

Nbutton.onclick = function() {
    $('.dice').css({'opacity':'0'});
    $('.goster').css({'transition-delay':'0s',  'transition':'1s', 'margin-top':'-100px'});
    $('.goster2').css({'transition-delay':'0s',  'transition':'1s', 'opacity':'0'});
    $('.dicewrap').css({'transition-delay':'0s',  'transition':'1s', 'opacity':'0', 'margin-top':'-240px'});
    $('.secondhiddenpart').css({'opacity':'1'});
    $('.secondafter0').css({'margin-top':'-6px'});
    $('.calcgider').css({'transition-delay':'0s', 'transition':'1s', 'opacity':'0', 'z-index':'-20', 'margin-top':'-175px'});
    // $('.after1').css({'transition-delay':'0s', 'margin-top':'-6px'});
}
//




// YOUR GROUP INITIATION
// leader
var lslider1 = document.getElementById('lSlider1');
var lvalue = efo;
updateBarLeader(lvalue, 'barl', 1, false);


// OPPOSING GROUP INITIATION
// leader
var olslider1 = document.getElementById('olSlider1');
var olvalue = oefo;
updateBarLeader(olvalue, 'obarl', 0, false);


// YOUR GROUP
//Leader
lslider1.oninput = function() {
    lvalue = parseFloat(lslider1.value);
    efo = lvalue;
    // efo1 = efo;

    updateBarLeader(lvalue, 'barl', 1, true);
    updateAll();

    // $('.lbar1').css({'border':'3px dotted white'});
    $('.wheelresult').css({'opacity':'0'});
    $('.wheelresult3').css({'opacity':'0'});
    theWheel.stopAnimation(false);
    canClickArrow = true;
}

// OPPOSING GROUP
//Leader
olslider1.oninput = function() {
    olvalue = parseFloat(olslider1.value);
    oefo = olvalue;
    // oefo1 = oefo;

    updateBarLeader(olvalue, 'obarl', 0, true);
    updateAll();

    // $('.lbar2').css({'border':'3px dotted white'});
    $('.wheelresult').css({'opacity':'0'});
    $('.wheelresult3').css({'opacity':'0'});
    theWheel.stopAnimation(false);
    canClickArrow = true;
}

// HOVER AND FOCUSOUT EFFECT FOR XAXIS SHOWING UP
$('#lSlider1').hover(
    function() {
        setTimeout("updateBarXAxis('barl', true)", 250);
    },
    function() {
        setTimeout("updateBarXAxis('barl', false)", 500);
    }
);

$('#olSlider1').hover(
    function() {
        setTimeout("updateBarXAxis('obarl', true)", 250);
    },
    function() {
        setTimeout("updateBarXAxis('obarl', false)", 500);
    }
);



// $('html, body').animate({scrollTop: 0}, 0);
$('.firstfadein').css({'opacity':'1'});
$('.secondfadein').css({'opacity':'1'});


//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////
//////////////////////// 4f SECTION ////////////////////////////////////


var theWheel2;
var createWheel2 = function(e1, e2) {

    var pf1, pf2;
    var tot = e1 + e2;
    pf1 = 100 * e1 / tot;
    pf2 = 100 * e2 / tot;

    theWheel2 = new Winwheel({
        'canvasId': 'mywheelf',
        'numSegments': 2,
        'outerRadius': 60, // controls the size of the theWheel
        'textOrientation' : 'vertical',    // Set orientation. horizontal, vertical, curved.
        // 'textOrientation' : 'curved',
        'textFontFamily'  : 'Courier',     // Monospace font best for vertical and curved.
        // 'textFontSize'    : 10,
        // 'textAlignment'  : 'Center',         // Set alignment: inner, outer, center.
        // 'textMargin'     : 15,
        // 'textDirection': 'reversed',
        'rotationAngle':Math.random()*360,

        'segments':
        [
            {
                'fillStyle' : 'rgb(40, 40, 40)',
                'textFillStyle': 'black',
                'text'      : '',
                'size'      : winwheelPercentToDegrees(pf1),
            },
            {
                'fillStyle' : 'rgb(225, 225, 225)',
                'textFillStyle': 'black',
                'text'      : '',
                'size'      : winwheelPercentToDegrees(pf2),
            },
        ],
        // 'pointerGuide' :        // Turn pointer guide on.
        // {
        //     'display'     : true,
        //     'strokeStyle' : 'red',
        //     'lineWidth'   : 3
        // },
        'animation' :
        {
            'type'     : 'spinToStop',
            'duration' : 5,
            'spins'    : 50,
            'callbackFinished' : 'showResults2()',
        }
    });
}


// first argument is always the observant subject
var updatePief = function(a, b, me) {

    var x = a;
    var y = b;

    var actualData = [x, y];
    var actualOpacity = 1;
    var actualColors = ['rgb(40, 40, 40)', 'rgb(225, 225, 225)'];



    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var textArray = ['', '']
    var colorArray = ['black', 'black'];
    var colorWidth = [1, 1];
    var labelArray = ['Follower 1', 'Follower 2'];
    // rearrange the label array so that observent subject is the first one

    var myLabel = labelArray[me];
    labelArray.splice(me ,1);


    labelArray.splice(0, 0, myLabel);


    textArray[0] = 'You';
    colorArray[0] = 'yellow';//'lightgreen';
    colorWidth[0] = 3;


    var actual = {
        values: [x, y],
        labels: labelArray,
        text: textArray,
        textposition: 'outside',
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: actualColors,
            line: {
                color: colorArray,
                width: colorWidth,
            }
        },
        opacity: actualOpacity,
    };


    var layout = {
        autosize: false,

        height: 240,//120,
        width: 240,//150,
        font:{
            size: 14
        },
        margin: {"t": 60, "b": 60, "l": 60, "r": 60},
        showlegend: false,
    };

    var data = [actual];

    Plotly.react('fpie', data, layout, {displayModeBar: false});
}

// followerId 0 for the subject and other numbers of opponent followers
var updateBarFollower = function(e, barId, followerIndex, axisOn) {

    var y = e;
    if(typeof(x) === 'undefined') x = 0;

    var myColors = ['rgb(40, 40, 40)', 'rgb(225, 225, 225)', 'rgb(160, 160, 160)', 'rgb(100, 100, 100)'];

    var mColor = myColors[followerIndex];


    var data = [{
        x: [y],
        name: [''],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        cliponaxis: false,
        marker:{
            color: mColor,
        },
        text: [y],
        textfont: {
            size: '14'
        },
        orientation: 'h',
        // textanchor: 'right',
        textposition: 'outside',
    }];

    var layout = {
        barmode: 'group',
        height: 75,
        width: 405,
        margin: {"t": 20, "b": 25, "l": 25, "r": 27},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: [0,400],
            layer: 'below traces',
            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 15, 30, 50, 75, 100, 125, 150, 200, 300, 400],
            ticktext: [0, 15, 30, 50, 75, 100, 125, 150, 200, 300, 400],
            tickangle: -45,
            ticks:'',
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",
        },
        yaxis: {
            ticks: '',
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            showticklabels: false,
        },
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var e1, e2, pwin4f;
e1 = e2  = 50;
pwin4f = 0.25;

var calculatePwin4f = function() {
    var total = e1+e2;
    pwin4f = e1/total;
}

var initializef = function() {
    // animateWheel();
    updateBarFollower(e1, 'mybar', 0, false);
    updateBarFollower(e2, 'barf1', 1, false);

    calculatePwin4f();

    //first element always the actual subject
    updatePief(e1, e2, 0);
    createWheel2(e1, e2);
    theWheel2.rotationAngle = 0;

    $('#fSlider1').prop('value', e1);
    $('#fSlider1').change();

    $('#ofSlider1').prop('value', e2);
    $('#ofSlider1').change();


    $('.cursor-pointer').css({'cursor':'default'});
    $('.fwheelresult2').css({'opacity':'1'});
    var mytoken = (e1 > 1) ? 'tokens' : 'token';
    fwheelresultDisplay2.innerHTML = 'Your investment cost: <strong>' + e1 + '</strong> ' + mytoken;
}

var activeWheelSwitchf = true;

var fwheelresultDisplay2 = document.getElementById('fwheelresulttext2');

var updateAllf = function() {
    calculatePwin4f();
    updatePief(e1, e2, 0);

    updateBarFollower(e1, 'mybar', 0, false)
    updateBarFollower(e2, 'barf1', 1, false)

    $('.fwheelresult2').css({'opacity':'1'});

    if(activeWheelSwitchf) {
        hideWheelf();
        activeWheelSwitchf = false;
    }
    var mytoken = (e1 > 1) ? 'tokens' : 'token';
    fwheelresultDisplay2.innerHTML = 'Your investment cost: <strong>' + e1 + '</strong> ' + mytoken;

}

var hideWheelf = function() {
    $('.fpiewrap').css({'display':'flex'});
    $('.fpiewrap').css({'opacity':'1', 'zIndex':'1'});
    $('.mywheelf').css({'display':'none'});
    $('.mywheelf').css({'opacity':'0', 'zIndex':'0'});
    $('.arrowf').css({'marginTop':'34px'});
}

var liftArrowf = function() {
    $('.arrowf').css({'marginTop':'34px'});
}

initializef();



var arrowButton2 = document.getElementById('arrowf');
var canClickArrow2 = true;
var resultIndex2;
var clickCountf = 0;
var ilksefermi = true;
arrowButton2.onclick = function() {
    if(canClickArrow2) {
        $('.arrowf').css({'border':'0px'});
        $('.fwheelresult4').css({'opacity':'0'});
        $('.fwheelresult').css({'opacity':'0'});
        $('.fwheelresult3').css({'opacity':'0'});
        if(clickCountf===0){resultIndex2=2;}
        if(clickCountf===1){resultIndex2=1;}

        animateWheel2();
        canClickArrow2 = false;
        clickCountf = clickCountf + 1;

    }
}

var animateWheel2 = function() {
    createWheel2(e1, e2);
    theWheel2.stopAnimation(false);
    theWheel2.rotationAngle = 0;

    $('.fpiewrap').css({'display':'none'});
    $('.fpiewrap').css({'opacity':'0', 'zIndex':'-1'});
    $('.mywheelf').css({'display':'flex'});
    $('.mywheelf').css({'opacity':'1', 'zIndex':'0'});
    $('.arrowf').css({'marginTop':'48px'});

    var stopAt = theWheel2.getRandomForSegment(resultIndex2);
    theWheel2.animation.stopAngle = stopAt;
    theWheel2.startAnimation();
    activeWheelSwitchf = true;
}




var showResults2 = function() {
    $('.fwheelresult').css({'opacity':'1'});
    // $('.fwheelresult2').css({'opacity':'1'});
    $('.fwheelresult4').css({'opacity':'1'});
    $('.fwheelresult3').css({'opacity':'1'});


    canClickArrow2 = true;
    liftArrowf();


    var wheelresultDisplay = document.getElementById('fwheelresulttext');
    var youwon = 'You Won!';
    var youlost = 'You Lost.';
    var resultDisplay = (resultIndex2 === 1) ? youwon : youlost;
    wheelresultDisplay.innerHTML = resultDisplay;

    var wheelresultDisplay4 = document.getElementById('fwheelresulttext4');
    var won = 'You are the new Leader!';
    var lost = 'You continue as a Follower.';
    var resultDisplay4 = (resultIndex2 === 1) ? won : lost;
    wheelresultDisplay4.innerHTML = resultDisplay4;

    var wheelresultDisplay3 = document.getElementById('fwheelresulttext3');
    var mycost = -e1;
    var mypayoff = mycost + ((resultIndex===1) ? 1000 : 0);
    var mytoken = (Math.abs(mypayoff) > 1) ? 'tokens' : 'token';
    var mypayoffDisplay = 'Your Net Payoff: <strong>' + mypayoff + '</strong> ' + mytoken;
    wheelresultDisplay3.innerHTML = mypayoffDisplay;
    if(clickCountf===1){
        $('.showlast1').css({'opacity':'1'});
        $('.finaltext1').css({'z-index':'10'});
    }
    if(clickCountf===2){
        $('.finaltext1').css({'z-index':'-1'});
        $('.finaltext2').css({'z-index':'10'});
        $('.showlast1').css({'opacity':'0'});
        $('.showlast2').css({'opacity':'1'});
        $('.butonuac, .continueButton').css({'opacity':'1'});
    }



    $('.f4subsections25').css({ 'transition-delay':'0s', 'opacity':'0', 'z-index':'-1'});
    $('.finstructions').css({'opacity':'0'});
    // setTimeout('songoster()', 7000);

    if(ilksefermi) {
        $('html, body').animate({scrollTop: $(document).height()}, 3000);
        ilksefermi = false;
    }
}






var fslider1 = document.getElementById('fSlider1');
var fvalue = 0;


var ofslider1 = document.getElementById('ofSlider1');
var ofvalue1 = 0;



//me (follower)
fslider1.oninput = function() {
    fvalue = parseFloat(fslider1.value);
    e1 = fvalue;
    updateAllf();
    updateBarXAxis('mybar', true);

    $('.fwheelresult').css({'opacity':'0'});
    $('.fwheelresult4').css({'opacity':'0'});
    $('.fwheelresult3').css({'opacity':'0'});
    theWheel2.stopAnimation(false);
    canClickArrow2 = true;
}

//other follower 1
ofslider1.oninput = function() {
    ofvalue1 = parseFloat(ofslider1.value);
    e2 = ofvalue1;
    updateAllf();
    updateBarXAxis('barf1', true);

    $('.fwheelresult4').css({'opacity':'0'});
    $('.fwheelresult').css({'opacity':'0'});
    $('.fwheelresult3').css({'opacity':'0'});
    theWheel2.stopAnimation(false);
    canClickArrow2 = true;
}


var Nbutton2 = document.getElementById('dice3');

Nbutton2.onclick = function() {
    if(canClickSecondButton)
    {
        // $('.dugmegoster, ')
        $('.dicewrap2, .showmore2wrap').css({'opacity':'0', 'z-index':'-10'});
        $('.othercalculator').css({'transition':'1s', 'transition-delay':'0s','opacity':'0', 'margin-top':'-419px', 'z-index':'-10'});

        $('.f4section').css({'margin-top':'125px', 'z-index':'0'});
        $('.f4subsections1').css({'margin-top':'-6px'});
        $('.f4subsections2').css({'margin-top':'6px'});
        $('.calculator4').css({'margin-top':'-414px', 'z-index':'-10'})

        $('.showmore').css({'margin-top':'5px'});
        $('.thirdhiddenpart').css({'transition':'1s', 'transition-delay':'0s','opacity':'1', 'margin-top':'40px'})
        $('.bunudayoket').css({'transition':'1s', 'transition-delay':'0s', 'opacity':'1', 'border':'1px solid black', 'background-color':'lavender', 'padding-left':'35px'});
        $('.secondhiddenpart').css({'transition':'1s', 'transition-delay':'0s'})
        $('.secondpartcosmetics').css({'transition':'1s', 'transition-delay':'0s', 'margin-top':'-18px'});
        $('.secondafter0').css({'margin-top':'-6px'});
        $('.moreinstructions, .somedelay').css({'transition':'1s', 'transition-delay':'0s', 'opacity':'0'});
        $('.somedelay').css({'transition':'1s', 'transition-delay':'0s', 'padding-bottom':'0px', 'margin-top':'-113px'});
        $('html, body').animate({scrollTop: $(document).height()}, 3000);
        setTimeout('goDown5()', 1000);
    }

}

var goDown5 = function() {
    console.log('we are in godown5');

    $('.f4section, .f4subsections1').css({ 'opacity':'1', 'z-index':'1'});


    $('.calculator4').css({'margin-top':'-294px', 'z-index':'-10', 'opacity':'0'});

    setTimeout('goDown6()', 8000);

    // $('html, body').animate({scrollTop: $(document).height()}, 6000);

}

var goDown6 = function() {
        console.log('we are in godown6');
        $('.f4subsections2').css({ 'opacity':'1', 'z-index':'1'});
        $('.f4subsections25').css({ 'opacity':'1', 'z-index':'1'});
        $('html, body').animate({scrollTop: $(document).height()}, 3000);
    // $('.f4subsections3').css({ 'opacity':'1', 'z-index':'1'});
    // $('html, body').animate({scrollTop: $(document).height()}, 3000);
    setTimeout('goDown7()', 4000);

}

var goDown7 = function() {
        console.log('we are in godown6');
    $('.calculator4').css({'opacity':'1'});
    $('.f4subsections3').css({ 'opacity':'1', 'z-index':'1'});
    $('.calculator4').css({'z-index':'0', 'opacity':'0','margin-top':'-40px'});
    setTimeout('goDown8()', 9000);


}

var goDown8 = function() {
        console.log('we are in godown6');
    $('.calculator4').css({'opacity':'1'});

    $('html, body').animate({scrollTop: $(document).height()}, 3000);

}


$('#fSlider1').hover(
    function() {
        setTimeout("updateBarXAxis('mybar', true)", 250);
        $('#fSlider1').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
    },
    function() {
        setTimeout("updateBarXAxis('mybar', false)", 500);
        $('#fSlider1').css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
    }
);
$('#ofSlider1').hover(
    function() {
        var    myString = '#ofSlider1';
        setTimeout("updateBarXAxis('barf1', true)", 250);
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
    },
    function() {
        var myString;
        myString = '#ofSlider1';
        setTimeout("updateBarXAxis('barf1', false)", 500);
        $(myString)
        .css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
    }
);
