'use strict'
// remove signIn and signOut
const app = require('../app.js')
// remove me before code-along
const signInSuccess = (data) => {
  app.user = data.user
  console.log('signed in!')
  console.log(app)
}

// remove me before code-along
const signOutSuccess = () => {
  app.user = null
  console.log(app)
}

const gamePostSuccess = (data) => {
  // $('.game-board').show()
  app.game = data.game
  app.game.id = data.game.id
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const onUpdateSuccess = () => {
  console.log('Move has been made')
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  gamePostSuccess,
  onUpdateSuccess
}
