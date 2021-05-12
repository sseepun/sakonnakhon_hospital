<style scoped>
  #tooltip { background: #fff; opacity:1; padding: .75rem; }
  #tooltip.hide{ opacity:0; }
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
                :cart="shoppingBag.length" @clicked="cartModalOpen = !cartModalOpen"
              />
              <Button 
                text="เพิ่มสินค้าใหม่" classer="btn-color-01" 
                @clicked="addModalOpen = !addModalOpen"
              />
            </div>
            <div class="btns ws-nowrap show-mobile">
              <Button 
                text="" classer="btn-color-09 btn-sm mr-1" 
                :prepend="true" icon="shopping-bag-white.svg" 
                :cart="shoppingBag.length" @clicked="cartModalOpen = !cartModalOpen" 
              />
              <Button 
                text="เพิ่ม" classer="btn-color-01 btn-sm"
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
              :rows="rows1" 
              :columns="columns1" 
              :search="[ 'code', 'name', 'product', 'type', 'date' ]" 
              :orders="[
                { key: 'date-desc', text: 'วันที่นำเข้า (ใหม่สุด)' },
                { key: 'date-asc', text: 'วันที่นำเข้า (เก่าสุด)' },
              ]"
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
        <div class="popup-box xl">
          <div class="header">
            <div class="btns mt-0">
            <a href="javascript:" class="btn btn-close" @click="cartModalOpen = !cartModalOpen">
              <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
              ปิดหน้าต่าง
            </a>
            </div>
            <div class="header-wrapper">
              <div class="text-container pr-2">
                <h6 class="h3 ws-no-wrap">
                  ตะกร้าสินค้า
                  <span class="total-cart">
                    {{ shoppingBag.length }}
                  </span>
                </h6>
              </div>
              <div class="btns hide-mobile ws-no-wrap">
                <Button 
                  text="ยืมสินค้า" type="submit"
                  classer="btn-color-01 mr-3" :prepend="true" icon="check-white.svg" 
                  @click="() => {
                    cartModalOpen = !cartModalOpen;
                    confirmModalOpen = !confirmModalOpen;
                  }"
                />
                <Button 
                  text="เบิกสินค้า" type="submit"
                  classer="btn-color-09 mr-3" :prepend="true" icon="product.svg" 
                  @click="() => {
                    cartModalOpen = !cartModalOpen;
                    confirmModalOpen = !confirmModalOpen;
                  }"
                />
                <Button 
                  text="ล้างตะกร้า" type="submit"
                  classer="btn-color-10 hide-mobile" :prepend="true" icon="delete.svg" 
                />
              </div>
              <div class="btns show-mobile ws-no-wrap">
                <Button 
                  text="ยืม" classer="btn-color-01 btn-sm mr-1"
                  @click="() => {
                    cartModalOpen = !cartModalOpen;
                    confirmModalOpen = !confirmModalOpen;
                  }"
                />
                <Button 
                  text="เบิก" classer="btn-color-09 btn-sm mr-1"
                  @click="() => {
                    cartModalOpen = !cartModalOpen;
                    confirmModalOpen = !confirmModalOpen;
                  }"
                />
                <Button 
                  text="ล้าง"
                  classer="btn-color-10 btn-sm"
                />
              </div>
            </div>
          </div>
          <div class="body pl-0 pr-0 pt-4 pb-5">
            <DataTable 
              :rows="shoppingBag" :key="shoppingBag.length" 
              :columns="shoppingBagColumns" 
              :withOptions="false" 
            />
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Info Modal -->
  <div class="popup-container" :class="{ 'active': infoModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="infoModalOpen = !infoModalOpen"></div>
      <form action="/user/inventory" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xl">
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
                <div class="btns hide-mobile">
                  <Button 
                    text="ลบ" classer="btn-color-06 mr-3" 
                    :prepend="true" icon="delete-white.svg" 
                    @click="() => {
                      deleteModalOpen=!deleteModalOpen
                      infoModalOpen = !infoModalOpen
                    }"
                  />
                  <Button 
                    text="แก้ไข" type="submit" classer="btn-color-01" 
                    :prepend="true" icon="edit-white.svg" 
                  />
                </div>
                <div class="btns show-mobile">
                  <Button 
                    text="ลบ" classer="btn-color-06 btn-sm mr-1"
                  />
                  <Button 
                    text="แก้ไข" classer="btn-color-01 btn-sm"
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

  <!-- Report Popup -->
  <div class="popup-container" :class="{ 'active': reportModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="reportModalOpen = !reportModalOpen"></div>
      <form action="/user/teams" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xl">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="reportModalOpen = !reportModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper fw-wrap">
              <div class="text-container ws-nowrap pr-3">
                <span class="h3">
                  รายละเอียดรายการขอยืม
                </span>
                <span class="ss-sep hide-mobile"></span>
                <span class="ss-tag ss-tag-warning">กำลังยืม</span>
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="เลขที่การยืม" value="EDS-20206050" />
              </div>
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="ชื่อผู้ยืม" value="กฤตย์ จีรพัฒนานุวงศ์" />
              </div>
              <div class="grid lg-25 md-1-3 xs-50">
                <FormGroup type="plain" label="รายการยืม" value="5 รายการ" />
              </div>
              <div class="grid lg-25 md-1-3 xs-50">
                <FormGroup type="plain" label="วันเวลายืม" value="20/12/2563, 10:56" />
              </div>
            </div>
          </div>
          <DataTable 
            :withOptions="false"
            :rows="reportData"
            :columns="[
              { key: 'code', text: 'รหัส'},
              { key: 'type', text: 'ประเภท'},
              { key: 'product', text: 'ชื่อสินค้า'},
              { key: 'rent', text: 'จำนวนยืม'},
              { key: 'unit', text: 'หน่วย'},
            ]"
          />
        </div>
      </form>
    </div>
  </div>

   <!-- Confirm Modal -->
  <div class="popup-container" :class="{ 'active': confirmModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="confirmModalOpen = !confirmModalOpen"></div>
      <form action="/user/inventory" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xl">
          <div class="header">
              <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="confirmModalOpen = !confirmModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
              </div>
              <div class="header-wrapper">
                <div class="text-container">
                  <h6 class="h3">รายละเอียดรายการขอยืม</h6>
                </div>
                <div class="btns hide-mobile">
                  <Button 
                    text="ยืนยัน" type="submit" classer="btn-color-01" 
                    :prepend="true" icon="check-white.svg" @click="(e) => {
                      e.preventDefault()
                      confirmModalOpen = !confirmModalOpen;  
                    }"
                  />
                </div>
                <div class="btns show-mobile">
                  <Button 
                    text="ยืนยัน" classer="btn-color-01 btn-sm"
                    @click="(e) => {
                      e.preventDefault()
                      confirmModalOpen = !confirmModalOpen;  
                    }"
                  />
                </div>
              </div>
          </div>
          <div class="body pt-4 pb-5">
            <DataTable
              :withOptions="false"
              :columns="[
                { key: 'code', text: 'รหัส' },
                { key: 'type', text: 'ประเภท' },
                { key: 'product', text: 'ชื่ออุปกรณ์' },
                { key: 'rent', text: 'จำนวน' },
                { key: 'unit', text: '' },
              ]"
              :rows="orderData" 
              :rowSelect="true" 
            />
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

  <!-- History Popup -->
  <div class="popup-container" :class="{ 'active': historyModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="historyModalOpen = !historyModalOpen"></div>
      <form action="/user/teams" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xl">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="historyModalOpen = !historyModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper fw-wrap">
              <div class="text-container ws-nowrap pr-3">
                <h6 class="h3">รายละเอียดประวัติคำขอ</h6>
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid lg-20 md-1-3">
                <FormGroup type="plain" label="เลขที่การยืม" value="EDS-20206050" />
              </div>
              <div class="grid lg-20 md-1-3">
                <FormGroup type="plain" label="ชื่อผู้ยืม" value="กฤตย์ จีรพัฒนานุวงศ์" />
              </div>
              <div class="grid lg-20 md-1-3 xs-50">
                <FormGroup type="plain" label="รายการยืม" value="5 รายการ" />
              </div>
              <div class="grid lg-20 md-1-3 xs-50">
                <FormGroup type="plain" label="วันเวลายืม" value="20/12/2563, 10:56" />
              </div>
              <div class="grid lg-20 md-1-3 xs-50">
                <FormGroup type="plain" label="วันเวลาคืน" value="22/12/2563, 10:56" />
              </div>
            </div>
          </div>
          <DataTable 
            :withOptions="false"
            :rows="historyData"
            :columns="[
              { key: 'code', text: 'รหัส'},
              { key: 'type', text: 'ประเภท'},
              { key: 'product', text: 'ชื่อสินค้า'},
              { key: 'rent', text: 'จำนวนยืม'},
              { key: 'return', text: 'จำนวนคืน'},
              { key: 'unit', text: 'หน่วย'},
              { key: 'defect', text: 'ชำรุด'},
              { key: 'note', text: 'หมายเหตุ'},
            ]"
          />
          <div id="tooltip" :class="showInfo ? 'box-shadow': 'box-shadow hide'">
            <p class="fw-400">รายละเอียดการชำรุด</p>
            <p class="color-sgray">ถุงให้อาหารขาด</p>
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- Return Popup -->
  <div class="popup-container" :class="{ 'active': returnModalOpen }">
    <div class="wrapper">
      <div class="close-filter" @click="returnModalOpen = !returnModalOpen"></div>
      <form action="/user/teams" method="GET" class="w-full" @submit="onSubmit">
        <div class="popup-box xl">
          <div class="header">
            <div class="btns mt-0">
              <a href="javascript:" class="btn btn-close" @click="returnModalOpen = !returnModalOpen">
                <img class="icon-prepend xs" src="/assets/img/icon/close.svg" alt="Image Icon" />
                ปิดหน้าต่าง
              </a>
            </div>
            <div class="header-wrapper fw-wrap">
              <div class="text-container ws-nowrap pr-3">
                <h6 class="h3">รายละเอียดประวัติคำขอ</h6>
              </div>
            </div>
          </div>
          <div class="body">
            <div class="grids">
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="เลขที่การยืม" value="EDS-20206049" />
              </div>
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="ชื่อผู้ยืม" value="อนุรักษ์ ไทยสงค์" />
              </div>
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="รายการยืม" value="3 รายการ" />
              </div>
              <div class="grid lg-25 md-1-3">
                <FormGroup type="plain" label="วันเวลายืม" value="20/12/2563, 10:56" />
              </div>
            </div>
          </div>
          <DataTable 
            :withOptions="false"
            :rows="returnData"
            :columns="[
              { key: 'code', text: 'รหัส'},
              { key: 'type', text: 'ประเภท'},
              { key: 'product', text: 'ชื่อสินค้า'},
              { key: 'rent', text: 'จำนวนยืม'},
              { key: 'return', text: 'จำนวนคืน'},
              { key: 'left', text: 'คงเหลือ'},
              { key: 'unit', text: 'หน่วย'},
              { key: 'defect', text: 'แจ้งชำรุด'},
            ]"
          />
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
import { createPopper } from '@popperjs/core';

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

      addModalOpen: false,
      cartModalOpen: false,
      infoModalOpen: false,
      deleteModalOpen: false,
      confirmModalOpen: false,
      reportModalOpen: false,
      historyModalOpen: false,
      returnModalOpen: false,
      showInfo: false,

      orderData: [
        {
          id: 1,
          code: { text: 'DX-52260985' },
          type: { text: 'เครื่องมือแพทยทั่วไป' },
          product: { text: 'ถุงให้อาหารผู้ป่วยทางสายยาง ทำให้ปราศจากเชื้อด้วยเอทธิลีนออก...' },
          rent: { text: '15' },
          unit: { text: 'ถุง', classer: 'color-sgray' }
        },
        {
          id: 2,
          code: { text: 'SA-16609880' },
          type: { text: 'เครื่องมือแพทยทั่วไป' },
          product: { text: 'เครื่องมือสแตนเลส' },
          rent: { text: '1' },
          unit: { text: 'ชุด', classer: 'color-sgray' }
        }
      ],

      reportData: [
        {
          code: { text: 'DX-52260985' },
          type: { text: 'เครื่องมือแพทยทั่วไป' },
          product: { text: 'ถุงให้อาหารผู้ป่วยทางสายยาง ทำให้ปราศจากเชื้อด้วยเอทธิลีนออก...' },
          rent: { text: '15' },
          unit: { text: 'ถุง', classer: 'color-sgray' }
        },
        {
          code: { text: 'SA-16609880' },
          type: { text: 'เครื่องมือสแตนเลส' },
          product: { text: 'ถาดล้างแผล 2 หลุม DRESSING TRAY' },
          rent: { text: '1' },
          unit: { text: 'ชุด', classer: 'color-sgray' }
        },
        {
          code: { text: 'TB-00509874' },
          type: { text: 'เครื่องวัดอุณหภูมิ' },
          product: { text: 'HETAIDA Non-Contact Body IR เครื่องวัดอุณหภูมิอินฟราเรด' },
          rent: { text: '5' },
          unit: { text: 'ชิ้น', classer: 'color-sgray' }
        },
        {
          code: { text: 'ST-06196980' },
          type: { text: 'หูฟังแพทย์' },
          product: { text: 'STETHOSCOPE 3M รุ่น CLASSIC II PEDIATRIC' },
          rent: { text: '1' },
          unit: { text: 'ชิ้น', classer: 'color-sgray' }
        }
      ],

      historyData: [
        {
          code: { text: 'DX-52260985' },
          type: { text: 'เครื่องมือแพทยทั่วไป' },
          product: { text: 'ถุงให้อาหารผู้ป่วยทางสายยาง ทำให้ปราศจากเชื้อด้วยเอทธิลีนออก...' },
          rent: { text: '15' },
          return: { text: '14' },
          unit: { text: 'ถุง', classer: 'color-sgray' },
          defect: { 
            text: '1', iconAppend: 'information.svg', iconClasser: 'lg show-info',
            iconOverAppend: (e) => {
              this.showInfo = !this.showInfo;
            },
            iconLeaveAppend: () => {
              this.showInfo = !this.showInfo;
            }
          },
          note: { text: '' },
        },
        {
          code: { text: 'SA-16609880' },
          type: { text: 'เครื่องมือสแตนเลส' },
          product: { text: 'ถาดล้างแผล 2 หลุม DRESSING TRAY' },
          rent: { text: '1' },
          return: { text: '1' },
          unit: { text: 'ชุด', classer: 'color-sgray' },
          defect: { text: '-' },
          note: { text: '' },
        },
        {
          code: { text: 'TB-00509874' },
          type: { text: 'เครื่องวัดอุณหภูมิ' },
          product: { text: 'HETAIDA Non-Contact Body IR เครื่องวัดอุณหภูมิอินฟราเรด' },
          rent: { text: '5' },
          return: { text: '4' },
          unit: { text: 'ชิ้น', classer: 'color-sgray' },
          defect: { text: '-' },
          note: { text: 'สูญหาย' },

        },
        {
          code: { text: 'ST-06196980' },
          type: { text: 'หูฟังแพทย์' },
          product: { text: 'STETHOSCOPE 3M รุ่น CLASSIC II PEDIATRIC' },
          rent: { text: '1' },
          return: { text: '1' },
          unit: { text: 'ชิ้น', classer: 'color-sgray' },
          defect: { text: '-' },
          note: { text: '-' },
        }
      ],

      returnData: [
        {
          code: { text: 'DX-52260985' },
          type: { text: 'เครื่องมือแพทยทั่วไป' },
          product: { text: 'ถุงให้อาหารผู้ป่วยทางสายยาง ทำให้ปราศจากเชื้อด้วยเอทธิลีนออก...' },
          rent: { text: '6' },
          return: { type:'counter', value: 6, min: 0, max: 6, step: 1 },
          unit: { text: 'ถุง', classer: 'color-sgray' },
          left: { text: '0' },
          defect: { 
            text: 'แจ้งชำรุด', classer:'color-01', iconAppend: 'fragile.svg', iconClasser: 'lg show-info',
          },
        },
        {
          code: { text: 'SA-13759285' },
          type: { text: 'เครื่องมือสแตนเลส' },
          product: { text: 'กล่องเครื่องมือ 12" x 8" x 2" พร้อมฝา' },
          rent: { text: '5' },
          return: { type:'counter', value: 2, min: 0, max: 5, step: 1 },
          unit: { text: 'ถุง', classer: 'color-sgray' },
          left: { text: '3' },
          defect: { 
            text: 'แจ้งชำรุด', classer:'color-01', iconAppend: 'fragile.svg', iconClasser: 'lg show-info',
          },
        },
        {
          code: { text: 'SA-16609880' },
          type: { text: 'เครื่องมือสแตนเลส' },
          product: { text: 'ถาดล้างแผล 2 หลุม DRESSING TRAY' },
          rent: { text: '1' },
          return: { type:'counter', value: 0, min: 0, max: 1, step: 1 },
          unit: { text: 'ถุง', classer: 'color-sgray' },
          left: { text: '1' },
          defect: { 
            text: 'แจ้งชำรุด', classer:'color-01', iconAppend: 'fragile.svg', iconClasser: 'lg show-info',
          },
        }
      ],

      isValidated: false,
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

      shoppingBag: [],
      shoppingBagColumns: [
        { key: 'code', text: 'รหัส' },
        { key: 'type', text: 'ประเภท' },
        { key: 'name', text: 'ชื่อสินค้า' },
        { key: 'in_stock', text: 'คงเหลือ' },
        { key: 'unit', text: 'หน่วย' },
        { key: 'require', text: 'ความต้องการ' },
        { key: 'option', text: '' },
      ],

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
      rows4: []
      
    }
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
    for(var i=0; i<7; i++){
      let temp = i;

      this.rows1.push({
        code: { 
          type: 'link', text: 'ES-20247815', href: 'javascript:',
          clickFn: () => this.infoModalOpen = !this.infoModalOpen
        },
        type: { 
          type: 'link', text: 'เครื่องมือแพทยทั่วไป', href: 'javascript:',
          clickFn: () => this.infoModalOpen = !this.infoModalOpen
        },
        product: { 
          type: 'link', text: 'เครื่องผลิตออกซิเจน (รุ่น JAY-5) ฟังก์ชั่นพ่นยา', href: 'javascript:',
          clickFn: () => this.infoModalOpen = !this.infoModalOpen
        },
        in_stock: { 
          type: 'link', text: '1', href: 'javascript:',
          clickFn: () => this.infoModalOpen = !this.infoModalOpen
        },
        unit: { 
          type: 'link', text: 'เครื่อง', href: 'javascript:',
          clickFn: () => this.infoModalOpen = !this.infoModalOpen
        },
        date: {
          type: 'link', text: '20/12/2563', href: 'javascript:',
          clickFn: () => this.infoModalOpen = !this.infoModalOpen
        },
        name: {
          type: 'link', text: 'สโรชา สูหลงกูล', href: 'javascript:',
          clickFn: () => this.infoModalOpen = !this.infoModalOpen
        },
        status: {
          type: 'link', text: 'เพิ่มใส่ตะกร้า', classer: 'color-01', 
          iconPrepend: 'shopping-bag-white.svg', iconClasser: 'lg',
          checked: false, href: 'javascript:',
          clickFn: () => this.toggleShoppingBag(temp)
        },
      });

      this.rows2.push({
        code: { 
          type: 'link', text: 'BR-20206050',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        name: { 
          type: 'link', text: 'กฤตย์ จีรพัฒนานุวงศ์',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        rent: { 
          type: 'link', text: '5',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        date: { 
          type: 'link', text: '20/12/2563, 10:56',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        duration: {
          type: 'link', text: '62 ว. 3 ช.',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        status: {
          type: 'tag', text: 'กำลังยืม', classer: 'ss-tag-warning'
        },
        option: {
          type: 'link', text: 'คืนสินค้า', href: '#', classer: 'color-01',
          iconPrepend: 'circle-arrow-up.svg', iconClasser: 'lg',
          clickFn: () => this.returnModalOpen = !this.returnModalOpen
        },
      });

      this.rows3.push({
        code: { 
          type: 'link', text: 'BOL-20206050',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        name: { 
          type: 'link', text: 'กฤตย์ จีรพัฒนานุวงศ์',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        request: { 
          type: 'link', text: '5',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        date: { 
          type: 'link', text: '20/12/2563, 10:56',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        duration: {
          type: 'link', text: '20 ว. 23 ช.',
          clickFn: () => this.reportModalOpen = !this.reportModalOpen
        },
        status: {
          type: 'tag', text: 'ขอเบิก', classer: 'ss-tag-warning'
        },
        option: {
          type: 'link', text: 'คืนสินค้า', href: '#', classer: 'color-01',
          iconPrepend: 'circle-arrow-up.svg', iconClasser: 'lg'
        },
      });

      this.rows4.push({
        code: { 
          type: 'link', text: 'EDS-20206049',
          clickFn: () => this.historyModalOpen = !this.historyModalOpen
        },
        type: { 
          type: 'link', text: 'ยืมสินค้า',
          clickFn: () => this.historyModalOpen = !this.historyModalOpen
        },
        name: { 
          type: 'link', text: 'กฤตย์ จีรพัฒนานุวงศ์',
          clickFn: () => this.historyModalOpen = !this.historyModalOpen
        },
        request: { 
          type: 'link', text: '3',
          clickFn: () => this.historyModalOpen = !this.historyModalOpen
        },
        start_date: { 
          type: 'link', text: '16/12/2563, 15:20',
          clickFn: () => this.historyModalOpen = !this.historyModalOpen
        },
        end_date: {
          type: 'link', text: '21/12/2563, 10:56',
          clickFn: () => this.historyModalOpen = !this.historyModalOpen
        },
        duration: {
          type: 'link', text: '1 ว. 2 ช. 43 นาที',
          clickFn: () => this.historyModalOpen = !this.historyModalOpen
        },
      });
    }
  },
  props: {
    tabActiveIndex: { type: Number, default: 0 }
  },
  mounted() {
    this.$nextTick(function() {
      var infoIcon = document.querySelector('.icon.show-info');
      var tooltip = document.querySelector('#tooltip');
      createPopper(infoIcon, tooltip, {
        placement: 'top-end'
      });
    });
  },
  methods: {

    toggleShoppingBag(id) {
      if(this.rows1[id].status.checked){
        this.rows1[id].status.checked = false;
        this.rows1[id].status.text = 'เพิ่มใส่ตะกร้า';
        this.rows1[id].status.iconPrepend = 'shopping-bag-white.svg';
      }else{
        this.rows1[id].status.checked = true;
        this.rows1[id].status.text = 'เพิ่มแล้ว';
        this.rows1[id].status.iconPrepend = 'shopping-bag-checked.svg';
      }
      this.filterShoppingBag();
    },
    filterShoppingBag() {
      var that = this;
      that.shoppingBag = [];
      that.rows1.map(function(d){
        if(d.status.checked){
          that.shoppingBag.push({
            code: { text: 'DX-52260985'},
            type: { text: 'เครื่องมือแพทยทั่วไป'},
            name: { text: 'ถุงให้อาหารผู้ป่วยทางสายยาง ทำให้ปราศจากเชื้อด้วยเอทธิลีนออก...'},
            in_stock: { text: '50'},
            unit: { text: 'ถุง'},
            require: { type:'counter', value: 15, min: 1, max:50, step: 1 },
            option: {
              type:'icon', icon: 'delete.svg'
            }
          });
        }
      });
    },

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
