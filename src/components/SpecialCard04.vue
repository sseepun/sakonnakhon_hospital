<style scoped>
  img{ width: 1.75rem; height: 1.75rem; }
  .selected { background-color: #ECFDF5; }
</style>
<template>
  <div :class="isSelected ? 'd-flex jc-center selected' : 'd-flex jc-center bg-lgray'">
    <div class="d-flex fw-wrap ai-center pt-5 pb-5">
      <div class="d-flex ai-center mr-2">
        <input 
          type="checkbox" 
          :name="name"
          :checked="isSelected"
          @change="isSelected=!isSelected"
          class="mr-2"
        />
        <label :for="name">{{ text }}</label>
      </div>
      <img :src="'/assets/img/icon/'+icon" alt="Image Icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialCard04',
  props: {
    icon: { type: String, default: 'lab-01.svg' },
    text: { type: String, default: 'ลงทะเบียนส่งตรวจ' },
    isSelected: { type: Boolean, default: false },
  },
}
</script>
