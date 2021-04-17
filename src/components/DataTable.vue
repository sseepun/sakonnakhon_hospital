<template>

  <div class="table-options">
    <div v-if="orders.length" class="options hide-mobile">
      <div class="option">
        <span class="color-gray">จัดเรียงตาม:</span> 
        <select class="xs no-border color-01" @input="(event)=>doOrder(event.target.value)">
          <option 
            v-for="(order, index) in orders" :key="order.key" :value="order.key" 
            :selected="index == 0"
          >
            {{order.text}}
          </option>
        </select>
      </div>
    </div>
    <div class="options">
      <div v-if="search.length > 0" class="option">
        <div class="form-group">
          <div class="prepend xs">
            <input type="text" class="xs" placeholder="ค้นหารายการ"
              @input="(event)=>doSearch(event.target.value)" 
            />
            <div class="icon">
              <img src="/assets/img/icon/search.svg" alt="Image Icon" />
            </div>
          </div>
        </div>
      </div>
      <div class="option hide-mobile">
        แสดง 
        {{Math.min(selfFilteredRows.length, (selfPage - 1) * pp + 1)}} – 
        {{Math.min(selfFilteredRows.length, selfPage * pp + 1)}} จากทั้งหมด 
        {{selfFilteredRows.length}} 
        รายการ
      </div>
      <div class="option pr-0 show-mobile">
        แสดงทั้งหมด
        {{Math.min(pp, selfFilteredRows.length - (selfPage - 1) * pp)}}
        รายการ
      </div>
      <div class="option pr-0 hide-mobile">
        <a href="javascript:" @click="changePage(-1)" class="btn-chev" :class="{ 'disabled': selfPage == 1 }">
          <img src="/assets/img/icon/caret-left.svg" alt="Image Icon" />
        </a>
        <a href="javascript:" @click="changePage(1)" class="btn-chev" :class="{ 'disabled': selfPage == selfMaxPage }">
          <img src="/assets/img/icon/caret-right.svg" alt="Image Icon" />
        </a>
      </div>
    </div>
  </div>

  <div class="table-wrapper">
    <table class="table-section">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">
            {{col.text}}
          </th>
        </tr>
      </thead>
      <tbody v-if="selfRows.length">
        <tr v-for="(row, index) in selfRows" :key="index">
          <td v-for="col in columns" :key="col.key">
            <div v-if="row[col.key].type == 'text'" 
              class="d-flex ai-center" :class="row[col.key].classer"
            >
              <div v-html="highlight(col.key, row[col.key].text)"></div>
              <img v-if="row[col.key].iconPrepend" class="icon prepend"
                :src="'/assets/img/icon/'+row[col.key].iconPrepend" alt="Image Icon" 
              />
            </div>
            <a v-else-if="row[col.key].type == 'link'" 
              class="d-flex ai-center" :class="row[col.key].classer" 
              :href="row[col.key].href"
            >
              <div v-html="highlight(col.key, row[col.key].text)"></div>
              <img v-if="row[col.key].iconPrepend" class="icon prepend"
                :src="'/assets/img/icon/'+row[col.key].iconPrepend" alt="Image Icon" 
              />
            </a>
            <div v-else-if="row[col.key].type == 'tag'" 
              class="ss-tag" :class="row[col.key].classer"
            >
              <div v-html="highlight(col.key, row[col.key].text)"></div>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td class="text-center" :colspan="columns.length">
            ไม่พบข้อมูลที่ค้นหา
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'DataTable',
  props: {
    columns: { type: Array, default: [] },
    rows: { type: Array, default: [] },
    page: { type: Number, default: 1 },
    pp: { type: Number, default: 10 },
    search: { type: Array, default: [] },
    orders: { type: Array, default: [] }
  },
  data() {
    return {
      selfPage: this.page,
      selfMaxPage: Math.ceil(this.rows.length / this.pp),
      selfFilteredRows: [...this.rows],
      selfRows: [...this.rows].slice(0, this.page * this.pp),
      selfSearch: ''
    }
  },
  methods: {
    changePage(val) {
      this.selfPage += val;
      this.selfPage = Math.max(1, this.selfPage);
      this.selfPage = Math.min(this.selfMaxPage, this.selfPage);
      this.selfRows = this.selfFilteredRows.slice(
        (this.selfPage - 1) * this.pp, this.selfPage * this.pp
      );
    },
    doSearch(val) {
      this.selfSearch = val;
      if(val){
        var search = this.search;
        this.selfFilteredRows = this.rows.filter(function(item){
          var valid = false;
          for(var s of search){
            if(item[s] && item[s].text.indexOf(val) > -1){
              valid = true;
              break;
            }
          }
          return valid;
        });
      }else{
        this.selfFilteredRows = [...this.rows];
      }
      this.selfPage = 1;
      this.selfMaxPage = Math.ceil(this.selfFilteredRows.length / this.pp);
      this.selfRows = this.selfFilteredRows.slice(
        (this.selfPage - 1) * this.pp, this.selfPage * this.pp
      );
      return true;
    },
    doOrder(val) {
      if(val.indexOf('-asc') > -1){
        val = val.replace('-asc', '');
        this.selfFilteredRows.sort(function(a, b){
          if(!a[val] || !b[val]){
            return false;
          }else{
            return (a[val].text > b[val].text)? -1: ((b[val].text > a[val].text)? 1: 0);
          }
        });
      }else if(val.indexOf('-desc') > -1){
        val = val.replace('-desc', '');
        this.selfFilteredRows.sort(function(a, b){
          if(!a[val] || !b[val]){
            return false;
          }else{
            return (a[val].text > b[val].text)? 1: ((b[val].text > a[val].text)? -1: 0);
          }
        });
      }
      this.selfRows = this.selfFilteredRows.slice(
        (this.selfPage - 1) * this.pp, this.selfPage * this.pp
      );
      return true;
    },
    highlight(key, text) {
      if(this.search.indexOf(key) > -1 && this.selfSearch){
        return text.replace(
          new RegExp(this.selfSearch, 'ig'), 
          '<span class="h">'+this.selfSearch+'</span>'
        );
      }else{
        return text;
      }
    }
  },
  created() {
    if(this.orders.length){
      this.doOrder(this.orders[0].key);
    }
  }
}
</script>