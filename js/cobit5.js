var processos = [
        {
            id : 1,
            nome : 'Reunir necessidades do StakeHolders',
            grupo : 'principios'
        },
        {
            id : 2,
            nome : 'Cobrir a empresa fim a fim',
            grupo : 'principios'
        },
        {
            id : 3,
            nome : 'Aplicar um Framework único integrado',
            grupo : 'principios'
        },
        {
            id : 4,
            nome : 'Abordagem Holística',
            grupo : 'principios'
        },
        {
            id : 5,
            nome : 'Separar governança de gestão',
            grupo : 'principios'
        }
    ];

function inicio() {
    
    
    

    $.each(processos, function(index, p){
        
        $('#main').append("<div id="+p.id+" grupo="+p.grupo+" class = 'draggable drag-drop' >"+p.nome+" </div>");    
        $('#main').append('<br/>'); 
        
    });
    
  draggable();
  dropzone();

    
}


function conferir(){

  console.log('conferindo resultado'); 
  var divPrincipios = $('#principios');
  console.log('total de elementos: '+divPrincipios[0].quantidade);
  
  
  if(+divPrincipios[0].quantidade!=5){
      alert('errooooooo');
  }else{
      alert('principios esta correto');
  }
}

