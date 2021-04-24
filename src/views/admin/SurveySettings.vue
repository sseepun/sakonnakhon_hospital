<template>
  <Topnav :userRole="userRole" department="ผู้ดูแลระบบ" />
  <Sidenav :userRole="userRole" :activeIndex="sidenavActiveIndex" />

  <section class="section-full pull-right">
    <div class="container">
      <div class="tab-container">
        <div class="section-header pb-0" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/admin" class="btn color-gray h-color-01">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">ตั้งค่าแบบสอบถาม</h6>
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 
              'แบบสอบถาม ('+surveyData.length+')'
            ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :rows="surveyData" 
              :columns="[
                { key: 'title', text: 'หัวข้อเรื่อง', classer: 'wrap-2xl' },
                { key: 'url', text: 'ลิงค์แบบสอบถาม', classer: 'wrap-2xl' },
                { key: 'name', text: 'ชื่อ นามสกุล ผู้สร้าง', classer: 'wrap-lg' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'title', 'url', 'name' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มแบบสอบถาม" 
              :addOptions="{
                title: { type: 'text', value: '', placeholder: 'กรุณากรอก', required: true },
                url: { type: 'text', value: '', placeholder: 'กรุณากรอก', required: true },
                name: { type: 'text', value: '', placeholder: 'กรุณากรอก', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onSurveyDeleting($event)" 
            />
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <!-- Popup Survey -->
  <div class="popup-container" :class="{ 'active': surveyPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="surveyPopupOpened = !surveyPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onSurveyDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="surveyPopupOpened = !surveyPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบแบบสอบถาม</h6>
              </div>
              <div class="btns">
                <Button type="submit" text="ยืนยัน" classer="btn-color-06" :prepend="true" icon="check-white.svg" />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid sm-100">
                <FormGroup
                  label="หมายเหตุ" type="textarea" name="note" :required="true" 
                  placeholder="กรุณาระบุหมายเหตุของการลบแบบสอบถาม" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  
</template>

<script>
import Topnav from '../../components/Topnav';
import Sidenav from '../../components/Sidenav';
import FormGroup from '../../components/FormGroup';
import Tabs01 from '../../components/Tabs01';
import DataTable from '../../components/DataTable';

export default {
  name: 'AdminSurveySettingsPage',
  components: {
    Topnav,
    Sidenav,
    FormGroup,
    Tabs01,
    DataTable
  },
  data() {
    return {
      userRole: 'Admin', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      sidenavActiveIndex: 6,
      tabActiveIndex: 0,

      surveyPopupOpened: false,
      surveyData: [
        {
          title: { text: 'แบบสอบถามเรื่อง ความพึ่งกอใจในการใช้บริการ' },
          url: { text: 'doc.google.com/forms/d/1qkiquxncqalkpwaqGF3wDQE_a33367VQ_21/prefill' },
          name: { text: 'นันทวัน หอมประเสริฐสุข' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
      ],

    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {

    onSurveyDeleting(id) {
      this.surveyPopupOpened = !this.surveyPopupOpened;
    },
    onSurveyDelete(e) {
      this.surveyPopupOpened = !this.surveyPopupOpened;
      e.preventDefault();
    },
    
  }
}
</script>
