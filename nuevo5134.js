

let miArrayUnion = [];
let miArraySel = [];
let miArray = [];
let miGusto = [];
let miArrayFormato = [];
let miCantidad = [];
let aa = "";
let numb = [];
let miArrayNum = [];
let miArrGustos = [];
let miArraySabor = [];
let miSeleccion = [];
let miGustoSabor = [];
let i = 1;
let H = 0;

//
   const numbers = document.querySelectorAll('.checkbox-container1 input[type="number"]');
    const checkboxes = document.querySelectorAll('.checkbox-container1 input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
    console.log(checkbox.name);
    

    // Selecciona el input number hermano del checkbox dentro del mismo contenedor
    const numberInput = checkbox.closest('.checkbox-container1').querySelector('input[type="number"]');
    if (numberInput) {
        numberInput.addEventListener('change', () => {
            console.log(numberInput.value);
            miArrayNum.push(
                numberInput.name
             
            );
            console.log("miArrayNer0o=", miArrayNum);
            miCantidad.push(numberInput.name, numberInput.value); // Add the value to miCantidad
            console.log("mi Array mi Cantidad", miCantidad);
            

            let longit = miCantidad.length;
            console.log("logitud del array mi cantidad=", longit);
            for (let h = 0; h <= miCantidad.length; h++) {
                console.log("contador=", h);
            }
            miArrayFormato.push(numberInput.name);
            miGusto.push(numberInput.name);
            console.log(" mi ArrayFormato", miArrayFormato);
            console.log(" mi Array Gusto", miGusto);
            console.log('miArrayFormato:', miArrayFormato);
        });
        
        
               
    }
}
                
);
        //
        
 
/*function selecGustos() {
    console.log(" estoy en gustos", miArrayFormato)
    let log = miArrayFormato.length
    for (let r = 0; r < log; r++) {
        // Loop body can 
        let tipo = miArrayFormato[r]
        alert(" Elije el Gusto para el ", tipo)
    }
}*/
        
    
    const gustos = document.querySelectorAll('.sabor input[type="number"]');
    const saborCheckboxes = document.querySelectorAll('.sabor input[type="checkbox"]');
saborCheckboxes.forEach((checkbox) => {
    console.log(checkbox.name);
    // Selecciona el input number hermano del checkbox dentro del mismo contenedor
    const numberInput = checkbox.closest('.sabor').querySelector('input[type="number"]');
    if (numberInput) {
        numberInput.addEventListener('change', () => {

            console.log(numberInput.value);
            miArrGustos.push(
                numberInput.name
                // numberInput.value
            );
            // Push the selected flavor into miGustoSabor
            miGustoSabor.push(numberInput.name);
            console.log("miArray Gustos=", miArrGustos);
            miArraySabor.push(numberInput.name, numberInput.value); // Add the value to miCantidad
            console.log("mi Array mi Sabor", miArraySabor);
            

            let longit = miArrGustos.length;
            console.log("logitud del arrGustos=", longit);
            console.log("formato", miArrayFormato.length);
            console.log("ArrGustos", miArrGustos);
            let tipo = miArrayFormato.length;
          
            if (tipo === longit) {
                for (let i = 0; i < miArrayFormato.length; i++) {
                
                    let forma = miArrayFormato[i];
                    let gustsab = miGustoSabor[i];
                   
                    miArrayUnion.push(forma + " " + gustsab);
                }
                    //    + ' ' + (miGustoSabor(i))]);
                console.log(" mi array unio", miArrayUnion);
              
                miSeleccion.push(miArrayUnion);
                console.log("mi Seleccion", miSeleccion);
            } else {
                console.log(" LA CANTIDAD DE GUSTOS NO COINCIDE CON LA CANTIDAD DE FORMAROS ELEGIDOS");
            }
        });
    }
    
});




miSelTipoGusto(); 




function miSelTipoGusto() {
    miSeleccion.push(miArrayUnion)
    console.log(miSeleccion) 
    let miArrayUnion = [];

}