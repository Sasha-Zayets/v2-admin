let body = document.querySelector('body')
let over = document.createElement('div')
let loader = document.createElement('div')
loader.classList.add('loader')
loader.innerHTML = `<div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>`
over.classList.add('overlay')
//add
body.insertBefore(over, null)
body.insertBefore(loader, null)
let app = document.getElementById('app')
let overlay = document.querySelector('.overlay')
app.style.visibility = 'hidden'

document.addEventListener ('DOMContentLoaded', function() {
  setTimeout(function() {
    app.style.visibility = 'visible'
    over.style.visibility = 'hidden'
    loader.style.display = 'none'
  }, 3000)
}, false)
