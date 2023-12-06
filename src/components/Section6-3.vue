<template>
  <div class="max-w-sm sm:max-w-lg m-auto mt-[200px]">
    <div class="flex justify-between flex-col sm:flex-row">
      <div class="sm:max-w-[450px]">
        <div class="font-Roboto font-bold text-sm">
          Freestyle Print
        </div>
        <div class="text-black text-opacity-60 max-w-screen-lg mt-4 font-bold">
          Build your Temperature Tower according to settings you want to test. Manually type them into the table
          and we generate the part for you. All you have to do is print it.
        </div>
        <div class="pl-4 mt-4 leading-7">
          <p class="font-Roboto font-bold text-[16px]">1. Add a Freestyle Print to your calibration</p>
          <p class="font-Roboto font-bold text-[16px]">2. Type in the settings you want to use for each level</p>
          <p class="font-Roboto font-bold text-[16px]">3. Download the configured calibration part</p>
        </div>
        <div class="flex mt-4">
          <ExclamationCircleIcon class="w-[24px] mr-2" />
          <p class="text-black text-opacity-60 font-bold">Freestyle Prints contribute to the AI model</p>
        </div>
      </div>
      <div class="sm:max-w-[450px] mt-[70px] sm:mt-0">
        <div class="font-Roboto font-bold text-sm flex">
          <img src="/wand.svg" class="mr-2" />
          <p>AI Print</p>
        </div>
        <div class="text-black text-opacity-60 max-w-screen-lg mt-4 font-bold">
          Have AI build a temperature tower for you according to what settings have worked in the past
        </div>
        <div class="pl-4 mt-4 leading-7">
          <p class="font-Roboto font-bold text-[16px]">1. Add an AI Print to your calibration</p>
          <p class="font-Roboto font-bold text-[16px]">
          <div class="font-Roboto font-bold text-[16px]">2. Adjust the AI parameters or leave as is</div>
          <span class="text-regal-orange ml-4 border-b-2 border-regal-orange">
            Learn More about AI behavior>
          </span>
          </p>
          <p class="font-Roboto font-bold text-[16px] mt-4">3. Download the configured calibration part</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center mt-[70px] sm:mt-10 ">
      <p class="font-Roboto font-bold text-sm flex text-black text-opacity-[0.85] mb-4">Mix and Match Prints</p>
      <p class="max-w-[470px] text-center font-bold text-black text-opacity-60">Start the Calibration with a Freestyle
        Print
        that uses settings you've
        used
        in the
        past. This give the AI a
        starting point and a leg up. Then move to AI Prints and have it build on what you've used before.</p>
      <button
        class="bg-regal-orange text-white text-opacity-[0.85] hover:text-opacity-100 text-xl font-bold py-2 px-4 rounded mt-5">
        Start Calibration for FREE
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'
</script>