/*reset*/

html {
    font-family: "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Helvetica, "Noto Sans", sans-serif, Arial, sans-serif, tahoma, 'Hiragino Sans GB', '\5b8b\4f53', 'Roboto', sans-serif;
    font-size: 14px;
}

body {
    color: #fff;
    font-family: "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Helvetica, "Noto Sans", sans-serif, Arial, sans-serif, tahoma, 'Hiragino Sans GB', '\5b8b\4f53', 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.6;
    position: relative;
    -webkit-font-smoothing: antialiased;
}

a {
    color: #000;
}

a:focus {
    outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 700;
}

p {
    margin: 0 0 30px;
}

ul li {
    font-weight: 700;
    margin-bottom: 10px;
    list-style: none;
}

html,
body {
    overflow-x: hidden;
}

.custom-list-icon,
.list-arrow-right {
    list-style-type: none;
    padding: 0;
}

.custom-list-icon li,
.list-arrow-right li {
    position: relative;
    padding-left: 20px;
}

.custom-list-icon li::before,
.list-arrow-right li::before {
    position: absolute;
    left: 0;
    color: #4e4e4e;
    font-family: "Ionicons";
}

.social-block {
    list-style-type: none;
    padding: 0;
}

.social-block li {
    display: inline-block;
}

.social-block li a {
    display: inline-block;
    height: 32px;
    width: 32px;
    color: #4e4e4e;
}

.social-block li a i {
    font-size: 1.5em;
}

.social-block li a:hover,
.social-block li a:focus {
    color: #000;
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn:active:focus,
.btn:focus {
    outline: none;
}

.btn {
    border: 0;
    border-radius: 0;
    padding: 6px 28px;
    text-transform: uppercase;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: -webkit-transform;
    transition-property: transform;
}

.btn:hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
}

.form-control {
    border-radius: 0;
    box-shadow: none;
    height: 48px;
    padding: 10px 12px;
    font-size: 16px;
    line-height: 1.6;
}

.form-control:focus {
    box-shadow: none;
    border-color: #ccc;
    background-color: #f8f8f8;
}

.valign-center {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.section {
    padding: 20px 0;
}

.section-title {
    color: #313131;
    letter-spacing: 1px;
    margin: 0 0 20px;
    text-transform: uppercase;
    text-align: center;
}

.font-300 {
    font-weight: 300;
}

.font-400 {
    font-weight: 400;
}

.font-700 {
    font-weight: 700;
}

.mt0 {
    margin-top: 0;
}

.mb0 {
    margin-bottom: 0;
}

.mt20 {
    margin-top: 20px;
}

.list-arrow-right li::before {
    content: "\f3d3";
}

.btn-con {
    color: #fff;
    width: 226px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
    padding: 0;
    margin: 0;
    font-size: 14px;
    -webkit-transition: all 0.4s linear 0s;
    transition: all 0.4s linear 0s;
}

.btn-reg {
    background: #00a0e9;
}

.btn-reg:hover {
    color: #fff;
    background: #e74c3c;
    font-size: 14px;
}

.btn-login {
    background: #e74c3c;
}

.btn-login:hover {
    color: #fff;
    font-size: 14px;
    background: #00a0e9;
}

/*
 * 4.0 Navigation
 */

.navbar-custom {
    border: 0;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
    /*移动端header bgcolor*/
    -webkit-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
}

.navbar-custom .navbar-nav li {
    margin: 14px 0 0 30px;
}

.navbar-custom .navbar-nav>li>a {
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid transparent;
    padding: 10px 0;
}

.navbar-custom .navbar-nav>li>a:focus,
.navbar-custom .navbar-nav>li>a:hover {
    background-color: transparent;
    border-color: #e74c3c;
    color: #e74c3c;
}

.navbar-custom .navbar-nav>.active>a {
    border-color: #e74c3c;
    color: #e74c3c;
}

.navbar-toggle {
    border: 0;
    border-radius: 0;
    margin-top: 2px;
}

.navbar-toggle .icon-bar {
    background-color: #fff;
}

.navbar-solid {
    background-color: #fff !important;
    padding: 0 !important;
    -webkit-transition: all 0.2s linear 0s;
    transition: all 0.2s linear 0s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.site-branding {
    float: left;
    margin-top: 0;
    margin-left: 10px;
}

.site-branding .logo {
    display: block;
    width: 255px;
    height: 60px;
    overflow: hidden;
}

.site-branding .logo img {
    display: block;
    /*width: 100%;*/
}

.site-branding .logo img.logo-color {
    display: none;
    /*width: 66%;*/
    /*margin-top: 8px;*/
}

.site-branding .logo:focus,
.site-branding .logo:hover {
    text-decoration: none;
}

/*
 * 首屏
 */

.site-header {
    width: 100%;
    height: 116%;
    min-height: 116vh;
    position: relative;
    text-align: center;
    background: url('../images/en_img06.jpg') no-repeat center center/cover;
    display: table;
}

.site-header::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.site-header .intro {
    position: relative;
    z-index: 1;
    display: table-cell;
    /*table-cell*/
    text-align: center;
    vertical-align: middle;
    overflow: hidden;
}

.pos {
    position: absolute;
}

.site-header .intro .img1 {
    display: block;
    overflow: hidden;
    margin: 0 auto;
    width: 818px;
    height: 83px;
}

.site-header .intro .img1 img {
    display: block;
}

.site-header .intro .img2 {
    display: block;
    overflow: hidden;
    margin: 40px auto 60px;
    width: 196px;
    height: 7px;
}

.site-header .intro .img2 img {
    display: block;
}

.site-header .intro .btn-reg {
    margin-right: 20px;
}

.site-header .intro .btn-login {}

.about-head {
    margin: 10px auto 60px;
}

#about .about-head {
    margin: 10px auto 20px;
}

#bootstrap-touch-slider3 {
    margin: 125px auto 0;
}

.about-head h2 {
    font-size: 36px;
    color: #1d509b;
    font-weight: normal;
}

.about-head span {
    display: inline-block;
    background: url("../images/img05.png") no-repeat center center;
    width: 196px;
    height: 7px;
}

.about-tab {
    overflow: hidden;
    margin-bottom: 90px;
}

.about-tab span,
.about-tab a {
    display: inline-block;
    font-size: 18px;
    color: #6a6a6a;
    text-decoration: none;
}

.about-tab a:hover,
.about-tab a.active {
    color: #e74c3c;
}

.tab-main {
    overflow: hidden;
    background: #ffffff;
    padding: 0;
    margin: 0;
}

.tab-main .imgbox {
    display: block;
    overflow: hidden;
}

.tab-main .imgbox img {
    display: block;
    width: 100%;
    margin: 10px auto 10px;
}

.about-h {
    overflow: hidden;
    margin: 0 auto 20px;
    color: #000;
    height: 40px;
    position: relative;
    padding-left: 20px;
}

.about-h span.before-line {
    height: 25px;
    width: 4px;
    background: #1d509b;
    position: absolute;
    left: 0;
    top: 12px;
}

.about-h h3 {
    font-size: 26px;
    margin: 0;
    padding: 0;
    font-weight: normal;
}

.about-h .subtitle {
    font-size: 25px;
    line-height: 48px;
    color: #000;
    font-weight: 500;
}

.about-txt {
    padding-left: 40px;
}

.about-txt p {
    font-size: 15px;
    line-height: 28px;
    color: #86878b;
    margin: 0;
    padding: 0;
}

.tab-main-value {
    padding: 0;
    margin: 0;
    overflow: hidden;
    background: #ffffff;
}

.bs-slider {
    background: none;
}

.tab-main-value .about-h h3 {
    line-height: 60px;
}

.tab-main-value .about-txt p {
    text-indent: 0;
}

.tab-main-value .imgbox img {
    display: block;
    width: 100%;
    margin: 60px auto 10px;
}

.about-txt-value>.row {
    margin-bottom: 10px;
}

.about-head-value-m {
    display: none;
}

.site-branding .logo img.logo-color-m {
    display: none;
}

/*about end*/

/*服务范围*/

.servicelist img {
    display: block;
    width: 71px;
    height: 70px;
    margin: 25px auto;
}

.servicelist .hover-img {
    display: none;
    /*transition: all 2s;
    -webkit-transition: all 2s; !* Safari *!*/
}

.servicelist h4 {
    margin: 0 auto 20px;
    color: #004f9f;
    font-weight: normal;
    font-size: 18px;
}

.servicelist span {
    display: block;
    width: 40px;
    height: 1px;
    background: #6a6a6a;
    margin: 0 auto 18px;
}

.servicelist p {
    width: 96%;
    font-size: 14px;
    color: #fff;
    background: #004f9f;
    height: 54px;
    padding: 0;
    margin: 0 auto;
    line-height: 54px;
}

.servicelist p.no-line-height {
    line-height: 24px;
    padding-top: 2px;
    -moz-transition: all 0.6s;
    -ms-transition: all 0.6s;
    -o-moz-transition: all 0.6s;
    -webkit-moz-transition: all 0.6s;
    transition: all 0.6s;
}

.service-item:hover h4 {
    color: #e74c3c;
}

.service-item:hover p {
    background: #e74c3c;
}

.service-item {
    width: 20%;
}

.service-item-img {
    width: 132px;
    height: 132px;
    margin: 20px auto;
    -moz-transition: background-position 0.2s;
    -ms-transition: background-position 0.2s;
    -o-moz-transition: background-position 0.2s;
    -webkit-moz-transition: background-position 0.2s;
    transition: background-position 0.2s;
}

.service-item-img1 {
    background: url("../images/s_tab1.png") no-repeat 0 0;
    background-position: 0 0;
}

.service-item-img2 {
    background: url("../images/s_tab2.png") no-repeat 0 0;
    background-position: 0 0;
}

.service-item-img3 {
    background: url("../images/s_tab3.png") no-repeat 0 0;
    background-position: 0 0;
}

.service-item-img4 {
    background: url("../images/s_tab4.png") no-repeat 0 0;
    background-position: 0 0;
}

.service-item-img5 {
    background: url("../images/s_tab5.png") no-repeat 0 0;
    background-position: 0 0;
}

.service-item:hover .service-item-img {
    background-position: 0 -134px;
}

@-webkit-keyframes rotates {
    0% {
        transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        /* IE 9 */
        -webkit-transform: rotate(30deg);
        /* Safari and Chrome */
    }
    50% {
        transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        /* IE 9 */
        -webkit-transform: rotate(60deg);
        /* Safari and Chrome */
    }
    100% {
        transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        /* IE 9 */
        -webkit-transform: rotate(90deg);
        /* Safari and Chrome */
    }
}

@keyframes rotates {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

/*服务图片轮播*/

.service-img-tip {
    display: block;
    width: 409px;
    height: 30px;
    margin: 3% auto 0;
}

/*服务范围 end*/

/*服务优势*/

#service-area {
    padding-bottom: 0;
}

.slidebox {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 800px;
    background: #f4f5f9;
    position: relative;
    z-index: 1;
}

.div_txtcon {
    width: 640px;
    height: 582px;
    overflow: hidden;
    background: #fff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.div_txtcon img {
    display: block;
    width: 127px;
    height: 127px;
    margin: 100px auto 40px;
}

.div_txtcon h4 {
    font-size: 24px;
    font-weight: normal;
    color: #000;
    text-align: center;
    margin: 0 auto;
}

.div_txtcon span.line {
    display: block;
    width: 44px;
    height: 1px;
    margin: 36px auto;
    background: #888;
}

.div_txtcon {
    overflow: hidden;
}

.div_txtcon li {
    width: 50%;
    overflow: hidden;
    float: left;
    color: #333;
    font-size: 16px;
    line-height: 32px;
    font-weight: bold;
}

.div_txtcon li i {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #999999;
    margin-right: 10px;
    border-radius: 12px;
}

.div_txtcon2 li {
    width: 100%;
    overflow: hidden;
    float: left;
    color: #000;
    font-size: 16px;
    line-height: 32px;
    text-indent: 120px;
    font-weight: bold;
}

.indicators-line>.carousel-indicators {
    bottom: 14%;
    right: 47%;
}

.indicators-line>.carousel-indicators li {
    border: 1px #1d509b solid;
    background: #ffffff;
}

.indicators-line>.carousel-indicators .active {
    background: #1d509b;
}

.indicators-line>.carousel-indicators .active:before {
    background: #1d509b;
}

.slidebox .img7 {
    display: block;
    width: 530px;
    height: 654px;
    position: absolute;
    top: 0;
    right: 30px;
    z-index: 3;
}

.slidebox .img8 {
    display: block;
    width: 530px;
    height: 654px;
    position: absolute;
    top: 0;
    left: 30px;
    z-index: 3;
}

.div_txtcon1 {
    position: absolute;
    top: 36px;
    left: 30px;
    z-index: 4;
}

.div_txtcon1 ul {
    display: block;
    overflow: hidden;
    width: 72%;
    margin: 0 auto;
    padding: 0;
}

.div_txtcon2 {
    position: absolute;
    top: 36px;
    right: 30px;
    z-index: 4;
}

/*服务优势 end*/

/*品牌理念*/

#brand {
    padding-bottom: 0;
    overflow: hidden;
}

.pp-pic {
    overflow: hidden;
    width: 100%;
    margin: 10px auto;
    padding: 0;
}

.pp-pic li {
    float: left;
    overflow: hidden;
    width: 25%;
    margin: 0;
    padding: 0;
    position: relative;
    color: #fff;
    font-weight: normal;
}

.pp-pic li.li-text1 {
    background: #dd493a;
}

.pp-pic li.li-text2 {
    background: #1d509b;
    -webkit-transition: all 0.6s;
    transition: all 0.6s;
}

.pp-pic li.li-text2:hover {
    background: #dd493a;
}

.pos-txt {
    width: 80%;
    height: 90%;
    overflow: hidden;
    position: absolute;
    left: 10%;
    top: 5%;
}

.pos-txt h2 {
    font-weight: normal;
    font-size: 24px;
    margin: 20px auto;
}

.pos-txt span {
    display: block;
    width: 44px;
    height: 4px;
    background: #fff;
    margin-bottom: 20px;
}

.pos-txt p {
    width: 90%;
    overflow: hidden;
    font-size: 15px;
    line-height: 28px;
    margin: 0;
    padding: 0;
}

/*合作公司*/

#cooperation {
    width: 100%;
    height: auto;
    /*background: #f4f5f9 url("../images/hz_01.png") no-repeat center bottom;*/
    overflow: hidden;
}

.hzicon {
    overflow: hidden;
    margin-bottom: 160px;
}

.hzicon img {
    display: inline-block;
    transition: all 0.6s;
    -webkit-transition: all 0.6s;
    /* Safari */
    margin: 10px auto;
}

.hzicon img:hover {
    -ms-transform: scale(1.1);
    /* IE 9 */
    -webkit-transform: scale(1.1);
    /* Safari */
    transform: scale(1.1);
    /* 标准语法 */
}

/* 图片滚动 */

.picScroll {
    display: block;
    width: 100%;
    position: relative;
    height: 156px;
    padding-left: 50px;
    margin: 0 auto;
}

.finally-txt {
    overflow: hidden;
}

.finally-txt p {
    text-align: center;
    font-size: 26px;
    color: #6a6a6a;
    margin: 58px auto 20px;
}

/*箭头*/

.arrows {
    overflow: hidden;
    display: block;
    height: 56px;
    margin: 16px auto 60px;
}

.arrows a {
    padding-top: 80px;
}

.arrows a span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 14px;
    height: 14px;
    margin-left: -7px;
    border-left: 1px solid #6a6a6a;
    border-bottom: 1px solid #6a6a6a;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: arrows 2s infinite;
    animation: arrows 2s infinite;
    opacity: 0;
    box-sizing: border-box;
}

.arrows a span:nth-of-type(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
}

.arrows a span:nth-of-type(2) {
    top: 16px;
    -webkit-animation-delay: .15s;
    animation-delay: .15s;
}

.arrows a span:nth-of-type(3) {
    top: 32px;
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
}

@-webkit-keyframes arrows {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes arrows {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.tempWrap {
    padding: 0 4px;
    overflow: hidden;
    /*width: 1064px!important;*/
}

.picScroll ul {
    height: 156px;
    overflow: hidden;
}

.picScroll ul li {
    float: left;
    width: 194px;
    height: 126px;
    overflow: hidden;
    /*border: 1px #555 solid;*/
    margin: 15px 20px 0 0;
}

.picScroll ul li img {
    display: block;
}

.picScroll .prev,
.picScroll .next {
    position: absolute;
    left: 10px;
    top: 60px;
    display: block;
    width: 38px;
    height: 40px;
    overflow: hidden;
    cursor: pointer;
    background: url("../images/btn.png") no-repeat -38px 0;
}

.picScroll .prev {
    left: -40px;
}

.picScroll .next {
    left: auto;
    right: -40px;
    background-position: -112px 0;
}

.picScroll .prevStop {
    background-position: -1px 0;
}

.picScroll .nextStop {
    background-position: -75px 0;
}

/* 图片滚动end */

/*footer*/

.footer {
    width: 100%;
    overflow: hidden;
    margin: -200px 0 0;
    padding: 0;
    color: #fff;
    font-size: 14px;
    position: relative;
    z-index: -1;
    min-height: 430px;
}

.footer ul {
    overflow: hidden;
    padding: 0;
    margin: 0;
}

.footer li {
    margin: 10px 0 0 0;
    padding: 0;
    overflow: hidden;
    display: table;
}

.footer h2 {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 20px;
}

.footer .footer-li {
    font-weight: normal;
    margin-left: 3px;
}

.footer span,
.footer i {
    font-weight: normal;
    font-size: 14px;
    display: table-cell;
}

.footer i {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-right: 8px;
    position: relative;
    top: 4px;
}

.footer i.icon-phone {
    background: url("../images/ico-phone.png") no-repeat center center;
    background-size: 15px 15px;
}

.footer i.icon-email {
    background: url("../images/ico-email.png") no-repeat center center;
    background-size: 16px 13px;
}

.footer i.icon-address {
    background: url("../images/ico-address.png") no-repeat center center;
    background-size: 15px 19px;
}

.ewm {
    display: block;
    margin: 30px auto 5px;
}

.gz {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 12px;
}

.footer-h {
    background: rgba(0, 0, 0, .65);
    padding: 20px 0;
    border-bottom: 1px #7d7d7d solid;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}

.link-a {
    overflow: hidden;
}

.link-a a {
    font-size: 12px;
    display: inline-block;
    margin-left: 35px;
    color: #fff;
    text-decoration: none;
}

.link-a a:hover {
    color: #e74c3c;
}

.copyright {
    overflow: hidden;
    margin: 20px auto 0;
    font-size: 12px;
    text-align: center;
}

.footer-b {
    padding-bottom: 20px;
}

/*footer end*/

/*右边固定栏*/

.right-fixbox {
    position: fixed;
    right: 26px;
    top: 50%;
    margin-top: -150px;
    z-index: 1040;
    background: #ffffff;
    padding: 10px 0 0 0;
    border-radius: 4px;
    border: 1px #bfbfbf solid;
}

.right-fixbox ul {
    margin: 0;
    padding: 0;
}

.right-fixbox li {
    position: relative;
    margin: 0;
    padding: 0;
    width: 60px;
    height: 60px;
    margin-bottom: 30px;
}

.right-fixbox li:last-child {
    padding: 0;
    margin: 0;
}

.right-fixbox li .iconx {
    display: block;
    -moz-transition: background-position 0.3s;
    -ms-transition: background-position 0.3s;
    -o-moz-transition: background-position 0.3s;
    -webkit-moz-transition: background-position 0.3s;
    transition: background-position 0.3s;
    margin: 10px auto;
}

.right-fixbox li .icon-phone {
    width: 25px;
    height: 25px;
    background: url("../images/right-phone.png") no-repeat 0 0;
    background-position: 0 0;
}

.right-fixbox li:hover .icon-phone {
    background-position: 0 -27px;
}

.right-fixbox li .icon-tel {
    width: 32px;
    height: 24px;
    background: url("../images/right-tel.png") no-repeat 0 0;
    background-position: 0 0;
}

.right-fixbox li:hover .icon-tel {
    background-position: 0 -25px;
}

.right-fixbox li .icon-emial {
    width: 28px;
    height: 28px;
    background: url("../images/right-email.png") no-repeat 0 0;
    background-position: 0 0;
}

.right-fixbox li:hover .icon-emial {
    background-position: 0 -30px;
}

.right-fixbox li .icon-ewm {
    width: 30px;
    height: 30px;
    background: url("../images/right-ewm.png") no-repeat 0 0;
    background-position: 0 0;
}

.right-fixbox li:hover .icon-ewm {
    background-position: 0 -32px;
}

.right-fixbox li .icon-top {
    width: 20px;
    height: 12px;
    background: url("../images/right-top.png") no-repeat 0 0;
    background-position: 0 0;
}

.right-fixbox li:hover .icon-top {
    background-position: 0 -14px;
}

.right-fixbox p {
    text-align: center;
    font-size: 10px;
    font-weight: 400;
    color: #505050;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    transition: all 0.4s;
}

.right-fixbox p.yw {
    color: #004f9f;
}

.right-fixbox li:hover p {
    color: #e74c3c;
}

.right-fixbox div {
    position: absolute;
    right: 60px;
    bottom: 11px;
    width: 226px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #e74c3c;
    opacity: 0;
    filter: alpha(opacity=0);
    transform-origin: 95% 95%;
    -moz-transform-origin: 95% 95%;
    -ms-transform-origin: 95% 95%;
    -o-transform-origin: 95% 95%;
    -webkit-transform-origin: 95% 95%;
    transform: scale(0.01);
    -moz-transform: scale(0.01);
    -ms-transform: scale(0.01);
    -o-transform: scale(0.01);
    -webkit-transform: scale(0.01);
    transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    -o-transition: all 0.4s;
    -webkit-transition: all 0.4s;
    border: 1px #bfbfbf solid;
    background: #fff;
    border-right: 0 none;
}

.right-fixbox div.ywbox {
    bottom: 0;
    top: -20px;
    height: 110px;
    border: 1px #f6f6f6 solid;
    overflow: hidden;
    right: 62px;
    border-top: 4px #e74c3c solid;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, .1);
}

.right-fixbox div.ywbox h2 {
    width: 90%;
    font-size: 16px;
    color: #141414;
    margin: 0 auto 20px;
    padding: 6px 0;
    line-height: 24px;
    text-align: center;
    border-bottom: 1px #535353 solid;
}

.right-fixbox div.ywbox span {
    margin: 0;
    padding: 0;
    display: inline-block;
    line-height: 18px;
}

.right-fixbox div.ywbox span.s1 {
    width: 76px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #ffffff;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: #e74c3c;
}

.right-fixbox div.ywbox span.s2 {
    display: inline-block;
    width: 126px;
}

.right-fixbox div.ywbox p {
    margin: 10px auto;
    padding: 0;
    line-height: 24px;
    font-size: 14px;
    color: #141414;
}

.right-fixbox div.ewmbox {
    height: 120px;
    width: 120px;
}

.right-fixbox div.ewmbox img {
    display: block;
    margin: 6px auto 0;
}

.right-fixbox div.ewmbox span {
    display: block;
    margin: 0;
    padding: 0;
    line-height: 18px;
    font-size: 12px;
}

.right-fixbox li:hover div {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
}

/*右边固定栏 end*/

.site-branding .logo img.logo-color-m {
    display: none;
    margin-top: 15px;
    width: 50%;
}

.container-m {
    display: none;
}

.m-footer {
    display: none;
}

.cooperation-bg {
    display: none;
}

/* eng */

.row .thumbnail {
    border-radius: 0;
    padding: 0;
    border: none;
}

.img-row-small [class^='col-'] {
    padding-left: 6px;
    padding-right: 6px;
}

.img-row-small .thumbnail {
    margin-bottom: 10px;
}

.row .thumbnail>img {
    width: 100%;
}

.product-footer-img {
    padding: 60px 0;
}

.product-footer-img>img {
    width: 100%;
}

#cooperation .thumbnail {
    overflow: hidden;
}

.footer-bg>img {
    width: 100%;
}

#cooperation {
    padding-bottom: 0 !important;
    z-index: 9999;
}

.advantage {
    position: relative;
}

.advantages-info {
    color: #999999;
    position: relative;
}

.advantages-body>.title>.subtitle {
    font-size: 25px;
    line-height: 48px;
    color: #333333;
    font-weight: 500;
}

.advantages-body {
    position: relative;
    margin-left: 25px;
}

.title-before {
    position: absolute;
    top: 0;
    left: -50px;
    font-size: 36px;
    font-weight: 500;
    color: #2a7abf;
}

.title-before>.line {
    height: 40px;
    width: 3px;
    background: #2a7abf;
    display: inline-block;
    position: relative;
    top: 8px;
}

.title-before .txt+.line,
.title-before .line+.txt {
    margin-left: 8px;
}

.advantages-info.left,
.advantages-img.left {
    padding-right: 40px;
}

.advantages-info.left .title-before {
    left: 0;
}

.advantages-info.left .advantages-body {
    margin-left: 15px;
}

.advantages-info.left .line {
    top: 0;
}

.advantages-ul {
    margin: 0;
    padding-left: 16px;
}

.advantages-ul li {
    list-style-type: disc;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 23px;
}

.advantages-img {
    position: relative;
}

.advantages-img img {
    width: 100%;
}

.site-header .font {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center 60%;
    position: absolute;
}

.navbar-custom .navbar-nav>li>a {
    color: #000;
}

@media (min-width: 1200px) {
    .advantage>.item:nth-child(2) {
        position: relative;
        top: -50px;
    }
    .advantage>.item:nth-child(2) .advantages-info {
        margin: 40px 0 0;
    }
    .advantage>.item:nth-child(3) {
        position: relative;
        top: -75px;
    }
    .advantage>.item:nth-child(3) .advantages-info {
        margin-top: 90px;
    }
    .advantage>.item:nth-child(3) .advantages-img .title-before {
        top: 80px;
    }
    .footer {
        margin: -260px 0 0;
    }
}

@media (min-width: 1600px) {
    .footer {
        margin-top: -380px;
    }
}

@media (max-width: 1199px) {
    .advantages-info {
        padding: 10px 0 20px;
    }
    .advantages-info .title-before {
        top: 5px !important;
    }
    .advantage .item {
        margin-bottom: 20px;
    }
    .advantages-body {
        margin-left: 0;
    }
    .site-header {
        min-height: 60vh;
    }
    .footer {
        margin: -160px 0 0;
    }
}

/*媒体查询*/

/* 手机 */

@media (max-width: 500px) {
    .footer>.footer-bg {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .footer-bg>img {
        width: auto;
        height: 100%;
    }
}

@media (max-width: 767px) {
    .lang-div {
        right: 70px !important;
    }
    .site-header .font {
        background-position: center;
    }
    .product-footer-img {
        padding: 30px 0;
    }
    .footer {
        margin: 0;
    }
    .footer h2 {
        margin: 10px 0 0;
    }
    .footer .footer-h {
        bottom: 60px;
        padding: 10px 0;
    }
    .m-footer {
        width: 100%;
        height: 60px;
        overflow: hidden;
        background: #004f9f;
        color: #ffffff;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1050;
        display: block;
        line-height: 60px;
    }
    .m-footer ul {
        overflow: hidden;
        padding: 0;
        margin: 0;
    }
    .m-footer ul li {
        float: left;
        width: 33.333%;
        overflow: hidden;
    }
    .m-footer ul li a {
        display: block;
        color: #ffffff;
        font-size: 12px;
        text-align: center;
        line-height: 60px;
    }
    .m-footer ul li a.m-a {
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    #cooperation {
        width: 100%;
        height: auto;
        background: #f4f5f9;
        overflow: hidden;
        padding: 0;
        margin: 0;
    }
    .cooperation-bg {
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .hzicon {
        padding: 0;
        margin: 0;
    }
    .footer-b {
        padding-bottom: 80px;
    }
    .about-txt {
        padding: 15px;
    }
    .right-fixbox {
        display: none;
    }
    .site-branding .logo img {
        display: block;
        width: 50%;
        margin-top: 15px;
    }
    .navbar-toggle {
        margin-top: 15px;
    }
    .navbar-custom {
        margin: 0;
        padding: 0;
        background: rgba(255, 255, 255, 0);
    }
    /*关于我们*/
    .about-tab {
        display: none;
    }
    .tab-main {
        margin: 0;
    }
    .tab-main .imgbox img {
        margin: 0;
    }
    .about-h h3 {
        font-size: 16px;
        margin-top: 14px;
    }
    .about-h .subtitle {
        font-size: 14px;
    }
    .about-txt p {
        font-size: 13px;
        line-height: 24px;
    }
    .about-h {
        margin-bottom: 10px;
    }
    .about-head h2 {
        font-size: 24px;
    }
    .about-head-value-m {
        display: block;
        margin-top: 50px;
    }
    .tab-main-value .about-h h3 {
        margin: 0;
        font-size: 22px;
    }
    /*header bar*/
    .site-branding .logo {
        margin: 0 auto !important;
    }
    .site-branding .logo img.logo-white {
        display: none !important;
    }
    .site-branding .logo img.logo-color {
        display: none !important;
    }
    .site-branding .logo img.logo-whiet-m {
        display: block;
        margin-top: 15px;
        width: 50%;
    }
    .site-branding .logo img.logo-color-m {
        display: none;
        margin-top: 15px;
        width: 50%;
    }
    .navbar-toggle .icon-bar {
        background-color: #666;
    }
    #navbar-items {
        /* background-color: #fff;*/
        background-color: #434343;
    }
    #navbar-items.navm-bg1 {
        background-color: #fff;
    }
    #navbar-items.navm-bg2 {
        background-color: #434343;
    }
    .tab-main-value-m {
        display: block;
    }
    /*服务范围*/
    .service-item {
        width: auto;
    }
    .servuce-pic {
        width: 100%;
        margin: 10px auto;
        overflow: hidden;
    }
    .servuce-pic img {
        display: block;
        width: 100%;
    }
    .site-header .intro {
        display: block;
        position: relative;
        padding-top: 24%;
        overflow: hidden;
    }
    .site-header .intro .img1 {
        height: auto;
    }
    .site-header .intro .img1 img {
        display: block;
        width: 40%;
        margin: 0 auto;
        padding: 0;
        margin-left: 3%;
        margin-top: 10%;
    }
    .site-header .intro .btn-reg {
        margin: 10px auto;
    }
    .section {
        padding: 30px 0 10px;
    }
    .service-img-tip {
        display: block;
        width: 80%;
        height: auto;
        margin: 0 auto;
    }
    /*服务优势*/
    .container-pc {
        display: none;
    }
    .container-m {
        display: block;
    }
    .slidebox {
        display: block;
        overflow: hidden;
        width: 100%;
        height: auto;
        background: #f4f5f9;
        position: relative;
        z-index: 1;
        margin-bottom: 20px;
    }
    .div_txtcon {
        width: 98%;
        height: auto;
        overflow: hidden;
        background: #fff;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        padding: 0 15px;
    }
    .div_txtcon img {
        display: block;
        margin: 20px auto;
    }
    .div_txtcon li {
        width: 100%;
        overflow: hidden;
        float: left;
        color: #999;
        font-size: 14px;
        line-height: 24px;
        font-weight: normal;
    }
    .pos-txt {
        width: 80%;
        height: 80%;
        overflow: hidden;
        position: absolute;
        left: 10%;
        top: 10%;
        text-align: left;
    }
    .pos-txt h2 {
        font-weight: normal;
        font-size: 13px;
        margin: 0 auto;
        margin-top: 24%;
    }
    .about-head {
        margin-bottom: 10px;
    }
    .service-item-img {
        margin-top: 40px;
    }
    .pos-txt span,
    .pos-txt p {
        display: none;
    }
    .container-m-hz img {
        display: block;
        margin: 10px auto;
        width: 50%;
    }
    #bootstrap-touch-slider3 {
        margin: 44px auto 0;
    }
}

/* 小屏幕（平板，大于等于 768px） */

@media (min-width: 768px) {
    .section {
        padding: 60px 0 10px;
    }
}

/* 中等屏幕（桌面显示器，大于等于 992px） */

@media (min-width: 992px) {
    .navbar-custom {
        background-color: transparent;
        padding-top: 30px;
    }
    .site-branding {
        margin-top: 6px;
        margin-left: 0;
    }
    .pos-txt p {
        width: 90%;
        overflow: hidden;
        font-size: 12px;
        line-height: 20px;
        margin: 0;
        padding: 0;
    }
}

/* 大屏幕（大桌面显示器，大于等于 1200px） */

@media (min-width: 1200px) {
    .pos-txt p {
        width: 90%;
        overflow: hidden;
        font-size: 15px;
        line-height: 28px;
        margin: 0;
        padding: 0;
    }
}

.lang-div {
    position: absolute;
    right: 40px;
    top: 20px;
    color: #fff;
    font-weight: 500;
}

.lang-div>a {
    display: inline-block;
    padding: 4px 30px 4px 40px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    color: #f84d4a;
}

.lang-div .dot {
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #f84d4a;
    position: absolute;
    left: 8px;
    top: 5px;
}

.lang-div * {
    color: #fff;
    font-size: 15px;
}

.lang-div a:visited {
    color: #f84d4a;
}

.lang-div a:hover,
.lang-div a:active,
.lang-div a:focus,
.lang-div a.active {
    text-decoration: none;
    cursor: pointer;
}
