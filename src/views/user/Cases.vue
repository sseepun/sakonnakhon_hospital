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
            <DataTable 
              :columns="columns1" :rows="rows1" 
              :search="[ 'sent_to', 'case_id', 'hn', 'name', 'thai_id' ]" 
              :orders="[
                { key: 'sent_date-desc', text: 'วันที่นำเข้า (ใหม่สุด)' },
                { key: 'sent_date-asc', text: 'วันที่นำเข้า (เก่าสุด)' },
              ]"
            />
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
import DataTable from '../../components/DataTable';

export default {
  name: 'UserCasesPage',
  components: {
    Topnav,
    PopupOptions,
    Tabs01,
    DataTable
  },
  data() {
    return {
      isOpenedOptions: false,
      columns1: [
        { key: 'sent_to', text: 'นำส่ง' },
        { key: 'sent_date', text: 'วันที่นำเข้า' },
        { key: 'case_id', text: 'ID Case' },
        { key: 'hn', text: 'HN' },
        { key: 'an', text: 'AN' },
        { key: 'name', text: 'ชื่อ นามสกุล' },
        { key: 'thai_id', text: 'เลขบัตรประชาชน' },
        { key: 'card', text: 'ใบส่งตรวจ' },
        { key: 'status', text: 'สถานะ' },
      ],
      rows1: []
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<22; i++){
      this.rows1.push({
        sent_to: { text: 'ชิ้นเนื้อ' },
        sent_date: { text: '05/12/2563, 10:34' },
        case_id: { text: 'FI63-01526' },
        hn: { text: '1088052' },
        an: { text: '1254454' },
        name: { text: 'สงกรานต์ สุขุมมณีวงศ์' },
        thai_id: { text: '1-9698-00169-84-9' },
        card: { text: 'S21-00001' },
        status: { text: 'รอรับเข้าบริการ' }
      });
      this.rows1.push({
        sent_to: { text: 'เซลล์วิทยา' },
        sent_date: { text: '20/11/2563, 14:05' },
        case_id: { text: 'FI63-07660' },
        hn: { text: '1005375' },
        an: { text: '1254445' },
        name: { text: 'นวรัตร์ ระเบียบธรรม' },
        thai_id: { text: '1-4505-53700-28-4' },
        card: { text: 'CG21-00001' },
        status: { text: 'รอรับเข้าบริการ' }
      });
    }

  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  }
}
</script>
