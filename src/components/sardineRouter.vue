<template>
  <RouterView />
</template>


<script>
import router from "../router";

export default {
  setup() {
    router.push("/schedule");
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>