<template>
  <Topnav :userRole="userRole" department="ผู้ดูแลระบบ" />
  <Sidenav :userRole="userRole" :activeIndex="sidenavActiveIndex" />

  <section class="section-full pull-right">
    <div class="container">
      <div class="section-header" data-aos="fade-up" data-aos-delay="0">
        <div class="btns mt-0">
          <a href="/user/dashboard" class="btn color-gray h-color-01 disabled">
            <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
            ย้อนกลับ
          </a>
        </div>
        <div class="header-wrapper">
          <div class="text-container">
            <h6 class="h3">Dashboard</h6>
          </div>
          <div class="btns">
            <select class="xs fw-500 color-01 bcolor-01">
              <option value="2564" selected>2564</option>
              <option value="2563">2563</option>
              <option value="2562">2562</option>
            </select>
          </div>
        </div>
      </div>
      <div class="section-px section-py">

        <div data-aos="fade-up" data-aos-delay="150">
          <p class="fw-500 color-gray">ภาพรวม</p>
          <div class="grids grid-mt">
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนรายการส่งตรวจ" :count="234" unit="งาน" 
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }"
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนรายการที่ลงทะเบียนส่งตรวจพิเศษ / ย้อมพิเศษ" :count="452" unit="งาน"
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }" 
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนผลตรวจทางพยาธิวิทยา" :count="567" unit="งาน"
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }" 
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนรายการขอยืมสไลด์ / พาราฟินบล็อค" :count="987" unit="งาน"
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }" 
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนผู้ที่ทำแบบสำรวจความพึงพอใจ" :count="23" unit="คน"
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }" 
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนรายการพยาธิวิทยา" :count="122" unit="รายการ"
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }" 
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนรายการงานรักษาและจำหน่ายศพ" :count="433" unit="รายการ"
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }" 
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนบุคลากร" :count="777" unit="คน"
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }" 
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนคลังสินค้าทั้งหมด" :count="1234" unit="รายการ"
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }" 
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="จำนวนครั้งที่คนภายนอกเข้ามาดูผลตรวจ" :count="1234" unit="ครั้ง"
                :options="{
                  view: { href: '#' },
                  edit: { href: '#' }
                }" 
              />
            </div>
          </div>
        </div>

        <div class="mt-6 pt-1" data-aos="fade-up" data-aos-delay="0">
          <p class="fw-500 color-gray">รายละเอียดเพิ่มเติม</p>
          <div class="grids grid-mt">
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="รอดำเนินการ" :count="23" unit="รายการ" 
                :cardSmall="true" classer="sm ss-card-warning"
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="กำลังดำเนินการ" :count="34" unit="รายการ" 
                :cardSmall="true" classer="sm ss-card-danger" 
              />
            </div>
            <div class="grid xl-25 lg-1-3">
              <SpecialCard03 
                label="ดำเนินการเสร็จสิ้น" :count="56" unit="รายการ" 
                :cardSmall="true" classer="sm ss-card-primary" 
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Topnav from '../../components/Topnav';
import Sidenav from '../../components/Sidenav';
import FormGroup from '../../components/FormGroup';
import SpecialCard03 from '../../components/SpecialCard03';

export default {
  name: 'AdminDashboardPage',
  components: {
    Topnav,
    Sidenav,
    FormGroup,
    SpecialCard03
  },
  data() {
    return {
      userRole: 'Admin', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      sidenavActiveIndex: 0
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  }
}
</script>
