
    ////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// HOVER STAGES //////////////////////////////
    ////////////////////////////////////////////////////////////////////////////



    $('.s1b').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});
            $('#stage1, #stage2, #stage3, #s3lost, #s3won, #stage4').css({'opacity':'0','position':'absolute'});

            $('.s1b').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('#stage1').css({'opacity':'1', 'position':'static'});
        },
        function() {
            //$('s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
        }
    );
    $('.s2b').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});
            $('#stage1, #stage2, #stage3, #s3lost, #s3won, #stage4').css({'opacity':'0','position':'absolute'});

            $('.s2b').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('.s2a').css('opacity','1');
            $('.s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('#stage2').css({'opacity':'1', 'position':'static'});
        },
        function() {
            // $('.s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a').css({'opacity':'0.3'});
        }
    );
    $('.s3b').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});
            $('#stage1, #stage2, #stage3, #s3lost, #s3won, #stage4').css({'opacity':'0','position':'absolute'});

            $('.s3b').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('.s3a').css('opacity','1');
            $('.s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s2a').css('opacity','1');
            $('#stage3').css({'opacity':'1', 'position':'static'});

        },
        function() {
            // $('.s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a').css({'opacity':'0.3'});
        }
    );
    $('.s4bw').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('#stage1, #stage2, #stage3, #s3lost, #s3won, #stage4').css({'opacity':'0','position':'absolute'});

            $('.s4bw').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('.s4aw').css('opacity','1');
            $('.s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s3a, .s2a').css('opacity','1');
            $('#s3won').css({'opacity':'1', 'position':'static'});

        },
        function() {
            // $('.s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4aw').css({'opacity':'0.3'});
        }
    );
    $('.s4bl').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('#stage1, #stage2, #stage3, #s3lost, #s3won, #stage4').css({'opacity':'0','position':'absolute'});

            $('.s4bl').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('.s4al').css('opacity','1');
            $('.s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s3a, .s2a').css('opacity','1');
            $('#s3lost').css({'opacity':'1', 'position':'static'});

        },
        function() {
            // $('.s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4al').css({'opacity':'0.3'});
        }
    );
    $('.s44bl').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('#stage1, #stage2, #stage3, #s3lost, #s3won, #stage4').css({'opacity':'0','position':'absolute'});

            $('.s44bl').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('.s44al').css('opacity','1');
            $('.s4bl, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s4al, .s3a, .s2a').css('opacity','1');
            $('#stage4').css({'opacity':'1', 'position':'static'});
        },
        function() {
            // $('.s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4al, .s44al').css({'opacity':'0.3'});
        }
    );
    $('.s5bw').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s5bw').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('.s5aw').css('opacity','1');
            $('.s4bw, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s4aw, .s3a, .s2a').css('opacity','1');

        },
        function() {
            // $('.s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4aw, .s5aw').css({'opacity':'0.3'});
        }
    );
    $('.s5bl').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s5bl').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('.s5al').css('opacity','1');
            $('.s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s44al, .s4al, .s3a, .s2a').css('opacity','1');

        },
        function() {
            // $('.s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4al, .s44al, .s5al').css({'opacity':'0.3'});
        }
    );
    $('.s6bw').hover(
        function() {
            $('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});

            $('.s6bw').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('.s6aw').css('opacity','1');
            $('.s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s5aw, .s4aw, .s3a, .s2a').css('opacity','1');

        },
        function() {
            // $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            // $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});
        }
    );
    $('.s6bl').hover(
        function() {
            $('.s6bw, .s5bw, .s4bw, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            $('.s2a, .s3a, .s4aw, .s5aw, .s6aw').css({'opacity':'0.3'});


            $('.s6bl').css({'opacity': '1', 'border': 'solid green 3px', 'color': 'black'});
            $('.s6al').css('opacity','1');
            $('.s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity':'1', 'border': 'solid yellow 3px', 'color': 'yellow'});
            $('.s5al, .s44al, .s4al, .s3a, .s2a').css('opacity','1');

        },
        function() {
            //$('.s6bl, .s5bl, .s44bl, .s4bl, .s3b, .s2b, .s1b').css({'opacity': '0.3', 'border': 'solid white 3px', 'color':'white'});
            //$('.s2a, .s3a, .s44al, .s4al, .s5al, .s6al').css({'opacity':'0.3'});
        }
    );
