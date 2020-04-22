<template>
  <div class="selectpage item_page">
    <div class="header">SelectPage</div>
    <div class="content">
       <md-select placeholder="请选择"></md-select> 
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
  methods: {
 
  }
};
</script>

<style scoped>
@import "../../assets/css/page.css";
.selectpage {
  background: rgb(238, 238, 238);
}
</style>