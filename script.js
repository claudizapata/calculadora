const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.nro');


botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        const botonElegido = boton.textContent;

        if (boton.id === "c"){
            pantalla.textContent ="0";
            return;
        }

        if (boton.id === "borrar"){
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){//para el retroceso, para borrar por cada nro ingresado
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        } 

        
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botonElegido;
        }else{
            pantalla.textContent += botonElegido;
        }
    } )
})