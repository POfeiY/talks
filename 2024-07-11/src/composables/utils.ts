// FIXME: use hook
export interface RafFnProps {
  delta: number
  timestamp: DOMHighResTimeStamp
}

export interface RafOptions {
  immediate?: boolean
}

export function useRafFn(fn: (props: RafFnProps) => void, options?: RafOptions) {
  const { immediate } = options ?? {}
  let rafId: number | null = null
  let isActive = false

  let preStamp = 0

  function loop(timestamp: DOMHighResTimeStamp) {
    if (!isActive || !window)
      return
    if (!preStamp)
      preStamp = timestamp

    const delta = timestamp - preStamp

    fn({ delta, timestamp })
    rafId = window.requestAnimationFrame(loop)
  }

  function resume() {
    if (!isActive) {
      isActive = true
      preStamp = 0
      rafId = window.requestAnimationFrame(loop)
    }
  }

  function pause() {
    isActive = false
    if (rafId) {
      window.cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  if (immediate)
    resume()

  return {
    resume,
    pause,
  }
}

export function initCanvas(canvas: HTMLCanvasElement, width = 400, height = 400, _dpi = 1) {
  const ctx = canvas.getContext('2d')

  const dpi = window.devicePixelRatio || _dpi

  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  canvas.style.border = `1px solid rgba(0,0,0,.4)`

  canvas.width = width * dpi
  canvas.height = height * dpi

  ctx.scale(dpi, dpi)

  return {
    ctx,
  }
}
