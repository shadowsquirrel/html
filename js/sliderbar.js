updateBar = function(a) {
    x = a;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;

    var myLabel = x > 0 ? x : -x;
    var myColor = x > 0 ? 'rgb(180,180,255)' : 'rgb(255,180,180)';
    var myLineColor = x > 0 ? 'rgb(5, 90, 255)' : 'rgb(255, 5, 5)';

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
                color: myLineColor,
                width: 1.5
            }
        },
        text: [myLabel],
        textfont: {
            // color: 'rgb(255, 255, 255)'
        },
        textposition: 'auto'

        // textposition: 'outside'
    }];

    var layout = {
        barmode: 'group',
        height: 300,
        width: 30,
        // title: 'Total Help',
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        yaxis: {
            fixedrange: false,
            autorange: false,
            range: [-100,100]
        },
        // font: {
        //     color: 'rgb(255, 255, 255)'
        // },
    };

    Plotly.react('bar', data, layout, {displayModeBar: false});
}

var slider = document.getElementById('vSlider');
var value = 0;
slider.oninput = function() {
    value = parseFloat(slider.value);
    updateBar(value);
}
