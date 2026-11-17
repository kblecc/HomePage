<template>
  <div class="content-container">
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

    <div v-for="year in years" :key="year">
      <div class="k-year-badge">
        <h2 class="m-0">{{ year }}</h2>
      </div>
      <div class="row-col-2">
        <portfolioCard
          v-for="work in sortByYear(year)"
          :key="work.id"
          :title="work.title"
          :tags="work.tags"
          :intro="work.intro"
          :img="work.img"
          @click="$router.push('/work/' + work.id)"
        ></portfolioCard>
      </div>
    </div>
  </div>

  <!-- <portfolioModal :id="currentWork"></portfolioModal> -->
</template>
<script>
import carousel from '@/components/carouselFullWidth.vue'
import portfolioCard from '@/components/portfolioCard.vue'
//import portfolioModal from '@/components/portfolioModal.vue'
export default {
  name: 'PortfolioView',
  components: { carousel, portfolioCard },
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
    sortByYear(year) {
      return this.works
        .filter((work) => new Date(work.created).getFullYear() === year)
        .sort((a, b) => new Date(b.created) - new Date(a.created))
    },
  },
}
</script>
<style scoped>
.col {
  padding: 0;
}

.k-content-container {
  padding: 0 1rem;
}
.k-card {
  margin: 0, 0, 1rem, 0;
  padding: 0;
  border-radius: 1rem;
  border-radius: 2rem;
  background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #ffaeae;
}

.k-year-badge {
  display: inline-block;
  z-index: 100;
  position: sticky;
  top: 64px;
  margin: 1rem 0;
  padding: var(--padding-2);
  border-radius: var(--radius-2);
  background-color: #464646;
}
.k-card-img {
  width: 100%;
  height: auto;
  border-radius: 2rem;
}

</style>
