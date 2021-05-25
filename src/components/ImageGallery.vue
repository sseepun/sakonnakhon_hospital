<template>
  <div class="d-flex jc-space-between color-gray">
    <p>Microscopie Picture</p>
    <p>{{files.length}}/10</p>
  </div>
  <div class="gallery-grids">
    <div 
      v-for="(file, j) in files" :key="j" 
      class="grid sm-1-3 xs-1-3 mt-0"
    >
      <div v-if="j < 3" class="ss-img square bradius-2">
        <div class="img-bg" :style="'background-image:url(\''+file.path+'\');'"></div>
        <div v-if="j < 2 || (j==1 && files.length==2)" class="hover-container op-100">
          <Button 
            text="ลบ" @click="$emit('file-remove', j)" 
            classer="btn-color-12 btn-sm"
          />
        </div>
        <div 
          v-else class="hover-container op-100 cursor-pointer" 
          @click="$emit('click-popup', true)"
        >
          <h3 class="fw-600 color-white">
            {{files.length - 2}}+
          </h3>
        </div>
      </div>
    </div>
    <div v-for="j in [3, 2, 1]" :key="files.length+'_'+j" class="grid sm-1-3 xs-1-3 mt-0">
      <div 
        v-if="j - files.length > 0"
        class="ss-img square bradius-2 bg-sgray"
      >
        <div class="hover-container op-100">
          <Button 
            type="Button File" text="เพิ่มรูปภาพ" classer="btn-color-11 btn-sm" 
            :key="files.length+'_'+j" @input-file="$emit('file-add', $event)" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    files: { type: Array, default: [] }
  },
  data() {
    return {
      isActivePopup: false
    }
  },
  emits: [ 'file-add', 'file-remove', 'click-popup' ]
}
</script>
