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
        paper_bgcolor: 'rgb(255,165,0)'
    };

    Plotly.react('probabilityPie', data, layout, {displayModeBar: false});
}


updatePie(0.5);
