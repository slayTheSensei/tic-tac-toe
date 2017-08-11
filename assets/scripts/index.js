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
let index
let value
let over

/// //////////////////////////
/// / SENDING MOVES //////////
/// //////////////////////////

// const sendMoves = function () {
//   if (cell === 'box-1') {
//     value = $('#box-1').html()
//     index = 0
//     over = over
//     gameEvents.updateGame(index, value, over)
//     // console.log(moves)
//   } else if (cell === 'box-2') {
//       value = ($('#box-2').html())
//       index = 1
//       over = over
//       gameEvents.updateGame(index, value, over)
//     //  console.log(moves)
//   } else if (cell === 'box-3') {
//     value = ($('#box-3').html())
//     index = 2
//     over = over
//     gameEvents.updateGame(index, value, over)
//     // console.log(moves)
//   } else if (cell === 'box-4') {
//     value = ($('#box-4').html())
//     index = 3
//     over = over
//     gameEvents.updateGame(index, value, over)
//   //  console.log(moves)
//   } else if (cell === 'box-5') {
//     value = ($('#box-5').html())
//     index = 4
//     over = over
//     gameEvents.updateGame(index, value, over)
//   //  console.log(moves)
//   } else if (cell === 'box-6') {
//     value = ($('#box-6').html())
//     index = 5
//     over = over
//     gameEvents.updateGame(index, value, over)
//   //  console.log(moves)
//   } else if (cell === 'box-7') {
//     value = ($('#box-7').html())
//     index = 6
//     over = over
//     gameEvents.updateGame(index, value, over)
//   //  console.log(moves)
//   } else if (cell === 'box-8') {
//     value = ($('#box-7').html())
//     index = 7
//     over = over
//     gameEvents.updateGame(index, value, over)
//   //  console.log(moves)
//   } else if (cell === 'box-9') {
//     value = ($('#box-9').html())
//     index = 8
//     over = over
//     gameEvents.updateGame(index, value, over)
//   //  console.log(moves)
//   }
// }

/// //////////////////////////
/// / TURN FUNCTIONALITY /////
/// //////////////////////////

let turn = 0

// Test for odd or even and display current marker
const render = function () {
  if (isEven() === true) {
    nextTurn()
    // console.log('X Turn')
    draw()
    $('.item').on('click', currentX) // event.target instead of $('.item')
  } else {
    nextTurn()
    // console.log('O Turn')
    draw()
    $('.item').on('click', currentO)
  }
  // squares.on('click', board)
  pushCells()
  whitespace()
  // console.log(cells) // squares.text()
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
  return turn
}

// Changes marker to X
function currentX () {
  $(this).text('X').off()
  index = (this.id)
  value = $(this).text()
  console.log(value + ' marker was clicked')
  console.log(index + ' index was placed')
  event.stopPropagation()

  // api.updateGame(index,'x')
}

// Changes marker to O
function currentO (event) {
  $(this).text('O').off()
  index = (this.id)
  value = $(this).text()
  // api.updateGame(index,'o')
  console.log(value + ' marker was clicked')
  console.log(index + ' index was placed')
  event.stopPropagation()
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

// render()
$('#reset').on('click', resetBoard)
$(document).ready(render)

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
  cells,
  render
}
