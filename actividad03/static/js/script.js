const imagen = document.getElementById('imagen');
const boton = document.getElementById('botonMensaje');
const titulo_id = document.getElementById('saludo');
const titulo_name = document.getElementsByName('titulo');
const titulo_h2 = document.getElementsByTagName('h2');

boton.addEventListener('mousehover', function() {
    imagen.src = 'static/images/omnienojado.jpg';
    imagen.alt = 'waos';
});

boton.addEventListener('click', function() {
    imagen.src = 'static/images/omnichad.webp';
    imagen.alt = 'omniman';
    titulo_id.textContent = 'click';
    titulo_name[0].textContent = 'click';
    titulo_h2[0].textContent = 'click';
    titulo_h2[1].textContent = 'click';
});

boton.addEventListener('mousedown', function() {
    imagen.src = 'static/images/omniperro.jpg';
    imagen.alt = 'omni perro';
});

boton.addEventListener('mouseup', function() {
    imagen.src = 'static/images/omnichad.webp';
    imagen.alt = 'waos';
});