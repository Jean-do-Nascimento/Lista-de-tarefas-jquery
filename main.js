$(document).ready(function () {
    var form = $("form");
    var lista = $('#lista');


    form.on("submit", function (e) {
        (e).preventDefault();

        const NovaTarefa = $('#inputTarefa').val();

        lista.append("<li>" + NovaTarefa + "</li>");

        $("#inputTarefa").val("");
    });

    lista.on("click", "li", function () {
        $(this).toggleClass("completed");
    });

})
