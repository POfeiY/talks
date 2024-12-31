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

前端技术发展从基本的页面标签、样式、动作脚本编写，演变成现代的前端组件化、前端可视化、前端工程化，配套周边生态的演化（如微前端、包管理器、构建工具），已经发展成为一个具备完整体系的技术领域。前端同学可以自建服务server，操作数据库，定义标准接口，输出各式各样的前端市场物料供BA与SA做方案预研。

举个栗子，计财部业务老师想要一个数据驾驶舱功能，按传统的前端开发方案，编写页面结构、样式、脚本、接口联调（在完全没有存量组件库支持的情况下，一个中级的前端工程师需要2-3提供演示demo）,但如果在现在的前端开发环境下小半天足矣（甚至还可以完成公共组件的单元测试），类似的构建工具、包管理、可视化组件、mock-server等工具可大幅度降低demo研发时长，当然在固定场景类型的情况还可以将页面组件进行拆分，以便其他场景快速复用搭建页面。甚至接入copilot、AWS、通灵异码等AI辅助编码工具，让编码过程极度丝滑。

当然这也往往会给一些开发者造成误区，“前端真的很简单”。这里呢，澄清一下前端入门是相对好上手，“即编即所得”的特性让初学者在上手练习时会很有学习成就感，但随着学习阶梯的曲线陡峭度变化，AST、GPU、模型、算法等知识体系注入，相信在座的前端同学深有体会。

接下来呢，我们将进入前端的基础知识内容部分。

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

<v-clicks>

- HTML `2.0` released as IETF RFC 1866
- HTML `3.0` fully developed and standardized by W3C
- HTML `4.0` is released
- HTML `5.0` is released

</v-clicks>

<!--
[click]
1、1995年11月24日，HTML 2.0作为IETF RFC 1866发布，追加了表单文件上传、表格等功能标签
2、1997年1月14日，HTML 3.2作为W3C推荐标准发布，这是一个完全由W3C开发并标准化的版本
3、1997年12月18日，HTML4.0 作为W3C推荐标准发布，禁用过期标签元素，采取许多特定浏览器元素类型和属性，并放弃推荐原网景提供的视觉标记功能
4、2014年10月28日 HTML5作为W3C推荐标准发布，意味着HTML5的标准化完成完成

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
<div v-click="2" transition duration-800 delay-50 :class="$clicks < 3 ? 'translate-y--160px': ''">

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
HTML4与HTML5的区别主要体现在语义化
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
layout: center
glow: bottom
---

<div flex="~ col items-center justify-center w-full">

<h2 flex="~ col" text-center>
<div text-center flex="~ col gap-2" transition duration-500 :class="$clicks < 2 ? 'translate-y-40' : ''">
  <span
    flex="~ gap-2 items-center justify-center"
    text-hex-639 transition duration-500 text-1.5em
    :class="$clicks < 1 ? 'scale-150 translate-y' : ''"
  >
    <div i-vscode-icons-file-type-css />
    CSS3 W3C
  </span>
  <span v-click op75 forward:delay-400 text-2xl>released <TimeAgo date="2021-06-07" /></span>
</div>
</h2>

<img src="/CSS3.png" v-click mt4 w-60 rounded-lg shadow forward:delay-400 />
</div>

<!--
Cascading Style Sheets 是一种样式表语言，用来描述文档的呈现方式，如元素再屏幕、纸质、音频等其他媒体上的元素如何被渲染的定义。

(备注： 在 2019 年之前，W3C 发布的是带有版本号的 HTML5 标准。自 2019 年 5 月 28 日起，W3C 宣布 WHATWG 动态标准为 HTML 的唯一版本。)

CSS的语法概念相对会比较纷杂一些，比较重要的概念如：语法形式、选择器优先级、继承、流式布局、盒模型、弹性盒子、网格布局、媒体查询、动画等等。当然原生css在编写上的效率以及复杂场景的复用性受限于语法特性，所以我们可以引入一些样式预处理器、如less、sass、postcss等工具库，支持变量、混合、嵌套、运算、转义、函数、作用域等功能特性;或选择如tailwind、unocss等工具辅助我们开发，提升编码效率的同时提高代码复用度，特别适合喜好使用预设、快捷键位的同学。当然如果还未尝试过以上工具的同学也可以联系我获取一些上线项目代码示例。

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
  >Integrations Challenges</div>

  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-ph-arrows-split-duotone text-red />
      <div>Grammatical form</div>
    </div>
    <div text-sm op60>Seamlessly support both modes, no flashes</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-ph-newspaper-duotone text-amber />
      <div>Cascading ｜ Inherited</div>
    </div>
    <div text-sm op60>Support dynamic known icons, e.g. from Nuxt Content</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-ph-speedometer-duotone text-green />
      <div>Flow Layout</div>
    </div>
    <div text-sm op60>No compromise on performance</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-ph-compass-tool-duotone text-blue />
      <div>Media Query</div>
    </div>
    <div text-sm op60>Support loading user-provided custom icons</div>
  </div>
</div>

<div w-1px h-full border="l main" translate-x-25 v-click />

<div flex="~ col gap-6" py2 translate-x-25>
  <div op50 font-bold uppercase text-sm tracking-0.2em v-after>Solutions</div>

  <div flex="~ col" mt4 v-click>
    <div>Flexible box</div>
    <div flex="~ gap-1 items-center" text-green ml3>
      <div i-ph-check-duotone />
      Dynamic Icons
    </div>
    <div flex="~ gap-1 items-center" text-rose ml3>
      <div i-ph-x-duotone />
      No SSR
    </div>
     <div flex="~ gap-1 items-center" text-rose ml3>
      <div i-ph-x-duotone />
      No Custom Icons
    </div>
  </div>

  <div flex="~ col" v-click>
    <div>Grid</div>
    <div flex="~ gap-1 items-center" text-green ml3>
      <div i-ph-check-duotone />
      SSR / CSR
    </div>
    <div flex="~ gap-1 items-center" text-green ml3>
      <div i-ph-check-duotone />
      Perfoment
    </div>
    <div flex="~ gap-1 items-center" text-rose ml3>
      <div i-ph-x-duotone />
      No Dynamic Icons
    </div>
  </div>
</div>

</div>

<!--
Finally, let's talk about Nuxt. Our goal with Nuxt is to provide seamless solutions that cover as many use cases as possible.

[click] Let's quickly go over the integration challenges we faced to make Nuxt Icon comprehensive.

[click] First, we need to support both SSR and CSR, as they are core features of Nuxt. We want to ensure that icons render without any flashes for the best user experience.

[click] We also want to support dynamic icons, such as those from Nuxt Content, allowing you to use icons from your content data.

[click] Performance is crucial, so we need to ensure that our solution doesn't compromise on speed.

[click] Lastly, we want to support custom icons. In addition to the thousands of icons from Iconify, users should be able to load their custom icons using the same syntax.

With these requirements in mind, [click] let's compare the solutions we discussed earlier.

[click] For dynamic icons, the Iconify Runtime seems to be the only option. However, it doesn't work perfectly with SSR and doesn't support custom icons, as the requests go to Iconify's servers, which aren't aware of our local setup.

[click] On the other hand, CSS Icons are performant and work well with SSR, but they don't support dynamic icons.

[pause a bit]
-->

---
layout: quote
disabled: true
---

# 🙋 Heard about the new ESLint <span text-hex-8080f2 font-bold><span v-mark="0">Flat Config</span></span>?

<!--
Before we start, I'd like to do a quick survey here. If you have heard about the new ESLint Flat Config, could you please raise your hand for me?
-->

---
layout: quote
disabled: true
---

# 🙋 Using <span text-hex-8080f2 font-bold>Flat Config</span> already?

<!--
OK, And how many of you are already using or migrated to the flat config?

Alright, that's more than I was expected. It's pretty cool. Thank you!

For those who haven't on the Flat config yet, in today's talk, I am here to tell you why you should :)
-->

---

<div grid="~ cols-2 gap-6" h-full>
<div>

## Legacy Config <sup text-base op50 translate-y--2 inline-block>eslintrc config</sup>

<div mt-4 h-42>

<v-clicks at="3">

- Multiple sources `.eslintrc`, `.eslintrc.js`, `.eslintrc.json`, `package.json`, etc.
- Convention based `extends`
- Package name based `plugins`
- Inheritance tree can be complex

</v-clicks>

</div>
<div v-click="1" transition duration-800 :class="$clicks < 3 ? 'translate-y--160px': ''">

```json {*|3-6|7-10|*}{at:4}
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "vue",
    "n"
  ],
  "rules": {
    "vue/html-indent": ["error", 2]
  },
  "overrides": [
    // ...
  ]
}
```

</div>
</div>
<div>

## Flat Config

<div mt-4 h-42>

<v-clicks at="3">

- Single source `eslint.config.js` <sup op75>& `.cjs` `.mjs`</sup><br><span op0>-</span>
- Explicit native imports
- Plugins are objects <sup op75>capability to rename plugins</sup>
- Composable, easier to trace back

</v-clicks>

</div>
<div v-click="2" transition duration-800 delay-50 :class="$clicks < 3 ? 'translate-y--160px': ''">

```js {*|2-3,8-9|4-5,11-14|*}{at:4}
// eslint.config.js
import typescript from '@eslint-typescript/eslint-plugin'
import eslint from '@eslint/js'
import n from 'eslint-plugin-n'
import vue from 'eslint-plugin-vue'

export default [ // export an array of configs
  eslint.configs.recommended,
  ...typescript.configs.recommended,
  {
    plugins: {
      vue,
      node: n, // do a rename here
    },
    rules: {
      'vue/html-indent': ['error', 2]
    }
  },
  // ...
]
```

</div>
</div>
</div>

<!--
In case you have never heard about it or haven't dig into the docs yet. Here, let me make a quick comparison between the legacy eslintrc config [click] and the new flat config for you. [click]

To differentiate between those two configuration formats is rather straightforward. [click] The legacy config is named with `.eslintrc` that supports various extensions which might also read from your `package.json`. The flat config, on the other hand, would only be loaded from `eslint.config.js`, a JavaScript config file as the single source of truth.

[click] When it comes to reusing the shared config, the legacy config format implicitly uses the conventional-based `extends` property to load that config from your local `node_modules`. You would need to learn the convention a little bit to know how it resolves. While in the flat config we use the native import, where it's more explicit, and gives a lot more controls to you.

[click] For plugins, it used to take an array of strings, which is again, convention-based and coupled with the plugins' package name. Now in the flat config, it takes a named object for plugins. This means you can now rename plugins easily, or switch to a fork without being forced to change every rule in your config.

[click] Also, the inheritance nature of `extends` might result in a very complex tree structure as the shared configs can also have nested `extends` inside. In the flat config, it gets simplified a lot, where you explicitly import the shared configs as multiple objects or arrays, and compose them into a single flat one.
-->

---

## Flat Config

<Timeline mt2 />

<v-clicks>

- RFC was created at January 2019
- Experimental in `v8.21.0`
- Stable in `v8.45.0`
- Default in `v9.0.0`
- JavaScript config with full control
- Simplified inheritance and overriding
- Flexible, Dynamic, Customizable

</v-clicks>

<!--
[click] For a little bit more context, Here is a graph I drew to demonstrate the timeline. While the flat config might sound new to some of you, it has actually been planned for 5 years already. [click] The RFC was created in January 2019, [click] first implementation available in v8.21.0 as experimental, which was two years ago.  [click] It became stable in v8.45.0, [click] and then became the default recently in v9.0.0. In between, the ESLint team has published multiple blog posts to explain the reasons why they want to introduce the new format, and shared the roadmap of rolling out. That's a lot of effort spent across this 5 years plan - huge respect to the ESLint team.

So, as we mentioned in the previous slide, [click] the biggest benefit of flat config, is that now it's in JS where you have full control. [click] It uses native import to resolve the plugins and configs, making the inheritance and overriding a lot simplified. [click] Because it's fully in JavaScript, shared configs can be factory functions that take users' options; and users can have a lot more capability to do the customizations towards their specific needs.
-->

---

# Migration [`@eslint/migrate-config`](https://www.npmjs.com/package/@eslint/migrate-config)

CLI tool to convert legacy config to flat config

```bash
npx @eslint/migrate-config .eslintrc.json
```

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt-4 v-click>

```json
// .eslintrc.json
{
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:ava/recommended",
    "prettier"
  ],
  "plugins": ["prettier", "import"],
  "rules": {
    "prettier/prettier": 2,
    "ava/no-ignored-test-files": 0,
    "ava/no-import-test-files": 0,
    "import/no-unresolved": [
      2,
      {
        "ignore": ["ava", "got"]
      }
    ],
    "import/no-unused-modules": 2,
    "import/order": [
      2,
      {
        "newlines-between": "never"
      }
    ]
  }
}
```

<span i-carbon:arrow-right mt-40 />

```js
import { FlatCompat } from '@eslint/eslintrc'
import _import from 'eslint-plugin-import'
// eslint.config.mjs
import prettier from 'eslint-plugin-prettier'

const compat = new FlatCompat()
export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:ava/recommended',
    'prettier'
  ),
  {
    plugins: {
      prettier,
      import: _import,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 2,
      'ava/no-ignored-test-files': 0,
      'ava/no-import-test-files': 0,

      'import/no-unresolved': [2, {
        ignore: ['ava', 'got'],
      }],
      'import/no-unused-modules': 2,
      'import/order': [2, {
        'newlines-between': 'never',
      }],
    },
  },
]
```

</div>

<!--
Before we talk about the new exciting stuff, let me first quickly go through the tools for migrating your legacy config to the new flat config, in case you might need them.

We have a CLI `@eslint/migrate-config` that automatically convert your legacy config file to flat config. [click] Some runtime utilities for compatibility will be introduced automatically along the way as well.

I would recommend you check the ESLint docs and migration guide for more detailed instructions.
-->

---
layout: fact
---

# Toolings{.important-text-3em}
New tools and possibilities with Flat Config

<!--
And now, let's talk about the interesting new tools and possibilities that are enabled by this new format.
-->

---
glow: left
---

<div w="40%">

## Config Inspector <sup text-purple bg-purple:15 px1.5 rounded text-sm>Official</sup>

<div mt-4 />
<v-click>

```bash
eslint --inspect-config
```

</v-click>
<div mt-4 />

<v-clicks>

- Visualize your config
- Understand the composition
- In-place documentations
- File path tester

</v-clicks>
<div mt-4 />
<v-click>

<<< ./eslint.demo.config.ts {monaco-write}{height:'220px'}

</v-click>
</div>

<InspectorIframe />

<div v-show="false">
<!-- This block is for type discovery -->

```ts {monaco}
import antfu from '@antfu/eslint-config'
```

</div>

<!--
The first one is the ESLint Config Inspector - a visualized DevTools, that allows you to inspect and play with your final resolved configs.

[click] You can try it by running `eslint --inspect-config` in your CLI under the project root where you have the flat config file, and it will open a browser page with UI, like the one you see on the right.

[click] So, the first thing it does is to render each config item you have. You can see all configs listed here, because it's flat. Here I have a rather complex config setup with many config items. But with the name provided by each config, you can easily see and understand the purpose for each of them.

[click] You can also expand each item to see how it contributes to the final config, like how many rules enabled, or what's their target file types, etc.

[click] In each rule, you can also see their options, a short description, and also, a link to their documentation page.

[click] Since in ESLint, you can have different rule sets that apply to different file types or are more granular to their exact file path. In the config inspector, you can also enter the file path to test how rules are enabled for that file.

In another tab, you can also browse each rule that is available, given the plugins you have installed. You can filter them and see which rules you are using, which rules you don't, which are recommended ones, and which are deprecated.

[click] Here, I have my config preset as an example. The code frame here reflects my eslint config file on the disk. The config is a factory function that takes some rather high-level options. With the config inspector, we could see how it was resolved based on the options we provided. We could also try to change the options and see how it affects the result. For example, I could also provide it the path of my tsconfig, which will enable the type-aware rules for me automatically.
-->

---

## Flat Config Utils <sup text-teal bg-teal:15 px1.5 rounded text-sm>Community</sup>

<Repo name="antfu/eslint-flat-config-utils" op50 />

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt2>
<div v-click>

```ts {*|*|7-9|10-17}{at:3}
import eslint from '@eslint/js'
import unocss from '@unocss/eslint-plugin'
import vue from 'eslint-plugin-vue'
import typescript from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...typescript.configs.recommand,
  ...await unocss(),
  {
    files: ['*.vue'],
    ...vue.configs['vue3-recommand'],
    rules: {
      ...vue.configs['vue3-recommand'].rules,
      'vue/html-indent': ['error', 2]
    }
  }
]

// (pesudo code for demo)
```

</div>
<span i-carbon:arrow-right ma v-click />
<div v-after>

```ts {*|1,7|8-10|11-21}{at:3}
import eslint from '@eslint/js'
import unocss from '@unocss/eslint-plugin'
import { compose } from 'eslint-flat-config-utils'
import vue from 'eslint-plugin-vue'
import typescript from 'typescript-eslint'

export default compose(
  eslint.configs.recommended,
  typescript.configs.recommand, // auto spread
  unocss() // auto await in parallel
)
  .append( // chainable extensions
    vue.configs['vue3-recommand']
  )
  // override any configs with their name or index
  .override('vue', {
    files: ['*.vue'],
    rules: {
      'vue/html-indent': ['error', 2]
    }
  })
```

</div>
</div>

<!--
To make config customization easier, I also made a small library called `eslint-flat-config-utils`.

[click] For example, here is a flat config we might have. Depending on how each shared config is constructed, some might be a plain config object, some might be an array, and some might be a constructor that returns an object, an array or even a Promise. When you use them together, it's usually your responsibility to join them together as a single array.

[click] With the config utils, [click] I made a utility function called `compose`, [click] which will automatically resolve the different types of configs, resolve the promise and merge them together.

[click] It also provides some chainable actions where you could insert extra configs anywhere you want, or override some config without the need to handle the merge manually.
-->

---

## ESLint Typegen <sup text-teal bg-teal:15 px1.5 rounded text-sm>Community</sup>

<Repo name="antfu/eslint-typegen" op50 />

<v-clicks>

![](/eslint-typegen.png){.w-200.rounded-lg.shadow.border.border-main}

</v-clicks>

<!--
And then, thanks to the flexibility and also the full context available in the flat config, it also make the type generation possible. [click]

Simply wrap the entire config array you exported with the typegen function, it will generate a local .d.ts file based on all the plugins you have installed. This provides you with autocomplete and typechecks for all the rules are you using.
-->

---
layout: fact
---

# One for All{.important-text-3em}
One config for all projects

<!--
So here, I'd like to bring back the title - One for All.

With the maximized flexibility and customizability - it's now possible to have a single shared config that covers all different types of projects.
-->

---

<div grid="~ cols-2 gap-8">

<div flex="~ col gap-2">

### Legacy Config

```json {*|3-7|*|10-14|*}{at:1}
{
  "extends": [
    "@antfu/eslint-config",
    "@antfu/eslint-config-ts",
    "@antfu/eslint-config-vue",
    "@antfu/eslint-config-vue-ts"
    // ...provide every combination?
  ],
  "rules": {
    // ...a lot overrides
    "indent": ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    "jsx-indent": ["error", 4],
    "vue/indent": ["error", 4]
  }
}
```

</div>
<div flex="~ col gap-2">

### Flat Config

```ts {*|4-5|*|6-8|*}{at:1}
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  stylistic: {
    indent: 4
  }
  // ...
})
```

<div flex="~ col gap-2" mt-3>

<div v-click class="slidev-vclick-target" :class="$clicks === 1 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
Shared configs can take user options.
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 2 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
One single config, adapts to all projects.
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 3 ? 'text-green' : ''" >
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="5">
    Minimal configures as Prettier.
  </span>
</div>

<div v-click class="slidev-vclick-target">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="5">
    Powerful and customizable as ESLint.
  </span>
</div>

</div>
</div>

</div>

<!--
Here we can do a quick comparison to show what I mean.

[click] In the new flat config, a shared config can be a factory function that takes user options, which we couldn't do in the legacy config. Imagine if I want my config to work in both TypeScript and non-TypeScript projects, Vue and non-Vue projects, I will need to do a monorepo to publish configs for different combinations. As you can see, it doesn't scale well, we are doubling the amount of combinations for each option.

[click] The flat config allows you to provide semantic options to toggle each feature dynamically. Making one single config able to adapt to different projects.

[click] Because of that, we could also have high-level abstraction to absorb the underlying complexity, and provide a minimal configuration interface like Prettier, where end users don't even need to worry about the underlying details, [click] but still have all the control to do so when they really want to.
-->

---

# Project-aware Configs

<div text-gray flex="~ items-center gap-1" v-click>
Example: <div i-logos-nuxt-icon inline-block /> Nuxt ESLint
</div>

<div grid="~ cols-2 gap-4" h="80%">
<div
  v-click="1"
  flex="~ col gap-2 items-center justify-center"
  transition duration-500
  :class="$clicks < 2 ? 'scale-130 translate-x-55' : ''"
>
  <img src="/nuxt-eslint.png" w-90 rounded-lg shadow border="~ main" />
  <a href="https://eslint.nuxt.com" text-sm>eslint.nuxt.com</a>
</div>

<div flex="~ col items-center justify-center" forward:delay-500 pb-10 v-click>

```ts
// Generated by Nuxt based on your project
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom config goes here
)
```

</div>
</div>

<!--
Flat config also makes it possible for meta-frameworks to provide project-aware configs.

[click] For example, in Nuxt, we have file-based routing, auto-imported components, server API directories, etc. Files under different folders or different names might have different purposes and different constraints.

So in Nuxt we had the Nuxt ESLint module [click] that generates a sub ESLint config file based on the user's project setup. Where users can extend from and keep adding their custom rules.

This is just one direction of the possibilities with flat config we are currently exploring, but we believe there would be many more interesting approaches coming from the community.
-->

---
layout: fact
---

# ESLint is More than a Linter{.important-text-3em}
Mature and powerful AST Toolkit

<!--
Another topic I'd like to bring up today, is the fact that ESLint is much more than a Linter.

To me, I see ESLint as a mature and powerful AST Toolkit that has a large ecosystem on its back.
-->

---

# <span op50>ESLint can be a...</span> <b v-click font-800>Formatter</b>

<div grid="~ cols-2 gap-4" h="80%">
<div flex="~ col items-center justify-center">
  <img src="/eslint-stylistic.png" w-80 v-click />

  <div op75 text-lg v-click>
    Collection of stylistic ESLint rules.<br>Formatting and linting in one go.
  </div>

  <a href="https://eslint.style" text-sm v-click>eslint.style</a>
</div>

<div flex="~ col items-center justify-center" v-click>

<div flex="~ gap-2 items-center">
  Configs in <div i-logos-visual-studio-code inline-block /> VS Code
</div>

```json
{
  // Auto fix on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },

  // Silent the stylistic rules in you IDE,
  // but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "@stylistic/*", "severity": "off" }
  ]
}
```

</div>
</div>

<!--
I want to say that ESLint can also be a [click] Formatter.

This is certainly not new, as many projects have been using ESLint that way since the very beginning.

While this topic is actually a bit controversial, which you might hear people saying you should use a dedicated formatter like Prettier or dprint. To me, I see this all down to that those stylistic rules for ESLint take a lot of maintenance effort. Last year, ESLint and the TypeScript ESLint teams decided to deprecate those stylistic rules from the core. [click] And then, I initiated the ESLint Stylistic project, [click] gathering all those stylistic rules for JS, TS, and JSX into [click] this organization and making a community keep maintaining them. I keep using ESLint as formatter as I see it much more flexible and customizable than Prettier due to ESLint's nature.

[click] If you are using VS Code, you can see `editor.codeActionOnSave` to auto-fix eslint errors on save. And use `eslint.rules.customizations` to silent stylistic rules in your IDE so they work more like a formatter. For other code editors, I believe there are similar configs for doing the same.
-->

---

# <span op50>ESLint can be a...</span> <b v-click font-800>Codemod</b>

<div v-click>

<repo name="antfu/eslint-plugin-command" />

<video src="/eslint-plugin-command-half.mov" mt-4 w-130 saturate-110 rounded shadow border="~ main" controls />

</div>

<!--
One ESLint rule is essential a function that takes the code and AST, reporting errors with optional fix information.

This means that ESLint can also be a nice tool for [click] codemod.

For example, [click] I made `eslint-plugin-command` to do on-demand micro-codemod.

As you can see in the video, we could put a magic comment saying `to-function` right above an arrow function. Upon saving, the arrow function will be automatically converted into the function declaration, without you to manually move things around.

Similarly, we can also sort an object or array with `keep-sorted`, make sure an array is unique with `keep-unique`... etc.

If you learn a little bit about AST, it shouldn't be hard to write your one-off codemod rules to migrate your codebase as well.
-->

---

# <span op50>ESLint can be a...</span> <b v-click font-800>Linter for other Languages</b>

<div scale-75 origin-left-top mb--28 mt--3 class="[&_td]:py1 [&_table]:w-130%" v-click="2">
<v-clicks>

| Language | Plugin | Maintainers |
| --- | --- | --- |
| <span i-logos-typescript-icon inline-block align-middle /> TypeScript | [`@typescript-eslint`](https://typescript-eslint.io) | {@typescript-eslint} {@bradzacher} {@JoshuaKGoldberg} |
| <span i-logos-vue inline-block align-middle /> Vue | [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue) | {@ota-meshi} {@vuejs} |
| <span i-logos-svelte-icon inline-block align-middle /> Svelte | [`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte) | {@ota-meshi} {@sveltejs} |
| <span i-logos-astro-icon invert hue-rotate-180 inline-block align-middle /> Astro | [`eslint-plugin-astro`](https://github.com/ota-meshi/eslint-plugin-astro) | {@ota-meshi} |
| <span i-logos-json invert inline-block align-middle /> JSON | [`eslint-plugin-jsonc`](https://github.com/ota-meshi/eslint-plugin-jsonc) | {@ota-meshi} |
| <span i-vscode-icons-file-type-light-yaml inline-block align-middle /> YAML | [`eslint-plugin-yml`](https://github.com/ota-meshi/eslint-plugin-yaml) | {@ota-meshi} |
| <span i-logos-toml invert hue-rotate-180 inline-block align-middle /> TOML | [`eslint-plugin-toml`](https://github.com/ota-meshi/eslint-plugin-toml) | {@ota-meshi} |
| <span i-logos-graphql inline-block align-middle /> GraphQL | [`graphql-eslint`](https://github.com/dimaMachina/graphql-eslint) | {@dimaMachina} |
| <span i-vscode-icons-file-type-html inline-block align-middle /> HTML | [`html-eslint`](https://github.com/yeonjuan/html-eslint) | {@yeonjuan} |
| <span i-vscode-icons-file-type-mdx inline-block align-middle /> MDX | [`eslint-mdx`](https://github.com/mdx-js/eslint-mdx) | {@JounQin} |
| <span i-logos-prettier inline-block align-middle /> Other formats* | [`eslint-plugin-format`](https://github.com/antfu/eslint-plugin-format) | {@antfu} |

</v-clicks>
</div>
<v-click>

[ESLint RFC #99 - ESLint Language Plugins](https://github.com/eslint/rfcs/blob/main/designs/2022-languages/README.md)

</v-click>

<!--
And finally, I'd like to mention that ESLint can also [click] lint for many other languages other than JavaScript.

[click] For example, we know we have `@typescript-eslint` to make ESLint understand TypeScript.

[click] We have `eslint-plugin-vue` for Vue Single file component, [click] `eslint-plugin-svelte` for Svelte component [click] and `eslint-plugin-astro` for Astro.

[click] We could also have `eslint-plugin-jsonc` to lint JSON files. Which could be very handle to be used to sort certain field in certain JSON files. For example, I use it to keep my dependencies list in my `package.json` always sorted.

[click] Similarly, we have the support for YAML and [click] TOML files. As you can see, many of those plugins are maintained by Ota Meshi - he is truly amazing!

[click] Then we have `graphql-eslint` for GraphQL by Dima, [click] `html-eslint` for HTML by Yeon Juan [click], and `eslint-mdx` by Joun Qin.

[click] I also made a `eslint-plugin-format` to use Prettier or dprint to format files like CSS that are not yet have an ESLint integration.

That's only a few I could list here. [click] You can also check the ESLint's RFC #99, where they are trying to make ESLint more language agnostic to support the linting for more languages easier.
-->

---
disabled: true
---

# <span op50>ESLint can be a...</span> <b v-click font-800>AST Toolkit</b>

---
layout: fact
---

# One for All{.important-text-3em}

One config for all projects<br>
One tool for _everything*_

<!--
To summarize today's topic, I'd like to say that ESLint makes it possible to be One for All in two aspects. That you can have one config for all projects, and then one tool for everything related to code checking and modifications.
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
clicks: 1
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<Repo name="antfu/eslint-config" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-carbon-star-filled text="[0.8em]" /> 4.1k</span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# @antfu/eslint-config

<div mb-10>

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

</div>

## Quick Start

<div mt-2 />

```bash
npx @antfu/eslint-config@latest
```

<div mt-6 />

## Features

<div mt-2 />

- Auto fix for formatting <sup>aimed to be used standalone **without** Prettier</sup>
- Reasonable defaults, best practices, only one line of config
- Work with TypeScript, JSX, Vue, JSON, YAML, Toml, Markdown, Out-of-box.
- Opinionated, but very customizable
- ESLint Flat config, compose easily!
- Optional React, Svelte, UnoCSS, Astro, Solid support
- Optional formatters support for formatting CSS, HTML, XML, etc.
- **Style principle**: Minimal for reading, stable for diff, consistent
  - Sorted imports, dangling commas
  - Single quotes, no semi
  - Using ESLint Stylistic
- Respects `.gitignore` by default
- Supports ESLint v9.0+ or v8.50.0+

</div>
</div>

<!--
If you want to learn more, you can check my personal ESLint config, where I used all the tricks I mentioned today.

I am honestly a bit flattered to see that even tho I didn't intend to have this config used by the others, it ends up being quite popular to have 3 thousand stars and over 30 thousand projects using it on GitHub.

[click] I wasn't trying to make you use my config, but hopefully, it can be a good reference for you to build your own shared config that is both powerful and flexible.
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Thank you!

Slides on [antfu.me](https://antfu.me)

<!--
That's all for my talk today. You can find the slides on my website antfu.me. Thank you so much!
-->