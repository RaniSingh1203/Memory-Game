<template>

<div
v-if="!card.removed"
class="cursor-pointer transition-transform duration-200 hover:scale-110 hover:rotate-2"
@click="$emit('flip', card)"
>

<UCard
class="bg-gradient-to-br from-gray-400 to-blue-300 text-white w-24 h-24 flex items-center justify-center shadow-lg"
>

<Icon
v-if="card.flipped"
:name="card.icon"
class="text-6xl"
/>

<Icon
v-else
name="i-heroicons-question-mark-circle"
class="text-4xl"
/>

</UCard>

</div>

</template>

<script setup>

defineProps({
card: Object
})

defineEmits(["flip"])

</script>