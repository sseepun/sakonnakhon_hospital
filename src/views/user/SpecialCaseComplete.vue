<template>
  <Topnav :userRole="userRole" />

  <section class="section-full">
    <div class="container">

      <div class="section-header" data-aos="fade-up" data-aos-delay="0">
        <div class="btns mt-0">
          <a href="/user/special-cases" class="btn color-gray h-color-01">
            <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
            ย้อนกลับ
          </a>
        </div>
        <div class="header-wrapper">
          <div class="text-container pr-2">
            <span class="h3">
              รายละเอียดส่งตรวจพิเศษ/ย้อมพิเศษ/อณูพยาธิวิทยา
            </span>
            <span class="ss-sep hide-mobile"></span>
            <span class="ss-tag">รอผลตรวจ</span>
          </div>
          <div class="btns hide-mobile">
            <Button 
              text="ยกเลิก" @click="cancelAlert = !cancelAlert"
              classer="btn-color-06 mr-3" :prepend="true" icon="close-white.svg" 
            />
            <Button 
              text="เสร็จสิ้น" href="/user/special-cases" 
              classer="btn-color-01" :prepend="true" icon="check-white.svg" 
            />
          </div>
          <div class="btns ws-nowrap show-mobile">
            <Button 
              text="ยกเลิก" @click="cancelAlert = !cancelAlert" 
              classer="btn-color-06 btn-sm mr-1" 
            />
            <Button text="เสร็จสิ้น" href="/user/special-cases" classer="btn-color-01 btn-sm" />
          </div>
        </div>
      </div>

      <div class="stripe stripe-warning section-px" data-aos="fade-up" data-aos-delay="150">
        <img src="/assets/img/icon/alert-yellow.svg" alt="Image Icon" />
        <p class="color-11">
          หมายเหตุ: กรุณาตรวจสอบข้อมูลให้ถูกต้องครบถ้วนก่อนการส่งข้อมูล เพื่อประโยชน์แก่ผู้ป่วยและแพทย์ผู้ทำการรักษา
        </p>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลส่งตรวจ</p>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">

          <!-- First row -->
          <div class="grid xl-15 lg-20 md-1-3 sm-50">
            <FormGroup type="plain" label="รหัสใบส่งตรวจ" value="S20-00001" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3 sm-50">
            <FormGroup type="plain" label="ประเภททะเบียน" value="สีย้อมพิเศษ" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3 sm-50">
            <FormGroup type="plain" label="เลขที่หนังสือ" value="123456789" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3 sm-50">
            <FormGroup type="plain" label="วันที่หนังสือ" value="11/02/2564" />
          </div>
          <div class="grid xl-20 lg-40 md-1-3 sm-50">
            <FormGroup type="plain" label="เจ้าหน้าที่ผู้นำส่ง" value="นันทวรรณ วิลิศมาหรา" />
          </div>
          <div class="grid xl-20 lg-40 md-1-3 sm-50">
            <FormGroup type="plain" label="เบอร์โทรติดต่อ" value="041550880 ต่อ 1200" />
          </div>
          <div class="sep"></div>

          <!-- Second row -->
          <div class="grid xl-15 lg-20 md-1-3 sm-50">
            <FormGroup type="plain" label="หมายเหตุ" value="B715/e" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3 sm-50">
            <FormGroup type="plain" label="จำนวนราย" value="B715/e" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3 sm-50">
            <FormGroup type="plain" label="จำนวน Block" value="3" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3 sm-50">
            <FormGroup type="plain" label="จำนวน Slide" value="2" />
          </div>
          <div class="grid xl-20 lg-40 md-1-3 sm-50">
            <FormGroup type="plain" label="ส่ง Lab" value="9 :  บริษัท N Health" />
          </div>
          <div class="grid xl-20 lg-40 md-1-3 sm-50">
            <FormGroup type="plain" label="กำหนดวันที่ต้องรายงานผล (Due Date)" value="20/02/2564" />
          </div>

        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <div class="section-px border-bottom mt-2">
          <h6 class="h5">รายการส่งตรวจ</h6>
        </div>
        <div class="mt-3">
          <DataTable 
            :rows="rows" 
            :columns="[
              { key: 'prefix', text: 'คำนำหน้า'},
              { key: 'name', text: '*ชื่อ นามสกุล' },
              { key: 'hn', text: '*HN' },
              { key: 'card_type', text: '*สิทธิการรักษา' },
              { key: 'block_no', text: '*Block No.' },
              { key: 'immuno', text: 'ลงรายการย้อม Immuno' },
              { key: 'histo', text: 'ลงรายการย้อม Histo' },
              { key: 'note', text: 'Note' },
              { key: 'register_no', text: 'Register No' },
            ]"
            :withOptions="false"
            :orders="[
              { key: 'sent_date-desc', text: 'วันที่ส่งตรวจ (ใหม่สุด)' },
              { key: 'sent_date-asc', text: 'วันที่ส่งตรวจ (เก่าสุด)' },
            ]"
          />
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-6" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          ข้อมูลส่งตรวจ 
        </p>
      </div>
      <div class="section-px section-py-grid pos-relative pb-4" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div class="grid xl-40 lg-60 md-80 sm-100 xs-100">
            <FormGroup 
              type="file" name="file" label="อัปโหลดเอกสารรายงานผล"
              :icon="'upload.svg'"
            />

            <div v-if="files.length" class="grids">
              <div v-for="(file, j) in files" :key="j" class="grid sm-100">
                <div class="d-flex jc-space-between">
                  <div class="d-flex ai-center">
                    <img class="mr-3" src="/assets/img/icon/clip.svg" alt="Image Icon" />
                    {{file.name}}
                  </div>
                  <div class="d-flex ai-center">
                    <a class="mr-3" target="_blank" :href="file.path">
                      <img src="/assets/img/icon/download.svg" alt="Image Icon" />
                    </a>
                    <a href="javascript:" @click="removeFile(file.id)">
                      <img src="/assets/img/icon/delete.svg" alt="Image Icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="grids">
              <div class="grid sm-100">
                <p class="color-15">
                  ไม่มีเอกสารรายงานผล
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Alert Popup -->
  <div class="popup-container" :class="{ 'active': cancelAlert }">
    <div class="wrapper">
      <div class="close-filter" @click="cancelAlert = !cancelAlert"></div>
      <form action="/" method="GET" class="w-full"  @submit="onSubmitProfile">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="cancelAlert = !cancelAlert">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยกเลิกการส่งตรวจ</h6>
              </div>
              <div class="btns">
                <Button 
                  text="ยืนยันการยกเลิก" href="/user/special-cases"
                  classer="btn-color-06 hide-mobile" :prepend="true" icon="close-white.svg" 
                />
                <Button 
                  text="ยืนยัน" href="/user/special-cases"
                  classer="btn-color-06 btn-sm show-mobile"
                />
              </div>
            </div>
          </div>
          <div class="body pt-4 pb-5">
            <p class="color-gray">หมายเหตุ</p>
            <p class="mt-2">
              คุณสามารถยกเลิกการส่งตรวจได้ เนื่องจากอาจจะเกิดขึ้นผิดพลาดบางอย่าง เกิดขึ้น เช่น ความผิดพลาดในการระบุข้อมูล หากคุณ “ยกเลิก” รายการนี้จะไม่ ถูกนำส่งตรวจไปภายนอก กรุณากดปุ่ม “ยืนยันการยกเลิก” เพื่อยืนยันการยกเลิกนี้
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>

  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard02 from '../../components/SpecialCard02';
import DataTable from '../../components/DataTable';

export default {
  name: 'SpecialCaseCompletePage',
  components: {
    Topnav,
    SpecialCard02,
    DataTable
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      cancelAlert: false,
      rows: [
       {
          prefix: { type: 'text', text: 'นางสาว' },
          name: { type: 'text', text: 'จริงใจ ยินดี' },
          hn: { type: 'text', text: '478312' },
          card_type: { type: 'text', text: 'ประกันสังคม' },
          block_no: { type: 'text', text: 'P64-772 B' },
          immuno: { type: 'text', text: 'CK20,CK7,AE1AE3,Ki-67,LCA,S-100,SOX-10' },
          histo: { type: 'text', text: '-' },
          note: { type: 'text', text: '-' },
          register_no: { type: 'text', text: 'EX64-00001' }
        },
        {
          prefix: { type: 'text', text: 'นางสาว' },
          name: { type: 'text', text: 'สุดยอด จริงจริง' },
          hn: { type: 'text', text: '129821' },
          card_type: { type: 'text', text: 'ประกันสังคม' },
          block_no: { type: 'text', text: 'P64-772 B' },
          immuno: { type: 'text', text: '-' },
          histo: { type: 'text', text: 'Acid Fast Bacilli (AFB)' },
          note: { type: 'text', text: '-' },
          register_no: { type: 'text', text: 'EX64-00002' }
        },
        {
          prefix: { type: 'text', text: 'นาย' },
          name: { type: 'text', text: 'ความรัก แสนสุข' },
          hn: { type: 'text', text: '245199' },
          card_type: { type: 'text', text: 'ประกันสังคม' },
          block_no: { type: 'text', text: 'P64-772 B' },
          immuno: { type: 'text', text: '-' },
          histo: { type: 'text', text: 'Acid Fast Bacilli (AFB)' },
          note: { type: 'text', text: '-' },
          register_no: { type: 'text', text: 'EX64-00003' }
        }
      ],
      files: [
        {
          id: 1,
          name: 'รายงานผล รพ.สกลนคร 28/10/2563.pdf',
          path: '#'
        },
        {
          id: 2,
          name: 'รายงานผล รพ.สกลนคร 29/10/2563.pdf',
          path: '#'
        },
        {
          id: 3,
          name: 'รายงานผล รพ.สกลนคร 30/10/2563.pdf',
          path: '#'
        }
      ]
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {
    removeFile(id) {
      this.files = this.files.filter(function(file){
        return file.id != id;
      });
    }
  }
}
</script>
