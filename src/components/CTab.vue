<template>
  <div class="hidden sm:block">
    <nav class="flex bg-[#F8F8F8] rounded-lg" aria-label="Tabs" role="tablist">
      <button type="button"
        :class="[current === 'tab1' && 'bg-white', 'w-1/4 justify-center m-[7px] py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-black text-opacity-[0.85] rounded-lg hover:bg-white']"
        id="pills-on-gray-color-item-1" data-hs-tab="#pills-on-gray-color-1" aria-controls="pills-on-gray-color-1"
        role="tab" @click="handleChange('tab1')">
        Print Profile Manager
      </button>
      <button type="button"
        :class="[current === 'tab2' && 'bg-white', 'w-1/4 justify-center m-[7px] py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-black text-opacity-[0.85] rounded-lg hover:bg-white']"
        id="pills-on-gray-color-item-2" data-hs-tab="#pills-on-gray-color-2" aria-controls="pills-on-gray-color-2"
        role="tab" @click="handleChange('tab2')">
        Temperature Tower Generator
      </button>
      <button type="button"
        :class="[current === 'tab3' && 'bg-white', 'w-1/4 justify-center m-[7px] py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-black text-opacity-[0.85] rounded-lg hover:bg-white']"
        id="pills-on-gray-color-item-3" data-hs-tab="#pills-on-gray-color-3" aria-controls="pills-on-gray-color-3"
        role="tab" @click="handleChange('tab3')">
        Freestyle or AI Prints
      </button>
      <button type="button"
        :class="[current === 'tab4' && 'bg-white', 'w-1/4 justify-center m-[7px] py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-black text-opacity-[0.85] rounded-lg hover:bg-white']"
        id="pills-on-gray-color-item-4" data-hs-tab="#pills-on-gray-color-4" aria-controls="pills-on-gray-color-4"
        role="tab" @click="handleChange('tab4')">
        AI behavior
      </button>
    </nav>

    <div class="mt-10">
      <Section61 v-if="current === 'tab1'" />
      <Section62 v-if="current === 'tab2'" />
      <Section63 v-if="current === 'tab3'" />
      <Section64 v-if="current === 'tab4'" />
    </div>
  </div>
  <div class="mt-10 sm:hidden">
    <Section61 />
    <Section62 />
    <Section63 />
    <Section64 />
  </div>
</template>
<script lang="ts" setup>
import Section61 from './Section6-1.vue';
import Section62 from './Section6-2.vue';
import Section63 from './Section6-3.vue';
import Section64 from './Section6-4.vue';
</script>

<script lang="ts">
export default {
  data() {
    return {
      current: 'tab1'
    }
  },
  methods: {
    handleChange(tab: string) {
      this.current = tab;
    }
  }
}

</script>