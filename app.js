//Listar números pares o impares en un rango numérico

let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número (que sea mayor al primero)"));
let opcion = "";
let par = "";
let impar = "";
while (numero2 <= numero1){
    alert("Por favor ingrese un número mayor")
    numero2 = parseInt(prompt("Ingrese el segundo número (que sea mayor al primero)"));
}
opcion = prompt("Elija PAR o IMPAR");
if (opcion == "PAR" || opcion == "par"){
    for (let i = numero1; i <= numero2; i++) {
        if (i%2 == 0){
            par += i + " " ;          
        }
    }
    alert (`Números pares entre ${numero1} y ${numero2}:  ${par} `)
} else if (opcion == "IMPAR" || opcion == "impar"){
    for (let i = numero1; i <= numero2; i++) {
        if (i%2 !== 0){
            impar += i + " ";            
        }
    }
    alert (`Números impares entre ${numero1} y ${numero2}:  ${impar}`)
}
alert ("El programa ha finalizado")



    








