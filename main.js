// esconder.addEventListener('click', ocultar)
function ocultar(id) {
  var esconder = document.getElementById(id)

  if (esconder.style.display != 'none') {
    esconder.style.display = 'none'
  } else {
    esconder.style.display = 'block'
  }
}
