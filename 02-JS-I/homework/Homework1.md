VARIABLES:
Hablamos de una variable un objeto al que le podemos ingresar cualquier cosa, esto quiere decir, numeros, letras, palabras, para ello debemos declarar cual va a ser nuestra variable e igualarla al valor que queremos que tome:
  1
  Var N = 24;
  Var M = "Judas";
Es muy importante cerrar cada declaracion, o termino de nuestra linea con ;.

STRINGS:
Los strings como su nombre en español lo indica, son cadenas, pero estas cadenas son de valores alfanumericos, osea que esta compuesto de letras y numeros aunque esto solo para lectura o como valor textual y estas pueden o no tener sentido:
  
  String Name = "Agustino" ;
  String WiFi = "ASj34Dt56" ;

FUNCIONES:
Las funciones son bloques del programa apartado, en ellos podemos realizar diferentes acciones y esta se compone de los elementos function "nombre de la funcion" () {} dentro de los parentecis va el valor que va a ingresar a la funcion o argumento y dentro de los corchetes va lo que deseamos que haga la funcion:

  function resta(a,b)
  {
    var c = a - b;
    return c;
  }

La declaracion return lo que hace es devolvernos el resultado de la funcion asi como parando su ejecucion, digamos que las funciones son maquinas que cuando nosotros las declaramos y les damos un valor, ellas empiezan a trabajar hasta llegar al return que nos da un resultado y se apaga de su labor. Asi cuando nos regresa un valor nosotros podemos llamarlo igualando la funcion a alguna variable:

var a = 7;
var b = 15;
var f = resta (a,b);
console.log(f);

IF:
Hablemos ahora de    esta declaracion, resulta que ella es un condicional, en el cual comparamos variables, string o cualquier cosa que queramos comparar, si lo que comparamos resulta ser cierto, efectuara el pequeño codigo que nosotros asignemos, sino, no hara nada:

  funtion RestaPositiva(a)
  {
    if(5 < a)
    {
      var b = 5-a;
      return b;
    }
  }

FALSE, TRUE :
Estos dos valores, son valores boleanos, corresponden a la logica de Boole, en la que solo se basa en pasa algo o no pasa nada, asi mientras que con true indicamos que es cierto, con false indicamos que es falso y en eso nos basaremos para obtener algun resultado dependiendo de true o false:

 function RestaPositiva(a)
 {
   if(5 < a)
   {
    var b = 5-a;
    return b;
   }
   return false;
 }

Aqui podemos observar como se implementa false, si el valor de a no es mayor que 5, por ejemplo fuera un 4, no entra en el if, sino que regresa un false a la funcion.

