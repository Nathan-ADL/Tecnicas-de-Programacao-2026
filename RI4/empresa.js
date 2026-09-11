export class Empresa {
  #cnpj;
 
  constructor(nome, cnpj, endereco) {
    this.nome = nome;
    this.#cnpj = cnpj;
    this.endereco = endereco;
    this.telefones = [];
    this.clientes = [];
  }
 
  
  getCnpj() {
    return this.#cnpj;
  }
 
  
  getCnpjMaiusculo() {
    return String(this.#cnpj).toUpperCase();
  }
 
  getCnpjMinusculo() {
    return String(this.#cnpj).toLowerCase();
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
 
  adicionarCliente(cliente) {
    this.clientes.push(cliente);
  }
 
  
  gerarDescricao() {
    let descricao = "";
    descricao += `Empresa: ${this.nome}\n`;
    descricao += `CNPJ: ${this.#cnpj}\n`;
    descricao += `Endereço: ${this.endereco.toString()}\n`;
    descricao += `Telefones: ${this.telefones.map((t) => t.toString()).join(", ")}\n`;
    descricao += `\nClientes (${this.clientes.length}):\n`;
    this.clientes.forEach((cliente, index) => {
      descricao += `${index + 1}. ${cliente.toString()}\n`;
    });
    return descricao;
  }
}