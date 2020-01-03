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
</style>