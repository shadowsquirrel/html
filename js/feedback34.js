////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Data Gemeratoion  //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Temporary data generation for testing
// Random switch
var onezero = function() {
    return (Math.random() >= 0.5) ? 1 : 0;
}
var sw = [onezero(), onezero(), onezero(), onezero()];
var osw = [onezero(), onezero(), onezero(), onezero()];
var bsw = [onezero(), onezero(), onezero(), onezero()];
var bosw = [onezero(), onezero(), onezero(), onezero()];
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
    },
    beliefs:
    {
        s2:
        {
            ourGroup:
            {
                help:
                {
                    f1: bsw[0] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                    f2: bsw[1] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                    f3: bsw[2] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                    f4: bsw[3] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                },
                sabo:
                {
                    f1: bsw[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                    f2: bsw[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                    f3: bsw[2] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                    f4: bsw[3] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                }
            },
            opposingGroup:
            {
                help:
                {
                    f1: bosw[0] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                    f2: bosw[1] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                    f3: bosw[2] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                    f4: bosw[3] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                },
                sabo:
                {
                    f1: bosw[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                    f2: bosw[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                    f3: bosw[2] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                    f4: bosw[3] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
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
}

var info = {};
info.beliefs = {};

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

    info.beliefs.s1 = d.beliefs.s2.ourGroup.sabo.f1;
    info.beliefs.s2 = d.beliefs.s2.ourGroup.sabo.f2;
    info.beliefs.s3 = d.beliefs.s2.ourGroup.sabo.f3;
    info.beliefs.s4 = d.beliefs.s2.ourGroup.sabo.f4;
    info.beliefs.h1 = d.beliefs.s2.ourGroup.help.f1;
    info.beliefs.h2 = d.beliefs.s2.ourGroup.help.f2;
    info.beliefs.h3 = d.beliefs.s2.ourGroup.help.f3;
    info.beliefs.h4 = d.beliefs.s2.ourGroup.help.f4;
    info.beliefs.os1 = d.beliefs.s2.opposingGroup.sabo.f1;
    info.beliefs.os2 = d.beliefs.s2.opposingGroup.sabo.f2;
    info.beliefs.os3 = d.beliefs.s2.opposingGroup.sabo.f3;
    info.beliefs.os4 = d.beliefs.s2.opposingGroup.sabo.f4;
    info.beliefs.oh1 = d.beliefs.s2.opposingGroup.help.f1;
    info.beliefs.oh2 = d.beliefs.s2.opposingGroup.help.f2;
    info.beliefs.oh3 = d.beliefs.s2.opposingGroup.help.f3;
    info.beliefs.oh4 = d.beliefs.s2.opposingGroup.help.f4;
    info.beliefs.efo = d.beliefs.s3.efo;
    info.beliefs.oefo = d.beliefs.s3.oefo;
    info.beliefs.e1 = d.beliefs.s4.f1;
    info.beliefs.e2 = d.beliefs.s4.f2;
    info.beliefs.e3 = d.beliefs.s4.f3;
    info.beliefs.e4 = d.beliefs.s4.f4;
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



info.beliefs.ts = function() {
    return (info.beliefs.s1 + info.beliefs.s2 + info.beliefs.s3 + info.beliefs.s4);
}
info.beliefs.th = function() {
    return (info.beliefs.h1 + info.beliefs.h2 + info.beliefs.h3 + info.beliefs.h4);
}
info.beliefs.ots = function() {
    return (info.beliefs.os1 + info.beliefs.os2 + info.beliefs.os3 + info.beliefs.os4);
}
info.beliefs.oth = function() {
    return (info.beliefs.oh1 + info.beliefs.oh2 + info.beliefs.oh3 + info.beliefs.oh4);
}
info.beliefs.efi = function() {
    return (1 + info.beliefs.th()) / (1 + info.beliefs.ts());
}
info.beliefs.oefi = function() {
    return (1 + info.beliefs.oth()) / (1 + info.beliefs.ots());
}
info.beliefs.pwin = function() {
    return (info.beliefs.efo * info.beliefs.efi()) / ((info.beliefs.efo * info.beliefs.efi()) + (info.beliefs.oefo * info.beliefs.oefi()) );
}

data2Info();


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Turning Wheel   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



var a = 100*info.pwin();
var b = 100-a;

let theWheel = new Winwheel({
    'canvasId': 'mywheel',
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

// var mybutton = document.getElementById('turn');
//
// mybutton.onclick = function() {
//     var stopAt = theWheel.getRandomForSegment(1);
//     theWheel.animation.stopAngle = stopAt;
//     theWheel.startAnimation();
// }

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Bars and Pies   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var updateHelpBar = function(a, b, c, d, barId, ourGroup, me, newLeader) {
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

var updateTotalHelpBar = function(a, b, barId, beliefSwitch, ba, bb) {
    var x = a;
    var y = b;
    if(beliefSwitch) {
        var bx = ba;
        var by = bb;
    }

    var lightblue = 'rgb(200,200,255)';//'rgb(235,255,200)'
    var blue = 'rgb(140, 140, 255)';//'rgb(235, 255, 140)'

    var actual =
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
    };

    if(beliefSwitch) {
        var belief =
        {
            y: [bx, by],
            name: ['Group 1', 'Group 2'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                // color: ['rgb(235, 255, 140)', 'rgb(235,255,200)'],
                // color: ['rgb(140, 160, 0)', 'rgb(205, 225, 0)'],
                color: [ 'rgb(255, 255, 0)', 'rgb(255, 255, 200)'],
                line: {
                    color: ['rgb(140, 140, 255)', 'rgb(200,200,255)'],
                    width: 3,
                }
            },
            text: [bx, by],
            textposition: 'outside',
            textfont: {
                size: '14'
            },
            cliponaxis: false,
            opacity: 1,
        };
    }



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
        bargroupgap: 0.01
    };
    var data = [actual];

    if(beliefSwitch) {
        data = [actual, belief];
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateSaboBar = function(a, b, c, d, barId, ourGroup, me, newLeader) {
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

var updateTotalSaboBar = function(a, b, barId, beliefSwitch, ba, bb) {
    var x = -a;
    var y = -b;

    if(beliefSwitch) {
        var bx = -ba;
        var by = -bb;
    }

    var lightred = 'rgb(255,200,200)';//'rgb(255,235,200)'
    var red = 'rgb(255, 140, 140)';//'rgb(255, 235, 140)'



    var actual =
    {
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
    };

    var belief =
    {
        y: [bx, by],
        name: ['Group 1', 'Group 2'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            // color: ['rgb(255, 235, 140)', 'rgb(255,235,200)'],
            // color: ['rgb(160, 160, 0)', 'rgb(225, 225, 0)'],
            color: [ 'rgb(255, 255, 0)', 'rgb(255, 255, 200)'],
            line: {
                color: ['rgb(255, 140, 140)', 'rgb(255,200,200)'],
                width: 3,
            }
        },
        text: [ba, bb],
        textfont: {
            size: '14',
        },
        textposition: 'outside',
        cliponaxis: false,
    };

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
        bargroupgap: 0.01
    };

    var data = [actual];
     if(beliefSwitch) {
         data = [actual, belief];
     }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updatePie = function(a, barId, ourLeaderWon, showBeliefs, ba) {

    var x = a;
    var y = 1-a;

    if(showBeliefs) {
        var bx = ba;
        var by = 1-ba;
    }


    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    // var ourText = ourLeaderWon ? ['Lost', 'Won'] : ['Won', 'Lost'];


    var actualData = {
        values: [y, x],
        labels: ['Opposing Leader', 'Your Leader'],
        // textfont: {
        //     color: ['black', 'white'],
        // },
        textposition: "outside",
        // text: ourText,
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(160, 160, 160)'],
        }
    };

    if(showBeliefs) {
        var beliefs = {
            values: [by, bx],
            labels: ['Opposing Leader<br>(beliefs)', 'Your Leader<br>(beliefs)'],
            textfont: {
                color: ['black', 'white'],
            },
            textposition: "inside",
            // text: ourText,
            type: 'pie',
            sort: false,
            hoverinfo: 'percent+label',
            automargin: true,
            marker:{
                colors: ['rgb(255, 255, 0)', 'rgb(190, 190, 0)'],
            },
            domain: {
                x: [0.15, 0.85],
                y: [0.15, 0.85]
            },
            opacity:0.7,
        }
    }


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

    var data;

    if(showBeliefs) {
        data = [actualData, beliefs];
    } else {
        data = [actualData];
    }

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

var updateEfficiencyBar = function(efi1, efi2, barId, beliefSwitch, befi1, befi2) {

    var val1 = efi1 / (efi1 + efi2);
    var val2 = efi2 / (efi1 + efi2);

    // console.log(val1 + ', ' + val2);

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


    if(beliefSwitch) {
        var bval1 = befi1 / (befi1 + befi2);
        var bval2 = befi2 / (befi1 + befi2);

        if((befi1 / befi2) > 1){
            var bmyText = (bval1 >= 0.99) ? '100+' : (befi1 / befi2).toFixed(2);
        } else {
            bmyText = 1;
        }

        if((befi1 / befi2) < 1){
            var bmyText2 = (bval2 >= 0.99) ? '100+' : (befi2 / befi1).toFixed(2);
        } else {
            bmyText2 = 1;
        }

        bval1 = logistic2(bval1, 5);
        bval2 = 1 - bval1;

        // console.log(bval1 + ', ' + bval2);
    }

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

    if(beliefSwitch) {
        var bleader1 = {
            y: ['group 2'],
            x: [bval1],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            fixedrange: true,
            cliponaxis: false,
            marker: {
                color: 'rgb(190, 190, 0)',
            },
            text: bmyText,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                color: 'white',
                size: '14'
            },
        };

        var bleader2 = {
            y: ['group 2'],
            x: [bval2],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            fixedrange: true,
            cliponaxis: false,
            marker: {
                color: 'rgb(255, 255, 0)',
            },
            text: bmyText2,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                size: '14'
            },
        };
    }

    var myHeight = 60;

    if(beliefSwitch) {
        myHeight = 100;
    }

    var data = [leader1, leader2];
    if(beliefSwitch) {
        data = [bleader1, bleader2, leader1, leader2];
    }


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
        height: myHeight,//60
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
        },
        // bargap: 0,

    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateEffortBar = function(efo, oefo, barId, beliefSwitch, befo, boefo) {

    var x = efo;
    var y = oefo;

    if(beliefSwitch) {
        var bx = befo;
        var by = boefo;
    }

    var actual = {
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
        };
        if(beliefSwitch) {
            var belief =    {
                    y: [bx, by],
                    name: ['Your Leader', 'Opposing Leader'],
                    type: 'bar',
                    sort: false,
                    hoverinfo: 'none',
                    automargin: true,
                    showlegend: false,
                    marker:{
                        color: ['rgb(190, 190, 0)', 'rgb(255, 255, 0)'],
                    },
                    text: [bx, by],
                    textposition: 'outside',
                    textfont: {
                        size: '14'
                    },
                    cliponaxis: false,
                    opacity: 1,
                };
        }

        var myWidth = 160;
        // if(beliefSwitch) {
        //     myWidth = 280;
        // }

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
        width: myWidth,
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

    var data = [actual];

    if(beliefSwitch) {
        data = [actual, belief];
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS4Pie = function(a,b,c,d, barId, winner, me) {

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


var beliefButton = document.getElementById('beliefbutton');

var update = function(beliefSwitch) {
    updateHelpBar(info.h1, info.h2, info.h3, info.h4, 'helpbarg1', true, 2, 0);
    updateSaboBar(info.s1, info.s2, info.s3, info.s4, 'sabobarg1', true, 2, 0);

    updateTotalHelpBar(info.th(), info.oth(), 'helpbartotal', beliefSwitch, info.beliefs.th(), info.beliefs.oth());
    updateTotalSaboBar(info.ts(), info.ots(), 'sabobartotal', beliefSwitch, info.beliefs.ts(), info.beliefs.ots());

    updateHelpBar(info.oh1, info.oh2, info.oh3, info.oh4, 'helpbarg2', false, -1, -1);
    updateSaboBar(info.os1, info.os2, info.os3, info.os4,'sabobarg2', false, -1, -1);

    updatePie(info.pwin(), 's3actualpie', false, beliefSwitch, info.beliefs.pwin());
    updateEffortBar(info.efo, info.oefo, 's3effortbeliefbars', beliefSwitch, info.beliefs.efo, info.beliefs.oefo);
    updateEfficiencyBar(info.efi(), info.oefi(), 's3actualefficiencybar', beliefSwitch, info.beliefs.efi(), info.beliefs.oefi());
}


update(false);

var bbSwitch = 1;
beliefButton.onclick = function() {
    var on = bbSwitch ? true : false;
    update(on)
    bbSwitch = 1 - bbSwitch;
}
/*
me gets a number if you are follower 1 it gets follower 1 for instance
if we are drawing the opposing group then it should be set to -1
similarly newLeader gets a number if the new leader is follower 2
then it gets 2 again if there is no new leader in your group then
it shoult be set to 1
ourgroup is a boolean to determine the light or dark color scheme of the bars
*/


// STAGE 2


// ACTUAL DECISION
// updateHelpBar(info.h1, info.h2, info.h3, info.h4, 'helpbarg1', true, 2, 0);
// updateSaboBar(info.s1, info.s2, info.s3, info.s4, 'sabobarg1', true, 2, 0);
//
// updateTotalHelpBar(info.th(), info.oth(), 'helpbartotal');
// updateTotalSaboBar(info.ts(), info.ots(), 'sabobartotal');
//
// updateHelpBar(info.oh1, info.oh2, info.oh3, info.oh4, 'helpbarg2', false, -1, -1);
// updateSaboBar(info.os1, info.os2, info.os3, info.os4,'sabobarg2', false, -1, -1);

// BELIEFS

//Your Group
// updateTotalHelpBar(info.th(), info.oth(), 'avghelpbeliefbarg1');
// updateTotalSaboBar(info.ts(), info.ots(), 'avgsabobeliefbarg1');
//Opposing Group
// updateTotalHelpBar(info.th(), info.oth(), 'avghelpbeliefbarg2');
// updateTotalSaboBar(info.ts(), info.ots(), 'avgsabobeliefbarg2');

// updatePie(info.pwin(), 's3actualpie', false, true, info.beliefs.pwin());
// updateActualPie(info.pwin(), 's3beliefpie', false);
// updateEffortBar(info.efo, info.oefo, 's3effortbeliefbars');
// updateActualEfficiencyBar(info.efi(), info.oefi(), 's3actualefficiencybar');
// updateActualEfficiencyBar(info.efi(), info.oefi(), 's3beliefefficiencybar');
//
// updateS4(info.e1, info.e2, info.e3, info.e4, 's4pie', 1, 2);
