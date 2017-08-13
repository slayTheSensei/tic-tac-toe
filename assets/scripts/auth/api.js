'use strict'

const app = require('../app')
// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

// sign-up API request
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

// api call for starting a new game
const createGame = function () {
  // console.log ("Hello")
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    success: function (response) {
      console.log(response)
    }
    // ail: function (error) {
    // console.log(error)
    // console.log("Please Log in")
    // }
  })
}

const updateMoves = function (index, value, over) {
  console.log(index + ' ' + value + ' ' + over)
  console.log(app.user.token)
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    // dataType: 'jsonp',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

const retrieveGames = function () {
  return $.ajax({
    method: 'GET',
    url: app.host + '/games?over=true',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  createGame,
  signUp,
  signIn,
  signOut,
  changePassword,
  updateMoves,
  retrieveGames
}
