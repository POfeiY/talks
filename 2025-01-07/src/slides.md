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

---

## HTML Timeline

<HTMLTimeline mt2 />

<div mt6 />

<v-clicks>

- `HTML2` released as IETF RFC 1866
- `HTML3` fully developed and standardized by W3C
- `HTML4` published as a W3C Recommendation
- `HTML5` published as a W3C Recommendation

</v-clicks>

<!--
[click] HTML发展时间线：
[click]1、1995年11月24日，HTML 2.0作为IETF RFC 1866发布，追加了表单文件上传、表格等功能标签
[click]2、1997年1月14日，HTML 3.2作为W3C推荐标准发布，这是一个完全由W3C开发并标准化的版本，但该版本持续很短时间就被替代了
[click]3、1997年12月18日（同一年），HTML4.0 作为W3C推荐标准发布，禁用过期标签元素，采取许多特定浏览器元素类型和属性，并放弃推荐原网景提供的视觉标记功能
[click]4、2014年10月28日 HTML5作为W3C推荐标准发布，意味着HTML5的标准化完成，也就是我们现在所见到HTML5的版本主体

自此web全新时代，后续伴随移动应用及设备的推广应用，web技术应用扩展到金融、医疗、体育、教育等各个行业！
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

---
layout: fact
---

# CSS3

<div v-click relative text-3xl mt--3><span v-mark.teal.highlight.delay100.op10="1" text-teal>"Magical Magical World"</span></div>

<div v-click text-2xl  mt5 text-shadow-2xl op75>Simple to define & Render magic effects</div>

<IconsBurst />

<!--
[click]Cascading Style Sheets 是一种样式表语言，用来描述文档的呈现方式，如元素在屏幕、音视频等其他媒体上的元素如何被渲染的定义。

[click]CSS的语法概念相对会比较纷杂一些，比较重要的概念如：语法形式、选择器优先级、继承、流式布局、盒模型、弹性盒子、网格布局、媒体查询、动画等等。

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
      <div>Inherited & Cascading</div>
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
CSS（层叠样式表）用于设置网页的样式及布局——比如，可以更改内容的字体、颜色、大小以及间距，或是将其分列，或是添加动画及赋予内容其他装饰性的特征。本模块将通过阐述相关的基本原理，展示语法示例，为精通 CSS 提供一个友好的开端。

[click]CSS3的核心基础有：

[click] 1、语言语法，结构形式，其基本目标是让浏览器以指定的特性去绘制页面元素，比如颜色、定位、装饰。CSS 的语法反映了这个目标，由下面两个部分构建：属性（一个可读名称的标识符） & 值（描述浏览器渲染引擎如何处理该特性）

[click] 2、继承特性、层叠特性
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

## Code

<div mt-2 />

```css {2|1-4|*}{at:2}
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

- CSS declarations <sup>specific values</sup>
- CSS declaration blocks
- CSS rulesets
- CSS statements

</v-clicks>

</div>
</div>

<!--
层叠样式表其基本目标是让浏览器以指定的特性去绘制页面元素，比如颜色、定位、装饰。CSS 的语法反映了这个目标，由下面两个部分构建：属性与值

[click] 样式声明：CSS 的核心功能是将 CSS 属性设定为特定的值。一个属性与值的键值对被称为“声明”（declaration） 。浏览器的渲染引擎会计算页面上每个元素都有哪些声明，并且会根据结果绘制元素，排布样式。在 CSS 中，无论是属性名还是属性值都是对大小写不敏感的。属性与值之间以英文冒号隔开。属性与值前面、后面与两者之间的空白不是必需的，会被自动忽略。

[click] 声明会按照块的形式被组合。块有时会嵌套，所以开始与结束大括号必须要匹配。

[click] 规则集：如果样式表只能为每个页面元素添加一个声明，那就没有真正发挥出它的价值。其真正的目标是为文档不同部分添加不同的声明。为此，CSS 可以在声明块前面放置选择器（selector)，选择器用来选择页面多个元素的条件。一对选择器与声明块称为规则集（ruleset)，常简称为规则（rule)。

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

## Code

<div mt-2 />

```css {2|1-4|*}{at:2}
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
[click] 优先级：浏览器通过优先级来判断哪些属性值与一个元素最为相关，从而在该元素上应用这些属性值。优先级是基于不同种类选择器组成的匹配规则。优先级就是分配给指定的 CSS 声明的一个权重，它由匹配的选择器中的 每一种选择器类型的数值决定。而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。

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

## Code

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
- grouping selector
- combinator selector
- pseudo selector

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

[click] 分组选择器,, 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。常用于复用样式规则集

[click] 组合选择器,又分为后代组合器(组合器选择前一个元素的后代节点)、子代选择器( 组合器选择前一个元素的直接子代的节点)、兄弟组合选择器等, 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。

[click] 伪类 & 伪元素选择器, 支持按照未被包含在文档树中的状态信息来选择元素；伪选择器用于表示无法用 HTML 语义表达的实体。如聚焦的、悬停的、激活的、以及子代第一个元素、奇数个元素等

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

[click]外边距区域（margin area）由边框开始向外延伸的间隙
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

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Flexible Box" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-material-symbols-align-justify-flex-start text="[0.8em]" /></span>

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

[click] 行网格, 定义网格行
[click] 列网格，定义网格列

-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<CssModule name="CSS3/Responsive Design" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-mdi-responsive text="[0.8em]" /></span>

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

响应式设计是通过使用灵活的布局、相对单位、媒体查询等技术，确保网页在各种设备上的良好体验。通过结合 Flexbox、CSS Grid 和 媒体查询 等现代技术，开发者可以创建出适应不同屏幕尺寸的布局，从而优化用户体验。

响应式设计的常用实践
[click]  媒体查询的使用, 响应式设计会根据设备宽度进行调整。最常见的设备断点
[click]  流式布局 (Fluid Layouts),流式布局允许页面的元素根据容器的宽度自动调整大小，而不使用固定的宽度
[click]  使用视口单位 (Viewport Units),视口单位（vw, vh, vmin, vmax）基于视口（viewport）大小，允许元素相对于视口的尺寸进行调整，也是目前移动端H5适配使用较多的方案。

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

[click] 流式布局允许页面的元素根据容器的宽度自动调整大小，而不使用固定的宽度，如百分比。
-->

---
layout: fact
---

# Atomic CSS{.important-text-3em}
The approach to CSS architecture

<!--
这里想扩展聊一下CSS原子化方案，相信有不少的项目组已经有试用。

原子化 CSS 是一种 CSS 的架构方式，它倾向于小巧且用途单一的 class，并且会以视觉效果进行命名。有些人可能会称其为函数式 CSS，或者 CSS。市面上有不少的工具框架，如Tailwind CSS、Windi CSS

其中市面上常用的tailwind CSS、windi CSS以及unocss

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
通过配置代码，自动给最外层的div生成外边距margin-25rem

-->

---
layout: fact
---

<Circles />

<div flex="~ items-center gap-3" fixed right-0 top-0 rounded-bl-2rem p5 backdrop-blur-md>
  <div i-token-branded-game text-5xl />
  <div flex="~ col">
    <span text-sm op50 hover:underline target="_blank">Game</span>
    <span text-1xl hover:underline>
      Avatar Circles
    </span>
  </div>
</div>

<!--
问答小游戏
[click] Q1:HTML5的正式版本是哪一年发布（2014年10月28日）
[click] Q2:课程中CSS原子化有提到两个工具和一个引擎，是哪两个工具和哪个引擎呢？

-->

---
layout: fact
---

# JavaScript{.important-text-3em}
The most fun language in the world

<!--
JavaScript（JS）是一种程序设计语言，通常用于客户端（client-side）的网页动态脚本，当然也可以在 Node.js 环境的运行时，用于服务器端。

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

[click] 字符 文本值的字符序列
[click] 整型 整数或浮点数
[click] 布尔
[click] undefined 未定义值
[click] null 表示空值的关键字
[click] Symbol 唯一且不可变的数据类型
[click] BigInt 任意精度的整数
[click] Object

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

const PI = 3.14;
const x;         // SyntaxError: Missing initializer in const declaration

const y = 100;
y = 200;  // TypeError: Assignment to constant variable

console.log(a4);  // undefined
var a4 = 10;

// let ｜ const  not hoisting
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

[click]变量提升,用 var 声明的变量会被提升，意味着你可以在该变量所在的作用域的任意地方引用该变量，即使还没有到达变量声明的地方。由于存在变量提升，一个函数中所有的 var 语句应尽可能地放在接近函数顶部的地方。

[click]作用域： 全局作用域：在脚本模式中运行的所有代码的默认作用域。

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
  console.log(result); // output: Data loaded
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

讲解异步前，我们先了解下同步的概念：

[click]同步 (Synchronous)， 任务按顺序执行，一个任务完成后才会开始下一个任务。长时间任务会阻塞后续操作。

[click]异步 (Asynchronous)，任务不会阻塞代码执行，耗时任务会通过回调机制完成。使用事件循环管理异步任务。

[click]异步编程的主要方法:1、回调函数 (Callback)，通过将函数作为参数传递的方式，异步任务完成后调用回调函数，回调地狱问题。
2、Promise ES6 引入的机制，用于处理异步操作的链式调用，避免了回调地狱。
3、ES8 引入的语法糖，基于 Promise 的异步处理方式，使代码看起来像同步代码。

[click]4. 事件驱动 (Event Loop)
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
首先我们来看下右侧的 stateofjs 数据图表展示
2024年不出意外的使用top1还是react,但其中大事件是 Vue 在受访者中的原始使用率超过了 Angular。尽管 Angular 在今年取得了进步，但 Vue 还是保住了第二的位置，而且在留存率方面也获得了三位之多！ 与此同时，Svelte 的使用率也在稳步上升，在总体正面评价方面继续名列前茅。

[click] React React 是一个由 Meta（前 Facebook） 开发并维护的开源 JavaScript 库，主要用于构建用户界面（UI）。它通过高效的虚拟 DOM（Virtual DOM）和组件化设计，使得开发复杂的、动态的 Web 应用变得更加高效和模块化。

[click] Vue 是一个用于构建用户界面的 渐进式 JavaScript 框架。它的设计理念是尽量简单、灵活和高效，使开发者能够快速上手并进行复杂的应用开发。以下是 Vue.js 的主要特点及框架说明：

- 渐进式框架 渐进式 意味着 Vue 可以根据需求逐步引入功能，从一个简单的库扩展成完整的框架。可以单独使用 Vue 来构建小型应用，也可以结合其生态系统构建复杂的大型应用。
- 声明式渲染, Vue 使用模板语法（基于 HTML）来声明式地描述 UI。使用 双花括号插值语法 {{ }} 绑定数据到 DOM。
- 组件化开发, 应用由一个个小型、独立且可复用的组件组成。每个组件包含自己的模板、逻辑和样式，便于模块化开发。
- 响应式数据绑定 vue2 defineProperty vue3 Proxy
- 指令系统,  提供一组内置指令，用于操作 DOM：

vue2对比vue3,性能提升、composition API 优与Options API 复用独立逻辑组件、响应式系统优化、组件与模版灵活性、生命周期钩子函数、生态系统
生态周边介绍，如ssr Nuxt.js\vueuse工具库

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
[click] 我们来简单的做个框架对比，以上数据供参考哈

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

## Build Tools <sup text-purple bg-purple:15 px1.5 rounded text-sm>Official</sup>

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

首先我们来了解下webpack

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

[click] 一个新兴的前端工具，用于开发和构建现代 JavaScript 应用。Vite 的目标是提供高性能和即时热更新的开发体验，同时优化开发和构建速度，使项目更高效。与 Webpack 相比，Vite 采用了不同的架构设计，重点于提升构建速度和更现代化的开发方式。一开始就将应用中的代码区分为依赖和源码两类，依赖为开发时不需要变动的纯js,甚至一些大模块的依赖处理代价非常高，vite使用esbuild预构建，相比一般打包预构建块10倍以上；源码则通过基于路由拆分的模块，按需加载，仅需要在浏览器请求源码时进行按需转换并提供。

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

-->

---
glow: bottom
---

# Coding in Cib

<div grid="~ cols-3 gap-2" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-violet:15 text-violet1>
    <div text-2xl i-carbon-development text-violet mb2 />
    <div>Environment</div>
    <div text-xs op50>Environmental preparation</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-2xl i-streamline-startup text-orange mb2 />
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
在云内环境开发需要提前准备什么呢？

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

Presentation Slides by @891034

<!--
本次课程的内容到这里就全部完成了
-->
