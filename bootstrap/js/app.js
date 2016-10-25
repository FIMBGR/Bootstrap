var basePath= "http://146.83.216.162:8080/";

var data = [
    ["Nombre 1", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 2", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 3", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 4", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 5", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"],
    ["Nombre 6", "Contenido de la tarjeta", "http://www.imagen.com.mx/assets/img/imagen_share.png"]
];

var ide = 0;

var addCard = function (firstName,Content, Link, id) {
    var card = 
            '<div class="col-sm-6 col-md-4" id="'+id+ '">' +  
                '<div class="thumbnail">' +
                    '<img src="'+ Link +'">' +
                        '<div class="caption">'+
                            '<h3>'+ firstName + '</h3>'+
                            '<p>'+ Content +'</p>' +
                            '<p><a class="delete" href="#"><button class="btn btn-primary" type="button" id="delete">Borrar</button></a> '+
                            '<a class="edit" href="#"> <button class="btn btn-default" type="button" id="edit">Editar</button></a></p>'+
                        '</div>' + 
                    '</div>'+
                '</div>'+
            '</div>';


            $('#wrapper').append(card);
    
};

var reset = function () {
    $("#wrapper").html("");
    for (var i = 0; i < data.length; i++) {
            addCard(data[i][0],data[i][1],data[i][2],i);
        }

        $(".delete").click(function () {
            var id = $(this).parent().parent().attr("id");
            $(this).parent().parent().remove();
            data.splice(id,1);
            reset();
        });

        $(".edit").click(function () {
            var id = $(this).parent().parent().parent().parent().attr("id");
            alert(id);
            editCard(id,data[id][0],data[id][1],data[id][2]);

        });

        //alert(data);
    
};

var editCard = function (id,Name,Content,Link) {
  var ventana = '<div class="ventana_flotante">'+
                            '<div class="container">'+
                             '<div class="form-group">'+
                                '<label for="name">Nombre:</label>'+
                                '<input value="'+ Name+'" type="text" class="form-control"id="name">'+  
                            '</div>'+
                            '<div class="form-group">'+
                                '<label for="content">Contenido:</label>'+
                                '<input value="'+ Content +'" type="text" class="form-control" id="content">'+  
                            '</div>'+
                            '<div class="form-group">'+
                                '<label for="img">Link:</label>'+
                                '<input value="'+ Link+'" type="text" class="form-control" id="img">'+  
                            '</div>'+

                            '<p><a class="save-btn" href="#"> <button class="btn btn-default" type="button" id="edit">Guardar</button></a></p>'+

                        '</div>';
            $('#wrapper').append(ventana);

            $(".save-btn").click(function () {
                var name = $("#name").val();
                var content = $("#content").val();
                var link = $("#img").val();
                saveCard(id,name,content,link);

        });

    
};

var saveCard = function (id,Name, Content,Link) {
    data[id][0] = Name;
    data[id][1] = Content;
    data[id][2] = Link;
    reset();

}

$(document).ready(function (){
    
    //$('.modal-trigger').leanModal();

   

    $("#show-btn").click(function () {
        reset();
    });

    $("#clean-btn").click(function () {
        
        $("#wrapper").html("");
        //data.splice(0,data.length);
    })

    $("#add-btn").click(function () {
        var id = data.length + 1;
        data.push(["Nombre ", "Contenido de la carta","http://www.imagen.com.mx/assets/img/imagen_share.png"]);
        addCard(data[data.length-1][0],data[data.length-1][1],data[data.length-1][2]);
    })


    

    

});