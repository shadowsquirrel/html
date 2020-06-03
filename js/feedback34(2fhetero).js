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

var generateMeStrong = function() {
    return (Math.random() > 0.5) ? true : false;
}

var generateS4winner = function() {
    var temp = [false, false, false, false];
    var index = Math.ceil(Math.random() * 2) - 1;
    temp[index] = true;
    return temp;
}

var generateMe = function() {
    return Math.ceil(Math.random() * 2) - 1;
}

var tempMe = generateMe();
var sw = [onezero(), onezero()];
var osw = [onezero(), onezero()];
var bsw = [onezero(), onezero()];
var bosw = [onezero(), onezero()];

var d = {
    meStrong: generateMeStrong(),
    me: tempMe,
    s2:
    {
        ourGroup:
        {
            help:
            {
                f1: sw[0] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f2: sw[1] ? 0 : parseFloat((Math.random()*100).toFixed(0)),

            },
            sabo:
            {
                f1: sw[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f2: sw[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,

            }
        },
        opposingGroup:
        {
            help:
            {
                f1: osw[0] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f2: osw[1] ? 0 : parseFloat((Math.random()*100).toFixed(0)),

            },
            sabo:
            {
                f1: osw[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f2: osw[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,

            }
        }
    },
    s3:
    {
        efo: parseFloat((Math.random()*500).toFixed(0)),
        oefo:  parseFloat((Math.random()*500).toFixed(0)),
        yourLeaderWon: false, //(Math.random() > 0.5) ? true : false,
    },
    s4:
    {
        f1: parseFloat((Math.random()*400).toFixed(0)),
        f2: parseFloat((Math.random()*400).toFixed(0)),

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

                },
                sabo:
                {
                    f1: bsw[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                    f2: bsw[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,

                }
            },
            opposingGroup:
            {
                help:
                {
                    f1: bosw[0] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                    f2: bosw[1] ? 0 : parseFloat((Math.random()*100).toFixed(0)),

                },
                sabo:
                {
                    f1: bosw[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                    f2: bosw[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,

                }
            }
        },
        s3:
        {
            efo: parseFloat((Math.random()*500).toFixed(0)),
            oefo:  parseFloat((Math.random()*500).toFixed(0)),
        },
        s4:
        {
            f1: parseFloat((Math.random()*400).toFixed(0)),
            f2: parseFloat((Math.random()*400).toFixed(0)),

        }
    }
}

var info = {};
info.beliefs = {};

var data2Info = function() {
    info.meStrong = d.meStrong,
    info.me = d.me;
    info.s1 = d.s2.ourGroup.sabo.f1;
    info.s2 = d.s2.ourGroup.sabo.f2;

    info.h1 = d.s2.ourGroup.help.f1;
    info.h2 = d.s2.ourGroup.help.f2;

    info.sarray = [info.s1, info.s2];
    info.harray = [info.h1, info.h2];
    info.os1 = d.s2.opposingGroup.sabo.f1;
    info.os2 = d.s2.opposingGroup.sabo.f2;

    info.oh1 = d.s2.opposingGroup.help.f1;
    info.oh2 = d.s2.opposingGroup.help.f2;

    info.efo = d.s3.efo;
    info.oefo = d.s3.oefo;
    info.e1 = d.s4.f1;
    info.e2 = d.s4.f2;

    info.earray = [info.e1, info.e2];

    info.beliefs.s1 = d.beliefs.s2.ourGroup.sabo.f1;
    info.beliefs.s2 = d.beliefs.s2.ourGroup.sabo.f2;

    info.beliefs.h1 = d.beliefs.s2.ourGroup.help.f1;
    info.beliefs.h2 = d.beliefs.s2.ourGroup.help.f2;

    info.beliefs.os1 = d.beliefs.s2.opposingGroup.sabo.f1;
    info.beliefs.os2 = d.beliefs.s2.opposingGroup.sabo.f2;

    info.beliefs.oh1 = d.beliefs.s2.opposingGroup.help.f1;
    info.beliefs.oh2 = d.beliefs.s2.opposingGroup.help.f2;

    info.beliefs.efo = d.beliefs.s3.efo;
    info.beliefs.oefo = d.beliefs.s3.oefo;
    info.beliefs.e1 = d.beliefs.s4.f1;
    info.beliefs.e2 = d.beliefs.s4.f2;

}

info.ts = function() {
    return (info.s1 + info.s2);
}
info.th = function() {
    return (info.h1 + info.h2);
}
info.ots = function() {
    return (info.os1 + info.os2);
}
info.oth = function() {
    return (info.oh1 + info.oh2);
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
    return (info.beliefs.s1 + info.beliefs.s2);
}
info.beliefs.th = function() {
    return (info.beliefs.h1 + info.beliefs.h2);
}
info.beliefs.ots = function() {
    return (info.beliefs.os1 + info.beliefs.os2);
}
info.beliefs.oth = function() {
    return (info.beliefs.oh1 + info.beliefs.oh2);
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
        'duration' : 3,
        'spins'    : 30,
        'callbackFinished' : 'next()',
    }
});

var pf1, pf2;
var ee1, ee2;

ee1 = info.meStrong ? (3 * info.earray[info.me]) : (info.earray[info.me] / 3);
var oIndex = (info.me === 1) ? 0 : 1;
ee2 = info.earray[oIndex];

var tot = ee1 + ee2;
pf1 = 100 * ee1 / tot;
pf2 = 100 * ee2 / tot;


let theWheel2 = new Winwheel({
    'canvasId': 'mywheel2',
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
            'fillStyle' : 'rgb(225, 225, 225)',
            'textFillStyle': 'black',
            'text'      : '',
            'size'      : winwheelPercentToDegrees(pf1),
        },
        {
            'fillStyle' : 'rgb(140, 140, 140)',
            'textFillStyle': 'white',
            'text'      : '',
            'size'      : winwheelPercentToDegrees(pf2),
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
        'callbackFinished' : 'showResults2()',
    }
});


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Bars and Pies   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var nzt = function(val) {
    return (val != 0) ? val : '';
}

var beliefMargin = function(actual, belief) {
    var sign = (actual > belief) ? '-' : '+';
    var diff = Math.abs(actual - belief)
    return (sign+diff);
}

var updateHelpBar = function(a, b, barId, ourGroup, me, beliefSwitch, ba, bb) {

    var x = a;
    var y = b;


    var myOpacity = 1;//[1, 1, 1, 1];
    var myText = [nzt(a), nzt(b)];

    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';
    var ourColor = ourGroup ? blue : lightblue;

    var colorArray = ['', ''];
    var colorWidth = [0, 0];
    if (me!==-1) {
        colorArray[me] = 'green';
        colorWidth[me] = 2;
    }

    if(beliefSwitch) {
        if(ourGroup) {
            var beliefData = [ba];
            beliefData.splice(me, 0, 0);
            var beliefText = [nzt(ba)];
            beliefText.splice(me, 0, '');
            var temp = myText[me];
            myText = [''];
            myText.splice(me, 0, temp);
            myOpacity = 1;//[0.45, 0.45, 0.45];
            //myOpacity.splice(me, 0, 1);
        } else {
            beliefData = [ba, bb];
            beliefText = [nzt(ba), nzt(bb)];
            myText = ['', ''];
            myOpacity = 1;//[0.45, 0.45, 0.45, 0.45];
        }
    }

    var actual =  {
        y: [x, y],
        x: [1, 2],
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
        var belief = {
            y: beliefData,
            x: [1.15, 2.15],
            width:0.6,
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ourGroup ? 'rgb(60, 60, 60)' : 'yellow',
            },
            text: beliefText,
            textposition: 'outside',
            textfont: {
                size: '14',
                color:'black',
            },
            cliponaxis: false,
            opacity: 1,
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
    var myText = [nzt(x), nzt(y)];

    if(beliefSwitch) {
        var bx = ba;
        var by = bb;
        myText = ['', ''];
        myOpacity = 1;
    }

    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';

    var actual = {
        y: [x, y],
        x:[1,2],
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
        var belief = {
            y: [bx, by],
            x:[1.15, 2.15],
            width:0.7,
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ['rgb(60, 60, 60)', 'yellow'],
                line: {
                    color: [blue, lightblue],
                    width: 1,
                }
            },
            text: [nzt(bx), nzt(by)],
            textposition: 'outside',
            textfont: {
                size: '14'
            },
            cliponaxis: false,
            opacity: 1,
        };
    }

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

var updateSaboBar = function(a, b, barId, ourGroup, me, beliefSwitch, ba, bb) {

    var x = -a;
    var y = -b;

    var myBargap = 0.2;

    var myOpacity = 1;//[1, 1, 1, 1];
    var myText = [nzt(a), nzt(b)];

    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';
    var ourColor = ourGroup ? red : lightred;

    var colorArray = ['', ''];
    var colorWidth = [0, 0];
    if (me!==-1) {
        colorArray[me] = 'green';
        colorWidth[me] = 2;
    }

    if(beliefSwitch) {
        myBargap = 0.2;
        if(ourGroup) {
            var beliefData = [-ba];
            beliefData.splice(me, 0, 0);
            var beliefText = [nzt(ba)];
            beliefText.splice(me, 0, '');
            var temp = myText[me];
            myText = [''];
            myText.splice(me, 0, temp);
            myOpacity = 1;//[0.45, 0.45, 0.45];
            //myOpacity.splice(me, 0, 1);

        } else {
            beliefData = [-ba, -bb];
            beliefText = [nzt(ba), nzt(bb)];
            myText = ['', ''];
            myOpacity = 1;//[0.45, 0.45, 0.45, 0.45];
        }
    }

    var actual = {
        y: [x, y],
        x: [1, 2],
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
        var belief = {
            y: beliefData,
            x: [1.15, 2.15],
            width:0.6,
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ourGroup ? 'rgb(60, 60, 60)' : 'yellow',
            },
            text: beliefText,
            textposition: 'outside',
            textfont: {
                // size: '14',
                color:'black',
            },
            cliponaxis: false,
            opacity: 1,
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
        bargap: myBargap,
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
    var myText = [nzt(a), nzt(b)];

    if(beliefSwitch) {
        var bx = -ba;
        var by = -bb;
        myOpacity = 1;
        myText = ['', ''];
    }


    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255, 140, 140)';

    var actual = {
        y: [x, y],
        x: [1, 2],
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

    var belief = {
        y: [bx, by],
        x: [1.15, 2.15],
        width: 0.7,
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(60, 60, 60)', 'rgb(255, 255, 0)'],
            line: {
                color: [red, lightred],
                width: 1,
            }
        },
        text: [nzt(ba), nzt(bb)],
        textfont: {
            size: '14',
        },
        textposition: 'outside',
        cliponaxis: false,
        opacity:1,
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
        var beliefOpacity = 1;
        actualOpacity = 1;
    }

    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var actualData = {
        values: [y, x],
        labels: ['Opposing Leader', 'Your Leader'],
        textposition: "outside",
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
            type: 'pie',
            sort: false,
            hoverinfo: 'percent+label',
            automargin: true,
            marker:{
                colors: ['rgb(255, 255, 0)', 'rgb(60, 60, 60)'],
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
                color: 'rgb(60, 60, 60)',
            },
            text: bmyText,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                color: 'white',
                size: '14'
            },
            opacity: 1,
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
            opacity: 1,
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
        myOpacity = 1;
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
        var belief = {
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
                color: ['rgb(60, 60, 60)', 'rgb(255, 255, 0)'],
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

    var myWidth = 220;

    var layout = {
        title: "Token's Invested",
        titlefont: {
            size: 14,
        },
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

var move2First = function(array, me) {
    var temp = array[me];
    array.splice(me, 1);
    array.splice(0, 0, temp);
    return array;
}

var move2Last = function(array, me) {
    var temp = array[me];
    array.splice(me, 1);
    array.splice(array.length, 0, temp);
    return array;
}

var updateS4Pie = function(a, b, barId, me, showBeliefs, ba, meStrong) {

    var x = a;
    var y = b;
    var actualOpacity = 1;


    var actualData = [x, y];
    actualData[me] = meStrong ? (actualData[me] * 3) : (actualData[me] / 3)

    var actualColors = ['rgb(225, 225, 225)', 'rgb(140, 140, 140)'];
    var beliefColors = ['rgb(255, 255, 0)', 'rgb(160, 160, 0)'];
    var labelArray = ['Follower 1', 'Follower 2'];
    var beliefTextColor = (me===0) ? ['black', 'white'] : ['white', 'black'];

    if(showBeliefs) {
        var bx = ba;
        var beliefOpacity = 1;
        actualOpacity = 1;
        var beliefData = [bx];
        beliefData.splice(me, 0, actualData[me]);
        beliefColors.splice(me, 1, actualColors[me]);

        beliefData = move2First(beliefData, me);
        beliefColors = move2First(beliefColors, me);
    }

    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var textArray = ['', '']
    var colorArray = ['black', 'black'];
    var colorWidth = [1, 1];


    textArray[me] = 'You';
    colorArray[me] = 'lightgreen';
    colorWidth[me] = 3;

    actualData = move2First(actualData, me);
    actualColors = move2First(actualColors, me);
    labelArray = move2First(labelArray, me);
    textArray = move2First(textArray, me);
    colorArray = move2First(colorArray, me);
    colorWidth = move2First(colorWidth, me);

    var actual = {
        values: actualData,//[x, y, z, w],
        labels: labelArray,
        text: textArray,
        textposition: 'outside',
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: actualColors,
            line: {
                color: colorArray,
                width: colorWidth,
            }
        },
        opacity: actualOpacity,
    };

    var belief = {
        values: beliefData,
        labels: labelArray,
        text: textArray,
        textfont: {
            color: beliefTextColor,
        },
        textposition: 'inside',
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: beliefColors,
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

var updateS4EffortBar = function(a, b, barId, me, showBeliefs, ba) {

    var x = a;
    var y = b;
    var actualData = [x, y];
    var myText = [x, y];
    var temp = myText[me];
    var myOpacity = 1;


    var actualColors = ['rgb(225, 225, 225)', 'rgb(140, 140, 140)'];
    var beliefColors = ['rgb(255, 255, 0)', 'rgb(160, 160, 0)'];
    var actualXPosition = [1, 2];
    var beliefXPosition = [1.15, 2.15];
    var myWidth = 200;

    var colorArray = ['', ''];
    var colorWidth = [0, 0];
    colorArray[me] = 'lightgreen';
    colorWidth[me] = 3;

    if(me===0) {
        actualColors.reverse();
        actualData.reverse();
        myText.reverse();
        colorArray.reverse();
        colorWidth.reverse();
    }


    if(showBeliefs) {
        myWidth = 200;
        myOpacity = 0.6;
        var bx = ba;

        var beliefData = [bx, actualData[1]];
        myText = ['', actualData[1]];
        if(me===0){
            beliefColors = ['rgb(160, 160, 0)', 'rgb(225, 225, 225)'];
        } else {
            beliefColors = ['rgb(255, 255, 0)', 'rgb(140, 140, 140)'];
        }

        beliefXPosition = [1.15, 2];

        // var beliefData = [bx];
        // beliefData.splice(me, 0, actualData[me]);
        // myText = [''];
        // myText.splice(me, 0, temp);
        // beliefColors.splice(me, 1, actualColors[me]);
        // beliefXPosition.splice(me, 1, actualXPosition[me]);
    }






    var actual = {
        y: actualData,
        x: actualXPosition,
        // width: 1,
        myname: ['f1', 'f2'],
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
            width: [0.6, 0.8], //0.8 is the same size as actual
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
            opacity: 0.9,
        };
    }



    var layout = {
        title: "Token's Invested",
        titlefont: {
            size: 14,
        },
        barmode: 'overlay',
        height: 200,
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
        // bargap: 0.2,
        // bargroupgap: 0.5,
    };

    var data = [actual];

    if(showBeliefs) {
        data = [actual, belief];
    }

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS4EfficiencyBar = function(barId, beliefSwitch, me, meStrong) {
    console.log('yoyoyoyoy->' + meStrong);
    var myx, ox;
    myx = meStrong ? 3 : 1;
    ox = meStrong ? 1 : 3;

    var actualColors, beliefColors, textColors, strength;

    if(me===1) {
        actualColors = ['rgb(140, 140, 140)', 'rgb(225, 225, 225)'];
        beliefColors = ['rgb(140, 140, 140)', 'rgb(255, 255, 0)'];
        textColors = ['white', 'black'];
    } else {
        actualColors = ['rgb(225, 225, 225)', 'rgb(140, 140, 140)'];
        beliefColors = ['rgb(225, 225, 225)', 'rgb(160, 160, 0)'];
        textColors = ['black', 'white'];
    }

    var f1 = {
        y: ['group 1'],
        x: [myx],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        fixedrange: true,
        cliponaxis: false,
        marker: {
            color: actualColors[0],
        },
        text: myx,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: textColors[0],
            size: '12'
        },
    };


    var f4 = {
        y: ['group 1'],
        x: [ox],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        fixedrange: true,
        cliponaxis: false,
        marker: {
            color: actualColors[1],
        },
        text: ox,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: textColors[1],
            size: '12'
        },
    };

    if(beliefSwitch) {
        var bf1 = {
            y: ['group 2'],
            x: [myx],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            fixedrange: true,
            cliponaxis: false,
            marker: {
                color: beliefColors[0],
            },
            text: myx,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                color: textColors[0],
                size: '12'
            },
        };

        var bf4 = {
            y: ['group 2'],
            x: [ox],
            type: 'bar',
            orientation: 'h',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            fixedrange: true,
            cliponaxis: false,
            marker: {
                color: beliefColors[1],
            },
            text: ox,
            textposition: 'inside',
            insidetextanchor: 'middle',
            textfont: {
                color: textColors[1],
                size: '12'
            },
        };
    }

    var myHeight = 45;//48//60;

    if(beliefSwitch) {
        myHeight = 70;//80//60;
    }

    var data = [f4, f1];
    if(beliefSwitch) {
        data = [bf4, bf1, f4, f1];
    }


    var layout = {
        title:{
            text:  "Relative Power",
            size: 2,
            yref: 'paper',
            y: 0,
            yanchor: 'top',
        },
        barmode: 'stack',
        height: myHeight,//60
        width: 180,
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




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    CALLING THE FUNCTIONS   ////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// STAGE 2 AND 3 GRAPHICS AND ANIMATION
var animationCounter = 0;
var update = function(beliefSwitch) {
    console.log('we are inside update1?');
    updateHelpBar(info.h1, info.h2, 'helpbarg1', true, info.me, beliefSwitch, info.beliefs.h1);
    updateSaboBar(info.s1, info.s2, 'sabobarg1', true, info.me, beliefSwitch, info.beliefs.s1);

    updateTotalHelpBar(info.th(), info.oth(), 'helpbartotal', beliefSwitch, info.beliefs.th(), info.beliefs.oth());
    updateTotalSaboBar(info.ts(), info.ots(), 'sabobartotal', beliefSwitch, info.beliefs.ts(), info.beliefs.ots());

    // for opposing group me variable gets -1 to signal that there is no me
    updateHelpBar(info.oh1, info.oh2, 'helpbarg2', false, -1, beliefSwitch, info.beliefs.oh1, info.beliefs.oh2);
    updateSaboBar(info.os1, info.os2, 'sabobarg2', false, -1, beliefSwitch, info.beliefs.os1, info.beliefs.os2);

    updatePie(info.pwin(), 's3pie', beliefSwitch, info.beliefs.pwin());
    updateEffortBar(info.efo, info.oefo, 's3effortbars', beliefSwitch, info.beliefs.efo, info.beliefs.oefo);
    updateEfficiencyBar(info.efi(), info.oefi(), 's3efficiencybar', beliefSwitch, info.beliefs.efi(), info.beliefs.oefi());

    if(animationCounter===0) {
        var resultIndex = d.s3.yourLeaderWon ? 1 : 2;
        var stopAt = theWheel.getRandomForSegment(resultIndex);
        theWheel.animation.stopAngle = stopAt;
        theWheel.startAnimation();
        animationCounter = 1 + animationCounter;
    }

}



//BELIEF BUTTON
var beliefButton = document.getElementById('beliefbutton');
var bbSwitch = 1;
beliefButton.onclick = function() {
    var showBeliefs3 = bbSwitch ? true : false;
    var o = showBeliefs3 ? 1 : 0;
    var h = showBeliefs3 ? '100%' : '0px';
    update(showBeliefs3);
    update2(showBeliefs3);

    document.getElementById("belieflegend").style.opacity = o;
    document.getElementById('belieflegend').style.maxHeight = h;
    document.getElementById('hidewrap').style.opacity = o;
    bbSwitch = 1 - bbSwitch;
}

// Depending on whether your leader wins or not changes
// updated from the begining based on the passed data
// if your leader won, proceed to Stage 4
var showStage4 = !d.s3.yourLeaderWon;

// Called by the stage 3 wheel once it stops
var next = function() {
    showResults();
    if(showStage4) {
        setTimeout("displayStage4()", 2000);
    }
}


// EXPLAINS THE STAGE 3 RESULTS IN TEXT
var showResults = function() {
    var display = document.getElementById('s3shortresult');
    var shortResult = d.s3.yourLeaderWon ? 'Your Leader Won.' : 'Your Leader Lost.';
    display.innerHTML = shortResult;
    setTimeout('showResultsDelayed1()', 1000);
}

var showResultsDelayed1 = function() {
        var largeDisplay = document.getElementById('resulttext');
        var winScenario = 'Your leader maintains her '
        + 'leadership position. <br> You and other followers continue their role as '
        + 'followers and proceed to Stage 5.';

        var loseScenario = 'Your Leader lost her '
        + 'leadership position. <br> Proceeding to Stage 4 Followers\' Contest '
        + 'to determine the new leader of your group.';
        largeDisplay.innerHTML = d.s3.yourLeaderWon ? winScenario : loseScenario;

        if(d.s3.yourLeaderWon) {
            setTimeout('showResultsDelayed2()', 1000);
        }
}

var showResultsDelayed2 = function() {
    var displayPayoff = document.getElementById('s3s4payoffinfohwrap2');
    displayPayoff.style.opacity = 1;
    displayPayoff.style.position = 'static';
    var s2Payoff = document.getElementById('stage2cost2');
    var totalPayoff = document.getElementById('totalcost2');
    s2Payoff.innerHTML = info.sarray[d.me] + info.harray[d.me];
    totalPayoff.innerHTML = info.sarray[d.me] + info.harray[d.me];
}

var displayStage4 = function() {
    document.getElementById('secondpartwrap').style.opacity = 1;
    document.getElementById('secondpartwrap').style.position = 'static';

    // Show decisions made (beliefs are hidden)
    update2(false);
    updatePayoffs();
    // If Beliefs are displayed, turn it off to sync belief displays of both sections
    update(false);
    // $(document).scrollTop($('.s4static').height());
    $('html, body').animate({
        scrollTop: $('.s4static').height()
    }, 1000);

    // $('html, body').animate("$(document).scrollTop($('.s4static').height())", 1000);

    // Identify the new leader based on the info passed through emit
    var resultIndex2 = d.s4.hasWon.indexOf(true);

    //Wheel of Fortune animation 2
    var stopAt2 = theWheel2.getRandomForSegment((resultIndex2+1));
    theWheel2.animation.stopAngle = stopAt2;
    theWheel2.startAnimation();
}

var update2= function(beliefSwitch2) {
    updateS4Pie(info.e1, info.e2, 's4pie', info.me, beliefSwitch2, info.beliefs.e1, info.meStrong)
    updateS4EffortBar(info.e1, info.e2, 's4effortbars', info.me, beliefSwitch2, info.beliefs.e1)
    updateS4EfficiencyBar('s4efficiencybar', beliefSwitch2, info.me, info.meStrong);
}


var updatePayoffs = function() {
    var s2c = document.getElementById('stage2cost');
    var s4c = document.getElementById('stage4cost');
    var tc = document.getElementById('totalcost');
    s2c.innerHTML = info.sarray[d.me] + info.harray[d.me];
    s4c.innerHTML = info.earray[d.me];
    tc.innerHTML = info.sarray[d.me] + info.harray[d.me] + info.earray[d.me];
}

var showResults2 = function() {
    var resultIndex2 = d.s4.hasWon.indexOf(true) + 1;
    var display = document.getElementById('s4shortresult');
    var largeDisplay = document.getElementById('resulttext2');
    // console.log(info.me);
    // console.log(d.s4.hasWon.indexOf(true));
    if(info.me === d.s4.hasWon.indexOf(true)) {
        var shortResultText = 'You won!';
        var resultText = 'You are the new leader of your group! <br>'
        + 'Other followers and your former leader will proceed to Stage 5 '
        + 'to determine how much to help or sabotage you.  <br>'
        + 'You will proceed to Stage 6 for the second Leaders\' Contest '
        + 'and wait for Stage 5 decisions to be made. <br> <br> <br>';
    } else {
        shortResultText = 'Follower ' + resultIndex2 + ' won.';
        resultText = 'Follower ' + resultIndex2 + ' '
        + 'is the new leader of your group. <br>'
        + 'Your former leader, you and the other followers will proceed to Stage 5 '
        + 'to determine how much to help or sabotage your new leader.  <br>'
        + 'Your new leader (' + 'Follower ' + resultIndex2 + ') will proceed to '
        + 'Stage 6 for the second Leaders\' Contest '
        + 'and wait for Stage 5 decisions to be made. <br> <br> <br>';
    }
    display.innerHTML = shortResultText;
    largeDisplay.innerHTML = resultText;
    // $(document).scrollTop($('.resulttext2').scrollTop());
    // $(document).scrollTop($('.s4static').height());
    // $('html, body').animate({
    //     scrollTop: $('.resulttext2').get(0).scrollHeight()
    // }, 1000);

    // $('html, body').animate("$(document).scrollTop($('.resulttext2').height())", 1000);


    $('html, body').animate({
        scrollTop: $(document).height()
    }, 2000);
}



//INITIATION
// false represent not showing the beliefs we start without them
// can be turned on by the beliefs button defined below
update(false);


// FOR DEBUGGING
setTimeout('showResults()', 250);
setTimeout('displayStage4()', 500);
setTimeout('showResults2()', 750);
