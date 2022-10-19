$(document).ready(function() {
    const nome = document.getElementById("nome_pessoa")

    $( "#nome_pessoa" ).on( "change", function() {

        $.ajax({
            method: "GET",
            url: "",
            data: {
                cod_filial: nome.value
            }
        })
    });
});
