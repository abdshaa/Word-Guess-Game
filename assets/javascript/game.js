//array for state list
const stateList = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  "North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming"
];
//variables
let win = 0;
let lose = 0;
let wrongGuesses = 12;
let computerGuess = getstateList();
let letterGuessed = "";
//Play //
document.onkeyup = function(event) {
  userGuess = event.key.toLowerCase;
  letterGuessed(userGuess);
  const guessesLeft = 10
    
  if (userGuess != letterState) {
      GuessesLeft = GuessesLeft - 1
  }

  else if (guessesLeft === 0) {
                  guessesLeft = 9;
                  losses+1;
              }
  
  else {
      document.getElementById ("word")
      numberGuessesText.textContent = "Guesses left:" + guessesLeft
  };

};
 