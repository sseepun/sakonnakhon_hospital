<template>
  <div class="select-search">
    <input 
      type="text" class="xs w-full" 
      :placeholder="placeholder" 
      :required="required? true: false" 
      :readonly="readonly? true: false" 
      :disabled="disabled? true: false" 
      :value="selfValue" 
      @input="(event)=>onChange(event.target.value)" 
    />
    <div class="dropdown">
      <div class="scroll-y-wrapper">
        <div v-if="selfOptions.length" class="options">
          <div 
            v-for="(op, i) in selfOptions" :key="i" class="option" 
            @click="onUpdate(op)" 
          >
            {{op}}
          </div>
        </div>
        <div v-else class="options">
          <div class="option disabled">
            ไม่พบข้อมูล
          </div>
          <div class="option more" @click="onCreate()">
            <div class="option-icon">
              <img src="/assets/img/icon/plus.svg" alt="Image Icon" />
            </div>
            สร้างใหม่
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectSearch',
  props: {
    value: { type: [String, Number, Date], default: '' },
    options: { type: Array, default: [] },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false }
  },
  data() {
    return {
      selfValue: this.copyString(this.value),
      selfOptions: [ ...this.options ],
      disabled: false
    }
  },
  methods: {
    copyString(s) {
      return (' ' + s).slice(1);
    },
    onChange(val) {
      this.selfValue = val;
      if(!val){
        this.selfOptions = [ ...this.options ];
      }else{
        this.selfOptions = this.options.filter(function(d){
          return d.indexOf(val) > -1;
        });
      }
    },
    onUpdate(val) {
      this.selfValue = val;
    },
    onCreate() {
      this.disabled = true;
      this.selfValue = '380405';
    }
  }
}
</script>
