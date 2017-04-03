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

var guess;			// user guess
var guesses = [];   // stored guesses
var chances; 		// chances to guess correct letter
var counter; 		// correct guesses

// FUNCTIONS //

// select random city from city array
/*function cityRandom () {
	var citySelected = city[Math.floor(Math.random() * 10)];
	return citySelected;
}*/

/*
function multiplier(x, y, z) {

  // The function should multiply the arguments, and log the result to the console.
  console.log(x * y * z);
}

multiplier(2, 3, 4);
/*

/*
function cityRandom() {

return city[Math.floor(Math.random() * city.length)];

};

console.log()
*/


function cityRandom() {

   return city[Math.floor(Math.random() * city.length)];

}

   console.log(cityRandom());



// blanks for user answers

// replacing letters

// guessing letters

