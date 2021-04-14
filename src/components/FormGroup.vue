<template>
  <div v-if="type === 'textarea'" class="form-group">
    <label class="p color-gray">{{label}}</label>
    <div :class="wrapperClass">
      <textarea rows="5"
        :name="name" 
        :placeholder="placeholder" 
        :value="value" 
        @input="(event)=>$emit('input', event.target.value)" 
        :required="required? true: false"
      ></textarea>
      <div v-if="icon" class="icon">
        <img :src="'/assets/img/icon/'+icon+'.svg'" alt="Image Icon" />
      </div>
    </div>
  </div>
  <div v-if="type === 'select'" class="form-group">
    <label class="p color-gray">{{label}}</label>
    <div :class="wrapperClass">
      <select 
        :name="name" 
        :value="value" 
        @input="(event)=>$emit('input', event.target.value)" 
        :required="required? true: false"
      >
        <option v-for="option in options" :value="option.value" 
        :selected="value == option.value" :key="option.value">
          {{option.text}}
        </option>
      </select>
      <div v-if="icon" class="icon">
        <img :src="'/assets/img/icon/'+icon" alt="Image Icon" />
      </div>
    </div>
  </div>
  <div v-else class="form-group">
    <label class="p color-gray">{{label}}</label>
    <div :class="wrapperClass">
      <input
        :type="type" 
        :name="name" 
        :placeholder="placeholder" 
        :value="value" 
        @input="(event)=>$emit('input', event.target.value)" 
        :required="required? true: false" 
      />
      <div v-if="icon" class="icon">
        <img :src="'/assets/img/icon/'+icon" alt="Image Icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    value: { type: String, default: '' },
    label: { type: String, default: 'From Group' },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    options: { type: Array, default: [] },
    wrapperClass: { type: String, default: '' },
    icon: { type: String, default: '' },
  },
  emits: [ 'input' ]
}
</script>
