<template>
  <nav class="navbar">
    <div class="nav-brand">
      <RouterLink to="/">
        <img src="@/assets/logo.png" alt="Avatar" />
        <p>kbleCC</p>
      </RouterLink>
    </div>

    <!-- Floating Button on Mobile -->
    <Transition name="backBtn">
      <button
        v-if="$route.path.startsWith('/work/') && $route.path !== '/work'"
        class="backNav"
        type="button"
        @click="$router.go(-1)"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 20.6695C14.81 20.6695 14.62 20.5995 14.47 20.4495L7.95003 13.9295C6.89003 12.8695 6.89003 11.1295 7.95003 10.0695L14.47 3.54953C14.76 3.25953 15.24 3.25953 15.53 3.54953C15.82 3.83953 15.82 4.31953 15.53 4.60953L9.01003 11.1295C8.53003 11.6095 8.53003 12.3895 9.01003 12.8695L15.53 19.3895C15.82 19.6795 15.82 20.1595 15.53 20.4495C15.38 20.5895 15.19 20.6695 15 20.6695Z"
            fill="white"
            style="fill: var(--fillg)"
          />
        </svg>
        <p>back</p>
      </button>
    </Transition>
    <button class="navbarToggler" type="button" @click="toggleNavPanel">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#fefefe"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4418_7177)">
          <path
            d="M8.27 22.75H4.23C2.22 22.75 1.25 21.82 1.25 19.9V4.1C1.25 2.18 2.23 1.25 4.23 1.25H8.27C10.28 1.25 11.25 2.18 11.25 4.1V19.9C11.25 21.82 10.27 22.75 8.27 22.75ZM4.23 2.75C2.96 2.75 2.75 3.09 2.75 4.1V19.9C2.75 20.91 2.96 21.25 4.23 21.25H8.27C9.54 21.25 9.75 20.91 9.75 19.9V4.1C9.75 3.09 9.54 2.75 8.27 2.75H4.23Z"
            fill="white"
            style="fill: var(--fillg)"
          />
          <path
            d="M19.77 11.25H15.73C13.72 11.25 12.75 10.36 12.75 8.52V3.98C12.75 2.14 13.73 1.25 15.73 1.25H19.77C21.78 1.25 22.75 2.14 22.75 3.98V8.51C22.75 10.36 21.77 11.25 19.77 11.25ZM15.73 2.75C14.39 2.75 14.25 3.13 14.25 3.98V8.51C14.25 9.37 14.39 9.74 15.73 9.74H19.77C21.11 9.74 21.25 9.36 21.25 8.51V3.98C21.25 3.12 21.11 2.75 19.77 2.75H15.73Z"
            fill="white"
            style="fill: var(--fillg)"
          />
          <path
            d="M19.77 22.75H15.73C13.72 22.75 12.75 21.77 12.75 19.77V15.73C12.75 13.72 13.73 12.75 15.73 12.75H19.77C21.78 12.75 22.75 13.73 22.75 15.73V19.77C22.75 21.77 21.77 22.75 19.77 22.75ZM15.73 14.25C14.55 14.25 14.25 14.55 14.25 15.73V19.77C14.25 20.95 14.55 21.25 15.73 21.25H19.77C20.95 21.25 21.25 20.95 21.25 19.77V15.73C21.25 14.55 20.95 14.25 19.77 14.25H15.73Z"
            fill="white"
            style="fill: var(--fillg)"
          />
        </g>
      </svg>
      <p>Menu</p>
    </button>

    <!-- Navigation Panel -->
    <transition name="zoom" mode="out-in" @before-enter="setTransitionOrigin">
      <div class="navPanel" v-show="showNavPanel" @click.self="toggleNavPanel">
        <div class="navPanelBackground">
          <div class="navDeco">
            <h2 class="navQuote">Things are getting interesting here.</h2>
            <img src="@/assets/avatar.png" />
          </div>
          <div class="navContent">
            <div class="navContentHeader">
              <h2>Menu</h2>
              <button class="closeButton m-element" @click="toggleNavPanel">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#fefefe" stroke-width="8" stroke-linecap="round">
                    <path d="M112 112L16 16" />
                    <path d="M16 112L112 16" />
                  </g>
                </svg>
              </button>
            </div>
            <Transition name="slide-in-left">
              <ul v-show="!showColNav" class="mainNav">
                <li class="nav-item m-element" @click="go('/')" id="top">
                  <div class="iconContainer">
                    <!-- Saxophone SVG Icon -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g
                        clip-path="url(#clip0_4418_9816)"
                        stroke="#264861"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z"
                        />
                        <path d="M12 17.9902V14.9902" />
                      </g>
                    </svg>
                  </div>

                  <p>Top</p>
                </li>
                <!-- <li class="nav-item m-element" @click="go('/collections')" id="blog">
                  <div class="iconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g clip-path="url(#clip0_4418_7256)" fill="#433074">
                        <path
                          d="M5.53999 19.5196C4.92999 19.5196 4.35999 19.3096 3.94999 18.9196C3.42999 18.4296 3.17999 17.6896 3.26999 16.8896L3.63999 13.6496C3.70999 13.0396 4.07999 12.2296 4.50999 11.7896L12.72 3.09956C14.77 0.929561 16.91 0.869561 19.08 2.91956C21.25 4.96956 21.31 7.10956 19.26 9.27956L11.05 17.9696C10.63 18.4196 9.84999 18.8396 9.23999 18.9396L6.01999 19.4896C5.84999 19.4996 5.69999 19.5196 5.53999 19.5196ZM15.93 2.90956C15.16 2.90956 14.49 3.38956 13.81 4.10956L5.59999 12.8096C5.39999 13.0196 5.16999 13.5196 5.12999 13.8096L4.75999 17.0496C4.71999 17.3796 4.79999 17.6496 4.97999 17.8196C5.15999 17.9896 5.42999 18.0496 5.75999 17.9996L8.97999 17.4496C9.26999 17.3996 9.74999 17.1396 9.94999 16.9296L18.16 8.23956C19.4 6.91956 19.85 5.69956 18.04 3.99956C17.24 3.22956 16.55 2.90956 15.93 2.90956Z"
                        />
                        <path
                          d="M17.3399 10.9508C17.3199 10.9508 17.2899 10.9508 17.2699 10.9508C14.1499 10.6408 11.6399 8.27083 11.1599 5.17083C11.0999 4.76083 11.3799 4.38083 11.7899 4.31083C12.1999 4.25083 12.5799 4.53083 12.6499 4.94083C13.0299 7.36083 14.9899 9.22083 17.4299 9.46083C17.8399 9.50083 18.1399 9.87083 18.0999 10.2808C18.0499 10.6608 17.7199 10.9508 17.3399 10.9508Z"
                        />
                        <path
                          d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>Blog</p>
                </li> -->
                <li class="nav-item m-element" @click="toggleColNav" id="collection">
                  <div class="iconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g clip-path="url(#clip0_4418_7057)" fill="#2a5039">
                        <path
                          d="M11.9998 13.3008C11.8698 13.3008 11.7398 13.2709 11.6198 13.2009L2.78985 8.09088C2.42985 7.88088 2.30983 7.42085 2.51983 7.06085C2.72983 6.70085 3.17983 6.58083 3.54983 6.79083L11.9998 11.6808L20.3998 6.82086C20.7598 6.61086 21.2198 6.74088 21.4298 7.09088C21.6398 7.45088 21.5098 7.91085 21.1598 8.12085L12.3899 13.2009C12.2599 13.2609 12.1298 13.3008 11.9998 13.3008Z"
                        />
                        <path
                          d="M12 22.3591C11.59 22.3591 11.25 22.0191 11.25 21.6091V12.5391C11.25 12.1291 11.59 11.7891 12 11.7891C12.41 11.7891 12.75 12.1291 12.75 12.5391V21.6091C12.75 22.0191 12.41 22.3591 12 22.3591Z"
                        />
                        <path
                          d="M12.0001 22.75C11.1201 22.75 10.2501 22.56 9.56012 22.18L4.22012 19.21C2.77012 18.41 1.64014 16.48 1.64014 14.82V9.16998C1.64014 7.50998 2.77012 5.59002 4.22012 4.78002L9.56012 1.82C10.9301 1.06 13.0701 1.06 14.4401 1.82L19.7801 4.78997C21.2301 5.58997 22.3601 7.51999 22.3601 9.17999V14.83C22.3601 16.49 21.2301 18.41 19.7801 19.22L14.4401 22.18C13.7501 22.56 12.8801 22.75 12.0001 22.75ZM12.0001 2.74999C11.3701 2.74999 10.7501 2.88 10.2901 3.13L4.95013 6.09997C3.99013 6.63997 3.14014 8.06999 3.14014 9.17999V14.83C3.14014 15.93 3.99013 17.37 4.95013 17.91L10.2901 20.88C11.2001 21.39 12.8001 21.39 13.7101 20.88L19.0501 17.91C20.0101 17.37 20.8601 15.94 20.8601 14.83V9.17999C20.8601 8.07999 20.0101 6.63997 19.0501 6.09997L13.7101 3.13C13.2501 2.88 12.6301 2.74999 12.0001 2.74999Z"
                        />
                        <path
                          d="M17.0002 13.9905C16.5902 13.9905 16.2502 13.6505 16.2502 13.2405V10.0206L7.13018 4.76055C6.77018 4.55055 6.65016 4.09054 6.86016 3.74054C7.07016 3.38054 7.52018 3.26052 7.88018 3.47052L17.3702 8.95056C17.6002 9.08056 17.7502 9.33052 17.7502 9.60052V13.2606C17.7502 13.6506 17.4102 13.9905 17.0002 13.9905Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>Collections</p>
                </li>
                <li class="nav-item m-element" @click="go('/works')" id="work">
                  <div class="iconContainer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="#7d642d"
                        stroke-width="8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M37 21C37 12.875 43.625 8 50.25 8H76.75C83.375 8 90 12.875 90 21"
                        />
                        <path
                          d="M64 30.9092H109.818C114.909 30.9092 120 34.7274 120 41.091V57.6365C120 67.8183 114.273 71.0001 109.818 72.2728L89.4545 78.0001"
                        />
                        <path
                          d="M64 30.9092H18.1818C13.0909 30.9092 8 34.7274 8 41.091V57.6365C8 67.8183 13.7273 71.0001 18.1818 72.2728L38.5455 78.0001"
                        />
                        <path
                          d="M10.5459 83.0909V109.818C10.5459 116.182 15.6368 120 20.7277 120H107.273C112.364 120 117.455 116.182 117.455 109.818V83.0909"
                        />
                        <rect x="52.5459" y="66.5454" width="22.9091" height="31.8182" rx="6" />
                      </g>
                    </svg>
                  </div>
                  <p>Works</p>
                </li>

                <li class="nav-item m-element" @click="go('/about')" id="about">
                  <div class="iconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#432323"
                    >
                      <g clip-path="url(#clip0_3111_32711)">
                        <path
                          d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                          style="fill: var(--fillg)"
                        />
                        <path
                          d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                          style="fill: var(--fillg)"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>About</p>
                </li>
              </ul>
            </Transition>

            <Transition name="slide-in-right">
              <ul v-show="showColNav" class="colSubNav">
                <li class="nav-item disable">
                  <div class="iconContainer" style="background-color: #a3fac4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g clip-path="url(#clip0_4418_7057)" fill="#2a5039">
                        <path
                          d="M11.9998 13.3008C11.8698 13.3008 11.7398 13.2709 11.6198 13.2009L2.78985 8.09088C2.42985 7.88088 2.30983 7.42085 2.51983 7.06085C2.72983 6.70085 3.17983 6.58083 3.54983 6.79083L11.9998 11.6808L20.3998 6.82086C20.7598 6.61086 21.2198 6.74088 21.4298 7.09088C21.6398 7.45088 21.5098 7.91085 21.1598 8.12085L12.3899 13.2009C12.2599 13.2609 12.1298 13.3008 11.9998 13.3008Z"
                        />
                        <path
                          d="M12 22.3591C11.59 22.3591 11.25 22.0191 11.25 21.6091V12.5391C11.25 12.1291 11.59 11.7891 12 11.7891C12.41 11.7891 12.75 12.1291 12.75 12.5391V21.6091C12.75 22.0191 12.41 22.3591 12 22.3591Z"
                        />
                        <path
                          d="M12.0001 22.75C11.1201 22.75 10.2501 22.56 9.56012 22.18L4.22012 19.21C2.77012 18.41 1.64014 16.48 1.64014 14.82V9.16998C1.64014 7.50998 2.77012 5.59002 4.22012 4.78002L9.56012 1.82C10.9301 1.06 13.0701 1.06 14.4401 1.82L19.7801 4.78997C21.2301 5.58997 22.3601 7.51999 22.3601 9.17999V14.83C22.3601 16.49 21.2301 18.41 19.7801 19.22L14.4401 22.18C13.7501 22.56 12.8801 22.75 12.0001 22.75ZM12.0001 2.74999C11.3701 2.74999 10.7501 2.88 10.2901 3.13L4.95013 6.09997C3.99013 6.63997 3.14014 8.06999 3.14014 9.17999V14.83C3.14014 15.93 3.99013 17.37 4.95013 17.91L10.2901 20.88C11.2001 21.39 12.8001 21.39 13.7101 20.88L19.0501 17.91C20.0101 17.37 20.8601 15.94 20.8601 14.83V9.17999C20.8601 8.07999 20.0101 6.63997 19.0501 6.09997L13.7101 3.13C13.2501 2.88 12.6301 2.74999 12.0001 2.74999Z"
                        />
                        <path
                          d="M17.0002 13.9905C16.5902 13.9905 16.2502 13.6505 16.2502 13.2405V10.0206L7.13018 4.76055C6.77018 4.55055 6.65016 4.09054 6.86016 3.74054C7.07016 3.38054 7.52018 3.26052 7.88018 3.47052L17.3702 8.95056C17.6002 9.08056 17.7502 9.33052 17.7502 9.60052V13.2606C17.7502 13.6506 17.4102 13.9905 17.0002 13.9905Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>Collections</p>
                </li>
                <li class="nav-item m-element" @click="toggleColNav" id="about">
                  <div class="iconContainer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#432323"
                    >
                      <path
                        d="M15 20.6695C14.81 20.6695 14.62 20.5995 14.47 20.4495L7.95003 13.9295C6.89003 12.8695 6.89003 11.1295 7.95003 10.0695L14.47 3.54953C14.76 3.25953 15.24 3.25953 15.53 3.54953C15.82 3.83953 15.82 4.31953 15.53 4.60953L9.01003 11.1295C8.53003 11.6095 8.53003 12.3895 9.01003 12.8695L15.53 19.3895C15.82 19.6795 15.82 20.1595 15.53 20.4495C15.38 20.5895 15.19 20.6695 15 20.6695Z"
                      />
                    </svg>
                  </div>
                  <p>Back</p>
                </li>
                <li class="nav-item m-element" @click="toggleColNav" id="about">
                  <div class="iconContainer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4418_6737)" fill="#432323">
                        <path
                          d="M18.29 22.75H5.70995C2.30995 22.75 2.12995 20.88 1.97995 19.37L1.57995 14.36C1.48995 13.39 1.76995 12.42 2.38995 11.64C3.12995 10.74 4.17995 10.25 5.30995 10.25H18.69C19.8 10.25 20.85 10.74 21.5599 11.59L21.7299 11.82C22.27 12.56 22.51 13.46 22.42 14.37L22.02 19.36C21.87 20.88 21.69 22.75 18.29 22.75ZM5.30995 11.75C4.63995 11.75 3.99995 12.05 3.57995 12.57L3.50995 12.64C3.18995 13.05 3.01995 13.63 3.07995 14.23L3.47995 19.24C3.61995 20.7 3.67995 21.25 5.70995 21.25H18.29C20.33 21.25 20.38 20.7 20.52 19.23L20.92 14.22C20.9799 13.63 20.8099 13.04 20.42 12.58L20.32 12.46C19.8699 11.99 19.3 11.75 18.68 11.75H5.30995Z"
                        />
                        <path
                          d="M20.5 12.2203C20.09 12.2203 19.75 11.8803 19.75 11.4703V9.68027C19.75 6.70027 19.23 6.18027 16.25 6.18027H13.7C12.57 6.18027 12.18 5.78027 11.75 5.21027L10.46 3.50027C10.02 2.92027 9.92 2.78027 9.02 2.78027H7.75C4.77 2.78027 4.25 3.30027 4.25 6.28027V11.4303C4.25 11.8403 3.91 12.1803 3.5 12.1803C3.09 12.1803 2.75 11.8403 2.75 11.4303V6.28027C2.75 2.45027 3.92 1.28027 7.75 1.28027H9.03C10.57 1.28027 11.05 1.78027 11.67 2.60027L12.95 4.30027C13.22 4.66027 13.24 4.68027 13.71 4.68027H16.26C20.09 4.68027 21.26 5.85027 21.26 9.68027V11.4703C21.25 11.8803 20.91 12.2203 20.5 12.2203Z"
                        />
                        <path
                          d="M14.5699 17.75H9.42993C9.01993 17.75 8.67993 17.41 8.67993 17C8.67993 16.59 9.01993 16.25 9.42993 16.25H14.5699C14.9799 16.25 15.3199 16.59 15.3199 17C15.3199 17.41 14.9899 17.75 14.5699 17.75Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>Files</p>
                  <p class="desc">
                    The FileDirectory project indexed 100TB+ files of animes, music, images stored
                    on different storage media
                  </p>
                </li>
                <li class="nav-item m-element" @click="toggleColNav" id="about">
                  <div class="iconContainer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4418_7552)" fill="#432323">
                        <path
                          d="M15 22.75H9C4.59 22.75 3.25 21.41 3.25 17V7C3.25 2.59 4.59 1.25 9 1.25H15C19.41 1.25 20.75 2.59 20.75 7V17C20.75 21.41 19.41 22.75 15 22.75ZM9 2.75C5.42 2.75 4.75 3.43 4.75 7V17C4.75 20.57 5.42 21.25 9 21.25H15C18.58 21.25 19.25 20.57 19.25 17V7C19.25 3.43 18.58 2.75 15 2.75H9Z"
                        />
                        <path
                          d="M14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z"
                        />
                        <path
                          d="M12 19.8598C10.73 19.8598 9.69995 18.8298 9.69995 17.5598C9.69995 16.2898 10.73 15.2598 12 15.2598C13.27 15.2598 14.3 16.2898 14.3 17.5598C14.3 18.8298 13.27 19.8598 12 19.8598ZM12 16.7498C11.56 16.7498 11.2 17.1098 11.2 17.5498C11.2 17.9898 11.56 18.3498 12 18.3498C12.44 18.3498 12.8 17.9898 12.8 17.5498C12.8 17.1098 12.44 16.7498 12 16.7498Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>Mobile Device</p>
                  <p class="desc">
                    Devices with special design or meaningful moment with me, I tinkle with them
                    although they are useless in this era
                  </p>
                </li>
                <li class="nav-item m-element" @click="toggleColNav" id="about">
                  <div class="iconContainer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 105 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#432323" stroke-width="6" stroke-linecap="round">
                        <rect x="4" y="19" width="24" height="83" rx="8" />
                        <rect x="76" y="30" width="25" height="72" rx="8" />
                        <rect x="40" y="4" width="24" height="98" rx="8" />
                        <path d="M52 17V55" />
                        <path d="M89 42L88 42" />
                        <path d="M89 52L88 52" />
                        <path d="M16 67L16 66" />
                        <path d="M89 90L88 90" />
                        <path d="M16 31V55" />
                      </g>
                    </svg>
                  </div>
                  <p>Doujinshi</p>
                  <p class="desc">
                    Self-published print works from various artists, project is created to archive
                    what I bought and likes.
                  </p>
                </li>
                <li class="nav-item m-element" @click="toggleColNav" id="about">
                  <div class="iconContainer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4418_7585)" fill="#432323">
                        <path
                          d="M19.3198 10.7498H4.68977C2.79977 10.7498 1.25977 9.20978 1.25977 7.31978V4.68977C1.25977 2.79977 2.79977 1.25977 4.68977 1.25977H19.3198C21.2098 1.25977 22.7498 2.79977 22.7498 4.68977V7.31978C22.7498 9.20978 21.2098 10.7498 19.3198 10.7498ZM4.67976 2.74977C3.60976 2.74977 2.74977 3.61976 2.74977 4.67976V7.30977C2.74977 8.37977 3.61976 9.23978 4.67976 9.23978H19.3098C20.3798 9.23978 21.2398 8.36977 21.2398 7.30977V4.67976C21.2398 3.60976 20.3698 2.74977 19.3098 2.74977H4.67976Z"
                        />
                        <path
                          d="M19.3198 22.7498H4.68977C2.79977 22.7498 1.25977 21.2098 1.25977 19.3198V16.6898C1.25977 14.7998 2.79977 13.2598 4.68977 13.2598H19.3198C21.2098 13.2598 22.7498 14.7998 22.7498 16.6898V19.3198C22.7498 21.2098 21.2098 22.7498 19.3198 22.7498ZM4.67976 14.7498C3.60976 14.7498 2.74977 15.6198 2.74977 16.6798V19.3098C2.74977 20.3798 3.61976 21.2398 4.67976 21.2398H19.3098C20.3798 21.2398 21.2398 20.3698 21.2398 19.3098V16.6798C21.2398 15.6098 20.3698 14.7498 19.3098 14.7498H4.67976Z"
                        />
                        <path
                          d="M6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7C6.75 7.41 6.41 7.75 6 7.75Z"
                        />
                        <path
                          d="M10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7C10.75 7.41 10.41 7.75 10 7.75Z"
                        />
                        <path
                          d="M6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19C6.75 19.41 6.41 19.75 6 19.75Z"
                        />
                        <path
                          d="M10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19C10.75 19.41 10.41 19.75 10 19.75Z"
                        />
                        <path
                          d="M18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z"
                        />
                        <path
                          d="M18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>GK & Nendoroid</p>
                  <p class="desc">
                    Custom-made high quality figurine and cute characters from animes
                  </p>
                </li>
                <li class="nav-item m-element" @click="toggleColNav" id="about">
                  <div class="iconContainer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_655_7051)" fill="#432323">
                        <path
                          d="M12.0493 14.97C9.8893 14.97 7.8793 14.01 6.5393 12.32C5.2193 10.67 4.7393 8.54999 5.2093 6.48999L5.9593 3.34999C6.2593 2.10999 7.3593 1.23999 8.6293 1.23999H15.4293C16.7193 1.23999 17.8493 2.14999 18.1193 3.40999L18.7793 6.48999C19.2493 8.56999 18.7793 10.71 17.4493 12.37C16.1393 14.01 14.1693 14.96 12.0393 14.96L12.0493 14.97ZM8.6293 2.74999C8.0493 2.74999 7.5493 3.14999 7.4093 3.70999L6.6593 6.83999C6.2893 8.43999 6.6693 10.1 7.6993 11.39C8.7493 12.71 10.3293 13.47 12.0393 13.47C13.7493 13.47 15.2493 12.73 16.2693 11.45C17.2993 10.16 17.6793 8.46999 17.2993 6.82999L16.6393 3.72999C16.5193 3.15999 15.9993 2.73999 15.4193 2.73999H8.6193L8.6293 2.74999Z"
                        />
                        <path
                          d="M12.0508 18.75C11.6408 18.75 11.3008 18.41 11.3008 18V14.22C11.3008 13.81 11.6408 13.47 12.0508 13.47C12.4608 13.47 12.8008 13.81 12.8008 14.22V18C12.8008 18.41 12.4608 18.75 12.0508 18.75Z"
                        />
                        <path
                          d="M13.1501 22.75H10.8401C10.2101 22.75 9.64008 22.42 9.32008 21.87C9.00008 21.32 9.00008 20.67 9.32008 20.12L10.4701 18.12C10.7901 17.57 11.3501 17.24 11.9901 17.24C12.6301 17.24 13.1901 17.57 13.5101 18.12L14.6601 20.12C14.9801 20.67 14.9801 21.32 14.6601 21.87C14.3401 22.42 13.7801 22.75 13.1401 22.75H13.1501ZM11.7801 18.88L10.6301 20.88C10.5701 20.99 10.6001 21.08 10.6301 21.13C10.6601 21.18 10.7201 21.25 10.8501 21.25H13.1601C13.2901 21.25 13.3501 21.17 13.3801 21.13C13.4101 21.08 13.4401 20.99 13.3801 20.88L12.2301 18.88C12.1101 18.66 11.9201 18.66 11.8001 18.88H11.7801Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>Cha</p>
                  <p class="desc">
                    Tea and matcha from dfferent brands, different price point are being teated
                  </p>
                </li>

                <li class="nav-item m-element" @click="toggleColNav" id="about">
                  <div class="iconContainer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4418_7585)" fill="#432323">
                        <path
                          d="M19.3198 10.7498H4.68977C2.79977 10.7498 1.25977 9.20978 1.25977 7.31978V4.68977C1.25977 2.79977 2.79977 1.25977 4.68977 1.25977H19.3198C21.2098 1.25977 22.7498 2.79977 22.7498 4.68977V7.31978C22.7498 9.20978 21.2098 10.7498 19.3198 10.7498ZM4.67976 2.74977C3.60976 2.74977 2.74977 3.61976 2.74977 4.67976V7.30977C2.74977 8.37977 3.61976 9.23978 4.67976 9.23978H19.3098C20.3798 9.23978 21.2398 8.36977 21.2398 7.30977V4.67976C21.2398 3.60976 20.3698 2.74977 19.3098 2.74977H4.67976Z"
                        />
                        <path
                          d="M19.3198 22.7498H4.68977C2.79977 22.7498 1.25977 21.2098 1.25977 19.3198V16.6898C1.25977 14.7998 2.79977 13.2598 4.68977 13.2598H19.3198C21.2098 13.2598 22.7498 14.7998 22.7498 16.6898V19.3198C22.7498 21.2098 21.2098 22.7498 19.3198 22.7498ZM4.67976 14.7498C3.60976 14.7498 2.74977 15.6198 2.74977 16.6798V19.3098C2.74977 20.3798 3.61976 21.2398 4.67976 21.2398H19.3098C20.3798 21.2398 21.2398 20.3698 21.2398 19.3098V16.6798C21.2398 15.6098 20.3698 14.7498 19.3098 14.7498H4.67976Z"
                        />
                        <path
                          d="M6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7C6.75 7.41 6.41 7.75 6 7.75Z"
                        />
                        <path
                          d="M10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7C10.75 7.41 10.41 7.75 10 7.75Z"
                        />
                        <path
                          d="M6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19C6.75 19.41 6.41 19.75 6 19.75Z"
                        />
                        <path
                          d="M10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19C10.75 19.41 10.41 19.75 10 19.75Z"
                        />
                        <path
                          d="M18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z"
                        />
                        <path
                          d="M18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>VPS</p>
                  <p class="desc">Hosting some web services, databases, backends</p>
                </li>
              </ul>
            </Transition>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'SiteNav',
  data() {
    return {
      showNavPanel: false,
      showColNav: false,
    }
  },
  watch: {},
  mounted() {},
  beforeUnmount() {},
  methods: {
    toggleNavPanel(event) {
      const rect = event.currentTarget.getBoundingClientRect()

      // Save the precise center point of the clicked button
      this.buttonCoords = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      }

      this.showNavPanel = !this.showNavPanel
    },
    toggleColNav() {
      this.showColNav = !this.showColNav
    },

    go(url) {
      this.showNavPanel = false
      this.$router.push(url)
    },
    setTransitionOrigin(el) {
      // Find the modal card inside the backdrop element wrapper
      const card = el.querySelector('.navPanel') || el

      // Get where the card would naturally sit on the screen
      const cardRect = card.getBoundingClientRect()

      // Calculate the origin relative to the card's own bounding box
      const originX = this.buttonCoords.x - cardRect.left
      const originY = this.buttonCoords.y - cardRect.top

      // Apply the origin styles safely directly onto the card DOM nodes
      card.style.transformOrigin = `${originX}px ${originY}px`
    },
  },
}
</script>
<style scoped>
.navbar {
  z-index: 1000;
  position: sticky;
  top: 16px;
}

/* Keep all navbar text #fefefe in every state */
.navbar .navbar-brand,
.navbar .nav-link,
.navbar .nav-link:hover,
.navbar .nav-link:focus,
.navbar .nav-link:active,
.navbar .nav-link:visited,
.navbar .nav-link.router-link-active,
.navbar .nav-link.router-link-exact-active,
.navbar .nav-link.active,
.navbar a {
  color: #fefefe !important;
  text-decoration: none;
}

.nav-brand {
  display: inline-flex;
  max-height: 2rem;
  padding: var(--padding);
  border-radius: var(--radius-2);
  background-color: #2a2a2a;
  box-shadow: 0px 15px 50px #1a1a1a;

}

.nav-brand img {
  position: relative;
  bottom: 4px;
  height: 42px;
  margin-right: 4px;
}

.nav-brand p {
  display: inline-block;
  position: relative;
  bottom: 16px;
  margin-right: 8px;
}

.navPanel {
  display: flex;
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  /* Horizontally centers */
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  backdrop-filter: blur(8px);
}

.navPanelBackground {
  display: flex;
  z-index: 1002;
  top: 50%;
  width: 80vw;
  min-width: 500px;
  border-radius: var(--radius-3);
  background-color: #2a2a2a;
  box-shadow: 0px 15px 50px #1a1a1a;
  opacity: 100%;
}

.navDeco {
  width: 40%;
  height: 100%;
  padding: 32px;
  border-radius: var(--radius-3);
  background-color: #ffaeae;
}

.navContent {
  width: 60%;
  padding: var(--padding);
}
.navContentHeader {
  display: flex; /* Positions children in a horizontal row */
  align-items: center; /* Vertically aligns items in the center */
  justify-content: space-between; /* Aligns items: center, flex-start, flex-end, space-between */
  padding: var(--padding);
  padding-top: 0;
  gap: 16px; /* Adds modern, even spacing between items */
}
nav ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-height: 60dvh;
  margin: 0;
  padding: 0; /* Optional: removes default indentation */
  overflow-y: scroll;
  gap: 0px; /* Optional: adds space between items */
  list-style: none; /* Optional: removes default bullet points */
  scrollbar-color: #3a3a3a #2a2a2a;
  scrollbar-width: thin;
}

.nav-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: var(--padding);
  padding: var(--padding);
  border-radius: var(--radius-2);
  background-color: #3a3a3a;
  list-style-type: none;
  text-decoration: none;
  transition: 0.3s ease;
}

.nav-item p {
  display: inline;
  margin: 0;
  padding-top: var(--padding);
  padding-left: var(--padding);
}

p.desc {
  display: block;
  flex: 0 0 95%;
  padding: var(--padding);
}

.nav-item.disable {
  background-color: #2a2a2a;
}

.navbarToggler {
  display: inline-flex;
  position: fixed;
  top: 1rem;
  right: 1rem;
  align-items: center;
  justify-content: center;

  height: 48px;
  padding: var(--padding) 16px;
  border: none;
  border-radius: var(--radius-2);
  background-color: #2a2a2a;
  box-shadow: 0px 15px 50px #1a1a1a;
  color: #fefefe;
  /* Smooth hover transition */
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
}

.backNav {
  display: inline-flex;
  z-index: 999;
  position: fixed;
  top: 1rem;
  right: 125px;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: var(--padding) 16px;
  border: none;
  border-radius: var(--radius-2);
  background-color: #2a2a2a;
  box-shadow: 0px 15px 50px #1a1a1a;
  color: #fefefe;
  /* Smooth hover transition */
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
}

.closeButton {
  display: inline-flex;
  align-items: center; /* Centers the SVG vertically */
  justify-content: center; /* Centers the SVG horizontally */
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-color: #3a3a3a;
  color: #fefefe;
}

.closeButton svg {
  display: inline-block;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
}

.navbarToggler svg {
  display: inline-block;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.navbarToggler p {
  display: inline-block;
  margin-left: var(--padding);
}

@media (max-width: 576px) {
  .navbarToggler {
    position: fixed;
    top: unset;
    right: 0.5rem;
    bottom: 1rem;
    width: 3rem;
    height: 3rem;
  }

  .backNav {
    top: unset;
    right: 4rem;
    bottom: 1rem;
    width: 3rem;
    height: 3rem;
    padding: 0px
  }

  .navbarToggler p {
    display: none;
  }

  .backNav p{display:none;}

  .navPanel {
    /* Horizontally centers */
    align-items: end;
    width: 100%;
    margin-bottom: 22px;
  }

  .navPanelBackground {
    flex-direction: column;
    width: 100%;
    min-width: 0px;
    margin: 20px;
  }

  .navDeco {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 32px;
  }

  .navContent {
    width: 97%;
  }

  .colSubNav {
    grid-template-columns: 1fr;
    max-height: 50dvh;
  }

  .navDeco {
    max-height: 40dvh;
  }

  .navQuote {
    font-size: 1rem;
  }
}

.fade-enter-from {
  transform: scale(0.95);
  opacity: 0;
}

.fade-leave-to {
  transform: scale(0.95);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.3s ease;
}

.navQuote {
  color: #2a2a2a;
  font-weight: bold;
  font-size: 2rem;
}

.iconContainer {
  display: inline-flex;
  padding: var(--padding);
  border-radius: 12px;
}

#top .iconContainer {
  background-color: #aedcff;
}

#top:hover {
  background-color: #aedcff;
  color: #264861;
}

#about:hover {
  background-color: #ffaeae;
  color: #432323;
}

#about .iconContainer {
  background-color: #ffaeae;
}

#blog:hover {
  background-color: #c5aeff;
  color: #433074;
}

#blog .iconContainer {
  background-color: #c5aeff;
}

#collection:hover {
  background-color: #a3fac4;
  color: #2a5039;
}

#collection .iconContainer {
  background-color: #a3fac4;
}

#work:hover {
  background-color: #ffe5ae;
  color: #7d642d;
}

#work .iconContainer {
  background-color: #ffe5ae;
}

.closeButton:hover {
  background-color: #ffaeae;
  stroke-color: #432323;
}

/* Transition Animations - Works seamlessly with v-show */
.zoom-enter-active {
  transition:
    opacity 0.35s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
}

.zoom-leave-active {
  /* Slightly faster exit animation for a responsive feel */
  transition:
    opacity 0.25s ease-in,
    transform 0.25s ease-in;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.1);
  opacity: 0;
}

/* 1. Define the entry and exit transition active states */
.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition:
    transform 0.6s ease-in-out,
    opacity 0.6s ease-in-out;
}

/* 2. Define the starting state for entering & ending state for leaving */
.slide-in-right-enter-from,
.slide-in-right-leave-to {
  max-height: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  transform: translateX(16px);
  opacity: 0;
}

.backBtn-enter-active,
.backBtn-leave-active {
  transition:
    transform 0.6s ease-in-out,
    opacity 0.4s ease-in-out;
}

/* 2. Define the starting state for entering & ending state for leaving */
.backBtn-enter-from,
.backBtn-leave-to {
  transform: translateX(16px);
  opacity: 0;
}

.slide-in-left-enter-active,
.slide-in-left-leave-active {
  transition:
    transform 0.6s ease-in-out,
    opacity 0.6s ease-in-out;
}

/* 2. Define the starting state for entering & ending state for leaving */
.slide-in-left-enter-from,
.slide-in-left-leave-to {
  max-height: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  transform: translateX(-16px);
  opacity: 0;
}

.mainNav {
  overflow: hidden;
}

.navDeco img {
  max-width: 128px;
}
</style>
