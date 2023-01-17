        function encriptar(){
              document.getElementById("ingreso-texto").required;
            const frase = document.getElementById("ingreso-texto").value;
            const cadenaTxt = '^[a-z ,.!¡¿?_\n]+$';

             if(frase.match(cadenaTxt) !=null){
                
                    const texto = frase
                        .replaceAll(/e/g, "enter")
                        .replaceAll(/i/g, "imes")
                        .replaceAll(/a/g, "ai")
                        .replaceAll(/o/g, "ober")
                        .replaceAll(/u/g, "ufat");
                    document.getElementById("texto-caja").style.display = "none";
                    document.getElementById("imagen").style.display = "none";
                    /*document.getElementById("boton").style.display = "inline";*/
                    document.getElementById("textarea").style.display="inline"; 
                    document.getElementById("textarea").innerHTML = texto;
                    document.getElementById("ingreso-texto").value ="";
                    document.getElementById("icono").style.display="inline"; 
                    
                    
            }else{

                alert("Recuerde que no se permiten ni letras minusculas, ni acentos\nIngrese nuevamente el texto Por Favor");
                document.getElementById("ingreso-texto").value = "";
            }
        }
  
            function desencriptar(){
                
                
                const frase = document.getElementById("ingreso-texto").value;
                const cadenaTxt = '^[a-z ,.!¡¿?_\n]+$';
                
                if(frase.match(cadenaTxt) !=null){
                
                    const texto = frase
                        .replaceAll(/enter/g, "e")
                        .replaceAll(/imes/g, "i")
                        .replaceAll(/ai/g, "a")
                        .replaceAll(/ober/g, "o")
                        .replaceAll(/ufat/g, "u");
          
                document.getElementById("texto-caja").style.display = "none";
                document.getElementById("imagen").style.display = "none";
                /*document.getElementById("boton").style.display = "inline";*/
                document.getElementById("textarea").style.display="inline"; 
                document.getElementById("textarea").innerHTML = texto;
            
            }else{

                alert("Recuerde que no se permiten ni letras minusculas, ni acentos\nIngrese nuevamente el texto Por Favor");
                document.getElementById("ingreso-texto").value = "";
            }
                 
        }

          function copy(){ 
            const content = document.getElementById("textarea");
            content.select();
            document.execCommand("copy");
            alert("¡Texto copiado con exito!");
        }


    