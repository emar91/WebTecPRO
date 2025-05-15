
const evento = document.getElementById('send')
const enviarFormulario =() => {
        let producto = document.getElementById('producto').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
		    let asunto = document.getElementById('asunto').value;
		    let mensaje = document.getElementById('mensaje').value;
		
        let numero= +50259596544;
var win= window.open(`https://wa.me/${numero}?text=Hola%20%0Ami%20%0Anombre%20es%20${producto}
%20${phone}, %0A Asunto:%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)

$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#producto').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#producto').css("border-bottom-color", "#F14B4B")
        } else{
            $('#producto').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
