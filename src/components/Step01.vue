<template>
  <div 
    class="step-01" :class="{ 'completed': activeIndex >= stepNum }"
    :style="{ '--nstep': 5, '--istep': activeIndex }"
  >
    <div class="wrapper">
      <div class="inner-wrapper">

        <div class="step" :class="{ 'current': activeIndex == 1, 'active': activeIndex > 1 }">
          <div class="icon">
            <img src="/assets/img/icon/step-01.svg" alt="Image Icon" />
            <img class="checked" src="/assets/img/icon/check-white.svg" alt="Image Icon" />
          </div>
          <div class="text-container">
            <h6 class="p sm">Step 1</h6>
            <p>{{texts[0]}}</p>
          </div>
        </div>
          
        <div class="step-sep"></div>
        <div class="step" :class="{ 'current': activeIndex == 2, 'active': activeIndex > 2 }">
          <div class="icon">
            <img src="/assets/img/icon/step-02.svg" alt="Image Icon" />
            <img class="checked" src="/assets/img/icon/check-white.svg" alt="Image Icon" />
          </div>
          <div class="text-container">
            <h6 class="p sm">Step 2</h6>
            <p>{{texts[1]}}</p>
          </div>
        </div>

        <div class="step-sep"></div>
        <div class="step" :class="{ 'current': activeIndex == 3, 'active': activeIndex > 3 }">
          <div class="icon">
            <img src="/assets/img/icon/step-03.svg" alt="Image Icon" />
            <img class="checked" src="/assets/img/icon/check-white.svg" alt="Image Icon" />
          </div>
          <div class="text-container">
            <h6 class="p sm">Step 3</h6>
            <p>{{texts[2]}}</p>
          </div>
        </div>

        <div class="step-sep"></div>
        <div class="step" :class="{ 'current': activeIndex == 4, 'active': activeIndex > 4 }">
          <div class="icon">
            <img src="/assets/img/icon/step-04.svg" alt="Image Icon" />
            <img class="checked" src="/assets/img/icon/check-white.svg" alt="Image Icon" />
          </div>
          <div class="text-container">
            <h6 class="p sm">Step 4</h6>
            <p>{{texts[3]}}</p>
          </div>
        </div>

        <div class="step-sep"></div>
        <div class="step" :class="{ 'current': activeIndex == 5, 'active': activeIndex > 5 }">
          <div class="icon">
            <img src="/assets/img/icon/step-05.svg" alt="Image Icon" />
            <img class="checked" src="/assets/img/icon/check-white.svg" alt="Image Icon" />
          </div>
          <div class="text-container">
            <h6 class="p sm">Step 5</h6>
            <p>{{texts[4]}}</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step01',
  props: {
    stepNum: { type: Number, default: 5 },
    activeIndex: { type: Number, default: 1 },
    texts: { type: Array, default: [ 'เตรียมสไลด์', 'ย้อมสี', 'Screening', 'แปลผล', 'รายงาน' ] }
  }
}
</script>
