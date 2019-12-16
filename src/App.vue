<template>
  <v-app>
    <v-content>
      <div class="content">
         <MenuItem />
         <HomePage />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import HomePage from "./components/Home";
import MenuItem from "./components/MenuItem";

export default {
  name: "App",

  components: {
    HomePage,
    MenuItem
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
.content{
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
