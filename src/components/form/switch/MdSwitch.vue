<template>
  <div class="md-switch" @click="switchChange()">
    <div class="inactive-text txt" v-show="isTextShow">{{text}}</div>
    <div class="md-core" :class="[clickBool===true?'md-core-checked':'',isDisabled===true?'md-core-disabled':'']">
      <div class="md-core-cir" :class="[clickBool===true?'md-core-cir-checked':'']"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "md-switch",
  props: ["keys", "disabled", "text"],
  watch: {},
  data() {
    return {
      clickBool: false,
      isDisabled: false,
      isTextShow: false,
    };
  },
  mounted() {
    if (this.disabled === '') this.isDisabled = true;
    if (this.text) { this.isTextShow = true, this.text = this.text + '：' }
    this.clickBool = this.keys;
  },
  //1.基础用法 2.文字描述 3.禁用状态
  methods: {
    switchChange() {
      if (this.isDisabled) return;
      this.clickBool = !this.clickBool;
    }
  }
};
</script>
<style scoped lang="less">
.md-switch {
  height: 20px;
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  .md-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .md-core {
    width: 30px;
    height: 12px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14) !important;
    background-color: #d6d1d1;
    transition: background-color 0.3s;
    .md-core-cir {
      content: "";
      position: absolute;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      background-color: #efecec;
      margin-left: -4px;
      transition: background-color 0.3s, margin-left 0.3s;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14) !important;
    }
    .md-core-cir-checked {
      background-color: rgb(0, 151, 137);
      margin-left: calc(100% - 12px);
      transition: background-color 0.3s, margin-left 0.3s;
    }
  }
  .md-core-checked {
    background-color: #9fc3c0;
    transition: background-color 0.3s;
  }
  .md-core-disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .txt {
    font-size: 14px;
    color: #303133;
    transition: color 0.3s;
    padding-right: 5px;
  }
}
</style>
