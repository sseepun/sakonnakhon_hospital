<template>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />

  <div style="padding:20px; background:#e4e4e4; overflow-x:auto;">
    <div ref="pdfPage" style="transform-origin:top left; width:900px; height:1273px; padding:50px 40px; margin:0 auto; background:#ffffff;">
      
      <table style="width:100%; border-spacing:0; border-top:1px solid #000000; border-left:1px solid #000000;">
        <tbody>
          <tr v-for="row in [1,2,3,4,5,6]" :key="row">
            <td 
              v-for="col in [1,2,3,4,5,6,7]" :key="col" align="center" 
              style="padding:5px; border-bottom:1px solid #000000; border-right:1px solid #000000;"
            >
              <div style="font-family:'Sarabun',sans-serif; font-size:14px; line-height:1.8; font-weight:300; color:#000000;">
                รพศ.สกลนคร
              </div>
              <div style="font-family:'Sarabun',sans-serif; font-size:16px; line-height:1.8; font-weight:300; color:#000000;">
                Gynecology (CG)
              </div>
              <div style="font-family:'Sarabun',sans-serif; font-size:15px; line-height:1.8; font-weight:600; color:#000000;">
                CG20-00001
              </div>
              <div style="font-family:'Sarabun',sans-serif; font-size:19px; line-height:1.8; font-weight:600; color:#000000;">
                A{{row*8 + col}}
              </div>
              <div style="font-family:'Sarabun',sans-serif; font-size:14px; line-height:1.8; font-weight:300; color:#000000;">
                01/03/2021
              </div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PdfTagFormPage',
  mounted() {
    // window.addEventListener('resize', this.onResize);
    // this.onResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      if(window.innerWidth > 940){
        this.$refs.pdfPage.style.transform = 'scale(1)';
      }else{
        this.$refs.pdfPage.style.transform = 'scale('+((window.innerWidth-40)/900)+')';
      }
    }
  }
}
</script>
