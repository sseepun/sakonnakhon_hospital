<template>
  <Topnav :userRole="userRole" :activeIndex="0" />
  <section class="auth-01 with-topnav section-padding" style="background-image:url('/assets/img/bg/01.jpg');">
    <div class="filter"></div>
    <div class="container pos-relative">
      <h6 class="h1 fw-400 color-white" data-aos="fade-up" data-aos-delay="0">
        Superb Anatomic Pathology
      </h6>
      <p class="h3 color-white fw-200" data-aos="fade-up" data-aos-delay="150">
        พยาธิวิทยากายวิภาค
      </p>
      <div class="grids mt-3" data-aos="fade-up" data-aos-delay="300">
        <div class="grid lg-1-3">
          <SpecialCard01 href="/user/cases" icon="lab-01.svg" text="ลงทะเบียนส่งตรวจ" />
        </div>
        <div class="grid lg-1-3">
          <SpecialCard01 href="/" icon="lab-02.svg" text="ลงทะเบียนส่งตรวจพิเศษ" />
        </div>
        <div class="sep"></div>
        <div class="grid lg-1-3">
          <SpecialCard01 href="/" icon="lab-03.svg" text="ผลตรวจทางพยาธิวิทยา" />
        </div>
        <div class="grid lg-1-3">
          <SpecialCard01 href="/" icon="lab-04.svg" text="Block/Slide" />
        </div>
        <div class="grid lg-1-3">
          <SpecialCard01 href="/" icon="lab-05.svg" text="แบบสำรวจความพึงพอใจ" />
        </div>
      </div>
    </div>
  </section>
  <AuthFooter />
  <Topnav :userRole="userRole" :activeIndex="0" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import AuthFooter from '../../components/AuthFooter';
import SpecialCard01 from '../../components/SpecialCard01';

export default {
  name: 'UserDashboardPage',
  components: {
    Topnav,
    AuthFooter,
    SpecialCard01
  },
  data() {
    return {
      userRole: 'Staff พยาธิวิทยา', /* User, Staff พยาธิวิทยา, Staff งานศพ */
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  }
}
</script>
