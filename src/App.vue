<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar/>


      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <div :key="$route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </RouterView>

</template>

<script>
export default {
  data() {return {
    indicatorStyle: {
        left: "0px",
        width: "0px",
        opacity: 0,
      },}
  },

  methods: {

  },

}
</script>

<style></style>
<style scoped>


/* Start and end states */
.fade-enter-from {
  opacity: 0;
  transform: translateY(5vh);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(5vh);
}
/* Active transition states */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.3s ease;
}
</style>
