<template>
  <div>

    <Head>
      <Title>Memulai aplikasi.. • K-MOTION</Title>
    </Head>
    <div class="h-screen w-screen bg-zinc-50 dark:bg-zinc-900 flex flex-col">
      <div class="fixed top-0 left-0 w-full z-40 bg-white dark:bg-zinc-800 dark:text-gray-100">
        <div
          class="flex flex-row justify-between w-full px-12 py-10 border-b border-gray-200 dark:border-black items-center xs:p-6">
          <div class="grid grid-cols-4 w-1/4 animate-pulse">
            <div class="col-start-1 h-6 bg-zinc-200 dark:bg-zinc-600 rounded-full"></div>
          </div>
          <div class="text-gray-400 animate-pulse grid grid-cols-3 gap-4 w-2/4">
            <div class="h-6 bg-zinc-200 dark:bg-zinc-600 rounded-full"></div>
            <div class="h-6 bg-zinc-200 dark:bg-zinc-600 rounded-full"></div>
            <div class="h-6 bg-zinc-200 dark:bg-zinc-600 rounded-full"></div>
          </div>
          <div class="grid grid-cols-4 w-1/4 animate-pulse">
            <div class="col-end-5 h-6 bg-zinc-200 dark:bg-zinc-600 rounded-full"></div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center h-screen">
        <svg class="h-10 w-10 text-rose-600" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
          viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
            <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3"
              d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />
            </path>
            <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />
              <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                values="0 12 12;360 12 12" />
            </path>
          </g>
        </svg>
        <h2 class="text-center text-zinc-700 dark:text-white text-2xl font-bold mt-6">Memulai aplikasi...</h2>
        <p class="w-full text-center text-zinc-500 dark:text-white mt-1">Tunggu sebentar, aplikasi <span
            class="text-rose-600 font-semibold">K-Motion</span> sedang dimuat.</p>
      </div>
    </div>
  </div>
</template>