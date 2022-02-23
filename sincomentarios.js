const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");

const nota1calculo = document.getElementById("nota1calculo");
const nota2calculo = document.getElementById("nota2calculo");
const nota3calculo = document.getElementById("nota3calculo");

const nota1progra = document.getElementById("nota1progra");
const nota2progra = document.getElementById("nota2progra");
const nota3progra = document.getElementById("nota3progra");

const nota1fisica = document.getElementById("nota1fisica");
const nota2fisica = document.getElementById("nota2fisica");
const nota3fisica = document.getElementById("nota3fisica");

const nota1estadis = document.getElementById("nota1estadis");
const nota2estadis = document.getElementById("nota2estadis");
const nota3estadis = document.getElementById("nota3estadis");

const nota1funda = document.getElementById("nota1funda");
const nota2funda = document.getElementById("nota2funda");
const nota3funda = document.getElementById("nota3funda");

class Materia {
    constructor(nota1, nota2, nota3) {
        this.nota1 = nota1; 
        this.nota2 = nota2; 
        this.nota3 = nota3;
    }

    obtenerPromedio() {
        let sumatoria = this.sumatoria();
        let promedio = sumatoria / 3; 
        return promedio;
    }

    sumatoria() { 
        let sumaNotas = this.nota1 + this.nota2 + this.nota3;
        return sumaNotas;
    }
}

class Calculo extends Materia {
    mostrarResultado() {
        let promedio = this.obtenerPromedio();
        let respuesta = "El promedio de calculo es de " + promedio;
        return respuesta;
    }
}

class Programacion extends Materia {
    mostrarResultado() {
        let promedio = this.obtenerPromedio();
        let respuesta = "El promedio de programación es de " + promedio;
        return respuesta;
    }
}

class Fisica extends Materia {
    mostrarResultado() {
        let promedio = this.obtenerPromedio();
        let respuesta = "El promedio de física es de " + promedio;
        return respuesta;
    }
}

class Estadistica extends Materia {
    mostrarResultado() {
        let promedio = this.obtenerPromedio();
        let respuesta = "El promedio de estadística es de " + promedio;
        return respuesta;
    }
}

class Fundamentos extends Materia {
    mostrarResultado() {
        let promedio = this.obtenerPromedio();
        let respuesta = "El promedio de fundamentos de ingeniería es de " + promedio;
        return respuesta;
    }
}

class Estudiante {

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

        this.lista = [];

        this.promCalculo = 0; 
        this.promProgramacion = 0; 
        this.promFisica = 0;
        this.promEstadistica = 0;
        this.promFundamentos = 0;
    }

    setNotasCalculo(nota1, nota2, nota3) { 
        let calculo = new Calculo(nota1, nota2, nota3);
        this.promCalculo = calculo.obtenerPromedio();
        this.lista.push(this.promCalculo);
    }

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

    sumarPromedios() {
        if (this.lista.length > 0) { 
            let suma; 
            for (let i = 0; i < this.lista.length; i++) {
                suma += this.lista[i]; 
            }
            let promedioGeneral = suma / this.lista.length;
            return "El promedio de todas las materias de " + this.nombre + " es de " + promedioGeneral; 
        } else {
            alert("No se ha registrado ninguna materia"); 
        }
    }

    getPromCalculo() {
        return this.promCalculo; 
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
}

var listaStudents = [];

const botonGuardar = document.getElementById("botonGuardar"); 
const botonResultados = document.getElementById("botonResultados");
botonResultados.style.display = "none";

botonGuardar.addEventListener("click", () => {
    let estudiante = new Estudiante(nombre.value, apellido.value);
    estudiante.setNotasCalculo(nota1calculo.value, nota2calculo.value, nota3calculo.value);
    estudiante.setNotasProgramacion(nota1progra.value, nota2progra.value, nota3progra.value);
    estudiante.setNotasFisica(nota1fisica.value, nota2fisica.value, nota3fisica.value);
    estudiante.setNotasEstadistica(nota1estadis.value, nota2estadis.value, nota3estadis.value);
    estudiante.setNotasFundamentos(nota1funda.value, nota2funda.value, nota3funda.value);
    alert("La notas han sido registradas con éxito");

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
        <th>Promedio Cálculo</th>
        <th>Promedio Programación</th>
        <th>Promedio Fisica</th>
        <th>Promedio Estadística</th>
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