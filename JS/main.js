var old = -1;
var previous = -1;

function generateQuotes() {
    var author = ["-- Albert Einstein --", "-- Bernard M. Baruch --", "-- Dr. Seuss --", "-- Mae West --", "-- Mahatma Gandhi --", "-- Mark Twain --", "-- Mahatma Gandhi --"];
    var quote = [
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "You only live once, but if you do it right, once is enough",
        "Be the change that you wish to see in the world.",
        "If you tell the truth, you don't have to remember anything.",
        "Live as if you were to die tomorrow. Learn as if you were to live forever."
    ]

    var num;

    do {
        num = Math.floor(Math.random() * author.length);
    } while (num === old || num === previous);

    previous = old;
    old = num;

    document.getElementById("name").innerHTML = author[num];
    document.getElementById("quote").innerHTML = quote[num];
}

generateQuotes();