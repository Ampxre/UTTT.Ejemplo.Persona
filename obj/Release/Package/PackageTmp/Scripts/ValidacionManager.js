﻿function valid() {
    var cunica = document.getElementById("txtClaveUnica").value;
    var nombre = document.getElementById("txtNombre").value;
    var ap = document.getElementById("txtAPaterno").value;
    var am = document.getElementById("txtAMaterno").value;
    var sexo = document.getElementById("ddlSexo");
    var nhermanos = document.getElementById("txtHermanos").value;
    var fnaci = document.getElementById("val");
    var sex = sexo.options[sexo.selectedIndex].value;
    var fna = fnaci.defaultValue;
    var fecha = parseInt(("" + fna.substr(6, 10)));
    var año = 2021 - date;
    var ban = true;
    var mensaje = "";

    if (claven == null || nombre == null || ap == null || am == null || fecha == null) {
        ban = false;
        mensaje = "Datos requeridos";

    } else if (sex < 0 || sex > 2) {
        mensajes.push('Ingresa el setxo');
        ban = false;
    } else if (!(/\d{3}$/.test(cunica))) {
        mensaje = "La clave deve contener 3 dijitos";
        ban = false;

    } else if (!(/^([aA-záéíóúZÁÉÍÓÚ]{3}[a-zñáéíóú]+[\s]*)+$/.test(nombre))) {
        mensaje = "Caracteres de nombre mínimos 3 letras, maximo 15 "
            ban = false;

    } else if (!(/^([aA-záéíóúZÁÉÍÓÚ]{3}[a-zñáéíóú]+[\s]*)+$/.test(ap))) {
        mensaje = "Caracteres de Apellido Paterno mínimos 3 letras, maximo 15 "
            ban = false;

    } else if (año <= 18) {
        mensaje = "Edad mayor de 18 años";
        ban = false;

    } else if (!(/^([0-9])*$/.test(nhermanos))) {

        messaje = "Num. Hermanos solo acepta numeros enteros!!!"
        ban = false;

    }
    alert(mensaje);
    return ban;
}