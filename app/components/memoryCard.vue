<template>

<div
v-if="!card.removed"
class="cursor-pointer"
@click="$emit('flip', card)"
>

<UCard class=" bg-gradient-to-br from-gray-400 to-blue-300 text-white w-25 h-25 flex items-center justify-center text-3xl">

<Icon
v-if="card.flipped"
:name="card.icon"
class="text-6xl"
/>

<Icon
v-else
name="i-heroicons-question-mark-circle"
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