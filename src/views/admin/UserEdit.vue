<template>
  <Topnav :userRole="userRole" department="ผู้ดูแลระบบ" />
  <Sidenav :userRole="userRole" :activeIndex="sidenavActiveIndex" />

  <section class="section-full pull-right">
    <div class="container">
      <form action="/admin/users" method="GET">

        <div class="section-header" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/admin/users" class="btn color-gray h-color-01">
              <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
              ยกเลิก
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">แก้ไขผู้ใช้งาน</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                type="submit" text="บันทึก" 
                classer="btn-color-01" :prepend="true" icon="check-white.svg" 
              />
            </div>
            <div class="btns show-mobile">
              <Button 
                type="submit" text="บันทึก" 
                classer="btn-color-01 btn-sm"
              />
            </div>
          </div>
        </div>
      
        <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="150">
          <p class="fw-400">ข้อมูลส่วนตัว</p>
        </div>
        <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="150">
          <div class="grids">
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="text" label="รหัสประจำตัวผู้ใช้งาน" name="user_id" placeholder="00000" value="10123" />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="text" label="*ชื่อผู้ใช้งาน" name="username" placeholder="Username" :required="true" value="username101" />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="password" label="*รหัสผ่าน" name="password" :required="true" value="123456" />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="password" label="*ยืนยันรหัสผ่าน" name="conf_password" :required="true" value="123456" />
            </div>
            <div class="sep"></div>
            
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup
                type="select" label="คำนำหน้า" name="prefix" :value="3"
                :options="[
                  { value: 1, text: 'นาย' },
                  { value: 2, text: 'นาง' },
                  { value: 3, text: 'นางสาว' }
                ]"
              />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="text" label="*ชื่อ" name="firstname" :required="true" value="นันทวัน" />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="text" label="*นามสกุล" name="lastname" :required="true" value="หอมประเสริฐสุข" />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup
                type="select" label="*ตำแหน่ง" name="position" :value="position" :required="true"
                :options="[
                  { value: 1, text: 'พนักงานทั่วไป' },
                  { value: 2, text: 'แพทย์' }
                ]" 
                @input="position = $event"
              />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup 
                type="text" label="รหัสแพทย์" name="doctor_id" placeholder="00000" value="12457"
                :disabled="position != 2"
              />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup
                type="select" label="*โรงพยาบาล" name="hospital" :value="1" :required="true"
                :options="[
                  { value: 1, text: 'โรงพยาบาลสกลนคร' }
                ]"
              />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup
                type="select" label="*หน่วนงาน / แผนก" name="department" :value="1" :required="true"
                :options="[
                  { value: 1, text: 'พยาธิวิทยา' }
                ]"
              />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="text" label="หมายเลขโทรศัพท์แผนก" name="phone_department" placeholder="01-123456789" />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="email" label="*อีเมล" name="email" placeholder="sakonnakhon@mail.com" :required="true" value="nuntawon.jan@gmail.com" />
            </div>
            <div class="grid lg-20 md-1-3 xs-75">
              <FormGroup type="text" label="หมายเลขโทรศัพท์" name="phone" placeholder="012-3456789" :required="true" value="061-2125229" />
            </div>
          </div>
        </div>
        
        <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="300">
          <p class="fw-400">กำหนดสิทธิ์การใช้งาน</p>
        </div>
        <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="300">
          <div class="grids">
            <div class="grid sm-100">
              <CheckboxSet 
                label="*สิทธิ์การใช้งาน" name="role" :required="true" :value="roleId"
                :options="[
                  { value: 1, text: 'Admin' },
                  { value: 2, text: 'Head - Staff' },
                  { value: 3, text: 'Staff ชิ้นเนื้อ' },
                  { value: 4, text: 'Staff เซลล์' },
                  { value: 5, text: 'Staff งานศพ' },
                  { value: 6, text: 'User' }
                ]"
                @input="onRoleChange($event)"
              />
            </div>
            <div class="grid sm-100">
              <div class="bg-14 bradius-2 p-4">
                <CheckboxSet 
                  type="checkbox" label="" name="permissions[]" :value="permissions"
                  :options="[
                    { value: 1, text: 'ลงทะเบียนสิ่งส่งตรวจ' },
                    { value: 2, text: 'ลงทะเบียนสิ่งตรวจพิเศษ' },
                    { value: 3, text: 'ผลตรวจทางพยาธิวิทยา' },
                    { value: 4, text: 'ยืม Block/Slide' },
                    { value: 5, text: 'อนุมัติการยืม Block/Slide' },
                    { value: 6, text: 'ประเมินแบบสำรวจความพึงพอใจ' },
                    { value: 7, text: 'มอบหมายงาน' },
                    { value: 8, text: 'วินิจฉัยเซลล์' },
                    { value: 9, text: 'วินิจฉัยชิ้นเนื้อ' },
                    { value: 10, text: 'ตรวจสอบรายงานผลเซลล์' },
                    { value: 11, text: 'ตรวจสอบรายงานผลชิ้นเนื้อ' },
                    { value: 12, text: 'ลงชื่อเข้าทำงาน' },
                    { value: 13, text: 'การร้องเรียน' },
                    { value: 14, text: 'เพิ่มสินค้า' },
                    { value: 15, text: 'จัดการข้อมูลอุปกรณ์' },
                    { value: 16, text: 'ยืมสินค้า' },
                    { value: 17, text: 'เบิกสินค้า' },
                    { value: 18, text: 'คืนสินค้า' },
                    { value: 19, text: 'ลงทะเบียนรักษาศพ' },
                    { value: 20, text: 'รับศพเข้า' },
                    { value: 21, text: 'การจัดการศพ' }
                  ]"
                />
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
import Topnav from '../../components/Topnav';
import Sidenav from '../../components/Sidenav';
import FormGroup from '../../components/FormGroup';
import CheckboxSet from '../../components/CheckboxSet';

export default {
  name: 'AdminUserEditPage',
  components: {
    Topnav,
    Sidenav,
    FormGroup,
    CheckboxSet
  },
  data() {
    return {
      userRole: 'Admin', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      sidenavActiveIndex: 1,
      position: 2,
      roleId: 2,
      permissions: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
    this.onRoleChange(this.roleId);
  },
  methods: {
    onRoleChange(roleId) {
      this.roleId = roleId;
      if(roleId==1){
        this.permissions = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
        ];
      }else if(roleId==2){
        this.permissions = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
        ];
      }else if(roleId==3){
        this.permissions = [ 1, 2, 3, 4, 6, 9, 11, 12, 13, 15, 16, 17, 18 ];
      }else if(roleId==4){
        this.permissions = [ 1, 2, 3, 4, 6, 8, 10, 12, 13, 15, 16, 17, 18 ];
      }else if(roleId==5){
        this.permissions = [ 1, 2, 3, 4, 6, 12, 13, 15, 16, 17, 18, 19, 20, 21 ];
      }else if(roleId==6){
        this.permissions = [ 1, 2, 3, 4, 6, 12, 13, 19 ];
      }
    }
  }
}
</script>
