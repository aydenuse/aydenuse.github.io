---
title: git clone 错误记录
date: 2018-11-30 10:19:09
categories:
- 爬坑总结
tags:
- Git
---


## 错误背景


Git 工作流，克隆远程仓库代码失败。


## 错误描述

* 输入：git clone ssh:XXXXXXX.git
* >**error：warning: remote HEAD refers to nonexistent ref, unable to checkout.**

google 此错误，按照答案去远程服务器一顿操作：

2. git branch

    >xxx

3. git checkout xxx

* >**error：This operation must be run in a work tree**


## 错误解决


* git clone -b xxx ssh:/XXXXXXXX.git


## 错误总结


* git init --bare 初始化的是裸仓库，一般作为远程仓库，保存的是修改

* git init 初始化的是完整的仓库，一般做本地仓库使用，保存的是整个项目资源

* 裸仓库不支持任何 git 操作，这也是第二个错误的原因，因为不允许在裸仓库切换分支，所以解决的思路就是**直接克隆指定的分支。**