import { calcular } from "./ciudades";
import { ciudades } from "./ciudades";

function maxPoblacion() {
  const array: number[] = ciudades.map((value: calcular) => value[2022]);
  const maximo: number = Math.max(...array);
  const resultado: calcular[] = ciudades.filter((value: calcular) => value[2022] === maximo);
  return resultado;
  console.log("Cuidad con mayor Poblacion:", maxPoblacion());
}

function low_poblacion() {
  const array: number[] = ciudades.map((value: calcular) => value[2022]);
  const minimo: number = Math.min(...array);
  const resultado: calcular[] = ciudades.filter((value: calcular) => value[2022] === minimo);
  return resultado;
  console.log("Cuidad con menor Poblacion:", low_poblacion());
}


function alfabeto() {
  const array: string[] = ciudades.map((value: calcular) => value.name);
  const resultado = array.sort();
  return resultado;
  console.log("Cuidades en orden alfabetico:", alfabeto());
}

function cal_personas() {
  const resultado = ciudades.sort((a, b) => b[2022] - a[2022]);
  return resultado;
console.log("Cuidades ordenadas por cantidad de personas:", cal_personas());
}