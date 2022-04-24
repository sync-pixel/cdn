/*
 * 菜单滚动监听
 */
$(window).scroll(function() {
    handleTopNavAnimation();
});

$(window).load(function() {
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
    var top = $(window).scrollTop();
    if (top > 10) {
        $('#site-nav').addClass('navbar-solid');
        $('.navbar-nav > li > a').css('color', '#333');
        $('.navbar-custom .navbar-nav > .active > a').css('color', '#e74c3c');
        $('.site-branding .logo .logo-color').show();
        $('.site-branding .logo .logo-white').hide();
        $('.site-branding .logo .logo-whiet-m').hide();
        $('.site-branding .logo .logo-color-m').show();
        $('.navbar-toggle .icon-bar').css('background-color', '#666');
        $('#navbar-items').addClass('navm-bg1');
        $('#navbar-items').removeClass('navm-bg2');
        $('.lang-div').hide();
    } else {
        $('#site-nav').removeClass('navbar-solid');
        $('.navbar-nav > li > a').css('color', '#fff');
        $('.navbar-custom .navbar-nav > .active > a').css('color', '#e74c3c');
        $('.site-branding .logo .logo-white').show();
        $('.site-branding .logo .logo-color').hide();
        $('.site-branding .logo .logo-whiet-m').show();
        $('.site-branding .logo .logo-color-m').hide();
        $('.navbar-toggle .icon-bar').css('background-color', '#fff');
        $('#navbar-items').addClass('navm-bg2');
        $('#navbar-items').removeClass('navm-bg1');
        $('.lang-div').show();
        var $lang = $('.lang-div a.active')
        if ($lang.hasClass('en')) {
            $lang.css('color', '#f84d4a')
        } else {
            $lang.css('color', '#0067b9');
        }
    }
}

$(function() {

    $('.navbar-toggle-m').click(function() {
        $('#navbar-items').slideToggle();
    });

    $('#navbar-items a').click(function() {
        $(this).parent().parent().parent().slideUp();
    });

    //滚动监听SmoothScroll 初始化
    smoothScroll.init();

    //关于我们tab切换
    $('.about-tab a').click(function() {
        var i = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
    });

    //响应式轮播
    $('#bootstrap-touch-slider').bsTouchSlider();

    //合作公司
    jQuery(".picScroll").slide({
        mainCell: "ul",
        autoPlay: false,
        effect: "left",
        vis: 5,
        scroll: 1,
        autoPage: true,
        pnLoop: false
    });
});

//回到top
function topBack() {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
}

//滚动动画
window.sr = ScrollReveal();
sr.reveal('.pos-txt', {
    duration: 1000
});
sr.reveal('.hzicon', {
    duration: 1000
});


function orient() {
    if (window.orientation == 0 || window.orientation == 180) {
        //竖屏
        //alert('竖屏');
    } else if (window.orientation == 90 || window.orientation == -90) {
        //横屏
        alert('为保证浏览体验，请将手机竖置阅览!');
    }
}

$(function() {
    orient();
});

$(window).bind('orientationchange', function(e) {
    orient();
});