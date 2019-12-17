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
        <div
          class="content_item_row"
          v-for="item in menuArr"
          @click="menuClick(item.name)"
          v-bind:class="{active_row:item.name === nowSelect}"
          :key="item.name"
        >
          <div class="item_row_logo" v-bind:class="item.icon"></div>
          <div class="item_row_title">{{item.name}}</div>
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
      nowSelect: "Input",
      menuArr: [
        { name: "Input", icon: "icon_input" },
        { name: "SelectBox", icon: "icon_selectbox" },
        { name: "Calendar", icon: "icon_calendar" },
        { name: "TreeList", icon: "icon_treelist" },
        { name: "TableGrid", icon: "icon_tablegrid" }
      ]
    };
  },
  props: {
    msg: String
  },
  methods: {
    clickLink: function() {
      this.$router.push("./sb");
    },
    menuClick: function(name) {
      this.nowSelect = name; //点击当前元素添加class 去掉兄弟的class
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
  width: 240px;
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
  /* border: solid 1px salmon; */
  padding-top: 20px;
}
.content_item_row {
  border-radius: 4px;
  width: 100%;
  padding: 10px 15px;
  height: 50px;
  cursor: pointer;
  display: flex;
  margin-top: 10px;
  align-items: center;
}
.content_item_row:hover {
  background-color: hsla(0, 0%, 78.4%, 0.2);
}
.content_item_row.active_row {
  background-color: #4caf50 !important;
}
.item_row_title {
  font-size: 14px !important;
  font-weight: 300;
  color: #fff;
  padding-left: 30px;
}
.item_row_logo {
  width: 25px;
  height: 25px;
}
.icon_input {
  background: url(../assets/menu/Input.png);
  background-size: cover;
}
.icon_selectbox {
  background: url(../assets/menu/SelectBox.png);
  background-size: cover;
}
.icon_calendar {
  background: url(../assets/menu/Calendar.png);
  background-size: cover;
}
.icon_treelist {
  background: url(../assets/menu/TreeList.png);
  background-size: cover;
}
.icon_tablegrid {
  background: url(../assets/menu/TableGrid.png);
  background-size: cover;
}
</style>
