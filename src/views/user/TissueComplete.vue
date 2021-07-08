<template>
  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" />

  <section class="section-full">
    <div class="container">

      <div class="section-header" data-aos="fade-up" data-aos-delay="0">
        <div class="btns mt-0">
          <a href="/user/cases" class="btn color-gray h-color-01">
            <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
            ย้อนกลับ
          </a>
        </div>
        <div class="header-wrapper">
          <div class="text-container pr-2">
            <span class="h3">
              รายละเอียดการรับเข้าบริการ
            </span>
            <span class="ss-sep hide-mobile"></span>
            <span class="ss-tag">รอรับเข้าบริการ</span>
          </div>
          <div class="btns hide-mobile">
            <Button 
              text="บันทึกแบบฟอร์ม" href="#" 
              classer="btn-color-01" :prepend="true" icon="check-white.svg" 
            />
          </div>
          <div class="btns ws-nowrap show-mobile">
            <Button text="บันทึก" href="#" classer="btn-color-01 btn-sm" />
          </div>
        </div>
      </div>

      <div class="stripe stripe-warning section-px" data-aos="fade-up" data-aos-delay="150">
        <img src="/assets/img/icon/alert-yellow.svg" alt="Image Icon" />
        <p class="color-11">
          หมายเหตุ: กรุณาตรวจสอบข้อมูลให้ถูกต้องครบถ้วนก่อนการส่งข้อมูล เพื่อประโยชน์แก่ผู้ป่วยและแพทย์ผู้ทำการรักษา
        </p>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลผู้ป่วย</p>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="รหัสใบส่งตรวจ" value="CG20-00001" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="HN" value="1088052" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="AN" value="1254454" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ห้องตรวจ" value="สูตินรีเวช" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="วันที่เก็บตัวอย่าง" value="06/01/2638" />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อผู้ป่วย" value="ณรงค์ฤทธิ์ พรมบุรี" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ประเภทผู้ป่วย" value="ผู้ป่วยนอก (IPD)" />
          </div>
          <div class="grid lg-60 md-1-3">
            <FormGroup type="plain" label="สิทธิการรักษา" value="สวัสดิการข้าราชการ" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อแพทย์" value="พญ. สุพิภัทฎิพร มานะ" />
          </div>
          <div class="grid lg-80 md-1-3">
            <FormGroup type="plain" label="รหัสแพทย์" value="47109" />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="หน่วยงานที่ส่ง" value="-" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="เบอร์โทรหน่วยงาน" value="-" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อเจ้าหน้าที่ผู้ประสานงาน" value="-" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="เบอร์โทรผู้ประสานงาน" value="-" />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          เจ้าหน้าที่ตรวจเนื้อเยื่อ
        </p>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div class="grid xl-20 lg-1-3 sm-100">
            <CheckboxSet 
              label="ความเร่งด่วน" name="urgent" 
              :value="1" 
              :options="[
                { value: 1, text: 'ปกติ' },
                { value: 2, text: 'ด่วน' },
              ]"
            />
          </div>
          <div class="grid xl-80 lg-2-3 sm-100">
            <CheckboxSet 
              label="ประเภทการบริการ" name="service_type" 
              :value="1" 
              :options="[
                { value: 1, text: 'ค้นหาแบบปกติ' },
                { value: 2, text: 'ค้นหาโดยสูตรกลุ่มค่าบริการ' },
              ]"
            />
          </div>
        </div>
      </div>

      <div class="mb-5" data-aos="fade-up" data-aos-delay="0">
        <DataTable 
          :key="serviceData.length" classer="valign-top" 
          :rows="serviceData" 
          :columns="[
            { key: 'num_id', text: 'ID' },
            { key: 'service', text: 'รายการบริการ' },
            { key: 'time', text: 'เวลา' },
            { key: 'amount', text: 'จำนวน' },
            { key: 'discount', text: 'ส่วนลด' },
            { key: 'price', text: 'ราคาต่อหน่วย' },
            { key: 'total_price', text: 'ราคารวม' },
            { key: 'options', text: '' }
          ]" 
          :withOptions="false" 
          :allowAdd="true" allowAddText="เพิ่มรายการบริการ" 
          :addOptions="{
            num_id: { 
              type: 'searchselect', value: '', placeholder: '00000', required: true,
              options: [ '30501', '38010', '38401', '38402', '38403', '38404' ]
            },
            service: { type: 'text', value: '', placeholder: 'กรุณากรอก', required: true },
            time: { type: 'text', value: '', placeholder: '13:32', required: true },
            amount: { type: 'number', value: '', placeholder: '00', required: true },
            discount: { type: 'number', value: '', placeholder: '00', required: true },
            price: { type: 'number', value: '', placeholder: '00', required: true },
            total_price: { type: 'number', value: '', placeholder: '00', required: true },
          }" 
          :totalRows="{
            discount: { text: 'ราคาต่อหมวด' },
            price: { unit: 'บาท' },
            total_price: { unit: 'บาท' }
          }" 
          @row-add="($event)=>serviceDataAdd($event)" 
          @row-edit="($event)=>serviceDataEdit($event)" 
        />
      </div>

    </div>
  </section>

  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard02 from '../../components/SpecialCard02';
import DataTable from '../../components/DataTable';
import Step01 from '../../components/Step01';

export default {
  name: 'UserTissueCompletePage',
  components: {
    Topnav,
    SpecialCard02,
    DataTable,
    Step01
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 1,
      serviceData: [],
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
    this.serviceData.push({
      id: this.serviceData.length,
      num_id: { text: '30501' },
      service: { text: 'Biopsy หรือชิ้นเนื้อที่มีความยาว 2 ซม. แต่ไม่เกิน 5 ซม.' },
      time: { text: '12:22' },
      amount: { text: '12' },
      discount: { text: '50' },
      price: { text: '100' },
      total_price: { text: '1150' },
      options: {
        type: 'options',
        edit: { type: 'inline', id: 0 },
        delete: { type: 'emit', id: 0 }
      }
    });
  },
  methods: {
    serviceDataAdd(data) {
      this.serviceData.push({
        id: this.serviceData.length,
        num_id: { text: data.num_id },
        service: { text: data.service },
        time: { text: data.time },
        amount: { text: data.amount },
        discount: { text: data.discount },
        price: { text: data.price },
        total_price: { text: data.total_price },
        options: {
          type: 'options',
          edit: { type: 'inline', id: this.serviceData.length },
          delete: { type: 'emit', id: this.serviceData.length }
        }
      });
    },
    serviceDataEdit(data) {
      console.log(data);
    }
  }
}
</script>