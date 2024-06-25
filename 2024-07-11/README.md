# POfeiY's Roads to Open Source - The Canvas Plum

2024/07/11

[Canvas Plum 2024](https://reactsummit.com/)

## Plum效果展示

## Plum案例分析

### requestAnimationFrame

告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。

将该API封装到hook中，循环调用生成Canvas树枝分叉，并且支持手动暂停与恢复动画执行

### Canvas

- moveTo
- lineTo
