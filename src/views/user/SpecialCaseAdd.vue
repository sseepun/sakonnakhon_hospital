<template>
  <Topnav :userRole="userRole" />

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
              <h6 class="h3">ลงทะเบียนส่งตรวจพิเศษ/ย้อมพิเศษ/อณูพยาธิวิทยา</h6>
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

        <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
          <div class="grids">
            <div class="grid sm-100">
              <CheckboxSet 
                label="ประเภททะเบียน" name="case_type"
                :options="[
                  { value: 1, text: 'สีย้อมพิเศษ' },
                  { value: 2, text: 'IHC' },
                  { value: 3, text: 'Molecular' }
                ]"
                :value="dataset.case_type"

              />
            </div>
            <div class="grid lg-15 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*เลขที่หนังสือ" name="book_no" placeholder="0192872" 
                :value="dataset.bookNo" @input="dataset.bookNo = $event" 
                :errorText="isValidated && !dataset.bookNo? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.bookNo? 'error': ''" 
              />
            </div>
            <div class="grid lg-15 md-1-3 xs-75">
              <FormGroup 
                type="datepicker" label="*วันที่หนังสือ" name="book_date" placeholder="01/01/2564"
                :value="dataset.bookDate" @input="dataset.bookDate = $event" 
                :append="true" icon="calendar.svg"  wrapperClass="append"
                :errorText="isValidated && !dataset.bookDate? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.bookDate? 'error': ''" 
              />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup 
                type="text" label="*เจ้าหน้าที่ผู้นำส่ง" name="staff_name" placeholder="ณรงค์ฤทธิ์ พรมบุรี"
                :value="dataset.staffName" @input="dataset.staffName = $event" 
                :errorText="isValidated && !dataset.staffName? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.staffName? 'error': ''" 
              />
            </div>
            <div class="grid lg-15 md-1-3 xs-75">
              <FormGroup 
                type="text" label="เบอร์โทรติดต่อ" name="staff_phone" placeholder="0980742870"
                :value="dataset.staffPhone" @input="dataset.staffPhone = $event" 
                :errorText="isValidated && !dataset.staffPhone? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.staffPhone? 'error': ''" 
              />
            </div>
            <div class="grid lg-30 md-1-3">
              <FormGroup type="text" label="หมายเหตุ" name="note" placeholder="กรุณากรอก" />
            </div>
            <div class="grid lg-15 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*จำนวนราย" name="total_case" placeholder="2"
                :value="dataset.totalCase" @input="dataset.totalCase = $event" 
                :errorText="isValidated && !dataset.totalCase? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.totalCase? 'error': ''" 
              />
            </div>
            <div class="grid lg-15 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*จำนวน Block" name="total_block" placeholder="8"
                :value="dataset.totalBlock" @input="dataset.totalBlock = $event" 
                :errorText="isValidated && !dataset.totalBlock? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.totalBlock? 'error': ''" 
              />
            </div>
             <div class="grid lg-15 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*จำนวน Slide" name="total_slide" placeholder="16"
                :value="dataset.totalSlide" @input="dataset.totalSlide = $event" 
                :errorText="isValidated && !dataset.totalSlide? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.totalSlide? 'error': ''" 
              />
            </div>
            <div class="grid lg-25 md-40 sm-100">
              <FormGroup 
                type="select" label="*ส่ง Lab" name="sent_lab" 
                :options="[
                  { value: 9, text: '9 : บริษัท N Health' },
                ]" 
                :value="dataset.lab" @input="dataset.lab = $event" 
                :errorText="isValidated && !dataset.lab? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.lab? 'error': ''" 
              />
            </div>
            
            <div class="grid lg-30 md-40 sm-100 xs-75">
              <FormGroup 
                type="datepicker" label="*กำหนดวันที่รายงานผล (Due Date)"
                name="date" placeholder="12/12/2563" wrapperClass="append"
                :append="true" icon="calendar.svg" 
                :value="dataset.selectedDate" @input="dataset.selectedDate = $event" 
                :errorText="isValidated && !dataset.selectedDate? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.selectedDate? 'error': ''"
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="0">
          <div class="section-px border-bottom">
            <h6 class="h5">รายการส่งตรวจ</h6>
          </div>
          <div class="mt-3">
             <DataTable 
              :columns="columns1" :rows="rows1" 
              :withOptions="false"
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่ส่งตรวจ (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่ส่งตรวจ (เก่าสุด)' },
              ]"
            />
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
  name: 'UserSpecialCaseAddPage',
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
        case_type: 1,
        bookNo: '',
        bookDate: '',
        staffName: '',
        stafPhone: '',
        note: '',
        total_case: null,
        total_block: null,
        total_slide: null,
        lab: 9,
        selectedDate: ''
      },
      columns1:[
        { key: 'prefix', text: 'คำนำหน้า'},
        { key: 'name', text: '*ชื่อ นามสกุล' },
        { key: 'hn', text: '*HN' },
        { key: 'card_type', text: '*สิทธิการรักษา' },
        { key: 'block_no', text: '*Block No.' },
        { key: 'immuno', text: 'ลงรายการย้อม Immuno' },
        { key: 'histo', text: 'ลงรายการย้อม Histo' },
        { key: 'note', text: 'Note' },
      ],
      rows1: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<7; i++){

      this.rows1.push({
        prefix: {
          type: 'text', text: 'นาย'
        },
        name: { 
          type: 'text', text: 'สิงโต ภูเขา' 
        },
        hn: { 
          type: 'text', text: '245199'
        },
        card_type: {
          type: 'text', text: 'ประกันสังคม',
        },
        block_no: {
          type: 'text', text: 'P64-002C',
        },
        immuno: {
          type: 'text', text: '-',
        },
        histo: {
          type: 'text', text: 'H&E, Deep, Recut',
        },
        note: {
          type: 'text', text: '-',
        }
      });

      this.rows1.push({
        prefix: {
          type: 'text', text: 'นาย'
        },
        name: { 
          type: 'text', text: 'จริงใจ ยินดี' 
        },
        hn: { 
          type: 'text', text: '234556'
        },
        card_type: {
          type: 'text', text: 'ประกันสังคม',
        },
        block_no: {
          type: 'text', text: 'P64-001C',
        },
        immuno: {
          type: 'text', text: 'ACT, ACTH, ALK-1, ALK-p80, B-catenin, Calponin',
        },
        histo: {
          type: 'text', text: '-',
        },
        note: {
          type: 'text', text: '-',
        }
      });
    }
  },
  methods: {
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
