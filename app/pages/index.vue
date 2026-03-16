<template>

<div class="flex flex-col items-center p-10">

<div class="flex gap-6 mb-6">

<div
v-for="(player,index) in players"
:key="index"
class="p-4 rounded border w-32 text-center"
:class="currentPlayer === index ? 'bg-blue-100' : ''"
>

<p class="font-semibold">
{{ player.name }}
</p>

<p>
Score: {{ player.score }}
</p>

<p
v-if="currentPlayer === index"
class="text-green-600 text-sm"
>
Your Turn
</p>

</div>

</div>


<div class="grid grid-cols-8 gap-4">

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

<script setup>

import MemoryCard from '../components/memoryCard.vue'
import { useMemoryGame } from '../composables/useMemoryGame'

const {
cards,
flipCard,
setupGame,
players,
currentPlayer
} = useMemoryGame()

onMounted(() => {
setupGame()
})

</script>