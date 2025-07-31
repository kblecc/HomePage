<template>
  <img
    src="https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/Banner.jpg"
    class="k-card-img"
    alt="Scenic nature landscape with mountains, lake, and forest during golden hour"
  />
  <carousel
    :slides="[
       {
        img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/cover.jpg',
      },
      {
        img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/p1.jpg',
      },
      {
        img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/p2.jpg',
      },
      {
        img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/p3.jpg',
      },
      {
        img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/p4.jpg',
      },
      {
        img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/p5.jpg',
      },
    ]"
  />
</template>
<script>
import carousel from '../carousel.vue'
export default {
  name: 'EASYBREW',
  components: {
    carousel,
  },
}
</script>
<style scoped>
.k-card-img {
  max-width: 100%;
  height: auto;
  border-radius: 2rem;
}
</style>
