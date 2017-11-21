
var notification = new UpNotification({
    time:3000,
    color: '#000000'
});
$(function(){
    $("#btnCrear").click(function(){
        notification.create();
    });
    $("#btnDestruir").click(function(){
        notification.remove();
    });
    $("#btnCambiar").click(function(){
        notification.setTitulo("twitter");
        notification.setMensaje("otro mensaje diferente");
        notification.setIcono("fa-twitter");
        notification.setPosicion(2);
        notification.setColor('red');
        notification.setColorTexto('pink');
    });
})