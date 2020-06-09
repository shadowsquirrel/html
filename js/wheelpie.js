////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Turning Wheel   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


var pwin = .66;
var a = 100*pwin;
var b = 100-a;

let theWheel = new Winwheel({
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
        'duration' : 1,
        'spins'    : 10,
        'callbackFinished' : 'resetWheel()',
    }
});




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Bars and Pies   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


var updateWheelPie = function(a, barId) {

    var x = a;
    var y = 1-a;
    var actualOpacity = 1;

    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var actualData = {
        values: [y, x],
        labels: ['Opposing Leader', 'Your Leader'],
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        opacity:actualOpacity,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(80, 80, 80)'],
            line: {
                color: 'black',
                width: 1,
            }
        }
    };

    var layout = {
        autosize: false,
        title: 'Probability to Win',
        "titlefont": {
            "size": 14,
        },
        height: 200,
        width: 200,
        font:{
            size: 14
        },
        margin: {"t": 40, "b": 40, "l": 40, "r": 40},
        showlegend: false,
    };

    var data;

    data = [actualData];

    Plotly.react(barId, data, layout, {displayModeBar: false});
}





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    CALLING THE FUNCTIONS   ////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// STAGE 2 AND 3 GRAPHICS AND ANIMATION
var animationCounter = 0;
var update = function() {

    updateWheelPie(pwin, 's3pie');


}


var startButton = document.getElementById('multibutton');

startButton.onclick = function() {
    animateWheel();
}
var animateWheel = function() {
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    $('.piewrap').css({'opacity':'0', 'zIndex':'-1'});
    $('.mywheel').css({'opacity':'1', 'zIndex':'0'});
    $('.arrow').css({'opacity':'1', 'zIndex':'1'});
    var resultIndex = 1;//(Math.random() > 0.5) ? 1 : 2;
    // theWheel.draw();
    var stopAt = theWheel.getRandomForSegment(resultIndex);
    theWheel.animation.stopAngle = stopAt;
    theWheel.startAnimation();
}

var resetButton = document.getElementById('multibutton2');

resetButton.onclick = function() {
    $('.piewrap').css({'opacity':'1', 'zIndex':'1'});
    $('.mywheel').css({'opacity':'0', 'zIndex':'0'});
    $('.arrow').css({'opacity':'0', 'zIndex':'0'});
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
}

var resetWheel = function() {
    // theWheel.stopAnimation(false);
    // theWheel.rotationAngle = 0;
}
//INITIATION
update();
