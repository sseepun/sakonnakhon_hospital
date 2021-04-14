<template>
  <button v-if="type" :type="type" class="btn btn-action" :class="classer">
    {{text}}
  </button>
  <a v-else class="btn btn-action" :class="classer" :href="href" :target="target">
    {{text}}
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: { type: String, default: 'Button' },
    type: { type: String, default: '' },
    classer: { type: String, default: '' },
    href: { type: String, default: '' },
    target: { type: String, default: '' },
  }
}
</script>
