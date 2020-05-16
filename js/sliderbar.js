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
        textfont: {
            color: ['black', 'white'],
        },
        type: 'pie',
        sort: false,
        hoverinfo: 'percent+label',
        automargin: true,
        marker:{
            colors: ['rgb(225, 225, 225)', 'rgb(160, 160, 160)']
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
            color: ['rgb(140, 140, 255)', 'rgb(200,200,255)'],
                },
        text: [x, y],
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 110,
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

updateBarSabo = function(a, b) {
    // console.log(a + ', ' + b);
    x = -a;
    y = -b;
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
        text: [-x, -y],
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 110,
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


updateBar = function(a, barId, lighter, axisOn) {
    var x = a;
    if(typeof(x) === 'undefined') x = 0;

    if(lighter){
        var colors = ['rgb(200,200,255)',  'rgb(255,200,200)'];
    } else { colors = ['rgb(120,120,255)',  'rgb(255,120,120)'];}

    var myLabel = x > 0 ? x : -x;
    // var myColor = x > 0 ? 'rgb(180,180,255)' : 'rgb(255,180,180)';
    var myColor = x > 0 ? colors[0] : colors[1];
    // var myLineColor = x > 0 ? 'rgb(5, 90, 255)' : 'rgb(255, 5, 5)';
    var myTextPosition = myLabel > 85 ? 'inside' : 'outside';

    var data = [{
        y: [x],
        name: ['Opposing Group'],
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
            // color: 'rgb(255, 255, 255)'
            size: '14'
        },
        textanchor: 'right',
        cliponaxis: false,
        textposition: 'outside',


    }];

    var layout = {
        barmode: 'group',
        height: 235,//300
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
                size: 8,
            },
            tickmode: 'array',
            tickvals: [-100, -50, 0, 50, 100],
            ticktext: [100, 50, 0, 50, 100],
            showline: false,
            showgrid: axisOn,
            showticklabels: axisOn,

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
efo = oefo = 1;//0;
efi = oefi = 1;

var syncValues = function(hValue, sValue, group){
    if(group === 'opponent') {
        oh1 = oh2 = oh3 = oh4 = hValue;
        os1 = os2 = os3 = os4 = sValue;
    }
    if(group === 'our') {
        // notice s1 and h1 are independent!
        h2 = h3 = h4 = hValue;
        s2 = s3 = s4 = sValue;
    }

}

var syncBars = function(value, group) {
    if(group === 'opponent') {
        updateBar(value, 'obar1', 1, false);
        updateBar(value, 'obar2', 1, false);
        updateBar(value, 'obar3', 1, false);
        updateBar(value, 'obar4', 1, false);
    }
    if(group === 'our') {
        updateBar(value, 'bar2', 0, false);
        updateBar(value, 'bar3', 0, false);
        updateBar(value, 'bar4', 0, false);
    }
}

updateBarAxis = function(barId, axisSwitch) {
    var update = {
        'yaxis.showgrid': axisSwitch,
        'yaxis.showticklabels': axisSwitch
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
    // console.log(th + ', ' + oth + ', ' + ts + ', ' + ots);
    efi = (1 + th)/(1 + ts);
    oefi = (1 + oth)/(1 + ots);
    // console.log(efi + ', ' + oefi);
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
    // console.log(pwin);
}

updateAll();


// Slider-bar initiations

// YOUR GROUP INITIATION
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
var oslider1 = $('#ovSlider1')[0];
// var oslider1 = document.getElementById('ovSlider1');
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

// YOUR GROUP
// your decision
slider1.oninput = function() {
    value1 = parseFloat(slider1.value);
    s1 = value1 >= 0 ? 0 : -value1;
    h1 = value1 >= 0 ? value1 : 0;
    updateBar(value1, 'bar1', 0, true);
    updateAll();
}
slider2.oninput = function() {
    value2 = parseFloat(slider2.value);
    // updateBar(value2, 'bar2', 0, true);
    s2 = value2 >= 0 ? 0 : -value2;
    h2 = value2 >= 0 ? value2 : 0;
    syncBars(value2, 'our');
    updateBarAxis('bar2', true);
    syncValues(h2, s2, 'our');
    updateAll();
    //synching sliders
    $('#vSlider3, #vSlider4').prop('value', value2);
    $('#vSlider3, #vSlider4').change();
}
slider3.oninput = function() {
    value3 = parseFloat(slider3.value);
    // updateBar(value3, 'bar3', 0, true);
    s3 = value3 >= 0 ? 0 : -value3;
    h3 = value3 >= 0 ? value3 : 0;
    syncBars(value3, 'our');
    updateBarAxis('bar3', true);
    syncValues(h3, s3, 'our');
    updateAll();
    //synching sliders
    $('#vSlider2, #vSlider4').prop('value', value3);
    $('#vSlider2, #vSlider4').change();
}
slider4.oninput = function() {
    value4 = parseFloat(slider4.value);
    // updateBar(value4, 'bar4', 0, true);
    s4 = value4 >= 0 ? 0 : -value4;
    h4 = value4 >= 0 ? value4 : 0;
    syncBars(value4, 'our');
    updateBarAxis('bar4', true);
    syncValues(h4, s4, 'our');
    updateAll();
    $('#vSlider2, #vSlider3').prop('value', value4);
    $('#vSlider2, #vSlider3').change();
}

// OPPOSING GROUP
oslider1.oninput = function() {
    ovalue1 = parseFloat(oslider1.value);
    // updateBar(ovalue1, 'obar1', 1, true);
    os1 = ovalue1 >= 0 ? 0 : -ovalue1;
    oh1 = ovalue1 >= 0 ? ovalue1 : 0;
    syncBars(ovalue1, 'opponent');
    updateBarAxis('obar1', true);
    syncValues(oh1, os1, 'opponent');
    updateAll();
    //synching sliders
    $('#ovSlider2, #ovSlider3, #ovSlider4').prop('value', ovalue1);
    $('#ovSlider2, #ovSlider3, #ovSlider4').change();
}
oslider2.oninput = function() {
    ovalue2 = parseFloat(oslider2.value);
    // updateBar(ovalue2, 'obar2', 1, true);
    os2 = ovalue2 >= 0 ? 0 : -ovalue2;
    oh2 = ovalue2 >= 0 ? ovalue2 : 0;
    syncBars(ovalue2, 'opponent');
    updateBarAxis('obar2', true);
    syncValues(oh2, os2, 'opponent');
    updateAll();
    //synching sliders
    $('#ovSlider1, #ovSlider3, #ovSlider4').prop('value', ovalue2);
    $('#ovSlider1, #ovSlider3, #ovSlider4').change();
}
oslider3.oninput = function() {
    ovalue3 = parseFloat(oslider3.value);
    // updateBar(ovalue3, 'obar3', 1, true);
    os3 = ovalue3 >= 0 ? 0 : -ovalue3;
    oh3 = ovalue3 >= 0 ? ovalue3 : 0;
    syncBars(ovalue3, 'opponent');
    updateBarAxis('obar3', true);
    syncValues(oh3, os3, 'opponent');
    updateAll();
    //synching sliders
    $('#ovSlider1, #ovSlider2, #ovSlider4').prop('value', ovalue3);
    $('#ovSlider1, #ovSlider2, #ovSlider4').change();
}
oslider4.oninput = function() {
    ovalue4 = parseFloat(oslider4.value);
    // updateBar(ovalue4, 'obar4', 1, true);
    os4 = ovalue4 >= 0 ? 0 : -ovalue4;
    oh4 = ovalue4 >= 0 ? ovalue4 : 0;
    syncBars(ovalue4, 'opponent');
    updateBarAxis('obar4', true);
    syncValues(oh4, os4, 'opponent');
    updateAll();
    //synching sliders
    $('#ovSlider1, #ovSlider2, #ovSlider3').prop('value', ovalue4);
    $('#ovSlider1, #ovSlider2, #ovSlider3').change();
}


// HOVER EFFECT FOR XAXIS SHOWING UP

$('#vSlider1').hover(
    function() {
        value1 = parseFloat(slider1.value);
        setTimeout("updateBarAxis('bar1', true)", 750);
    },
    function() {
        value1 = parseFloat(slider1.value);
        setTimeout("updateBarAxis('bar1', false)", 1000);
    }
);
$('#vSlider2').hover(
    function() {
        value2 = parseFloat(slider2.value);
        setTimeout("updateBarAxis('bar2', true)", 750);
        $('#vSlider2, #vSlider3, #vSlider4')
        .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});
        $('#vSlider2, #vSlider3, #vSlider4').addClass('newSlider');
    },
    function() {
        value2 = parseFloat(slider2.value);
        setTimeout("updateBarAxis('bar2', false)", 1000);
        // setTimeout("updateBarAxis('bar3', false)", 1000);
        // setTimeout("updateBarAxis('bar4', false)", 1000);
        $('#vSlider2, #vSlider3, #vSlider4')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});
        $('#vSlider2, #vSlider3, #vSlider4').removeClass('newSlider');
    }
);
$('#vSlider3').hover(
    function() {
        value3 = parseFloat(slider3.value);
        setTimeout("updateBarAxis('bar3', true)", 750);
        $('#vSlider2, #vSlider3, #vSlider4')
        .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});
        $('#vSlider2, #vSlider3, #vSlider4').addClass('newSlider');
    },
    function() {
        value3 = parseFloat(slider3.value);
        // setTimeout("updateBarAxis('bar2', false)", 1000);
        setTimeout("updateBarAxis('bar3', false)", 1000);
        // setTimeout("updateBarAxis('bar4', false)", 1000);
        $('#vSlider2, #vSlider3, #vSlider4')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});
        $('#vSlider2, #vSlider3, #vSlider4').removeClass('newSlider');
    }
);
$('#vSlider4').hover(
    function() {
        value4 = parseFloat(slider4.value);
        setTimeout("updateBarAxis('bar4', true)", 750);
        $('#vSlider2, #vSlider3, #vSlider4')
        .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});
        $('#vSlider2, #vSlider3, #vSlider4').addClass('newSlider');
    },
    function() {
        value4 = parseFloat(slider4.value);
        // setTimeout("updateBarAxis('bar2', false)", 1000);
        // setTimeout("updateBarAxis('bar3', false)", 1000);
        setTimeout("updateBarAxis('bar4', false)", 1000);
        $('#vSlider2, #vSlider3, #vSlider4')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});
        $('#vSlider2, #vSlider3, #vSlider4').removeClass('newSlider');
    }
);


$('#ovSlider1').hover(
    function() {
        ovalue1 = parseFloat(oslider1.value);
        setTimeout("updateBarAxis('obar1', true)", 750);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')
        .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').addClass('newSlider');
    },
    function() {
        ovalue1 = parseFloat(oslider1.value);
        setTimeout("updateBarAxis('obar1', false)", 1000);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').removeClass('newSlider');
    }
);
$('#ovSlider2').hover(
    function() {
        ovalue2 = parseFloat(oslider2.value);
        setTimeout("updateBarAxis('obar2', true)", 750);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')
        .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').addClass('newSlider');
    },
    function() {
        ovalue2 = parseFloat(oslider2.value);
        setTimeout("updateBarAxis('obar2', false)", 1000);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').removeClass('newSlider');
    }
);
$('#ovSlider3').hover(
    function() {
        ovalue3 = parseFloat(oslider3.value);
        setTimeout("updateBarAxis('obar3', true)", 750);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')
        .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').addClass('newSlider');
    },
    function() {
        ovalue3 = parseFloat(oslider3.value);
        setTimeout("updateBarAxis('obar3', false)", 1000);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').removeClass('newSlider');
    }
);
$('#ovSlider4').hover(
    function() {
        ovalue4 = parseFloat(oslider4.value);
        setTimeout("updateBarAxis('obar4', true)", 750);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')
        .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').addClass('newSlider');
    },
    function() {
        ovalue4 = parseFloat(oslider4.value);
        setTimeout("updateBarAxis('obar4', false)", 1000);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').removeClass('newSlider');
    }
);
