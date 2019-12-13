<template>
  <div class="menu">
  
  </div>
</template>

<script>

export default {
  name: "MenuItem",
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
.menu{

}
</style>
