---
title: Vue , axios 自定义请求头无法操作，解决:（Access-Control-Expose-Headers）
date: 2018-11-21 11:19:33
comments: true
categories:
- 爬坑总结
tags:
- Vue
- axios
- token
- 跨域
- 拦截器
---

本文为原创文章，如需转载，请注明出处。
##  问题背景：
想做注册登录 ` TOKEN ` 验证，查了一些资料，主流的验证机制 : 用户在首次登录成功时从后端获取一个 ` token `，然后在访问 ==登陆之后才有权限== 访问的组件中，每次调用后端的 API 时，请求头中必须携带这个 ` token ` 作为验证。
##  涉及知识点：
* 前端：
	* 跨域配置
	* vue axios 请求拦截器 `this.$axios.interceptors.request `
	* vue axios 响应拦截器 `this.$axios.interceptors.response `
* 后端：
	* 跨域配置
	* 响应头配置：`Access-Control-Expose-Headers: <header-name>, <header-name>, ...`
## 问题描述：

#### 后端代码如下：
前端访问后端的 API 时，后端设置响应头
(因为这里只做测试，所以代码比较简洁)：
```javascript
class Test extends Controller
{
    public function index()
    {
        header('token:123123');
        return "响应头设置成功";
    }
}
```
####   前端请求如下：
请求拦截：先查找 `localStorage` 是否有 ` token `字段，有则添加到请求头 
响应拦截：获取响应头中的 `token` 字段，并存储到`localStorage` 
代码如下：
test 组件（test.vue）
```javascript
methods: {
      sendAjax: function () {
        // 配置拦截器，中间件思想。白话：use 给请求之前做的事，可以是多件，可以 use 多次
        this.$axios.interceptors.request.use((config) => {
          console.log('请求拦截器：')
          console.log(config)
          // 设置请求头，在这里插入代码片，类似 set-cookie
          var token = localStorage.getItem('token');
          if(token){
            // config.headers = {} 这样设置，是覆盖
            config.headers['token'] = token; // 这样设置，是添加 
           }
           return config
        });
        // 响应拦截器
        this.$axios.interceptors.response.use((res) => {
          console.log('响应拦截器：')
          console.log(res)
          // 获取服务器的响应头
          if(res.headers.token){
            var token = res.headers.token;
            console.log(token)
            localStorage.setItem('token',token)
          }
          return res
        });
      
 // url 根据自己后端的来，这里是我自己通过内网穿透的后端接口，发生跨域
 this.$axios.post(Vue , axios 自定义请求头无法操作).then(
          res => {
            console.log('有响应');
            console.log(res);
          }
        )
      }
```
请求之后：
![在这里插入图片描述](1-vue-header/setHeaderSuccess.png)
是不是以为搞定了？接下来是见证奇迹的时刻 ~
![在这里插入图片描述](1-vue-header/whereToken.png)
接下来是我反反复复的各种验证，无效！虽然在报文体中可以取到 `token` 不影响业务逻辑完成功能。
以下也可以用：
```javascript
if(res.data.token){
            var token = res.data.token;
            console.log(token)
            localStorage.setItem('token',token)
          }
  ```
但是，真的很想知道为什么：Network 有显示 ，说明请求头设置成功，但是为什么拿不到？最重要的是！它也不给我报错！！！！
看了很多技术博客，找到一个与`Access-Control-Allow-Headers`很像的属性：于是设置成这样：
```javascript
header('Access-Control-Expose-Headers: token');  // 坑！服务器 headers 白名单，可以让客户端进行访问操作的属性
```
#### MDN 给的解释是这样的：
**响应首部 Access-Control-Expose-Headers 列出了哪些首部可以作为响应的一部分暴露给外部**
我理解的意思就是可以供外部去操作，
参考 MDN 的解释-> [Access-Control-Expose-Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
![在这里插入图片描述](1-vue-header/six.png)
除此之外，还需要在后端设置
####   后端设置如下：

```javascript
header('Access-Control-Expose-Headers: token');  // 坑！服务器 headers 白名单，可以让客户端进行访问
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie, token');
```
#### 上成功图示：
![在这里插入图片描述](1-vue-header/success.png)
### 总结：

```javascript
header('Access-Control-Allow-Headers: token');
header('Access-Control-Expose-Headers: token')
```

对比两个 header 字段：我比较浅显的做了下区别就是：
一个是：**允许请求头中携带，另一个是：允许访问携带的该属性。**
就像客人来了家里做客，
一个是：**我允许你来我家，一个是：我允许你来我家里吃饭、睡觉 ...** 
（如有理解偏差请指正）


本文有参考阮大哥的 [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)