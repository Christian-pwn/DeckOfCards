// 13 spades (Ace, 2, 3, ..., J, Q, K)
// 13 clubs
// 1 joker (white)
// 13 hearts
// 1 joker (red)
// 13 diamonds
var deck = '🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂭🂮🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃝🃞🃟🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂽🂾🂿🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃍🃎'
var deckarray = Array.from(deck)
var randomdeck = Array.apply(0, Array(54)).map((element, index) => index)
randomdeck.sort((a, b) => Math.random() - 0.5)

var setupContainer = document.getElementById('setupContainer')
var woContainer = document.getElementById('woContainer')
var woCard = document.getElementById('woCard')
var woText = document.getElementById('woText')
var woNum = document.getElementById('woNum')
var woHearts = document.getElementById('woHearts')
var woDiamonds= document.getElementById('woDiamonds')
var woSpades= document.getElementById('woSpades')
var woClubs= document.getElementById('woClubs')
var woJokers= document.getElementById('woJokers')
var cardNum = 0;

function docwStart() {
    randomdeck.sort((a, b) => Math.random() - 0.5)
    cardNum = 0
    woNext()
}

function docwSetup() {
        cardNum = 0;
        setupContainer.classList.remove('d-none')
        woContainer.classList.add('d-none')
}

function woNext() {
    setupContainer.classList.add('d-none')
    woContainer.classList.remove('d-none')
    deckIdx = randomdeck[cardNum++]
    woCard.innerText = deckarray[deckIdx]
    woCard.style.color = deckIdx <=26 ? 'black' : 'red'

    if(deckIdx < 13) {
        woText.innerText = woSpades.value
    }
    if(deckIdx >= 13 && deckIdx < 26) {
        woText.innerText = woClubs.value
    }
    if(deckIdx == 26) {
        woText.innerText = woJokers.value
    }
    if(deckIdx >= 27 && deckIdx < 40) {
        woText.innerText = woHearts.value
    }
    if(deckIdx == 40) {
        woText.innerText = woJokers.value
    }
    if(deckIdx >= 41) {
        woText.innerText = woDiamonds.value
    }

    woNum.innerText = cardNum + '/' + deckarray.length

    if(cardNum > deckarray.length) {
        docwSetup()
    }
}
