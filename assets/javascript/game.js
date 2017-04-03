// VARIABLES //

// letters user can choose from
var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", "z",
    "x", "c", "v", "b", "n", "m",
];

// city selected for guessing
var city = ["austin", "boston", "chicago", "dallas", "denver",
    "detroit", "fresno", "houston", "memphis", "mesa"
];

var guess; // user guess
var guesses = []; // stored guesses
var chances; // chances to guess correct letter
var counter; // correct guesses

// FUNCTIONS //

// select random city from city array

function cityRandom() {
    return city[Math.floor(Math.random() * city.length)];
}

// blanks for user answers

// replacing letters

// guessing letters
