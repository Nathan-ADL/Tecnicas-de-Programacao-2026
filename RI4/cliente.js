export class Cliente {
  #cpf;
 
  constructor(nome, cpf, endereco) {
    this.nome = nome;
    this.#cpf = cpf;
    this.endereco = endereco;
    this.telefones = [];
  }
 

  getCpf() {
    return this.#cpf;
  }
 
 
  getCpfMaiusculo() {
    return String(this.#cpf).toUpperCase();
  }
 
  getCpfMinusculo() {
    return String(this.#cpf).toLowerCase();
  }
 
  getNomeMaiusculo() {
    return String(this.nome).toUpperCase();
  }
 
  getNomeMinusculo() {
    return String(this.nome).toLowerCase();
  }
 

  adicionarTelefone(telefone) {
    this.telefones.push(telefone);
  }
 
  removerTelefone(telefone) {
    this.telefones = this.telefones.filter((t) => t !== telefone);
  }
 
  toString() {
    const telefonesStr = this.telefones.map((t) => t.toString()).join(", ");
    return `Cliente: ${this.nome} | CPF: ${this.#cpf} | Endereço: ${this.endereco.toString()} | Telefones: ${telefonesStr}`;
  }
}