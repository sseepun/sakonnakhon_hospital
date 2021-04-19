<template>
  <Topnav :userRole="userRole" />

  <section class="section-full">
    <div class="container">
      <form action="/user/case-cytology-complete" method="POST">

        <div class="section-header" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/user/cases" class="btn color-gray h-color-01">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">ลงทะเบียนส่งตรวจเซลล์วิทยา</h6>
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
        <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
          <div class="grids">
            <div class="grid sm-100">
              <CheckboxSet 
                label="ประเภททะเบียน" name="case_type" :value="1" :required="true"
                :options="[
                  { value: 1, text: 'ส่งตรวจวิเคราะห์เซลล์ Gynecology (CG)' },
                  { value: 2, text: 'ส่งตรวจวิเคราะห์เซลล์ Non-gynecology (C)' }
                ]"
              />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="text" label="*HN" name="hn" :required="true" placeholder="1234567" />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="text" label="*AN" name="an" :required="true" placeholder="1234567" />
            </div>
            <div class="sep"></div>

            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup 
                type="select" label="คำนำหน้า" name="prefix" :value="1" 
                :options="[
                  { value: 1, text: 'นาย' },
                  { value: 2, text: 'นาง' },
                  { value: 3, text: 'นางสาว' }
                ]"
              />
            </div>
            <div class="grid xl-25 md-1-3">
              <FormGroup type="text" label="*ชื่อ นามสกุล" name="name" :required="true" placeholder="จริงใจ ยินดี" />
            </div>
            <div class="grid xl-20 md-1-3">
              <CheckboxSet 
                label="*เพศ" name="sex" :required="true"
                :options="[
                  { value: 1, text: 'ชาย' },
                  { value: 2, text: 'หญิง' }
                ]"
              />
            </div>
            <div class="grid xl-15 md-1-3 xs-75">
              <FormGroup type="text" label="สัญชาติ" name="nationality" placeholder="ไทย" />
            </div>
            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup type="text" label="*หมายเลขบัตรประชาชน" name="thai_id" :required="true" placeholder="1-9698-00169-84-9" />
            </div>

            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup type="datepicker" label="*วันเดือนปีเกิด" name="birth_date" :required="true" placeholder="22/11/2528" />
            </div>
            <div class="grid xl-25 lg-40 md-50 sm-2-3 xs-90">
              <FormGroupAge 
                label="*อายุ" 
                name0="age_year" 
                name1="age_month"  
                name2="age_day" 
                :required="true"
              />
            </div>
            <div class="grid xl-20 md-1-3">
              <FormGroup 
                type="select" label="*สิทธิการรักษา" name="card_type" :value="1" :required="true"
                :options="[
                  { value: 1, text: 'ประกันสังคม' },
                  { value: 2, text: 'บัตรทอง' }
                ]"
              />
            </div>
            <div class="grid xl-35 md-2-3 sm-100">
              <FormGroup 
                type="select" label="*โรงพยาบาล" name="hospital" :value="1" :required="true"
                :options="[
                  { value: 1, text: 'โรงพยาบาลสกลนคร' }
                ]"
              />
            </div>

            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup type="text" label="*รหัสแพทย์" name="doctor_id" :required="true" placeholder="1088052" />
            </div>
            <div class="grid xl-25 md-1-3">
              <FormGroup type="text" label="*แพทย์ผู้รักษา" name="doctor_name" :required="true" placeholder="นพ.ณรงค์ฤทธิ์ พรมบุรี" />
            </div>
            <div class="grid xl-20 md-1-3 xs-75">
              <FormGroup type="text" label="WARD" name="ward" placeholder="Cohort Ward" />
            </div>
            <div class="sep"></div>

            <div class="grid lg-30 md-40 xs-75">
              <FormGroup 
                type="datepicker" label="*กำหนดวันที่รายงานผล (Due Date)" :required="true"
                name="date" placeholder="12/12/2563" wrapperClass="append"
                :append="true" icon="calendar.svg" 
                @input="selectedDate = $event" 
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
                :value="bag.value" @input="bag.value = $event" 
                :valueCount="bag.valueCount" @input-count="bagTotalChange(index, $event)" 
                @input-delete="deleteBagSection($event)"
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

  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import CheckboxSet from '../../components/CheckboxSet';
import SpecialCard02 from '../../components/SpecialCard02';

export default {
  name: 'CaseCytologyCustomAddPage',
  components: {
    Topnav,
    CheckboxSet,
    SpecialCard02
  },
  data() {
    return {
      userRole: 'Staff พยาธิวิทยา', /* User, Staff พยาธิวิทยา, Staff งานศพ */
      selectedDate: new Date(),
      bags: [
        { value: '', valueCount: null }
      ],
      bagTotal: 0
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
    }
  }
}
</script>
