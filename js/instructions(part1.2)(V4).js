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
            range: [0,800],
            layer: 'below traces',
            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 50, 100, 150, 200, 250, 300, 400, 500, 650, 800],
            ticktext: [0, 50, 100, 150, 200, 250, 300, 400, 500, 650, 800],
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

// var wheelresultDisplay2 = document.getElementById('wheelresulttext2');
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
        setTimeout('doLater()', 8000)
        firsttime = false;

    }

}

var doLater = function() {
    $('.after2').css({'transition-delay':'0s', 'opacity':'0'});
    $('.anotherwrap').css({'margin-top':'-75px'});
    $('.firstfadein3, .abitlater').css({'opacity':'1'});
    $('.sinfo').css({'margin-bottom':'-50px', 'transition':'3s', 'z-index':'5'});
    setTimeout('turnOffSliders()', 1);
}

var turnOffSliders = function() {
$('#lSlider1, #olSlider1, #efiSlider').css({'z-index':'-10'});
$('.lslider').css({'opacity':'0'});
}

var turnOnSliders = function() {
$('#lSlider1, #olSlider1, #efiSlider').css({'z-index':'1'});
$('.lslider').css({'opacity':'0.2'});
}

/////////////////////////////////////////////////
var firsttime2 = true;

var eButton = document.getElementById('exampleButton');

var eButtonFirstTimeClick = true;
eButton.onclick = function() {
    if(eButtonFirstTimeClick) {
        $('.dicewrap').css({'transition-delay':'0s', 'opacity':'0'});
        rotateExamples();
        eButtonFirstTimeClick = false;
    }
}

var bigCounter = 0;
var eCounter = 0;
var efoArray = [100, 100, 500, 500, 100];
var oefoArray = [100, 100, 100, 500, 100];
var efiArray =  [1,1,1,1,1];
var oefiArray = [1,5,5,5,5]

var rotateExamples = function() {
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

    if(eCounter < 4) {
        eCounter = eCounter + 1;
        bigCounter = bigCounter + 1;
    } else {
        bigCounter = bigCounter +1;
        eCounter = 0;
    }
    if(bigCounter === 6) {
        $('.firstfadein3').css({'transition-delay':'0s', 'transition':'1s', 'opacity':'0'})
        $('.firstfadein2').css({'transition':'1s', 'opacity':'1', 'margin-top':'-141px'});
        setTimeout(()=>{goDown2()}, 12000)
    }
    if(bigCounter < 12) {
    setTimeout(()=>{rotateExamples()}, 2500);
    }
    if(bigCounter < 30 && bigCounter > 11) {
    setTimeout(()=>{rotateExamples()}, 1000);
    }
    if(bigCounter === 30) {
        turnOnSliders();
    }
}

var goDown2 = function() {
    if(firsttime2) {
        // NODEGAME ACTION HAPPENS HERE
        $('.continueButton').css({'transition-delay':'0s', 'opacity':'1'});
        $('.showfpower').css({'opacity':'1', 'z-index':'10', 'margin-top':'-28px'});
        $('.initial').css({'transition':'1s', 'opacity':'0', 'margin-bottom':'-40px'});
        firsttime2 = false;
    }
}

/////////////////////////////////////

var goDown = function() {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 5000);
    setTimeout('goDown2()', 7000);
}

var someExplanationVanishes = function() {
    $('.buttontextwrap').css({'opacity':'0', 'transition':'1s', 'transition-delay':'0s', 'margin-top':'-100px', 'z-index':'-30'});
}


// var fpowerbutton = document.getElementById('dice4');
// fpowerbutton.onclick = function() {
//
//     // button and its text disappears
//     $('.showfpower').css({'opacity':'0', 'margin-top':'-105px', 'z-index':'-10'});
//
//     // information box appears
//     $('.showmore').css({'opacity':'1'});
//
//     // information box is placed correctly
//     $('.fpower').css({'margin-top':'0px'});
//
//     // show show l power button
//     setTimeout('goDown25()', 5000);
// }

var goDown25 = function() {
    // show show l power button
    $('.showlpower').css({'opacity':'1', 'margin-top':'0px', 'z-index':'10'});

    $('html, body').animate({
        scrollTop: $(document).height()
    }, 5000);
}

var lpowerbutton = document.getElementById('dice5');
lpowerbutton.onclick = function() {
    // button and its text disappears
    someExplanationVanishes();
    $('.showlpower').css({'opacity':'0', 'margin-top':'-105px'});

    // information box appears
    $('.showmore5').css({'opacity':'1'});
    // information box is placed correctly
    $('.lpower').css({'margin-top':'0px'});
    $('.enson').css({'margin-top':'0px'});
    $('.continueButton, .enson, .enson2').css({'opacity':'1'});
    setTimeout('downdown()', 6000);
}
var downdown = function() {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 3000);
}






var eButton2 = document.getElementById('exampleButton2');
var eCounter2 = 0;
eButton2.onclick = function() {

    // $('.dicewrap').css({'border':'3px solid white'});
    // $('.dicewrap').css({'transition-delay':'0s', 'border':'3px solid white'});
    // var efoArray = [100, 100, 500, 500, 500, 500,  500, 500, 500, 500, 500];
    // var oefoArray = [100, 100, 100, 200, 500, 100, 200, 500, 100, 200, 500];
    // var efiArray =  [1,1, 1,1,1,1,1,1,1,1,1];
    // var oefiArray = [1,3, 3,3,3,5,5,5,10,10,10]
    var efoArray = [100, 100, 500, 500, 500, 500];
    var oefoArray = [100, 100, 100, 500, 100, 500];
    var efiArray =  [1,1,1,1,1,1];
    var oefiArray = [1,3,3,3,5,5]

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
    if(eCounter < 5) {
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
$('#lSlider1, #olSlider1').css({'z-index':'-10'});

$('.cursor-pointer').css({'cursor':'default'});
$('#efiSlider').css({'cursor':'pointer'});
