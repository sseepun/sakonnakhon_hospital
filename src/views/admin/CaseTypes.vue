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
              <h6 class="h3">ประเภทสิ่งส่งตรวจ</h6>
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 
              'รายการสิ่งส่งตรวจชิ้นเนื้อ ('+tissueTypeData.length+')',
              'รายการสิ่งส่งตรวจเซลล์ ('+cellTypeData.length+')',
              'รายการย้อม Immuno ('+immunoData.length+')',
              'รายการย้อม Histo ('+histoData.length+')',
              'ICD-O ('+icdData.length+')'
            ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable 
              :rows="tissueTypeData" 
              :columns="[
                { key: 'code_id', text: 'รหัสกรมบัญชีกลาง' },
                { key: 'type', text: 'รายการ', classer: 'w-full' },
                { key: 'price', text: 'ราคารัฐบาล (บาท)' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'code_id', 'type', 'price' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มประเภทรายการสิ่งส่งตรวจชิ้นเนื้อ" 
              :addOptions="{
                code_id: { type: 'text', value: '', placeholder: 'ระบุรหัส', required: true },
                type: { type: 'text', value: '', placeholder: 'ระบุรายการสิ่งส่งตรวจ', required: true },
                price: { type: 'number', value: '', placeholder: 'ระบุราคา', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onTissueTypeDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :rows="cellTypeData" 
              :columns="[
                { key: 'code_id', text: 'รหัสกรมบัญชีกลาง' },
                { key: 'type', text: 'รายการ', classer: 'w-full' },
                { key: 'price', text: 'ราคารัฐบาล (บาท)' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'code_id', 'type', 'price' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มประเภทรายการสิ่งส่งตรวจเซลล์" 
              :addOptions="{
                code_id: { type: 'text', value: '', placeholder: 'ระบุรหัส', required: true },
                type: { type: 'text', value: '', placeholder: 'ระบุรายการสิ่งส่งตรวจ', required: true },
                price: { type: 'number', value: '', placeholder: 'ระบุราคา', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onCellTypeDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :rows="immunoData" 
              :columns="[
                { key: 'code_id', text: 'รหัสกรมบัญชีกลาง' },
                { key: 'type', text: 'รายการ', classer: 'w-full' },
                { key: 'price', text: 'ราคารัฐบาล (บาท)' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'code_id', 'type', 'price' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มรายการย้อม Immuno" 
              :addOptions="{
                code_id: { type: 'text', value: '', placeholder: 'ระบุรหัส', required: true },
                type: { type: 'text', value: '', placeholder: 'ระบุรายการสิ่งส่งตรวจ', required: true },
                price: { type: 'number', value: '', placeholder: 'ระบุราคา', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onImmunoDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 3 }">
            <DataTable 
              :rows="histoData" 
              :columns="[
                { key: 'code_id', text: 'รหัสกรมบัญชีกลาง' },
                { key: 'type', text: 'รายการ', classer: 'w-full' },
                { key: 'price', text: 'ราคารัฐบาล (บาท)' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'code_id', 'type', 'price' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มรายการย้อม Histo" 
              :addOptions="{
                code_id: { type: 'text', value: '', placeholder: 'ระบุรหัส', required: true },
                type: { type: 'text', value: '', placeholder: 'ระบุรายการสิ่งส่งตรวจ', required: true },
                price: { type: 'number', value: '', placeholder: 'ระบุราคา', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onHistoDeleting($event)" 
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 4 }">
            <DataTable 
              :rows="icdData" 
              :columns="[
                { key: 'term', text: 'Term' },
                { key: 'icd', text: 'ICDO3.2', classer: 'w-full' },
                { key: 'date', text: 'วันที่เพิ่มข้อมูล' },
                { key: 'status', text: 'Status' },
                { key: 'options', text: '' }
              ]"
              :orders="[
                { key: 'date-desc', text: 'เพิ่มล่าสุด' },
                { key: 'date-asc', text: 'เพิ่มเก่าสุด' },
              ]" 
              :search="[ 'term', 'icd' ]" 
              :groups="{
                filter: 'status',
                options: [
                  { text: 'Active', value: 1, checked: true },
                  { text: 'Inactive', value: 0, checked: true }
                ]
              }" 
              :allowAdd="true" allowAddText="เพิ่มรายการ ICD-O" 
              :addOptions="{
                term: { type: 'text', value: '', placeholder: 'ระบุ Term', required: true },
                icd: { type: 'text', value: '', placeholder: 'ระบุ ICDO3.2', required: true },
                date: { type: 'empty' },
                status: {
                  type: 'select', value: 1, required: true,
                  options: [ { value: 1, text: 'Active' }, { value: 0, text: 'Inactive' } ]
                }
              }" 
              @click-delete="onIcdDeleting($event)" 
            />
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <!-- Popup Tissue Type -->
  <div class="popup-container" :class="{ 'active': tissueTypePopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="tissueTypePopupOpened = !tissueTypePopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onTissueTypeDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="tissueTypePopupOpened = !tissueTypePopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบประเภทรายการสิ่งส่งตรวจชิ้นเนื้อ</h6>
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
                  placeholder="กรุณาระบุหมายเหตุของการลบประเภทรายการสิ่งส่งตรวจชิ้นเนื้อ" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Cell Type -->
  <div class="popup-container" :class="{ 'active': cellTypePopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="cellTypePopupOpened = !cellTypePopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onCellTypeDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="cellTypePopupOpened = !cellTypePopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบรายการสิ่งส่งตรวจเซลล์</h6>
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
                  placeholder="กรุณาระบุหมายเหตุของการลบรายการสิ่งส่งตรวจเซลล์" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Immuno -->
  <div class="popup-container" :class="{ 'active': immunoPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="immunoPopupOpened = !immunoPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onImmunoDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="immunoPopupOpened = !immunoPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบรายการย้อม Immuno</h6>
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
                  placeholder="กรุณาระบุหมายเหตุของการลบรายการย้อม Immuno" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup Histo -->
  <div class="popup-container" :class="{ 'active': histoPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="histoPopupOpened = !histoPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onHistoDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="histoPopupOpened = !histoPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบรายการย้อม Histo</h6>
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
                  placeholder="กรุณาระบุหมายเหตุของการลบรายการย้อม Histo" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Popup ICD -->
  <div class="popup-container" :class="{ 'active': icdPopupOpened }">
    <div class="wrapper">
      <div class="close-filter" @click="icdPopupOpened = !icdPopupOpened"></div>
      <form action="/" method="GET" class="w-full"  @submit="onIcdDelete">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="icdPopupOpened = !icdPopupOpened">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบรายการ ICD-O</h6>
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
                  placeholder="กรุณาระบุหมายเหตุของการลบรายการ ICD-O" 
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
  name: 'AdminCaseTypesPage',
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
      sidenavActiveIndex: 3,
      tabActiveIndex: 0,

      tissueTypePopupOpened: false,
      tissueTypeData: [
        {
          code_id: { text: '38106' },
          type: { text: 'Appendix' },
          price: { text: 500 },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          code_id: { text: '38002' },
          type: { text: 'Biopsy หรือชิ้นเนื้อที่มีความยาวมากกว่า 2 ซม แต่ไม่เกิน 5 ซม' },
          price: { text: 1000 },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
        {
          code_id: { text: '38003' },
          type: { text: 'Biopsy หรือชิ้นเนื้อที่มีความยาวมากกว่า 5 ซม' },
          price: { text: 1500 },
          date: { text: '10/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 2 },
            delete: { type: 'emit', id: 2 }
          }
        },
      ],

      cellTypePopupOpened: false,
      cellTypeData: [
        {
          code_id: { text: '38106' },
          type: { text: 'Conventional Pap smear' },
          price: { text: 500 },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          code_id: { text: '38002' },
          type: { text: 'Non-gynecologic specimen' },
          price: { text: 1000 },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
      ],

      immunoPopupOpened: false,
      immunoData: [
        {
          code_id: { text: '38106' },
          type: { text: 'Conventional Pap smear' },
          price: { text: 500 },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          code_id: { text: '38002' },
          type: { text: 'Non-gynecologic specimen' },
          price: { text: 1000 },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
      ],

      histoPopupOpened: false,
      histoData: [
        {
          code_id: { text: '30501' },
          type: { text: 'H&E' },
          price: { text: 40 },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          code_id: { text: '38010' },
          type: { text: 'M-AFB' },
          price: { text: 1000 },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 1 },
            delete: { type: 'emit', id: 1 }
          }
        },
      ],

      icdPopupOpened: false,
      icdData: [
        {
          term: { text: 'Neoplasm, benign' },
          icd: { text: '8000/0' },
          date: { text: '12/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
        {
          term: { text: 'Tumor, benign' },
          icd: { text: '8000/0' },
          date: { text: '11/12/2563, 12:59' },
          status: { type: 'status', value: 1 },
          options: {
            type: 'options',
            edit: { type: 'inline', id: 0 },
            delete: { type: 'emit', id: 0 }
          }
        },
      ],

    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {

    onTissueTypeDeleting(id) {
      this.tissueTypePopupOpened = !this.tissueTypePopupOpened;
    },
    onTissueTypeDelete(e) {
      this.tissueTypePopupOpened = !this.tissueTypePopupOpened;
      e.preventDefault();
    },

    onCellTypeDeleting(id) {
      this.cellTypePopupOpened = !this.cellTypePopupOpened;
    },
    onCellTypeDelete(e) {
      this.cellTypePopupOpened = !this.cellTypePopupOpened;
      e.preventDefault();
    },

    onImmunoDeleting(id) {
      this.immunoPopupOpened = !this.immunoPopupOpened;
    },
    onImmunoDelete(e) {
      this.immunoPopupOpened = !this.immunoPopupOpened;
      e.preventDefault();
    },

    onHistoDeleting(id) {
      this.histoPopupOpened = !this.histoPopupOpened;
    },
    onHistoDelete(e) {
      this.histoPopupOpened = !this.histoPopupOpened;
      e.preventDefault();
    },

    onIcdDeleting(id) {
      this.icdPopupOpened = !this.icdPopupOpened;
    },
    onIcdDelete(e) {
      this.icdPopupOpened = !this.icdPopupOpened;
      e.preventDefault();
    },
    
  }
}
</script>
