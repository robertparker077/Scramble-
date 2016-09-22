// import { spacecrafts, character, actors } from 'libraries'

// var libraries = require('./libraries');
// var actors = libraries.actors
// console.log(actors)

const actors = {
  "Mark Hamil": "Luke Skywalker",
  "Harrison Ford": "Han Solo",
  "Carrie Fisher": "Princess Leia",
  "Anthony Daniels": "C-3PO",
  "Daisy Ridley": "Rey",
  "Liam Neeson": "Qui-Gon Jinn",
  "Natalie Portman": "Padme Amidala",
  "Alec Guinness": "Obi-Wan Kenobi",
  "Felicity Jones": "Jyn Erso",
}

const characters = [ 
"4-LOM",
// "Aayla Secura",
"Admiral Ackbar",
// "Admiral Thrawn",
// "Ahsoka Tano",
// "Anakin Solo",
// "Asajj Ventress",
// "Aurra Sing",
// "Senator Bail Organa",
// "Barriss Offee",
// "Bastila Shan",
"Ben Skywalker",
// "Bib Fortuna",
// "Biggs Darklighter",
"Boba Fett",
"Bossk"
]

const spacecrafts = [
"Corellian Corvette",
"Death Star",
// "Ebon Hawk",
// "Geonosian solar sailer",
// "Imperial Landing Craft",
// "Lambda-class shuttle",
"Millennium Falcon",
// "Moldy Crow",
// "Naboo royal cruiser",
// "Naboo royal starship",
// "Naboo star skiff",
// "Nebulon-B frigate",
// "Neimoidian shuttle",
// "Outrider",
// "Radiant VII",
// "Raven's Claw",
// "Rebel blockade runner",
// "Republic assault ship",
// "Republic attack cruiser",
// "Republic cruiser",
// "Rogue Shadow",
// "Sith Infiltrator",
// "Slave I",
// "Star Destroyer",
// "Starfreighter",
// "Tantive IV",
// "Techno Union Starship",
// "Theta-class shuttle",
// "Lucrehulk-class battleship",
// "Trade Federation cruiser",
// "Trade Federation landing ship",
// "Virago",
"TIE Fighter"
]

//////////////////// ACCESSING DATA
const chooseRandomActor = function() {
  const actorNames = Object.keys( actors )

  return actorNames[ Math.floor( Math.random() * actorNames.length ) ]
}

const getCharacterforActorHint = function( actorName ) {
  const character = actors[ actorName ]
}

const chooseRandomCharacter = function() {
  const characterNames = characters 
  return characterNames[ Math.floor( Math.random() * characterNames.length )]
}

const chooseRandomShip = function() {
  const shipNames = spacecrafts 
  return shipNames[ Math.floor( Math.random() * shipNames.length )]
}



//////////////////// GAMEWIDE LOGIC
const shuffle = function( randomName ) {
  let result = randomName.split('')

  for( let i = 0; i < result.length; i++ ) {
    const randomIndex = Math.floor( Math.random() * result.length )
    const item = result[ i ]

    result[ i ] = result[ randomIndex ];
    result[ randomIndex ] = item
  }

  return result.join('')
}
//TO DO
// 2. get the actor hint working
// 3. on enter submit guess & update score
// 4. scramble animation on biline
// 5. on submit save answer into local storage?


// TO DO ??
// 1. end game conditions and modal with congratulations

// when game reaches 0 points game is lost
// a. create a counter for the score to count down to 0

const gameLost = (function() {
  let score = score

  while ( score > 0 ) {
    //keep playing game
  } else {
    //end game
  }
  return score
})

// play the game until it reaches 10 points - to test play until it reaches 3 points
// a. create a counter for the score to count up to 10

const gameWin = (function() {
  let score = score

  return function( score ) {
    if ( score === 10 ) {
      alert('You have won the game!')
    } 
    return score
  }
})()


const scoreKeeper = (function() {
  let score = 0

  return function( match ) {
    if( match ) {
      score++
    } else {
      score--
    }

    return score
  }
})()

// when game is lost modal drops down to notify user to play again
// b. make a modal that is hidden on the page
// c. trigger the modal to show on the page when the user points go down to 0

// DOM EVENTS FOR GAME WIN CONDITIONS
const gameEnd = (function() {
 

})


// modal drops down when it reaches 10 points and notifies user they have Won the Game
// a. make a modal that is hidden on the page
// b. trigger modal to show on the page when the user reaches score 10


//////////////////// DOM EVENTS

// const getActor = (function(lastScore) {
//   let lastActor = chooseRandomActor()

//   $( '#random-actor' ).text( shuffle( lastActor ) )
  
//   $( '#actor-hint' ).text( getCharacterforActorHint( lastActor ) )  //WIP: this isn't working :<

//   $( '#rescramble-actor' ).click( function( event ) {

//     $( '#random-actor' ).text( shuffle( lastActor ) )
//   })

//   $( '#new-actor' ).click( function( event ) {
//     lastActor = chooseRandomActor()
//     $( '#random-actor' ).text( shuffle( lastActor ) )
//   })


//   $( '#check-actor' ).click( function( event ) {
//     const guess = $( '#word1' ).val()
//     const correct = guess === lastActor
//     const score = scoreKeeper( correct )

//     $('#score').text( score )

//     if( correct ) {
//       lastScore = score
      
//       lastActor = chooseRandomActor()
//       $('#random-actor').text( shuffle( lastActor ) ) 
//     }
//   })
// })

// const getCharacterforActorHint = (function() {
//   let lastCharacter = chooseRandomCharacter()

//   $('#random-character').text( shuffle( lastCharacter ) )

//   $( '#rescramble' ).click( function( event ) {
//     $('#random-character').text( shuffle( lastCharacter ) )    
//   })

//   $( '#am-i-right' ).click( function( event ) {
//     const guess = $( '#word2' ).val()
//     const correct = guess === lastCharacter
//     const score = scoreKeeper( correct )

//     $('#score').text( score )

//     if( correct ) {
//       lastScore = score
      
//       lastCharacter = chooseRandomCharacter()
//       $('#random-character').text( shuffle( lastCharacter ) ) 
//     }
//   })
// })



$(document).ready( function() {
  let lastScore = 0
  let lastActor = chooseRandomActor()
  let lastCharacter = chooseRandomCharacter()
  let lastShip = chooseRandomShip()
  
  $( '#actor-hint' ).text( getCharacterforActorHint( lastActor ) )  

  $( '#random-actor' ).text( shuffle( lastActor ) )
  $( '#random-character' ).text( shuffle( lastCharacter ) )
  $( '#random-ship' ).text( shuffle( lastShip ) )
   

  $( '#rescramble-actor' ).click( function( event ) {
    $( '#random-actor' ).text( shuffle( lastActor ) )
  })
  $( '#rescramble-character' ).click( function( event ) {
    $( '#random-character' ).text( shuffle( lastCharacter ) )
  })
  $( '#rescramble-ship' ).click( function( event ) {
    $( '#random-ship' ).text( shuffle( lastShip ) )
  })


  $( '#new-actor' ).click( function( event ) {
    lastActor = chooseRandomActor()
    $( '#random-actor' ).text( shuffle( lastActor ) )
  })
  $( '#new-character' ).click( function( event ) {
    lastCharacter = chooseRandomCharacter()
    $( '#random-character' ).text( shuffle( lastCharacter ) )
  })
  $( '#new-ship' ).click( function( event ) {
    lastShip = chooseRandomShip()
    console.log(shuffle( lastShip ))
    $( '#random-ship' ).text( shuffle( lastShip ) )
  })


  $( '#check-actor' ).click( function( event ) {
    const guess = $( '#word1' ).val()
    const correct = guess === lastActor
    const score = scoreKeeper( correct )

    $('#score').text( score )

    if( correct ) {
      lastScore = score
      
      lastActor = chooseRandomActor()
      $('#random-actor').text( shuffle( lastActor ) ) 
    }
  })

  $( '#check-character' ).click( function( event ) {
    const guess = $( '#word2' ).val()
    const correct = guess === lastCharacter
    const score = scoreKeeper( correct )

    $('#score').text( score )

    if( correct ) {
      lastScore = score
      
      lastCharacter = chooseRandomCharacter()
      $('#random-character').text( shuffle( lastCharacter ) ) 
    }
  })

    $( '#check-ship' ).click( function( event ) {
    const guess = $( '#word3' ).val()
    const correct = guess === lastShip
    const score = scoreKeeper( correct )

    $('#score').text( score )

    if( correct ) {
      lastScore = score
      
      lastShip = chooseRandomShip()
      $('#random-ship').text( shuffle( lastShip ) ) 
    }
  })
})


