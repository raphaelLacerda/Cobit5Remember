
var queryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();


function inicio(){
    
    loadScript('processos/'+queryString.processo+'.js', function(resultado){
       console.log('arquivo carregado');
    });
    mapearProcessos();
}


var loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: false
    });
}


function mapearProcessos() {




    $('#main').html('<br/>');

    var n = processos.length;
    var processosTemp = [];
    var processosClonados = processos.slice(0);
    var indicesJaAdicionados = [];
    var totalGrupos = grupos.length;
    
    

    
    var i = 0;
    _.each(processos, function(p){
       p.id = ++i;
    });

    //embaralhando os processos
    for (var i = 0; i < n - 1; i++) {
        processosTemp.push(processosClonados.splice(Math.floor(Math.random() * processosClonados.length), 1)[0]);
    }
    processosTemp.push(processosClonados[0]);


    imprimirGrupos(indicesJaAdicionados, itensAcima);
    
    
    $.each(processosTemp, function (index, p) {

        $('#main').append("<div id=" + p.id + " class = 'draggable drag-drop' >" + p.nome + " </div>");
        // $('#'+p.id).attr('json', JSON.stringify(p));
    });
    
    imprimirGrupos(indicesJaAdicionados);
    
    
    draggable();
    dropzone();
    $( document ).tooltip();


}

function imprimirGrupos(indicesJaAdicionados, maximo){
	
	console.log("INICIO ----- QUantidade de itens ja adicionados: "+indicesJaAdicionados.length);
	var total = 0;
	$('#main').append("<br/>");
	
    $.each(grupos, function (index, grupo) {

    	if(!_.contains(indicesJaAdicionados,index)){
    		
    		
    		$('#main').append("<div class='col-4-12'><div id=" + grupo.nome + " class = 'dropzone' >" + grupo.nome + " </div></div>");
    		indicesJaAdicionados.push(index);
    		total++;
    		
    		if(total === maximo){

    			return false;;
    		}
    	}
    	console.log(index + " - "+ grupo.nome);
	});
    console.log("FIM ----- QUantidade de itens ja adicionados: "+indicesJaAdicionados.length);
}


function conferirResultado() {

    var quantidadeDeErros = 0;
    
    _.each(processos, function (p, i){
       
         $('#' + p.id).removeAttr('title');
        
    });

    _.each(mapaDeZonaPorProcessos, function (z, i) {

        _.each(z.processos, function (p, j) {
            
            if (p.grupo !== z.zona) {

                $('#' + p.id).attr('title', 'Deveria estar no grupo: '+p.grupo);
                quantidadeDeErros++;
                $('#' + p.id).removeClass('can-drop');
                $('#' + p.id).addClass('error');
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