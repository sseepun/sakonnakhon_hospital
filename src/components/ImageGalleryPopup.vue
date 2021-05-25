<style scoped>
  .slide-container{
    position:relative; display:block; width:100%; background:#c8c8c8;
    border-radius:.375rem; overflow:hidden;
  }
  .slide-container .slide > .wrapper{
    position:relative; display:flex; align-items:center; justify-content:center;
    height:calc(100vh - 27rem);
  }
  .slide-container .slide img{
    display:block; width:auto; max-width:100%; height:auto; max-height:100%;
  }
  .slide-container .slide a.btn{position:absolute; top:1rem; right:1rem;}
  .slide-container .arrows{
    position:absolute; top:calc(50% - .875rem); left:0; right:0; pointer-events:none;
    display:flex; align-content:center; justify-content:space-between;
  }
  .slide-container .arrows > .arrow{
    display:block; height:1.75rem; padding:0 .75rem; pointer-events:auto;
  }
  .slide-container .arrows > .arrow:hover{opacity:.7;}
  .slide-container .arrows > .arrow img{display:block; height:100%; width:auto;}
  .slide-container .arrows > .arrow.arrow-next img{transform:rotate(180deg);}

  .slide-preview{
    position:relative; display:block; width:calc(100% + 1rem);
    margin:1rem -.5rem 0 -.5rem; overflow:hidden;
  }
  .slide-preview .slide{padding:0 .5rem;}
  .slide-preview .slide > .wrapper{
    position:relative; width:100%; padding:100% 0 0 0; border-radius:.375rem; overflow:hidden;
  }
  .slide-preview .slide .img-bg{
    position:absolute; top:0; bottom:0; left:0; right:0; background-size:cover;
    background-position:center;
  }

  @media screen and (max-width:991.98px){
    .btn.btn-file{display:block; margin:1rem 0 0 0;}
    .slide-container .slide > .wrapper{height:calc(100vh - 28rem);}
  }
  @media screen and (max-width:767.98px){
    .btn.btn-file{margin:.5rem 0 0 0;}
    .slide-container .slide > .wrapper{height:calc(100vh - 31rem);}
    .slide-preview{width:calc(100% + .5rem); margin:.5rem -.25rem 0 -.25rem;}
    .slide-preview .slide{padding:0 .25rem;}
  }
  @media screen and (max-width:575.98px){
    .slide-container .slide > .wrapper{height:calc(100vh - 31rem);}
  }
</style>
<template>
  <div class="popup-container" :class="{ 'active': isActive }">
    <div class="wrapper">
      <div class="close-filter" @click="$emit('click-popup', true)"></div>
      <div class="popup-box xxl">
        <div class="header">
          <div class="btns mt-0">
            <a href="javascript:" class="btn btn-close" @click="$emit('click-popup', true)">
              <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
              ยกเลิก
            </a>
          </div>
          <div class="header-wrapper fw-unset">
            <div class="text-container pr-2">
              <h6 class="h3">ภาพถ่ายจากกล้องจุลทรรศน์ (Microscopie Picture)</h6>
            </div>
            <div class="d-flex ai-center">
              <Button 
                type="Button File" text="เพิ่มรูปภาพ" 
                classer="d-block btn-color-13 mr-2 hide-mobile" 
                :prepend="true" icon="plus-fgray.svg" 
                @input-file="$emit('file-add', $event)" 
              />
              <Button 
                text="บันทึก" @click="$emit('click-popup', true)" 
                classer="d-block btn-color-01 hide-mobile" 
                :prepend="true" icon="check-white.svg" 
              />
              <Button 
                text="บันทึก" classer="d-block btn-color-01 btn-sm show-mobile" 
                @click="$emit('click-popup', true)" 
              />
            </div>
          </div>
        </div>
        <div class="body pt-4 pb-6">

          <div v-if="files.length">
            <div class="slide-container">
              <div class="slides">
                <div v-for="(file, i) in files" :key="'0_'+i" class="slide">
                  <div class="wrapper">
                    <img :src="file.path" alt="Image Content" />
                    <Button 
                      text="ลบ" @click="$emit('file-remove', i)" 
                      classer="btn-color-12 btn-sm" 
                    />
                  </div>
                </div>
                <div v-for="(file, i) in files" :key="'0_'+i" class="slide">
                  <div class="wrapper">
                    <img :src="file.path" alt="Image Content" />
                    <Button 
                      text="ลบ" @click="$emit('file-remove', i)" 
                      classer="btn-color-12 btn-sm" 
                    />
                  </div>
                </div>
              </div>
              <div class="arrows">
                <a class="arrow arrow-prev" href="javascript:">
                  <img src="/assets/img/icon/chev-left-white.svg" alt="Image Icon" />
                </a>
                <a class="arrow arrow-next" href="javascript:">
                  <img src="/assets/img/icon/chev-left-white.svg" alt="Image Icon" />
                </a>
              </div>
            </div>
            <div class="slide-preview">
              <div class="slides">
                <div v-for="(file, i) in files" :key="'1_'+i" class="slide">
                  <div class="wrapper">
                    <div class="img-bg" :style="'background-image:url(\''+file.path+'\');'"></div>
                  </div>
                </div>
                <div v-for="(file, i) in files" :key="'1_'+i" class="slide">
                  <div class="wrapper">
                    <div class="img-bg" :style="'background-image:url(\''+file.path+'\');'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="d-flex">
            <Button 
              type="Button File" text="เพิ่มรูปภาพ" 
              classer="d-block btn-color-13 btn-sm show-mobile" 
              :prepend="true" icon="plus-fgray.svg" 
              @input-file="$emit('file-add', $event)" 
            />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGalleryPopup',
  props: {
    files: { type: Array, default: [] },
    isActive: { type: Boolean, default: false }
  },
  mounted() {
    var slideContainer = $('.slide-container');
    var slidePreview = $('.slide-preview');
    slideContainer.find('.slides').slick({
      centerMode: true, centerPadding: 0, slidesToShow: 1, infinite: true,
      swipeToSlide: true, focusOnSelect: true, autoplay: false, speed: 600,
      dots: false, arrows: true,
      prevArrow: slideContainer.find('.arrow-prev'),
      nextArrow: slideContainer.find('.arrow-next'),
      asNavFor: slidePreview.find('> .slides')
    });
    slidePreview.find('> .slides').slick({
      centerMode: true, centerPadding: 0, slidesToShow: 5, infinite: true,
      swipeToSlide: true, focusOnSelect: true, autoplay: false, speed: 600,
      arrows: false, dots: false, asNavFor: slideContainer.find('> .slides'),
      responsive: [
        { breakpoint: 767.98, settings: { slidesToShow: 4 } },
        { breakpoint: 575.98, settings: { slidesToShow: 3 } }
      ]
    });
  },
  beforeUnmount() {
    var slideContainer = $('.slide-container');
    var slidePreview = $('.slide-preview');
    slideContainer.find('.slides').slick('unslick');
    slidePreview.find('.slides').slick('unslick');
  },
  emits: [ 'file-add', 'file-remove', 'click-popup' ]
}
</script>
