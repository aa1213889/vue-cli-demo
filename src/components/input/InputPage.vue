<template>
  <div class="inputpage item_page">
    <div class="header">Demo</div>
    <div class="content">
      <div class="content_row">
        <div class="flex_box">
          <div class="flex_box_logo">
            <div class="box_logo_card box_green">
              <div class="logo_card_pic logo_shop"></div>
            </div>
          </div>
          <div class="flex_box_txt">
            <div class="box_txt_div">
              <div class="txt_div_title">Balance</div>
              <div class="txt_div_num">￥34,245</div>
            </div>
          </div>
          <hr class="flex_box_line" />
          <div class="flex_box_hint">
            <div class="box_hint_pic logo_hint"></div>
            <div class="pd_10">Last 24 Hours</div>
          </div>
        </div>
        <div class="flex_box">
          <div class="flex_box_logo">
            <div class="box_logo_card box_orange">
              <div class="logo_card_pic logo_phonebook"></div>
            </div>
          </div>
          <div class="flex_box_txt">
            <div class="box_txt_div">
              <div class="txt_div_title">Contacts</div>
              <div class="txt_div_num">233.</div>
            </div>
          </div>
          <hr class="flex_box_line" />
          <div class="flex_box_hint">
            <div class="box_hint_pic logo_misscall"></div>
            <div class="pd_10">missed call notification</div>
          </div>
        </div>
        <div class="flex_box">
          <div class="flex_box_logo">
            <div class="box_logo_card box_red">
              <div class="logo_card_pic logo_stock"></div>
            </div>
          </div>
          <div class="flex_box_txt">
            <div class="box_txt_div">
              <div class="txt_div_title">Share Price</div>
              <div class="txt_div_num">$473.12</div>
            </div>
          </div>
          <hr class="flex_box_line" />
          <div class="flex_box_hint">
            <div class="box_hint_pic logo_rise"></div>
            <div class="pd_10">The stock rose 1.6 percent to colse at 7.57 dollar today.</div>
          </div>
        </div>
        <div class="flex_box">
          <div class="flex_box_logo">
            <div class="box_logo_card box_blue">
              <div class="logo_card_pic logo_file"></div>
            </div>
          </div>
          <div class="flex_box_txt">
            <div class="box_txt_div">
              <div class="txt_div_title">Used Space</div>
              <div class="txt_div_num">49/50 GB</div>
            </div>
          </div>
          <hr class="flex_box_line" />
          <div class="flex_box_hint">
            <div class="box_hint_pic logo_warn"></div>
            <div class="pd_10">Get more space...</div>
          </div>
        </div>
      </div>
      <div class="content_row mtop90">
        <div class="table_box flex_box">
          <div class="flex_box_logo">
            <div class="box_logo_card box_orange table_box_card">
              <div class="table_box_title">Employee Stats</div>
              <div class="table_box_date">New employees on 15th September, 2018</div>
            </div>
          </div>
          <div class="tablebox_body">
            <div class="tablebox_title">
              <div class="tablebox_title_el title_el10">ID</div>
              <div class="tablebox_title_el title_el30">Name</div>
              <div class="tablebox_title_el title_el20">Salary</div>
              <div class="tablebox_title_el title_el20">County</div>
              <div class="tablebox_title_el title_el20 title_el_end">City</div>
            </div>
            <div class="tablebox_content">
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el10">1</div>
                <div class="tablebox_title_el title_el30">Dakota Rice</div>
                <div class="tablebox_title_el title_el20">$35,738</div>
                <div class="tablebox_title_el title_el20">Canada</div>
                <div class="tablebox_title_el title_el20 title_el_end">Vancouver</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el10">2</div>
                <div class="tablebox_title_el title_el30">Dakota Rice</div>
                <div class="tablebox_title_el title_el20">$35,738</div>
                <div class="tablebox_title_el title_el20">Canada</div>
                <div class="tablebox_title_el title_el20 title_el_end">Vancouver</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el10">3</div>
                <div class="tablebox_title_el title_el30">Dakota Rice</div>
                <div class="tablebox_title_el title_el20">$35,738</div>
                <div class="tablebox_title_el title_el20">Canada</div>
                <div class="tablebox_title_el title_el20 title_el_end">Vancouver</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el10">4</div>
                <div class="tablebox_title_el title_el30">Dakota Rice</div>
                <div class="tablebox_title_el title_el20">$35,738</div>
                <div class="tablebox_title_el title_el20">Canada</div>
                <div class="tablebox_title_el title_el20 title_el_end">Vancouver</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el10">5</div>
                <div class="tablebox_title_el title_el30">Dakota Rice</div>
                <div class="tablebox_title_el title_el20">$35,738</div>
                <div class="tablebox_title_el title_el20">Canada</div>
                <div class="tablebox_title_el title_el20 title_el_end">Vancouver</div>
              </div>
            </div>
          </div>
        </div>
        <div class="task_box flex_box">
          <div class="flex_box_logo">
            <div class="box_logo_card box_green"></div>
          </div>
        </div>
      </div>
      <div class="content_row" style="justify-content: flex-start;">
        <div class="t1">1</div>
        <div class="t1 t2">2</div>
        <div class="t1">3</div>
        <div class="t1">4</div>
        <div class="t1">5</div>
        <div class="t1">6</div>
        <div class="t1">7</div>
        <div class="t1">8</div>
      </div>

      <div class="content_row">
        <pre>
          methods: {
             clickLink: function() {
               this.$router.push("./sb");
             }
          }
         </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputPage",
  props: {
    msg: String
  },
  methods: {
    clickLink: function() {
      this.$router.push("./sb");
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/page.css";
.logo_shop {
  background: url(../../assets/demo/shop.png);
  background-size: cover;
}
.logo_hint {
  background: url(../../assets/demo/hint_logo.png);
  background-size: cover;
}
.logo_misscall {
  width: 20px;
  height: 20px;
  background: url(../../assets/demo/missed_calls.png);
  background-size: cover;
}
.logo_rise {
  width: 20px;
  height: 20px;
  background: url(../../assets/demo/rise.png);
  background-size: cover;
}

.logo_warn {
  background: url(../../assets/demo/warn_logo.png);
  background-size: cover;
}
.logo_phonebook {
  background: url(../../assets/demo/phonebook.png);
  background-size: cover;
}

.logo_file {
  background: url(../../assets/demo/file.png);
  background-size: cover;
}

.logo_stock {
  background: url(../../assets/demo/stock.png);
  background-size: cover;
}

.pd_10 {
  padding-left: 2px;
  text-indent: 1em;
}
.t1 {
  width: 25%;
  height: 50px;
  background-color: brown;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid rgb(238, 238, 238);
}
.t2 {
  background-color: blueviolet;
}
pre {
  color: rgb(230, 236, 241);
  display: block;
  hyphens: none;
  tab-size: 2;
  direction: ltr;
  font-size: 14px;
  text-align: left;
  word-break: normal;
  font-family: "Source Code Pro", Consolas, Menlo, Monaco, Courier, monospace;
  line-height: 1.4;
  white-space: pre;
  word-spacing: normal;
  margin: 32px 0px;
  padding: 24px 24px 24px 8px;
  overflow: auto;
  background: rgb(24, 48, 85);
  border-radius: 3px;
}
</style>