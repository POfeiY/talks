<script setup>
defineProps({
  name: String,
})
</script>

<template>
  <span>
    <i-streamline-module-puzzle-1-solid mr="2" opacity="60" class="transform translate-y-1px" />
    <a target="_blank" border="!0" font="mono" opacity="80">
      {{ name }}
    </a>
  </span>
</template>
