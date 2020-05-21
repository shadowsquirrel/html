

updateBarHelp = function(a, b, c, d, barId, ourGroup, me, newLeader) {
    x = a;
    y = b;
    z = c;
    w = d;

    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';

    var ourColor = ourGroup ? blue : lightblue;

    colorArray = ['', '', '', ''];
    colorWidth = [0, 0, 0, 0];
    if (me!==-1) {
        colorArray[me] = 'black';
        colorWidth[me] = 3;
    }
    if(newLeader!==-1) {
        colorArray[newLeader] = 'purple'
        colorWidth[newLeader] = 3;
    }

    var data = [
        {
            y: [x, y, z, w],
            name: ['Follower 1', 'Follower 2', 'Follower 3', 'Follower 4'],
            type: 'bar',
            sort: false,
            hoverinfo: 'name',
            automargin: true,
            showlegend: false,
            marker:{
                color: ourColor,
                line: {
                    color: colorArray,
                    width: colorWidth,
                }
            },
            text: [x, y, z, w],
            textposition: 'outside',
            textfont: {
                size: '11'
            },
            cliponaxis: false,
            opacity: 1,
        }
    ];

    var layout = {
        barmode: 'group',
        height: 80,
        width: 100,
        margin: {"t": 20, "b": 0, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [0,100]
        },
        xaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },
        bargap: 0.25,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

updateBarTotalHelp = function(a, b, barId) {
    x = a;
    y = b;

    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)';

    var data = [
        {
            y: [x, y],
            name: ['Group 1', 'Group 2'],
            type: 'bar',
            sort: false,
            hoverinfo: 'name',
            automargin: true,
            showlegend: false,
            marker:{
                color: [blue, lightblue],
            },
            text: [x, y],
            textposition: 'outside',
            textfont: {
                size: '11'
            },
            cliponaxis: false,
            opacity: 1,
        }
    ];

    var layout = {
        barmode: 'group',
        height: 80,
        width: 100,
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
        bargap: 0.25,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}




updateBarSabo = function(a, b, c, d, barId, ourGroup, me, newLeader) {
    x = -a;
    y = -b;
    z = -c;
    w = -d;

    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';
    var ourColor = ourGroup ? red : lightred;

    colorArray = ['', '', '', ''];
    colorWidth = [0, 0, 0, 0];
    if (me!==-1) {
        colorArray[me] = 'black';
        colorWidth[me] = 3;
    }
    if(newLeader!==-1) {
        colorArray[newLeader] = 'purple'
        colorWidth[newLeader] = 3;
    }


    var data = [{
        y: [x, y, z, w],
        name: ['Follower 1', 'Follower 2', 'Follower 3', 'Follower 4'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: ourColor,
            line: {
                color: colorArray,
                width: colorWidth,
            }
        },
        text: [x, y, z, w],
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 80,
        width: 100,
        margin: {"t": 0, "b": 20, "l": 0, "r": 0},
        yaxis: {
            fixedrange: true,
            autorange: false,
            range: [-100,0]
        },
        xaxis: {
            fixedrange: true,
            showline: false,
            showgrid: false,
            ticks: '',
            showticklabels: false,
        },
        bargap: 0.25,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

updateBarTotalSabo = function(a, b, barId) {
    x = -a;
    y = -b;

    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';



    var data = [{
        y: [x, y],
        name: ['Group 1', 'Group 2'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: [red, lightred],
            },
        text: [x, y],
        textposition: 'outside',
        cliponaxis: false,
    }];

    var layout = {
        barmode: 'group',
        height: 80,
        width: 100,
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
        bargap: 0.25,
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}




// updateBarHelp(a, b, c, d, barId, ourGroup, me, newLeader)
updateBarHelp(20, 30, 50, 10, 's2helpbarg1', true, 2, 0);
updateBarSabo(20, 30, 50, 10, 's2sabobarg1', true, 2, 0);

updateBarTotalHelp(110, 250, 's2totalhelpbar');
updateBarTotalSabo(110, 250, 's2totalsabobar');

updateBarHelp(90, 80, 70, 10, 's2helpbarg2', false, -1, -1);
updateBarSabo(90, 80, 70, 10, 's2sabobarg2', false, -1, -1);
