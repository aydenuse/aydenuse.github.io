// build time:Mon Nov 26 2018 11:19:53 GMT+0800 (China Standard Time)
window._bd_share_main.F.module("component/anticheat",function(t,e,a){var o=t("base/tangram").T,n,i,r=function(t,e){var a=o(e).offset(),n={left:t.pageX,top:t.pageY};return{left:Math.floor(n.left-a.left),top:Math.floor(n.top-a.top)}},f=function(t,e){typeof n=="undefined"&&(n=Math.floor(t.pageX),i=Math.floor(t.pageY));if(e){var a=r(t,e);o(e).data("over_x",a.left).data("over_y",a.top).data("over_time",+new Date)}},c=function(t,e){var a=r(t,e);o(e).data("click_x",a.left).data("click_y",a.top)},d=function(t,e,a){t=="mouseenter"?f(e,a):t=="mouseclick"&&c(e,a)},l=function(t){var e=o(t.__element),a=t.__buttonType,r=e.data("over_x")||0,f=e.data("over_y")||0,c=e.data("click_x"),d=e.data("click_y"),l=e.innerWidth(),_=e.innerHeight(),u=new Date-e.data("over_time"),p=document.body.offsetWidth,v=document.body.offsetHeight,h=window.screen.availWidth,m=window.screen.availHeight;return[n,i,a>0?1:0,r,f,c,d,l,_,a,u,p,v,h,m].join(".")};e.process=d,e.getSloc=l});
//rebuild by neat 