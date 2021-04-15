<template>
  <button v-if="type" :type="type" class="btn btn-action" :class="classer">
    <img v-if="prepend" class="icon-prepend" :src="'/assets/img/icon/'+icon" alt="Image Icon" />
    {{text}}
    <img v-if="append" class="icon-append" :src="'/assets/img/icon/'+icon" alt="Image Icon" />
  </button>
  <a v-else class="btn btn-action" :class="classer" :href="href" :target="target">
    <img v-if="prepend" class="icon-prepend" :src="'/assets/img/icon/'+icon" alt="Image Icon" />
    {{text}}
    <img v-if="append" class="icon-append" :src="'/assets/img/icon/'+icon" alt="Image Icon" />
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: { type: String, default: 'Button' },
    type: { type: String, default: '' },
    classer: { type: String, default: '' },
    href: { type: String, default: '#' },
    target: { type: String, default: '' },
    prepend: { type: Boolean, default: false },
    append: { type: Boolean, default: false },
    icon: { type: String, default: '' },
  }
}
</script>
