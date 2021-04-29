<style scoped>
.popup-container.lg .popup-box{max-width: 60rem;}
</style>
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
              <h6 class="h3">รายการขอยืมสไลด์ / พาราฟินบล็อค</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                href="/user/slide-add" text="แบบฟอร์มขอยืมไสลด์ / พาราฟินบล็อค" 
                classer="btn-color-01 mr-3" :prepend="true" icon="plus-white.svg" 
              />
            </div>
            <div class="btns show-mobile">
              <Button 
                text="แบบฟอร์มขอยืม" classer="btn-color-01 btn-sm" href="/user/slide-add"
              />
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 'รายการขอยืมสไลด์', 'รอรับคืนสไลด์', 'ประวัติการยืม' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :columns="columns1" :rows="rows1"
              :search="[ 'slide_no', 'slide_type', 'date_borrow', 'name', 'agency', 'phone' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันเวลาที่ยืม (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันเวลาที่ยืม (เก่าสุด)' },
              ]"
              @click-info="isModalOpen=!isModalOpen"
            />
          </div>
          
          <div v-if="userRole != 'User'" class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns2" :rows="rows2" 
              :search="[ 'sent_to', 'case_id', 'hn', 'block_no', 'name', 'thai_id' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่นำเข้า (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่นำเข้า (เก่าสุด)' }
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :columns="columns3" :rows="rows3" 
              :search="[ 'sent_to', 'case_id', 'hn', 'block_no', 'name', 'thai_id' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่นำเข้า (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่นำเข้า (เก่าสุด)' }
              ]"
            />
          </div>

        </div>
      </div>
    </div>
  </section>
   <!-- Alert Popup -->
  <div class="popup-container lg" :class="{ 'active': isModalOpen }">
    <div class="wrapper">
    <div class="close-filter" @click="isModalOpen = !isModalOpen"></div>
    <form action="/user/slides" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box">
        <div class="header">
            <div class="btns mt-0">
            <a href="javascript:" class="btn btn-close" @click="isModalOpen = !isModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
            </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">รายละเอียดการยืมสไลด์ / พาราฟินบล็อค</h6>
              </div>
              <div class="btns hide-mobile">
                <Button 
                  text="ไม่อนุมัติการยืม"
                  classer="btn-color-06 mr-3" :prepend="true" icon="cross-white.svg" 
                  @click="() => {
                    approve = 'ไม่อนุมัติ';
                    confirmAlert = !confirmAlert;
                    isModalOpen = !isModalOpen;
                  }"
                />
                <Button 
                  type="submit" text="อนุมัติการยืม"
                  classer="btn-color-01" :prepend="true" icon="check-white.svg" 
                  @click="() => {
                    approve = 'อนุมัติ';
                    confirmAlert = !confirmAlert;
                    isModalOpen = !isModalOpen;
                  }"
                />
              </div>
              <div class="btns ws-nowrap show-mobile">
                <Button text="ไม่อนุมัติ" classer="btn-color-06 btn-sm mr-1" />
                <Button type="submit" text="อนุมัติ" classer="btn-color-01 btn-sm" />
              </div>
            </div>
        </div>
        <div class="body pt-4 pb-5">
          <div class="grids">

            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="เลขที่การยืม" value="202101" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ชื่อแพทย์ผู้รักษา" value="นพ. นันทวัน หอมประเสริฐสุข" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="กลุ่มงาน" value="Lectus scelerisque." />
            </div>
            
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="เบอร์โทร" value="02-2345667" />
            </div>
            <div class="grid lg-25 md-2-3">
              <FormGroup type="plain" label="ประเภทสไลด์" value="Leo arcu posuere." />
            </div>

            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="เพื่อการ" value="ส่งรักษาต่อ" />
            </div>
            <div class="grid lg-50 md-1-3">
              <FormGroup type="plain" label="หมายเหตุ" value="Congue dictum urna tortor ipsum nisi velit urna." />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ชื่อผู้ป่วย" value="นาย อานนท์ สงศามณีวัล" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="เลขที่สไลด์" value="S20-0001" />
            </div>
            <div class="grid lg-50 md-1-3">
              <FormGroup type="plain" label="ประเภทการขนส่ง" value="Malesuada." />
            </div>

            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ชื่อผู้ยืมสไลด์" value="นาย เตธนันท์ วงศ์ปรีชาโชติ" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="วันที่เวลายืม" value="23/12/2563, 12:23" />
            </div>
          </div>
        </div>
        </div>
    </form>
    </div>
  </div>

  <!-- Alert Popup -->
  <div class="popup-container" :class="{ 'active': confirmAlert }">
    <div class="wrapper">
      <div class="close-filter" @click="confirmAlert = !confirmAlert"></div>
      <form action="/" method="GET" class="w-full"  @submit="onSubmitProfile">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="confirmAlert = !confirmAlert">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการ{{ approve }}</h6>
              </div>
              <div class="btns">
                <Button 
                  text="ยืนยัน"
                  :classer="approve == 'อนุมัติ' ? 'btn-color-01 hide-mobile': 'btn-color-06 hide-mobile'" 
                />
                <Button 
                  text="ยืนยัน"
                  :classer="approve == 'อนุมัติ' ? 'btn-color-01 btn-sm show-mobile' : 'btn-color-06 btn-sm show-mobile'"
                />
              </div>
            </div>
          </div>
          <div class="body pt-4 pb-5">
            <p class="color-gray">หมายเหตุ</p>
            <p class="mt-2">
              คุณกำลัง{{ approve }}การยืมสไลด์/พาราฟินบล็อก ที่มีเลขที่สไลด์ S20-0001 กรุณากดปุ่มยืนยัน เพื่อ{{ approve }} การยืมดังกล่าว
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import PopupOptions from '../../components/PopupOptions';
import Tabs01 from '../../components/Tabs01';
import DataTable from '../../components/DataTable';

export default {
  name: 'UserSlidesPage',
  components: {
    Topnav,
    PopupOptions,
    Tabs01,
    DataTable
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      isModalOpen: false,
      confirmAlert: false,
      approve: '',
      columns1: [
        { key: 'slide_no', text: 'เลขที่สไลด์ / พาราฟินบล็อค' },
        { key: 'name', text: 'ชื่อ นามสกุล ผู้ยืม' },
        { key: 'date_borrow', text: 'วันเวลาที่ยืม' },
        { key: 'slide_type', text: 'ประเภทสไลด์' },
        { key: 'agency', text: 'หน่วยงาน' },
        { key: 'phone', text: 'เบอร์โทร' },
        { key: 'status', text: this.userRole == 'User' ? 'สถานะ': '' },
      ],
      rows1: [],

      columns2: [
        { key: 'sent_to', text: 'นำส่ง' },
        { key: 'sent_date', text: 'วันที่นำเข้า' },
        { key: 'case_id', text: 'ID Case' },
        { key: 'hn', text: 'HN' },
        { key: 'block_no', text: 'Block No.' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'thai_id', text: 'เลขบัตรประชาชน' },
        { key: 'card', text: 'ใบส่งตรวจ' },
        { key: 'status', text: 'สถานะ' },
      ],
      rows2: [],

      columns3: [
        { key: 'sent_to', text: 'นำส่ง' },
        { key: 'sent_date', text: 'วันที่นำเข้า' },
        { key: 'case_id', text: 'ID Case' },
        { key: 'hn', text: 'HN' },
        { key: 'block_no', text: 'Block No.' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'thai_id', text: 'เลขบัตรประชาชน' },
        { key: 'card', text: 'ใบส่งตรวจ' },
        { key: 'report', text: 'ใบรายงานผล' },
      ],
      rows3: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<7; i++){

      this.rows1.push({
        slide_no: { 
          type: 'text', text: '202101',
        },
        name: {
          type: 'text', text: 'นาย อานนท์ สงศามณีวัล',
        },
        date_borrow: { 
          type: 'text', text: '23/12/2563, 12:23',
        },
        slide_type: { 
          type: 'text', text: 'Eget est velit.',
        },
        agency: { 
          type: 'text', text: 'Ornare felis vitae iaculkjksjsis...',
        },
        phone: { 
          type: 'text', text: '02-22312398', 
        },
        status: this.userRole == 'User' ?
          {
            type: 'tag', text: 'เสร็จสิ้น'
          }
          :
          {
            type: 'link', text: 'อนุมัติการยืม', classer: 'color-01', href: '#',
            iconPrepend: 'checkout.svg'
          }
      });
     
      this.rows2.push({
        sent_to: { 
          type: 'link', text: 'ชิ้นเนื้อ', classer: 'color-11'
        },
        sent_date: {
          type: 'link', text: '05/12/2563, 10:34',
        },
        case_id: { 
          type: 'link', text: 'FI63-01526',
        },
        hn: { 
          type: 'link', text: '1088052',
        },
        block_no: { 
          type: 'link', text: 'P63-2000B',
        },
        name: { 
          type: 'link', text: 'สงกรานต์ สุขุมมณีวงศ์', 
        },
        thai_id: { 
          type: 'link', text: '1-9698-00169-84-9',
        },
        card: {
          type: 'link', text: 'S64-0001', 
          iconPrepend: 'checkout.svg'
        },
        status: {
          type: 'tag', text: 'รับเข้าระบบ', classer: 'ss-tag-warning'
        }
      });
      this.rows2.push({
        sent_to: { 
          type: 'link', text: 'เซลล์วิทยา', classer: 'color-01'
        },
        sent_date: {
          type: 'link', text: '20/11/2563, 14:05',
        },
        case_id: { 
          type: 'link', text: 'FI63-07660',
        },
        hn: { 
          type: 'link', text: '1005375',
        },
        block_no: { 
          type: 'link', text: 'P63-4001R',
        },
        name: { 
          type: 'link', text: 'นวรัตร์ ระเบียบธรรม', 
        },
        thai_id: { 
          type: 'link', text: '1-4505-53700-28-4',
        },
        card: {
          type: 'link', text: 'CG21-00001',
          iconPrepend: 'checkout.svg'
        },
        status: {
          type: 'tag', text: 'รอรับเข้าบริการ'
        }
      });

      this.rows3.push({
        sent_to: { 
          type: 'link', text: 'ชิ้นเนื้อ', classer: 'color-11'
        },
        sent_date: {
          type: 'link', text: '05/12/2563, 10:34',
        },
        case_id: { 
          type: 'link', text: 'FI63-07660',
        },
        hn: { 
          type: 'link', text: '1005375',
        },
        block_no: { 
          type: 'link', text: 'P63-4001R',
        },
        name: { 
          type: 'link', text: 'นวรัตร์ ระเบียบธรรม', 
        },
        thai_id: { 
          type: 'link', text: '1-4505-53700-28-4',
        },
        card: {
          type: 'link', text: 'CG21-00001',
          iconPrepend: 'checkout.svg'
        },
        report: {
          type: 'link', text: '1088052-S64-0001',
          iconPrepend: 'checkout.svg'
        }
      });
      this.rows3.push({
        sent_to: { 
          type: 'link', text: 'เซลล์วิทยา', classer: 'color-01'
        },
        sent_date: {
          type: 'link', text: '20/11/2563, 14:05',
        },
        case_id: { 
          type: 'link', text: 'FI63-07660',
        },
        hn: { 
          type: 'link', text: '1005375',
        },
        block_no: { 
          type: 'link', text: 'P63-4001R',
        },
        name: { 
          type: 'link', text: 'นวรัตร์ ระเบียบธรรม', 
        },
        thai_id: { 
          type: 'link', text: '1-4505-53700-28-4',
        },
        card: {
          type: 'link', text: 'CG21-00001',
          iconPrepend: 'checkout.svg'
        },
        report: {
          type: 'link', text: '1088052-S64-0001',
          iconPrepend: 'checkout.svg'
        }
      });
    }
  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
    }
  }
}
</script>
