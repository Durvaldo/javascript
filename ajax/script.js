$(document).ready(function() {
    const nome = document.getElementById("nome_pessoa")

    $( "#nome_pessoa" ).on( "change", function() {

        $.ajax({
            method: "GET",
            url: "https://containerseguranca.w3corp.com.br/inc/mod_containerseguranca/ajax_parceiros_list.php",
            data: {
                cod_filial: nome.value
            },
            headers: {
                Accept: {application.json, javascript}
            }
        })
    });
});
