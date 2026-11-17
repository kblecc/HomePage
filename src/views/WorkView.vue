
<template>

  <div class="content-container back">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'WorkView',
  components: {},
  computed: {},
  data() {
    return {}
  },
  methods: {},
  mounted(){

  },
  unmounted() {

  }
}
</script>
<style scoped>


@starting-style {
  .backBtn {
    opacity: 0;

  }
}

.backBtn {
  display: inline-flex;
  position: sticky;
  left: 75vw;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: var(--padding) 16px;
  border: none;
  border-radius: var(--radius-2);
  background-color: #2a2a2a;
  box-shadow: 0px 15px 50px #1a1a1a;
  color: #fefefe;
  z-index: 1001;
  /* Smooth hover transition */
  transition-behavior: allow-discrete;
  transition:
    opacity 0.5s 0.2s ease,
    background-color 0.2s ease,
    transform 0.1s ease;
}

.backBtn svg {
  display: inline-block;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.backBtn p {
  display: inline-block;
  margin: 0px;
  margin-left: var(--padding);
}

.backBtn:hover {
  background-color: #1a1a1a;
}

</style>
