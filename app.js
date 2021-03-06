/**
 * SISTEMA DE REGISTRO DE NOTAS
 * 
 * Funciones:
 * Registrar la nota de 5 estudiantes en 5 asignaturas diferentes
 * Obtener la nota definitiva de cada asignatura. son 3 notas diferentes
 * Promedio general de cada estudiante en todas sus asignaturas
 * Promedio de la nota definitiva de todos los estudiantes por cada asignatura
 */

//se declaran las variables que recibira el texto de entrada
//cada variable se conecta con el html a traves de document.getElementById()
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
//notas de calculo
const nota1calculo = document.getElementById("nota1calculo");
const nota2calculo = document.getElementById("nota2calculo");
const nota3calculo = document.getElementById("nota3calculo");
//notas de programacion
const nota1progra = document.getElementById("nota1progra");
const nota2progra = document.getElementById("nota2progra");
const nota3progra = document.getElementById("nota3progra");
//notas de fisica
const nota1fisica = document.getElementById("nota1fisica");
const nota2fisica = document.getElementById("nota2fisica");
const nota3fisica = document.getElementById("nota3fisica");
//notas de estadistica
const nota1estadis = document.getElementById("nota1estadis");
const nota2estadis = document.getElementById("nota2estadis");
const nota3estadis = document.getElementById("nota3estadis");
//notas de fundamentos de ingenieria
const nota1funda = document.getElementById("nota1funda");
const nota2funda = document.getElementById("nota2funda");
const nota3funda = document.getElementById("nota3funda");

//objeto para Materia. Este objeto representa lo que tiene en comun todas las materias
//esta sera la clase padre
class Materia {
    constructor(nota1, nota2, nota3) { //constructor de la clase, este recibe los parametros cuando se este llamando la clase
        this.nota1 = nota1; //la variable que recibe como parametro se asigna a la variable de la clase llamada this.nota1
        this.nota2 = nota2; //this quiere decir "que pertenece a esta clase"
        this.nota3 = nota3; //estos vendrian siendo atributos de la clase
    }

    obtenerPromedio() { //este es un metodo de la clase 
        let sumatoria = this.sumatoria(); //se llama al metodo sumatoria() que nos devuelve la suma de todas las notas
        let promedio = sumatoria / 3; //se divide la suma por 3 porque siempre van a haber 3 notas
        return promedio; //se retorna el resultado del promedio
    }

    sumatoria() { //metodo para sumar todas las notas
        let sumaNotas = this.nota1 + this.nota2 + this.nota3;
        return sumaNotas;
    }
}

//objeto para la asignatura de calculo
//esta clase hereda de la clase Materia, es decir que la clase Calculo seria la clase hija
//al heredar de su clase padre (Materia) se heredan tambien sus atributos y sus metodos
class Calculo extends Materia {
    //esta clase hereda tambien el constructor de Materia

    mostrarResultado() { //se crea un metodo para esta clase
        let promedio = this.obtenerPromedio(); //en este punto se llama al metodo obtenerPromedio() de la clase padre, pero tambien le pertenece a la clase hija
        let respuesta = "El promedio de calculo es de " + promedio;
        return respuesta;
    }
}

//se hace el mismo procedimiento con las demas materias
//objeto o clase para la materia programacion
class Programacion extends Materia {
    mostrarResultado() {
        let promedio = this.obtenerPromedio();
        let respuesta = "El promedio de programaci??n es de " + promedio;
        return respuesta;
    }
}

//clase para la materia fisica
class Fisica extends Materia {
    mostrarResultado() {
        let promedio = this.obtenerPromedio();
        let respuesta = "El promedio de f??sica es de " + promedio;
        return respuesta;
    }
}

//clase para la materia estadistica
class Estadistica extends Materia {
    mostrarResultado() {
        let promedio = this.obtenerPromedio();
        let respuesta = "El promedio de estad??stica es de " + promedio;
        return respuesta;
    }
}

//clase para la materia fundamentos en ingenieria
class Fundamentos extends Materia {
    mostrarResultado() {
        let promedio = this.obtenerPromedio();
        let respuesta = "El promedio de fundamentos de ingenier??a es de " + promedio;
        return respuesta;
    }
}

//clase estudiante
class Estudiante { //aqui empieza la clase Estudiante

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

        this.lista = []; //se declara un atributo de un array vacio o lista vacia, aqui se iran agregando los promedios para despues sumarlos

        this.promCalculo = 0; //estas son variables que se declaran para despues asignarles el valor del promedio de la materia correspondiente
        this.promProgramacion = 0; //por ahora su valor sera cero
        this.promFisica = 0;
        this.promEstadistica = 0;
        this.promFundamentos = 0;
    }

    //para poner notas en cada materia
    //los siguientes metodos con la palabra set sirve para que el usuario almacene las notas del estudiante
    //set significa poner

    setNotasCalculo(nota1, nota2, nota3) { //se envian como parametros las notas que se obtengan de los inputs
        let calculo = new Calculo(nota1, nota2, nota3); //se hace una instancia de la clase Calculo, es decir se invoca la clase y se le envian las notas porque asi lo indica su constructor
        this.promCalculo = calculo.obtenerPromedio(); //se llama el metodo obtenerPromedio() de la clase y el resultado se almacena en la variable this.promCalculo, esta variable es propia de la clase
        this.lista.push(this.promCalculo); //la variable promedio se agrega al array llamado lista, esto es para despues sumarlo con los demas promedios
    }

    //el mismo porcedimiento se repite para los siguientes metodos set

    setNotasProgramacion(nota1, nota2, nota3) {
        let programacion = new Programacion(nota1, nota2, nota3);
        this.promProgramacion = programacion.obtenerPromedio();
        this.lista.push(this.promProgramacion);
    }

    setNotasFisica(nota1, nota2, nota3) {
        let fisica = new Fisica(nota1, nota2, nota3);
        this.promFisica = fisica.obtenerPromedio();
        this.lista.push(this.promFisica);
    }

    setNotasEstadistica(nota1, nota2, nota3) {
        let estadistica = new Estadistica(nota1, nota2, nota3);
        this.promEstadistica = estadistica.obtenerPromedio();
        this.lista.push(this.promEstadistica);
    }

    setNotasFundamentos(nota1, nota2, nota3) {
        let fundamentos = new Fundamentos(nota1, nota2, nota3);
        this.promFundamentos = fundamentos.obtenerPromedio();
        this.lista.push(this.promFundamentos);
    }

    //este metodo es para sumar todos los promedios y devolver una nota general
    sumarPromedios() {
        if (this.lista.length > 0) { //si la longitud de la lista es mayor que cero significa que si hay notas almacenadas en ese array
            let suma; //se declara una variable fuera del for para que almacene la suma de los promedios
            for (let i = 0; i < this.lista.length; i++) { //se recorre la lista tantas veces sea su longitud, es decir, si la lista contiene 3 elementos entonces el for se repite 3 veces
                suma += this.lista[i]; //se van sumando los promedios y almacenando en la variable suma 

                //"suma += this.lista[i]" es lo mismo que decir "suma = suma + this.lista[i]"
            }
            let promedioGeneral = suma / this.lista.length; //se saca el promedio
            return "El promedio de todas las materias de " + this.nombre + " es de " + promedioGeneral; //retorna una respuesta
        } else {
            alert("No se ha registrado ninguna materia"); //en caso de que el array lista este vacio y no se hallan registrado notas
        }
    }

    //los siguientes son los metodos gets que significan "obtener" y sirven para obtener el promedio de cada materia

    getPromCalculo() {
        return this.promCalculo; //el metodo retorna el promedio de Calculo
    }
    getPromProgramacion() {
        return this.promProgramacion;
    }
    getPromFisica() {
        return this.promFisica;
    }
    getPromEstadistica() {
        return this.promEstadistica;
    }
    getPromFundamentos() {
        return this.promFundamentos;
    }
} //aqui finaliza la clase estudiante

//a partir de aqui se empieza con la logica para obtener los datos del usuario y mostrar los resultados generales
//se utilizan las variables de los inputs que se declararon al principio con document.getElementById();

var listaStudents = []; //este es un array que va a almacenar variables de tipo objeto

const botonGuardar = document.getElementById("botonGuardar"); //se guarda el boton "Guardar notas" en una variable
const botonResultados = document.getElementById("botonResultados");
botonResultados.style.display = "none";

botonGuardar.addEventListener("click", () => { //addEventListener es un evento que se usa para cuando se le da click boton, es decir ejecuta una accion cuando se le da click
    let estudiante = new Estudiante(nombre.value, apellido.value);
    estudiante.setNotasCalculo(nota1calculo.value, nota2calculo.value, nota3calculo.value);
    estudiante.setNotasProgramacion(nota1progra.value, nota2progra.value, nota3progra.value);
    estudiante.setNotasFisica(nota1fisica.value, nota2fisica.value, nota3fisica.value);
    estudiante.setNotasEstadistica(nota1estadis.value, nota2estadis.value, nota3estadis.value);
    estudiante.setNotasFundamentos(nota1funda.value, nota2funda.value, nota3funda.value);
    alert("La notas han sido registradas con ??xito");

    let objetoEstudiante = {
        name: nombre.value,
        calculo: estudiante.getPromCalculo(),
        programacion: estudiante.getPromProgramacion(),
        fisica: estudiante.getPromFisica(),
        estadistica: estudiante.getPromEstadistica(),
        fundamentos: estudiante.getPromFundamentos()
    }

    listaStudents.push(objetoEstudiante);

    if (listaStudents.length >= 5) {
        botonResultados.style.display = "block";
    }
});

const tabla = document.getElementById("tabla");

botonResultados.addEventListener("click", () => {
    tabla.innerHTML = `
    <tr>
        <th>Estudiante</th>
        <th>Promedio C??lculo</th>
        <th>Promedio Programaci??n</th>
        <th>Promedio Fisica</th>
        <th>Promedio Estad??stica</th>
        <th>Promedio Fundamentos Ing</th>
    </tr>
    `;
    for (let j = 0; j < listaStudents.length; j++) {
        tabla.innerHTML += `
        <tr>
            <td>${listaStudents[j].name}</td>
            <td>${listaStudents[j].calculo}</td>
            <td>${listaStudents[j].programacion}</td>
            <td>${listaStudents[j].fisica}</td>
            <td>${listaStudents[j].estadistica}</td>
            <td>${listaStudents[j].fundamentos}</td>
        </tr>
    `;
    }

    let sumaPromCalculo = 0;
    let sumaPromProgramacion = 0;
    let sumaPromFisica = 0;
    let sumaPromEstadistica = 0;
    let sumaPromFundamentos = 0;

    for (let k = 0; k < listaStudents.length; k++) {
        sumaPromCalculo += listaStudents[k].calculo;
        sumaPromProgramacion += listaStudents[k].programacion;
        sumaPromFisica += listaStudents[k].fisica;
        sumaPromEstadistica += listaStudents[k].estadistica;
        sumaPromFundamentos += listaStudents[k].fundamentos;
    }

    let cantidadEstudiantes = listaStudents.length;

    let promCalc = sumaPromCalculo / cantidadEstudiantes;
    let promProg = sumaPromProgramacion / cantidadEstudiantes;
    let promFisic = sumaPromFisica / cantidadEstudiantes;
    let promEstadist = sumaPromEstadistica / cantidadEstudiantes;
    let promFunda = sumaPromFundamentos / cantidadEstudiantes;

    tabla.innerHTML += `
    <tr>
        <th>Promedio general</th>
        <td>${Math.round(promCalc)}</td>
        <td>${Math.round(promProg)}</td>
        <td>${Math.round(promFisic)}</td>
        <td>${Math.round(promEstadist)}</td>
        <td>${Math.round(promFunda)}</td>
    </tr>
    `;
});