<template>
  <Topnav :userRole="userRole" />

  <section class="section-full">
    <div class="container">

      <div class="section-header" data-aos="fade-up" data-aos-delay="0">
        <div class="btns mt-0">
          <a href="/user/cases" class="btn color-gray h-color-01">
            <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
            ย้อนกลับ
          </a>
        </div>
        <div class="header-wrapper">
          <div class="text-container d-flex ai-center">
            <h6 class="h3">แก้ไขการลงทะเบียนส่งตรวจชิ้นเนื้อ</h6>
          </div>
          <div class="btns hide-mobile">
            <Button 
              type="submit" text="บันทึกทะเบียน" 
              classer="btn-color-01" :prepend="true" icon="check-white.svg" 
            />
          </div>
          <div class="btns show-mobile">
            <Button type="submit" text="บันทึก" classer="btn-color-01 btn-sm" />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลผู้ป่วย</p>
      </div>
      <div class="section-px section-py-grid pos-relative" style="z-index:1;" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">

          <div class="grid lg-60 md-1-3">
            <CheckboxSet 
              label="ประเภททะเบียน" name="radio_0" :value="1" :required="true"
              :options="[
                { value: 1, text: 'Surgical pathology (S)' },
                { value: 2, text: 'Frozen Selction (F)' },
                { value: 3, text: 'ส่งปรึกษา (CN)' }
              ]"
            />
          </div>
          <div class="grid lg-40 md-1-3">
            <CheckboxSet 
              label="ประเภททะเบียน" name="radio_1" :value="1" :required="true" 
              @input="caseType = $event"
              :options="[
                { value: 1, text: 'IPD' },
                { value: 2, text: 'OPD' }
              ]"
            />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup 
              type="text" label="*HN" name="hn"
              :value="2341345"
            />
          </div>
          <div class="grid lg-20 md-2-3">
            <FormGroup type="text" label="AN" value="1254454" />
          </div>
          <div class="grid lg-60">
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
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="คำนำหน้า" value="นางสาว" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อ นามสกุล" value="พัชราพร วัฒนาไพศาล" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="เพศ" value="หญิง" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="สัญชาติ" value="ไทย" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="หมายเลขบัตรประชาชน" value="1-2655-82345-18-2" />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="วันเดือนปีเกิด" value="12/12/2512" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="อายุ" value="11 เดือน 12 วัน" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="สิทธิการรักษา" value="ประกันสังคม" />
          </div>
          <div class="grid lg-40 md-1-3">
            <FormGroup type="plain" label="โรงพยาบาล" value="โรงพยาบาลสกลนคร" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="รหัสแพทย์" value="1232212" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="แพทย์ผู้รักษา" value="ภูผา ทิพย์ขจรเดช" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="WARD" value="Cohort Ward" />
          </div>
          <div class="grid lg-40 md-1-3">
            <FormGroup type="plain" label="วันที่เก็บตัวอย่าง" value="07/01/2564" />
          </div>
          
          <div class="grid lg-30 md-40 sm-100">
            <FormGroup 
              type="datepicker" label="*กำหนดวันที่รายงานผล (Due Date)"
              name="date" placeholder="12/12/2563" wrapperClass="append"
              :append="true" icon="calendar.svg" 
            />
          </div>
          <div class="grid lg-60 md-60 sm-100">
            <FormGroup type="text" label="หมายเหตุ" name="note" placeholder="กรุณากรอก" />
          </div>

        </div>
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
            class="grid xl-1-3 lg-50 md-60 sm-80"
          >
            <SpecialCard02 
              :itemIndex="index+1" :name="'bag_'+index" 
              :value="bag.value"  
              :valueCount="bag.valueCount" 
              @input="bag.value = $event"
              @input-count="bagTotalChange(index, $event)" 
              @input-delete="deleteBagSection($event)" 
              :errorText="isValidated && (!bag.value || !bag.valueCount)? 'กรุณาระบุ': ''"
            />
          </div>
        </div>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div class="grid sm-100">
            <CheckboxSet 
              label="Site (ตำแหน่ง)" name="site" 
              :textInput="true" textInputPlaceholder="โปรดระบุ" 
              :options="[
                { value: 1, text: 'Right' },
                { value: 2, text: 'Left' },
                { value: 3, text: 'อื่นๆ' }
              ]"
              :value="1"
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

  <Topnav :userRole="userRole" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard02 from '../../components/SpecialCard02';

export default {
  name: 'CaseBiopsyCompleteEditPage',
  components: {
    Topnav,
    SpecialCard02
  },
  data() {
    return {
      userRole: 'Staff พยาธิวิทยา', /* User, Staff พยาธิวิทยา, Staff งานศพ */
      bags: [
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 2 },
        { value: 'Fallopian tube', valueCount: 2 },
        { value: 'Fallopian tube', valueCount: 2 },
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 4 },
        { value: 'Fallopian tube', valueCount: 4 }
      ],
      bagTotal: 30
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  },
  methods: {
    bagTotalChange(index, val) {
      this.bagTotal += Number(val) - this.bags[index].valueCount;
      this.bags[index].valueCount = Number(val);
      return true;
    },
    deleteBagSection(index){
      var that = this;
      that.bagTotal = 0;
      that.bags = that.bags.filter(function(bag, i){
        if(i != index-1){
          that.bagTotal += Number(bag.valueCount);
          return true;
        }else{
          return false;
        }
      });
      return true;
    },
  }
}
</script>