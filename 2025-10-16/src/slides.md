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
Maintainer of {CloudAlbum} {FormCreater} {Schedule}<br>
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

For today's topic, let's get straight to the point. Let's talk about...
-->

---
layout: center
glow: bottom
class: text-center
---

<img src="/dark.svg" w-140 />

<div abs-br mx-10 my-11 flex="~ gap-2 items-center" text-left op75>
  <img src="/anthropic-logo.svg" h-8 alt="CibConf">
  <div>
    <div text-lg>CibConf</div>
    <div text-xs opacity-75>Oct. 16th, 2025</div>
  </div>
</div>

<!--
**(讲者台词)**

相信在座的同学都有思考，AI了这么多年，对于前端应用开发有没有合适的赛道？

“首先，**模型能力**出现了质的飞跃。像GPT-4、Claude 3、Gemini等这些模型，它们的理解和推理能力已经强大到可以作为我们日常开发的得力助手。”

“其次，**社区空前活跃**。无论你遇到什么问题，几乎都能在开源社区找到答案、工具或者灵感。”

“最后，也是最重要的，**工具链越来越成熟**。我们不再需要从零开始研究算法，而是可以像搭乐高一样，利用现成的工具快速构建出强大的AI应用。”

“所以，今天分享的目标很简单：和大家一起了解modelcontextprotocol协议，会后大家可以尝试把一个‘聪明的聊天机器人’，升级成一个能解决实际问题的‘智能助手’。

本次分享不涉及复杂的数学和算法，只谈应用和实践。”

模型上下文协议（MCP）是一个创新的开源协议，它重新定义了大语言模型（LLM）与外部世界的互动方式。MCP 提供了一种标准化方法，使任意大语言模型能够轻松连接各种数据源和工具，实现信息的无缝访问和处理。MCP 就像是 AI 应用程序的 USB-C 接口，为 AI 模型提供了一种标准化的方式来连接不同的数据源和工具。

“现在每个模型、每个框架，它们定义和调用工具的方式都不一样，就像是各种‘方言’。我为GPT写的工具，给Claude用可能就得改。这极大地阻碍了工具的复用和生态的发展。”

未来，MCP作为AI世界的“普通话”

-->

---
class: p0
glow: bottom
---

<div class="grid grid-cols-[3fr_4fr] gap-4 h-full">

  <div ma flex="~ col gap-2 items-center">
    <img src="/dark.svg" w-80 />
    <div text-orange text-sm bg-orange:10 px2 rounded>Progress</div>
  </div>

  <div border="l main" h-full py10 flex="~ col gap-6 justify-center">
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>What is MCP</div>
        <div op65 text-sm>
          USB-C ports for AI applications
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Why we need</div>
        <div op65 text-sm>
          Evolution from "toy" to "tool"
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>MCP Core Component</div>
        <div op65 text-sm>
          Host, Client & Server, etc.
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Advanced code examples</div>
        <div op65 text-sm>
          How to create a MCP Server
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>The Future</div>
        <div op65 text-sm>
          Building the next-generation AI ecosystem together
        </div>
      </div>
    </div>
  </div>
</div>

<!--
关于模型上下文协议的内容，今天分享的内容如上：

主要有以下几个内容 [click] implemented quite a few

[click] 关于对MCP概念的初识

And then [click] 为什么会有MCP以及它能做什么.

[click] MCP的核心组件和架构.

[click] 案例展示（MCP Server demo和AI助手）.

[click] And finally, 思考总结和未来.

In short, unfortunately, Vite DevTools is not yet usable at this moment, and we're actively working on it. Please be patient and stay tuned - we'll let you know when it's ready to try!
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<div flex="~ items-center" w-140 p-8><img src="/mcp-simple-diagram.png" w-120 /></div>
<div flex="~ col gap-2 justify-center">

# What is MCP

Model Context Protocol

</div>
</div>

<!--

1.  **核心定义**：MCP 是一个**开放的、标准化的协议**，旨在连接 AI 应用与各类外部系统。这些外部系统可以是**数据源**（如本地文件、数据库）、**工具**（如搜索引擎、计算器），甚至是**工作流**（如调用 Figma API、执行一段脚本）。

2.  **核心类比**：
    *   **USB-C (通用连接)**：MCP 提供了一个标准接口，让任何 AI 模型或 Agent 都能轻松地“接入”任何支持 MCP 的应用或系统，并与之交换信息、执行任务。
    *   **LSP (专业深化)**：对于开发者而言，也可以将它理解为 **AI 时代的“语言服务器协议”**。LSP 解耦了语言能力和编辑器，而 MCP 则解耦了**上下文理解、工具使用能力**和 AI 模型本身。

3.  **目标**：打破 AI 应用与外部世界之间的壁垒，让 AI 不再是一个封闭的“大脑”，而是能够感知环境、使用工具、并与我们日常的应用无缝协作的智能伙伴。

使用 MCP，Claude 或 ChatGPT 等 AI 应用程序可以连接到数据源（例如本地文件、数据库）、工具（例如搜索引擎、计算器）和工作流（例如专门的提示）——使它们能够访问关键信息并执行任务。
可以将 MCP 想象成 AI 应用的 USB-C 端口。正如 USB-C 提供了一种连接电子设备的标准化方式，MCP 也提供了一种将 AI 应用连接到外部系统的标准化方式。

相信有同学应该使用mcp-chrome-bridge的mcp server 可以在保持本地浏览器登录状态下打开浏览器进入指定网站，并提取和总结网站内容。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<div flex="~ items-center" w-140 p-8><img src="/why-mcp.png" w-120 /></div>
<div flex="~ col gap-2 justify-center">

# Why we need MCP?

Evolution from "toy" to "tool"

</div>
</div>

<!--
当前的 AI 应用虽然强大，但大多运行在“沙箱”中，缺乏与真实世界数据的联动。MCP 的出现，正是为了解决这一核心痛ટ：

*   **痛点一：重复造轮子，集成成本高昂**
    *   每个想要集成 AI 的应用，都必须自行设计一套与模型交互、提供上下文的方案。这导致了巨大的开发浪费和高度的实现复杂性。

*   **痛点二：上下文质量决定 AI 能力上限**
    *   AI 的表现力高度依赖于上下文的质量。如何安全、高效地将动态、复杂的上下文（如整个代码库、Notion 数据库、实时终端输出）提供给模型，是一个巨大的挑战。

*   **痛点三：生态割裂，无法形成合力**
    *   应用、工具和 AI 模型之间形成了“生态孤岛”，用户的 Notion 无法与他的开发工具对话，AI 助手也无法操作他在 Figma 上的设计。

**MCP 通过为生态系统中的不同角色创造价值，来解决这些问题：**

*   **对于开发者**：极大降低了构建和集成 AI 应用的复杂性，可以专注于核心业务逻辑。
*   **对于 AI 应用/Agent**：可以接入一个庞大的、不断增长的工具和数据生态，从而获得更强大的能力。
*   **对于最终用户**：将获得更智能、更个性化的 AI 体验。想象一下：
    *   你的 AI 助手能直接读取你的**个人日历**为你安排会议。
    *   AI 可以根据你在 **Figma** 中的设计稿，自动生成完整的前端应用。
    *   企业级 Chatbot 能连接内网的多个数据库，让你用自然语言进行复杂的数据分析。

-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<div flex="~ items-center" w-140 p-8><img src="/mcp-core.png" w-120 /></div>
<div flex="~ col gap-2 justify-center">

# MCP Core Component

Host / Client / Server

</div>
</div>

<!--

我们一起来了解下MCP中的核心部件：

#### **1. Host (宿主环境 / 外部系统)**

*   **角色**：任何能够提供数据、工具或能力的外部系统。
*   **例子**：VS Code (提供代码和终端)、**Figma** (提供设计稿信息)、**Google Calendar** (提供日程数据)、本地文件系统。
*   **职责**：通过实现一系列**上下文提供者 (Context Provider)**，将自身的特定能力“广播”出去，供 Client 查询和调用。

这里以vscode studio为例，以它作为主机建立与MCP服务器连接，如Google Maps,它在运行时会实例化一个MCP客户端对象，用于维护与Google Maps MCP服务器的连接；且保持MCP客户端和MCP服务器之间1对1关系

#### **2. Client (客户端 / AI Agent)**

*   **角色**：消费上下文并提供智能服务的 AI 模型或 Agent。
*   **例子**：任何基于大语言模型（如 Gemini, Claude）构建的智能体。
*   **职责**：向 Host 查询可用的上下文和工具，并根据任务需求，通过 Server 发起请求，获取信息或执行操作。
*   **功能**：采样（Sampling），服务器发起的代理行为和递归 LLM 交互。

同时MCP 还定义了客户端可以公开的原语。这些原语允许 MCP 服务器开发者构建更丰富的交互。

1、采样：允许服务器向客户端的 AI 应用程序请求语言模型补全。当服务器的作者想要访问语言模型，但又希望保持模型独立性，并且不在其 MCP 服务器中包含语言模型 SDK 时，此功能非常有用。他们可以使用此sampling/complete方法向客户端的 AI 应用程序请求语言模型补全。

2、启发式：允许服务器向用户请求更多信息。当服务器开发者想要从用户那里获取更多信息，或者请求用户确认某个操作时，此功能非常有用。他们可以使用此elicitation/request方法向用户请求更多信息。

3、日志记录：使服务器能够向客户端发送日志消息以进行调试和监控。

#### **3. Server (协议服务器)**

*   **角色**：Host 和 Client 之间的通信枢纽，通常以 JSON-RPC 的形式实现。
*   **职责**：管理和路由双方的请求和响应，确保通信的标准化和可靠性。
*   **功能**：
  - 资源（Resources）: 供用户或 AI 模型使用的上下文和数据（如文件内容、数据库记录、API响应等）
  - 提示（Prompts）: 供用户使用的模板化消息和工作流（如系统提示、示例等）
  - 工具（Tools）: 供 AI 模型执行的函数（如有文件操作、API调用、数据库查询等）

每种基元类型都有相关的方法，用于发现（*/list）、检索（*/get），以及在某些情况下执行（tools/call）。MCP 客户端将使用这些*/list方法来发现可用的基元。例如，客户端可以先列出所有可用的工具（tools/list），然后执行它们。这种设计允许列表动态化。
举个具体的例子，假设有一个 MCP 服务器，它提供数据库的上下文信息。它可以提供查询数据库的工具、包含数据库模式的资源，以及包含与工具交互的少量示例的提示。

-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<div flex="~ items-center" w-140 p-8><img src="/mcp-archi.png" w-120 /></div>
<div flex="~ col gap-2 justify-center">

# MCP Architecture

an AI application like Visual Studio Code

</div>
</div>

<!--

MCP 采用客户端-服务器架构，其中 MCP 主机（例如Claude Code或Claude Desktop等 AI 应用程序）与一个或多个 MCP 服务器建立连接。MCP 主机通过为每个 MCP 服务器创建一个 MCP 客户端来实现这一点。每个 MCP 客户端与其对应的 MCP 服务器保持一对一的专用连接。

MCP内部分为数据层和传输层：

1、数据层：定义基于 JSON-RPC 的客户端-服务器通信协议，包括生命周期管理，以及核心原语，如工具、资源、提示和通知。

2、传输层：定义实现客户端和服务器之间数据交换的通信机制和通道，包括特定于传输的连接建立、消息框架和授权。支持两种传输机制：Stdio标准传输和流式HTTP传输（用 HTTP POST 协议发送客户端到服务器的消息，并可选地使用服务器发送事件来实现流式传输功能。此传输协议支持远程服务器通信，并支持标准 HTTP 身份验证方法，包括持有者令牌、API 密钥和自定义标头）

Visual Studio Code 充当 MCP 主机。当 Visual Studio Code 建立与 MCP 服务器（例如 Sentry MCP 服务器）的连接时，Visual Studio Code 运行时会实例化一个 MCP 客户端对象，用于维护与 Sentry MCP 服务器的连接。当 Visual Studio Code 随后连接到另一个 MCP 服务器（例如本地文件系统服务器）时，Visual Studio Code 运行时会实例化另一个 MCP 客户端对象来维护此连接，从而保持 MCP 客户端与 MCP 服务器之间的一对一关系。

这里MCP服务器指的是提供上下文数据的程序，无论其运行在何处。MCP 服务器可以在本地或远程执行。例如，当 Claude Desktop 启动文件系统服务器时，由于使用 STDIO 传输，该服务器在同一台计算机上本地运行。这通常被称为“本地”MCP 服务器。官方 Sentry MCP 服务器运行在 Sentry 平台上，并使用 Streamable HTTP 传输。这通常被称为“远程”MCP 服务器。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<div flex="~ items-center" w-140 p-8><img src="/mcp-capabilities.png" w-120 /></div>
<div flex="~ col gap-2 justify-center">

# Capability Negotiation

a capability-based negotiation system

</div>
</div>

<!--
模型上下文协议 (MCP) 使用基于功能的协商系统，客户端和服务器在初始化期间明确声明其支持的功能。功能决定了会话期间可用的协议功能和原语。

1、服务器声明资源订阅、工具支持和提示模板等功能
2、客户声明诸如采样支持和通知处理等功能
3、双方必须在整个会话期间尊重声明的能力
4、可以通过协议扩展来协商附加功能

*   **基础协议**：MCP的核心通信协议基于JSON-RPC 2.0消息格式。这是一种轻量级的远程过程调用协议，使用JSON作为数据格式。MCP连接是状态化的，允许在连接的生命周期内进行多次请求和响应。协议还支持 服务器和客户端的能力协商，使得双方在通信开始时可以确定彼此支持的功能。。
*   **通信方式**：MCP使用JSON-RPC 2.0消息在主机（发起连接的大型语言模型应用）、客户端（主机应用内的连接器)和服务器（提供上下文和能力的外部服务）之间建立通信
-->

---
layout: center
---

<h1 important-text-5xl font-serif>Demos</h1>

<!-- So, first things first, why do we need DevTools? -->

---

<div grid="~ cols-[3fr_4fr] gap-4">

<div>

<div font-serif text-2em my6>MCP Server</div>

<v-clicks>

- Search Bilibili User Info With Claude

- Create McpServer

- Register Tools

- Create Transport
  - StduiServerTransport

  - connect

</v-clicks>

</div>
<div v-click="1">

```ts {*|9-12|15-17|19-20|*}{at:2}
#!/usr/bin/env node
import process from 'node:process'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { registerSearchTools } from './tools/search'
import { registerUserTools } from './tools/user'
import { registerVideoTools } from './tools/video'

const server = new McpServer({
  name: 'bilibili-mcp-server',
  version: '0.0.1',
})

async function main(): Promise<void> {
  registerUserTools(server)
  registerSearchTools(server)
  registerVideoTools(server)

  const transport = new StdioServerTransport()
  await server.connect(transport)
}

main().catch((e) => {
  console.error('error in main():', e)
  // eslint-disable
  process.exit(1)
})
```

</div>
</div>

<!--
因时间原因这里就演示一个Mcp Server的案例，功能是开发一个Server集成到Claude查询一个B站的up信息.

相信B站大家都很熟悉了，这里我们也是碰下运气，随机查询一个up [click] 邀请听众互动例举一个up名字 [click] 首先我们需要新建一个MCP服务

[click] 注册我们所需要用到的tools，这里可以看到我们有用户相关的tool、查询tool、视频tool等

[click] 新建一个标准通信通道，并完成服务链接动作.

这样我们就完成一个MCP Server的开发，然后我们打开Claude，注册我们刚新建的这个服务，查询查询功能，试试我们能否成功
-->

---
class: text-center
transition: view-transition
---

<h1 font-serif text-4xl mt-20 important-mb-16>Welcome </h1>

<div flex="~ gap-18 items-center justify-center" >
  <div flex="~ col items-center" v-click>
    <img src="/avatars/webfansplz.png" rounded-full w-30 mb4 view-transition-contributor-webfansplz duration-1000 />
    <div>Zhang Ke</div>
    <div font-mono text-sm op50>cibdev@891226</div>
  </div>
</div>

<!--
接下来请xzh团队的张可老师演示xzh基于MCP协议研发的AI助手以及核心功能的讲解，请张可老师投屏演示
-->

---

<h1 font-serif text-4xl>Future & Vision</h1>

<div grid="~ cols-3 gap-3" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-teal:15 text-teal1>
    <div text-3xl i-ph:chart-donut-duotone text-teal mb2 />
    <div>Standardization</div>
    <div text-xs op50>Display Vite/Rolldown internal state and process</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-3xl i-ph:package-duotone text-orange mb2 />
    <div>Decoupling</div>
    <div text-xs op50>Provide suggestions and optimization solutions for build and plugins</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-yellow:15 text-yellow1>
    <div text-3xl i-ph-chart-line-up-duotone text-yellow mb2 />
    <div>Composability</div>
    <div text-xs op50>Compare and track build results across commits</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-red:15 text-red1>
    <div text-3xl i-ph:bug-beetle-duotone text-red mb2 />
    <div>Interoperability</div>
    <div text-xs op50>Record build process, shareable and analyzable reproduction</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-purple:15 text-purple1>
    <div text-3xl i-ph:stack-plus-duotone text-purple mb2 />
    <div>Vite Plus</div>
    <div text-xs op50>Integrate Vitest UI, Oxlint visualization, etc.</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-3xl i-ph:circles-three-plus-duotone text-blue mb2 />
    <div>DevTools Kit</div>
    <div text-xs op50>Unified DevTools architecture, allowing upper frameworks to provide extensions</div>
  </div>
</div>

<!--
**MCP 的核心价值：**

*   **标准化 (Standardization)**：为 AI 与外部世界的交互提供了通用语言。
*   **解耦 (Decoupling)**：让应用、工具和 AI 模型可以独立发展和创新。
*   **可组合性 (Composability)**：允许将来自不同 Host 的能力组合起来，完成更复杂的任务。
*   **互操作性 (Interoperability)**：让一个 AI Agent 有潜力在任何支持 MCP 的环境（IDE、浏览器、操作系统）中运行。

**未来展望：**

MCP 不仅仅是一个协议，它是一个创建**开放、协作、繁荣的 AI 工具生态**的蓝图。在这个生态中，开发者可以创造出各种各样的“上下文插件”，而用户则可以像逛应用商店一样，为自己的 AI 助手挑选和安装新的能力。这最终将推动 AI 从一个强大的信息处理器，进化为能够真正理解我们、并为我们执行任务的智能伙伴。

[click] Built-in, we will provide visualizations of the Vite internals, [click] Analysis and actionable suggestions for your build and plugin pipeline, [click] Build comparison across multiple commits to see how your app changes over time, [click] Build snapshots via deployable SPA for you to even share your build metadata as reproduction, and so on.

[click] Then we're going to have first-party Vite Plus integrations like Vitest UI and Oxlint, [click] and finally the DevTools Kit for plugin authors to build on top of this infrastructure and create even more interesting use cases.
-->

---
layout: none
class: h-full
---

<div h-full grid="~ rows-2">

<div p14>

  <h2 text-4xl mb-2 v-click="1">General Developer Tools</h2>

  <div text-2xl text-amber v-click="3">"Tools for developers"</div>

  <div mt-6 v-click="4">
    <div flex="~ gap-2 items-center" text-2xl>
      <div i-logos-vitejs w-8 />
      <div i-logos-vitest w-8 />
      <div i-logos-vue w-8 />
      <div i-logos-nuxt-icon w-8 />
      <div i-logos-react w-8 />
      <div i-logos-eslint w-8 />
      <div i-logos-unocss w-8 />
      <div op50>...</div>
    </div>
    <div mt3 op75>
      Vite itself is also a developer tool!
    </div>
  </div>

</div>

<div p13 border="t main">

  <h2 text-4xl mb-2 v-click="2">Special DevTools</h2>

  <div text-2xl text-lime v-click="5">"Tools for using tools better"</div>

  <div v-click="6" mt-6 flex="~ gap-2 wrap">
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-chrome/> Chrome DevTools</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-nuxt-icon w-5 /> Nuxt DevTools</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-vue w-5 /> Vue DevTools</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-carbon-ibm-watson-discovery/> Vite Plugin Inspect</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-unocss/> UnoCSS Inspector</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-eslint/> ESLint Config Inspector</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-vitest/> Vitest UI</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><img src="/node-modules-inspector.svg" w-5/> Node Modules Inspector</div>
    <div op50>...</div>
  </div>
</div>
</div>

<!--
Before we talk about why, let's first discuss what **IS** DevTools.

When we talk about DevTools, it can either mean [click] general developer tools, or the [click] specialized term, DevTools.

I would define general developer tools as [click] tools for developers. In that sense, the tools we use daily in our development like [click] Vite, Vitest, Vue, Nuxt, etc., are all developer tools.

On the other hand, for the special DevTools, we usually mean [click] tools for using tools better.
For example, [click] we know Chrome has built-in DevTools, and then we have Nuxt DevTools, Vue DevTools, etc.

The DevTools we're going to talk about today all refer to the latter.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-unocss />
  UnoCSS Inspector
</h3>

<img src="/devtools/uno-inspector.png" w-250 />

<!--
My personal journey with building DevTools starts with UnoCSS. Since UnoCSS generates CSS utilities on-demand based on the codebase, when working on it, one thing I found tricky was knowing why one utility was included and why another wasn't. So I built this inspector to show how each file is scanned and how they contribute to the utilities list. This kind of transparency helped us build the engine more efficiently with better accuracy.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect.png" w-250 />

<!--
At the beginning of the Vite ecosystem, I was building quite a few plugins for Vite and it was always tricky to debug as I had to console.log here and there to see the internal state of the transformed code. So I ended up building this UI called Vite Plugin inspect, showing the transform internals.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-vitest />
  Vitest UI
</h3>

<img src="/devtools/vitest-ui.png" w-250 />

<!--
Then I built the UI for Vitest to visualize the status and also the module relationships for each test file.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-nuxt-icon />
  Nuxt DevTools
</h3>

<img src="/devtools/nuxt-imports.png" w-250 />

<!--
Nuxt DevTools was a significant project that displays the internal state of Nuxt in various aspects, while also providing an API for Nuxt modules to contribute to DevTools. This is actually the main source of inspiration for Vite DevTools.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-files.png" w-250 />

<!--
Then I also built the ESLint Config Inspector to visualize the relationships in ESLint's new flat config. It started as a fun side project and later became the official one for ESLint.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-graph.png" w-250 />

<!--
You probably heard the joke about the black hole of your node_modules, but have you ever been curious about what things are actually inside it? I was, so I made the Node Modules Inspector to show the full graph of the relationships of all the packages inside your node_modules so you can play with it.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-sunbrust.png" w-250 />

<!--
You can also see how each package contributed to your node_modules in side-by-side visuals.
-->

---
layout: center
glow: bottom
class: text-center
---

<img src="/vite-devtools.png" w-120 />

<!--
For all of that, what I want is to show you how DevTools can be interesting in many different aspects and also share my own journey towards building DevTools.

So, finally, let's see what we have in Vite DevTools.
-->

---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/overview.png" w-120 />
<div flex="~ col gap-2 justify-center">

# Build Overview

Current focusing on build mode<br>by consuming Rolldown's output<br>

</div>
</div>

<!--
So for Vite DevTools, we are currently focusing on the build mode of Rolldown Vite by consuming the output data from Rolldown.
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center">
<img src="/vd/modules.png" w-140 />
<div flex="~ col gap-2 justify-center">

# Bundle File List

Display all files participating in the bundle,<br>providing filtering and search functionality.

</div>
</div>

<!--
The first thing we wanted you to know is how many modules are built into your bundle. Whether they are from your own source code, npm packages, or some generated virtual modules from plugins you have installed.
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/folders.png" w-180 />
<div flex="~ col gap-2 justify-center">

# File Tree

Bundled files in tree view

</div>
</div>

<!--
We also provide different views like tree, where you group them by type and folders
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/graph.png" w-180 />
<div flex="~ col gap-2 justify-center">

# Module Relationship Graph

</div>
</div>

<!--
Or the graph view to see how and why each module has been included, and know their import relationship.
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center">
<img src="/vd/flow.png" w-100 />
<div flex="~ col gap-2 justify-center">

# Module Transformation Flow

<div op50>
Parse <span op50>→</span> Resolve <span op50>→</span> Transform <span op50>→</span> Chunk <span op50>→</span> Bundle <span op50>→</span> Output
</div>

<div op50 mt5>
Track the entire process, find bottlenecks and optimizations
</div>

</div>
</div>

<!--
And then, inside each module, we show the whole transformation and bundling flow to see how your module is being processed from the source code, ID resolution, transform, chunking, tree-shaking, bundling, etc. This takes a big step forward from the previous vite-plugin-inspect by leveraging the full metadata from Rolldown. This would be useful for finding bugs in plugins or optimizing your chunking.
-->

---
class: text-center
---

# Code Transformation Comparison

<img src="/vd/transform.png" w-240 mt--5 />

<!--
In transform, you can see the before and after between each plugin's process and we will highlight the differences.
-->

---
class: text-center
---

# Chunk Information

<img src="/vd/chunk.png" w-210 mt--5 />

<!--
Then in the chunking, you can see how many modules are in each of your chunks. For example, ideally, you don't want your entry chunk to be too big, as it would need to be loaded on every page. This page will explain why the chunk became big and provide guidance on how to optimize it.
-->

---

# Performance Consumption Chart <span text-lime font-mono bg-lime:10 px2 py1 rounded text-xs translate-y--6 inline-block>WIP</span>

<img src="/vd/chart.png" w-200 />

<!--
We also care about performance. This table would tell you when working on that module, how each hook and how every plugin is costing you time, and potentially find the slow plugins to optimize.
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/plugins.png" w-120 mt20 />
<div flex="~ col gap-2 justify-center">

# Plugins

List of all the plugins in their order of execution

</div>
</div>

<!--
Talking about plugins, they are the essential components that make Vite have such a powerful ecosystem, but they could also commonly become the bottleneck of your build performance. Here we list all the plugins that are participating in your build pipeline, where you can click into each of them.
-->

---
class: text-center !pt10
---

# Plugin Hooks

<img src="/vd/plugins-details.png" w-300 mt--5 />

<!--
Inside that, you can see how this plugin is using the hooks and how it contributes to the entire build pipeline. This could be interesting to see which plugin on which file is slowing down the most. In the future, we will also provide some actionable suggestions that you can use to report to upstream and inform the plugin authors about them.
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/chunks-list.png" w-150 />
<div flex="~ col gap-2 justify-center">

# Chunking

Relationship between chunks and files

</div>
</div>

<!--
About chunking, we also visualize what files are included in them and what's the relationship between each chunk.
-->

---
class: text-center !pt10
---

# Bundled Packages

with Duplicated Packages Detection

<img src="/vd/packages.png" w-300 mt--5 />

<!--
A huge portion of our app usually comes from 3rd-party npm packages. But usually we overlook their impact on our apps. This tab lists all the packages that went into our bundle and their bundled size. And most importantly, it shows the versions and would tell you when you are having duplicated packages with different versions, which we likely want to avoid.
-->

---
class: text-center !pt10
---

# Packages Size Graph

<img src="/vd/packages-size.png" w-300 mt--5 />

<!--
About the package size, don't let the package authors tell you how small their packages are, as when tree-shaking takes place, the size can vary based on your usage. In Vite DevTools, we have a visual representation of the size of your dependencies based on your real usage.
-->

---
class: text-center
layout: center
---

<div text-2.5em op50>Vite DevTools is</div>
<div text-3em><span font-serif font-800>NOT ONLY</span> about Visualizations</div>

<!--
That said, I also wanted to mention that Vite DevTools is NOT ONLY about internal data visualizations.
-->

---

<div font-serif text-5xl my-10 mb-20>Being Agnostic</div>

<ul>
  <li v-click my8>Far from Users' Interests (Too Low-level)</li>

  <li v-click="3" my8>"Common Divisor" Among All the Frameworks</li>

  <li v-click="4" my8>Have to also be "Extensible"</li>
</ul>

<div absolute top-10 right-10>
  <img
    v-click="2"
    src="/set-intersections.png" w-120 transition-all duration-400
    :class="$clicks === 3 ? 'saturate-0' : ''"
  >
  <div
    border-2 border-purple rounded-full absolute transition-all delay-200 duration-500
    flex
    v-click="3"
    :class="[
      $clicks <= 3 ? 'w-20.5 h-20.5 top-50 left-50 bg-purple:20' : 'w-110 h-110 top-5 left-5'
    ]"
  >
    <div i-logos-vitejs ma text-4xl />
  </div>
</div>

<!--
If you think about the UI we just talked about, you'll find that you might not often need them, or they could be a bit too advanced for daily development.

[click] This actually makes total sense, because Vite is a framework-agnostic tool. Agnostic means that we don't know about the framework you use, and we shouldn't know. This gives Vite great flexibility and extensibility to be the infrastructure of modern frameworks, but it also makes it hard for Vite to present interesting information that's closer to actual Vite users, like the app we're building or the state of the framework we're using, etc.

[click] If you look at the graph on the right, imagine each circle represents a specific framework or integration. Being agnostic means that Vite DevTools can only be the [click] common divisor among all frameworks, which is quite limited and not always useful to the majority of users.

[click] That's why the next thing we're going to talk about is Extensibility. In order to bring interesting, framework-specific information to users, we have to provide the capability for frameworks to do so.
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <span font-serif>Extensibility</span>
</div>

<!--
I see Extensibility as one of the most important factors that makes Vite what it is today. There's no reason we shouldn't do the same for Vite DevTools.
-->

---
clicks: 19
---

<DevToolsKit />

<!--
If you've watched my previous talks, this is a slide I made roughly two years ago when presenting Nuxt DevTools, [click] picturing the idea of having a shared interface for building DevTools, called DevTools Kit.

[click] The idea is to create a modular, composable, collaborative DevTools ecosystem.

[click] For example, we know that we have some features that are general and not coupled to other frameworks. [click] Then we have features from the Vite Plus ecosystem, like Vitest and [click] Oxc-related tools like linting and formatting.
[click] Maybe going to the frontend, we could also have some general web-related information like SEO, accessibility, PWA, and so on.

[click] Going specific to frameworks, let's take Vue as an example, we might have UI for visualizing components, reactivity, routers, etc. [click] Going further, we have meta-frameworks like Nuxt that would also provide Nuxt-specific visualizations.

[click] In that sense, we might also have tools for React, [click] for Svelte, [click] for Solid, [click] for Qwik and so on.

[click] Then we could have tool integrations as well.

If you think all of these blocks are pluggable extensions, then we could compose them easily based on our needs. For example, [click] taking all the Vue and Nuxt features, we could have Nuxt DevTools. [click] Without Nuxt-specific parts, we could have Vite DevTools. [click] Similarly, we could have DevTools for other frameworks easily [click] [click] [click] under the same infrastructure. And in the end, you might be able to customize it based on your project's specific needs and have [click] your own DevTools.
-->

---
clicks: 1
---

<div flex="~ col gap-4 items-center justify-center" text-2xl w-full h-full>
  <img src="/devtools-kit.svg" w-60 op85 transition-all duration-500 :class="$clicks < 1 ? 'translate-y-15 scale-110' : ''"/>
  <div i-ph-arrow-down-duotone text-2xl op50 v-click="1" delay-500 />
  <img src="/vite-devtools.png" w-100 brightness-200 v-click="1" delay-500 />
</div>

<!--
The original idea of DevTools Kit was discontinued due to various reasons, mainly because we weren't sure how many people would adopt it.

But this time is different. Since we're building the DevTools for Vite, it means that when it's ready, all frameworks built on top of Vite would naturally benefit from it without friction.

[click] So we're bringing the vision of DevTools Kit to Vite DevTools, instead of asking DevTools authors to migrate to a common pattern, now they'll just be building plugins for Vite.
-->

---

<div grid="~ cols-[3fr_4fr] gap-4">

<div>

<div font-serif text-2em my6>Vite DevTools Plugin</div>

<v-clicks>

- A Superset of Vite Plugin

- Via the Additional `devtools` Hook

- Built-in RPC Layer

- Built-in Isomorphic Views Hosting
  - Embedded Floating Panel

  - Browser Extension
  - Standalone Webpage
  - Deployable SPA

</v-clicks>

</div>
<div v-click="1">

```ts {*|7-27|8-16|17-26|*}{at:2}
import type { Plugin } from 'vite'

export default function MyPlugin(): Plugin {
  return {
    name: 'my-plugin',
    transform: { /* ... */ },
    devtools: {
      /* pesudo-code for demo */
      async setup({ rpc, views, docks }) {
        rpc.register({
          name: 'my-plugin:hello',
          async handler(message) {
            console.log(`Hello from client, ${message}`)
          }
        })

        views.staticHost('./dist/client', '/.my-plugin')

        docks.register({
          id: 'my-plugin',
          title: 'My Plugin',
          icon: '/.my-plugin/favicon.svg',
          // type can also be 'webcomponent', 'action' etc.
          type: 'iframe',
          url: '/.my-plugin',
        })
      }
    }
  }
}
```

</div>
</div>

<!--
Let's take a glance at how the Vite DevTools Plugin would look.

So in general, a Vite DevTools plugin would be [click] a superset of a Vite Plugin, meaning you don't need to do anything special, but only [click] by adding a `devtools` hook to your plugin, it would work. The code on the right is a pseudo-code snippet of how you would do that. And it actually already works, but the reason I called it pseudo is because nothing is set in stone yet and we're still exploring the interface, and it might change a lot.

[click] Vite DevTools will provide the built-in RPC, remote-procedure call, layer for plugin authors to extend and communicate between the server and clients more easily.

[click] We also wanted to make it possible for users to decide the ways to consume the devtools. In Vite DevTools, we will support an embedded floating panel, similar to Nuxt DevTools, or via a browser extension to be presented in the browser DevTools, or a standalone webpage, or a deployable SPA as a snapshot of your current data, etc. Vite DevTools will provide the abstraction layer for supporting these scenarios isomorphically.

(next is the demo video)
-->

---
layout: 'none'
class: 'flex h-full'
---

<SlidevVideo autoplay controls muted ma w="90%" rounded border="~ main">
  <source src="/vd/docks-demo.mp4" type="video/mp4" />
</SlidevVideo>

<!--

So here is how it would look. In general, we will provide a dock-like UI to be the entry point of all the integrations. For each integration, we provide frames to render each DevTools UI, or it can be a custom renderer or running scripts. Here is a quick PoC to have Vitest, Nuxt DevTools, and UnoCSS integrated. In the future we will work with more DevTool authors to bring them to Vite DevTools, while also verifying the capability of our plugin API.

-->

---

<h1 font-serif text-4xl>Goals & Vision</h1>

<div grid="~ cols-3 gap-3" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-teal:15 text-teal1>
    <div text-3xl i-ph:chart-donut-duotone text-teal mb2 />
    <div>Visualization</div>
    <div text-xs op50>Display Vite/Rolldown internal state and process</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-3xl i-ph:package-duotone text-orange mb2 />
    <div>Analysis & Suggestions</div>
    <div text-xs op50>Provide suggestions and optimization solutions for build and plugins</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-yellow:15 text-yellow1>
    <div text-3xl i-ph-chart-line-up-duotone text-yellow mb2 />
    <div>Build Comparison</div>
    <div text-xs op50>Compare and track build results across commits</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-red:15 text-red1>
    <div text-3xl i-ph:bug-beetle-duotone text-red mb2 />
    <div>Build Snapshots</div>
    <div text-xs op50>Record build process, shareable and analyzable reproduction</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-purple:15 text-purple1>
    <div text-3xl i-ph:stack-plus-duotone text-purple mb2 />
    <div>Vite Plus</div>
    <div text-xs op50>Integrate Vitest UI, Oxlint visualization, etc.</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-3xl i-ph:circles-three-plus-duotone text-blue mb2 />
    <div>DevTools Kit</div>
    <div text-xs op50>Unified DevTools architecture, allowing upper frameworks to provide extensions</div>
  </div>
</div>

<!--
On a broader view, the goal and vision of Vite DevTools is that we will provide better transparency and enable the ecosystem to explore even further.

[click] Built-in, we will provide visualizations of the Vite internals, [click] Analysis and actionable suggestions for your build and plugin pipeline, [click] Build comparison across multiple commits to see how your app changes over time, [click] Build snapshots via deployable SPA for you to even share your build metadata as reproduction, and so on.

[click] Then we're going to have first-party Vite Plus integrations like Vitest UI and Oxlint, [click] and finally the DevTools Kit for plugin authors to build on top of this infrastructure and create even more interesting use cases.
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

<h1 font-serif important-text-5em>Thank You</h1>

Slides available at [antfu.me](https://antfu.me)
