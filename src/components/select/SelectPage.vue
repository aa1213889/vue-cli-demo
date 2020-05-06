<template>
  <div class="selectpage item_page">
    <div class="header">Select 选择器</div>
    <div class="content">
      <md-select>
        <!-- <md-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></md-option> -->
      </md-select>
      <span>233</span>
    </div>
  </div>
</template>

<script>
import MdSelect from "./MdSelect.vue";

export default {
  name: "SelectPage",
  props: {
    msg: String
  },
  components: {
    MdSelect
  },
  methods: {}
};
</script>

<style scoped>
@import "../../assets/css/page.css";
.selectpage {
  background: rgb(238, 238, 238);
}
</style>