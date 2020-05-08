
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
        title: 'Hide the Modebar',
        font:{
            size: 10
        },
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false,
        //paper_bgcolor: 'rgb(255,165,0)'
    };

    Plotly.react('probabilityPie', data, layout, {displayModeBar: false});
}




updateBarHelp = function(a) {
    x = a;
    y = 200-a;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if((x + y) === 0) {
        x = 1;
        y = 1;
    }
    var data = [{
        y: [x, y],
        x: ['Opposing Group', 'Your Group'],
        labels: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hovertext: ['Your Group', 'Opposing Group'],
        hover: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(0,0,255)', 'rgb(255,0,0)']
        },
        // text: [((100 * x).toFixed(2) + '%'), ((100 * y).toFixed(2) + '%')],
        textposition: 'auto'
    }];

    var layout = {
        barmode: 'group',
        paper_bgcolor: 'rgb(255,165,0)',
        height: 150,
        width: 150,
        yaxis: {
            fixedrange: false,
            autorange: false,
            range: [0,200]
        },
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        //showlegend: false

    };

    Plotly.react('helpBar', data, layout, {displayModeBar: false});
}
updateBarSabo = function(a) {
    x = a;
    y = 200-a;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if((x + y) === 0) {
        x = 1;
        y = 1;
    }
    var data = [{
        y: [x, y],
        x: ['Opposing Group', 'Your Group'],
        labels: ['Opposing Group', 'Your Group'],
        type: 'bar',
        sort: false,
        hovertext: ['Your Group', 'Opposing Group'],
        hover: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ['rgb(0,0,255)', 'rgb(255,0,0)']
        },
        // text: [((100 * x).toFixed(2) + '%'), ((100 * y).toFixed(2) + '%')],
        textposition: 'auto'
    }];

    var layout = {
        barmode: 'group',
        paper_bgcolor: 'rgb(255,165,0)',
        height: 150,
        width: 150,
        yaxis: {
            fixedrange: false,
            autorange: false,
            range: [0,200]
        },
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        //showlegend: false

    };

    Plotly.react('saboBar', data, layout, {displayModeBar: false});
}


updatePie(0.5);
updateBarHelp(35);
updateBarSabo(80);
