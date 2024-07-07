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
    ctx.strokeStyle = 'rgba(0,0,0,.4)'
    currentIterations = 0
    preSteps = []
    steps
      = random() < 0.5
        ? [() => { step(0, height * random(), 0) }, () => { step(width, height * random(), r180) }]
        : [() => { step(width * random(), 0, r90) }, () => { step(width * random(), height, -r90) }]
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
  <h3 text-center my-2>
    Canvas Plum
  </h3>
  <section class="canvas-plum-wrap">
    <canvas ref="canvasRef" />
  </section>
  <section flex gap-2 py-2>
    <button flex-grow-1 @click.stop="start">
      Start
    </button>
    <button flex-grow-1 @click.stop="resumeHandler">
      Resume
    </button>
    <button flex-grow-1 @click.stop="pauseHandler">
      Pause
    </button>
  </section>
</template>

<style>
.canvas-plum-wrap {
  filter: invert(1) hue-rotate(180deg);
  background: white;
}
</style>
