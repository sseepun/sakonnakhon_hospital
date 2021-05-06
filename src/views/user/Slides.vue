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
            :tabs="userRole != 'User' ? [ 'รายการขอยืมสไลด์', 'รอรับคืนสไลด์', 'ประวัติการยืม' ] : [ 'รายการขอยืมสไลด์', 'ประวัติการยืม' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :columns="columns1" :rows="rows1"
              :search="[ 'slide_no', 'slide_type', 'date_borrow', 'name', 'department', 'phone' ]" 
              :orders="[
                { key: 'date_borrow-desc', text: 'วันเวลาที่ยืม (ใหม่สุด)' },
                { key: 'date_borrow-asc', text: 'วันเวลาที่ยืม (เก่าสุด)' },
              ]"
            />
          </div>
          
          <div v-if="userRole != 'User'" class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns2" :rows="rows2"
              :search="[ 'slide_no', 'date_borrow', 'name', 'department', 'date_approve' ]"
              :orders="[
                { key: 'date_borrow-desc', text: 'วันเวลาที่ยืม (ใหม่สุด)' },
                { key: 'date_borrow-asc', text: 'วันเวลาที่ยืม (เก่าสุด)' }
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': userRole != 'User' ? tabActiveIndex == 2 : tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns3" :rows="rows3" 
              :search="[ 'slide_no', 'date_borrow', 'name', 'department', 'date_approve' ]" 
              :orders="[
                { key: 'date_borrow-desc', text: 'วันเวลาที่ยืม (ใหม่สุด)' },
                { key: 'date_borrow-asc', text: 'วันเวลาที่ยืม (เก่าสุด)' }
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

  <!-- Confirm Alert Popup -->
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

  <!-- Return Popup -->
  <div class="popup-container lg" :class="{ 'active': isModalOpen2 }">
    <div class="wrapper">
    <div class="close-filter" @click="isModalOpen2 = !isModalOpen2"></div>
    <form action="/user/slides" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box">
        <div class="header">
            <div class="btns mt-0">
            <a href="javascript:" class="btn btn-close" @click="isModalOpen2 = !isModalOpen2">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
            </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ตรวจสอบการคืนสไลด์ / พาราฟินบล็อค</h6>
              </div>
              <div class="btns hide-mobile">
                <Button 
                  href="/user/slides" text="คืนสไลด์"
                  classer="btn-color-01" :prepend="true" icon="circle-arrow-up-white.svg" 
                />
              </div>
              <div class="btns ws-nowrap show-mobile">
                <Button href="/user/slides" text="คืนสไลด์" classer="btn-color-01 btn-sm" />
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
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ชื่อผู้อนุมัติ" value="นพ. นันทวัน หอมประเสริฐสุข" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="วันที่เวลา อนุมัติ" value="23/12/2563, 12:23" />
            </div>
          </div>
          <div class="stripe section-px border-bottom bcolor-fgray mt-4">
            <p class="fw-400">คืนสไลด์</p>
          </div>

          <div class="grids pb-5">

            <div class="grid lg-25 md-1-3 xs-2-3">
              <FormGroup 
                type="text" label="*ชื่อผู้คืนสไลด์" placeholder="นายใจดี แสนสุข"
              />
            </div>
            <div class="grid lg-25 md-1-3 xs-2-3">
              <FormGroup 
                type="text" label="*เบอร์โทร" placeholder="012-3456789"
              />
            </div>
            <div class="grid lg-50 md-1-3">
              <FormGroup 
                type="select" label="*หน่วยงาน" name="department" 
                :options="[
                  { value: 0, text: 'พยาธิวิทยา' },
                ]"
                :value="0"
              />
            </div>
          </div>
        </div>
        </div>
    </form>
    </div>
  </div>

  <!-- Info Popup -->
  <div class="popup-container lg" :class="{ 'active': isModalOpen3 }">
    <div class="wrapper">
    <div class="close-filter" @click="isModalOpen3 = !isModalOpen3"></div>
    <form action="/user/slides" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box">
        <div class="header">
            <div class="btns mt-0">
            <a href="javascript:" class="btn btn-close" @click="isModalOpen3 = !isModalOpen3">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
            </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">รายละเอียดการยืมสไลด์ / พาราฟินบล็อค</h6>
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

            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ชื่อผู้ยืมสไลด์" value="นาย เตธนันท์ วงศ์ปรีชาโชติ" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="วันที่เวลายืม" value="23/12/2563, 12:23" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ชื่อผู้อนุมัติ" value="นพ. นันทวัน หอมประเสริฐสุข" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="วันที่เวลา อนุมัติ" value="23/12/2563, 12:23" />
            </div>

            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ชื่อผู้คืนสไลด์" value="นาย เตธนันท์ วงศ์ปรีชาโชติ" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="เบอร์โทร" value="061-2125229" />
            </div>
            <div class="grid lg-50 md-1-3">
              <FormGroup type="plain" label="หน่วยงาน" value="Venenatis pellentesque." />
            </div>

            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ชื่อผู้รับสไลด์" value="นาย เตธนันท์ วงศ์ปรีชาโชติ" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="วันที่เวลาคืน" value="23/12/2563, 12:23" />
            </div>
          </div>
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
      isModalOpen2: false,
      isModalOpen3: false,
      confirmAlert: false,
      approve: '',
      columns1: [
        { key: 'slide_no', text: 'เลขที่สไลด์ / พาราฟินบล็อค' },
        { key: 'name', text: 'ชื่อ นามสกุล ผู้ยืม' },
        { key: 'date_borrow', text: 'วันเวลาที่ยืม' },
        { key: 'slide_type', text: 'ประเภทสไลด์' },
        { key: 'department', text: 'หน่วยงาน' },
        { key: 'phone', text: 'เบอร์โทร' },
        { key: 'status', text: this.userRole == 'User' ? 'สถานะ': '' },
      ],
      rows1: [],

      columns2: [
        { key: 'slide_no', text: 'เลขที่สไลด์ / พาราฟินบล็อค' },
        { key: 'name', text: 'ชื่อ นามสกุล ผู้ยืม' },
        { key: 'date_borrow', text: 'วันเวลาที่ยืม' },
        { key: 'slide_type', text: 'ประเภทสไลด์' },
        { key: 'department', text: 'หน่วยงาน' },
        { key: 'phone', text: 'เบอร์โทร' },
        { key: 'order_no', text: 'เลขที่การยืม' },
        { key: 'approver', text: 'ชื่อ นามสกุล ผู้อนุมัติ' },
        { key: 'date_approve', text: 'วันที่เวลาอนุมัติ' },
        { key: 'status', text: '' },
      ],
      rows2: [],

      columns3: [
        { key: 'slide_no', text: 'เลขที่สไลด์ / พาราฟินบล็อค' },
        { key: 'name', text: 'ชื่อ นามสกุล ผู้ยืม' },
        { key: 'date_borrow', text: 'วันเวลาที่ยืม' },
        { key: 'department', text: 'หน่วยงาน' },
        { key: 'order_no', text: 'เลขที่การยืม' },
        { key: 'approver', text: 'ชื่อ นามสกุล ผู้อนุมัติ' },
        { key: 'date_return', text: 'วันที่เวลาที่คืนสไลด์' },
        { key: 'date_approve', text: 'วันที่เวลาอนุมัติ' },
        { key: 'status', text: '' },
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
        department: { 
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
            iconPrepend: 'circle-arrow-down.svg', clickFn: () => this.isModalOpen = !this.isModalOpen
          }
      });
     
      this.rows2.push({
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
        department: { 
          type: 'text', text: 'Ornare felis vitae iaculkjksjsis...',
        },
        phone: { 
          type: 'text', text: '02-22312398', 
        },
        order_no: { 
          type: 'text', text: '02-22312398', 
        },
        approver: { 
          type: 'text', text: 'นพ. นันทวัน หอมประ...', 
        },
        date_approve: { 
          type: 'text', text: '23/12/2563, 12:23', 
        },
        status: { 
          type: 'link', text: 'คืนสไลด์', classer: 'color-01', href: '#',
          iconPrepend: 'circle-arrow-up.svg', clickFn: () => this.isModalOpen2 = !this.isModalOpen2
        },
      });
      this.rows2.push({
        slide_no: { 
          type: 'text', text: '202101',
        },
        name: {
          type: 'text', text: 'นาย ณรงค์ฤทธิ์ พรมบุรีวัล',
        },
        date_borrow: { 
          type: 'text', text: '23/12/2563, 09:22',
        },
        slide_type: { 
          type: 'text', text: 'Eget est velit.',
        },
        department: { 
          type: 'text', text: 'Sed elit consecte...',
        },
        phone: { 
          type: 'text', text: '02-22312398', 
        },
        order_no: { 
          type: 'text', text: '02-22312398', 
        },
        approver: { 
          type: 'text', text: 'นพ. นันทวัน หอมประ...', 
        },
        date_approve: { 
          type: 'text', text: '23/12/2563, 12:23', 
        },
        status: { 
          type: 'link', text: 'คืนสไลด์', classer: 'color-01', href: '#',
          iconPrepend: 'circle-arrow-up.svg'
        },
      });

      this.rows3.push({
        slide_no: { 
          type: 'text', text: '202101',
        },
        name: {
          type: 'text', text: 'นาย อานนท์ สงศามณีวัล',
        },
        date_borrow: { 
          type: 'text', text: '23/12/2563, 12:23',
        },
        department: { 
          type: 'text', text: 'Ornare felis vitae iaculkjksjsis...',
        },
        order_no: { 
          type: 'text', text: '02-22312398', 
        },
        approver: { 
          type: 'text', text: 'นพ. นันทวัน หอมประ...', 
        },
        date_approve: { 
          type: 'text', text: '23/12/2563, 12:23', 
        },
        date_return: { 
          type: 'text', text: '23/12/2563, 12:23', 
        },
        status: { 
          type: 'tag', text: 'ดำเนินการเสร็จสิ้น', clickFn: () => this.isModalOpen3 = !this.isModalOpen3
        },
      });
      this.rows3.push({
        slide_no: { 
          type: 'text', text: '202101',
        },
        name: {
          type: 'text', text: 'นาย ณรงค์ฤทธิ์ พรมบุรี',
        },
        date_borrow: { 
          type: 'text', text: '23/12/2563, 09:22',
        },
        department: { 
          type: 'text', text: 'Sed elit consecte...',
        },
        order_no: { 
          type: 'text', text: '02-22312398', 
        },
        approver: { 
          type: 'text', text: 'นพ. นันทวัน หอมประ...', 
        },
        date_approve: { 
          type: 'text', text: '-', 
        },
        date_return: { 
          type: 'text', text: '-', 
        },
        status: { 
          type: 'tag', text: 'ไม่อนุมัติการยืม', classer: 'ss-tag-danger', clickFn: () => this.isModalOpen3 = !this.isModalOpen3
        },
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
