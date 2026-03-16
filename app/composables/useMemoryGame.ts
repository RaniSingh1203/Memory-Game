import { ref } from 'vue'

export const useMemoryGame = () => {

const icons = [
'unjs:db0',
'unjs:consola',
'unjs:knitwork',
'unjs:jimp-compact',
'unjs:h3',
'unjs:mongoz',
'unjs:cookie-es',
'unjs:std-env',
'unjs:ungh',
'unjs:jiti',
'emojione-v1:anxious-face-with-sweat',
'emojione-v1:cherry-blossom'
]

const cards = ref<any[]>([])
const selected = ref<any[]>([])
const lockBoard = ref(false)

const players = ref([
{ name: 'Player 1', score: 0 },
{ name: 'Player 2', score: 0 }
])

const currentPlayer = ref(0)

const setupGame = () => {

cards.value = [...icons, ...icons]
.sort(() => Math.random() - 0.5)
.map((icon, index) => ({
id: index,
icon,
flipped: false,
removed: false
}))

players.value[0].score = 0
players.value[1].score = 0

selected.value = []
lockBoard.value = false

currentPlayer.value = 0

}

const flipCard = (card:any) => {

if (lockBoard.value) return
if (card.flipped || card.removed) return
if (selected.value.length === 2) return

card.flipped = true
selected.value.push(card)

if (selected.value.length === 2) {
checkMatch()
}

}

const checkMatch = () => {

lockBoard.value = true

const [a,b] = selected.value

// MATCH
if (a.icon === b.icon) {

setTimeout(() => {

a.removed = true
b.removed = true

players.value[currentPlayer.value].score++

selected.value = []
lockBoard.value = false

// player keeps the turn

}, 500)

}

// NOT MATCH
else {

setTimeout(() => {

a.flipped = false
b.flipped = false

selected.value = []

// switch player
currentPlayer.value =
(currentPlayer.value + 1) % players.value.length

lockBoard.value = false

}, 1000)

}

}

return {
cards,
flipCard,
setupGame,
players,
currentPlayer
}

}