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
          <div v-else-if="id === 'unipot'"><Unipot></Unipot></div>
          <div v-else-if="id === 'grantnexus'"><GrantNexus></GrantNexus></div>
          <div v-else-if="id === 'easybrew'"><EASYBREW></EASYBREW></div>
          <div v-else-if="id === 'hiaweb'"><GrantNexus></GrantNexus></div>
          <div v-else-if="id === 'space'"><GrantNexus></GrantNexus></div>
          <div v-else-if="id === 'mappingipa'"><GrantNexus></GrantNexus></div>
          <div v-else-if="id === 'japtify'"><GrantNexus></GrantNexus></div>
          <div v-else>No Portfolio Found</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EASYBREW from './portfolio/EASYBREW.vue'
import GrantNexus from './portfolio/GrantNexus.vue'
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
    GrantNexus,
    EASYBREW
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
   border-radius: 2rem;
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
