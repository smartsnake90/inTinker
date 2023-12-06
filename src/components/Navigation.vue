<template>
  <Disclosure as="nav" v-slot="{ open }" class="max-w-sm sm:max-w-lg m-auto mt-6">
    <div class="mt-6">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <!-- <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span> -->
            <Bars3Icon v-if="!open" class="block h-10 w-10" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 sm:items-stretch justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-16 w-auto" src="/logo.png" alt="Logo" />
            <span class="ml-2 font-bold text-[2rem]">inTinker</span>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'bg-regal-orange text-white hover:text-opacity-100 px-10' : 'px-5 text-black hover:bg-regal-orange hover:text-white', 'rounded-md py-2 text-[1.3rem] text-opacity-[0.85] font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-regal-orange text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
  
<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Features', href: '#', current: false },
  { name: 'Pricing', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Sign in', href: '#', current: true },
]
</script>