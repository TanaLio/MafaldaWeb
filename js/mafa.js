function agregarMafalda() {
var img = document.getElementById ("m");
img.style.display = "block";
document.body.style.background="no repeat left 80% url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0m72upDFPozsJ_uomhjOpVvK_uR37QdNA8g&s)";
}
function agregarQuino() {
var img = document.getElementById ("2");
img.style.display = "block";
document.body.style.background= "no repeat left 80% url (https://www.guaymallen.gob.ar/wp-content/uploads/2021/07/Quino-6-1.jpg)";
}
function cargarParrafo() {
    var parrafo = document.getElementById('q');
    parrafo.innerHTML = "Joaquín Salvador Lavado Tejón,conocido bajo el seudónimo de Quino (Mendoza, 17 de julio de 1932-Mendoza, 30 de septiembre de 2020),fue un humorista gráfico e historietista argentino nacionalizado español. Su obra más conocida fue la tira cómica Mafalda, publicada entre 1964 y 1973.";
    parrafo.style.backgroundColor = "rgb(5, 133, 138)";
    parrafo.style.color = "#fa9644";
    console.log(parrafo);
  }
  