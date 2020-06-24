////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////////////////////////     CALCULATOR      //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var nzt = function(val) {
    return (val != 0) ? val : '';
}

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
            colors: ['rgb(225, 225, 225)', 'rgb(80, 80, 80)']
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
            range: [0,200]
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
            range: [-200,0]
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

    var mColor = ourSide ? 'rgb(80, 80, 80)' : 'rgb(225, 225, 225)';
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

var logistic2 = function(val , k) {
    var L = 1;
    var m = 0.5;
    var result;
    result= L / (1 + Math.exp(-k * (val - m)));
    return result;
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
            // color: 'rgb(160, 160, 160)',
            color: 'rgb(80, 80, 80)',
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

//VARIABLES AND GRAPHICS INITIATIONS


// Follower global variables for both groups
// your group
var s1, s2, h1, h2, ts, th;
s1 = s2 = h1 = h2 = ts = th = 0;
// opposing group
var os1, os2, oh1, oh2, ots, oth;
os1 = os2 = oh1 = oh2 = ots = oth = 0;

// leader global variables
var efo, efi, efefo, oefo, oefi, oefefo, pwin;
efo = oefo = 1;
efi = oefi = 1;

var syncOurGroup = true;
var syncOtherGroup  = document.getElementById('mycheck2').checked;


var syncValues = function(hValue, sValue, group, isSync, isSync2){
    if(group === 'opponent' && isSync2) {
        oh1 = oh2 = hValue;
        os1 = os2 = sValue;
    }
    if(group === 'our' && isSync) {
        // notice s1 and h1 are independent!
        h2 = hValue;
        s2 = sValue;
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
    }
    if(group === 'our') {
        updateBar(value, 'bar2', 0, false);
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
    ts = s1 + s2;
    th = h1 + h2;
    ots = os1 + os2;
    oth = oh1 + oh2;
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
    updatePie(1);
    updatePie(pwin);

    updateEfficiencyBar(efi, oefi);

    var experimented = ((th>0 && (oth > 0 || ots > 0)) || (ts>0 && (oth > 0 || ots > 0)));
    if(experimented) {
        // $('.totalbarwrap').css({'border':'3px dotted white'});
    }

    var payoffDisplay = document.getElementById('payoff');
    payoffDisplay.innerHTML = '<strong>' + (h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    var loseNetPayoff = document.getElementById('losenetpayoff');
    loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    var winNetPayoff = document.getElementById('winnetpayoff');
    winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' token');

    // console.log(ls1exp);
    // console.log(s2exp);
    // console.log(ols1exp);
    // console.log(os1exp);
    // console.log(os2exp);
    if(ls1exp && s2exp  && ols1exp && os1exp && os2exp) {
        $('.lockedmc2').css({'z-index':'1', 'opacity':'1'});
    }
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

var value1 = 0;
var value2 = 0;

updateBar(value1, 'bar1', 0, false);
updateBar(value2, 'bar2', 0, false);


// OPPOSING GROUP INITIATION
// leader
var olslider1 = document.getElementById('olSlider1');
var olvalue = 1;
updateBarLeader(olvalue, 'obarl', 0, false);
// followers
var oslider1 = document.getElementById('ovSlider1');
var oslider2 = document.getElementById('ovSlider2');

var ovalue1 = 0;
var ovalue2 = 0;

updateBar(ovalue1, 'obar1', 1, false);
updateBar(ovalue2, 'obar2', 1, false);



//DECISION
var dexp = false;
dslider.oninput = function() {
    dvalue = parseFloat(dslider.value);
    s1 = dvalue >= 0 ? 0 : -dvalue;
    h1 = dvalue >= 0 ? dvalue : 0;

    dexp = true;
    $('.dottedblue2').css({'border':'2px dotted white'})
    $('.lockedmc3').css({'z-index':'1', 'opacity':'1'});
    // $('.sliderbard').css({'border':'9px dotted white'});

    //synching values
    syncBars(dvalue, 'decision', syncOurGroup, syncOtherGroup);
    syncValues(h1, s1, 'decision', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarXAxis('bard', true);

    payoffDisplay.innerHTML = '<strong>' + (h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

    var loseNetPayoff = document.getElementById('losenetpayoff');
    loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

    var winNetPayoff = document.getElementById('winnetpayoff');
    winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

    //synching sliders
    $('#vSlider1').prop('value', dvalue);
    $('#vSlider1').change();
}

// YOUR GROUP
//Leader
var ls1exp = false;
lslider1.oninput = function() {
    ls1exp = true;
    lvalue = parseFloat(lslider1.value);
    efo = lvalue;
    updateBarLeader(lvalue, 'barl', 1, true);
    updateAll();
    $('.hll').css({'border':'2px dotted white'});
}

//Followers
// your decision
slider1.oninput = function() {
    value1 = parseFloat(slider1.value);
    s1 = value1 >= 0 ? 0 : -value1;
    h1 = value1 >= 0 ? value1 : 0;

    // $('.bluebar').css({'border':'3px dotted white'});

    //synching values
    syncBars(value1, 'decision', syncOurGroup, syncOtherGroup);
    syncValues(h1, s1, 'decision', syncOurGroup, syncOtherGroup);

    updateAll();
    updateBarYAxis('bar1', true);

    payoffDisplay.innerHTML = '<strong>' + (h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

    var loseNetPayoff = document.getElementById('losenetpayoff');
    loseNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

    var winNetPayoff = document.getElementById('winnetpayoff');
    winNetPayoff.innerHTML = '<strong>' + -(h1 + s1) + '</strong>' + (((h1 + s1) !== 0) ? ' tokens' : ' tokens');

    //synching sliders
    $('#dSlider').prop('value', value1);
    $('#dSlider').change();
}

// Other Followers in your Group
var s2exp = false;
slider2.oninput = function() {
    s2exp = true;
    value2 = parseFloat(slider2.value);
    s2 = value2 >= 0 ? 0 : -value2;
    h2 = value2 >= 0 ? value2 : 0;
    updateBar(value2, 'bar2', 0, false);

    //synching values
    syncBars(value2, 'our', true, syncOtherGroup);
    syncValues(h2, s2, 'our', true, syncOtherGroup);

    updateAll();
    updateBarYAxis('bar2', true);
    $('.hfl').css({'border':'2px dotted white'});
    //synching sliders

}


// OPPOSING GROUP

//Leader
var ols1exp = false;
olslider1.oninput = function() {
    ols1exp = true;
    olvalue = parseFloat(olslider1.value);
    oefo = olvalue;
    updateBarLeader(olvalue, 'obarl', 0, true);
    updateAll();
    $('.hlr').css({'border':'2px dotted white'});
}

//Followers
var os1exp = false;
oslider1.oninput = function() {
    os1exp = true;
    os2exp = true;
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
    $('.hfr').css({'border':'2px dotted white'});

    //synching sliders
    if(syncOtherGroup) {
        console.log('are we inside?');
        $('#ovSlider2').prop('value', ovalue1);
        $('#ovSlider2').change();
    }
}
var os2exp = false;
oslider2.oninput = function() {
    os1exp = true;
    os2exp = true;
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

    $('.hfr').css({'border':'2px dotted white'});
    //synching sliders
    if(syncOtherGroup) {
        $('#ovSlider1').prop('value', ovalue2);
        $('#ovSlider1').change();
    }
}



// HOVER AND FOCUSOUT EFFECT FOR XAXIS SHOWING UP
$('#lSlider1').hover(
    function() {
        setTimeout("updateBarXAxis('barl', true)", 250);
        $('.ldecisiontext1').css({'opacity':'0.7'});
    },
    function() {
        setTimeout("updateBarXAxis('barl', false)", 500);
        $('.ldecisiontext1').css({'opacity':'0.1'});
    }
);
$('#olSlider1').hover(
    function() {
        setTimeout("updateBarXAxis('obarl', true)", 250);
        $('.ldecisiontext2').css({'opacity':'0.7'});
    },
    function() {
        setTimeout("updateBarXAxis('obarl', false)", 500);
        $('.ldecisiontext2').css({'opacity':'0.1'});
    }
);


$('#dSlider').hover(
    function() {
        setTimeout("updateBarXAxis('bard', true)", 250);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'22px'});
        $('.yourdecisiontext21').css({'font-weight':'500','opacity':'1'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#vSlider1')
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        $('#vSlider1').addClass('newnewSlider');
    },
    function() {
        setTimeout("updateBarXAxis('bard', false)", 1000);
        $('.yourdecisiontext').css({'font-weight':'200', 'font-size':'22px'});
        $('.yourdecisiontext21').css({'font-weight':'500','opacity':'0.1'});
        $('#dSlider').css({'background':'gray', 'opacity':'0.1', 'margin-top': '35px'});
        $('#vSlider1')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        $('#vSlider1').removeClass('newnewSlider');
    }
);
$('#vSlider1').hover(
    function() {
        setTimeout("updateBarYAxis('bar1', true)", 250);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'22px'});
        $('.yourdecisiontext21').css({'font-weight':'500','opacity':'1'});
        $('#vSlider1').css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#dSlider').addClass('newdSlider');

    },
    function() {
        setTimeout("updateBarYAxis('bar1', false)", 500);
        $('.yourdecisiontext').css({'font-weight':'200', 'font-size':'22px'});
        $('.yourdecisiontext21').css({'font-weight':'500','opacity':'0.1'});
        $('#vSlider1').css({'background':'gray', 'opacity':'0.1', 'margin-left': '-90px'});
        $('#dSlider').css({'background':'gray', 'opacity':'0.1', 'margin-top': '35px'});
        $('#dSlider').removeClass('newdSlider');
    }
);


$('#vSlider2').hover(
    function() {
        var myString;
        myString = '#vSlider2';

        setTimeout("updateBarYAxis('bar2', true)", 250);
        $('.yourdecisiontext22').css({'font-weight':'500','opacity':'1'});
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
    },
    function() {
        var myString;
        myString = '#vSlider2';

        setTimeout("updateBarYAxis('bar2', false)", 500);
        $('.yourdecisiontext22').css({'font-weight':'500','opacity':'0.1'});
        $(myString)
        .css({'background':'gray', 'opacity':'0.1', 'margin-left': '-90px'});
    }
);

$('#ovSlider1').hover(
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString, myString2;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2';
            myString2 = '.yourdecisiontext41, .yourdecisiontext42';
        } else {
            myString = '#ovSlider1';
            myString2 = '.yourdecisiontext41';
        }

        setTimeout("updateBarYAxis('obar1', true)", 250);
        $(myString2).css({'font-weight':'500','opacity':'1'});
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});

        if(syncOtherGroup) {
            $(myString).addClass('newnewSlider');
        }
    },
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString, myString2;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2';
            myString2 = '.yourdecisiontext41, .yourdecisiontext42';
        } else {
            myString = '#ovSlider1';
            myString2 = '.yourdecisiontext41';
        }

        setTimeout("updateBarYAxis('obar1', false)", 500);
        $(myString2).css({'font-weight':'500','opacity':'0.1'});
        $(myString)
        .css({'background':'gray', 'opacity':'0.1', 'margin-left': '-90px'});
        if(syncOtherGroup) {
            $(myString).removeClass('newnewSlider');
        }
    }
);
$('#ovSlider2').hover(
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString, myString2;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2';
            myString2 = '.yourdecisiontext41, .yourdecisiontext42';
        } else {
            myString = '#ovSlider2';
            myString2 = '.yourdecisiontext42';
        }

        setTimeout("updateBarYAxis('obar2', true)", 250);
        $(myString2).css({'font-weight':'500','opacity':'1'});
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        if(syncOtherGroup) {
            $(myString).addClass('newnewSlider');
        }
    },
    function() {
        syncOtherGroup = document.getElementById('mycheck2').checked;
        var myString, myString2;
        if(syncOtherGroup) {
            myString = '#ovSlider1, #ovSlider2';
            myString2 = '.yourdecisiontext41, .yourdecisiontext42';
        } else {
            myString = '#ovSlider2';
            myString2 = '.yourdecisiontext42';
        }

        setTimeout("updateBarYAxis('obar2', false)", 500);
        $(myString2).css({'font-weight':'500','opacity':'0.1'});
        $(myString)
        .css({'background':'gray', 'opacity':'0.1', 'margin-left': '-90px'});
        if(syncOtherGroup) {
            $(myString).removeClass('newnewSlider');
        }
    }
);

var initialize = function() {
    $('.cursor-pointer').css({'cursor':'default'});
}

initialize();







/****************************************/
/****************************************/
/****************************************/
/************* INFO BOXES ***************/
/****************************************/
/****************************************/
/****************************************/
/************* INFO BOXES ***************/
/****************************************/
/****************************************/
/****************************************/
/************* INFO BOXES ***************/
/****************************************/
/****************************************/
/****************************************/
/************* INFO BOXES ***************/
/****************************************/
/****************************************/
/****************************************/
/****************************************/


var b0 = document.getElementById('b0');
b0.onclick = function() {
    var myheight = $('.mc0').height();
    var myString = -myheight + 'px';
    $('.mc0').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc1').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});
    // $('.mc1').css({'transition-delay':'0s'});
}

var b1 = document.getElementById('b1');
b1.onclick = function() {
    var myheight = $('.mc1').height();
    var myString = -myheight + 'px';
    $('.mc1').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc2').css({'position':'static', 'opacity':'1', 'background-color':'lavender'});
    $('.calculator').css({'opacity':'1'});
    $('html, body').animate({
        scrollTop: $('.mc2').height()*1.1
    }, 1000);
}
var b2 = document.getElementById('b2');
b2.onclick = function() {
    var myheight = $('.mc2').height();
    var myString = -myheight + 'px';
    $('.mc2').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc25').css({'position':'static', 'opacity':'1', 'background-color':'lavender'});
    $('.dottedred').css({'border':'2px dotted white'});
    $('.dottedred3').css({'border':'2px dotted red'});
    $('.dottedblue2').css({'border':'2px dotted white'});
    $('.switchwrap').css({'opacity':'1'});
}



var b25 = document.getElementById('b25');
b25.onclick = function() {
    var myheight = $('.mc25').height();
    var myString = -myheight + 'px';
    $('.mc25').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc3').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});
    $('.dottedred3').css({'border':'2px dotted white'});
    $('.dottedblue2').css({'border':'2px dotted blue'});
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 1000);
}




var b3 = document.getElementById('b3');
b3.onclick = function() {
    var myheight = $('.mc3').height();
    var myString = -myheight + 'px';
    $('.mc3').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc4').css({'position':'static', 'opacity':'1', 'background-color':'lavender'});
}

var b4 = document.getElementById('b4');
b4.onclick = function() {
    var myheight = $('.mc4').height();
    var myString = -myheight + 'px';
    $('.mc4').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc5').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});
    $('.continueButton').css({'opacity':'1'});
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    // console.log('button pressed');
}
