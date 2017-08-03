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
/// / ARRAYS /////////////
/// //////////////////////////

const grid = []
const oWins = []
const xWins = []

// Selects all elements with the class 'item'
const squares = $('.item')
let turn = 0

/// //////////////////////////
/// / TURN FUNCTIONALITY /////
/// //////////////////////////
const empty = function () {

}

// Test for odd or even and display current marker
const render = function () {
  if (isEven() === true) {
    nextTurn()
    console.log('X Turn')
    $('.item').click(currentX)
  } else {
    nextTurn()
    console.log('O Turn')
    $('.item').on('click', currentO)
  }
  checkForWin()
  // TODO add a callback function to notify player of turn change
}

/// //////////////////////////
/// / Callbacks /////
/// //////////////////////////

const xIndex = function () {
  let currentIndex = squares.index(this)
  // if ($(squares[currentIndex]).text('X')) {
  xWins.push(currentIndex)
}

const oIndex = function () {
  let currentIndex = squares.index(this)
  // if ($(squares[currentIndex]).text('O')) {
  oWins.push(currentIndex)
}

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

const playerIcon = function () {

}

// Changes marker to X
function currentX () {
  $(this).text('X').off()
}

// Changes marker to O
function currentO () {
  $(this).text('O').off()
}

// Pushes all grid elements in the 'grid' array
const board = function () {
  for (let i = 0; i < squares.length; i++) {
    grid.push(squares[i])
  }
  console.log(grid)
  return grid
  // TODO push the element being clicked into the win array
}

// ///////////////////////
// ///// WIN LOGIC ///////
// ///////////////////////

const checkForWin = function () {
  let won = 0
  if ($('#0').text() === ('X') && $('#1').text() === ('X') && $('#2').text() === 'X') {
    won = 1
    console.log('X Wins!')
    $('.item').off()

  } else if ($('#0').text() === ('O') && $('#1').text() === ('O') && $('#2').text() === 'O') {
    won = 1
    console.log('O Wins!')
    $('.item').off()

  } else if ($('#3').text() === ('X') && $('#4').text() === ('X') && $('#5').text() === 'X') {
    won = 1
    console.log('X Wins!')
    $('.item').off()

  } else if ($('#3').text() === ('O') && $('#4').text() === ('O') && $('#5').text() === 'O') {
    won = 1
    console.log('O Wins!')
    $('.item').off()

  } else if ($('#6').text() === ('X') && $('#7').text() === ('X') && $('#8').text() === 'X') {
    won = 1
    console.log('X Wins!')
    $('.item').off()

  } else if ($('#6').text() === ('O') && $('#7').text() === ('O') && $('#8').text() === 'O') {
    won = 1
    console.log('O Wins!')
    $('.item').off()

  } else if ($('#0').text() === ('X') && $('#3').text() === ('X') && $('#6').text() === 'X') {
    won = 1
    console.log('X Wins!')
    $('.item').off()

  } else if ($('#0').text() === ('O') && $('#3').text() === ('O') && $('#6').text() === 'O') {
    won = 1
    console.log('O Wins!')
    $('.item').off()

  } else if ($('#1').text() === ('X') && $('#4').text() === ('X') && $('#7').text() === 'X') {
    won = 1
    console.log('X Wins!')
    $('.item').off()

  } else if ($('#1').text() === ('O') && $('#4').text() === ('O') && $('#7').text() === 'O') {
    won = 1
    console.log('O Wins!')
    $('.item').off()

  } else if ($('#2').text() === ('X') && $('#5').text() === ('X') && $('#8').text() === 'X') {
    won = 1
    console.log('X Wins!')

  } else if ($('#2').text() === ('O') && $('#5').text() === ('O') && $('#8').text() === 'O') {
    won = 1
    console.log('O Wins!')
    $('.item').off()

  } else if ($('#0').text() === ('X') && $('#4').text() === ('X') && $('#8').text() === 'X') {
    won = 1
    console.log('X Wins!')
    $('.item').off()

  } else if ($('#0').text() === ('O') && $('#4').text() === ('O') && $('#8').text() === 'O') {
    won = 1
    console.log('O Wins!')
    $('.item').off()

  } else if ($('#2').text() === ('X') && $('#4').text() === ('X') && $('#6').text() === 'X') {
    won = 1
    console.log('X Wins!')
    $('.item').off()

  } else if ($('#2').text() === ('O') && $('#4').text() === ('O') && $('#6').text() === 'O') {
    won = 1
    console.log('O Wins!')
    $('.item').off()
  }
}

// ////////////////////////////
// ///// FUNCTION CALLS ///////
// ////////////////////////////
render()
$('.item').on('click', render)
