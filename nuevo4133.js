
let miArraySel = [];
let miArray = [];
let miGusto = [];
let miArrayFormato = ["Formato"];
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

const numbers = document.querySelectorAll('.checkbox-container1 input[type="number"]');
const checkboxes = document.querySelectorAll('.checkbox-container1 input[type="checkbox"]');
//onsole.log(numbers);

checkboxes.forEach((checkbox) => {
console.log(checkbox.name);
// Selecciona el input number hermano del checkbox dentro del mismo contenedor
const numberInput = checkbox.closest('.checkbox-container1').querySelector('input[type="number"]');
if (numberInput) {
numberInput.addEventListener('change', () => {
console.log(numberInput.value);
miArrayNum.push(
numberInput.name,
numberInput.value
);
console.log("miArrayNer0o=", miArrayNum);
miCantidad.push(numberInput.name, numberInput.value); // Add the value to miCantidad
console.log("mi Array mi Cantidad", miCantidad);
i++;

let longit = miCantidad.length;
console.log("logitud del array mi cantidad=", longit);
for (let h = 0; h < miCantidad.length; h++) { console.log("contador=", h);
            }
            miArrayFormato.push(numberInput.name);
            miGusto.push(numberInput.name);
            console.log(" mi ArrayFormato", miArrayFormato); console.log(" mi Array Gusto", miGusto);
    console.log('miArrayFormato:', miArrayFormato); }); } checkbox.addEventListener('change', ()=> {
    if (checkbox.checked) {
    console.log('Valor del checkbox:', checkbox.name);
    aa = checkbox.name;
    console.log('aa:', aa);
    miArray.push(
    aa
    );
    console.log('miArray', miArray);
    console.log('El checkbox está seleccionado:', checkbox.name);
    } else {
    console.log('El checkbox no está seleccionado:', checkbox.name);
    }
    // estos son de checkbox de arriba
    });
    });

console.log("ahora seleccionamos los gustos")

const gustos = document.querySelectorAll('.sabor .input[type="number"]');
const checkgustos = document.querySelectorAll('.sabor input[type="checkbox"]');
checkgustos.forEach((checkbox) => {
    console.log(checkbox.name);
    // Selecciona el input number hermano del checkbox dentro del mismo contenedor
    const numberInput = checkbox.closest('.sabor').querySelector('input[type="number"]');
    if (numberInput) {
        numberInput.addEventListener('change', () => {
            console.log(numberInput.value);
            miArrGustos.push(
                numberInput.name,
                numberInput.value
            );
            console.log("miArray Gustos=", miArrGustos);

            miArraySabor.push(numberInput.name, numberInput.value); // Add the value to miCantidad
            console.log("mi Array mi Sabor", miArraySabor);
            i++;

            let longit = miArrGustos.length;
            console.log("logitud del array gusots=", longit);
            for (let h = 0; h < miCantidad.length; h++) {
                console.log("contador=", h);
            }
            miSeleccion.push(numberInput.name);
            miSeleccion.push(numberInput.name);
            console.log(" mi Array seleccion", miSeleccion);
            console.log(" mi Arr Gustos", miArrGustos);
            console.log('miArray  SABOR:', miArraySabor);
        });
    }
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            console.log('Valor del checkbox:', checkbox.name);
            aa = checkbox.name;
            console.log('aa:', aa);
            miGustoSabor.push(
                aa
            );
            console.log('mi GUSTO SABOR', miGustoSabor);
            console.log('El checkbox está seleccionado:', checkbox.name);
        } else {
            console.log('El checkbox no está seleccionado:', checkbox.name);
        }
        // estos son de checkbox de arriba
    });
});











