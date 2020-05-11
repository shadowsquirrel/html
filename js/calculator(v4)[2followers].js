
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
        name: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(180,180,255)', 'rgb(255,180,180)'],
            line: {
                color: 'rgb(5, 90, 255)',
                width: 1.5
            }
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
            color: ['rgb(255,180,180)', 'rgb(180,180,255)'],
            //color: ['rgb(180,180,255)', 'rgb(255,180,180)'],
            line: {
                color: 'rgb(255, 5, 5)',
                width: 1.5
            }
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

//initialize values
theirTotalSabo = 0;
theirTotalHelp = 0;

var ourTotalHelpDisplay = document.getElementById('ourTotalHelpDecision');
var ourTotalSaboDisplay = document.getElementById('ourTotalSaboDecision');
var theirTotalHelpDisplay = document.getElementById('theirTotalHelpDecision');
var theirTotalSaboDisplay = document.getElementById('theirTotalSaboDecision');

// OUR GROUP

// OUR DECISION IN THE CALCULATOR
var mySaboOutputDisplay2 = document.getElementById('msabo');
var myHelpOutputDisplay2 = document.getElementById('mhelp');
myHelpOutputDisplay2.innerHTML = 0;
mySaboOutputDisplay2.innerHTML = 0;
var mySaboOutputDisplay = document.getElementById('mySaboDecision');
var myHelpOutputDisplay = document.getElementById('myHelpDecision');

var mySaboHelpSlider2 = document.getElementById("mySaboHelpSlider2");

mySaboHelpSlider2.oninput = function() {
    mySaboHelpInput = mySaboHelpSlider2.value;
    if(mySaboHelpInput <= 0) {
        mySabo = parseFloat(-mySaboHelpInput);
        myHelp = 0;

        mySaboOutputDisplay2.innerHTML = mySabo;
        myHelpOutputDisplay2.innerHTML = myHelp;
        mySaboOutputDisplay.innerHTML = mySabo;
        myHelpOutputDisplay.innerHTML = myHelp;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

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

        myHelpOutputDisplay2.innerHTML = myHelp;
        mySaboOutputDisplay2.innerHTML = mySabo;
        mySaboOutputDisplay.innerHTML = mySabo;
        myHelpOutputDisplay.innerHTML = myHelp;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

        ourTotalHelpDisplay.innerHTML = ourTotalHelp;
        ourTotalSaboDisplay.innerHTML = ourTotalSabo;
        theirTotalHelpDisplay.innerHTML = theirTotalHelp;
        theirTotalSaboDisplay.innerHTML = theirTotalSabo;

        updateBarHelp(ourTotalHelp, theirTotalHelp);
        updateBarSabo(ourTotalSabo, theirTotalSabo);
        updatePie(updatePwin(myEffort, hisEffort, ourTotalHelp, ourTotalSabo, theirTotalHelp, theirTotalSabo));
    }

}



//  OTHER FOLLOWER
var hisSaboHelpSlider = document.getElementById("hisSaboHelpSlider");
document.getElementById('sabo1').innerHTML = 0;
document.getElementById('help1').innerHTML = 0;

hisSaboHelpSlider.oninput = function() {
    hisSaboHelpInput = hisSaboHelpSlider.value;
    var saboSide = document.getElementById('sabo1');
    var helpSide = document.getElementById('help1');

    if(hisSaboHelpInput <= 0) {
        hisSabo = parseFloat(-hisSaboHelpInput);
        hisHelp = 0;

        saboSide.innerHTML = hisSabo;
        helpSide.innerHTML = hisHelp;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);
        //console.log(ourTotalHelp+' '+ ourTotalSabo + ' ' + theirTotalHelp + ' ' + theirTotalSabo);

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

        saboSide.innerHTML = hisSabo;
        helpSide.innerHTML = hisHelp;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

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
document.getElementById('osabo1').innerHTML = 0;
document.getElementById('ohelp1').innerHTML = 0;

theirSaboHelpSlider1.oninput = function() {

    var saboSide = document.getElementById('osabo1');
    var helpSide = document.getElementById('ohelp1');
    var saboSide2 = document.getElementById('osabo2');
    var helpSide2 = document.getElementById('ohelp2');
    theirSaboHelpInput1 = theirSaboHelpSlider1.value;

    if(theirSaboHelpInput1 <= 0) {
        theirSabo1 = parseFloat(-theirSaboHelpInput1);
        theirHelp1 = 0;

        saboSide.innerHTML = theirSabo1;
        helpSide.innerHTML = theirHelp1;
        saboSide2.innerHTML = theirSabo1;
        helpSide2.innerHTML = theirHelp1;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);
        theirTotalSabo = u2z(theirSabo1) * 2;
        theirTotalHelp = u2z(theirHelp1) * 2;

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

        saboSide.innerHTML = theirSabo1;
        helpSide.innerHTML = theirHelp1;
        saboSide2.innerHTML = theirSabo1;
        helpSide2.innerHTML = theirHelp1;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);
        theirTotalSabo = u2z(theirSabo1) * 2;
        theirTotalHelp = u2z(theirHelp1) * 2;

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
document.getElementById('osabo2').innerHTML = 0;
document.getElementById('ohelp2').innerHTML = 0;

theirSaboHelpSlider2.oninput = function() {

    var saboSide = document.getElementById('osabo2');
    var helpSide = document.getElementById('ohelp2');
    var saboSide2 = document.getElementById('osabo1');
    var helpSide2 = document.getElementById('ohelp1');
    theirSaboHelpInput2 = theirSaboHelpSlider2.value;

    if(theirSaboHelpInput2 <= 0) {
        theirSabo2 = parseFloat(-theirSaboHelpInput2);
        theirHelp2 = 0;

        saboSide.innerHTML = theirSabo2;
        helpSide.innerHTML = theirHelp2;
        saboSide2.innerHTML = theirSabo2;
        helpSide2.innerHTML = theirHelp2;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);
        theirTotalSabo = u2z(theirSabo2) * 2;
        theirTotalHelp = u2z(theirHelp2) * 2;


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

        saboSide.innerHTML = theirSabo2;
        helpSide.innerHTML = theirHelp2;
        saboSide2.innerHTML = theirSabo2;
        helpSide2.innerHTML = theirHelp2;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);
        theirTotalSabo = u2z(theirSabo2) * 2;
        theirTotalHelp = u2z(theirHelp2) * 2;

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
// var mySaboOutputDisplay = document.getElementById('mySaboDecision');
// var myHelpOutputDisplay = document.getElementById('myHelpDecision');
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
        mySaboOutputDisplay2.innerHTML = mySabo;
        myHelpOutputDisplay2.innerHTML = myHelp;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);


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
        mySaboOutputDisplay2.innerHTML = mySabo;
        myHelpOutputDisplay2.innerHTML = myHelp;

        ourTotalSabo = u2z(hisSabo) + u2z(mySabo);
        ourTotalHelp = u2z(hisHelp) + u2z(myHelp);
        // theirTotalSabo = u2z(theirSabo1) + u2z(theirSabo2);
        // theirTotalHelp = u2z(theirHelp1) + u2z(theirHelp2);

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



////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////  STAGES / INFO SECTION ////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


var stagesButton = document.getElementById('test')

var b = 0;

stagesButton.onclick = function() {

    var k, l, m;

    k = (b === 1) ? '450px' : '0';
    l = (b === 1) ? '' : 'none';
    m = (b === 1) ? '1' : '0';


    document.getElementById("top").style.height = k;


    document.getElementById("boxes").style.display = l;
    document.getElementById("box").style.display = l;
    document.getElementById("boxSmall").style.display = l;
    document.getElementById("arrow").style.display = l;
    document.getElementById("arrowBox").style.display = l;
    document.getElementById("doubleBoxes").style.display = l;
    document.getElementById("stageInfos").style.display = l;



    b = 1 - b;
}




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// JQUERY /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



$(document).ready(function() {

    ////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// HOVER STAGES //////////////////////////////
    ////////////////////////////////////////////////////////////////////////////



    $('.s1b').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s1b').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
        },
        function() {
            //$('s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
        }
    );
    $('.s2b').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s2b').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
            $('.s2a').css('opacity','1');
            $('.s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
        },
        function() {
            // $('.s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a').css({'opacity':'0.3'});
        }
    );
    $('.s3b').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s3b').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
            $('.s3a').css('opacity','1');
            $('.s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s2a').css('opacity','1');

        },
        function() {
            // $('.s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a').css({'opacity':'0.3'});
        }
    );
    $('.s4bw').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s4bw').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
            $('.s4aw').css('opacity','1');
            $('.s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s3a, .s2a').css('opacity','1');

        },
        function() {
            // $('.s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4aw').css({'opacity':'0.3'});
        }
    );
    $('.s4bl').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s4bl').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
            $('.s4al').css('opacity','1');
            $('.s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s3a, .s2a').css('opacity','1');

        },
        function() {
            // $('.s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4al').css({'opacity':'0.3'});
        }
    );
    $('.s44bl').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s44bl').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
            $('.s44al').css('opacity','1');
            $('.s4bl, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s4al, .s3a, .s2a').css('opacity','1');

        },
        function() {
            // $('.s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4al, .s44al').css({'opacity':'0.3'});
        }
    );
    $('.s5bw').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s5bw').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
            $('.s5aw').css('opacity','1');
            $('.s4bw, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s4aw, .s3a, .s2a').css('opacity','1');

        },
        function() {
            // $('.s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4aw, .s5aw').css({'opacity':'0.3'});
        }
    );
    $('.s5bl').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s5bl').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
            $('.s5al').css('opacity','1');
            $('.s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s44al, .s4al, .s3a, .s2a').css('opacity','1');

        },
        function() {
            // $('.s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4al, .s44al, .s5al').css({'opacity':'0.3'});
        }
    );
    $('.s6bw').hover(
        function() {
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s6bw').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
            $('.s6aw').css('opacity','1');
            $('.s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s5aw, .s4aw, .s3a, .s2a').css('opacity','1');

        },
        function() {
            // $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
        }
    );
    $('.s6bl').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});


            $('.s6bl').css({'opacity': '1', 'border': 'solid green 2px', 'color': 'black'});
            $('.s6al').css('opacity','1');
            $('.s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s5al, .s44al, .s4al, .s3a, .s2a').css('opacity','1');

        },
        function() {
            //$('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            //$('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});
        }
    );

    ////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// HOVER SLIDES //////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    $('.dSlider').hover(
        function() {
            $('.slm').css({'background':'red'});
            $('.slm').addClass('blackthumb1');
            $('.mySlider').css({'opacity':'1'});

        },
        function() {
            $('.slm').css({'background':'black'});
            $('.slm').removeClass('blackthumb1');
            $('.mySlider').css({'opacity':'0.3'});
        }
    )

    $('.mySlider').hover(
        function() {
            $('.slm').css({'background':'red'});
            $('.slm').addClass('blackthumb1');
            $('.mySlider').css({'opacity':'1'});

        },
        function() {
            $('.slm').css({'background':'black'});
            $('.slm').removeClass('blackthumb1');
            $('.mySlider').css({'opacity':'0.3'});
        }
    )




    var bundled, obundled;
    obundled = 1;

    if(obundled === 1) {
        $('.os').hover(
            function() {
                $('.os').css({'background':'black'});
                $('.os').addClass('orangethumb1');
                $('.os').addClass('orangethumb2');


            },
            function() {
                $('.os').css({'background':'#d3d3d3', 'color':'black'});
                $('.os').removeClass('orangethumb1');
                $('.os').removeClass('orangethumb2');

            }
        )
    }




    ////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// SYNC SLIDES ///////////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    // I will get infinite loops of one change calling the other change
    // 'Maximum call stack size exceeded error'
    // So I came up with  x and y switches to turn of the releted listener
    // Note for 4 slider case I will need x,y,x,w and turn all to 1 exept
    // the one that needs to listen.
    var x = 0;
    var y = 0;


    $("#mySaboHelpSlider").on("change", function(){
        y = 1;
        if(x === 0) {
            var mySliderDecision = this.value;

            $("#mySaboHelpSlider2").prop("value", mySliderDecision);
            $("#mySaboHelpSlider2").change();
        }
        y = 0;
    });

    $("#mySaboHelpSlider2").on("change", function(){
        x = 1;
        if(y === 0) {
            var mySliderDecision2 = this.value;

            $("#mySaboHelpSlider").prop("value", mySliderDecision2);
            $("#mySaboHelpSlider").change();
        }
        x = 0;
    });


    $("#theirSaboHelpSlider1").on("change", function(){
        y = 1;
        if(x === 0){
            //$("#theirSaboHelpSlider2").off('change');
            var theirSliderDecision1 = this.value;

            $("#theirSaboHelpSlider2").prop("value", theirSliderDecision1);
            $("#theirSaboHelpSlider2").change();
            //$("#theirSaboHelpSlider2").on('change');
        }
        y = 0;
    });


    $("#theirSaboHelpSlider2").on("change", function(){
        x = 1;
        if(y === 0){
            //$("#theirSaboHelpSlider1").off('change');
            var theirSliderDecision2 = this.value;

            $("#theirSaboHelpSlider1").prop("value", theirSliderDecision2);
            $("#theirSaboHelpSlider1").change();
            //$("#theirSaboHelpSlider1").on('change');
        }
        x = 0;
    });



});
