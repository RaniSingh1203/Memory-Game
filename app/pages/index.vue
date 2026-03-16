<template>

<div class=" bg-gradient-to-br from-gray-600 to-blue-800 text-white flex flex-col items-center p-30">



<div class=" grid grid-cols-6 gap-4">

<MemoryCard
v-for="card in cards"
:key="card.id"
:card="card"
@flip="flipCard"
/>

</div>

<UButton
class="mt-8"
@click="setupGame"
>
Restart Game
</UButton>

</div>

</template>

<script setup lang="ts">

import { useMemoryGame } from '../composables/useMemoryGame'

const { cards, flipCard, setupGame } = useMemoryGame()

onMounted(() => {
setupGame()
})

</script>