<template>
  <Topnav />

  <section class="section-full">
    <div class="container">
      <div class="tab-container">
        <div class="section-header" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/user/dashboard" class="btn color-gray h-color-01 disabled">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">รายการส่งตรวจ</h6>
            </div>
            <div class="btns hide-mobile">
              <Button href="#" text="ลงทะเบียนส่งตรวจเซลล์วิทยา" classer="btn-color-01 mr-3" :prepend="true" icon="plus-white.svg" />
              <Button href="#" text="ลงทะเบียนส่งตรวจชิ้นเนื้อ" classer="btn-color-02" :prepend="true" icon="plus-white.svg" />
            </div>
            <div class="btns show-mobile">
              <Button 
                text="ลงทะเบียน" classer="btn-color-01 btn-sm" :append="true" icon="chev-down-white.svg" 
                @clicked="isOpenedOptions = !isOpenedOptions"
              />
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 'รอดำเนินการ', 'กำลังดำเนินการ', 'ดำเนินการเสร็จสิ้น' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            Tab 0
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            Tab 1
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            Tab 2
          </div>

        </div>
      </div>
    </div>
  </section>

  <PopupOptions 
    :isOpenedOptions="isOpenedOptions" 
    @clicked="isOpenedOptions = !isOpenedOptions"
    :options="[
      { text: 'ลงทะเบียนส่งตรวจเซลล์วิทยา', icon: 'plus.svg', href: '#' },
      { text: 'ลงทะเบียนส่งตรวจชิ้นเนื้อ', icon: 'plus.svg', href: '#' }
    ]"
  />

  <Topnav :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import PopupOptions from '../../components/PopupOptions';
import Tabs01 from '../../components/Tabs01';

export default {
  name: 'UserCasesPage',
  components: {
    Topnav,
    PopupOptions,
    Tabs01
  },
  data() {
    return {
      isOpenedOptions: false
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  }
}
</script>
