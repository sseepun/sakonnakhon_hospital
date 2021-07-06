<template>
  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" />

  <section class="section-full">
    <div class="container">

      <div class="section-header" data-aos="fade-up" data-aos-delay="0">
        <div class="btns mt-0">
          <a href="/user/cases" class="btn color-gray h-color-01">
            <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
            ย้อนกลับ
          </a>
        </div>
        <div class="header-wrapper">
          <div class="text-container pr-2">
            <span class="h3">
              วินิจฉัยเซลล์
            </span>
            <span class="ss-sep hide-mobile"></span>
            <span class="ss-tag ss-tag-info">ขอวินิจฉัยจากภายนอก</span>
            <span class="ss-sep ml-4 mr-3 hide-mobile"></span>
            <span class="ss-tag sm ss-tag-red">ด่วน</span>
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
        <p class="fw-400">ข้อมูลผู้ป่วย</p>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="รหัสใบส่งตรวจ" value="CG20-00001" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="HN" value="1088052" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="AN" value="1254454" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ห้องตรวจ" value="สูตินรีเวช" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="วันที่เก็บตัวอย่าง" value="06/01/2638," />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อผู้ป่วย" value="ณรงค์ฤทธิ์ พรมบุรี" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ประเภทผู้ป่วย" value="ผู้ป่วยนอก (IPD)" />
          </div>
          <div class="grid lg-60 md-1-3">
            <FormGroup type="plain" label="สิทธิการรักษา" value="สวัสดิการข้าราชการ" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อแพทย์" value="พญ. สุพิภัทฎิพร มานะ" />
          </div>
          <div class="grid lg-80 md-1-3">
            <FormGroup type="plain" label="รหัสแพทย์" value="47109" />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="หน่วยงานที่ส่ง" value="-" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="เบอร์โทรหน่วยงาน" value="-" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อเจ้าหน้าที่ผู้ประสานงาน" value="-" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="เบอร์โทรผู้ประสานงาน" value="-" />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-6" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          ส่งตรวจภายนอก 
        </p>
      </div>
      <div class="section-px section-py-grid pos-relative pb-4" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div class="grid lg-60 sm-100">
            <FormGroup type="plain" label="Type of Speciment" value="Tdt, CD1a, CD3, CD4, CD5, CD8, CD30, CD791, CD117, CD19, ki67, EMA, AE1/AE3, cyclinD1 in HX20-28372" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="Received date" value="04/11/2563" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="Obtained date" value="04/11/2563" />
          </div>
        </div>
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

  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard02 from '../../components/SpecialCard02';
import DataTable from '../../components/DataTable';

export default {
  name: 'CellDiagnoseTransferPage',
  components: {
    Topnav,
    SpecialCard02,
    DataTable
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 1,
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
