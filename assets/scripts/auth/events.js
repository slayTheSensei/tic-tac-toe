'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target) // This is targeting the data i want to send
  api.signUp(data)
    .done(ui.success)
    .fail(ui.fail)
}

const onSignIn = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.fail)
}

const onSignOut = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.fail)
}

const onChangePassword = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.fail)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.gamePostSuccess)
    .catch(ui.fail)
}

// event handler to update game states
const updateGame = function (index, value, over) {
  api.updateMoves(index, value, over)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFail)
}

const onGetGames = function (event) {
  event.preventDefault()
  // console.log('here')
  api.retrieveGames()
    .then(ui.getGameSuccess)
    .catch(ui.fail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#newGame').on('click', onCreateGame)
  $('#get-games').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  updateGame
}
