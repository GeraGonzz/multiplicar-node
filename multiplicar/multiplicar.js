//Requireds
const fs = require("fs");
const colors = require("colors");

//Creando el Archivo
let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`La base introducida '${base}' no es un número`);
      return;
    }
    let data = new Uint8Array(Buffer.from(""));
    //Ciclo for...
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

let listarTabla = (base, limite) => {
  let data = new Uint8Array(Buffer.from(""));
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`La base introducida '${base}' no es un número.`);
      return;
    }
    else 
    //Ciclo for...
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    resolve(data.brightYellow);
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
