window.DMOD = '' ;
window.STATIC_URL = '' ;
window.PWidth = $(window).width() ;
window.PHeight = $(window).height() ;
window.fpst = 40 ;
window.hRate = (PHeight + 35) / 1136  ;
window.wRate = PWidth / 640  ;
window.PLodingImg = ["static/images/closeIco.png","static/images/fixedIco.png","static/images/ico0.png","static/images/ico1.jpg","static/images/ico2.jpg","static/images/ico3.jpg","static/images/ico4.jpg","static/images/ico6.jpg","static/images/ico7.jpg","static/images/indexIco.png","static/images/liaotianBg.jpg","static/images/mskBg.jpg","static/images/p2_01.png","static/images/p2_01wh.png","static/images/p2_02.png","static/images/p2_02xy.png","static/images/p2_03.png","static/images/p2_03yc.png","static/images/p2_04.png","static/images/p2_04hs.png","static/images/p2_05.png","static/images/p2_05sy.png","static/images/p2_06.png","static/images/p2_06jz.png","static/images/p2_07.png","static/images/p2_07jm.png","static/images/p2_08.png","static/images/p2_08ez.png","static/images/p2_09.png","static/images/p2_09xg.png","static/images/p2_10.png","static/images/p2_10hg.png","static/images/p2_11.png","static/images/p2_11xn.png","static/images/p2_12.png","static/images/p2_12sz.png","static/images/p2_13.png","static/images/p2_13es.png","static/images/p2_14.png","static/images/p2_14xt.png","static/images/p2_15.png","static/images/p2_15tm.png","static/images/P2MHY.png","static/images/page3Bg.jpg","static/images/page4Bg.png","static/images/page5Daloig.png","static/images/page6IcoShou.gif","static/images/programBg.png","static/images/vedioImg.png","static/images/zan.png","static/images/redIco.gif","static/images/loading.gif","static/images/yun2.png","static/images/music.png","static/images/p3text2.png"] ;
window.PLodingAudio = ["static/music/bg1.mp3","static/vedio/00011.mp4"] ;
window.selectLastIid = '0' ;
window.selectModeIid = '0' ;

$('body').on('touchmove touchstart', function (e) {
	e.preventDefault();
});



function dLoading(cb){
dLoading.imgsize = PLodingImg.length * 1+PLodingAudio.length*2;
window.doLoadImg = function(){
if(PLodingImg.length < 1&&PLodingAudio.length<1) return ;
if(PLodingImg.length >=1){
	var aImg = PLodingImg.shift() ;
	if(aImg.indexOf('http') != 0 && aImg.indexOf('/') != 0) aImg = STATIC_URL + aImg ;
	var aDom = $('<img>') ;
	aDom.bind('load',window.doLoadImg).bind('error',window.doLoadImg) ;
	aDom.attr('src',aImg) ;
}else if(PLodingImg.length <1&&PLodingAudio.length>=1){
	var aAudio = PLodingAudio.shift() ;
	if(aAudio.indexOf('http') != 0 && aAudio.indexOf('/') != 0) aAudio = STATIC_URL + aAudio ;
	var auDom = document.createElement("audio");;
	auDom.src=aAudio;
	auDom.preload="auto";
	window.doLoadImg();
} 
} ;
function footRotate(){
	if(!footRotate.r) footRotate.r = 0 ;
	if(!footRotate.speed) footRotate.speed = 1 ;

	footRotate.si = setInterval(function(){
		footRotate.r += footRotate.speed ;
		if(footRotate.r > 360) footRotate.r = 0 ;

		$('.loading_logo').css('transform','rotate('+footRotate.r+'deg)') ;
	},20) ;
} ;

function changeBSpeed(showasspeed){
	showasspeed = parseInt(showasspeed,10) ;
	footRotate.speed = showasspeed/10 ;
} ;

function showNumB(showasspeed){
showasspeed = parseInt(showasspeed,10) ;
if(showasspeed < 10) showasspeed = '00' + showasspeed ;
else if(showasspeed < 100) showasspeed = '0' + showasspeed ;

$('#i_loadingnum_b').html(showasspeed) ;
} ;

footRotate() ;

var minTime = 1000 ;
var perTime = 10 ;

var pi = 0 ;
var si = setInterval(function(){
var imgPi = (dLoading.imgsize-PLodingImg.length-PLodingAudio.length*2)/dLoading.imgsize * 100 ;
var tpi = 100/(minTime/perTime) + pi ;
if(imgPi < tpi) pi = imgPi ;
else pi = tpi ;

var pishow = parseInt(pi,10) +'%' ;
$('#i_loadingdd').css('width',pishow) ;
piB = 51/100 * pi ;

$('#i_loadingnum_b').html(pishow) ;
changeBSpeed(piB) ;


if(pi >= 100){
//pi = 0 ;
clearInterval(si) ;
if(footRotate.si){
setTimeout(function(){
clearInterval(footRotate.si) ;
},1000) ;
}

if(cb) cb() ;
return ;
}

},perTime) ;
window.doLoadImg() ;
} ;

function chuanghuatext(){
	setTimeout(function(){$("#nei").addClass("yijing");},2000);
	$("#x-auto-2").css("z-index",1);
	setTimeout(function(){
            $('.page5dialog').show();
            $('.page5dialog').click(function(){
                $(".page3").addClass("fadeOut  animated").addClass("none");
                $('.wrapper').addClass('fadeIn animated').removeClass('none');
                // 第六页js效果
                (function(){
                    //改变ul的translateY
                    var translateY=2.8;
                    console.log(translateY);
                    var i=0;
                    maxLen=$('.section ul li').length;
                    playSound('audio-weixin',false) ;
                    var wyxh;
                    function weiyi(){
                        if(i<maxLen-2){
                            i++;
                        }else{
                            i=maxLen-2;
                        }
                        $('.section ul').addClass('transform').css({'transform':'translateY(-' +i*translateY +'rem)','-webkit-transform':'translateY(-' +i*translateY + 'rem)'});
                        playSound('audio-weixin',false) ;
                    }
                    setTimeout(function(){
                        wyxh=setInterval(weiyi,1700);
                    }, 2800)
                    //21S之后小手出现
                    setTimeout(function(){
                        clearInterval(wyxh);
                       $('.page6IcoShou').show(500);
                       $('.page6IcoShou').click(function(){
                            $(".wrapper").addClass("fadeOut  animated").addClass("none");
                            $('.page7').addClass('fadeIn animated').removeClass('none');
                            setTimeout(function(){
                                $('.redIco4').show(400);
                            },5000);
                       })
                    },18000);
                })(); 
            });
        },28000);
				// $("#p3textdiv").fadeOut(1000);
				// $("#x-auto-3").fadeIn(1000);
	// if(!chuanghuatext.x)chuanghuatext.x=0.05;
	// chuanghuatext.si = setInterval(function(){
	// 	chuanghuatext.x +=0.05 ;
	// 	if(chuanghuatext.x >1) {
	// 		chuanghuatext.x = 1 ;
			
	// 		clearInterval(chuanghuatext.si);
	// 	}

	// 	$('#p3textdiv').css('transform','scale('+chuanghuatext.x+','+chuanghuatext.x+')') ;
	// },100) ;	
}

$(function(){
	$('.loading').show() ;
	dLoading(function(){
		$('.loading').fadeOut(1000,function(){

			$('.page1').fadeIn(1000,function(){
			//$('#icon_audio').fadeIn() ;
				playSound('audio-bg',true) ;
			}) ;

		});
	}) ;

	var tt = document.getElementById('nei'); 

	tt.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
			$("#nei").css({"transform":"translate3d(-50%, -50%, 0px) translate3d(0px, 0px,6160px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)","-webkit-transform":"translate3d(-50%, -50%, 0px) translate3d(0px, 0px,6160px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)"});
			$(".yijing div:eq(0)").css({"transform":"translate3d(-50%, -50%, 0px) translate3d(0px, 0px,-6900px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)","-webkit-transform":"translate3d(-50%, -50%, 0px) translate3d(0px, 0px,-6900px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)"});
			
			$(".yijing div:gt(0)").hide();
			$(".p3button").fadeIn(1000);
	
	}, false); 
}) ;

