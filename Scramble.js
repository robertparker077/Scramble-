const actor = {
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

const character = { "name": "4-LOM",
 "name": "Aayla Secura",
  "name": "Admiral Ackbar",
  "name": "Admiral Thrawn",
  "name": "Ahsoka Tano",
  "name": "Anakin Solo",
  "name": "Asajj Ventress",
  "name": "Aurra Sing",
  "name": "Senator Bail Organa",
  "name": "Barriss Offee",
  "name": "Bastila Shan",
  "name": "Ben Skywalker",
  "name": "Bib Fortuna",
  "name": "Biggs Darklighter",
  "name": "Boba Fett",
  "name": "Bossk"
}

const spacecrafts = {
 "name": "Corellian Corvette",
 "name": "Death Star",
 "name": "Ebon Hawk",
"name": "Geonosian solar sailer",
"name": "Imperial Landing Craft",
"name": "Lambda-class shuttle",
"name": "Millennium Falcon",
"name": "Moldy Crow",
"name": "Naboo royal cruiser",
"name": "Naboo royal starship",
"name": "Naboo star skiff",
"name": "Nebulon-B frigate",
"name": "Neimoidian shuttle",
"name": "Outrider",
"name": "Radiant VII",
"name": "Raven's Claw",
"name": "Rebel blockade runner",
"name": "Republic assault ship",
"name": "Republic attack cruiser",
"name": "Republic cruiser",
"name": "Rogue Shadow",
"name": "Sith Infiltrator",
"name": "Slave I",
"name": "Star Destroyer",
"name": "Starfreighter",
"name": "Tantive IV",
"name": "Techno Union Starship",
"name": "Theta-class shuttle",
"name": "Lucrehulk-class battleship",
"name": "Trade Federation cruiser",
"name": "Trade Federation landing ship",
"name": "Virago",
"name": " TIE Fighter"
}

const chooseRandomShip = function() {
  const shipNames = Object.value( spacecrafts )

  return characterNames[ Math.floor( Math.random() * characterNames.length )]
}

const chooseRandomCharacter = function() {
  const characterNames = Object.value( character )

  return characterNames[ Math.floor( Math.random() * characterNames.length )]
}

const chooseRandomActor = function() {
  const actorNames = Object.keys( actor )

  return actorNames[ Math.floor( Math.random() * actorNames.length ) ]
}

const getCharacter = function( actorName ) {
  const character = actor[ actorName ]

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

const getActor = (function() {
  let lastActor = chooseRandomActor()
  // let lastCharacter = chooseRandomCharacter()
  // let lastShip = chooseRandomShip()
  let lastScore = 0

  $('#random-actor').text( shuffle( lastActor ) )

  $( '#rescramble' ).click( function( event ) {
    $('#random-actor').text( shuffle( lastActor ) )    
  })

  $( '#am-i-right' ).click( function( event ) {
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



$(document).ready( function() {
  getActor()
})


