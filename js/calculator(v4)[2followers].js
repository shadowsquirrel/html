
updatePie = function(a) {
    x = a;
    y = 1-a;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if((x + y) === 0) {
        x = 1;
        y = 1;
    }
    var data = [{
        values: [y, x],
        labels: ['Opposing Leader', 'Your Leader'],
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: ['rgb(255,180,180)', 'rgb(180,180,255)']
        }
    }];

    var layout = {
        height: 120,
        width: 150,
        // title: 'Probability to Win',
        font:{
            size: 10
        },
        margin: {"t": 25, "b": 0, "l": 0, "r": 0},
        showlegend: false,
        //paper_bgcolor: 'rgb(255,165,0)'
    };

    Plotly.react('probabilityPie', data, layout, {displayModeBar: false});
}




updateBarHelp = function(a,b) {
    x = a;
    y = b;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;

    var data = [{
        y: [x, y],
        x: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(180,180,255)', 'rgb(255,180,180)']
        },
        //text: [x.toFixed(2), y.toFixed(2)],
        //textposition: 'auto'
    }];

    var layout = {
        barmode: 'group',
        height: 110,
        width: 150,
        // title: 'Total Help',
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        yaxis: {
            fixedrange: false,
            autorange: false,
            range: [0,200]
        },
    };

    Plotly.react('helpBar', data, layout, {displayModeBar: false});
}
updateBarSabo = function(a, b) {
    x = b;
    y = a;
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
            color: ['rgb(255,180,180)', 'rgb(180,180,255)']
            //color: ['rgb(180,180,255)', 'rgb(255,180,180)']
        },
        //text: [x.toFixed(2), y.toFixed(2)],
        //textposition: 'auto'
    }];

    var layout = {
        barmode: 'group',
        height: 110,
        width: 150,
        // title: 'Total Sabotage',
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        yaxis: {
            fixedrange: false,
            autorange: false,
            range: [0,200]
        },
    };

    Plotly.react('saboBar', data, layout, {displayModeBar: false});
}

u2z = function(a) {
    return (typeof(a) === 'undefined') ? 0 : a;
}

updatePie(0.5);
updateBarHelp(0, 0);
updateBarSabo(0, 0);


var myHelp, mySabo, hisSabo, hisHelp, theirSabo1, theirHelp1, theirSabo2, theirHelp2;
var myEffort, hisEffort, ourTotalSabo, ourTotalHelp, theirTotalSabo, theirTotalHelp;

var ourTotalHelpDisplay = document.getElementById('ourTotalHelpDecision');
var ourTotalSaboDisplay = document.getElementById('ourTotalSaboDecision');
var theirTotalHelpDisplay = document.getElementById('theirTotalHelpDecision');
var theirTotalSaboDisplay = document.getElementById('theirTotalSaboDecision');

// OUR GROUP

//  OTHER FOLLOWER
var hisSaboHelpSlider = document.getElementById("hisSaboHelpSlider");

hisSaboHelpSlider.oninput = function() {
    hisSaboHelpInput = hisSaboHelpSlider.value;
    if(hisSaboHelpInput <= 0) {
        hisSabo = parseFloat(-hisSaboHelpInput);
        hisHelp = 0;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

        ourTotalHelpDisplay.innerHTML = ourTotalHelp;
        ourTotalSaboDisplay.innerHTML = ourTotalSabo;
        theirTotalHelpDisplay.innerHTML = theirTotalHelp;
        theirTotalSaboDisplay.innerHTML = theirTotalSabo;

        updateBarHelp(ourTotalHelp, theirTotalHelp);
        updateBarSabo(ourTotalSabo, theirTotalSabo);
        updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
    }
    if(hisSaboHelpInput >= 0) {
        hisSabo = 0;
        hisHelp = parseFloat(hisSaboHelpInput);

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

        ourTotalHelpDisplay.innerHTML = ourTotalHelp;
        ourTotalSaboDisplay.innerHTML = ourTotalSabo;
        theirTotalHelpDisplay.innerHTML = theirTotalHelp;
        theirTotalSaboDisplay.innerHTML = theirTotalSabo;

        updateBarHelp(ourTotalHelp, theirTotalHelp);
        updateBarSabo(ourTotalSabo, theirTotalSabo);
        updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
    }
}


// LEADER
var myLeaderEffortSlider = document.getElementById("myLeaderEffortSlider");

var myLeaderOutputDisplay = document.getElementById('myLeaderEffortDecision');
myLeaderOutputDisplay.innerHTML = 0;

myLeaderEffortSlider.oninput = function() {

    myLeaderEffortInput = myLeaderEffortSlider.value;

    myLeaderOutputDisplay.innerHTML = myLeaderEffortInput;

    myEffort = parseFloat(myLeaderEffortInput);

    updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
}


// OPPOSING GROUP

// OPPOSING LEADER
var hisLeaderEffortSlider = document.getElementById("hisLeaderEffortSlider");

var hisLeaderOutputDisplay = document.getElementById('hisLeaderEffortDecision');
hisLeaderOutputDisplay.innerHTML = 0;

hisLeaderEffortSlider.oninput = function() {

    hisLeaderEffortInput = hisLeaderEffortSlider.value;

    hisLeaderOutputDisplay.innerHTML = hisLeaderEffortInput;

    hisEffort = parseFloat(hisLeaderEffortInput);

    updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
}


// OPPOSING FOLLOWER 1
var theirSaboHelpSlider1 = document.getElementById("theirSaboHelpSlider1");

theirSaboHelpSlider1.oninput = function() {

    theirSaboHelpInput1 = theirSaboHelpSlider1.value;

    if(theirSaboHelpInput1 <= 0) {
        theirSabo1 = parseFloat(-theirSaboHelpInput1);
        theirHelp1 = 0;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

        ourTotalHelpDisplay.innerHTML = ourTotalHelp;
        ourTotalSaboDisplay.innerHTML = ourTotalSabo;
        theirTotalHelpDisplay.innerHTML = theirTotalHelp;
        theirTotalSaboDisplay.innerHTML = theirTotalSabo;

        updateBarHelp(ourTotalHelp, theirTotalHelp);
        updateBarSabo(ourTotalSabo, theirTotalSabo);
        updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
    }

    if(theirSaboHelpInput1 >= 0) {
        theirSabo1 = 0;
        theirHelp1 = parseFloat(theirSaboHelpInput1);

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

        ourTotalHelpDisplay.innerHTML = ourTotalHelp;
        ourTotalSaboDisplay.innerHTML = ourTotalSabo;
        theirTotalHelpDisplay.innerHTML = theirTotalHelp;
        theirTotalSaboDisplay.innerHTML = theirTotalSabo;

        updateBarHelp(ourTotalHelp, theirTotalHelp);
        updateBarSabo(ourTotalSabo, theirTotalSabo);
        updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
    }
}

// OPPOSING FOLLOWER 2
var theirSaboHelpSlider2 = document.getElementById("theirSaboHelpSlider2");

theirSaboHelpSlider2.oninput = function() {
    theirSaboHelpInput2 = theirSaboHelpSlider2.value;
    if(theirSaboHelpInput2 <= 0) {
        theirSabo2 = parseFloat(-theirSaboHelpInput2);
        theirHelp2 = 0;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

        ourTotalHelpDisplay.innerHTML = ourTotalHelp;
        ourTotalSaboDisplay.innerHTML = ourTotalSabo;
        theirTotalHelpDisplay.innerHTML = theirTotalHelp;
        theirTotalSaboDisplay.innerHTML = theirTotalSabo;

        updateBarHelp(ourTotalHelp, theirTotalHelp);
        updateBarSabo(ourTotalSabo, theirTotalSabo);
        updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
    }
    if(theirSaboHelpInput2 >= 0) {
        theirSabo2 = 0;
        theirHelp2 = parseFloat(theirSaboHelpInput2);

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

        ourTotalHelpDisplay.innerHTML = ourTotalHelp;
        ourTotalSaboDisplay.innerHTML = ourTotalSabo;
        theirTotalHelpDisplay.innerHTML = theirTotalHelp;
        theirTotalSaboDisplay.innerHTML = theirTotalSabo;

        updateBarHelp(ourTotalHelp, theirTotalHelp);
        updateBarSabo(ourTotalSabo, theirTotalSabo);
        updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
    }
}


//ACTUAL DECISION (SAME AS HYPO CALCULATOR DECISION)
var mySaboOutputDisplay = document.getElementById('mySaboDecision');
var myHelpOutputDisplay = document.getElementById('myHelpDecision');
myHelpOutputDisplay.innerHTML = 0;
mySaboOutputDisplay.innerHTML = 0;

var mySaboHelpSlider = document.getElementById("mySaboHelpSlider");

mySaboHelpSlider.oninput = function() {
    mySaboHelpInput = mySaboHelpSlider.value;
    if(mySaboHelpInput <= 0) {
        mySabo = parseFloat(-mySaboHelpInput);
        myHelp = 0;

        mySaboOutputDisplay.innerHTML = mySabo;
        myHelpOutputDisplay.innerHTML = myHelp;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

        ourTotalHelpDisplay.innerHTML = ourTotalHelp;
        ourTotalSaboDisplay.innerHTML = ourTotalSabo;
        theirTotalHelpDisplay.innerHTML = theirTotalHelp;
        theirTotalSaboDisplay.innerHTML = theirTotalSabo;

        updateBarHelp(ourTotalHelp, theirTotalHelp);
        updateBarSabo(ourTotalSabo, theirTotalSabo);
        updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
    }
    if(mySaboHelpInput >= 0) {
        mySabo = 0;
        myHelp = parseFloat(mySaboHelpInput);

        myHelpOutputDisplay.innerHTML = myHelp;
        mySaboOutputDisplay.innerHTML = mySabo;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

        ourTotalHelpDisplay.innerHTML = ourTotalHelp;
        ourTotalSaboDisplay.innerHTML = ourTotalSabo;
        theirTotalHelpDisplay.innerHTML = theirTotalHelp;
        theirTotalSaboDisplay.innerHTML = theirTotalSabo;

        updateBarHelp(ourTotalHelp, theirTotalHelp);
        updateBarSabo(ourTotalSabo, theirTotalSabo);
        updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
    }
}







// var pwinDisplay = document.getElementById('pwin');
// pwinDisplay.innerHTML = 50.00.toFixed(2);

var updatePwin = function(efo, oefo, h, s, oh, os) {

    if(typeof(efo) === 'undefined') efo = 0;
    if(typeof(oefo) === 'undefined') oefo = 0;
    if(typeof(h) === 'undefined') h = 0;
    if(typeof(s) === 'undefined') s = 0;
    if(typeof(oh) === 'undefined') oh = 0;
    if(typeof(os) === 'undefined') os = 0;


    var efi = (1 + h)/(1 + s);
    var oefi = (1 + oh)/(1 + os);
    var efefo = efi * efo;
    var oefefo = oefi * oefo;
    var pwin = efefo / (efefo + oefefo);

    ((efo + oefo) === 0) ? pwin = 0.5 : (pwin = (pwin));
    var pwinGraphics = pwin;
    pwin = pwin.toFixed(2);

    //pwinDisplay.innerHTML = pwin;
    return pwinGraphics;
}
