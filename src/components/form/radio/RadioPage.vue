<template>
  <div class="radio-page item_page">
    <div class="content">
      <div class="content-header">
        <div class="header">Radio 单选框</div>
        <div class="content-title-hint">在一组备选项中进行单选</div>
      </div>
      <div class="content_row flex-col pt-40">
        <div class="flex_box_logo">
          <div class="box_logo_card box_orange table_box_card">
            <div class="table_box_title">基础用法</div>
            <div class="table_box_date">由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器</div>
          </div>
        </div>
        <div class="content-example">
          <div class="content-example-header">
            <div class="content-example-box">
              <md-radio v-model="radio" label="1">item1</md-radio>
              <md-radio v-model="radio" label="2">item2</md-radio>
              <md-radio v-model="radio" label="3">item3</md-radio>
            </div>
          </div>
          <div class="content-example-body">
            <div class="content-example-show">
              <span>options</span>为
              <span>md-select</span>的选项集合
            </div>
            <div class="content-example-code">
              <pre></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MdRadio from "./MdRadio.vue";
export default {
  name: "RadioPage",
  data() {
    return {
      radio: "1"
    };
  },
  props: {},
  components: {
    MdRadio
  },
  methods: {},
  watch: {
    radio(newValue) {
       console.log(newValue)
    }
  },
};
</script>

<style scoped lang="less">
@import "../../../assets/css/page.css";
@import "../../../assets/css/preCode.less";

.radio-page {
  background: #fff;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
}

.header {
  display: flex;
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
}
</style>