# POfeiY's Roads to Open Source - The Canvas Plum

2024/07/11

[Canvas Plum 2024](https://reactsummit.com/)

## Plum效果展示

## Plum案例分析

### requestAnimationFrame

告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

将该API封装到hook中，循环调用生成Canvas树枝分叉，并且支持手动暂停与恢复动画执行

### Canvas

- ctx.beginPath
- ctx.moveTo
- ctx.lineTo
- ctx.stroke

- <b>二维坐标换算</b>

### 拓展学习：SVG or Canvas

Canvas 是基于脚本的，通过 JavaScript 指令来动态绘图。而 SVG 则是使用 XML 文档来描述矢量图。

Canvas 提供的绘图能力更底层，适合做到像素级的图形处理，能动态渲染和绘制大数据量的图形。而 SVG 抽象层次更高，声明描述式的接口功能更丰富，内置了大量的图形、滤镜和动画等，方便进行文档元素的维护，也能导出为文件脱离浏览器环境使用。

如果单就图表库的视角来看，选择 Canvas 和 SVG 各有千秋。小画布、大数据量的场景适合用 Canvas，譬如热力图、大数据量的散点图等。如果画布非常大，有缩放、平移等高频的交互，或者移动端对内存占用量非常敏感等场景，可以使用 SVG 的方案。

### 步进

### 帧动画
