<template>
  <div
    class="modal fade"
    id="detailModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

        <div class="modal-body">
          <div v-if="id === 'hiaaui'"><HearIAmAppUI></HearIAmAppUI></div>
          <div v-if="id === 'unipot'"><Unipot></Unipot></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HearIAmAppUI from './portfolio/HearIAmAppUI.vue'
import Unipot from './portfolio/Unipot.vue'
export default {
  name: 'PortfolioCard',
  props: ['id'],
  data() {
    return {}
  },
  components: {
    HearIAmAppUI,
    Unipot,
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

.modal-dialog {
  max-width: 100vw;

  margin: 1rem;
  max-height: 95vh;
  min-height: 90vh;
}

.modal-content {
  border-radius: 2rem;
  border: none;
  max-height: 95vh;
}
.modal-body {
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}


.modal-body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}



.btn-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rosybrown;

  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

</style>
