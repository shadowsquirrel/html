var logistic2 = function(val , k) {
    var L = 1;
    var m = 0.5;
    var result;
    result= L / (1 + Math.exp(-k * (val - m)));
    return result;
}
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

var updateBarHelp = function(a,b) {
    var x = a;
    var y = b;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;

    var data = [{
        y: [x, y],
        name: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(140, 140, 255)', 'rgb(200,200,255)'],
        },
        text: [nzt(x), nzt(y)],
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 120,
        width: 150,
        // title: 'Total Help',
        margin: {"t": 20, "b": 0, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,400]
        },
        xaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },
        bargap: 0.1,
        // paper_bgcolor: 'white',
        // plot_bgcolor: 'white'
    };

    Plotly.react('helpBar', data, layout, {displayModeBar: false});
}

var updateBarSabo = function(a, b) {
    // console.log(a + ', ' + b);
    var x = -a;
    var y = -b;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;

    var data = [{
        y: [x, y], //[y, x],
        x: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(255,140,140)', 'rgb(255,200,200)'],
        },
        text: [nzt(-x), nzt(-y)],
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 120,
        width: 150,
        // title: 'Total Sabotage',
        margin: {"t": 0, "b": 20, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [-400,0]
        },
        xaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },
        bargap: 0.1,
        // plot_bgcolor: 'white'
    };

    Plotly.react('saboBar', data, layout, {displayModeBar: false});
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

var logistic = function(val) {
    var L = 240;
    var m = 120;
    var k1 = 0.05;
    var k2 = 0.01;
    val = 240 * val;

    var val1;
    val1 = L / (1 + Math.exp(-k1 * (val - m)));
    val12 =  L / (1 + Math.exp(-k2 * (val - m)));
    var val2 = (Math.abs(val12 - m) / 240) + 0.5;
    val1 = Math.floor(val1);
    var result = [val1, val2];
    return result;
}

var myColor = function(val){
    return ('hsla(' + val[0] +',100%, 37%, ' + val[1] +')');

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

    var gap1 = {
        y: ['group 1'],
        x: [gp1],
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
    var gap2 = {
        y: ['group 1'],
        x: [gp2],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker: {
            color: 'black',
        },
        text: '',
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'black',
            size: '14'
        },
    };
    var gap3 = {
        y: ['group 1'],
        x: [gp3],
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

    var data = [leader1, gap1, gap2, gap3, leader2];

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
var s1, s2, s3, s4, h1, h2, h3, h4, ts, th;
s1 = s2 = s3 = s4 = h1 = h2 = h3 = h4 = ts = th = 0;
// opposing group
var os1, os2, os3, os4, oh1, oh2, oh3, oh4, ots, oth;
os1 = os2 = os3 = os4 = oh1 = oh2 = oh3 = oh4 = ots = oth = 0;

// leader global variables
var efo, efi, efefo, oefo, oefi, oefefo, pwin;
efo = oefo = 1;
efi = oefi = 1;

var syncOurGroup = document.getElementById('mycheck').checked;
var syncOtherGroup  = document.getElementById('mycheck2').checked;


var syncValues = function(hValue, sValue, group, isSync, isSync2){
    if(group === 'opponent' && isSync2) {
        oh1 = oh2 = oh3 = oh4 = hValue;
        os1 = os2 = os3 = os4 = sValue;
    }
    if(group === 'our' && isSync) {
        // notice s1 and h1 are independent!
        h2 = h3 = h4 = hValue;
        s2 = s3 = s4 = sValue;
    }
    if(group === 'decision') {
        h1 = hValue;
        s1 = sValue;
    }

}

var syncBars = function(value, group, isSync, isSync2) {
    if(group === 'opponent' && isSync2) {
        updateBar(value, 'obar1', 1, false);
        updateBar(value, 'obar2', 1, false);
        updateBar(value, 'obar3', 1, false);
        updateBar(value, 'obar4', 1, false);
    }
    if(group === 'our' && isSync) {
        updateBar(value, 'bar2', 0, false);
        updateBar(value, 'bar3', 0, false);
        updateBar(value, 'bar4', 0, false);
    }
    if(group === 'decision') {
        updateBar(value, 'bar1', 0, false);
        updateBarDecision(value, 'bard', false);
    }
}

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
    ts = s1 + s2 + s3 + s4;
    th = h1 + h2 + h3 + h4;
    ots = os1 + os2 + os3 + os4;
    oth = oh1 + oh2 + oh3 + oh4;
}

var updatePwin = function() {
    // efi = (1 + th)/(1 + ts);
    // oefi = (1 + oth)/(1 + ots);
    efefo = efi * efo;
    oefefo = oefi * oefo;
    pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));
}

var activeWheelSwitch = true;

var updateAll = function() {
    updateTotal();
    updateBarHelp(th, oth);
    updateBarSabo(ts, ots);
    updatePwin();
    updatePie(pwin);


    updateEfficiencyBar(efi, oefi);

    if(activeWheelSwitch) {
        hideWheel();
        activeWheelSwitch = false;
    }


    var payoffDisplay = document.getElementById('payoff');
    payoffDisplay.innerHTML = '<strong>' + (h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    var loseNetPayoff = document.getElementById('losenetpayoff');
    loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    var winNetPayoff = document.getElementById('winnetpayoff');
    winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    // var whoamIDisplay = document.getElementById('whoamI');
    // whoamIDisplay.innerHTML = (info.me + 1);

}


var hideWheel = function() {
    $('.piewrap').css({'display':'flex'});
    $('.piewrap').css({'opacity':'1', 'zIndex':'1'});
    $('.mywheel').css({'display':'none'});
    $('.mywheel').css({'opacity':'0', 'zIndex':'0'});
    liftArrow();
}

var liftArrow = function() {
    $('.arrow').css({'marginTop':'30px'});
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
        $('.wheelresult3').css({'opacity':'0'});
        resultIndex = (Math.random() > 0.5) ? 1 : 2;
        animateWheel();

        canClickArrow = false;
    }

}

var showResult = function() {
    $('.wheelresult').css({'opacity':'1'});
    $('.arrowwrap').css({'margin-top':'-25px'});
    setTimeout("liftArrow()", 1000);
    var wheelresultDisplay = document.getElementById('wheelresulttext');
    var youwon = 'You Won!';
    var youlost = 'You Lost.';
    var resultDisplay = (resultIndex===1) ? youwon : youlost;
    wheelresultDisplay.innerHTML = resultDisplay;
}

var liftArrow = function() {
    $('.arrow').css({'marginTop':'30px'});
}

var showResult = function() {
    $('.wheelresult').css({'opacity':'1'});
    $('.wheelresult3').css({'opacity':'1'});
    $('.arrowwrap').css({'margin-top':'-25px'});
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
    var mypayoffDisplay = 'Your Net Payoff: <strong>' + mypayoff + '</strong>';
    wheelresultDisplay3.innerHTML = mypayoffDisplay;
}

updateAll();




// Slider-bar initiations



// DECISION SLIDER - BAR
var dslider = document.getElementById('dSlider');
var dvalue = 0;
updateBarDecision(0, 'bard', false);
var payoffDisplay = document.getElementById('payoff');

// YOUR GROUP INITIATION
// leader
var lslider1 = document.getElementById('lSlider1');
var lvalue = 1;
updateBarLeader(lvalue, 'barl', 1, false);
// followers
var slider1 = document.getElementById('vSlider1');
var slider2 = document.getElementById('vSlider2');
var slider3 = document.getElementById('vSlider3');
var slider4 = document.getElementById('vSlider4');
var value1 = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;
updateBar(value1, 'bar1', 0, false);
updateBar(value2, 'bar2', 0, false);
updateBar(value3, 'bar3', 0, false);
updateBar(value4, 'bar4', 0, false);

// OPPOSING GROUP INITIATION
// leader
var olslider1 = document.getElementById('olSlider1');
var olvalue = 1;
updateBarLeader(olvalue, 'obarl', 0, false);
// followers
var oslider1 = document.getElementById('ovSlider1');
var oslider2 = document.getElementById('ovSlider2');
var oslider3 = document.getElementById('ovSlider3');
var oslider4 = document.getElementById('ovSlider4');
var ovalue1 = 0;
var ovalue2 = 0;
var ovalue3 = 0;
var ovalue4 = 0;
updateBar(ovalue1, 'obar1', 1, false);
updateBar(ovalue2, 'obar2', 1, false);
updateBar(ovalue3, 'obar3', 1, false);
updateBar(ovalue4, 'obar4', 1, false);





//DECISION
dslider.oninput = function() {
    dvalue = parseFloat(dslider.value);
    s1 = dvalue >= 0 ? 0 : -dvalue;
    h1 = dvalue >= 0 ? dvalue : 0;

    //synching values
    syncBars(dvalue, 'decision', syncOurGroup, syncOtherGroup);
    syncValues(h1, s1, 'decision', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarXAxis('bard', true);

    payoffDisplay.innerHTML = '<strong>' + (h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');
    // console.log((h1 + s1));
    var loseNetPayoff = document.getElementById('losenetpayoff');
    loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    var winNetPayoff = document.getElementById('winnetpayoff');
    winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    //synching sliders
    $('#vSlider1').prop('value', dvalue);
    $('#vSlider1').change();
}

// YOUR GROUP
//Leader
lslider1.oninput = function() {
    lvalue = parseFloat(lslider1.value);
    efo = lvalue;

    updateBarLeader(lvalue, 'barl', 1, true);
    updateAll();

    $('.lbar1').css({'border':'3px dotted white'});
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

    updateBarLeader(olvalue, 'obarl', 0, true);
    updateAll();

    $('.lbar2').css({'border':'3px dotted white'});
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

$('#dSlider').hover(
    function() {
        setTimeout("updateBarXAxis('bard', true)", 250);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'17px'});
        $('.yourdecisiontext2').css({'font-weight':'700','opacity':'1'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#vSlider1')
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        $('#vSlider1').addClass('newnewSlider');
    },
    function() {
        setTimeout("updateBarXAxis('bard', false)", 1000);
        $('.yourdecisiontext').css({'font-weight':'200', 'font-size':'17px'});
        $('.yourdecisiontext2').css({'font-weight':'200','opacity':'0.3'});
        $('#dSlider').css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
        $('#vSlider1')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        $('#vSlider1').removeClass('newnewSlider');
    }
);



//Followers in your Group
slider1.oninput = function() {
    value1 = parseFloat(slider1.value);
    s1 = value1 >= 0 ? 0 : -value1;
    h1 = value1 >= 0 ? value1 : 0;

    //synching values
    syncBars(value1, 'decision', syncOurGroup, syncOtherGroup);
    syncValues(h1, s1, 'decision', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('bar1', true);

    payoffDisplay.innerHTML = '<strong>' + (h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    var loseNetPayoff = document.getElementById('losenetpayoff');
    loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    var winNetPayoff = document.getElementById('winnetpayoff');
    winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    //synching sliders
    $('#dSlider').prop('value', value1);
    $('#dSlider').change();
}

//Followers
oslider1.oninput = function() {
    syncOtherGroup = document.getElementById('mycheck2').checked;
    ovalue1 = parseFloat(oslider1.value);
    os1 = ovalue1 >= 0 ? 0 : -ovalue1;
    oh1 = ovalue1 >= 0 ? ovalue1 : 0;
    updateBar(ovalue1, 'obar1', 1, false);

    $('.wheelresult').css({'opacity':'0'});
    theWheel.stopAnimation(false);

    //synching values
    syncBars(ovalue1, 'opponent', syncOurGroup, syncOtherGroup);
    syncValues(oh1, os1, 'opponent', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('obar1', true);

    //synching sliders
    if(syncOtherGroup) {
        $('#ovSlider2, #ovSlider3, #ovSlider4').prop('value', ovalue1);
        $('#ovSlider2, #ovSlider3, #ovSlider4').change();
    }
}


$('#vSlider1').hover(
    function() {
        setTimeout("updateBarYAxis('bar1', true)", 250);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'17px'});
        $('.yourdecisiontext2').css({'font-weight':'700','opacity':'1'});
        $('#vSlider1').css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#dSlider').addClass('newdSlider');

    },
    function() {
        setTimeout("updateBarYAxis('bar1', false)", 500);
        $('.yourdecisiontext').css({'font-weight':'200', 'font-size':'17px'});
        $('.yourdecisiontext2').css({'font-weight':'200','opacity':'0.3'});
        $('#vSlider1').css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        $('#dSlider').css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
        $('#dSlider').removeClass('newdSlider');
    }
);

$('#ovSlider1').hover(
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider1';}

        setTimeout("updateBarYAxis('obar1', true)", 250);
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});

        if(syncOtherGroup) {
            $(myString).addClass('newnewSlider');
        }
    },
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider1';}

        setTimeout("updateBarYAxis('obar1', false)", 500);
        $(myString)
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        if(syncOtherGroup) {
            $(myString).removeClass('newnewSlider');
        }
    }
);




$('html, body').animate({scrollTop: 0}, 0);
