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
  const randomName1 = actorNames[Math.floor(Math.random() * actorNames.length)]
  return randomName1
}

const getCharacter = function (actorName) {
  const character = dictionary[actorName]
  return document.getElementById('hint').innerHTML = character;
}


var shuffle = function(randomName) {
  for(var i = randomName.length-1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i+1));
    var itematIndex = randomName[randomIndex];
    randomName[randomIndex] = randomName[i];
    randomName[i] = itematIndex
  }
return document.getElementById('random-word-1').innerHTML = randomName;
}


function scoreKeeper (answer1, answer2, answer3) {
  var answerArray = [answer1, answer2, answer3]
  for (var i = 0, )
  //take out spaces in all answers
  //.tolowercase()

  //compare entry to random letters
}

var el = document.getElementById("clickMe");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);
