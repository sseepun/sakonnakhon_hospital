<template>

  <div v-if="errorText" class="ss-card-05-text error">{{errorText}}</div>

  <div v-if="type == 'Add'" 
    class="ss-card ss-card-05 style-add border bcolor-01"
    @click="()=>$emit('input-add')"
  >
    <div class="wrapper">
      <img src="/assets/img/icon/plus.svg" alt="Image Icon" />
      <p class="color-01">เพิ่มถุง</p>
    </div>
  </div>

  <div v-else-if="type == 'Complete'" class="ss-card ss-card-05 style-complete border bcolor-fgray bg-14">
    <div class="wrapper">
      <div class="block">
        <p class="fw-300 color-gray w-full">
          ถุงที่ {{itemIndex+1}}
        </p>
        <p v-if="value && valueCount" class="fw-500 mt-2">
          {{leading}} {{value}}{{1}} - {{value}}{{1+valueCount}}
        </p>
        <p v-else class="fw-500 mt-2">&nbsp;</p>
      </div>
      <div class="block">
        <p class="fw-300 color-gray w-full">
          จำนวนสไลด์
        </p>
        <p v-if="value && valueCount" class="fw-500 color-01 mt-2">
          {{valueCount}}
        </p>
        <p v-else class="fw-500 mt-2">&nbsp;</p>
      </div>
    </div>
  </div>

  <div v-else class="ss-card ss-card-05 border bcolor-fgray" :class="{ 'error': errorText }">
    <div class="wrapper">
      <div class="block">
        <p class="fw-600 color-01 w-full">
          ถุงที่ {{itemIndex+1}}
        </p>
        <div class="form-group mt-1">
          <label class="p color-gray">
            {{leading}}
          </label>
          <div class="d-flex ai-center">
            <div class="prepend">
              <div v-if="value" class="icon icon-text">{{value}}</div>
              <div v-else class="icon icon-text">A</div>
              <input 
                type="text" class="text-center" placeholder="1" readonly 
                :value="valueCount? 1: ''" 
              />
            </div>
            <div class="ml-2 mr-2">&#8211;</div>
            <div class="prepend">
              <div v-if="value" class="icon icon-text">{{value}}</div>
              <div v-else class="icon icon-text">A</div>
              <input 
                type="text" class="text-center" placeholder="32" readonly 
                :value="valueCount? 1+valueCount: ''" 
              />
            </div>
          </div>
        </div>
      </div>
      <div class="block">
        <p class="fw-300 color-dark w-full">
          DECALCIFICATION
        </p>
        <div class="d-flex ai-end mt-1">
          <div class="form-group" :class="{ 'error': errorText }">
            <label class="p color-gray" :class="{ 'focused': valueCountFocused }">
              จำนวน
            </label>
            <input
              type="number" placeholder="00" min="0" step="1" 
              :name="name+'_count'" v-model="valueCount" :required="required" 
              @input="(event)=>$emit('input-count', event.target.value)" 
              @focusin="valueCountFocused = true" @focusout="valueCountFocused = false"
            />
          </div>
          <div class="form-group" :class="{ 'error': errorText }">
            <label class="p color-gray" :class="{ 'focused': valueFocused }">
              Labeled
            </label>
            <input
              type="text" placeholder="A1, A2, A8" maxlength="2" 
              :name="name" v-model="value" :required="required" 
              @input="(event)=>$emit('input', event.target.value)" 
              @focusin="valueFocused = true" @focusout="valueFocused = false"
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
    </div>
  </div>

</template>

<script>
export default {
  name: 'SpecialCard05',
  props: {
    type: { type: String, default: '' },
    itemIndex: { type: Number, default: 0 },
    leading: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    valueFocused: { type: Boolean, default: false },
    valueCount: { type: [String, Number], default: '' },
    valueCountFocused: { type: Boolean, default: false },
    errorText: { type: String, default: '' },
    required: { type: Boolean, default: false }
  },
  emits: [ 'input', 'input-count', 'input-delete', 'input-add' ]
}
</script>
