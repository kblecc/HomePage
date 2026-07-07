<template>
  <div class="page-content">
    <div class="container">
      <div class="k-title-card">
        <h1>Mobile Devices</h1>
        <p class="text-muted">Devices with special design or meaningful moment with me, I tinkle with them although they are useless in this era </p>
      </div>
      <div class="k-content-container">
        <h2>Contact</h2>
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col" @click="this.redirect('mailto:info@kble.cc')">
            <div class="k-card p-3">
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">

                    <img src="/public/img/mobileDevices/hotdog/EC57CCEC245B2E0A35AFBD1F407E069B8F1238AD.png" class="k-thumbnail">

                  <div class="ms-3 c-details">
                    <p class="mb-0 fw-bold">OnePlus 7T Pro</p>
                    <p class="mb-0 text-muted">hotdog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col">
          <div class="k-card p-3">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-bookmark"
                    style="stroke-width: 1px; color: rgba(var(--bs-tertiary-bg-rgb), 1) !important"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div class="ms-3 c-details">
                  <p class="mb-0 fw-bold">Telegram</p>
                  <p class="mb-0 text-muted">info@kble.cc</p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        </div>


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
.k-thumbnail{
  max-width: 200px;
}
</style>
