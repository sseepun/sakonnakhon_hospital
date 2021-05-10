<style scoped>
  .check-all, .chcek-all > * { display: inline-block; }
</style>
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
              <h6 class="h3">บุคลากร</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                text="ลงชื่อเข้าทำงาน" 
                classer="btn-color-01" :prepend="true" icon="exit-white.svg"
                @click="() => checkInModalOpen = !checkInModalOpen"
              />
            </div>
            <div class="btns show-mobile">
              <Button 
                text="ลงชื่อเข้า" classer="btn-color-01 btn-sm"
                @clicked="checkInModalOpen = !checkInModalOpen"
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

  <!-- Check in Popup -->
  <div class="popup-container" :class="{ 'active': checkInModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="checkInModalOpen = !checkInModalOpen"></div>
      <form action="/user/teams" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xl">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="checkInModalOpen = !checkInModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper fw-wrap">
              <div class="text-container ws-nowrap pr-3">
                <h6 class="h3">ลงชื่อเข้าทำงาน</h6>
              </div>
              <div class="d-flex ai-center">
                <div class="checkbox-single mr-3">
                  <input type="checkbox" id="select_all" :checked="selectedAll" @change="toggleSelectAll()" />
                  <label for="select_all">
                    <span class="pl-2 ws-nowrap">เลือกทั้งหมด</span>
                  </label>
                </div>
                <Button 
                  type="submit" text="ลงชื่อเข้าทำงาน"
                  classer="btn-color-01 hide-mobile" :prepend="true" icon="check-white.svg" 
                />
                <Button 
                  type="submit" text="ลงชื่อเข้า" classer="btn-sm btn-color-01 show-mobile"
                />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-04.svg" text="เตรียมสไลด์" :isSelected="cardSelected[0]" @change="cardSelected[0] = !cardSelected[0]" />
              </div>
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-03.svg" text="Embedding" :isSelected="cardSelected[1]" @change="cardSelected[1] = !cardSelected[1]"/>
              </div>
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-06.svg" text="Section" :isSelected="cardSelected[2]" @change="cardSelected[2] = !cardSelected[2]" />
              </div>
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-07.svg" text="ย้อมสี" :isSelected="cardSelected[3]" @change="cardSelected[3] = !cardSelected[3]" />
              </div>
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-02.svg" text="พิมพ์ Gross" :isSelected="cardSelected[4]" @change="cardSelected[4] = !cardSelected[4]" />
              </div>
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-08.svg" text="Screening" :isSelected="cardSelected[5]" @change="cardSelected[5] = !cardSelected[5]" />
              </div>
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-09.svg" text="แปลผล" :isSelected="cardSelected[6]" @change="cardSelected[6] = !cardSelected[6]" />
              </div>
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-10.svg" text="รายงานผล" :isSelected="cardSelected[7]" @change="cardSelected[7] = !cardSelected[7]" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Check Out Popup -->
  <div class="popup-container" :class="{ 'active': checkOutModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="checkOutModalOpen = !checkOutModalOpen"></div>
      <form action="/user/teams" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xl">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="checkOutModalOpen = !checkOutModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper fw-wrap">
              <div class="text-container ws-nowrap pr-3">
                <h6 class="h3">ลงชื่อออกจากงาน</h6>
              </div>
              <div class="d-flex ai-center">
                <Button 
                  type="submit" text="ลงชื่อออกจากงาน"
                  classer="btn-color-06 hide-mobile" :prepend="true" icon="check-white.svg" 
                />
                <Button 
                  type="submit" text="ลงชื่อออก" classer="btn-sm btn-color-06 show-mobile"
                />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="วันที่" value="วันจันทร์ที่ 21 ธันวาคม 2563" />
              </div>
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="ชื่อ นามสกุล" value="นพ. สงกรานต์ สุขุมมณีวงศ์" />
              </div>
              <div class="grid lg-15 md-1-3">
                <FormGroup type="plain" label="รหัสพนักงาน" value="20247815" />
              </div>
              <div class="grid lg-15 md-1-3">
                <FormGroup type="plain" label="เวลาเข้า" value="07:42" />
              </div>
              <div class="grid lg-15 md-1-3">
                <FormGroup type="plain" label="เวลาออก" value="17:42" />
              </div>
            </div>

            <div class="mt-2" style="width:100%; height: .0625rem; background-color: #E1E1E1; position: absolute; left: 0;"></div>

            <div class="grids mt-2">
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-04.svg" text="เตรียมสไลด์" />
              </div>
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-06.svg" text="Section" />
              </div>
              <div class="grid lg-25 md-1-3">
                <SpecialCard04 icon="lab-10.svg" text="รายงานผล" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Report Popup -->
  <div class="popup-container" :class="{ 'active': reportModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="reportModalOpen = !reportModalOpen"></div>
      <form action="/user/teams" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xl">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="reportModalOpen = !reportModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper fw-wrap">
              <div class="text-container ws-nowrap pr-3">
                <h6 class="h3">รายการร้องเรียน</h6>
              </div>
              <div class="d-flex ai-center">
                <Button 
                  text="ร้องเรียนเรื่องใหม่"
                  classer="btn-color-01 hide-mobile" :prepend="true" icon="plus-white.svg"
                  @click="() => {
                    reportModalOpen = !reportModalOpen
                    addReportPopup = !addReportPopup
                  }"
                />
                <Button 
                  text="เรื่องใหม่" classer="btn-sm btn-color-01 show-mobile"
                  @click="() => {
                    reportModalOpen = !reportModalOpen
                    addReportPopup = !addReportPopup
                  }"
                />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="วันที่" value="วันจันทร์ที่ 21 ธันวาคม 2563" />
              </div>
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="ชื่อ นามสกุล" value="นพ. สงกรานต์ สุขุมมณีวงศ์" />
              </div>
              <div class="grid lg-15 md-1-3">
                <FormGroup type="plain" label="รหัสพนักงาน" value="20247815" />
              </div>
              <div class="grid lg-15 md-1-3">
                <FormGroup type="plain" label="เวลาเข้า" value="07:42" />
              </div>
              <div class="grid lg-15 md-1-3">
                <FormGroup type="plain" label="เวลาออก" value="17:42" />
              </div>
              <div class="grid lg-15 md-1-3">
                <FormGroup type="plain" label="ภาระงาน" value="1 รายการ" />
              </div>
            </div>
          </div>
          <DataTable 
            :withOptions="false"
            :rows="reportData"
            :columns="[
              { key: 'detail', text: 'รายละเอียดข้อผิดพลาด'},
              { key: 'reporter', text: 'ผู้ร้องเรียน'},
              { key: 'datetime', text: 'วันเวลา'},
              { key: 'options', text: '' }
            ]"
            :addOptions="{
              detail: { type: 'text', value: '', placeholder: 'กรุณากรอก', required: true },
              reporter: { type: 'text', value: '', placeholder: 'กรุณากรอก', required: true },
              datetime: { type: 'text', value: '', placeholder: 'กรุณากรอก', required: true },
            }" 
          />
        </div>
      </form>
    </div>
  </div>

  <!-- Add report Popup -->
  <div class="popup-container" :class="{ 'active': addReportPopup }">
    <div class="wrapper">
      <div class="close-filter" @click="addReportPopup = !addReportPopup"></div>
      <form action="/" method="GET" class="w-full"  @submit="onPrefixDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="addReportPopup = !addReportPopup">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ร้องเรียนเรื่องใหม่</h6>
              </div>
              <div class="btns">
                <Button type="submit" text="ส่งเรื่อง" classer="btn-color-01 hide-mobile" :prepend="true" icon="send-white.svg" 
                  @click="(e) => {
                    e.preventDefault();
                    addReportPopup = !addReportPopup
                  }"
                />
                <Button type="submit" text="ส่งเรื่อง" classer="btn-sm btn-color-01 show-mobile" 
                  @click="(e) => {
                    e.preventDefault();
                    addReportPopup = !addReportPopup
                  }"
                />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid sm-100">
                <FormGroup
                  label="รายละเอียดข้อผิดพลาด" type="textarea" name="note" :required="true" 
                  placeholder="กรุณาระบุรายละเอียดข้อผิดพลาด" 
                />
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
import Tabs01 from '../../components/Tabs01';
import DataTable from '../../components/DataTable';
import SpecialCard04 from '../../components/SpecialCard04';

export default {
  name: 'UserTeamsPage',
  components: {
    Topnav,
    Tabs01,
    DataTable,
    SpecialCard04
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      
      topnavActiveIndex: 3,
      checkInModalOpen: false,
      checkOutModalOpen: false,
      reportModalOpen: false,
      addReportPopup: false,
      cardSelected: [ false, false, false, false, false, false, false, false ],
      
      reportData: [
        {  
          detail: {
            type:'text', text: 'ไม่จัดเก็บอุปกรณ์หลังใช้งานไม่เข้าเรียบร้อย'
          },
          reporter: {
            type:'text', text: 'รศ. ธัญญาวรรณ คำกลาง'
          },
          datetime: {
            type:'text', text: '20/12/2563, 10:56'
          },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 4 },
            delete: { type: 'emit', id: 4 }
          }
        }
      ],

      columns1: [
        { key: 'code', text: 'รหัสพนักงาน' },
        { key: 'name', text: 'ชื่อ นามสกุล', classer: 'w-full' },
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
        { key: 'name', text: 'ชื่อ นามสกุล', classer: 'w-full' },
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
        { key: 'name', text: 'ชื่อ นามสกุล', classer: 'w-full' },
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
  computed: {
    selectedAll: function() {
      for(let i =0; i < this.cardSelected.length; i++){
        if(!this.cardSelected[i]){
          return false;
        }
      }
      return true;
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
          iconPrepend: 'exit.svg', iconClasser: 'lg', clickFn: () => this.checkOutModalOpen = !this.checkOutModalOpen
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
          iconPrepend: 'comment.svg', iconClasser: 'lg',  clickFn: () => this.reportModalOpen = !this.reportModalOpen
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
          iconPrepend: 'comment.svg', iconClasser: 'lg', clickFn: () => this.reportModalOpen = !this.reportModalOpen
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
          iconPrepend: 'comment.svg', iconClasser: 'lg',  clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
      });
    
    }

  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  },
  methods: {
    toggleSelectAll(){
      if(this.selectedAll){
        for(let i = 0; i < this.cardSelected.length; i++){
          this.cardSelected[i] = false;
        }
      }
      else{
        for(let i = 0; i < this.cardSelected.length; i++){
          this.cardSelected[i] = true;
        }
      }
    }
  }
}
</script>
