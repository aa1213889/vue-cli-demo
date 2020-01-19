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
            <div class="pd_10">Missed call notification</div>
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
            <div class="pd_10">The stock rose 1.6 percent.</div>
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
                <div class="tablebox_title_el title_el30">Minerva Hooper</div>
                <div class="tablebox_title_el title_el20">$23,738</div>
                <div class="tablebox_title_el title_el20">Curaçao</div>
                <div class="tablebox_title_el title_el20 title_el_end">Sinaai-Waas</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el10">3</div>
                <div class="tablebox_title_el title_el30">Sage Rodriguez</div>
                <div class="tablebox_title_el title_el20">$56,142</div>
                <div class="tablebox_title_el title_el20">Netherlands</div>
                <div class="tablebox_title_el title_el20 title_el_end">Overland Park</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el10">4</div>
                <div class="tablebox_title_el title_el30">Philip Chanley</div>
                <div class="tablebox_title_el title_el20">$38,735</div>
                <div class="tablebox_title_el title_el20">Korea, South</div>
                <div class="tablebox_title_el title_el20 title_el_end">Gloucester</div>
              </div>
              <div class="tablebox_row">
                <div class="tablebox_title_el title_el10">5</div>
                <div class="tablebox_title_el title_el30">Geralt</div>
                <div class="tablebox_title_el title_el20">$63,542</div>
                <div class="tablebox_title_el title_el20">Nilfgaardian</div>
                <div class="tablebox_title_el title_el20 title_el_end">Kaer Morhen</div>
              </div>
            </div>
          </div>
        </div>
        <div class="task_box flex_box">
          <div class="flex_box_logo">
            <div class="box_logo_card box_green table_box_card">
              <div class="flex_box_title flex_weight300">
                <div>Tasks:</div>
                <div class="flex_box_tabs">
                  <div
                    class="flex_tabs_tag animated"
                    @click="tabTagClick(index)"
                    v-for="(item,index) in tabContent"
                    :key="item.name"
                  >
                    <div
                      class="flex_tag_center"
                      :class="[{bounceIn:index == tabIndex},item.classWidth]"
                    >
                      <div class="flex_tags_icon" :class="item.classIcon"></div>
                      <div>{{item.name}}</div>
                    </div>
                  </div>
                  <div class="flex_tabs_line">
                    <div class="tabs_line_horizon"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="task_box_content">
              <div class="task_box_page">111111111111</div>
              <div class="task_box_page">222222222</div>
              <div class="task_box_page">3333333</div>
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
  data: () => ({
    tabContent: [
      { name: "Bugs", classWidth: "width_55", classIcon: "logo_bugs" },
      { name: "Website", classWidth: "width_75", classIcon: "logo_web" },
      { name: "Server", classWidth: "width_65", classIcon: "logo_server" }
    ],
    tabIndex: 0
  }),
  methods: {
    tabTagClick(index) {
      let lineDom = document.querySelector(".tabs_line_horizon");
      lineDom.style.transform = `translate(${100 * index}%,0px)`;
      this.tabIndex = index;
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

.logo_bugs {
  background: url(../../assets/demo/bug.png);
  background-size: cover;
}

.logo_web {
  width: 25px;
  height: 25px;
  background: url(../../assets/demo/web.png);
  background-size: cover;
}

.logo_server {
  width: 21px;
  height: 15px;
  background: url(../../assets/demo/server.png);
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