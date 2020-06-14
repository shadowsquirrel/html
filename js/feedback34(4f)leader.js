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

var generateMe = function() {
    return Math.ceil(Math.random() * 4) - 1;
}

var generateS4winner = function() {
    var temp = [false, false, false, false];
    var index = Math.ceil(Math.random() * 4) - 1;
    temp[index] = true;
    return temp;
}

var tempMe = generateMe();

var sw = [onezero(), onezero(), onezero(), onezero()];
var osw = [onezero(), onezero(), onezero(), onezero()];


var d = {
    me: tempMe,
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
        yourLeaderWon: (Math.random() > 0.5) ? true : false,
    },
    s4:
    {
        hasWon: generateS4winner(), //will be an array!
    },
    beliefs:
    {
        s3:
        {
            oefo:  parseFloat((Math.random()*500).toFixed(0)),
        },
    }
}

var info = {};
info.beliefs = {};

var data2Info = function() {
    info.me = d.me;

    info.s1 = d.s2.ourGroup.sabo.f1;
    info.s2 = d.s2.ourGroup.sabo.f2;
    info.s3 = d.s2.ourGroup.sabo.f3;
    info.s4 = d.s2.ourGroup.sabo.f4;

    info.h1 = d.s2.ourGroup.help.f1;
    info.h2 = d.s2.ourGroup.help.f2;
    info.h3 = d.s2.ourGroup.help.f3;
    info.h4 = d.s2.ourGroup.help.f4;

    info.sarray = [info.s1, info.s2, info.s3, info.s4];
    info.harray = [info.h1, info.h2, info.h3, info.h4];


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
    info.beliefs.oefo = d.beliefs.s3.oefo;
    info.s3won = d.s3.yourLeaderWon;


    info.winner = d.s4.hasWon.indexOf(true);
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

// Leader already observed help and sabotage so no beliefs on
// efficiencies and help and sabotage only probabilities solely based on
// opponent's effort level beliefs
info.beliefs.pwin = function() {
    return (info.efo * info.efi()) / ((info.efo * info.efi()) + (info.beliefs.oefo * info.oefi()) );
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
        'duration' : 1,
        'spins'    : 10,
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

var updateHelpBar = function(a, b, c, d, barId, ourGroup) {

    var x = a;
    var y = b;
    var z = c;
    var w = d;

    var myOpacity = 1;//[1, 1, 1, 1];
    var myText = [nzt(a), nzt(b), nzt(c), nzt(d)];

    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';
    var ourColor = ourGroup ? blue : lightblue;

    var colorArray = ['', '', '', ''];
    var colorWidth = [0, 0, 0, 0];

    var actual =  {
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

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateTotalHelpBar = function(a, b, barId) {

    var x = a;
    var y = b;
    var myOpacity = 1;
    var myText = [nzt(x), nzt(y)];

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

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateSaboBar = function(a, b, c, d, barId, ourGroup) {

    var x = -a;
    var y = -b;
    var z = -c;
    var w = -d;

    var myBargap = 0.2;

    var myOpacity = 1;//[1, 1, 1, 1];
    var myText = [nzt(a), nzt(b), nzt(c), nzt(d)];

    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';
    var ourColor = ourGroup ? red : lightred;

    var colorArray = ['', '', '', ''];
    var colorWidth = [0, 0, 0, 0];

    var actual = {
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

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateTotalSaboBar = function(a, b, barId) {

    var x = -a;
    var y = -b;
    var myOpacity = 1;
    var myText = [nzt(a), nzt(b)];

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
        labels: ['Opposing Leader', 'You'],
        textposition: "outside",
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        opacity:actualOpacity,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(120, 120, 120)'],
            line: {
                color: ['black', 'lightgreen'],
                width: [1,3],
            }
        }
    };

    if(showBeliefs) {
        var beliefs = {
            values: [by, bx],
            labels: ['Opposing Leader<br>(beliefs)', 'You'],
            textfont: {
                color: ['black', 'white'],
            },
            textposition: "inside",
            type: 'pie',
            sort: false,
            hoverinfo: 'percent+label',
            automargin: true,
            marker:{
                colors: ['rgb(255, 255, 0)', 'rgb(120, 120, 120)'],
                line: {
                    color: ['black', 'lightgreen'],
                    width: [1,3],
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

var updateEfficiencyBar = function(efi1, efi2, barId) {

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
            color: 'rgb(120, 120, 120)',
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

    var myHeight = 48//60;

    var data = [leader2, leader1];

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

var updateEffortBar = function(efo, oefo, barId, beliefSwitch, boefo) {

    var x = efo;
    var y = oefo;
    var myOpacity=1;
    var myText = [y,x];

    if(beliefSwitch) {
        var by = boefo;
        myOpacity = 1;
        myText = ['', ''];
    }

    var actual = {
        y: [y, x],
        x: [1,2],
        name: ['Opposing Leader', 'You'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(225, 225, 225)', 'rgb(120, 120, 120)'],
            line: {
                color: ['black', 'lightgreen'],
                width: [0,3],
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

    if(beliefSwitch) {
        var belief = {
            y: [by, x],
            x: [1.15, 2],
            width: 0.7,
            name: ['Opposing Leader', 'You'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: ['rgb(255, 255, 0)', 'rgb(120, 120, 120)'],
                line: {
                    color: ['black', 'lightgreen'],
                    width: [0,3],
                }
            },
            text: [by, x],
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
////////////////////////////////////////////////////////////////////////////////
////////////////////////    CALLING THE FUNCTIONS   ////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// STAGE 2 AND 3 GRAPHICS AND ANIMATION
var animationCounter = 0;
var update = function(beliefSwitch) {
    updateHelpBar(info.h1, info.h2, info.h3, info.h4, 'helpbarg1', true);
    updateSaboBar(info.s1, info.s2, info.s3, info.s4, 'sabobarg1', true);

    updateTotalHelpBar(info.th(), info.oth(), 'helpbartotal');
    updateTotalSaboBar(info.ts(), info.ots(), 'sabobartotal');

    // for opposing group me variable gets -1 to signal that there is no me
    updateHelpBar(info.oh1, info.oh2, info.oh3, info.oh4, 'helpbarg2', false);
    updateSaboBar(info.os1, info.os2, info.os3, info.os4,'sabobarg2', false);

    updatePie(info.pwin(), 's3pie', beliefSwitch, info.beliefs.pwin());
    updateEffortBar(info.efo, info.oefo, 's3effortbars', beliefSwitch, info.beliefs.oefo);
    updateEfficiencyBar(info.efi(), info.oefi(), 's3efficiencybar');

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
    var o2 = showBeliefs3 ? 0 : 1;

    update(showBeliefs3);

    document.getElementById("belieflegend").style.opacity = o;
    document.getElementById("belieflegend3").style.opacity = o2;
    bbSwitch = 1 - bbSwitch;
}

// Called by the stage 3 wheel once it stops
var next = function() {
    showResults();
}


// EXPLAINS THE STAGE 3 RESULTS IN TEXT
var showResults = function() {
    var display = document.getElementById('s3shortresult');
    var shortResult = d.s3.yourLeaderWon ? 'You Won!' : 'You Lost.';
    display.innerHTML = shortResult;
    if(!d.s3.yourLeaderWon) {
        $('.s3resulttext').css({'flex-grow':'1'});
    }
    setTimeout('showResultsDelayed1()', 1000);
}

var showResultsDelayed1 = function() {
        var largeDisplay = document.getElementById('resulttext');
        var winScenario = 'You <strong>maintained your '
        + 'leadership </strong> position. <br><br> Your followers will proceed to Stage 5 '
        + 'to once again determine the level of help or sabotage that you will receive in Stage 6.';

        var loseScenario = 'You <strong>lost your '
        + 'leadership </strong> position.'
        + '<br><br><strong>You</strong> are  now the <strong>new Follower ' + (info.winner+1) + '</strong>.'
        + ' and Follower ' + (info.winner+1) + ' is the <strong>new Leader</strong> of your group. '
        + '<br><br>You and the other followers will proeed to Stage 5 to determine the level of '
        + 'help or sabotage that your <strong>new</strong> Leader will receive in Stage 6';
        largeDisplay.innerHTML = d.s3.yourLeaderWon ? winScenario : loseScenario;


        showResultsDelayed2();

        $('html, body').animate({
            scrollTop: $(document).height()
        }, 5000);
}

var showResultsDelayed2 = function() {
    if(!info.s3won) {
        $('.s3s4payoffinfohwrap2').css({'padding-top':'70px'});
    }
    var displayPayoff = document.getElementById('s3s4payoffinfohwrap2');
    displayPayoff.style.opacity = 1;
    displayPayoff.style.position = 'static';
    var s3Payoff = document.getElementById('stage3cost2');
    s3Payoff.innerHTML = -info.efo + (info.s3won ? 1000 : 0);
}



//INITIATION
// false represent not showing the beliefs we start without them
// can be turned on by the beliefs button defined below
update(false);


// FOR DEBUGGING
// setTimeout('showResults()', 250);
