////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////    Data Gemeratoion  //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 This html is only for followers. This includes leader who became a follower
 and followers who stayed followers. So at stage 6 if your new role is leader
 then you will be seing a slightly different page.
*/

// Temporary data generation for testing
// Random switch
var onezero = function() {
    return (Math.random() >= 0.5) ? 1 : 0;
}

// 1 for leader 0 for follower
var generateRole = function() {
    return (Math.random() > 0.50) ? 1 : 0;
}



var generateMe = function() {
    return Math.ceil(Math.random() * 2) - 1;
}

var tempMe = generateMe();
var myRole = generateRole()

//The scenario where the follower stayed as follower
var generateS4winner = function() {
    var temp = [false, false];
    var index = Math.ceil(Math.random() * 2) - 1;
    while(tempMe === index) {
        index = Math.ceil(Math.random() * 2) - 1;
    }

    temp[index] = true;

    return temp;
}


var sw = [onezero(), onezero()];
var osw = [onezero(), onezero()];
var bsw = [onezero(), onezero()];
var bosw = [onezero(), onezero()];
var sw2 = [onezero(), onezero()];
var osw2 = [onezero(), onezero()];

// Under s3 we force the winner this shold be s5 and s6 but doesn't matter for now
// This htm is built with the assumption that only followers will see it
// Thus we have the initial assumption that all players here are followers
// So as long as we established their initial role we are fine.
var d = {
    role: myRole,
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

            },

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

            },

        }
    },
    s3:
    {
        efo: parseFloat((Math.random()*500).toFixed(0)),
        oefo:  parseFloat((Math.random()*500).toFixed(0)),
        //If you were initially the leader then we force the case you stay as a leader
        //If you were initially a follower then we force the case where your leader lost in stage 3
        //and you won in stage 4.
        yourLeaderWon: (myRole===1) ? true : false//((myRole===1) ? false : ((Math.random() > 0.5) ? true : false)),
    },
    s4:
    {
        f1: parseFloat((Math.random()*400).toFixed(0)),
        f2: parseFloat((Math.random()*400).toFixed(0)),

        hasWon: generateS4winner(), //will be an array!

        of1: parseFloat((Math.random()*400).toFixed(0)),
        of2: parseFloat((Math.random()*400).toFixed(0)),

        ohasWon: generateS4winner(), //will be an array!
    },
    s5:
    {
        ourGroup:
        {
            help:
            {
                f1: sw2[0] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f2: sw2[1] ? 0 : parseFloat((Math.random()*100).toFixed(0)),

            },
            sabo:
            {
                f1: sw2[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f2: sw2[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,

            },

        },
        opposingGroup:
        {
            help:
            {
                f1: osw2[0] ? 0 : parseFloat((Math.random()*100).toFixed(0)),
                f2: osw2[1] ? 0 : parseFloat((Math.random()*100).toFixed(0)),

            },
            sabo:
            {
                f1: osw2[0] ? parseFloat((Math.random()*100).toFixed(0)) : 0,
                f2: osw2[1] ? parseFloat((Math.random()*100).toFixed(0)) : 0,

            },

        }
    },
    s6:
    {
        efo: parseFloat((Math.random()*500).toFixed(0)),
        oefo:  parseFloat((Math.random()*500).toFixed(0)),
        yourLeaderWon: (Math.random() > 0.5) ? true : false,
    },
    beliefs:
    {
        s5:
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
        s6:
        {
            efo: parseFloat((Math.random()*500).toFixed(0)),
            oefo:  parseFloat((Math.random()*500).toFixed(0)),
            yourLeaderWon: (Math.random() > 0.5) ? true : false,
        },
    }
}
d.s2.ourGroup.cost = {
    f1: d.s2.ourGroup.help.f1 + d.s2.ourGroup.sabo.f1,
    f2: d.s2.ourGroup.help.f2 + d.s2.ourGroup.sabo.f2,

}
var yo = d.s2.ourGroup.cost;
var s2CostArray = [-yo.f1, -yo.f2];

d.s2.opposingGroup.cost = {
    f1: d.s2.opposingGroup.help.f1 + d.s2.opposingGroup.sabo.f1,
    f2: d.s2.opposingGroup.help.f2 + d.s2.opposingGroup.sabo.f2,

}
yo = d.s2.opposingGroup.cost;
var os2CostArray = [-yo.f1, -yo.f2];

d.s3.cost = {
    myNet: d.s3.yourLeaderWon ? (1000 - d.s3.efo) : (-d.s3.efo),
    oNet: -d.s3.oefo + (d.s3.yourLeaderWon ? 0 : 1000)
}
console.log(d.s3.cost.myNet);
console.log(d.s3.cost.oNet);

d.s5.ourGroup.cost = {
    f1: d.s5.ourGroup.help.f1 + d.s5.ourGroup.sabo.f1,
    f2: d.s5.ourGroup.help.f2 + d.s5.ourGroup.sabo.f2,

}
yo = d.s5.ourGroup.cost;
var s5CostArray = [-yo.f1, -yo.f2];

d.s5.opposingGroup.cost = {
    f1: d.s5.opposingGroup.help.f1 + d.s5.opposingGroup.sabo.f1,
    f2: d.s5.opposingGroup.help.f2 + d.s5.opposingGroup.sabo.f2,

}
yo = d.s5.opposingGroup.cost;
var os5CostArray = [-yo.f1, -yo.f2];

d.s6.cost = {
    myNet: d.s6.yourLeaderWon ? (1000 - d.s6.efo) : (-d.s6.efo),
    oNet: -d.s6.oefo + (d.s6.yourLeaderWon ? 0 : 1000)
}
console.log(d.s6.cost.myNet);
console.log(d.s6.cost.oNet);


var info = {};
info.beliefs = {};

var data2Info = function() {
    info.me = d.me;
    info.role = d.role;

    // STAGE 2
    info.s1 = d.s2.ourGroup.sabo.f1;
    info.s2 = d.s2.ourGroup.sabo.f2;

    info.h1 = d.s2.ourGroup.help.f1;
    info.h2 = d.s2.ourGroup.help.f2;

    info.sarray = [info.s1, info.s2];
    info.harray = [info.h1, info.h2];

    info.c1 = d.s2.ourGroup.cost.f1;
    info.c2 = d.s2.ourGroup.cost.f2;

    info.tc = info.c1 + info.c2;


    info.os1 = d.s2.opposingGroup.sabo.f1;
    info.os2 = d.s2.opposingGroup.sabo.f2;

    info.oh1 = d.s2.opposingGroup.help.f1;
    info.oh2 = d.s2.opposingGroup.help.f2;


    info.oc1 = d.s2.opposingGroup.cost.f1;
    info.oc2 = d.s2.opposingGroup.cost.f2;

    info.otc = info.oc1 + info.oc2;


    // STAGE 3
    info.efo = d.s3.efo;
    info.oefo = d.s3.oefo;
    info.myNet = d.s3.cost.myNet;
    info.oNet = d.s3.cost.oNet;
    info.s3won = d.s3.yourLeaderWon;



    // STAGE 4
    info.e1 = d.s4.f1;
    info.e2 = d.s4.f2;

    info.earray = [info.e1, info.e2];

    info.oe1 = d.s4.of1;
    info.oe2 = d.s4.of2;

    info.oearray = [info.oe1, info.oe2];
    //If you are initially leader in order to stay as a leader you must
    // have won stage 3 thus stage 4 is irrelevant any value goes.
    // but if you are initially a follower then in order to be a leader at this
    // point i.e. feedback stage 6 means your leader lost in stage 3 and you
    // won in stage 4. And these are the only two way a subject will see this htm
    info.s4winner = (myRole===1) ? d.s4.hasWon.indexOf(true) : tempMe;
    info.os4winner = d.s4.ohasWon.indexOf(true);


    // STAGE 5
    info.s1_2 = d.s5.ourGroup.sabo.f1;
    info.s2_2 = d.s5.ourGroup.sabo.f2;

    info.h1_2 = d.s5.ourGroup.help.f1;
    info.h2_2 = d.s5.ourGroup.help.f2;

    info.sarray_2 = [info.s1_2, info.s2_2];
    info.harray_2 = [info.h1_2, info.h2_2];

    info.c1_2 = d.s5.ourGroup.cost.f1;
    info.c2_2 = d.s5.ourGroup.cost.f2;

    info.tc_2 = info.c1_2 + info.c2_2;

    info.os1_2 = d.s5.opposingGroup.sabo.f1;
    info.os2_2 = d.s5.opposingGroup.sabo.f2;

    info.oh1_2 = d.s5.opposingGroup.help.f1;
    info.oh2_2 = d.s5.opposingGroup.help.f2;


    info.oc1_2 = d.s5.opposingGroup.cost.f1;
    info.oc2_2 = d.s5.opposingGroup.cost.f2;

    info.otc_2 = info.oc1_2 + info.oc2_2;


    // STAGE 6
    info.efo_2 = d.s6.efo;
    info.oefo_2 = d.s6.oefo;
    info.myNet_2 = d.s6.cost.myNet;
    info.oNet_2 = d.s6.cost.oNet;
    info.s6won = d.s6.yourLeaderWon;

    // TOTAL


    // BELIEFS
    info.beliefs.s1 = d.beliefs.s5.ourGroup.sabo.f1;
    info.beliefs.s2 = d.beliefs.s5.ourGroup.sabo.f2;

    info.beliefs.h1 = d.beliefs.s5.ourGroup.help.f1;
    info.beliefs.h2 = d.beliefs.s5.ourGroup.help.f2;

    info.beliefs.os1 = d.beliefs.s5.opposingGroup.sabo.f1;
    info.beliefs.os2 = d.beliefs.s5.opposingGroup.sabo.f2;

    info.beliefs.oh1 = d.beliefs.s5.opposingGroup.help.f1;
    info.beliefs.oh2 = d.beliefs.s5.opposingGroup.help.f2;

    info.beliefs.efo = d.beliefs.s6.efo;
    info.beliefs.oefo = d.beliefs.s6.oefo;

}




// For stages 2 and 3
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


// for stages 5 and 6
info.ts_2 = function() {
    return (info.s1_2 + info.s2_2);
}
info.th_2 = function() {
    return (info.h1_2 + info.h2_2);
}
info.ots_2 = function() {
    return (info.os1_2 + info.os2_2);
}
info.oth_2 = function() {
    return (info.oh1_2 + info.oh2_2);
}
info.efi_2 = function() {
    return (1 + info.th_2()) / (1 + info.ts_2());
}
info.oefi_2 = function() {
    return (1 + info.oth_2()) / (1 + info.ots_2());
}
info.pwin_2 = function() {
    return (info.efo_2 * info.efi_2()) / ((info.efo_2 * info.efi_2()) + (info.oefo_2 * info.oefi_2()) );
}

// Cost calculations for various stages



// Beliefs are always about the most recent stage so even though they should
// all get _2 suffix. I won't add.
// Beliefs data is also generated above with this mindset.
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



var k;
var ftotal = [];
var oftotal = [];
var ltotal = [];

for(k = 0; k < 2; k++) {
    if(info.s3won) {
        ftotal[k] = s2CostArray[k] + s5CostArray[k];
        ltotal[0] = info.myNet + info.myNet_2;
        ltotal[1] = info.oNet + os5CostArray[info.os4winner];
        if(k !== info.os4winner) {
            oftotal[k] = os2CostArray[k] - info.oearray[k] + os5CostArray[k];
        } else {
            oftotal[k] = os2CostArray[k]  - info.oearray[k] + info.oNet_2;
        }
    } else {
        oftotal[k] = os2CostArray[k] + os5CostArray[k];
        ltotal[0] = info.myNet + s5CostArray[info.s4winner];
        ltotal[1] = info.oNet + info.oNet_2;
        if(k !== info.s4winner) {
            ftotal[k] = s2CostArray[k]  - info.earray[k] + s5CostArray[k];
        } else {
            // console.log('new leader here');
            // console.log(s2CostArray[k]);
            // console.log(info.myNet_2);
            ftotal[k] = s2CostArray[k] - info.earray[k] + info.myNet_2;
            // console.log(ftotal[k]);
        }
    }

}

console.log(typeof(info.myNet));
console.log('followers:');
for(var j = 0; j<2; j++){
    console.log(ftotal[j]);
}
console.log('other followers:');
for(j = 0; j<2; j++){
    console.log(oftotal[j]);
}
console.log('our initial leader: ' + ltotal[0]);
console.log('opposing initial leader: ' + ltotal[1]);

console.log('my index: ' + (tempMe + 1) + ', my role: ' + (myRole ? 'leader' : 'follower') + ', s4 winner: ' + (info.s4winner + 1));
console.log('our team won in s3? ' + info.s3won);
console.log('our team won in s6?' + info.s6won);
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
            range: [0,200]
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
            range: [-200,0]
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


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////     Payoff Bars    ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var updateS2CostBar = function(a, b, barId, ourGroup, me, myFirstRole) {

    var x = -a;
    var y = -b;


    var myOpacity = 1;
    var myText = [nzt(x), nzt(y)];

    var lightorange = 'rgb(225, 225, 225)';//'rgb(255, 180, 100)';
    var orange = 'rgb(225, 225, 225)';//'rgb(255, 130, 0)';
    var ourColor = ourGroup ? orange : lightorange;
    var ourColorArray = [ourColor, ourColor];

    if(myFirstRole===0 && ourGroup) {
        ourColorArray[me] = 'turquoise';
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
            color: ourColorArray,
        },
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14',
            color: 'black',//'red'
        },
        cliponaxis: false,
        opacity: myOpacity,
    }

    var layout = {
        height: 120,
        width: 100,
        margin: {"t": 20, "b": 20, "l": 0, "r": 0},
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
        bargroupgap:0,
    };

    var data = [actual];


    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS2CostBarTotal = function(a, b, barId) {

    var x = -a;
    var y = -b;


    var myOpacity = 1;
    var myText = [nzt(x), nzt(y)];

    var lightorange = 'rgb(225, 225, 225)';//'rgb(255, 180, 100)';
    var orange = 'rgb(225, 225, 225)';//'rgb(255, 130, 0)';



    var actual =  {
        y: [x, y],
        x: [1, 2],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [orange, lightorange],
        },
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14',
            color: 'black',//'red'
        },
        cliponaxis: false,
        opacity: myOpacity,
    }

    var layout = {
        height: 120,
        width: 100,
        margin: {"t": 20, "b": 20, "l": 0, "r": 0},
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
        bargap: 0.2,
        bargroupgap:0,
    };

    var data = [actual];


    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS3CostBarTotal = function(a, b, barId, myFirstRole) {

    var x = a;
    var y = b;


    var myOpacity = 1;
    var myText = [nzt(a), nzt(b)];
    var myTextColor = ['black', 'black'];
    // myTextColor[0] = (a>0) ? 'rgb(73, 251, 53)' : 'red';
    // myTextColor[1] = (b>0) ? 'rgb(73, 251, 53)' : 'red';

    var lightpurple = 'rgb(120, 120, 120)';// 'rgba(43, 3, 138, 0.66)';
    var purple = 'rgb(80, 80, 80)' ;//'rgb(43, 3, 138)';

    var colorArray = [purple, lightpurple];
    if(myFirstRole===1) {
        colorArray[0] = 'turquoise';
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
            color: colorArray,
        },
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14',
            color: myTextColor,
        },
        cliponaxis: false,
        opacity: myOpacity,
    }

    var layout = {
        height: 120,
        width: 100,
        margin: {"t": 20, "b": 20, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            // autorange: false,
            // range: [-1000,1000],
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
        bargap: 0.2,
        bargroupgap:0,
    };

    var data = [actual];


    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS4CostBar = function(a, b, barId, ourGroup, me, myFirstRole, winner) {

    var x = -a;
    var y = -b;


    var myOpacity = 1;
    var myText = [nzt(x), nzt(y)];

    var lightorange = 'rgb(225, 225, 225)';//'rgb(255, 180, 100)';
    var orange = 'rgb(225, 225, 225)';//'rgb(255, 130, 0)';
    var ourColor = ourGroup ? orange : lightorange;
    var ourColorArray = [ourColor, ourColor];



    var colorArray = ['', ''];
    var colorWidth = [0, 0];
    colorArray[winner] = ourGroup ? 'rgb(43, 3, 138)' : 'rgba(43, 3, 138, 0.66)';
    colorWidth[winner] = 3;



    if(myFirstRole===0 && ourGroup) {
        ourColorArray[me] = 'turquoise';
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
            color: ourColorArray,
            line: {
                color: colorArray,
                width: colorWidth,
            }
        },
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14',
            color: 'black', //'red'
        },
        cliponaxis: false,
        opacity: myOpacity,
    }

    var layout = {
        height: 120,
        width: 100,
        margin: {"t": 20, "b": 20, "l": 0, "r": 0},
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
        bargap: 0.2,
        bargroupgap:0,
    };

    var data = [actual];


    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS5CostBar = function(a, b, barId, ourGroup, me, myFirstRole, s3Won, winner) {

    var x = -a;
    var y = -b;


    var myOpacity = 1;
    var myText = [nzt(x), nzt(y)];

    var lightorange = 'rgb(225, 225, 225)';//'rgb(255, 180, 100)';
    var orange = 'rgb(225, 225, 225)';//'rgb(255, 130, 0)';
    var ourColor = ourGroup ? orange : lightorange;
    var ourColorArray = [ourColor, ourColor];

    var colorArray = ['', ''];
    var colorWidth = [0, 0];
    if(!s3Won) {
        ourColorArray[winner] = ourGroup ? 'rgb(80, 80, 80)'  : 'rgb(120, 120, 120)';
        colorArray[winner] = ourGroup ? 'rgb(255, 130, 0)' : 'rgb(255, 180, 100)';
        colorWidth[winner] = 3;
    }


    if(myRole===0 && ourGroup) {
        // ourColorArray[me] = 'turquoise';
    }

    if(myRole===1 && ourGroup && s3Won) {
        // If I were the leader, I get new leader's old follower spot so I get
        // winner index which represents the follower who became the new leader
        // ourColorArray[winner] = 'turquoise';
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
            color: ourColorArray,
            line: {
                color: colorArray,
                width: colorWidth,
            }
        },
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14',
            color: 'black',//'red'
        },
        cliponaxis: false,
        opacity: myOpacity,
    }

    var layout = {
        height: 120,
        width: 100,
        margin: {"t": 20, "b": 20, "l": 0, "r": 0},
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
        bargroupgap:0,
    };

    var data = [actual];


    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateS6CostBarTotal = function(a, b, barId, s3Won) {

    var x = a;
    var y = b;


    var myOpacity = 1;
    var myText = [nzt(a), nzt(b)];
    var myTextColor = ['black', 'black'];
    // myTextColor[0] = (a>0) ? 'rgb(73, 251, 53)' : 'red';
    // myTextColor[1] = (b>0) ? 'rgb(73, 251, 53)' : 'red';

    var lightpurple = 'rgb(120, 120, 120)';// 'rgba(43, 3, 138, 0.66)';
    var purple = 'rgb(80, 80, 80)';//'rgb(43, 3, 138)';
    var colorArray = [purple, lightpurple];
    colorArray[0] = 'turquoise';

    var lineColorArray = ['', ''];
    var lineWidth = [0, 0];

    if(!s3Won) {
        lineColorArray[0] = 'rgb(43, 3, 138)';
        lineWidth[0] = 2;

    }

    if(s3Won) {
        lineColorArray[1] = 'rgba(43, 3, 138, 0.66)';
        lineWidth[1] = 2;
        colorArray[1] = 'rgb(225, 225, 225)';
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
            color: colorArray,
            line: {
                color: lineColorArray,
                width: lineWidth,
            }
        },
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14',
            color: myTextColor,
        },
        cliponaxis: false,
        opacity: myOpacity,
    }

    var layout = {
        height: 120,
        width: 100,
        margin: {"t": 20, "b": 20, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            // autorange: false,
            // range: [-1000,1000],
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
        bargap: 0.2,
        bargroupgap:0,
    };

    var data = [actual];


    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var l2f = function(array) {
    var last = array[array.length-1];
    console.log('last element ' + last);
    var first = array[0];
    console.log('first element' + first);
    array[0] = last;
    array[array.length-1] = first;

    return array;
}

var updateTotalCostBar = function(a, b, l, barId, ourGroup, me, myFirstRole, s3Won, winner) {

    var x = a;
    var y = b;

    var v = l;

    var myData = [x, y, v];

    var myOpacity = 1;
    var myText = [nzt(x), nzt(y), nzt(v)];
    var myTextColor = 'black';
    // for(var h = 0; h < 5; h++) {
    //     myTextColor[h] = (myData[h] > 0) ? 'rgb(73, 251, 53)' : 'red';
    // }



    var lightorange = 'rgb(225, 225, 225)';//'rgb(255, 180, 100)';
    var orange = 'rgb(225, 225, 225)';//'rgb(255, 130, 0)';
    var ourColor = ourGroup ? orange : lightorange;
    var ourLeaderColor = ourGroup ? 'rgb(80, 80, 80)' : 'rgb(120, 120, 120)'
    var ourColorArray = [ourColor, ourColor, ourLeaderColor];

    var lineColorArray = ['', '', '',];
    var lineWidth = [0, 0, 0];
    if(!s3Won) {
        lineColorArray[2] = ourGroup ? 'rgb(255, 130, 0)' : 'rgb(255, 180, 100)';
        lineWidth[2] = 3;
        lineColorArray[winner] = ourGroup ? 'rgb(43, 3, 138)' : 'rgba(43, 3, 138, 0.66)';
        lineWidth[winner] = 3;
    }

    if(!ourGroup) {
        console.log('do we get in here???');
        console.log(myData[0]);
        myData = l2f(myData);
        console.log(myData[0]);
        myText = l2f(myText);
        ourColorArray = l2f(ourColorArray);
        lineColorArray = l2f(lineColorArray);
        lineWidth = l2f(lineWidth);
        myTextColor = l2f(myTextColor);
    }

    if(myRole===0 && ourGroup) {
        ourColorArray[me] = 'turquoise';
    }

    if(myRole===1 && ourGroup) {
        // If I were the leader, I get new leader's old follower spot so I get
        // winner index which represents the follower who became the new leader
        ourColorArray[2] = 'turquoise';
    }

    var actual =  {
        y: myData,
        x: [1, 2, 3],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ourColorArray,
            line: {
                color: lineColorArray,
                width: lineWidth,
            }
        },
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14',
            color: myTextColor,
        },
        cliponaxis: false,
        opacity: myOpacity,
    }

    var layout = {
        height: 250,//180,
        width: 450, //150,
        margin: {"t": 20, "b": 20, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            // autorange: false,
            // range: [-100,0]
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
    updateHelpBar(info.h1_2, info.h2_2, 'helpbarg1', true, info.me, beliefSwitch, info.beliefs.h1);
    updateSaboBar(info.s1_2, info.s2_2, 'sabobarg1', true, info.me, beliefSwitch, info.beliefs.s1);

    updateTotalHelpBar(info.th_2(), info.oth_2(), 'helpbartotal', beliefSwitch, info.beliefs.th(), info.beliefs.oth());
    updateTotalSaboBar(info.ts_2(), info.ots_2(), 'sabobartotal', beliefSwitch, info.beliefs.ts(), info.beliefs.ots());

    // for opposing group me variable gets -1 to signal that there is no me
    updateHelpBar(info.oh1_2, info.oh2_2, 'helpbarg2', false, -1, beliefSwitch, info.beliefs.oh1, info.beliefs.oh2);
    updateSaboBar(info.os1_2, info.os2_2, 'sabobarg2', false, -1, beliefSwitch, info.beliefs.os1, info.beliefs.os2);

    updatePie(info.pwin_2(), 's6pie', beliefSwitch, info.beliefs.pwin());
    updateEffortBar(info.efo_2, info.oefo_2, 's6effortbars', beliefSwitch, info.beliefs.efo, info.beliefs.oefo);
    updateEfficiencyBar(info.efi_2(), info.oefi_2(), 's6efficiencybar', beliefSwitch, info.beliefs.efi(), info.beliefs.oefi());

    if(animationCounter===0) {
        var resultIndex = d.s6.yourLeaderWon ? 1 : 2;
        // console.log(resultIndex);
        var stopAt = theWheel.getRandomForSegment(resultIndex);
        theWheel.animation.stopAngle = stopAt;
        theWheel.startAnimation();
        animationCounter = 1 + animationCounter;
    }
}

var update2 = function() {
    // function(a, b, c, d, barId, ourGroup, me, myFirstRole)

    updateS2CostBar(info.c1, info.c2, 's2payoffg1', true, info.me, info.role);
    updateS2CostBarTotal(info.tc, info.otc, 's2payofftotal');
    updateS2CostBar(info.oc1, info.oc2, 's2payoffg2', false, -1, -1);
    updateS3CostBarTotal(info.myNet, info.oNet, 's3payofftotal', info.role);

    if(!d.s3.yourLeaderWon) {
        updateS4CostBar(info.e1, info.e2, 's4payoffg1', true, info.me, info.role, info.s4winner);
        var tempDisplay = document.getElementById('yourgroup');
        tempDisplay.innerHTML = 'Your Group';
        }
    if(d.s3.yourLeaderWon) {
        updateS4CostBar(info.oe1, info.oe2, 's4payoffg2', false, -1, -1, info.os4winner);
        $('.rightsections4').css({'padding-left':'225px'});
        tempDisplay = document.getElementById('othergroup');
        tempDisplay.innerHTML = 'Opposing Group';
    }

// function(a, b, c, d, barId, ourGroup, me, myFirstRole, winner, s3Won)
updateS5CostBar(info.c1_2, info.c2_2, 's5payoffg1', true, info.me, info.role, info.s3won, info.s4winner);
updateS5CostBar(info.oc1_2, info.oc2_2, 's5payoffg2', false, info.me, info.role, !info.s3won, info.os4winner);
updateS2CostBarTotal(info.tc_2, info.otc_2, 's5payofftotal');
updateS6CostBarTotal(info.myNet_2, info.oNet_2, 's6payofftotal', info.s3won);

// updateTotalCostBar = function(a, b, c, d, l, barId, ourGroup, me, myFirstRole, s3Won, winner)
updateTotalCostBar(ftotal[0], ftotal[1], ltotal[0], 'totalpayoffg1', true, info.me, info.role, info.s3won, info.s4winner);
updateTotalCostBar(oftotal[0], oftotal[1], ltotal[1], 'totalpayoffg2', false, info.me, info.role, !info.s3won, info.os4winner);
}



//BELIEF BUTTON
var beliefButton = document.getElementById('beliefbutton');
var bbSwitch = 1;
beliefButton.onclick = function() {
    var showBeliefs3 = bbSwitch ? true : false;
    var o = showBeliefs3 ? 1 : 0;
    var h = showBeliefs3 ? '100%' : '0px';
    update(showBeliefs3);

    document.getElementById("belieflegend").style.opacity = o;
    document.getElementById('belieflegend').style.maxHeight = h;
    // document.getElementById('hidewrap').style.opacity = o;
    bbSwitch = 1 - bbSwitch;
}

// INFO BUTTON
var infoButton = document.getElementById('stageinfobutton');
var bbSwitch2 = 1;
infoButton.onclick = function() {
    var showInfo = bbSwitch2 ? true : false;
    var o = showInfo ? 1 : 0;
    var h = showInfo ? '100%' : '0px';
    if(showInfo) {
        update2();
        $('html, body').animate({
            scrollTop: ($('.secondpartwrap').height())*1.75
        }, 500);
    } else {
        // $('html, body').animate({
        //     scrollTop: ($('.firstpartwrap').height())*0.65
        // }, 500);
        $('html, body').animate({
            scrollTop: ($('.secondpartwrap').height())/2
        }, 1000);
    }


    document.getElementById("stagewrap3").style.opacity = o;
    document.getElementById('stagewrap3').style.height = h;
    bbSwitch2 = 1 - bbSwitch2;
}


// Called by the stage 3 wheel once it stops
// Calls showresults()
// If leader lost, calls displayStage4()
var next = function() {
    showResults();
    setTimeout("displayAllPayoffs()", 1000);
}


// EXPLAINS THE STAGE 3 RESULTS IN TEXT
var showResults = function() {
    var display = document.getElementById('s6shortresult');

    var shortResult = d.s6.yourLeaderWon ? 'Your Leader Won.' : 'Your Leader Lost.';

    display.innerHTML = shortResult;
    setTimeout('showResultsDelayed()', 1000);
}

var showResultsDelayed = function() {
        var largeDisplay = document.getElementById('resulttext');

        var netPayoff;
        if(myRole === 1) {
            netPayoff = ltotal[0];
        } else {
            netPayoff = ftotal[tempMe];
        }
        document.getElementById('s6resulttext').style.opacity = 1;
        var allScenario = 'The game has ended.'
        + '<br><br>Your net Payoff is ' + '<strong>' + netPayoff + '</strong>';
        // + '<br><br> Below is a graphical representations of all players\'s net payoffs.'
        // + '<br> You can click <strong> Stages </strong> button for stage specific net payoff information.';

        largeDisplay.innerHTML = allScenario;

}


var displayAllPayoffs = function() {
    document.getElementById('secondpartwrap').style.opacity = 1;
    document.getElementById('secondpartwrap').style.position = 'static';
    document.getElementById('stageinfobutton').style.opacity = 1;
    document.getElementById('stageinfobutton').style.zIndex = 0;
    $('html, body').animate({
        scrollTop: ($('.secondpartwrap').height())/5
    }, 1000);

}





//INITIATION
// false represent not showing the beliefs we start without them
// can be turned on by the beliefs button defined below
update(false);
update2();

// FOR DEBUGGING

// setTimeout('showResults()', 250);
// setTimeout('displayAllPayoffs()', 500);
