import Game from './game'

$(document).ready( function() {
  let game = new Game()
  
  $( '#actor-hint' ).text( game.actorHint() )  

  $( '#random-actor' ).text( game.actorWord() )
  $( '#random-character' ).text( game.characterWord() )
  $( '#random-ship' ).text( game.shipWord() )
   
  $( '#rescramble-actor' ).click( function( event ) {
    $( '#random-actor' ).text( game.actorWord() )
  })

  $( '#rescramble-character' ).click( function( event ) {
    $( '#random-character' ).text( game.characterWord() )
  })
  $( '#rescramble-ship' ).click( function( event ) {
    $( '#random-ship' ).text( game.shipWord() )
  })

  $( '#new-actor' ).click( function( event ) {
    $( '#random-actor' ).text( game.newActorWord() )
  })

  $( '#new-character' ).click( function( event ) {
    $( '#random-character' ).text( game.newCharacterWord() )
  })

  $( '#new-ship' ).click( function( event ) {
    $( '#random-ship' ).text( game.newShipWord() )
  })

  $( '#check-actor' ).click( function( event ) {
    const guess = $( '#word1' ).val()
    const correct = game.guessActor( guess )

    checkWinConditions( () => $('#random-actor').text( game.actorWord() ) )
  })

  $( '#check-character' ).click( function( event ) {
    const guess = $( '#word2' ).val()
    const correct = game.guessCharacter( guess )

    checkWinConditions( () => $('#random-character').text( game.characterWord() ) )
  })

  $( '#check-ship' ).click( function( event ) {
    const guess = $( '#word3' ).val()
    const correct = game.guessActor( guess )

    checkWinConditions( () => $('#random-ship').text( game.shipWord() ))
  })
  
  const checkWinConditions = update => {
    $('#score').text( game.score )

    if( game.lost ) {
      alert( 'You LOST, and you are a failure at life' )
      game = new Game()
    } else if( game.won ) {
      alert( 'You WON!')
      game = new Game()
    } 

    $('#score').text( game.score )
    update()
  }
})

