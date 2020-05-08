
updateBar = function(a) {
    x = a;
    y = 1-a;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if((x + y) === 0) {
        x = 1;
        y = 1;
    }
    var data = [{
        y: [x, y],
        x: ['Opposing Leader', 'Your Leader'],
        labels: ['Opposing Leader', 'Your Leader'],
        type: 'bar',
        sort: false,
        hovertext: ['Your Leader', 'Opposing Leader'],
        hover: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(0,0,255)', 'rgb(255,0,0)']
        },
        text: [((100 * x).toFixed(2) + '%'), ((100 * y).toFixed(2) + '%')],
        textposition: 'auto'
    }];

    var layout = {
        barmode: 'group',
        height: 150,
        width: 150,
        yaxis: {
            fixedrange: false,
            autorange: false,
            range: [0,1]
        },
        title: 'Hide the Modebar',
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false
        // font:{
        //     size: 10
        // },
        // margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        // showlegend: false
    };

    Plotly.react('probabilityBar', data, layout, {displayModeBar: false});
}



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
            colors: ['rgb(255,0,0)', 'rgb(0,0,255)']
        }
    }];

    var layout = {
        height: 150,
        width: 150,
        font:{
            size: 10
        },
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false
    };

    Plotly.react('probabilityPie', data, layout, {displayModeBar: false});
}


updatePie(0.5);
updateBar(0.5)

var myEffort, hisEffort, hisSabo, hisHelp, theirSabo, theirHelp, myHelp, mySabo;


//  OTHER FOLLOWER
var hisSaboHelpSlider = document.getElementById("hisSaboHelpSlider");
var hisSaboOutputDisplay = document.getElementById('hisSaboDecision');
var hisHelpOutputDisplay = document.getElementById('hisHelpDecision');
hisHelpOutputDisplay.innerHTML = 0;
hisSaboOutputDisplay.innerHTML = 0;
hisSaboHelpSlider.oninput = function() {
    hisSaboHelpInput = hisSaboHelpSlider.value;
    if(hisSaboHelpInput <= 0) {
        hisSaboOutputDisplay.innerHTML = -hisSaboHelpInput;
        hisHelpOutputDisplay.innerHTML = 0;
        hisSabo = parseFloat(-hisSaboHelpInput);
        hisHelp = 0;
        updatePie(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        updateBar(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        //updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo);
    }
    if(hisSaboHelpInput >= 0) {
        hisHelpOutputDisplay.innerHTML = hisSaboHelpInput;
        hisSaboOutputDisplay.innerHTML = 0;
        hisSabo = 0;
        hisHelp = parseFloat(hisSaboHelpInput);
        updatePie(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        updateBar(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        //updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo);
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

    updatePie(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
    updateBar(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
    //updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo);
}

// OPPOSING LEADER
var hisLeaderEffortSlider = document.getElementById("hisLeaderEffortSlider");
var hisLeaderOutputDisplay = document.getElementById('hisLeaderEffortDecision');
hisLeaderOutputDisplay.innerHTML = 0;
hisLeaderEffortSlider.oninput = function() {
    hisLeaderEffortInput = hisLeaderEffortSlider.value;
    hisLeaderOutputDisplay.innerHTML = hisLeaderEffortInput;
    hisEffort = parseFloat(hisLeaderEffortInput);
    updatePie(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
    updateBar(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
    //updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo);
}


//  ALL OPPOSING FOLLOWERS
var theirSaboHelpSlider = document.getElementById("theirSaboHelpSlider");
var theirSaboOutputDisplay = document.getElementById('theirSaboDecision');
var theirHelpOutputDisplay = document.getElementById('theirHelpDecision');
theirHelpOutputDisplay.innerHTML = 0;
theirSaboOutputDisplay.innerHTML = 0;
theirSaboHelpSlider.oninput = function() {
    theirSaboHelpInput = theirSaboHelpSlider.value;
    if(theirSaboHelpInput <= 0) {
        theirSaboOutputDisplay.innerHTML = -theirSaboHelpInput;
        theirHelpOutputDisplay.innerHTML = 0;
        theirSabo = 2 * parseFloat(-theirSaboHelpInput);
        theirHelp = 2 * 0;
        updatePie(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        updateBar(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        //updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo);
    }
    if(theirSaboHelpInput >= 0) {
        theirHelpOutputDisplay.innerHTML = theirSaboHelpInput;
        theirSaboOutputDisplay.innerHTML = 0;
        theirSabo = 2 * 0;
        theirHelp = 2 * parseFloat(theirSaboHelpInput);
        updatePie(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        updateBar(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        //updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo);
    }
}


//ACTUAL DECISION (SAME AS HYPO CALCULATOR DECISION)
var mySaboHelpSlider = document.getElementById("mySaboHelpSlider");
var mySaboOutputDisplay = document.getElementById('mySaboDecision');
var myHelpOutputDisplay = document.getElementById('myHelpDecision');
myHelpOutputDisplay.innerHTML = 0;
mySaboOutputDisplay.innerHTML = 0;
mySaboHelpSlider.oninput = function() {
    mySaboHelpInput = mySaboHelpSlider.value;
    if(mySaboHelpInput <= 0) {
        mySabo = parseFloat(-mySaboHelpInput);
        myHelp = 0;
        mySaboOutputDisplay.innerHTML = mySabo;
        myHelpOutputDisplay.innerHTML = myHelp;
        updatePie(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        updateBar(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        //updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo);
    }
    if(mySaboHelpInput >= 0) {
        mySabo = 0;
        myHelp = parseFloat(mySaboHelpInput);
        myHelpOutputDisplay.innerHTML = myHelp;
        mySaboOutputDisplay.innerHTML = mySabo;
        updatePie(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        updateBar(updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo));
        //updatePwin(myEffort, hisEffort, myHelp, mySabo, hisHelp, hisSabo, theirHelp, theirSabo);
    }
}




var pwinDisplay = document.getElementById('pwin');
pwinDisplay.innerHTML = 50.00.toFixed(2);

var updatePwin = function(efo, oefo, h1, s1, h2, s2, oh, os) {

    if(typeof(efo) === 'undefined') efo = 0;
    if(typeof(oefo) === 'undefined') oefo = 0;
    if(typeof(h1) === 'undefined') h1 = 0;
    if(typeof(s1) === 'undefined') s1 = 0;
    if(typeof(h2) === 'undefined') h2 = 0;
    if(typeof(s2) === 'undefined') s2 = 0;
    if(typeof(oh) === 'undefined') oh = 0;
    if(typeof(os) === 'undefined') os = 0;


    var efi = (1 + h1 + h2)/(1 + s1 + s2);
    var oefi = (1 + oh)/(1 + os);
    var efefo = efi * efo;
    var oefefo = oefi * oefo;
    var pwin = efefo / (efefo + oefefo);
    var pwinGraphics = pwin;
    ((efo + oefo) === 0) ? pwin = 50 : (pwin = (pwin * 100));

    pwin = pwin.toFixed(2);

    pwinDisplay.innerHTML = pwin;
    return pwinGraphics;
}







var btn = document.getElementById('calculatorButton');
var on = 1;
btn.onclick = function() {
    var k, l;
    (on === 1) ? k = 'sticky' : k = 'absolute';
    (on === 1) ? l = 'visible' : l = 'hidden';
    document.getElementById("mycalculator").style.opacity = on;
    document.getElementById("mycalculator").style.visibility = l;
    document.getElementById("mycalculator").style.position = k;
    on = 1 - on;
}






var btn2 = document.getElementById('pbButton');
var on2 = 1;
btn2.onclick = function() {
    var k1, k2;
    (on2 === 1) ? k1 = '' : k1 = 'none';
    (on2 === 1) ? k2 = 'none' : k2 = '';
    document.getElementById("probabilityPie").style.display = k2;
    document.getElementById("probabilityBar").style.display = k1;
    on2 = 1 - on2;
}
