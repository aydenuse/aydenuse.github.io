// build time:Mon Nov 26 2018 10:31:10 GMT+0800 (China Standard Time)
window._bd_share_main.F.module("view/slide_view",function(i,n,e){var s=i("base/tangram").T,t=i("base/class").Class,a=i("conf/const"),o=i("view/view_base"),d={box:"bdshare-slide-button-box",btn:"bdshare-slide-button"};n.View=t.create(function(i){function n(){window._bd_share_main.F.use("slide_share.css",function(){var n=c.width()||24;c.css(i.bdPos=="right"?"left":"right",-n),r&&r.css({top:i.bdTop|0,width:0,"z-index":99999}).css(i.bdPos,0).show(),b.width(0).hide(),h.width(m),u.width(m)})}function e(){if(f)return;h.html()||window._bd_share_main.F.use("component/partners",function(i){partnerSort=i.partnerSort,partners=i.partners,a(partnerSort,partners)});var i={};window._bd_share_main.F.use("component/animate",function(i){b.show(),i.animate(r[0],{width:m},300,function(){f=!0},function(i){b.width(i*m)})})}function t(){if(!f)return;var i={};window._bd_share_main.F.use("component/animate",function(i){i.animate(r[0],{width:0},300,function(){f=!1,b.hide()},function(i){b.width((1-i)*m)})})}function a(n,e){var t=i.bdMiniList||n.slice(0,8*w),a=[];s.each(t,function(i,n){if(!/(iPhone | iPad | Android)/i.test(navigator.userAgent)||n!=="weixin")a[i]='<li><a href="#" onclick="return false;" class="slide-'+n+'" data-cmd="'+n+'">'+e[n].name+"</a></li>"}),h.html(a.join(""))}var o=this,r,c,l,b,h,u,f=!1;o._buttonType=1;var w=i.bdMini||2,m=w*110+6,i=s.extend({},i);o.render=function(){var e=d.btn,t=d.box+" bdshare-slide-style-"+(i.bdPos=="right"?"r":"l")+i.bdImg,a=['<div class="'+t+'" style="display:none;">','<a href="#" onclick="return false;" class="'+e+'"></a>','<div class="bdshare-slide-list-box">','<div class="bdshare-slide-top">分享到</div>','<div class="bdshare-slide-list">','<ul class="bdshare-slide-list-ul"></ul>',"</div>",'<div class="bdshare-slide-bottom">','<a href="#" onclick="return false;" class="slide-more"  data-cmd="more">更多...</a>',"</div>","</div>","</div>"].join("");r=s(a).appendTo("body"),c=r.find("."+d.btn),b=r.find(".bdshare-slide-list-box"),h=r.find(".bdshare-slide-list-ul"),l=r.find(".bdshare-slide-list"),u=r.find(".bdshare-slide-bottom"),n(),o._entities.push(r);if(s.browser.ie==6){r.css("position","absolute");var f=parseInt(r.css("top"));setInterval(function(){var n=(i.bdTop|0)+s(window).scrollTop();f!=n&&window._bd_share_main.F.use("component/animate",function(i){i.animate(r[0],{top:n},300)})},1e3)}},o._init=function(){var i=!1;c.on("mouseenter click",e),r.on("mouseleave click",t),s("body").click(function(i){r.contains(i.target)||t()})},o._distory=function(){r.remove()}},o.ViewBase)});
//rebuild by neat 