$('.d1,.d15,.d2,.d25,.d3,.d33,.d36,.d39,.d4,.d43,.d46,.d5').css({'opacity':'1'});
goDown = function() {
        $('html, body').animate({scrollTop: $(document).height()}, 3000);
}

setTimeout('goDown()', 26500);

// var doneEnabled = true;
//
// var talk2node = function() {
//     node.emit('DoneButton', doneEnabled);
// }
//
// setTimeout('talk2node()', 35000);
