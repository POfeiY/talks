---
layout: center
colorSchema: dark
transition: fade-out
mdc: true
title: The Set Theory
---

![](/unplugin.svg){.w-30.mt--10.mb-5}

<!--
各位同事晚上好，好久不见，很开心又在前端技术部落与大家见面，一起进行技术交流。
-->

---
layout: intro
---

##### INTRO!{.op50}

## Specific is Not a Bad Thing

<!--
技术领域的成学习旅途中（无论前端、后端、算法、硬件等），坚持是一件很需要毅力的事情，保有初心在技术领域一路走下去的同学会显得很“特殊”。但，这并不是一件坏事。
在目前“泛平台化”的大环境下，需要时不常地提醒我们是开发者，一群专业的开发者。

好！闲话聊完，我们进入正题：
-->

---
layout: intro
growSeed: 15
growOpacity: 0.3
class: pl-25
---

# Zili Yu

<div class="[&>*]:important-leading-10 opacity-80">

Core team member of Xzh<br>
Creator of xzh-jssdk | Invoker<br>
Maintainer of {CloudAlbum} {FormCreater} {Backlog}<br>
Working at {XzhLabs}<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://github.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4 />
  <div><a href="https://github.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY@webtoo.ls</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/18592121?v=4" rounded-full w-35 abs-tr mt-32 mr-30 />

<div flex="~ gap2">

</div>

<!--
各位同事晚上好，我是任职于技术服务中心兴智汇团队的一名开发，余自立。目前主要负责的项目有兴智汇底座JS-SDK、兴智汇通用组件（如云相册、通用表单、统一待办等组件）。多年的开源社区摸鱼玩家，欢迎各位同事空了多多联系，一起交流技术与感情。

今天带来的分享技术主题的是一个小小的动画效果，使用最基础canvas api与requestAnimationFrame实现，稍后将进行主要步骤讲解、并与大家一起完成demo。

接下来我们先简单讲解下所需要用到的技术知识点：requestAnimationFrame & Canvas
-->

---
layout: cover
title: Canvas's Usage With RequestAnimationFrame
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Canvas's Usage With </span>
  <span>RequestAnimationFrame </span>
  <sup v-click>1/n</sup>
</div>
<div mt1 forward:delay-300 v-click>The Canvas's Plum</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col gap-2 items-end" text-left v-click="1">
  <img src="/react-summit.svg" w-22 alt="React Summit" />
  <div text-xs opacity-75>July 11, 2024</div>
</div>

<!--
Canvas相比大家应该都很熟悉，给我一张画布，可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等应用场景，开源社区中也有很多工具库，如游戏制作的EaselJs、数据热力图heatmap.js，当然熟悉的3D绘制的同学应该知道还可以在WebGL中使用。
使用方法很简单，初始化一张画布，获取到context，就可以绘制线条、矩形、圆弧等基本形状。当然今天我们的demo中绘制过程仅涉及到线条绘制，将会在demo实现过程中进行演示。

requestAnimationFrame挂载在全局window对象上，可以告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。回调函数执行次数通常是每秒 60 次，但在大多数遵循 W3C 建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。

timestamp参数会传入回调方法中，它指示当前被 requestAnimationFrame() 排序的回调函数被触发的时间。在同一个帧中的多个回调函数，它们每一个都会接受到一个相同的时间戳，即使在计算上一个回调函数的工作负载期间已经消耗了一些时间。该时间戳是一个十进制数，单位为毫秒，最小精度为 1ms

我们将一起对该方法进行封装，实现循环调用生成Canvas树枝节点，并且支持手动暂停与恢复动画执行。

我们先来看看最终实现的demo效果。
-->

---
layout: center
---

<Plum />

<!--
我们来简单操作一下，启动动画可以看见仿生树自动的开始绘制，点击暂停按钮则停止绘制，再点击继续则仿生树又开始野蛮生长。从demo可见在canvas画布上绘制一颗小树,树枝的长度、生长角度在一定范围内是随机的（画框边界控制）

这里我们使用tldraw工具演示绘制思路，首先树枝的长度和生长角度在绘制过程中都有一定的随机性，这里角度的设计我们定义了一个最大夹角正负15度并乘上随机值，长度的计算稍微多了一些步骤，使用正余弦函数进行计算，相信在做的小伙伴都很熟悉，这里就简要跳过了。（直接coding实现该方法，备用）
-->

---
clicks: 4
growX: 0
growY: 0
---

## How To Achieve This Target

<div
  v-click="1"
  absolute w-200 h-200 left-20 border="~ gray/50 rounded-full" bg-gray:20 text-5xl
  flex="~ items-center justify-center"
  transition-all duration-500
  :class="$clicks === 4 ? 'scale-100' : 'scale-80'"
>
  Canvas Layer
  <div
    v-click="2"
    absolute w-70 h-70 left-65 top-10 border="~ blue rounded-full"
    bg-blue:20 text-4xl text-blue flex="~ items-center justify-center"
    transition-all duration-500
    :class="$clicks >= 3 ? 'scale-100' : 'scale-80'"
  >
    Animation
  </div>
</div>

<!--
如何实现的呢？

其实就像看起来的那么简单，第一步绘制一个canvas画布，第二部开启动画循环绘制线条

第一步，初始化画布设置宽高 dpi-设备像素比

关键在第二步，怎么设计动画并支持手动启动和停止。上面有安利到我们会使用requestAniamtionFrame实现，但是我们都知道这个方法传入的回调仅会在下一次绘制之前执行一次，该怎么办呢？

（等待2s）,其实仔细观察演示demo会发现，可以通过迭代实现，每次绘制上一层树枝结束判断边界碰撞，未达边界着随机生成下一次绘制的树枝，如此反复完成。

下面我将本次绘制大致分为5个步骤：

-->

---

## The Plum Canvas Steps of Core

<div h-100 flex="~ items-center">
<v-clicks>

- Init Canvas & Context For Next
- Stepper Design For Drawing
- Frame-by-frame Drawing
- Support Manual Control
- Start Drawing With Sides

</v-clicks>
</div>

<!--
实现该动画的核心步骤有如下五个步骤：
1、初始化canvas画布和context
2、设计绘制所需的步进动画
3、使用requestAnimationFrame设计帧动画
4、封装hook支持手动启动帧动画
5、随机设置边界出生点

接来下，让我们一起来编码实现

先画一条简单的线试试

beiginPath
moveTo
lineTo
stroke
-->

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Thank You!

Slides on [yuzili](https://github.com/POfeiY/talks.git)

<!--
That's all for my talk, hope you enjoy. Thank you!

总结一下，canvas的使用场景与requestAnimationFrame的使用要点，推荐咱行内前端开发者实践可视化工具的开发。当然以上演示的demo仅作示例参考，有兴趣的同学可以加入我们一并研讨和提升

[拓展了解] SVG or Canvas
Canvas 是基于脚本的，通过 JavaScript 指令来动态绘图。而 SVG 则是使用 XML 文档来描述矢量图。

Canvas 提供的绘图能力更底层，适合做到像素级的图形处理，能动态渲染和绘制大数据量的图形。而 SVG 抽象层次更高，声明描述式的接口功能更丰富，内置了大量的图形、滤镜和动画等，方便进行文档元素的维护，也能导出为文件脱离浏览器环境使用。

如果单就图表库的视角来看，选择 Canvas 和 SVG 各有千秋。小画布、大数据量的场景适合用 Canvas，譬如热力图、大数据量的散点图等。如果画布非常大，有缩放、平移等高频的交互，或者移动端对内存占用量非常敏感等场景，可以使用 SVG 的方案。

这里留一个课后作业，一个100px * 100px的canvas画布在理论上占多大的内存呢？
-->
