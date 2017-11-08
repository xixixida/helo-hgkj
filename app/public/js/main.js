var bodyMax = function (a) {
    var h = $(window).height()
    $(a).height(h)
}
//fadeto
var show1 = function (name1, name2) {
    var na = $(name1)
    var mun = na.length
    var i = 0;
    var x;
    if (name2) {
        x = show2(name2);
    } else {
        x = null;
    }
    setInterval(function () {
        na.hide();
        na.eq(i).fadeTo(2000, 1, "linear", x)
        i++;
        if (i == mun) {
            i = 0;
        }
    }, 2600)
}
//hide
var show2 = function (name) {
    $(name).hide()
}

//居中


var bn = function () {
    var i;
    $('.bn_2_1').hover(function () {
        i = $(this).index()
        $('.bn_2_1_h').eq(i).animate({
            height: '210px'
        })
        $('.bn_2_1_h').eq(i).css({
            backgroundColor: '#cc4d56'
        })

    }, function () {
        i = $(this).index()
        $('.bn_2_1_h').eq(i).animate({
            height: '190px'

        })
        $('.bn_2_1_h').eq(i).css({
            backgroundColor: '#3777cf'
        })

    })
}

var btn6 = function () {
    var i;
    $('.bn_6_a').hover(function () {
        i = $(this).index() - 1
        $('.bn_btn').eq(i).show()
        $(this).animate({
            marginTop: '-20px'
        })
    }, function () {
        i = $(this).index() - 1
        $('.bn_btn').eq(i).hide()
        $(this).animate({
            marginTop: '0px'
        })
    })
}

var cpxt = function () {
    var num = $('.cpxt1-a1').length
    var w = $('.cpxt1-a').width()
    $('.cpxt1-a').height(260)
    $('.cpxt1-b').height(260 * num)
    $('.cpxt1-a1').width(w + 15)


}


/*
var x = 1;
var cpxt1 = setInterval(function () {
    var num = $('.cpxt1-a1').length
    var h = x * 260;
    
    if (x >= num) {
        $('.cpxt1-b').animate({
            marginTop: 0
        })
        x = 0
    } else {
        $('.cpxt1-b').animate({
            marginTop: -h
        })
    }
    x++;
}, 5000)
*/

var le1 = function (i) {
    var w = $(window).width()
    if (w < 1100) {
        return false;
    }
    if (i == 1) {
        $('#right').css({
            position: 'fixed'
        })
    } else {
        $('#right').css({
            position: 'absolute'
        })
    }

}

var rinum = function (name) {
    return $(name).length
}

var lock = function (name) {
    var h = $(name).offset().top - 70;
    var x = 0;
    var n = setInterval(function () {
        x = x + 10;
        if (x >= h) {
            window.clearInterval(n)
        }
        $(document).scrollTop(x)
    }, 20)

}

var scr = function () {

    var x = $(document).scrollTop()

    var n = setInterval(function () {
        x = x - 200;
        if (x <= 0) {
            window.clearInterval(n)
        }
        $(document).scrollTop(x)

    }, 20)


}
$(function () {

    //$('body').scrollspy({ target: '#navbar-example' })
    //$('.cpxt-a').eq(0).css({
    //   backgroundColor: 'red',
    //   color: '#fff'
    //})
    // bodyMax('#pc')
    // $('#cpxt').on('activate.bs.scrollspy', function () {
    //     alert(132)
    // })
    //cpxt()

    /* bodyMax('.body_max_div');
     show1('.body_max_div')
     bn()
     btn6()*/
    var c = 0;
    var d = 0;
    var e = 0;

    $('#right').on('activate.bs.scrollspy', function () {

        var a = rinum('#right li')

        var rh = $('#h1').offset().top;

        var h = $(document).scrollTop();



        c = h;
    })



    $('.jxyj1 span').click(function () {
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    })

    var generic = $('#slide').width()
    if (generic > 715) {
        $('#slide img').width(715)
    } else {
        $('#slide img').width(generic)
    }

})
