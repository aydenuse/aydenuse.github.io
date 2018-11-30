---
title: 会话控制（PHP）
date: 2018-11-11 14:42:56
comments: true
categories:
- 笔记
tags:
- PHP
- 会话控制
---

### http
* 超文本传输协议，网络协议
* 请求和响应模式，用户请求，服务器响应
* 最大的特点：无连接，无状态

### cookie
* 网景公司 93 年发明的一种技术，用来保持客户端和服务端保持连接状态
* 保存在客户端中，主要分为 内存cookie （保存在内存中，浏览器关闭就消失）和 硬盘cookie （保存在硬盘中，有一个过期时间，除非手动清除或者到了过期时间，否则长期存在） 
* php 设置 cookie： 
    * setcookie(name,value,expire),
    * setrawcookie()

### session
* 会话就是服务器与浏览器认识的这段时间
* 保存在服务端

