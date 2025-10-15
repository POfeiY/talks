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

相信在座的同学都有思考，AI了这么多年，对于前端应用开发同学有没有合适的timing切入,很好的入场时机？

就社区生态环境来看：

“首先，**模型能力**出现了质的飞跃。像GPT-4、Claude Sonnet4、Gemini等这些模型，它们的理解和推理能力已经强大到可以作为我们日常开发的得力助手。”

“其次，**社区空前活跃**。无论你遇到什么问题，几乎都能在开源社区找到答案、工具或者灵感。”

“最后，也是最重要的，**工具链越来越成熟**。我们不再需要从零开始研究算法，而是可以像搭乐高一样，利用现成的工具快速构建出强大的AI应用。”

“所以，今天分享的目标很简单：和大家一起学习modelcontextprotocol协议，会后大家可以尝试把一个‘聪明的聊天机器人’，升级成一个能解决实际问题的‘智能助手’。

本次分享不涉及复杂的数学和算法，只谈应用和实践。”

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

主要有以下几个内容

[click] 关于对MCP概念的初识，什么是MCP

And then [click] 为什么会有MCP以及它能做什么.

[click] MCP的核心组件和架构.

[click] 案例展示（MCP Server demo和AI助手）.

[click] And finally, 思考总结和未来，作为前端应用开发者我们能否乘上“东风”.

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
模型上下文协议（MCP）是一个创新的开源协议，它重新定义了大语言模型（LLM）与外部世界的互动方式。MCP 提供了一种标准化方法，使任意大语言模型能够轻松连接各种数据源和工具，实现信息的无缝访问和处理。MCP 就像是 AI 应用程序的 USB-C 接口，为 AI 模型提供了一种标准化的方式来连接不同的数据源和工具。

“现在每个模型、每个框架，它们定义和调用工具的方式都不一样，就像是各种‘方言’。我为GPT写的工具，给Claude用可能就得改。这极大地阻碍了工具的复用和生态的发展。”

未来，MCP作为AI世界的“普通话”

1.  **核心定义**：MCP 是一个**开放的、标准化的协议**，旨在连接 AI 应用与各类外部系统。这些外部系统可以是**数据源**（如本地文件、数据库）、**工具**（如搜索引擎、计算器），甚至是**工作流**（如调用 Figma API、执行一段脚本）。

2.  **核心类比**：
    *   **USB-C (通用连接)**：MCP 提供了一个标准接口，让任何 AI 模型或 Agent 都能轻松地“接入”任何支持 MCP 的应用或系统，并与之交换信息、执行任务。
    *   **LSP (专业深化)**：对于开发者而言，也可以将它理解为 **AI 时代的“语言服务器协议”**。LSP 解耦了语言能力和编辑器，而 MCP 则解耦了**上下文理解、工具使用能力**和 AI 模型本身。

3.  **目标**：打破 AI 应用与外部世界之间的壁垒，让 AI 不再是一个封闭的“大脑”，而是能够感知环境、使用工具、并与我们日常的应用无缝协作的智能伙伴。

使用 MCP，Claude 或 ChatGPT 等 AI 应用程序可以连接到数据源（例如本地文件、数据库）、工具（例如搜索引擎、计算器）和工作流（例如专门的提示）——使它们能够访问关键信息并执行任务。
可以将 MCP 想象成 AI 应用的 USB-C 端口。正如 USB-C 提供了一种连接电子设备的标准化方式，MCP 也提供了一种将 AI 应用连接到外部系统的标准化方式。

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
当前的 AI 应用虽然强大，但大多运行在“沙箱”中，缺乏与真实世界数据的联动。而MCP的出现，正是为了解决这一核心痛点：

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

接下来我们一起来了解下MCP中的核心部件：

#### **1. Host (宿主环境 / 外部系统)**

*   **角色**：任何能够提供数据、工具或能力的外部系统。
*   **例子**：VS Code (提供代码和终端)、**Figma** (提供设计稿信息)、**Google Calendar** (提供日程数据)、本地文件系统。
*   **职责**：通过实现一系列**上下文提供者 (Context Provider)**，将自身的特定能力“广播”出去，供 Client 查询和调用。

这里以Vscode Studio为例，以它作为主机建立与MCP服务器连接，如Sentry,它在运行时会实例化一个MCP客户端对象，用于维护与Sentry MCP服务器的连接；且保持MCP客户端和MCP服务器之间1对1关系

#### **2. Client (客户端 / AI Agent)**

*   **角色**：消费上下文并提供智能服务的 AI 模型或 Agent。
*   **例子**：任何基于大语言模型（如 Gemini, Claude）构建的智能体。
*   **职责**：向 Host 查询可用的上下文和工具，并根据任务需求，通过 Server 发起请求，获取信息或执行操作。
*   **功能**：采样（Sampling），支持服务器发起的代理行为和递归 LLM 交互。

同时MCP 还定义了客户端可以公开的原语。这些原语允许 MCP 服务器开发者构建更丰富的交互。

1、采样：允许服务器向客户端的 AI 应用程序请求语言模型补全。

当服务器的作者想要访问语言模型，但又希望保持模型独立性，并且不在其 MCP 服务器中包含语言模型 SDK 时，此功能非常有用。他们可以使用此sampling/complete方法向客户端的 AI 应用程序请求语言模型补全。

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

eg. 这里我们举例一个场景：我是一名客户经理我今天有一笔待采集的尽调任务，该任务需要将客户公司的办公区、财务对账单、营业执照等照片素材上传到这笔尽调任务中，我们是否就可以给AI助手安排一个这样的任务：请查询我今天的一笔待采集的尽调任务，该任务名称xxx，再从云相册中查询带有xxx公司的财务对账单、应用执照标签的素材上传到这笔任务中。

其中我们的尽调MCP Server是否可以提供如下tools，如检索任务、上传素材；云相册MCP Server提供如查询素材tools，基于xzh Host环境调用大模型完成任务分析以及规划，申请客户端完成任务数据查询、素材上传、素材查询等API调用，如果在座的有尽调业务场景的老师可以尝试着设计实现下。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<div flex="~ items-center" w-140 p-8><img src="/mcp-archi.png" w-120 /></div>
<div flex="~ col gap-2 justify-center">

# MCP Architecture

Follows a client-host-server architecture

</div>
</div>

<!--
接下来我们来一起了解下MCP的设计框架：

MCP 采用客户端-服务器架构，其中 MCP 主机（例如Claude Code或Claude Desktop等 AI 应用程序）与一个或多个 MCP 服务器建立连接。MCP 主机通过为每个 MCP 服务器创建一个 MCP 客户端来实现这一点。每个 MCP 客户端与其对应的 MCP 服务器保持一对一的专用连接。

MCP内部分为数据层和传输层：

1、数据层：定义基于 JSON-RPC 的客户端-服务器通信协议，包括生命周期管理，以及核心原语，如工具、资源、提示和通知。

2、传输层：定义实现客户端和服务器之间数据交换的通信机制和通道，包括特定于传输的连接建立、消息框架和授权。支持两种传输机制：Stdio标准传输和流式HTTP传输（用 HTTP POST 协议发送客户端到服务器的消息，并可选地使用服务器发送事件来实现流式传输功能。此传输协议支持远程服务器通信，并支持标准 HTTP 身份验证方法，包括持有者令牌、API 密钥和自定义标头）

Visual Studio Code充当MCP主机。当Visual Studio Code 建立与 MCP 服务器（例如 Sentry MCP 服务器）的连接时，Visual Studio Code 运行时会实例化一个 MCP 客户端对象，用于维护与 Sentry MCP 服务器的连接。当 Visual Studio Code 随后连接到另一个 MCP 服务器（例如本地文件系统服务器）时，Visual Studio Code 运行时会实例化另一个 MCP 客户端对象来维护此连接，从而保持 MCP 客户端与 MCP 服务器之间的一对一关系。

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

如图所示，Host初始化Client，后Client与Server进行通信获取可用的能力（如Tools清单、Prompts、Resource等）。当接收到用户指令或模型结果后，client会发起server的调用，比如API接口调用，待服务器返回后将结果再送给大模型组合成一个完成的答复呈现给用户。

同时允许服务器向用户请求更多信息。当服务器开发者想要从用户那里获取更多信息，或者请求用户确认某个操作时，此功能非常有用。他们可以使用此elicitation/request方法向用户请求更多信息。
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

- Create MCP Server

- Register Tools

- Create Transport
  - StdioServerTransport

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
    <img src="/zhangke.JPG" rounded-full w-30 mb4 view-transition-contributor-webfansplz duration-1000 />
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
    <div text-xs op50>Provides a common language for AI to interact</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-3xl i-ph:package-duotone text-orange mb2 />
    <div>Decoupling</div>
    <div text-xs op50>Independent development and innovation</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-yellow:15 text-yellow1>
    <div text-3xl i-ph-chart-line-up-duotone text-yellow mb2 />
    <div>Composability</div>
    <div text-xs op50>Ability Combination</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-red:15 text-red1>
    <div text-3xl i-ph:bug-beetle-duotone text-red mb2 />
    <div>Interoperability</div>
    <div text-xs op50>Multi-environment support</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-purple:15 text-purple1>
    <div text-3xl i-ph:stack-plus-duotone text-purple mb2 />
    <div>Potential</div>
    <div text-xs op50>Integrate Vitest UI, Oxlint visualization, etc.</div>
  </div>
</div>

<!--
**MCP 的核心价值：**

*   **标准化 (Standardization)**：为 AI 与外部世界的交互提供了通用语言。
*   **解耦 (Decoupling)**：让应用、工具和 AI 模型可以独立发展和创新。
*   **可组合性 (Composability)**：允许将来自不同 Host 的能力组合起来，完成更复杂的任务。
*   **互操作性 (Interoperability)**：让一个 AI Agent 有潜力在任何支持 MCP 的环境（IDE、浏览器、操作系统）中运行。
*   **潜力（Potential）**： 每一个开发者都是创造者，用你们的潜力构建自己的agent

**未来展望：**

MCP 不仅仅是一个协议，它是一个创建**开放、协作、繁荣的 AI 工具生态**的蓝图。在这个生态中，开发者可以创造出各种各样的“上下文插件”，而用户则可以像逛应用商店一样，为自己的 AI 助手挑选和安装新的能力。这最终将推动 AI 从一个强大的信息处理器，进化为能够真正理解我们、并为我们执行任务的智能伙伴。

[click] 标准化， 为 AI 与外部世界的交互提供了通用语言 [click] 揭耦, 让应用、工具和 AI 模型可以独立发展和创新[click] 能力组合共创, 允许将来自不同 Host 的能力组合起来，完成更复杂的任务[click] 互操作性，让一个 AI Agent 有潜力在任何支持 MCP 的环境（IDE、浏览器、操作系统）中运行.

[click] 潜力无上限，每一个开发者都是创造者，用你们的潜力构建自己的agent.
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

<h1 font-serif important-text-5em>Thank You</h1>

Slides available at [yzl.me](https://github.com/POfeiY)
