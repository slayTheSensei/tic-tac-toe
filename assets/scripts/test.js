const turn = 4

const render = function () {
  if (isEven() === true) {
    console.log("X Turn")
    $('.item').on('click', function () {
      $(this).text('X')
  } else {
    console.log("O Turn")

  }
}

function isEven () {
  return turn % 2 === 0
}



function isX () {
    $(this).text('O')
}

function isX () {
    $(this).text('O')
}
