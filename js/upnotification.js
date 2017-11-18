console.log("Cargada la libreria");
let $body = $("body");

function UpNotification(posicion, tipo, icono, titulo, mensaje, time){
    //Comprobar si existe la notificación, solo se permite una.
    if ($("#notification").length === 1) return;


    //Posición de la notificación
    let _position = 1;
    let _classPosition = "";
    this.setPosicion = function(posicion){
        _position = posicion || 1;
        switch(_position){
            case 1:
                _classPosition = "posTopLeft bounceInLeft";
            break;
            case 2:
                _classPosition = "posTopRigth bounceInRight";
            break;
            case 3:
                _classPosition = "posBottomLeft bounceInLeft";
            break;
            case 4:
                _classPosition = "posBottomRigth bounceInRight";
            break;
        }
        if(typeof $content !== 'undefined'){
            $content.removeClass(function (index, className) {
                return (className.match (/(^|\s)pos\S+/g) || []).join(' ');
            });
        }
        if(typeof $content !== 'undefined'){
            $content.removeClass(function (index, className) {
                return (className.match (/(^|\s)bounce\S+/g) || []).join(' ');
            });
        }
        if(typeof $content !== 'undefined') $content.addClass(_classPosition);
    }
    this.setPosicion(posicion);
    

    //Tipo de notificación (danger, info, success)
    let _tipoUp = "";
    let _tipoFa = "";
    this.setTipo = function(tipo){
        if(typeof $content !== 'undefined'){
            $content.removeClass(function (index, className) {
                return (className.match (/(^|\s)upTipo-\S+/g) || []).join(' ');
            });
        }
        _tipoUp = "upTipo-" + (tipo || "info");
        if(typeof $content !== 'undefined') $content.addClass(_tipoUp);


        if(typeof $icon !== 'undefined'){
            $icon.removeClass(function (index, className) {
                return (className.match (/(^|\s)faColor-\S+/g) || []).join(' ');
            });
        }
        _tipoFa = "faColor-" + (tipo || "info");
        if(typeof $icon !== 'undefined') $icon.addClass(_tipoFa);
    }
    this.setTipo(tipo);

    //Icono mediante font-awesome y su nodo
    let _icono = "";
    this.setIcono = function(icono){
        if(typeof $icon !== 'undefined'){
            $icon.removeClass(function (index, className) {
                return (className.match (/(^|\s)fa-\S+/g) || []).join(' ');
            });
        }
        _icono = "fa-2x "+ (icono || "");
        if(typeof $icon !== 'undefined') $icon.addClass(_icono);
    }
    this.setIcono(icono);
    var $icon = $("<i></i>").addClass("fa " + _icono);
    $icon.addClass(_tipoFa);

    //Título de la notificación
    let $titulo = $("<h3></h3>");
    let _titulo = "";
    this.setTitulo = function(titulo){
        _titulo = titulo || "Título";
        $titulo.text(_titulo);
        $titulo.append($icon);
    }
    this.setTitulo(titulo);
    

    //Texto de la notificación y su nodo
    let $mensaje = $("<p></p>");
    let _mensaje = "";
    this.setMensaje = function(mensaje){
        _mensaje = mensaje || "texto de la notificación";
        $mensaje.text(_mensaje);
    }
    this.setMensaje(mensaje);
    

    //Creración del nodo notificacion con las clases
    var $content = $("<div></div>").append($titulo, $mensaje);
    $content.addClass('up-notification');
    $content.addClass(_classPosition);
    $content.addClass(_tipoUp);
    $content.attr("id","notification");

    //Destruir la notificación cuando recibe un click
    $content.on("click", function(){
        this.remove();
    })
    
    //Tiempo que discurre hasta que desaparece la notificación
    let _time = undefined;
    this.setTime = function(time){
        _time = time;
    }
    this.setTime(time);

    //crear la notificación con el tiempo para que desaparezca
    this.create = function(){
        $body.append($content);
        if (typeof _time !== 'undefined'){
            setTimeout(function(){
                this.remove();
            }.bind(this),_time);
        }
    }

    this.remove = function(){
        $content.remove();
    }
}