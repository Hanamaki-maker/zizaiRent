var imgs = $('.div4>.imgbox>ul>li');
var lis = $('.div4>.clearbox>ul>li>h2');
var index = 0;
var succss = $('.succss');


/* var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMap.Point(104.07, 30.67), 11);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
    mapTypes: [
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]
}));
map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);
$('#allmap').hide();
$('.mapbtn').on('click', function () {
    $('#allmap').show();
    console.log("123");
    
}) */

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








lis.on("click", function (event) {
    let imgs = $('.div4>.imgbox>ul>li');
    var li = event.target;
    index = $(li).data("idx");

    imgs.fadeOut("slow");
    $(imgs[index]).fadeIn("slow");

    lis.removeClass("curr");
    $(li).addClass("curr");

})
setInterval('timer()', 3000);

function timer() {
    let imgs = $('.div4>.imgbox>ul>li')
    index += 1;
    if (index > imgs.length - 1) {
        index = 0;
    }
    imgs.fadeOut('slow');
    $(imgs[index]).fadeIn('slow');

    lis.removeClass('curr');
    $(lis[index]).addClass('curr');
}
$(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
        $('.header').css({
            background: 'white',
            boxShadow: '0px 2px 0px 0px gainsboro'
        })
    } else {
        $('.header').css({
            background: 'rgba(0, 0, 0, 0.2)',
            boxShadow: 'none'
        })
    }
})
$(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
        $('.header>.pilot>ul>li>a').css({
            color: 'black'
        })
    } else {
        $('.header>.pilot>ul>li>a').css({
            color: 'white'
        })
    }
})
$(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
        $('.header>.pilot>.btn>button').css({
            color: 'black'
        })
    } else {
        $('.header>.pilot>.btn>button').css({
            color: 'white'
        })
    }
})



function Show() {
    document.getElementById('shade').classList.remove('hide');
    document.getElementById('modal').classList.remove('hide');
    document.getElementById('modal2').classList.remove('hide');
}
function zhuce() {
    document.getElementById('modal').classList.add('divO');
    document.getElementById('modal2').classList.add('divT');
}
function dl() {
    document.getElementById('modal').classList.remove('divO');
    document.getElementById('modal2').classList.remove('divT');
}
function Hide() {
    document.getElementById('shade').classList.add('hide');
    document.getElementById('modal').classList.add('hide');
    document.getElementById('modal2').classList.add('hide');
}