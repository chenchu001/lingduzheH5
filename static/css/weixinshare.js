wx.config({
   debug: false,
   appId: jsapi.appId,
   timestamp:jsapi.timestamp,
   nonceStr: jsapi.nonceStr,
   signature: jsapi.signature,
   jsApiList: [
     // 所有要调用的 API 都要加到这个列表中
   'closeWindow',
   'onMenuShareTimeline',
   'onMenuShareAppMessage',
   'onMenuShareQQ',
   'onMenuShareWeibo'
   ]
 });
wx.ready(function () {
 // 在这里调用 API
 wx.onMenuShareTimeline({
   title: '厉害了我的武汉，原来你曾经那么牛!', // 分享标题 
   link: "http://www.weasing.com/xijuyuan/index.html", // 分享链接
   imgUrl: "http://www.weasing.com/xijuyuan/static/images/icon.jpg", // 分享图标
   success: function () { 
//		location.reload();
   },
   cancel: function () { 
       // 用户取消分享后执行的回调函数
   }
 });

 //获取“分享给朋友”按钮点击状态及自定义分享内容接口
 wx.onMenuShareAppMessage({
   title: '厉害了我的武汉，原来你曾经那么牛!', // 分享标题
   desc: '看过来，给你好看！',  // 分享描述
   link: "http://www.weasing.com/xijuyuan/index.html", // 分享链接
   imgUrl: "http://www.weasing.com/xijuyuan/static/images/icon.jpg",// 分享图标
   type: '', // 分享类型,music、video或link，不填默认为link
   dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
   success: function () { 
//		location.reload();
   },
   cancel: function () { 
     // 用户取消分享后执行的回调函数
   }
 });
playSound('audio-bg',true) ;
});