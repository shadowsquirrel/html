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
    var temp = [false, false];
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
info.beliefs = {};

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
///////////////////////////////   GRAPHICS   ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var setFollowerText = function(me) {
    var followersTag = [0, 1];
    followersTag.splice(info.me, 1);
    var otherFollowers = followersTag;
    var youFollowerText = document.getElementById('youfollower');
    var f1text = document.getElementById('otherfollower1');
    var maintagdisplay = document.getElementById('maintagdisplay');

    maintagdisplay.innerHTML = 'Follower ' + (me + 1);
    youFollowerText.innerHTML = 'Follower ' + (me + 1) + ' ';
    f1text.innerHTML = 'Follower ' + (otherFollowers[0] + 1);
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

var setStrengthBar = function(efi1, efi2) {

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



    Plotly.react('efficiencyColoryou', leader1, layout, {displayModeBar: false});
    Plotly.react('efficiencyColorf1', leader2, layout, {displayModeBar: false});
}

var setStrengthText = function(efi1, efi2) {
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
        position2 = 'advantaged';
        position1 = 'disadvantaged';
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
        document.getElementById('advtxt1you').innerHTML = same;
        document.getElementById('advtxt2f1').innerHTML = same;
    }




}

// Need to modify it for other treatments
var setEfficiencyBar = function() {

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
            color: 'rgb(80, 80, 80)',
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
            color: 'rgb(225, 225, 225)',
        },
        text: 1,
        textposition: 'inside',
        insidetextanchor: 'middle',
        textfont: {
            size: '14'
        },
    };

    var myHeight = 48//60;

    var data = [f1, f2];

    var layout = {
        title:{
            text:  "Relative Power",
            size: 2,
            yref: 'paper',
            y: 0,
            yanchor: 'top',
        },
        hoverinfo: 'none',
        barmode: 'stack',
        height: myHeight,//60
        width: 170,
        margin: {"t": 0, "b": 20, "l": 0, "r": 0},
        xaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,2],
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

    Plotly.react('efficiency', data, layout, {displayModeBar: false});
}

////////////////////////////////////

var nzt = function(val) {
    return (val != 0) ? val : '';
}

var setHelpBar = function(a, b, barId, ourGroup, me) {

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
        colorArray[me] = 'black';
        colorWidth[me] = 2;
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


    var layout = {
        barmode: 'overlay',
        height: 80,
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
        },
        bargap: 0.2,
        bargroupgap:0,
    };

    var data = [actual];


    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var setTotalHelpBar = function(a, b, barId) {

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
        height: 80,
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

var setSaboBar = function(a, b, barId, ourGroup, me) {

    var x = -a;
    var y = -b;

    var myOpacity = 1;//[1, 1, 1, 1];
    var myText = [nzt(a), nzt(b)];

    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';
    var ourColor = ourGroup ? red : lightred;

    var colorArray = ['', ''];
    var colorWidth = [0, 0];
    if (me!==-1) {
        colorArray[me] = 'black';
        colorWidth[me] = 2;
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


    var layout = {
        barmode: 'overlay',
        height: 80,
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
        bargap: 0.2,
        // bargroupgap:0,
    };

    var data = [actual];

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var setTotalSaboBar = function(a, b, barId) {

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
        height: 80,
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

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////////////////////////     CALCULATOR      //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// first argument is always the observant subject
var updatePie = function(a, b, me) {

    var x = a;
    var y = b;
    var actualData = [y, x];
    var actualOpacity = 1;
    var actualColors = [ 'rgb(225, 225, 225)', 'rgb(80, 80, 80)'];



    if((x + y) === 0) {
        x = 1;
        y = 1;
    }

    var textArray = ['', '']
    var colorArray = ['black', 'black'];
    var colorWidth = [1, 1];
    var labelArray = [ 'Follower 2', 'Follower 1'];
    // rearrange the label array so that observent subject is the first one

    var myLabel = labelArray[me];
    labelArray.splice(me ,1);


    labelArray.splice(0, 0, myLabel);


    // textArray[1] = 'You';


    var actual = {
        values: [y, x],
        labels: labelArray,
        text: textArray,
        // textposition: 'outside',
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: actualColors,
        },
        opacity: actualOpacity,
    };


    var layout = {
        autosize: false,
        // title:{
        //     text:  "Probability to Win",
        //     size: 2,
        //     yref: 'paper',
        //     yanchor: 'top',
        //     y:1,
        // },
        height: 140,//200,
        width: 140,//200,
        font:{
            size: 12
        },
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false,
    };

    var data = [actual];

    Plotly.react('pie', data, layout, {displayModeBar: false});
}

// followerId 0 for the subject and other numbers of opponent followers
var updateBarFollower = function(e, barId, followerIndex, axisOn) {
    // var val1 = efi / (efi + oefi);
    // var val2 = oefi / (efi + oefi);
    var y = e;
    if(typeof(x) === 'undefined') x = 0;

    var myColors = ['rgb(80, 80, 80)', 'rgb(225, 225, 225)'];

    var mColor = myColors[followerIndex];

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
            range: [0,400],
            layer: 'below traces',
            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400],
            ticktext: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400],
            tickangle: -45,
            ticks:'',
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,
            gridcolor: "rgb(202, 202, 202)",
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
            color: 'rgb(80, 80, 80)',
            line: {
                color: 'none',
                width: 0
            }
        },
        text: [y],
        textfont: {
            size: '35',
        },
        textanchor: 'right',
        textposition: 'outside',
        cliponaxis: false,
            }];

    var layout = {
        barmode: 'group',

        // Setup Large
        height: 75,

        width: 1100,
        margin: {"t": 20, "b": 25, "l": 32, "r": 34},
        xaxis: {
            side: 'top',
            fixedrange: true,
            autorange: false,
            range: [0,400],
            layer: 'below traces',


            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400],
            ticktext: [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 300, 400],
            tickangle: -45,
            ticks:'',
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

var updateEffortBar = function(a, b) {

    var x = a;
    var y = b;

    var actualData = [x, y];
    var myText = [x, y];
    var temp = myText[0];
    var myOpacity = 1;
    var actualColors = ['rgb(80, 80, 80)', 'rgb(225, 225, 225)'];
    var actualXPosition = [1, 2];


    var colorArray = ['', ''];
    var colorWidth = [0, 0];
    colorArray[0] = 'yellow';//'lightgreen';
    colorWidth[0] = 3;

    var actual = {
        y: actualData,
        x: actualXPosition,
        myname: ['f1', 'f2'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: actualColors,
        },
        text: myText,
        textposition: 'outside',
        textfont: {
            size: '14'
        },
        cliponaxis: false,
        opacity: myOpacity,
    };

    var myWidth = 220;

    var layout = {
        title: "Token's Invested",
        titlefont: {
            size: 16,
        },


        barmode: 'overlay',
        height: 150,
        width: myWidth,
        margin: {"t": 60, "b": 0, "l": 30, "r": 30},
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

    Plotly.react('effortbars', data, layout, {displayModeBar: false});
}



//Top BUTTON
var multiButton2 = document.getElementById('multibutton3');
var bName = document.getElementById('buttonname');
bName.innerHTML = 'Decision Section';
var bbSwitch2 = 0;
multiButton2.onclick = function() {
    var bName = document.getElementById('buttonname')

    if(bbSwitch2===0) {
        bName.innerHTML = 'Info Section';
        $('html, body').animate({scrollTop: $(document).height()}, 1000);
    }

    if(bbSwitch2===1) {
        bName.innerHTML = 'Decision Section';
        $('html, body').animate({scrollTop: 0}, 500);
    }

    bbSwitch2 = 1 - bbSwitch2;
}
//VARIABLES AND GRAPHICS INITIATIONS




// leader global variables
var e1, e2;
e1 = e2 = 0;


var syncValues = function(eValue) {
        e1 = eValue;
}

var syncBars = function(value) {
    updateBarFollower(value, 'mybar', 0, false);
    updateBarDecision(value, 'bard', false);
}

var updateBarXAxis = function(barId, axisSwitch) {
    var update = {
        'xaxis.showgrid': axisSwitch,
        'xaxis.showticklabels': axisSwitch
    };
    Plotly.relayout(barId, update);
}

var initialize = function() {
    setHelpBar(info.h1, info.h2, 'helpbarg1', true, info.me);
    setSaboBar(info.s1, info.s2, 'sabobarg1', true, info.me);

    setTotalHelpBar(info.th(), info.oth(), 'helpbartotal');
    setTotalSaboBar(info.ts(), info.ots(), 'sabobartotal');

    // for opposing group me variable gets -1 to signal that there is no me
    setHelpBar(info.oh1, info.oh2, 'helpbarg2', false, -1);
    setSaboBar(info.os1, info.os2, 'sabobarg2', false, -1);



    setFollowerText(info.me);
    setEfficiencyBar();
    setStrengthBar(1, 1);
    setStrengthText(1, 1);

    updateBarFollower(0, 'mybar', 0, false);
    updateBarDecision(0, 'bard', false);

    updateBarFollower(0, 'barf1', 1, false);


    //first element always the actual subject
    updatePie(0, 0, info.me);
    updateEffortBar(0, 0)

    var payoffDisplay = document.getElementById('payoff');
    payoffDisplay.innerHTML = '<strong>' + (e1)  + '</strong>' + ((e1 > 1) ? ' tokens' : ' token');
}

var updateAll = function() {
    updatePie(e1, e2, info.me);
    updateEffortBar(e1, e2);

    updateBarFollower(e1, 'mybar', 0, false)
    updateBarDecision(e1, 'dSlider', false);

    updateBarFollower(e2, 'barf1', 1, false)

    var payoffDisplay = document.getElementById('payoff');
    payoffDisplay.innerHTML = '<strong>' + (e1)  + '</strong>' + ((e1 > 1) ? ' tokens' : ' token');
}

initialize();


//////// Slider-bar initiations ///////

// DECISION SLIDER - BAR
var dslider = document.getElementById('dSlider');
var dvalue = 0;
updateBarDecision(0, 'bard', false);


// YOUR GROUP INITIATION
var fslider1 = document.getElementById('fSlider1');
var fvalue = 0;
updateBarFollower(fvalue, 'mybar', 0, false);


// OTHER FOLLOWERS INITIATION
var ofslider1 = document.getElementById('ofSlider1');
var ofvalue1 = 0;
updateBarFollower(ofvalue1, 'barf1', 1, false);


//DECISION
dslider.oninput = function() {
    dvalue = parseFloat(dslider.value);
    e1 = dvalue
    syncBars(dvalue);
    syncValues(dvalue);
    updateAll();
    updateBarXAxis('bard', true);
    //synching sliders
    $('#fSlider1').prop('value', dvalue);
    $('#fSlider1').change();
}


// CALCULATOR

//me (follower)
fslider1.oninput = function() {
    fvalue = parseFloat(fslider1.value);
    e1 = fvalue;
    syncBars(fvalue);
    syncValues(fvalue);
    updateAll();
    updateBarXAxis('mybar', true);
    //synching sliders
    $('#dSlider').prop('value', fvalue);
    $('#dSlider').change();
}

//other follower 1
ofslider1.oninput = function() {
    ofvalue1 = parseFloat(ofslider1.value);
    e2 = ofvalue1;
    updateAll();
    updateBarXAxis('barf1', true);
}

// HOVER AND FOCUSOUT EFFECT FOR XAXIS SHOWING UP
$('#dSlider').hover(
    function() {
        setTimeout("updateBarXAxis('bard', true)", 250);
        $('#fSlider1, #dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#fSlider1').addClass('newdSlider');
    },
    function() {
        setTimeout("updateBarXAxis('bard', false)", 1000);
        $('#fSlider1, #dSlider').css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
        $('#fSlider1').removeClass('newdSlider');

    }
);

$('#fSlider1').hover(
    function() {
        setTimeout("updateBarXAxis('mybar', true)", 250);
        $('#dSlider, #fSlider1').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#dSlider').addClass('newdSlider');
    },
    function() {
        setTimeout("updateBarXAxis('mybar', false)", 500);
        $('#dSlider, #fSlider1').css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
        $('#dSlider').removeClass('newdSlider');
    }
);


$('#ofSlider1').hover(
    function() {
        setTimeout("updateBarXAxis('barf1', true)", 250);
        $('#ofSlider1')
        .css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
    },
    function() {
        setTimeout("updateBarXAxis('barf1', false)", 500);
        $('#ofSlider1')
        .css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
    }
);
