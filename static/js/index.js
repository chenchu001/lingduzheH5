/* 
* @Author: Marte
* @Date:   2017-03-10 15:22:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-23 12:35:41
*/


$(document).ready(function(){
    
    //第二页的js效果
    (function(){
        setTimeout(function(){
            $(".loadingPage").addClass("fadeOut  animated").addClass("none");
            $('.page3').addClass('fadeIn animated').removeClass('none');
        },3000);
        chuanghuatext();
        $('.p3button').click(function(){
			stopSound('audio-bg',true);
             $(".page3").addClass("fadeOut  animated").addClass("none");
            $('.page4').addClass('fadeIn animated').removeClass('none');
			playSound('audio-cbg',true) ;
            // setTimeout(function(){
            //     $('.redIco3').show(400);
            // },5000);
        })
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

        $('.page6IcoShou').click(function(){
            $(".wrapper").addClass("fadeOut  animated").addClass("none");
            $('.indexPage').addClass('fadeIn animated').removeClass('none');
        })
    })();
    //第四页的js效果
    (function(){
        $(".page4").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(".page4").addClass("fadeOut  animated").addClass("none");
                    $('.page5').addClass('fadeIn animated').removeClass('none');
                    $('body').css({'background':'#fff'});
                }
            }
        })


    })();
   
    //小浮窗出现的时间
    // setTimeout(function(){
    //     $('.redIco').fadeIn(500);
    // },5000);
    // 音乐部分的js
    (function(){
        //控制音乐暂停播放
        var i=0;
        var misk=document.getElementById('misk');
        //audio.play();
        misk.onclick=function(){
            i++;
            //判断点击是单数还是复数
            if(i%2==0){
                // audio.play();
                $('#misk img').attr('src','static/images/music.png')
                $('#misk img').css('animation','music 2s linear infinite running');
				playAllSound();
            }
            else{
                // audio.pause();
                $('#misk img').css('animation','music 2s linear infinite paused');
                $('#misk img').attr('src','static/images/musicStop.png');
				stopAllSound() ;//背景音乐停止
            }
        }
    })();
});