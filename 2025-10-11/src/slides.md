---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
lang: en
title: Vite DevTools
---

![](/y-logo-animated.svg){.w-30.mt--10.mb-5}

---
layout: intro
class: pl-25
glowSeed: 14
---

<h1 font-serif>Zili Yu</h1>

<div class="[&>*]:important-leading-10 opacity-80">

Core team member of {XzhLabs}<br>
Creator of {xzh-jssdk} {invoker} {cli-tools}<br>
Maintainer of {CloudAlbum} {Backlogs} {FormCreater} {Schedule}<br>
Based in ChengDu

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

<!--
...

各位领导以及评委老师下午好，我是来自技术服务中心兴智汇团队的余自立，目前任职岗位是软件开发工程师，也是行里前端专家委员会的成员。目前担任团队前端技术负责人，主要工作是通用组件小组的项目管理与开发工作，以及初级研发人员培养工作。主导技术组件项目有统一待办、云相册、通用表单、日程/任务等组件，以及承担员工作业平台、大风控尽职调查PAD应用、零售线上理财室、柜面会计登记簿等项目的前端工程化建设。
-->

---
layout: center
---

<h1 important-text-5xl font-serif>Team Projects</h1>

<!-- 简单介绍下我个人主导的前端项目 -->

---
layout: none
class: h-full
---

<div h-full grid="~ rows-2">

<div p14>

  <h2 text-4xl mb-2 v-click="1">General Developer Works</h2>

  <div text-2xl text-amber v-click="3">"Works for BA"</div>

  <div mt-6 v-click="4">
    <div flex="~ gap-2 items-center" text-2xl>
      <div i-material-symbols-cloud-sync-outline w-8 />
      <div i-material-symbols-list-alt-check-outline-sharp w-8 />
      <div i-material-symbols-forms-apps-script w-8 />
      <div i-material-symbols-fact-check-outline-sharp w-8 />
      <div i-material-symbols-library-books-outline w-8 />
      <div i-logos-react w-8 />
      <div i-logos-vue w-8 />
      <div i-logos-unocss w-8 />
      <div i-logos-vitejs w-8 />
      <div i-logos-vitest w-8 />
      <div op50>...</div>
    </div>
    <div mt3 op75>
      Multi-channel scene developer!
    </div>
  </div>

</div>

<div p13 border="t main">

  <h2 text-4xl mb-2 v-click="2">Special DevTools</h2>

  <div text-2xl text-lime v-click="5">"Tools for developer"</div>

  <div v-click="6" mt-6 flex="~ gap-2 wrap">
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-material-symbols-power-plug-outline-sharp/> XZH Jssdk</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-material-symbols-grid-view-outline/> XZH Cli</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-unocss/> Invoker</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-material-symbols-blood-pressure-outline-sharp/> Playground</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><img src="/node-modules-inspector.svg" w-5/> Topic Sharing</div>
    <div op50>...</div>
  </div>
</div>
</div>

<!--
考虑到时间有限，这里就选取2个通用组件进行说明：

首先简述下针对业务场景研发的通用组件产品；

1、云相册，基于兴智汇底座承建的照片与视频功能类组件，支持用户在移动端与PC端共享素材，支持素材的水印、剪裁等功能。该组件使用场景一是开放标准JS-SDK接口供业务侧的H5微应用快速集成和调用，以支持业务办理环节过程采集照片与视频素材，同时提供水印定位与快速上传，目前已累计集成到40+多例微应用中，月均交易量48.7w笔；场景二为提供手机移动端与员工作业平台pc端应用，支持照片/视频数据多端共享，目前也收录为员工作业平台的通用组件提供能力。

2、统一待办，员工作业平台系统与兴智汇基础平台均集成该组件，支持各场景按需发起待办/待阅等类型消息，提醒用户及时关注待处理事项，移动端支持离线推送。目前该组件已纳入企业级基础组件范围，公文、微办公等渠道均已接入。月均交易量达698.5w笔。同期也上线了移动审批功能，支持接入统一待办的系统快速集成扩展业务工作流的移动审批的能力，目前正配合发规部推进存量接入系统的移动审批改造工作，已完成整体进度62%。

接着来讲解下针对研发场景的工具库：

3、兴智汇JSSDK是是一个monorepo npm工具库，该库作为企业级组件发布在行里开源库，同时制品发布在二方库累计下载量9K。该工具库配套兴智汇底座运行的工具库，兼具类型定义、单元测试、调用示例、API文档等功能。。

4、兴智汇CLI是一个微应用开发模版工具库，旨在为兴智汇平台的微应用开发者提供一个快捷的工程启动器，目前已在前端开发平台发布制品，可通过前端开发平台快速集成使用。模版库提供了如webpack-ts-react、webpack-ts-vue3、vite-ts-react、vite-ts-vue3等工程模版，适配兴智汇微应用以及员工作业平台微应用开发场景，项目组可以根据人员配置和框架熟悉程度进行选择

5、 Invoker是一个UE贯标的UI库，根据行内贯标规范改造的UI组件库

6、同时积极参与行内技术部落主题分享活动（如前端技术基础、可视化、工程化、工具库开发等），累计已完成4次主题分享。2025年主导完成兴生力前端技术概论的主题授课，以及负责总行研发子序列考试大纲与试卷的编制的工作。
-->

---
class: text-2xl
glow: right
---

# Personal Insight

<div grid="~ cols-[max-content_min-content_auto] items-center gap-x-10 gap-y-10" py10>
  <div flex="~ gap-2 items-center" text-blue relative v-click>
    <div i-ph-stairs-duotone text-2xl />
    <span>Entry Barrier</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Easy to get started, simple config, explainable in one sentence</div>

  <div flex="~ gap-2 items-center" text-lime relative v-click>
    <div i-ph-book-bookmark-duotone text-2xl />
    <span>Intuitive Design</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Meets user expectations and intuition, good user experience</div>

  <div flex="~ gap-2 items-center" text-amber relative v-click>
    <div i-ph-magnifying-glass-duotone text-2xl />
    <span>Transparency</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Transparent to the internal state, easy to debug and optimize</div>

  <div flex="~ gap-2 items-center" text-orange relative v-click>
    <div i-ph-puzzle-piece-duotone text-2xl />
    <span>Composability</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Decoupled modules, easy to combine and extend</div>

  <div flex="~ gap-2 items-center" text-purple relative v-click>
    <div i-ph-plugs-duotone text-2xl />
    <span>Extensibility</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Flexible plugin system and customizations</div>
</div>

<div absolute top-67 left-9 w-225 h-15 border="2 amber rounded-xl" bg-amber:10 z--1 v-click />

<!--
最后谈一些我对前端项目开发工作的理解：

1、简易上手，配置简单、一目了然

不论是在开发前端应用或工具库，入口具备引导性很重要，类似某水果机，基础的操作无需手册指导，用户进入系统后下意识就可以显目的找到功能入口在哪里，该怎么用，该怎么配置。

2、【直观的设计】满足用户的期望和直觉，良好的用户体验
一个功能模块想做到“面面俱到”，上线后却被指做“面面俱不到”。一个功能页面恨不得全部都是交互入口（表单控件、提交按钮、跳转icon等），新用户进入系统后完全不知道聚焦在哪里。

而目前行里不在少数的系统在功能设计上一直处理“堆砌状态”，先不管用户是否用不用上，全放到用户首页，给用户造成非常大的信息干扰。作为一个专业的应用开发工程师，按设计稿完成功能开发仅是开始，研发与自测过程需代入用户视角，明显的功能交互体验问题需要我们去及时提醒和修正，并同步给业务方，特别是厂商人员支持的项目，A类人员要重点关注交付功能的易用性，及时准确的提出意见和解决方案，不要只关注功能上线。

我们的业务方、产品经理、设计师都需要作为开发者的我们，去了解和去熟悉，用户体验不仅是BA、产品经理、设计师的责任，作为前端开发者的我们，也是重要的环节。

3、内部状态（操作状态）透明，易于用户观测、调试和优化

应用功能中状态的透明性，比如一个文件批量上传和下载功能，是仅仅只给一个loading状态呢？还是给一个任务进度、网络状态、预估耗时等动态信息提示呢？显而易见是后者体验好，对于耗时较长的操作一定要给用户显示的心理预估，以及错误重试机制

一个应用模块或工具库的运行时状态需对开发者透明，以便开发者获取状态对代码问题进行状态跟踪以及优化。该思路类似module-analysis依赖分析器，让开发者可视构建产物中有哪些包，以便准确的制定包体积优化策略。

4、【可组合性】模块揭耦，易于扩展和组合

当你作为一个通用组件或大型应用中通用hook的开发者，要尽可能地保证设计的公共方法、公共模块解耦，让开发者可以按场景需求进行自由组合，以及扩展

5、灵活的插件系统和自定义扩展

迭代研发推进过程中，某个主线功能的能力势必会进行扩展，在不侵入主线功能逻辑的前期下，要支持插件式扩展，为开发者提供如构建生命周期的hook监听、模块注入、手动拆分等能力。如我行已发布的前端开发平台就已支持该特性，为行内前端开发者提供了一个具备灵活插件系统的应用开发平台

最后就是关于行内技术沉淀(含技术和人才积累)的个人思考，行里现在的环境对于技术的感知，个人理解像是一种类似“快餐式”的需求。一个重大项目临时需要某个技术，火急火燎的安排人员去调研、同业方案征求、厂商能力引入，但项目一上线后就结束了，只剩下一个代码仓库，而后文档不全、厂商变动、A类研发参与度较低等因素都直接导致本来花费大成本的技术投入没有什么成果沉淀，随着时间流逝该代码仓库的代码也越来越难啃，到后期同样的技术问题或稍变种的场景就需要重头再来。

对此我个人的建议是：

第一，A类人员要深度且全程参与，不能只承担“转发”或点流程的角色，尤其是在前端这个技术版本更迭快速的领域此类问题更为凸显。

第二，技术视野拓展的能力，依托各个业务条线场景做技术拓深为未来做准备，保持对新技术的敏感度和掌握度，逐步摆脱对厂商的依赖；

第三、同业交流，增加与同业如招商银行、建行等技术交流活动，同步业态发展生态，收获具备参考价值的业界解决方案；

第四，技术自驱力，自强才是硬道理，强化A类研发人员的在技术深度上的培养和沉淀（尤其对于专业研发人才，降低管理类和综合类的工作分配比例），逐渐形成技术人才覆盖前端领域多个基础建设，如工程化、可视化、流媒体、AI应用等场景，专精专能；再搭配人力部门制定的人才梯次建设体系，不断补充吸收新鲜血液，为我行科技条线建立一支全面的前端技术人才队伍。

以上是我的发言，请各位评委指导点评
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

<h1 font-serif important-text-5em>Thank You</h1>
