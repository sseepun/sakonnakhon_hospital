<template>
  <div v-if="type === 'textarea'" class="form-group" :class="classer">
    <label class="p color-gray">
      {{label}} <div v-if="errorText" class="error">{{errorText}}</div>
    </label>
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
  <div v-if="type === 'select'" class="form-group" :class="classer">
    <label class="p color-gray">
      {{label}} <div v-if="errorText" class="error">{{errorText}}</div>
    </label>
    <div :class="wrapperClass">
      <select 
        :name="name" 
        :value="value" 
        @input="(event)=>$emit('input', event.target.value)" 
        :required="required? true: false"
      >
        <option v-for="option in options" :value="option.id" 
        :selected="value == option.id || value == option.value" :key="option.id">
          {{option.value}}
        </option>
      </select>
      <div v-if="icon" class="icon">
        <img :src="'/assets/img/icon/'+icon" alt="Image Icon" />
      </div>
    </div>
  </div>
  <div v-else class="form-group" :class="classer">
    <label class="p color-gray">
      {{label}} <div v-if="errorText" class="error">{{errorText}}</div>
    </label>
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
    classer: { type: String, default: '' },
    value: { type: String, default: '' },
    label: { type: String, default: 'From Group' },
    errorText: { type: String, default: '' },
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
