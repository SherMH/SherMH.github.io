---
title: 
keywords: 
sidebar: indicador_sidebar
toc: false
permalink: index.html
Summary:
---

<head>
     
<style>
     /**
     * Creando un background en una seccion del cuerpo
     */
#grad1 {
    height: 200px;
    width: 400px;
    background-image: url(images/fondo-1.jpg);
}

<script>
     /**
     * Array con las imagenes que se iran mostrando en la web
     */
	
     var imagenes1=new Array(
        'images/fondo-1.jpg',
        'images/fondo-2.jpg',
        'images/fondo-3.jpg',
        'images/fondo-4.jpg'
        );
      var conteo1=0
     /**
     * Funcion para cambiar la imagen
     */
     function rotarImagenes()
     {	  
		  $('grad1').css("background-image", url(imagenes1[conteo]);
		  if(conteo1<imagenes1.length-1)
           {conteo1 ++}
		   else
		   {conteo1=0}
           
     }
 
     /**
     * Función que se ejecuta una vez cargada la página
     */
     onload=function()
     {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada  segundos cambie la imagen
        setInterval(rotarImagenes,3000);
     }
    </script>

</style>

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
      var conteo=0
     /**
     * Funcion para cambiar la imagen
     */
     function rotarImagenes()
     {	  
		  document.getElementById("imagen").src=imagenes[conteo];
		  if(conteo<imagenes.length-1)
           {conteo ++}
		   else
		   {conteo=0}
           
     }
 
     /**
     * Función que se ejecuta una vez cargada la página
     */
     onload=function()
     {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada  segundos cambie la imagen
        setInterval(rotarImagenes,3000);
     }
    </script>
	</head>


<body>
 
<img src="" id="imagen">

<div id="grad1" style="background-image:url(/images/fondo-4.jpg);" ></div>
 
</body>





