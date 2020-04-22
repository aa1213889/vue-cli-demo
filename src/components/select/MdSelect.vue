<template>
  <div class="md-select">
    <div class="md-select-box">
      <div class="md-select-value">请选择</div>
      <div class="md-select-arrows"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "md-select",
  props: {
    msg: String
  },
  mounted() {}
};
</script>
<style scoped>
.md-select {
  width: 240px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  background-image: none;
  border-radius: 4px;
  border: 2px solid rgb(220, 223, 230);
  cursor: pointer;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14) !important;
}
.md-select:hover {
  border: 2px solid rgb(76, 175, 80);
}
.md-select:before {
  border: 2px solid rgb(7, 7, 7);
}
.md-select-box {
  width: 100%;
  height: 100%;
  padding: 5px 12px;
  display: flex;
}
.md-select-value {
  flex: 0.8;
}
.md-select-arrows {
  flex: 0.2;
}
</style>
