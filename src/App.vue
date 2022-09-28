
<script>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  setup() {
    let viewpositionY = ref(window.scrollY);
    return {
      viewpositionY,
    };
  },
};
</script>

<template>
  <header class="sticky-top bg-white pb-4">
    <img
      alt="logo"
      class="logo"
      src="./assets/sardine-logo.jpg"
      width="125"
      height="125"
    />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex; 
    place-items: flex-start;
    flex-wrap: wrap; 
  }

  nav {
    text-align: left; 
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
