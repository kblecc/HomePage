<template>
  <div class="k-div-scrollable">
    <div class="container">
      <div class="k-title-card">
        <h1>Collections</h1>
        <p class="text-muted">
          I know it's kinnda freaky too collect bunch of stuffs, but I still enjoy the felling of
          keeping them and try organizing them
        </p>
      </div>
      <div class="multicol-gallery">
        <!-- Files -->
        <div class="k-card" @click="openNewTab('https://fd.kble.cc')">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div class="icon-background">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4418_6737)">
                    <path
                      d="M18.29 22.75H5.70995C2.30995 22.75 2.12995 20.88 1.97995 19.37L1.57995 14.36C1.48995 13.39 1.76995 12.42 2.38995 11.64C3.12995 10.74 4.17995 10.25 5.30995 10.25H18.69C19.8 10.25 20.85 10.74 21.5599 11.59L21.7299 11.82C22.27 12.56 22.51 13.46 22.42 14.37L22.02 19.36C21.87 20.88 21.69 22.75 18.29 22.75ZM5.30995 11.75C4.63995 11.75 3.99995 12.05 3.57995 12.57L3.50995 12.64C3.18995 13.05 3.01995 13.63 3.07995 14.23L3.47995 19.24C3.61995 20.7 3.67995 21.25 5.70995 21.25H18.29C20.33 21.25 20.38 20.7 20.52 19.23L20.92 14.22C20.9799 13.63 20.8099 13.04 20.42 12.58L20.32 12.46C19.8699 11.99 19.3 11.75 18.68 11.75H5.30995Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M20.5 12.2203C20.09 12.2203 19.75 11.8803 19.75 11.4703V9.68027C19.75 6.70027 19.23 6.18027 16.25 6.18027H13.7C12.57 6.18027 12.18 5.78027 11.75 5.21027L10.46 3.50027C10.02 2.92027 9.92 2.78027 9.02 2.78027H7.75C4.77 2.78027 4.25 3.30027 4.25 6.28027V11.4303C4.25 11.8403 3.91 12.1803 3.5 12.1803C3.09 12.1803 2.75 11.8403 2.75 11.4303V6.28027C2.75 2.45027 3.92 1.28027 7.75 1.28027H9.03C10.57 1.28027 11.05 1.78027 11.67 2.60027L12.95 4.30027C13.22 4.66027 13.24 4.68027 13.71 4.68027H16.26C20.09 4.68027 21.26 5.85027 21.26 9.68027V11.4703C21.25 11.8803 20.91 12.2203 20.5 12.2203Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M14.5699 17.75H9.42993C9.01993 17.75 8.67993 17.41 8.67993 17C8.67993 16.59 9.01993 16.25 9.42993 16.25H14.5699C14.9799 16.25 15.3199 16.59 15.3199 17C15.3199 17.41 14.9899 17.75 14.5699 17.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4418_6737">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="ps-3 c-details">
                <h3 class="mb-0">Files</h3>
              </div>
            </div>
          </div>
          <p class="mt-3 mb-0 p-1 text-muted">
            The FileDirectory project indexed 100TB+ files of animes, music, images stored on
            different storage media
          </p>
        </div>
        <!-- Cha -->
        <div class="k-card">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div class="icon-background">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_655_7051)">
                    <path
                      d="M12.0493 14.97C9.8893 14.97 7.8793 14.01 6.5393 12.32C5.2193 10.67 4.7393 8.54999 5.2093 6.48999L5.9593 3.34999C6.2593 2.10999 7.3593 1.23999 8.6293 1.23999H15.4293C16.7193 1.23999 17.8493 2.14999 18.1193 3.40999L18.7793 6.48999C19.2493 8.56999 18.7793 10.71 17.4493 12.37C16.1393 14.01 14.1693 14.96 12.0393 14.96L12.0493 14.97ZM8.6293 2.74999C8.0493 2.74999 7.5493 3.14999 7.4093 3.70999L6.6593 6.83999C6.2893 8.43999 6.6693 10.1 7.6993 11.39C8.7493 12.71 10.3293 13.47 12.0393 13.47C13.7493 13.47 15.2493 12.73 16.2693 11.45C17.2993 10.16 17.6793 8.46999 17.2993 6.82999L16.6393 3.72999C16.5193 3.15999 15.9993 2.73999 15.4193 2.73999H8.6193L8.6293 2.74999Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M12.0508 18.75C11.6408 18.75 11.3008 18.41 11.3008 18V14.22C11.3008 13.81 11.6408 13.47 12.0508 13.47C12.4608 13.47 12.8008 13.81 12.8008 14.22V18C12.8008 18.41 12.4608 18.75 12.0508 18.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M13.1501 22.75H10.8401C10.2101 22.75 9.64008 22.42 9.32008 21.87C9.00008 21.32 9.00008 20.67 9.32008 20.12L10.4701 18.12C10.7901 17.57 11.3501 17.24 11.9901 17.24C12.6301 17.24 13.1901 17.57 13.5101 18.12L14.6601 20.12C14.9801 20.67 14.9801 21.32 14.6601 21.87C14.3401 22.42 13.7801 22.75 13.1401 22.75H13.1501ZM11.7801 18.88L10.6301 20.88C10.5701 20.99 10.6001 21.08 10.6301 21.13C10.6601 21.18 10.7201 21.25 10.8501 21.25H13.1601C13.2901 21.25 13.3501 21.17 13.3801 21.13C13.4101 21.08 13.4401 20.99 13.3801 20.88L12.2301 18.88C12.1101 18.66 11.9201 18.66 11.8001 18.88H11.7801Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_655_7051">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="ps-3 c-details">
                <h3 class="mb-0">Cha</h3>
              </div>
            </div>
          </div>
          <p class="mt-3 mb-0 p-1 text-muted">
            Tea and matcha from dfferent brands, different price point are being teated
          </p>
        </div>
        <!-- Mobile Device -->
        <div class="k-card" @click="$router.push('/mobile')">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div class="icon-background">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4418_7552)">
                    <path
                      d="M15 22.75H9C4.59 22.75 3.25 21.41 3.25 17V7C3.25 2.59 4.59 1.25 9 1.25H15C19.41 1.25 20.75 2.59 20.75 7V17C20.75 21.41 19.41 22.75 15 22.75ZM9 2.75C5.42 2.75 4.75 3.43 4.75 7V17C4.75 20.57 5.42 21.25 9 21.25H15C18.58 21.25 19.25 20.57 19.25 17V7C19.25 3.43 18.58 2.75 15 2.75H9Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M12 19.8598C10.73 19.8598 9.69995 18.8298 9.69995 17.5598C9.69995 16.2898 10.73 15.2598 12 15.2598C13.27 15.2598 14.3 16.2898 14.3 17.5598C14.3 18.8298 13.27 19.8598 12 19.8598ZM12 16.7498C11.56 16.7498 11.2 17.1098 11.2 17.5498C11.2 17.9898 11.56 18.3498 12 18.3498C12.44 18.3498 12.8 17.9898 12.8 17.5498C12.8 17.1098 12.44 16.7498 12 16.7498Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4418_7552">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="ps-3 c-details">
                <h3 class="mb-0">Mobile Devices</h3>
              </div>
            </div>
          </div>
          <p class="mt-3 mb-0 p-1 text-muted">
            Devices with special design or meaningful moment with me, I tinkle with them although
            they are useless in this era
          </p>
        </div>
        <!-- VPS -->
        <div class="k-card">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div class="icon-background">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4418_7585)">
                    <path
                      d="M19.3198 10.7498H4.68977C2.79977 10.7498 1.25977 9.20978 1.25977 7.31978V4.68977C1.25977 2.79977 2.79977 1.25977 4.68977 1.25977H19.3198C21.2098 1.25977 22.7498 2.79977 22.7498 4.68977V7.31978C22.7498 9.20978 21.2098 10.7498 19.3198 10.7498ZM4.67976 2.74977C3.60976 2.74977 2.74977 3.61976 2.74977 4.67976V7.30977C2.74977 8.37977 3.61976 9.23978 4.67976 9.23978H19.3098C20.3798 9.23978 21.2398 8.36977 21.2398 7.30977V4.67976C21.2398 3.60976 20.3698 2.74977 19.3098 2.74977H4.67976Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M19.3198 22.7498H4.68977C2.79977 22.7498 1.25977 21.2098 1.25977 19.3198V16.6898C1.25977 14.7998 2.79977 13.2598 4.68977 13.2598H19.3198C21.2098 13.2598 22.7498 14.7998 22.7498 16.6898V19.3198C22.7498 21.2098 21.2098 22.7498 19.3198 22.7498ZM4.67976 14.7498C3.60976 14.7498 2.74977 15.6198 2.74977 16.6798V19.3098C2.74977 20.3798 3.61976 21.2398 4.67976 21.2398H19.3098C20.3798 21.2398 21.2398 20.3698 21.2398 19.3098V16.6798C21.2398 15.6098 20.3698 14.7498 19.3098 14.7498H4.67976Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7C6.75 7.41 6.41 7.75 6 7.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7C10.75 7.41 10.41 7.75 10 7.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19C6.75 19.41 6.41 19.75 6 19.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19C10.75 19.41 10.41 19.75 10 19.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4418_7585">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="ps-3 c-details">
                <h3 class="mb-0">VPS</h3>
              </div>
            </div>
          </div>
          <p class="mt-3 mb-0 p-1 text-muted">Hosting some web services, databases, backends</p>
        </div>
        <!-- GK -->
        <div class="k-card">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div class="icon-background">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4418_7585)">
                    <path
                      d="M19.3198 10.7498H4.68977C2.79977 10.7498 1.25977 9.20978 1.25977 7.31978V4.68977C1.25977 2.79977 2.79977 1.25977 4.68977 1.25977H19.3198C21.2098 1.25977 22.7498 2.79977 22.7498 4.68977V7.31978C22.7498 9.20978 21.2098 10.7498 19.3198 10.7498ZM4.67976 2.74977C3.60976 2.74977 2.74977 3.61976 2.74977 4.67976V7.30977C2.74977 8.37977 3.61976 9.23978 4.67976 9.23978H19.3098C20.3798 9.23978 21.2398 8.36977 21.2398 7.30977V4.67976C21.2398 3.60976 20.3698 2.74977 19.3098 2.74977H4.67976Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M19.3198 22.7498H4.68977C2.79977 22.7498 1.25977 21.2098 1.25977 19.3198V16.6898C1.25977 14.7998 2.79977 13.2598 4.68977 13.2598H19.3198C21.2098 13.2598 22.7498 14.7998 22.7498 16.6898V19.3198C22.7498 21.2098 21.2098 22.7498 19.3198 22.7498ZM4.67976 14.7498C3.60976 14.7498 2.74977 15.6198 2.74977 16.6798V19.3098C2.74977 20.3798 3.61976 21.2398 4.67976 21.2398H19.3098C20.3798 21.2398 21.2398 20.3698 21.2398 19.3098V16.6798C21.2398 15.6098 20.3698 14.7498 19.3098 14.7498H4.67976Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7C6.75 7.41 6.41 7.75 6 7.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7C10.75 7.41 10.41 7.75 10 7.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19C6.75 19.41 6.41 19.75 6 19.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19C10.75 19.41 10.41 19.75 10 19.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                    <path
                      d="M18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z"
                      fill="white"
                      style="fill: var(--fillg)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4418_7585">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="ps-3 c-details">
                <h3 class="mb-0">GK & Nendoroid</h3>
              </div>
            </div>
          </div>
          <p class="mt-3 mb-0 p-1 text-muted">Custom-made high quality figurine and cute characters from animes</p>
        </div>
        <!-- Manga -->
         <div class="k-card">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div class="icon-background">
               <svg width="24" height="24" viewBox="0 0 105 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="19" width="24" height="83" rx="8" stroke="#fff" stroke-width="8"/>
<rect x="76" y="30" width="25" height="72" rx="8" stroke="#fff" stroke-width="8"/>
<rect x="40" y="4" width="24" height="98" rx="8" stroke="#fff" stroke-width="8"/>
<path d="M52 17V55" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
<path d="M89 42L88 42" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
<path d="M89 52L88 52" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
<path d="M16 67L16 66" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
<path d="M89 90L88 90" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
<path d="M16 31V55" stroke="#fff" stroke-width="8" stroke-linecap="round"/>
</svg>

              </div>
              <div class="ps-3 c-details">
                <h3 class="mb-0">Doujinshi</h3>
              </div>
            </div>
          </div>
          <p class="mt-3 mb-0 p-1 text-muted">Self-published print works from various artists, project is created to archive what I bought and likes.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionCategoryCard from '@/components/collections/collectionCategoryCard.vue'

export default {
  name: 'CollectionsView',
  data() {
    return {}
  },
  components: { CollectionCategoryCard },
  methods: {
    // Use this method to redirect to a URL
    redirect(url) {
      window.location.href = url
    },
    openNewTab(url){
      window.open(url, '_blank', 'noreferrer');
    }
  },
}
</script>
<style scoped>

.multicol-gallery {
  --frame: 0;

  columns: 18rem 3;

  margin-inline: auto;

  padding: var(--frame, 0.5rem);
  column-gap: var(--frame, 0.5rem);
}
.col {
  padding: 0;
}
.icon-background {
  background-color: #ffaeae;
  padding: 1rem;
  border-radius: 1rem;
}
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
  display: inline-block;
  border-radius: 40px;
  margin: 0.5rem 0.5rem 0.7rem 0.5rem;
  padding: 1.5rem;
  background-color: #2a2a2a;
  border-radius: 2rem;
  transition: 0.9s var(--ani);
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
