<template>
  <div class="max-w-sm sm:max-w-lg m-auto">
    <div class="flex justify-between gap-x-5 flex-col sm:flex-row">
      <div class="flex-1">
        <div class="font-Roboto font-bold text-sm">
          Auto Generated Temperature Tower
        </div>
        <div class="text-[14px] text-black text-opacity-60 max-w-screen-lg mt-4 font-bold">
          Say goodbye to the hassle of configuring a Temperature Tower in Cura manually. Simply complete the
          calibration table with the settings you wish to test, and hit download. We'll provide a 3MF file
          tailored for your printer and material, ready to be opened in Cura. Just click 'slice', and you're on
          your way to printing. It's effortless calibration, designed to save you time and ensure accurate results
        </div>
        <div class="mt-4 font-bold text-[16px]">
          <div class="flex mb-4">
            <img src="/clock.svg" />
            <p class="ml-4">31 minute print time</p>
          </div>
          <div class="flex mb-4">
            <img src="/setting.svg" />
            <p class="ml-4">4 Sets of Settings Tested at once</p>
          </div>
          <div class="flex mb-4">
            <img src="/com.svg" />
            <p class="ml-4">3 grams of materials used per print</p>
          </div>
        </div>
        <button
          class="bg-regal-orange text-white text-opacity-[0.85] hover:text-opacity-100 text-xl font-bold py-2 px-4 rounded mt-5 hidden sm:block">
          Start Calibration for FREE
        </button>
      </div>
      <div class="flex flex-col items-center sm:flex-row">
        <img src="/img(sec6-2-2).svg" class="w-[400px]" />
        <div class="">
          <img src="/img(sec6-2-3).svg" class="w-[400px]" />
          <img src="/img(sec6-2-4).svg" class="w-[400px]" />
        </div>
        <button
          class="w-[330px] bg-regal-orange text-white text-opacity-[0.85] hover:text-opacity-100 text-xl font-bold py-2 px-4 rounded mt-5 sm:hidden">
          Start Calibration for FREE
        </button>
      </div>

    </div>
  </div>
</template>