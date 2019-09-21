# 技术面试（Technical Interview）

在国内，某些大厂的技术面被戏称为「面试造火箭，入职拧螺丝」。  
面试前都要充分准备（刷题），尤其是很多日常几乎碰不到的问题。  
例如对前端开发来说，老生常谈的有浏览器渲染过程，JS 原型链等。

然而在以应用性为主的澳洲，技术面试几乎不涉及底层原理与实现。  
一般是基于 coding exercise 开展，之后可能还会问一些小问题。  
但对于基础扎实的华人来说，相信这些小问题都是小菜一碟。

当然也有例外：

* 纯算法类  
  建议提前刷 HackerRank / LeetCode 练手。
* 出其不意  
  例如，知名独角兽 Canva 可能会让你实现 Virtual DOM。
* 校园招聘（Graduate Program）  
  部分竞争激烈的校招，难度往往会很高，考察得也很细。
* ...（TODO：请同行们继续补充）

## 理解敏捷开发（Agile）

> 有关 Agile 的概念，不妨参考 [敏捷开发入门教程](https://www.ruanyifeng.com/blog/2019/03/agile-development.html)。

国内大厂讲求实用性，快准狠，很少听到偏理论化的指导思想。  
在澳洲的大厂，通常都会采用「敏捷开发」来指导开发流程。  
不过，这个「采用」可以是有程度的，并不一定要完全履行。

**Agile 通过快速迭代、持续交付，以确保所开发的都是有价值的需求**：

1. 采用较短的开发周期，小步快跑
2. 及早交付给用户，争取得到及早反馈
3. 根据用户反馈，及时调整，灵活把握方向

作为普通开发，只需要了解就够了，毕竟不是专业的 Agile Master。  
但对于没有在 Agile 环境工作过的同学来说，建议还是多做点功课。

### Scrum

> 有关 Scrum 的概念，不妨参考 [敏捷开发之Scrum扫盲篇](https://www.cnblogs.com/taven/archive/2010/10/17/1853386.html)。

Agile 只是理论层面的方法论，要落实还得有一套执行模式。  
例如，比较常见的是 Scrum + Kanban，这也是很多大厂的套路。  
概念性的东西太多了，下面来点实在的，以我所在的团队为例进行说明。

目前我们一个 Sprint 的周期为两周。  
开始前有 Planning meeting，结束时有 Review & Retrospective meeting。  
每天早上都有 15 min 的 Stand up meeting，供每人汇报任务进度及今日计划等。  
所有的这些都基于 Atlassian Jira 项目管理平台，该提供看板（Kanban）便于进度管理。

我作为开发，基本上就是等 boss 在 Jira 给我指派 ticket（类似于 Github 的 issue）。  
如果即将做或已经开始做了，那么我就会在 Stand up meeting 时就告诉 boss，  
他就会当场把我要做的 ticket 从 `TODO` 列拖到 `IN PROGRESS` 列。

实现时一般都要开新的分支，做完后提 pull request，让组内同事进行 code review。  
此时 ticket 就应该从 `IN PROGRESS` 列拖到 `REVIEW/TEST` 列。  
成功合并回 master 后，那就是拖到 `DONE`，结束。

对于我来说，我只是该流水线上的一个工人。  
我可以非常专注于我的工作，而不用管很多撕逼扯皮的事情。  
Boss 每天都忙着开会以及对接外部，以
我的 boss 负责对接他的 boss 以及其他 team，以保证产品开发符合领导层意志。  
但由于 bo
而他有一个助理

## 结对编程（Pair Programming）

> 结对编程属于敏捷开发的范畴。

在国内，这可能只是一个梗。  
但在澳洲，如果想进崇尚敏捷开发的公司，这是面试的必经环节。

## 温馨提示

固执的面试官
唯 React Redux 的面试官
