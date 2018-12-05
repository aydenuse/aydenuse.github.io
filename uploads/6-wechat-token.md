---
title: 微信公众号基本配置 TOKEN 验证失败
comments: true
date: 2018-12-05 15:20:30
categories:
- 错误笔记
tags:
- wechat
- 公众号
---


## 错误背景

* 微信公众号开发基本配置时，以下情况确认无误
    * URL 确认无误，外网可以访问到
    * 内网穿透端口为 80 （我采用的是本地内网穿透[natapp](https://natapp.cn/)）
    * URL 实名认证
    * TOKEN 前后填写一致


## 错误解决

* 最后在echo $echoStr前面加一句ob_clean();，代码如下：

```javascript
public function valid()
    {
        $echoStr = $_GET["echostr"];
        if($this->checkSignature()){
            header('content-type:text');
            ob_clean();
            echo $echoStr;
            exit;
        }
    }
```


## 错误总结

因为我用的是 thinkphp 框架，在`echo $echoStr`之前可能有一些你不知道的输出到"输出缓冲区"，需要用清理服务器端信息的缓存
