<template>
  <div class="page-content">
    <div class="container">
      <div class="k-title-card">
        <h1>About me</h1>
        <p class="text-muted">not much things here, I'm lazy</p>
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
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                       style="
                        stroke-width: 1px;
                        color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
                      "
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
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
                      class="feather feather-instagram"
                      style="
                        stroke-width: 1px;
                        color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
                      "
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 050979
                       1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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
                      width="24"
                      height="24"
                      viewBox="0 0 22 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 7.44295C19.075 1.80537 13.9416 1 11.6156 1C4.55717 1 0.626919 5.91275 1.02797 14.1275C1.36571 21.0454 5.35925 25 10.9739 25C16.5885 25 19.3958 22.2617 20.1177 19.2819C20.5187 16.2215 19.075 13.5903 16.0807 12.7584M16.0807 12.7584C10.5733 11.2282 7.20405 12.9195 7.44469 15.8188C7.68533 18.7181 12.3374 19.8749 14.4229 17.5906C15.6477 16.249 16.0996 14.4411 16.0807 12.7584ZM16.0807 12.7584C16.0588 10.8046 15.4021 9.01945 14.5833 8.32886C12.5781 6.63758 9.93117 6.79866 8.24678 8.32886"
                        stroke="rgba(var(--bs-tertiary-bg-rgb), 1)"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div class="ms-3 c-details">
                    <p class="mb-0 fw-bold">Threads</p>
                    <p class="mb-0 text-muted">kblecc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col" @click="this.redirect('https://x.com/Kble1_1')">
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
                      class="feather feather-twitter"
                      style="
                        stroke-width: 1px;
                        color: rgba(var(--bs-tertiary-bg-rgb), 1) !important;
                      "
                    >
                      <path
                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ms-3 c-details">
                    <p class="mb-0 fw-bold">X</p>
                    <p class="mb-0 text-muted">kble1_1</p>
                  </div>
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
