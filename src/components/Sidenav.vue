<template>
  <nav v-if="isAdmin()" class="sidenav" :class="{ 'active': isActive }">
    <div class="wrapper">
      <div class="filter" @click="isActive = !isActive"></div>
      <div class="menu-container">
        <div class="btn-toggle" @click="isActive = !isActive">
          <div class="hamburger sm" :class="{ 'active': isActive }">
            <div></div><div></div><div></div>
          </div>
        </div>
        <div class="scroll-wrapper">

          <div class="menu" :class="{ 'active': activeIndex==0 }">
            <a href="/admin">
              <div class="icon">
                <img src="/assets/img/icon/dashboard.svg" alt="Image Icon" />
              </div>
              <div class="text">Dashboard</div>
            </a>
          </div>
          <div class="menu" :class="{ 'active': activeIndex==1 }">
            <a href="/admin/users">
              <div class="icon">
                <img src="/assets/img/icon/user-settings.svg" alt="Image Icon" />
              </div>
              <div class="text">ตั้งค่าบัญชีผู้ใช้</div>
            </a>
          </div>
          <div class="menu" :class="{ 'active': activeIndex==2 }">
            <a href="/admin/data-settings">
              <div class="icon">
                <img src="/assets/img/icon/cog.svg" alt="Image Icon" />
              </div>
              <div class="text">ตั้งค่าข้อมูลหลัก</div>
            </a>
          </div>
          <div class="menu" :class="{ 'active': activeIndex==3 }">
            <a href="/admin/case-types">
              <div class="icon">
                <img src="/assets/img/icon/scalpel.svg" alt="Image Icon" />
              </div>
              <div class="text">ประเภทสิ่งส่งตรวจ</div>
            </a>
          </div>
          <div class="menu" :class="{ 'active': activeIndex==4 }">
            <a href="/admin/slide-settings">
              <div class="icon">
                <img src="/assets/img/icon/slide.svg" alt="Image Icon" />
              </div>
              <div class="text">ตั้งค่าแบบฟอร์มยืมสไลด์</div>
            </a>
          </div>
          <div class="menu" :class="{ 'active': activeIndex==5 }">
            <a href="/admin/products">
              <div class="icon">
                <img src="/assets/img/icon/shopping-bag.svg" alt="Image Icon" />
              </div>
              <div class="text">ตั้งค่าคลังสินค้า</div>
            </a>
          </div>
          <div class="menu" :class="{ 'active': activeIndex==6 }">
            <a href="/admin/survey-settings">
              <div class="icon">
                <img src="/assets/img/icon/survey.svg" alt="Image Icon" />
              </div>
              <div class="text">ตั้งค่าแบบสำรวจ</div>
            </a>
          </div>
          <div class="menu" :class="{ 'active': activeIndex==7 }">
            <a href="/admin/records">
              <div class="icon">
                <img src="/assets/img/icon/history.svg" alt="Image Icon" />
              </div>
              <div class="text">ประวัติการดำเนินการ</div>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidenav',
  props: {
    userRole: { type: String, default: 'User' },
    activeIndex: { type: Number, default: null }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    isAdmin() {
      if(this.userRole.indexOf('Admin') > -1){
        return true;
      }else{
        return false;
      }
    }
  }
}
</script>
