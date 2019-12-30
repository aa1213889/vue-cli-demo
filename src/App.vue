<template>
  <v-app>
    <v-content>
      <div class="content_app">
        <MenuItem />
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import MenuItem from "./components/MenuItem";

export default {
  name: "App",

  components: {
    MenuItem
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
.content_app {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
