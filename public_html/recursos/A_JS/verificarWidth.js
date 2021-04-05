function verificar(){
       var xhr = new XMLHttpRequest(); 
       var menu="";
       
       if(screen.width<500) {
       
       menu="https://grfixurdivice.000webhostapp.com/recursos/A_HTML/menuDispositivosW<500.html";
       
       }else{
       
       menu="https://grfixurdivice.000webhostapp.com/recursos/A_HTML/menuDispositivosW>500.html"
      
       } 
       
       xhr.open('POST', menu);
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send();
        xhr.onload = function (data) {
            document.querySelector("nav").innerHTML = data.currentTarget.response;
        }
    }//Fin verificar