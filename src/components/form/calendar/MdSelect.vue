<template>
    <md-select class="md-select">
      <div class="md-select-box">
        <div class="md-select-value"></div>
        <div class="md-select-label"></div>
        <div class="md-select-arrows"></div>
      </div>
    </md-select>
</template>
<script>
// const testData = [
//   {
//     value: "选项1",
//     label: "黄金糕"
//   },
//   {
//     value: "选项2",
//     label: "双皮奶"
//   },
//   {
//     value: "选项3",
//     label: "蚵仔煎"
//   },
//   {
//     value: "选项4",
//     label: "龙须面"
//   },
//   {
//     value: "选项5",
//     label: "北京烤鸭"
//   }
// ];
export default {
  name: "md-select",
  props: {
    msg: String
  },
  components: {},
  mounted() {}
};
</script>
<style scoped>
.md-select {
  width: 240px;
  height: 30px;
  background-color: rgb(255, 255, 255);
  background-image: none;
  border-radius: 4px;
  border: 1px solid rgb(220, 223, 230);
}
</style>
