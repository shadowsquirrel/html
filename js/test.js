
// AN ATTEMPT TO OVERLAY THE SUM WITH THE INDIVIDUAL HELP IT WORKS BUT DOESN'T LOOK GOOD
// THE MAIN PROBLEM WE WOULD NEED DIFFERENT YAXIS RANGES TO MAKE IT LOOK GOOD
// ONE ALTERNATIVE IS TO USE THE 2 TIMES  THE AVERAGE FOR THE AGGREGATE VALUE COMPARISON
updateBarHelpLayover = function(a, b, c, d, barId) {
    x = a;
    y = b;
    z = c;
    w = d;
    sum = (a+b+c+d);
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if(typeof(z) === 'undefined') z = 0;
    if(typeof(w) === 'undefined') w = 0;
    var darkblue = 'rgb(140, 140, 255)';
    var blue = 'rgb(66, 66, 204)';

    var data = [
        {
            y: [sum, sum, sum, sum],
            name: ['Total'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: [blue,blue,blue,blue]
                    },
            // text: ['', '' , sum, ''],
            textposition: 'outside',
            cliponaxis: false,
            opacity: 0.3,
        },
        {
            y: [x, y, z, w],
            name: ['Follower 1', 'Follower 2', 'Follower 3', 'Follower 4'],
            type: 'bar',
            sort: false,
            hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            marker:{
                color: [darkblue, darkblue, darkblue, darkblue],
                line: {
                    color: 'rgb(5, 90, 255)',
                    width: 0.5
                }
                    },
            // text: [x, y, z, w],
            textposition: 'outside',
            cliponaxis: false,
            opacity: 1,
        }
    ];

    var layout = {
        barmode: 'overlay',
        height: 55,
        width: 75,
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
        bargap: 0,
        // paper_bgcolor: 'white',
        // plot_bgcolor: 'white'
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

var n2p = function(val, sum) {
    // return ( val + '<br>' + '(' + ((val/sum)*100).toFixed(0) + '%' + ')');
    return (((val/sum)*100).toFixed(0) + '%');
}

updateBarHelpStack = function(h1, h2, h3, h4, oh1, oh2, oh3, oh4, barId) {
    var th = h1 + h1 + h3 + h4;
    var oth = oh1 + oh1 + oh3 + oh4;
    ph1 = n2p(h1, th);
    ph2 = n2p(h2, th);
    ph3 = n2p(h3, th);
    ph4 = n2p(h4, th);
    oph1 = n2p(oh1, oth);
    oph2 = n2p(oh2, oth);
    oph3 = n2p(oh3, oth);
    oph4 = n2p(oh4, oth);


    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if(typeof(z) === 'undefined') z = 0;
    if(typeof(w) === 'undefined') w = 0;
    var lightblue = 'rgb(140, 140, 255)';
    var blue = 'rgb(66, 66, 204)';

    var data = [
        {
            y: [h1, oh1],
            name: 'Follower 1',
            type: 'bar',
            sort: false,
            // hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            // marker:{
            //     color: [lightblue, lightblue, lightblue, lightblue],
            //     line: {
            //         color: 'rgb(5, 90, 255)',
            //         width: 0.5
            //     }
            // },
            text: [ph1, oph1],
            // textposition: 'outside',
            cliponaxis: false,
            opacity: 1,
        },
        {
            y: [h2, oh2],
            name: 'Follower 2',
            type: 'bar',
            sort: false,
            // hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            // marker:{
            //     color: [lightblue, lightblue, lightblue, lightblue],
            //     line: {
            //         color: 'rgb(5, 90, 255)',
            //         width: 0.5
            //     }
            // },
            text: [ph2, oph2],
            // textposition: 'outside',
            cliponaxis: false,
            opacity: 1,
        },
        {
            y: [h3, oh3],
            name: 'Follower 3',
            type: 'bar',
            sort: false,
            // hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            // marker:{
            //     color: [lightblue, lightblue, lightblue, lightblue],
            //     line: {
            //         color: 'rgb(5, 90, 255)',
            //         width: 0.5
            //     }
            // },
            text: [ph3, oph3],
            // textposition: 'outside',
            cliponaxis: false,
            opacity: 1,
        },
        {
            y: [h4, oh4],
            name: 'Follower 4',
            type: 'bar',
            sort: false,
            // hoverinfo: 'none',
            automargin: true,
            showlegend: false,
            // marker:{
            //     color: [lightblue, lightblue, lightblue, lightblue],
            //     line: {
            //         color: 'rgb(5, 90, 255)',
            //         width: 0.5
            //     }
            // },
            text: [ph4, oph4],
            // textposition: 'outside',
            cliponaxis: false,
            opacity: 1,
        }

    ];

    var layout = {
        barmode: 'stack',
        height: 155,
        width: 175,
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
        bargap: 0,
        // paper_bgcolor: 'white',
        // plot_bgcolor: 'white'
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}

updateBarHelp = function(a, b, c, d, barId, ourGroup, me, newLeader) {
    x = a;
    y = b;
    z = c;
    w = d;
    sum = (a+b+c+d);
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if(typeof(z) === 'undefined') z = 0;
    if(typeof(w) === 'undefined') w = 0;
    var lightblue = 'rgb(200,200,255)';
    var blue = 'rgb(140, 140, 255)'; //'rgb(66, 66, 204)';
    var lightred = 'rgb(255,200,200)';
    var red = 'rgb(255 140, 140)';
    // var ourColor = ourGroup ? blue : lightblue;
    var ourColor = ourGroup ? red : lightred;
    // 'rgb(140, 140, 255)', 'rgb(200,200,255)'
    // colorArray = ['', '', '', ''];
    // widthArray = [0, 0, 0, 0];
    //
    // if (typeof(me) !== undefined){
    //     colorArray[me] = 'black';
    // }


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
                    color: ['yellow', '', 'black', ''],
                    width: [3, 0, 3, 0],
                }
                    },
            // text: [n2p(x, sum), n2p(y, sum), n2p(z, sum), n2p(w, sum)],
            text: [x, y, z, w],
            textposition: 'outside',
            textfont: {
                // color: myTextFont,
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
        // title: 'Total Help',
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
        // paper_bgcolor: 'white',
        // plot_bgcolor: 'white'
    };

    Plotly.react(barId, data, layout, {displayModeBar: false});
}




updateBarSabo = function(a, b, c, d, barId, ourGroup) {
    x = -a;
    y = -b;
    z = -c;
    w = -d;
    if(typeof(x) === 'undefined') x = 0;
    if(typeof(y) === 'undefined') y = 0;
    if(typeof(z) === 'undefined') z = 0;
    if(typeof(w) === 'undefined') w = 0;
    var lightred = 'rgb(255,140,140)';
    var red = 'rgb(204,66,66)';
    var reds = [red, red, red, red];
    var lightreds = [lightred, lightred, lightred, lightred];
    myColors = ourGroup ? reds : lightreds;

    var data = [{
        y: [x, y, z, w],
        name: ['Follower 1', 'Follower 2', 'Follower 3', 'Follower 4'],
        type: 'bar',
        sort: false,
        hoverinfo: 'none',
        automargin: true,
        showlegend: false,
        marker:{
            color: myColors,
            line: {
                color: 'rgb(255, 90, 5)',
                width: 0.5
            }
        },
        text: [a, b, c, d],
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


// updateBarHelpPlus(20, 30, 50, 10, 's2helpbarg1');
// updateBarHelpPlus(90, 80, 70, 10, 's2helpbarg2');

// updateBarHelpStack(20, 30, 50, 10, 90, 80, 70, 10, 's2helpbarg1');




updateBarHelp(20, 30, 50, 10, 's2helpbarg1', 1);
updateBarHelp(90, 80, 70, 10, 's2helpbarg2', 0);
