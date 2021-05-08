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
              <h6 class="h3">ผลตรวจทางพยาธิวิทยา</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                href="/user/cases" text="ลงทะเบียนส่งตรวจ" 
                classer="btn-color-01" :prepend="true" icon="plus-white.svg" 
              />
            </div>
            <div class="btns show-mobile">
              <Button href="/user/cases" text="ลงทะเบียน" classer="btn-color-01 btn-sm" />
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 'ผลตรวจทั้งหมด', 'เปิดดูแล้ว', 'Additional Report', 'ย้อมพิเศษ (ไม่แปรผล)' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :columns="columns1" :rows="rows1" 
              :search="[ 'sent_to', 'case_id', 'hn', 'name', 'block_ex', 'provider', 'card' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่ลงทะเบียน (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่ลงทะเบียน (เก่าสุด)' },
                { key: 'result_date-desc', text: 'วันที่ออกผล (ใหม่สุด)' },
                { key: 'result_date-asc', text: 'วันที่ออกผล (เก่าสุด)' },
              ]"
              :groups="{
                filter: 'sent_to',
                options: [
                  { text: 'เซลล์วิทยา', value: 'เซลล์วิทยา', checked: true },
                  { text: 'ชิ้นเนื้อ', value: 'ชิ้นเนื้อ', checked: true },
                  { text: 'ส่งตรวจพิเศษ', value: 'ส่งตรวจพิเศษ', checked: true }
                ]
              }"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns2" :rows="rows2" 
              :search="[ 'sent_to', 'case_id', 'hn', 'name', 'block_ex', 'provider', 'card' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่ลงทะเบียน (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่ลงทะเบียน (เก่าสุด)' },
                { key: 'result_date-desc', text: 'วันที่ออกผล (ใหม่สุด)' },
                { key: 'result_date-asc', text: 'วันที่ออกผล (เก่าสุด)' },
              ]"
              :groups="{
                filter: 'sent_to',
                options: [
                  { text: 'เซลล์วิทยา', value: 'เซลล์วิทยา', checked: true },
                  { text: 'ชิ้นเนื้อ', value: 'ชิ้นเนื้อ', checked: true },
                  { text: 'ส่งตรวจพิเศษ', value: 'ส่งตรวจพิเศษ', checked: true }
                ]
              }"
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :columns="columns3" :rows="rows3" 
              :search="[ 'sent_to', 'case_id', 'hn', 'name', 'block_ex', 'provider', 'card' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่ลงทะเบียน (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่ลงทะเบียน (เก่าสุด)' },
                { key: 'result_date-desc', text: 'วันที่ออกผล (ใหม่สุด)' },
                { key: 'result_date-asc', text: 'วันที่ออกผล (เก่าสุด)' },
              ]"
              :groups="{
                filter: 'sent_to',
                options: [
                  { text: 'เซลล์วิทยา', value: 'เซลล์วิทยา', checked: true },
                  { text: 'ชิ้นเนื้อ', value: 'ชิ้นเนื้อ', checked: true },
                  { text: 'ส่งตรวจพิเศษ', value: 'ส่งตรวจพิเศษ', checked: true }
                ]
              }"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 3 }">
            <DataTable 
              :columns="columns4" :rows="rows4" 
              :search="[ 'sent_date', 'staff_name', 'staff_phone', 'note', 'total_block', 'total_case', 'total_slide', 'total', 'sent_lab' ]"
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่ลงทะเบียน (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่ลงทะเบียน (เก่าสุด)' }
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
  name: 'UserCaseResultsPage',
  components: {
    Topnav,
    PopupOptions,
    Tabs01,
    DataTable
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 1,

      columns1: [
        { key: 'sent_to', text: 'ส่ง' },
        { key: 'case_id', text: 'ID Case' },
        { key: 'hn', text: 'HN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'age', text: 'อายุ' },
        { key: 'block_ex', text: 'Block Ex.' },
        { key: 'sent_date', text: 'วันที่ลงทะเบียน' },
        { key: 'result_date', text: 'วันที่ออกผล' },
        { key: 'provider', text: 'พยาธิแพทย์' },
        { key: 'card', text: 'ใบรายงานผล' },
      ],
      rows1: [],

      columns2: [
        { key: 'sent_to', text: 'ส่ง' },
        { key: 'case_id', text: 'ID Case' },
        { key: 'hn', text: 'HN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'age', text: 'อายุ' },
        { key: 'block_ex', text: 'Block Ex.' },
        { key: 'sent_date', text: 'วันที่ลงทะเบียน' },
        { key: 'result_date', text: 'วันที่ออกผล' },
        { key: 'provider', text: 'พยาธิแพทย์' },
        { key: 'card', text: 'ใบรายงานผล' },
      ],
      rows2: [],

      columns3: [
        { key: 'sent_to', text: 'ส่ง' },
        { key: 'case_id', text: 'ID Case' },
        { key: 'hn', text: 'HN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'age', text: 'อายุ' },
        { key: 'block_ex', text: 'Block Ex.' },
        { key: 'sent_date', text: 'วันที่ลงทะเบียน' },
        { key: 'result_date', text: 'วันที่ออกผล' },
        { key: 'trials', text: 'ครั้งที่' },
        { key: 'provider', text: 'พยาธิแพทย์' },
        { key: 'card', text: 'ใบรายงานผล' },
      ],
      rows3: [],

      columns4: [
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
      rows4: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<7; i++){

      this.rows1.push({
        sent_to: { 
          type: 'text', text: 'เซลล์วิทยา', value: 'เซลล์วิทยา', classer: 'color-01'
        },
        case_id: { 
          type: 'link', text: 'FI63-12911', href: '/user/case-result-read'
        },
        hn: { 
          type: 'link', text: '1088052', href: '/user/case-result-read'
        },
        name: { 
          type: 'link', text: 'สงกรานต์ สุขุมมณีวงศ์', href: '/user/case-result-read'
        },
        age: { 
          type: 'link', text: '64 ปี', href: '/user/case-result-read'
        },
        block_ex: { 
          type: 'link', text: 'P63-31891', href: '/user/case-result-read'
        },
        sent_date: {
          type: 'link', text: '20/11/2563, 14:05', href: '/user/case-result-read'
        },
        result_date: {
          type: 'link', text: '04/12/2563, 12:34', href: '/user/case-result-read'
        },
        provider: { 
          type: 'link', text: 'นพ. ศุภณัฐ คังคะมณี', href: '/user/case-result-read'
        },
        card: {
          type: 'link', text: 'R-202001-0001', href: '/user/case-result-read',
          iconAppend: 'checkout.svg'
        },
      });
      this.rows1.push({
        sent_to: { 
          type: 'text', text: 'ชิ้นเนื้อ', value: 'ชิ้นเนื้อ', classer: 'color-11'
        },
        case_id: { 
          type: 'link', text: 'FI63-07821', href: '/user/case-result-read'
        },
        hn: { 
          type: 'link', text: '1068055', href: '/user/case-result-read'
        },
        name: { 
          type: 'link', text: 'ภานุวัฒน์ ลาแม', href: '/user/case-result-read'
        },
        age: { 
          type: 'link', text: '23 ปี', href: '/user/case-result-read'
        },
        block_ex: { 
          type: 'link', text: 'P63-21341', href: '/user/case-result-read'
        },
        sent_date: {
          type: 'link', text: '20/12/2563, 14:05', href: '/user/case-result-read'
        },
        result_date: {
          type: 'link', text: '24/12/2563, 12:34', href: '/user/case-result-read'
        },
        provider: { 
          type: 'link', text: 'นพ. ศุภณัฐ คังคะมณี', href: '/user/case-result-read'
        },
        card: {
          type: 'link', text: 'R-202001-0002', href: '/user/case-result-read',
          iconAppend: 'checkout.svg'
        },
      });
      this.rows1.push({
        sent_to: { 
          type: 'text', text: 'ส่งตรวจพิเศษ', value: 'ส่งตรวจพิเศษ', classer: 'color-12'
        },
        case_id: { 
          type: 'link', text: 'EX63-12911', href: '/user/case-result-read'
        },
        hn: { 
          type: 'link', text: '1009630', href: '/user/case-result-read'
        },
        name: { 
          type: 'link',  text: 'อิบรอฮีม หลังยาหน่าย', href: '/user/case-result-read'
        },
        age: { 
          type: 'link', text: '-', href: '/user/case-result-read'
        },
        block_ex: { 
          type: 'link', text: 'P63-98721', href: '/user/case-result-read'
        },
        sent_date: {
          type: 'link', text: '20/11/2563, 14:05', href: '/user/case-result-read'
        },
        result_date: {
          type: 'link', text: '04/12/2563, 12:34', href: '/user/case-result-read'
        },
        provider: { 
          type: 'link', text: 'บริษัท N Health', href: '/user/case-result-read'
        },
        card: {
          type: 'link', text: 'R-202001-0003', href: '/user/case-result-read',
          iconAppend: 'checkout.svg'
        },
      });

      this.rows2.push({
        sent_to: { 
          type: 'text', text: 'เซลล์วิทยา', value: 'เซลล์วิทยา', classer: 'color-01'
        },
        case_id: { 
          type: 'link', text: 'FI63-12911', href: '/user/case-result-read'
        },
        hn: { 
          type: 'link', text: '1088052', href: '/user/case-result-read'
        },
        name: { 
          type: 'link', text: 'สงกรานต์ สุขุมมณีวงศ์', href: '/user/case-result-read'
        },
        age: { 
          type: 'link', text: '64 ปี', href: '/user/case-result-read'
        },
        block_ex: { 
          type: 'link', text: 'P63-31891', href: '/user/case-result-read'
        },
        sent_date: {
          type: 'link', text: '20/11/2563, 14:05', href: '/user/case-result-read'
        },
        result_date: {
          type: 'link', text: '04/12/2563, 12:34', href: '/user/case-result-read'
        },
        provider: { 
          type: 'link', text: 'นพ. ศุภณัฐ คังคะมณี', href: '/user/case-result-read'
        },
        card: {
          type: 'link', text: 'R-202001-0001', href: '/user/case-result-read',
          iconAppend: 'checkout.svg'
        },
      });
      this.rows2.push({
        sent_to: { 
          type: 'text', text: 'ชิ้นเนื้อ', value: 'ชิ้นเนื้อ', classer: 'color-11'
        },
        case_id: { 
          type: 'link', text: 'FI63-07821', href: '/user/case-result-read'
        },
        hn: { 
          type: 'link', text: '1068055', href: '/user/case-result-read'
        },
        name: { 
          type: 'link', text: 'ภานุวัฒน์ ลาแม', href: '/user/case-result-read'
        },
        age: { 
          type: 'link', text: '23 ปี', href: '/user/case-result-read'
        },
        block_ex: { 
          type: 'link', text: 'P63-21341', href: '/user/case-result-read'
        },
        sent_date: {
          type: 'link', text: '20/12/2563, 14:05', href: '/user/case-result-read'
        },
        result_date: {
          type: 'link', text: '24/12/2563, 12:34', href: '/user/case-result-read'
        },
        provider: { 
          type: 'link', text: 'นพ. ศุภณัฐ คังคะมณี', href: '/user/case-result-read'
        },
        card: {
          type: 'link', text: 'R-202001-0002', href: '/user/case-result-read',
          iconAppend: 'checkout.svg'
        },
      });
      this.rows3.push({
        sent_to: { 
          type: 'text', text: 'ชิ้นเนื้อ', value: 'ชิ้นเนื้อ', classer: 'color-11'
        },
        case_id: { 
          type: 'link', text: 'FI63-07821', href: '/user/case-result-read'
        },
        hn: { 
          type: 'link', text: '1068055', href: '/user/case-result-read'
        },
        name: { 
          type: 'link', text: 'ภานุวัฒน์ ลาแม', href: '/user/case-result-read'
        },
        age: { 
          type: 'link', text: '23 ปี', href: '/user/case-result-read'
        },
        block_ex: { 
          type: 'link', text: 'P63-21341', href: '/user/case-result-read'
        },
        sent_date: {
          type: 'link', text: '20/12/2563, 14:05', href: '/user/case-result-read'
        },
        result_date: {
          type: 'link', text: '24/12/2563, 12:34', href: '/user/case-result-read'
        },
        trials: {
          type: 'link', text: '3', href: '/user/case-result-read'
        },
        provider: { 
          type: 'link', text: 'นพ. ศุภณัฐ คังคะมณี', href: '/user/case-result-read'
        },
        card: {
          type: 'link', text: 'R-202001-0002', href: '/user/case-result-read',
          iconAppend: 'checkout.svg'
        },
      });
      
      this.rows4.push({
       sent_date: {
          type: 'text', text: '20/11/2563, 14:05'
        },
        staff_name: { 
          type: 'link', text: 'นันทวรรณ วิลิศมาหรา', href: '/user/case-result-read'
        },
        staff_phone: { 
          type: 'link', text: '041550880 ต่อ 1200', href: '/user/case-result-read'
        },
        note: {
          type: 'link', text: 'B715/e', href: '/user/case-result-read'
        },
        total_case: {
          type: 'link', text: '2', href: '/user/case-result-read'
        },
        total_block: {
          type: 'link', text: '8', href: '/user/case-result-read'
        },
        total_slide: {
          type: 'link', text: '2', href: '/user/case-result-read'
        },
        total: {
          type: 'link', text: '3', href: '/user/case-result-read'
        },
        sent_lab: {
          type: 'link', text: 'N Health', href: '/user/case-result-read'
        },
        result:{
          type: 'link', text: 'รายงานผล.pdf', href: '/user/case-result-read',
          iconAppend: 'checkout.svg'
        },
        status: {
          type: 'tag', text: 'เสร็จสิ้น'
        }
      });
      
    }

  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  }
}
</script>
