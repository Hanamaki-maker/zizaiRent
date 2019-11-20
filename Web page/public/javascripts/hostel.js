
        var succss = $('.succss');


        $(window).scroll(function () {
            if ($(window).scrollTop() > 450) {
                $('.header>.pilot>.succeed>p').css({
                    color: 'black'
                })
            } else {
                $('.header>.pilot>.succeed>p').css({
                    color: 'white'
                })
            }
        })


        succss.on('click', function () {
            $('.succeed').css({
                display: 'block'
            })
            $('.c1').css({
                display: 'none'
            })
            $('.c2').css({
                display: 'none'
            })
            $('.btn').css({
                display: 'none'
            })

        })


        var imgs = $('.banner>ul>li');
        // console.log(imgs);
        var index = 0;
        function timeout() {
            index += 1;
            if (index > imgs.length - 1) {
                index = 0;
            }
            imgs.fadeOut('fast');
            $(imgs[index]).fadeIn('slow');
        }
        setInterval(timeout, 3000);

        function Show() {
            document.getElementById('shade').classList.remove('hide');
            document.getElementById('modal').classList.remove('hide');
            document.getElementById('modal2').classList.remove('hide');
        }
        function zhuce() {
            // document.getElementById('modal').classList.add('hide');
            // document.getElementById('modal2').classList.remove('hide');
            document.getElementById('modal').classList.add('div1');
            document.getElementById('modal2').classList.add('div2');
        }
        function dl() {
            // document.getElementById('modal2').classList.add('hide');
            // document.getElementById('modal').classList.remove('hide');
            document.getElementById('modal').classList.remove('div1');
            document.getElementById('modal2').classList.remove('div2');
        }
        function Hide() {
            document.getElementById('shade').classList.add('hide');
            document.getElementById('modal').classList.add('hide');
            document.getElementById('modal2').classList.add('hide');
        }