<template>
  <div class="flex">
    <img src="/timeline.svg" class="mt-2 hidden sm:block" />
    <div class="ml-4">
      <div class="font-bold text-[24px] text-black text-opacity-[0.85] ml-4">Create Assets</div>
      <div class="bg-[#F8F8F8] rounded-lg px-4 py-2 mt-7">
        <p class="font-bold text-[16px] text-opacity-[0.85]">Printer and Material</p>
        <p class="text-[14px] max-w-[460px] text-black text-opacity-60">Select a pre configured printer and material, If
          we dont have what your
          looking for
          you can define a
          custom printer or material with any build plate size, start end gcode, print temperature range and many
          more options.</p>
      </div>
      <img src="/img(sec7-1-mobile).svg" class="w-full sm:hidden" />
      <div class="mt-6 ml-4 hidden sm:block">
        <p class="font-bold text-[16px]">Print Profile</p>
        <p class="text-[14px] max-w-[460px] text-black text-opacity-60">Create a print profile using any combination of
          printer, material and
          nozzle size. </p>
      </div>
      <div class="font-bold text-[24px] mt-[250px] ml-4 hidden sm:block">Run Calibration</div>
      <div class="mt-6 ml-4 hidden sm:block">
        <p class="font-bold text-[16px]">Start a Calibration</p>
        <div class="text-[14px] max-w-[420px]">
          <p class="text-black text-opacity-60">
            Start a calibration from the Print Profile you just created. This
            calibration will be linked to that Print Profile.
          </p>
          <a href=" #" style="color:#F3762B; border-bottom: 1px solid;" class="border-regal-orange">
            Learn More about Print Profiles >
          </a>
        </div>
      </div>
      <div class="mt-10 ml-4 hidden sm:block">
        <p class="font-bold text-[16px]">Add Prints</p>
        <div class="text-[14px] max-w-[420px]">
          <p class="text-black text-opacity-60">
            A calibration is split up into a number of Prints. There can be any number of prints in a
            calibration including a mixture of Freestyle and AI Prints.
          </p>
          <a href=" #" style="color:#F3762B;border-bottom: 1px solid;">
            Learn More about Calibration Prints >
          </a>
        </div>
      </div>
      <div class="mt-[70px] ml-4 hidden sm:block">
        <p class="font-bold text-[16px]">Print and Score Quality</p>
        <div class="text-[14px] max-w-[420px]">
          <p class="text-black text-opacity-60">
            Score the quality of stringing and under extrusion from 1-10. 1 being a failed print and 10 being
            perfect quality. These scores are what the algorithm uses to determine the next set of settings to
            you.
          </p>
          <a href=" #" style="color:#F3762B;border-bottom: 1px solid;">
            Open Scoring Guide >
          </a>
        </div>
      </div>
      <div class="mt-[100px] ml-4 hidden sm:block">
        <p class="font-bold text-[16px]">Repeat</p>
        <div class="text-[14px] max-w-[420px]">
          <p class="text-black text-opacity-60">
            As you add and score more prints the AI refines its model customized for your printer, material and
            nozzle size. Typically after around 5-7 prints users see satisfactory results. Its also common that
            we get it on the first or second print.
          </p>
        </div>
      </div>
      <div class="mt-[130px] ml-4 hidden sm:block">
        <p class="font-bold text-[24px]">Export Settings to Cura</p>
        <div class="text-[14px] max-w-[420px]">
          <p class="text-black text-opacity-60">
            Once you have settings that work well, you can export them to use for anything you want. The Print
            Level you export update the print profile the calibration is in, so later you can simply re download
            that print profile to use these settings again.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
