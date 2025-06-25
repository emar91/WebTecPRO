document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, clave })
    })
    .then(response => {
        if (!response.ok) throw new Error("Credenciales incorrectas");
        return response.json();
    })
    .then(data => {
        window.location.href = "../public/dashboardAdmin.html"; // Redirige en caso de éxito
    })
    .catch(error => {
    alert(error.message); // Ventana emergente con el mensaje de error
    });
});

