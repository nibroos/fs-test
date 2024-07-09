<template>
  <div class="w-full">
    <div class="flex items-center justify-between">
      <!-- Header Master Style -->
      <div class="lg:mb-5 mb-2 md:mb-2">
        <!-- title -->
        <h1
          class="lg:text-3xl md:text-2xl text-xl font-bold lg:leading-10 md:leading-6 leading-5"
        >
          Dashboard
        </h1>
        <div class="w-full flex items-center gap-5">
          <h1 class="text-[15px] font-normal text-[#ADADAD]">Dashboard</h1>
        </div>
      </div>

      <!-- button Create -->
      <div class="">
        <slot name="buttonhead" />
      </div>
    </div>

    <div class="w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// const router = useRoute();
// const routePath = router.path;
// const pathArray = routePath.split("/");
// const titlePath = pathArray[1];
// const lastPathSegment = pathArray[pathArray.length - 1].replace(/-/g, " ");
</script>

<style scoped></style>
