<style scoped>
  .total-cart{
    display:inline-block; text-align:center; position:absolute;
    font-size:1rem; line-height:1.625rem; width:1.5rem; height:1.5rem; border-radius:50%; 
    background-color:#BC4A4A; color:#ffffff;
  }
.popup-container.lg .popup-box{max-width: 60rem;}
</style>
<template>
  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" />

  <section class="section-full">
    <div class="container">
      <div class="tab-container">
        <div class="section-header pb-0" data-aos="fade-up" data-aos-delay="0">
          <div class="btns mt-0">
            <a href="/user/dashboard" class="btn color-gray h-color-01 disabled">
              <img class="icon-prepend xs" src="/assets/img/icon/chev-left.svg" alt="Image Icon" />
              ย้อนกลับ
            </a>
          </div>
          <div class="header-wrapper">
            <div class="text-container">
              <h6 class="h3">คลังสินค้า</h6>
            </div>
            <div class="btns hide-mobile">
              <Button 
                text="ตะกร้าสินค้า" 
                classer="btn-color-09 mr-3" :prepend="true" icon="shopping-bag-white.svg"
                :cart="rows5.length"
                @clicked="cartModalOpen = !cartModalOpen"
              />
              <Button 
                text="เพิ่มสินค้าใหม่" 
                classer="btn-color-01"
                @clicked="addModalOpen = !addModalOpen"
              />
            </div>
            <div class="btns ws-nowrap show-mobile">
              <Button 
                text="" classer="btn-color-09 btn-sm bcolor-white mr-1"
                :prepend="true" icon="shopping-bag-white.svg" :cart="rows5.length"
                @clicked="cartModalOpen = !cartModalOpen"
              />
              <Button 
                text="" classer="btn-color-09 btn-sm bcolor-white"
                :prepend="true" icon="vdots.svg"
                @clicked="addModalOpen = !addModalOpen"
              />
            </div>
          </div>
          <Tabs01 
            :activeIndex="tabActiveIndex" 
            @clicked="tabActiveIndex = $event" 
            :tabs="[ 'รายการทั้งหมด', 'รายการขอยืม', 'รายการขอเบิก', 'ประวัติคำขอ' ]" 
          />
        </div>
        <div class="tab-contents" data-aos="fade-up" data-aos-delay="150">

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 0 }">
            <DataTable
              :columns="columns1" :rows="rows1" 
              :search="[ 'code', 'name', 'product', 'type', 'date' ]" 
              :orders="[
                { key: 'date-desc', text: 'วันที่นำเข้า (ใหม่สุด)' },
                { key: 'date-asc', text: 'วันที่นำเข้า (เก่าสุด)' },
              ]"
              @click-info="infoModalOpen=!infoModalOpen"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 1 }">
            <DataTable 
              :columns="columns2" :rows="rows2" 
              :search="[ 'date', 'code', 'name' ]" 
              :orders="[
                { key: 'date-desc', text: 'วันเวลายืม (ใหม่สุด)' },
                { key: 'date-asc', text: 'วันเวลายืม  (เก่าสุด)' }
              ]"
            />
          </div>
          
          <div class="tab-content" :class="{ 'active': tabActiveIndex == 2 }">
            <DataTable 
              :columns="columns3" :rows="rows3" 
              :search="[ 'date', 'code', 'name' ]" 
              :orders="[
                { key: 'date-desc', text: 'วันเวลาเบิก (ใหม่สุด)' },
                { key: 'date-asc', text: 'วันเวลาเบิก (เก่าสุด)' }
              ]"
            />
          </div>

          <div class="tab-content" :class="{ 'active': tabActiveIndex == 3 }">
            <DataTable 
              :columns="columns4" :rows="rows4" 
              :search="[ 'start_date', 'end_date', 'code', 'name', 'type' ]" 
              :orders="[
                { key: 'start_date-desc', text: 'วันเวลายืม/เบิก (ใหม่สุด)' },
                { key: 'start_date-asc', text: 'วันเวลายืม/เบิก (เก่าสุด)' }
              ]"
            />
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- Add Modal -->
  <div class="popup-container" :class="{ 'active': addModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="addModalOpen = !addModalOpen"></div>
      <form action="/user/inventory" method="GET" class="w-full" @submit="onSubmit">
          <div class="popup-box xl">
            <div class="header">
                <div class="btns mt-0">
                <a href="javascript:" class="btn btn-close" @click="addModalOpen = !addModalOpen">
                    <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                    ปิดหน้าต่าง
                </a>
                </div>
                <div class="header-wrapper">
                <div class="text-container">
                  <h6 class="h3">เพิ่มสินค้าใหม่</h6>
                </div>
                <div class="btns">
                    <Button 
                      text="บันทึก" type="submit"
                      classer="btn-color-01 hide-mobile" :prepend="true" icon="check-white.svg" 
                    />
                    <Button 
                      text="บันทึก"
                      classer="btn-color-01 btn-sm show-mobile"
                    />
                </div>
                </div>
            </div>
            <div class="body pt-2 pb-4 mb-4">
                <div class="grids">
                    <div class="grid lg-25 xs-75">
                        <FormGroup 
                          type="text" label="เลขที่จัดซื้อจัดจ้าง" name="add_code" placeholder="123456789" 
                          :value="dataset.code" @input="dataset.code = $event" 
                          :errorText="isValidated && !dataset.code? 'กรุณาระบุ': ''" 
                          :classer="isValidated && !dataset.code? 'error': ''" 
                        />
                    </div>
                    <div class="grid lg-50">
                        <FormGroup 
                          type="text" label="ชื่ออุปกรณ์" name="add_product" placeholder="ALLIS Intestinal Forceps, 4x5 Teeth 15 Cm." 
                          :value="dataset.product" @input="dataset.product = $event" 
                          :errorText="isValidated && !dataset.product? 'กรุณาระบุ': ''" 
                          :classer="isValidated && !dataset.product? 'error': ''" 
                        />
                    </div>
                    <div class="grid lg-25 xs-75">
                      <FormGroup 
                        type="datepicker" label="วันที่นำเข้า" name="add_date" placeholder="01/01/2564" 
                        :value="dataset.addDate" @input="dataset.addDate = $event" 
                        :errorText="isValidated && !dataset.addDate? 'กรุณาระบุ': ''" 
                        :classer="isValidated && !dataset.addDate? 'error': ''" 
                      />
                    </div>
                    <div class="grid lg-25 xs-75">
                      <FormGroup 
                        type="select" label="ประเภท" name="add_type"
                        :options="[
                          { value: 1, text: 'อุปกรณ์ทางการแพทย์' },
                          { value: 2, text: 'เครื่องมือแพทย์ที่ต้องได้รับอนุญาต' },
                          { value: 3, text: 'เครื่องมือแพทย์ที่ต้องแจ้งรายการละเอียด' },
                          { value: 4, text: 'เครื่องมือแพทยทั่วไป' }
                        ]"
                        :value="dataset.type" @input="dataset.type = $event" 
                        :errorText="isValidated && !dataset.type? 'กรุณาระบุ': ''" 
                        :classer="isValidated && !dataset.type? 'error': ''" 
                      />
                    </div>
                    <div class="grid lg-25 xs-75">
                        <FormGroup 
                          type="text" label="ยี่ห้อ" name="add_brand" placeholder="ALLIS Intestinal Forceps" 
                          :value="dataset.brand" @input="dataset.brand = $event" 
                          :errorText="isValidated && !dataset.brand? 'กรุณาระบุ': ''" 
                          :classer="isValidated && !dataset.brand? 'error': ''" 
                        />
                    </div>
                    <div class="grid lg-25 xs-75">
                        <FormGroup 
                          type="text" label="บาร์โค้ด" name="add_barcode" placeholder="16508537592841500" 
                          :value="dataset.barcode" @input="dataset.barcode = $event" 
                          :errorText="isValidated && !dataset.barcode? 'กรุณาระบุ': ''" 
                          :classer="isValidated && !dataset.barcode? 'error': ''" 
                        />
                    </div>
                    <div class="grid lg-25 xs-75">
                      <FormGroup 
                        type="special-1" label="จำนวน" 
                        :name="'add_count'" :name2="'add_unit'" :placeholder="'24'"
                        :value="dataset.count" @input="dataset.count = $event" 
                        :value2="dataset.unit" @input2="dataset.unit = $event" 
                        :errorText="isValidated && !dataset.count? 'กรุณาระบุ': ''" 
                        :classer="isValidated && !dataset.count? 'error': ''"
                        :options="[
                          { value: 1, text: 'ชิ้น' },
                          { value: 2, text: 'หน่วย' },
                        ]"
                      />
                    </div>
                    <div class="grid lg-25 xs-75">
                      <FormGroup 
                        type="text" label="บริษัท" name="add_company" placeholder="ALLIS" 
                        :value="dataset.company" @input="dataset.company = $event" 
                        :errorText="isValidated && !dataset.company? 'กรุณาระบุ': ''" 
                        :classer="isValidated && !dataset.company? 'error': ''" 
                      />
                    </div>
                    <div class="grid lg-25 xs-75">
                      <FormGroup 
                        type="text" label="Sale name" name="add_sale_name" placeholder="สมิหลา ณ สกลนคร" 
                        :value="dataset.saleName" @input="dataset.saleName = $event" 
                        :errorText="isValidated && !dataset.saleName? 'กรุณาระบุ': ''" 
                        :classer="isValidated && !dataset.saleName? 'error': ''" 
                      />
                    </div>
                    <div class="grid lg-25 xs-75">
                      <FormGroup 
                        type="text" label="เบอร์ติดต่อ" name="add_phone" placeholder="098-074-2870" 
                        :value="dataset.phone" @input="dataset.phone = $event" 
                        :errorText="isValidated && !dataset.phone? 'กรุณาระบุ': ''" 
                        :classer="isValidated && !dataset.phone? 'error': ''" 
                      />
                    </div>
                    <div class="grid lg-25">
                      <FormGroup 
                        type="text" label="อีเมล" name="add_email" placeholder="098-074-2870" 
                        :value="dataset.email" @input="dataset.email = $event" 
                        :errorText="isValidated && !dataset.email? 'กรุณาระบุ': ''" 
                        :classer="isValidated && !dataset.email? 'error': ''" 
                      />
                    </div>
                </div>
            </div>
          </div>
      </form>
    </div>
  </div>

  <!-- Cart Modal -->
  <div class="popup-container" :class="{ 'active': cartModalOpen }">
    <div class="wrapper">
    <div class="close-filter" @click="cartModalOpen = !cartModalOpen"></div>
    <form action="/user/inventory" method="GET" class="w-full" @submit="onSubmit">
      <div class="popup-box">
        <div class="header">
            <div class="btns mt-0">
            <a href="javascript:" class="btn btn-close" @click="cartModalOpen = !cartModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
            </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ตะกร้าสินค้า
                  <span class="total-cart">
                    {{ rows5.length }}
                  </span>
                </h6>
              </div>
              <div class="btns">
                  <Button 
                    text="ยืมสินค้า" type="submit"
                    classer="btn-color-01 hide-mobile mr-3" :prepend="true" icon="check-white.svg" 
                  />
                  <Button 
                    text="ยืม"
                    classer="btn-color-01 btn-sm show-mobile mr-1"
                  />

                  <Button 
                    text="เบิกสินค้า" type="submit"
                    classer="btn-color-09 hide-mobile mr-3" :prepend="true" icon="product.svg" 
                  />
                  <Button 
                    text="เบิก"
                    classer="btn-color-09 btn-sm show-mobile mr-1"
                  />

                  <Button 
                    text="ล้างตะกร้า" type="submit"
                    classer="btn-color-10 hide-mobile" :prepend="true" icon="delete.svg" 
                  />
                  <Button 
                    text="ล้าง"
                    classer="btn-color-10 btn-sm show-mobile mr-1"
                  />
              </div>
            </div>
        </div>
        <div class="body pt-4 pb-5">
          <DataTable 
            :rows="rows5"
            :columns="columns5"
            :withOptions="false"
          />
        </div>
      </div>
    </form>
    </div>
  </div>

  <!-- Info Modal -->
  <div class="popup-container lg" :class="{ 'active': infoModalOpen }">
    <div class="wrapper">
    <div class="close-filter" @click="infoModalOpen = !infoModalOpen"></div>
    <form action="/user/inventory" method="GET" class="w-full" @submit="onSubmit">
      <div class="popup-box">
        <div class="header">
            <div class="btns mt-0">
            <a href="javascript:" class="btn btn-close" @click="infoModalOpen = !infoModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
            </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">รายละเอียดสินค้า</h6>
              </div>
              <div class="btns">
                  <Button 
                    text="ลบ"
                    classer="btn-color-06 hide-mobile mr-3" :prepend="true" icon="delete-white.svg" 
                    @click="() => {
                      deleteModalOpen=!deleteModalOpen
                      infoModalOpen = !infoModalOpen
                    }"
                  />
                  <Button 
                    text="ลบ"
                    classer="btn-color-06 btn-sm show-mobile mr-1"
                  />

                  <Button 
                    text="แก้ไข" type="submit"
                    classer="btn-color-01 hide-mobile mr-3" :prepend="true" icon="edit-white.svg" 
                  />
                  <Button 
                    text="แก้ไข"
                    classer="btn-color-01 btn-sm show-mobile mr-1"
                  />
              </div>
            </div>
        </div>
        <div class="body pt-4 pb-5">
          <div class="grids">
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="เลขที่จัดซื้อ/จัดจ้าง" value="56200849" />
            </div>
            <div class="grid lg-50 md-1-3">
              <FormGroup type="plain" label="ชื่ออุปกรณ์" value="ALLIS Intestinal Forceps, 4x5 Teeth 15 Cm." />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="วันที่นำเข้า" value="12/12/2563" />
            </div>

            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ประเภท" value="อุปกรณ์ทางการแพทย์" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="ยี่ห้อ" value="Heal Force" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="บาร์โค้ด" value="16508537592841500" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="จำนวน" value="12 ชิ้น" />
            </div>

            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="บริษัท" value="บริษัท" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="Sale name" value="ณรงค์ฤทธิ์ พรมบุรี" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="เบอร์ติดต่อ" value="098-074-2870" />
            </div>
            <div class="grid lg-25 md-1-3">
              <FormGroup type="plain" label="อีเมล" value="narongrit.prom@gmail.com" />
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  </div>

  <!-- Delete Modal -->
  <div class="popup-container" :class="{ 'active': deleteModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="deleteModalOpen = !deleteModalOpen"></div>
      <form action="/" method="GET" class="w-full"  @submit="(e) => e.preventDefault()">
        <div class="popup-box">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="deleteModalOpen = !deleteModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ยกเลิก
              </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container">
                <h6 class="h3">ยืนยันการลบสินค้า</h6>
              </div>
              <div class="btns">
                <Button type="submit" text="ยืนยัน" classer="btn-color-06" :prepend="true" icon="check-white.svg" />
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid sm-100">
                <FormGroup
                  label="หมายเหตุ" type="textarea" name="note"
                  placeholder="กรุณาระบุหมายเหตุของการลบสินค้า" 
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <Topnav :userRole="userRole" :activeIndex="topnavActiveIndex" :isBottom="true" />
</template>

<script>
import Topnav from '../../components/Topnav';
import Tabs01 from '../../components/Tabs01';
import DataTable from '../../components/DataTable';

export default {
  name: 'UserInventoryPage',
  components: {
    Topnav,
    Tabs01,
    DataTable
  },
  data() {
    return {
      userRole: 'Super User', /* User, Staff พยาธิวิทยา, Staff งานศพ, Admin */
      topnavActiveIndex: 4,
      isValidated: false,
      addModalOpen: false,
      cartModalOpen: false,
      infoModalOpen: false,
      deleteModalOpen: false,
      dataset: {
        code: '',
        product: '',
        addDate: '',
        type: 1,
        brand: '',
        barcode: '',
        count: null,
        unit: 1,
        company: '',
        saleName: '',
        phone: '',
        email: ''
      },
      columns1: [
        { key: 'code', text: 'รหัส' },
        { key: 'type', text: 'ประเภท' },
        { key: 'product', text: 'ชื่อสินค้า' },
        { key: 'in_stock', text: 'คงเหลือ' },
        { key: 'unit', text: 'หน่วย' },
        { key: 'date', text: 'วันที่นำเข้า' },
        { key: 'name', text: 'ผู้นำเข้า' },
        { key: 'status', text: '' },
      ],
      rows1: [],

      columns2: [
        { key: 'code', text: 'เลขที่การยืม' },
        { key: 'name', text: 'ชื่อผู้ยืม' },
        { key: 'rent', text: 'รายการยืม' },
        { key: 'date', text: 'วันเวลายืม' },
        { key: 'duration', text: 'วันเวลายืมทั้งหมด' },
        { key: 'status', text: 'สถานะ' },
        { key: 'option', text: '' },
      ],
      rows2: [],

      columns3: [
        { key: 'code', text: 'เลขที่การเบิก' },
        { key: 'name', text: 'ชื่อผู้เบิก' },
        { key: 'request', text: 'รายการเบิก' },
        { key: 'date', text: 'วันเวลาเบิก' },
        { key: 'duration', text: 'วันเวลาเบิกทั้งหมด' },
        { key: 'status', text: 'สถานะ' },
        { key: 'option', text: '' },
      ],
      rows3: [],

      columns4: [
        { key: 'code', text: 'เลขที่รายการ' },
        { key: 'type', text: 'ประเภทคำขอ' },
        { key: 'name', text: 'ชื่อผู้ยืม/เบิก' },
        { key: 'request', text: 'รายการยืม' },
        { key: 'start_date', text: 'วันเวลายืม/เบิก' },
        { key: 'end_date', text: 'วันที่คืน' },
        { key: 'duration', text: 'จำนวนเวลาทั้งหมด' }
      ],
      rows4: [],

      columns5: [
        { key: 'code', text: 'รหัส' },
        { key: 'type', text: 'ประเภท' },
        { key: 'name', text: 'ชื่อสินค้า' },
        { key: 'in_stock', text: 'คงเหลือ' },
        { key: 'unit', text: 'หน่วย' },
        { key: 'ea', text: 'ความต้องการ' },
        { key: 'option', text: '' },
      ],

      rows5: [
        {
          code: { text: 'DX-52260985'},
          type: { text: 'เครื่องมือแพทยทั่วไป'},
          name: { text: 'ถุงให้อาหารผู้ป่วยทางสายยาง ทำให้ปราศจากเชื้อด้วยเอทธิลีนออก...'},
          in_stock: { text: '50'},
          unit: { text: 'ถุง'},
          ea: { type:'input', value: 15, min: 1, max:50, step: 1 },
          option: {
            type:'icon', icon: 'delete.svg'
          }
        }
      ]
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });

    for(var i=0; i<7; i++){

      this.rows1.push({
        code: { 
          type: 'text', text: 'ES-20247815'
        },
        type: { 
          type: 'text', text: 'เครื่องมือแพทยทั่วไป'
        },
        product: { 
          type: 'link', text: 'เครื่องผลิตออกซิเจน (รุ่น JAY-5) ฟังก์ชั่นพ่นยา'
        },
        in_stock: { 
          type: 'text', text: '1' 
        },
        unit: { 
          type: 'text', text: 'เครื่อง'
        },
        date: {
          type: 'text', text: '20/12/2563'
        },
        name: {
          type: 'text', text: 'สโรชา สูหลงกูล'
        },
        status: {
          type: 'text', text: 'เพิ่มใส่ตระกร้า', classer: 'color-01',
          iconPrepend: 'shopping-bag-white.svg'
        },
      });

      this.rows2.push({
        code: { 
          type: 'text', text: 'BR-20206050'
        },
        name: { 
          type: 'text', text: 'กฤตย์ จีรพัฒนานุวงศ์'
        },
        rent: { 
          type: 'text', text: '5 '
        },
        date: { 
          type: 'text', text: '20/12/2563, 10:56'
        },
        duration: {
          type: 'text', text: '62 ว. 3 ช.'
        },
        status: {
          type: 'tag', text: 'กำลังยืม', classer: 'ss-tag-warning'
        },
        option: {
          type: 'link', text: 'คืนสินค้า', href: '#', classer: 'color-01',
          iconPrepend: 'previous-outline.svg'
        },
      });

      this.rows3.push({
        code: { 
          type: 'text', text: 'BOL-20206050'
        },
        name: { 
          type: 'text', text: 'กฤตย์ จีรพัฒนานุวงศ์'
        },
        request: { 
          type: 'text', text: '5'
        },
        date: { 
          type: 'text', text: '20/12/2563, 10:56'
        },
        duration: {
          type: 'text', text: '20 ว. 23 ช.'
        },
        status: {
          type: 'tag', text: 'ขอเบิก', classer: 'ss-tag-warning'
        },
        option: {
          type: 'link', text: 'คืนสินค้า', href: '#', classer: 'color-01',
          iconPrepend: 'previous-outline.svg'
        },
      });

      this.rows4.push({
        code: { 
          type: 'text', text: 'EDS-20206049'
        },
        type: { 
          type: 'text', text: 'ยืมสินค้า'
        },
        name: { 
          type: 'text', text: 'กฤตย์ จีรพัฒนานุวงศ์'
        },
        request: { 
          type: 'text', text: '3'
        },
        start_date: { 
          type: 'text', text: '16/12/2563, 15:20'
        },
        end_date: {
          type: 'text', text: '21/12/2563, 10:56'
        },
        duration: {
          type: 'text', text: '1 ว. 2 ช. 43 นาที'
        },
      });

    }

  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  },
  methods: {
    onSubmit(e) {
      var that = this;
      that.isValidated = true;
      
      var isValid = true;
      Object.keys(that.dataset).forEach(function(k){
        if(!that.dataset[k]){
          isValid = false;
        }
      });

      if(!isValid){
        e.preventDefault();
      }
    }
  }
}
</script>
