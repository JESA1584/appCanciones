function abrir(){
    $("#ventana").modal("show");
}

function cargar(){
    var salida="";
    var xhttp= new XMLHttpRequest();
    var texto=document.getElementById("texto");
    var contenedor=document.getElementById("contenedor");
    xhttp.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200){
            var respuesta = JSON.parse(xhttp.responseText);
            console.log(respuesta)
            contenedor.innerHTML="";
            var canciones = respuesta.canciones;
        if (texto.value==""){
            for(var i=0; i<canciones.length; i++)
                salida +=`
                <div class="col border border-secundary rounded text-center mt-3">
                    <img src="./imagenes/icon_${canciones[i].icono}.svg"" alt="" width="50px" height="50px">
                    <div class="card-body">
                        <h5 class="card-title">${canciones[i].nombre}</h5>
                        <audio src="${canciones[i].ruta} "class="shadow p-2 bg-white rounded-pill" controls preload="auto "></audio>
                    </div>    
                </div>
                `;

        }else{
            for(var i=0; i<canciones.length; i++){
                if ( canciones[i].nombre.indexOf(texto.value)!= -1){
                    salida+= `
                    <div class="col border border-secundary rounded text-center mt-3">
                        <img src="./imagenes/icon_${canciones[i].icono}.svg" alt="" width="50px" height="50px">
                        <div class="card-body">
                            <h5 class="card-title">${canciones[i].nombre}</h5>
                            <audio src="${canciones[i].ruta}"class="shadow p-2 bg-white rounded-pill" controls preload="auto"></audio>
                        </div>    
                    </div>
                    `
                }
            }
        }
        document.getElementById('contenedor').innerHTML=salida;    
        }
    };
    xhttp.open("GET","datos.json",true);
    xhttp.send();
}
cargar();

function validar(formulario){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.correo.value)) {
     alert("Email inválido");
     return false;
    }
    if (formulario.contrasena.value.trim().length < 8) {
        alert("contraseña debe tener mas de 8 caracteres");
        return false;
    }    
    
}

