<template>
  <div class="menu">
    <div class="menu_content">
      <div class="menu_content_logo">
        <div class="logo_circle">
          <div class="logo_vue"></div>
        </div>
        <div class="content_logo_font">Vue Material</div>
      </div>
      <hr class="divider" />
      <div class="menu_content_item">
        <div class="content_item_row">
          <div class="item_row_logo"></div>
          <div class="item_row_title">输入框</div>
        </div>
      </div>
      <div class="menu_content_bottombar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  components: {},
  data() {
    return {
      menuArr: [
        { name: "输入框", url: "" },
        { name: "选择框", url: "" },
        { name: "日历", url: "" },
        { name: "树形菜单", url: "" },
        { name: "表格", url: "" },
        { name: "表格", url: "" }
      ]
    };
  },
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
.menu {
  min-height: 550px;
  height: 100%;
  background: url(../assets/menu.png);
  background-size: cover;
  width: 260px;
}
.menu_content {
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.64);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu_content_logo {
  padding-top: 20px;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.divider {
  border-color: hsla(0, 0%, 70.6%, 0.3);
  margin-left: 20px;
  margin-right: 20px;
}
.content_logo_font {
  height: unset;
  font-size: 18px !important;
  font-weight: 400;
  letter-spacing: unset !important;
  color: #fff;
  padding-left: 10px;
}
.logo_circle {
  height: 40px;
  width: 40px;
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
    0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo_vue {
  width: 25px;
  height: 25px;
  background: url(../assets/Vue.png);
  background-size: cover;
}
.menu_content_item {
  width: 90%;
  height: calc(100% - 200px);
  border: solid 1px salmon;
  padding-top: 20px;
}
.content_item_row {
  border-radius: 4px;
  width: 100%;
  padding: 10px 15px;
  height: 50px;
  cursor: pointer;
}
.item_row_title {
  font-size: 14px !important;
  font-weight: 300;
    color: #fff;
}
</style>
