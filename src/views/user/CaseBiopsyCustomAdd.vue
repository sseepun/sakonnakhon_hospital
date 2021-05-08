<template>
  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" />

  <section class="section-full">
    <div class="container">
      <form action="/user/case-biopsy-complete" method="GET" @submit="onSubmit">

        <div class="section-header" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/user/cases" class="btn color-gray h-color-01">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">ลงทะเบียนส่งตรวจชิ้นเนื้อ</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                type="submit" text="บันทึกทะเบียน" 
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

        <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
          <p class="fw-400">ข้อมูลผู้ป่วย</p>
        </div>
        <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="150">
          <div class="grids">
            <div class="grid sm-100">
              <CheckboxSet 
                label="ประเภททะเบียน" name="case_type" :value="1"
                :options="[
                  { value: 1, text: 'Surgical pathology (S)' },
                  { value: 2, text: 'Frozen Selction (F)' },
                  { value: 3, text: 'ส่งปรึกษา (Consult; CN)' }
                ]"
              />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*HN" name="hn" placeholder="1234567" 
                :value="dataset.hn" @input="dataset.hn = $event" 
                :errorText="isValidated && !dataset.hn? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.hn? 'error': ''" 
              />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*AN" name="an" placeholder="1234567"
                :value="dataset.an" @input="dataset.an = $event" 
                :errorText="isValidated && !dataset.an? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.an? 'error': ''" 
              />
            </div>
            <div class="sep"></div>

            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup 
                type="select" label="คำนำหน้า" name="prefix" 
                :options="[
                  { value: 1, text: 'นาย' },
                  { value: 2, text: 'นาง' },
                  { value: 3, text: 'นางสาว' }
                ]"
                :value="dataset.prefix" @input="dataset.prefix = $event" 
              />
            </div>
            <div class="grid xl-25 md-1-3">
              <FormGroup 
                type="text" label="*ชื่อ นามสกุล" name="name" placeholder="จริงใจ ยินดี"
                :value="dataset.name" @input="dataset.name = $event" 
                :errorText="isValidated && !dataset.name? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.name? 'error': ''" 
              />
            </div>
            <div class="grid xl-20 md-1-3">
              <CheckboxSet 
                label="*เพศ" name="sex"
                :options="[
                  { value: 1, text: 'ชาย' },
                  { value: 2, text: 'หญิง' }
                ]"
                :value="dataset.sex" @input="dataset.sex = $event" 
                :errorText="isValidated && !dataset.sex? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.sex? 'error': ''" 
              />
            </div>
            <div class="grid xl-15 md-1-3 xs-75">
              <FormGroup type="text" label="สัญชาติ" name="nationality" placeholder="ไทย" />
            </div>
            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*หมายเลขบัตรประชาชน" name="thai_id" placeholder="1-9698-00169-84-9" 
                :value="dataset.thaiId" @input="dataset.thaiId = $event" 
                :errorText="isValidated && !dataset.thaiId? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.thaiId? 'error': ''" 
              />
            </div>

            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup 
                type="datepicker" label="*วันเดือนปีเกิด" name="birth_date" placeholder="22/11/2528"
                :value="dataset.birthDate" @input="dataset.birthDate = $event" 
                :errorText="isValidated && !dataset.birthDate? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.birthDate? 'error': ''" 
              />
            </div>
            <div class="grid xl-25 lg-40 md-50 sm-2-3 xs-90">
              <FormGroupAge 
                label="*อายุ" 
                name0="age_year" :value0="dataset.ageYear" 
                @input0="dataset.ageYear = $event" 
                name1="age_month" :value1="dataset.ageMonth" 
                @input1="dataset.ageMonth = $event" 
                name2="age_day" :value2="dataset.ageDay" 
                @input2="dataset.ageDay = $event"  
                :errorText="isValidated && (!dataset.ageYear || !dataset.ageMonth || !dataset.ageDay)? 'กรุณาระบุ': ''" 
                :classer="isValidated && (!dataset.ageYear || !dataset.ageMonth || !dataset.ageDay)? 'error': ''" 
              />
            </div>
            <div class="grid xl-20 md-1-3">
              <FormGroup 
                type="select" label="*สิทธิการรักษา" name="card_type" 
                :options="[
                  { value: 1, text: 'ประกันสังคม' },
                  { value: 2, text: 'บัตรทอง' }
                ]" 
                :value="dataset.cardType" @input="dataset.cardType = $event" 
                :errorText="isValidated && !dataset.cardType? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.cardType? 'error': ''" 
              />
            </div>
            <div class="grid xl-35 md-2-3 sm-100">
              <FormGroup 
                type="select" label="*โรงพยาบาล" name="hospital" 
                :options="[
                  { value: 1, text: 'โรงพยาบาลสกลนคร' },
                  { value: 2, text: 'สาธารณะสุข' }
                ]" 
                :value="dataset.hospital" @input="dataset.hospital = $event" 
                :errorText="isValidated && !dataset.hospital? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.hospital? 'error': ''" 
              />
            </div>

            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*รหัสแพทย์" name="doctor_id" placeholder="1088052" 
                :value="dataset.doctorId" @input="dataset.doctorId = $event" 
                :errorText="isValidated && !dataset.doctorId? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.doctorId? 'error': ''" 
              />
            </div>
            <div class="grid xl-25 md-1-3">
              <FormGroup 
                type="text" label="*แพทย์ผู้รักษา" name="doctor_name" placeholder="นพ.ณรงค์ฤทธิ์ พรมบุรี"  
                :value="dataset.doctorName" @input="dataset.doctorName = $event" 
                :errorText="isValidated && !dataset.doctorName? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.doctorName? 'error': ''"
              />
            </div>
            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup type="text" label="WARD" name="ward" placeholder="Cohort Ward" />
            </div>
            <div class="sep"></div>

            <div class="grid lg-30 md-40 xs-75">
              <FormGroup 
                type="datepicker" label="*กำหนดวันที่รายงานผล (Due Date)"
                name="date" placeholder="12/12/2563" wrapperClass="append"
                :append="true" icon="calendar.svg" 
                :value="dataset.selectedDate" @input="dataset.selectedDate = $event" 
                :errorText="isValidated && !dataset.selectedDate? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.selectedDate? 'error': ''"
              />
            </div>
            <div class="grid lg-60 md-60 sm-100">
              <FormGroup type="text" label="หมายเหตุ" name="note" placeholder="กรุณากรอก" />
            </div>
          </div>
        </div>

        <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
          <p class="fw-400">
            รายการสิ่งส่งตรวจ 
            <span class="color-01">(จำนวนถุงทั้งหมด {{bagTotal}} ถุง)</span>
          </p>
        </div>
        <div class="section-px section-py-grid border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
          <div class="grids">
            <div v-for="(bag, index) in bags" :key="index"
              class="grid xl-40 lg-50 md-2-3 sm-90"
            >
              <SpecialCard02 
                :itemIndex="index" :name="'bag_'+index" 
                :value="bag.value"  
                :valueCount="bag.valueCount" 
                @input="bag.value = $event"
                @input-count="bagTotalChange(index, $event)" 
                @input-delete="deleteBagSection($event)" 
                :errorText="isValidated && (!bag.value || !bag.valueCount)? 'กรุณาระบุ': ''"
              />
            </div>
            <div class="grid xl-40 lg-50 md-2-3 sm-90">
              <SpecialCard02 type="Add" @input-add="addBagSection()" />
            </div>
          </div>
        </div>
        <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="0">
          <div class="grids">
            <div class="grid sm-100">
              <CheckboxSet 
                label="Site (ตำแหน่ง)" name="site" 
                :textInput="true" textInputPlaceholder="โปรดระบุ" 
                :options="[
                  { value: 1, text: 'Right' },
                  { value: 2, text: 'Left' },
                  { value: 3, text: 'อื่นๆ' }
                ]"
              />
            </div>
          </div>
        </div>

        <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
          <p class="fw-400">Clinical Information</p>
        </div>
        <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="0">
          <div class="grids">
            <div class="grid md-50 sm">
              <FormGroup type="text" label="Clinical diagnosis" name="diagnosis" placeholder="กรุณากรอก" />
            </div>
            <div class="grid md-50 sm">
              <FormGroup type="text" label="Clinical history" name="history" placeholder="กรุณากรอก" />
            </div>
          </div>
        </div>

      </form>
    </div>
  </section>

  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import CheckboxSet from '../../components/CheckboxSet';
import SpecialCard02 from '../../components/SpecialCard02';

export default {
  name: 'CaseBiopsyCustomAddPage',
  components: {
    Topnav,
    CheckboxSet,
    SpecialCard02
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 1,

      isValidated: false,
      dataset: {
        hn: '',
        an: '',
        prefix: 1,
        name: '',
        sex: 1,
        thaiId: '',
        birthDate: '',
        ageYear: null,
        ageMonth: null,
        ageDay: null,
        cardType: 1,
        hospital: 1,
        doctorId: '',
        doctorName: '',
        selectedDate: ''
      },
      
      bagTotal: 0,
      bags: [
        { value: '', valueCount: null }
      ],
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {
    addBagSection() {
      this.bags.push({ value: '', valueCount: null });
      return true;
    },
    bagTotalChange(index, val) {
      this.bagTotal += Number(val) - this.bags[index].valueCount;
      this.bags[index].valueCount = Number(val);
      return true;
    },
    deleteBagSection(index){
      var that = this;
      that.bagTotal = 0;
      that.bags = that.bags.filter(function(bag, i){
        if(i != index){
          that.bagTotal += Number(bag.valueCount);
          return true;
        }else{
          return false;
        }
      });
      return true;
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
