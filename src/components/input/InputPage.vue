<template>
  <div class="inputpage">
    <div class="header">User Profile</div>
    <div class="content">
      <div class="flex_box">
        <div class="flex_box_logo">
          <div class="box_logo_card box_green">
            <div></div>
          </div>
        </div>
        <div class="flex_box_txt"></div>
        <hr class="flex_box_line" />
        <div class="flex_box_hint"></div>
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
.inputpage {
  background: rgb(238, 238, 238);
  flex: 1;
  padding: 1%;
}
.flex_box {
  width: 25%;
  height: 180px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14) !important;
  border-radius: 3px;
  background-color: #fff;
  border-color: #fff;
  color: rgba(0, 0, 0, 0.87);
}
.flex_box_line {
  border-top: 1px solid #eee;
  margin-left: 20px !important;
  margin-right: 20px !important;
  margin-bottom: 1px;
}
.flex_box_logo {
  position: absolute;
  flex: 0 1;
  margin-top: -20px;
  margin-left: 0;
  margin-right: auto;
  margin-bottom: 0 !important;
  max-width: auto;
  padding: 0 16px;
}
.box_logo_card {
  width: 85px;
  height: 85px;
  padding: 15px !important;
}
.box_green {
  background: linear-gradient(60deg, #66bb6a, #43a047);
  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28),
    0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);
}
</style>