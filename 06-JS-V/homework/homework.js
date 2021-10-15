// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  function Usuario (usuario,nombre,email,password)
  {
    opciones.call(usuario,nombre,email,password);
    this.usuario = usuario;
    this.nombre = nombre;
    this.email = email;
    this.password = password; 
  }
  Usuario.prototype.saludar = function ()
  {
    return "Hola mi nombre es" + " " + this.nombre;
  } 
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  var obj = {};
  Contructor.assign(function saludar(){return "Hello World";})
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.invrt() = function reverse (palabra)
  {
    var a = palabra.length;
    var x = [a];

    for (var i = o; i < a; i++)
    {
      x[i] = palabra.charAt(i);
    }

    this.palabra = x[a-1];

    for(var i = a - 2; i = 0; i--)
    {
      this.palabra = this.palabra + x[i];
    }
  }
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre,apellido,edad,domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;

      function detalle ()
      {
        var obj = {Nombre: this.nombre, Apellido: this.apellido, Edad: this.edad, Domicilio: this.domicilio};
        return obj;
      }
      // Crea el constructor:
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  Persona.call(nombre,apellido,edad,domicilio);
  var a = new Persona(nombre, apellido, edad, dir);
  return a;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.call(nombre, apellido, edad, domicilio);
  function datos (nombre,edad)
  {
    return nombre + "," + " " + edad;
  }
  Object.setPrototypeOf(Persona.prototype, datos);

  var a = new Persona(nombre,edad);
  a.datos();
  return a;
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
