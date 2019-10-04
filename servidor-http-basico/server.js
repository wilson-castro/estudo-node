
var exibeMensagem = (function() {
    if(true) { 
        var escopoFuncao = 'Caelum'; 
        let escopoBloco = 'Alura';
        const escopBlocoInalteravel = 'Alura const'
       console.log(escopoBloco); // Alura 
   } 
   console.log(escopoFuncao); // Caelum 
   console.log(escopoBloco);
   console.log(escopBlocoInalteravel)
})()

