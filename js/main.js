// ===== DATOS DE JUEGOS =====
var juegos = [
  {
    titulo: "Cuidador de la Granja",
    src: "https://view.genially.com/69e64b851821a59de159927d"
  },
  {
    titulo: "Rompecabezas",
    src: "https://view.genially.com/69e62c07c1f91eecc2830f02"
  },
  {
    titulo: "Desafiandote a ti mismo",
    src: "https://view.genially.com/69e692482f87e71de10bdc0b"
  },

   {
    titulo: "el cuarto juego",
    src: "https://view.genially.com/69e692482f87e71de10bdc0b"
  },

  {
    titulo: "Actividad de arrastre",
    src: "https://daniell581.github.io/actividad-arrastre/"
  },
   {
    titulo: "Seleccionar la respuesta",
    src: "https://daniell581.github.io/actividades-Seleccionar/"
  },

  {
    titulo: "Completar ",
    src: "https://daniell581.github.io/actividades-completar/"
  }

  ,

  {
    titulo: "Completar la frase",
    src: "https://daniell581.github.io/actividad-completar-frase/"
  }
];


// ===== MODAL DE JUEGOS =====
function abrirJuego(index) {
  var juego = juegos[index];
  if (!juego) return;
  document.getElementById('juegoTitulo').textContent = juego.titulo;
  document.getElementById('juegoIframe').src = juego.src;
  var modal = document.getElementById('juegoModal');
  modal.classList.add('activo');
  document.body.style.overflow = 'hidden';
}

function cerrarJuego(event) {
  // Si se hace clic en el fondo oscuro (no en el contenido), cerrar
  if (event && event.target !== document.getElementById('juegoModal')) return;
  var modal = document.getElementById('juegoModal');
  modal.classList.remove('activo');
  document.getElementById('juegoIframe').src = '';
  document.body.style.overflow = '';
}



function cargarPagina(pagina) {
  //alert(pagina);
  fetch('pages/' + pagina)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar la página');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('contenido').innerHTML = data;
      localStorage.setItem("paginaActual", pagina);
    })
    .catch(error => {
      document.getElementById('contenido').innerHTML =
        "<p>Error cargando el contenido</p>";
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", function () {

    const paginaGuardada = localStorage.getItem("paginaActual");
    //alert(paginaGuardada);
    if (paginaGuardada) {
        cargarPagina(paginaGuardada);
    } else {
        cargarPagina("inicio.html"); 
    }

});

$(document).ready(function () {
    const year = new Date().getFullYear();
    $('#year').text(year);
});
