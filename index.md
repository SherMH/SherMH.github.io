---
title: 
keywords: 
sidebar: indicador_sidebar
toc: false
permalink: index.html
Summary:
---



<img class="img-rounded img-responsibe" src="/images/cara2.jpg" alt="" width="500" height="500">

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
 
<background-imagen src="" id="rotar">
 <hi>hola si</h1>
</body>