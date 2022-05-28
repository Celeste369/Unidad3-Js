let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let usuario = document.querySelector('#usuario');
    let clave = document.querySelector('#clave');

    if (usuario.value == ''){
        alert('El nombre de usuario es obligatorio');
    } else if (clave.value == ''){
        alert('Ingrese su clave');
    }else if (usuario.value.includes('@') == false){
        alert('Falta el arroba en el usuario');
    }else {
        form.submit();
    }
})