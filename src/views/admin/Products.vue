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
              <h6 class="h3">ตั้งค่าคลังสินค้า</h6>
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 
              'ประเภทสินค้า ('+productTypeData.length+')',
              'หน่วยอุปกรณ์สินค้า ('+productData.length+')'
            ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :rows="productTypeData" 
              :columns="[
                { key: 'code', text: 'รหัส', classer: 'wrap-sm' },
                { key: 'name', text: 'ชื่อประเภท', classer: 'w-full' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'code', 'name' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มประเภทสินค้า" 
              :addOptions="{
                code: { type: 'text', value: '', placeholder: 'AB', required: true },
                name: { type: 'text', value: '', placeholder: 'กรุณากรอก', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onProductTypeDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :rows="productData" 
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
              :allowAdd="true" allowAddText="เพิ่มหน่วยอุปกรณ์สินค้า" 
              :addOptions="{
                type: { type: 'text', value: '', placeholder: 'ระบุรายการ', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onProductDeleting($event)" 
            />
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <!-- Popup Product Type -->
  <div class="popup-container" :class="{ 'active': productTypePopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="productTypePopupOpened = !productTypePopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onProductTypeDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="productTypePopupOpened = !productTypePopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบประเภทสินค้า</h6>
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
                  placeholder="กรุณาระบุหมายเหตุของการลบประเภทสินค้า" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Product -->
  <div class="popup-container" :class="{ 'active': productPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="productPopupOpened = !productPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onProductDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="productPopupOpened = !productPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบหน่วยอุปกรณ์สินค้า</h6>
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
                  placeholder="กรุณาระบุหมายเหตุของการลบหน่วยอุปกรณ์สินค้า" 
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
  name: 'AdminProductsPage',
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
      sidenavActiveIndex: 5,
      tabActiveIndex: 0,

      productTypePopupOpened: false,
      productTypeData: [
        {
          code: { text: 'ES' },
          name: { text: 'เครื่องมือแพทยทั่วไป' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          code: { text: 'SA' },
          name: { text: 'เครื่องมือสแตนเลส' },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 0 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
      ],

      productPopupOpened: false,
      productData: [
        {
          type: { text: 'ลิตร' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          type: { text: 'กิโลกรัม' },
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

    onProductTypeDeleting(id) {
      this.productTypePopupOpened = !this.productTypePopupOpened;
    },
    onProductTypeDelete(e) {
      this.productTypePopupOpened = !this.productTypePopupOpened;
      e.preventDefault();
    },

    onProductDeleting(id) {
      this.productPopupOpened = !this.productPopupOpened;
    },
    onProductDelete(e) {
      this.productPopupOpened = !this.productPopupOpened;
      e.preventDefault();
    },
    
  }
}
</script>
