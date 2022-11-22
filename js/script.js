let rayas = document.getElementById('menu')
rayas.addEventListener('click', abrirMenu)
let X = document.getElementById('X')
X.addEventListener('click', cerrarMenu)
let menu = document.getElementById('lat-encabezado')
let cerrar = document.getElementById('tresRayas')

function abrirMenu() {
    
    menu.style.display = 'block'
   
}

function cerrarMenu() {
    
    menu.style.display = 'none'
    
}