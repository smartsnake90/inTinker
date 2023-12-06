<template>
  <div class="max-w-sm sm:max-w-lg m-auto">
    <div class="flex gap-x-5">
      <img src="/Group 6053.svg" />
      <p class="font-Roboto font-bold text-[30px]">
        HOW THE AI WORKS
      </p>
    </div>
    <p class="text-[14px] mt-3 max-w-[900px] text-center sm:text-justify sm:text-[20px]">
      We've created a smart AI tool that takes in your print settings and the quality scores of each print. It
      analyzes
      this data to understand your specific printer, material, and nozzle combination. This way, it can find and fix
      settings that are leading to poor print quality, helping you get better prints every time
    </p>
    <div class="flex flex-col gap-x-20 sm:flex-row">
      <div class="flex flex-col">
        <div>
          <div class="flex gap-x-5 mt-20">
            <img src="/arrow-big-down-lines.svg" />
            <p class="font-Roboto font-bold text-[30px]">
              AI Inputs
            </p>
          </div>
          <p class="text-[15px] mt-3 sm:max-w-[450px] sm:text-justify">
            Below are the 4 major sources of data collection for the AI to learn how to fix you printer.
          </p>
        </div>
        <div class="mt-20">
          <p class="font-Roboto font-bold text-[30px]">
            4 Sets of data per print
          </p>
          <p class="text-[18px] mt-5">Slicer Settings</p>
          <p class="mt-3 sm:max-w-[420px]">
            4 sets of settings per print. Retraction Distance, Retraction Speed and Print Temperature are used by the AI
          </p>
          <p class="text-[18px] mt-5">Quality Scores</p>
          <p class="mt-3 sm:max-w-[420px]">
            We assess four settings sets per print. Quality scores from each set feed into the cost function, aiding the
            acquisition function in tuning your printer. This process is key for 3D printing calibration, addressing
            issues like stringing, and troubleshooting to improve print quality.
          </p>
          <p class="text-[18px] mt-5">Printer</p>
          <p class="mt-3 sm:max-w-[420px]">
            Our approach tunes your printer based on its current performance, not its 'out-of-the-box' state, adapting to
            any disruptions or relocations. This ensures accurate 3D printing calibration and troubleshooting for improved
            print quality.
          </p>
          <p class="text-[18px] mt-5">Materials</p>
          <p class="mt-3 sm:max-w-[420px]">
            Just like printers, our tuning process works by tuning the current state of your material, not the ideal dry
            version of it.
          </p>
        </div>
      </div>
      <div class="flex items-center mt-6 m-auto sm:m-0">
        <img src="/image 54.svg" />
      </div>
      <div class="flex flex-col">
        <div>
          <div class="flex gap-x-5 mt-20">
            <img src="/arrow-big-up-lines.svg" />
            <p class="font-Roboto font-bold text-[30px]">
              AI Outputs
            </p>
          </div>
          <p class="text-[15px] mt-3 sm:max-w-[450px] text-justify">
            As the AI sees more data from your printer it learns more about your specific setup and can develope a
            solution to fix or improve your print quality
          </p>
        </div>
        <div class="mt-40">
          <p class="font-Roboto font-bold text-[30px]">
            1 Set of Settings
          </p>
          <p class="text-[18px] mt-5">Slicer Settings</p>
          <p class="mt-3 sm:max-w-[420px]">
            The result is optimal settings with fine-tuned statistical interactions between variables, delivering a slicer
            profile tailored to your specific printer and material setup for precise 3D printing calibration </p>
        </div>
      </div>
    </div>
  </div>
</template>