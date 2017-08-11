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

let cells = []

// callback functions being sent to api JSON data
let id
let cell
let over

/// //////////////////////////
/// / TURN FUNCTIONALITY /////
/// //////////////////////////

let turn = 0

// Test for odd or even and display current marker
const render = function () {
  if (isEven() === true) {
    nextTurn()
    console.log('X Turn')
    draw()
    $('.item').click(currentX)
  } else {
    nextTurn()
    console.log('O Turn')
    draw()
    $('.item').on('click', currentO)
  }
  // squares.on('click', board)
  pushCells()
  whitespace()
  console.log(cells)
  $('#myTurnO').toggleClass('shade')
  $('#myTurnX').toggleClass('shade')
  checkForWin()
  // TODO add a callback function to notify player of turn change
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
  console.log(turn)
  return turn
}
// Check for even turn
function isEven () {
  return turn % 2 === 0
}

const resetBoard = function () {
  $('.item').empty()
  turn = 0
  render()
  return turn
}

// Changes marker to X
function currentX () {
  $(this).text('x').off()
}

// Changes marker to O
function currentO () {
  $(this).text('o').off()
}

// Selects all elements with the class 'item'

const draw = function () {
  if (turn > 9) {
    console.log('Draw!')
    return $('.item').off
  }
}

const whitespace = function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].replace(/ /g, '')
  }
}

// function board () {
//   grid.push
//   console.log(grid)
// }

// ///////////////////////
// ///// WIN LOGIC ///////
// ///////////////////////

const checkForWin = function () {
  if ($('#0').text() === ('X') && $('#1').text() === ('X') && $('#2').text() === 'X') {
    console.log('X Wins!')
    $('#btn-popup01').click()
    $('.item').off()

  } else if ($('#0').text() === ('O') && $('#1').text() === ('O') && $('#2').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()

  } else if ($('#3').text() === ('X') && $('#4').text() === ('X') && $('#5').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()

  } else if ($('#3').text() === ('O') && $('#4').text() === ('O') && $('#5').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()

  } else if ($('#6').text() === ('X') && $('#7').text() === ('X') && $('#8').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()

  } else if ($('#6').text() === ('O') && $('#7').text() === ('O') && $('#8').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()

  } else if ($('#0').text() === ('X') && $('#3').text() === ('X') && $('#6').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()

  } else if ($('#0').text() === ('O') && $('#3').text() === ('O') && $('#6').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()

  } else if ($('#1').text() === ('X') && $('#4').text() === ('X') && $('#7').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()

  } else if ($('#1').text() === ('O') && $('#4').text() === ('O') && $('#7').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()

  } else if ($('#2').text() === ('X') && $('#5').text() === ('X') && $('#8').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()

  } else if ($('#2').text() === ('O') && $('#5').text() === ('O') && $('#8').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()

  } else if ($('#0').text() === ('X') && $('#4').text() === ('X') && $('#8').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click();
    $('.item').off()

  } else if ($('#0').text() === ('O') && $('#4').text() === ('O') && $('#8').text() === 'O') {

    console.log('O Wins!')
    $("#btn-popup02").click();
    $('.item').off()

// TODO Fix whatever is broken
  } else if ($('#2').text() === ('X') && $('#4').text() === ('X') && $('#6').text() === 'X') {
    console.log('X Wins!')
    $("#btn-popup01").click()
    $('.item').off()

  } else if ($('#2').text() === ('O') && $('#4').text() === ('O') && $('#6').text() === 'O') {
    console.log('O Wins!')
    $("#btn-popup02").click()
    $('.item').off()
  }
}

// push the entire board values

// ////////////////////////////
// ///// FUNCTION CALLS ///////
// ////////////////////////////

render()
$('#reset').on('click', resetBoard)
$('.item').on('click', render)

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
  game,
  cells,
  render
}
