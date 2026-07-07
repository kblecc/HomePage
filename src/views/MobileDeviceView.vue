<template>
  <div class="page-content">
    <div class="container">
      <div class="k-title-card">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <div class="">
              <img
                src="/public/img/mobileDevices/hotdog/EC57CCEC245B2E0A35AFBD1F407E069B8F1238AD.png"
                class="k-thumbnail"
              />
            </div>
            <div class="ms-3 c-details">
              <h1>OnePlus 7T Pro</h1>
              <p class="text-muted">
                Devices with special design or meaningful moment with me, I tinkle with them
                although they are useless in this era
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="k-content-container">
        <h2>Dimensions</h2>
        <div class="row row-cols-2 row-cols-lg-4">
          <div class="col">
            <div class="k-card p-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon-background">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12L108 12M20 116L108 116M64 95.5V32M76 40L64 28L52 40M52 88L64 100L76 88"
                        stroke="#4a4a4a"
                        stroke-width="8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="ms-3 c-details">
                    <p class="mb-0 fw-bold">Height</p>
                    <p class="mb-0 text-muted">16.14 cm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="k-card p-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon-background">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 108L12 20M116 108L116 20M95.5 64L32 64M40 52L28 64L40 76M88 76L100 64L88 52"
                        stroke="#4a4a4a"
                        stroke-width="8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="ms-3 c-details">
                    <p class="mb-0 fw-bold">Width</p>
                    <p class="mb-0 text-muted">16.14 cm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="k-card p-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon-background">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 108L12 20M116 108L116 20M95.5 64L32 64M40 52L28 64L40 76M88 76L100 64L88 52"
                        stroke="#4a4a4a"
                        stroke-width="8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="ms-3 c-details">
                    <p class="mb-0 fw-bold">Thickness</p>
                    <p class="mb-0 text-muted">16.14 cm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="k-card p-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class="icon-background">
                   <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M78 26C78 33.732 71.732 40 64 40C56.268 40 50 33.732 50 26C50 18.268 56.268 12 64 12C71.732 12 78 18.268 78 26Z" stroke="black" stroke-width="8" stroke-linecap="round"/>
<path d="M21.4822 106.736L30.9222 47.7361C31.5432 43.8551 34.8914 41 38.8217 41H89.1782C93.1086 41 96.4568 43.8551 97.0777 47.7361L106.518 106.736C107.295 111.597 103.541 116 98.6182 116L29.3817 116C24.4592 116 20.7045 111.597 21.4822 106.736Z" stroke="black" stroke-width="8" stroke-linecap="round"/>
</svg>

                  </div>
                  <div class="ms-3 c-details">
                    <p class="mb-0 fw-bold">Weight</p>
                    <p class="mb-0 text-muted">16.14 cm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>Display</h2>
        <h2>Performance</h2>
        <div class="k-card">
          <h3>SOC</h3>
          <p>Snapdragon® 8 Elite Gen 5 Mobile Platform</p>
        </div>
        <h2>Camera</h2>
        <h2>Connectivity</h2>
        <h2>Battery and Charging</h2>
        <h2>Software</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {}
  },
  methods: {
    // Use this method to redirect to a URL
    redirect(url) {
      window.location.href = url
    },
  },
}
</script>
<style scoped>
.page-content {
  overflow-y: scroll;
}
.k-title-card {
  border-radius: 2rem;
  margin: 0 0 2rem 0;
  background-color: #2a2a2a;
  padding: 2rem 2rem 1rem 2rem;
}
.k-content-container {
  padding: 0 1rem;
  overflow-y: scroll;
}
.k-card {
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 2rem;
  background-color: #2a2a2a;
  border-radius: 1rem;
  transition: 0.9s
    linear(
      0,
      0.0093,
      0.0346,
      0.0725,
      0.1198,
      0.1739,
      0.2325,
      0.2937,
      0.3559,
      0.4178,
      0.4783,
      0.5367,
      0.5922,
      0.6445,
      0.6931,
      0.738,
      0.779,
      0.8162,
      0.8495,
      0.8792,
      0.9054,
      0.9283,
      0.9481,
      0.965,
      0.9794,
      0.9913,
      1.0012,
      1.0091,
      1.0154,
      1.0202,
      1.0237,
      1.0261,
      1.0276,
      1.0283,
      1.0283,
      1.0279,
      1.027,
      1.0258,
      1.0244,
      1.0228,
      1.0211,
      1.0193,
      1.0176,
      1.0158,
      1.0141,
      1.0125,
      1.011,
      1.0095,
      1.0082,
      1.007,
      1.0058,
      1.0048,
      1.0039,
      1.0031,
      1.0024,
      1.0018,
      1.0013,
      1.0008,
      1.0004,
      1.0001,
      0.9999,
      0.9997,
      0.9995,
      0.9994,
      0.9993,
      0.9992,
      0.9992,
      0.9992,
      0.9992,
      0.9992,
      0.9992,
      0.9993,
      0.9993,
      0.9994,
      0.9994,
      0.9995,
      0.9995,
      0.9996,
      0.9996,
      0.9997,
      0.9997,
      0.9997,
      0.9998,
      0.9998,
      0.9998,
      0.9999,
      0.9999,
      0.9999,
      0.9999,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    );
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
.k-thumbnail {
  max-width: 200px;
}
.icon-background {
  background-color: #ffaeae;
  padding: 0.75rem;
  border-radius: 1rem;
}
</style>
