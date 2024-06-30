---
layout: center
colorSchema: dark
transition: fade-out
mdc: true
title: The Set Theory
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

<!--
各位同事晚上好，今天由我来为大家分享一例基于canvas与requestAnimation实现的动画效果（绘制仿生树枝）
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
Working at {NuxtLabs}<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://POfeiY.me" target="_blank" class="border-none! font-300">POfeiY.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4 />
  <div><a href="https://m.webtoo.ls/@POfeiY" target="_blank" class="border-none! font-300">POfeiY@webtoo.ls</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/18592121?v=4" rounded-full w-35 abs-tr mt-32 mr-30 />

<div flex="~ gap2">

</div>

<!--
我是任职于技术服务中心兴智汇团队的余自立，主要负责的项目有兴智汇底座JS-SDK、兴智汇通用组件（如云相册、通用表单、统一待办等组件），也常年混迹于开源社区，欢迎各位同事联系我交流技术与感情。

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
So, as you see, I am work on multiple open source and also created a few you might already using, for example Vitest, the unit testing framework.

As someone who have been working on open source for a while and made a living, I have to say that open Source is so much fun and rewarding. I believe many of you wanted to contribute to open source, or already doing so. However, there are so many factors that affects that if a open source project would become popular, or "successful" -- depends on how you define it. For example, the quality of the code, the documentation, the community, the marketing, and so on. All of them are important and related to each other. There isn't really a golden rule to make a open source project successful.

So here, I'd like to share some of my experience and ideas on creating and maintaining open source projects, combining with some observations that I have learned from the community.

[click] Hopefully it can help you start your own open source journey, or find some new ideas to improve your existing projects.

Open Source also a quite big topic that I can't really cover everything in one talk. So I am trying to break it down and talk about different aspects of open source in each talk and make them a series.

[click] Today, it's the Part 1, let's talk about - [click] "The Set Theory".

I know, it might sounds a bit random, and you might wonder - what does that mean? Let mew try to explain.

So let's say we already have an Open Source project, or planning to create one. To be a little bit practical, say, we might want to gain certain amount of adoption, or just that we want people to use, and to enjoy our hard work.
-->

---
clicks: 4
growX: 0
growY: 0
---

## Consider your Target Users

<div
  v-click="1"
  absolute w-200 h-200 left-20 border="~ gray/50 rounded-full" bg-gray:20 text-5xl
  flex="~ items-center justify-center"
  transition-all duration-500
  :class="$clicks === 4 ? 'scale-100' : 'scale-80'"
>
  Target Users
  <div
    v-click="2"
    absolute w-70 h-70 left-65 top-10 border="~ blue rounded-full"
    bg-blue:20 text-4xl text-blue flex="~ items-center justify-center"
    transition-all duration-500
    :class="$clicks >= 3 ? 'scale-100' : 'scale-80'"
  >
    Actual Users
  </div>
</div>

<!--
One of the things to consider is how we picturing our target users. For example, like "Is my tool for end users or developers?", "Or is it for Vue developers or for React?", etc.

[click] We know the fact that among all of the target users, only a portion of them will become our actual users.

[click] In order to gain more users to our project, we can try to convert more potential users to the actual users. [click] Maybe by doing more marketing or polishing. In that case, the amount of the target users you have, actually becomes the upper limit of how many actual users you could possibly have.

On the other hand, we can also try to find a way to expand our target users to include more people. [click] And naturally, you will also have more converted users from it.

Under this idea, let's take a look at some examples of how we can do that.
-->
