
var notification = new UpNotification({
    time:3000
});
var notification2 = new UpNotification({
    time:3000,
    posicion: 3
});
$(function(){
    $("#btnCrear").click(function(){
        notification.create();
        notification2.create();
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
        notification.setBackground('blue');
        notification.setColorTexto('pink');
    });
})