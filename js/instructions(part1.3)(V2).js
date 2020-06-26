
var nzt = function(val) {
    return (val != 0) ? val : '';
}


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
            'duration' : 2,
            'spins'    : 8,
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

var updatePie = function(a) {


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
        labels: ['Opposing Leader', 'Your Leader'],
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

    Plotly.react('pie', data, layout, {displayModeBar: false});
}

var updateBar = function(a, barId, lighter, axisOn) {
    var x = a;
    if(typeof(x) === 'undefined') x = 0;

    if(lighter){
        var colors = ['rgb(200,200,255)',  'rgb(255,200,200)'];
    } else { colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];}

    var myLabel = x > 0 ? x : -x;
    // var myColor = x > 0 ? 'rgb(180,180,255)' : 'rgb(255,180,180)';
    var myColor = x > 0 ? colors[0] : colors[1];
    // var myLineColor = x > 0 ? 'rgb(5, 90, 255)' : 'rgb(255, 5, 5)';
    // var myTextPosition = (x >= 0 || x === -100) ? 'outside' : 'inside';
    // var myTextFont = (x < 0 && x > -100 && !lighter) ? 'white' : 'black';

    var data = [{
        y: [x],
        // name: ['Opposing Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [myColor],
            line: {
                color: 'none',
                width: 0
            }
        },
        text: [myLabel],
        textfont: {
            // color: myTextFont,
            size: '16'
        },
        textanchor: 'right',
        textposition: 'outside',
        cliponaxis: false,
        // textposition: myTextPosition,
        // insidetextanchor: 'end'
    }];

    var layout = {
        barmode: 'group',
        // Setup Compact
        height: 300,

        // Setup Large
        // height: 400,

        // Setup Super Large
        // height: 550,


        width: 80,
        margin: {"t": 20, "b": 25, "l": 25, "r": 25},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [-100,100],
            layer: 'below traces',
            fixedrange: true,
            ticks:'',
            tickfont: {
                size: 9,
            },
            tickmode: 'array',
            tickvals: [-100, -75, -50, -40, -30, -20, -10, 0, 10,  20, 30, 40, 50, 75, 100],
            ticktext: [100, 75, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 75, 100],
            // tickvals: [-200, -150, -100, -75, -50, -25,  0, 25,  50, 75, 100, 150, 200],
            // ticktext: [200, 150, 100, 75, 50, 25, 0, 25, 50, 75, 100, 150, 200],
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",

        },
        xaxis: {
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },

    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
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
        margin: {"t": 20, "b": 25, "l": 25, "r": 27},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: [0,500],
            layer: 'below traces',
            fixedrange: true,

            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400, 500],
            ticktext: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400, 500],
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

var updateBarDecision = function(a, barId, axisOn) {
    var y = a;
    if(typeof(y) === 'undefined') y = 0;

    colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];

    var myLabel = y > 0 ? y : -y;
    // var myColor = y > 0 ? 'rgb(180,180,255)' : 'rgb(255,180,180)';
    var myColor = y > 0 ? colors[0] : colors[1];
    // var myLineColor = y > 0 ? 'rgb(5, 90, 255)' : 'rgb(255, 5, 5)';
    // var myTextPosition = (y >= 0 || y === -100) ? 'outside' : 'inside';
    // var myTextFont = (y < 0 && y > -100 && !lighter) ? 'white' : 'black';

    var data = [{
        x: [y],
        orientation: 'h',
        name: [''],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [myColor],
            line: {
                color: 'none',
                width: 0
            }
        },
        text: [myLabel],
        textfont: {
            // color: myTextFont,
            size: '35',
        },
        textanchor: 'right',
        textposition: 'outside',
        cliponaxis: false,
        // textposition: myTextPosition,
        // insidetextanchor: 'end'
    }];

    var layout = {
        barmode: 'group',

        // Setup Large
        height: 75,

        width: 1050,
        margin: {"t": 20, "b": 25, "l": 40, "r": 40},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: [-100,100],
            layer: 'below traces',
            fixedrange: true,
            ticks:'',
            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [-100, -75, -50, -40, -30, -20, -15, -10, -5, 0, 5,10, 15, 20, 30, 40, 50, 75, 100],
            ticktext: [100, 75, 50, 40, 30, 20, 15, 10, 5, 0, 5, 10, 15, 20, 30, 40, 50, 75, 100],
            // tickvals: [-200, -150, -125, -100, -75, -60, -45, -30, -15, -5, 0, 5, 15, 30, 45, 60, 75, 100, 125, 150, 200],
            // ticktext: [200, 150, 125, 100, 75, 60, 45, 30, 15,  5, 0, 5, 15, 30, 45, 60, 75, 100, 125, 150, 200],
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",

        },
        yaxis: {
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },

    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var logistic2 = function(val , k) {
    var L = 1;
    var m = 0.5;
    var result;
    result= L / (1 + Math.exp(-k * (val - m)));
    return result;
}

var updateEfficiencyBar = function(efi1, efi2) {

    var val1 = efi1 / (efi1 + efi2);
    var val2 = efi2 / (efi1 + efi2);



    if((efi1 / efi2) > 1){
        var myText = (val1 >= 0.99) ? '100+' : (efi1 / efi2).toFixed(2);
    } else {
        myText = 1;
    }

    if((efi1 / efi2) < 1){
        var myText2 = (val2 >= 0.99) ? '100+' : (efi2 / efi1).toFixed(2);
    } else {
        myText2 = 1;
    }


    val1 = logistic2(val1, 5);
    val2 = 1 - val1;

    var gapSize = 0.1;
    var gp1, gp2, gp3;
    gp1 = gp3 = gapSize*0.45;
    gp2 = gapSize*0.1;
    val1 = val1 - gapSize/2;
    val2 = val2 - gapSize/2;


    // val1 = upperBound(val1, 0.98);
    // val2 = upperBound(val2, 0.98);
    // val1 = lowerBound(val1, 0.02);
    // val2 = lowerBound(val2, 0.02);
    // console.log('before: ' + val1 + ', ' + val2);
    // console.log('after: ' + val1 + ', ' + val2);


    var leader1 = {
        y: ['group 1'],
        x: [val1],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker: {
            // color: 'rgb(160, 160, 160)',
            color: 'rgb(80, 80, 80)',
        },
        text: myText,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'white',
            size: '10'
        },
    };

    var gap = {
        y: ['group 1'],
        x: [gapSize],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker: {
            color: 'white',
        },
        text: '',
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'black',
            size: '14'
        },
    };

    // var gap1 = {
    //     y: ['group 1'],
    //     x: [gp1],
    //     type: 'bar',
    //     orientation: 'h',
    //     sort: false,
    //     hoverinfo: 'none',
    //     automargin: true,
    //     showlegend: false,
    //     marker: {
    //         color: 'white',
    //     },
    //     text: '',
    //     textposition: 'inside',
    //     insidetextanchor: 'middle',
    //     textfont: {
    //         color: 'black',
    //         size: '14'
    //     },
    // };
    // var gap2 = {
    //     y: ['group 1'],
    //     x: [gp2],
    //     type: 'bar',
    //     orientation: 'h',
    //     sort: false,
    //     hoverinfo: 'none',
    //     automargin: true,
    //     showlegend: false,
    //     marker: {
    //         color: 'black',
    //     },
    //     text: '',
    //     textposition: 'inside',
    //     insidetextanchor: 'middle',
    //     textfont: {
    //         color: 'black',
    //         size: '14'
    //     },
    // };
    // var gap3 = {
    //     y: ['group 1'],
    //     x: [gp3],
    //     type: 'bar',
    //     orientation: 'h',
    //     sort: false,
    //     hoverinfo: 'none',
    //     automargin: true,
    //     showlegend: false,
    //     marker: {
    //         color: 'white',
    //     },
    //     text: '',
    //     textposition: 'inside',
    //     insidetextanchor: 'middle',
    //     textfont: {
    //         color: 'black',
    //         size: '14'
    //     },
    // };

    var leader2 = {
        y: ['group 1'],
        x: [val2],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker: {
            color: 'rgb(225, 225, 225)',
             // color: 'rgb(160, 160, 160)',
        },
        text: myText2,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            size: '10'
        },
    };

    // var data = [leader1, gap1, gap2, gap3, leader2];

    var data = [leader1, gap, leader2];

    var layout = {
        barmode: 'stack',
        height: 30,
        width: 1020,
        // width: 200,
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        xaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,1],
            showline: false,
            showgrid: false,
            showticklabels: false,
        },
        yaxis: {
            fixedrange: true,
        }

    };

    Plotly.react('efficiencyBar', data, layout, {displayModeBar: false});
}




//VARIABLES AND GRAPHICS INITIATIONS


// Follower global variables for both groups
// your group
var s1, h1;
s1 = h1 = 0;
// opposing group
var os1, oh1;
os1 = oh1 = 0;

// leader global variables
var efo, efi, efefo, oefo, oefi, oefefo, pwin;
efo = oefo = 100;
efi = oefi = 1;



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

var updateTotal = function() {
    ts = s1;
    th = h1;
    ots = os1;
    oth = oh1;
}

var updatePwin = function() {
    efi = (1 + h1)/(1 + s1);
    oefi = (1 + oh1)/(1 + os1);
    efefo = efi * efo;
    oefefo = oefi * oefo;
    pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));
}

var activeWheelSwitch = true;
var firsttimerevealed = true
var updateAll = function() {
    updateTotal();
    updatePwin();
    updatePie(pwin);
    updateEfficiencyBar(efi, oefi);

    if(activeWheelSwitch) {
        // hideWheel();
        activeWheelSwitch = false;
    }

    var investCostDisplay = document.getElementById('investmentcostdisplay');
    var mytokens = ((h1+s1)>1) ? 'tokens' : 'token';
    var investmentCostText = 'Investment cost: <strong>' + (h1+s1) + '</strong> ' + mytokens;
    investCostDisplay.innerHTML = investmentCostText;

    var investCostDisplay2 = document.getElementById('investmentcostdisplay2');
    var mytokens2 = ((oh1+os1)>1) ? 'tokens' : 'token';
    var investmentCostText2 = 'Investment cost: <strong>' + (oh1+os1) + '</strong> ' + mytokens;
    investCostDisplay2.innerHTML = investmentCostText2;

    $('.cursor-pointer').css({'cursor':'default'});

    if(exp1 && exp2) {
        if(clickCount === 0) {
            $('.textimagewrap').css({'opacity':'0', 'margin-top':'-331px','z-index':'-10'})
            $('.notice').css({'opacity':'1', 'margin-top':'0px', 'position':'static'})
            $('.noticewrap').css({'position':'static'});
            if(firsttimerevealed) {
                setTimeout('revealButton()', 12000);
                firsttimerevealed = false;
            }

            $('.yoket').css({'transition':'2s','transition-delay':'0s','opacity':'0','margin-top':'-130px'});
            $('.yoket2').css({'transition':'2s','transition-delay':'0s','opacity':'0'});
        }


    }

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

var canClickArrow = true;
var arrowButton = document.getElementById('arrow');
arrowButton.onclick = function() {
    console.log(canClickArrow);
    if(canClickArrow) {
        $('.arrow').css({'border':'0px'});
        $('.wheelresult').css({'opacity':'0'});
        $('.wheelresult2').css({'opacity':'0'});
        $('.wheelresult3').css({'opacity':'0'});
        resultIndex = (Math.random() > 0.5) ? 1 : 2;
        animateWheel();

        canClickArrow = false;
    }

}

var liftArrow = function() {
    $('.arrow').css({'marginTop':'30px'});
}

var showResult = function() {
    $('.wheelresult').css({'opacity':'1'});
    $('.wheelresult2').css({'opacity':'1'});
    $('.wheelresult3').css({'opacity':'1'});
    // $('.arrowwrap').css({'margin-top':'-25px'});
    // $('.middlesection').css({'margin-top':'-15px'});
    canClickArrow = true;
    liftArrow();
    // setTimeout("liftArrow()", 500);

    var wheelresultDisplay = document.getElementById('wheelresulttext');
    var youwon = 'Your Leader Won.';
    var youlost = 'You Leader Lost.';
    var resultDisplay = (resultIndex===1) ? youwon : youlost;
    wheelresultDisplay.innerHTML = resultDisplay;

    var wheelresultDisplay2 = document.getElementById('wheelresulttext2');
    var yourrolelost = 'You have the chance to become the new Leader of your group.';
    var yourrolewon = 'You continue your role as a follower.'
    var resultDisplay2 = (resultIndex===1) ? yourrolewon : yourrolelost;
    wheelresultDisplay2.innerHTML = resultDisplay2;

    var wheelresultDisplay3 = document.getElementById('wheelresulttext3');
    var followerPrize = 0;
    var mypayoff = -(s1 + h1) + ((resultIndex===1) ? followerPrize : 0);
    var mypayoffDisplay = '<strong>Your</strong> Net Payoff: <strong>' + mypayoff + '</strong>';
    wheelresultDisplay3.innerHTML = mypayoffDisplay;
}

updateAll();




var myDice = document.getElementById('dice');
var clickCount = 0;
myDice.onclick = function() {

    var shArray = [8, 68, 8];
    var isHelp1Array = [false, false, true];
    var isHelp1 = isHelp1Array[clickCount];
    var shValue = shArray[clickCount];
    h1  = isHelp1 ? shValue : 0;
    s1 = isHelp1 ? 0 : shValue
    var shBarValue = isHelp1 ? shValue : -shValue;

    var oshArray = [0, 60, 0];
    var isHelp2Array = [false, false, true];
    var isHelp2 = isHelp2Array[clickCount];
    var oshValue = oshArray[clickCount];
    oh1  = isHelp2 ? oshValue : 0;
    os1 = isHelp2 ? 0 : oshValue
    var oshBarValue = isHelp2 ? oshValue : -oshValue;

    var efoArray = [100, 100, 100];
    var oefoArray = [100, 100, 100];
    efo = efoArray[clickCount];
    oefo = oefoArray[clickCount];

    updateAll();

    updateBar(shBarValue, 'bar1', 1, false);
    $('#vSlider1').prop('value', shBarValue);
    $('#vSlider1').change();

    updateBar(oshBarValue, 'obar1', 1, false);
    $('#ovSlider1').prop('value', oshBarValue);
    $('#ovSlider1').change();

    updateBarLeader(efo, 'barl', 1, false);
    $('#lSlider1').prop('value', efo);
    $('#lSlider1').change();

    updateBarLeader(oefo, 'obarl', 0, false);
    $('#olSlider1').prop('value', oefo);
    $('#olSlider1').change();

    if(clickCount === 0) {
        $('.notice').css({'opacity':'0', 'margin-top':'-100px', 'z-index':'-10'});
        $('.notice2').css({'opacity':'1', 'position':'static', 'z-index':'0', 'margin-top':'20px',
    'padding-top':'4px','padding-bottom':'4px'});
        $('.dicewrap').css({'opacity':'0', 'margin-top':'5px'});
        setTimeout('revealButton()', 9000);

    }
    if(clickCount === 1) {
        $('.notice2').css({'opacity':'0', 'margin-top':'-100px', 'z-index':'-10'});
        $('.notice3').css({'opacity':'1', 'position':'static', 'z-index':'0', 'margin-top':'-182px',
    'padding-bottom':'63px'});
        $('.dicewrap').css({'opacity':'0'});
        setTimeout('revealButton()', 9000);
    }

    if(clickCount === 2) {
        $('.notice3').css({'opacity':'0', 'margin-top':'-100px', 'z-index':'-10'});
        $('.notice4').css({'opacity':'1', 'position':'static', 'z-index':'0', 'margin-top':'-182px',
    'padding-bottom':'63px'});
        $('.dicewrap').css({'opacity':'0'});
        $('.hideclick').css({'opacity':'0'});
        setTimeout('moreResult()', 11000);
    }

    clickCount = clickCount + 1;

}



var revealButton = function() {
    if(clickCount === 0) {
        $('.notice').css({'padding-bottom':'41px', 'padding-top':'90px','margin-top':'39px', 'z-index':'-10'});
    }
    if(clickCount < 3) {
        $('.dicewrap').css({'opacity':'1', 'position':'static'});
    }

}

var moreResult = function() {
        h1  = 68;
        s1 = 0;
        var shBarValue = 68;


        oh1  = 60;
        os1 = 0;
        var oshBarValue = 60;

        efo = 100;
        oefo = 100;

        updateAll();

        updateBar(shBarValue, 'bar1', 1, false);
        $('#vSlider1').prop('value', shBarValue);
        $('#vSlider1').change();

        updateBar(oshBarValue, 'obar1', 1, false);
        $('#ovSlider1').prop('value', oshBarValue);
        $('#ovSlider1').change();

        updateBarLeader(efo, 'barl', 1, false);
        $('#lSlider1').prop('value', efo);
        $('#lSlider1').change();

        updateBarLeader(oefo, 'obarl', 0, false);
        $('#olSlider1').prop('value', oefo);
        $('#olSlider1').change();

        $('.notice4').css({'opacity':'0', 'margin-top':'-230px', 'z-index':'-10'});
        $('.notice5').css({'opacity':'1', 'position':'static', 'z-index':'0', 'margin-top':'-182px',
    'padding-bottom':'63px'});

        $('.dice').css({'opacity':'0', 'z-index':'-5'});
        $('.hideclick').css({'opacity':'0'});
        setTimeout('evenMoreResult()', 10000);
}

var evenMoreResult = function() {
    $('.notice5').css({'opacity':'0', 'margin-top':'-100px', 'z-index':'-10'});
    $('.notice6').css({'opacity':'1', 'position':'static', 'z-index':'0', 'margin-top':'-287px',
'padding-bottom':'63px'});
    $('.continueButton').css({'opacity':'1'});
}

// Slider-bar initiations

// YOUR GROUP INITIATION
// leader
var lslider1 = document.getElementById('lSlider1');
var lvalue = 100;
updateBarLeader(lvalue, 'barl', 1, false);
// followers
var slider1 = document.getElementById('vSlider1');
var value1 = 0;
updateBar(value1, 'bar1', 0, false);

// OPPOSING GROUP INITIATION
// leader
var olslider1 = document.getElementById('olSlider1');
var olvalue = 100;
updateBarLeader(olvalue, 'obarl', 0, false);
// followers
var oslider1 = document.getElementById('ovSlider1');
var ovalue1 = 0;
updateBar(ovalue1, 'obar1', 1, false);

// YOUR GROUP
//Leader
lslider1.oninput = function() {
    lvalue = parseFloat(lslider1.value);
    efo = lvalue;

    updateBarLeader(lvalue, 'barl', 1, true);
    updateAll();

    // $('.lbar1').css({'border':'3px dotted white'});
    $('.wheelresult').css({'opacity':'0'});
    $('.wheelresult2').css({'opacity':'0'});
    $('.wheelresult3').css({'opacity':'0'});
    theWheel.stopAnimation(false);
    canClickArrow = true;
}

// OPPOSING GROUP
//Leader
olslider1.oninput = function() {
    olvalue = parseFloat(olslider1.value);
    oefo = olvalue;

    updateBarLeader(olvalue, 'obarl', 0, true);
    updateAll();

    // $('.lbar2').css({'border':'3px dotted white'});
    $('.wheelresult').css({'opacity':'0'});
    $('.wheelresult2').css({'opacity':'0'});
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

//Followers in your Group
var exp1 = false;
slider1.oninput = function() {
    exp1 = true;
    value1 = parseFloat(slider1.value);
    s1 = value1 >= 0 ? 0 : -value1;
    h1 = value1 >= 0 ? value1 : 0;
    updateBar(value1, 'bar1', 0, false);
    // $('.wheelresult').css({'opacity':'0'});
    // $('.wheelresult2').css({'opacity':'0'});
    // $('.wheelresult3').css({'opacity':'0'});
    theWheel.stopAnimation(false);
    canClickArrow = true;
    updateAll();
    updateBarYAxis('bar1', true);
    $('.greendotted1').css({'border':'2px dotted white'});
}

//Followers
var exp2 = false;
oslider1.oninput = function() {
    exp2 = true;
    ovalue1 = parseFloat(oslider1.value);
    os1 = ovalue1 >= 0 ? 0 : -ovalue1;
    oh1 = ovalue1 >= 0 ? ovalue1 : 0;
    updateBar(ovalue1, 'obar1', 1, false);

    $('.wheelresult').css({'opacity':'0'});
    $('.wheelresult2').css({'opacity':'0'});
    $('.wheelresult3').css({'opacity':'0'});
    theWheel.stopAnimation(false);
    canClickArrow = true;

    updateAll();
    updateBarYAxis('obar1', true);
    $('.greendotted2').css({'border':'2px dotted white'});
}

$('#vSlider1').hover(
    function() {
        setTimeout("updateBarYAxis('bar1', true)", 250);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'17px'});
        $('.yourdecisiontext2').css({'font-weight':'600','opacity':'1'});
        $('#vSlider1').css({'background':'black', 'opacity':'1', 'margin-left': '-75px'});
    },
    function() {
        setTimeout("updateBarYAxis('bar1', false)", 500);
        $('.yourdecisiontext').css({'font-weight':'200', 'font-size':'17px'});
        $('.yourdecisiontext2').css({'font-weight':'200','opacity':'1'});
        $('#vSlider1').css({'background':'gray', 'opacity':'0.3', 'margin-left': '-87px'});
    }
);

$('#ovSlider1').hover(
    function() {
        setTimeout("updateBarYAxis('obar1', true)", 250);
        $('#ovSlider1').css({'background':'black', 'opacity':'1', 'margin-left': '-75px'});
        $('#ovSlider1').addClass('newnewSlider');
    },
    function() {
        setTimeout("updateBarYAxis('obar1', false)", 500);
        $('#ovSlider1').css({'background':'gray', 'opacity':'0.3', 'margin-left': '-87px'});
        $('#ovSlider1').removeClass('newnewSlider');
    }
);

$('.fadein').css({'opacity':'1'});
setTimeout('showCalculator()', 15000);
setTimeout('removeChild()', 16000);

var showCalculator = function() {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 4000);

}

var removeChild = function() {
    $('.calculator').removeClass('fadein');
}
