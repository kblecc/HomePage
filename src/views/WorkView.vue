<template>
  <div class="k-div-scrollable">
    <div class="container">

      <div class="k-content-container">
         <btn class="k-btn" @click="$router.go(-1)">
        <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<path d="M15 20.6695C14.81 20.6695 14.62 20.5995 14.47 20.4495L7.95003 13.9295C6.89003 12.8695 6.89003 11.1295 7.95003 10.0695L14.47 3.54953C14.76 3.25953 15.24 3.25953 15.53 3.54953C15.82 3.83953 15.82 4.31953 15.53 4.60953L9.01003 11.1295C8.53003 11.6095 8.53003 12.3895 9.01003 12.8695L15.53 19.3895C15.82 19.6795 15.82 20.1595 15.53 20.4495C15.38 20.5895 15.19 20.6695 15 20.6695Z" fill="white" style="fill: var(--fillg);"/>
</svg>back</btn>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'q1',
  components: {  },
  computed: {},
  data() {
    return {}
  },
  methods: {},
}
</script>
<style scoped>

.k-btn{
  margin:0 0 8px 0;
  padding:0.8rem 1.5rem 0.8rem 1rem;
  background-color: #2a2a2a;
  display: inline-block;
  border-radius: 2rem;
}
.k-btn:hover{
  background-color: #1a1a1a;
}
.k-div-scrollable {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5rem 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.k-content-container {
  padding: 0 1rem;
}
.k-card {
  border-radius: 1rem;
  margin: 0, 0, 1rem, 0;
  padding: 0;
  background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
  border-radius: 2rem;
  transition: 0.9s
    linear(
      0,
      0.0093,
      0.0346,
      0.0725,
      0.1198,
      0.1739,
      0.2325,
      0.2937,
      0.3559,
      0.4178,
      0.4783,
      0.5367,
      0.5922,
      0.6445,
      0.6931,
      0.738,
      0.779,
      0.8162,
      0.8495,
      0.8792,
      0.9054,
      0.9283,
      0.9481,
      0.965,
      0.9794,
      0.9913,
      1.0012,
      1.0091,
      1.0154,
      1.0202,
      1.0237,
      1.0261,
      1.0276,
      1.0283,
      1.0283,
      1.0279,
      1.027,
      1.0258,
      1.0244,
      1.0228,
      1.0211,
      1.0193,
      1.0176,
      1.0158,
      1.0141,
      1.0125,
      1.011,
      1.0095,
      1.0082,
      1.007,
      1.0058,
      1.0048,
      1.0039,
      1.0031,
      1.0024,
      1.0018,
      1.0013,
      1.0008,
      1.0004,
      1.0001,
      0.9999,
      0.9997,
      0.9995,
      0.9994,
      0.9993,
      0.9992,
      0.9992,
      0.9992,
      0.9992,
      0.9992,
      0.9992,
      0.9993,
      0.9993,
      0.9994,
      0.9994,
      0.9995,
      0.9995,
      0.9996,
      0.9996,
      0.9997,
      0.9997,
      0.9997,
      0.9998,
      0.9998,
      0.9998,
      0.9999,
      0.9999,
      0.9999,
      0.9999,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    );
}
.k-card:hover {
  transform: scale(1.04);

}
.k-card:active {
  transform: scale(0.96);
}
.icon {
  background-color: #ffaeae;
  border-radius: 50%;
  padding: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.k-year-badge {
  position: sticky;
  top: 0.5rem;
  background-color: #464646;
  border-radius: 1.5rem;
  padding: 1rem;
  display: inline-block;
  margin: 1rem 0;
  z-index: 100;
}
.k-card-img {
  width: 100%;
  height: auto;
  border-radius: 2rem;
}
.k-tags-container {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
}
</style>
