
function saludo() {
    alert(
      "Bienvenido a Tech Store " + nombre + " Elija que producto desea comprar"
    );
  }
 
  function compra() {
    producto = prompt(
      "elija una pc \n 1: gama baja  \n 2: gama media \n 3: gama alta"
    );
  
    if (producto === "1") {

      alert(" elegiste pc gama baja");

    } else if (producto === "2") {

      alert(" elegiste pc gama media");

    } else if (producto === "3") {

      alert(" elegiste pc gama alta");

    }
   
    opcion = prompt(
      "ingresar una opcion \n 2: precio final  \n 3: finalizar operacion"
    );
  }

  function finalizar() {
    if (producto === "1") {
      alert(
        "elegiste pc gama baja por un total de " +
          gamaBaja * 1.21
      );
    } else if (producto === "2") {
      alert(
        "elegiste pc gama media por un total de " +
          gamaMedia * 1.21
      );
    } else if (producto == "3") {
      alert(
        "elegiste pc gama alta por un total de " +
          gamaAlta * 1.21
      );
    }
  }
  
 
  let producto;
  let gamaBaja = 150000;
  let gamaMedia = 200000;
  let gamaAlta = 350000;
  let nombre = prompt("ingrese su nombre");

  saludo();
  let opcion = prompt(
    "ingrese una opcion: \n 1: comprar pc \n 2: finalizar tu compra  \n 3: terminar proceso "
  );
  
  while (opcion !== "3") {
    if (opcion === "1") {
      compra();
    }
    if (opcion === "2") {
    
      finalizar();
      opcion = "3";
    }
  }
  
  
  alert(" Muchisimas gracias por comprar en Tech Store");

  function mostarAlerta() {
    Swal.fire( 'Muchisimas Gracias!!'
    )
  }

  document.getElementById("boton_enviar").addEventListener("click",mostarAlerta);