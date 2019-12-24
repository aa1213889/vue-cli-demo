<template>
  <div class="inputpage">
    <div class="header">
      <div class="header_logo"></div>
      <div class="header_content"></div>
      <div class="header_search"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputPage",
  props: {
    msg: String
  },
  methods: {
    clickLink: function() {
      this.$router.push("./sb");
    }
  }
};
</script>

<style scoped>
.inputpage {
  background: rgb(238, 238, 238);
  flex: 1;
}
</style>