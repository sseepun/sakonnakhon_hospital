<template>
  <Topnav :userRole="userRole" />

  <section class="section-full">
    <div class="container">
      <form action="/user/slides" method="GET">
        <div class="section-header" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/user/slides" class="btn color-gray h-color-01">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container d-flex ai-center">
              <h6 class="h3">รายละเอียดการยืมสไลด์ / พาราฟินบล็อค</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                text="ไม่อนุมัติการยืม" href="/user/slides" 
                classer="btn-color-06 mr-3" :prepend="true" icon="cross-white.svg" 
              />
              <Button 
                type="submit" text="อนุมัติการยืม"
                classer="btn-color-01" :prepend="true" icon="check-white.svg" 
              />
            </div>
            <div class="btns ws-nowrap show-mobile">
              <Button text="ไม่อนุมัติ" href="/user/slides" classer="btn-color-06 btn-sm mr-1" />
              <Button type="submit" text="อนุมัติ" classer="btn-color-01 btn-sm" />
            </div>
          </div>
        </div>

        <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="150">
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
      </form>
    </div>
  </section>

  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard02 from '../../components/SpecialCard02';

export default {
  name: 'SlideApprovePage',
  components: {
    Topnav,
    SpecialCard02
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  }
}
</script>