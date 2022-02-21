const divUrl = [
    document.getElementById("primer-div"),
    document.getElementById("segundo-div"),
    document.getElementById("tercer-div"),
    document.getElementById("cuarto-div"),
]

let indiceDivActual = 0
const btnRetroceder = document.getElementById( "retroceder" ) 
const btnAvanzar = document.getElementById( "avanzar" )
const div = document.getElementById( "div-carrusel" )

document.addEventListener( "DOMContentLoaded", (e) => cargarDiv(e) )
btnAvanzar.addEventListener( "click", (e) => mostrarSiguiente(e) )
btnRetroceder.addEventListener( "click", (e) => mostrarAnterior(e) )

function cargarDiv(){
    div.style.position = static
}

function mostrarSiguiente(e){
    if( indiceDivActual >= (divUrl.length - 1) ){
        indiceDivActual = 0
    }else{
        indiceDivActual++
    }

    cargarImagen()
    e.stopPropagation()
}

function mostrarAnterior(e) {
    if( indiceDivActual <= 0 ){
        indiceDivActual = divUrl.length - 1
    }else{
        indiceDivActual--
    }

    cargarImagen()

    e.stopPropagation()
}




/* 
const imgUrl = [
    "https://picsum.photos/id/237/600/300",
    "https://picsum.photos/id/200/600/300",
    "https://picsum.photos/id/500/600/300",
    "https://picsum.photos/id/700/600/300",
    "https://picsum.photos/id/213/600/300"
]

let indiceImgActual = 0
const btnRetroceder = document.getElementById( "retroceder" ) 
const btnAvanzar = document.getElementById( "avanzar" )
const img = document.getElementById( "img-carrusel" )

document.addEventListener( "DOMContentLoaded", (e) => cargarImagen(e) )
btnAvanzar.addEventListener( "click", (e) => mostrarSiguiente(e) )
btnRetroceder.addEventListener( "click", (e) => mostrarAnterior(e) )

function cargarImagen() {
    //background-image -> backgroundImage
    img.style.backgroundImage = `url(${imgUrl[indiceImgActual]})`
}

function mostrarSiguiente(e){
    if( indiceImgActual >= (imgUrl.length - 1) ){
        indiceImgActual = 0
    }else{
        indiceImgActual++
    }

    cargarImagen()
    e.stopPropagation()
}

function mostrarAnterior(e) {
    if( indiceImgActual <= 0 ){
        indiceImgActual = imgUrl.length - 1
    }else{
        indiceImgActual--
    }

    cargarImagen()

    e.stopPropagation()
} */