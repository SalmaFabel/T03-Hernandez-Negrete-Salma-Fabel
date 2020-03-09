const comentario=document.querySelector('#input-reason');
const agregar=document.getElementById('btn-confirm');

const lista=document.querySelector("#lista");

agregar.addEventListener("click", () => {
    const comentarioIngresado=comentario.value;
    if( comentarioIngresado.trim().length <=0)
    {
    return console.log('ingresa todods los datos');
}
    const nuevoItem=document.createElement("ion-item");
    nuevoItem.innerText='Comentario: '+comentarioIngresado;
    nuevoItem.onclick=() => {
        nuevoItem.remove();
    };
    lista.appendChild(nuevoItem);

    console.log('Comentario: '+comentarioIngresado);
});