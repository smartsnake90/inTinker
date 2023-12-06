<template>
  <div class="max-w-sm sm:max-w-lg m-auto mt-24">
    <p class="font-Roboto font-bold text-[30px]"># AI Insights</p>
    <div class="flex justify-between mt-5">
      <p class="max-w-[660px] ">
        Discover the insights drawn from inTinker's AI through these graphs below. Each graph reflects the balanced
        tuning across different settings, offering a glimpse into the systematic approach behind the scenes
      </p>
      <div class="flex flex-col items-end w-[200px] hidden sm:flex">
        <img src="/lamp.svg" class="w-[20px]" />
        <p class="text-right text-[12px]">
          Can you tell what the best settings are for this printer and material by looking at the
          graphs below?
        </p>
      </div>
    </div>
    <div class="flex flex-col bg-white justify-center rounded-xl my-10 sm:flex-row"
      style="box-shadow: 4px 4px 14px 15px #fff;">
      <img src="/img(sec4-1).svg" />
      <img src="/img(sec4-2).svg" />
      <img src="/img(sec4-3).svg" />
    </div>
    <div class="flex mt-5">
      <ExclamationCircleIcon class="self-start sm:align-auto w-[70px] sm:w-8" />
      <p class="text-[20px]">The graphs above were generated from our AI via Python. Printer: Creality Ender 3. Material:
        Hatchbox PLA</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'
</script>