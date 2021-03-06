console.log("Cargada la libreria");
let $body = $("body");

/**
 * Crear un Up Notification
 * @param {*} params 
 */
function UpNotification(params){
    //Comprobar si existe la notificación, solo se permite una.
    //if ($("#notification").length === 1) return;


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
    this.setPosicion(params.posicion);

    //Icono mediante font-awesome y su nodo
    let _icono = "";
    this.setIcono = function(icono){
        if(typeof $icon !== 'undefined'){
            $icon.removeClass(function (index, className) {
                return (className.match (/(^|\s)fa-\S+/g) || []).join(' ');
            });
        }
        _icono = "fa-2x "+ (icono || "fa-bell-o");
        if(typeof $icon !== 'undefined') $icon.addClass(_icono);
    }
    this.setIcono(params.icono);
    var $icon = $("<i></i>").addClass("fa " + _icono);
    $icon.css("padding","10px");

    //Título de la notificación
    let $titulo = $("<h3></h3>");
    let _titulo = "";
    this.setTitulo = function(titulo){
        _titulo = titulo || "Title";
        $titulo.text(_titulo);
        $titulo.append($icon);
    }
    this.setTitulo(params.titulo);
    

    //Texto de la notificación y su nodo
    let $mensaje = $("<p></p>");
    let _mensaje = "";
    this.setMensaje = function(mensaje){
        _mensaje = mensaje || "Some text for UpNotification";
        $mensaje.text(_mensaje);
    }
    this.setMensaje(params.mensaje);
    

    //Creración del nodo notificacion con las clases
    var $content = $("<div></div>").append($titulo, $mensaje);
    $content.addClass('up-notification');
    $content.addClass(_classPosition);
    //$content.attr("id","notification");

    //Poner el color al icono y al borde
    let _color = '';
    this.setColor = function(color){
        _color = color || '#39b2d6';
        if(typeof $icon !== 'undefined') $icon.css('color', _color);
        if(typeof $content !== 'undefined') $content.css('border', 'solid 4px ' + _color);
    }
    this.setColor(params.color);
    
    //Poner el color del fondo
    let _background = '';
    this.setBackground = function(background){
        let red = 0;
        let green = 0;
        let blue = 0;
        if (background){
            red = parseInt(background.slice(1,3),16);
            green = parseInt(background.slice(3,5),16);
            blue = parseInt(background.slice(5,7),16);
        }
        if(typeof $content !== 'undefined') $content.css('background-color',  'rgba(' + red + ',' + green + ',' + blue + ',0.8)');
    }
    this.setBackground(params.background);

    //Poner el color del texto
    let _colorTexto = '';
    this.setColorTexto = function(colorTexto){
        _colorTexto = colorTexto || '#FFFFFF';
        if(typeof $mensaje !== 'undefined') $mensaje.css('color', _colorTexto);
        if(typeof $titulo !== 'undefined') $titulo.css('color', _colorTexto);
    }
    this.setColorTexto(params.colorTexto);

    //Tiempo que discurre hasta que desaparece la notificación
    let _time = undefined;
    this.setTime = function(time){
        _time = time;
    }
    this.setTime(params.time);

    //Ejecutar la función callback
    let _callback = undefined;
    this.setCallback = function(callback){
        _callback = callback;
    }
    this.setCallback(params.callback)

    //Destruir la notificación cuando recibe un click
    $content.on("click", function(){
        this.remove();
    }.bind(this));

    //crear la notificación con el tiempo para que desaparezca
    this.create = function(){
        $content.removeClass(function (index, className) {
            return (className.match (/(^|\s)bounceOut\S+/g) || []).join(' ');
        });
        $("body").append($content);
        let classPosition = $content[0].className.split(' ')[1];
        switch(classPosition){
            case "posTopRigth":
                $content.css("right", parseInt($content.css("right")) + ($("body").find(".posTopRigth").length*20) + "px");
            break;
            case "posTopLeft":
                $content.css("left", parseInt($content.css("left")) + ($("body").find(".posTopLeft").length*20) + "px");
            break;
            case "posBottomRigth":
                $content.css("right", parseInt($content.css("right")) + ($("body").find(".posBottomRigth").length*20) + "px");
            break;
            case "posBottomLeft":
                $content.css("left", parseInt($content.css("left")) + ($("body").find(".posBottomLeft").length*20) + "px");
            break;
        }
        if (typeof _time !== 'undefined'){
            setTimeout(function(){
                this.remove();
            }.bind(this),_time);
        }
    }

    this.remove = function(){
        switch(_position){
            case 1: 
            case 2:
                $content.addClass('bounceOutUp');
            break;
            case 3:
            case 4:
                $content.addClass('bounceOutDown');
            break;
        }
        {_callback && _callback();}
    }
}