var updatePie = function(a) {

    var val1 = efi / (efi + oefi);
    var val2 = oefi / (efi + oefi);
    var mColor = [myColor(logistic(val2)), myColor(logistic(val1))];

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
            // colors: ['rgb(225, 225, 225)', 'rgb(160, 160, 160)']
            colors: mColor,
            line: {
                color: 'black',
                width: 1,
            }
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

var updateBarSabo = function(a, b) {
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
    var myTextPosition = (x >= 0 || x === -100) ? 'outside' : 'inside';
    var myTextFont = (x < 0 && x > -100 && !lighter) ? 'white' : 'black';

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
        // height: 300,

        // Setup Large
        height: 400,

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
            tickvals: [-100, -75, -50, -40, -30, -20, -15, -10, -5, 0, 5,10, 15, 20, 30, 40, 50, 75, 100],
            ticktext: [100, 75, 50, 40, 30, 20, 15, 10, 5, 0, 5, 10, 15, 20, 30, 40, 50, 75, 100],
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
    var val1 = efi / (efi + oefi);
    var val2 = oefi / (efi + oefi);
    var y = e;
    if(typeof(x) === 'undefined') x = 0;

    // var myColor = ourSide ? 'rgb(160, 160, 160)' : 'rgb(225, 225, 225)';
    var mColor = ourSide ? myColor(logistic(val1)) : myColor(logistic(val2));
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

        width: 1035,
        margin: {"t": 20, "b": 25, "l": 32, "r": 34},
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

var upperBound = function(val, upperBound) {
    val = (val >= upperBound) ? upperBound : val;
    return val;
}

var lowerBound = function(val, lowerBound) {
    val = (val <= lowerBound) ? lowerBound : val;
    return val;
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



  val1 = upperBound(val1, 0.95);
  val2 = upperBound(val2, 0.95);
  val1 = lowerBound(val1, 0.05);
  val2 = lowerBound(val2, 0.05);

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
    color: myColor(logistic(val1)),
    // color: 'rgb(160, 160, 160)',
    line: {
        color: 'black',
        width: 1,
    }
  },
  text: myText,
  textposition: 'inside',
  insidetextanchor: 'middle',
  textfont: {
      color: 'white',
      size: '8'
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
    color: myColor(logistic(val2)),
    // color: 'rgb(225, 225, 225)',
    line: {
        color: 'black',
        width: 1,
    }
  },
   text: myText2,
  textposition: 'inside',
  insidetextanchor: 'middle',
  textfont: {
      // color: myTextFont,
      size: '8'
  },
};

var data = [leader1, leader2];

var layout = {
  barmode: 'stack',
  height: 25,
  width: 200,
  margin: {"t": 0, "b": 0, "l": 0, "r": 0},
  xaxis: {
    fixedrange: true,
    autorange: false,
    range: [0,1],
    showline: false,
    showgrid: false,
    showticklabels: false,
},

};

Plotly.react('efficiencyBar', data, layout, {displayModeBar: false});
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
efo = oefo = 0;
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
    if(group === 'decision') {
        h1 = hValue;
        s1 = sValue;
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
    if(group === 'decision') {
        updateBar(value, 'bar1', 0, false);
        updateBarDecision(value, 'bard', false);
    }
}


updateBarYAxis = function(barId, axisSwitch) {
    var update = {
        'yaxis.showgrid': axisSwitch,
        'yaxis.showticklabels': axisSwitch
    };
    Plotly.relayout(barId, update);
}


updateBarXAxis = function(barId, axisSwitch) {
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
    updateBarLeader(efo, 'barl', 1, false);
    updateBarLeader(oefo, 'obarl', 0, false);
    updateEfficiencyBar(efi, oefi);
    updateStrengthBar(efi, oefi);
    updateStrengthText(efi, oefi);
    // updateBarColor('obarl', 0);
    // updateBarColor('barl', 1);
}

updateAll();



// Slider-bar initiations
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
var olvalue = 0;
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
    syncBars(dvalue, 'decision');
    updateBarXAxis('bard', true);
    syncValues(h1, s1, 'decision');
    updateAll();
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
    syncBars(value1, 'decision');
    updateBarYAxis('bar1', true);
    syncValues(h1, s1, 'decision');
    updateAll();
    //synching sliders
    $('#dSlider').prop('value', value1);
    $('#dSlider').change();
}
slider2.oninput = function() {
    value2 = parseFloat(slider2.value);
    s2 = value2 >= 0 ? 0 : -value2;
    h2 = value2 >= 0 ? value2 : 0;
    syncBars(value2, 'our');
    updateBarYAxis('bar2', true);
    syncValues(h2, s2, 'our');
    updateAll();
    //synching sliders
    $('#vSlider3, #vSlider4').prop('value', value2);
    $('#vSlider3, #vSlider4').change();
}
slider3.oninput = function() {
    value3 = parseFloat(slider3.value);
    s3 = value3 >= 0 ? 0 : -value3;
    h3 = value3 >= 0 ? value3 : 0;
    syncBars(value3, 'our');
    updateBarYAxis('bar3', true);
    syncValues(h3, s3, 'our');
    updateAll();
    //synching sliders
    $('#vSlider2, #vSlider4').prop('value', value3);
    $('#vSlider2, #vSlider4').change();
}
slider4.oninput = function() {
    value4 = parseFloat(slider4.value);
    s4 = value4 >= 0 ? 0 : -value4;
    h4 = value4 >= 0 ? value4 : 0;
    syncBars(value4, 'our');
    updateBarYAxis('bar4', true);
    syncValues(h4, s4, 'our');
    updateAll();
    $('#vSlider2, #vSlider3').prop('value', value4);
    $('#vSlider2, #vSlider3').change();
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
    ovalue1 = parseFloat(oslider1.value);
    os1 = ovalue1 >= 0 ? 0 : -ovalue1;
    oh1 = ovalue1 >= 0 ? ovalue1 : 0;
    syncBars(ovalue1, 'opponent');
    updateBarYAxis('obar1', true);
    syncValues(oh1, os1, 'opponent');
    updateAll();
    //synching sliders
    $('#ovSlider2, #ovSlider3, #ovSlider4').prop('value', ovalue1);
    $('#ovSlider2, #ovSlider3, #ovSlider4').change();
}
oslider2.oninput = function() {
    ovalue2 = parseFloat(oslider2.value);
    os2 = ovalue2 >= 0 ? 0 : -ovalue2;
    oh2 = ovalue2 >= 0 ? ovalue2 : 0;
    syncBars(ovalue2, 'opponent');
    updateBarYAxis('obar2', true);
    syncValues(oh2, os2, 'opponent');
    updateAll();
    //synching sliders
    $('#ovSlider1, #ovSlider3, #ovSlider4').prop('value', ovalue2);
    $('#ovSlider1, #ovSlider3, #ovSlider4').change();
}
oslider3.oninput = function() {
    ovalue3 = parseFloat(oslider3.value);
    os3 = ovalue3 >= 0 ? 0 : -ovalue3;
    oh3 = ovalue3 >= 0 ? ovalue3 : 0;
    syncBars(ovalue3, 'opponent');
    updateBarYAxis('obar3', true);
    syncValues(oh3, os3, 'opponent');
    updateAll();
    //synching sliders
    $('#ovSlider1, #ovSlider2, #ovSlider4').prop('value', ovalue3);
    $('#ovSlider1, #ovSlider2, #ovSlider4').change();
}
oslider4.oninput = function() {
    ovalue4 = parseFloat(oslider4.value);
    os4 = ovalue4 >= 0 ? 0 : -ovalue4;
    oh4 = ovalue4 >= 0 ? ovalue4 : 0;
    syncBars(ovalue4, 'opponent');
    updateBarYAxis('obar4', true);
    syncValues(oh4, os4, 'opponent');
    updateAll();
    //synching sliders
    $('#ovSlider1, #ovSlider2, #ovSlider3').prop('value', ovalue4);
    $('#ovSlider1, #ovSlider2, #ovSlider3').change();
}


// HOVER AND FOCUSOUT EFFECT FOR XAXIS SHOWING UP
$('#dSlider').hover(
    function() {
        lvalue = parseFloat(lslider1.value);
        setTimeout("updateBarXAxis('bard', true)", 250);
    },
    function() {
        lvalue = parseFloat(lslider1.value);
        setTimeout("updateBarXAxis('bard', false)", 1000);
    }
);

$('#lSlider1').hover(
    function() {
        lvalue = parseFloat(lslider1.value);
        setTimeout("updateBarXAxis('barl', true)", 250);
    },
    function() {
        lvalue = parseFloat(lslider1.value);
        setTimeout("updateBarXAxis('barl', false)", 500);
    }
);
$('#olSlider1').hover(
    function() {
        olvalue = parseFloat(olslider1.value);
        setTimeout("updateBarXAxis('obarl', true)", 250);
    },
    function() {
        olvalue = parseFloat(olslider1.value);
        setTimeout("updateBarXAxis('obarl', false)", 500);
    }
);


$('#vSlider1').hover(
    function() {
        value1 = parseFloat(slider1.value);
        setTimeout("updateBarYAxis('bar1', true)", 250);
    },
    function() {
        value1 = parseFloat(slider1.value);
        setTimeout("updateBarYAxis('bar1', false)", 500);
    }
);



$('#vSlider2').hover(
    function() {
        value2 = parseFloat(slider2.value);
        setTimeout("updateBarYAxis('bar2', true)", 250);
        $('#vSlider2, #vSlider3, #vSlider4')

        // Setup Compact
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});

        // Setup Large
        .css({'background':'black', 'opacity':'1', 'margin-left': '-125px'});

        // Setup Super Large
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-202px'});

        $('#vSlider3, #vSlider4').addClass('newnewSlider');
    },
    function() {
        value2 = parseFloat(slider2.value);
        setTimeout("updateBarYAxis('bar2', false)", 500);

        $('#vSlider2, #vSlider3, #vSlider4')

        // Setup Compact
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});

        // Setup Large
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-138px'});

        // Setup Super Large
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-215px'});

        $('#vSlider3, #vSlider4').removeClass('newnewSlider');
    }
);
$('#vSlider3').hover(
    function() {
        value3 = parseFloat(slider3.value);
        setTimeout("updateBarYAxis('bar3', true)", 250);
        $('#vSlider2, #vSlider3, #vSlider4')

        // Setup Compact
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});

        // Setup Large
        .css({'background':'black', 'opacity':'1', 'margin-left': '-125px'});

        // Setup Super Large
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-202px'});

        $('#vSlider2, #vSlider3, #vSlider4').addClass('newnewSlider');
    },
    function() {
        value3 = parseFloat(slider3.value);
        setTimeout("updateBarYAxis('bar3', false)", 500);

        $('#vSlider2, #vSlider3, #vSlider4')

        // Setup Compact
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});

        // Setup Large
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-138px'});

        // Setup Super Large
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-215px'});

        $('#vSlider2, #vSlider3, #vSlider4').removeClass('newnewSlider');
    }
);
$('#vSlider4').hover(
    function() {
        value4 = parseFloat(slider4.value);
        setTimeout("updateBarYAxis('bar4', true)", 250);
        $('#vSlider2, #vSlider3, #vSlider4')

        // Setup Compact
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});

        // Setup Large
        .css({'background':'black', 'opacity':'1', 'margin-left': '-125px'});

        // Setup Super Large
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-202px'});

        $('#vSlider2, #vSlider3, #vSlider4').addClass('newnewSlider');
    },
    function() {
        value4 = parseFloat(slider4.value);
        setTimeout("updateBarYAxis('bar4', false)", 500);
        $('#vSlider2, #vSlider3, #vSlider4')

        // Setup Compact
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});

        // Setup Large
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-138px'});

        // Setup Super Large
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-215px'});

        $('#vSlider2, #vSlider3, #vSlider4').removeClass('newnewSlider');
    }
);


$('#ovSlider1').hover(
    function() {
        ovalue1 = parseFloat(oslider1.value);
        setTimeout("updateBarYAxis('obar1', true)", 250);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')

        // Setup Compact
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});

        // Setup Large
        .css({'background':'black', 'opacity':'1', 'margin-left': '-125px'});

        // Setup Super Large
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-202px'});

        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').addClass('newnewSlider');
    },
    function() {
        ovalue1 = parseFloat(oslider1.value);
        setTimeout("updateBarYAxis('obar1', false)", 500);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')

        // Setup Compact
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});

        // Setup Large
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-138px'});

        // Setup Super Large
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-215px'});

        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').removeClass('newnewSlider');
    }
);
$('#ovSlider2').hover(
    function() {
        ovalue2 = parseFloat(oslider2.value);
        setTimeout("updateBarYAxis('obar2', true)", 250);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')

        // Setup Compact
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});

        // Setup Large
        .css({'background':'black', 'opacity':'1', 'margin-left': '-125px'});

        // Setup Super Large
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-202px'});

        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').addClass('newnewSlider');
    },
    function() {
        ovalue2 = parseFloat(oslider2.value);
        setTimeout("updateBarYAxis('obar2', false)", 500);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')

        // Setup Compact
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});

        // Setup Large
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-138px'});

        // Setup Super Large
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-215px'});

        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').removeClass('newnewSlider');
    }
);
$('#ovSlider3').hover(
    function() {
        ovalue3 = parseFloat(oslider3.value);
        setTimeout("updateBarYAxis('obar3', true)", 250);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')

        // Setup Compact
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});

        // Setup Large
        .css({'background':'black', 'opacity':'1', 'margin-left': '-125px'});

        // Setup Super Large
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-202px'});

        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').addClass('newnewSlider');
    },
    function() {
        ovalue3 = parseFloat(oslider3.value);
        setTimeout("updateBarYAxis('obar3', false)", 500);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')

        // Setup Compact
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});

        // Setup Large
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-138px'});

        // Setup Super Large
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-215px'});

        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').removeClass('newnewSlider');
    }
);
$('#ovSlider4').hover(
    function() {
        ovalue4 = parseFloat(oslider4.value);
        setTimeout("updateBarYAxis('obar4', true)", 250);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')

        // Setup Compact
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-50px'});

        // Setup Large
        .css({'background':'black', 'opacity':'1', 'margin-left': '-125px'});

        // Setup Super Large
        // .css({'background':'red', 'opacity':'1', 'margin-left': '-202px'});

        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').addClass('newnewSlider');
    },
    function() {
        ovalue4 = parseFloat(oslider4.value);
        setTimeout("updateBarYAxis('obar4', false)", 500);
        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4')

        // Setup Compact
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-60px'});

        // Setup Large
        .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-138px'});

        // Setup Super Large
        // .css({'background':'gray', 'opacity':'0.3', 'margin-left': '-215px'});

        $('#ovSlider1, #ovSlider2, #ovSlider3, #ovSlider4').removeClass('newnewSlider');
    }
);
