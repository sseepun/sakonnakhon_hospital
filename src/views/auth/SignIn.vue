<template>
  <section class="auth-01 ai-center section-padding" style="background-image:url('/assets/img/bg/01.jpg');">
    <div class="container">
      <div class="ss-box" data-aos="fade-up" data-aos-delay="0">
        <h5 class="fw-600">โรงพยาบาลสกลนคร</h5>
        <h6 class="h3 fw-600 color-01">ระบบสารสนเทศทางการแพทย์</h6>
        <p class="h5 sm fw-200 color-gray">สำหรับกลุ่มงานพยาธิวิทยากายวิภาค</p>
        <div class="mt-1">
          <form action="/user/dashboard" method="GET" @submit="onSubmit">
            <div class="grids">
              <div class="grid sm-100">
                <FormGroup 
                  label="ชื่อผู้ใช้งาน" :classer="{ 'error': !isValid && !username }"
                  :value="username" @input="username = $event"
                  wrapperClass="prepend" icon="user.svg" 
                />
              </div>
              <div class="grid sm-100">
                <FormGroup 
                  label="รหัสผ่าน" type="password" :classer="{ 'error': !isValid && !password }"
                  :value="password" @input="password = $event"
                  wrapperClass="prepend password" icon="lock.svg" 
                />
              </div>
            </div>
            <div class="btns">
              <Button text="เข้าสู่ระบบ" type="submit" classer="btn-color-01 w-full" />
            </div>
          </form>
        </div>
        <div class="error text-center xs-no-br mt-4" :class="{ 'op-0': isValid }">
          ชื่อผู้ใช้งานและรหัสผ่านที่คุณป้อนไม่พบในระบบ <br>
          โปรดตรวจสอบและลองใหม่อีกครั้ง <br>
          หรือหากคุณลืมรหัสผ่าน กรุณาติดต่อผู้ดูแลระบบ
        </div>
      </div>
    </div>
  </section>
  <AuthFooter />
</template>

<script>
import FormGroup from '../../components/FormGroup';
import Button from '../../components/Button';
import AuthFooter from '../../components/AuthFooter';

export default {
  name: 'AuthSignInPage',
  components: {
    FormGroup,
    Button,
    AuthFooter
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  data() {
    return {
      isValid: true,
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(e) {
      if(!this.username || !this.password){
        this.isValid = false;
      }else{
        this.isValid = true;
        return true;
      }
      e.preventDefault();
    }
  }
}
</script>
