  var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://github.com/GeraldRF/Ecommerce_EMRA-Store/tree/gh-pages/recursos/html/menuDispositivosW_500.html');
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send();
        xhr.onload = function (data) {
            document.querySelector("nav").innerHTML = data.currentTarget.response;
            //para más de una barra de navegación
            /*var navs = document.querySelectorAll("nav");
            for(var i=0; i<navs.length; i++) {
                navs[i].innerHTML = data.currentTarget.response;
            }*/
            
        };
