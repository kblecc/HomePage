<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div style="height: 100vh; overflow: hidden">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="k-nav-brand bg-body-tertiary">
          <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref="navbarToggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" ref="navbarNav">
          <ul class="navbar-nav" @click="hideXSnav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/works"> Works </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about"> About </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div style="height: 95vh">
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    // This method is used to handle the click event on the navbar toggler
    hideXSnav() {
      const navbarToggler = this.$refs.navbarToggler
      console.log(navbarToggler)
      if (navbarToggler.ariaExpanded === "true") {
        setTimeout(() => {
          navbarToggler.click()
        }, 200)
      }
    },
  },
}
</script>

<style>

</style>
<style scoped>
button.navbar-toggler {
  background-color: rosybrown;
  border-radius: 1rem;
  padding: 0.5rem;
  z-index: 1001;
}

nav {
  margin: 0.5rem;
  border-radius: 1rem;
}

.k-nav-brand {
  border-radius: 1rem;
  padding: 0.75rem;
  background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity, 1));
  z-index: 1000;
}

#navbarNav {
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 1000;
}

.nav-link {
  transition: unset;
}
.navbar-nav
{
padding: 0.5rem;
  border-radius: 1rem;
  background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
}

@media (max-width: 576px) {
  .k-nav-brand {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1000;
  }

 button.navbar-toggler {
    padding: 0.5rem;
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    right: unset;
    top: unset;
  }
  #navbarNav {
    position: fixed;
    bottom: 0;
    left: 1rem;
    width: calc(100% - 2rem);
  }
  .navbar-nav {
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
    margin: 0 0 5rem 0;
    z-index: 1000;
    transition: all 0.3s;
  }
}

@media (min-width: 576px) and (max-width: 992px) {
  .k-nav-brand {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  button.navbar-toggler {
    position: fixed;
    padding:0.75rem;
    top: 1rem;
    right: 1rem;
    left: unset;
    bottom: unset;
  }
  #navbarNav {
    position: fixed;
    top: 0;
    right: 1rem;
    width: 35%;
  }
  .navbar-nav {
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
    margin: 5rem 0 0 0;
    z-index: 1000;
    transition: all 0.3s;
  }

}

#navbarNav .router-link-exact-active {
  padding: 0.5rem;
  border-radius: 0.7rem;
  font-weight: bold;
  background: #ffaeae;
}
</style>
