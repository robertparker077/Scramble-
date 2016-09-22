import { spacecrafts, character, actors } from 'libraries'



////////////  ACTOR LOGIC
const chooseRandomActor = function() {
  const actorNames = Object.keys( actor )

  return actorNames[ Math.floor( Math.random() * actorNames.length ) ]
}

const getCharacterforActorHint = function( actorName ) {
  const character = actor[ actorName ]
}



//////////////////// CHARACTER LOGIC
const chooseRandomCharacter = function() {
  const characterNames = Object.value( character )

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


//DOM EVENTS

const getActor = (function(lastScore) {
  let lastActor = chooseRandomActor()

  $( '#random-actor' ).text( shuffle( lastActor ) )
  $( '#actor-hint' ).text( getCharacterforActorHint( lastActor ) )  //WIP: this isn't working :<

  $( '#rescramble-actor' ).click( function( event ) {
    $( '#random-actor' ).text( shuffle( lastActor ) )
  })

  $( '#new-actor' ).click( function( event ) {
    $( '#random-actor' ).text( shuffle( chooseRandomActor() ) )
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

const getCharacterforActorHint = (function() {
  let lastCharacter = chooseRandomCharacter()

  $('#random-character').text( shuffle( lastCharacter ) )

  $( '#rescramble' ).click( function( event ) {
    $('#random-character').text( shuffle( lastCharacter ) )    
  })

  $( '#am-i-right' ).click( function( event ) {
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
})



$(document).ready( function() {
  let lastScore = 0
  getActor(lastScore)
})


