<template>

  <nav v-if="isStaff() || !isBottom" class="topnav" :class="{ 'bottom': isBottom }">
    <div class="wrapper">
      <a v-if="(isStaff() || isAdmin()) && !isBottom" class="logo" href="/">
        <img src="/assets/img/logo.svg" alt="Logo" />
        <div class="text-container">
          <p class="color-02">โรงพยาบาลศูนย์สกลนคร</p>
          <p class="color-dark">Sakonnakhon Hospital</p>
        </div>
      </a>
      <div v-if="isStaff()" class="menu-container" :class="{ 'hide-mobile': !isBottom }">

        <div class="menu" :class="{ 'active': activeIndex==0 }">
          <a href="/user/dashboard">
            <div class="icon">
              <img src="/assets/img/icon/home.svg" alt="Image Icon" />
            </div>
            <div class="text">หน้าแรก</div>
          </a>
        </div>
        <div v-if="isStaffType1()" class="menu has-children" :class="{ 'active': activeIndex==1 }">
          <a href="#">
            <div class="icon">
              <img src="/assets/img/icon/layers.svg" alt="Image Icon" />
            </div>
            <div class="text">พยาธิวิทยา</div>
            <div class="chev">
              <img src="/assets/img/icon/chev-down.svg" alt="Image Icon" />
            </div>
          </a>
          <div class="dropdown">
            <div class="submenu">
              <a href="/user/cells">
                <div class="icon">
                  <img src="/assets/img/icon/sun.svg" alt="Image Icon" />
                </div>
                <div class="text">เซลล์วิทยา</div>
              </a>
            </div>
            <div class="submenu">
              <a href="/user/cases">
                <div class="icon">
                  <img src="/assets/img/icon/scalpel.svg" alt="Image Icon" />
                </div>
                <div class="text">ชิ้นเนื้อ</div>
              </a>
            </div>
          </div>
        </div>
        <div v-if="isStaffType2()" class="menu" :class="{ 'active': activeIndex==2 }">
          <a href="/user/funeral">
            <div class="icon">
              <img src="/assets/img/icon/tent.svg" alt="Image Icon" />
            </div>
            <div class="text">งานศพ</div>
          </a>
        </div>
        <div class="menu" :class="{ 'active': activeIndex==3 }">
          <a href="/user/teams">
            <div class="icon">
              <img src="/assets/img/icon/profile.svg" alt="Image Icon" />
            </div>
            <div class="text">บุคลากร</div>
          </a>
        </div>
        <div class="menu" :class="{ 'active': activeIndex==4 }">
          <a href="/user/inventory">
            <div class="icon">
              <img src="/assets/img/icon/box.svg" alt="Image Icon" />
            </div>
            <div class="text">คลังสินค้า</div>
          </a>
        </div>

      </div>
      <div v-if="!isBottom" class="options">
        <div class="option d-none">
          <a href="#">
            <img src="/assets/img/icon/bell.svg" alt="Image Icon" />
            <div v-if="alert" class="num">{{alert}}</div>
          </a>
        </div>
        <div class="option">
          <a href="javascript:">
            <div class="img-bg d-none" :style="'background-image:url(\''+profile+'\');'"></div>
            <div class="info text-right">
              <p class="name lh-sm">{{prefix}}{{firstname}} {{lastname}}</p>
              <p class="sm lh-xs">{{department}}</p>
            </div>
          </a>
          <div class="dropdown">
            <div class="submenu">
              <a href="javascript:" @click="isActivePopupProfile = !isActivePopupProfile">
                <div class="icon">
                  <img src="/assets/img/icon/edit.svg" alt="Image Icon" />
                </div>
                แก้ไขข้อมูลส่วนตัว
              </a>
            </div>
            <div class="submenu">
              <a href="javascript:" @click="isActivePopupPassword = !isActivePopupPassword">
                <div class="icon">
                  <img src="/assets/img/icon/lock.svg" alt="Image Icon" />
                </div>
                เปลี่ยนรหัสผ่าน
              </a>
            </div>
            <div class="submenu exit">
              <a href="/auth/signin">
                <div class="icon">
                  <img src="/assets/img/icon/exit.svg" alt="Image Icon" />
                </div>
                ออกจากระบบ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="topnav-spacer"></div>

  <!-- Popup Profile -->
  <div v-if="!isBottom" class="popup-container" :class="{ 'active': isActivePopupProfile }">
    <div class="wrapper">
      <div class="close-filter" @click="isActivePopupProfile = !isActivePopupProfile"></div>
      <form action="/" method="GET" class="w-full"  @submit="onSubmitProfile">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="isActivePopupProfile = !isActivePopupProfile">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">แก้ไขข้อมูลส่วนตัว</h6>
              </div>
              <div class="btns">
                <Button type="submit" text="บันทึก" classer="btn-color-01" :prepend="true" icon="check-white.svg" />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid lg-30">
                <FormGroup
                  label="คำนำหน้า" type="select" name="prefix" :value="prefix" :required="true"
                  :options="[ 
                    { value: 'นาย', text: 'นาย' }, 
                    { value: 'นาง', text: 'นาง' }, 
                    { value: 'น.ส.', text: 'น.ส.' }, 
                    { value: 'นพ.', text: 'นพ.' }
                  ]"
                />
              </div>
              <div class="sep"></div>
              <div class="grid sm-50">
                <FormGroup
                  label="ชื่อ" type="text" name="firstname" :value="firstname" :required="true"
                />
              </div>
              <div class="grid sm-50">
                <FormGroup
                  label="นามสกุล" type="text" name="lastname" :value="lastname" :required="true"
                />
              </div>
              <div class="grid sm-100">
                <FormGroup
                  label="อีเมล" type="email" name="email" :value="email"
                />
              </div>
              <div class="grid sm-100">
                <FormGroup
                  label="หมายเลขโทรศัพท์" type="text" name="phone" :value="phone"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  
  <!-- Popup Password -->
  <div v-if="!isBottom" class="popup-container" :class="{ 'active': isActivePopupPassword }">
    <div class="wrapper">
      <div class="close-filter" @click="isActivePopupPassword = !isActivePopupPassword"></div>
      <form action="/" method="GET" class="w-full"  @submit="onSubmitPassword">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="isActivePopupPassword = !isActivePopupPassword">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">เปลี่ยนรหัสผ่าน</h6>
              </div>
              <div class="btns">
                <Button type="submit" text="บันทึก" classer="btn-color-01" :prepend="true" icon="check-white.svg" />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid sm-100">
                <FormGroup
                  label="รหัสผ่านเดิม" type="password" name="password" 
                  :value="reenterPassword" @input="reenterPassword = $event" 
                  :classer="isValidPassword && passwordErrorText? 'error': ''" 
                  :errorText="isValidPassword && passwordErrorText? passwordErrorText: ''"
                />
              </div>
              <div class="grid sm-100">
                <FormGroup 
                  label="รหัสผ่านใหม่" type="password" name="new_password" 
                  :value="newPassword" @input="newPassword = $event" 
                  :classer="isValidPassword && newPasswordErrorText? 'error': ''" 
                  :errorText="isValidPassword && newPasswordErrorText? newPasswordErrorText: ''"
                />
              </div>
              <div class="grid sm-100">
                <FormGroup 
                  label="ยืนยันรหัสผ่าน" type="password" name="conf_password" 
                  :value="confPassword" @input="confPassword = $event" 
                  :classer="isValidPassword && confPasswordErrorText? 'error': ''" 
                  :errorText="isValidPassword && confPasswordErrorText? confPasswordErrorText: ''"
                />
              </div>
            </div>
            <p class="color-gray mt-3">
              หากไม่สามารถระบุรหัสผ่านเดิมได้ กรุณาติดต่อผู้ดูแลระบบ
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import FormGroup from './FormGroup';
import Button from './Button';

export default {
  name: 'Topnav',
  components: [
    FormGroup,
    Button
  ],
  data() {
    return {
      isActivePopupProfile: false,

      isActivePopupPassword: false,
      isValidPassword : false,
      password: '1234',
      reenterPassword: '',
      newPassword: '',
      confPassword: '',
      passwordErrorText: '',
      newPasswordErrorText: '',
      confPasswordErrorText: '',
    }
  },
  props: {
    userRole: { type: String, default: 'User' },
    isBottom: { type: Boolean, default: false },
    activeIndex: { type: Number, default: null },
    profile: { type: String, default: '/assets/img/misc/profile-01.svg' },
    prefix: { type: String, default: 'นพ.' },
    firstname: { type: String, default: 'ณรงค์ฤทธิ์' },
    lastname: { type: String, default: 'พรมบุรี' },
    department: { type: String, default: 'เซลล์วิทยา' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    alert: { type: Number, default: 2 },
  },
  methods: {

    isStaff() {
      if(this.userRole.indexOf('Staff') > -1){
        return true;
      }else if(this.userRole == 'Super User'){
        return true;
      }else{
        return false;
      }
    },
    isStaffType1() {
      if(this.isStaff() && this.userRole.indexOf('พยาธิวิทยา') > -1){
        return true;
      }else if(this.userRole == 'Super User'){
        return true;
      }else{
        return false;
      }
    },
    isStaffType2() {
      if(this.isStaff() && this.userRole.indexOf('งานศพ') > -1){
        return true;
      }else if(this.userRole == 'Super User'){
        return true;
      }else{
        return false;
      }
    },
    isAdmin() {
      if(this.userRole.indexOf('Admin') > -1){
        return true;
      }else{
        return false;
      }
    },

    onSubmitProfile(e) {
      this.isActivePopupProfile = false;
      e.preventDefault();
    },

    onSubmitPassword(e) {
      this.isValidPassword = true;
      this.passwordErrorText = '';
      this.newPasswordErrorText = '';
      this.confPasswordErrorText = '';

      var isValid = true;
      
      if(this.password != this.reenterPassword){
        isValid = false; this.passwordErrorText = 'ระบุรหัสผ่านเดิมผิด';
      }
      if(this.newPassword != this.confPassword){
        isValid = false; this.confPasswordErrorText = 'ยืนยันรหัสผ่านไม่ตรงกับรหัสผ่านใหม่';
      }

      if(!this.reenterPassword){
        isValid = false; this.passwordErrorText = 'กรุณาระบุ';
      }
      if(!this.newPassword){
        isValid = false; this.newPasswordErrorText = 'กรุณาระบุ';
      }
      if(!this.confPassword){
        isValid = false; this.confPasswordErrorText = 'กรุณาระบุ';
      }

      if(isValid){
        this.isActivePopupPassword = false;
        this.isValidPassword = false;
        this.reenterPassword = '';
        this.newPassword = '';
        this.confPassword = '';
      }

      e.preventDefault();
    }

  }
}
</script>
