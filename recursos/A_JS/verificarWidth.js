function verificar(){
       var xhr = new XMLHttpRequest(); 
       var menu="";
       
       if(screen.width<500) {
       
       menu="https://geraldrf.github.io/Ecommerce_EMRA-Store/recursos/A_HTML/menuMobiles.html";
       
       }else{
       
       menu="https://geraldrf.github.io/Ecommerce_EMRA-Store/recursos/A_HTML/menuPC.html";
      
       } 
       
       xhr.open(menu);
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send();
        xhr.onload = function (data) {
            document.querySelector("nav").innerHTML = data.currentTarget.response;
        }
    }//Fin verificar
