<template>
  <img
    src="https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/Banner.jpg"
    class="k-card-img"
    alt="Scenic nature landscape with mountains, lake, and forest during golden hour"
  />
  <div class="content">
    <h3 class="mb-1 fw-bold">Mapping for Internet Privacy & Advertising</h3>
    <div class="k-tags-container">
      <span class="badge rounded-pill text-bg-primary">Design</span>
      <span class="badge rounded-pill text-bg-primary">UI</span>
    </div>

    <p class="mb-0 text-muted">
      Graph of non-IT technicians to understand things behind a website
    </p>

  <carousel
    :slides="[
       {
        img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/Cover.jpg',
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
  </div>
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
.content {
  padding: 2rem;
}
</style>
