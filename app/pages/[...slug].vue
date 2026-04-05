<script setup>
const route = useRoute()
const { $gsap } = useNuxtApp()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const contentRef = ref(null)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
onMounted(() => {
  const textElements = contentRef.value?.querySelectorAll('.text-anim, h1, h2, .prose > p');
  //console.log(contentRef.value?.querySelectorAll('.prose > p'))

  const tl = $gsap.timeline()
  tl.from(textElements, {
    opacity: 0,
    y: 10,
    filter: 'blur(0.5rem)',
    ease: 'power2.inOut',
    stagger: 0.02,
  })
})
</script>

<template>
  <div ref="contentRef">
    <ContentRenderer
      v-if="page"
      :value="page"
      class="prose"
    />
  </div>
</template>
