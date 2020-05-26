<template>
  <div class="md-switch" @click="switchChange()">
    <input type="checkbox" class="md-input">
    <div class="md-core"></div>
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
      initLabel: ""
    };
  },
  mounted() {
    this.initLabel = this.value;
  },

  methods: {
    switchChange() {

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
    background: #dcdfe6;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .md-core::after {
    content: "";
    position: absolute;
    border-radius: 100%;
    width: 16px;
    height: 16px;
    background-color: #fff;
    left: 2px;
    //left: calc(100% - 18px);
  }
}
</style>
