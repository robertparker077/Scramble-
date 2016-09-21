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



function scoreKeeper (answer1, answer2, answer3) {
  var answerArray = [answer1, answer2, answer3]
  // for (var i = 0, )
  //take out spaces in all answers
  //.tolowercase()

  //compare entry to random letters
}

$(document).ready( function() {
  $('#random-word-1').text( shuffle( chooseRandomActor() ) )

  $( '#rescramble' ).click( function( event ) {
    $('#random-word-1').text( shuffle( chooseRandomActor() ) )    
  })
})
