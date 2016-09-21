const dictionary = {
  "Mark Hamil":"Luke Skywalker",
  "Harrison Ford":"Han Solo",
  "Carrie Fisher":"Princess Leia",
  "Anthony Daniels":"C-3PO",
  "Daisy Ridley":"Rey",
  "Liam Neeson":"Qui-Gon Jinn",
  "Natalie Portman":"Padme Amidala",
  "Alec Guinness":"Obi-Wan Kenobi",
  "Felicity Jones":"Jyn Erso",
}

const chooseRandomActor = function (dictionary) {
  const actorNames = Object.keys(dictionary)
  const randomizedName = actorNames[Math.floor(Math.random() * actorNames.length)]
  return randomizedName
}

// const randomizeLetters = function (letters) {
//   const lettersArray = letters.replace(/ /g, '').split('')
//   const randomLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)]
//   let randomizedWord = []
//
//
// }


function scoreKeeper (answer1, answer2, answer3) {
  var answerArray = [answer1, answer2, answer3]
  for (var i = 0, )
  //take out spaces in all answers
  //.tolowercase()

  //compare entry to random letters
}
