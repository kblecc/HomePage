<template>
 <img
      src="https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Banner.jpg"
      class="k-card-img"
      alt="Scenic nature landscape with mountains, lake, and forest during golden hour"
    />
<img class="img-fluid" src="https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Instruction.png">
<img class="img-fluid" src="https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Packaging Sticker.jpg">
 <div class="row row-cols-3 row-cols-xs-1">
  <div class="col"><img class="img-fluid" src="https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Warning JP.jpg"></div>
 <div class="col"><img class="img-fluid" src="https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Warning EN.jpg"></div>
<div class="col"><img class="img-fluid" src="https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Warning ZH.jpg"></div>
</div>
<carousel
        :slides="[
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/108.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/109.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/110.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/111.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/112.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/113.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/114.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/115.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/116.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/117.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/118.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/119.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/120.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/121.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/122.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/123.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/124.jpg'},
{'img':'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Doc/125.jpg'}

        ]"
      />
</template>
<script>
import carousel from '../carousel.vue';
export default {
  name: 'EASYBREW',
  components: {
carousel,
  }}
  </script>
<style scoped>
.k-card-img {
  max-width: 100%;
  height: auto;
  border-radius: 2rem;
}

</style>
