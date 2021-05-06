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
          <div class="text-container d-flex ai-center">
            <h6 class="h3">รายละเอียดการดำเนินการศพ</h6>
            | <div class="ss-tag ss-tag-warning">รอการทำลาย</div>
          </div>
          <div class="btns hide-mobile">
            <Button 
              text="พิมพ์ใบจำหน่ายศพ" href="#" 
              classer="btn-color-03 mr-3" :prepend="true" icon="printer-white.svg" 
            />
            <Button 
              text="บันทึก" href="#" 
              classer="btn-color-01" :prepend="true" icon="check-white.svg" 
            />
          </div>
          <div class="btns show-mobile">
            <Button type="submit" text="พิมพ์" classer="btn-color-03 btn-sm mr-1" />
            <Button type="submit" text="บันทึก" classer="btn-color-01 btn-sm" />
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
        <p class="fw-400" style="white-space:nowrap;">ข้อมูลผู้เสียชีวิต</p>
        <p class="color-gray text-right">ID : FI63-01526</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">
          <!-- First row -->
          <div class="grid xl-15 lg-20 md-1-3">
            <FormGroup type="plain" label="HN" value="1088052" />
          </div>
          <div class="grid lg-80 md-2-3">
            <FormGroup type="plain" label="AN" value="1254454" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3">
            <FormGroup type="plain" label="คำนำหน้า" value="นางสาว" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อ นามสกุล" value="พัชราพร วัฒนาไพศาล" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="เพศ" value="หญิง" />
          </div>
           <div class="grid xl-15 lg-20 md-1-3">
            <FormGroup type="plain" label="วันเดือนปีเกิด" value="12/12/2512" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3">
            <FormGroup type="plain" label="อายุ" value="11 เดือน 12 วัน" />
          </div>
          <div class="grid xl-25 lg-20 md-1-3">
            <FormGroup type="plain" label="หมายเลขบัตรประชาชน" value="1-2655-82345-18-2" />
          </div>

          <!-- Second row -->
          <div class="grid xl-15 lg-20 md-1-3">
            <FormGroup type="plain" label="สิทธิการรักษา" value="ประกันสังคมข้าราชการ" />
          </div>
          <div class="grid xl-45 lg-60 md-1-3">
            <FormGroup type="plain" label="ที่อยู่" value="83 พาร์ทเม้นท์ ราชพฤกษ์เพลส ซ.มหาสวัสดิ์ 4 ถ.ราชพฤกษ์ ต.มหาสวัสดิ์ อ.บางกรวย จ.นนทบุรี 11130" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3">
            <FormGroup type="plain" label="สถานะการบริจาคร่างกาย" value="--" />
          </div>
          <div class="grid xl-15 lg-20 md-1-3">
            <FormGroup type="plain" label="โรงพยาบาลที่ลงทะเบียน" value="--" />
          </div>

        </div>
      </div>


      <div class="d-flex jc-space-between stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลแพทย์</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">
          <!-- First row -->
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="แพทย์ผู้รักษา" value="ดร. สตีเฟ่น หลังยาหน่าย" />
          </div>
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="หอผู้ป่วยที่จำหน่าย" value="​Emergency Room" />
          </div>
          <div class="grid lg-15 md-1-3 xs-50">
            <FormGroup type="plain" label="วันที่เสียชีวิต" value="01/11/2564" />
          </div>
           <div class="grid lg-50 md-1-3 xs-50">
            <FormGroup type="plain" label="เวลาเสียชีวิต" value="16:42" />
          </div>
          <!-- Second row -->
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="ประเภท" value="ตายผิดธรรมชาติ <span class='color-sgray'>(คดี)</span>" />
          </div>
          <div class="grid lg-80 md-1-3">
            <FormGroup type="plain" label="สาเหตุการตาย" value="อุบัติเหตุทางท้องถนน" />
          </div>

          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="ชนิดของศพ" value="ศพ/อวัยวะ <span class='color-sgray'>(หัวใจ)</span<" />
          </div>
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="เกี่ยวกับคดี" value="มีคดี <span class='color-sgray'>(ขับรถโดยประมาท)</span>" />
          </div>
          <div class="grid lg-70 md-1-3">
            <FormGroup type="plain" label="มีการติดต่อโรคร้ายแรง?" value="ติดต่อโรคร้ายแรง <span class='color-sgray'>(Covid-19)</span>" />
          </div>
          <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="การฉีดยาดองศพ" value="ดองศพ" />
          </div>
           <div class="grid lg-15 md-1-3">
            <FormGroup type="plain" label="การอาบน้ำศพ" value="อาบน้ำศพ" />
          </div>

        </div>
      </div>

      <div class="d-flex jc-space-between stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">เจ้าหน้าที่ดูแลศพ</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="text" label="ใบเสร็จเล่มที่" value="089005" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="text" label="เลขที่" value="​408" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="datepicker" label="*วันที่รับศพเข้าสถานเก็บศพ" placeholder="01/11/2564" />
          </div>
           <div class="grid lg-20 md-1-3">
            <FormGroup type="text" label="*ชื่อเจ้าหน้าที่ตำรวจ" value="พอ. จริงใจ แสนเท่" />
          </div>
          <div class="grid sm-100">
            <CheckboxSet 
                label="การจัดการศพ" :value="4" :name="'radio_1'"
                :options="[
                  { value: 1, text: 'จำหน่ายศพทันที' },
                  { value: 2, text: 'รอจำหน่าย' },
                  { value: 3, text: 'เก็บรักษา' },
                  { value: 4, text: 'รอการทำลาย' }
                ]"
              />
          </div>
        </div>
      </div>


      <div class="d-flex jc-space-between stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400" style="white-space:nowrap;">ทำลายศพ</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">
          <div class="grid lg-30 md-1-3">
            <FormGroup type="text" label="รายละเอียดการทำลาย" value="รายละเอียดเพิ่มเติม" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="datepicker" label="วันที่ทำลาย" placeholder="01/12/2563" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="text" label="เวลาทำลาย" value="12:40" />
          </div>
           <div class="grid lg-20 md-1-3">
            <CheckboxSet 
                label="การจัดการศพ" :value="1"
                :options="[
                  { value: 1, text: 'ทำลายศพเสร็จสิ้น' },
                ]"
              />
          </div>
        </div>
      </div>
    </div>
  </section>

  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard02 from '../../components/SpecialCard02';
import DataTable from '../../components/DataTable';

export default {
  name: 'FuneralComplete2Page',
  components: {
    Topnav,
    SpecialCard02,
    DataTable
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 2
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  }
}
</script>