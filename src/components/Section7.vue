<template>
  <div class="max-w-sm sm:max-w-lg m-auto mt-[150px] mb-[100px]">
    <div class="font-Roboto font-bold text-[30px] hidden sm:block">
      # HOW IT WORKS
    </div>
    <div class="font-Roboto font-bold text-[30px] sm:hidden">
      # HOW THE SOFTWARE WORKS
    </div>
    <div class="font-bold text-sm text-black text-opacity-60 max-w-screen-lg">
      Below takes you through a step by step example of what its like using inTinker to dial in a new material.
    </div>
    <div class="mt-10 flex">
      <Timeline class="sm:w-1/2" />
      <div class="flex flex-col align-center w-1/2 hidden sm:flex">
        <img src="/img(sec7-1).svg" />
        <img src="/img(sec7-2).svg" />
        <img src="/img(sec7-3).svg" class="mt-[200px]" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Timeline from './Timeline.vue';
</script>