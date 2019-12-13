<template>
  <v-app>
    <v-content>
      <HomePage />
      <MenuItem />
    </v-content>
  </v-app>
</template>

<script>
import HomePage from "./components/Home"
import MenuItem from "./components/MenuItem"

export default {
  name: "App",

  components: {
    HomePage,MenuItem
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
