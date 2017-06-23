$(document).ready(function(){
    /*fastclick_iphone手机专用*/
    window.addEventListener('load', function() {
        FastClick.attach(document.body);
    }, false);
    $(function(){
        $(document).on("click",'.cityWrap li>img',function(){
            $(this).siblings('.msk').fadeIn(400);
            $('html').css({'height':'100%', 'overflow':'hidden'});
            $('body').css({'height':'100%', 'overflow-y':'hidden'});
            $('.page7').css({'max-height':'100%', 'overflow-y':'hidden'});
            $('.indexPage').css({'max-height':'100%', 'overflow-y':'hidden'});
        });
        $(document).on('click','.closeIco',function(){
            $(this).parents('.msk').fadeOut(400);
            $('html').css({'height':'100%', 'overflow':'auto'});
            $('body').css({'height':'100%', 'overflow-y':'auto'});
            $('.page7').css({'min-height':'100%', 'overflow-y':'auto'});
            $('.indexPage').css({'min-height':'100%', 'overflow-y':'auto'});
        })
        $('.checkBox').click(function(){
            $('.cityWrap').fadeIn(400);
        });
        $('.cityWrap ol li').click(function(){
            $(this).addClass('active').siblings().removeClass('active').parents('.cityWrap').fadeOut(400);
            $('.pageCheck p .spanNum').text($(this).text());
        });
        $('.returnBtn').click(function(){
            $(this).parents('.cityWrap').fadeOut(400);
        });
        getgrouplist();
    });    
});


function getgrouplist(){
    $.post("http://ldz.weasing.com/index.php?g=Wap&m=Weixin&a=getgrouplist2",{},function(data){
        var d=eval('('+data+')');
        if(d.errcode=="0000"){
            template.config("escape", false);
            var html = template('item_list', d);
            html=html+'<div class="fxiedIco"></div>';
            $(".indexPage").append(html);
        }else{
            //var l=0;
        }
        // $(window).scroll(function(){
        //     if($(this).scrollTop() >= $(document).height() - $(this).height()-100){
        //         $('.fxiedIco').fadeOut(400);
        //     }else{
        //         $('.fxiedIco').fadeIn(400);
        //     }
        // })
    })
}
