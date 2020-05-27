<template>
  <div class="md-switch" @click="switchChange()">
    <input type="checkbox" class="md-input">
    <div class="md-core" :class="[clickBool===true?'md-core-checked':'']">
      <div class="md-core-cir" :class="[clickBool===true?'md-core-cir-checked':'']"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "md-switch",
  props: ["label", "value"],
  watch: {},
  model: {
    prop: "value",
    event: "cc"
  },
  data() {
    return {
      initLabel: "",
      clickBool: false,
    };
  },
  mounted() {
    this.initLabel = this.value;
  },
//1.基础用法 2.文字描述 3.禁用状态
  methods: {
    switchChange() {
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
    width: 40px;
    height: 100%;
    border-radius: 10px;
    background-color: #dcdfe6;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background-color 0.3s;
    .md-core-cir {
      content: "";
      position: absolute;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      background-color: #fff;
      left: 2px;
      transition: left 0.3s;
    }
    .md-core-cir-checked {
      content: "";
      position: absolute;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      background-color: #fff;
      left: calc(100% - 18px);
      transition: left 0.3s;
    }
  }
  .md-core-checked {
    border-color: rgb(64 158 255);
    background-color: rgb(64 158 255);
    transition: background-color 0.3s;
  }
}
</style>
