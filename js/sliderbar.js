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
            colors: ['rgb(225, 225, 225)', 'rgb(100, 100, 100)']
            // colors: ['gray', 'yellow']
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
            color: ['rgb(150, 150, 255)', 'rgb(200,200,255)'],
            // color: ['yellow', 'gray'],
            // line: {
            //     color: 'rgb(5, 90, 255)',
            //     width: 1.5
            // }
        },
        text: [x, y],
        // textposition: 'outside'
        textposition: 'auto'
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
        bargap: 0.1,
        // paper_bgcolor: 'rgb(255,165,0)'
        // plot_bgcolor: 'rgb(180,180,255)'
    };

    Plotly.react('helpBar', data, layout, {displayModeBar: false});
}
updateBarSabo = function(a, b) {
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
            // color: ['rgb(180,180,255)', 'rgb(255,180,180)'],
            color: ['rgb(255,150,150)', 'rgb(255,200,200)'],
            // color: ['gray', 'yellow'],
            // line: {
            //     color: 'rgb(255, 5, 5)',
            //     width: 1.5
            // }
        },
        text: [-x, -y],
        // textposition: 'outside'
        textposition: 'auto'
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
            range: [-200,0]
        },
        bargap: 0.1,
        // plot_bgcolor: 'rgb(255,180,180)'
    };

    Plotly.react('saboBar', data, layout, {displayModeBar: false});
}






updateBar = function(a, barId, lighter) {
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
            size: '18'
        },
        textanchor: 'right',
        // textposition: 'auto'
        cliponaxis: false,
        // textposition: myTextPosition
        textposition: 'outside',
        textpositionsrc: 'x'

    }];

    var layout = {
        barmode: 'group',
        height: 245,//300
        width: 80,
        // title: 'Total Help',
        margin: {"t": 20, "b": 25, "l": 25, "r": 25},
        yaxis: {
            fixedrange: false,
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
            ticktext: [100, 50, 0, 50, 100]


        },
        xaxis: {
            layer: 'below traces',
            fixedrange: false,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,

        },
    //     annotations:[{
    //         align: 'center'
    //     }]
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

updatePie(0.4);




var slider1 = document.getElementById('vSlider1');
var slider2 = document.getElementById('vSlider2');
var slider3 = document.getElementById('vSlider3');
var slider4 = document.getElementById('vSlider4');
var value1 = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;
updateBar(value1, 'bar1', 0);
updateBar(value2, 'bar2', 0);
updateBar(value3, 'bar3', 1);
updateBar(value4, 'bar4', 1);

slider1.oninput = function() {
    value1 = parseFloat(slider1.value);
    updateBar(value1, 'bar1', 0);
    if(value1>=0) {
        value1
    }
}
slider2.oninput = function() {
    value2 = parseFloat(slider2.value);
    updateBar(value2, 'bar2', 0);
}

slider3.oninput = function() {
    value3 = parseFloat(slider3.value);
    updateBar(value3, 'bar3', 1);
}
slider4.oninput = function() {
    value4 = parseFloat(slider4.value);
    updateBar(value4, 'bar4', 1);
}



updateBarHelp(0, 0);
updateBarSabo(89, 200);
