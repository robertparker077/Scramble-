const dictionary = {
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

const chooseRandomActor = function() {
  const actorNames = Object.keys( dictionary )

  return actorNames[ Math.floor( Math.random() * actorNames.length ) ]
}

const getCharacter = function( actorName ) {
  const character = dictionary[ actorName ]

  return document.getElementById('hint').innerHTML = character;
}

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
$(document).ready( function() {
  let lastActor = chooseRandomActor()
  let lastScore = 0

  $('#random-word-1').text( shuffle( lastActor ) )

  $( '#rescramble' ).click( function( event ) {
    $('#random-word-1').text( shuffle( lastActor ) )    
  })

  $( '#am-i-right' ).click( function( event ) {
    const guess = $( '#word1' ).val()
    const correct = guess === lastActor
    const score = scoreKeeper( correct )

    $('#score').text( score )

    if( correct ) {
      lastScore = score
      
      lastActor = chooseRandomActor()
      $('#random-word-1').text( shuffle( lastActor ) ) 
    }

  })
})
