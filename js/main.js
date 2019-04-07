function typeHero() {
  event.preventDefault()
  $('#type-hero').show()
  $('#dota2-home').hide()
  $('#role-players').hide()


}


function playerRole() {
  event.preventDefault()
  $('#dota2-home').hide()
  $('#type-hero').hide()
  $('#role-players').show()
}

function home() {
  event.preventDefault()
  $('#dota2-home').show()
}
// $('#dota2-home').hide()
$('#type-hero').hide()
$('#role-players').hide()

