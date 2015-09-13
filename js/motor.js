function inicio() {




    $('#main').html('<br/>');

    var n = processos.length;
    var tempArr = [];
    var processosClonados = processos.slice(0);

    for (var i = 0; i < n - 1; i++) {
        tempArr.push(processosClonados.splice(Math.floor(Math.random() * processosClonados.length), 1)[0]);
    }
    tempArr.push(processosClonados[0]);


    $.each(tempArr, function (index, p) {

        $('#main').append("<div id=" + p.id + " class = 'draggable drag-drop' >" + p.nome + " </div>");
        $('#main').append('<br/>');
        //$('#'+p.id).attr('json', JSON.stringify(p));
    });

    draggable();
    dropzone();


}


function conferir() {

    var quantidadeDeErros = 0;

    _.each(mapaDeZonaPorProcessos, function (z, i) {

        _.each(z.processos, function (p, j) {

            if (p.grupo !== z.zona) {

                $('#' + p.id).append('<div class="isa_error"><br/>Deveria estar no grupo: ' + p.grupo + '</div>');
                quantidadeDeErros++;
            }

        });

    });




    $("#resultado").dialog({
        modal: true,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });

    $('#resultado').html('quantidade de processos: ' + processos.length + ' - quantidade de erros: ' + quantidadeDeErros);



}