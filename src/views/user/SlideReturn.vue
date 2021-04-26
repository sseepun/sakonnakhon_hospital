<template>
  <Topnav :userRole="userRole" />

  <section class="section-full">
    <div class="container">

      <div class="section-header" data-aos="fade-up" data-aos-delay="0">
        <div class="btns mt-0">
          <a href="/user/slides" class="btn color-gray h-color-01">
            <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
            ย้อนกลับ
          </a>
        </div>
        <div class="header-wrapper">
          <div class="text-container d-flex ai-center">
            <h6 class="h3">ตรวจสอบการคืนสไลด์ / พาราฟินบล็อค</h6>
          </div>
          <div class="btns hide-mobile">
            <Button 
              type="submit" text="คืนสไลด์" 
              classer="btn-color-01" :prepend="true" icon="check-white.svg" 
            />
          </div>
          <div class="btns show-mobile">
            <Button type="submit" text="คืนสไลด์" classer="btn-color-01 btn-sm" />
          </div>
        </div>
      </div>

      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
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
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">คืนสไลด์</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">

          <div class="grid lg-25 md-1-3 xs-2-3">
            <FormGroup 
              type="text" label="*ชื่อผู้คืนสไลด์" placeholder="นายใจดี แสนสุข"
              :value="dataset.borrower" @input="dataset.borrower = $event" 
              :errorText="isValidated && !dataset.borrower? 'กรุณาระบุ': ''" 
              :classer="isValidated && !dataset.borrower? 'error': ''" 
            />
          </div>
          <div class="grid lg-25 md-1-3 xs-2-3">
            <FormGroup 
              type="text" label="*เบอร์โทร" placeholder="012-3456789"
              :value="dataset.borrowerPhone" @input="dataset.borrowerPhone = $event" 
              :errorText="isValidated && !dataset.borrowerPhone? 'กรุณาระบุ': ''" 
              :classer="isValidated && !dataset.borrowerPhone? 'error': ''" 
            />
          </div>
          <div class="grid lg-50 md-1-3">
            <FormGroup 
              type="select" label="*หน่วยงาน" name="department" 
              :options="[
                { value: 0, text: 'พยาธิวิทยา' },
              ]" 
              :value="dataset.department" @input="dataset.department = $event" 
              :errorText="isValidated && !dataset.department? 'กรุณาระบุ': ''" 
              :classer="isValidated && !dataset.department? 'error': ''" 
            />
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
  name: 'SlideReturnPage',
  components: {
    Topnav,
    SpecialCard02
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      dataset: {
        borrower: '',
        borrowerPhone: '',
        department: 0,
      }
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  }
}
</script>