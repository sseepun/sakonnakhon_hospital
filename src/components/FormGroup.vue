<template>

  <div v-if="type === 'textarea'" class="form-group" :class="classer">
    <label class="p color-gray" :class="{ 'focused': isFocused }">
      {{label}} <div v-if="errorText" class="error">{{errorText}}</div>
    </label>
    <div :class="wrapperClass">
      <textarea rows="5"
        :name="name" 
        :placeholder="placeholder" 
        v-model="value" 
        @input="(event)=>$emit('input', event.target.value)" 
        @focusin="isFocused = true" @focusout="isFocused = false" 
        :required="required? true: false"
      ></textarea>
      <div v-if="icon" class="icon">
        <img :src="'/assets/img/icon/'+icon" alt="Image Icon" />
      </div>
    </div>
  </div>

  <div v-else-if="type === 'select'" class="form-group" :class="classer">
    <label class="p color-gray" :class="{ 'focused': isFocused }">
      {{label}} <div v-if="errorText" class="error">{{errorText}}</div>
    </label>
    <div :class="wrapperClass">
      <select 
        :name="name" 
        v-model="value" 
        @input="(event)=>$emit('input', event.target.value)" 
        @focusin="isFocused = true" @focusout="isFocused = false" 
        :required="required? true: false"
      >
        <option v-for="option in options" :value="option.value" 
        :selected="option.value == value || option.text == value" :key="option.value">
          {{option.text}}
        </option>
      </select>
      <div v-if="icon" class="icon">
        <img :src="'/assets/img/icon/'+icon" alt="Image Icon" />
      </div>
    </div>
  </div>

  <div v-else-if="type == 'plain'" class="form-group" :class="classer">
    <label class="p color-gray">
      {{label}} <div v-if="errorText" class="error">{{errorText}}</div>
    </label>
    <div :class="wrapperClass">
      <div class="plain-text">
        <p>{{value}}</p>
      </div>
    </div>
  </div>

  <div v-else-if="type == 'datepicker'" class="form-group" :class="classer">
    <label class="p color-gray" :class="{ 'focused': isFocused }">
      {{label}} <div v-if="errorText" class="error">{{errorText}}</div>
    </label>
    <DatePicker 
      v-model="value" is-inline title-position="left" 
      :is-required="required? true: false" 
      @click="handleInput"
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div :class="wrapperClass">
          <input
            type="text" 
            :name="name" 
            :placeholder="placeholder" 
            :value="inputValue"
            v-on="inputEvents" 
            @focusin="isFocused = true" @focusout="isFocused = false" 
          />
          <div v-if="icon" class="icon">
            <img :src="'/assets/img/icon/'+icon" alt="Image Icon" />
          </div>
        </div>
      </template>
    </DatePicker>
  </div>

  <div v-else class="form-group" :class="classer">
    <label class="p color-gray" :class="{ 'focused': isFocused }">
      {{label}} <div v-if="errorText" class="error">{{errorText}}</div>
    </label>
    <div :class="wrapperClass">
      <input
        :type="type" 
        :name="name" 
        :placeholder="placeholder" 
        v-model="value" 
        @input="(event)=>$emit('input', event.target.value)" 
        @focusin="isFocused = true" @focusout="isFocused = false" 
        :required="required? true: false"
        :disabled="disabled? true: false"
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
    value: { type: [String, Number, Date], default: '' },
    label: { type: String, default: 'From Group' },
    errorText: { type: String, default: '' },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    options: { type: Array, default: [] },
    wrapperClass: { type: String, default: '' },
    icon: { type: String, default: '' },
    isFocused: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    handleInput() {
      return this.$emit('input', this.value);
    }
  },
  emits: [ 'input' ]
}
</script>
