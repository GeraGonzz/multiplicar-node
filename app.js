const {argv} = require("./config/yargs");
// const colors = require("colors");

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    console.log("listar");
    listarTabla(argv.base, argv.limite)
      .then((tabla) => console.log(tabla))
      .catch((err) => console.log(err));
    break;
  case "crear":
    console.log("crear");
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo creado: ${archivo.brightYellow}`))
      .catch((err) => console.log(err));
    break;
  default:
    console.log("Comando no reconocido");
}

// console.log(argv);

//arvg obtener parametros sin personalizar desde consola...
// let argv2 = process.argv;
// console.log(argv2);
// let parametro = argv2[2];
// let base = parametro.split('=')[1];
