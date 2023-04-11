// 13 spades (Ace, 2, 3, ..., J, Q, K)
// 13 hearts
// 1 joker (red)
// 13 diamonds
// 13 clubs
// 1 joker (white)
var deck = '🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂭🂮🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂽🂾🂿🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃍🃎🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃝🃞🃟'
var deckarray = Array.from(deck)
var deckarrayRed = deckarray.slice(13,40)
var randomdeck = Array.apply(0, Array(54)).map((element, index) => index)
randomdeck.sort((a, b) => Math.random() - 0.5)
randomdeck_mapped = randomdeck.map(element => deckarray[element])

function docwDraw() {
    cardContainer = document.getElementById("cardContainer")
    const workout_text = document.querySelector('#workoutText')

    if (randomdeck[count] > 12 && randomdeck[count] < 40 ) {
        cardContainer.style.color = "red"
    } else {
        cardContainer.style.color = "black"
    }
    cardContainer.innerText = randomdeck_mapped[count]

    if (randomdeck[count] < 13) {
        workout_text.innerText = 'Sit Ups'
    }
    else if (randomdeck[count] < 26) {
        workout_text.innerText = 'Push Ups'
    }
    else if (randomdeck[count] == 26 || randomdeck[count] == 53) {
        workout_text.innerText = 'Burpees'
    }
    else if (randomdeck[count] < 40) {
        workout_text.innerText = 'Pull Ups'
    }
    else if (randomdeck[count] < 54) {
        workout_text.innerText = 'Kettle Bell Swings'
    }
    count++
    
    if (count >= randomdeck_mapped.length) {
        document.getElementById("drawButton").disabled = true
        alert("All cards have been cycled. Please reshuffle deck by reloading.")
    } 
    return randomdeck_mapped[count]
}

count = 0

window.onload = function() {
    docwDraw()
}
const docwStart = () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(incrementTimer, 1000)
        timerInput = document.getElementById("timecap")
    }
    return
}

const docwStop = () => {
    isRunning = false;
    clearInterval(interval);
}

const docwReset = () => {
    minutes.innerText = '00';
    seconds.innerText = '00';
}

const pad = (number) => {
    return (number < 10) ? '0' + number : number;
}

const incrementTimer = () => {
    timerTime++;

    const numberMinutes = Math.floor(timerTime / 60);
    const numberSeconds = timerTime % 60;

    minutes.innerText = pad(numberMinutes);
    seconds.innerText = pad(numberSeconds);
}