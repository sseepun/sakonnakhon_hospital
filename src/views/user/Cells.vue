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
            <div v-if="tabActiveIndex == 1" class="btns hide-mobile">
              <Button 
                text="ส่งออกภายนอก" @click="exportModalOpen = !exportModalOpen" 
                :class="rowCount ? 'btn-color-07 mr-3': 'btn-color-03 mr-3 disabled'" :prepend="true" icon="upload-white.svg"
              />
              <Button 
                text="มอบหมายงาน" @click="assignModalOpen = !assignModalOpen" 
                :class="rowCount ? 'btn-color-01': 'btn-color-03 disabled'" :prepend="true" icon="user-check-white.svg" 
              />
            </div>
            <div v-if="tabActiveIndex == 1" class="btns show-mobile">
              <Button 
                text="ส่งออก" @click="exportModalOpen = !exportModalOpen" 
                :class="rowCount ? 'btn-color-07 btn-sm mr-1': 'btn-color-03 mr-1 btn-sm disabled'"
              />
              <Button 
                text="มอบหมาย" @click="assignModalOpen = !assignModalOpen" 
                :class="rowCount ? 'btn-color-01 btn-sm': 'btn-color-03 btn-sm disabled'"
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
  
  <div v-if="tabActiveIndex == 1 && rowCount">
    <PopupOptions 
      :isOpenedOptions="isOpenedOptions" 
      @clicked="isOpenedOptions = !isOpenedOptions"
      :options="[
        { text: 'ส่งออกภายนอก', icon: 'plus.svg', href: '#' },
        { text: 'มอบหมายงาน', icon: 'plus.svg', href: '#' }
      ]"
    />
  </div>

  <!-- Assign work Popup -->
  <div class="popup-container" :class="{ 'active': assignModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="assignModalOpen = !assignModalOpen"></div>
      <form action="/user/teams" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xxl">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="assignModalOpen = !assignModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper fw-wrap">
              <div class="text-container ws-nowrap pr-3">
                <h6 class="h3">มอบหมายงาน</h6>
              </div>
              <div class="btns hide-mobile">
                <Button 
                  text="มอบหมายงาน"
                  classer="btn-color-01" :prepend="true" icon="user-check-white.svg" 
                />
              </div>
              <div class="btns ws-nowrap show-mobile">
                <Button text="มอบหมายงาน" classer="btn-color-01 btn-sm" />
              </div>
            </div>
          </div>
          <div class="body-wrapper">
            <div class="body pt-4 pb-4">
              <div class="d-flex jc-space-between">
                <p class="fw-400">รายการที่เลือก</p>
                <p class="fw-400 color-01">ทั้งหมด 3 รายการ</p>
              </div>
            </div>
            <DataTable 
              :withOptions="false"
              :rows="rows5"
              :columns="columns5"
            />
            <div class="body pt-4 pb-4">
              <p class="fw-400">มอบหมายงาน</p>
            </div>
            <DataTable 
              :columns="columns6" :rows="rows6" 
              :rowSelect="true" :roundSelect="true"
              :withOptions="false"
            />
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Export Popup -->
  <div class="popup-container" :class="{ 'active': exportModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="exportModalOpen = !exportModalOpen"></div>
      <form action="/user/teams" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xxl">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="exportModalOpen = !exportModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper fw-wrap">
              <div class="text-container ws-nowrap pr-3">
                <h6 class="h3">ส่งออกภายนอก</h6>
              </div>
              <div class="btns hide-mobile">
                <Button 
                  text="ส่งออกภายนอก"
                  classer="btn-color-07" :prepend="true" icon="upload-white.svg" 
                />
              </div>
              <div class="btns ws-nowrap show-mobile">
                <Button text="ส่งออกภายนอก" classer="btn-color-07 btn-sm" />
              </div>
            </div>
          </div>
          <div class="body-wrapper">
            <div class="body pt-4 pb-4">
              <div class="d-flex jc-space-between">
                <p class="fw-400">รายการที่เลือก</p>
                <p class="fw-400 color-01">ทั้งหมด 3 รายการ</p>
              </div>
            </div>
            <DataTable 
              :withOptions="false"
              :rows="rows5"
              :columns="columns5"
            />
            <div class="body ovf-visible mt-6">
              <p class="fw-400">แบบฟอร์มนำส่งชิ้นเนื้อหรือเซลล์วิทยา</p>
              <div class="grids">
                <div class="grid lg-50 sm-70">
                  <FormGroup 
                    type="datepicker-range" label="*วันที่ส่งชิ้นเนื้อหรือเซลล์วิทยา" 
                    :name="'start_date'" :name2="'end_date'" 
                    :required="true" placeholder="01/01/2564"
                  />
                </div>
                <div class="grid lg-50 sm-70">
                  <FormGroup 
                    type="select" label="*ส่ง Lab" name="sent_lab" 
                    :options="[
                      { value: 1, text: '9 :  บริษัท N Health' },
                    ]" 
                    :value="1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

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
      assignModalOpen: false,
      exportModalOpen: false,
      rowCount: 0,

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
      rows4: [],

      columns5: [
        { key: 'code', text: 'รหัสใบส่งตรวจ'},
        { key: 'hn', text: 'HN'},
        { key: 'name', text: 'ชื่อ นามสกุล'},
        { key: 'date', text: 'วันที่ต้องรายงานผล'},
        { key: 'doctor', text: 'แพทย์ผู้ดูแล'},
        { key: 'type', text: 'ประเภทสิ่งตรวจ'},
      ],
      rows5: [
        {
          code: { text: 'S20-0001' },
          hn: { text: '1074122' },
          name: { text: 'นางสาว ปลายฟ้า เพียงดาว' },
          date: { text: '17/11/2563, 10:30' },
          doctor: { text: 'รศ. ธัญญาวรรณ คำกลาง' },
          type: { text: 'Endocervix' },
        },
        {
          code: { text: 'S20-0002' },
          hn: { text: '1872123' },
          name: { text: 'นาย อัครพล เทพพิพัฒดำรง' },
          date: { text: '18/11/2563, 10:30' },
          doctor: { text: 'รศ. ปวลิน สินคงสมุทร' },
          type: { text: 'Endocervix' },
        },
        {
          code: { text: 'S20-0003' },
          hn: { text: '1762281' },
          name: { text: 'นางสาว เนวิกา อัครสุนทรณ์' },
          date: { text: '19/11/2563, 9:30' },
          doctor: { text: 'รศ. ธัญญาวรรณ คำกลาง' },
          type: { text: 'Endocervix' },
        }
      ],

      columns6: [
        { key: 'code', text: 'รหัสพนักงาน' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'department', text: 'หน่วยงาน/แผนก' },
        { key: 'role', text: 'ตำแหน่ง' },
        { key: 'hospital', text: 'โรงพยาบาล' },
      ],
      rows6: [
        {
          id: 1,
          code: { text: '20247815' },
          name: { text: 'นาย เตธนันท์ วงศ์ปรีชาโชค' },
          department: { text: 'พยาธิวิทยา' },
          role: { text: 'นักวิจัยขั้นสูง' },
          hospital: { text: 'รพ. สกลนคร' },
        },
        {
          id: 2,
          code: { text: '20247815' },
          name: { text: 'นาย กิจฎิเมธ ชาญพานิช' },
          department: { text: 'พนังงานผู้ช่วยทั่วไป' },
          role: { text: 'นักวิจัยขั้นสูง' },
          hospital: { text: 'รพ. สกลนคร' },
        },
        {
          id: 3,
          code: { text: '20247815' },
          name: { text: 'นาย ณรงค์ฤทธิ์ พรมบุรี' },
          department: { text: 'แพทย์แผนโบราณ' },
          role: { text: 'ผู้เชี่ยวชาญด้านสมุนไพร' },
          hospital: { text: 'รพ. สกลนคร' },
        },
        {
          id: 4,
          code: { text: '20247815' },
          name: { text: 'นางสาว อรอุมา เพรชประภาร' },
          department: { text: 'พยาธิวิทยา' },
          role: { text: 'พนังงานผู้ช่วยทั่วไป' },
          hospital: { text: 'รพ. เพชรบุรี' },
        },
      ]
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<4; i++){
      this.rows1.push({
        sent_date: {
          type: 'link', text: '07/11/2563, 08:53',
          href: '/user/cell-complete'
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
          type: 'link', text: '12/11/2563, 09:12',
          href: '/user/cell-complete'
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
          type: 'tag', text: 'รอมอบหมายงาน', classer: 'ss-tag-orange'
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
          type: 'tag', text: 'รอมอบหมายงาน', classer: 'ss-tag-orange'
        }
      });

      this.rows3.push({
        sent_date: {
          type: 'link', text: '12/11/2563, 12:11',
          href: '/user/cell-diagnose'
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
        status: i < 2 ? 
          { type: 'tag', text: 'เตรียมสไลด์', classer: 'ss-tag-brown' } :
          { type: 'tag', text: 'ย้อมสี', classer: 'ss-tag-danger' },
        assigned_to: {
          type: 'text', text: 'นายเตธนันท์ วงศ์ปรีชาโชค',
        },
      });
      this.rows3.push({
        sent_date: {
          type: 'link', text: '13/11/2563, 09:34',
          href: '/user/cell-diagnose'
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
        status: i < 2 ? 
          { type: 'tag', text: 'รอวินิจฉัย', classer: 'ss-tag-warning' } :
          { type: 'tag', text: 'รอวินิจฉัยจากภายนอก', classer: 'ss-tag-info' },
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
          iconPrepend: 'edit.svg', iconClasser: 'lg'
        }
      });
    }

  },
  methods: {
    selectedRow2(value) {
      console.log(value)
      this.rowCount = value.length;
    }
  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  }
}
</script>
