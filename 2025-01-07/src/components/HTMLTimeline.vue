<script setup lang="ts">
import { DataSet, Timeline } from 'vis-timeline/standalone'
import { onMounted, ref, watch } from 'vue'

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  const end = '2025-12-15'
  const groups = new DataSet([
    { id: 1, content: 'Timing' },
    { id: 2, content: 'Stages' },
  ])
  let id = 0
  const items = new DataSet([
    {
      id: id++,
      content: 'HTML2 IETF RFC 1866',
      group: 2,
      start: '1995-11-24  ',
      end: '1997-01-31',
      type: 'range',
      className: 'text-center rounded-lg! bg-amber:20! text-amber! border-amber:50!',
    },
    {
      id: id++,
      content: 'HTML2: RFC 2070',
      group: 1,
      start: '1997-01-01',
      className: 'px2 rounded-lg! bg-lime:20! text-lime! border-lime:50!',
    },
    {
      id: id++,
      content: 'HTML3: Standard release HTML 3.2',
      group: 1,
      start: '1997-01-14',
      className: 'px2 rounded-l-lg! bg-purple:20! text-purple! border-purple:50!',
    },
    {
      id: id++,
      content: 'HTML3: tag-Wilbur',
      group: 2,
      start: '1997-01-14',
      end: '1997-12-18',
      type: 'range',
      className: 'px2 rounded-l-lg! bg-blue:20! text-blue! border-blue:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: 'W3C: Recommendation HTML4.01',
      group: 1,
      start: '1999-12-24',
      className: 'px2 rounded-lg! bg-green:20! text-green! border-green:50!',
    },
    {
      id: id++,
      content: 'W3C: Release HTML4',
      group: 2,
      start: '1997-12-18',
      end: '2014-6-30',
      type: 'range',
      className: 'px2 rounded-l-lg! bg-blue:20! text-blue! border-blue:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: 'W3C: Recommendation HTML5',
      group: 1,
      start: '2014-10-28',
      className: 'px2 rounded-lg! bg-green:20! text-green! border-green:50!',
    },
    {
      id: id++,
      content: 'Recommendation standard release for HTML5',
      group: 2,
      start: '2014-10-28',
      end,
      type: 'range',
      className: 'px2 rounded-r-lg! bg-blue:20! text-blue! border-blue:50!',
    },
  ])

  // Create a Timeline
  const timeline = new Timeline(el.value, null, {
    stack: true,
    height: 350,
    width: 1800,
    horizontalScroll: false,
    verticalScroll: false,
    zoomable: false,
    moveable: false,
    margin: {
      item: {
        horizontal: 0,
      },
    },
  })
  timeline.setGroups(groups)
  timeline.setItems(items)

  timeline.redraw()
  // @ts-expect-error missing type
  watch([$clicks, $page], () => {
    timeline.redraw()
  })
})
</script>

<template>
  <div v-click mb-3 flex="~ col">
    <div scale-50 origin-left-top relative mb--42>
      <div ref="el" absolute h-350px w-1800px />
    </div>
    <div text-xs op50 mla mr--10 flex="~ inline gap-1">
      Data Source:
      <a
        href="https://zh.wikipedia.org/wiki/HTML"
        target="_blank" rel="noopener noreferrer"
      >
        HTML RFC timelime by wikipedia
      </a>
    </div>
  </div>
</template>

<style>
.vis-timeline {
  border: 0 !important;
}

.vis-labelset .vis-label,
.vis-time-axis .vis-text {
  color: inherit;
  opacity: 0.8;
}

.vis-grid,
.vis-label,
.vis-group,
.vis-panel {
  border-color: #333 !important;
}
</style>
