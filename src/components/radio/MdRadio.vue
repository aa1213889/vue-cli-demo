<template>
  <div class="md-radio" @click="radioChecked()">
    <div class="md-radio-box">
      <div class="md-radio-div" :class="[label===initLabel?'radio-div-checked':'']"></div>
      <input type="radio" class />
    </div>
    <span class="radio-font" :class="[label===initLabel?'radio-font-checked':'']">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "md-radio",
  props: ["label", "value"],
  watch: {},
  model: {
    prop: "value",
    event: "cc"
  },
  data() {
    return {
      initLabel: ""
    };
  },
  mounted() {
    this.initLabel = this.value;
  },

  methods: {
    radioChecked() {
      this.$emit("cc", String(this.label));
    }
  }
};
</script>
<style scoped lang="less">
.md-radio {
  width: auto;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  .md-radio-box {
    .md-radio-div {
      width: 14px;
      height: 14px;
      background-color: rgb(255, 255, 255);
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(220, 223, 230);
      border-radius: 100%;
    }
    .radio-div-checked {
      border-color: rgb(64, 158, 255);
      background: rgb(64, 158, 255);
    }
    .radio-div-checked::after {
      width: 4px;
      height: 4px;
      background-color: rgb(255, 255, 255);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      border-radius: 100%;
      transition: transform 0.15s ease-in 0s;
    }

    .md-radio-input {
      opacity: 0;
      position: absolute;
      z-index: -1;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      outline: none;
      margin: 0px;
    }
  }
  .radio-font {
    font-size: 14px;
    padding-left: 10px;
    color: rgb(96, 98, 102);
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    font-size: 14px;
    margin-right: 30px;
    user-select: none;
  }
  .radio-font-checked {
    color: rgb(64, 158, 255);
  }
}
</style>
