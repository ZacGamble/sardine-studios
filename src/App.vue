
<script>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import router from "./router";

export default {
  setup() {
    let viewpositionY = ref(window.scrollY);
    // router.push("/sardine-studios");
    return {
      viewpositionY,
    };
  },
};
</script>

<template>
  <header class="sticky-top pb-4">
    <img
      alt="logo"
      class="logo"
      src="./assets/main-logo.jpg"
      width="125"
      height="125"
    />
    <nav>
      <RouterLink to="/"><b>Home</b></RouterLink>
      <RouterLink to="/services"> <b>Services</b> </RouterLink>
      <RouterLink to="/portfolio"> <b>Portfolio</b> </RouterLink>
      <RouterLink to="/about"> <b>About</b> </RouterLink>
    </nav>
    <RouterView />
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.background-img {
  background-image: url(https://images5.alphacoders.com/103/thumb-1920-1036549.jpg);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  background-color: var(--color-background-soft);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
