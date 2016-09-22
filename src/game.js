import actors from './game_data/actors'
import characters from './game_data/characters'
import spacecrafts from './game_data/spacecrafts'

class Game {
  constructor() {
    this.score = 0
    this.won = false
    this.lost = false

    this.lastActor = this.chooseRandomActor()
    this.lastCharacter = this.chooseRandomCharacter()
    this.lastShip = this.chooseRandomShip()
  }

  newActorWord() {
    this.lastActor = this.chooseRandomActor()

    return this.actorWord()
  }

  newCharacterWord() {
    this.lastCharacter = this.chooseRandomCharacter()

    return this.characterWord()
  }

  newShipWord() {
    this.lastShip = this.chooseRandomShip()

    return this.shipWord()
  }

  actorWord() {
    return this.shuffle( this.lastActor )
  }

  characterWord() {
    return this.shuffle( this.lastCharacter )
  }

  shipWord() {
    return this.shuffle( this.lastShip )
  }

  chooseRandom( collection ) {
    return collection[ Math.floor( Math.random() * collection.length ) ]
  }

  chooseRandomActor() {
    return actors[ this.chooseRandom( Object.keys( actors ) ) ]
  }

  chooseRandomCharacter() {
    return this.chooseRandom( characters )
  }

  chooseRandomShip() {
    return this.chooseRandom( spacecrafts )
  }

  actorHint() {
    return actors[ this.lastActor ]
  }

  guessAnswer( guess, correctAnswer ) {
    if( guess === correctAnswer ) {
      this.score++
    } else {
      this.score--
    }

    this.lost = this.score < 0 
    this.won = this.score == 10 

    return guess === correctAnswer
  }

  guessActor( guess ) {
    const correct = this.guessAnswer( guess, this.lastActor )

    if( correct ) {
      this.lastActor = this.chooseRandomActor()
    }

    return correct  }

  guessCharacter( guess ) {
    const correct = this.guessAnswer( guess, this.lastCharacter )

    if( correct ) {
      this.lastCharacter = this.chooseRandomCharacter()
    }

    return correct
  }

  guessSpacecraft( guess ) {
    const correct = this.guessAnswer( guess, this.lastShip )

    if( correct ) {
      this.lastShip = this.chooseRandomShip()
    }

    return correct
  }

  shuffle( randomName ) {
    let result = randomName.split('')

    for( let i = 0; i < result.length; i++ ) {
      const randomIndex = Math.floor( Math.random() * result.length )
      const item = result[ i ]

      result[ i ] = result[ randomIndex ];
      result[ randomIndex ] = item
    }

    return result.join('')
  }
}

export default Game