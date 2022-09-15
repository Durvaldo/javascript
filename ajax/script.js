$(document).ready(function() {
    const nome = document.getElementById("nome_pessoa")

    $( "#nome_pessoa" ).on( "change", function() {

        $.ajax({
            method: "GET",
            url: "http://127.0.0.1:5500/ajax/post.html",
            data: {nome: nome.value}
        }).done(function( msg ) {
            alert( "Data Saved: " + msg );
            });
    });
});
