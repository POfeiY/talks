---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
title: FED Day For All
monacoTypesIgnorePackages:
  - '@antfu/install-pkg'
  - '@clack/prompts'
  - '@typescript-eslint/*'
  - 'eslint-plugin-*'
  - '*-eslint-parser'
  - 'find-up'
  - 'parse-*'
  - 'globals'
  - 'pkg-types'
  - 'mlly'
  - 'local-pkg'
  - 'yargs'
  - 'fast-glob'
  - 'debug'
  - 'globby'
  - 'estraverse'
  - 'pathe'
  - 'acorn'
  - 'acorn-*'
  - 'pico*'
  - 'eslint-visitor-keys'
---

![](/y-logo-animated.svg){.w-30.mt--10.mb-5}

<!--
各位同学上午好，很开心能在福州与你们相遇，也很开心收到主办方邀请来做这次分享。这里有个问题想问下同学们，兴生力培训好不好玩，曾经我也有一个兴生力的期待，直到我从数金小鲜肉熬成数金老登也没有等到通知，现场如果有人力的小伙伴请为2020年入职的的老登们问下，他们还有机会吗？
-->

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-25
---

# Zili Yu

<div class="[&>*]:important-leading-10 opacity-80">

Core team member of {XzhLabs}<br>
Creator of {xzh-jssdk} {invoker} {cli-tools}<br>
Maintainer of {CloudAlbum} {FormCreater} {Schedule}<br>

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
言归正传，先简单做个自我介绍，我叫做余自立，任职于技术服务中心一名前端开发工程师，主要负责兴智汇基础平台底座JS-SDK项目，相关项目有兴智汇底座JS-SDK、兴智汇通用组件（如云相册、通用表单、统一待办等组件），后续对以上组件有兴趣的小伙伴可以联系我交流下。课前看了下本次参加的名单，应该有不少的小伙伴已经线下一起面基过了，期待更多的小伙伴来一起交流成长。

当然应该有不少同学都活跃在在开源社区，闲暇时也可以一起随聊，互通有无。

接下来我们一起进入前端技术概论这门课程的学习内容。

-->

---
layout: cover
---

<h1 flex="~ col">
<div mt1 forward:delay-300 text-white:50 ml10 flex="~ col">
  <span flex="~ gap-2 items-center" text-hex-8080f2>
    <div i-token-branded:energy-web />
    Frontend Web
  </span>
  <span text-white font-bold v-click>Just for Pages?</span>
  <span font-hand text-1.2em text-green v-click>Made Web Easy</span>
</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col items-center" text-left>
  <!-- <img src="/react-summit.svg" alt="React Day Berlin" w30 mb1/> -->
  <i i-logos-reactivex font-size-8 mb2/>
  <div text-xs opacity-75>January 07, 2025 | fuzhou</div>
</div>

<!--
前端，一个不算陌生的名词

（互动时间...）现场随机选择一个同学，来聊一下对于“前端”的初印象

可能有不少非前端技术领域的同学，默认为前端仅是做做页面、根据设计给出的设计稿填充样式、做一些用户简单的点击事件、页面切换等功能，俗称“页面仔”，那是不是我们前端同学仅仅只能做页面呢？...当然不是，

大人，时代已经变了！（手动重音）

[click]前端技术发展从基本的页面标签、样式、动作脚本编写，演变成现代的前端组件化、前端可视化、前端工程化，配套周边生态的演化（如微前端、包管理器、构建工具），已经发展成为一个具备完整体系的技术领域。前端同学可以自建服务server，操作数据库，定义标准接口，输出各式各样的前端市场物料供BA与SA做方案预研。

举个栗子，计财部业务老师想要一个数据驾驶舱功能，按传统的前端开发方案，编写页面结构、样式、脚本、接口联调（在完全没有存量组件库支持的情况下，一个中级的前端工程师需要2-3提供演示demo）,但如果在现在的前端开发环境下小半天足矣（甚至还可以完成公共组件的单元测试），类似的构建工具、包管理、可视化组件、mock-server等工具可大幅度降低demo研发时长，当然在固定场景类型的情况还可以将页面组件进行拆分，以便其他场景快速复用搭建页面。甚至接入copilot、AWS、通灵异码等AI辅助编码工具，让编码过程极度丝滑。

当然这也往往会给一些开发者造成误区，“前端真的很简单”。这里呢，澄清一下前端入门是相对好上手，“即编即所得”的特性让初学者在上手练习时会很有学习成就感，但随着学习阶梯的曲线陡峭度变化，AST、GPU、模型、算法等知识体系注入，相信在座的前端同学深有体会。

[click]接下来呢，我们将进入前端的基础知识内容部分。

-->

---
layout: center
glow: bottom
---

<div flex="~ col items-center justify-center w-full">

<h2 flex="~ col" text-center>
<div text-center flex="~ col gap-2" transition duration-500 :class="$clicks < 2 ? 'translate-y-40' : ''">
  <span
    flex="~ gap-2 items-center justify-center"
    text-hex-f1662a transition duration-500 text-1.5em
    :class="$clicks < 1 ? 'scale-150 translate-y' : ''"
  >
    <div i-vscode-icons-file-type-html />
    HTML5 W3C
  </span>
  <span v-click op75 forward:delay-400 text-2xl>released <TimeAgo date="2019-05-28" /></span>
</div>
</h2>

<img src="/html-v5.jpg" v-click mt4 w-60 rounded-lg shadow forward:delay-400 />
</div>

<!--
术语 HTML5 本质上是指一组现代 Web 技术的流行词汇。这包括 HTML 动态标准，以及用于增强存储、多媒体和硬件访问的 JavaScript API。

(备注： 在 2019 年之前，W3C 发布的是带有版本号的 HTML5 标准。自 2019 年 5 月 28 日起，W3C 宣布 WHATWG 动态标准为 HTML 的唯一版本。)

-->

---

## HTML Timeline

<HTMLTimeline mt2 />

<div mt6 />

<v-clicks>

- `HTML2` released as IETF RFC 1866
- `HTML3` fully developed and standardized by W3C
- `HTML4` is released
- `HTML5` is released

</v-clicks>

<!--
[click]1、1995年11月24日，HTML 2.0作为IETF RFC 1866发布，追加了表单文件上传、表格等功能标签
[click]2、1997年1月14日，HTML 3.2作为W3C推荐标准发布，这是一个完全由W3C开发并标准化的版本
[click]3、1997年12月18日，HTML4.0 作为W3C推荐标准发布，禁用过期标签元素，采取许多特定浏览器元素类型和属性，并放弃推荐原网景提供的视觉标记功能
[click]4、2014年10月28日 HTML5作为W3C推荐标准发布，意味着HTML5的标准化完成完成

自此web全新时代，伴随移动应用及设备的推广应用，web技术领域起飞！
-->

---

<div grid="~ cols-2 gap-6" h-full>
<div>

## HTML4 <sup text-base op50 translate-y--2 inline-block>legacy</sup>

<div mt-4 h-42>

<v-clicks at="3">

- Without Semantic.

</v-clicks>

</div>
<div v-click="1" transition duration-800 :class="$clicks < 3 ? 'translate-y--160px': ''">

```html {*|3-7|*}{at:4}
<html>
  <head></head>
  <body>
    <div>header</div>
    <div>content</div>
    <div>footer</div>
  </body>
</html>
```

</div>
</div>
<div>

## HTML5 <sup text-base op50 translate-y--2 inline-block>current</sup>

<div mt-4 h-42>

<v-clicks at="3">

- Semantic grammar such as `<header>` `<nav>` `<aside>`, etc.
- Form enhancement
- Multimedia enhancement <sup op75>video & audio</sup>
- Vector graphics enhancement <sup op75>canvas & svg</sup>

</v-clicks>

</div>
<div v-click="2" transition duration-800 delay-50 h-70 overflow-y-auto :class="$clicks < 3 ? 'translate-y--160px': ''">

```html {3-18|9-10|11-12|13-14|*}{at:4}
<html>
  <head></head>
  <body>
    <header>header</header>
    <nav>nav</nav>
    <div>
      <aside></aside>
      <section>
        <input type="email"/>
        <input type="range"/>
        <video></video>
        <audio></audio>
        <canvas></canvas>
        <svg></svg>
      </section>
    </div>
    <footer><footer>
  </body>
</html>
```

</div>
</div>
</div>

<!--
[click]HTML4与HTML5的区别主要体现在语义化
[click]对比4 vs 5
[click] 标签语义化,可读性增强
[click] 表单增强,number,seacrh,month,week,email,range,color,url。表单增强能力相信有表单生成器研发经验的同学应该有体会。表单在我行的系统中高频应用，如控件类型扩展、字段约束、依赖关系、校验驱动、状态管理、动态渲染、字段路径系统以及表单协议JSON-Schema属性建设等，并应用到登录注册、查询列表、编辑详情、分步表单、手风琴表单等场景，对表单系统设计有兴趣的小伙伴可以联系我，目前由我负责的表单组件已上线支持柜面登记簿、移动授权接入等多个微应用，后续计划发布到行里开源平台，欢迎各位小伙伴来共同建设。
[click] 音视频 video、audio，常用混迹于B站的小伙伴应该非常熟悉
[click] 矢量图形能力支持 canvas svg （邀请现场的设计同学讲解下位图与矢量图的区别）。可视化主流工具库多是通过此API封装完成，如echarts图表库，知名网站stateofjs的数据图表同样是通过canvas
[click] 本地存储 localStorage | sessionStorage | indexedDB 前两个API相信同学们非常熟悉，在此就不做赘述了。indexedDB是一种底层 API，用于在客户端存储大量的结构化数据（也包括文件/二进制大型对象（blobs）），且此特性在webworker可用
[click] webworker 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面,所以在worker中是无法操作dom元素的
[click] 地理位置API Geolocation

接下来我们快速进入CSS的世界
-->

---
layout: fact
---

# CSS3

<div v-click relative text-3xl mt--3><span v-mark.teal.highlight.delay100.op10="1" text-teal>"Magical Magical World"</span></div>

<div v-click text-2xl  mt5 text-shadow-2xl op75>Simple to define, but complicated to engineer</div>

<IconsBurst />

<!--
[click]Cascading Style Sheets 是一种样式表语言，用来描述文档的呈现方式，如元素再屏幕、纸质、音频等其他媒体上的元素如何被渲染的定义。

[click]CSS的语法概念相对会比较纷杂一些，比较重要的概念如：语法形式、选择器优先级、继承、流式布局、盒模型、弹性盒子、网格布局、媒体查询、动画等等。当然原生css在编写上的效率以及复杂场景的复用性受限于语法特性，所以我们可以引入一些样式预处理器、如less、sass、postcss等工具库，支持变量、混合、嵌套、运算、转义、函数、作用域等功能特性;或选择如tailwind、unocss等工具辅助我们开发，提升编码效率的同时提高代码复用度，特别适合喜好使用预设、快捷键位的同学。当然如果还未尝试过以上工具的同学也可以联系我获取一些上线项目代码示例。

-->

---

<h1 text-center flex="~ col gap-1 items-center" py5>
<div flex="~ gap-2 items-center" font-bold><div i-simple-icons-normalizedotcss text-3xl text-hex-639/>CSS3 WORLD</div>
</h1>

<div grid="~ cols-[1fr_max-content_1fr] gap-8" px-10 mt4>

<div flex="~ col gap-6" py2 transition duration-500 :class="$clicks < 6 ? 'translate-x-55' : 'translate-x-20'">
  <div
    v-click
    op50 font-bold uppercase text-sm tracking-0.2em text-right
    transition duration-500 :class="$clicks < 6 ? 'translate-x--15' : ''"
  >Core Concepts</div>

  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-carbon-insert-syntax text-red />
      <div>Grammatical form</div>
    </div>
    <div text-sm op60>The syntax and forms of the language</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-entypo-flow-cascade text-amber />
      <div>Inherited | Cascading</div>
    </div>
    <div text-sm op60>Specificity, inheritance, and the cascade</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-rivet-icons-css text-green />
      <div>CSS Selector</div>
    </div>
    <div text-sm op60>pseudo-elements, nesting, scoping and shadow parts</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-ph-compass-tool-duotone text-blue />
      <div>Boxing Model</div>
    </div>
    <div text-sm op60>Box model and margin collapse</div>
  </div>
</div>

<div w-1px h-full border="l main" translate-x-25 v-click />

<div flex="~ col gap-6" py2 translate-x-25>
  <div op50 font-bold uppercase text-sm tracking-0.2em v-after>Layout Feature</div>

  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-streamline-wind-flow-1 text-blue />
      <div>Normal Flow Layout</div>
    </div>
    <div text-sm op60>Elements on a webpage lay out in normal flow</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-material-symbols-align-justify-flex-start text-green />
      <div>Flexible box</div>
    </div>
    <div text-sm op60>One-dimensional layout method for arranging items</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-gis-grid text-amber />
      <div>Grid Layout</div>
    </div>
    <div text-sm op60>Grid layout is a two-dimensional layout system</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-mdi-responsive text-red />
      <div>Responsive design</div>
    </div>
    <div text-sm op60>The way to design for a multi-device web</div>
  </div>
</div>

</div>

<!--
CSS（层叠样式表）用于设置网页的样式及布局——比如，可以更改内容的字体、颜色、大小以及间距，或是将其分列，或是添加动画及赋予内容其他装饰性的特征。本模块将通过阐述基本原理，展示语法示例，以及如何与 HTML 相联系三方面，为精通 CSS 提供一个友好的开端。

[click]CSS3的核心基础有：

[click] 1、语言语法，结构形式,层叠样式表（Cascading Stylesheet，简称 CSS），其基本目标是让浏览器以指定的特性去绘制页面元素，比如颜色、定位、装饰。CSS 的语法反映了这个目标，由下面两个部分构建：属性（一个可读名称的标识符） & 值（描述浏览器渲染引擎如何处理改特性）

[click] 2、优先级、继承特性
[click] 3、选择器
[click] 4、盒模型

[click]常用布局：
display属性
[click]1、流式布局（正常流布局），浮动、定位
[click] 2、弹性盒子
[click] 3、网格
[click] 4、响应式设计

[pause a bit]
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Grammatical form" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-carbon-insert-syntax text="[0.8em]" /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Grammatical form

<div mb-10>

<div text-sm op60>The syntax and forms of the language</div>

</div>

## Code Demo

<div mt-2 />

```css {2|1-3|*}{at:2}
.selector {
  position: relative;
  color: red;
}

.selector .select-1 {
  font-size: 14px;
  color: green;
}
```

<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- CSS declarations <sup>specific values is the core function</sup>
- CSS declaration blocks
- CSS rulesets
- CSS statements

</v-clicks>

</div>
</div>

<!--
层叠样式表（Cascading Stylesheet，简称 CSS），其基本目标是让浏览器以指定的特性去绘制页面元素，比如颜色、定位、装饰。CSS 的语法反映了这个目标，由下面两个部分构建：属性与值

[click] 样式声明：CSS 的核心功能是将 CSS 属性设定为特定的值。一个属性与值的键值对被称为“声明”（declaration） 。CSS 引擎会计算页面上每个元素都有哪些声明，并且会根据结果绘制元素，排布样式。在 CSS 中，无论是属性名还是属性值都是对大小写不敏感的。属性与值之间以英文冒号隔开。属性与值前面、后面与两者之间的空白不是必需的，会被自动忽略。

[click] 声明会按照块的形式被组合。块有时会嵌套，所以开始与结束大括号必须要匹配。

[click] 如果样式表只能为每个页面元素添加一个声明，那就没有真正发挥出它的价值。其真正的目标是为文档不同部分添加不同的声明。为此，CSS 可以在声明块前面放置选择器（selector)，选择器用来选择页面多个元素的条件。一对选择器与声明块称为规则集（ruleset)，常简称为规则（rule)。

[click] 规则是样式表的主体，通常样式表会包括大量的规则列表。但有时候网页的作者也希望在样式表中包括其他的一些信息，比如字符集，导入其他的外部样式表，字体等，这些需要专门的语句表示。

-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Specificity & Inherited" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-entypo-flow-cascade text="[0.8em]" /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Specificity & Inherited

<div mb-10>

<div text-sm op60>Inheritance controls what happens when no value is specified</div>

</div>

## Code Demo

<div mt-2 />

```css {2|1-3|*}{at:2}
p,
h1 {
  color: green;
}

.className {
  font-size: 14px;
}

#id {
  margin: 10px;
}

div {
  color: red !important;
}
```

<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- Specificity
- Inheritance
- Cascade

</v-clicks>

</div>
</div>

<!--
[click] 浏览器通过优先级来判断哪些属性值与一个元素最为相关，从而在该元素上应用这些属性值。优先级是基于不同种类选择器组成的匹配规则。优先级就是分配给指定的 CSS 声明的一个权重，它由 匹配的选择器中的 每一种选择器类型的 数值决定。而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。

当同一个元素有多个规则集声明时，分配给CSS声明的一个权重，由匹配的选择器类型的权重数值决定。相信有团队协作项目的前端同学、或改造第三方组件库的同学对于这个权重计算非常有经验了。

- !important 最高权重，非特殊情况，慎用（如何覆盖，魔法打败魔法，用另一个!important且顺序靠后）
- 内联样式 * 1000
- ID选择器 *100
- 类选择器 *10
- 元素选择器  *1

> 备注：通用选择器（*）、组合符（+、>、~）和调整优先级的选择器 :where 不会影像优先级。以及否定(:not)和任意匹配(:is())伪类本身对优先级没有影响，但他们的参数则会带来影响

[click] 每个CSS 属性定义的概述都指出了这个属性是默认继承的 ("Inherited: Yes") 还是默认不继承的 ("Inherited: no")。这决定了当你没有为元素的属性指定值时该如何计算值。当元素的一个继承属性没有指定值时，则取父元素的同属性的计算值 computed value

[click] 层叠算法期望通过挑选 CSS 声明来给 CSS 属性设置正确的值。CSS 声明可以有不同的来源：浏览器默认样式、网页开发者定义、浏览器用户，最终由层叠顺序决定。

-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Selector" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-rivet-icons-css text="[0.8em]" /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Selector

<div mb-10>

<div text-sm op60>The CSS selectors module defines the patterns to select elements</div>

</div>

## Code Demo

<div mt-2 />

```css {1|2|3|4|5|6|7-10|11-12}{at:2}
*
div
.className
#id
a[title]
div, span
div span
ul > li
p ~ span
h1 + p
h:active
div:first-child
```

<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- common selector
- element selector
- className selector
- id selector
- attr selector
- Grouping selector
- combinator selector
- Pseudo selector

</v-clicks>

</div>
</div>

<!--
CSS 选择器规定了 CSS 规则会被应用到哪些元素上。

[click] 通用选择器,选择所有元素。（可选）可以将其限制为特定的名称空间或所有名称空间。

[click] 元素选择器,按照给定的节点名称，选择所有匹配的元素。

[click] 类选择器,按照给定的 class 属性的值，选择所有匹配的元素。

[click] ID选择器,按照 id 属性选择一个与之匹配的元素。需要注意的是，一个文档中，每个 ID 属性都应当是唯一的。

[click] 属性选择器,按照给定的属性，选择所有匹配的元素。

[click] 分组选择器,, 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。

[click] 组合选择器,又分为后代组合器(组合器选择前一个元素的后代节点)、子代选择器( 组合器选择前一个元素的直接子代的节点)、兄弟组合选择器等, 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。

[click] 伪类 & 伪元素选择器, 支持按照未被包含在文档树中的状态信息来选择元素；伪选择器用于表示无法用 HTML 语义表达的实体。

-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Boxing Model" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-ph-compass-tool-duotone text="[0.8em]" /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Boxing Model

<div mb-10>

<div text-sm op60>Every box is composed of four parts (or areas), defined by their respective edges</div>

</div>

<div mt-2 >
<img src="/box-model.webp" w-140 rounded-lg shadow border="~ main" />
</div>

<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- Content area
- Padding area
- Border area
- Margin area

</v-clicks>

</div>
</div>

<!--
当对一个文档进行布局（lay out）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子。

[click]内容区域（content area）由内容边界限制，容纳着元素的“真实”内容，例如文本、图像，或是一个视频播放器。它的尺寸为内容宽度（或称 content-box 宽度）和内容高度（或称 content-box 高度）。它通常含有一个背景颜色（默认颜色为透明）或背景图像。

如果 box-sizing 为 content-box（默认），则内容区域的大小可明确地通过 width、min-width、max-width、height、min-height 和 max-height 控制。

[click]内边距区域（padding area）由内边距边界限制，扩展自内容区域，负责延伸内容区域的背景，填充元素中内容与边框的间距。它的尺寸是 padding-box 宽度 和 padding-box 高度。

[click]边框区域（border area）由边框边界限制，扩展自内边距区域，是容纳边框的区域。其尺寸为 border-box 宽度和 border-box 高度。
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Normal Flow Layout" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-streamline-wind-flow-1 text="[0.8em]" /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Normal Flow Layout

<div mb-10>

<div text-sm op60>Elements on a webpage lay out in normal flow</div>

</div>

<div mt-2 >
</div>

<div mt-6 />

## Features

<div mt-2 />
</div>
</div>

<!--
"文档流"或"流式布局"是在对布局进行任何更改之前，在页面上显示"块"和"内联"元素的方式。这个"流"本质上是一系列的事物，它们都在你的布局中一起工作，并且互相了解。一旦某部分脱离了"流"，它就会独立地工作。

在文档流中，内联元素按内联方向显示，即词语在依据文件写作模式的句子中表示的方向。块元素则一个接一个地显示，就像该文档的写作模式中的段落一样。因此在英语中，内联元素从左边开始一个接一个地显示，块元素从顶部开始向下显示并移动页面。

我们直接进入更为常用的弹性盒子布局。
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Flexible box" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-material-symbols-align-justify-flex-start text="[0.8em]" /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# FlexBox

<div mb-6 />

<div>
<img src="/flexbox.webp" w-100 rounded-lg shadow border="~ main" />
</div>

<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- The main axis
- The cross axis

</v-clicks>

</div>
</div>

<!--
Flexible Box 模型，通常被称为 flexbox，是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。本文给出了 flexbox 的主要特性。

[click] 主轴线
[click] 交叉轴线

以行分布方式举例，主轴对齐方式常用的是中间对齐、两端对齐，左对齐、右对齐；交叉轴对齐方式有顶端对齐、居中对齐、底端对齐，以及弹性盒子中的子元素扩展和收缩配置属性，配合图中示例方便理解，当然有条件的话可以上手实操体验更能提升理解。
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Grid" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-gis-grid text="[0.8em]" /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Grid

<div mb-6 />

<div>
<img src="/grid.webp" w-100 rounded-lg shadow border="~ main" />
</div>

<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- grid-template-rows
- grid-template-cols

</v-clicks>

</div>
</div>

<!--
CSS Grid Layout 是一种二维布局模型，允许开发者在一个容器中创建行和列的网格，并将子元素（称为 "网格项"）放置到这个网格中。它使得布局变得更加灵活、强大，同时也解决了使用传统布局方法（如浮动和定位）时的一些问题。

CSS Grid 使得在网页上创建复杂的布局变得简单，并且比传统布局方法（如 Flexbox 和 float）提供了更多的控制和灵活性。

[click] 行网格, 定义网格行
[click] 列网格，定义网格列

- justify-self 单个元素在布局容器中
- align-self 单个元素在布局容器中对应轴的对齐方式
- justify-items 
- align-item 布局容器中全部子元素的对应轴的对齐方式
- justify-content 
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Responsive design" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-mdi-responsive text="[0.8em]" /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Responsive design

<div mb-6 />

<div>
<img src="/responsive.jpg" w-160 rounded-lg shadow border="~ main" />
</div>

<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- Media Queries
- Fluid Layouts
- Viewport Units

</v-clicks>

</div>
</div>

<!--
响应式设计是一种网页设计理念，旨在使网页能够适应不同设备的屏幕尺寸、分辨率和显示方向。响应式设计通过使用灵活的布局、图像和 CSS 媒体查询来实现。其核心是确保网页在桌面、平板、手机等设备上都能提供良好的用户体验。

响应式设计是通过使用灵活的布局、相对单位、媒体查询等技术，确保网页在各种设备上的良好体验。通过结合 Flexbox、CSS Grid 和 媒体查询 等现代技术，开发者可以创建出适应不同屏幕尺寸的布局，从而优化用户体验。。

CSS Grid 使得在网页上创建复杂的布局变得简单，并且比传统布局方法（如 Flexbox 和 float）提供了更多的控制和灵活性。

响应式设计的常用实践

[click]  媒体查询的使用, 响应式设计会根据设备宽度进行调整。最常见的设备断点
[click]  流式布局 (Fluid Layouts),流式布局允许页面的元素根据容器的宽度自动调整大小，而不使用固定的宽度
[click]  使用视口单位 (Viewport Units),视口单位（vw, vh, vmin, vmax）基于视口（viewport）大小，允许元素相对于视口的尺寸进行调整，也是目前移动端H5适配使用较多的方案。

响应式布局在多端适配场景高频使用。

这里补充一下响应式设计与自适应设计的概念：是两种网页设计的常用策略，目的都是为了提升用户体验，各自的实现方式和原理有差异。

响应式设计：基于流式布局和媒体查询实现在多端上自动调整布局，适配不同屏幕大小，一套代码适配多个设备，灵活性高、维护成本较低、一致性强，但在某些特定设备兼容不完美，对性能要求较高，特别是多媒体素材需要动态调整大小。适合多屏幕设备通用型高、布局相对简单、低成本

自适应设计：通过为特定的设备或分辨率设计多个固定布局的方法，每个布局独立存在，根据设备环境加载适合的布局，实现精准控制布局、性能优化，不同设备仅加载所需资源代码，更适合复杂场景，但维护成本偏高、缺乏灵活性（无法适配位置设备）、开发成本高（设计与研发），适用于功能复杂、体验要求较高、加载要求

适当场景也可以组合使用

-->

---

<div grid="~ cols-2 gap-6" h-full>
<div>

## Media Queries <sup text-base op50 translate-y--2 inline-block>legacy</sup>

<div mt-4 h-42>

<v-click>

- Breakpoint

</v-click>

</div>
<div v-click="1" transition duration-800 :class="$clicks < 3 ? 'translate-y--120px': ''">

```css
/* PC client */
@media (min-width: 1200px) { ... }

/* Pad(Horizontal) */
@media (max-width: 1024px) { ... }

/* mobile(Vertical) */
@media (max-width: 768px) { ... }

/* mobile sm(Vertical) */
@media (max-width: 480px) { ... }
```

</div>
</div>
<div>

## Fluid Layouts

<div mt-4 h-42>

<v-click>

- Auto Size

</v-click>

</div>
<div v-click="2" transition duration-800 delay-50 :class="$clicks < 3 ? 'translate-y--120px': ''">

```css
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 33.33%; /* 1/3 width */
  padding: 10px;
}

@media (max-width: 768px) {
  .item {
    width: 50%; /* less than 768px */
  }
}

@media (max-width: 480px) {
  .item {
    width: 100%; /* less than 480px */
  }
}
```

</div>
</div>
</div>

<!--
 [click]通常，响应式设计会根据设备宽度进行调整。最常见的设备断点（Breakpoint）如下：

[click] 流式布局允许页面的元素根据容器的宽度自动调整大小，而不使用固定的宽度。
-->

---
layout: fact
---

# Atomic CSS{.important-text-3em}
The approach to CSS architecture

<!--
这里想扩展聊一下CSS原子化方案，相信有不少的项目组已经有尝试。

原子化CSS是一种CSS的架构方式，倾向于小巧与用途专一的class，并且会以视觉效果进行命名，市面上有不少实用至上的CSS框架，如Tailwind CSS \ Windi CSS等，

原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名。有些人可能会称其为函数式 CSS，或者 CSS 实用工具。

其中市面上常用的tailwind CSS、windi CSS以及unocss

- tailwindcss 基于 postcss 的 AST 实现的 css 代码生成工具，并且做了通过 extractor 提取 js、html 中 class 的功能，原理是扫描所有 HTML 文件、JavaScript 组件以及任何 模板中的 CSS 类（class）名，然后生成相应的样式代码并写入 到一个静态 CSS 文件中。促使开发者更快速、灵活、可靠的编写样式代码。

- windi 是从零开始编写的 Tailwind CSS 的替代方案。它的零依赖，也不要求用户安装 PostCSS 和 Autoprefixer。更为重要的是，它支持 按需生成。Windi CSS 不会一次生成所有的 CSS，而是只会生成你在代码中实际使用到的原子化 CSS。

- unocss  具有高性能且极具灵活性的即时原子化 CSS 引擎
跳过解析，不使用AST
从内部实现上看，Tailwind 依赖于 PostCSS 的 AST 进行修改，而 Windi 则是编写了一个自定义解析器和 AST。考虑到在开发过程中，这些工具 CSS 的并不经常变化，UnoCSS 通过非常高效的字符串拼接来直接生成对应的 CSS 而非引入整个编译过程。同时，UnoCSS 对类名和生成的 CSS 字符串进行了缓存，当再次遇到相同的实用工具类时，它可以绕过整个匹配和生成的过程。

-->

---
glow: right
---

<div grid="~ cols-2 gap-4" h-full>
<div flex="~ col gap-2 items-center justify-center">
  <div i-logos-tailwindcss text-size-4xl ma />
</div>

<div flex="~ col gap-2 justify-center">

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js}', // files to be handled
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF', // custom color
      },
    },
  },
  plugins: [],
}
```

```html
<div class="bg-blue-500 text-white p-4 rounded">
  Hello, Tailwind!
</div>

```

</div>
</div>

<!--
它通过大量预定义的类来构建网页元素，而不是编写自定义的 CSS,
bg-blue-500：设置背景色为蓝色;
text-white：设置文本颜色为白色;
p-4：设置内边距为 1rem（根据 Tailwind 的默认配置）;
rounded：设置圆角

-->

---
glow: right
---

<div grid="~ cols-2 gap-4" h-full>
<div flex="~ col gap-2 items-center justify-center">
  <div i-logos-unocss text-size-6xl />
  <div>
    <span text-white font-bold text-2xl>unocss</span>
  </div>
</div>

<div flex="~ col gap-2 justify-center">

```js
// unocss.config.js
export default {
  plugins: [
    UnocssPlugin({
      presets: [
        PresetBootstrap,
        // PresetTailwind,
        // PresetWindi,
        // one...or more!
      ]
    })
  ]
}
```

```js
rules: [
  [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })]
]
```

```html
<div class="m-100">
  <button class="m-3">
    <icon class="p-5" />
    My Button
  </button>
</div>

```

</div>
</div>

<!--
UnoCSS 通过非常高效的字符串拼接来直接生成对应的 CSS 而非引入整个编译过程。同时，UnoCSS 对类名和生成的 CSS 字符串进行了缓存，当再次遇到相同的实用工具类时，它可以绕过整个匹配和生成的过程。

-->

---
layout: fact
---

<Circles />

<div flex="~ items-center gap-3" fixed right-0 top-0 rounded-bl-2rem p5 backdrop-blur-md>
  <div i-token-branded-game text-5xl />
  <div flex="~ col">
    <span text-sm op50 hover:underline target="_blank">Circles</span>
    <span text-1xl hover:underline>
      Yak Game
    </span>
  </div>
</div>

<!--
抽奖小游戏
[click] Q1:HTML5的正式版本是哪一年发布（2014年10月28日）
[click] Q2:课程中CSS原子化有提到两个工具和一个引擎，他们叫做什么

-->

---
layout: fact
---

# JavaScript{.important-text-3em}
The most fun language in the world

<!--
JavaScript（JS）是一种程序设计语言，通常用于客户端（client-side）的网页动态脚本，当然也可以在 Node.js 环境的运行时，用于服务器端。

JavaScript 主要用于浏览器中，让开发者可以通过文档对象模型来操纵网页内容、通过 fetch() API 从服务器获取内容、通过 IndexedDB 存储复杂数据、使用 canvas 绘制图形、通过各种 API 与设备交互等等。JavaScript 是世界上最广泛使用的语言之一，归功于浏览器中 API 的发展和性能提升。

JavaScript 的大部分语法从 Java、C 和 C++ 借鉴而来，但同时也受到 Awk、Perl 和 Python 的影响。

JavaScript 是区分大小写的，并使用 Unicode 字符集

-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="JavaScript/Data Type" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-carbon-data-vis-1 text-lg /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Data Type

<div mb-10>

<div text-sm op60>The latest ECMAScript standard defines 8 data types</div>

</div>

## Code

<div mt-2 />

```js {1|2-3|4|5|6|7|8-12|*}{at:2}
const greeting = 'Hello CIB'
const age = 25
const hex = 0x1F
const isActive = true
const target = null
const sym1 = Symbol('description')
const bigNumber = 1234567890123456789012345678901234567890n
const person = {
  name: 'Alice',
  age: 30,
  greet() { console.log(`Hello ${this.name}`) }
}
```
<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- `String`
- `Number`
- `Boolean`
- `undefined`
- `null`
- `Symbol`
- `BigInt`
- `Object`

</v-clicks>

</div>
</div>

<!--
最新的 ECMAScript 标准定义了 8 种数据类型：7中基本类型与对象

[click] 字符
[click] 整型
[click] 布尔
[click] undefined
[click] null
[click] Symbol
[click] BigInt
[click] Object

每个从 Symbol() 返回的 symbol 值都是唯一的

Symbol() 函数会返回 symbol 类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的 symbol 注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。

解决属性名冲突，创建私有方法和属性

-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="JavaScript/Variable" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-mdi-variable text-lg /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Variable

<div mb-10>

<div text-sm op60>Used to store data</div>

</div>

## Code

<div mt-2 />

```js {1-3|5-22|*}{at:2}
var a1 = 'a1';
let a2 = 'a2';
const a3 = 'a13';

{
  let a = 10;
  console.log(a);  // output 10
}
console.log(a);  // ReferenceError: a is not defined

const PI = 3.14;  // 合法
const x;           // SyntaxError: Missing initializer in const declaration

const y = 100;
y = 200;  // TypeError: Assignment to constant variable

console.log(a);  // undefined，变量声明被提升，但赋值没有
var a = 10;

// let 和 const 不会提升
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```
<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- `var` `let` `const`
- Hoisting
- Scope

</v-clicks>

</div>
</div>

<!--
[click]声明 var\let\const,var这个语法可以用来声明局部变量和全局变量，具体取决于执行上下文,创建的变量不是块级作用域的，而只是块所在的*函数（或全局作用域）*的,let/const 块级作用域：用一对花括号创建的作用域

[click]变量提升,用 var 声明的变量会被提升，意味着你可以在该变量所在的作用域的任意地方引用该变量，即使还没有到达变量声明的地方。由于存在变量提升，一个函数中所有的 var 语句应尽可能地放在接近函数顶部的地方。这个最佳实践会提升代码的清晰度。

[click]作用域： 全局作用域：在脚本模式中运行的所有代码的默认作用域。
模块作用域：在模块模式中运行的代码的作用域。
函数作用域：由函数创建的作用域。
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="JavaScript/Function" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-f7-function text-lg /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Function

<div mb-10>

<div text-sm op60>First-class citizens</div>

</div>

## Code

<div mt-2 />

<div h-70 overflow-y-auto>
```js {1-3|5-7|9-11|13-15|17-19|21|23-25|*}{at:2}
function functionName(parameters) {
  return value
};

const functionName = function(parameters) {
  return value
};

const functionName = (parameters) => {
  return value
};

setTimeout(function() {
  console.log("This is a callback");
}, 1000);

(function() {
  console.log("IIFE executed!");
})();

const fn = new Function('p1', 'p2', 'return p1 + p2;');

function* generatorFunction() {
  yield value;
}

```
</div>

<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- Function Declaration
- Function Expression
- Arrow Function
- Anonymous Function
- IIFE
- Function Constructor
- Generator

</v-clicks>

</div>
</div>

<!--
[click]函数声明,通过function 关键字声明的函数。这种函数有一个名称，且会在作用域内被提升（Hoisting）。函数可以在声明之前调用，因为它会被提升到作用域顶部。适用于需要全局或局部定义的命名函数。

[click]函数表达式 通过变量定义函数，将函数赋值给变量。这种函数不会被提升。函数表达式不会提升，必须在定义后调用。可以是匿名函数或具名函数。

[click]箭头函数,ES6 引入的简洁语法，适合定义简短函数。箭头函数中的 this 由定义时的上下文决定，而不是调用时。没有自己的 this、arguments。
更适合回调函数或需要保持上下文的场景。
不能用作构造函数。

[click]匿名函数,没有名称的函数，常用于立即执行函数或回调。通常用作参数传递或立即执行函数.

[click]立即执行函数表达式,函数定义后立即执行,常用于创建独立作用域，避免变量污染全局环境

[click]构造函数,使用 Function 构造函数动态创建函数。不常用，性能较差且调试困难

[click]Generator 函数,S6 引入的特殊函数，用于生成迭代器对象。可以通过 yield 暂停和恢复执行。用于异步操作和控制流管理

对象方法, 数作为对象的属性，称为方法。
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="JavaScript/Asynchronous" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-carbon-async text-lg /></span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# Asynchronous

<div mb-10>

<div text-sm op60>Asynchronous programming with Event Loop</div>

</div>

## Code

<div mt-2 />

<div h-85 overflow-y-auto>
```js {1-2|4-8|9-31|31-|*}{at:2}
console.log("Start");
console.log("End");

console.log("Start");
setTimeout(() => {
  console.log("Async Task");
}, 1000);
console.log("End");

function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // 输出: Data loaded
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

async function fetchData() {
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve("Data loaded"), 1000)
  );
  console.log(result); // 输出: Data loaded
}

console.log("Start");

setTimeout(() => {
  console.log("Macro Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Micro Task");
});

console.log("End");
// output: Start -> End -> Micro Task -> Macro Task

```
</div>

<div mt-6 />

## Features

<div mt-2 />

<v-clicks>

- Synchronous
- Asynchronous
- Async Methods
- Event Loop

</v-clicks>

</div>
</div>

<!--

JavaScript 是单线程的，事件循环（Event Loop）使得其可以非阻塞地处理异步任务，从而高效运行。异步编程是 JavaScript 中处理 I/O 操作、网络请求、计时器、文件操作等耗时任务的核心机制。

[click]同步 (Synchronous)， 任务按顺序执行，一个任务完成后才会开始下一个任务。长时间任务会阻塞后续操作。

[click]异步 (Asynchronous)，任务不会阻塞代码执行，耗时任务会通过回调机制完成。使用事件循环管理异步任务。

[click]异步编程的主要方法:1、回调函数 (Callback)，通过将函数作为参数传递的方式，异步任务完成后调用回调函数，回调地狱问题。
2、Promise ES6 引入的机制，用于处理异步操作的链式调用，避免了回调地狱。
3、ES8 引入的语法糖，基于 Promise 的异步处理方式，使代码看起来像同步代码。

[click]4. 事件驱动 (Event Loop),JavaScript 异步的底层机制依赖事件循环（Event Loop）。任务分为：

同步任务：立即执行，进入主线程。
异步任务：放入任务队列，等待主线程空闲后执行。
-->

---
layout: fact
---

# Libraries{.important-text-3em}
Front-end Frameworks

<!--
And now, 我们来聊下工具库中的前端开发框架
-->

---
glow: left
---

<div w="40%">

## FED Frameworks <sup text-purple bg-purple:15 px1.5 rounded text-sm>Official</sup>

<div mt-2 />

<v-clicks>

- React
- Vue.js
- Angular

</v-clicks>
<div mt-4 />
<v-click>
<<< ./react.demo.jsx {monaco-write}{height:'100px'}
</v-click>
<v-click>
<<< ./vue.demo.js {monaco-write}{height:'100px'}
</v-click>
<v-click>
<<< ./angular.demo.ts {monaco-write}{height:'100px'}
</v-click>
</div>

<FrameWorksIframe />

<!--
stateofjs 数据图表展示
2024年不出意外的使用top1还是react,但其中大事件是 Vue 在受访者中的原始使用率超过了 Angular。尽管 Angular 在今年取得了进步，但 Vue 还是保住了第二的位置，而且在留存率方面也获得了三位之多！ 与此同时，Svelte 的使用率也在稳步上升，在总体正面评价方面继续名列前茅。

[click] React React 是一个由 Meta（前 Facebook） 开发并维护的开源 JavaScript 库，主要用于构建用户界面（UI）。它通过高效的虚拟 DOM（Virtual DOM）和组件化设计，使得开发复杂的、动态的 Web 应用变得更加高效和模块化。

- 组件 React 应用是由一个个可复用的组件组成，每个组件描述了用户界面的某一部分。组件可以嵌套和组合
- 虚拟dom，当状态更新时，React 会计算出新旧 DOM 的差异（Diffing Algorithm），然后最小化实际 DOM 操作。
- JSX， JSX 是一种 JavaScript 的语法扩展，用于描述 UI 的结构。允许你在 JavaScript 中嵌入 HTML，最终会被编译为 React.createElement() 调用
- 状态管理， 自带的状态管理工具Context API，用于组件树中跨层级传递数据。或第三方库Redux、Mobx、Zustand
- 生命周期,简要分为分为三个阶段，1、组件挂载；2、组件状态更新；3、组件卸载
- 路由， React Router 是 React 的标准路由库，用于在单页面应用（SPA）中管理页面导航。
- Hook React Hooks 是 React 16.8 中引入的新功能，使函数组件可以使用状态和生命周期功能。如useState\useEffect\useLayoutEffect\useTransition 等常用于封装公共的功能逻辑。

[click] Vue 是一个用于构建用户界面的 渐进式 JavaScript 框架。它的设计理念是尽量简单、灵活和高效，使开发者能够快速上手并进行复杂的应用开发。以下是 Vue.js 的主要特点及框架说明：

- 渐进式框架 渐进式 意味着 Vue 可以根据需求逐步引入功能，从一个简单的库扩展成完整的框架。可以单独使用 Vue 来构建小型应用，也可以结合其生态系统构建复杂的大型应用。
- 声明式渲染, Vue 使用模板语法（基于 HTML）来声明式地描述 UI。使用 双花括号插值语法 {{ }} 绑定数据到 DOM。
- 组件化开发, 应用由一个个小型、独立且可复用的组件组成。每个组件包含自己的模板、逻辑和样式，便于模块化开发。
- 响应式数据绑定 vue2 defineProperty vue3 Proxy
- 指令系统,  提供一组内置指令，用于操作 DOM：
v-bind：绑定属性或样式
v-model：双向数据绑定
v-if/v-else/v-show：条件渲染
v-for：列表渲染
v-on：事件绑定
- 路由与状态管理,Vue Router：用于构建单页应用的路由管理。
Vuex：集中式状态管理库，适合大型应用。

vue2对比vue3,性能提升、composition API 优与Options API 复用独立逻辑组件、响应式系统优化、组件与模版灵活性、生命周期钩子函数、生态系统
生态周边介绍

[click] Angular
相信有外企工作经历的同学一定有上手过angular这个开发框架

由 Google 维护的一个开源前端框架，用于构建现代的、动态的、单页应用（SPA）。Angular 的目标是提供一个全面的解决方案，集成路由、状态管理、表单处理、 HTTP 请求、依赖注入等功能，使得开发者能够快速构建复杂的 Web 应用。

Angular 是基于 TypeScript 开发的，采用了许多现代的前端开发概念，如模块化、组件化、声明式模板等。
Angular 是由 Google 维护的一个开源前端框架，用于构建现代的、动态的、单页应用（SPA）。Angular 的目标是提供一个全面的解决方案，集成路由、状态管理、表单处理、 HTTP 请求、依赖注入等功能，使得开发者能够快速构建复杂的 Web 应用。

- 单页应用,Angular 专为构建单页应用（SPA）设计，能够在用户与应用交互时，动态地更新页面而无需重新加载整个页面。
它通过路由管理不同的视图和 URL，使得用户体验更加流畅。
- 基于组件的架构,Angular 强调组件化开发。应用由多个组件组成，每个组件都有自己的模板（HTML）、样式（CSS）和逻辑（TypeScript）。
组件是构建 UI 的基本单元。
- 模版与数据绑定,Angular 使用 声明式模板 来描述视图，利用 数据绑定 来连接数据与视图。
支持 双向数据绑定、属性绑定、事件绑定 等。
- 类型安全与TS支持,Angular 是用 TypeScript 编写的，TypeScript 是 JavaScript 的超集，添加了静态类型检查、类、接口等特性，使得代码更易于维护、调试和重构。
- 依赖注入系统,Angular 提供了 依赖注入（DI） 容器，使得服务和组件之间的依赖关系更加解耦，增强了应用的可维护性。
DI 使得在组件和服务之间传递数据变得更加简单和灵活。
- 路由,Angular 内建强大的 路由模块，支持基于 URL 的导航、懒加载、路由守卫、嵌套路由等功能。
路由管理允许你在不同的组件间导航，并控制不同的视图和状态。
- 表单处理,提供了两种表单处理方式：模板驱动表单和响应式表单。
模板驱动表单：更简洁，适合简单的表单。
响应式表单：基于代码控制，适合复杂的表单，支持验证、动态表单等功能。
- HTTP客户端，简化请求发送与响应处理，拦截器等处理
- 单元测试工具

对比React 是一个 UI 库，专注于构建用户界面，提供了灵活的组件和状态管理，但需要开发者自行选择其他库（如 React Router、Redux、Axios）来完成路由、状态管理和 HTTP 请求等功能

React 是一个 UI 库，专注于构建用户界面，提供了灵活的组件和状态管理，但需要开发者自行选择其他库（如 React Router、Redux、Axios）来完成路由、状态管理和 HTTP 请求等功能

对比Vue 是一个渐进式框架，核心轻量，功能可逐步扩展，适合从小到大的项目，Angular 是一个完整的框架，适合大型应用开发，并且提供了更强大的 TypeScript 支持和企业级功能。

无论个人所在的项目以及中心是否要求系收敛web开发框架，但就技术发展来讲，百花齐放是常态，我们应该对主流的框架都有基础的了解，再熟练深入的掌握1-2种，甚至更多，这样在技术选型时有足够多的储备
-->

---

# <span op50>Frame comparison...</span> <b v-click font-800>For reference only</b>

<div scale-75 origin-left-top mb--14 mt--3 class="[&_td]:py1 [&_table]:w-130%" v-click="2">
<v-clicks>

| Frameworks | <span i-logos-react inline-block align-middle /> | <span i-logos-vue inline-block align-middle /> | <span i-logos-angular inline-block align-middle /> |
| --- | --- | --- | --- |
| <span i-game-icons-boss-key inline-block align-middle /> Creator | {@facebook} | {@yyx990803} | {@angular} |
| <span i-fluent-code-js-16-regular inline-block align-middle /> Language | <span i-skill-icons-javascript inline-block align-middle />  <span i-skill-icons-typescript inline-block align-middle /> | <span i-skill-icons-javascript inline-block align-middle />  <span i-skill-icons-typescript inline-block align-middle /> | <span i-skill-icons-typescript inline-block align-middle /> |
| <span i-fad-hardclipcurve inline-block align-middle /> difficulty | <span i-fluent-color-star-16 inline-block align-middle /><span i-fluent-color-star-16 inline-block align-middle /><span i-fluent-color-star-16 inline-block align-middle /> | <span i-fluent-color-star-16 inline-block align-middle /><span i-fluent-color-star-16 inline-block align-middle /> | <span i-fluent-color-star-16 inline-block align-middle /><span i-fluent-color-star-16 inline-block align-middle /><span i-fluent-color-star-16 inline-block align-middle /><span i-fluent-color-star-16 inline-block align-middle /> |
| <span i-mingcute-performance-fill inline-block align-middle /> Performance | Efficient | Efficient | Medium |
| <span i-cib-event-store inline-block align-middle /> Store | Redux & Zustand | Vuex & Pinia | RxJs |
| <span i-logos-npm-icon inline-block align-middle /> Community | Huge | Sound | Integrated |
| <span i-lucide-files inline-block align-middle /> Files | ~42KB | ~20KB | ~500KB |

</v-clicks>
</div>
<v-click>

[Choose The Framework That Best Suits Your Team](https://github.com)

</v-click>

<!--
[click] 简介

[click] 开发语言

[click] 性能对比

虚拟DOM
React-高效：通过 Diff 算法更新 DOM
Vue-高效：更轻量化的虚拟 DOM
Angular-不使用虚拟 DOM，但有优化策略

初始加载时间
react-较快：库较轻
vue-快：框架轻量化
angular慢：框架较大，初次加载文件体积大

动态更新
react-高效
vue-高效
angular-较慢：双向绑定增加性能开销

[click] 状态管理

[click] 社区生态

适用场景
react-成熟且灵活
vue-快速构建
angular-内置功能强大，适合复杂业务
-->

---
layout: fact
---

# Libraries{.important-text-3em}
Build Tools

<!--
And now, 我们来聊下工具库中的构建工具
-->

---
glow: left
---

<div w="40%">

## FED Frameworks <sup text-purple bg-purple:15 px1.5 rounded text-sm>Official</sup>

<div mt-2 />

<v-clicks>

- Webpack
- Vite

</v-clicks>
<div mt-4 />
<v-click>
<<< ./webpack.demo.js {monaco-write}{height:'140px'}
</v-click>
<v-click>
<<< ./vite.demo.ts {monaco-write}{height:'200px'}
</v-click>
</div>

<BuildingToolsIframe />

<!--
[click] webpack一个现代的、强大的 JavaScript 模块打包工具，用于将开发人员的代码和依赖项（如 JavaScript、CSS、图片等）打包成可在浏览器中运行的静态资源。Webpack 提供了模块化开发和优化打包的能力，帮助开发者将多个文件和代码模块进行整合，减少浏览器加载时间，提高应用的性能

核心功能：
- 模块化加载
- 打包，代码分割、按需加载
- 预处理器支持，如babel、Sass、Less
- 资源加载
- 模块优化和代码分割
- 构建优化，Tree-shaking，代码压缩、缓存优化

工作流程：
- 1、入口文件
- 2、解析模块
- 3、打包输出
- 4、插件扩展，CSS提取、图片优化、环境变量配置等

优点：
- 模块化开发：支持多种模块格式（ES6、CommonJS 等），代码组织更清晰。
- 优化和性能：自动进行 tree-shaking、代码分割、缓存优化，提升应用性能。
- 支持多种格式：支持 JavaScript、CSS、图片、字体等文件类型。
- 插件和扩展：提供丰富的插件支持，扩展功能灵活。

[click] 一个新兴的前端工具，用于开发和构建现代 JavaScript 应用。Vite 的目标是提供高性能和即时热更新的开发体验，同时优化开发和构建速度，使项目更高效。与 Webpack 相比，Vite 采用了不同的架构设计，重点于提升构建速度和更现代化的开发方式

核心特点
- 高速构建与开发体验 HMR
- 极简配置
- 性能优化 tree-shaking、代码分割
- 继承现代框架和工具 支持ESM与TS
- 增强型插件系统

-->

---
layout: fact
---

# Web Developer{.important-text-3em}

<h3 relative v-click><span op50>Become a real </span><span text-lime font-hand text-4xl v-mark.underline.lime.delay400="1">developer</span></h3>

<!--
如何成为一个web开发者？（开放式话题）

除了掌握上述的基本知识点以外，还需要

- 开发环境搭建（云内），IDE及配套离线插件、制品npm库
- 项目工程初始化，存量脚手架、自定义模版
- 功能开发，理解一个正常需求
- 测试环境接口调试（系统服务、eaip服务），多数系统的难点（做好异常处理、版本降级管理）
- 功能测试（移动端应用的同学应该进场掉头发，机型问题兼容）
- 构建打包（确认分支，屏蔽测试数据、审核环境变量标识、关闭调试工具）
- 生产环境部署 (激动的心，颤抖的手)

现阶段行里的前端基础建设还处于起步阶段，研发阶段的多个环节缺失标准规范指引，同一个团队里仅eslint的配置可以多达3-4套，多数A类研发同学身兼数职，无暇顾及厂商人员的编码实现细节。

就以我们项目组的建设来看，推荐储备自有研发资源，逐步清理厂商资源，如人力紧张的情况下，建议通用型组件、工具库、核心逻辑由A类人员完成编码实现，保证对代码掌控度，配套的纯页面逻辑交由厂商完成。

逐步建立前端工程化体系，如
- 工程化技术组（专精构建工具研发与适配）
- 通用工具库技术组（web\mobile\pad等多端UI组件库、微前端建设、指标监控埋点工具等）
- 可视化技术组（图表、报表、驾驶舱）
- 性能技术组（专精应用上线后的性能检测、优化）
-->

---
glow: bottom
---

# Coding in Cib

<div grid="~ cols-3 gap-2" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-violet:15 text-violet1>
    <div text-2xl i-ph-gift-duotone text-violet mb2 />
    <div>Environment</div>
    <div text-xs op50>Environmental preparation</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-2xl i-ph-target-duotone text-orange mb2 />
    <div>initial</div>
    <div text-xs op50>Project initialization</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-rose:15 text-rose1>
    <div text-2xl i-ph-hand-heart-duotone text-rose mb2 />
    <div>Requirements</div>
    <div text-xs op50>Deep understanding</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-green:15 text-green1>
    <div text-2xl i-ph-hand-waving-duotone text-green mb2 />
    <div>Third Party</div>
    <div text-xs op50>Related systems</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-2xl i-ph-users-three-duotone text-blue mb2 />
    <div>Building</div>
    <div text-xs op50>Package and build applications</div>
  </div>
</div>

<div absolute bottom-10 v-click>
<div op75 mb1>Recommendations </div>

- [The open source ](https://github.com/)<span op50 text-sm> - Github</span>
- [MDN](https://developer.mozilla.org/en-US/)<span op50 text-sm> - Mozilla</span>

</div>

<!--
我想，大家都有各自参与开源的动机与目标。也许是为了提升自己的能力，也许更实际一点，是为了更好的工作机会，也可能单纯只是想要让这个世界变得更好，等等。开源是一个多元的社区，这些都是很正常的动机。但不同的动机也许会导致对开源有不同的期待。这里我想要讲的是，调整好对于开源的期待，可以让我们更好的融入这个社区，也让我们更好的享受开源的乐趣。

[click] 开发环境搭建
[click] 初始化项目工程
[click] 深度理解需求
[click] 关联系统联调
[click] 应用构建

[click] 推荐阅读
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Thank you!

Presentation Slides by [Slidev](https://sli.dev)

<!--
感谢各位同学参加今天的前端基础技术课程，可以到成都会展场地技术服务中心找到我。再次感谢！
-->
