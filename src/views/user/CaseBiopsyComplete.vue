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
            <h6 class="h3">รายละเอียดรายการส่งตรวจชิ้นเนื้อ</h6>
            | <div class="ss-tag">รอรับเข้าบริการ</div>
          </div>
          <div class="btns hide-mobile">
            <Button 
              type="submit" text="บันทึกทะเบียน" 
              classer="btn-color-01" :prepend="true" icon="check-white.svg" 
            />
          </div>
          <div class="btns show-mobile">
            <Button type="submit" text="บันทึก" classer="btn-color-01 btn-sm" />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลผู้ป่วย</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ประเภททะเบียน" value="Surgical pathology (S)" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="Surgical Number" value="S21-00001" />
          </div>
          <div class="grid lg-60 md-1-3">
            <FormGroup type="plain" label="ประเภททะเบียน" value="IPD" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="HN" value="1088052" />
          </div>
          <div class="grid lg-80 md-2-3">
            <FormGroup type="plain" label="AN" value="1254454" />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="คำนำหน้า" value="นางสาว" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อ นามสกุล" value="พัชราพร วัฒนาไพศาล" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="เพศ" value="หญิง" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="สัญชาติ" value="ไทย" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="หมายเลขบัตรประชาชน" value="1-2655-82345-18-2" />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="วันเดือนปีเกิด" value="12/12/2512" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="อายุ" value="11 เดือน 12 วัน" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="สิทธิการรักษา" value="ประกันสังคม" />
          </div>
          <div class="grid lg-40 md-1-3">
            <FormGroup type="plain" label="โรงพยาบาล" value="โรงพยาบาลสกลนคร" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="รหัสแพทย์" value="1232212" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="แพทย์ผู้รักษา" value="ภูผา ทิพย์ขจรเดช" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="WARD" value="Cohort Ward" />
          </div>
          <div class="grid lg-40 md-1-3">
            <FormGroup type="plain" label="วันที่เก็บตัวอย่าง" value="07/01/2564" />
          </div>
          
          <div class="grid lg-20 md-2-3 sm-100">
            <FormGroup type="plain" label="กำหนดวันที่รายงานผล (Due Date)" value="12/12/2512" />
          </div>
          <div class="grid lg-80 sm-100">
            <FormGroup type="plain" label="หมายเหตุ" value="--" />
          </div>

        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          รายการสิ่งส่งตรวจ 
          <span class="color-01">(จำนวนถุงทั้งหมด {{bagTotal}} ถุง)</span>
        </p>
      </div>
      <div class="section-px section-py-grid border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div v-for="(bag, index) in bags" :key="index"
            class="grid xl-1-3 lg-50 md-60 sm-80"
          >
            <SpecialCard02 
              type="Complete" 
              :value="bag.value" 
              :valueCount="bag.valueCount"
            />
          </div>
        </div>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div class="grid sm-100">
            <FormGroup type="plain" label="Site (ตำแหน่ง)" value="Right" />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">Clinical Information</p>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div class="grid md-50 sm">
            <FormGroup type="plain" label="Clinical diagnosis" value="--" />
          </div>
          <div class="grid md-50 sm">
            <FormGroup type="plain" label="Clinical history" value="--" />
          </div>
        </div>
      </div>

    </div>
  </section>

  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard02 from '../../components/SpecialCard02';

export default {
  name: 'CaseBiopsyCompletePage',
  components: {
    Topnav,
    SpecialCard02
  },
  data() {
    return {
      userRole: 'Staff พยาธิวิทยา', /* User, Staff พยาธิวิทยา, Staff งานศพ */
      bags: [
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 2 },
        { value: 'Fallopian tube', valueCount: 2 },
        { value: 'Fallopian tube', valueCount: 2 },
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 4 }
      ],
      bagTotal: 34
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  }
}
</script>