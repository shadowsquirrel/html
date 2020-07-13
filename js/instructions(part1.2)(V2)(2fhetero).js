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
            'callbackFinished' : 'showResultf()',
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
        labels: ['Opponent\'s share', 'Your share'],
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
            range: [0,700],
            layer: 'below traces',
            fixedrange: true,

            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 50, 100, 150, 200, 250, 300, 400, 500, 700],
            ticktext: [0, 50, 100, 150, 200, 250, 300, 400, 500, 700],
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
    gp1 = gp3 = gapSize*0.35;
    gp2 = gapSize*0.3;
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
        text: '&#x25C0; &#x25BA;',
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
        text: '&#x25C0;',
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
        text: '<>',
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'white',
            size: '12'
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

// leader global variables
var efo, efi, efefo, oefo, oefi, oefefo, pwin;
efo = 200;
oefo = 200;
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

var updatePwin = function() {
    efefo = efi * efo;
    oefefo = oefi * oefo;
    pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));
}

var activeWheelSwitch = true;


var updateAll = function() {
    updatePwin();
    updatePie(pwin);
    updateEfficiencyBar(efi, oefi);
    if(activeWheelSwitch) {
        // hideWheel();
        activeWheelSwitch = false;
    }
    // wheelresultDisplay2.innerHTML = 'Your investment cost: <strong>' + efo + '</strong>';
}





updateAll();

// Slider-bar initiations

// EFFICIENCY SLIDER - BAR
var efislider = document.getElementById('efiSlider');
var efivalue;
var firsttime = true;
efislider.oninput = function() {

    efivalue = parseFloat(efislider.value);
    var t = Math.abs(efivalue);
    var x = 101 - t;
    var y = 101 + t;

    efi = (efivalue > 0) ? y : x;
    oefi = (efivalue > 0) ? x : y;

    updateAll();

    theWheel.stopAnimation(false);
    canClickArrow = true;

    if(firsttime) {
        $('.sliderbarefi').css({'border':'1px solid black'});
        $('.dottedblue2').css({'border':'1px solid black'});
        setTimeout('doLater()', 5000)
        firsttime = false;

    }

}

var doLater = function() {
    $('.after2').css({'transition-delay':'0s', 'opacity':'0'});
    $('.anotherwrap').css({'margin-top':'-80px'});
    $('.firstfadein3, .abitlater').css({'opacity':'1'});
    $('.sinfo').css({'margin-bottom':'-50px', 'transition':'3s', 'z-index':'5'});
    setTimeout('turnOffSliders()', 13000);
}
var turnOffSliders = function() {
$('#lSlider1, #olSlider1, #efiSlider').css({'z-index':'-10'});
$('.lslider').css({'opacity':'0'});
}

var turnOnSliders = function() {
$('#lSlider1, #olSlider1, #efiSlider').css({'z-index':'1'});
$('.lslider').css({'opacity':'0.2'});
}
var firsttime2 = true;
var goDown = function() {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 5000);
    setTimeout('goDown2()', 7000);
}
var goDown2 = function() {
    if(firsttime2) {


        // $('.after2').css({'height':'1px'});
        // $('.evenlater').css({'transition-delay':'0s', 'transition':'1s', 'margin-top':'-114px', 'opacity':'0', 'z-index':'-2'});
        // $('.fadeout').css({'opacity':'1'});
        // console.log('yoyoyoyoyo');
        $('.showmore').css({'opacity':'1'});
        $('.showmore2').css({'opacity':'1', 'z-index':'10'});
        // $('html, body').animate({
        //     scrollTop: $(document).height()
        // }, 5000);
        // $('.continueButton').css({'opacity':'1'});
        firsttime2 = false;

    }
}

var eButton = document.getElementById('exampleButton');

var bigCounter = 0;
var eCounter = 0;
eButton.onclick = function() {

    $('.dicewrap').css({'transition-delay':'0s', 'border':'3px solid white'});
    var efoArray = [100, 100, 500, 500, 500, 500,  500, 500, 500, 500, 500];
    var oefoArray = [100, 100, 100, 200, 500, 100, 200, 500, 100, 200, 500];
    var efiArray =  [1,1, 1,1,1,1,1,1,1,1,1];
    var oefiArray = [1,3, 3,3,3,5,5,5,10,10,10]

    efi = efiArray[eCounter];
    oefi = oefiArray[eCounter];

    efo = efoArray[eCounter];
    $('#lSlider1').prop('value', efoArray[eCounter]);
    $('#lSlider1').change();
    updateBarLeader(efo, 'barl', 1, false);

    oefo = oefoArray[eCounter];
    $('#olSlider1').prop('value', oefoArray[eCounter]);
    $('#olSlider1').change();
    updateBarLeader(oefo, 'obarl', 0, false);

    updateAll();
    // $('.lslider').css({'opacity':'0'});
    if(eCounter < 10) {
        eCounter = eCounter + 1;
        bigCounter = bigCounter + 1;
    } else {

        // setTimeout('goDown()', 1000);
        bigCounter = bigCounter +1;
        eCounter = 0;
    }
    if(bigCounter === 12) {
        setTimeout('goDown()', 1000);
        setTimeout('turnOnSliders()', 7000);
        $('.buttontextwrap').css({'opacity':'0', 'transition':'1s', 'transition-delay':'0s', 'margin-top':'-100px', 'z-index':'-30'});
        $('.firstfadein2').css({'opacity':'1'})
    }
}


var eButton2 = document.getElementById('exampleButton2');

var eCounter2 = 0;
eButton2.onclick = function() {

    // $('.dicewrap').css({'border':'3px solid white'});
    // $('.dicewrap').css({'transition-delay':'0s', 'border':'3px solid white'});
    var efoArray = [100, 100, 500, 500, 500, 500,  500, 500, 500, 500, 500];
    var oefoArray = [100, 100, 100, 200, 500, 100, 200, 500, 100, 200, 500];
    var efiArray =  [1,1, 1,1,1,1,1,1,1,1,1];
    var oefiArray = [1,3, 3,3,3,5,5,5,10,10,10]

    efi = efiArray[eCounter];
    oefi = oefiArray[eCounter];

    efo = efoArray[eCounter];
    $('#lSlider1').prop('value', efoArray[eCounter]);
    $('#lSlider1').change();
    updateBarLeader(efo, 'barl', 1, false);

    oefo = oefoArray[eCounter];
    $('#olSlider1').prop('value', oefoArray[eCounter]);
    $('#olSlider1').change();
    updateBarLeader(oefo, 'obarl', 0, false);

    updateAll();

    $('.lslider').css({'opacity':'0'});
    if(eCounter < 10) {
        eCounter = eCounter + 1;
    } else {
        eCounter = 0;
    }
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



$('html, body').animate({scrollTop: 0}, 0);
$('.firstfadein, .later1, .later15, .later175').css({'opacity':'1'});
$('.evenlater').css({'opacity':'1'});



/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
/////////////////////TURN THE WHEEL FOLLOWERS CONTEST/////////////////////////
var updatePief = function(a) {


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
        labels: ['Opponent\'s share', 'Your share'],
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

    Plotly.react('pief', data, layout, {displayModeBar: false});
}
var updateEfficiencyBarf = function(efi1, efi2) {

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
    gp1 = gp3 = gapSize*0.35;
    gp2 = gapSize*0.3;
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
            color: 'white',
            size: '12'
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

    Plotly.react('efficiencyBarf', data, layout, {displayModeBar: false});
}
var updateBarFollower = function(e, barId, ourSide, axisOn) {
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
            range: [0,200],
            layer: 'below traces',
            fixedrange: true,

            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 15, 30, 50, 75, 100, 125, 150, 200],
            ticktext: [0, 15, 30, 50, 75, 100, 125, 150, 200],
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
var e1, e2, efe1, efe2, e1efi, e2efi, pwinf;
e1 = 50;
e2 = 50;
e1efi = 1;
e2efi = 5;

var updatePwinf = function() {
    efe1 = e1efi * e1;
    efe2 = e2efi * e2;
    pwinf = ((e1 + e2) === 0) ? 0.5 : (efe1 / (efe1 + efe2));
}

var activeWheelSwitchf = true;
var ilkseferdemiyiz = true;

var wheelresultDisplay2f = document.getElementById('wheelresulttext2f');
var updateAllf = function() {
    updatePwinf();
    updatePief(pwinf);
    updateEfficiencyBarf(e1efi, e2efi);
    if(activeWheelSwitchf) {
        hideWheelf();
        activeWheelSwitchf = false;
    }
    if(ilkseferdemiyiz) {


        var wheelresultDisplayf = document.getElementById('wheelresulttextf');
        var youwon = 'You Won!';
        var youlost = 'You Lost.';
        var resultDisplay = (resultIndexf===1) ? youwon : youlost;
        wheelresultDisplayf.innerHTML = resultDisplay;

        var wheelresultDisplay3 = document.getElementById('wheelresulttext3f');
        var mycost = -e1;
        var mypayoff = mycost;
        var mypayoffDisplay = 'Your Net Payoff: <strong>' + mypayoff + '</strong>';
        wheelresultDisplay3.innerHTML = mypayoffDisplay;


        var wheelresultDisplay4 = document.getElementById('wheelresulttext4f');
        var won = 'You are the new Leader!';
        var lost = 'You continue as a Follower.';
        var resultDisplay4 = (resultIndexf === 1) ? won : lost;
        wheelresultDisplay4.innerHTML = resultDisplay4;



        ilkseferdemiyiz = false;
    }
    wheelresultDisplay2f.innerHTML = 'Your investment cost: <strong>' + e1 + '</strong>';
}

var hideWheelf = function() {
    $('.piewrapf').css({'display':'flex'});
    $('.piewrapf').css({'opacity':'1', 'zIndex':'1'});
    $('.mywheelf').css({'display':'none'});
    $('.mywheelf').css({'opacity':'0', 'zIndex':'0'});
    liftArrowf();
}

var resultIndexf;
var animateWheelf = function() {
    createWheel(pwinf);
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;

    $('.piewrapf').css({'display':'none'});
    $('.piewrapf').css({'opacity':'0', 'zIndex':'-1'});
    $('.mywheelf').css({'display':'flex'});
    $('.mywheelf').css({'opacity':'1', 'zIndex':'0'});
    $('.arrowf').css({'marginTop':'48px'});

    var stopAt = theWheel.getRandomForSegment(resultIndexf);
    theWheel.animation.stopAngle = stopAt;
    theWheel.startAnimation();
    activeWheelSwitchf = true;
}

var arrowButtonf = document.getElementById('arrowf');
var canClickArrowf = true;
var biriciksefer = true;
var turnthewheelCounter = 0;
arrowButtonf.onclick = function() {
    turnthewheelCounter = turnthewheelCounter + 1;
    // console.log(canClickArrowf);
    if(canClickArrowf) {
        $('.arrowf').css({'border':'0px'});
        $('.wheelresultf').css({'opacity':'0'});
        $('.wheelresult4f').css({'opacity':'0'});
        $('.wheelresult3f').css({'opacity':'0'});
        if(turnthewheelCounter===2) {
            $('.turnwheeltext').css({'opacity':'0', 'margin-top':'-28px'});
        }
        if(turnthewheelCounter===0){
            resultIndexf=2;
        }
        if(turnthewheelCounter===1){
            resultIndexf=1
        }
        resultIndexf = (Math.random() > 0.5 ? ((Math.random() < pwinf) ? 1 : 2) : 2);
        animateWheelf();
        if(biriciksefer) {
            $('.birbaskawrap').css({'opacity':'0', 'margin-top':'-69px'});

            biriciksefer = false;
        }

        canClickArrowf = false;
    }

}


var liftArrowf = function() {
    $('.arrowf').css({'marginTop':'30px'});
}

var showingFirstTime = true;

var showResultf = function() {

    $('.wheelresultf').css({'opacity':'1'});
    $('.wheelresult3f').css({'opacity':'1'});
    $('.wheelresult4f').css({'opacity':'1'});
    $('.arrowwrapf').css({'margin-top':'-25px'});
    canClickArrowf = true;
    liftArrowf();
    // setTimeout("liftArrow()", 500);

    var wheelresultDisplayf = document.getElementById('wheelresulttextf');
    var youwon = 'You Won!';
    var youlost = 'You Lost.';
    var resultDisplay = (resultIndexf===1) ? youwon : youlost;
    wheelresultDisplayf.innerHTML = resultDisplay;

    var wheelresultDisplay3 = document.getElementById('wheelresulttext3f');
    var mycost = -e1;
    var mypayoff = mycost;
    var mypayoffDisplay = 'Your Net Payoff: <strong>' + mypayoff + '</strong>';
    wheelresultDisplay3.innerHTML = mypayoffDisplay;


    var wheelresultDisplay4 = document.getElementById('wheelresulttext4f');
    var won = 'You are the new Leader!';
    var lost = 'You continue as a Follower.';
    var resultDisplay4 = (resultIndexf === 1) ? won : lost;
    wheelresultDisplay4.innerHTML = resultDisplay4;

    if(turnthewheelCounter===1) {
        // $('html, body').animate({scrollTop:  $(document).height()}, 2000);
        showingFirstTime = false;
        $('.ensongoster1').css({'margin-top':'-115px', 'margin-right':'660px'});
        setTimeout('songoster()', 2000)
    }



    if(turnthewheelCounter===2) {
        // $('html, body').animate({scrollTop:  $(document).height()}, 2000);
        showingFirstTime = false;
        $('.ensongoster2').css({'margin-top':'-135px', 'margin-left':'660px'});
        setTimeout('sonsongoster()', 2000)
    }

}
var songoster = function() {
    $('.ensongoster1').css({'opacity':'1'});
}

var sonsongoster = function() {
    $('.ensongoster2').css({'opacity':'1'});
}

var showResultfInitialize = function() {

    $('.wheelresultf').css({'opacity':'0'});
    $('.wheelresult3f').css({'opacity':'0'});
    $('.wheelresult4f').css({'opacity':'0'});
    // $('.arrowwrapf').css({'margin-top':'-25px'});
    // canClickArrowf = true;
    // liftArrowf();
    // setTimeout("liftArrow()", 500);

    var wheelresultDisplayf = document.getElementById('wheelresulttextf');
    var youwon = 'You Won!';
    var youlost = 'You Lost.';
    var resultDisplay = (resultIndexf===1) ? youwon : youlost;
    wheelresultDisplayf.innerHTML = resultDisplay;

    var wheelresultDisplay3 = document.getElementById('wheelresulttext3f');
    var mycost = -e1;
    var mypayoff = mycost;
    var mypayoffDisplay = 'Your Net Payoff: <strong>' + mypayoff + '</strong>';
    wheelresultDisplay3.innerHTML = mypayoffDisplay;


    var wheelresultDisplay4 = document.getElementById('wheelresulttext4f');
    var won = 'You are the new Leader!';
    var lost = 'You continue as a Follower.';
    var resultDisplay4 = (resultIndexf === 1) ? won : lost;
    wheelresultDisplay4.innerHTML = resultDisplay4;



    //
    // if(showingFirstTime) {
    //     $('html, body').animate({scrollTop:  $(document).height()}, 2000);
    //     showingFirstTime = false;
    //     $('.ensongoster').css({'margin-top':'-150px', 'margin-left':'660px'});
    //     setTimeout('azsonra()', 2000)
    // }

}


updateAllf();



var Dbutton5 = document.getElementById('dice5');

Dbutton5.onclick = function() {
    console.log('testing the new button!!!!');
    $('.calculator').css({'transition-delay':'0s', 'transition':'1s', 'margin-top':'-204px'});
    $('.kaybet').css({'opacity':'0', 'transition-delay':'0s', 'transition':'1s'});
    $('.showmore2wrap').css({'opacity':'0', 'margin-top':'-100px', 'transition-delay':'0s', 'transition':'1s'});
    $('.dicewrap2').css({'opacity':'0', 'transition-delay':'0s', 'transition':'1s'});
    $('.f4subsections1').css({'margin-top':'0px', 'z-index':'10'});
    $('.f4subsections2').css({'z-index':'10'});
    $('.somesmalladjustment').css({'margin-top':'0px'});
    $('.birbaskawrap').css({'margin-top':'-11px'});
    setTimeout('oncebunugoster()', 0);
}

var oncebunugoster = function() {
    $('.f4subsections1').css({'opacity':'1'});
    $('.f4subsections11, .f4subsections12').css({'opacity':'1', 'z-index':'1'});
    $('.f4subsections2').css({'margin-top':'15px', 'opacity':'1', 'z-index':'1'});
    $('.birbaskawrap').css({'margin-top':'-11px'});
    // $('.calculatorf').css({'margin-top':'-168px'});
    $('html, body').animate({scrollTop:  $(document).height()}, 2000);
    setTimeout('indirbebegim()', 25000);
    setTimeout('dahacokgoster()', 30000);
}
var indirbebegim = function() {
    $('html, body').animate({scrollTop:  $(document).height()}, 2000);
}
var dahacokgoster = function() {

    $('.calculatorf').css({'margin-top':'-84px'});
    $('.birbaskawrap').css({'opacity':'1'});

    setTimeout('dahadahacokgoster()', 3000);

}

var dahadahacokgoster = function() {
    showResultfInitialize();
    $('html, body').animate({scrollTop:  $(document).height()}, 3000);
    $('.lslider').css({'opacity':'0.2'});
    $('.calculatorf, .wheelresult2f').css({'opacity':'1', 'z-index':'1'});


}








// YOUR GROUP INITIATION
// leader
var lslider1f = document.getElementById('lSlider1f');
var lvaluef = e1;
updateBarFollower(lvaluef, 'barlf', 1, false);


// OPPOSING GROUP INITIATION
// leader
var olslider1f = document.getElementById('olSlider1f');
var olvaluef = e2;
updateBarFollower(olvaluef, 'obarlf', 0, false);


// YOUR GROUP
//Leader
lslider1f.oninput = function() {
    console.log('feasadas');
    lvaluef = parseFloat(lslider1f.value);
    e1 = lvaluef;

    updateBarFollower(lvaluef, 'barlf', 1, true);
    updateAllf();

    // $('.lbar1').css({'border':'3px dotted white'});
    $('.wheelresultf').css({'opacity':'0'});
    $('.wheelresult4f').css({'opacity':'0'});
    $('.wheelresult3f').css({'opacity':'0'});
    theWheel.stopAnimation(false);
    canClickArrowf = true;
}

// OPPOSING GROUP
//Leader
olslider1f.oninput = function() {
    olvaluef = parseFloat(olslider1f.value);
    e2 = olvaluef;

    updateBarFollower(olvaluef, 'obarlf', 0, true);
    updateAllf();

    // $('.lbar2').css({'border':'3px dotted white'});
    $('.wheelresultf').css({'opacity':'0'});
    $('.wheelresult4f').css({'opacity':'0'});
    $('.wheelresult3f').css({'opacity':'0'});
    theWheel.stopAnimation(false);
    canClickArrowf = true;
}

// HOVER AND FOCUSOUT EFFECT FOR XAXIS SHOWING UP
$('#lSlider1f').hover(
    function() {
        setTimeout("updateBarXAxis('barlf', true)", 250);
    },
    function() {
        setTimeout("updateBarXAxis('barlf', false)", 500);
    }
);

$('#olSlider1f').hover(
    function() {
        setTimeout("updateBarXAxis('obarlf', true)", 250);
    },
    function() {
        setTimeout("updateBarXAxis('obarlf', false)", 500);
    }
);
