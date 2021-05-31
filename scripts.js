
/*Função menu resonsivo */

function abrirMenu(){
    let x = document.getElementById("menu");
    let y = document.getElementById("tres-linhas")
    if(x.className === "menu"){
        x.className = "menujs";
        y.innerHTML = "&#10006";
    }else if(x.className === "menujs"){
        x.className = "menu"
        y.innerHTML = "&#9776"
    }
}

/* função galeria modal */

function clique(img){
    var modalJ = document.getElementById("janelaModal")
    var modalI = document.getElementById("modal_img")
    var modalB = document.getElementById("btFechar")

    modalJ.style.display="block";
    modalI.src=img;
    modalB.onclick=function(){
        modalJ.style.display="none";
    }
}
      
        
        
    
