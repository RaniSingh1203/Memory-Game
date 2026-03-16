import { ref } from 'vue'

export const useMemoryGame = () => {

const icons = [
'unjs:db0',
'unjs:consola',
'unjs:knitwork',
'unjs:jimp-compact',
'unjs:h3',
"unjs:mongoz",
"unjs:cookie-es",
"unjs:std-env",
"unjs:ungh",
"unjs:jiti",
"emojione-v1:anxious-face-with-sweat",
"emojione-v1:cherry-blossom"
]

const cards = ref<any[]>([])
const selected = ref<any[]>([])

const setupGame = () => {

cards.value = [...icons, ...icons]
  .sort(() => Math.random() - 0.5)
  .map((icon, index) => ({
    id: index,
    icon,
    flipped: false,
    removed: false
  }))

}

const flipCard = (card:any) => {

if (card.flipped || card.removed || selected.value.length === 2) return

card.flipped = true
selected.value.push(card)

if (selected.value.length === 2) checkMatch()

}

const checkMatch = () => {

const [a,b] = selected.value

if (a.icon === b.icon) {

setTimeout(() => {
a.removed = true
b.removed = true
selected.value = []
}, 500)

}

else {

setTimeout(() => {
a.flipped = false
b.flipped = false
selected.value = []
}, 1000)

}

}

return { cards, flipCard, setupGame }

}