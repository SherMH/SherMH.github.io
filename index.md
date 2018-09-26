---
title: 
keywords: 
sidebar: indicador_sidebar
toc: false
permalink: index.html
Summary:
---



<img class="img-rounded img-responsibe" src="/images/cara2.jpg" alt="" width="500" height="500">


{% include links.html %}

<head>
<script>
    /**
    * Array con las imagenes que se iran mostrando en la web
    */
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
        // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
        var index=Math.floor((Math.random()*imagenes.length));
 
        // cambiamos la imagen
        document.getElementById("imagen").src=imagenes[index];
    }
 
    /**
    * Función que se ejecuta una vez cargada la página
    */
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada 5 segundos cambie la imagen
        setInterval(rotarImagenes,5000);
    }
</script>
</head>
 
<body>
 
<img src="" id="imagen">
 
</body>