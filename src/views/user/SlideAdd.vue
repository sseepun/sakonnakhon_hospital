<template>
  <Topnav :userRole="userRole" />

  <section class="section-full">
    <div class="container">
      <form action="/user/slide-approve" method="GET" @submit="onSubmit">

        <div class="section-header" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/user/slides" class="btn color-gray h-color-01">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">แบบฟอร์มขอยืมสไลด์ / พาราฟินบล็อค</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                type="submit" text="บันทึกแบบฟอร์ม" 
                classer="btn-color-01" :prepend="true" icon="check-white.svg" 
              />
            </div>
            <div class="btns show-mobile">
              <Button type="submit" text="บันทึก" classer="btn-color-01 btn-sm" />
            </div>
          </div>
        </div>

        <div class="stripe stripe-warning section-px" data-aos="fade-up" data-aos-delay="150">
          <img src="/assets/img/icon/alert-yellow.svg" alt="Image Icon" />
          <p class="color-11">
            หมายเหตุ: กรุณาตรวจสอบข้อมูลให้ถูกต้องครบถ้วนก่อนการส่งข้อมูล เพื่อประโยชน์แก่ผู้ป่วยและแพทย์ผู้ทำการรักษา
          </p>
        </div>

        <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="150">
          <div class="grids">
           
            <div class="grid lg-1-3 md-1-3">
              <FormGroup 
                type="text" label="*ชื่อแพทย์ผู้รักษา" name="doctor_name" placeholder="นพ. ใจดี แสนสุข"
                :value="dataset.doctorName" @input="dataset.doctorName = $event" 
                :errorText="isValidated && !dataset.doctorName? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.doctorName? 'error': ''" 
              />
            </div>
            <div class="grid lg-1-3 md-1-3">
              <FormGroup 
                type="text" label="*กลุ่มงาน" name="specialty" placeholder="พยาธิวิทยา"
                :value="dataset.specialty" @input="dataset.specialty = $event" 
                :errorText="isValidated && !dataset.specialty? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.specialty? 'error': ''" 
              />
            </div>
            <div class="grid lg-25 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*เบอร์โทรติดต่อ" name="doctor_phone" placeholder="098-074-2870"
                :value="dataset.doctorPhone" @input="dataset.doctorPhone = $event" 
                :errorText="isValidated && !dataset.doctorPhone? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.doctorPhone? 'error': ''" 
              />
            </div>

            <div class="grid xl-1-3 sm-100">
              <CheckboxSet 
                label="*ประเภท" name="work_type"
                :options="[
                  { value: 1, text: 'Surgical' },
                  { value: 2, text: 'Cytology' },
                  { value: 3, text: 'Consult' }
                ]"
                :value="dataset.workType"
              />
            </div>

            <div class="grid xl-1-3 lg-1-3 md-1-3">
              <FormGroup 
                type="select" label="*เพื่อการ" name="objective" 
                :options="[
                  { value: 1, text: 'ประกอบการรักษาพยาบาล' },
                  { value: 2, text: 'ส่งรักษาต่อ' },
                  { value: 3, text: 'อื่นๆ' },
                ]" 
                :value="dataset.objective" @input="dataset.objective = $event" 
                :errorText="isValidated && !dataset.objective? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.objective? 'error': ''" 
              />
            </div>
            <div class="grid lg-30 md-1-3">
              <FormGroup
                type="text" name="other" label="โปรดระบุ" 
                :disabled="dataset.objective != 3" 
              />
            </div>
            <div class="sep"></div>
            
            <div class="grid lg-1-3 md-1-3">
              <FormGroup 
                type="text" label="*ชื่อผู้ป่วย" name="patient_name" placeholder="พัชราพร วัฒนาไพศาล"
                :value="dataset.patientName" @input="dataset.patientName = $event" 
                :errorText="isValidated && !dataset.patientName? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.patientName? 'error': ''" 
              />
            </div>
            <div class="grid lg-25 md-1-3 xs-2-3">
              <FormGroup 
                type="text" label="*เลขที่สไลด์/พาราฟินบล็อค" name="slide_no" placeholder="123456"
                :value="dataset.slideNo" @input="dataset.slideNo = $event" 
                :errorText="isValidated && !dataset.slideNo? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.slideNo? 'error': ''" 
              />
            </div>
            <div class="sep"></div>

            <div class="grid lg-1-3 md-1-3">
              <FormGroup 
                type="select" label="*ช่องทางการรับ" name="sent_type" 
                :options="[
                  { value: 1, text: 'ส่งทางไปรณีย์' },
                ]"
                :value="dataset.sentType" @input="dataset.sentType = $event" 
                :errorText="isValidated && !dataset.sentType? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.sentType? 'error': ''" 
              />
            </div>

            <div class="grid lg-1-3 md-1-3">
              <FormGroup 
                type="text" label="หมายเหตุ" name="note" placeholder="รายละเอียดเพิ่มเติม"
              />
            </div>
            <div class="sep"></div>
            
            <div class="grid xl-1-3 md-2-3 sm-100 xs-100">
              <FormGroup 
                type="file" name="file" label="*อัปโหลดเอกสารเพื่อยืนยันตัวตน" 
                desc="กรุณาแนบไฟล์ บัตรประจำตัวประชาชน หรือ หนังสือมอบฉันทะ เพื่อความสะดวกในการตรวจสอบและยืมสไลด์"
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
              <!-- <div v-else class="grids">
                <div class="grid sm-100">
                  <p class="color-15">
                    ไม่มีเอกสารรายงานผล
                  </p>
                </div>
              </div> -->

            </div>
          </div>
        </div>
      </form>
    </div>
  </section>

  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import CheckboxSet from '../../components/CheckboxSet';
import SpecialCard02 from '../../components/SpecialCard02';
import DataTable from '../../components/DataTable';

export default {
  name: 'UserSlideAddPage',
  components: {
    Topnav,
    CheckboxSet,
    SpecialCard02,
    DataTable
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */

      isValidated: false,
      dataset: {
        doctorName: '',
        specialty: '',
        doctorPhone: '',
        workType: 1,
        objective: 1,
        patientName: '',
        slideNo: '',
        sentType: 1
      },
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
    },
    onSubmit(e) {
      var that = this;
      that.isValidated = true;
      
      var isValid = true;
      Object.keys(that.dataset).forEach(function(k){
        if(!that.dataset[k]){
          isValid = false;
        }
      });
      if(!isValid){
        e.preventDefault();
      }
    }
  }
}
</script>
