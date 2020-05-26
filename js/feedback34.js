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

var generateS4winner = function() {
    var temp = [false, false, false, false];
    var index = Math.ceil(Math.random() * 4) - 1;
    temp[index] = true;
    return temp;
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
        oefo:  parseFloat((Math.random()*500).toFixed(0)),
        yourLeaderWon: false,
    },
    s4:
    {
        f1: parseFloat((Math.random()*400).toFixed(0)),
        f2: parseFloat((Math.random()*400).toFixed(0)),
        f3: parseFloat((Math.random()*400).toFixed(0)),
        f4: parseFloat((Math.random()*400).toFixed(0)),
        hasWon: generateS4winner(), //will be an array!
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
    'numSegments': 2,
    'outerRadius': 85, // controls the size of the theWheel
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
        'duration' : 10,
        'spins'    : 50,
        // Remember to do something after the animation has finished specify callback function.
        'callbackFinished' : 'next()',
    }
});

var pf1, pf2, pf3, pf4;
var tot = info.e1 + info.e2 + info.e3 + info.e4;
pf1 = 100 * info.e1 / tot;
pf2 = 100 * info.e2 / tot;
pf3 = 100 * info.e3 / tot;
pf4 = 100 * info.e4 / tot;

let theWheel2 = new Winwheel({
    'canvasId': 'mywheel2',
    'numSegments': 4,
    'outerRadius': 85, // controls the size of the theWheel
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
            'fillStyle' : 'rgb(225, 225, 225)',
            'textFillStyle': 'black',
            'text'      : '',
            'size'      : winwheelPercentToDegrees(pf1),
                },
        {
            'fillStyle' : 'rgb(160, 160, 160)',
            'textFillStyle': 'black',
            'text'      : '',
            'size'      : winwheelPercentToDegrees(pf2),
        },
        {
            'fillStyle' : 'rgb(100, 100, 100)',
            'textFillStyle': 'white',
            'text'      : '',
            'size'      : winwheelPercentToDegrees(pf3),
        },
        {
            'fillStyle' : 'rgb(40, 40, 40)',
            'textFillStyle': 'white',
            'text'      : '',
            'size'      : winwheelPercentToDegrees(pf4),
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
        'duration' : 10,
        'spins'    : 50,
        // Remember to do something after the animation has finished specify callback function.
        'callbackFinished' : 'showresults2()',
    }
});


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Bars and Pies   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var beliefMargin = function(actual, belief) {
    var sign = (actual > belief) ? '-' : '+';
    var diff = Math.abs(actual - belief)
    // var percentDiff = ((diff / actual) * 100).toFixed(0);
    return (sign+diff);
}

var updateHelpBar = function(a, b, c, d, barId, ourGroup, me, beliefSwitch, ba, bb, bc, bd) {
    var x = a;
    var y = b;
    var z = c;
    var w = d;

    var myOpacity = 1;//[1, 1, 1, 1];
    var myText = [a, b, c, d];

    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';
    var ourColor = ourGroup ? blue : lightblue;

    var colorArray = ['', '', '', ''];
    var colorWidth = [0, 0, 0, 0];
    if (me!==-1) {
        colorArray[me] = 'lightgreen';
        colorWidth[me] = 2;
    }

    if(beliefSwitch) {

        if(ourGroup) {
            var beliefData = [ba, bb, bc];
            beliefData.splice(me, 0, 0);
            var beliefText = [ba, bb, bc];
            beliefText.splice(me, 0, '');
            var temp = myText[me];
            myText = ['', '', ''];
            myText.splice(me, 0, temp);
            myOpacity = 0.5;//[0.45, 0.45, 0.45];
            //myOpacity.splice(me, 0, 1);
        } else {
            beliefData = [ba, bb, bc, bd];
            beliefText = [ba, bb, bc, bd];
            myText = ['', '', '', ''];
            myOpacity = 0.5;//[0.45, 0.45, 0.45, 0.45];
        }
    }



    var actual =
    {
        y: [x, y, z, w],
        x: [1, 2, 3, 4],
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
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14',
            color: colorArray,
        },
        cliponaxis: false,
        opacity: myOpacity,
    }

    if(beliefSwitch) {
        var belief =
        {
            y: beliefData,
            x: [1.15, 2.15, 3.15, 4.15],
            width:0.6,

            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ourGroup ? 'black' : 'yellow',
                // line: {
                //     // color: ['rgb(140, 140, 255)', 'rgb(200,200,255)'],
                //     color: ourGroup ? 'rgb(140, 140, 255)' : 'rgb(200,200,255)',
                //     width: 2,
                // }
            },
            text: beliefText,
            // text: beliefData,
            textposition: 'outside',
            textfont: {
                size: '14',
                color:'black',
            },
            cliponaxis: false,
            opacity: 0.7,
        };
    }


    var layout = {
        barmode: 'overlay',
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
        },
        bargap: 0.2,
        bargroupgap:0,
    };

    var data = [actual];

    if(beliefSwitch) {
        data = [actual, belief];
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateTotalHelpBar = function(a, b, barId, beliefSwitch, ba, bb) {
    var x = a;
    var y = b;
    var myOpacity = 1;
    var myText = [x, y];
    if(beliefSwitch) {
        var bx = ba;
        var by = bb;
        myText = ['', ''];
        myOpacity = 0.5;
    }

    var lightblue = 'rgb(200,200,255)';//'rgb(235,255,200)'
    var blue = 'rgb(140, 140, 255)';//'rgb(235, 255, 140)'

    var actual =
    {
        y: [x, y],
        x:[1,2],
        // name: ['Group 1', 'Group 2'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [blue, lightblue],
        },
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14'
        },
        cliponaxis: false,
        opacity: myOpacity,
    };

    if(beliefSwitch) {
        var belief =
        {
            y: [bx, by],
            x:[1.15, 2.15],
            width:0.7,
            // name: ['Group 1', 'Group 2'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                // color: ['rgb(235, 255, 140)', 'rgb(235,255,200)'],
                // color: ['rgb(140, 160, 0)', 'rgb(205, 225, 0)'],
                // color: [ 'rgb(255, 255, 0)', 'rgb(255, 255, 200)'],
                color: ['black', 'yellow'],
                // line: {
                //     color: ['rgb(140, 140, 255)', 'rgb(200,200,255)'],
                //     width: 2,
                // }
            },
            text: [bx, by],
            textposition: 'outside',
            textfont: {
                size: '14'
            },
            cliponaxis: false,
            opacity: 0.7,
        };
    }

// console.log(beliefMargin(x,bx)+', ' +beliefMargin(y,by));

    var layout = {
        barmode: 'overlay',
        height: 120,
        width: 120,
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
        bargap: 0.3,
        // bargroupgap: 0
    };
    var data = [actual];

    if(beliefSwitch) {
        data = [actual, belief];
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateSaboBar = function(a, b, c, d, barId, ourGroup, me, beliefSwitch, ba, bb, bc, bd) {
    var x = -a;
    var y = -b;
    var z = -c;
    var w = -d;

    var myOpacity = 1;//[1, 1, 1, 1];
    var myText = [a, b, c, d];

    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';
    var ourColor = ourGroup ? red : lightred;

    var colorArray = ['', '', '', ''];
    var colorWidth = [0, 0, 0, 0];
    if (me!==-1) {
        colorArray[me] = 'lightgreen';
        colorWidth[me] = 2;
    }


    if(beliefSwitch) {
        if(ourGroup) {
            var beliefData = [-ba, -bb, -bc];
            beliefData.splice(me, 0, 0);
            var beliefText = [ba, bb, bc];
            beliefText.splice(me, 0, '');
            var temp = myText[me];
            myText = ['', '', ''];
            myText.splice(me, 0, temp);
            myOpacity = 0.5;//[0.45, 0.45, 0.45];
            //myOpacity.splice(me, 0, 1);

        } else {
            beliefData = [-ba, -bb, -bc, -bd];
            beliefText = [ba, bb, bc, bd];
            myText = ['', '', '', ''];
            myOpacity = 0.5;//[0.45, 0.45, 0.45, 0.45];
        }
    }


    var actual =
    {
        y: [x, y, z, w],
        x: [1, 2, 3, 4],
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
        text: myText,
        textfont: {
            size: '14',
            color: colorArray,
        },
        textposition: 'outside',
        cliponaxis: false,
        opacity: myOpacity,
    };

    if(beliefSwitch) {
        var belief =
        {
            y: beliefData,
            x: [1.15, 2.15, 3.15, 4.15],
            width:0.6,
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ourGroup ? 'black' : 'yellow',
                // line: {
                //     // color: ['rgb(255, 140, 140)', 'rgb(255,200,200)'],
                //     color: ourGroup ? 'rgb(255, 140, 140)' : 'rgb(255,200,200)',
                //     width: 2,
                // }
            },
            text: beliefText,
            textposition: 'outside',
            textfont: {
                // size: '14',
                color:'black',
            },
            cliponaxis: false,
            opacity: 0.7,
        }
    }


    var layout = {
        barmode: 'overlay',
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
        bargap: 0.2,
        // bargroupgap:0,
    };

    var data = [actual];
    if(beliefSwitch) {
        data = [actual, belief];
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateTotalSaboBar = function(a, b, barId, beliefSwitch, ba, bb) {
    var x = -a;
    var y = -b;
    var myOpacity = 1;
    var myText = [a, b];

    if(beliefSwitch) {
        var bx = -ba;
        var by = -bb;
        myOpacity = 0.5;
        myText = ['', ''];
    }



    var lightred = 'rgb(255,200,200)';//'rgb(255,235,200)'
    var red = 'rgb(255, 140, 140)';//'rgb(255, 235, 140)'



    var actual =
    {
        y: [x, y],
        x: [1, 2],
        // name: ['Group 1', 'Group 2'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [red, lightred],

        },
        text: myText,
        textfont: {
            size: '14',
        },
        textposition: 'outside',
        cliponaxis: false,
        opacity: myOpacity,
    };

    var belief =
    {
        y: [bx, by],
        x: [1.15, 2.15],
        width: 0.7,
        // name: ['Group 1', 'Group 2'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            // color: ['rgb(255, 235, 140)', 'rgb(255,235,200)'],
            // color: ['rgb(160, 160, 0)', 'rgb(225, 225, 0)'],
            // color: [ 'rgb(255, 255, 0)', 'rgb(255, 255, 200)'],
            color: ['black', 'rgb(255, 255, 0)'],
            // line: {
            //     color: ['rgb(255, 140, 140)', 'rgb(255,200,200)'],
            //     width: 2,
            // }
        },
        text: [ba, bb],
        textfont: {
            size: '14',
        },
        textposition: 'outside',
        cliponaxis: false,
        opacity:0.7,
    };

    var layout = {
        barmode: 'overlay',
        height: 120,
        width: 120,
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
        bargap: 0.3,
        // bargroupgap: 0
    };

    var data = [actual];
     if(beliefSwitch) {
         data = [actual, belief];
     }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updatePie = function(a, barId, showBeliefs, ba) {

    var x = a;
    var y = 1-a;
    var actualOpacity = 1;


    if(showBeliefs) {
        var bx = ba;
        var by = 1-ba;
        var beliefOpacity = 0.85;
        actualOpacity = 0.65;
    }


    if((x + y) === 0) {
        x = 1;
        y = 1;
    }


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
        opacity:actualOpacity,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(160, 160, 160)'],
            line: {
                color: 'black',
                width: 1,
            }
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
                // colors: ['rgb(255, 255, 0)', 'rgb(190, 190, 0)'],
                colors: ['rgb(255, 255, 0)', 'black'],
                line: {
                    color: 'black',
                    width: 1,
                }
            },
            domain: {
                x: [0.15, 0.85],
                y: [0.15, 0.85]
            },
            opacity:beliefOpacity,
        }
    }


    var layout = {
        autosize: false,
        title: 'Probability to Win',
        "titlefont": {
            "size": 14,
        },
        height: 250,//200,
        width: 250,//200,
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
                // color: 'rgb(190, 190, 0)',
                color: 'black',
            },
            text: bmyText,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                color: 'white',
                size: '14'
            },
            opacity: 0.7,
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
            opacity: 0.7,
        };
    }

    var myHeight = 48//60;

    if(beliefSwitch) {
        myHeight = 80//60;
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
        bargap: 0.05,

    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateEffortBar = function(efo, oefo, barId, beliefSwitch, befo, boefo) {

    var x = efo;
    var y = oefo;
    var myOpacity=1;
    var myText = [x,y];

    if(beliefSwitch) {
        var bx = befo;
        var by = boefo;
        myOpacity = 0.7;
        myText = ['', ''];
    }

    var actual = {
            y: [x, y],
            x: [1,2],
            name: ['Your Leader', 'Opposing Leader'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ['rgb(160, 160, 160)', 'rgb(225, 225, 225)'],
            },
            text: myText,
            textposition: 'outside',
            textfont: {
                size: '14'
            },
            cliponaxis: false,
            opacity: myOpacity,
        };
        if(beliefSwitch) {
            var belief =    {
                    y: [bx, by],
                    x: [1.15, 2.15],
                    width: 0.7,
                    name: ['Your Leader', 'Opposing Leader'],
                    type: 'bar',
                    sort: false,
                    hoverinfo: 'none',
                    automargin: true,
                    showlegend: false,
                    marker:{
                        // color: ['rgb(190, 190, 0)', 'rgb(255, 255, 0)'],
                        color: ['black', 'rgb(255, 255, 0)'],
                    },
                    text: [bx, by],
                    textposition: 'outside',
                    textfont: {
                        size: '14'
                    },
                    cliponaxis: false,
                    opacity: 0.7,
                };
        }

        var myWidth = 220;//160;
        // if(beliefSwitch) {
        //     myWidth = 280;
        // }

    var layout = {
        title: "Token's Invested",
        titlefont: {
            size: 14,
        },
        // title:{
        //     text:  "Token's Invested",
        //     size: 2,
        //     yref: 'paper',
        //     y: 1,
        //     yanchor: 'bottom',
        // },
        barmode: 'overlay',
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
        bargap: 0.25,
    };

    var data = [actual];

    if(beliefSwitch) {
        data = [actual, belief];
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS4Pie = function(a,b,c,d, barId, me, showBeliefs, ba, bb, bc) {

    var x = a;
    var y = b;
    var z = c;
    var w = d;
    var actualData = [x, y, z, w];
    var actualOpacity = 1;

    if(showBeliefs) {
        var bx = ba;
        var by = bb;
        var bz = bc;
        var beliefOpacity = 0.85;
        actualOpacity = 0.65;
        var beliefData = [bx, by, bz];
        beliefData.splice(me, 0, actualData[me]);
    }

    if((x + y + z + w) === 0) {
        x = 1;
        y = 1;
        z = 1;
        w = 1;
    }

    var textArray = ['', '', '', '']
    var colorArray = ['black', 'black', 'black', 'black'];
    var colorWidth = [1, 1, 1, 1];
    var labelArray = ['Follower 1', 'Follower 2', 'Follower 3', 'Follower 4'];


    textArray[me] = 'You';
    colorArray[me] = 'lightgreen';
    colorWidth[me] = 3;


    var actual =
    {
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
            line: {
                color: colorArray,
                width: colorWidth,
            }
        },
        opacity: actualOpacity,
    };

    var belief =
    {
        values: beliefData,
        labels: labelArray,
        text: textArray,
        textposition: 'inside',
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: ['rgb(225, 225, 0)', 'rgb(160, 160, 0)', 'rgb(100, 100, 0)', 'rgb(40, 40, 0)'],
            line: {
                color: colorArray,
                width: colorWidth,
            }
        },
        domain: {
            x: [0.15, 0.85],
            y: [0.15, 0.85]
        },
        opacity:beliefOpacity,
    };



    var layout = {
        autosize: false,
        title: 'Probability to Win',
        "titlefont": {
            "size": 14,
        },
        height: 310,//200,
        width: 250,//200,
        font:{
            size: 14
        },
        margin: {"t": 40, "b": 40, "l": 40, "r": 40},
        showlegend: false,
    };

    var data;

    if(showBeliefs) {
        data = [actual, belief];
    } else {
        data = [actual];
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS4EffortBar = function(a,b,c,d, barId, me, showBeliefs, ba, bb, bc) {

    var x = a;
    var y = b;
    var z = c;
    var w = d;
    var actualData = [x, y, z, w];
    var myText = [x, y, z, w];
    var temp = myText[me];
    var myOpacity = 1;
    var actualColors = ['rgb(225, 225, 225)', 'rgb(160, 160, 160)', 'rgb(100, 100, 100)', 'rgb(40, 40, 40)'];
    var beliefColors = ['rgb(225, 225, 0)', 'rgb(160, 160, 0)', 'rgb(100, 100, 0)', 'rgb(40, 40, 0)'];
    var actualXPosition = [1, 2, 3, 4];
    var beliefXPosition = [1.15, 2.15, 3.15, 4.15];

    var colorArray = ['', '', '', ''];
    var colorWidth = [0, 0, 0, 0];
    colorArray[me] = 'lightgreen';
    colorWidth[me] = 3;

    if(showBeliefs) {
        var bx = ba;
        var by = bb;
        var bz = bc;
        var beliefData = [bx, by, bz];
        beliefData.splice(me, 0, actualData[me]);
        myOpacity = 0.5;
        myText = ['', '', ''];
        myText.splice(me, 0, temp);
        beliefColors.splice(me, 1, actualColors[me]);
        beliefXPosition.splice(me, 1, actualXPosition[me]);
    }

    var actual = {
            y: actualData,
            x: actualXPosition,
            // name: ['Your Leader', 'Opposing Leader'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: actualColors,
                line: {
                    color: colorArray,
                    width: colorWidth,
                }
            },
            text: myText,
            textposition: 'outside',
            textfont: {
                size: '14'
            },
            cliponaxis: false,
            opacity: myOpacity,
        };
        if(showBeliefs) {
            var belief =    {
                    y: beliefData,
                    x: beliefXPosition,
                    width: 0.8,
                    // name: ['Your Leader', 'Opposing Leader'],
                    type: 'bar',
                    sort: false,
                    hoverinfo: 'none',
                    automargin: true,
                    showlegend: false,
                    marker:{
                        color: beliefColors,
                        line: {
                            color: colorArray,
                            width: colorWidth,
                        }
                    },
                    text: beliefData,
                    textposition: 'outside',
                    textfont: {
                        size: '14'
                    },
                    cliponaxis: false,
                    opacity: 0.7,
                };
        }

        var myWidth = 380;//160;
        // if(showBeliefs) {
        //     myWidth = 280;
        // }

    var layout = {
        title: "Token's Invested",
        titlefont: {
            size: 14,
        },
        // title:{
        //     text:  "Token's Invested",
        //     size: 2,
        //     yref: 'paper',
        //     y: 1,
        //     yanchor: 'bottom',
        // },
        barmode: 'overlay',
        height: 220,
        width: myWidth,
        margin: {"t": 40, "b": 0, "l": 30, "r": 30},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,400],
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
        // bargap: 0.1,
        // bargroupgap: 0.5,

    };

    var data = [actual];

    if(showBeliefs) {
        data = [actual, belief];
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS4EfficiencyBar = function(barId, beliefSwitch) {


    var f1 = {
        y: ['group 1'],
        x: [1],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        fixedrange: true,
        cliponaxis: false,
        marker: {
            color: 'rgb(40, 40, 40)',
        },
        text: 1,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'white',
            size: '14'
        },
    };

    var f2 = {
        y: ['group 1'],
        x: [1],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        fixedrange: true,
        cliponaxis: false,
        marker: {
            color: 'rgb(100, 100, 100)',
        },
        text: 1,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            size: '14'
        },
    };

    var f3 = {
        y: ['group 1'],
        x: [1],
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
        text: 1,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'white',
            size: '14'
        },
    };

    var f4 = {
        y: ['group 1'],
        x: [1],
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
        text: 1,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            size: '14'
        },
    };

    if(beliefSwitch) {
        var bf1 = {
            y: ['group 2'],
            x: [1],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            fixedrange: true,
            cliponaxis: false,
            marker: {
                color: 'rgb(40, 40, 0)',
            },
            text: 1,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                color: 'white',
                size: '14'
            },
        };

        var bf2 = {
            y: ['group 2'],
            x: [1],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            fixedrange: true,
            cliponaxis: false,
            marker: {
                color: 'rgb(100, 100, 0)',
            },
            text: 1,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                size: '14'
            },
        };

        var bf3 = {
            y: ['group 2'],
            x: [1],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            fixedrange: true,
            cliponaxis: false,
            marker: {
                color: 'rgb(160, 160, 0)',
            },
            text: 1,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                color: 'white',
                size: '14'
            },
        };

        var bf4 = {
            y: ['group 2'],
            x: [1],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            fixedrange: true,
            cliponaxis: false,
            marker: {
                color: 'rgb(225, 225, 0)',
            },
            text: 1,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                size: '14'
            },
        };
    }

    var myHeight = 48//60;

    if(beliefSwitch) {
        myHeight = 80//60;
    }

    var data = [f4, f3, f2, f1];
    if(beliefSwitch) {
        data = [bf4, bf3, bf2, bf1, f4, f3, f2, f1];
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
        width: 320,
        margin: {"t": 0, "b": 20, "l": 0, "r": 0},
        xaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,4],
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
        bargap: 0.05,

    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}


var beliefButton = document.getElementById('beliefbutton');
var beliefButton2 = document.getElementById('beliefbutton2');

var update = function(beliefSwitch) {
    updateHelpBar(info.h1, info.h2, info.h3, info.h4, 'helpbarg1', true, 2, beliefSwitch, info.beliefs.h1, info.beliefs.h2, info.beliefs.h3);
    updateSaboBar(info.s1, info.s2, info.s3, info.s4, 'sabobarg1', true, 2, beliefSwitch, info.beliefs.s1, info.beliefs.s2, info.beliefs.s3);

    updateTotalHelpBar(info.th(), info.oth(), 'helpbartotal', beliefSwitch, info.beliefs.th(), info.beliefs.oth());
    updateTotalSaboBar(info.ts(), info.ots(), 'sabobartotal', beliefSwitch, info.beliefs.ts(), info.beliefs.ots());

    /*
    me gets a number if you are follower 1 it gets follower 1 for instance
    if we are drawing the opposing group then it should be set to -1
    similarly newLeader gets a number if the new leader is follower 2
    then it gets 2 again if there is no new leader in your group then
    it shoult be set to 1
    ourgroup is a boolean to determine the light or dark color scheme of the bars
    */
    updateHelpBar(info.oh1, info.oh2, info.oh3, info.oh4, 'helpbarg2', false, -1, beliefSwitch, info.beliefs.oh1, info.beliefs.oh2, info.beliefs.oh3, info.beliefs.oh4);
    updateSaboBar(info.os1, info.os2, info.os3, info.os4,'sabobarg2', false, -1, beliefSwitch, info.beliefs.os1, info.beliefs.os2, info.beliefs.os3, info.beliefs.os4);

    updatePie(info.pwin(), 's3pie', beliefSwitch, info.beliefs.pwin());
    updateEffortBar(info.efo, info.oefo, 's3effortbars', beliefSwitch, info.beliefs.efo, info.beliefs.oefo);
    updateEfficiencyBar(info.efi(), info.oefi(), 's3efficiencybar', beliefSwitch, info.beliefs.efi(), info.beliefs.oefi());

    var resultIndex = d.s3.yourLeaderWon ? 1 : 2;
    var stopAt = theWheel.getRandomForSegment(resultIndex);
    theWheel.animation.stopAngle = stopAt;
    theWheel.startAnimation();
}

update(false);

/*
var showBeliefs = function() {
    update(true);
    document.getElementById("belieflegend").style.opacity = 1;
    document.getElementById('belieflegend').style.maxHeight = '100%';
    document.getElementById("s3subtexts").style.opacity = 1;
    document.getElementById('s3subtexts').style.maxHeight = '100%';
}

var hideBeliefs = function() {
    update(false);
    document.getElementById("belieflegend").style.opacity = 0;
    document.getElementById('belieflegend').style.maxHeight = '0px';
    document.getElementById("s3subtexts").style.opacity = 0;
    document.getElementById('s3subtexts').style.maxHeight = '0px';

    document.getElementById("beliefbutton").style.opacity = 1;
}
*/


var bbSwitch = 1;
beliefButton.onclick = function() {
    var on1 = bbSwitch ? true : false;
    var o = on1 ? 1 : 0;
    var h = on1 ? '100%' : '0px';
    update(on1);

    document.getElementById("belieflegend").style.opacity = o;
    document.getElementById('belieflegend').style.maxHeight = h;

    bbSwitch = 1 - bbSwitch;
}

var bbSwitch2 = 1;
beliefButton2.onclick = function() {
    var on2 = bbSwitch2 ? true : false;
    var o = on2 ? 1 : 0;
    var h = on2 ? '100%' : '0px';
    update2(on2);

    document.getElementById("belieflegend").style.opacity = o;
    document.getElementById('belieflegend').style.maxHeight = h;

    bbSwitch2 = 1 - bbSwitch2;
}

var showResults = function() {
    var display = document.getElementById('resulttext');
    display.innerHTML = d.s3.yourLeaderWon ? 'Your Leader Won.' : 'Your Leader lost. \nPlease scroll down for Stage 4 results.';

}

var displayStage4 = function() {
    document.getElementById('secondpartwrap').style.opacity = 1;
    document.getElementById('secondpartwrap').style.position = 'static';
    update2(false);
    var resultIndex2 = d.s4.hasWon.indexOf(true);
    var stopAt2 = theWheel2.getRandomForSegment((resultIndex2+1));
    theWheel2.animation.stopAngle = stopAt2;
    theWheel2.startAnimation();
}

var update2= function(beliefSwitch) {
    updateS4Pie(info.e1, info.e2, info.e3, info.e4, 's4pie', 2, beliefSwitch, info.beliefs.e1, info.beliefs.e2, info.beliefs.e3)
    updateS4EffortBar(info.e1, info.e2, info.e3, info.e4, 's4effortbars', 2, beliefSwitch, info.beliefs.e1, info.beliefs.e2, info.beliefs.e3)
    updateS4EfficiencyBar('s4efficiencybar', beliefSwitch);
}

var next = function() {
    showStage4 = true;
    showResults();
    setTimeout("displayStage4()", 1000);
}

var showresults2 = function() {
    var resultIndex2 = d.s4.hasWon.indexOf(true) + 1;
    var display = document.getElementById('resulttext2');
    display.innerHTML = 'Follower ' + resultIndex2 + ' won and is the new leader of the group.';
}
