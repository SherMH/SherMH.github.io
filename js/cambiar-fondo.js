//cambiar imagen de fondo por una lista aleatoria.
//Nahuel Jose
$( function(){
    var arrImagenes = [ 'fondo-1.jpg','fondo-2.jpg', 'fondo-3.jpg', 'fondo-4.jpg' ];
    var imagenActual = 'fondo-1.jpg';
	var tiempo = 3000;
	var id_contenedor = 'grad1'
    setInterval( function(){
        do{
            var randImage = arrImagenes[Math.ceil(Math.random()*(arrImagenes.length-1))];
        }while( randImage == imagenActual )
        imagenActual = randImage;
        cambiarImagenFondo(imagenActual, id_contenedor);
    }, tiempo)
})

function cambiarImagenFondo(nuevaImagen, contenedor){
	var contenedor = $('#' + contenedor);
	//cargar imagen primero
	var tempImagen = new Image();
	$(tempImagen).load( function(){
		contenedor.css('backgroundImage', 'url('+tempImagen.src+')');
	});
	tempImagen.src = 'images/' + nuevaImagen;
}