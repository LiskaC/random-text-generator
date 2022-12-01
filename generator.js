var quotes = [
    "javascript is awesome",
    "all the projects will go super well",
    "Ptoshka ate a whole chicken today",
    "The world is fundamentally a good place",
]

function selectQuote() {
    var randomNumber = Number.parseInt(Math.random() * quotes.length) - 1
    var quote = quotes[randomNumber]
    document.querySelector('#quote').textContent = `${quote} ${quote} ${quote}`
}