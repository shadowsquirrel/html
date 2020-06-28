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
            'duration' : 3,
            'spins'    : 10,
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

//VARIABLES AND GRAPHICS INITIATIONS

// leader global variables
var efo, efi, efefo, oefo, oefi, oefefo, pwin;
efo = oefo = 250;
efi = oefi = 1;

var efo1, efi1, efefo1, oefo1, oefi1, oefefo1, pwin1;
efo1 = oefo1 = 250;
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

    efefo1 = efi * efo1;
    oefefo1 = oefi * oefo1;
    pwin1 = ((efo1 + oefo1) === 0) ? 0.5 : (efefo1 / (efefo1 + oefefo1));
}

var syncValues = function() {
    efo = efo1;
    oefo = oefo1;
}

var syncBars = function() {
    updateBarLeader(efo1, 'barl', true, false);
    updateBarLeader(oefo1, 'obarl', false, false);
}

var activeWheelSwitch = true;

var wheelresultDisplay2 = document.getElementById('wheelresulttext2');

var updateAll = function() {
    updatePwin();
    updatePie(pwin1, 'pie1')
    updatePie(pwin, 'pie');
    if(activeWheelSwitch) {
        hideWheel();
        activeWheelSwitch = false;
    }
    var mytoken = (efo1 > 1) ? 'tokens' : 'token';
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
arrowButton.onclick = function() {
    console.log(canClickArrow);
    if(canClickArrow) {
        $('.arrow').css({'border':'0px'});
        $('.wheelresult').css({'opacity':'0'});
        $('.wheelresult3').css({'opacity':'0'});
        resultIndex = (Math.random() < pwin) ? 1 : 2;
        animateWheel();

        canClickArrow = false;
    }

}

var liftArrow = function() {
    $('.arrow').css({'marginTop':'30px'});
}
var firsttime = true;
var showResult = function() {
    $('.wheelresult').css({'opacity':'1'});
    $('.wheelresult2').css({'opacity':'1'});
    $('.wheelresult3').css({'opacity':'1'});

    $('.arrowwrap').css({'margin-top':'20px'});
    canClickArrow = true;
    liftArrow();
    // setTimeout("liftArrow()", 500);

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

        if(firsttime){
            $('html, body').animate({
                scrollTop: $(document).height()*0.375
            }, 1000);

            $('.thirdhiddenpart').css({'opacity':'1'});

            setTimeout('showMoreText()', 15000);

            firsttime = false;
        }

}


var showMoreText = function() {
    $('.showmore').css({'opacity':'1'});
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 3000);
}
updateAll();

// Slider-bar initiations
// YOUR GROUP INITIATION
// leader
var lslider11Checked = false;
var lslider11 = document.getElementById('lSlider11');
var lvalue1 = efo1;
updateBarLeader(lvalue1, 'barl1', 1, false);


// OPPOSING GROUP INITIATION
// leader
var olslider11Checked = false;
var olslider11 = document.getElementById('olSlider11');
var olvalue1 = oefo1;
updateBarLeader(olvalue1, 'obarl1', 0, false);



// YOUR GROUP
//Leader
var firsttime2 = true;
lslider11.oninput = function() {
    lvalue1 = parseFloat(lslider11.value);
    efo1 = lvalue1;
    lslider11Checked = true
    updateBarLeader(lvalue1, 'barl1', 1, true);
    updateAll();
    syncValues();
    syncBars();
    $('#lSlider1').prop('value', lvalue1);
    $('#lSlider1').change();

    $('.lbar11').css({'border':'3px dotted white'});

    if(lslider11Checked && olslider11Checked && firsttime2) {
        $('.secondhiddenpart').css({'opacity':'1'});
        setTimeout('goDown()', 15000);
        firsttime2 = false;
        $('.yoket').css({'opacity':'0', 'transition-delay':'1s', 'padding-top':'0px'});
    }
}

// OPPOSING GROUP
//Leader
olslider11.oninput = function() {
    olvalue1 = parseFloat(olslider11.value);
    oefo1 = olvalue1;
    olslider11Checked = true
    updateBarLeader(olvalue1, 'obarl1', 0, true);
    updateAll();
    syncValues();
    syncBars();
    $('#olSlider1').prop('value', olvalue1);
    $('#olSlider1').change();

    $('.lbar21').css({'border':'3px dotted white'});

    if(lslider11Checked && olslider11Checked && firsttime2) {
        $('.secondhiddenpart').css({'opacity':'1'});
        setTimeout('goDown()', 15000);
        firsttime2 = false;
        $('.yoket').css({'opacity':'0', 'transition-delay':'0s'});
    }
}

var goDown = function() {
    $('html, body').animate({scrollTop: $('.othercalculator').height()*0.8}, 2000);
    $('.firstsection').css({'margin-bottom':'-75px', 'transition':'1s'});
}



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



$('html, body').animate({scrollTop: 0}, 0);
$('.firstfadein').css({'opacity':'1'});
