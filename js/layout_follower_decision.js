//BUTTONS INSIDE CALCULATOR SECTION
var formulasButton = document.getElementById('formulasButton');
var fb = 1;
formulasButton.onclick = function() {
    console.log('formulas button is clicked');
    var k, l1, l2;
    k = (fb === 1) ? '100%' : '0';
    l1 = (fb === 1) ? '1' : '0';
    l2 = (fb === 1) ? 'static' : 'absolute';
    document.getElementById("formulas").style.height = k;
    document.getElementById("math").style.opacity = l1;
    document.getElementById("math").style.position = l2;
    fb = 1 - fb;
}

/*
// var beliefsButton = document.getElementById('beliefsB');
// var bb = 1;
// formulasButton.onclick = function() {
//     console.log('beliefs button is clicked');
//     var k;
//     k = (bb === 1) ? '100%' : '0';
//     document.getElementById("beliefs").style.height = k;
//     bb = 1 - bb;
// }
// <button class = 'calculatorButton' id = 'beliefsB'> Beliefs </button>
                //
                // <div id = 'beliefs' class = 'beliefs'>
                //
                //
                //     <pre>
                //         z
                //         z
                //         z
                //         z
                //         z beliefs
                //         z
                //         z
                //         z
                //         z
                //         z
                //         z
                //         z
                //         z
                //         z
                //         z
                //         z
                //         z
                //
                //     </pre>
                //
                //
                // </div>
                */


// BUTTONS INSIDE DECISION SECTION - STAGE INFO
var topButton = document.getElementById('topButton');
var tb = 1;
topButton.onclick = function() {
    var k;
    k = (tb === 1) ? '250px' : '0';
    document.getElementById("top").style.height = k;
    tb = 1 - tb;
}


var calculatorButton = document.getElementById('calculatorButton');
var lb = 1;
calculatorButton.onclick = function() {
    var k, l1, l2;
    k = (lb === 1) ? '100%' : '0';
    l1 = (lb === 1) ? '0.8' : '0';
    l2 = (lb === 1) ? 'static' : 'absolute';
    //l3 =
    document.getElementById("left").style.maxWidth = k;
    document.getElementById("formulasButton").style.opacity = l1;
    document.getElementById("formulasButton").style.position = l2;
    // document.getElementById("beliefsB").style.opacity = l1;
    // document.getElementById("beliefsB").style.position = l2;
    document.getElementById("probabilityPie").style.opacity = l1;
    document.getElementById("probabilityPie").style.position = l2;
    if(lb === 0){
        document.getElementById("math").style.opacity = '0';
        document.getElementById("math").style.position = 'absolute';
    }
    lb = 1 - lb;
}

var miniTopButton = document.getElementById('miniTopButton');
var mtb = 1;
miniTopButton.onclick = function() {
    var k;
    k = (mtb === 1) ? '250px' : '0';
    document.getElementById("info").style.height = k;
    mtb = 1 - mtb;
}




///////////////////////////////////////////////////////////////////////



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
