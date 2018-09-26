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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js">

    /**
    * Array con las imagenes que se iran mostrando en la web rrrr
    */
    var index = 0;

    var listaimg = [
        'images/fondo-1.jpg',
        'images/fondo-2.jpg',
        'images/fondo-3.jpg',
        'images/fondo-4.jpg'
    ];
 
    /**
    * Funcion para cambiar la imagen
    */
    function rotarImagenes()
    {
 
        // cambiamos la imagen
        document.getElementById("background-image1").src=listaimg[index];
		index++;
		if(index==4)
		   index=0
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
</script >
</head>
 
<body>
 
<background-image src="images/fondo-1.jpg" id="background-image1" >
 
</body>