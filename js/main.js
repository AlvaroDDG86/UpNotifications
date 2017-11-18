
var notification = new UpNotification(
    1,
    'info',
    "fa-comment-o",
    "Prueba", 
    "La explotación se ha guardado correctamente");
$(function(){
    $("#btnCrear").click(function(){
        notification.create();
    });
    $("#btnDestruir").click(function(){
        notification.remove();
    });
    $("#btnCambiar").click(function(){
        notification.setTipo("danger");
        notification.setTitulo("twitter");
        notification.setMensaje("otro mensaje diferente");
        notification.setIcono("fa-twitter");
        notification.setPosicion(4);
    });
})