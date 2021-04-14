function redirec(cual){
    var url="";
  
  if(cual=="sesion"){
      url="https://geraldrf.github.io/Ecommerce_EMRA-Store/recursos/A_PHP/LogIn.php";
  } else if(cual=="inicio"){
     url="https://geraldrf.github.io/Ecommerce_EMRA-Store/";
  
    }else if(cual=="nuevo"){
      url="https://geraldrf.github.io/Ecommerce_EMRA-Store/recursos/A_HTML/Registrarse.html";
   
    }else if(cual=="destacado"){
        url="";
  
   }else if(cual=="carrito"){
        url="";
    }
    
    window.location=url;
}//Fin function
