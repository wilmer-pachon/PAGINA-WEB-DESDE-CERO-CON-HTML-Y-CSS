/** Se hace el llamado a los id del index */

let boton_menu = document.getElementById ('boton_menu');
let menu = document.getElementById ('menu');

boton_menu.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
});