<template>
  <div v-if="type == 'Add'" 
    class="ss-card ss-card-02 style-add border bcolor-01"
    @click="()=>$emit('input-add')"
  >
    <div class="wrapper">
      <img src="/assets/img/icon/plus.svg" alt="Image Icon" />
      <p class="color-01">เพิ่มรายการสิ่งส่งตรวจ</p>
    </div>
  </div>
  <div v-else class="ss-card ss-card-02 border bcolor-fgray">
    <div class="wrapper">
      <div class="form-group">
        <label class="p color-gray">ประเภทของรายการสิ่งส่งตรวจ</label>
        <input
          type="text" placeholder="Fallopian tube" required
          :name="name" :value="value" 
          @input="(event)=>$emit('input', event.target.value)" 
        />
      </div>
      <div class="form-group">
        <label class="p color-gray">จำนวนถุง</label>
        <input
          type="number" placeholder="00" min="0" step="1" required
          :name="name+'_count'" :value="valueCount"
          @input="(event)=>$emit('input-count', event.target.value)" 
        />
      </div>
      <div class="btns">
        <a 
          href="javascript:" class="btn-icon" :class="{ 'disabled': itemIndex == 0 }" 
          @click="()=>$emit('input-delete', itemIndex)"
        >
          <img src="/assets/img/icon/delete.svg" alt="Image Icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialCard02',
  props: {
    type: { type: String, default: '' },
    itemIndex: { type: Number, default: 0 },
    name: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    valueCount: { type: [String, Number], default: '' }
  },
  emits: [ 'input', 'input-count', 'input-delete', 'input-add' ]
}
</script>
