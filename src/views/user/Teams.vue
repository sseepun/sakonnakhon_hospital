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
              <h6 class="h3">บุคลากร</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                href="/user/case-biopsy-add" text="ลงชื่อเข้าทำงาน" 
                classer="btn-color-01" :prepend="true" icon="exit-white.svg" 
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
            :tabs="[ 'การลงชื่อเข้าทำงาน', 'ประวัติภาระงาน', 'บุคลากรที่ไม่ลงชื่อออก' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :columns="columns1" :rows="rows1" 
              :search="[ 'code', 'name', 'role', 'assigned' ]" 
              :orders="[
                { key: 'in-desc', text: 'เวลาเข้า (ใหม่สุด)' },
                { key: 'in-asc', text: 'เวลาเข้า (เก่าสุด)' },
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns2" :rows="rows2" 
              :search="[ 'date', 'code', 'name', 'role', 'assgined' ]" 
              :orders="[
                { key: 'date-desc', text: 'วันที่และเวลาออก (ใหม่สุด)' },
                { key: 'date-asc', text: 'วันที่และเวลาออก (เก่าสุด)' }
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :columns="columns3" :rows="rows3" 
              :search="[ 'date', 'code', 'name', 'role', 'assgined' ]" 
              :orders="[
                { key: 'date-desc', text: 'วันที่และเวลาออก (ใหม่สุด)' },
                { key: 'date-asc', text: 'วันที่และเวลาออก (เก่าสุด)' }
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
  name: 'UserTeamsPage',
  components: {
    Topnav,
    PopupOptions,
    Tabs01,
    DataTable
  },
  data() {
    return {
      userRole: 'Staff พยาธิวิทยา', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      isOpenedOptions: false,

      columns1: [
        { key: 'code', text: 'รหัสพนักงาน' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'role', text: 'ตำแหน่งงาน' },
        { key: 'in', text: 'เวลาเข้า' },
        { key: 'out', text: 'เวลาออก' },
        { key: 'assigned', text: 'ภาระงาน' },
        { key: 'status', text: 'สถานะ' },
        { key: 'signOut', text: '' },
      ],
      rows1: [],

      columns2: [
        { key: 'date', text: 'วันที่' },
        { key: 'code', text: 'รหัสพนักงาน' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'in', text: 'เวลาเข้า' },
        { key: 'out', text: 'เวลาออก' },
        { key: 'total', text: 'เวลาออก' },
        { key: 'assigned', text: 'ภาระงาน' },
        { key: 'status', text: 'สถานะ' },
        { key: 'report', text: '' },
      ],
      rows2: [],

      columns3: [
        { key: 'date', text: 'วันที่' },
        { key: 'code', text: 'รหัสพนักงาน' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'in', text: 'เวลาเข้า' },
        { key: 'out', text: 'เวลาออก' },
        { key: 'total', text: 'เวลาออก' },
        { key: 'assigned', text: 'ภาระงาน' },
        { key: 'status', text: 'สถานะ' },
        { key: 'report', text: '' },
      ],
      rows3: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<7; i++){

      this.rows1.push({
        code: { 
          type: 'text', text: '20247815'
        },
        name: { 
          type: 'text', text: 'นพ. สงกรานต์ สุขุมมณีวงศ์'
        },
        role: { 
          type: 'text', text: 'นายแพทย์ชำนาญการ'
        },
        in: { 
          type: 'text', text: '07:42' 
        },
        out: { 
          type: 'text', text: '16:32'
        },
        assigned: {
          type: 'text', text: 'รายงานผล'
        },
        status: {
          type: 'tag', text: 'เสร็จสิ้น'
        },
        signOut: {
          type: 'text', text: ''
        },
      });

      this.rows1.push({
        code: { 
          type: 'text', text: '24069004'
        },
        name: { 
          type: 'text', text: 'รศ. ธัญญาวรรณ คำกลาง'
        },
        role: { 
          type: 'text', text: 'นักวิทยาศาสตร์การแพทย์ปฏิบั..'
        },
        in: { 
          type: 'text', text: '07:55' 
        },
        out: { 
          type: 'text', text: '-'
        },
        assigned: {
          type: 'text', text: 'เตรียมสไลด์, ย้อมสี, Screening'
        },
        status: {
          type: 'tag', text: 'กำลังเข้าทำงาน', classer: 'ss-tag-warning'
        },
        signOut: {
          type: 'link', text: 'ลงชื่อออกจากงาน', href: '#', classer: 'color-danger',
          iconPrepend: 'exit.svg'
        },
      });


      this.rows2.push({
        date: { 
          type: 'text', text: '15/11/2563'
        },
        code: { 
          type: 'text', text: '20247815'
        },
        name: { 
          type: 'text', text: 'นพ.ณรงค์ฤทธิ์ พรมบุรี'
        },
        in: { 
          type: 'text', text: '07:42'
        },
        out: { 
          type: 'text', text: '–' 
        },
        total: { 
          type: 'text', text: '-'
        },
        assigned: {
          type: 'text', text: 'รายงานผล'
        },
        status: {
          type: 'tag', text: 'ไม่ลงชื่อออก', classer: 'ss-tag-warning'
        },
        report: {
          type: 'link', text: 'เพิ่มการร้องเรียน', href: '#', classer: 'color-01',
          iconPrepend: 'comment.svg'
        },
      });
      this.rows2.push({
        date: { 
          type: 'text', text: '15/11/2563'
        },
        code: { 
          type: 'text', text: '24069004'
        },
        name: { 
          type: 'text', text: 'รศ. ธัญญาวรรณ คำกลาง'
        },
        in: { 
          type: 'text', text: '07:55'
        },
        out: { 
          type: 'text', text: '18:12' 
        },
        total: { 
          type: 'text', text: '10 ช. 57 น.'
        },
        assigned: {
          type: 'text', text: 'เตรียมสไลด์, ย้อมสี , Screening'
        },
        status: {
          type: 'tag', text: 'เสร็จสิ้น'
        },
        report: {
          type: 'link', text: 'การร้องเรียน', href: '#', classer: 'color-01',
          iconPrepend: 'comment.svg'
        },
      });

      this.rows3.push({
        date: { 
          type: 'text', text: '15/11/2563'
        },
        code: { 
          type: 'text', text: '20247815'
        },
        name: { 
          type: 'text', text: 'นพ.ณรงค์ฤทธิ์ พรมบุรี'
        },
        in: { 
          type: 'text', text: '07:42'
        },
        out: { 
          type: 'text', text: '–' 
        },
        total: { 
          type: 'text', text: '-'
        },
        assigned: {
          type: 'text', text: 'รายงานผล'
        },
        status: {
          type: 'tag', text: 'ไม่ลงชื่อออก', classer: 'ss-tag-warning'
        },
        report: {
          type: 'link', text: 'เพิ่มการร้องเรียน', href: '#', classer: 'color-01',
          iconPrepend: 'comment.svg'
        },
      });
    }

  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  }
}
</script>
