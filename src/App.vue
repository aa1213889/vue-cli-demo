<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="top_toolbar">
        <div class="top_toolbar_item">商城</div>
        <div class="top_toolbar_item">IOT</div>
        <div class="top_toolbar_item">云服务</div>
        <div class="top_toolbar_item">金融</div>
        <div class="top_toolbar_item">有品</div>
        <div class="top_toolbar_item">企业团购</div>
      </div>
    </v-app-bar>
    <v-content>
      <HomePage />
    </v-content>
  </v-app>
</template>

<script>
import HomePage from "./components/Home";

export default {
  name: "App",

  components: {
    HomePage
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
 .top_toolbar{
   display: flex;
 }
 .top_toolbar_item{
   padding-left: 0.5em;
   cursor: pointer;
 }
</style>
