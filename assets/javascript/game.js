// cities for guessing
var cities = ["albuquerque", "anaheim", "anchorage", "arlington", "atlanta",
    "aurora", "austin", "bakersfield", "baltimore", "boston",
    "charlotte", "chicago", "cincinnati", "cleveland", "columbus",
    "dallas", "denver", "detroit", "fresno", "greensboro", "henderson",
    "honolulu", "houston", "indianapolis", "jacksonville",
    "lexington", "louisville", "memphis", "mesa", "miami", "milwaukee",
    "minneapolis", "nashville", "oakland", "omaha", "philadelphia",
    "phoenix", "pittsburgh", "plano", "portland", "raleigh", "riverside",
    "sacramento", "seattle", "stockton", "tampa", "tucson", "tulsa",
    "washington", "wichita"
];

// stores guesses
var guesses = [];

// chances to guess correct letter	
var chances = 12;

// city selected for guessing
var randomCity;

// guess progress (keeps underscores)
var guess = "";

var wins = "0";

// select random from cities array
function cityRandom() {
    return cities[Math.floor(Math.random() * cities.length)];
}

// function called when page loaded (onReady)
// when chances <= 0 in displayChances(), reset game values, and display new values.
function startGame() {

    randomCity = cityRandom();

    chances = 12;

    guesses = [];

    guess = "";

    wins = "";

    for (var i = 0; i < randomCity.length; i++) {

        guess += "_";
    }

    displayChances();

    displayGuesses();

    displayGuess();
}

// displays chances if > 0; otherwise alert "Game over" reset game
function displayChances() {

    document.getElementById("chances").innerHTML = "Guesses Remaining: " + chances;

    // wait 500 milliseconds before checking chances; allows screen to update before alert displays
    setTimeout(function() {

        if (chances <= 0) {

            alert("Game over. Try again.");

            startGame();
        }

    }, 500);

}

//displays incorrect guesses
function displayGuesses() {

    document.getElementById("lettersGuessed").innerHTML = guesses.toString();

}

// displays current progress of user's game
function displayGuess() {

    var guessWithSpaces = "";

    //b__t__
    for (var i = 0; i < guess.length; i++) {

        guessWithSpaces += guess.charAt(i) + " ";

    }

    document.getElementById("hangman").innerHTML = guessWithSpaces;

    setTimeout(function() {

        if (guess.indexOf("_") === -1) {

            //alert("You win! Congratulations.");



            startGame();
        }

    }, 500);

}

// fires on onkeyup and checks validity of guess
function acceptGuess(event) {

    var letter = String.fromCharCode(event.keyCode).toLowerCase();

    var index = randomCity.indexOf(letter);

    if (index === -1) {

        guesses[guesses.length] = letter;

        chances--;

        displayGuesses();

        displayChances();

    } else {

        while (index !== -1) {
            guess = replaceAt(guess, index, letter);

            randomCity = replaceAt(randomCity, index, "_");

            index = randomCity.indexOf(letter);
        }
        displayGuess();
    }
}

// convenience function to replace a letter in a string
function replaceAt(string, index, letter) {

    //return ___                       t        __
    return string.substr(0, index) + letter + string.substr(index + letter.length);

}

$(document).ready(function() {

    startGame();

});
