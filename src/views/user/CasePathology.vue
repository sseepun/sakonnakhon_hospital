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
              <h6 class="h3">ผลตรวจทางพยาธิวิทยา</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                href="/user/case-cytology-add" text="ลงทะเบียนส่งตรวจ" 
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

  <PopupOptions 
    :isOpenedOptions="isOpenedOptions" 
    @clicked="isOpenedOptions = !isOpenedOptions"
    :options="[
      { text: 'ลงทะเบียนส่งตรวจเซลล์วิทยา', icon: 'plus.svg', href: '/user/case-cytology-add' },
      { text: 'ลงทะเบียนส่งตรวจชิ้นเนื้อ', icon: 'plus.svg', href: '/user/case-biopsy-add' }
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
  name: 'UserCasePathologyPage',
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
          type: 'text', text: 'เซลล์วิทยา', classer: 'color-01'
        },
        case_id: { 
          type: 'text', text: 'FI63-12911',
        },
        hn: { 
          type: 'text', text: '1088052',
        },
        name: { 
          type: 'text', text: 'สงกรานต์ สุขุมมณีวงศ์', 
        },
        age: { 
          type: 'text', text: '64 ปี',
        },
        block_ex: { 
          type: 'text', text: 'P63-31891',
        },
        sent_date: {
          type: 'text', text: '20/11/2563, 14:05',
        },
        result_date: {
          type: 'text', text: '04/12/2563, 12:34',
        },
        provider: { 
          type: 'text', text: 'นพ. ศุภณัฐ คังคะมณี',
        },
        card: {
          type: 'link', text: 'R-202001-0001', href: '#',
          iconPrepend: 'checkout.svg'
        },
      });

      this.rows1.push({
        sent_to: { 
          type: 'text', text: 'ชิ้นเนื้อ', classer: 'color-11'
        },
        case_id: { 
          type: 'text', text: 'FI63-07821',
        },
        hn: { 
          type: 'text', text: '1068055',
        },
        name: { 
          type: 'text', text: 'ภานุวัฒน์ ลาแม', 
        },
        age: { 
          type: 'text', text: '23 ปี',
        },
        block_ex: { 
          type: 'text', text: 'P63-21341',
        },
        sent_date: {
          type: 'text', text: '20/12/2563, 14:05',
        },
        result_date: {
          type: 'text', text: '24/12/2563, 12:34',
        },
        provider: { 
          type: 'text', text: 'นพ. ศุภณัฐ คังคะมณี',
        },
        card: {
          type: 'link', text: 'R-202001-0002', href: '#',
          iconPrepend: 'checkout.svg'
        },
      });

      this.rows1.push({
        sent_to: { 
          type: 'text', text: 'ส่งตรวจพิเศษ', classer: 'color-12'
        },
        case_id: { 
          type: 'text', text: 'EX63-12911',
        },
        hn: { 
          type: 'text', text: '1009630',
        },
        name: { 
          type: 'text',  text: 'อิบรอฮีม หลังยาหน่าย', 
        },
        age: { 
          type: 'text', text: '-',
        },
        block_ex: { 
          type: 'text', text: 'P63-98721',
        },
        sent_date: {
          type: 'text', text: '20/11/2563, 14:05',
        },
        result_date: {
          type: 'text', text: '04/12/2563, 12:34',
        },
        provider: { 
          type: 'text', text: 'บริษัท N Health',
        },
        card: {
          type: 'link', text: 'R-202001-0003', href: '#',
          iconPrepend: 'checkout.svg'
        },
      });

      this.rows2.push({
        sent_to: { 
          type: 'text', text: 'เซลล์วิทยา', classer: 'color-01'
        },
        case_id: { 
          type: 'text', text: 'FI63-12911',
        },
        hn: { 
          type: 'text', text: '1088052',
        },
        name: { 
          type: 'text', text: 'สงกรานต์ สุขุมมณีวงศ์', 
        },
        age: { 
          type: 'text', text: '64 ปี',
        },
        block_ex: { 
          type: 'text', text: 'P63-31891',
        },
        sent_date: {
          type: 'text', text: '20/11/2563, 14:05',
        },
        result_date: {
          type: 'text', text: '04/12/2563, 12:34',
        },
        provider: { 
          type: 'text', text: 'นพ. ศุภณัฐ คังคะมณี',
        },
        card: {
          type: 'link', text: 'R-202001-0001', href: '#',
          iconPrepend: 'checkout.svg'
        },
      });

      this.rows2.push({
        sent_to: { 
          type: 'text', text: 'ชิ้นเนื้อ', classer: 'color-11'
        },
        case_id: { 
          type: 'text', text: 'FI63-07821',
        },
        hn: { 
          type: 'text', text: '1068055',
        },
        name: { 
          type: 'text', text: 'ภานุวัฒน์ ลาแม', 
        },
        age: { 
          type: 'text', text: '23 ปี',
        },
        block_ex: { 
          type: 'text', text: 'P63-21341',
        },
        sent_date: {
          type: 'text', text: '20/12/2563, 14:05',
        },
        result_date: {
          type: 'text', text: '24/12/2563, 12:34',
        },
        provider: { 
          type: 'text', text: 'นพ. ศุภณัฐ คังคะมณี',
        },
        card: {
          type: 'link', text: 'R-202001-0002', href: '#',
          iconPrepend: 'checkout.svg'
        },
      });
      
      this.rows3.push({
        sent_to: { 
          type: 'text', text: 'ชิ้นเนื้อ', classer: 'color-11'
        },
        case_id: { 
          type: 'text', text: 'FI63-07821',
        },
        hn: { 
          type: 'text', text: '1068055',
        },
        name: { 
          type: 'text', text: 'ภานุวัฒน์ ลาแม', 
        },
        age: { 
          type: 'text', text: '23 ปี',
        },
        block_ex: { 
          type: 'text', text: 'P63-21341',
        },
        sent_date: {
          type: 'text', text: '20/12/2563, 14:05',
        },
        result_date: {
          type: 'text', text: '24/12/2563, 12:34',
        },
        trials: {
          type: 'text', text: '3',
        },
        provider: { 
          type: 'text', text: 'นพ. ศุภณัฐ คังคะมณี',
        },
        card: {
          type: 'link', text: 'R-202001-0002', href: '#',
          iconPrepend: 'checkout.svg'
        },
      });
      
      this.rows4.push({
       sent_date: {
          type: 'text', text: '20/11/2563, 14:05',
        },
        staff_name: { 
          type: 'text', text: 'นันทวรรณ วิลิศมาหรา', 
        },
        staff_phone: { 
          type: 'text', text: '041550880 ต่อ 1200',
        },
        note: {
          type: 'text', text: 'B715/e',
        },
        total_case: {
          type: 'text', text: '2',
        },
        total_block: {
          type: 'text', text: '8',
        },
        total_slide: {
          type: 'text', text: '2',
        },
        total: {
          type: 'text', text: '3',
        },
        sent_lab: {
          type: 'text', text: 'N Health',
        },
        result:{
          type: 'link', text: 'รายงานผล.pdf', href: '#',
          iconPrepend: 'checkout.svg'
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
