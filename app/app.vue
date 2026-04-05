<template>
<main class="max-w-3xl px-10 pb-[100px] md:mx-auto w-full mt-12">
  <NuxtImg src="/phaya-krut.png" alt="Phaya Krut" class="w-16 h-16 mb-12 cursor-pointer" :placeholder="[16, 16, 75, 10]" loading="eager" @click="navigateTo('/')"/>
  <NuxtRouteAnnouncer />
  <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
</main>
<footer/>
</template>

<style scoped>
main {
  font-size: 15px;
  line-height: 1.2;
}
footer {
  background: linear-gradient(to bottom, oklch(1 0 0 / 0), oklch(1 0 0 / 1));
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 100px;
}
</style>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.13s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>