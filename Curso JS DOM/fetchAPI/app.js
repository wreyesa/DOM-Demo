async function cargarUsuarios() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
  
    usuarios.forEach(usuario => {
      const li = document.createElement('li');
      li.textContent = `name: ${usuario.name}, email: ${usuario.email}, username: ${usuario.username}`;
      document.body.appendChild(li);
    });
  }
  
cargarUsuarios();
  