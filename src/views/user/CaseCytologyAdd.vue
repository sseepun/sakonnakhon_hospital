<template>
  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" />

  <section class="section-full">
    <div class="container">

      <form action="/user/case-cytology-complete" method="GET">
        <div class="section-header" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/user/cases" class="btn color-gray h-color-01">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">ลงทะเบียนส่งตรวจเซลล์วิทยา</h6>
            </div>
            <div v-if="patientFound" class="btns hide-mobile">
              <Button 
                type="submit" text="บันทึกทะเบียน" 
                classer="btn-color-01" :prepend="true" icon="check-white.svg" 
              />
            </div>
            <div v-if="patientFound" class="btns show-mobile">
              <Button type="submit" text="บันทึก" classer="btn-color-01 btn-sm" />
            </div>
          </div>
        </div>
      </form>

      <div class="stripe stripe-warning section-px" data-aos="fade-up" data-aos-delay="150">
        <img src="/assets/img/icon/alert-yellow.svg" alt="Image Icon" />
        <p class="color-11">
          หมายเหตุ: กรุณาตรวจสอบข้อมูลให้ถูกต้องครบถ้วนก่อนการส่งข้อมูล เพื่อประโยชน์แก่ผู้ป่วยและแพทย์ผู้ทำการรักษา
        </p>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลผู้ป่วย</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <form action="/" method="GET" @submit="onSubmit">
          <div class="grids">
            <div class="grid xl-60 sm-100">
              <CheckboxSet 
                label="ประเภททะเบียน" name="radio_0" :value="1" :required="true"
                :options="[
                  { value: 1, text: 'ส่งตรวจวิเคราะห์เซลล์ Gynecology (CG) / Cell Block' },
                  { value: 2, text: 'ส่งตรวจวิเคราะห์เซลล์ Non-gynecology (C)' }
                ]"
              />
            </div>
            <div class="grid xl-40 sm-100">
              <CheckboxSet 
                label="ประเภทผู้ป่วย" name="radio_1" :value="1" :required="true" 
                @input="caseType = $event"
                :options="[
                  { value: 1, text: 'IPD' },
                  { value: 2, text: 'OPD' }
                ]"
              />
            </div>

            <div class="grid sm-100 mt-0">
              <div class="grids">
                <div class="grid xl-15 lg-20 sm-1-3 xs-2-3">
                  <FormGroup 
                    type="text" label="*HN" name="hn" :required="true" placeholder="1234567" 
                    :value="hn" @input="hn = $event"
                  />
                </div>
                <div class="grid xl-15 lg-20 sm-1-3 xs-2-3">
                  <FormGroup type="text" label="*AN" name="an" :required="true" placeholder="1234567" />
                </div>
                <div v-if="caseType == 2" class="grid xl-15 lg-20 sm-1-3 xs-2-3">
                  <FormGroup type="datepicker" label="*วันที่" name="case_date" :required="true" placeholder="01/01/2564" />
                </div>
                <div v-if="caseType == 2" class="grid xl-15 lg-20 sm-1-3 xs-2-3">
                  <FormGroup type="text" label="*ห้องตรวจ" name="room" :required="true" placeholder="1508" />
                </div>
                <div class="grid xl-15 lg-20 sm-25 xs-1-3">
                  <div class="form-group">
                    <label>&nbsp;</label>
                    <div class="btns mt-0">
                      <Button 
                        type="submit" text="ค้นหา" classer="btn-color-01" 
                        :prepend="true" icon="search-white.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="คำนำหน้า" :value="patientFound? 'นาย': '-'" />
            </div>
            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="ชื่อ นามสกุล" :value="patientFound? 'สงกรานต์ สุขุมมณีวงศ์': '-'" />
            </div>
            <div class="grid lg-20 md-1-3 xs-50">
              <FormGroup type="plain" label="เพศ" :value="patientFound? 'ชาย': '-'" />
            </div>
            <div class="grid lg-20 md-1-3 xs-50">
              <FormGroup type="plain" label="สัญชาติ" :value="patientFound? 'ไทย': '-'" />
            </div>
            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="หมายเลขบัตรประชาชน" :value="patientFound? '1-9698-00169-84-9': '-'" />
            </div>
            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="วันเดือนปีเกิด" :value="patientFound? '22/11/2528': '-'" />
            </div>
            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="อายุ" :value="patientFound? '33': '-'" />
            </div>
            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="สิทธิการรักษา" :value="patientFound? 'บัตรทอง': '-'" />
            </div>
            <div class="grid lg-40 md-1-3">
              <FormGroup type="plain" label="โรงพยาบาล" :value="patientFound? 'โรงพยาบาลสกลนคร': '-'" />
            </div>
            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="รหัสแพทย์" :value="patientFound? '1088052': '-'" />
            </div>
            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="แพทย์ผู้รักษา" :value="patientFound? 'นพ.ณรงค์ฤทธิ์ พรมบุรี': '-'" />
            </div>
            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="WARD" value="-" />
            </div>
            <div class="grid lg-20 md-1-3">
              <FormGroup type="plain" label="วันที่เก็บตัวอย่าง" :value="patientFound? '05/12/2563, 10:34': '-'" />
            </div>
            <div class="sep"></div>

            <div class="grid lg-30 md-40 xs-75">
              <FormGroup 
                type="datepicker" label="กำหนดวันที่รายงานผล (Due Date)" 
                name="date" placeholder="12/12/2563" wrapperClass="append"
                :append="true" icon="calendar.svg" 
                @input="selectedDate = $event" 
              />
            </div>
            <div class="grid lg-60 md-60 sm-100">
              <FormGroup type="text" label="หมายเหตุ" name="note" placeholder="กรุณากรอก" />
            </div>
          </div>
        </form>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          รายการสิ่งส่งตรวจ 
          <span class="color-01">(จำนวนถุงทั้งหมด {{bagTotal}} ถุง)</span>
        </p>
      </div>
      <div class="section-px section-py-grid border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div v-for="(bag, index) in bags" :key="index"
            class="grid xl-40 lg-50 md-2-3 sm-90"
          >
            <SpecialCard02 
              :itemIndex="index" :name="'bag_'+index" 
              :value="bag.value" @input="bag.value = $event" 
              :valueCount="bag.valueCount" @input-count="bagTotalChange(index, $event)" 
              @input-delete="deleteBagSection($event)"
            />
          </div>
          <div class="grid xl-40 lg-50 md-2-3 sm-90">
            <SpecialCard02 type="Add" @input-add="addBagSection()" />
          </div>
        </div>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div class="grid sm-100">
            <CheckboxSet 
              label="Site (ตำแหน่ง)" name="site" 
              :textInput="true" textInputPlaceholder="โปรดระบุ" 
              :value="1" 
              :options="[
                { value: 1, text: 'Right' },
                { value: 2, text: 'Left' },
                { value: 3, text: 'อื่นๆ' }
              ]"
            />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">Clinical Information</p>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div class="grid md-50 sm">
            <FormGroup type="text" label="Clinical diagnosis" name="diagnosis" placeholder="กรุณากรอก" />
          </div>
          <div class="grid md-50 sm">
            <FormGroup type="text" label="Clinical history" name="history" placeholder="กรุณากรอก" />
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Alert Popup -->
  <div class="popup-container" :class="{ 'active': notFoundAlert }">
    <div class="wrapper">
      <div class="close-filter" @click="notFoundAlert = !notFoundAlert"></div>
      <form action="/" method="GET" class="w-full"  @submit="onSubmitProfile">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="notFoundAlert = !notFoundAlert">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ไม่พบข้อมูลผู้ป่วย</h6>
              </div>
              <div class="btns">
                <Button 
                  text="เพิ่มข้อมูล" href="/user/case-cytology-custom-add"
                  classer="btn-color-01 hide-mobile" :prepend="true" icon="plus-white.svg" 
                />
                <Button 
                  text="เพิ่มข้อมูล" href="/user/case-cytology-custom-add"
                  classer="btn-color-01 btn-sm show-mobile"
                />
              </div>
            </div>
          </div>
          <div class="body pt-4 pb-5">
            <p class="color-gray">หมายเหตุ</p>
            <p class="mt-2">
              หมายเลขประจำตัวผู้ป่วยที่คุณค้นหาอาจจะ ไม่ถูกต้อง คุณสามารถ “ปิดหน้าต่าง” 
              เพื่อระบุหมายเลขประจำตัวผู้ป่วยใหม่อีกครั้ง หรือ ผู้ป่วยที่คุณต้องการหา อาจจะ ไม่มีข้อมูลในระบบ 
              คุณสามารถเพิ่มข้อมูลผู้ป่วยใหม่ โดยการคลิกที่ปุ่ม “เพิ่มข้อมูล”
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>

  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import CheckboxSet from '../../components/CheckboxSet';
import SpecialCard02 from '../../components/SpecialCard02';

export default {
  name: 'CaseCytologyAddPage',
  components: {
    Topnav,
    CheckboxSet,
    SpecialCard02
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 1,
      patientFound: false,
      notFoundAlert: false,
      hn: null,
      caseType: 1,
      selectedDate: new Date(),
      bags: [
        { value: '', valueCount: null }
      ],
      bagTotal: 0
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {
    onSubmit(e) {
      if(this.hn != '1234'){
        this.patientFound = false;
        this.notFoundAlert = true;
      }else{
        this.patientFound = true;
      }
      e.preventDefault();
    },
    addBagSection() {
      this.bags.push({ value: '', valueCount: null });
      return true;
    },
    bagTotalChange(index, val) {
      this.bagTotal += Number(val) - this.bags[index].valueCount;
      this.bags[index].valueCount = Number(val);
      return true;
    },
    deleteBagSection(index){
      var that = this;
      that.bagTotal = 0;
      that.bags = that.bags.filter(function(bag, i){
        if(i != index){
          that.bagTotal += Number(bag.valueCount);
          return true;
        }else{
          return false;
        }
      });
      return true;
    }
  }
}
</script>
