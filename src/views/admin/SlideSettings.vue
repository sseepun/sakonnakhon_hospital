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
              <h6 class="h3">ตั้งค่าแบบฟอร์มยืมสไลด์</h6>
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 
              'เหตุผลเพื่อยืมสไลด์/พาราฟินบล็อก ('+reasonData.length+')',
              'ช่องทางการรับสไลด์/พาราฟินบล็อก ('+channelData.length+')'
            ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :rows="reasonData" 
              :columns="[
                { key: 'reason', text: 'ชื่อเหตุผล', classer: 'w-full' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'reason' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มเหตุผลเพื่อยืมสไลด์ / พาราฟินบล็อก" 
              :addOptions="{
                reason: { type: 'text', value: '', placeholder: 'ระบุชื่อเหตุผล', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onReasonTypeDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :rows="channelData" 
              :columns="[
                { key: 'type', text: 'รายการ', classer: 'w-full' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'type' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มรายการช่องทางการรับสไลด์/พาราฟินบล็อก" 
              :addOptions="{
                type: { type: 'text', value: '', placeholder: 'ระบุรายการ', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onChannelDeleting($event)" 
            />
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <!-- Popup Reason -->
  <div class="popup-container" :class="{ 'active': reasonPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="reasonPopupOpened = !reasonPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onReasonTypeDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="reasonPopupOpened = !reasonPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบเหตุผลเพื่อยืมสไลด์</h6>
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
                  placeholder="กรุณาระบุหมายเหตุของการลบเหตุผลเพื่อยืมสไลด์" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Channel -->
  <div class="popup-container" :class="{ 'active': channelPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="channelPopupOpened = !channelPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onChannelDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="channelPopupOpened = !channelPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบช่องทางการรับสไลด์</h6>
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
                  placeholder="กรุณาระบุหมายเหตุของการลบช่องทางการรับสไลด์" 
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
  name: 'AdminSlideSettingsPage',
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
      sidenavActiveIndex: 4,
      tabActiveIndex: 0,

      reasonPopupOpened: false,
      reasonData: [
        {
          reason: { text: 'ประกอบการรักษาพยาบาล' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          reason: { text: 'ส่งรักษาต่อ' },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 0 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
      ],

      channelPopupOpened: false,
      channelData: [
        {
          type: { text: 'ส่งทางไปรษณีย์' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          type: { text: 'เจ้าหน้าที่มารับเอง' },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 0 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
      ],

    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {

    onReasonTypeDeleting(id) {
      this.reasonPopupOpened = !this.reasonPopupOpened;
    },
    onReasonTypeDelete(e) {
      this.reasonPopupOpened = !this.reasonPopupOpened;
      e.preventDefault();
    },

    onChannelDeleting(id) {
      this.channelPopupOpened = !this.channelPopupOpened;
    },
    onChannelDelete(e) {
      this.channelPopupOpened = !this.channelPopupOpened;
      e.preventDefault();
    },
    
  }
}
</script>
