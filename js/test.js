var a = 100*Math.random();
var b = 100-a;

let theWheel = new Winwheel({
    'canvasId': 'fuckyea',
    'numSegments': 4,
    'outerRadius': 55, // controls the size of the theWheel
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
            'fillStyle' : 'gray',
            'textFillStyle': 'white',
            'text'      : '',
            'size'      : winwheelPercentToDegrees(a),
                },
        {
            'fillStyle' : 'lightgray',
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
        'spins'    : 25,
        // Remember to do something after the animation has finished specify callback function.
        // 'callbackFinished' : 'yo()',
    }
});
/*
// var yo = function() {
//     console.log('Yooooooooo');
//     let winningSegmentNumber = theWheel.getIndicatedSegmentNumber();
//     theWheel.segments[winningSegmentNumber].fillStyle = 'yellow';
//     theWheel.draw();
//     // theWheel.startAnimation();
// }
*/

var mybutton = document.getElementById('turn');

mybutton.onclick = function() {
    var stopAt = theWheel.getRandomForSegment(1);
    theWheel.animation.stopAngle = stopAt;
    theWheel.startAnimation();
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Bars and Pies   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var updateBarHelpInfo = function(a, b, c, d, barId, ourGroup, me, newLeader) {
    var x = a;
    var y = b;
    var z = c;
    var w = d;
    var myData = [x,y,z,w];
    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';

    var ourColor = ourGroup ? blue : lightblue;

    var colorArray = ['', '', '', ''];
    var colorWidth = [0, 0, 0, 0];
    if (me!==-1) {
        colorArray[me] = 'green';
        colorWidth[me] = 3;
    }
    if(newLeader!==-1) {
        colorArray[newLeader] = 'purple'
        colorWidth[newLeader] = 3;
    }

    var data = [
        {
            y: [x, y, z, w],
            x: [1, 2, 3, 4],
            // name: ['Follower 1 \n(New Leader)', 'Follower 2 \n(You)', 'Follower 3', 'Follower 4'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ourColor,
                line: {
                    color: colorArray,
                    width: colorWidth,
                }
            },
            text: [x , y, z, w],
            textposition: 'outside',
            textfont: {
                size: '14',
                color: colorArray,
            },
            cliponaxis: false,
            opacity: 1,
        }
    ];

    var layout = {
        barmode: 'group',
        height: 120,
        width: 100,
        margin: {"t": 20, "b": 0, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,100]
        },
        xaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
            // tickangle: -90,
        },
        bargap: 0.25,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateBarTotalHelpInfo = function(a, b, barId) {
    var x = a;
    var y = b;

    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';

    var data = [
        {
            y: [x, y],
            name: ['Group 1', 'Group 2'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: [blue, lightblue],
            },
            text: [x, y],
            textposition: 'outside',
            textfont: {
                size: '14'
            },
            cliponaxis: false,
            opacity: 1,
        }
    ];

    var layout = {
        barmode: 'group',
        height: 120,
        width: 100,
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
        bargap: 0.25,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateBarSaboInfo = function(a, b, c, d, barId, ourGroup, me, newLeader) {
    var x = -a;
    var y = -b;
    var z = -c;
    var w = -d;

    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';
    var ourColor = ourGroup ? red : lightred;

    var colorArray = ['', '', '', ''];
    var colorWidth = [0, 0, 0, 0];
    if (me!==-1) {
        colorArray[me] = 'green';
        colorWidth[me] = 3;
    }
    if(newLeader!==-1) {
        colorArray[newLeader] = 'purple'
        colorWidth[newLeader] = 3;
    }


    var data = [{
        y: [x, y, z, w],
        name: ['Follower 1', 'Follower 2', 'Follower 3', 'Follower 4'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        // hovertemplate: ['New Leader', '', 'You', ''],
        automargin: true,
        showlegend: false,
        marker:{
            color: ourColor,
            line: {
                color: colorArray,
                width: colorWidth,
            }
        },
        text: [a, b, c, d],
        textfont: {
            size: '14',
            color: colorArray,
        },
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 120,
        width: 100,
        margin: {"t": 0, "b": 20, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [-100,0]
        },
        xaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },
        bargap: 0.25,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateBarTotalSaboInfo = function(a, b, barId) {
    var x = -a;
    var y = -b;

    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';



    var data = [{
        y: [x, y],
        name: ['Group 1', 'Group 2'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [red, lightred],
            },
        text: [a, b],
        textfont: {
            size: '14',
        },
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 120,
        width: 100,
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
        bargap: 0.25,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updatePieInfo = function(a, barId, ourLeaderWon) {

    var x = a;
    var y = 1-a;

    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var ourText = ourLeaderWon ? ['Lost', 'Won'] : ['Won', 'Lost'];

    var data = [{
        values: [y, x],
        labels: ['Opposing Leader', 'Your Leader'],
        // textfont: {
        //     color: ['black', 'white'],
        // },
        textposition: "outside",
        text: ourText,
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(160, 160, 160)'],
        }
    }];

    var layout = {
        autosize: false,
        height: 200,
        width: 200,
        font:{
            size: 14
        },
        margin: {"t": 40, "b": 40, "l": 40, "r": 40},
        showlegend: false,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var upperBound = function(val, upperBound) {
    val = (val >= upperBound) ? upperBound : val;
    return val;
}

var lowerBound = function(val, lowerBound) {
    val = (val <= lowerBound) ? lowerBound : val;
    return val;
}

var logistic2 = function(val , k) {
    var L = 1;
    var m = 0.5;
    var result;
    result= L / (1 + Math.exp(-k * (val - m)));
    return result;
}

var updateEfficiencyBarInfo = function(efi1, efi2, barId) {

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

    var leader1 = {
        y: ['group 1'],
        x: [val1],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        fixedrange: true,
        cliponaxis: false,
        marker: {
            color: 'rgb(160, 160, 160)',
        },
        text: myText,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'white',
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
        fixedrange: true,
        cliponaxis: false,
        marker: {
            color: 'rgb(225, 225, 225)',
        },
        text: myText2,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            size: '14'
        },
    };

    var data = [leader1, leader2];

    var layout = {
        // title: "Relative Power",
        // titlefont: {
        //     size: 12,
        // },
        title:{
            text:  "Relative Power",
            size: 2,
            yref: 'paper',
            y: 0,
            yanchor: 'top',
        },
        barmode: 'stack',
        height: 60,
        width: 200,
        margin: {"t": 0, "b": 20, "l": 0, "r": 0},
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
            showline: false,
            showgrid: false,
            showticklabels: false,
        }

    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateBarEffortInfo = function(a, b, barId) {
    var x = a;
    var y = b;

    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';

    var data = [
        {
            y: [x, y],
            name: ['Your Leader', 'Opposing Leader'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ['rgb(160, 160, 160)', 'rgb(225, 225, 225)'],
            },
            text: [x, y],
            textposition: 'outside',
            textfont: {
                size: '14'
            },
            cliponaxis: false,
            opacity: 1,
        }
    ];

    var layout = {
        title: "Token's Invested",
        titlefont: {
            size: 16,
        },
        // title:{
        //     text:  "Token's Invested",
        //     size: 2,
        //     yref: 'paper',
        //     y: 1,
        //     yanchor: 'bottom',
        // },
        barmode: 'group',
        height: 120,
        width: 160,
        margin: {"t": 40, "b": 0, "l": 30, "r": 30},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,500],
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },
        xaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },
        bargap: 0.1,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS4Info = function(a,b,c,d, barId, winner, me) {

    var x = a;
    var y = b;
    var z = c;
    var w = d;

    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var textArray = ['', '', '', '']
    var colorArray = ['', '', '', ''];
    var colorWidth = [0, 0, 0, 0];
    var labelArray = ['Follower 1', 'Follower 2', 'Follower 3', 'Follower 4'];

    textArray[winner] = 'Winner';
    textArray[me] = 'You';

    colorArray[winner] = 'purple';
    colorArray[me] = 'green';

    colorWidth[winner] = 2;
    colorWidth[me] = 2;

    labelArray[me] = labelArray[me];
    labelArray[winner] = labelArray[winner];

    var data = [{
        values: [x, y, z, w],
        labels: labelArray,
        text: textArray,
        textposition: 'outside',
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(160, 160, 160)', 'rgb(100, 100, 100)', 'rgb(40, 40, 40)'],
            // colors: ['rgb(220, 220, 0)', 'rgb(80, 160, 160)', 'rgb(100, 0, 100)', 'rgb(80, 120, 40)'],
            line: {
                color: colorArray,
                width: colorWidth,
            }
        }
    }];

    var layout = {
        height: 200,
        width: 200,
        autosize:false,
        font:{
            size: 14
        },
        margin: {"t": 40, "b": 40, "l": 40, "r": 40},
        showlegend: false,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}



// Temporary data generation for testing
// Random switch
var onezero = function() {
    return (Math.random() >= 0.5) ? 1 : 0;
}
var sw = [onezero(), onezero(), onezero(), onezero()];
var osw = [onezero(), onezero(), onezero(), onezero()];
var d = {
    s2:
    {
        ourGroup:
        {
            help:
            {
                f1: sw[0] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f2: sw[1] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f3: sw[2] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f4: sw[3] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
            },
            sabo:
            {
                f1: sw[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f2: sw[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f3: sw[2] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f4: sw[3] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
            }
        },
        opposingGroup:
        {
            help:
            {
                f1: osw[0] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f2: osw[1] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f3: osw[2] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f4: osw[3] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
            },
            sabo:
            {
                f1: osw[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f2: osw[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f3: osw[2] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f4: osw[3] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
            }
        }
    },
    s3:
    {
        efo: parseFloat((Math.random()*500).toFixed(0)),
        oefo:  parseFloat((Math.random()*500).toFixed(0))
    },
    s4:
    {
        f1: parseFloat((Math.random()*400).toFixed(0)),
        f2: parseFloat((Math.random()*400).toFixed(0)),
        f3: parseFloat((Math.random()*400).toFixed(0)),
        f4: parseFloat((Math.random()*400).toFixed(0)),
    }
}


var info = {};

var data2Info = function() {
    info.s1 = d.s2.ourGroup.sabo.f1;
    info.s2 = d.s2.ourGroup.sabo.f2;
    info.s3 = d.s2.ourGroup.sabo.f3;
    info.s4 = d.s2.ourGroup.sabo.f4;
    info.h1 = d.s2.ourGroup.help.f1;
    info.h2 = d.s2.ourGroup.help.f2;
    info.h3 = d.s2.ourGroup.help.f3;
    info.h4 = d.s2.ourGroup.help.f4;
    info.os1 = d.s2.opposingGroup.sabo.f1;
    info.os2 = d.s2.opposingGroup.sabo.f2;
    info.os3 = d.s2.opposingGroup.sabo.f3;
    info.os4 = d.s2.opposingGroup.sabo.f4;
    info.oh1 = d.s2.opposingGroup.help.f1;
    info.oh2 = d.s2.opposingGroup.help.f2;
    info.oh3 = d.s2.opposingGroup.help.f3;
    info.oh4 = d.s2.opposingGroup.help.f4;
    info.efo = d.s3.efo;
    info.oefo = d.s3.oefo;
    info.e1 = d.s4.f1;
    info.e2 = d.s4.f2;
    info.e3 = d.s4.f3;
    info.e4 = d.s4.f4;
}

info.ts = function() {
    return (info.s1 + info.s2 + info.s3 + info.s4);
}
info.th = function() {
    return (info.h1 + info.h2 + info.h3 + info.h4);
}
info.ots = function() {
    return (info.os1 + info.os2 + info.os3 + info.os4);
}
info.oth = function() {
    return (info.oh1 + info.oh2 + info.oh3 + info.oh4);
}
info.efi = function() {
    return (1 + info.th()) / (1 + info.ts());
}
info.oefi = function() {
    return (1 + info.oth()) / (1 + info.ots());
}
info.pwin = function() {
    return (info.efo * info.efi()) / ((info.efo * info.efi()) + (info.oefo * info.oefi()) );
}


data2Info();

/*
me gets a number if you are follower 1 it gets follower 1 for instance
if we are drawing the opposing group then it should be set to -1
similarly newLeader gets a number if the new leader is follower 2
then it gets 2 again if there is no new leader in your group then
it shoult be set to 1
ourgroup is a boolean to determine the light or dark color scheme of the bars
*/
updateBarHelpInfo(info.h1, info.h2, info.h3, info.h4, 's2helpbarg1', true, 2, 0);
updateBarSaboInfo(info.s1, info.s2, info.s3, info.s4, 's2sabobarg1', true, 2, 0);

updateBarTotalHelpInfo(info.th(), info.oth(), 's2totalhelpbar');
updateBarTotalSaboInfo(info.ts(), info.ots(), 's2totalsabobar');

updateBarHelpInfo(info.oh1, info.oh2, info.oh3, info.oh4, 's2helpbarg2', false, -1, -1);
updateBarSaboInfo(info.os1, info.os2, info.os3, info.os4,'s2sabobarg2', false, -1, -1);

updatePieInfo(info.pwin(), 's3pie', false);
updateBarEffortInfo(info.efo, info.oefo, 's3efobar')
updateEfficiencyBarInfo(info.efi(), info.oefi(), 's3efibar');

updateS4Info(info.e1, info.e2, info.e3, info.e4, 's4pie', 1, 2);
