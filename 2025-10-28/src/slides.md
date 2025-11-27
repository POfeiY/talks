---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
lang: en
title: Scratchjr
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
Maintainer of {CloudAlbum} {FormCreater} {Schedule}<br>
Based in ChengDu

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://github.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/POfeiY" target="_blank" class="border-none! font-300">POfeiY</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/18592121?v=4" rounded-full w-35 abs-tr mt-32 mr-30 />

<!--
...

For today's topic, let's get straight to the point. Let's talk about...
-->

---
layout: center
glow: bottom
class: text-center
---

<p text-6xl>Scratchjr Animation</p>

<div abs-br mx-10 my-11 flex="~ gap-2 items-center" text-left op75>
  <img src="/anthropic-logo.svg" h-8 alt="CibConf">
  <div>
    <div text-lg>Scratchjr</div>
    <div text-xs opacity-75>Nov. 28th, 2025</div>
  </div>
</div>

<!--
**(讲者台词)**

今天由Tony老师为大家带来Scratchjr的课程内容

课程目标：

1.  **知识目标**：
    *   复习并熟练使用移动、外观、声音等基础模块。
    *   学习并掌握“发送消息”和“接收消息”模块，理解其在角色互动中的作用。
    *   学习如何添加和切换不同的背景。
2.  **能力目标**：
    *   能够独立完成一个包含多个角色和场景的动画故事。
    *   提升逻辑思维能力，理解“事件-响应”的编程模式。
    *   激发创意，鼓励学生设计自己的故事结尾。
3.  **情感目标**：
    *   在充满乐趣的故事情景中学习，提升对编程的兴趣。
    *   通过合作与分享，体验创作的成就感。

-->

---
class: p0
glow: bottom
---

<div class="grid grid-cols-[3fr_4fr] gap-4 h-full">

  <div ma flex="~ col gap-2 items-center">
    <p text-4xl>Scratchjr Animation</p>
    <div text-orange text-sm bg-orange:10 px2 rounded>Progress</div>
  </div>

  <div border="l main" h-full py10 flex="~ col gap-6 justify-center">
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Introduce</div>
        <div op65 text-sm>
          introduce & showcase yourself
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Guide</div>
        <div op65 text-sm>
          Preface Lesson
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Learning</div>
        <div op65 text-sm>
          Course content.
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Just do it</div>
        <div op65 text-sm>
          Hands-on practice
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Summarize</div>
        <div op65 text-sm>
          Summary presentation
        </div>
      </div>
    </div>
  </div>
</div>

<!--

**老师**：“小朋友们好！今天我们要去一个非常酷的地方参加一个派对！你们猜猜是谁的派对？是我们的小彩龙Morphy！而且，她的生日派对不在家里，也不在公园，而是在……（展示太空背景图片）……神秘的外太空！Morphy想邀请她的好朋友团团和外星人Zippy一起来参加。我们能帮帮她吗？”

**互动**：引导孩子们讨论太空里会有什么？派对上可以做什么？激发他们的想象力。

主要有以下几个内容

[click] 介绍我们自己

And then [click] 课程前序讲解

[click] 课程主要内容

[click] 动手实践

[click] And finally, 思考总结，回顾学习的内容

-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<div flex="~ items-center" w-140 p-8><img src="/s1.png" w-120 /></div>
<div flex="~ col gap-2 justify-center">

# Scene 1st

Preparing to depart for space

</div>
</div>

<!--

#### **第一幕：出发！Morphy的太空飞船 (10分钟)**

*   **场景**：夜晚城市 (Night City)
*   **角色**：Morphy, 飞船 (Rocket)

**任务**：让Morphy走进飞船，然后飞船起飞！

1.  **搭建场景**：
    *   背景选择“夜晚城市”。
    *   添加角色“Cat” (Morphy) 和 “Rocket”。调整它们的大小和初始位置。

2.  **编程挑战1：让Morphy上飞船**
    *   **目标**：点击绿旗后，Morphy走到飞船门口，然后消失。
    *   **Morphy的脚本**：
        *   `绿旗` -> `向右移动` (调整步数，刚好走到飞船门口) -> `消失`

3.  **编程挑战2：发送起飞信号！**
    *   **老师**：“Morphy上船后，要怎么告诉飞船‘我准备好了，可以起飞啦！’呢？对了，她可以发送一个秘密信号！我们来学习一个新魔法！”
    *   **引入“发送消息”模块**：
        *   在Morphy的脚本最后，添加 `发送消息` (可以选择橙色)。
    *   **Morphy的最终脚本**：
        *   `绿旗` -> `向右移动` -> `消失` -> `发送消息` (橙色)

4.  **编程挑战3：飞船接收信号并起飞**
    *   **目标**：飞船平时不动，直到接收到Morphy的“秘密信号”才起飞。
    *   **引入“接收消息”模块**：
        *   **飞船的脚本**：
            *   `接收消息` (橙色) -> `向上移动` (飞出屏幕)

**学生动手**：引导孩子们独立完成第一幕的编程，并测试效果。

-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<div flex="~ items-center" w-140 p-8><img src="/s2.png" w-120 /></div>
<div flex="~ col gap-2 justify-center">

# Scene 2nd

Space travel, searching for friends

</div>
</div>

<!--

#### **第二幕：太空漫游，寻找朋友 (15分钟)**

*   **场景**：太空 (Space)
*   **角色**：飞船, 小狗Taco (穿着宇航服), 外星人Zippy

**任务**：飞船到达太空，先后遇到Taco和Zippy，并邀请他们参加派对。

1.  **搭建新场景**：
    *   点击“+”号，添加第二个场景。
    *   背景选择“太空”。
    *   添加角色“飞船”、“小狗Taco”、“外星人Zippy”。把Taco和Zippy藏在屏幕两侧。

2.  **编程挑战1：飞船登场并发送邀请**
    *   **目标**：飞船从屏幕下方飞入，停在中间，然后Morphy（通过说话气泡）发出邀请。
    *   **飞船的脚本**：
        *   `绿旗` -> `向上移动` (从屏幕外飞到中间) -> `说“Taco, Zippy, 来参加我的生日派对吧！”` -> `发送消息` (红色)

3.  **编程挑战2：朋友们收到邀请，开心地跳出来！**
    *   **目标**：Taco和Zippy收到邀请信号后，从屏幕两侧跳到中间。
    *   **Taco的脚本**：
        *   `接收消息` (红色) -> `向左移动` -> `跳跃`
    *   **Zippy的脚本**：
        *   `接收消息` (红色) -> `向右移动` -> `旋转`

**学生动手**：让孩子们自己设计朋友们出场的方式，比如Taco可以打滚，Zippy可以旋转。

-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<div flex="~ items-center" w-140 p-8><img src="/s3.png" w-120 /></div>
<div flex="~ col gap-2 justify-center">

# Scene 3rd

Start a birthday party

</div>
</div>

<!--

#### **第三幕：生日派对开始啦！ (10分钟)**

*   **场景**：月球 (Moon)
*   **角色**：Morphy, Taco, Zippy, 蛋糕 (Cake)

**任务**：大家一起在月球上开派对，播放音乐，围着蛋糕跳舞。

1.  **搭建最终场景**：
    *   添加第三个场景，背景选择“月球”。
    *   添加角色Morphy, Taco, Zippy，和一个“蛋糕”。

2.  **编程挑战1：播放生日歌**
    *   **目标**：点击绿旗，循环播放生日快乐的音乐。
    *   **可以给“蛋糕”添加脚本**：
        *   `绿旗` -> `录制声音` (让孩子们唱生日快乐歌) -> `循环播放`

3.  **编程挑战2：大家一起跳舞**
    *   **目标**：点击每个角色，他们会做出不同的跳舞动作。
    *   **Morphy的脚本**：`点击角色` -> `跳跃` -> `旋转` -> `循环`
    *   **Taco的脚本**：`点击角色` -> `变大` -> `变小` -> `循环`
    *   **Zippy的脚本**：`点击角色` -> `重复` (向前一步，向后一步)

**自由创作**：鼓励孩子们发挥想象，设计最酷的太空舞步！

-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

<h1 font-serif important-text-5em>Thank You</h1>

Slides available at [yzl.me](https://github.com/POfeiY)
