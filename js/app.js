// Menu Responisve Codigo
var btnMenuOpen = document.getElementById("menuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

// Evento Click abrir
btnMenuOpen.addEventListener("click",function() {
    // Le indicamos a nuestro menu cuando de click muestre el menu
    menuResponsive.classList.add("active");
});
//Evento Click cerrar
btnMenuClose.addEventListener("click",function() {
    menuResponsive.classList.remove("active");
});

// Evento cerrar con enlaces

enlaces.addEventListener("click",function() {
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
});

// Slider de productos  codigo.
// Con el query selector podemos entrar a cualquier elemento 
var contenedor = document.querySelector('.slider'),
    btnIzquierda = document.getElementById("btn-izquierda"),
    btnDerecha = document.getElementById("btn-derecha");

// Evento para el boton derecho
btnDerecha.addEventListener("click", function() {
    contenedor.scrollLeft += contenedor.offsetWidth;
});
btnIzquierda.addEventListener("click", function() {
    contenedor.scrollLeft -= contenedor.offsetWidth;
});

// Codigo del Formulario JS Validacion

var formulario = document.getElementById("formulario");


    function validar(e) {
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComents = document.getElementById("comentarios"),
            alertSuccess = document.getElementById("alertSuccess"),
            alertError = document.getElementById("alertError");


        if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0) {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            // Le indicamos a nuestra alerta que se quite cada 2s con un setTmeOut
            setTimeout(function() {
                alertError.classList.remove("show")
                alertError.classList.add("hide")
            },2000);
        }else{
            e.preventDefault();
            alertSuccess.classList.remove("hide")
            alertSuccess.classList.add("show");
            // Vaciamos nuestros datos de nuestros input
            setTimeout(function() {
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");
            },2000)
            inputNombre.value = "";
            inputEmail.value = "";
            inputComents.value = "";
        } 
    };



//Eventos del formulario "Submit"
formulario.addEventListener("submit",validar);


//BOTON SCROOL
var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

//Detectamos el scrool de nuestra pagina web
window.addEventListener("scroll",function() {
    // Mandamos a llamar a todo nuestro html
    var scroll = document.documentElement.scrollTop,
        // Tenemos el tamaño de nuestro html completo
        fullSize = document.documentElement.offsetHeight,
        // Tenemos el tamaño de nuestro VP o cliente
        sizeVP = document.documentElement.clientHeight;


    if (scroll > 100) {
        btnTop.classList.add("show");

    }else{
        btnTop.classList.remove("show");
    }

    // Modificar elemento cuando llegue al final de la pagina
    if (fullSize == (scroll + sizeVP)){
        btnTop.classList.add("scroollFinal");
    }else{
        btnTop.classList.remove("scroollFinal");
    }
});

//EVENTO DEL BOTON CLICK

btnTop.addEventListener("click",function(){
    // Le Indicamos a nuestra ventana que se vaya a la parte superior en x = 0 en y = 0
    window.scrollTo(0,0);
});

// DETECTAMOS EL CLICK EN EL LOGO

logo.addEventListener("click",function() {
    window.scrollTo(0,0);
});




