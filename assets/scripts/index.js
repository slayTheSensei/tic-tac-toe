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

/// //////////////////////////
/// / Turn Functionality /////
/// //////////////////////////

let turn = 4

// Test for odd or even and display current marker
const render = function () {
  if (isEven() === true) {
    console.log('X Turn')
    $('.item').click(currentX)
  } else {
    console.log('o Turn')
    $('.item').on('click', currentO)
  }
  $('.row').on('click', nextTurn)
}

/// //////////////////////////
/// / Callbacks /////
/// //////////////////////////

// Changes turn
const nextTurn = function () {
  turn += 1
  console.log(turn)
  return turn
}
// Check for even turn
function isEven () {
  return turn % 2 === 0
}

// Changes marker to O
function currentX () {
  $(this).text('X')
}

// Changes marker to X
function currentO () {
  $(this).text('O')
}

// Tests for even
function isEven () {
  return turn % 2 === 0
}

// function isOdd(n) {
//   return Math.abs(n % 2) === 1
// }
render()
