import input from "./input.js";

const adat = await input("Hány adatot szeretnél megadni? ");

const diakok = [];
let szamlalo = 0;
do {
  const nev = await input("Név: ");
  const email = await input("Email: ");
  diakok.push(`Név: ${nev} Email: ${email}`);
  szamlalo++;
} while (szamlalo != adat);

console.log("A tanulók adatai: ");
diakok.forEach((diak) => console.log(diak));
