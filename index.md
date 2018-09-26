---
title: 
keywords: 
sidebar: indicador_sidebar
toc: false
permalink: index.html
Summary:
---


<head>
<script>
    /**
    * Array con las imagenes que se iran mostrando en la web
    */
	var index=0
    var imagenes=new Array(
        'images/fondo-1.jpg',
        'images/fondo-2.jpg',
        'images/fondo-3.jpg',
        'images/fondo-4.jpg'
    );
 
    /**
    * Funcion para cambiar la imagen
    */
    function rotarImagenes()
    {
	  
       document.getElementById("rotar").src=(' + imagenes[index] + ');              
           index++;
           if(index == 4)
      index = 0;
    }
 
    /**
    * Función que se ejecuta una vez cargada la página
    */
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada  segundos cambie la imagen
        setInterval(rotarImagenes,1000);
    }
</script>
</head>
 
<body>
 
<background-image src="" id="rotar">
 <h1>hola si 3</h1>
</body>