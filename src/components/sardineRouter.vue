<template>
  <RouterView />
</template>


<script>
import router from "../router";

export default {
  setup() {
    router.push("/");
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>