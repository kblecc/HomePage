<template>
  <div class="container">
    <div class="k-title-card">
      <h1>About</h1>
      <p class="text-muted">nmm</p>
    </div>
    <div class="k-content-container">
      <h2>Why kble?</h2>
      <p>There is no special meaning, just someone spelling my nick name wrong.</p>
      <p>
        Caleb<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-right"
          style="stroke-width: 1px; color: var(--text-100); height: 1rem"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline></svg
        >Cable<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-right"
          style="stroke-width: 1px; color: var(--text-100); height: 1rem"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline></svg
        >kble ( pronounced k-ble )
      </p>
      <h2>Contact</h2>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col" @click="this.redirect('mailto:info@kble.cc')">
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
                  <p class="mb-0 fw-bold">E-mail</p>
                  <p class="mb-0 text-muted">info@kble.cc</p>
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

      <h2>Social Media</h2>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col" @click="this.redirect('https://www.instagram.com/kblecc')">
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
                  <p class="mb-0 fw-bold">Instagram</p>
                  <p class="mb-0 text-muted">kblecc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col" @click="this.redirect('https://www.threads.com/kblecc')">
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
                  <p class="mb-0 fw-bold">Threads</p>
                  <p class="mb-0 text-muted">info@kble.cc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
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
                  <p class="mb-0 fw-bold">X</p>
                  <p class="mb-0 text-muted">info@kble.cc</p>
                </div>
              </div>
            </div>
          </div>
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
  },methods: {
    // Use this method to redirect to a URL
  redirect(url) {
    window.location.href = url
  },}
}
</script>
<style scoped>
.k-title-card {
  border-radius: 2rem;
  margin: 0 0 2rem 0;
  background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
  padding: 2rem 2rem 1rem 2rem;
}
.k-content-container {
  padding: 0 1rem;
}
.k-card {
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 2rem;
  background-color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
  border-radius: 1rem;
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
</style>
