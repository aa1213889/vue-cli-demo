<template>
  <div class="selectpage">
    <div class="header">
      <div class="header_logo"></div>
      <div class="header_content"></div>
      <div class="header_search"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectPage",
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
 .selectpage{
   background: rgb(66, 40, 40);
   width: 100%;
   height: 100%;
 }
</style>