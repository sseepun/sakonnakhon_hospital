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
          <div class="text-container pr-2">
            <span class="h3">
              วินิจฉัยเซลล์
            </span>
            <span class="ss-sep hide-mobile"></span>
            <span v-if="stepActiveIndex == 1" class="ss-tag">เตรียมสไลด์</span>
            <span v-else-if="stepActiveIndex == 2" class="ss-tag ss-tag-danger">ย้อมสี</span>
            <span v-else-if="stepActiveIndex == 3" class="ss-tag ss-tag-purple">Screening</span>
            <span v-else-if="stepActiveIndex == 4" class="ss-tag">แปลผล</span>
            <span v-else-if="stepActiveIndex == 5" class="ss-tag ss-tag-info">รายงานผล</span>
            <span v-else class="ss-tag ss-tag-warning">รอวินิจฉัย</span>
            
          </div>
        </div>
      </div>

      <div class="stripe stripe-warning section-px" data-aos="fade-up" data-aos-delay="150">
        <img src="/assets/img/icon/alert-yellow.svg" alt="Image Icon" />
        <p class="color-11">
          หมายเหตุ: กรุณาตรวจสอบข้อมูลให้ถูกต้องครบถ้วนก่อนการส่งข้อมูล เพื่อประโยชน์แก่ผู้ป่วยและแพทย์ผู้ทำการรักษา
        </p>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray mt-4" data-aos="fade-up" data-aos-delay="150">
        <p class="fw-400">ข้อมูลผู้ป่วย</p>
      </div>
      <div class="section-px section-py-grid" data-aos="fade-up" data-aos-delay="150">
        <div class="grids">
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="รหัสใบส่งตรวจ" value="CG20-00001" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="HN" value="1088052" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="AN" value="1254454" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ห้องตรวจ" value="สูตินรีเวช" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="วันที่เก็บตัวอย่าง" value="06/01/2638," />
          </div>

          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อผู้ป่วย" value="ณรงค์ฤทธิ์ พรมบุรี" />
          </div>
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ประเภทผู้ป่วย" value="ผู้ป่วยนอก (IPD)" />
          </div>
          <div class="grid lg-60 md-1-3">
            <FormGroup type="plain" label="สิทธิการรักษา" value="สวัสดิการข้าราชการ" />
          </div>
          
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ชื่อแพทย์" value="พญ. สุพิภัทฎิพร มานะ" />
          </div>
          <div class="grid lg-80 md-1-3">
            <FormGroup type="plain" label="รหัสแพทย์" value="47109" />
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

      <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          สิ่งตรวจ
        </p>
      </div>
      <div class="section-px section-py-grid border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <div class="grids">
          <div class="grid lg-20 md-1-3">
            <FormGroup type="plain" label="ผู้รับสิ่งส่งตรวจ / ผู้รับผิดชอบ" value="นายเตธนันท์ วงศ์ปรีชาโชค" />
          </div>
          <div class="grid lg-80 md-2-3">
            <FormGroup type="plain" label="วันที่รับสิ่งส่งตรวจ" value="04/11/2563" />
          </div>
          <div class="grid lg-20 md-1-3 xs-75">
            <FormGroup type="text" label="*จำนวน Slide (s)" placeholder="ระบุจำนวน" />
          </div>
          <div class="grid lg-80 md-2-3">
            <CheckboxSet 
              label="Fixation" name="fixation" 
              :value="1" 
              :options="[
                { value: 1, text: 'Alcohol' },
                { value: 2, text: 'Air-dried' },
              ]"
            />
          </div>
          <div class="grid lg-20 md-1-3 xs-75">
            <FormGroup type="text" label="จำนวน Containers" placeholder="ระบุจำนวน" />
          </div>
          <div class="grid lg-80 sm-100">
            <FormGroup
            :type="'text-select'" :name2="'fluid'"
            label="Fluid (ml)" placeholder="ระบุจำนวน"
            :selectOptions="[
            { value: 1, text: 'Clear' },
            { value: 2, text: 'Turbid' },
            ]"  
          />

          </div>
          <div class="grid sm-100">
            <CheckboxSet 
              label="*Color" name="color" 
              :value="dataset.color" 
              :options="[
                { value: 1, text: 'Bloody' },
                { value: 2, text: 'Yellow' },
                { value: 3, text: 'Green/ Green-yellow' },
                { value: 4, text: 'Mucous' },
                { value: 5, text: 'Brown' },
                { value: 6, text: 'Brown-black' },
                { value: 7, text: 'อื่นๆ' },
              ]"
              @input="dataset.color = $event"
              :textInput="true"
              :textInputPlaceholder="'โปรดระบุ'"
              :textInputDisabled="dataset.color != 7"
            />
          </div>
        </div>
      </div>

      <div class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          การวินิจฉัย
        </p>
      </div>
      <div class="tab-container mt-5 mb-5" data-aos="fade-up" data-aos-delay="0">
        <div class="section-px">
          <Step01 :activeIndex="stepActiveIndex" />
        </div>
        <div class="tab-contents border-bottom bcolor-fgray pb-6 mt-6 mb-6">

          <div class="tab-content" :class="stepActiveIndex == 1? 'active': ''">
            <div class="section-px">
              <div class="p fw-400">
                Step 1
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">CG20-00001</span>
              </div>
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
              <div class="btns text-right">
                <Button 
                  text="พิมพ์สติ๊กเกอร์" href="#" 
                  classer="btn-color-09 mr-3  hide-mobile" :prepend="true" icon="printer.svg" 
                />
                <Button 
                  text="ขั้นตอนต่อไป" @click="stepActiveIndex=stepActiveIndex+1"
                  classer="btn-color-01" :prepend="true" icon="arrow-right-white.svg" 
                />
              </div>
            </div>
          </div>

          <div class="tab-content" :class="stepActiveIndex == 2? 'active': ''">
            <div class="section-px">
              <div class="p fw-400">
                Step 2
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">CG20-00001</span>
              </div>
              <div class="grids">
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Specimen Type" placeholder="บรรยาย..." />
                </div>
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Location" placeholder="บรรยาย..." />
                </div>
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Diagnosis" placeholder="บรรยาย..." />
                </div>
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Microscopic Description" placeholder="บรรยาย..." />
                </div>
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Category" placeholder="บรรยาย..." />
                </div>
                <div class="grid md-50">
                  <FormGroup 
                    type="file" name="file" label="Microscopie Picture" 
                    :icon="'upload.svg'"
                  />
                </div>
              </div>
              <div class="btns text-right">
                <Button 
                  text="กลับ" @click="stepActiveIndex=stepActiveIndex-1"
                  classer="btn-color-09 mr-3" :prepend="true" icon="arrow-left-green.svg" 
                />
                <Button 
                  text="ขั้นตอนต่อไป" @click="stepActiveIndex=stepActiveIndex+1"
                  classer="btn-color-01" :prepend="true" icon="arrow-right-white.svg" 
                />
              </div>
            </div>
          </div>

          <div class="tab-content" :class="stepActiveIndex == 3? 'active': ''">
            <div class="section-px">
              <div class="p fw-400">
                Step 3 Screening
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">CG20-00001</span>
              </div>
              <div class="pt-5 pb-5 border-bottom bcolor-sgray">
                <p>Cytopathology Report</p>
                <p class="color-sgray">Department of Anatomical Pathnology, Sakon Nakhon Hospital</p>
              </div>
              <div class="grids pb-5 border-bottom bcolor-sgray">
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="ชื่อ นามสกุล" value="ณรงค์ฤทธิ์ พรมบุรี" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="HN" value="ผู้ป่วยนอก (IPD)" />
                </div>
                <div class="grid lg-60 md-1-3">
                  <FormGroup type="plain" label="Surgical Number" value="P63-1" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="วันเกิด" value="04/11/2540" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="อายุ" value="23" />
                </div>
                <div class="grid lg-60 md-1-3">
                  <FormGroup type="plain" label="เพศ" value="หญิง" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="แพทย์ผู้ส่งตรวจ" value="พญ. สุพิภัทฎิพร มานะ" />
                </div>
                <div class="grid lg-80 md-1-3">
                  <FormGroup type="plain" label="วันที่ผ่าตัด" value="04/11/2563" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="พยาธิแพทย์" value="นายเตธนันท์ วงศ์ปรีชาโชค" />
                </div>
                <div class="grid lg-80 md-1-3">
                  <FormGroup type="plain" label="วันที่รับชิ้นเนื้อ" value="04/11/2563" />
                </div>
              </div>
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
                  <div class="grids">
                    <div class="grid sm-100">
                      <p class="color-gray">Microscopie Picture</p>
                    </div>
                  </div>
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
                    <div class="grid lg-20 sm-50">
                      <FormGroup 
                        type="select" label="สถานะ" name="status" 
                        :options="[
                          { value: 1, text: 'รอ Consult ตรวจสอบ' },
                          { value: 2, text: 'ส่ง Consult' },
                          { value: 3, text: 'Complete' }
                        ]"
                        :value="1"
                      />
                    </div>
                    <div class="grid lg-20 sm-50">
                      <FormGroup 
                        type="datepicker" label="วันที่รายงานผล" 
                        name="date" placeholder="04/11/2563" wrapperClass="append"
                        :append="true" icon="calendar.svg" 
                      />
                    </div>
                    <div class="grid lg-20 sm-50">
                      <FormGroup 
                        type="text" label="เวลา" name="time" placeholder="12:02:12"
                      />
                    </div>
                  </div>

                </div>
              </div>
              <div class="btns text-right">
                <Button 
                  text="กลับ" @click="stepActiveIndex=stepActiveIndex-1"
                  classer="btn-color-09 mr-3" :prepend="true" icon="arrow-left-green.svg" 
                />
                <Button 
                  text="ขั้นตอนต่อไป" @click="stepActiveIndex=stepActiveIndex+1"
                  classer="btn-color-01" :prepend="true" icon="arrow-right-white.svg" 
                />
              </div>
            </div>
          </div>

          <div class="tab-content" :class="stepActiveIndex == 4? 'active': ''">
            <div class="section-px">
              <div class="p fw-400">
                Step 4 แปลผล
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">CG20-00001</span>
              </div>
              <div class="pt-5 pb-5 border-bottom bcolor-sgray">
                <p>Cytopathology Report</p>
                <p class="color-sgray">Department of Anatomical Pathnology, Sakon Nakhon Hospital</p>
              </div>
              <div class="grids pb-5 border-bottom bcolor-sgray">
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="ชื่อ นามสกุล" value="ณรงค์ฤทธิ์ พรมบุรี" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="HN" value="ผู้ป่วยนอก (IPD)" />
                </div>
                <div class="grid lg-60 md-1-3">
                  <FormGroup type="plain" label="Surgical Number" value="P63-1" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="วันเกิด" value="04/11/2540" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="อายุ" value="23" />
                </div>
                <div class="grid lg-60 md-1-3">
                  <FormGroup type="plain" label="เพศ" value="หญิง" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="แพทย์ผู้ส่งตรวจ" value="พญ. สุพิภัทฎิพร มานะ" />
                </div>
                <div class="grid lg-80 md-1-3">
                  <FormGroup type="plain" label="วันที่ผ่าตัด" value="04/11/2563" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="พยาธิแพทย์" value="นายเตธนันท์ วงศ์ปรีชาโชค" />
                </div>
                <div class="grid lg-80 md-1-3">
                  <FormGroup type="plain" label="วันที่รับชิ้นเนื้อ" value="04/11/2563" />
                </div>
              </div>
              <div class="grids">
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Specimen Type" 
                    value="Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent." 
                  />
                </div>
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Location"
                    value="Potenti hac fringilla enim non malesuada cras senectus tristique arcu. Lorem volutpat, nec, faucibus tincidunt neque porttitor sagittis. Purus venenatis congue dui scelerisque amet aenean. " 
                  />
                </div>
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Diagnosis"
                    value="Cras aliquam ac nulla magna dui, purus in id. Turpis ac odio nunc, odio. Eget vitae amet." 
                  />
                </div>
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Microscopic Description"
                    value="Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent." 
                  />
                </div>
                <div class="grid md-50">
                  <FormGroup type="textarea" label="Category"
                    value="Malesuada nec morbi aenean diam lacus. Integer cursus ut eleifend in mattis placerat amet, id. Sed odio dolor, lacus semper urna, mauris. Ultrices aliquam augue et nisl, malesuada pellentesque. Convallis aliquam euismod quis vel." 
                  />
                </div>
                <div class="grid md-50">
                  <FormGroup 
                    type="file" name="file" label="Microscopie Picture" 
                    :icon="'upload.svg'"
                  />
                </div>
              </div>
              <div class="btns text-right">
                <Button 
                  text="กลับ" @click="stepActiveIndex=stepActiveIndex-1"
                  classer="btn-color-09 mr-3" :prepend="true" icon="arrow-left-green.svg" 
                />
                <Button 
                  text="ขั้นตอนต่อไป" @click="stepActiveIndex=stepActiveIndex+1"
                  classer="btn-color-01" :prepend="true" icon="arrow-right-white.svg" 
                />
              </div>
            </div>
          </div>

          <div class="tab-content" :class="stepActiveIndex == 5? 'active': ''">
            <div class="section-px">
              <div class="p fw-400">
                Step 5 รายงาน
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">CG20-00001</span>
              </div>
              <div class="pt-5 pb-5 border-bottom bcolor-sgray">
                <p>Cytopathology Report</p>
                <p class="color-sgray">Department of Anatomical Pathnology, Sakon Nakhon Hospital</p>
              </div>
              <div class="grids pb-5 border-bottom bcolor-sgray">
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="ชื่อ นามสกุล" value="ณรงค์ฤทธิ์ พรมบุรี" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="HN" value="ผู้ป่วยนอก (IPD)" />
                </div>
                <div class="grid lg-60 md-1-3">
                  <FormGroup type="plain" label="Surgical Number" value="P63-1" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="วันเกิด" value="04/11/2540" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="อายุ" value="23" />
                </div>
                <div class="grid lg-60 md-1-3">
                  <FormGroup type="plain" label="เพศ" value="หญิง" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="แพทย์ผู้ส่งตรวจ" value="พญ. สุพิภัทฎิพร มานะ" />
                </div>
                <div class="grid lg-80 md-1-3">
                  <FormGroup type="plain" label="วันที่ผ่าตัด" value="04/11/2563" />
                </div>
                <div class="grid lg-20 md-1-3">
                  <FormGroup type="plain" label="พยาธิแพทย์" value="นายเตธนันท์ วงศ์ปรีชาโชค" />
                </div>
                <div class="grid lg-80 md-1-3">
                  <FormGroup type="plain" label="วันที่รับชิ้นเนื้อ" value="04/11/2563" />
                </div>
              </div>
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
                  <div class="grids">
                    <div class="grid sm-100">
                      <p class="color-gray">Microscopie Picture</p>
                    </div>
                  </div>
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
                    <div class="grid lg-20 sm-50">
                      <FormGroup 
                        type="select" label="สถานะ" name="status" 
                        :options="[
                          { value: 1, text: 'รอ Consult ตรวจสอบ' },
                          { value: 2, text: 'ส่ง Consult' },
                          { value: 3, text: 'Complete' }
                        ]"
                        :value="1"
                      />
                    </div>
                    <div class="grid lg-20 sm-50">
                      <FormGroup 
                        type="datepicker" label="วันที่รายงานผล" 
                        name="date" value="04/11/2563" wrapperClass="append"
                        :append="true" icon="calendar.svg" 
                      />
                    </div>
                    <div class="grid lg-20 sm-50">
                      <FormGroup 
                        type="text" label="เวลา" name="time" value="12:02:12"
                      />
                    </div>
                  </div>

                </div>
              </div>
              <div class="btns text-right">
                <Button 
                  text="ออก  Report" href="#"
                  classer="btn-color-01" :prepend="true" icon="arrow-up-right.svg" 
                />
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
import DataTable from '../../components/DataTable';
import Step01 from '../../components/Step01';

export default {
  name: 'CellDiagnosePage',
  components: {
    Topnav,
    SpecialCard02,
    DataTable,
    Step01
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 1,
      stepActiveIndex: 1,
      serviceData: [],
      dataset: {
        color: null
      },
      bags: [
        { value: '', valueCount: null }
      ],
      bagTotal: 0
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
    this.serviceData.push(
      {
        id: { text: '00001' },
        service: { text: 'Biopsy หรือชิ้นเนื้อที่มีความยาว 2 ซม. แต่ไม่เกิน 5 ซม.' },
        time: { text: '12:22' },
        amount: { text: '12' },
        discount: { text: '50' },
        price: { text: '100' },
        total_price: { text: '1150' },
        options: {
          type: 'options',
          edit: { type: 'inline', id: 0 },
          delete: { type: 'emit', id: 0 }
        }
      }
    );
  },
  methods: {
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