window.DMOD = '' ;
window.STATIC_URL = '' ;
window.PWidth = $(window).width() ;
window.PHeight = $(window).height() ;
window.fpst = 40 ;
window.hRate = (PHeight + 35) / 1136  ;
window.wRate = PWidth / 640  ;
window.PLodingImg = ["static/images/bg1.jpg","static/images/logo1.png","static/images/pageOneIco1.png","static/images/pageOneIco2.png","static/images/pageOneIco3.png","static/images/pageOneIco4.png","static/images/pageOneIco5.png","static/images/pageOneMeiHua.png","static/images/pageOneIco6.png","static/images/pageOneIco7.png","static/images/pageOneIco8.png","static/images/pageOneIco9.png","static/images/pageOneIco10.gif","static/images/p3bg.png","static/images/yun2.png","static/images/p2_10czr2.png","static/images/p2_10.png","static/images/p2_09ymt.png","static/images/p2_09.png","static/images/p2_08frj.png","static/images/p2_08.png","static/images/p2_07fqx.png","static/images/p2_07.png","static/images/p2_06yxf.png","static/images/p2_06.png","static/images/p2_05cyq.png","static/images/p2_05.png","static/images/p2_04sxy.png","static/images/p2_04.png","static/images/p2_03xhs.png","static/images/p2_03.png","static/images/p2_02cbh.png","static/images/p2_02.png","static/images/p2_01mlf.png","static/images/p2_01.png","static/images/P2MHY.png","static/images/p3text1.png","static/images/p3text2.png","static/images/p3button.gif"] ;
window.PLodingAudio = ["static/music/bg1.mp3","static/music/zheshan.mp3","static/music/door.mp3"] ;
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
	if(!chuanghuatext.x)chuanghuatext.x=0.05;
	chuanghuatext.si = setInterval(function(){
		chuanghuatext.x +=0.05 ;
		if(chuanghuatext.x >1) {
			chuanghuatext.x = 1 ;
			setTimeout(function(){
				$("#p3textdiv").fadeOut(1000);
				$("#x-auto-3").fadeIn(1000);
				setTimeout(function(){
					$("#nei").addClass("yijing");
					setTimeout(function(){$("#x-auto-2").css("z-index",1);},1000);
				},1000)
			},2000);
			clearInterval(chuanghuatext.si);
		}

		$('#p3textdiv').css('transform','scale('+chuanghuatext.x+','+chuanghuatext.x+')') ;
	},100) ;	
}

$(function(){
	$('.loading').show() ;
	dLoading(function(){
		$('.loading').fadeOut(1000,function(){

			$('.page3').fadeIn(1000,function(){
			//$('#icon_audio').fadeIn() ;
			playSound('audio-bg',true) ;
			chuanghuatext();
		}) ;

	});
	}) ;
	playSound('audio-bg',true) ;
	
	

}) ;
var tt = document.querySelector('#nei'); 

tt.addEventListener("webkitAnimationEnd", function(){ //动画结束时事件 
console.log("动画结束");
		$("#nei").css({"transform":"translate3d(-50%, -50%, 0px) translate3d(0px, 0px,6160px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)","-webkit-transform":"translate3d(-50%, -50%, 0px) translate3d(0px, 0px,6160px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)"});
		$(".yijing div:eq(0)").css({"transform":"translate3d(-50%, -50%, 0px) translate3d(0px, 0px,-6900px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)","-webkit-transform":"translate3d(-50%, -50%, 0px) translate3d(0px, 0px,-6900px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)"});
		
		$(".yijing div:gt(0)").hide();
		$(".p3button").fadeIn(1000);

}, false); 
