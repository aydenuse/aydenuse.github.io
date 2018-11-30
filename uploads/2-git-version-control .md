---
title: Git 版本控制
date: 2018-11-11 14:42:56
comments: true
categories:
- 笔记
tags:
- Git

---
### 初始化
1. git init 用来初始化本地 Git 仓库，可进行一系列 git 操作 
2. git init --bare 用来初始化远程 Git 裸仓库，用来记录提交的修改信息 ，不可进行一系列 git 操作

### 工作流-暂存区回滚

1. git add . 提交到暂存区
2. git reset HEAD text.name  清空暂存区的修改
3. git checkout -- text.name 工作区回滚到修改之前

### 工作流-提交回滚
1. git log 查看提交日志的 commit 号
2. git reset --hard text.commit 回滚到 commit 号对应的版本
3. git rm text.name 清空本地文件
4. git commit -m 清空仓库

### 工作流-仓库文件替换工作区和暂存区(危险操作)
1. git checkout HEAD text.commit

### 工作流-正常提交
1. git add . 提交到暂存区
2. git status 查看修改状态
3. git commit -m '备注' 将暂存区的修改提交到本地仓库的操作
4. git push origin master 提交到远程仓库

### ssh key
1. ssh-keygen -t rsa -P '' 本地生成 rsa 公钥
2. 公钥复制到 github ssh setting
3. ssh -T git@github.com 判断是否为通

### 添加远程仓库
1. git remote add origin git@github.com:xxxxxxxx.git
2. git push -u origin master (-u) 默认本地 master 和远程本地 master 关联
3. git remote remove origin 取消远程关联

### 克隆仓库
1. 远程代码拷贝到本地
2. git clone ig:reps/docs_couple_training.git

### 标签管理
1. git tag 查看所有标签
2. git tag name 创建标签
3. git tag -a name -m 'comment' 指定提交信息
4. git tag -d name 删除标签
5. git push origin name 标签发布

### 分支管理
1. git branch 查看分支
2. git branch ayden 创建 ayden 分支
3. git checkout 切换分支
4. git merge ayden 将 ayden 分支的修改合并到 master
5. git branch -d ayden 删除 ayden 分支

### 总结
* 工作流：
    * 工作区->暂存区->版本库->远程仓库
* 初始化：
    * git init -> git add -> git commit 
* 远程仓库：
    * git remote add -> git pull -> git push -> git clone
* 分支管理：
    * git branch -> git checkout -> git merge
* 标签管理：
    * git tag -> git push

