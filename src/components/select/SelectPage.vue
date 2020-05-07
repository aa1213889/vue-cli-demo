<template>
  <div class="selectpage item_page">
    <div class="header">Select 选择器</div>
    <div class="content">
      <div class="content_row flex-col">
        <!-- <div class="content-title">
          <div class="content-title-name">基础用法</div>
          <div class="content-title-hint">适用广泛的基础单选</div>
        </div>-->
        <div class="flex_box_logo width98">
          <div class="box_logo_card box_orange table_box_card">
            <div class="table_box_title">基础用法</div>
            <div class="table_box_date">适用广泛的基础单选</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header"></div>
          <div class="content-example-body"></div>
        </div>
      </div>
      <div class="content_row flex-col"></div>
      <div class="content_row flex-col">
        <md-select :options="options"></md-select>
        <span>233</span>
      </div>
    </div>
  </div>
</template>

<script>
import MdSelect from "./MdSelect.vue";

export default {
  name: "SelectPage",
  data() {
    return {
      options: [
        {
          id: "0001",
          value: "Android"
        },
        {
          id: "0002",
          value: "IOS"
        },
        {
          id: "0003",
          value: "Liunx"
        },
        {
          id: "0004",
          value: "Windows"
        },
        {
          id: "0005",
          value: "UNIX"
        },
        {
          id: "0006",
          value: "Mac OS"
        }
      ]
    };
  },
  props: {
    msg: String
  },
  components: {
    MdSelect
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "../../assets/css/page.css";
.selectpage {
  background: rgb(238, 238, 238);
}
</style>