/*
Apuntes 1. 
Tipos de datos en Typescript.

Auth: @LiKatRod (TW)
*/

//String
let myVAr: string;
myVAr = "Hello World! Esto son unos apuntes de Typescript básico";

let txt = document.getElementById("app");
txt.innerHTML = myVAr;

/*
Esto produce un error ❌
myString = 22 Dado que en primer lugar está tipado a String de manera inferida.
*/

//Number
let myNumber: number = 22;
let myBool: boolean = true || false;

/*
 También existe el tipo de dato any que acepta todo tipo de datos.
 Se entiende que no es recomendable utilizarlo ya que hace que el error pueda ser mayor en su compilación. 
*/

let wordAny: any = "Hello";
wordAny = 22;

console.log(wordAny.toString());

//Definición de arrays.

let ar: string[] = ["item1", "item2", "item3", ""];
let arNumber: number[] = [1, 2, 3, 4];

// Typles -> Arreglos con estructuras definidas.

let newTuple: [string, number];
newTuple = ["Hola", 2];

console.log(
  ` Esto es un array compuestro: ${newTuple[0]} en primera posición y segunda posición ${newTuple[1]}`
);

/*
 Es importante en cómo se genera la composición del array. Dado que si cambias su estructura te saltará un error
 
 ❌ newTuple = [22, "Hello"];

 */

// hex, binario y octales

let hex: number = 0xf00d;
let binary: number = 0b101;
let octal: number = 0o744;

/*
	 Void
   Tipo explícito.

	 ❗️ ¿Por qué any en lugar de void? -> Si se le asigna any se puede retornar 
			cualquier tipo de valor, incluiso no retornar nada. 
*/

function showInfo(user: any): any {
  console.log("User info", user.id, user.username, user.firstName);
  // return "hola" -> En el momento que se agrega
  // Typescript infiere que está devolviéndose un tipo String.
}

showInfo({ id: 1, username: "likatrod", firstName: "Lina" });
// Esto saca por consola los resultados.

//Otro ejemplo de funciones explícitas -> En donde indicas el tipo de dato a devolver.

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

getSum(2, 5);

/*
Definir parámetros opcionales
Se utiliza el ? para expresar que ese parámetro no es requerido al llamar a la 
función.
*/
function getUser(firstName: string, lastName?: string): string {
  if (lastName === undefined) {
    return `El nombre es ${firstName}`;
  }
  return `El nombre del usuario es ${firstName} y su apellido es ${lastName}`;
}

console.log(getUser("Lina"));
console.log(getUser("Isaac", "Asimov"));

// Definición de una interfaz -> Estructura de un objeto.
interface ItoDo {
  title: string;
  text: string;
}

function showTask(ToDo: ItoDo) {
  console.log(`${ToDo.title} - ${ToDo.text}`);
}

showTask({
  title: "Task trash",
  text: "lorem"
});

//Podemos utilizar también la interfaz en una variable

let otherTask: ItoDo = { title: "Other Task", text: "lorem ipsum" };
console.log(otherTask);

// Clases.
class User {
  //Modificadores.

  public name: string;
  //Solo es accesible a la clase padre.
  private email: string;
  //Accesible sólo a las clases que reciban herencia de esta clase.
  protected age: number;

  //Parámetros de la clase.
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  //Incorporación de métodos. También se pueden generar métodos reservados o no dentro de la clase.
  register() {
    console.log(`${this.name} se ha registrado correctamente`);
  }

  showMeAge() {
    return `La edad es ${this.age}`;
  }

  payInvoice() {
    console.log(`${this.name} ha pagado su factura`);
  }
}

// Instanciar la clase

let otherUser = new User("Lina", "useradmi@gmail.com", 25);
console.log(otherUser.name);
console.log(otherUser.register());

/*
  Conceptos importantes de las clases: 
  Herencia. Poliformismos, abstracción, encapsulación, entre otros. 
  Ahora se verá la Herencia. 
*/

class Member extends User {
  private id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  //Heredando métodos.
  payInvoce() {
    super.payInvoice();
  }
}

let oneMember = new Member(1, "Gordon", "admin@admin.es", 24);
oneMember.payInvoce();
console.log(oneMember);
