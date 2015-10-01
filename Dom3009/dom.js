
function creartabla()
{
    //creacion de tabla
   
    var tabla = document.createElement("table");
    //aqui le damos un atributo a la tabla 
    tabla.setAttribute("border", "1");
    tabla.setAttribute("align", "center");

    for (var i=0; i<5; i++)
    {

        var fila = document.createElement("tr");
        //aki definiremos un color a una fila
        fila.setAttribute("style", "color:blue;");

        var c1 = document.createElement("td");
        var t1 = document.createTextNode("fila " + i + " col 1");
        c1.appendChild(t1);

        var c2 = document.createElement("td");
        var t2 = document.createTextNode("fila " + i + " col 2");
        c2.appendChild(t2);

        var c3 = document.createElement("td");
        var t3 = document.createTextNode("fila " + i + " col 3");
        c3.appendChild(t3);

        //aqui llamamos al atributo en html la clase
        c3.appendChild(t3);
        //
        fila.appendChild(c1);
        fila.appendChild(c2);
        fila.appendChild(c3);

        tabla.appendChild(fila);
        //creacion del borde de la tabla
        //tabla.border = "5";
//        tabla.align= "center"

    }
    document.body.appendChild(tabla);

    //aqui indicamos que no vuelva a crear mas tabla.
    var link = document.getElementById("lnk");
    link.parentNode.removeChild(link);
}
//llamamos a la funcion al dar click en lnk.
document.getElementById("lnk").onclick = creartabla;


function cambiarimagen(e) {
    var img = document.getElementById("imagen");
    //e es delegado el evento
    e.target.appendChild(img);
    
}

var capas = document.querySelectorAll("div");
for (var i = 0 ; i < capas.length; i++) {
    capas[i].onclick = cambiarimagen;
        
}