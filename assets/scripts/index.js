'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

/// //////////////////////////
/// / GAME LOGIC /////////////
/// //////////////////////////

// const winList = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]
//

let turn = 2
// Chnages turn
const nextTurn = function() {
  turn += 1
  console.log(turn)
  return turn
}

// Test for odd or even and display current marker
const render = function () {
  if (turn === isEven(2)) {
    $('.item').on('click', function () {
      $(this).text('X')
    })
  } else {
    $('.item').on('click', function () {
      $(this).text('O')
    })
  }
}

/// //////////////////////////
/// / ODD/EVEN FUNCTIONS /////
/// //////////////////////////

function isEven (n) {
  return n % 2 === 0
}

render()
// function isOdd(n) {
//   return Math.abs(n % 2) === 1
// }
