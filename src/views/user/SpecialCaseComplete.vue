<template>
  <Topnav :userRole="userRole" />

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
          <div class="text-container d-flex ai-center">
            <h6 class="h3">รายละเอียดส่งตรวจพิเศษ/ย้อมพิเศษ/อณูพยาธิวิทยา</h6>
            | <div class="ss-tag">รอผลตรวจ</div>
          </div>
          <div class="btns hide-mobile">
            <Button 
              type="submit" text="เสร็จสิ้น" 
              classer="btn-color-01" :prepend="true" icon="check-white.svg" 
            />
          </div>
          <div class="btns show-mobile">
            <Button type="submit" text="เสร็จสิ้น" classer="btn-color-01 btn-sm" />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลส่งตรวจ</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">
          <!-- First row -->
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="รหัสใบส่งตรวจ" value="S20-00001" />
          </div>
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="ประเภททะเบียน" value="สีย้อมพิเศษ" />
          </div>
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="เลขที่หนังสือ" value="123456789" />
          </div>
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="วันที่หนังสือ" value="11/02/2564" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="เจ้าหน้าที่ผู้นำส่ง" value="นันทวรรณ วิลิศมาหรา" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="เบอร์โทรติดต่อ" value="041550880 ต่อ 1200" />
          </div>

          <!-- Second row -->
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="หมายเหตุ" value="B715/e" />
          </div>
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="จำนวนราย" value="B715/e" />
          </div>
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="จำนวน Block" value="3" />
          </div>
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="จำนวน Slide" value="2" />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ส่ง Lab" value="9 :  บริษัท N Health" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="กำหนดวันที่ต้องรายงานผล (Due Date)" value="20/02/2564" />
          </div>

        </div>
      </div>


      <div data-aos="fade-up" data-aos-delay="0">
          <div class="section-px border-bottom">
            <h6 class="h5">รายการส่งตรวจ</h6>
          </div>
          <div class="mt-3">
             <DataTable 
              :columns="columns1" :rows="rows1" 
              :withOptions="false"
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่ส่งตรวจ (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่ส่งตรวจ (เก่าสุด)' },
              ]"
            />
          </div>
        </div>

      <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          ข้อมูลส่งตรวจ 
        </p>
      </div>

    </div>
  </section>

  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard02 from '../../components/SpecialCard02';
import DataTable from '../../components/DataTable';

export default {
  name: 'SpecialCaseCompletePage',
  components: {
    Topnav,
    SpecialCard02,
    DataTable
  },
  data() {
    return {
      userRole: 'Staff พยาธิวิทยา', /* User, Staff พยาธิวิทยา, Staff งานศพ */
      columns1:[
        { key: 'prefix', text: 'คำนำหน้า'},
        { key: 'name', text: '*ชื่อ นามสกุล' },
        { key: 'hn', text: '*HN' },
        { key: 'card_type', text: '*สิทธิการรักษา' },
        { key: 'block_no', text: '*Block No.' },
        { key: 'immuno', text: 'ลงรายการย้อม Immuno' },
        { key: 'histo', text: 'ลงรายการย้อม Histo' },
        { key: 'note', text: 'Note' },
        { key: 'register_no', text: 'Register No' },
      ],
      rows1: [
       {
          prefix: {
            type: 'text', text: 'นางสาว'
          },
          name: { 
            type: 'text', text: 'จริงใจ ยินดี' 
          },
          hn: { 
            type: 'text', text: '478312'
          },
          card_type: {
            type: 'text', text: 'ประกันสังคม',
          },
          block_no: {
            type: 'text', text: 'P64-772 B',
          },
          immuno: {
            type: 'text', text: 'CK20,CK7,AE1AE3,Ki-67,LCA,S-100,SOX-10',
          },
          histo: {
            type: 'text', text: '-',
          },
          note: {
            type: 'text', text: '-',
          },
          register_no: {
            type: 'text', text: 'EX64-00001'
          }
        },
        {
          prefix: {
            type: 'text', text: 'นางสาว'
          },
          name: { 
            type: 'text', text: 'สุดยอด จริงจริง' 
          },
          hn: { 
            type: 'text', text: '129821'
          },
          card_type: {
            type: 'text', text: 'ประกันสังคม',
          },
          block_no: {
            type: 'text', text: 'P64-772 B',
          },
          immuno: {
            type: 'text', text: '-',
          },
          histo: {
            type: 'text', text: 'Acid Fast Bacilli (AFB)',
          },
          note: {
            type: 'text', text: '-',
          },
          register_no: {
            type: 'text', text: 'EX64-00002'
          }
        },
        {
          prefix: {
            type: 'text', text: 'นาย'
          },
          name: { 
            type: 'text', text: 'ความรัก แสนสุข' 
          },
          hn: { 
            type: 'text', text: '245199'
          },
          card_type: {
            type: 'text', text: 'ประกันสังคม',
          },
          block_no: {
            type: 'text', text: 'P64-772 B',
          },
          immuno: {
            type: 'text', text: '-',
          },
          histo: {
            type: 'text', text: 'Acid Fast Bacilli (AFB)',
          },
          note: {
            type: 'text', text: '-',
          },
          register_no: {
            type: 'text', text: 'EX64-00003'
          }
        }
      ]

    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  }
}
</script>