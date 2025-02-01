let img = document.getElementById('card-img')
let nombre = document.getElementById('card-name')
let boton = document.getElementById('btn')
let genero = document.getElementById('genero-card')
let email = document.getElementById('email-card')
let celular = document.getElementById('cell-card')


async function cambiarUsuarioAsync() {
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const data = await response.json();

    img.innerHTML = `<img src='${data.results[0].picture.large}'></img>`
    nombre.innerHTML = `<h1>${data.results[0].name.first + ' ' + data.results[0].name.last}</h1>`
    email.innerHTML = `<h3>${data.results[0].email}</h3>`
    celular.innerHTML = `<h2>${data.results[0].phone}</h2>`
    genero.innerHTML = `<h3>${data.results[0].gender}</h3>`

}

boton.addEventListener('click', cambiarUsuarioAsync)

// boton.addEventListener('click', cambiarUsuario)