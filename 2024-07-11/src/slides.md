---
layout: center
colorSchema: dark
transition: fade-out
mdc: true
title: The Set Theory
---

![](/unplugin.svg){.w-30.mt--10.mb-5}

<!--
各位同事晚上好，很开心又和各位同事在前端技术部落见面，分享技术主题的同时与大家一起交流成长。
-->

---
layout: intro
---

##### INTRO!{.op50}

## Specific is Not a Bad Thing

<!--
不积跬步无以至千里，技术领域的成长道路上，在目前“泛平台化”、“泛集成化”的环境下，我们的开发人员越来越少的时间用于技术基础建设，疲于奔命的测管修复、缝缝补补的维护需求，似乎都忘了没有基础技术能力的研发沉淀，哪来的高楼大厦。

期望越来越多的开发者专注技术基础的建设，成为特别的开发者，优秀的开发者
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
  <div><a href="https://POfeiY.me" target="_blank" class="border-none! font-300">POfeiY.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4 />
  <div><a href="https://m.webtoo.ls/@POfeiY" target="_blank" class="border-none! font-300">POfeiY@webtoo.ls</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/yaphet41" target="_blank" class="border-none! font-300">POfeiY</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/18592121?v=4" rounded-full w-35 abs-tr mt-32 mr-30 />

<div flex="~ gap2">

</div>

<!--
我是任职于技术服务中心兴智汇团队的余自立，主要负责的项目有兴智汇底座JS-SDK、兴智汇通用组件（如云相册、通用表单、统一待办等组件），也常年混迹于开源社区，欢迎各位同事联系我交流技术与感情。

今天由我来为大家分享一例基于canvas与requestAnimation实现的动画效果（绘制仿生树枝）

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
使用canvas api绘制一颗小树,树枝的长度、生长角度在一定范围内是随机的（画框边界控制）

告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

将该API封装到hook中，循环调用生成Canvas树枝分叉，并且支持手动暂停与恢复动画执行。
-->

---
clicks: 4
growX: 0
growY: 0
---

## How Achieve This Target

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

[拓展了解] SVG or Canvas
Canvas 是基于脚本的，通过 JavaScript 指令来动态绘图。而 SVG 则是使用 XML 文档来描述矢量图。

Canvas 提供的绘图能力更底层，适合做到像素级的图形处理，能动态渲染和绘制大数据量的图形。而 SVG 抽象层次更高，声明描述式的接口功能更丰富，内置了大量的图形、滤镜和动画等，方便进行文档元素的维护，也能导出为文件脱离浏览器环境使用。

如果单就图表库的视角来看，选择 Canvas 和 SVG 各有千秋。小画布、大数据量的场景适合用 Canvas，譬如热力图、大数据量的散点图等。如果画布非常大，有缩放、平移等高频的交互，或者移动端对内存占用量非常敏感等场景，可以使用 SVG 的方案。

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
-->
