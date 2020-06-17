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
        // hole: 0.6,
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
        height: 140,
        width: 140,
        // title: 'Probability to Win',
        font:{
            size: 10
        },
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false,
    };

    Plotly.react('pie', data, layout, {displayModeBar: false});
}

var updateEffortBar = function(a, b) {

    var x = a;
    var y = b;

    var actualData = [x, y];
    var myText = [a, b];
    var temp = myText[0];
    var myOpacity = 1;
    var actualColors = ['rgb(80, 80, 80)', 'rgb(225, 225, 225)'];
    var actualXPosition = [1, 2];




    var actual = {
        y: actualData,
        x: actualXPosition,
        myname: ['f1', 'f2', 'f3', 'f4'],
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

    var myWidth = 180;

    var layout = {
        title: "Token's Invested",
        titlefont: {
            size: 14,
        },
        // title:{
        //     text:  "Token's Invested",
        //     size: 2,
        //     yref: 'paper',
        //     y: 0,
        //     yanchor: 'top',
        // },
        barmode: 'overlay',
        height: 160,
        width: myWidth,
        margin: {"t": 80, "b": 0, "l": 30, "r": 30},
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
        // bargap: 0.1,
        // bargroupgap: 0.5,
    };

    var data = [actual];

    Plotly.react('effortbars', data, layout, {displayModeBar: false});
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
            tickfont: {
                size: 10,
            },
            tickmode: 'array',
            tickvals: [0, 25, 50, 75, 100, 125, 150, 175, 200, 250, 300, 400, 500],
            ticktext: [0, 25, 50, 75, 100, 125, 150, 175, 200, 250, 300, 400, 500],
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
            range: [0,500],
            layer: 'below traces',


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

var setEfficiencyBar = function(efi1, efi2) {

    var val1 = efi1 / (efi1 + efi2);
    var val2 = efi2 / (efi1 + efi2);



    if((efi1 / efi2) > 1){
        var myText = (val1 >= 0.99) ? '100+' : (efi1 / efi2).toFixed(0);
    } else {
        myText = 1;
    }

    if((efi1 / efi2) < 1){
        var myText2 = (val2 >= 0.99) ? '100+' : (efi2 / efi1).toFixed(0);
    } else {
        myText2 = 1;
    }


    val1 = logistic2(val1, 5);
    val2 = 1 - val1;


    var gapSize = 0.01;
    val1 = val1 - gapSize/2;
    val2 = val2 - gapSize/2;




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
        fixedrange: true,
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
        title:{
            text:  "Relative Power",
            size: 1,
            yref: 'container',
            y: 0.15,
            yanchor: 'bottom',
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
        }

    };

    Plotly.react('efficiencyBar', data, layout, {displayModeBar: false});
}


//VARIABLES AND GRAPHICS INITIATIONS




// leader global variables
var efo, oefo, efi, oefi, pwin;
efo = oefo = 0;
efi = oefi = 0;
efi = 3;
oefi = 1;

var updatePwin = function() {
    var efefo = efo * efi;
    var oefefo = oefo * oefi;
    pwin = ((efo + oefo) === 0) ? 0.5 : (efefo / (efefo + oefefo));
}

var syncValues = function(eValue) {
    efo = eValue;
}

var syncBars = function(value) {
    updateBarLeader(value, 'barl', true, false);
    updateBarDecision(value, 'bard', false);
}


var updateBarXAxis = function(barId, axisSwitch) {
    var update = {
        'xaxis.showgrid': axisSwitch,
        'xaxis.showticklabels': axisSwitch
    };
    Plotly.relayout(barId, update);
}

var payoffDisplay = document.getElementById('payoff');
var winnetpayoff = document.getElementById('winnetpayoff');
var losenetpayoff = document.getElementById('losenetpayoff');

var initialize = function() {
    updatePwin();
    updatePie(1);
    updatePie(pwin);
    updateEffortBar(efo, oefo);
    setEfficiencyBar(efi, oefi);

    payoffDisplay.innerHTML = '<strong>' + (efo)  + '</strong>' + ((efo > 1) ? ' tokens' : ' token');
    winnetpayoff.innerHTML = '<strong>' + (1000 - efo)  + '</strong>' + ' tokens';
    losenetpayoff.innerHTML = '<strong>' +  -efo  + '</strong>' + ((efo > 1) ? ' tokens' : ' token');
    $('.cursor-pointer').css({'cursor':'default'});
}

var updateAll = function() {
    updateEffortBar(efo, oefo);
    updatePwin();
    updatePie(pwin);
}

initialize();



//////// Slider-bar initiations ///////

// DECISION SLIDER - BAR
var dslider = document.getElementById('dSlider');
var dvalue = 0;
updateBarDecision(0, 'bard', false);


// YOUR GROUP INITIATION
// leader
var lslider1 = document.getElementById('lSlider1');
var lvalue = 0;
updateBarLeader(lvalue, 'barl', 1, false);
// followers


// OPPOSING GROUP INITIATION
// leader
var olslider1 = document.getElementById('olSlider1');
var olvalue = 0;
updateBarLeader(olvalue, 'obarl', 0, false);



//DECISION
dslider.oninput = function() {
    dvalue = parseFloat(dslider.value);
    efo = dvalue
    syncBars(dvalue);
    updateBarXAxis('bard', true);
    syncValues(dvalue);
    updateAll();
    payoffDisplay.innerHTML = '<strong>' + (efo)  + '</strong>' + ((efo > 1) ? ' tokens' : ' token');
    winnetpayoff.innerHTML = '<strong>' + (1000 - efo) + '</strong>' + ' tokens';
    losenetpayoff.innerHTML = '<strong>' + -efo  + '</strong>' + ((efo > 1) ? ' tokens' : ' token');
    $('.sliderbard').css({'border':'3px dotted white'});
    //synching sliders
    $('#lSlider1').prop('value', dvalue);
    $('#lSlider1').change();
}


// YOUR GROUP

//Leader
lslider1.oninput = function() {
    lvalue = parseFloat(lslider1.value);
    efo = lvalue;
    syncBars(lvalue);
    updateBarXAxis('barl', true);
    updateAll();
    payoffDisplay.innerHTML = '<strong>' + (efo)  + '</strong>' + ((efo > 1) ? ' tokens' : ' token');
    winnetpayoff.innerHTML = '<strong>' + (1000 - efo) + '</strong>' + ' tokens';
    losenetpayoff.innerHTML = '<strong>' + -efo  + '</strong>' + ((efo > 1) ? ' tokens' : ' token');
    $('.barlextra').css({'border':'3px dotted white'});
    //synching sliders
    $('#dSlider').prop('value', lvalue);
    $('#dSlider').change();
}

// OPPOSING GROUP

//Leader
olslider1.oninput = function() {
    olvalue = parseFloat(olslider1.value);
    oefo = olvalue;
    updateBarLeader(olvalue, 'obarl', 0, true);
    updateAll();
}


// HOVER AND FOCUSOUT EFFECT FOR XAXIS SHOWING UP
$('#dSlider').hover(
    function() {
        lvalue = parseFloat(lslider1.value);
        setTimeout("updateBarXAxis('bard', true)", 250);
        $('.yourdecisiontext2').css({'font-weight':'700', 'opacity':'1'});
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'19px'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#lSlider1').css({'background':'black', 'opacity':'1', 'margin-top': '48px'});
        $('#lSlider1').addClass('newdSlider');
    },
    function() {
        lvalue = parseFloat(lslider1.value);
        setTimeout("updateBarXAxis('bard', false)", 1000);
        $('.yourdecisiontext2').css({'font-weight':'100', 'opacity':'0.3'});
        $('.yourdecisiontext').css({'font-weight':'200', 'font-size':'19px'});
        $('#dSlider').css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
        $('#lSlider1').css({'background':'gray', 'opacity':'0.3', 'margin-top': '38px'});
        $('#lSlider1').removeClass('newdSlider');

    }
);

$('#lSlider1').hover(
    function() {
        lvalue = parseFloat(lslider1.value);
        setTimeout("updateBarXAxis('barl', true)", 250);
        $('.yourdecisiontext2').css({'font-weight':'700', 'opacity':'1'});
        $('.yourdecisiontext').css({'font-weight':'700', 'font-size':'19px'});
        $('#dSlider').css({'background':'black', 'opacity':'1', 'margin-top': '45px'});
        $('#lSlider1').css({'background':'black', 'opacity':'1', 'margin-top': '48px'});
        $('#dSlider').addClass('newdSlider');
    },
    function() {
        lvalue = parseFloat(lslider1.value);
        setTimeout("updateBarXAxis('barl', false)", 500);
        $('.yourdecisiontext2').css({'font-weight':'100', 'opacity':'0.3'});
        $('.yourdecisiontext').css({'font-weight':'200', 'font-size':'19px'});
        $('#dSlider').css({'background':'gray', 'opacity':'0.3', 'margin-top': '35px'});
        $('#lSlider1').css({'background':'gray', 'opacity':'0.3', 'margin-top': '38px'});
        $('#dSlider').removeClass('newdSlider');
    }
);

$('#olSlider1').hover(
    function() {
        olvalue = parseFloat(olslider1.value);
        setTimeout("updateBarXAxis('obarl', true)", 250);
        $('.yourdecisiontext3').css({'font-weight':'700', 'opacity':'1'});
    },
    function() {
        olvalue = parseFloat(olslider1.value);
        setTimeout("updateBarXAxis('obarl', false)", 500);
        $('.yourdecisiontext3').css({'font-weight':'100', 'opacity':'0.3'});
    }
);


$('html, body').animate({scrollTop: 0}, 0);