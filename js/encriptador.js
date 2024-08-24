// Seleccion de elementos

const btnEncriptar = document.querySelector(".btn_encriptar");
const btnDesencriptar = document.querySelector(".btn_desencriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".contenedor-tarjeta");
const btnCopiar = document.querySelector(".btn_copiar");

// Boton de encriptado

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    console.log(txt);

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no tiene que estar vacio."

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    
    else if (texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe tener acentos y caracteres especiales."

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
 
    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto escrito debe ser todo en minuscula."

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
     else{   // 1ra condicion 
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat"); 

        respuesta.innerHTML = texto;   
        btnCopiar.style.visibility ="inherit";
        contenido.remove();   
        
     }
   console.log(texto);
});


// Boton de Desencriptado

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    console.log(txt);

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no tiene que estar vacio."

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    
    else if (texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto no debe tener acentos y caracteres especiales."

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
 
    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto escrito debe ser todo en minuscula."

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
     else{   // 2da condicion 
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u"); 

        respuesta.innerHTML = texto;   
        btnCopiar.style.visibility ="inherit";
        contenido.remove();   
        
     }
   console.log(texto);
});

// Boton de copiar

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});