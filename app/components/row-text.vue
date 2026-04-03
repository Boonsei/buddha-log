<script setup>
const { $gsap, $SplitText } = useNuxtApp()
const props = defineProps({
    header: {
        type: String,
        required: true
    },
    subhead: {
        type: String,
        required: false
    },
    extraText: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
})

const showExtraText = ref(false)
const extraTextRef = ref(null)
const extraTextText = ref(null)

let splitAnimation

function toggleExtraText () {
    showExtraText.value = !showExtraText.value

    if (showExtraText.value) {
        $gsap.to(extraTextRef.value, { opacity: 1, height: 'auto', duration: 0.3, ease: 'power2.inOut' })
        splitAnimation.restart()
    } else {
        $gsap.to(extraTextRef.value, { opacity: 0, height: 0, duration: 0.3, ease: 'power2.inOut' })
    }
}
onMounted (()=>{
    if (extraTextRef.value) {
        $SplitText.create(extraTextText.value, {
            type: 'lines',
            autoSplit: true,
            onSplit (self) {
                console.log(self.lines)
                splitAnimation = $gsap.from(self.lines, { 
                    opacity: 0, y: -10, filter: 'blur(0.5rem)', ease: 'power2.inOut', stagger: 0.02
                })
                return splitAnimation
            },
        })
    }
})
</script>

<template>
    <div class="grid grid-cols-3 mt-10 gap-3">
        <div class="col-span-1 text-anim">
            <h3 class="break-words">{{ header }}</h3>
            <h4 v-if="subhead">{{ subhead }}</h4>
        </div>
        <div class="col-span-2 italic slot-text text-anim" :class="{ 'cursor-pointer': extraText }" @click="toggleExtraText">
            <slot></slot>
            <button v-if="extraText" class="col-start-2 col-span-2 w-fit inline">&nbsp;({{ showExtraText ? '-' : 'i' }})</button>
            <NuxtLink v-if="link" :to="link" class="block">mehr</NuxtLink>
            <div ref="extraTextRef" v-if="extraText" class="block overflow-hidden h-0">
                <div class="mt-2">
                    <div ref="extraTextText">{{ extraText }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slot-text :deep(p) {
    display: inline;
    margin:0;
}
</style>