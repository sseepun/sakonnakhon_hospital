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
              <h6 class="h3">งานรักษาและจำหน่ายศพ</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                href="/user/funeral-add" text="ลงทะเบียนรักษาศพ" 
                classer="btn-color-01 mr-3" :prepend="true" icon="plus-white.svg" 
              />
            </div>
            <div class="btns show-mobile">
              <Button 
                text="ลงทะเบียน" classer="btn-color-01 btn-sm"
                href="/user/funeral-add"
              />
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 'รอดำเนินการ', 'กำลังดำเนินการ', 'ดำเนินการเสร็จสิ้น' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :columns="columns1" :rows="rows1" 
              :search="[ 'death_record', 'name', 'hn', 'doctor_name', 'sent_building', 'card_type' ]" 
              :orders="[
                { key: 'death_record-desc', text: 'วันที่ลงทะเบียน (ใหม่สุด)' },
                { key: 'death_record-asc', text: 'วันที่ลงทะเบียน (เก่าสุด)' },
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns2" :rows="rows2" 
              :search="[ 'death_record', 'name', 'hn', 'doctor_name', 'sent_building', 'card_type' ]" 
              :orders="[
                { key: 'death_record-desc', text: 'วันที่นำเข้า (ใหม่สุด)' },
                { key: 'death_record-asc', text: 'วันที่นำเข้า (เก่าสุด)' }
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :columns="columns3" :rows="rows3" 
              :search="[ 'death_record', 'name', 'hn', 'doctor_name', 'sent_building', 'card_type' ]" 
              :orders="[
                { key: 'death_record-desc', text: 'วันที่นำเข้า (ใหม่สุด)' },
                { key: 'death_record-asc', text: 'วันที่นำเข้า (เก่าสุด)' }
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
  name: 'UserFuneralPage',
  components: {
    Topnav,
    PopupOptions,
    Tabs01,
    DataTable
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 2,
      isOpenedOptions: false,

      columns1: [
        { key: 'hn', text: 'HN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'birth_date', text: 'วันเกิด' },
        { key: 'age', text: 'อายุ' },
        { key: 'card_type', text: 'สิทธิการรักษา' },
        { key: 'doctor_name', text: 'แพทย์ผู้ดูแล' },
        { key: 'death_record', text: 'วันเวลาเสียชีวิต' },
        { key: 'sent_building', text: 'ตึกที่ส่ง' },
        { key: 'status', text: 'สถานะ' },
      ],
      rows1: [],

      columns2: [
        { key: 'hn', text: 'HN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'birth_date', text: 'วันเกิด' },
        { key: 'age', text: 'อายุ' },
        { key: 'card_type', text: 'สิทธิการรักษา' },
        { key: 'doctor_name', text: 'แพทย์ผู้ดูแล' },
        { key: 'death_record', text: 'วันเวลาเสียชีวิต' },
        { key: 'sent_building', text: 'ตึกที่ส่ง' },
        { key: 'status', text: 'สถานะ' },
      ],
      rows2: [],

      columns3: [
        { key: 'hn', text: 'HN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'birth_date', text: 'วันเกิด' },
        { key: 'age', text: 'อายุ' },
        { key: 'card_type', text: 'สิทธิการรักษา' },
        { key: 'doctor_name', text: 'แพทย์ผู้ดูแล' },
        { key: 'death_record', text: 'วันเวลาเสียชีวิต' },
        { key: 'sent_building', text: 'ตึกที่ส่ง' },
        { key: 'status', text: 'สถานะ' },
      ],
      rows3: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<7; i++){

      this.rows1.push({
        hn: { 
          type: 'text', text: '1088052'
        },
        name: {
          type: 'text', text: 'นาย ณรงค์ฤทธิ์ พรมบุรี'
        },
        birth_date: { 
          type: 'text', text: '01/11/2538'
        },
        age: { 
          type: 'text', text: '25 ปี'
        },
        card_type: { 
          type: 'text', text: 'สวัสดิการข้าราชการ'
        },
        doctor_name: { 
          type: 'text', text: 'นพ. ดรุณีย์ ประหยัดธรรม' 
        },
        death_record: { 
          type: 'text', text: '11/01/2638, 13:56'
        },
        sent_building: {
          type: 'text', text: 'สกลนคร 1',
        },
        status: {
          type: 'tag', text: 'รอดำเนินการ'
        }
      });

      this.rows1.push({
        hn: { 
          type: 'text', text: '1074122'
        },
        name: {
          type: 'text', text: 'นาย อานนท์ สงศามณีวัล'
        },
        birth_date: { 
          type: 'text', text: '20/02/2500'
        },
        age: { 
          type: 'text', text: '56 ปี'
        },
        card_type: { 
          type: 'text', text: 'ประกันสุขภาพ'
        },
        doctor_name: { 
          type: 'text', text: 'ผศ. อนุรักษ์ ไทยสงค์' 
        },
        death_record: { 
          type: 'text', text: '31/10/2563, 16:44'
        },
        sent_building: {
          type: 'text', text: 'สกลนคร 3',
        },
        status: {
          type: 'tag', text: 'รอจำหน่าย', classer: 'ss-tag-info'
        }
      });
    
      this.rows2.push({
        hn: { 
          type: 'text', text: '1088052'
        },
        name: {
          type: 'text', text: 'นาย ณรงค์ฤทธิ์ พรมบุรี'
        },
        birth_date: { 
          type: 'text', text: '01/11/2538'
        },
        age: { 
          type: 'text', text: '25 ปี'
        },
        card_type: { 
          type: 'text', text: 'สวัสดิการข้าราชการ'
        },
        doctor_name: { 
          type: 'text', text: 'นพ. ดรุณีย์ ประหยัดธรรม' 
        },
        death_record: { 
          type: 'text', text: '11/01/2638, 13:56'
        },
        sent_building: {
          type: 'text', text: 'สกลนคร 1',
        },
        status: {
          type: 'tag', text: 'เก็บรักษา', classer: 'ss-tag-danger'
        }
      });

      this.rows2.push({
        hn: { 
          type: 'text', text: '1074122'
        },
        name: {
          type: 'text', text: 'นาย อานนท์ สงศามณีวัล'
        },
        birth_date: { 
          type: 'text', text: '20/02/2500'
        },
        age: { 
          type: 'text', text: '56 ปี'
        },
        card_type: { 
          type: 'text', text: 'ประกันสุขภาพ'
        },
        doctor_name: { 
          type: 'text', text: 'ผศ. อนุรักษ์ ไทยสงค์' 
        },
        death_record: { 
          type: 'text', text: '31/10/2563, 16:44'
        },
        sent_building: {
          type: 'text', text: 'สกลนคร 3',
        },
        status: {
          type: 'tag', text: 'รอการทำลาย', classer: 'ss-tag-warning'
        }
      });

      this.rows3.push({
        hn: { 
          type: 'text', text: '1088052'
        },
        name: {
          type: 'text', text: 'นาย ณรงค์ฤทธิ์ พรมบุรี'
        },
        birth_date: { 
          type: 'text', text: '01/11/2538'
        },
        age: { 
          type: 'text', text: '25 ปี'
        },
        card_type: { 
          type: 'text', text: 'สวัสดิการข้าราชการ'
        },
        doctor_name: { 
          type: 'text', text: 'นพ. ดรุณีย์ ประหยัดธรรม' 
        },
        death_record: { 
          type: 'text', text: '11/01/2638, 13:56'
        },
        sent_building: {
          type: 'text', text: 'สกลนคร 1',
        },
        status: {
          type: 'tag', text: 'จำหน่ายแล้ว', classer: 'ss-tag-purple'
        }
      });

      this.rows3.push({
        hn: { 
          type: 'text', text: '1074122'
        },
        name: {
          type: 'text', text: 'นาย อานนท์ สงศามณีวัล'
        },
        birth_date: { 
          type: 'text', text: '20/02/2500'
        },
        age: { 
          type: 'text', text: '56 ปี'
        },
        card_type: { 
          type: 'text', text: 'ประกันสุขภาพ'
        },
        doctor_name: { 
          type: 'text', text: 'ผศ. อนุรักษ์ ไทยสงค์' 
        },
        death_record: { 
          type: 'text', text: '31/10/2563, 16:44'
        },
        sent_building: {
          type: 'text', text: 'สกลนคร 3',
        },
        status: {
          type: 'tag', text: 'ทำลายแล้ว', classer: 'ss-tag-danger'
        }
      });

    }

  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  }
}
</script>
