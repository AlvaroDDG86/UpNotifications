$(function(){
    var notificacion = new UpNotification({
        titulo: 'Up Notification',
        mensaje: 'Crea notificaciones en tu aplicación web con una línea de código',
        posicion: 2,
        time:5000
    })
    notificacion.create();
    //Colores de los input
    $("#valorColorTexto").html($("#inputColorTexto").val());
    $("#inputColorTexto").change(function(){
        $("#valorColorTexto").html($(this).val());
    });
    $("#valorColor").html($("#inputColor").val());
    $("#inputColor").change(function(){
        $("#valorColor").html($(this).val());
    });
    $("#valorBackground").html($("#inputBackground").val());
    $("#inputBackground").change(function(){
        $("#valorBackground").html($(this).val());
    });
    $("#btnCrearSimple").click(function(){
        let notificacion = new UpNotification({
        })
        notificacion.create();
    })
    $("#btnCrearPersonal1").click(function(){
        let notificacion = new UpNotification({
            titulo: 'Lorem',
            mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi necessitatibus libero ea quis? Earum minima qui nostrum ullam officiis facere!'
        })
        notificacion.create();
    })
    $("#btnCrearPersonalPosicion").click(function(){
        let notificacion = new UpNotification({
            posicion: 2
        })
        notificacion.create();
    })
    $("#btnPosition1").click(function(){
        let notificacion = new UpNotification({
            posicion: 1
        })
        notificacion.create();
    })
    $("#btnPosition2").click(function(){
        let notificacion = new UpNotification({
            posicion: 2
        })
        notificacion.create();
    })
    $("#btnPosition3").click(function(){
        let notificacion = new UpNotification({
            posicion: 3
        })
        notificacion.create();
    })
    $("#btnPosition4").click(function(){
        let notificacion = new UpNotification({
            posicion: 4
        })
        notificacion.create();
    })
    $("#btnCrearPersonalIcono").click(function(){
        let notificacion = new UpNotification({
            icono: 'fa-star'
        })
        notificacion.create();
    })
    $("#btnCrearPersonalTitulo").click(function(){
        let notificacion = new UpNotification({
            titulo: 'Attention!'
        })
        notificacion.create();
    })
    $("#btnCrearPersonalMensaje").click(function(){
        let notificacion = new UpNotification({
            mensaje: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat cumque perferendis! Ipsam facere corporis quasi ab unde incidunt reprehenderit?'
        })
        notificacion.create();
    })
    $("#btnCrearPersonalColor").click(function(){
        let notificacion = new UpNotification({
            color: $("#inputColor").val()
        })
        notificacion.create();
    })
    $("#btnCrearPersonalBackground").click(function(){
        let notificacion = new UpNotification({
            background: $("#inputBackground").val()
        })
        notificacion.create();
    })
    $("#btnCrearPersonalColorTexto").click(function(){
        let notificacion = new UpNotification({
            colorTexto: $("#inputColorTexto").val()
        })
        notificacion.create();
    })
    $("#btnCrearPersonalTime").click(function(){
        let notificacion = new UpNotification({
            time: 3000
        })
        notificacion.create();
    })
    $("#btnCrearPersonalCallback").click(function(){
        let notificacion = new UpNotification({
            callback: function(){alert("Fire!");}
        })
        notificacion.create();
    })
    
});
