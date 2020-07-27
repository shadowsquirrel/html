
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
        labels: ['Leader B', 'Leader A'],
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
            range: [0,800],
            layer: 'below traces',
            fixedrange: true,

            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 50, 100, 150, 200, 250, 350, 500, 650, 800],
            ticktext: [0, 50, 100, 150, 200, 250, 350, 500, 650, 800],
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

var clickCount = 0;
var shitHappened = false;
var activeWheelSwitch = true;
var firsttimerevealed = true
var helpdone = false;
var sabodone = false;
var updateAll = function() {
    updateTotal();
    updatePwin();
    updatePie(pwin);
    updateEfficiencyBar(efi, oefi);

    if(activeWheelSwitch) {
        // hideWheel();
        activeWheelSwitch = false;
    }

    if(h1>1 || oh1>1) {
        // console.log('inside helpdone');
        helpdone = true;
        // $('.helpins').css({'opacity':'0'});
    }


    if(s1>1 || os1>1) {
        // console.log('inside sabodone');
        sabodone = true;
        // $('.saboins').css({'opacity':'0'});
    }


    console.log(sabodone);
    console.log(helpdone);

    var investCostDisplay = document.getElementById('investmentcostdisplay');
    var mytokens = ((h1+s1)>1) ? 'tokens' : 'token';
    var investmentCostText = 'Investment cost: <strong>' + (h1+s1) + '</strong> ' + mytokens;
    investCostDisplay.innerHTML = investmentCostText;

    var investCostDisplay2 = document.getElementById('investmentcostdisplay2');
    var mytokens2 = ((oh1+os1)>1) ? 'tokens' : 'token';
    var investmentCostText2 = 'Investment cost: <strong>' + (oh1+os1) + '</strong> ' + mytokens;
    investCostDisplay2.innerHTML = investmentCostText2;

    $('.cursor-pointer').css({'cursor':'default'});

    if(helpdone && sabodone) {
        if(!shitHappened) {
            // console.log('help sabo both done');
            shitHappened = true;
            setTimeout('stopPlaying()', 100);

        }


    }

}

var stopPlaying3 = function() {
    $('.clickcontinue').css({'opacity':'1'});
    $('.continueButton').css({'opacity':'1'});
    $('.experiment').css({'opacity':'0'});

    $('.slider, .lslider').css({'z-index':'-10'});
    // setTimeout('stopPlaying2()', 250);
}

var stopPlaying = function() {
    $('.greendotted1').css({'border':'4px solid white'});
    $('.greendotted2').css({'border':'4px solid white'});
    $('.slider, .lslider').css({'z-index':'-10'});
    setTimeout('stopPlaying2()', 250);
    setTimeout('shitHappens()', 250);
}
var stopPlaying2 = function() {
    $('.slider, .lslider').css({'z-index':'-10'});
    setTimeout('shitHappens()', 1500);
}
var shitHappens = function() {
    $('.usetext, .textimagewrap').css({'opacity':'0'})
    $('.zerotextsabo').css({'opacity':'1', 'z-index':'0'});
    $('.buttonwrap').css({'opacity':'1'});


    h1  = 0;
    s1 = 0;
    var shBarValue =0;


    oh1  = 0;
    os1 = 0;
    var oshBarValue =0;

    efo = 100;
    oefo = 100;

    updateTotal();
    updatePwin();
    updatePie(pwin);
    updateEfficiencyBar(efi, oefi);

    updateBar(shBarValue, 'bar1', 0, false);
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

    // $('.slider, .lslider').css({'z-index':'-10'});
}


updateAll();

var myDown = document.getElementById('down');

myDown.onclick = function() {
    $('.sinfo').css({'transition-delay':'0s', 'transition':'1s', 'margin-top':'-255px', 'opacity':'0'})
    $('.sinfotitle, .rank0, .yoket').css({'transition-delay':'0s','opacity':'0', 'z-index':'-10'});
    $('.rank1').css({'transition-delay':'0s', 'margin-top':'-83px'});
    $('.calculator').css({'transition-delay':'0s','margin-top':'-294px'});
    $('.fadein2').css({'opacity':'1'});
    $('.limited').css({'transition-delay':'0s','padding-top':'10px'});
    $('.minirank2').css({'transition-delay':'0s', 'padding-top':'0px', 'padding-bottom':'0px'});
    $('.minirank275').css({'padding-bottom':'0px'});
    $('.zerotextsabo').css({'opacity':'0', 'z-index':'0'});
    $('.firsttextsabo').css({'opacity':'0', 'z-index':'-20'});
    $('.secondtextsabo').css({'opacity':'0', 'z-index':'-20'});
    $('.thirdtextsabo').css({'opacity':'0', 'z-index':'-20'});
    $('.firsttexthelp').css({'opacity':'0', 'z-index':'-20'});
    $('.secondtexthelp').css({'opacity':'0', 'z-index':'-20'});
    $('.thirdtexthelp').css({'opacity':'0', 'z-index':'-20'});
    $('.buttonwrap').css({'opacity':'0'});
    $('.leftgrouptitle').css({'margin-left':'0px'});
    $('.rightgrouptitle').css({'margin-right':'0px'});

    $('html, body').animate({
        scrollTop: $(document).height()
    }, 3000);

}


var firstTimeStopPlaying = true;
var myNext = document.getElementById('next');


myNext.onclick = function() {
    if(clickCount < 8) {
        clickCount = clickCount + 1;
    }
    console.log('nex' + clickCount);
    $('.hideclick').css({'opacity':'0'});
    // $('.slider, .lslider').css({'opacity':'0'});
    if(clickCount === 0) {
        $('.zerotextsabo').css({'opacity':'1', 'z-index':'0'});
        $('.firsttextsabo').css({'opacity':'0', 'z-index':'0'});
        $('.secondtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtexthelp').css({'opacity':'0', 'z-index':'-20'});
    }
    if(clickCount < 3 && clickCount > 0 ) {
        $('.zerotextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttextsabo').css({'opacity':'1', 'z-index':'0'});
        $('.secondtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtexthelp').css({'opacity':'0', 'z-index':'-20'});
    }

    if(clickCount > 2 && clickCount < 6) {
        $('.zerotextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.second25textsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtextsabo').css({'opacity':'1', 'z-index':'0'});
        $('.firsttexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.second25texthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtexthelp').css({'opacity':'0', 'z-index':'-20'});
    }
    if(clickCount > 5 && clickCount < 9) {
        $('.zerotextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.second25textsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.second25texthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtexthelp').css({'opacity':'1', 'z-index':'0'});
    }




    if(clickCount === 8) {
        $('.slider, .lslider').css({'z-index':'1'});
        $('#lSlider1, #olSlider1').css({'z-index':'1'});
        if(firstTimeStopPlaying) {
            $('.experiment').css({'opacity':'1', 'margin-top':'-183px'});
            $('.followergraphics').css({'margin-top':'-167px'});
            firstTimeStopPlaying = false;
            // $('.zerotextsabo').css({'opacity':'0', 'z-index':'-20'});

            setTimeout('stopPlaying3()', 15000);
        }

    }





    var shArray = [0, 5,5, 5,15,35, 5,15,35];
    var isHelp1Array = [true, true,false, false,false,false, true,true,true];

    var isHelp1 = isHelp1Array[clickCount];
    var shValue = shArray[clickCount];
    h1  = isHelp1 ? shValue : 0;
    s1 = isHelp1 ? 0 : shValue;
    var shBarValue = isHelp1 ? shValue : -shValue;

    var oshArray = [0, 0,0, 5,5,25, 5,5,25];
    var isHelp2Array = [true, true,false, false,false,false, true,true,true];
    var isHelp2 = isHelp2Array[clickCount];
    var oshValue = oshArray[clickCount];
    oh1  = isHelp2 ? oshValue : 0;
    os1 = isHelp2 ? 0 : oshValue;
    var oshBarValue = isHelp2 ? oshValue : -oshValue;

    var efoArray =  [100,100,100, 100,100,100, 100,100,100]

    var oefoArray = [100,100,100, 100,100,100, 100,100,100]
    efo = efoArray[clickCount];
    oefo = oefoArray[clickCount];

    updateAll();

    updateBar(shBarValue, 'bar1', 0, false);
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


    // console.log(clickCount);
    // console.log(shArray.length + '' + oshArray.length + '' + efoArray.length + '' + oefoArray.length + '' + isHelp1Array.length+ '' + isHelp2Array.length);
}

var myPrevious = document.getElementById('previous');

myPrevious.onclick = function() {
    if(clickCount>0) {
        clickCount = clickCount - 1;
    }
    $('.hideclick').css({'opacity':'0'});
    // $('.slider, .lslider').css({'opacity':'0'});

    // console.log('pre' + clickCount);

    var shArray = [0, 5,5, 5,15,35, 5,15,35];
    var isHelp1Array = [true, true,false, false,false,false, true,true,true];

    var isHelp1 = isHelp1Array[clickCount];
    var shValue = shArray[clickCount];
    h1  = isHelp1 ? shValue : 0;
    s1 = isHelp1 ? 0 : shValue;
    var shBarValue = isHelp1 ? shValue : -shValue;

    var oshArray = [0, 0,0, 5,5,25, 5,5,25];
    var isHelp2Array = [true, true,false, false,false,false, true,true,true];
    var isHelp2 = isHelp2Array[clickCount];
    var oshValue = oshArray[clickCount];
    oh1  = isHelp2 ? oshValue : 0;
    os1 = isHelp2 ? 0 : oshValue;
    var oshBarValue = isHelp2 ? oshValue : -oshValue;

    var efoArray =  [100,100,100, 100,100,100, 100,100,100]

    var oefoArray = [100,100,100, 100,100,100, 100,100,100]
    efo = efoArray[clickCount];
    oefo = oefoArray[clickCount];

    // updateAll();

    if(clickCount === 0) {
        $('.zerotextsabo').css({'opacity':'1', 'z-index':'0'});
        $('.firsttextsabo').css({'opacity':'0', 'z-index':'0'});
        $('.secondtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtexthelp').css({'opacity':'0', 'z-index':'-20'});
    }
    if(clickCount < 3 && clickCount > 0 ) {
        $('.zerotextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttextsabo').css({'opacity':'1', 'z-index':'0'});
        $('.secondtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtexthelp').css({'opacity':'0', 'z-index':'-20'});
    }

    if(clickCount > 2 && clickCount < 6) {
        $('.zerotextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.second25textsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtextsabo').css({'opacity':'1', 'z-index':'0'});
        $('.firsttexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.second25texthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtexthelp').css({'opacity':'0', 'z-index':'-20'});
    }
    if(clickCount > 5 && clickCount < 9) {
        $('.zerotextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.second25textsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtextsabo').css({'opacity':'0', 'z-index':'-20'});
        $('.firsttexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.secondtexthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.second25texthelp').css({'opacity':'0', 'z-index':'-20'});
        $('.thirdtexthelp').css({'opacity':'1', 'z-index':'0'});
    }



    if(clickCount === 8) {
        $('.clickcontinue').css({'opacity':'1'});
        $('.continueButton').css({'opacity':'1'});
    }


    updateAll();

    updateBar(shBarValue, 'bar1', 0, false);
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
    $('.greendotted1').css({'border':'4px solid white'});
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
    $('.greendotted2').css({'border':'4px solid white'});
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
// $('#lSlider1, #olSlider1').css({'z-index':'-10'});
$('.lslider').css({'z-index':'-10'});


    // $('html, body').animate({
    //     scrollTop: $(document).height()
    // }, 4000);
