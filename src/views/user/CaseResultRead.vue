<template>
  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" />

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
          <div class="text-container">
            <span class="h3">
              ประวัติการวินิจฉัย
            </span>
            <span class="ss-sep hide-mobile"></span>
            <span class="ss-tag">ด่วน</span>
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลผู้ป่วย</p>
      </div>
      <div class="section-px section-py-grid pos-relative" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="รหัสใบส่งตรวจ" value="CG20-00001" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="HN" value="CG20-00001" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="AN" value="-" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="วันที่เก็บตัวอย่าง" value="04/11/2563" />
          </div>
          <div class="grid lg-20 md-2-3">
            <FormGroup type="plain" label="ห้องตรวจ" value="สูตินรีเวช" />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อผู้ป่วย" value="ณรงค์ฤทธิ์ พรมบุรี" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ประเภทผู้ป่วย" value="ผู้ป่วยนอก (OPD)" />
          </div>
          <div class="grid lg-60 md-1-3">
            <FormGroup type="plain" label="สิทธิ" value="UC นักเรียน/นักเรียนทหาร/ทหารเกณฑ์" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="รหัสแพทย์" value="47109" />
          </div>
          <div class="grid lg-80 md-2-3">
            <FormGroup type="plain" label="ชื่อแพทย์" value="พญ. สุพิภัทฎิพร มานะ" />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="หน่วยงานที่ส่ง" value="-" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="เบอร์โทรหน่วยงาน" value="-" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อเจ้าหน้าที่ผู้ประสานงาน" value="-" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="เบอร์โทรผู้ประสานงาน" value="-" />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-2" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          สิ่งตรวจ 
        </p>
      </div>
      <div class="section-px section-py-grid pos-relative" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">

          <div class="grid lg-40 md-1-3">
            <FormGroup type="plain" label="ผู้รับสิ่งส่งตรวจ / ผู้รับผิดชอบ" value="นางสาว นันทวัน หอมประเสริฐสุข" />
          </div>
          <div class="grid lg-60 md-1-3">
            <FormGroup type="plain" label="วันที่รับสิ่งส่งตรวจ" value="04/11/2563" />
          </div>

          <div class="grid lg-40 md-1-3">
            <FormGroup type="plain" label="จำนวน Slide (s)" value="10" />
          </div>
          <div class="grid lg-60 md-1-3">
            <FormGroup type="plain" label="Fixation" value="alcohol, Air-dried" />
          </div>

          <div class="grid lg-40 md-2-3">
            <FormGroup type="plain" label="จำนวน Containers" value="10" />
          </div>
          <div class="grid lg-60 md-1-3">
            <FormGroup type="plain" label="Fluid (ml)" value="200 Turbid" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="Color" value="Yellow" />
          </div>
          <div class="grid sm-100">
            <FormGroup type="plain" label="Site (ตำแหน่ง)" value="Right" />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-2" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">การวินิจฉัย</p>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="0">
        <div class="header-wrapper mt-5">
          <div class="text-container">
            <span class="h3">
              Step 5 รายงานผล
            </span>
            <span class="ss-sep hide-mobile"></span>
            <span class="ss-tag">P63-1</span>
          </div>
        </div>
        <div class="mt-5">
          <h6 class="p text-md">Cytopathology Report</h6>
          <p class="color-gray">Department of Anatomical Pathnology, Sakon Nakhon Hospital</p>
          <div class="border-bottom bg-sgray mt-4"></div>
          <div class="grids">
            <div class="grid lg-20 md-1-3 sm">
              <FormGroup type="plain" label="ชื่อ นามสกุล" value="ณรงค์ฤทธิ์ พรมบุรี" />
            </div>
            <div class="grid lg-20 md-1-3 sm">
              <FormGroup type="plain" label="HN" value="ผู้ป่วยนอก (IPD)" />
            </div>
            <div class="grid lg-60 md-1-3 sm">
              <FormGroup type="plain" label="Surgical Number" value="Surgical Number" />
            </div>
            <div class="grid lg-20 md-1-3 sm">
              <FormGroup type="plain" label="วันเกิด" value="04/11/2540" />
            </div>
            <div class="grid lg-20 md-1-3 sm">
              <FormGroup type="plain" label="อายุ" value="23" />
            </div>
            <div class="grid lg-60 md-1-3 sm">
              <FormGroup type="plain" label="เพศ" value="หญิง" />
            </div>
            <div class="grid lg-20 md-1-3 sm">
              <FormGroup type="plain" label="แพทย์ผู้ส่งตรวจ" value="พญ. สุพิภัทฎิพร มานะ" />
            </div>
            <div class="grid lg-80 md-2-3 sm">
              <FormGroup type="plain" label="วันที่ผ่าตัด" value="04/11/2563" />
            </div>
            <div class="grid lg-20 md-1-3 sm">
              <FormGroup type="plain" label="พยาธิแพทย์" value="นายเตธนันท์ วงศ์ปรีชาโชค" />
            </div>
            <div class="grid lg-80 md-2-3 sm">
              <FormGroup type="plain" label="วันที่รับชิ้นเนื้อ" value="04/11/2563" />
            </div>
          </div>
          <div class="sep bg-sgray mt-4"></div>
          
          <div class="grids">
            <div class="grid lg-60 sm-100 mt-0">
              <div class="grids">
                 <div class="grid sm-100">
                    <p class="color-gray">Specimen</p>
                    <p class="color-black mt-2">
                      Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent.
                    </p>
                  </div>

                  <div class="grid sm-100">
                    <p class="color-gray">Site</p>
                    <p class="color-black mt-2">
                      Potenti hac fringilla enim non malesuada cras senectus tristique arcu. Lorem volutpat, nec, faucibus tincidunt neque porttitor sagittis. Purus venenatis congue dui scelerisque amet aenean.
                    </p>
                  </div>

                  <div class="grid sm-100">
                    <p class="color-gray">Specimen adequacy</p>
                    <p class="color-black mt-2">
                      Cras aliquam ac nulla magna dui, purus in id. Turpis ac odio nunc, odio. Eget vitae amet.
                    </p>
                  </div>

                  <div class="grid sm-100">
                    <p class="color-gray">Diagnosis</p>
                    <p class="color-black mt-2">
                      Dignissim bibendum eget fusce neque, dictum et ullamcorper. Tincidunt et lacinia lacus facilisis tincidunt vel tellus pellentesque sed. Ut arcu, facilisis praesent consectetur pulvinar duis tellus felis. Tellus diam cras ultrices ornare malesuada. Pellentesque a diam nullam bibendum dictumst nunc, ipsum urna. Feugiat sollicitudin neque arcu sed sed nulla. Eget varius suspendisse elit sed.
                    </p>
                  </div>

                  <div class="grid sm-100">
                    <p class="color-gray">Cytology description</p>
                    <p class="color-black mt-2">
                      Malesuada nec morbi aenean diam lacus. Integer cursus ut eleifend in mattis placerat amet, id. Sed odio dolor, lacus semper urna, mauris. Ultrices aliquam augue et nisl, malesuada pellentesque. Convallis aliquam euismod quis vel.
                    </p>
                  </div>

                  <div class="grid sm-100">
                    <p class="color-gray">Category</p>
                    <p class="color-black mt-2">
                      Eget accumsan dis nisl.
                    </p>
                  </div>

                  <div class="grid sm-100">
                    <p class="color-gray">ICD-O</p>
                    <p class="color-black mt-2">
                      Hac sapien felis duis volutpat. In ac volutpat amet massa in porttitor nunc.
                    </p>
                  </div>

              </div>
             
            </div>

            <div class="grid lg-40 sm-100 mt-0">
              <!-- Todo -->
            </div>
            
            <div class="grid lg-100 sm-100">
              <p class="color-01">Electrically Signed by</p>
              <p class="color-black mt-3">นายเตธนันท์ วงศ์ปรีชาโชติ (Pathologist)</p>
            </div>

            <div class="grid sm-100 mt-0">
              <div class="grids">
                <div class="grid lg-1-3 sm-100">
                  <p class="color-01">Consult/Double check</p>
                  <p class="color-black mt-3">นพ. นันทวัน หอมประเสริฐสุข (Cytotechnologist)</p>
                </div>
                <div class="grid lg-1-3 sm-50">
                  <p class="color-gray">สถานะ</p>
                  <p class="color-black mt-3">รอ Consult ตรวจสอบ</p>
                </div>
                <div class="grid lg-1-3 sm-50">
                  <p class="color-gray">วันที่รายงานผล</p>
                  <p class="color-black mt-3">04/11/2563</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>

    </div>
  </section>

  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard02 from '../../components/SpecialCard02';

export default {
  name: 'CaseResultReadPage',
  components: {
    Topnav,
    SpecialCard02
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 1
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  }
}
</script>
