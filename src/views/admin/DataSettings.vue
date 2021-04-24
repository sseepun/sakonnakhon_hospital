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
              <h6 class="h3">ตั้งค่าข้อมูลหลัก</h6>
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 
              'คำนำหน้า ('+prefixData.length+')',
              'สิทธิการรักษา ('+treatmentData.length+')',
              'โรงพยาบาล ('+hospitalData.length+')',
              'หน่วยงาน/แผนก ('+departmentData.length+')',
              'ตำแหน่ง ('+positionData.length+')',
              'ห้องวิจัยภายนอก ('+labData.length+')'
            ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :rows="prefixData" 
              :columns="[
                { key: 'prefix', text: 'คำนำหน้า', classer: 'w-full' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status', classer: 'wrap-sm' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'prefix', 'date' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มคำนำหน้า" 
              :addOptions="{
                prefix: { type: 'text', value: '', placeholder: 'ระบุคำนำหน้า', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onPrefixDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :rows="treatmentData" 
              :columns="[
                { key: 'treatment', text: 'สิทธิการรักษา', classer: 'w-full' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status', classer: 'wrap-sm' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'treatment', 'date' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มสิทธิการรักษา" 
              :addOptions="{
                treatment: { type: 'text', value: '', placeholder: 'ระบุสิทธิการรักษา', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onTreatmentDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :rows="hospitalData" 
              :columns="[
                { key: 'hospital_id', text: 'รหัสโรงพยาบาล' },
                { key: 'name', text: 'ชื่อโรงพยาบาล' },
                { key: 'province', text: 'จังหวัด', classer: 'wrap' },
                { key: 'city', text: 'อำเภอ', classer: 'wrap' },
                { key: 'address', text: 'ที่อยู่', classer: 'wrap' },
                { key: 'type', text: 'ประเภท', classer: 'wrap' },
                { key: 'phone', text: 'เบอร์โทรศัพท์' },
                { key: 'email', text: 'อีเมล', classer: 'wrap' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status', classer: 'wrap-sm' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'hospital_id', 'name', 'province', 'city', 'address', 'type' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มโรงพยาบาล" 
              :addOptions="{
                hospital_id: { type: 'text', value: '', placeholder: 'ระบุรหัส', required: true },
                name: { type: 'text', value: '', placeholder: 'ระบุชื่อโรงพยาบาล', required: true },
                province: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'สกลนคร' }, { value: 2, text: 'นครปฐม' } ]
                },
                city: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'เมือง' } ]
                },
                address: { type: 'text', value: '', placeholder: 'ระบุที่อยู่โรงพยาบาล', required: true },
                type: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'รัฐบาล' }, { value: 2, text: 'เอกชน' } ]
                },
                phone: { type: 'text', value: '', placeholder: '012-3456789', required: true },
                email: { type: 'text', value: '', placeholder: 'sample@gmail.com', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onHospitalDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 3 }">
            <DataTable 
              :rows="departmentData" 
              :columns="[
                { key: 'name', text: 'ชื่อแผนก', classer: 'w-full' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status', classer: 'wrap-sm' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'name', 'date' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มแผนก" 
              :addOptions="{
                name: { type: 'text', value: '', placeholder: 'ระบุแผนก', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onDepartmentDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 4 }">
            <DataTable 
              :rows="positionData" 
              :columns="[
                { key: 'name', text: 'ชื่อตำแหน่ง', classer: 'w-full' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status', classer: 'wrap-sm' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'name', 'date' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มตำแหน่ง" 
              :addOptions="{
                name: { type: 'text', value: '', placeholder: 'ระบุตำแหน่ง', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onPositionDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 5 }">
            <DataTable 
              :rows="labData" 
              :columns="[
                { key: 'name', text: 'ห้องวิจัยภายนอก' },
                { key: 'province', text: 'จังหวัด', classer: 'wrap' },
                { key: 'city', text: 'อำเภอ', classer: 'wrap' },
                { key: 'address', text: 'ที่อยู่', classer: 'wrap' },
                { key: 'type', text: 'ประเภท', classer: 'wrap' },
                { key: 'phone', text: 'เบอร์โทรศัพท์' },
                { key: 'email', text: 'อีเมล', classer: 'wrap' },
                { key: 'status', text: 'Status', classer: 'wrap-sm' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'name-desc', text: 'ชื่อล่าสุด' },
                { key: 'name-asc', text: 'ชื่อเก่าสุด' },
              ]" 
              :search="[ 'name', 'province', 'city', 'address', 'type' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มห้องวิจัยภายนอก" 
              :addOptions="{
                name: { type: 'text', value: '', placeholder: 'กรุณากรอก', required: true },
                province: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'สกลนคร' }, { value: 2, text: 'นครปฐม' }, { value: 3, text: 'นราธิวาส' } ]
                },
                city: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'เมือง' }, { value: 2, text: 'ระแงะ' } ]
                },
                address: { type: 'text', value: '', placeholder: 'ระบุที่อยู่โรงพยาบาล', required: true },
                type: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'รัฐบาล' }, { value: 2, text: 'เอกชน' } ]
                },
                phone: { type: 'text', value: '', placeholder: '012-3456789', required: true },
                email: { type: 'text', value: '', placeholder: 'sample@gmail.com', required: true },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onLabDeleting($event)" 
            />
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <!-- Popup Prefix -->
  <div class="popup-container" :class="{ 'active': prefixPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="prefixPopupOpened = !prefixPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onPrefixDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="prefixPopupOpened = !prefixPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบคำนำหน้า</h6>
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
                  label="หมายเหตุ" type="textarea" name="note" :required="true" 
                  placeholder="กรุณาระบุหมายเหตุของการลบคำนำหน้า" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Treatment -->
  <div class="popup-container" :class="{ 'active': treatmentPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="treatmentPopupOpened = !treatmentPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onTreatmentDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="treatmentPopupOpened = !treatmentPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบสิทธิการรักษา</h6>
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
                  label="หมายเหตุ" type="textarea" name="note" :required="true" 
                  placeholder="กรุณาระบุหมายเหตุของการลบสิทธิการรักษา" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Hospital -->
  <div class="popup-container" :class="{ 'active': hospitalPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="hospitalPopupOpened = !hospitalPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onHospitalDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="hospitalPopupOpened = !hospitalPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบโรงพยาบาล</h6>
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
                  label="หมายเหตุ" type="textarea" name="note" :required="true" 
                  placeholder="กรุณาระบุหมายเหตุของการลบโรงพยาบาล" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Department -->
  <div class="popup-container" :class="{ 'active': departmentPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="departmentPopupOpened = !departmentPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onDepartmentDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="departmentPopupOpened = !departmentPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบแผนก</h6>
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
                  label="หมายเหตุ" type="textarea" name="note" :required="true" 
                  placeholder="กรุณาระบุหมายเหตุของการลบแผนก" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Position -->
  <div class="popup-container" :class="{ 'active': positionPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="positionPopupOpened = !positionPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onPositionDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="positionPopupOpened = !positionPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบตำแหน่ง</h6>
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
                  label="หมายเหตุ" type="textarea" name="note" :required="true" 
                  placeholder="กรุณาระบุหมายเหตุของการลบตำแหน่ง" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Lab -->
  <div class="popup-container" :class="{ 'active': labPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="labPopupOpened = !labPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onLabDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="labPopupOpened = !labPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบห้องวิจัยภายนอก</h6>
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
                  label="หมายเหตุ" type="textarea" name="note" :required="true" 
                  placeholder="กรุณาระบุหมายเหตุของการลบห้องวิจัยภายนอก" 
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
  name: 'AdminDataSettingsPage',
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
      sidenavActiveIndex: 2,
      tabActiveIndex: 0,

      prefixPopupOpened: false,
      prefixData: [
        {
          prefix: { text: 'นาย' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          prefix: { text: 'นาง' },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
        {
          prefix: { text: 'นางสาว' },
          date: { text: '10/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 2 },
            delete: { type: 'emit', id: 2 }
          }
        }
      ],

      treatmentPopupOpened: false,
      treatmentData: [
        {
          treatment: { text: 'ประกันสังคม' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          treatment: { text: 'ข้าราชการ' },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
        {
          treatment: { text: 'บัตรทอง' },
          date: { text: '10/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 2 },
            delete: { type: 'emit', id: 2 }
          }
        },
        {
          treatment: { text: 'รัฐวิสาหกิจ' },
          date: { text: '09/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 3 },
            delete: { type: 'emit', id: 3 }
          }
        }
      ],

      hospitalPopupOpened: false,
      hospitalData: [
        {
          hospital_id: { text: '1234567' },
          name: { text: 'โรงพยาบาลสกลนคร' },
          province: { text: 'สกลนคร', value: 2 },
          city: { text: 'เมือง', value: 1 },
          address: { text: '1041 ถ.เจริญเมือง ต.ธาตุเชิงชุม' },
          type: { text: 'รัฐบาล', value: 1 },
          phone: { text: '034-212522' },
          email: { text: 'sakonnakhon_hospital@hotmail.com' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          hospital_id: { text: '1234567' },
          name: { text: 'โรงพยาบาลสกลนคร' },
          province: { text: 'สกลนคร', classer: 'wrap-sm', value: 2 },
          city: { text: 'เมือง', value: 1 },
          address: { text: '1041 ถ.เจริญเมือง ต.ธาตุเชิงชุม' },
          type: { text: 'รัฐบาล', value: 1 },
          phone: { text: '034-212522' },
          email: { text: 'sakonnakhon_hospital@hotmail.com' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        }
      ],

      departmentPopupOpened: false,
      departmentData: [
        {
          name: { text: 'อายุรกรรม' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          name: { text: 'พยาธิวิทยากายวิภาค' },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        }
      ],

      positionPopupOpened: false,
      positionData: [
        {
          name: { text: 'แพทย์' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          name: { text: 'นักกายภาพบำบัด' },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
        {
          name: { text: 'ทันตแพทย์' },
          date: { text: '10/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 2 },
            delete: { type: 'emit', id: 2 }
          }
        },
        {
          name: { text: 'พยาบาล' },
          date: { text: '09/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 3 },
            delete: { type: 'emit', id: 3 }
          }
        },
        {
          name: { text: 'นักเทคนิคการแพทย์' },
          date: { text: '08/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 4 },
            delete: { type: 'emit', id: 4 }
          }
        }
      ],

      labPopupOpened: false,
      labData: [
        {
          name: { text: 'โรงพยาบาลสกลนคร' },
          province: { text: 'สกลนคร', value: 1 },
          city: { text: 'เมือง', value: 1 },
          address: { text: '1041 ถ.เจริญเมือง ต.ธาตุเชิงชุม' },
          type: { text: 'รัฐบาล', value: 1 },
          phone: { text: '061-2125229' },
          email: { text: 'sakonnakhon_hospital@hotmail.com' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          name: { text: 'N Health' },
          province: { text: 'นครปฐม', value: 2 },
          city: { text: 'เมือง', value: 1 },
          address: { text: '196 ถนนเทศา ตำบลพระปฐมเจดีย์' },
          type: { text: 'รัฐบาล', value: 1 },
          phone: { text: '061-2125229' },
          email: { text: 'sakonnakhon_hospital@hotmail.com' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
        {
          name: { text: 'KMUTT Lab' },
          province: { text: 'นราธิวาส', value: 3 },
          city: { text: 'ระแงะ', value: 2 },
          address: { text: '88 หมู่ 1 ถ.รถไฟ ต.ตันหยงมัส' },
          type: { text: 'เอกชน', value: 2 },
          phone: { text: '061-2125229' },
          email: { text: 'sakonnakhon_hospital@hotmail.com' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 2 },
            delete: { type: 'emit', id: 2 }
          }
        }
      ],

    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {

    onPrefixDeleting(id) {
      this.prefixPopupOpened = !this.prefixPopupOpened;
    },
    onPrefixDelete(e) {
      this.prefixPopupOpened = !this.prefixPopupOpened;
      e.preventDefault();
    },

    onTreatmentDeleting(id) {
      this.treatmentPopupOpened = !this.treatmentPopupOpened;
    },
    onTreatmentDelete(e) {
      this.treatmentPopupOpened = !this.treatmentPopupOpened;
      e.preventDefault();
    },

    onHospitalDeleting(id) {
      this.hospitalPopupOpened = !this.hospitalPopupOpened;
    },
    onHospitalDelete(e) {
      this.hospitalPopupOpened = !this.hospitalPopupOpened;
      e.preventDefault();
    },

    onDepartmentDeleting(id) {
      this.departmentPopupOpened = !this.departmentPopupOpened;
    },
    onDepartmentDelete(e) {
      this.departmentPopupOpened = !this.departmentPopupOpened;
      e.preventDefault();
    },

    onPositionDeleting(id) {
      this.positionPopupOpened = !this.positionPopupOpened;
    },
    onPositionDelete(e) {
      this.positionPopupOpened = !this.positionPopupOpened;
      e.preventDefault();
    },

    onLabDeleting(id) {
      this.labPopupOpened = !this.labPopupOpened;
    },
    onLabDelete(e) {
      this.labPopupOpened = !this.labPopupOpened;
      e.preventDefault();
    },
    
  }
}
</script>
