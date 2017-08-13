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

// event handler to update game states
const updateGame = function (index, value, over) {
  gameApi.updateMoves(index, value, over)
    .then(gameUi.onUpdateSuccess)
    .catch(gameUi.onUpdateFail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
