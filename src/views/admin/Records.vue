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
              <h6 class="h3">ประวัติการดำเนินการ</h6>
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" classer="sm" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 
              'Login ('+loginData.length+')',
              'วินิจฉัยเซลล์ ('+cellHistoryData.length+')',
              'วินิจฉัยเนื้อ ('+tissueHistoryData.length+')',
              'ส่งตรวจพิเศษ ('+caseHistoryData.length+')',
              'ยืมสไลด์/พาราฟินบล็อก ('+slideHistoryData.length+')',
              'การเข้าใช้งานห้องแล็บ ('+labHistoryData.length+')',
              'งานศพ ('+funeralHistoryData.length+')',
              'คลังสินค้า ('+productHistoryData.length+')',
              'แบบสำรวจพึ่งพอใจ ('+surveyHistoryData.length+')'
            ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :rows="loginData" 
              :columns="[
                { key: 'date', text: 'วันที่ เวลา' },
                { key: 'code', text: 'รหัสประจำ' },
                { key: 'name', text: 'ชื่อ นามสกุล' },
                { key: 'action', text: 'รายการ', classer: 'w-full' },
                { key: 'section', text: 'หน่วยงาน' },
                { key: 'phone', text: 'เบอร์โทร' },
                { key: 'role', text: 'สิทธิ์ผู้ใช้งาน', classer: 'wrap-xl' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'date', 'code', 'name', 'action', 'section', 'phone' ]" 
              :allowDownload="true" downloadUrl="#" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :rows="cellHistoryData" 
              :columns="[
                { key: 'date', text: 'วันที่ เวลา' },
                { key: 'code', text: 'รหัสใบส่งตรวจ' },
                { key: 'name', text: 'ชื่อ นามสกุลผู้ป่วย' },
                { key: 'hn', text: 'HN' },
                { key: 'type', text: 'รายการ' },
                { key: 'doctor', text: 'แพทย์ผู้ดูแล' },
                { key: 'hospital', text: 'โรงพยาบาล' },
                { key: 'operator', text: 'ผู้ดำเนินการ' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'date', 'code', 'name', 'hn', 'type', 'doctor', 'hospital', 'operator' ]" 
              :allowDownload="true" downloadUrl="#" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :rows="tissueHistoryData" 
              :columns="[
                { key: 'date', text: 'วันที่ เวลา' },
                { key: 'code', text: 'รหัสใบส่งตรวจ' },
                { key: 'name', text: 'ชื่อ นามสกุลผู้ป่วย' },
                { key: 'hn', text: 'HN' },
                { key: 'type', text: 'รายการ' },
                { key: 'doctor', text: 'แพทย์ผู้ดูแล' },
                { key: 'hospital', text: 'โรงพยาบาล' },
                { key: 'operator', text: 'ผู้ดำเนินการ' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'date', 'code', 'name', 'hn', 'type', 'doctor', 'hospital', 'operator' ]" 
              :allowDownload="true" downloadUrl="#" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 3 }">
            <DataTable 
              :rows="caseHistoryData" 
              :columns="[
                { key: 'date', text: 'วันที่ เวลา' },
                { key: 'code', text: 'รหัสใบส่งตรวจ' },
                { key: 'case_type', text: 'ประเภททะเบียน' },
                { key: 'employee', text: 'เจ้าหน้าที่ผู้นำส่ง' },
                { key: 'type', text: 'รายการ' },
                { key: 'lab', text: 'ส่ง Lab' },
                { key: 'operator', text: 'ผู้ดำเนินการ' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'date', 'code', 'case_type', 'employee', 'type', 'lab', 'operator' ]" 
              :allowDownload="true" downloadUrl="#" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 4 }">
            <DataTable 
              :rows="slideHistoryData" 
              :columns="[
                { key: 'date', text: 'วันที่ เวลา' },
                { key: 'slide', text: 'เลขที่สไลด์ / พาราฟินบล็อค' },
                { key: 'type', text: 'รายการ', classer: 'w-full' },
                { key: 'operator', text: 'ผู้ดำเนินการ' },
                { key: 'section', text: 'หน่วนงาน', classer: 'wrap-xl' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'date', 'slide', 'type', 'operator', 'section' ]" 
              :allowDownload="true" downloadUrl="#" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 5 }">
            <DataTable 
              :rows="labHistoryData" 
              :columns="[
                { key: 'date', text: 'วันที่ เวลา' },
                { key: 'employee_id', text: 'รหัสพนักงาน' },
                { key: 'name', text: 'ชื่อ นามสกุล' },
                { key: 'title', text: 'ตำแหน่งงาน' },
                { key: 'section', text: 'หน่วยงาน' },
                { key: 'type', text: 'รายการ' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'date', 'employee_id', 'name', 'title', 'section', 'type' ]" 
              :allowDownload="true" downloadUrl="#" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 6 }">
            <DataTable 
              :rows="funeralHistoryData" 
              :columns="[
                { key: 'date', text: 'วันที่ เวลา' },
                { key: 'code', text: 'รหัสศพ' },
                { key: 'hn', text: 'HN' },
                { key: 'name', text: 'ชื่อ นามสกุล' },
                { key: 'type', text: 'รายการ', classer: 'w-full' },
                { key: 'doctor', text: 'แพทย์ผู้ดูแล' },
                { key: 'operator', text: 'ผู้ดำเนินการ', classer: 'wrap-xl' },
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'date', 'code', 'hn', 'name', 'type', 'doctor', 'operator' ]" 
              :allowDownload="true" downloadUrl="#" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 7 }">
            <DataTable 
              :rows="productHistoryData" 
              :columns="[
                { key: 'date', text: 'วันที่ เวลา' },
                { key: 'code', text: 'รหัสสินค้า' },
                { key: 'type', text: 'ประเภท' },
                { key: 'name', text: 'ชื่อสินค้า', classer: 'wrap-2xl' },
                { key: 'category', text: 'รายการ' },
                { key: 'operator', text: 'ผู้ดำเนินการ' },
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'date', 'code', 'type', 'name', 'category', 'operator' ]" 
              :allowDownload="true" downloadUrl="#" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 8 }">
            <DataTable 
              :rows="surveyHistoryData" 
              :columns="[
                { key: 'date', text: 'วันที่ เวลา ดำเนินการ' },
                { key: 'name', text: 'ชื่อ นามสกุล ผู้ดำเนินการ', classer: 'wrap-2xl' },
                { key: 'title', text: 'ตำแหน่ง', classer: 'w-full' },
                { key: 'section', text: 'หน่วนงาน', classer: 'wrap-xl' },
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'date', 'name', 'title', 'section' ]" 
              :allowDownload="true" downloadUrl="#" 
            />
          </div>
          
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
import Topnav from '../../components/Topnav';
import Sidenav from '../../components/Sidenav';
import FormGroup from '../../components/FormGroup';
import Tabs01 from '../../components/Tabs01';
import DataTable from '../../components/DataTable';

export default {
  name: 'AdminRecordsPage',
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
      sidenavActiveIndex: 7,
      tabActiveIndex: 0,

      loginData: [
        {
          date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
          code: { text: '2005001' },
          name: { text: 'ณรงศักดิ์ พรมบุรี' },
          action: { text: 'Login' },
          section: { text: 'พยาธิวิทยากายวิภาค' },
          phone: { text: '061-2124223' },
          role: { type: 'tag', text: 'USER' }
        },
        {
          date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
          code: { text: '2005001' },
          name: { text: 'ณรงศักดิ์ พรมบุรี' },
          action: { text: 'Login' },
          section: { text: 'พยาธิวิทยากายวิภาค' },
          phone: { text: '061-2124223' },
          role: { type: 'tag', text: 'USER' }
        },
      ],

      cellHistoryData: [],
      tissueHistoryData: [],
      caseHistoryData: [],
      slideHistoryData: [],
      labHistoryData: [],
      funeralHistoryData: [],
      productHistoryData: [],
      surveyHistoryData: []

    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<200; i++){
      this.cellHistoryData.push({
        date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
        code: { text: 'S20-00001' },
        name: { text: 'ณรงศักดิ์ พรมบุรี' },
        hn: { text: '12345' },
        type: { text: 'ลงทะเบียนเซลล์วิทยา' },
        doctor: { text: 'นพ. นันทวัน หอมประเสริฐสุข' },
        hospital: { text: 'สกลนคร' },
        operator: { text: 'เอกชัย์ มารี' },
      });
    }
    for(var i=0; i<3; i++){
      this.tissueHistoryData.push({
        date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
        code: { text: 'CG20-00001' },
        name: { text: 'ณรงศักดิ์ พรมบุรี' },
        hn: { text: '12345' },
        type: { text: 'ลงทะเบียนชิ้นเนื้อ' },
        doctor: { text: 'นพ. นันทวัน หอมประเสริฐสุข' },
        hospital: { text: 'สกลนคร' },
        operator: { text: 'เอกชัย์ มารี' },
      });
    }
    for(var i=0; i<3; i++){
      this.caseHistoryData.push({
        date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
        code: { text: 'S21-32882' },
        case_type: { text: 'สีย้อมพิเศษ' },
        employee: { text: 'นายจิตใจ เข็มแข็ง' },
        type: { text: 'ลงทะเบียนส่งตรวจ' },
        lab: { text: 'สกลนคร' },
        operator: { text: 'เอกชัย์ มารี' },
      });
    }
    for(var i=0; i<2; i++){
      this.slideHistoryData.push({
        date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
        slide: { text: '202101' },
        type: { text: 'ลงทะเบียนยืมสไลด์' },
        operator: { text: 'ณรงศักดิ์ พรมบุรี' },
        section: { text: 'พยาธิวิทยา' },
      });
    }
    for(var i=0; i<2; i++){
      this.labHistoryData.push({
        date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
        employee_id: { text: '2000001' },
        name: { text: 'ณรงศักดิ์ พรมบุรี' },
        title: { text: 'นายแพทย์ชำนาญการ' },
        section: { text: 'แผนกพยาธิวิทยากายวิภาค' },
        type: { text: 'ลงชื่อเข้าทำงาน' },
      });
    }
    for(var i=0; i<2; i++){
      this.funeralHistoryData.push({
        date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
        code: { text: 'B20-0001' },
        hn: { text: '123456' },
        name: { text: 'พรุศษ์ สุจรีวงศ์' },
        type: { text: 'ลงทะเบียนรักษาศพ' },
        doctor: { text: 'นพ. นันทวัน หอมประเสริฐสุข' },
        operator: { text: 'เอกชัย์ มารี' },
      });
    }
    for(var i=0; i<2; i++){
      this.productHistoryData.push({
        date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
        code: { text: 'ES-20247815' },
        type: { text: 'เครื่องมือแพทยทั่วไป' },
        name: { text: 'เครื่องผลิตออกซิเจน (รุ่น JAY-5) ฟังก์ชั่นพ่นยา' },
        category: { text: 'เพิ่มสินค้า' },
        operator: { text: 'ณรงศักดิ์ พรมบุรี' },
      });
    }
    for(var i=0; i<2; i++){
      this.surveyHistoryData.push({
        date: { text: '12/12/2563, 12:59', value: '12/12/2563' },
        name: { text: 'ณรงศักดิ์ พรมบุรี' },
        title: { text: 'แพทย์ผู้เชี่ยวชาญ' },
        section: { text: 'อายุรกรรม' },
      });
    }
    
  }
}
</script>
