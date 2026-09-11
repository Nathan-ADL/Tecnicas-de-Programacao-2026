export class Endereco {
  constructor(rua, numero, cidade, estado, cep) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }
 
  
  getRuaMaiusculo() {
    return String(this.rua).toUpperCase();
  }
 
  getRuaMinusculo() {
    return String(this.rua).toLowerCase();
  }
 
  getNumeroMaiusculo() {
    return String(this.numero).toUpperCase();
  }
 
  getNumeroMinusculo() {
    return String(this.numero).toLowerCase();
  }
 
  getCidadeMaiusculo() {
    return String(this.cidade).toUpperCase();
  }
 
  getCidadeMinusculo() {
    return String(this.cidade).toLowerCase();
  }
 
  getEstadoMaiusculo() {
    return String(this.estado).toUpperCase();
  }
 
  getEstadoMinusculo() {
    return String(this.estado).toLowerCase();
  }
 
  getCepMaiusculo() {
    return String(this.cep).toUpperCase();
  }
 
  getCepMinusculo() {
    return String(this.cep).toLowerCase();
  }
 
  toString() {
    return `${this.rua}, ${this.numero} - ${this.cidade}/${this.estado} - CEP: ${this.cep}`;
  }
}