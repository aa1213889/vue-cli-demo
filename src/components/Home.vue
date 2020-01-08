<template>
  <div class="homepage">
    <InputPage />
    <SelectPage />
  </div>
</template>

<script>
import InputPage from "./input/InputPage";
import SelectPage from "./input/SelectPage";
export default {
  name: "HomePage",
  components: {
    InputPage,
    SelectPage
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
}
</style>
