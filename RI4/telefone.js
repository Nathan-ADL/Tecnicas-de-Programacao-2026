export class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  }
 
  
  getDddMaiusculo() {
    return String(this.ddd).toUpperCase();
  }
 
  getDddMinusculo() {
    return String(this.ddd).toLowerCase();
  }
 
  getNumeroMaiusculo() {
    return String(this.numero).toUpperCase();
  }
 
  getNumeroMinusculo() {
    return String(this.numero).toLowerCase();
  }
 
  toString() {
    return `(${this.ddd}) ${this.numero}`;
  }
}