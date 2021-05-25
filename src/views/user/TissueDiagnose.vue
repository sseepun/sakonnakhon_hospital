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
              วินิจฉัยชิ้นเนื้อ
            </span>
            <span class="ss-sep hide-mobile"></span>
            <span v-if="stepActiveIndex == 1" class="ss-tag">เตรียมสไลด์</span>
            <span v-else-if="stepActiveIndex == 2" class="ss-tag ss-tag-danger">ย้อมสี</span>
            <span v-else-if="stepActiveIndex == 3" class="ss-tag ss-tag-purple">Screening</span>
            <span v-else-if="stepActiveIndex == 4" class="ss-tag">แปลผล</span>
            <span v-else-if="stepActiveIndex == 5" class="ss-tag ss-tag-info">รายงานผล</span>
            <span v-else class="ss-tag ss-tag-warning">รอวินิจฉัย</span>
            <span class="ss-sep ml-4 mr-3 hide-mobile"></span>
            <span class="ss-tag sm ss-tag-red">ด่วน</span>
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
            <FormGroup type="plain" label="รหัสใบส่งตรวจ" value="S20-00001" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
            <FormGroup type="plain" label="HN" value="1088052" />
          </div>
          <div class="grid lg-20 md-1-3 xs-50">
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
              type="checkbox" :value="[ 1 ]" 
              :options="[
                { value: 1, text: 'Alcohol' },
                { value: 2, text: 'Air-dried' },
              ]"
            />
          </div>
          <div class="grid lg-20 md-1-3 sm-100">
            <FormGroup type="text" label="จำนวน Containers" placeholder="ระบุจำนวน" />
          </div>
          <div class="grid lg-20 md-1-3 md-50 xs-50">
            <FormGroup type="text" label="Fluid (ml)" placeholder="ระบุจำนวน" />
          </div>
          <div class="grid lg-60 md-1-3 md-50 xs-50">
            <CheckboxSet 
              label="&nbsp;" name="fluid" 
              type="checkbox" :value="[ 1 ]" 
              :options="[
                { value: 1, text: 'Clear' },
                { value: 2, text: 'Turbid' },
              ]"
            />
          </div>
          <div class="grid sm-100">
            <CheckboxSet 
              label="*Color" name="color" 
              type="checkbox" :value="dataset.colors" 
              :options="[
                { value: 1, text: 'Bloody' },
                { value: 2, text: 'Yellow' },
                { value: 3, text: 'Green/ Green-yellow' },
                { value: 4, text: 'Mucous' },
                { value: 5, text: 'Brown' },
                { value: 6, text: 'Brown-black' },
                { value: 7, text: 'อื่นๆ' },
              ]"
              @input="dataset.colors = $event" 
              :textInput="true" 
              textInputPlaceholder="โปรดระบุ" 
              :textInputDisabled="dataset.colors.indexOf('7') == -1" 
            />
          </div>
        </div>
      </div>

      <div ref="stepAnchor" class="stripe section-px border-bottom bcolor-fgray" data-aos="fade-up" data-aos-delay="0">
        <p class="fw-400">
          การวินิจฉัย
        </p>
      </div>
      <div class="tab-container mt-5" data-aos="fade-up" data-aos-delay="0">
        <div class="section-px">
          <Step01 
            :activeIndex="stepActiveIndex" 
            :texts="[ 'ตัดชิ้นเนื้อ', 'เตรียมสไลด์', 'อ่านผล', 'Consult / Double check', 'รายงาน' ]"
          />
        </div>
        <div class="tab-contents pt-6 pb-6">

          <div class="tab-content" :class="stepActiveIndex == 1? 'active': ''">
            <div class="section-px border-bottom bcolor-fgray pb-6">
              <div class="p fw-400">
                Step 1 ตัดชิ้นเนื้อ
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">S20-00001</span>
              </div>
              <div class="grids">
                <div v-for="(bag, index) in bags" :key="index"
                  class="grid xl-50 lg-70 md-90 sm-80"
                >
                  <SpecialCard05 
                    :itemIndex="index" :name="'bag_'+index" leading="P63-1" 
                    :value="bag.value" @input="bag.value = $event" 
                    :valueCount="bag.valueCount" @input-count="bagTotalChange(index, $event)" 
                    @input-delete="deleteBagSection($event)"
                  />
                </div>
                <div class="grid xl-50 lg-70 md-90 sm-80">
                  <SpecialCard05 type="Add" @input-add="addBagSection()" />
                </div>
              </div>
            </div>
            <div class="section-px pt-6">
              <div class="bradius-2 border bcolor-fgray ovf-hidden">
                <div class="bg-14 border-bottom bcolor-fgray p-4 pt-2 pb-2">
                  <p class="fw-400">สรุปรวมตามถุง</p>
                </div>
                <div class="p-4 pt-2">
                  <div class="gallery-grids">
                    <div v-for="(bag, index) in bags" :key="index"
                      class="grid xl-25 lg-1-3 md-50 sm-70"
                    >
                      <SpecialCard05 
                        :itemIndex="index" type="Complete" leading="P63-1" 
                        :value="bag.value" :valueCount="bag.valueCount" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-px">
              <div class="btns text-right">
                <Button 
                  text="พิมพ์สติ๊กเกอร์" href="javascript:" 
                  classer="btn-color-09 mr-3  hide-mobile" :prepend="true" icon="printer.svg" 
                />
                <Button 
                  text="ขั้นตอนต่อไป" @click="stepNext()"
                  classer="btn-color-01" :prepend="true" icon="arrow-right-white.svg" 
                />
              </div>
            </div>
          </div>

          <div class="tab-content" :class="stepActiveIndex == 2? 'active': ''">
            <div class="section-px">
              <div class="p fw-400">
                Step 2 เตรียมสไลด์
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">S20-00001</span>
              </div>
              <div class="grids">
                <div class="grid md-50 sm-100">
                  <FormGroup 
                    type="textarea" label="Diagnosis" placeholder="บรรยาย..." 
                  />
                </div>
                <div class="grid md-50 sm-100">
                  <FormGroup 
                    type="textarea" label="Gross Description" placeholder="บรรยาย..." 
                  />
                </div>
                <div class="grid md-50 sm-100">
                  <FormGroup 
                    type="textarea" label="Microscopic Description" 
                    classer="textarea-adaptive" placeholder="บรรยาย..." 
                  />
                </div>
                <div class="grid lg-50 md-75 sm-100">
                  <FormGroup 
                    v-if="!dataset.files.length" type="file-02" 
                    label="Microscopie Picture" icon="upload.svg" 
                    @input-file="addFile($event)"
                  />
                  <ImageGallery
                    v-else :files="dataset.files" 
                    @file-add="addFile($event)" 
                    @file-remove="removeFile($event)" 
                    @click-popup="isActivePopup = !isActivePopup" 
                  />
                </div>
                <div class="grid md-50">
                  <FormGroup 
                    type="search-select" label="ICD-O" :value="dataset.icd" 
                    placeholder="เลือก Term" 
                    :options="[
                      'MORPHOLOGY',
                      'Neoplasms, NOS',
                      'Neoplasm, benign',
                      'Tumor, benign',
                      'Unclassified tumor, benign',
                      'Neoplasm, uncertain whether benign or malignant',
                      'Tumor embolus',
                      'Tumor, metastatic',
                      'Tumor, secondary',
                      'Tumor cells, benign',
                      'Tumor cells, uncertain whether benign or malignant',
                      'Tumor cells, NOS'
                    ]" 
                    @input="(event) => dataset.icd = event"
                  />
                </div>
                <div class="grid md-50">
                  <FormGroup 
                    type="text" label="ICDO3.2" :value="dataset.icd0" :disabled="!dataset.icd" 
                    @input="(event) => dataset.icd0 = event"
                  />
                </div>
                <div class="grid sm-100" style="height:8remrem;"></div>
              </div>
              <div class="btns text-right">
                <Button 
                  text="กลับ" @click="stepPrev()" 
                  classer="btn-color-09 mr-3" :prepend="true" icon="arrow-left-green.svg" 
                />
                <Button 
                  text="ขั้นตอนต่อไป" @click="stepNext()" 
                  classer="btn-color-01" :prepend="true" icon="arrow-right-white.svg" 
                />
              </div>
            </div>
          </div>

          <div class="tab-content" :class="stepActiveIndex == 3? 'active': ''">
            <div class="section-px">
              <div class="p fw-400">
                Step 3 อ่านผล
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">S20-00001</span>
              </div>
              <div class="pt-5 pb-5 border-bottom bcolor-sgray">
                <p>Cytopathology Report</p>
                <p class="color-gray mt-2">
                  Department of Anatomical Pathnology, Sakon Nakhon Hospital
                </p>
              </div>
              <div class="grids pb-5 border-bottom bcolor-sgray">
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="ชื่อ นามสกุล" value="ณรงค์ฤทธิ์ พรมบุรี" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="HN" value="ผู้ป่วยนอก (IPD)" />
                </div>
                <div class="grid xl-60 lg-50 md-1-3">
                  <FormGroup type="plain" label="Surgical Number" value="P63-1" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="วันเกิด" value="04/11/2540" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="อายุ" value="23" />
                </div>
                <div class="grid xl-60 lg-50 md-1-3">
                  <FormGroup type="plain" label="เพศ" value="หญิง" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="แพทย์ผู้ส่งตรวจ" value="พญ. สุพิภัทฎิพร มานะ" />
                </div>
                <div class="grid xl-80 lg-75 md-1-3">
                  <FormGroup type="plain" label="วันที่ผ่าตัด" value="04/11/2563" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="พยาธิแพทย์" value="นายเตธนันท์ วงศ์ปรีชาโชค" />
                </div>
                <div class="grid xl-80 lg-75 md-1-3">
                  <FormGroup type="plain" label="วันที่รับชิ้นเนื้อ" value="04/11/2563" />
                </div>
              </div>

              <div v-if="!editModeStep3">
                <div class="grids">
                  <div class="grid sm-100">
                    <div class="btns text-right mt-0">
                      <Button 
                        text="แก้ไข" @click="editModeStep3 = !editModeStep3" 
                        classer="btn-color-04 btn-sm" :prepend="true" icon="edit-gray.svg" 
                      />
                    </div>
                  </div>
                  <div class="grid lg-60 sm-100 mt-0">
                    <div class="grids">
                      <div class="grid sm-100">
                        <p class="color-gray">Diagnosis</p>
                        <p class="color-black mt-2">
                          Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent.
                        </p>
                      </div>
                      <div class="grid sm-100">
                        <p class="color-gray">Gross Description</p>
                        <p class="color-black mt-2">
                          Potenti hac fringilla enim non malesuada cras senectus tristique arcu. Lorem volutpat, nec, faucibus tincidunt neque porttitor sagittis. Purus venenatis congue dui scelerisque amet aenean.
                        </p>
                      </div>
                      <div class="grid sm-100">
                        <p class="color-gray">Microscopic Description</p>
                        <p class="color-black mt-2">
                          Cras aliquam ac nulla magna dui, purus in id. Turpis ac odio nunc, odio. Eget vitae amet.
                        </p>
                      </div>
                      <div class="grid sm-100">
                        <p class="color-gray">ICD-0</p>
                        <p v-if="dataset.icd" class="color-black mt-2">
                          {{dataset.icd}}
                        </p>
                        <p v-else class="color-black mt-2">-</p>
                      </div>
                      <div class="grid sm-100">
                        <p class="color-gray">ICDO3.2</p>
                        <p v-if="dataset.icd" class="color-black mt-2">
                          {{dataset.icd0}}
                        </p>
                        <p v-else class="color-black mt-2">-</p>
                      </div>
                    </div>
                  </div>

                  <div class="grid lg-40 sm-100">
                    <p class="color-gray">Microscopie Picture</p>
                    <div v-if="dataset.files.length" class="gallery-grids">
                      <div 
                        v-for="(file, j) in dataset.files" :key="j" 
                        class="grid xl-1-3 lg-50 md-1-3 xs-50"
                      >
                        <a class="ss-img square bradius-2" target="_blank" :href="file.path">
                          <div class="img-bg" :style="'background-image:url(\''+file.path+'\');'"></div>
                        </a>
                      </div>
                    </div>
                    <p v-else class="color-sgray mt-2">
                      ไม่มีรูปภาพรายงานผล
                    </p>
                  </div>
                  
                  <div class="grid sm-100">
                    <p class="color-01">Electrically Signed by</p>
                    <p class="color-black mt-3">นายเตธนันท์ วงศ์ปรีชาโชติ (Pathologist)</p>
                  </div>
                  <div class="grid sm-100 mt-0">
                    <div class="grids">
                      <div class="grid lg-1-3 sm-100">
                        <FormGroup 
                          type="select" label="Consult/Double check" name="doctor" 
                          :options="[
                            { value: 1, text: 'นพ. นันทวัน หอมประเสริฐสุข (Cytotechnologist)' }
                          ]"
                          :value="1"
                        />
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
                    text="กลับ" @click="stepPrev()" 
                    classer="btn-color-09 mr-3" :prepend="true" icon="arrow-left-green.svg" 
                  />
                  <Button 
                    text="ขั้นตอนต่อไป" @click="stepNext()" 
                    classer="btn-color-01" :prepend="true" icon="arrow-right-white.svg" 
                  />
                </div>
              </div>
              <div v-else>
                <div class="grids">
                  <div class="grid sm-100">
                    <div class="btns text-right mt-0">
                      <Button 
                        text="บันทึก" @click="editModeStep3 = !editModeStep3" 
                        classer="btn-color-01 btn-sm" :prepend="true" icon="check-white.svg" 
                      />
                    </div>
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="textarea" label="Diagnosis" 
                      value="Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent." 
                    />
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="textarea" label="Gross Description" 
                      value="Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent." 
                    />
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="textarea" label="Microscopic Description" classer="textarea-adaptive"
                      value="Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent." 
                    />
                  </div>
                  <div class="grid lg-50 md-75 sm-100">
                    <FormGroup 
                      v-if="!dataset.files.length" type="file-02" 
                      label="Microscopie Picture" icon="upload.svg" 
                      @input-file="addFile($event)"
                    />
                    <ImageGallery
                      v-else :files="dataset.files" 
                      @file-add="addFile($event)" 
                      @file-remove="removeFile($event)" 
                      @click-popup="isActivePopup = !isActivePopup" 
                    />
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="search-select" label="ICD-O" :value="dataset.icd" 
                      placeholder="เลือก Term" 
                      :options="[
                        'MORPHOLOGY',
                        'Neoplasms, NOS',
                        'Neoplasm, benign',
                        'Tumor, benign',
                        'Unclassified tumor, benign',
                        'Neoplasm, uncertain whether benign or malignant',
                        'Tumor embolus',
                        'Tumor, metastatic',
                        'Tumor, secondary',
                        'Tumor cells, benign',
                        'Tumor cells, uncertain whether benign or malignant',
                        'Tumor cells, NOS'
                      ]" 
                      @input="(event) => dataset.icd = event"
                    />
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="text" label="ICDO3.2" :value="dataset.icd0" :disabled="!dataset.icd" 
                      @input="(event) => dataset.icd0 = event"
                    />
                  </div>
                  <div class="grid sm-100" style="height:8rem;"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" :class="stepActiveIndex == 4? 'active': ''">
            <div class="section-px">
              <div class="p fw-400">
                Step 4 Consult / Double check
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">S20-00001</span>
              </div>
              <div class="pt-5 pb-5 border-bottom bcolor-sgray">
                <p>Cytopathology Report</p>
                <p class="color-gray mt-2">
                  Department of Anatomical Pathnology, Sakon Nakhon Hospital
                </p>
              </div>
              <div class="grids pb-5 border-bottom bcolor-sgray">
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="ชื่อ นามสกุล" value="ณรงค์ฤทธิ์ พรมบุรี" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="HN" value="ผู้ป่วยนอก (IPD)" />
                </div>
                <div class="grid xl-60 lg-50 md-1-3">
                  <FormGroup type="plain" label="Surgical Number" value="P63-1" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="วันเกิด" value="04/11/2540" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="อายุ" value="23" />
                </div>
                <div class="grid xl-60 lg-50 md-1-3">
                  <FormGroup type="plain" label="เพศ" value="หญิง" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="แพทย์ผู้ส่งตรวจ" value="พญ. สุพิภัทฎิพร มานะ" />
                </div>
                <div class="grid xl-80 lg-75 md-1-3">
                  <FormGroup type="plain" label="วันที่ผ่าตัด" value="04/11/2563" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="พยาธิแพทย์" value="นายเตธนันท์ วงศ์ปรีชาโชค" />
                </div>
                <div class="grid xl-80 lg-75 md-1-3">
                  <FormGroup type="plain" label="วันที่รับชิ้นเนื้อ" value="04/11/2563" />
                </div>
              </div>

              <div v-if="!editModeStep3">
                <div class="grids">
                  <div class="grid sm-100">
                    <div class="btns text-right mt-0">
                      <Button 
                        text="แก้ไข" @click="editModeStep3 = !editModeStep3" 
                        classer="btn-color-04 btn-sm" :prepend="true" icon="edit-gray.svg" 
                      />
                    </div>
                  </div>
                  <div class="grid lg-60 sm-100 mt-0">
                    <div class="grids">
                      <div class="grid sm-100">
                        <p class="color-gray">Diagnosis</p>
                        <p class="color-black mt-2">
                          Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent.
                        </p>
                      </div>
                      <div class="grid sm-100">
                        <p class="color-gray">Gross Description</p>
                        <p class="color-black mt-2">
                          Potenti hac fringilla enim non malesuada cras senectus tristique arcu. Lorem volutpat, nec, faucibus tincidunt neque porttitor sagittis. Purus venenatis congue dui scelerisque amet aenean.
                        </p>
                      </div>
                      <div class="grid sm-100">
                        <p class="color-gray">Microscopic Description</p>
                        <p class="color-black mt-2">
                          Cras aliquam ac nulla magna dui, purus in id. Turpis ac odio nunc, odio. Eget vitae amet.
                        </p>
                      </div>
                      <div class="grid sm-100">
                        <p class="color-gray">ICD-0</p>
                        <p v-if="dataset.icd" class="color-black mt-2">
                          {{dataset.icd}}
                        </p>
                        <p v-else class="color-black mt-2">-</p>
                      </div>
                      <div class="grid sm-100">
                        <p class="color-gray">ICDO3.2</p>
                        <p v-if="dataset.icd" class="color-black mt-2">
                          {{dataset.icd0}}
                        </p>
                        <p v-else class="color-black mt-2">-</p>
                      </div>
                    </div>
                  </div>

                  <div class="grid lg-40 sm-100">
                    <p class="color-gray">Microscopie Picture</p>
                    <div v-if="dataset.files.length" class="gallery-grids">
                      <div 
                        v-for="(file, j) in dataset.files" :key="j" 
                        class="grid xl-1-3 lg-50 md-1-3 xs-50"
                      >
                        <a class="ss-img square bradius-2" target="_blank" :href="file.path">
                          <div class="img-bg" :style="'background-image:url(\''+file.path+'\');'"></div>
                        </a>
                      </div>
                    </div>
                    <p v-else class="color-sgray mt-2">
                      ไม่มีรูปภาพรายงานผล
                    </p>
                  </div>
                  
                  <div class="grid sm-100">
                    <p class="color-01">Electrically Signed by</p>
                    <p class="color-black mt-3">นายเตธนันท์ วงศ์ปรีชาโชติ (Pathologist)</p>
                  </div>
                  <div class="grid sm-100 mt-0">
                    <div class="grids">
                      <div class="grid lg-1-3 sm-100">
                        <FormGroup 
                          type="plain" label="Consult/Double check" 
                          value="นพ. นันทวัน หอมประเสริฐสุข (Cytotechnologist)"
                        />
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
                    text="กลับ" @click="stepPrev()" 
                    classer="btn-color-09 mr-3" :prepend="true" icon="arrow-left-green.svg" 
                  />
                  <Button 
                    text="ขั้นตอนต่อไป" @click="stepNext()" 
                    classer="btn-color-01" :prepend="true" icon="arrow-right-white.svg" 
                  />
                </div>
              </div>
              <div v-else>
                <div class="grids">
                  <div class="grid sm-100">
                    <div class="btns text-right mt-0">
                      <Button 
                        text="บันทึก" @click="editModeStep3 = !editModeStep3" 
                        classer="btn-color-01 btn-sm" :prepend="true" icon="check-white.svg" 
                      />
                    </div>
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="textarea" label="Diagnosis" 
                      value="Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent." 
                    />
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="textarea" label="Gross Description" 
                      value="Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent." 
                    />
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="textarea" label="Microscopic Description" classer="textarea-adaptive"
                      value="Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent." 
                    />
                  </div>
                  <div class="grid lg-50 md-75 sm-100">
                    <FormGroup 
                      v-if="!dataset.files.length" type="file-02" 
                      label="Microscopie Picture" icon="upload.svg" 
                      @input-file="addFile($event)"
                    />
                    <ImageGallery
                      v-else :files="dataset.files" 
                      @file-add="addFile($event)" 
                      @file-remove="removeFile($event)" 
                      @click-popup="isActivePopup = !isActivePopup" 
                    />
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="search-select" label="ICD-O" :value="dataset.icd" 
                      placeholder="เลือก Term" 
                      :options="[
                        'MORPHOLOGY',
                        'Neoplasms, NOS',
                        'Neoplasm, benign',
                        'Tumor, benign',
                        'Unclassified tumor, benign',
                        'Neoplasm, uncertain whether benign or malignant',
                        'Tumor embolus',
                        'Tumor, metastatic',
                        'Tumor, secondary',
                        'Tumor cells, benign',
                        'Tumor cells, uncertain whether benign or malignant',
                        'Tumor cells, NOS'
                      ]" 
                      @input="(event) => dataset.icd = event"
                    />
                  </div>
                  <div class="grid md-50 sm-100">
                    <FormGroup 
                      type="text" label="ICDO3.2" :value="dataset.icd0" :disabled="!dataset.icd" 
                      @input="(event) => dataset.icd0 = event"
                    />
                  </div>
                  <div class="grid sm-100" style="height:8rem;"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" :class="stepActiveIndex == 5? 'active': ''">
            <div class="section-px">
              <div class="p fw-400">
                Step 5 รายงาน
                <span class="ss-sep sm hide-mobile"></span>
                <span class="ss-tag color-01">S20-00001</span>
              </div>
              <div class="pt-5 pb-5 border-bottom bcolor-sgray">
                <p>Cytopathology Report</p>
                <p class="color-gray mt-2">
                  Department of Anatomical Pathnology, Sakon Nakhon Hospital
                </p>
              </div>
              <div class="grids pb-5 border-bottom bcolor-sgray">
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="ชื่อ นามสกุล" value="ณรงค์ฤทธิ์ พรมบุรี" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="HN" value="ผู้ป่วยนอก (IPD)" />
                </div>
                <div class="grid xl-60 lg-50 md-1-3">
                  <FormGroup type="plain" label="Surgical Number" value="P63-1" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="วันเกิด" value="04/11/2540" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="อายุ" value="23" />
                </div>
                <div class="grid xl-60 lg-50 md-1-3">
                  <FormGroup type="plain" label="เพศ" value="หญิง" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="แพทย์ผู้ส่งตรวจ" value="พญ. สุพิภัทฎิพร มานะ" />
                </div>
                <div class="grid xl-80 lg-75 md-1-3">
                  <FormGroup type="plain" label="วันที่ผ่าตัด" value="04/11/2563" />
                </div>
                <div class="grid xl-20 lg-25 md-1-3">
                  <FormGroup type="plain" label="พยาธิแพทย์" value="นายเตธนันท์ วงศ์ปรีชาโชค" />
                </div>
                <div class="grid xl-80 lg-75 md-1-3">
                  <FormGroup type="plain" label="วันที่รับชิ้นเนื้อ" value="04/11/2563" />
                </div>
              </div>

              <div class="grids">
                <div class="grid lg-60 sm-100 mt-0">
                  <div class="grids">
                    <div class="grid sm-100">
                      <p class="color-gray">Diagnosis</p>
                      <p class="color-black mt-2">
                        Est integer dignissim turpis in dui. Morbi et sed quis ac ornare vitae. Vitae amet, aliquam lacus aliquam hac ornare. Habitasse ante pellentesque et vitae ut quam lobortis in. Morbi quam amet, volutpat neque praesent.
                      </p>
                    </div>
                    <div class="grid sm-100">
                      <p class="color-gray">Gross Description</p>
                      <p class="color-black mt-2">
                        Potenti hac fringilla enim non malesuada cras senectus tristique arcu. Lorem volutpat, nec, faucibus tincidunt neque porttitor sagittis. Purus venenatis congue dui scelerisque amet aenean.
                      </p>
                    </div>
                    <div class="grid sm-100">
                      <p class="color-gray">Microscopic Description</p>
                      <p class="color-black mt-2">
                        Cras aliquam ac nulla magna dui, purus in id. Turpis ac odio nunc, odio. Eget vitae amet.
                      </p>
                    </div>
                    <div class="grid sm-100">
                      <p class="color-gray">ICD-0</p>
                      <p v-if="dataset.icd" class="color-black mt-2">
                        {{dataset.icd}}
                      </p>
                      <p v-else class="color-black mt-2">-</p>
                    </div>
                    <div class="grid sm-100">
                      <p class="color-gray">ICDO3.2</p>
                      <p v-if="dataset.icd" class="color-black mt-2">
                        {{dataset.icd0}}
                      </p>
                      <p v-else class="color-black mt-2">-</p>
                    </div>
                  </div>
                </div>

                <div class="grid lg-40 sm-100">
                  <p class="color-gray">Microscopie Picture</p>
                  <div v-if="dataset.files.length" class="gallery-grids">
                    <div 
                      v-for="(file, j) in dataset.files" :key="j" 
                      class="grid xl-1-3 lg-50 md-1-3 xs-50"
                    >
                      <a class="ss-img square bradius-2" target="_blank" :href="file.path">
                        <div class="img-bg" :style="'background-image:url(\''+file.path+'\');'"></div>
                      </a>
                    </div>
                  </div>
                  <p v-else class="color-sgray mt-2">
                    ไม่มีรูปภาพรายงานผล
                  </p>
                </div>
              
                <div class="grid sm-100">
                  <p class="color-01">Electrically Signed by</p>
                  <p class="color-black mt-3">นายเตธนันท์ วงศ์ปรีชาโชติ (Pathologist)</p>
                </div>
                <div class="grid sm-100 mt-0">
                  <div class="grids">
                    <div class="grid lg-1-3 sm-100">
                      <FormGroup 
                        type="plain" label="Consult/Double check" 
                        value="นพ. นันทวัน หอมประเสริฐสุข (Cytotechnologist)" 
                      />
                    </div>
                    <div class="grid lg-20 sm-50">
                      <FormGroup type="plain" label="สถานะ" value="รอ Consult ตรวจสอบ" />
                    </div>
                    <div class="grid lg-20 sm-50">
                      <FormGroup type="plain" label="วันที่รายงานผล" value="04/11/2563" />
                    </div>
                    <div class="grid lg-20 sm-50">
                      <FormGroup type="plain" label="เวลา" value="12:02:12" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="btns text-right">
                <Button 
                  text="กลับ" @click="stepPrev()"
                  classer="btn-color-09 mr-3" :prepend="true" icon="arrow-left-green.svg" 
                />
                <Button 
                  text="ออก Report" href="/user/tissue-complete"
                  classer="btn-color-01" :prepend="true" icon="arrow-up-right.svg" 
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  </section>

  <ImageGalleryPopup 
    :key="dataset.files.length" 
    :files="dataset.files" :isActive="isActivePopup" 
    @file-add="addFile($event)" 
    @file-remove="removeFile($event)" 
    @click-popup="isActivePopup = !isActivePopup" 
  />

  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import SpecialCard05 from '../../components/SpecialCard05';
import DataTable from '../../components/DataTable';
import Step01 from '../../components/Step01';
import ImageGallery from '../../components/ImageGallery';
import ImageGalleryPopup from '../../components/ImageGalleryPopup';

export default {
  name: 'UserTissueDiagnosePage',
  components: {
    Topnav,
    SpecialCard05,
    DataTable,
    Step01,
    ImageGallery,
    ImageGalleryPopup
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 1,
      stepActiveIndex: 1,
      serviceData: [],

      editModeStep3: false,
      dataset: {
        colors: [],
        files: [
          {
            id: 1,
            name: 'รายงานผล รพ.สกลนคร 28/10/2563.pdf',
            path: '/assets/img/content/0'+Math.round(Math.random()*5+1)+'.jpg'
          },
          {
            id: 2,
            name: 'รายงานผล รพ.สกลนคร 28/10/2563.pdf',
            path: '/assets/img/content/0'+Math.round(Math.random()*5+1)+'.jpg'
          },
          {
            id: 3,
            name: 'รายงานผล รพ.สกลนคร 28/10/2563.pdf',
            path: '/assets/img/content/0'+Math.round(Math.random()*5+1)+'.jpg'
          }
        ],
        icd: '',
        icd0: ''
      },
      bags: [
        { value: '', valueCount: null }
      ],
      bagTotal: 0,

      isActivePopup: false
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
    addFile(file) {
      this.dataset.files.push({
        id: Math.round(Math.random()*1000000),
        name: 'รายงานผล รพ.สกลนคร 28/10/2563.pdf',
        path: '/assets/img/content/0'+Math.round(Math.random()*5+1)+'.jpg'
      });
    },
    removeFile(index) {
      this.dataset.files = this.dataset.files.filter(function(file, i){
        return i != index;
      });
      if(this.dataset.files.length<3){
        this.isActivePopup = false;
      }
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
    },
    stepNext(){
      this.stepActiveIndex += 1;
      window.scrollTo(0, this.$refs.stepAnchor.offsetTop - 60);
    },
    stepPrev(){
      this.stepActiveIndex -= 1;
      window.scrollTo(0, this.$refs.stepAnchor.offsetTop - 60);
    }
  }
}
</script>