<template>
  <div class="max-w-sm sm:max-w-lg m-auto mt-20">
    <div class="flex flex-col gap-x-[50px] sm:flex-row">
      <div class="sm:w-5/12">
        <p class="text-regal-orange text-[40px] font-bold leading-[3.438rem] sm:text-[55px]">3D PRINTING CALIBRATION <span
            class="text-[#1D1E20]">POWERED
            BY</span> AI</p>
        <p class="mt-5 text-black text-opacity-[0.6] text-[17px] drop-shadow-lg hidden sm:block">Streamline setting up new
          filaments by
          tuning
          Stringing
          and
          Under
          Extrusion
          with an AI powered Calibration system.
        </p>
        <p class="font-bold text-[16px] text-opacity-[0.85] drop-shadow-lg text-black sm:hidden">Fix Stringing and Under
          Extrusion when
          printing
          with new
          materials.</p>
      </div>
      <div class="sm:w-7/12">
        <img class="hidden sm:block" src="/reddit-landing-hero.svg" alt="Landing Hero" />
        <img class="sm:hidden" src="/img(hero-mobile).svg" alt="Landing Hero" />
      </div>
    </div>
    <div>
      <div class="flex flex-row">
        <StarIcon class="h-7 w-7 text-yellow-300" />
        <StarIcon class="h-7 w-7 text-yellow-300" />
        <StarIcon class="h-7 w-7 text-yellow-300" />
        <StarIcon class="h-7 w-7 text-yellow-300" />
        <StarIcon class="h-7 w-7 text-yellow-300" />
      </div>
      <h5 class="text-[#1D1E20] font-bold">2,400 + Happy Users</h5>
    </div>
    <div class="flex flex-row items-center gap-x-[50px]">
      <div class=" sm:w-5/12">
        <div class="flex flex-col gap-x-3 sm:items-center sm:flex-row">
          <button
            class="bg-regal-orange text-white text-opacity-[0.85] hover:text-opacity-100 text-xl font-bold py-2 px-4 rounded">
            Start Calibration for FREE
          </button>
          <div class="flex items-center border-b-2 border-black w-[130px] mt-4 sm:mt-0">
            <p class="text-[18px] font-semibold">
              How it works
            </p>
            <ChevronRightIcon class="h-5 w-5 text-black-500" />
          </div>
        </div>
      </div>
      <div class="w-7/12 flex flow-row items-center gap-x-6 hidden sm:flex">
        <img src="/Group 6021.svg" alt="Group 6021" />
        <p class="text-[38px] text-regal-orange font-bold">Hero</p>
        <img src="/Group 6017.svg" alt="Group 6017" />
        <p class="text-[20px] text-black font-bold">Zero</p>
      </div>
    </div>
    <div class="flex flex-row gap-x-10 items-center justify-between  mt-10 sm:justify-center">
      <img src="/image 47.svg">
      <img src="/image 48.svg">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StarIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
</script>