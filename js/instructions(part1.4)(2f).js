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
            range: [0,800],
            layer: 'below traces',
            fixedrange: true,

            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 25, 50, 100, 150, 200, 250, 350, 500, 650,800],
            ticktext: [0, 25, 50, 100, 150, 200, 250, 350, 500, 650,800],
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

    if((!syncOurGroup || !syncOtherGroup) && sexperimented)
    {
        $('.lockedmc25').css({'z-index':'1', 'opacity':'1'});
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
    $('.sliderbard').css({'border':'5px solid white'});
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
var sexperimented = false;
var os1exp = false;
oslider1.oninput = function() {
    if(!syncOtherGroup) {
        sexperimented = true;
    }
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
    if(!syncOtherGroup) {
        sexperimented = true;
    }
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
        $('.ldecisiontext1').css({'color':'red'});
    },
    function() {
        setTimeout("updateBarXAxis('barl', false)", 500);
        $('.ldecisiontext1').css({'color':'black'});
    }
);
$('#olSlider1').hover(
    function() {
        setTimeout("updateBarXAxis('obarl', true)", 250);
        $('.ldecisiontext2').css({'color':'red'});
    },
    function() {
        setTimeout("updateBarXAxis('obarl', false)", 500);
        $('.ldecisiontext2').css({'color':'black'});
    }
);


$('#dSlider').hover(
    function() {
        setTimeout("updateBarXAxis('bard', true)", 250);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'22px', 'color':'red'});
        $('.yourdecisiontext21').css({'font-weight':'500','opacity':'1', 'color':'red'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#vSlider1')
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        $('#vSlider1').addClass('newnewSlider');
    },
    function() {
        setTimeout("updateBarXAxis('bard', false)", 1000);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'22px', 'color':'black'});
        $('.yourdecisiontext21').css({'font-weight':'500','opacity':'1', 'color':'black'});
        $('#dSlider').css({'background':'gray', 'opacity':'0.1', 'margin-top': '35px'});
        $('#vSlider1')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-90px'});
        $('#vSlider1').removeClass('newnewSlider');
    }
);
$('#vSlider1').hover(
    function() {
        setTimeout("updateBarYAxis('bar1', true)", 250);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'22px', 'color':'red'});
        $('.yourdecisiontext21').css({'font-weight':'500','opacity':'1', 'color':'red'});
        $('#vSlider1').css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#dSlider').addClass('newdSlider');

    },
    function() {
        setTimeout("updateBarYAxis('bar1', false)", 500);
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'22px', 'color':'black'});
        $('.yourdecisiontext21').css({'font-weight':'500','opacity':'1', 'color':'black'});
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
        $('.yourdecisiontext22').css({'font-weight':'500','opacity':'1', 'color':'red'});
        $(myString)
        .css({'background':'black', 'opacity':'1', 'margin-left': '-78px'});
    },
    function() {
        var myString;
        myString = '#vSlider2';

        setTimeout("updateBarYAxis('bar2', false)", 500);
        $('.yourdecisiontext22').css({'font-weight':'500','opacity':'1', 'color':'black'});
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
        $(myString2).css({'font-weight':'500','opacity':'1', 'color':'red'});
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
        $(myString2).css({'font-weight':'500','opacity':'1', 'color':'black'});
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
        $(myString2).css({'font-weight':'500','opacity':'1', 'color':'red'});
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
        $(myString2).css({'font-weight':'500','opacity':'1', 'color':'black'});
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



var checkButton = document.getElementById('mycheck2');
checkButton.onclick = function() {
    if(document.getElementById('mycheck2').checked) {
        $('.locked').css({'opacity':'1'});
        $('.unlocked').css({'opacity':'0'});
    }
    if(!document.getElementById('mycheck2').checked) {
        $('.locked').css({'opacity':'0'});
        $('.unlocked').css({'opacity':'1'});
    }
}


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
$('.cb').css({'z-index':'-10'});
$('#b0').css({'z-index':'1'});
var b0 = document.getElementById('b0');
b0.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    $('#b025').css({'z-index':'1'});

    var myheight = $('.mc0').height();
    var myString = -myheight + 'px';

    $('.mc0').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc025').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});
    $('.sliderbard').css({'border':'0px'});
    stopRotations();
    setTimeout('startRotations()', 100);
}

var b025 = document.getElementById('b025');
b025.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    $('#b075').css({'z-index':'1'});
    var myheight = $('.mc025').height();
    var myString = -myheight + 'px';
    $('.mc025').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc075').css({'position':'static', 'opacity':'1', 'background-color':'lavender'});
    $('.sliderbard').css({'border':'0px'});

    stopRotations();
    resetRotateMyValues12();
}

var b075 = document.getElementById('b075');
b075.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    $('#b1').css({'z-index':'1'});

    var myheight = $('.mc075').height();
    var myString = -myheight + 'px';
    $('.mc075').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc1').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});
    $('.sliderbard').css({'border':'0px'});

    stopRotations();
}

var b1 = document.getElementById('b1');
b1.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    $('#b2').css({'z-index':'1'});
    var myheight = $('.mc1').height();
    var myString = -myheight + 'px';
    $('.mc1').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc2').css({'position':'static', 'opacity':'1', 'background-color':'lavender'});
    $('.calculator').css({'opacity':'1'});
    stopRotations();
    resetRotateMyValues12();
    setTimeout('startRotations()', 100);

    $('.titlesection, .topsection, .middlesection, .bottomsection').css({'transition':'1s', 'transition-delay':'0s'});
    $('.titlesection, .topsection, .middlesection, .bottomsection').css({'opacity':'1', 'z-index':'0'});
    $('.topsection').css({'margin-top':'0px'});
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 1000);
    $('.dinfo').css({'display':'none'});


   $('.slider, .lslider, .dslider').css({'z-index':'-10'});
   $('.switchwrap').css({'opacity':'0'});

/*



   // setTimeout('rotateMyLeaderAll2(702,43)',1000);
   // setTimeout('stopAnimations()', 3000);
   // setTimeout('resetLeaderRotations()', 3500);
   // setTimeout('rotateMyLeaderAll(704,44, 6)',1000);
   // setTimeout('rotateMyLeader(55, 55)', 8500)
   // setTimeout('rotateMyLeader3(506, 43)', 17000)
   // setTimeout('rotateMyLeader32(193, 100)', 28000)


    // setTimeout('rotateMyLeaderAll2(202)',0);
    // setTimeout('rotateMyValues2(50, 5)', 0);
    // setTimeout('rotateMyValues(50, 5)', 5000);


    // setTimeout('rotateMyLeaderAll(304,93)',500);
    // setTimeout('rotateMyLeader(93, 93)', 4500)
    // setTimeout('rotateMyLeader3(350, 100)', 8500)


    // // genel gosterme sequencei 28s
    // setTimeout('rotateMyLeaderAll2(202)',0);
    // setTimeout('rotateMe(70, 70)', 3000);
    // setTimeout('stopRotations()', 16500);
    // setTimeout('startRotations()', 17000);
    // setTimeout('rotateMe(-50, -50)', 17010);
    // setTimeout('rotateMyLeaderAll(505,94, 6)',32000);
    // setTimeout('rotateMyLeader3(406, 100)', 40000)

    // follower all move display -12s
    // setTimeout('rotateMyValues2(60, 5)', 600);
    // setTimeout('rotateMyValues(60, 5)', 100);


    // LEADER SEQUENCE - 20 seconds
    // setTimeout('rotateMyLeaderAll(304,93)',500);
    // setTimeout('rotateMyLeader(93, 93)', 4500)
    // setTimeout('rotateMyLeader3(406, 100)', 9000)
    // setTimeout('rotateMyLeader32(193, 100)', 17500)

    // set leaders effort investigate sabotage investigate same leader effort - 26seconds
    // setTimeout('rotateMyLeaderAll2(202)',100);
    // setTimeout('rotateMe(-60, -60)', 3000);
    // setTimeout('rotateMyLeaderAll(505,94, 6)',20000);

    // setTimeout('rotateMyLeader(50, 50)',20000)

    // setTimeout('resetLeaderRotations()',3000);
    // setTimeout('rotateMyLeaderAll(704,52)',3100);
    // setTimeout('resetLeaderRotations()',6100);
    // setTimeout('rotateMyLeaderAll(204,192)',6200);



    // FULL FOLLOWERS SEQUENCE
    // setTimeout('rotateMyValues2(60, 5)', 600);
    // setTimeout('rotateMyValues(60, 5)', 100);
    // setTimeout('stopRotations()', 6500);
    // setTimeout('startRotations()', 6600);
    // setTimeout('rotateMe(60, 60)', 6700);
    // setTimeout('stopRotations()', 13000);
    // setTimeout('startRotations()', 13100);
    // setTimeout('rotateMe(-60, -60)', 13200);



    // setTimeout('stopRotations()', 100);
    // setTimeout('startRotations()', 200);
    // setTimeout('rotateMe(60, 60)', 300);
    // setTimeout('stopRotations()', 10000);
    // setTimeout('startRotations()', 10500);
    // setTimeout('rotateMe(60, 60)', 600);
    // setTimeout('stopRotations()', 20100);
    // setTimeout('startRotations()', 20500);
    // setTimeout('rotateMe(-60, -60)', 12600);
    // setTimeout('stopRotations()', 31000);
    // setTimeout('startRotations()', 31500);
    // setTimeout('rotateMe(-60, -60)', 20600);


    // setTimeout('rotateMe(-50, -50)', 1000);
    // setTimeout('rotateMe(-20, -30)', 15000);
    // setTimeout('rotateMe(-5, -10)', 25000);
    // setTimeout('rotateMe(50, 0)', 1000);
    // setTimeout('rotateMe(-1, 0)', 5000);
    // setTimeout('rotateMe(-50, 0)', 10000);
    //
    // setTimeout('rotateMe(-20, 0)', 10000);
    */
}

var b2 = document.getElementById('b2');
b2.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    // $('#b1').css({'z-index':'1'});
    var myheight = $('.mc2').height();
    var myString = -myheight + 'px';
    $('.mc2').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    setLeaders(100,100);
    setTimeout('rotateMe(-72, -12)',2000);
    // setTimeout('rotateMyLeaderAll(604,194, 2)',11000);
        setTimeout('setLeaders(100,200);',11000);
    setTimeout('goNext1()', 17000);
}

goNext1 = function() {
    // $('.cb').css({'z-index':'-10'});
    $('#b21').css({'z-index':'1'});
    $('.mc21').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});
    showleft();
    stopAnimations();
    resetLeaderRotations();
}

var dondursolsag = true;

var showleft = function() {
    if(dondursolsag) {
        $('.xxx').css({'opacity':'1'});
        $('.yyy').css({'opacity':'0'});
        setTimeout('showright()', 2500);
    }

}

var showright = function() {
    if(dondursolsag) {
        $('.xxx').css({'opacity':'0'});
        $('.yyy').css({'opacity':'1'});
        setTimeout('showleft()', 2500);
    }

}

var b21 = document.getElementById('b21');
b21.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    $('#b22').css({'z-index':'1'});
    var myheight = $('.mc21').height();
    var myString = -myheight + 'px';
    $('.mc21').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc22').css({'position':'static', 'opacity':'1', 'background-color':'lavender'});

    $('.topsection, .middlesection').css({'transition':'2s', 'opacity':'0'})
    dondursolsag = false;
    $('.xxx').css({'opacity':'1'});
    $('.yyy').css({'opacity':'1'});


}
var b22 = document.getElementById('b22');
b22.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    $('#b25').css({'z-index':'1'});
    var myheight = $('.mc22').height();
    var myString = -myheight + 'px';
    $('.mc22').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc25').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});

    $('.topsection, .middlesection').css({'transition':'2s', 'opacity':'1'})
    stopRotations();
    resetRotateMyValues12();
    setLeaders(200,200);
    setFollowers2(0,0,0,0, 1)
    setTimeout('startRotations()', 1000);
    setTimeout('rotateMyValues(30,5)', 2000);


}

var b25 = document.getElementById('b25');
b25.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    $('#b275').css({'z-index':'1'});
    var myheight = $('.mc25').height();
    var myString = -myheight + 'px';
    $('.mc25').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc275').css({'position':'static', 'opacity':'1', 'background-color':'lavender'});


    stopRotations();
    resetRotateMyValues12();
    setLeaders(200,200);
    setTimeout('startRotations()', 1000);
    setTimeout('rotateMyValues2(30,5)', 2000);

}
//make only efficiency bar visible
var b275 = document.getElementById('b275');
b275.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    $('#b3').css({'z-index':'1'});
    var myheight = $('.mc275').height();
    var myString = -myheight + 'px';
    $('.mc275').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc3').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});
    $('.yoket').css({'transition':'1s', 'margin-top':'-95px', 'opacity':'0'});
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    stopRotations();
    resetRotateMyValues12();
    setTimeout('startRotations()', 2000);

    $('.efficiencyBar').css({'transition':'1s', 'border':'3px solid red'});
    stopRotations();
    resetRotateMyValues12();
    setLeaders(200,200);
    resetRotations();
}


var b3 = document.getElementById('b3');
b3.onclick = function() {
    $('.cb').css({'z-index':'-10'});

    $('.decision').css({'transition':'1s','margin-top':'0px', 'z-index':'1', 'opacity':'1'});
    $('.dsinfo').css({'display':'inline'});

    var myheight = $('.mc3').height();
    var myString = -myheight + 'px';
    $('.mc3').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});

    setTimeout('setFollowers2(19,28,12,3, 0)', 1000);
    setTimeout('setFollowers2(7,7,2,3, 1)', 2000);
    // setTimeout('setFollowers2(12,2,5,20, 0)', 5000);
    // setTimeout('setFollowers2(14,7,28,13, 1)', 4000);
    // setTimeout('setFollowers2(7,7,31,13, 0)', 3000);
    // setTimeout('setFollowers2(19,28,12,3, 1)', 6000);
    setTimeout('setFollowers()', 3000);
    setTimeout('goNext2()', 3500)
}

var goNext2 = function() {
    $('#b4').css({'z-index':'1'});
    $('.mc4').css({'position':'static', 'opacity':'1', 'background-color':'lavender'});

    stopRotations();
    setFollowers();
    resetRotateMyValues12();
    startLeaderRotations();

    setTimeout('rotateMyLeaderAll3(723,138, 4)',1000)


    $('html, body').animate({
        scrollTop:0
    }, 1000);
    $('.efficiencyBar').css({'transition':'1s', 'border':'3px solid white'});
    $('.topsection').css({'opacity':'1'});
    $('.bottomsection, .decision').css({'opacity':'0.2'});
}

var b4 = document.getElementById('b4');
b4.onclick = function() {
    $('.cb').css({'z-index':'-10'});
    $('#b5').css({'z-index':'1'});
    var myheight = $('.mc4').height();
    var myString = -myheight + 'px';
    $('.mc4').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
    $('.mc5').css({'position':'static', 'opacity':'1', 'background-color':'lavenderblush'});

    $('.efficiencyBar').css({'transition':'1s', 'border':'0px solid white'});
    $('.switchwrap').css({'opacity':'1'});
    $('.bottomsection, .middlesection, .decision').css({'opacity':'1'});
    $('.lslider, .slider, .dslider').css({'z-index':'1'});
    $('.dinfo').css({'display':'inline'});
    $('.continueButton').css({'opacity':'1', 'z-index':'1000'});

    stopAnimations();
    stopRotations();
    stopLeaderRotations();

}



var b5 = document.getElementById('b5');
b5.onclick = function() {
    var myheight = $('.mc5').height();
    var myString = -myheight + 'px';
    $('.mc5').css({'padding':'0px','opacity':'0','margin-top':myString, 'z-index':'-10'});
}







///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
/////////////////////////////// ROTATIONS /////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
var setFollowers = function() {
    console.log('FOLLOWERS FOLLOWERS FOLLOWERS');
    h1 = h2 = 0;
    s1 = 7;
    s2 = 10;
    updateBar(-7, 'bar1', 0, false);
    updateBarDecision(-7, 'bard', false);
    $('#vSlider1, #dSlider').prop('value', -7);
    $('#vSlider1, #dSlider').change();

    updateBar(-10, 'bar2', 0, false);
    $('#vSlider2').prop('value', -10);
    $('#vSlider2').change();

    oh1 = oh2 = 0;
    os1 = 3;
    os2 = 2;
    updateBar(-3, 'obar2', 0, false);
    $('#ovSlider2').prop('value', -3);
    $('#ovSlider2').change();

    updateBar(-2, 'obar1', 0, false);
    $('#ovSlider1').prop('value', -2);
    $('#ovSlider1').change();


    updateAll();
}

var setFollowers2 = function(a, b, c, d, helpcase) {

    h1 = a*helpcase;
    h2 = b*helpcase;
    s1 = a*(1-helpcase);
    s2 = b*(1-helpcase);
    oh1 =  c*helpcase;
    oh2 =  d*helpcase;
    os1 = c*(1-helpcase);
    os2 = d*(1-helpcase);

    if(helpcase===1) {
        updateBar(h1, 'bar1', 0, false);
        updateBarDecision(h1, 'bard', false);
        $('#vSlider1, #dSlider').prop('value', h1);
        $('#vSlider1, #dSlider').change();

        updateBar(h2, 'bar2', 0, false);
        $('#vSlider2').prop('value', h2);
        $('#vSlider2').change();


        updateBar(oh2, 'obar2', 0, false);
        $('#ovSlider2').prop('value', oh2);
        $('#ovSlider2').change();

        updateBar(oh1, 'obar1', 0, false);
        $('#ovSlider1').prop('value', oh1);
        $('#ovSlider1').change();
    }
    if(helpcase===0) {
        updateBar(-s1, 'bar1', 0, false);
        updateBarDecision(-s1, 'bard', false);
        $('#vSlider1, #dSlider').prop('value', -s1);
        $('#vSlider1, #dSlider').change();

        updateBar(-s2, 'bar2', 0, false);
        $('#vSlider2').prop('value', -s2);
        $('#vSlider2').change();


        updateBar(-os2, 'obar2', 0, false);
        $('#ovSlider2').prop('value', -os2);
        $('#ovSlider2').change();

        updateBar(-os1, 'obar1', 0, false);
        $('#ovSlider1').prop('value', -os1);
        $('#ovSlider1').change();
    }


    updateAll();
}
var setLeaders = function(e1, e2) {

    efo = e1;

    updateBarLeader(e1, 'barl', true, false);

    $('#lSlider1').prop('value', e1);
    $('#lSlider1').change();

    oefo = e2;

    updateBarLeader(e2, 'obarl', false, false);

    $('#olSlider1').prop('value', e2);
    $('#olSlider1').change();
    updateAll();

}



// updateBar = function(a, barId, lighter, axisOn)
// updateBarDecision = function(a, barId, axisOn)
var clickCountMyDecision = 0;
var startRotate = true;
var myrotation = 0;
var goUp = true;
var rMySlider = function(value) {
    if(startRotate) {
        var isHelp1;

        if(clickCountMyDecision >= value) {
            goUp = false;
        }

        if(clickCountMyDecision <= -value) {
            goUp = true;
        }

        if(clickCountMyDecision === 0) {
            myrotation = 1 + myrotation;
        }

        if(clickCountMyDecision >= 0) {

            isHelp1 = true;
        }

        if(clickCountMyDecision < 0) {
            isHelp1 = false;
        }

        h1 = isHelp1 ? clickCountMyDecision : 0;
        s1 = isHelp1 ? 0 : -clickCountMyDecision;
        var shBarValue = clickCountMyDecision;


        updateBar(shBarValue, 'bar1', 0, false);
        updateBarDecision(shBarValue, 'bard', false);
        $('#vSlider1, #dSlider').prop('value', shBarValue);
        $('#vSlider1, #dSlider').change();
        updateAll();


        if(goUp) {
            clickCountMyDecision = clickCountMyDecision + 5;
        }

        if(!goUp) {
            clickCountMyDecision = clickCountMyDecision - 5;
        }
    }
}
var rotateMyValues = function(value, nr) {
    if(startRotate) {
        if(myrotation<nr){
            rMySlider(value);
            var mystring = 'rotateMyValues(' + value + ','+ nr +')';
            setTimeout(mystring, 1);
        }
        if(myrotation===nr){
            s1 = h1 = 0;
            updateBar(0, 'bar1', 0, false);
            updateBarDecision(0, 'bard', false);
            $('#vSlider1, #dSlider').prop('value', 0);
            $('#vSlider1, #dSlider').change();
            updateAll();
        }
    }

}

var rotateMyValuesSlow = function(value, nr) {
    if(startRotate) {
        if(myrotation<nr){
            rMySlider(value);
            var mystring = 'rotateMyValuesSlow(' + value + ','+ nr +')';
            setTimeout(mystring, 200);
        }
        if(myrotation===nr){
            s1 = h1 = 0;
            updateBar(0, 'bar1', 0, false);
            updateBarDecision(0, 'bard', false);
            $('#vSlider1, #dSlider').prop('value', 0);
            $('#vSlider1, #dSlider').change();
            updateAll();
        }
    }

}

var resetRotateMyValues12 = function() {
    myrotation = myrotation2 = 0;
}
// rotateMyValues();

var clickCountMyDecision2 = 0;

var myrotation2 = 0;
var goUp5 = true;

var rHfSlider = function(value2) {
    if(startRotate) {
        var isHelp2;
        syncOtherGroup = document.getElementById('mycheck2').checked;

        if(clickCountMyDecision2 >= value2) {
            // console.log('TOO BIIIIG');
            goUp5 = false;
        }

        if(clickCountMyDecision2 <= -value2) {
            // console.log('TOO SMALLLL');
            goUp5 = true;
        }

        if(clickCountMyDecision2 === 0) {
            myrotation2 = 1 + myrotation2;
        }

        if(clickCountMyDecision2 >= 0) {
            isHelp2 = true;
        }

        if(clickCountMyDecision2 < 0) {
            isHelp2 = false;
        }

        oh1 = oh2 = h2 = isHelp2 ? clickCountMyDecision2 : 0;
        os1 = os2 = s2 = isHelp2 ? 0 : -clickCountMyDecision2;
        var shBarValue = clickCountMyDecision2;

        updateBar(shBarValue, 'bar2', 0, false);
        updateBar(shBarValue, 'obar1', 0, false);
        updateBar(shBarValue, 'obar2', 0, false);

        $('#vSlider2, #ovSlider1, #ovSlider2').prop('value', shBarValue);
        $('#vSlider2, #ovSlider1, #ovSlider2').change();

        if(!syncOtherGroup){
            os2 = Math.ceil(os2 * 1.5);
            oh2 = Math.ceil(oh2/2);

            var temp = isHelp2 ? oh2 : -os2;
            updateBar(temp, 'obar2', 0, false);
            $('#ovSlider2').prop('value', temp);
            $('#ovSlider2').change();

        }

        updateAll();

        if(goUp5) {
            clickCountMyDecision2 = clickCountMyDecision2 + 5;
        }

        if(!goUp5) {
            clickCountMyDecision2 = clickCountMyDecision2 - 5;
        }
    }


}

var rotateMyValues2 = function(value, nr) {
    if(startRotate) {
        if(myrotation2<nr){
            // rMySlider();
            rHfSlider(value);
            var mystring = 'rotateMyValues2('+value+','+nr+')';
            setTimeout(mystring, 1);
        }
        if(myrotation2===nr){
            updateBar(0, 'bar2', 0, false);
            updateBar(0, 'obar1', 0, false);
            updateBar(0, 'obar2', 0, false);
            $('#vSlider2, #ovSlider2, #ovSlider2').prop('value', 0);
            $('#vSlider2, #ovSlider2, #ovSlider2').change();
            updateBar(0, 'bar1', 0, false);
            updateBarDecision(0, 'bard', false);
            $('#vSlider1, #dSlider').prop('value', 0);
            $('#vSlider1, #dSlider').change();
            h1 = h2 = oh2 = oh1 = s1 = s2 = os1 = os2 = 0;
            updateAll();
        }
    }
}

////////////////////////////
var convergence = true;

var cycleCount = 0;
var anotherCount1 = 0;
var rotateMe = function(value, value2){
    if(startRotate)
    {
        // console.log(anotherCount1);
        myGenericMove(value);
        if(anotherCount1 < (value+6) && anotherCount1 > (value-6)) {
            cycleCount = cycleCount + 1;
            if(cycleCount<4){
                var mystring2 = 'rotateOthers(' + value + ',' + value2 + ')';
                setTimeout(mystring2, 500);
            }

        } else {
            var mystring = 'rotateMe(' + value + ',' + value2 + ')';
            setTimeout(mystring, 1);
        }
    }

}

var myGenericMove = function(value) {
    var goUp2;
    if(startRotate && (anotherCount1!=value)) {
        var isHelp1;

        if(anotherCount1 > 0) {
            isHelp1 = true;
        }

        if(anotherCount1 < 0 ) {
            isHelp1 = false;
        }

        h1 = isHelp1 ? anotherCount1 : 0;
        s1 = isHelp1 ? 0 : -anotherCount1;
        var shBarValue = anotherCount1;

        updateBar(shBarValue, 'bar1', 0, false);
        updateBarDecision(shBarValue, 'bard', false);
        $('#vSlider1, #dSlider').prop('value', shBarValue);
        $('#vSlider1, #dSlider').change();
        updateAll();


        if(value > anotherCount1) {
            goUp2 = true;
        }

        if(value < anotherCount1) {

            goUp2 = false;
        }

        var step =  Math.abs(Math.floor((value - anotherCount1)/4));
        // var step = 5;

        if(goUp2) {
            anotherCount1 = anotherCount1 + step;
        }

        if(!goUp2) {
            anotherCount1 = anotherCount1 - step;
        }
    }

}

var anotherCount2 = 0;
var rotateOthers = function(value, value3) {
    if(startRotate){
        genericOthers(value);

        if(value > (anotherCount2 - 6) && value < (anotherCount2 + 6)){
            // value = Math.floor(value*0.5);
            // value3 = Math.floor(value3*0.25);

            if(convergence){
                var mystring4 = 'rotateMe(' + value3 + ',' + value3 + ')';
                setTimeout(mystring4, 500);
                // setTimeout('rotateMe(1, 4)', 100);
                // console.log(mystring4);
            }


        } else {
            var mystring = 'rotateOthers(' + value + ',' + value3 + ')';
            setTimeout(mystring, 1);
        }
    }
}



var genericOthers = function(value) {
    var goUp3;
    if(startRotate && (anotherCount2 != value)) {
        var isHelp1;

        if(anotherCount2 > 0) {
            isHelp1 = true;
        }

        if(anotherCount2 < 0 ) {
            isHelp1 = false;
        }

        oh1 = oh2 = h2 = isHelp1 ? anotherCount2 : 0;
        os1 = os2 = s2 = isHelp1 ? 0 : -anotherCount2;
        var shBarValue = anotherCount2;

        updateBar(shBarValue, 'bar2', 0, false);
        updateBar(shBarValue, 'obar1', 0, false);
        updateBar(shBarValue, 'obar2', 0, false);

        $('#vSlider2, #ovSlider1, #ovSlider2').prop('value', shBarValue);
        $('#vSlider2, #ovSlider1, #ovSlider2').change();


        ////

        os2 = Math.ceil(os2 * 1.5);
        oh2 = Math.ceil(oh2/2);

        var temp = isHelp1 ? oh2 : -os2;

        updateBar(temp, 'obar2', 0, false);
        $('#ovSlider2').prop('value', temp);
        $('#ovSlider2').change();

        ///
        ////

        os1 = Math.ceil(os1 * 1.45);
        oh1 = Math.ceil(oh1/2.5);

        var temp = isHelp1 ? oh1 : -os1;

        updateBar(temp, 'obar1', 0, false);
        $('#ovSlider1').prop('value', temp);
        $('#ovSlider1').change();

        ///

        s2 = Math.ceil(s2 * 0.5);
        h2 = Math.ceil(h2/3);

        var temp2 = isHelp1 ? h2 : -s2;

        updateBar(temp2, 'bar2', 0, false);
        $('#vSlider2').prop('value', temp2);
        $('#vSlider2').change();

        ////


        updateAll();


        if(value > anotherCount2) {
            goUp3 = true;
        }

        if(value < anotherCount2) {

            goUp3 = false;
        }

        // var step =  Math.abs(Math.ceil(value/10));
        var step =  Math.abs(Math.floor((value - anotherCount2)/4));
        // var step = 5;

        if(goUp3) {
            anotherCount2 = anotherCount2 + step;
        }

        if(!goUp3) {
            anotherCount2 = anotherCount2 - step;
        }
    }
}






var startRotate2 = true;
var leaderRotations = 0;
var rotateMyLeader3 = function(value, value3) {
    if(startRotate2 && leaderRotations < 5){
        myLeaderMove(value);

        if(value > (anotherCount3 - 6) && value < (anotherCount3 + 6)){
            var mystring = 'rotateMyLeader3(' + value3+ ',' + value + ')';
            setTimeout(mystring, 500);
            leaderRotations = leaderRotations + 1;

        } else {
            mystring = 'rotateMyLeader3(' + value + ',' + value3 + ')';
            setTimeout(mystring, 1);
        }
    } else if(leaderRotations >= 5){
        // rotateMyLeader(350, 350);
        // rotateMyLeader4(500, 50);
        // setTimeout('rotateMyLeader4(506, 43)', 1000);
    }

}
var rotateMyLeader32 = function(value, value3) {
    if(startRotate && leaderRotations < 6){
        myLeaderMove(value);

        if(value > (anotherCount3 - 6) && value < (anotherCount3 + 6)){
            var mystring = 'rotateMyLeader32(' + value3+ ',' + value + ')';
            setTimeout(mystring, 1);
            leaderRotations = leaderRotations + 1;

        } else {
            mystring = 'rotateMyLeader32(' + value + ',' + value3 + ')';
            setTimeout(mystring, 1);
        }
    } else if(leaderRotations >= 6){
        // rotateMyLeader(350, 350);
        // rotateMyLeader4(500, 50);
        setTimeout('rotateMyLeader42(200)', 100);
    }

}

var rotateMyLeader = function(value, value3) {
    if(startRotate2){
        myLeaderMove(value);
        if(value < 600) {
            if(value > (anotherCount3 - 6) && value < (anotherCount3 + 6)){
                var mystring = 'rotateMyLeader2(' + value + ',' + (value + 150) + ')';
                setTimeout(mystring, 500);

            } else {
                mystring = 'rotateMyLeader(' + value + ',' + value3 + ')';
                setTimeout(mystring, 1);
            }
        }

    }
}




var stopAnimations = function() {
    startRotate = false;
}
var startAnimations = function() {
    startRotate = true;
}
var resetLeaderRotations = function() {
    allLeaderRotation = leaderRotations = leaderRotations2 = 0;
    startRotate2 = true;
}
var stopLeaderRotations = function() {
    startRotate2 = false;
}
var startLeaderRotations = function() {
    startRotate2 = true;
    allLeaderRotation = 0
}

var rotateMyLeader5 = function(value, value3) {
    if(startRotate){
        myLeaderMove(value);
        if(value < 600) {
            if(value > (anotherCount3 - 20) && value < (anotherCount3 + 20)){
                if(value<20) {
                    value = 0;
                }
                var mystring = 'rotateMyLeader7(' + value + ',' + (value/4) + ')';
                setTimeout(mystring, 1);

            } else {
                mystring = 'rotateMyLeader5(' + value + ',' + value3 + ')';
                setTimeout(mystring, 1);
            }
        }

    }
}
var anotherCount3 = 0;
// var bothleadersmove = function(value) {
//
// }
// updateBarLeader = function(e, barId, ourSide, axisOn)
var goUpl1;
var myLeaderMove = function(value) {

    if(startRotate2 && (anotherCount3!=value)) {



        efo = anotherCount3;
        var shBarValue = anotherCount3;

        updateBarLeader(shBarValue, 'barl', true, false);

        $('#lSlider1').prop('value', shBarValue);
        $('#lSlider1').change();
        updateAll();


        if(value > anotherCount3) {
            goUpl1 = true;
        }

        if(value < anotherCount3) {

            goUpl1 = false;
        }

        var step =  Math.abs(Math.floor((value - anotherCount3)/4));
        // var step = 10;

        if(goUpl1) {
            anotherCount3 = anotherCount3 + step;
        }

        if(!goUpl1) {
            anotherCount3 = anotherCount3 - step;
        }
    }

}



var anotherCount4 = 0;
var leaderRotations2 = 0;
var rotateMyLeader4 = function(value, value3) {
    if(startRotate2 && leaderRotations2 < 5){
        myLeaderMove2(value);

        if(value > (anotherCount4 - 6) && value < (anotherCount4 + 6)){
            var mystring = 'rotateMyLeader4(' + value3+ ',' + value + ')';
            setTimeout(mystring, 500);
            leaderRotations2 = leaderRotations2 + 1;

        } else {
            mystring = 'rotateMyLeader4(' + value + ',' + value3 + ')';
            setTimeout(mystring, 1);
        }
    } else if(leaderRotations >= 5){
        // rotateMyLeader2(350, 350);

    }

}

var rotateMyLeader42 = function(value) {
    if(startRotate2 && leaderRotations2 < 11){
        myLeaderMove2(value);

            mystring = 'rotateMyLeader42(' + value + ')';
            setTimeout(mystring, 1);

        // rotateMyLeader2(350, 350);

    }

}


var rotateMyLeader2 = function(value, value3) {
    if(startRotate2){
        myLeaderMove2(value);
        if(value < 300) {
            if(value > (anotherCount4 - 6) && value < (anotherCount4 + 6)){
                var mystring = 'rotateMyLeader(' + (value + 100) + ',' + value3 + ')';
                setTimeout(mystring, 500);

            } else {
                mystring = 'rotateMyLeader2(' + value + ',' + value3 + ')';
                setTimeout(mystring, 1);
            }
        }

    }
}

var rotateMyLeader7 = function(value, value3) {
    if(startRotate){
        myLeaderMove2(value);
        if(value < 600) {
            if(value > (anotherCount4 - 20) && value < (anotherCount4 + 20)){
                var mystring = 'rotateMyLeader5(' + (value/4) + ',' + value3 + ')';
                setTimeout(mystring, 1);

            } else {
                mystring = 'rotateMyLeader7(' + value + ',' + value3 + ')';
                setTimeout(mystring, 1);
            }
        }

    }
}

var goUpl2;
var myLeaderMove2 = function(value) {

    if(startRotate2 && (anotherCount3!=value)) {


        oefo = anotherCount4;
        var shBarValue = anotherCount4;

        updateBarLeader(shBarValue, 'obarl', false, false);

        $('#olSlider1').prop('value', shBarValue);
        $('#olSlider1').change();
        updateAll();


        if(value > anotherCount4) {
            goUpl2 = true;
        }

        if(value < anotherCount4) {

            goUpl2 = false;
        }

        var step =  Math.abs(Math.floor((value - anotherCount4)/4));
        // var step = 10;

        if(goUpl2) {
            anotherCount4 = anotherCount4 + step;
        }

        if(!goUpl2) {
            anotherCount4 = anotherCount4 - step;
        }
    }

}

var allLeaderRotation = 0;
var rotateMyLeaderAll = function(value, value3, nr) {
    if(startRotate2 && allLeaderRotation<nr){
        myLeaderMove2(Math.floor(value));
        myLeaderMove((value/2)+1);
        if(value < 800) {
            if(value > (anotherCount4 - 6) && value < (anotherCount4 + 6)){
                var mystring = 'rotateMyLeaderAll(' + value3 + ',' + value + ',' + nr + ')';
                setTimeout(mystring, 1);
                allLeaderRotation = 1 + allLeaderRotation;

            } else {
                mystring = 'rotateMyLeaderAll(' + value + ',' + value3 + ',' + nr + ')';
                setTimeout(mystring, 1);
            }
        }

    }
}


var rotateMyLeaderAll2 = function(value) {
    if(startRotate2){
        // anotherCount3 = anotherCount4;
        myLeaderMove2(value);
        myLeaderMove(Math.floor(value*(3/4)+1));

            if(value < (anotherCount4 + 1)){

                console.log('done it');


            } else {
                var mystring56 = 'rotateMyLeaderAll2(' + value + ')';
                setTimeout(mystring56, 1);
            }


    }
}

var rotateMyLeaderAll3 = function(value, value3, nr) {
    if(startRotate2 && allLeaderRotation<nr){
        myLeaderMove2(Math.floor(value/3)+2);
        myLeaderMove((value));
        if(value < 800) {
            if(value > (anotherCount4 - 6) && value < (anotherCount4 + 6)){
                var mystring = 'rotateMyLeaderAll3(' + value3 + ',' + value + ',' + nr + ')';
                setTimeout(mystring, 1);
                allLeaderRotation = 1 + allLeaderRotation;

            } else {
                mystring = 'rotateMyLeaderAll3(' + value + ',' + value3 + ',' + nr + ')';
                setTimeout(mystring, 1);
            }
        }

    }
}

var resetRotations = function() {
    updateBar(0, 'bar2', 0, false);
    updateBar(0, 'obar1', 0, false);
    updateBar(0, 'obar2', 0, false);
    $('#vSlider2, #ovSlider1, #ovSlider2').prop('value', 0);
    $('#vSlider2, #ovSlider1, #ovSlider2').change();

    updateBar(0, 'bar1', 0, false);
    updateBarDecision(0, 'bard', false);
    $('#vSlider1, #dSlider').prop('value', 0);
    $('#vSlider1, #dSlider').change();
    s1 = h1 = s2 = h2 = os1 = oh1 = os2 = oh2 = 0;
    anotherCount1 = anotherCount2 = anotherCount3 = 0;
    updateBar(0, 'bar1', 0, false);
    updateBarDecision(0, 'bard', false);
    $('#vSlider1, #dSlider').prop('value', 0);
    $('#vSlider1, #dSlider').change();
    updateAll();
}
var stopRotations = function() {
    startRotate = false;

}


var startRotations = function() {
    anotherCount1 = anotherCount2 = anotherCount3 = 0;
    startRotate = true;
}
