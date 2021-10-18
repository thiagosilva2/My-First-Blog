// var clicou = document.querySelector('div#clicou')

// function p() {
//   document.write('.main__text')
// }

function ocultar(id, display = 'block') {
  var clicou = document.querySelector(`div.${id}`)
  if (clicou.style.display !== 'none') {
    clicou.style.display = 'none'
  } else {
    clicou.style.display = display
  }
}
