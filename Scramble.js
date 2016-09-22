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

const characters = { 
  "name": "4-LOM",
  "name2": "Aayla Secura",
  "name3": "Admiral Ackbar",
  "name4": "Admiral Thrawn",
  "name5": "Ahsoka Tano",
  "name6": "Anakin Solo",
  "name7": "Asajj Ventress",
  "name8": "Aurra Sing",
  "name9": "Senator Bail Organa",
  "name10": "Barriss Offee",
  "name11": "Bastila Shan",
  "name12": "Ben Skywalker",
  "name13": "Bib Fortuna",
  "name14": "Biggs Darklighter",
  "name15": "Boba Fett",
  "name16": "Bossk",
}

const spacecrafts = {
  "ship": "Corellian Corvette",
  "ship": "Death Star",
  "ship": "Ebon Hawk",
  "ship": "Geonosian solar sailer",
  "ship": "Imperial Landing Craft",
  "ship": "Lambda-class shuttle",
  "ship": "Millennium Falcon",
  "ship": "Moldy Crow",
  "ship": "Naboo royal cruiser",
  "ship": "Naboo royal starship",
  "ship": "Naboo star skiff",
  "ship": "Nebulon-B frigate",
  "ship": "Neimoidian shuttle",
  "ship": "Outrider",
  "ship": "Radiant VII",
  "ship": "Raven's Claw",
  "ship": "Rebel blockade runner",
  "ship": "Republic assault ship",
  "ship": "Republic attack cruiser",
  "ship": "Republic cruiser",
  "ship": "Rogue Shadow",
  "ship": "Sith Infiltrator",
  "ship": "Slave I",
  "ship": "Star Destroyer",
  "ship": "Starfreighter",
  "ship": "Tantive IV",
  "ship": "Techno Union Starship",
  "ship": "Theta-class shuttle",
  "ship": "Lucrehulk-class battleship",
  "ship": "Trade Federation cruiser",
  "ship": "Trade Federation landing ship",
  "ship": "Virago",
  "ship": " TIE Fighter"
}

//////////////////// ACTOR LOGIC
const chooseRandomActor = function() {
  const actorNames = Object.keys( actors )

  return actorNames[ Math.floor( Math.random() * actorNames.length ) ]
}

const getCharacterforActorHint = function( actorName ) {
  const character = actors[ actorName ]
}



//////////////////// CHARACTER LOGIC
const chooseRandomCharacter = function() {
  const characterNames = Object.value( characters )
  console.log(characterNames)
  return characterNames[ Math.floor( Math.random() * characterNames.length )]
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


//save random actor when choose random actor called

//on submit save answer into local storage?
//get original word before it was scrambled
//reverse scramble the array?
//compare the answer with the descrambled word
//if the answer matches the descrambled word add one point into the game score
//display the new score in the DOM


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
  // let lastCharacter = chooseRandomCharacter()

  $( '#random-actor' ).text( shuffle( lastActor ) )
  // $( '#random-character' ).text( shuffle( lastCharacter ) )
  
  $( '#actor-hint' ).text( getCharacterforActorHint( lastActor ) )  
  
  $( '#rescramble-actor' ).click( function( event ) {
    $( '#random-actor' ).text( shuffle( lastActor ) )
  })

  $( '#new-actor' ).click( function( event ) {
    lastActor = chooseRandomActor()
    $( '#random-actor' ).text( shuffle( lastActor ) )
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
})


