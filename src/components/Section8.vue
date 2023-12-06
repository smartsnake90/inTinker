<template>
  <div class="max-w-sm sm:max-w-lg m-auto mt-[150px] mb-[100px]">
    <div class="flex flex-col items-center sm:justify-between sm:flex-row">
      <div class="flex flex-col justify-center sm:max-w-[420px]">
        <div class="font-Roboto font-bold text-md sm:max-w-[500px]">
          # Start a Calibration for FREE
        </div>
        <p class="text-[14px] text-black text-opacity-60">
          Pick a plan that fits your needs. The Free Plan offers a basic calibration system for your 3D printing
          tasks. For AI-powered calibration, opt for our Paid Subscription to enhance your material tuning
          process.
        </p>
        <div class="flex flex-row mt-4">
          <StarIcon class="h-7 w-7 text-yellow-300" />
          <StarIcon class="h-7 w-7 text-yellow-300" />
          <StarIcon class="h-7 w-7 text-yellow-300" />
          <StarIcon class="h-7 w-7 text-yellow-300" />
          <StarIcon class="h-7 w-7 text-yellow-300" />
        </div>
        <p class="text-[16px] text-black text-opacity-[0.85] mt-2">"By the way, so far the best quality I have been able
          to get
          out of the setup. Keep
          it up, its a
          brilliant idea."
        </p>
        <div class="flex mt-2">
          <img src="/user.svg" class="w-[30px]" />
          <div class="ml-3">
            <p class="font-bold text-[16px] text-black text-opacity-[0.65]">Wazza</p>
            <p class="font-bold text-[16px] text-black text-opacity-[0.65]">January 3, 2022</p>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-center hidden sm:flex">
          <div class="text-[14px] text-black text-opacity-[0.85]">Monthly Billing</div>
          <label class="relative inline-flex items-center cursor-pointer mx-2">
            <input type="checkbox" value="" class="sr-only peer" :checked="checked" @click="handleChange(!checked)">
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-regal-orange">
            </div>
          </label>
          <div class="text-[14px] font-bold text-black text-opacity-[0.85]">Annual Billing</div>
          <div
            class="bg-black bg-opacity-[0.25] w-[70px] h-[22px] rounded ml-2 text-[14px] text-center font-bold text-black text-opacity-[0.85]">
            33% OFF
          </div>
        </div>
        <div class="flex justify-center gap-x-10 flex-col items-center mt-[50px] sm:mt-6 sm:justify-around sm:flex-row">
          <div class="min-w-[370px] p-5 shadow-2xl rounded-2xl">
            <p class="font-semibold text-[22px] text-center">Explorer</p>
            <p class="text-black text-opacity-60 text-center my-4 font-semibold">A CAlibration System not using AI</p>
            <div class="my-5 py-5 w-full text-center rounded-2xl border-black border">
              <p class="mb-2 text-[30px] font-bold text-black text-opacity-[0.85]">FREE</p>
              <p class="text-[20px] text-black text-opacity-[0.85]">Forever</p>
            </div>
            <div class="flex font-bold text-sm items-center text-black text-opacity-60 my-2 text-[1rem]">
              <CheckCircleIcon class="h-6 w-6 mr-2 text-regal-orange" />
              Unlimited Printers
            </div>
            <div class="flex font-bold text-sm items-center text-black text-opacity-60 my-2 text-[1rem]">
              <CheckCircleIcon class="h-6 w-6 mr-2 text-regal-orange" />
              Unlimited Materials
            </div>
            <div class="flex font-bold text-sm items-center text-black text-opacity-60 my-2 text-[1rem]">
              <CheckCircleIcon class="h-6 w-6 mr-2 text-regal-orange" />
              Unlimited Calibrations
            </div>
            <div class="flex font-bold text-sm items-center text-black text-opacity-60 my-2 text-[1rem]">
              <CheckCircleIcon class="h-6 w-6 mr-2 text-regal-orange" />
              Unlimited Freestyle Prints
              <InformationCircleIcon class="h-5 w-5 mr-2 ml-1" />
            </div>
            <button
              class="w-full bg-regal-orange text-white text-opacity-[0.85] hover:text-opacity-100 text-xl font-bold py-3 px-4 mt-10 rounded-lg">
              Start Calibration for FREE
            </button>
          </div>
          <div class="mt-10 sm:mt-1">
            <div class="flex justify-center sm:mt-5 sm:hidden">
              <div class="text-[14px] text-black text-opacity-[0.85]">Monthly Billing</div>
              <label class="relative inline-flex items-center cursor-pointer mx-2">
                <input type="checkbox" value="" class="sr-only peer" :checked="checked" @click="handleChange(!checked)">
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-regal-orange">
                </div>
              </label>
              <div class="text-[14px] font-bold text-black text-opacity-[0.85]">Annual Billing</div>
              <div
                class="bg-black bg-opacity-[0.25] w-[70px] h-[22px] rounded ml-2 text-[14px] text-center font-bold text-black text-opacity-[0.85]">
                33% OFF
              </div>
            </div>
            <div class="min-w-[370px] p-5 shadow-2xl rounded-2xl bg-regal-orange text-white mt-10 sm:m-0">
              <p class="font-semibold text-[22px] text-center">AI</p>
              <p class="text-center my-4 font-semibold">A CAlibration System using AI</p>
              <div class="my-5 py-5 w-full text-center rounded-2xl bg-white" v-if="checked === true">
                <p class="mb-2 text-[30px] font-bold text-black text-opacity-[0.85]">$68 <span
                    class="text-[20px] text-red-500 line-through absolute mt-[10px] ml-[5px]">$101.88</span></p>
                <p class="text-[20px] text-black text-opacity-[0.85]">Billed Annually</p>
              </div>
              <div class="my-5 py-5 w-full text-center rounded-2xl bg-white" v-if="checked === false">
                <p class="mb-2 text-[30px] font-bold text-black text-opacity-[0.85]">$8.49</p>
                <p class="text-[20px] text-black text-opacity-[0.85]">Billed Monthly</p>
              </div>
              <div class="flex font-bold text-sm items-center text-white my-2 text-[1rem]">
                <CheckCircleIcon class="h-6 w-6 mr-2 text-white" />
                Everything in the Explorer Plan
              </div>
              <div class="flex font-bold text-sm items-center text-white my-2 text-[1rem]">
                <CheckCircleIcon class="h-6 w-6 mr-2 text-white" />
                Unlimited AI Prints
                <InformationCircleIcon class="h-5 w-5 mr-2 ml-1" />
              </div>
              <div class="flex font-bold text-sm items-center text-white my-2 text-[1rem]">
                <CheckCircleIcon class="h-6 w-6 mr-2 text-white" />
                3D Printing Help Chat
                <InformationCircleIcon class="h-5 w-5 mr-2 ml-1" />
              </div>
              <div class="mt-10">
                <div class="flex font-bold text-sm items-center text-white text-[0.8rem]">
                  <HandThumbUpIcon class="h-5 w-5 mr-2 ml-1" />
                  Free 7-day Trial
                </div>
                <div class="flex font-bold text-sm items-center text-white text-[0.8rem]">
                  <CurrencyDollarIcon class="h-5 w-5 mr-2 ml-1" />
                  100% Money Back Guarantee
                </div>
                <button
                  class="w-full bg-white text-black text-opacity-[0.85] hover:text-opacity-100 text-xl font-bold py-3 px-4 rounded-lg flex justify-center">
                  Start Calibration with AI
                  <img src="/wand.svg" class="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { StarIcon } from '@heroicons/vue/24/solid';
import { CheckCircleIcon, InformationCircleIcon, CurrencyDollarIcon, HandThumbUpIcon } from '@heroicons/vue/24/outline';
</script>

<script lang="ts">
export default {
  data() {
    return {
      checked: true
    }
  },
  methods: {
    handleChange(checked: boolean) {
      this.checked = checked;
    }
  }
}
</script>