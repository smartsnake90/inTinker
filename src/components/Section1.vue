<template>
  <div class="max-w-sm sm:max-w-lg m-auto mt-[130px]">
    <div class="font-Roboto font-bold text-[30px]"># WHAT WE DO</div>
    <div class="max-w-[800px] font-bold text-black text-opacity-60 text-[19px]">Use our AI powered calibration to tune new
      filaments
      or improve
      the print
      quality of
      ones
      you've
      been using by
      tuning retraction and temperature settings.
    </div>
    <div class="flex flex-col justify-between px-10 mt-12 sm:flex-row">
      <div>
        <img src="/img(sec1-1).svg" />
        <div class="mt-[60px]">
          <div class="font-Roboto font-bold text-md">Past</div>
          <div class="font-bold text-sm text-black text-opacity-60 max-w-[400px]">Looking through reddit,facebook and
            youtube
            to
            find solutions</div>
          <div class="mt-2">
            <div class="flex font-bold text-sm items-center">
              <XCircleIcon class="h-6 w-6 text-red-500 mr-2" />
              <div>Slow</div>
            </div>
            <div class="flex font-bold text-sm items-center">
              <XCircleIcon class="h-6 w-6 text-red-500 mr-2" />
              Not Applicable to you
            </div>
            <div class="flex font-bold text-sm items-center">
              <XCircleIcon class="h-6 w-6 text-red-500 mr-2" />
              Conflicting advise
            </div>
            <div class="flex  font-bold text-sm items-center">
              <XCircleIcon class="h-6 w-6 text-red-500 mr-2" />
              Incorrect advice
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 sm:mt-1">
        <img src="/img(sec1-2).svg" />
        <div class="mt-10">
          <div class="font-Roboto font-bold text-md">Now</div>
          <div class="font-bold text-sm text-black text-opacity-60 max-w-[450px]">A digital notebook infused with AI to
            run
            calibrations.</div>
          <div class="mt-2">
            <div class="flex font-bold text-sm items-center">
              <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" style="color: #A0D911;" />
              Quick
            </div>
            <div class="flex font-bold text-sm items-center">
              <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" style="color: #A0D911;" />
              Customized for you Setup
            </div>
            <div class="flex font-bold text-sm items-center">
              <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" style="color: #A0D911;" />
              One source of truth
            </div>
            <div class="flex font-bold text-sm items-center">
              <CheckCircleIcon class="h-6 w-6 text-green-500 mr-2" style="color: #A0D911;" />
              Data driven solutions
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { XCircleIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'
</script>