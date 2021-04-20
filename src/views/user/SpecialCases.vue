<template>
  <Topnav :userRole="userRole" />

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
              <h6 class="h3">รายการส่งตรวจพิเศษ/ย้อมพิเศษ/อณูพยาธิวิทยา</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                href="/user/special-case-add" text="ลงทะเบียนส่งตรวจ" 
                classer="btn-color-01 mr-3" :prepend="true" icon="plus-white.svg" 
              />
            </div>
            <div class="btns show-mobile">
              <Button 
                text="ลงทะเบียน" classer="btn-color-01 btn-sm" :append="true" icon="chev-down-white.svg" 
                @clicked="isOpenedOptions = !isOpenedOptions"
              />
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 'รอดำเนินการ' , 'ดำเนินการเสร็จสิ้น' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :columns="columns1" :rows="rows1" 
              :search="[ 'sent_date', 'staff_name', 'staff_phone', 'note', 'total_block', 'total_case', 'total_slide', 'total', 'sent_lab' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่ส่งตรวจ (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่ส่งตรวจ (เก่าสุด)' },
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns2" :rows="rows2" 
              :search="[ 'sent_date', 'staff_name', 'staff_phone', 'note', 'total_block', 'total_case', 'total_slide', 'total', 'sent_lab' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่ส่งตรวจ (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่ส่งตรวจ (เก่าสุด)' }
              ]"
            />
          </div>

        </div>
      </div>
    </div>
  </section>

  <PopupOptions 
    :isOpenedOptions="isOpenedOptions" 
    @clicked="isOpenedOptions = !isOpenedOptions"
    :options="[
      { text: 'ลงทะเบียนส่งตรวจ', icon: 'plus.svg', href: '/user/special-case-add' },
    ]"
  />

  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import PopupOptions from '../../components/PopupOptions';
import Tabs01 from '../../components/Tabs01';
import DataTable from '../../components/DataTable';

export default {
  name: 'UserSpecialCasesPage',
  components: {
    Topnav,
    PopupOptions,
    Tabs01,
    DataTable
  },
  data() {
    return {
      userRole: 'Staff พยาธิวิทยา', /* User, Staff พยาธิวิทยา, Staff งานศพ */
      isOpenedOptions: false,

      columns1: [
        { key: 'sent_date', text: 'วันที่ส่งตรวจ' },
        { key: 'staff_name', text: 'เจ้าหน้าที่ผู้ส่ง' },
        { key: 'staff_phone', text: 'โทรติดต่อ' },
        { key: 'note', text: 'หมายเหตุ' },
        { key: 'total_case', text: 'จำนวนราย' },
        { key: 'total_block', text: 'จำนวน Block' },
        { key: 'total_slide', text: 'จำนวน Slide' },
        { key: 'total', text: 'รายการส่งตรวจ' },
        { key: 'sent_lab', text: 'ส่ง Lab' },
        { key: 'status', text: 'สถานะ' },
      ],
      rows1: [],

      columns2: [
        { key: 'sent_date', text: 'วันที่ส่งตรวจ' },
        { key: 'staff_name', text: 'เจ้าหน้าที่ผู้ส่ง' },
        { key: 'staff_phone', text: 'โทรติดต่อ' },
        { key: 'note', text: 'หมายเหตุ' },
        { key: 'total_case', text: 'จำนวนราย' },
        { key: 'total_block', text: 'จำนวน Block' },
        { key: 'total_slide', text: 'จำนวน Slide' },
        { key: 'total', text: 'รายการส่งตรวจ' },
        { key: 'sent_lab', text: 'ส่ง Lab' },
        { key: 'result', text: 'ผลตรวจ' },
        { key: 'status', text: '' },
      ],
      rows2: [],
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<7; i++){

      this.rows1.push({
        sent_date: {
          type: 'link', text: '20/11/2563, 14:05', href: '#'
        },
        staff_name: { 
          type: 'link', text: 'นันทวรรณ วิลิศมาหรา', href: '#' 
        },
        staff_phone: { 
          type: 'link', text: '041550880 ต่อ 1200', href: '#'
        },
        note: {
          type: 'link', text: 'B715/e', href: '#',
        },
        total_case: {
          type: 'link', text: '2', href: '#',
        },
        total_block: {
          type: 'link', text: '8', href: '#',
        },
        total_slide: {
          type: 'link', text: '2', href: '#',
        },
        total: {
          type: 'link', text: '3', href: '#',
        },
        sent_lab: {
          type: 'link', text: 'N Health', href: '#',
        },
        status: {
          type: 'tag', text: 'รอผลตรวจ'
        }
      });
      this.rows1.push({
        sent_date: {
          type: 'link', text: '18/11/2563, 08:44', href: '#'
        },
        staff_name: { 
          type: 'link', text: 'ณรงค์ศักดิ์ พรหมมุณี', href: '#' 
        },
        staff_phone: { 
          type: 'link', text: '041550880 ต่อ 1004', href: '#'
        },
        note: {
          type: 'link', text: 'B715/e', href: '#',
        },
        total_case: {
          type: 'link', text: '1', href: '#',
        },
        total_block: {
          type: 'link', text: '12', href: '#',
        },
        total_slide: {
          type: 'link', text: '6', href: '#',
        },
        total: {
          type: 'link', text: '2', href: '#',
        },
        sent_lab: {
          type: 'link', text: 'N Health', href: '#',
        },
        status: {
          type: 'tag', text: 'รอผลตรวจ'
        }
      });
    
      this.rows2.push({
        sent_date: {
          type: 'link', text: '20/11/2563, 14:05', href: '#'
        },
        staff_name: { 
          type: 'link', text: 'นันทวรรณ วิลิศมาหรา', href: '#' 
        },
        staff_phone: { 
          type: 'link', text: '041550880 ต่อ 1200', href: '#'
        },
        note: {
          type: 'link', text: 'B715/e', href: '#',
        },
        total_case: {
          type: 'link', text: '2', href: '#',
        },
        total_block: {
          type: 'link', text: '8', href: '#',
        },
        total_slide: {
          type: 'link', text: '2', href: '#',
        },
        total: {
          type: 'link', text: '3', href: '#',
        },
        sent_lab: {
          type: 'link', text: 'N Health', href: '#',
        },
        result:{
          type: 'link', text: 'รายงานผล.pdf', href: '#',
          iconPrepend: 'checkout.svg'
        },
        status: {
          type: 'tag', text: 'เสร็จสิ้น'
        }
      });
      this.rows2.push({
        sent_date: {
          type: 'link', text: '20/11/2563, 14:05', href: '#'
        },
        staff_name: { 
          type: 'link', text: 'นันทวรรณ วิลิศมาหรา', href: '#' 
        },
        staff_phone: { 
          type: 'link', text: '041550880 ต่อ 1200', href: '#'
        },
        note: {
          type: 'link', text: 'B715/e', href: '#',
        },
        total_case: {
          type: 'link', text: '2', href: '#',
        },
        total_block: {
          type: 'link', text: '8', href: '#',
        },
        total_slide: {
          type: 'link', text: '2', href: '#',
        },
        total: {
          type: 'link', text: '3', href: '#',
        },
        sent_lab: {
          type: 'link', text: 'N Health', href: '#',
        },
        result:{
          type: 'link', text: '-', href: '#'
        },
        status: {
          type: 'tag', text: 'ถูกยกเลิก'
        }
      });
    }

  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  }
}
</script>
