function agregarMafalda() {
    document.getElementById("m").style.display = "block";
    document.body.style.backgroundImage ="url('https://www.semana.com/resizer/v2/WJ7D4ZTDNVBORE6NVJFAUZTGUU.jpg?auth=a9fb4128875cf7a287adea6228cc214e74c86ac469e566086255c13c89883153&smart=true&quality=75&width=1280&height=720')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "left 80%";
    console.log("Imagen de Mafalda añadida.");
}

function agregarQuino() {
    document.getElementById("autor").style.display = "block";
    document.body.style.backgroundImage ="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnKdAFLZlWC_DEQ6nuBgIFAsJ1WmFU6b3a-Q&s')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "left 80%";
    console.log("Imagen de Quino añadida.");
}

function cargarParrafo() {
    var parrafo = document.getElementById('q');
    parrafo.innerHTML = `
        Joaquín Salvador Lavado Tejón, conocido bajo el seudónimo de Quino 
        (Mendoza, 17 de julio de 1932-Mendoza, 30 de septiembre de 2020), 
        fue un humorista gráfico e historietista argentino nacionalizado español. 
        Su obra más conocida fue la tira cómica Mafalda, publicada entre 1964 y 1973.
    `;
    parrafo.style.backgroundColor = "rgb(5, 133, 138)";
    parrafo.style.color = "black";
    console.log("Párrafo agregado.");
}
function agregarBurocracia() {
    document.getElementById().style.display = "block";
    document.body.style.backgroundImage ="url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwzE_RWdcZIAYWRy1_1N_QSbThYmZlps08-lKCj3P-9GLWJXUY4HEWVCiqPvRu0mI6QjUttX-qxhAdGwOI01BGMq5JuH5gafZoz6VY03-J12nbEkMkm_pVThRMouVZQGkIfO8omfoUUoo/s640/Mafaldatiratortuga.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "left 80%";
    console.log("Imagen de Burocracia añadida");
}
  function mouseOver() {
    document.getElementById("titulo-uno").style.color = "rgb(104, 5, 104)";
  }
  
  function mouseOut() {
    document.getElementById("titulo-uno").style.color = "rgb(5, 89, 92)";
  }

  