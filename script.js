const evento = document.getElementById('send')
const enviarFormulario =() => {
        let producto = document.getElementById('producto').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
		let asunto = document.getElementById('asunto').value;
		let mensaje = document.getElementById('mensaje').value;
		let numero= +50259596544;
		
var win= window.open(`https://wa.me/${numero}?text=
Solicitud%20de%20Cita%20Medica%0A
Nombre%20y%20Apellido:%20${producto}%0A
Telefono:%20${phone}%0A 
Correo:%20${email}%0A 
Asunto:%20${asunto}%0A 
Detalles:%20${mensaje}%0A 
`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)