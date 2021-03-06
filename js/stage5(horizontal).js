
var nzt = function(val) {
    return (val != 0) ? val : '';
}

var updateBarHelpInfo = function(a, b, barId, ourGroup, me, newLeader) {
    var x = a;
    var y = b;

    // var myData = [x,y];
    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';



    var ourColor = ourGroup ? blue : lightblue;

    var colorArray = ['', '',];
    var colorWidth = [0, 0];
    if (me!==-1) {
        colorArray[me] = 'green';
        colorWidth[me] = 3;
    }
    if(newLeader!==-1) {
        colorArray[newLeader] = 'indigo';
        colorWidth[newLeader] = 3;
    }

    var data = [
        {
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
            text: [nzt(x), nzt(y)],
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
        width: 60,
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

var updateBarSaboInfo = function(a, b, barId, ourGroup, me, newLeader) {
    var x = -a;
    var y = -b;


    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';
    var ourColor = ourGroup ? red : lightred;

    var colorArray = ['', ''];
    var colorWidth = [0, 0];
    if (me!==-1) {
        colorArray[me] = 'green';
        colorWidth[me] = 3;
    }
    if(newLeader!==-1) {
        colorArray[newLeader] = 'indigo';
        colorWidth[newLeader] = 3;
    }


    var data = [{
        y: [x, y],
        name: ['Follower 1', 'Follower 2'],
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
        text: [a, b],
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
        width: 60,
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
            text: [nzt(x), nzt(y)],
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
        margin: {"t": 40, "b": 40, "l": 60, "r": 60},
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

var updateS4Info = function(a, b, barId, me , winner) {

    var x = a;
    var y = b;

    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var textArray = ['', '']
    var colorArray = ['', ''];
    var colorWidth = [0, 0];
    var labelArray = ['Follower 1', 'Follower 2'];

    textArray[winner] = 'Winner';
    textArray[me] = 'You';

    colorArray[winner] = 'violet';
    colorArray[me] = 'lightgreen';

    colorWidth[winner] = 2;
    colorWidth[me] = 2;



    var data = [{
        values: [x, y],
        labels: labelArray,
        text: textArray,
        textposition: 'outside',
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(80, 80, 80)'],
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
        margin: {"t": 40, "b": 40, "l": 60, "r": 60},
        showlegend: false,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}


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
    return Math.ceil(Math.random() * 2) - 1;
}



var onezero = function() {
    return (Math.random() >= 0.5) ? 1 : 0;
}

var tempMe = generateMe();

var generateS4winner = function() {
    var temp = [true, true];
    temp[tempMe] = false;
    return temp;
}

var sw = [onezero(), onezero()];
var osw = [onezero(), onezero()];

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
}

var info = {};

var data2Info = function() {
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
    info.winner = d.s4.hasWon.indexOf(true);
    info.earray = [info.e1, info.e2];
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


data2Info();


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////     Info Section     //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
me gets a number if you are follower 1 it gets follower 1 for instance
if we are drawing the opposing group then it should be set to -1
similarly newLeader gets a number if the new leader is follower 2
then it gets 2 again if there is no new leader in your group then
it shoult be set to 1
ourgroup is a boolean to determine the light or dark color scheme of the bars
*/
updateBarHelpInfo(info.h1, info.h2, 's2helpbarg1', true, info.me, info.winner);
updateBarSaboInfo(info.s1, info.s2, 's2sabobarg1', true, info.me, info.winner);

updateBarTotalHelpInfo(info.th(), info.oth(), 's2totalhelpbar');
updateBarTotalSaboInfo(info.ts(), info.ots(), 's2totalsabobar');

updateBarHelpInfo(info.oh1, info.oh2, 's2helpbarg2', false, -1, -1);
updateBarSaboInfo(info.os1, info.os2, 's2sabobarg2', false, -1, -1);

updatePieInfo(info.pwin(), 's3pie', false);
updateBarEffortInfo(info.efo, info.oefo, 's3efobar')
updateEfficiencyBarInfo(info.efi(), info.oefi(), 's3efibar');

updateS4Info(info.e1, info.e2, 's4pie', info.me, info.winner);



////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////////////////////////     CALCULATOR      //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var updatePie = function(a) {

    // var val1 = efi / (efi + oefi);
    // var val2 = oefi / (efi + oefi);
    // var mColor = [myColor(logistic(val2)), myColor(logistic(val1))];

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
        labels: ['Opposing Leader', 'Your Leader'],
        textfont: {
            color: ['black', 'white'],
        },
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(160, 160, 160)']
            // colors: mColor,
            // line: {
            //     color: 'black',
            //     width: 1,
            // }
        }
    }];

    var layout = {
        height: 120,
        width: 150,
        // title: 'Probability to Win',
        font:{
            size: 10
        },
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false,
    };

    Plotly.react('pie', data, layout, {displayModeBar: false});
}

var updateBarHelp = function(a,b) {
    var x = a;
    var y = b;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;

    var data = [{
        y: [x, y],
        name: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(140, 140, 255)', 'rgb(200,200,255)'],
        },
        text: [nzt(x), nzt(y)],
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 120,
        width: 150,
        // title: 'Total Help',
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
        bargap: 0.1,
        // paper_bgcolor: 'white',
        // plot_bgcolor: 'white'
    };

    Plotly.react('helpBar', data, layout, {displayModeBar: false});
}

var updateBarSabo = function(a, b) {
    // console.log(a + ', ' + b);
    var x = -a;
    var y = -b;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;

    var data = [{
        y: [x, y], //[y, x],
        x: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(255,140,140)', 'rgb(255,200,200)'],
        },
        text: [nzt(-x), nzt(-y)],
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 120,
        width: 150,
        // title: 'Total Sabotage',
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
        bargap: 0.1,
        // plot_bgcolor: 'white'
    };

    Plotly.react('saboBar', data, layout, {displayModeBar: false});
}

var updateBar = function(a, barId, lighter, axisOn) {
    var x = a;
    if(typeof(x) === 'undefined') x = 0;

    if(lighter){
        var colors = ['rgb(200,200,255)',  'rgb(255,200,200)'];
    } else { colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];}

    var myLabel = x > 0 ? x : -x;
    // var myColor = x > 0 ? 'rgb(180,180,255)' : 'rgb(255,180,180)';
    var myColor = x > 0 ? colors[0] : colors[1];
    // var myLineColor = x > 0 ? 'rgb(5, 90, 255)' : 'rgb(255, 5, 5)';
    // var myTextPosition = (x >= 0 || x === -100) ? 'outside' : 'inside';
    // var myTextFont = (x < 0 && x > -100 && !lighter) ? 'white' : 'black';

    var data = [{
        y: [x],
        // name: ['Opposing Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [myColor],
            line: {
                color: 'none',
                width: 0
            }
        },
        text: [myLabel],
        textfont: {
            // color: myTextFont,
            size: '16'
        },
        textanchor: 'right',
        textposition: 'outside',
        cliponaxis: false,
        // textposition: myTextPosition,
        // insidetextanchor: 'end'
    }];

    var layout = {
        barmode: 'group',
        // Setup Compact
        height: 300,

        // Setup Large
        // height: 400,

        // Setup Super Large
        // height: 550,


        width: 80,
        margin: {"t": 20, "b": 25, "l": 25, "r": 25},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [-100,100],
            layer: 'below traces',
            fixedrange: true,
            ticks:'',
            tickfont: {
                size: 9,
            },
            tickmode: 'array',
            tickvals: [-100, -75, -50, -40, -30, -20, -10, 0, 10,  20, 30, 40, 50, 75, 100],
            ticktext: [100, 75, 50, 40, 30, 20, 10, 0, 10, 20, 30, 40, 50, 75, 100],
            // tickvals: [-200, -150, -100, -75, -50, -25,  0, 25,  50, 75, 100, 150, 200],
            // ticktext: [200, 150, 100, 75, 50, 25, 0, 25, 50, 75, 100, 150, 200],
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",

        },
        xaxis: {
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },

    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var updateBarLeader = function(e, barId, ourSide, axisOn) {
    // var val1 = efi / (efi + oefi);
    // var val2 = oefi / (efi + oefi);
    var y = e;
    if(typeof(x) === 'undefined') x = 0;

    var mColor = ourSide ? 'rgb(160, 160, 160)' : 'rgb(225, 225, 225)';
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
            range: [0,500],
            layer: 'below traces',
            fixedrange: true,

            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400, 500],
            ticktext: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400, 500],
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

var updateBarDecision = function(a, barId, axisOn) {
    var y = a;
    if(typeof(y) === 'undefined') y = 0;

    colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];

    var myLabel = y > 0 ? y : -y;
    // var myColor = y > 0 ? 'rgb(180,180,255)' : 'rgb(255,180,180)';
    var myColor = y > 0 ? colors[0] : colors[1];
    // var myLineColor = y > 0 ? 'rgb(5, 90, 255)' : 'rgb(255, 5, 5)';
    // var myTextPosition = (y >= 0 || y === -100) ? 'outside' : 'inside';
    // var myTextFont = (y < 0 && y > -100 && !lighter) ? 'white' : 'black';

    var data = [{
        x: [y],
        orientation: 'h',
        name: [''],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [myColor],
            line: {
                color: 'none',
                width: 0
            }
        },
        text: [myLabel],
        textfont: {
            // color: myTextFont,
            size: '35',
        },
        textanchor: 'right',
        textposition: 'outside',
        cliponaxis: false,
        // textposition: myTextPosition,
        // insidetextanchor: 'end'
    }];

    var layout = {
        barmode: 'group',

        // Setup Large
        height: 75,

        width: 1050,
        margin: {"t": 20, "b": 25, "l": 40, "r": 40},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: [-100,100],
            layer: 'below traces',
            fixedrange: true,
            ticks:'',
            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [-100, -75, -50, -40, -30, -20, -15, -10, -5, 0, 5,10, 15, 20, 30, 40, 50, 75, 100],
            ticktext: [100, 75, 50, 40, 30, 20, 15, 10, 5, 0, 5, 10, 15, 20, 30, 40, 50, 75, 100],
            // tickvals: [-200, -150, -125, -100, -75, -60, -45, -30, -15, -5, 0, 5, 15, 30, 45, 60, 75, 100, 125, 150, 200],
            // ticktext: [200, 150, 125, 100, 75, 60, 45, 30, 15,  5, 0, 5, 15, 30, 45, 60, 75, 100, 125, 150, 200],
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(207, 202, 202)",

        },
        yaxis: {
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },

    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var logistic = function(val) {
    var L = 240;
    var m = 120;
    var k1 = 0.05;
    var k2 = 0.01;
    val = 240 * val;

    var val1;
    val1 = L / (1 + Math.exp(-k1 * (val - m)));
    val12 =  L / (1 + Math.exp(-k2 * (val - m)));
    var val2 = (Math.abs(val12 - m) / 240) + 0.5;
    val1 = Math.floor(val1);
    var result = [val1, val2];
    return result;
}

var myColor = function(val){
    return ('hsla(' + val[0] +',100%, 37%, ' + val[1] +')');

}

var updateStrengthBar = function(efi1, efi2) {

    var val1 = efi1 / (efi1 + efi2);
    var val2 = efi2 / (efi1 + efi2);

    var leader1 = [{
        x: [1],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        cliponaxis: false,
        marker: {
            color: myColor(logistic(val1)),
        },
    }];

    var leader2 = [{
        x: [1],
        type: 'bar',
        orientation: 'h',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        cliponaxis: false,
        marker: {
            color: myColor(logistic(val2)),
        },
    }];


    var layout = {
        barmode: 'group',
        height: 10,
        width: 350,
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
            ticks: '',
            layer: 'below traces',
            fixedrange: true,
            showline: false,
            showgrid: false,
            showticklabels: false,
        },
    };



    Plotly.react('efficiencyBar1', leader1, layout, {displayModeBar: false});
    Plotly.react('efficiencyBar2', leader2, layout, {displayModeBar: false});
}

var updateStrengthText = function(efi1, efi2) {
    var val1 = efi1 / (efi1 + efi2);
    var val2 = efi2 / (efi1 + efi2);

    var degree1;
    var position1;
    var degree2;
    var position2;

    if(val1 > val2) {
        position1 = 'advantaged';
        position2 = 'disadvantaged';
        if(efi1/efi2 < 1.1) {
            degree1 = degree2 = ' has no significant ';
        }
        if(efi1/efi2 <= 1.5 && efi1/efi2 >= 1.1) {
            degree1 = degree2 = ' slightly ';
        }
        if(efi1/efi2 > 1.5 && efi1/efi2 < 5) {
            degree1 = degree2 = ' ';
        }
        if(efi1/efi2 >= 5 && efi1/efi2 < 10) {
            degree1 = degree2 = ' strongly ';
        }
        if(efi1/efi2 >= 10) {
            degree1 = degree2 = ' extremely ';
        }
    }


    if(val1 < val2) {
        position2 = 'advantage';
        position1 = 'disadvantage';
        if(efi2/efi1 < 1.1) {
            degree1 = degree2 = ' has no significant ';
        }
        if(efi2/efi1 <= 1.5  && efi2/efi1 >= 1.1) {
            degree1 = degree2 = ' slightly ';
        }
        if(efi2/efi1 > 1.5 && efi1/efi2 < 5) {
            degree1 = degree2 = ' ';
        }
        if(efi2/efi1 >= 5 && efi1/efi2 < 10) {
            degree1 = degree2 = ' strongly ';
        }
        if(efi2/efi1 >= 10) {
            degree1 = degree2 = ' extremely ';
        }
    }

    if(val1 !== val2) {
        var string1 = degree1 + position1;
        var string2 = degree2 + position2;
        document.getElementById('advtxt1').innerHTML = string1;
        document.getElementById('advtxt2').innerHTML = string2;
    }
    if(val1 === val2){
        var same = ' has no advantage or disadvantage'
        document.getElementById('advtxt1').innerHTML = same;
        document.getElementById('advtxt2').innerHTML = same;

    }




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

    var gapSize = 0.01;
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
            color: 'rgb(160, 160, 160)',
            // color: 'rgb(80, 80, 80)',
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
        text: myText,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            color: 'white',
            size: '10'
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

    var data = [leader1, gap, leader2];

    var layout = {
        barmode: 'stack',
        height: 30,
        width: 1000,
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

//BUTTON1
var multiButton = document.getElementById('multibutton');
var bbSwitch = 0;
multiButton.onclick = function() {


    var show = bbSwitch ? true : false;
    var o = show ? 1 : 0;
    var p = show ? '30px' : '0';
    var h = show ? '100%' : '0';

    var m = show ? '0' : '-80px';


    document.getElementById('sinfo').style.position = p;
    document.getElementById('sinfo').style.opacity = o;
    document.getElementById('sinfo').style.height = h;

    document.getElementById('calculator').style.marginTop = m

    // if(!show) {
    //     $('html, body').animate({
    //         scrollTop: $(document).height()
    //     }, 1000);
    // }
    bbSwitch = 1 - bbSwitch;
}

var bName = document.getElementById('buttonname');
bName.innerHTML = 'Decision Section';


//BUTTON1
var multiButton2 = document.getElementById('multibutton2');
var bbSwitch2 = 0;
multiButton2.onclick = function() {
    var bName = document.getElementById('buttonname')

    if(bbSwitch2===0) {
        bName.innerHTML = 'Info Section';
        var myScroll = $(document).height() - 805;
        $('html, body').animate({scrollTop: myScroll}, 1000);
    }

    if(bbSwitch2===1) {
        bName.innerHTML = 'Decision Section';
        $('html, body').animate({scrollTop: 0}, 500);
    }

    bbSwitch2 = 1 - bbSwitch2;
}


//VARIABLES AND GRAPHICS INITIATIONS


// Follower global variables for both groups
// your group
var s1, s2, s3, s4, h1, h2, h3, h4, ts, th;
s1 = s2 = s3 = s4 = h1 = h2 = h3 = h4 = ts = th = 0;
// opposing group
var os1, os2, os3, os4, oh1, oh2, oh3, oh4, ots, oth;
os1 = os2 = os3 = os4 = oh1 = oh2 = oh3 = oh4 = ots = oth = 0;

// leader global variables
var efo, efi, efefo, oefo, oefi, oefefo, pwin;
efo = oefo = 1;
efi = oefi = 1;

var syncOurGroup = document.getElementById('mycheck').checked;
var syncOtherGroup  = document.getElementById('mycheck2').checked;


var syncValues = function(hValue, sValue, group, isSync, isSync2){
    if(group === 'opponent' && isSync2) {
        oh1 = oh2 = oh3 = oh4 = hValue;
        os1 = os2 = os3 = os4 = sValue;
    }
    if(group === 'our' && isSync) {
        // notice s1 and h1 are independent!
        h2 = h3 = h4 = hValue;
        s2 = s3 = s4 = sValue;
    }
    if(group === 'decision') {
        h1 = hValue;
        s1 = sValue;
    }

}

var syncBars = function(value, group, isSync, isSync2) {
    if(group === 'opponent' && isSync2) {
        updateBar(value, 'obar1', 1, false);
        updateBar(value, 'obar2', 1, false);
        updateBar(value, 'obar3', 1, false);
        updateBar(value, 'obar4', 1, false);
    }
    if(group === 'our' && isSync) {
        updateBar(value, 'bar2', 0, false);
        updateBar(value, 'bar3', 0, false);
        updateBar(value, 'bar4', 0, false);
    }
    if(group === 'decision') {
        updateBar(value, 'bar1', 0, false);
        updateBarDecision(value, 'bard', false);
    }
}

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

var updateTotal = function() {
    ts = s1 + s2 + s3 + s4;
    th = h1 + h2 + h3 + h4;
    ots = os1 + os2 + os3 + os4;
    oth = oh1 + oh2 + oh3 + oh4;
}

var updatePwin = function() {
    efi = (1 + th)/(1 + ts);
    oefi = (1 + oth)/(1 + ots);
    efefo = efi * efo;
    oefefo = oefi * oefo;
    pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));
}

var updateAll = function() {
    updateTotal();
    updateBarHelp(th, oth);
    updateBarSabo(ts, ots);
    updatePwin();
    updatePie(pwin);

    updateEfficiencyBar(efi, oefi);
    updateStrengthBar(efi, oefi);
    updateStrengthText(efi, oefi);

    var payoffDisplay = document.getElementById('payoff');
    payoffDisplay.innerHTML = '<strong>' + (h1 + s1) + '</strong>' + ((h1 + s2 !== 0) ? ' tokens' : ' tokens');

    var loseNetPayoff = document.getElementById('losenetpayoff');
    loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + ((h1 + s2 !== 0) ? ' tokens' : ' tokens');

    var winNetPayoff = document.getElementById('winnetpayoff');
    winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + ((h1 + s2 !== 0) ? ' tokens' : ' tokens');

}

updateAll();



// Slider-bar initiations
// DECISION SLIDER - BAR
var dslider = document.getElementById('dSlider');
var dvalue = 0;
updateBarDecision(0, 'bard', false);
var payoffDisplay = document.getElementById('payoff');

// YOUR GROUP INITIATION
// leader
var lslider1 = document.getElementById('lSlider1');
var lvalue = 1;
updateBarLeader(lvalue, 'barl', 1, false);
// followers
var slider1 = document.getElementById('vSlider1');
var slider2 = document.getElementById('vSlider2');
var slider3 = document.getElementById('vSlider3');
var slider4 = document.getElementById('vSlider4');
var value1 = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;
updateBar(value1, 'bar1', 0, false);
updateBar(value2, 'bar2', 0, false);
updateBar(value3, 'bar3', 0, false);
updateBar(value4, 'bar4', 0, false);

// OPPOSING GROUP INITIATION
// leader
var olslider1 = document.getElementById('olSlider1');
var olvalue = 1;
updateBarLeader(olvalue, 'obarl', 0, false);
// followers
var oslider1 = document.getElementById('ovSlider1');
var oslider2 = document.getElementById('ovSlider2');
var oslider3 = document.getElementById('ovSlider3');
var oslider4 = document.getElementById('ovSlider4');
var ovalue1 = 0;
var ovalue2 = 0;
var ovalue3 = 0;
var ovalue4 = 0;
updateBar(ovalue1, 'obar1', 1, false);
updateBar(ovalue2, 'obar2', 1, false);
updateBar(ovalue3, 'obar3', 1, false);
updateBar(ovalue4, 'obar4', 1, false);


//DECISION
dslider.oninput = function() {
    dvalue = parseFloat(dslider.value);
    s1 = dvalue >= 0 ? 0 : -dvalue;
    h1 = dvalue >= 0 ? dvalue : 0;

    //synching values
    syncBars(dvalue, 'decision', syncOurGroup, syncOtherGroup);
    syncValues(h1, s1, 'decision', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarXAxis('bard', true);

    payoffDisplay.innerHTML = '<strong>' + (h1 + s1) + '</strong>' + ((h1 + s2 !== 0) ? ' tokens' : ' tokens');

    var loseNetPayoff = document.getElementById('losenetpayoff');
    loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + ((h1 + s2 !== 0) ? ' tokens' : ' tokens');

    var winNetPayoff = document.getElementById('winnetpayoff');
    winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + ((h1 + s2 !== 0) ? ' tokens' : ' tokens');

    //synching sliders
    $('#vSlider1').prop('value', dvalue);
    $('#vSlider1').change();
}

// YOUR GROUP
//Leader
lslider1.oninput = function() {
    lvalue = parseFloat(lslider1.value);
    efo = lvalue;
    updateBarLeader(lvalue, 'barl', 1, true);
    updateAll();
}

//Followers
// your decision
slider1.oninput = function() {
    value1 = parseFloat(slider1.value);
    s1 = value1 >= 0 ? 0 : -value1;
    h1 = value1 >= 0 ? value1 : 0;

    //synching values
    syncBars(value1, 'decision', syncOurGroup, syncOtherGroup);
    syncValues(h1, s1, 'decision', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('bar1', true);

    payoffDisplay.innerHTML = '<strong>' + (h1 + s1) + '</strong>' + ((h1 + s2 !== 0) ? ' tokens' : ' tokens');

    var loseNetPayoff = document.getElementById('losenetpayoff');
    loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + ((h1 + s2 !== 0) ? ' tokens' : ' tokens');

    var winNetPayoff = document.getElementById('winnetpayoff');
    winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + ((h1 + s2 !== 0) ? ' tokens' : ' tokens');

    //synching sliders
    $('#dSlider').prop('value', value1);
    $('#dSlider').change();
}

// Other Followers in your Group
slider2.oninput = function() {
    syncOurGroup = document.getElementById('mycheck').checked;
    value2 = parseFloat(slider2.value);
    s2 = value2 >= 0 ? 0 : -value2;
    h2 = value2 >= 0 ? value2 : 0;
    updateBar(value2, 'bar2', 0, false);

    //synching values
    syncBars(value2, 'our', syncOurGroup, syncOtherGroup);
    syncValues(h2, s2, 'our', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('bar2', true);

    //synching sliders
    if(syncOurGroup) {
        $('#vSlider3, #vSlider4').prop('value', value2);
        $('#vSlider3, #vSlider4').change();
    }

}
slider3.oninput = function() {
    syncOurGroup = document.getElementById('mycheck').checked;
    value3 = parseFloat(slider3.value);
    s3 = value3 >= 0 ? 0 : -value3;
    h3 = value3 >= 0 ? value3 : 0;
    updateBar(value3, 'bar3', 0, false);

    //synching values
    syncBars(value3, 'our', syncOurGroup, syncOtherGroup);
    syncValues(h3, s3, 'our', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('bar3', true);

    //synching sliders
    if(syncOurGroup) {
        $('#vSlider2, #vSlider4').prop('value', value3);
        $('#vSlider2, #vSlider4').change();
    }
}
slider4.oninput = function() {
    syncOurGroup = document.getElementById('mycheck').checked;
    value4 = parseFloat(slider4.value);
    s4 = value4 >= 0 ? 0 : -value4;
    h4 = value4 >= 0 ? value4 : 0;
    updateBar(value4, 'bar4', 0, false);

    //synching values
    syncBars(value4, 'our', syncOurGroup, syncOtherGroup);
    syncValues(h4, s4, 'our', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('bar4', true);

    //synching sliders
    if(syncOurGroup) {
        $('#vSlider2, #vSlider3').prop('value', value4);
        $('#vSlider2, #vSlider3').change();
    }
}

// OPPOSING GROUP

//Leader
olslider1.oninput = function() {
    olvalue = parseFloat(olslider1.value);
    oefo = olvalue;
    updateBarLeader(olvalue, 'obarl', 0, true);
    updateAll();
}

//Followers
oslider1.oninput = function() {
    syncOtherGroup = document.getElementById('mycheck2').checked;
    ovalue1 = parseFloat(oslider1.value);
    os1 = ovalue1 >= 0 ? 0 : -ovalue1;
    oh1 = ovalue1 >= 0 ? ovalue1 : 0;
    updateBar(ovalue1, 'obar1', 1, false);

    //synching values
    syncBars(ovalue1, 'opponent', syncOurGroup, syncOtherGroup);
    syncValues(oh1, os1, 'opponent', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('obar1', true);

    //synching sliders
    if(syncOtherGroup) {
        $('#ovSlider2, #ovSlider3, #ovSlider4').prop('value', ovalue1);
        $('#ovSlider2, #ovSlider3, #ovSlider4').change();
    }
}
oslider2.oninput = function() {
    syncOtherGroup = document.getElementById('mycheck2').checked;
    ovalue2 = parseFloat(oslider2.value);
    os2 = ovalue2 >= 0 ? 0 : -ovalue2;
    oh2 = ovalue2 >= 0 ? ovalue2 : 0;
    updateBar(ovalue2, 'obar2', 1, false);

    //synching values
    syncBars(ovalue2, 'opponent', syncOurGroup, syncOtherGroup);
    syncValues(oh2, os2, 'opponent', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('obar2', true);

    //synching sliders
    if(syncOtherGroup) {
        $('#ovSlider1, #ovSlider3, #ovSlider4').prop('value', ovalue2);
        $('#ovSlider1, #ovSlider3, #ovSlider4').change();
    }
}
oslider3.oninput = function() {
    syncOtherGroup = document.getElementById('mycheck2').checked;
    ovalue3 = parseFloat(oslider3.value);
    os3 = ovalue3 >= 0 ? 0 : -ovalue3;
    oh3 = ovalue3 >= 0 ? ovalue3 : 0;
    updateBar(ovalue3, 'obar3', 1, false);

    //synching values
    syncBars(ovalue3, 'opponent', syncOurGroup, syncOtherGroup);
    syncValues(oh3, os3, 'opponent', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('obar3', true);

    //synching sliders
    if(syncOtherGroup) {
        $('#ovSlider1, #ovSlider2, #ovSlider4').prop('value', ovalue3);
        $('#ovSlider1, #ovSlider2, #ovSlider4').change();
    }
}
oslider4.oninput = function() {
    syncOtherGroup = document.getElementById('mycheck2').checked;
    ovalue4 = parseFloat(oslider4.value);
    os4 = ovalue4 >= 0 ? 0 : -ovalue4;
    oh4 = ovalue4 >= 0 ? ovalue4 : 0;
    updateBar(ovalue4, 'obar4', 1, false);

    //synching values
    syncBars(ovalue4, 'opponent', syncOurGroup, syncOtherGroup);
    syncValues(oh4, os4, 'opponent', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('obar4', true);

    //synching sliders
    if(syncOtherGroup) {
        $('#ovSlider1, #ovSlider2, #ovSlider3').prop('value', ovalue4);
        $('#ovSlider1, #ovSlider2, #ovSlider3').change();
    }
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

$('#dSlider').hover(
    function() {
        setTimeout("updateBarXAxis('bard', true)", 250);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'17px'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#vSlider1')
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        $('#vSlider1').addClass('newnewSlider');
    },
    function() {
        setTimeout("updateBarXAxis('bard', false)", 1000);
        $('.yourdecisiontext').css({'font-weight':'200', 'font-size':'17px'});
        $('#dSlider').css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
        $('#vSlider1')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        $('#vSlider1').removeClass('newnewSlider');
    }
);



$('#vSlider1').hover(
    function() {
        setTimeout("updateBarYAxis('bar1', true)", 250);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'17px'});
        $('#vSlider1').css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#dSlider').addClass('newdSlider');

    },
    function() {
        setTimeout("updateBarYAxis('bar1', false)", 500);
        $('.yourdecisiontext').css({'font-weight':'200', 'font-size':'17px'});
        $('#vSlider1').css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        $('#dSlider').css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
        $('#dSlider').removeClass('newdSlider');
    }
);



$('#vSlider2').hover(
    function() {
        syncOurGroup = document.getElementById('mycheck').checked;
        var myString;
        if(syncOurGroup) {
            myString = '#vSlider2, #vSlider3, #vSlider4';
        } else { myString = '#vSlider2';}

        setTimeout("updateBarYAxis('bar2', true)", 250);

        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        if(syncOurGroup) {
            $('#vSlider3, #vSlider4').addClass('newnewSlider');
        }

    },
    function() {
        syncOurGroup = document.getElementById('mycheck').checked;
        var myString;
        if(syncOurGroup) {
            myString = '#vSlider2, #vSlider3, #vSlider4';
        } else { myString = '#vSlider2';}

        setTimeout("updateBarYAxis('bar2', false)", 500);
        $(myString)
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        if(syncOurGroup) {
            $('#vSlider3, #vSlider4').removeClass('newnewSlider');
        }

    }
);
$('#vSlider3').hover(
    function() {
        syncOurGroup = document.getElementById('mycheck').checked;
        var myString;
        if(syncOurGroup) {
            myString = '#vSlider2, #vSlider3, #vSlider4';
        } else { myString = '#vSlider3';}

        setTimeout("updateBarYAxis('bar3', true)", 250);
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        if(syncOurGroup) {
            $('#vSlider2, #vSlider4').addClass('newnewSlider');
        }

    },
    function() {
        syncOurGroup = document.getElementById('mycheck').checked;
        var myString;
        if(syncOurGroup) {
            myString = '#vSlider2, #vSlider3, #vSlider4';
        } else { myString = '#vSlider3';}

        setTimeout("updateBarYAxis('bar3', false)", 500);
        $(myString)
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        if(syncOurGroup) {
            $('#vSlider2, #vSlider4').removeClass('newnewSlider');
        }

    }
);
$('#vSlider4').hover(
    function() {
        syncOurGroup = document.getElementById('mycheck').checked;
        var myString;
        if(syncOurGroup) {
            myString = '#vSlider2, #vSlider3, #vSlider4';
        } else { myString = '#vSlider4';}

        setTimeout("updateBarYAxis('bar4', true)", 250);
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        if(syncOurGroup) {
            $('#vSlider2, #vSlider3').addClass('newnewSlider');
        }

    },
    function() {
        syncOurGroup = document.getElementById('mycheck').checked;
        var myString;
        if(syncOurGroup) {
            myString = '#vSlider2, #vSlider3, #vSlider4';
        } else { myString = '#vSlider4';}

        setTimeout("updateBarYAxis('bar4', false)", 500);
        $(myString)
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        if(syncOurGroup) {
            $('#vSlider2, #vSlider3').removeClass('newnewSlider');
        }

    }
);

$('#ovSlider1').hover(
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider1';}

        setTimeout("updateBarYAxis('obar1', true)", 250);
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});

        if(syncOtherGroup) {
            $(myString).addClass('newnewSlider');
        }
    },
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider1';}

        setTimeout("updateBarYAxis('obar1', false)", 500);
        $(myString)
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        if(syncOtherGroup) {
            $(myString).removeClass('newnewSlider');
        }
    }
);
$('#ovSlider2').hover(
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider2';}

        setTimeout("updateBarYAxis('obar2', true)", 250);
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        if(syncOtherGroup) {
            $(myString).addClass('newnewSlider');
        }
    },
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider2';}

        setTimeout("updateBarYAxis('obar2', false)", 500);
        $(myString)
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        if(syncOtherGroup) {
            $(myString).removeClass('newnewSlider');
        }
    }
);
$('#ovSlider3').hover(
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider3';}

        setTimeout("updateBarYAxis('obar3', true)", 250);
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        if(syncOtherGroup) {
            $(myString).addClass('newnewSlider');
        }
    },
    function() {
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider3';}

        setTimeout("updateBarYAxis('obar3', false)", 500);
        $(myString)
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        if(syncOtherGroup) {
            $(myString).removeClass('newnewSlider');
        }
    }
);
$('#ovSlider4').hover(
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider4';}

        setTimeout("updateBarYAxis('obar4', true)", 250);
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        if(syncOtherGroup) {
            $(myString).addClass('newnewSlider');
        }

    },
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4';
        } else { myString = '#ovSlider4';}

        setTimeout("updateBarYAxis('obar4', false)", 500);
        $(myString)
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        if(syncOtherGroup) {
            $(myString).removeClass('newnewSlider');
        }
    }
);



$('html, body').animate({scrollTop: 0}, 0);
