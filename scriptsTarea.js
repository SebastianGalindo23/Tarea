const comentarioInput = document.getElementById("Comentario");
const charCountComentario = document.getElementById("charCountComentario");
const Nombre = document.getElementById("DatoNombre");

comentarioInput.addEventListener("input", function () {
  const maxLength = comentarioInput.getAttribute("maxlength");
  const currentLength = comentarioInput.value.length;
  const remaining = maxLength - currentLength;
  charCountComentario.textContent = `${remaining} caracteres restantes`;
});

const botonEnviar = document.getElementById("botonEnviar");
const lista = document.getElementById("lista");

botonEnviar.addEventListener("click", function () {
  if (Nombre.value !== "" && comentarioInput.value !== "") {
    const textoAgregar = comentarioInput.value;
    let nuevoelemento = document.createElement("li");

    textoNuevo = document.createTextNode(
      `Nombre: ${Nombre.value} Comentario: ${textoAgregar}`
    );

    nuevoelemento.appendChild(textoNuevo);
    document.getElementById("lista").appendChild(nuevoelemento);
    nuevoelemento.addEventListener("dblclick", function () {
      nuevoelemento.remove();
    });

    Nombre.value = "";
    comentarioInput.value = "";
    charCountComentario.textContent = `200 Caracteres restantes`;
  } else {
    alert("Por favor, rellena ambos campos.");
  }
});
