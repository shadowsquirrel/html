








var a = 100*Math.random();
var b = 100-a;

let theWheel = new Winwheel({
    'canvasId': 'fuckyea',
    'numSegments': 4,
    'outerRadius': 60, // controls the size of the theWheel
    // 'innerRadius': 100, //makes a donut
    // 'centerX': 500,  // By default wheel goes in center of canvas, move to left side.
    // 'centerY': 500,
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
        // Define segments. The moreInfo property is not a standard parameter of segments
        // but because JavaScript is loosely typed if I want moreInfo property I can add it.
        {
            'fillStyle' : 'gray',
            'textFillStyle': 'white',
            'text'      : '',
            'size'      : winwheelPercentToDegrees(a),   // Note use of winwheelPercentToDegrees()
            'moreInfo'  : '<p>Data 1 is the biggest slice of the pie at 45% for this year!</p>'
        },
        {
            'fillStyle' : 'lightgray',
            'textFillStyle': 'black',
            'text'      : '',
            'size'      : winwheelPercentToDegrees(b),
            'moreInfo'  : '<p>Data 2 is selling well making up 20% of our sales.</p>',
            // 'textAlignment':'inner'
        },
        // {
        //     'fillStyle' : '#7de6ef',
        //     'text'      : 'Follower 3 \n10%',
        //     'size'      : winwheelPercentToDegrees(5),
        //     'moreInfo'  : '<p>Data 3 only making up 5% of our sales.</p>',
        //     // 'textAlignment':'outer',
        //     // 'textMargin': '300'
        // },
        // {
        //     'fillStyle' : '#e7706f',
        //     'text'      : 'Follower 4 \n30%',
        //     'size'      : winwheelPercentToDegrees(30),
        //     'moreInfo'  : '<p>Data 4 was a strong performer of the last year at 30% of sales.</p>'
        // }
    ],
    // 'pointerGuide' :        // Turn pointer guide on.
    // {
    //     'display'     : true,
    //     'strokeStyle' : 'red',
    //     'lineWidth'   : 3
    // },
    'animation' :                   // Note animation properties passed in constructor parameters.
    {
        'type'     : 'spinToStop',  // Type of animation.
        // 'type': 'spinAndBack',
        'duration' : 5,             // How long the animation is to take in seconds.
        'spins'    : 25,             // The number of complete 360 degree rotations the wheel is to do.
        // Remember to do something after the animation has finished specify callback function.
        // 'callbackFinished' : 'yo()',
        // During the animation need to call the drawTriangle() to re-draw the pointer each frame.
        // 'callbackAfter' : 'drawTriangle()'
    }
});



// Put draw code in a function since would have to call this
// each frame of the animation to re-draw the pointer.
// var drawTriangle = function()
// {
//     let ctx = theWheel.ctx;
//     ctx.strokeStyle = '#000000';     // Set line colour.
//     ctx.fillStyle   = 'black';        // Set fill colour.
//     ctx.lineWidth   = 2;
//     ctx.beginPath();                 // Begin path.
//     ctx.moveTo(175, 20);             // Move to initial position.
//     ctx.lineTo(235, 20);             // Draw lines to make the shape.
//     ctx.lineTo(205, 80);
//     ctx.lineTo(176, 20);
//     ctx.stroke();                    // Complete the path by stroking (draw lines).
//     ctx.fill();                      // Then fill with colour.
// }

// var yo = function() {
//     console.log('Yooooooooo');
//     let winningSegmentNumber = theWheel.getIndicatedSegmentNumber();
//     theWheel.segments[winningSegmentNumber].fillStyle = 'yellow';
//     theWheel.draw();
//     // theWheel.startAnimation();
// }

theWheel.segments[3].fillStyle = 'red';
// theWheel.segments[3].textFontSize = 40;
theWheel.segments[3].textFontWeight = 'bolder';
theWheel.draw();
// drawTriangle();

mybutton = document.getElementById('turn');

mybutton.onclick = function() {
    var stopAt = theWheel.getRandomForSegment(1);
    theWheel.animation.stopAngle = stopAt;
    theWheel.startAnimation();
}
