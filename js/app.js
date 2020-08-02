let menuToggle = document.getElementById("menuToggle");
let menuToggleIcon = document.getElementById("iconToggle"); 
let menu = document.getElementById("menu");

// Função para fazer a barra scrowllar os itens
menuToggle.addEventListener("click", e=>{
    menu.classList.toggle('show');
// If/else para alternar entre as barras e o X
    if(menu.classList.contains('show')){
        menuToggleIcon.innerHTML = "&#9747"
    }else{
        menuToggleIcon.innerHTML = "&#9776"
    }
})