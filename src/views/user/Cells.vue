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
              <h6 class="h3">งานเซลล์วิทยา</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                href="/user/case-cytology-add" text="ลงทะเบียนส่งตรวจเซลล์วิทยา" 
                classer="btn-color-01 mr-3" :prepend="true" icon="plus-white.svg" 
              />
              <Button 
                href="/user/case-biopsy-add" text="ลงทะเบียนส่งตรวจชิ้นเนื้อ" 
                classer="btn-color-02" :prepend="true" icon="plus-white.svg" 
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
            :tabs="[ 'รับเข้าหน่วย', 'มอบหมายงาน', 'รอวินิจฉัยเซลล์', 'ประวัติการวินิจฉัย' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :columns="columns1" :rows="rows1" 
              :search="[ 'sent_date', 'an', 'hn', 'name', 'card_type' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันเวลาที่รับบริการ (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันเวลาที่รับบริการ (เก่าสุด)' },
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns2" :rows="rows2" 
              :search="[ 'sent_date', 'an', 'hn', 'name', 'card_type' ]" 
              :rowSelect="true" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันเวลาที่รับบริการ (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันเวลาที่รับบริการ (เก่าสุด)' }
              ]" 
              @check-click="selectedRow2($event)"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :columns="columns3" :rows="rows3" 
              :search="[ 'sent_date', 'an', 'hn', 'name', 'card_type' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันเวลาที่รับบริการ (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันเวลาที่รับบริการ (เก่าสุด)' }
              ]"
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 3 }">
            <DataTable 
              :columns="columns4" :rows="rows4" 
              :search="[ 'sent_date', 'an', 'hn', 'name', 'card_type' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันเวลาที่รับบริการ (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันเวลาที่รับบริการ (เก่าสุด)' }
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

  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import PopupOptions from '../../components/PopupOptions';
import Tabs01 from '../../components/Tabs01';
import DataTable from '../../components/DataTable';

export default {
  name: 'UserCellsPage',
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
      isOpenedOptions: false,

      columns1: [
        { key: 'sent_date', text: 'วันเวลาที่รับบริการ' },
        { key: 'hn', text: 'HN' },
        { key: 'an', text: 'AN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'card_type', text: 'สวัสดิการข้าราชการ' },
        { key: 'doctor', text: 'แพทย์ผู้ดูแล' },
        { key: 'collect_date', text: 'วันที่เก็บตัวอย่าง' },
        { key: 'hospital', text: 'โรงพยาบาล' },
        { key: 'status', text: 'สถานะ' },
      ],
      rows1: [],

      columns2: [
        { key: 'sent_date', text: 'วันเวลาที่รับบริการ' },
        { key: 'case_id', text: 'รหัสใบส่งตรวจ' },
        { key: 'hn', text: 'HN' },
        { key: 'an', text: 'AN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'card_type', text: 'สวัสดิการข้าราชการ' },
        { key: 'doctor', text: 'แพทย์ผู้ดูแล' },
        { key: 'report_date', text: 'วันที่ต้องรายงานผล' },
        { key: 'status', text: 'สถานะ' },
      ],
      rows2: [],

      columns3: [
        { key: 'sent_date', text: 'วันเวลาที่รับบริการ' },
        { key: 'case_id', text: 'รหัสใบส่งตรวจ' },
        { key: 'hn', text: 'HN' },
        { key: 'an', text: 'AN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'card_type', text: 'สวัสดิการข้าราชการ' },
        { key: 'status', text: 'สถานะ' },
        { key: 'assigned_to', text: 'มอบหมายงาน' },
      ],
      rows3: [],

      columns4: [
        { key: 'sent_date', text: 'วันเวลาที่รับบริการ' },
        { key: 'case_id', text: 'รหัสใบส่งตรวจ' },
        { key: 'hn', text: 'HN' },
        { key: 'an', text: 'AN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'card_type', text: 'สวัสดิการข้าราชการ' },
        { key: 'report_date', text: 'วันที่รายงานผล' },
        { key: 'assigned_to', text: 'ชื่อ นามสกุล ผู้วินิจฉัย' },
        { key: 'option', text: '' },
      ],
      rows4: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<7; i++){
      this.rows1.push({
        sent_date: {
          type: 'text', text: '07/11/2563, 08:53'
        },
        hn: { 
          type: 'text', text: '1085526'
        },
        an: { 
          type: 'text', text: '560015'
        },
        name: { 
          type: 'text', text: 'สงกรานต์ สุขุมมณีวงศ์' 
        },
        card_type: {
          type: 'text', text: 'สวัสดิการข้าราชการ',
        },
        doctor: { 
          type: 'text', text: 'ผศ. อนุรักษ์ ไทยสงค์' 
        },
        collect_date: {
          type: 'text', text: '06/01/2638'
        },
        hospital: { 
          type: 'text', text: 'สกลนคร' 
        },
        status: {
          type: 'tag', text: 'รอรับเข้าบริการ'
        }
      });
      this.rows1.push({
        sent_date: {
          type: 'text', text: '12/11/2563, 09:12'
        },
        hn: { 
          type: 'text', text: '1074122'
        },
        an: { 
          type: 'text', text: '524008'
        },
        name: { 
          type: 'text', text: 'นาย ณรงค์ฤทธิ์ พรมบุรี' 
        },
        card_type: {
          type: 'text', text: 'ประกันสุขภาพ',
        },
        doctor: { 
          type: 'text', text: 'นพ. ดรุณีย์ มณีวงศ์' 
        },
        collect_date: {
          type: 'text', text: '11/01/2638'
        },
        hospital: { 
          type: 'text', text: 'สมเด็จพระปิ่นเกล้า' 
        },
        status: {
          type: 'tag', text: 'รอรับเข้าบริการ'
        }
      });
     
      this.rows2.push({
        id: i*2,
        sent_date: {
          type: 'text', text: '12/11/2563, 09:12'
        },
        case_id: { 
          type: 'text', text: 'S20-0001'
        },
        hn: { 
          type: 'text', text: '1085526'
        },
        an: { 
          type: 'text', text: '560015'
        },
        name: { 
          type: 'text', text: 'นาย อานนท์ สงศามณีวัล' 
        },
        card_type: {
          type: 'text', text: 'สวัสดิการข้าราชการ',
        },
        doctor: { 
          type: 'text', text: 'นพ. ดรุณีย์ มณีวงศ์' 
        },
        report_date: {
          type: 'text', text: '06/01/2638, 13:56'
        },
        status: {
          type: 'tag', text: 'รอมอบหมายงาน'
        }
      });
      this.rows2.push({
        id: i*2+1,
        sent_date: {
          type: 'text', text: '12/11/2563, 12:11'
        },
        case_id: { 
          type: 'text', text: 'S20-0002'
        },
        hn: { 
          type: 'text', text: '1074122'
        },
        an: { 
          type: 'text', text: '524008'
        },
        name: { 
          type: 'text', text: 'นางสาว ปลายฟ้า เพียงดาว' 
        },
        card_type: {
          type: 'text', text: 'ประกันสุขภาพ',
        },
        doctor: { 
          type: 'text', text: 'รศ. ธัญญาวรรณ คำกลาง' 
        },
        report_date: {
          type: 'text', text: '17/11/2563, 10:30'
        },
        status: {
          type: 'tag', text: 'รอมอบหมายงาน'
        }
      });

      this.rows3.push({
        sent_date: {
          type: 'text', text: '12/11/2563, 12:11'
        },
        case_id: { 
          type: 'text', text: 'S20-0002'
        },
        hn: { 
          type: 'text', text: '1074122'
        },
        an: { 
          type: 'text', text: '123456'
        },
        name: { 
          type: 'text', text: 'นางสาว ปลายฟ้า เพียงดาว' 
        },
        card_type: {
          type: 'text', text: 'ประกันสุขภาพ',
        },
        status: {
          type: 'tag', text: 'เตรียมสไลด์'
        },
        assigned_to: {
          type: 'text', text: 'นายเตธนันท์ วงศ์ปรีชาโชค',
        },
      });
      this.rows3.push({
        sent_date: {
          type: 'text', text: '13/11/2563, 09:34'
        },
        case_id: { 
          type: 'text', text: 'S20-0003'
        },
        hn: { 
          type: 'text', text: '1872123'
        },
        an: { 
          type: 'text', text: '528911'
        },
        name: { 
          type: 'text', text: 'นาย อัครพล เทพพิพัฒดำรง' 
        },
        card_type: {
          type: 'text', text: 'ประกันสุขภาพ',
        },
        status: {
          type: 'tag', text: 'ย้อมสี', classer: 'ss-tag-danger'
        },
        assigned_to: {
          type: 'text', text: 'นายเตธนันท์ วงศ์ปรีชาโชค',
        },
      });

      this.rows4.push({
        sent_date: {
          type: 'text', text: '07/11/2563, 08:53'
        },
        case_id: { 
          type: 'text', text: 'S20-0001'
        },
        hn: { 
          type: 'text', text: '1234561'
        },
        an: { 
          type: 'text', text: '123456'
        },
        name: { 
          type: 'text', text: 'นาย อานนท์ สงศามณีวัล' 
        },
        card_type: {
          type: 'text', text: 'สวัสดิการข้าราชการ',
        },
        report_date: {
          type: 'text', text: '12/12/2563',
        },
        assigned_to: {
          type: 'text', text: 'ผศ. อนุรักษ์ ไทยสงค์',
        },
        option: {
          type: 'link', href: '#', text: 'แก้ไข', classer: 'color-01',
          iconPrepend: 'edit.svg'
        }
      });
    }

  },
  methods: {
    selectedRow2(value) {
      console.log(value)
    }
  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  }
}
</script>
