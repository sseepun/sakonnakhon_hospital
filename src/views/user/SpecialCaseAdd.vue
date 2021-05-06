<template>
  <Topnav :userRole="userRole" />

  <section class="section-full">
    <div class="container">
      <form action="/user/special-case-complete" method="GET" @submit="onSubmit">

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
            <div class="grid xl-15 lg-25 md-1-3 xs-75">
              <FormGroup 
                type="text" label="*เลขที่หนังสือ" name="book_no" placeholder="0192872" 
                :value="dataset.bookNo" @input="dataset.bookNo = $event" 
                :errorText="isValidated && !dataset.bookNo? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.bookNo? 'error': ''" 
              />
            </div>
            <div class="grid xl-15 lg-25 md-1-3 xs-75">
              <FormGroup 
                type="datepicker" label="*วันที่หนังสือ" name="book_date" placeholder="01/01/2564"
                :value="dataset.bookDate" @input="dataset.bookDate = $event" 
                :append="true" icon="calendar.svg"  wrapperClass="append"
                :errorText="isValidated && !dataset.bookDate? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.bookDate? 'error': ''" 
              />
            </div>
            <div class="grid xl-25 lg-25 md-1-3">
              <FormGroup 
                type="text" label="*เจ้าหน้าที่ผู้นำส่ง" name="staff_name" placeholder="ณรงค์ฤทธิ์ พรมบุรี"
                :value="dataset.staffName" @input="dataset.staffName = $event" 
                :errorText="isValidated && !dataset.staffName? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.staffName? 'error': ''" 
              />
            </div>
            <div class="grid xl-15 lg-25 md-1-3 xs-75">
              <FormGroup 
                type="text" label="เบอร์โทรติดต่อ" name="staff_phone" placeholder="0980742870"
                :value="dataset.staffPhone" @input="dataset.staffPhone = $event" 
                :errorText="isValidated && !dataset.staffPhone? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.staffPhone? 'error': ''" 
              />
            </div>
            <div class="grid xl-30 lg-25 md-1-3">
              <FormGroup type="text" label="หมายเหตุ" name="note" placeholder="กรุณากรอก" />
            </div>
            <div class="grid xl-15 lg-25 md-1-3 xs-75">
              <FormGroup 
                type="number" label="*จำนวนราย" name="total_case" placeholder="2" 
                :min="0" :step="1" 
                :value="dataset.totalCase" @input="dataset.totalCase = $event" 
                :errorText="isValidated && !dataset.totalCase? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.totalCase? 'error': ''" 
              />
            </div>
            <div class="grid xl-15 lg-25 md-1-3 xs-75">
              <FormGroup 
                type="number" label="*จำนวน Block" name="total_block" placeholder="8" 
                :min="0" :step="1" 
                :value="dataset.totalBlock" @input="dataset.totalBlock = $event" 
                :errorText="isValidated && !dataset.totalBlock? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.totalBlock? 'error': ''" 
              />
            </div>
             <div class="grid xl-15 lg-25 md-1-3 xs-75">
              <FormGroup 
                type="number" label="*จำนวน Slide" name="total_slide" placeholder="16" 
                :min="0" :step="1" 
                :value="dataset.totalSlide" @input="dataset.totalSlide = $event" 
                :errorText="isValidated && !dataset.totalSlide? 'กรุณาระบุ': ''" 
                :classer="isValidated && !dataset.totalSlide? 'error': ''" 
              />
            </div>
            <div class="grid xl-25 lg-30 md-50 sm-2-3">
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
            <div class="grid xl-30 lg-40 md-50 sm-2-3 xs-75">
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
        
        <div class="mt-3 mb-3" data-aos="fade-up" data-aos-delay="0">
          <div class="section-px">
            <h6 class="h5">รายการส่งตรวจ</h6>
          </div>
          <div class="mt-3 border-top bcolor-lgray">
            <DataTable 
              :rows="row" :key="row.length"
              :columns="[
                { key: 'prefix', text: 'คำนำหน้า'},
                { key: 'name', text: '*ชื่อ นามสกุล', },
                { key: 'hn', text: '*HN' },
                { key: 'card_type', text: '*สิทธิการรักษา' },
                { key: 'block_no', text: '*Block No.' },
                { key: 'immuno', text: 'ลงรายการย้อม Immuno', classer: 'wrap-xs' },
                { key: 'histo', text: 'ลงรายการย้อม Histo', classer: 'wrap-xs' },
                { key: 'note', text: 'Note', classer: 'wrap-xs' },
                { key: 'options', text: '' },
              ]" 
              :withOptions="false" 
              :allowAdd="true" allowAddText="เพิ่มรายการส่งตรวจ"
              :addOptions="{
                prefix: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'นาย' }, { value: 2, text: 'นาง' }, { value: 3, text: 'นางสาว' } ]
                },
                name: { type: 'text', value: '', placeholder: 'ชื่อ นามสกุล', required: true },
                hn: { type: 'text', value: '', placeholder: '123456', required: true },
                card_type: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'ประกันสังคม' } ]
                },
                block_no: { type: 'text', value: '', placeholder: '00', required: true },
                immuno: { type: 'text', value: '', placeholder: 'เลือกรายการย้อม' },
                histo: { type: 'text', value: '', placeholder: 'เลือกรายการย้อม' },
                note: { type: 'text', value: '', placeholder: 'เพิ่มเติม...' },
              }"
              @row-add="onRowAdd($event)" 
              @click-delete="onRowDeleting($event)" 
            />
          </div>
        </div>
        
      </form>
    </div>
  </section>

  <!-- Popup Delete -->
  <div class="popup-container" :class="{ 'active': listPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="listPopupOpened = !listPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onRowDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="listPopupOpened = !listPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบ</h6>
              </div>
              <div class="btns">
                <Button text="ยกเลิก" classer="btn-color-03 mr-1" @click="listPopupOpened = !listPopupOpened" />
                <Button type="submit" text="ลบ" classer="btn-color-06" />
              </div>
            </div>
          </div>
          <div class="body">
            <p class="color-gray">หมายเหตุ</p>
            <p class="mt-2">
              คุณต้องการที่จะลบข้อมูลนี้ ใช่หรือไม่ ? หากลบแล้ว รายการนี้จะไม่สามารถกู้คืนได้
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
      listPopupOpened: false,
      dataset: {
        case_type: 1,
        bookNo: '',
        staffName: '',
        totalCase: null,
        totalBlock: null,
        totalSlide: null,
        lab: 9,
        selectedDate: ''
      },

      row: [],
      deletingRowId: null
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {
    onSubmit(e) {
      var that = this;
      that.isValidated = true;
      
      var isValid = true;
      Object.keys(that.dataset).forEach(function(k){
        if(!that.dataset[k]){
          console.log(k)
          isValid = false;
        }
      });
      if(!isValid){
        e.preventDefault();
      }
    },

    onRowAdd(value) {
      this.row.push({
        prefix: { text: 'นาย', value: value.prefix },
        name: { text: value.name },
        hn: { text: value.hn },
        card_type: { text: 'ประกันสังคม', value: value.card_type },
        block_no: { text: value.block_no },
        immuno: { text: value.immuno },
        histo: { text: value.histo },
        note: { text: value.note },
        options: {
          type: 'options',
          edit: { type: 'inline', id: this.row.length },
          delete: { type: 'emit', id: this.row.length }
        }
      });
    },
    onRowDeleting(rowId) {
      this.deletingRowId = rowId;
      this.listPopupOpened = !this.listPopupOpened;
    },
    onRowDelete(e) {
      e.preventDefault();
      this.deletingRowId = null;
      this.listPopupOpened = !this.listPopupOpened;
    }
  }
}
</script>
