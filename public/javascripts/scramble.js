/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _game = __webpack_require__(1);

	var _game2 = _interopRequireDefault(_game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	$(document).ready(function () {
	  var game = new _game2.default();

	  $('#actor-hint').text(game.actorHint());

	  $('#random-actor').text(game.actorWord());
	  $('#random-character').text(game.characterWord());
	  $('#random-ship').text(game.shipWord());

	  $('#rescramble-actor').click(function (event) {
	    $('#random-actor').text(game.actorWord());
	  });

	  $('#rescramble-character').click(function (event) {
	    $('#random-character').text(game.characterWord());
	  });
	  $('#rescramble-ship').click(function (event) {
	    $('#random-ship').text(game.shipWord());
	  });

	  $('#new-actor').click(function (event) {
	    $('#random-actor').text(game.newActorWord());
	  });

	  $('#new-character').click(function (event) {
	    $('#random-character').text(game.newCharacterWord());
	  });

	  $('#new-ship').click(function (event) {
	    $('#random-ship').text(game.newShipWord());
	  });

	  $('#check-actor').click(function (event) {
	    var guess = $('#word1').val();
	    var correct = game.guessActor(guess);

	    checkWinConditions(function () {
	      return $('#random-actor').text(game.actorWord());
	    });
	  });

	  $('#check-character').click(function (event) {
	    var guess = $('#word2').val();
	    var correct = game.guessCharacter(guess);

	    checkWinConditions(function () {
	      return $('#random-character').text(game.characterWord());
	    });
	  });

	  $('#check-ship').click(function (event) {
	    var guess = $('#word3').val();
	    var correct = game.guessActor(guess);

	    checkWinConditions(function () {
	      return $('#random-ship').text(game.shipWord());
	    });
	  });

	  var checkWinConditions = function checkWinConditions(update) {
	    $('#score').text(game.score);

	    if (game.lost) {
	      alert('You LOST, and you are a failure at life');
	      game = new _game2.default();
	    } else if (game.won) {
	      alert('You WON!');
	      game = new _game2.default();
	    }

	    $('#score').text(game.score);
	    update();
	  };
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _actors = __webpack_require__(2);

	var _actors2 = _interopRequireDefault(_actors);

	var _characters = __webpack_require__(3);

	var _characters2 = _interopRequireDefault(_characters);

	var _spacecrafts = __webpack_require__(4);

	var _spacecrafts2 = _interopRequireDefault(_spacecrafts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);

	    this.score = 0;
	    this.won = false;
	    this.lost = false;

	    this.lastActor = this.chooseRandomActor();
	    this.lastCharacter = this.chooseRandomCharacter();
	    this.lastShip = this.chooseRandomShip();
	  }

	  _createClass(Game, [{
	    key: 'newActorWord',
	    value: function newActorWord() {
	      this.lastActor = this.chooseRandomActor();

	      return this.actorWord();
	    }
	  }, {
	    key: 'newCharacterWord',
	    value: function newCharacterWord() {
	      this.lastCharacter = this.chooseRandomCharacter();

	      return this.characterWord();
	    }
	  }, {
	    key: 'newShipWord',
	    value: function newShipWord() {
	      this.lastShip = this.chooseRandomShip();

	      return this.shipWord();
	    }
	  }, {
	    key: 'actorWord',
	    value: function actorWord() {
	      return this.shuffle(this.lastActor);
	    }
	  }, {
	    key: 'characterWord',
	    value: function characterWord() {
	      return this.shuffle(this.lastCharacter);
	    }
	  }, {
	    key: 'shipWord',
	    value: function shipWord() {
	      return this.shuffle(this.lastShip);
	    }
	  }, {
	    key: 'chooseRandom',
	    value: function chooseRandom(collection) {
	      return collection[Math.floor(Math.random() * collection.length)];
	    }
	  }, {
	    key: 'chooseRandomActor',
	    value: function chooseRandomActor() {
	      return _actors2.default[this.chooseRandom(Object.keys(_actors2.default))];
	      console.log(Object.keys(_actors2.default));
	    }
	  }, {
	    key: 'chooseRandomCharacter',
	    value: function chooseRandomCharacter() {
	      return this.chooseRandom(_characters2.default);
	    }
	  }, {
	    key: 'chooseRandomShip',
	    value: function chooseRandomShip() {
	      return this.chooseRandom(_spacecrafts2.default);
	    }
	  }, {
	    key: 'actorHint',
	    value: function actorHint() {
	      return _actors2.default[this.lastActor];
	    }
	  }, {
	    key: 'guessAnswer',
	    value: function guessAnswer(guess, correctAnswer) {
	      if (guess === correctAnswer) {
	        this.score++;
	      } else {
	        this.score--;
	      }

	      this.lost = this.score < 0;
	      this.won = this.score == 1;

	      return guess === correctAnswer;
	    }
	  }, {
	    key: 'guessActor',
	    value: function guessActor(guess) {
	      var correct = this.guessAnswer(guess, this.lastActor);

	      if (correct) {
	        this.lastActor = this.chooseRandomActor();
	      }

	      return correct;
	    }
	  }, {
	    key: 'guessCharacter',
	    value: function guessCharacter(guess) {
	      var correct = this.guessAnswer(guess, this.lastCharacter);

	      if (correct) {
	        this.lastCharacter = this.chooseRandomCharacter();
	      }

	      return correct;
	    }
	  }, {
	    key: 'guessSpacecraft',
	    value: function guessSpacecraft(guess) {
	      var correct = this.guessAnswer(guess, this.lastShip);

	      if (correct) {
	        this.lastShip = this.chooseRandomShip();
	      }

	      return correct;
	    }
	  }, {
	    key: 'shuffle',
	    value: function shuffle(randomName) {
	      var result = randomName.split('');

	      for (var i = 0; i < result.length; i++) {
	        var randomIndex = Math.floor(Math.random() * result.length);
	        var item = result[i];

	        result[i] = result[randomIndex];
	        result[randomIndex] = item;
	      }

	      return result.join('');
	    }
	  }]);

	  return Game;
	}();

	exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ACTORS = {
	  "Mark Hamil": "Luke Skywalker",
	  "Harrison Ford": "Han Solo",
	  "Carrie Fisher": "Princess Leia",
	  "Anthony Daniels": "C-3PO",
	  "Daisy Ridley": "Rey",
	  "Liam Neeson": "Qui-Gon Jinn",
	  "Natalie Portman": "Padme Amidala",
	  "Alec Guinness": "Obi-Wan Kenobi",
	  "Felicity Jones": "Jyn Erso"
	};

	exports.default = ACTORS;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CHARACTERS = ["4-LOM",
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
	"Boba Fett", "Bossk"];

	exports.default = CHARACTERS;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SPACECRAFTS = ["Corellian Corvette", "Death Star",
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
	"TIE Fighter"];

	exports.default = SPACECRAFTS;

/***/ }
/******/ ]);