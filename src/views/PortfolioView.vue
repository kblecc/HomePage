<template>
  <div class="k-div-scrollable">
    <div class="container">
      <carousel
        :slides="[
          {
            img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/UniPot/Banner.jpg',
          },
          {
            img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/HearIamAppUI/Banner.jpg',
          },
          {
            img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Banner.jpg',
          },
          {
            img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/GrantNexus/Banner.jpg',
          },
        ]"
      />

      <div class="k-content-container">
        <div v-for="year in years" :key="year">
          <div class="k-year-badge">
            <h2 class="m-0">{{ year }}</h2>
          </div>
          <div class="row row-cols-1 row-cols-md-2">
            <portfolioCard
              v-for="work in sortByYear(year)"
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
  computed: {},
  data() {
    return {
      currentWork: '',
      years: [2025, 2024, 2022],
      works: [
        {
          id: 'unipot',
          title: 'UniPot',
          intro: 'Content creation to promote a Hong Kong Intangible Cultural Heritage',
          img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/UniPot/Thumbnail.jpg',
          tags: ['Design', 'Branding', 'Graphic'],
          created: '2025-04-28T12:00:00+00:00',
        },
        {
          id: 'hiaaui',
          img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/HearIamAppUI/Thumbnail.jpg',
          title: 'Hear i am App UI - v3',
          tags: ['Design', 'UI'],
          intro:
            'User interface design of a mobile application for music therapy combined with mental care',
          created: '2022-08-31T12:00:00+00:00',
        },
        {
          id: 'hiaweb',
          img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/HearIamWebsite/Thumbnail.jpg',
          title: 'Hear i am Website',
          tags: ['Design', 'Development', 'Website', 'Graphic'],
          intro: 'Website reamp for Hear i am application with new design and features',
          created: '2024-01-04T12:00:00+00:00',
        },
        {
          id: 'mappingipa',
          title: 'Mapping for Internet Privacy & Advertising',
          intro: 'Graph of non-IT technicians to understand things behind a website',
          img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/MappingForInternetPrivacyAndAdvertising/Thumbnail.jpg',
          tags: ['Design', 'Tutorial', 'Graphic', 'Manual'],
          created: '2024-08-05T12:00:00+00:00',
        },
        // {
        //   id: 'japtify',
        //   title: 'Japtify',
        //   intro: 'Description for project two.',
        //   img: 'https://placehold.co/1200x600?text=Project+Two',
        //   tags: ['Development', 'Web'],
        //   created: '2024-04-24T12:00:00+00:00',
        // },
        {
          id: 'grantnexus',
          title: 'Grant Nexus',
          intro: 'Branding design for a government grant consulting alliance',
          img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/GrantNexus/Thumbnail.jpg',
          tags: ['Design', 'Branding', 'Graphic'],
          created: '2025-02-05T12:00:00+00:00',
        },
        {
          id: 'easybrew',
          title: 'EASYBREW',
          intro: 'Product development of a cover for brewing tea with tea leaves with a mug',
          img: 'https://raw.githubusercontent.com/kblecc/HomePage/refs/heads/2025/src/assets/portfolio/Easybrew/Thumbnail.jpg',
          tags: ['Design', 'Product', 'Graphic'],
          created: '2024-05-17T12:00:00+00:00',
        },
        // {
        //   id: 'space',
        //   title: 'Space',
        //   intro: 'Simple native Android social media application ',
        //   img: 'https://placehold.co/1200x600?text=Project+Two',
        //   tags: ['Development', 'Web'],
        //   created: '2023-11-28T12:00:00+00:00',
        // },
      ],
    }
  },
  methods: {
    setCurrentWork(id) {
      console.log('Setting current work to:', id)
      this.currentWork = id
    },
    sortByYear(year) {
      return this.works
        .filter((work) => new Date(work.created).getFullYear() === year)
        .sort((a, b) => new Date(b.created) - new Date(a.created))
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
  margin: 0, 0, 1rem, 0;
  padding: 0;
  background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
  border-radius: 2rem;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}
.k-card:hover {
  transform: scale(1.04);
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
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
