<template>
  <div class="homepage">
    <div class="header">
      <div class="header_logo"></div>
      <div class="header_content"></div>
      <div class="header_search"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  components: {
  },
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

.homepage {
 flex: 1;
 background: blue;
     overflow: hidden;
}
</style>
