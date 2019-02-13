// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/boarding', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });



let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  }
]

let games = [
  {
    name: 'Risk',
    genre: 'War',
    _event: users[0]._id,
    description: 'The game board is a map of 6 continents divided into 42 territories. Each continent is a different color and exists of 4 to 12 territories. The numbers along the bottom (southern) edge of the board indicate the number of armies you will receive for a set of cards you trade in.'
  },
  {
    name: 'Pictionary',
    genre: 'Guessing',
    _event: users[0]._id,
    description: 'Pictionary is a charades-inspired word-guessing game invented by Robert Angel. The game consists in Each team moves a piece on a game board formed by a sequence of squares. Each square has a letter or shape identifying the type of picture to be drawn on it. The objective is to be the first team to reach the last space on the board. To achieve this a player must guess the word or phrase being drawn by their partner, or if the player lands on an "all play" square, one player from each team attempts to illustrate the same concept simultaneously, with the two teams racing to guess first. The first player to land and guess correctly at the finish wins.'
  },
  {
    name: 'Dixit',
    genre: 'Storytelling',
    _event: users[0]._id,
    description: 'Each player starts the game with six random cards. Players then take turns being the storyteller. The player whose turn it is to be storyteller looks at the six images in his or her hand. From one of these, he or she makes up a sentence or phrase that might describe it and says it out loud (without showing the card to the other players). Each other player then selects from among their own six cards the one that best matches the sentence given by the storyteller. Then, each player gives their selected card to the storyteller, without showing it to the others. The storyteller shuffles his or her chosen card with the cards received from the other players, and all cards are then dealt face up. The players (except for the storyteller) then secretly guess which picture was the storyteller\'s, using numbered voting chips.'
  },
  {
    name: 'Scrabble',
    genre: 'Word',
    _event: users[0]._id,
    description: 'The game is played by two to four players on a square board with a 15×15 grid of cells (individually known as \"squares\"), each of which accommodates a single letter tile. In official club and tournament games, play is between two players or, occasionally, between two teams each of which collaborates on a single rack. The board is marked with \"premium\" squares, which multiply the number of points awarded: eight dark red \"triple-word\" squares, 17 pale red \"double-word\" squares, of which one, the center square (H8), is marked with a star or other symbol; 12 dark blue \"triple-letter\" squares, and 24 pale blue \"double-letter\" squares. In 2008, Hasbro changed the colors of the premium squares to orange for TW, red for DW, blue for DL, and green for TL, but the original premium square color scheme is still preferred for Scrabble boards used in tournaments'
  },
  {
    name: 'Monopoly',
    genre: 'Economic Simulation',
    _event: users[0]._id,
    description: 'Monopoly is a board game in which players roll two six-sided dice to move around the game board, buying and trading properties, and developing them with houses and hotels. Players collect rent from their opponents, with the goal being to drive them into bankruptcy. Money can also be gained or lost through Chance and Community Chest cards, and tax squares; players can end up in jail, which they cannot move from until they have met one of several conditions. The game has numerous house rules, and hundreds of different editions exist, as well as many spin-offs and related media. Monopoly has become a part of international popular culture, having been licensed locally in more than 103 countries and printed in more than 37 languages.'
  },
  {
    name: 'Trivial Pursuit',
    genre: 'Trivia',
    _event: users[0]._id,
    description: 'The object of the game is to move around the board by correctly answering trivia questions. Questions are split into six categories, with each one having its own color to readily identify itself; in the classic version of Trivial Pursuit, these are Geography (blue), Entertainment (pink), History (yellow), Arts & Literature (originally brown, later purple), Science & Nature (green), and Sports & Leisure (orange). The game includes a board, playing pieces, question cards, a box, small plastic wedges to fit into the playing pieces, and a die.'
  },
  {
    name: 'Trivial Pursuit',
    genre: 'Trivia',
    _event: users[0]._id,
    description: 'The object of the game is to move around the board by correctly answering trivia questions. Questions are split into six categories, with each one having its own color to readily identify itself; in the classic version of Trivial Pursuit, these are Geography (blue), Entertainment (pink), History (yellow), Arts & Literature (originally brown, later purple), Science & Nature (green), and Sports & Leisure (orange). The game includes a board, playing pieces, question cards, a box, small plastic wedges to fit into the playing pieces, and a die.'
  },

  
]

  User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})