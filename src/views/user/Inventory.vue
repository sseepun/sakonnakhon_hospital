<template>
  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" />

  <section class="section-full">
    <div class="container">
      <div class="tab-container">
        <div class="section-header pb-0" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/user/dashboard" class="btn color-gray h-color-01 disabled">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">คลังสินค้า</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                href="/user/case-biopsy-add" text="ตระกร้าสินค้า" 
                classer="btn-color-09 mr-3" :prepend="true" icon="shopping-bag-white.svg" 
              />
              <Button 
                href="/user/case-biopsy-add" text="เพิ่มสินค้าใหม่" 
                classer="btn-color-01"
              />
            </div>
            <div class="btns ws-nowrap show-mobile">
              <Button 
                text="ตระกร้า" classer="btn-color-09 btn-sm mr-1" href="/user/inventory-add"
              />
              <Button 
                text="ลงทะเบียน" classer="btn-color-01 btn-sm" href="/user/inventory-add"
              />
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 'รายการทั้งหมด', 'รายการขอยืม', 'รายการขอเบิก', 'ประวัติคำขอ' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :columns="columns1" :rows="rows1" 
              :search="[ 'code', 'name', 'product', 'type', 'date' ]" 
              :orders="[
                { key: 'date-desc', text: 'วันที่นำเข้า (ใหม่สุด)' },
                { key: 'date-asc', text: 'วันที่นำเข้า (เก่าสุด)' },
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns2" :rows="rows2" 
              :search="[ 'date', 'code', 'name' ]" 
              :orders="[
                { key: 'date-desc', text: 'วันเวลายืม (ใหม่สุด)' },
                { key: 'date-asc', text: 'วันเวลายืม  (เก่าสุด)' }
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :columns="columns3" :rows="rows3" 
              :search="[ 'date', 'code', 'name' ]" 
              :orders="[
                { key: 'date-desc', text: 'วันเวลาเบิก (ใหม่สุด)' },
                { key: 'date-asc', text: 'วันเวลาเบิก (เก่าสุด)' }
              ]"
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 3 }">
            <DataTable 
              :columns="columns4" :rows="rows4" 
              :search="[ 'start_date', 'end_date', 'code', 'name', 'type' ]" 
              :orders="[
                { key: 'start_date-desc', text: 'วันเวลายืม/เบิก (ใหม่สุด)' },
                { key: 'start_date-asc', text: 'วันเวลายืม/เบิก (เก่าสุด)' }
              ]"
            />
          </div>

        </div>
      </div>
    </div>
  </section>
  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import PopupOptions from '../../components/PopupOptions';
import Tabs01 from '../../components/Tabs01';
import DataTable from '../../components/DataTable';

export default {
  name: 'UserInventoryPage',
  components: {
    Topnav,
    PopupOptions,
    Tabs01,
    DataTable
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 4,
      isOpenedOptions: false,

      columns1: [
        { key: 'code', text: 'รหัส' },
        { key: 'type', text: 'ประเภท' },
        { key: 'product', text: 'ชื่อสินค้า' },
        { key: 'in_stock', text: 'คงเหลือ' },
        { key: 'unit', text: 'หน่วย' },
        { key: 'date', text: 'วันที่นำเข้า' },
        { key: 'name', text: 'ผู้นำเข้า' },
        { key: 'status', text: '' },
      ],
      rows1: [],

      columns2: [
        { key: 'code', text: 'เลขที่การยืม' },
        { key: 'name', text: 'ชื่อผู้ยืม' },
        { key: 'rent', text: 'รายการยืม' },
        { key: 'date', text: 'วันเวลายืม' },
        { key: 'duration', text: 'วันเวลายืมทั้งหมด' },
        { key: 'status', text: 'สถานะ' },
        { key: 'option', text: '' },
      ],
      rows2: [],

      columns3: [
        { key: 'code', text: 'เลขที่การเบิก' },
        { key: 'name', text: 'ชื่อผู้เบิก' },
        { key: 'request', text: 'รายการเบิก' },
        { key: 'date', text: 'วันเวลาเบิก' },
        { key: 'duration', text: 'วันเวลาเบิกทั้งหมด' },
        { key: 'status', text: 'สถานะ' },
        { key: 'option', text: '' },
      ],
      rows3: [],

      columns4: [
        { key: 'code', text: 'เลขที่รายการ' },
        { key: 'type', text: 'ประเภทคำขอ' },
        { key: 'name', text: 'ชื่อผู้ยืม/เบิก' },
        { key: 'request', text: 'รายการยืม' },
        { key: 'start_date', text: 'วันเวลายืม/เบิก' },
        { key: 'end_date', text: 'วันที่คืน' },
        { key: 'duration', text: 'จำนวนเวลาทั้งหมด' }
      ],
      rows4: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<7; i++){

      this.rows1.push({
        code: { 
          type: 'text', text: 'ES-20247815'
        },
        type: { 
          type: 'text', text: 'เครื่องมือแพทยทั่วไป'
        },
        product: { 
          type: 'text', text: 'เครื่องผลิตออกซิเจน (รุ่น JAY-5) ฟังก์ชั่นพ่นยา'
        },
        in_stock: { 
          type: 'text', text: '1' 
        },
        unit: { 
          type: 'text', text: 'เครื่อง'
        },
        date: {
          type: 'text', text: '20/12/2563'
        },
        name: {
          type: 'text', text: 'สโรชา สูหลงกูล'
        },
        status: {
          type: 'text', text: 'เพิ่มใส่ตระกร้า', classer: 'color-01',
          iconPrepend: 'shopping-bag-white.svg'
        },
      });

      this.rows2.push({
        code: { 
          type: 'text', text: 'BR-20206050'
        },
        name: { 
          type: 'text', text: 'กฤตย์ จีรพัฒนานุวงศ์'
        },
        rent: { 
          type: 'text', text: '5 '
        },
        date: { 
          type: 'text', text: '20/12/2563, 10:56'
        },
        duration: {
          type: 'text', text: '62 ว. 3 ช.'
        },
        status: {
          type: 'tag', text: 'กำลังยืม', classer: 'ss-tag-warning'
        },
        option: {
          type: 'link', text: 'คืนสินค้า', href: '#', classer: 'color-01',
          iconPrepend: 'previous-outline.svg'
        },
      });

      this.rows3.push({
        code: { 
          type: 'text', text: 'BOL-20206050'
        },
        name: { 
          type: 'text', text: 'กฤตย์ จีรพัฒนานุวงศ์'
        },
        request: { 
          type: 'text', text: '5'
        },
        date: { 
          type: 'text', text: '20/12/2563, 10:56'
        },
        duration: {
          type: 'text', text: '20 ว. 23 ช.'
        },
        status: {
          type: 'tag', text: 'ขอเบิก', classer: 'ss-tag-warning'
        },
        option: {
          type: 'link', text: 'คืนสินค้า', href: '#', classer: 'color-01',
          iconPrepend: 'previous-outline.svg'
        },
      });

      this.rows4.push({
        code: { 
          type: 'text', text: 'EDS-20206049'
        },
        type: { 
          type: 'text', text: 'ยืมสินค้า'
        },
        name: { 
          type: 'text', text: 'กฤตย์ จีรพัฒนานุวงศ์'
        },
        request: { 
          type: 'text', text: '3'
        },
        start_date: { 
          type: 'text', text: '16/12/2563, 15:20'
        },
        end_date: {
          type: 'text', text: '21/12/2563, 10:56'
        },
        duration: {
          type: 'text', text: '1 ว. 2 ช. 43 นาที'
        },
      });

    }

  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  }
}
</script>
