<template>
  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" />

  <section class="section-full">
    <div class="container">

      <form action="/user/case-biopsy-complete" method="GET">
        <div class="section-header" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/user/cases" class="btn color-gray h-color-01">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">ลงทะเบียนรักษาศพ</h6>
            </div>
            <div v-if="patientFound" class="btns hide-mobile">
              <Button 
                type="submit" text="บันทึกทะเบียน" 
                classer="btn-color-01" :prepend="true" icon="check-white.svg" 
              />
            </div>
            <div v-if="patientFound" class="btns show-mobile">
              <Button type="submit" text="บันทึก" classer="btn-color-01 btn-sm" />
            </div>
          </div>
        </div>
      </form>

      <div class="stripe stripe-warning section-px" data-aos="fade-up" data-aos-delay="150">
        <img src="/assets/img/icon/alert-yellow.svg" alt="Image Icon" />
        <p class="color-11">
          หมายเหตุ: กรุณาตรวจสอบข้อมูลให้ถูกต้องครบถ้วนก่อนการส่งข้อมูล เพื่อประโยชน์แก่ผู้ป่วยและแพทย์ผู้ทำการรักษา
        </p>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลผู้เสียชีวิต</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <form action="/" method="GET" @submit="onSubmit">
          <div class="grids">
            <div class="grid xl-60 sm-100 mt-0">
              <div class="grids">
                <div class="grid xl-20 lg-20 sm-1-3 xs-2-3">
                  <FormGroup 
                    type="text" label="*HN" name="hn" :required="true" placeholder="1234567" 
                    :value="hn" @input="hn = $event"
                  />
                </div>
                <div class="grid xl-20 lg-20 sm-1-3 xs-2-3">
                  <FormGroup type="text" label="*AN" name="an" :required="true" placeholder="1234567" />
                </div>
                <div v-if="caseType == 2" class="grid xl-20 lg-20 sm-1-3 xs-2-3">
                  <FormGroup type="datepicker" label="*วันที่" name="case_date" :required="true" placeholder="01/01/2564" />
                </div>
                <div v-if="caseType == 2" class="grid xl-20 lg-20 sm-1-3 xs-2-3">
                  <FormGroup type="text" label="*ห้องตรวจ" name="room" :required="true" placeholder="1508" />
                </div>
                <div class="grid xl-20 lg-20 sm-25 xs-1-3">
                  <div class="form-group">
                    <label>&nbsp;</label>
                    <div class="btns mt-0">
                      <Button 
                        type="submit" text="ค้นหา" classer="btn-color-01" 
                        :prepend="true" icon="search-white.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid xl-40 sm-100">
              <CheckboxSet 
                label="ประเภทผู้ป่วย" name="radio_1" :value="1" :required="true" 
                @input="caseType = $event"
                :options="[
                  { value: 1, text: 'IPD' },
                  { value: 2, text: 'OPD' }
                ]"
              />
            </div>

            <div class="grid lg-15 md-1-3">
              <FormGroup type="plain" label="คำนำหน้า" :value="patientFound? 'นางสาว': '--'" />
            </div>
            <div class="grid lg-15 md-1-3">
              <FormGroup type="plain" label="ชื่อ นามสกุล" :value="patientFound? 'พัชราพร วัฒนาไพศาล': '--'" />
            </div>
            <div class="grid lg-15 md-1-3 xs-50">
              <FormGroup type="plain" label="เพศ" :value="patientFound? 'หญิง': '--'" />
            </div>
            <div class="grid lg-15 md-1-3">
              <FormGroup type="plain" label="วันเดือนปีเกิด" :value="patientFound? '12/12/2512': '--'" />
            </div>
            <div class="grid lg-15 md-1-3">
              <FormGroup type="plain" label="อายุ" :value="patientFound? '11 เดือน 12 วัน': '--'" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="หมายเลขบัตรประชาชน" :value="patientFound? '1-2655-82345-18-2': '--'" />
            </div>
            <div class="grid lg-15  md-1-3">
              <FormGroup type="plain" label="สิทธิการรักษา" :value="patientFound? 'ประกันสังคมข้าราชการ': '--'" />
            </div>
            <div class="grid lg-45 md-1-3">
              <FormGroup type="plain" label="ที่อยู่" :value="patientFound? '83 พาร์ทเม้นท์ ราชพฤกษ์เพลส ซ.มหาสวัสดิ์ 4 ถ.ราชพฤกษ์ ต.มหาสวัสดิ์ อ.บางกรวย จ.นนทบุรี 11130': '--'" />
            </div>
            <div class="grid lg-15 md-1-3">
              <FormGroup type="plain" label="สถานะการบริจาคร่างกาย" :value="'--'" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="โรงพยาบาลที่ลงทะเบียน" :value="'--'" />
            </div>
          </div>
        </form>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลแพทย์</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <form action="/" method="POST" @submit="onSubmit2">
          <div class="grids">
            <div class="grid lg-30 md-50">
              <FormGroup 
                type="text" label="*แพทย์ผู้รักษา" name="doctor_name" placeholder="ดร.สมมาตร สกลนคร" 
                :value="dataset.doctorName" @input="dataset.doctorName = $event" 
                :errorText="isValidated && !dataset.doctorName? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.doctorName? 'error': ''" 
              />
            </div>
            <div class="grid lg-30 md-50">
              <FormGroup type="text" label="หอผู้ป่วยที่จำหน่าย" name="building" placeholder="ER" />
            </div>
            <div class="grid xl-20 lg-20 md-50 xs-2-3">
              <FormGroup 
                type="datepicker" label="*วันที่เสียชีวิต" name="death_date" placeholder="01/01/2564" 
                :value="dataset.deathDate" @input="dataset.deathDate = $event" 
                :errorText="isValidated && !dataset.deathDate? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.deathDate? 'error': ''" 
              />
            </div>
            <div class="grid xl-20 lg-20 md-50 xs-2-3">
              <FormGroup 
                type="text" label="*เวลาเสียชีวิต" name="death_time" placeholder="24:00" 
                :value="dataset.deathTime" @input="dataset.deathTime = $event" 
                :errorText="isValidated && !dataset.deathTime? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.deathTime? 'error': ''" 
              />
            </div>
            <div class="grid xl-35 lg-50 sm-100 xs-2-3">
              <CheckboxSet 
                label="ประเภท" name="death_type"
                :options="[
                  { value: 1, text: 'ตายผิดธรรมชาติ (คดี)' },
                  { value: 2, text: 'ตายธรรมชาติ (ไม่มีคดี)' }
                ]"
                :value="dataset.deathType" @input="dataset.deathType = $event" 
                :errorText="isValidated && !dataset.deathType? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.deathType? 'error': ''" 
              />
            </div>
            <div class="grid lg-30 md-50 sm-100">
              <FormGroup 
                type="text" label="*สาเหตุการตาย" name="death_cause" placeholder="การตายโดยอุบัติเหตุ" 
                :value="dataset.deathCause" @input="dataset.deathCause = $event" 
                :errorText="isValidated && !dataset.deathCause? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.deathCause? 'error': ''" 
              />
            </div>

            <div class="sep"></div>
            
            <div class="grid xl-30 sm-100">
              <CheckboxSet 
                label="*ชนิดของศพ" name="body_type"
                @input="dataset.body_type = $event"
                :options="[
                  { value: 1, text: 'ศพ/อวัยวะ' },
                  { value: 2, text: 'ยกศพทั้งร่างกาย' }
                ]"
                :value="dataset.body_type"
                :errorText="isValidated && !dataset.body_type? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.body_type? 'error': ''" 
                :textInput="true"
                :textInputPlaceholder="'หัวใจ, ศีรษะ, แขนข้างซ้าย'"
              />
            </div>
            <div class="grid xl-30 sm-100">
              <CheckboxSet 
                label="*เกี่ยวกับคดี" name="is_case"
                @input="dataset.iscase = $event"
                :options="[
                  { value: 1, text: 'มีคดี' },
                  { value: 2, text: 'ไม่มีคดี' }
                ]"
                :value="dataset.iscase"
                :errorText="isValidated && !dataset.iscase? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.iscase? 'error': ''"
                :textInput="true"
                :textInputPlaceholder="'ขับรถโดยประมาท'"
              />
            </div>
            <div class="grid xl-30 sm-100">
              <CheckboxSet 
                label="มีการติดต่อโรคร้ายแรง"
                name="disease"
                @input="dataset.disease = $event"
                :options="[
                  { value: 1, text: 'ติดต่อโรคร้ายแรง' },
                ]"
                :textInput="true"
                :textInputPlaceholder="'โปรดระบุ'"
              />
            </div>
            <div class="grid xl-30 sm-100">
              <CheckboxSet 
                label="*การฉีดยาดองศพ" name="is_embalm"
                @input="dataset.isEmbalm = $event"
                :options="[
                  { value: 1, text: 'ดองศพ' },
                  { value: 2, text: 'ไม่ดองศพ' }
                ]"
                :value="dataset.isEmbalm"
                :errorText="isValidated && !dataset.isEmbalm? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.isEmbalm? 'error': ''"
              />
            </div>
            <div class="grid xl-30 sm-100">
              <CheckboxSet 
                label="*การอาบน้ำศพ" name="is_bath"
                @input="dataset.isBath = $event"
                :options="[
                  { value: 1, text: 'อาบน้ำศพ' },
                  { value: 2, text: 'ไม่อาบน้ำศพ' }
                ]"
                :value="dataset.isBath"
                :errorText="isValidated && !dataset.isBath? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.isBath? 'error': ''"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Alert Popup -->
  <div class="popup-container" :class="{ 'active': notFoundAlert }">
    <div class="wrapper">
      <div class="close-filter" @click="notFoundAlert = !notFoundAlert"></div>
      <form action="/" method="GET" class="w-full"  @submit="onSubmitProfile">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="notFoundAlert = !notFoundAlert">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ไม่พบข้อมูลผู้ป่วย</h6>
              </div>
              <div class="btns">
                <Button 
                  text="เพิ่มข้อมูล" href="/user/funeral-complete"
                  classer="btn-color-01 hide-mobile" :prepend="true" icon="plus-white.svg" 
                />
                <Button 
                  text="เพิ่มข้อมูล" href="/user/funeral-complete"
                  classer="btn-color-01 btn-sm show-mobile"
                />
              </div>
            </div>
          </div>
          <div class="body pt-4 pb-5">
            <p class="color-gray">หมายเหตุ</p>
            <p class="mt-2">
              หมายเลขประจำตัวผู้ป่วยที่คุณค้นหาอาจจะ ไม่ถูกต้อง คุณสามารถ “ปิดหน้าต่าง” 
              เพื่อระบุหมายเลขประจำตัวผู้ป่วยใหม่อีกครั้ง หรือ ผู้ป่วยที่คุณต้องการหา อาจจะ ไม่มีข้อมูลในระบบ 
              คุณสามารถเพิ่มข้อมูลผู้ป่วยใหม่ โดยการคลิกที่ปุ่ม “เพิ่มข้อมูล”
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>

  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import CheckboxSet from '../../components/CheckboxSet';


export default {
  name: 'FuneralAddPage',
  components: {
    Topnav,
    CheckboxSet,
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 2,
      patientFound: false,
      notFoundAlert: false,
      hn: null,
      caseType: 1,
      selectedDate: new Date(),
      dataset: {
        doctorName: '',
        building: '',
        death_date: '',
        death_time: '',
        death_type: 1,
        deathType: 1,
        body_type: 1,
        isCase: 1,
        disease: null,
        isEmbalm: null,
        isBath: null
      },
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {
    onSubmit(e) {
      if(this.hn != '1234'){
        this.patientFound = false;
        this.notFoundAlert = true;
      }else{
        this.patientFound = true;
      }
      e.preventDefault();
    },
    
    onSubmit2(e){
      var that  = this;
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