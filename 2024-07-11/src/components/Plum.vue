<script setup lang="ts">
import { onMounted, ref } from 'vue'
/**
 * The Canvas Plum
 */
import { initCanvas, useRafFn } from '../composables/utils'

const r180 = Math.PI
const r90 = Math.PI / 2
const r15 = Math.PI / 12

/**
 * 坐标换算
 * @param x
 * @param y
 * @param r
 * @param theta 夹角弧度
 * @returns
 */
function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  const dx = r * Math.cos(theta)
  const dy = r * Math.sin(theta)
  return [x + dx, y + dy]
}

const random = Math.random

const len = ref<number>(5)
const iterations = ref<number>(5)
const canvasRef = ref<HTMLCanvasElement>(null)

let start = () => { }
let resumeHandler = () => { }
let pauseHandler = () => { }

onMounted(() => {
  const { ctx } = initCanvas(canvasRef.value)
  const { width, height } = canvasRef.value

  let currentIterations = 0
  let steps = []
  let preSteps = []

  const step = (x: number, y: number, rad: number) => {
    const currentLen = random() * len.value
    const [nx, ny] = polar2cart(x, y, currentLen, rad)
    if (nx < -50 || nx > 450 || ny < -50 || ny > 450)
      return

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(nx, ny)
    ctx.stroke()

    // 确保预设的初始化帧数会被渲染，避免仅在萌芽状态就被扼杀了
    if (currentIterations < iterations.value || random() < 0.5)
      steps.push(() => { step(nx, ny, rad + r15 * random()) })
    if (currentIterations < iterations.value || random() < 0.5)
      steps.push(() => { step(nx, ny, rad - r15 * random()) })
  }
  const frame = () => {
    currentIterations += 1
    preSteps = steps
    steps = []

    if (!preSteps.length)
      return
    preSteps.forEach(s => s())
  }
  const { resume, pause } = useRafFn(frame)
  start = () => {
    ctx.clearRect(0, 0, width, height)
    ctx.lineWidth = 1
    ctx.strokeStyle = 'rgba(0,0,0,.2)'
    currentIterations = 0
    preSteps = []
    steps
      = random() < 0.5
        ? [() => { step(0, 400 * random(), 0) }, () => { step(400, 400 * random(), r180) }]
        : [() => { step(400 * random(), 0, r90) }, () => { step(400 * random(), 400, -r90) }]
    resume()
  }
  resumeHandler = () => {
    resume()
  }
  pauseHandler = () => {
    pause()
  }
})
</script>

<template>
  <h3 text-center my-4>
    Canvas Plum
  </h3>
  <section class="canvas-plum-wrap">
    <canvas ref="canvasRef" />
  </section>
  <section flex gap-2 py-4>
    <button flex-grow-1 text-lime @click.stop="start">
      Start
    </button>
    <button flex-grow-1 text-lime @click.stop="pauseHandler">
      Pause
    </button>
    <button flex-grow-1 text-lime @click.stop="resumeHandler">
      Resume
    </button>
  </section>
</template>

<style>
.canvas-plum-wrap {
  filter: invert(1) hue-rotate(180deg);
  background: white;
}
</style>
