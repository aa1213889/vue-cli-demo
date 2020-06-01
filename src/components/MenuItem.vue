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
        <div class="content-item-title pt-0">HomePage</div>
        <router-link tag="div" class="content_item_row" v-for="item in menuFormHome" :to="item.link" :key="item.name">
          <div class="item_row_logo" v-bind:class="item.icon"></div>
          <div class="item_row_title">{{ item.name }}</div>
        </router-link>

        <div class="content-item-title pt-0">Form</div>
        <router-link tag="div" class="content_item_row" v-for="item in menuFormArr" :to="item.link" :key="item.name">
          <div class="item_row_logo" v-bind:class="item.icon"></div>
          <div class="item_row_title">{{ item.name }}</div>
        </router-link>

        <div class="content-item-title">Data</div>
        <router-link tag="div" class="content_item_row" v-for="item in menuDataArr" :to="item.link" :key="item.name">
          <div class="item_row_logo" v-bind:class="item.icon"></div>
          <div class="item_row_title">{{ item.name }}</div>
        </router-link>

        <div class="content-item-title">Notice</div>
        <router-link tag="div" class="content_item_row" v-for="item in menuNoticeArr" :to="item.link" :key="item.name">
          <div class="item_row_logo" v-bind:class="item.icon"></div>
          <div class="item_row_title">{{ item.name }}</div>
        </router-link>

        <div class="content-item-title">Other</div>
        <router-link tag="div" class="content_item_row" v-for="item in menuOthersArr" :to="item.link" :key="item.name">
          <div class="item_row_logo" v-bind:class="item.icon"></div>
          <div class="item_row_title">{{ item.name }}</div>
        </router-link>
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
      menuFormHome: [
        { name: "首页", icon: "icon_input", link: "homepage" }
      ],
      menuFormArr: [
        { name: "Input 输入框", icon: "icon_input", link: "input" },
        { name: "Select 下拉选择", icon: "icon_selectbox", link: "select" },
        {
          name: "DataPicker 日期选择",
          icon: "icon_calendar",
          link: "datapicker",
        },
        {
          name: "TimePicker 时间选择",
          icon: "icon_tablegrid",
          link: "timepicker",
        },
        {
          name: "InputNumber 计数器",
          icon: "icon_tablegrid",
          link: "inputnumber",
        },
        { name: "Radio 单选框", icon: "icon_selectbox", link: "radio" },
        { name: "Checkbox 多选框", icon: "icon_selectbox", link: "checkbox" },
        { name: "Switch 开关", icon: "icon_tablegrid", link: "switch" },
        { name: "Slider 滑块", icon: "icon_tablegrid", link: "slider" },
        { name: "Form 表单", icon: "icon_tablegrid", link: "form" },
      ],
      menuDataArr: [
        { name: "TreeList 树形控件", icon: "icon_treelist", link: "treelist" },
        { name: "TableGrid 表格", icon: "icon_tablegrid", link: "tablegrid" },
        { name: "Progress 进度条", icon: "icon_tablegrid", link: "Progress" },
      ],
      menuNoticeArr: [
        { name: "Message 消息提醒", icon: "icon_tablegrid", link: "message" },
        { name: "MessageBox 弹框", icon: "icon_tablegrid", link: "messagebox" },
        {
          name: "Notification 通知",
          icon: "icon_tablegrid",
          link: "notification",
        },
      ],
      menuOthersArr: [
        { name: "Carousel 走马灯", icon: "icon_tablegrid", link: "carousel" },
        { name: "Calendar 日历", icon: "icon_calendar", link: "calendar" },
        { name: "TimeLine 时间线", icon: "icon_calendar", link: "timeline" },
        { name: "Tabs 选项卡", icon: "icon_treelist", link: "tabs" },
      ],
    };
  },
  props: {
    msg: String,
  },
  methods: {},
};
</script>

<style scoped>
.menu {
  min-height: 550px;
  height: 100%;
  background: url(../assets/menu.png);
  background-size: cover;
  width: 260px;
  position: fixed;
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
  height: calc(100% - 110px);
  padding-top: 20px;
  overflow: auto;
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
  user-select: none;
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
.content-item-title {
  color: #fff;
  padding-top: 20px;
}
.pt-0 {
  padding-top: 0px;
}
</style>
