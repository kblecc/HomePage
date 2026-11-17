<template>
  <div class="col">
    <div class="k-card">
      <img
        :src="img"
        class="card-img"
        alt="Scenic nature landscape with mountains, lake, and forest during golden hour"
      />

      <div class="details">
        <h3>{{ this.title }}</h3>
        <div class="tags-container">
          <span class="badge" v-for="tag in tags" :key="tag">{{
            tag
          }}</span>
        </div>

        <p>
          {{ this.intro }}
        </p>
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
  margin: 0.5rem;
  padding: 0;
  border-radius: 1rem;
  border-radius: 2rem;
  background-color: #2a2a2a;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}

.k-card:hover {
  transform: scale(1.04);
}

.details{
  padding: var(--padding-1)
}

.details h3{
  margin:0px;

}



.card-img {
  width: 100%;
  height: auto;
  border-radius: 2rem;
}


</style>
