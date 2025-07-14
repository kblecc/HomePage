<template>
  <div class="k-div-scrollable">
    <div class="container">
      <carousel
        :slides="[
          {
            image: 'https://placehold.co/1200x600?text=Nature+Landscape',
            alt: 'Scenic nature landscape with mountains, lake, and forest during golden hour',
            title: 'Beautiful Nature',
            description: 'Explore the wonders of the natural world in their full glory.',
          },
          {
            image: 'https://placehold.co/1200x600?text=Modern+Architecture',
            alt: 'Contemporary city skyline with glass skyscrapers reflecting sunlight',
            title: 'Urban Architecture',
            description: 'Modern architectural marvels from around the globe.',
          },
          {
            image: 'https://placehold.co/1200x600?text=Ocean+Adventure',
            alt: 'Turquoise ocean waves crashing on white sandy beach with palm trees',
            title: 'Ocean Paradise',
            description: 'Discover the most breathtaking beaches and marine life.',
          },
          {
            image: 'https://placehold.co/1200x600?text=Mountain+Expedition',
            alt: 'Snow-capped mountain peaks under clear blue sky with hikers in foreground',
            title: 'Mountain Peaks',
            description: 'Conquer the highest peaks and enjoy stunning views.',
          },
        ]"
      />

      <div class="k-content-container">
        <div class="k-year-badge"><h2 class="m-0">2024</h2></div>
        <div class="row row-cols-1 row-cols-md-2">
          <portfolioCard
            v-for="work in works"
            :key="work.id"
            :title="work.title"
            :tags="work.tags"
            :intro="work.intro"
            :img="work.img"
            @click="setCurrentWork(work.id)"
          ></portfolioCard>
        </div>
      </div>
    </div>
  </div>
  <portfolioModal :id="currentWork"></portfolioModal>

</template>
<script>
import carousel from '@/components/carouselFullWidth.vue'
import portfolioCard from '@/components/portfolioCard.vue'
import portfolioModal from '@/components/portfolioModal.vue'
export default {
  name: 'PortfolioView',
  components: { carousel, portfolioCard, portfolioModal },
  data() {
    return {
      currentWork: '',
      works: [
        {
          id: 'unipot',
          title: 'UniPot',
          intro: 'Description for project two.',
          img: 'src/assets/portfolio/UniPot/Thumbnail.jpg',
          tags: ['Development', 'Web'],
          year: 2025,
        },
        {
          id: 'hiaaui',
          img: 'https://placehold.co/1200x600?text=Hear+i+am+App+UI',
          title: 'Hear i am App UI - v3',
          tags: ['Design', 'UI'],
          intro: 'Hear i am is a mobie application for music therapy combined with mental care',
          year: 2024,
        },
        {
          id: 'mappingipa',
          title: 'Mapping for Internet Privacy & Advertising',
          intro: 'Description for project two.',
          img: 'https://placehold.co/1200x600?text=Project+Two',
          tags: ['Development', 'Web'],
          year: 2025,
        },
        {
          id: 'japtify',
          title: 'Japtify',
          intro: 'Description for project two.',
          img: 'https://placehold.co/1200x600?text=Project+Two',
          tags: ['Development', 'Web'],
          year: 2025,
        },
        {
          id: 'grantnexus',
          title: 'Grant Nexus',
          intro: 'Description for project two.',
          img: 'https://placehold.co/1200x600?text=Project+Two',
          tags: ['Development', 'Web'],
          year: 2025,
        },
        {
          id: 'easybrew',
          title: 'EASYBREW',
          intro: 'Description for project two.',
          img: 'https://placehold.co/1200x600?text=Project+Two',
          tags: ['Development', 'Web'],
          year: 2025,
        },
        {
          id: 'space',
          title: 'Space',
          intro: 'Description for project two.',
          img: 'https://placehold.co/1200x600?text=Project+Two',
          tags: ['Development', 'Web'],
          year: 2025,
        },
      ],
    }
  },
  methods: {
    setCurrentWork(id) {
      console.log('Setting current work to:', id)
      this.currentWork = id
    },
  },
}
</script>
<style scoped>
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
  margin: 0.5rem;
  padding: 0;
  background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
  border-radius: 2rem;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}
.k-card:hover {
  transform: scale(1.04);
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
  top: 5rem;
  background-color: #464646;
  border-radius: 1.5rem;
  padding: 1rem;
  display: inline-block;
  margin: 1rem 0;
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
