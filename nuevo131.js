//esto es un comentario//
/* esto es unicodeBidi: 
comntario de varias lines*/
//*unction elegirTipos() {
let miArraySel = [];
let miArray = [];
let miGusto = [];
let miArrayFormato = ["Formato"];
let miCantidad = [];
let aa = "";
/*let numbers =[]*/
let i = 1;
let H = 0;
const numbers = document.querySelectorAll('.checkbox-container1 input[type="number"]');
const checkboxes = document.querySelectorAll('.checkbox-container1 input[type="checkbox"]');
console.log(numbers);
numbers.forEach((number) => {
    number.addEventListener('change', () => {
        miArray.push(
            number.name,
            number.value
        );
        miCantidad.push(number.name,number.value); // Add the value to miCantidad
        console.log("mi Array mi Cantidad",miCantidad);
        i++;

        let longit = miCantidad.length;
        console.log(longit);
        for (let h = 0; h < miCantidad.length; h++) {
            console.log("contador=", h);
        }
        miArrayFormato.push(number.name);
        miGusto.push(number.name);
        console.log(" mi ArrayFormato", miArrayFormato);
        console.log(" mi Array Gusto", miGusto);

     //   let miArraySel = miArrayGusto

        /*miArrayCantidad.push(number.cantidad$.value)); */
        // Itera sobre cada checkbox y muestra su valor
        //checkboxes.forEach((checkbox) => { miArray.push(checkbox.id) });
        console.log('miArrayFormato:', miArrayFormato);
        // }
    });
});












