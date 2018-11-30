---
title: 5-vue-router
date: 2018-11-30 14:09:33
tags:
- Vue
---


### this.$router：
表示全局路由器对象，项目中通过router路由参数注入路由之后，在任何一个页面都可以通过此方法获取到路由器对象，并调用其push(), go()等方法；


### this.$route:
表示当前正在用于跳转的路由器对象，可以调用其name、path、query、params等方法；