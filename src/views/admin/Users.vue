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
              <h6 class="h3">ตั้งค่าบัญชีผู้ใช้</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                href="/admin/user-add" text="เพิ่มผู้ใช้งาน" 
                classer="btn-color-01" :prepend="true" icon="plus-white.svg" 
              />
            </div>
            <div class="btns show-mobile">
              <Button 
                href="/admin/user-add" text="เพิ่มผู้ใช้งาน" 
                classer="btn-color-01 btn-sm"
              />
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 
              'ทั้งหมด ('+allData.length+')', 
              'Head-staff ('+headStaffData.length+')', 
              'Staff ('+staffData.length+')', 
              'User ('+userData.length+')', 
              'Admin ('+adminData.length+')' 
            ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :columns="tableColumns" :rows="allData" 
              :orders="tableOrders" :search="tableSearch" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              @click-delete="onClickDelete($event)"
            />
          </div>
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="tableColumns" :rows="headStaffData" 
              :orders="tableOrders" :search="tableSearch" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              @click-delete="onClickDelete($event)"
            />
          </div>
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :columns="tableColumns" :rows="staffData" 
              :orders="tableOrders" :search="tableSearch" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              @click-delete="onClickDelete($event)"
            />
          </div>
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 3 }">
            <DataTable 
              :columns="tableColumns" :rows="userData" 
              :orders="tableOrders" :search="tableSearch" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              @click-delete="onClickDelete($event)"
            />
          </div>
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 4 }">
            <DataTable 
              :columns="tableColumns" :rows="adminData" 
              :orders="tableOrders" :search="tableSearch" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }"
            />
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <!-- Popup Delete -->
  <div class="popup-container" :class="{ 'active': isActivePopupDelete }">
    <div class="wrapper">
      <div class="close-filter" @click="isActivePopupDelete = !isActivePopupDelete"></div>
      <form action="/" method="GET" class="w-full"  @submit="onSubmitDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="isActivePopupDelete = !isActivePopupDelete">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบผู้ใช้งาน</h6>
              </div>
              <div class="btns">
                <Button type="submit" text="ยืนยัน" classer="btn-color-06" :prepend="true" icon="check-white.svg" />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid sm-100">
                <FormGroup
                  label="หมายเหตุ" type="textarea" name="note"  
                  placeholder="กรุณาระบุหมายเหตุของการลบผู้ใช้งานนี้" 
                  :value="deleteNote" @input="deleteNote = $event" 
                  :errorText="deleteErrorText && !deleteNote? deleteErrorText: ''" 
                  :classer="deleteErrorText && !deleteNote? 'error': ''" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Topnav from '../../components/Topnav';
import Sidenav from '../../components/Sidenav';
import FormGroup from '../../components/FormGroup';
import Tabs01 from '../../components/Tabs01';
import DataTable from '../../components/DataTable';

export default {
  name: 'AdminUsersPage',
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
      sidenavActiveIndex: 1,
      tabActiveIndex: 0,

      isActivePopupDelete: false,
      deleteNote: '',
      deleteErrorText: '',

      tableColumns: [
        { key: 'order', text: 'ลำดับ' },
        { key: 'username', text: 'Username' },
        { key: 'prefix', text: 'คำนำหน้า' },
        { key: 'firstname', text: 'ชื่อ' },
        { key: 'lastname', text: 'นามสกุล' },
        { key: 'phone', text: 'เบอร์โทร' },
        { key: 'email', text: 'Email' },
        { key: 'role', text: 'สิทธิ์ผู้ใช้งาน' },
        { key: 'status', text: 'สถานะ' },
        { key: 'options', text: '' }
      ],
      tableSearch: [ 'order', 'username', 'prefix', 'firstname', 'lastname', 'phone', 'email' ],
      tableOrders: [
        { key: 'order-desc', text: 'เพิ่มล่าสุด' },
        { key: 'order-asc', text: 'เพิ่มเก่าสุด' },
      ],
      headStaffData: [],
      staffData: [],
      userData: [],
      adminData: [],
      allData: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<3; i++){

      this.headStaffData.push({
        order: { text: this.zeroPad(4*i+1, 4) },
        username: { text: 'User'+this.zeroPad(4*i+1, 4) },
        prefix: { text: 'นาย' },
        firstname: { text: 'ณรงค์ฤทธิ์' },
        lastname: { text: 'พรมบุรี' },
        phone: { text: '02-22312398' },
        email: { text: 'odiotortorsem@gmail.com', classer: 'wrap' },
        role: { type: 'tag', text: 'HEAD STAFF', classer: 'ss-tag-purple' },
        status: { type: 'status', value: 1, classer: 'wrap-sm' },
        options: {
          type: 'options',
          edit: { type: 'link', href: '/admin/user-edit', id: 4*i+1 },
          delete: { type: 'emit', id: 4*i+1 }
        }
      });

      this.staffData.push({
        order: { text: this.zeroPad(4*i+2, 4) },
        username: { text: 'User'+this.zeroPad(4*i+2, 4) },
        prefix: { text: 'นาย' },
        firstname: { text: 'ณรงค์ฤทธิ์' },
        lastname: { text: 'พรมบุรี' },
        phone: { text: '02-22312398' },
        email: { text: 'odiotortorsem@gmail.com', classer: 'wrap' },
        role: { type: 'tag', text: 'STAFF', classer: 'ss-tag-info' },
        status: { type: 'status', value: 0, classer: 'wrap-sm' },
        options: {
          type: 'options',
          edit: { type: 'link', href: '/admin/user-edit', id: 4*i+2 },
          delete: { type: 'emit', id: 4*i+2 }
        }
      });

      this.userData.push({
        order: { text: this.zeroPad(4*i+3, 4) },
        username: { text: 'User'+this.zeroPad(4*i+3, 4) },
        prefix: { text: 'นาย' },
        firstname: { text: 'ณรงค์ฤทธิ์' },
        lastname: { text: 'พรมบุรี' },
        phone: { text: '02-22312398' },
        email: { text: 'odiotortorsem@gmail.com', classer: 'wrap' },
        role: { type: 'tag', text: 'USER' },
        status: { type: 'status', value: 1, classer: 'wrap-sm' },
        options: {
          type: 'options',
          edit: { type: 'link', href: '/admin/user-edit', id: 4*i+3 },
          delete: { type: 'emit', id: 4*i+3 }
        }
      });

      this.adminData.push({
        order: { text: this.zeroPad(4*i+4, 4) },
        username: { text: 'User'+this.zeroPad(4*i+4, 4) },
        prefix: { text: 'นาย' },
        firstname: { text: 'ณรงค์ฤทธิ์' },
        lastname: { text: 'พรมบุรี' },
        phone: { text: '02-22312398' },
        email: { text: 'odiotortorsem@gmail.com', classer: 'wrap' },
        role: { type: 'tag', text: 'ADMIN', classer: 'ss-tag-warning' },
        status: { type: 'status', value: 1, classer: 'wrap-sm' },
        options: {
          type: 'options',
          edit: { type: 'link', href: '/admin/user-edit', id: 4*i+4 },
          delete: { type: 'emit', id: 4*i+4 }
        }
      });

    }

    this.allData = [].concat(
      [...this.headStaffData], [...this.staffData],
      [...this.userData], [...this.adminData]
    );

  },
  methods: {
    zeroPad(num, places) {
      return String(num).padStart(places, '0')
    },
    onClickDelete(id) {
      this.isActivePopupDelete = !this.isActivePopupDelete;
    },
    onSubmitDelete(e) {
      this.deleteErrorText = '';
      if(this.deleteNote){
        this.deleteNote = '';
        this.isActivePopupDelete = !this.isActivePopupDelete;
      }else{
        this.deleteErrorText = 'กรุณาระบุ';
      }
      e.preventDefault();
    }
  }
}
</script>
