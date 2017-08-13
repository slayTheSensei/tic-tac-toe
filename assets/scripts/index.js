'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const api = require('./auth/api.js')
const gameEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

/// //////////////////////////
/// / VARIABLES /////////////
/// //////////////////////////

let cells = []
let win = false
let turn = 0
// callback functions being sent to api JSON data
let index
let value
let over

/// //////////////////////////
/// / TURN FUNCTIONALITY /////
/// //////////////////////////

// $('.item').on('click', nextTurn)

const render = function () {
  console.log(turn)
  if (turn % 2 === 0) {
    draw()
    $('.item').on('click', currentX) // event.target instead of $('.item')
  } else {
    draw()
    $('.item').on('click', currentO)
  }
  $('#myTurnO').toggleClass('shade')
  $('#myTurnX').toggleClass('shade')
  turn += 1
  checkForWin()
}

// ////////////////////////////////
// ///// CALLBACK FUNCTIONS ///////
// ////////////////////////////////

const squares = $('.item')

const pushCells = function () {
  cells = squares.text().split('')
  return cells
}

// Changes turn
const nextTurn = function () {
  turn += 1
  // console.log(turn)
  render()
  return turn
}
// Check for even turn
function isEven () {
  console.log(turn % 2 === 0)
  return turn % 2 === 0
}

const resetBoard = function () {
  $('.item').empty()
  turn = 0
  render()
  $('.item').on()
  return turn
}

// Changes marker to X
function currentX () {
  // console.log(turn)
  $(this).text('X').off()
  index = (this.id)
  value = $(this).text()
  checkForWin()
  over = win
  gameEvents.updateGame(index, value, over)
  // console.log(index + value + over)
  // console.log(value + ' marker was clicked')
  // console.log(index + ' index was placed')

  // api.updateGame(index,'x')
}

// Changes marker to O
function currentO () {
  $(this).text('O').off()
  index = (this.id)
  value = $(this).text()
  checkForWin()
  over = win
  console.log(over)
  // gameEvents.updateGame(index, value, over)
  // api.updateGame(index, value, over)
  console.log(index + value + over)
  // api.updateGame(index,'o')
  console.log(value + ' marker was clicked')
  console.log(index + ' index was placed')
}

// Selects all elements with the class 'item'

const draw = function () {
  if (turn > 9) {
    console.log('Draw!')
    return $('.item').off()
  }
}

// const whitespace = function () {
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].replace(/ /g, '')
//   }
// }

// ///////////////////////
// ///// WIN LOGIC ///////
// ///////////////////////

const checkForWin = function () {
  if ($('#0').text() === ('X') && $('#1').text() === ('X') && $('#2').text() === 'X') {
    console.log('X Wins!')
    $('#btn-popup01').click()
    $('.item').off()
    win = true

  } else if ($('#0').text() === ('O') && $('#1').text() === ('O') && $('#2').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()
    win = true

  } else if ($('#3').text() === ('X') && $('#4').text() === ('X') && $('#5').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()
    win = true

  } else if ($('#3').text() === ('O') && $('#4').text() === ('O') && $('#5').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()
    win = true

  } else if ($('#6').text() === ('X') && $('#7').text() === ('X') && $('#8').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()
    win = true

  } else if ($('#6').text() === ('O') && $('#7').text() === ('O') && $('#8').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()
    win = true

  } else if ($('#0').text() === ('X') && $('#3').text() === ('X') && $('#6').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()
    win = true

  } else if ($('#0').text() === ('O') && $('#3').text() === ('O') && $('#6').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()
    win = true

  } else if ($('#1').text() === ('X') && $('#4').text() === ('X') && $('#7').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()
    win = true

  } else if ($('#1').text() === ('O') && $('#4').text() === ('O') && $('#7').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()
    win = true

  } else if ($('#2').text() === ('X') && $('#5').text() === ('X') && $('#8').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()

  } else if ($('#2').text() === ('O') && $('#5').text() === ('O') && $('#8').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()
    win = true

  } else if ($('#0').text() === ('X') && $('#4').text() === ('X') && $('#8').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()
    win = true

  } else if ($('#0').text() === ('O') && $('#4').text() === ('O') && $('#8').text() === 'O') {

    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()
    win = true

// TODO Fix whatever is broken
  } else if ($('#2').text() === ('X') && $('#4').text() === ('X') && $('#6').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click()
    $('.item').off()
    win = true

  } else if ($('#2').text() === ('O') && $('#4').text() === ('O') && $('#6').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click()
    $('.item').off()
    win = true
  }
}

// ////////////////////////////
// ///// FUNCTION CALLS ///////
// ////////////////////////////

$(document).ready(render)
// $('.item').click(render)
// //////////////////////////////////
// ///// WIN SCREEN /////////////////
// //////////////////////////////////

$(document).ready(function () {
  $('body').on('click', 'button.popup', function () {
    const btnId = $(this).attr('id')
    $('body').addClass('popup-open').fadeIn(2000)
    $('.' + btnId).addClass('popup-open').fadeIn(400)
  }).on('click', 'button.link', function () {
    const btnFormAction = $(this).attr('formaction')
    const btnTarget = $(this).attr('formtarget')
    window.open(btnFormAction, btnTarget)
  })
  // close/hide popup (+overlay)
  $.fn.popupClose = function () {
    $('body').removeClass('popup-open')
    $('.overlay_popup').removeClass('popup-open')
    return this
  }
})

// ///////////////////////////////////////
// ////// AUTHENTICATION /////////////////
// ///////////////////////////////////////

const authEvents = require('./auth/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
})

module.exports = {
  render,
  currentX,
  currentO
}
