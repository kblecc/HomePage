<template>
  <div class="col">
    <div class="k-card" data-bs-toggle="modal" data-bs-target="#detailModal">
      <img
        :src="img"
        class="k-card-img"
        alt="Scenic nature landscape with mountains, lake, and forest during golden hour"
      />
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-row align-items-center">
          <div class="p-4 c-details">
            <h3 class="mb-0 fw-bold">{{ this.title }}</h3>
            <div class="k-tags-container">
              <span class="badge rounded-pill text-bg-primary" v-for="tag in tags" :key="tag">{{
                tag
              }}</span>
            </div>

            <p class="mb-0 text-muted">
              {{ this.intro }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PortfolioCard',
  props: ['id', 'tags', 'intro', 'img', 'title'],
  components: {},
  data() {
    return {}
  },
  computed: {
    targetID() {
      return '#' + this.id
    },
  },
  methods: {
    showContent() {},
  },
}
</script>
<style scoped>
.k-card {
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 0;
  background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
  border-radius: 2rem;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}

.k-card:hover {
  transform: scale(1.04);
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
