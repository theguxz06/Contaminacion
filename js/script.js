let rayas = document.getElementById('menu')
rayas.addEventListener('click', abrirMenu)


let menu = document.getElementById('lat-encabezado')
let superior = document.getElementById('encabezado-superior')

function abrirMenu() {
    
    menu.classList.toggle('menu__side_move')
    superior.classList.toggle('encabezado-superioro')
   
}
