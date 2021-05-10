<template>
  <div class="ss-card ss-card-04" :class="{ 'selected': isSelected }">
    <div class="checkbox-single">
      <input 
        type="checkbox" :name="name" :id="'card04_'+randomId"
        :checked="isSelected" @change="isSelected = !isSelected"
      />
      <label :for="'card04_'+randomId">
        <div class="wrapper">
          <div class="text">
            {{ text }}
          </div>
          <div class="icon">
            <img :src="'/assets/img/icon/'+icon" alt="Image Icon" />
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialCard04',
  props: {
    icon: { type: String, default: 'lab-01.svg' },
    name: { type: String, default: '' },
    text: { type: String, default: 'ลงทะเบียนส่งตรวจ' },
    isSelected: { type: Boolean, default: false },
  },
  data() {
    return {
      randomId: Math.round(Math.random() * 1000000)
    }
  }
}
</script>
