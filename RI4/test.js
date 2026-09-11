import { Telefone, Endereco, Cliente, Empresa } from "./index.js";
 

const enderecoEmpresa = new Endereco(
  "Av. Paulista",
  "1000",
  "São Paulo",
  "SP",
  "01310-100"
);
 
const empresa = new Empresa(
  "Tech Solutions LTDA",
  "12.345.678/0001-90",
  enderecoEmpresa
);
 
empresa.adicionarTelefone(new Telefone("11", "3000-0001"));
empresa.adicionarTelefone(new Telefone("11", "99999-0002"));
 

const dadosClientes = [
  {
    nome: "Ana Souza",
    cpf: "111.111.111-11",
    rua: "Rua das Flores",
    numero: "10",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01000-000",
  },
  {
    nome: "Bruno Lima",
    cpf: "222.222.222-22",
    rua: "Rua dos Girassóis",
    numero: "20",
    cidade: "Campinas",
    estado: "SP",
    cep: "13000-000",
  },
  {
    nome: "Carla Mendes",
    cpf: "333.333.333-33",
    rua: "Rua das Palmeiras",
    numero: "30",
    cidade: "São José dos Campos",
    estado: "SP",
    cep: "12200-000",
  },
  {
    nome: "Diego Ramos",
    cpf: "444.444.444-44",
    rua: "Rua das Acácias",
    numero: "40",
    cidade: "Guarulhos",
    estado: "SP",
    cep: "07000-000",
  },
  {
    nome: "Elisa Prado",
    cpf: "555.555.555-55",
    rua: "Rua dos Ipês",
    numero: "50",
    cidade: "Santos",
    estado: "SP",
    cep: "11000-000",
  },
];
 
dadosClientes.forEach((d, i) => {
  const enderecoCliente = new Endereco(d.rua, d.numero, d.cidade, d.estado, d.cep);
  const cliente = new Cliente(d.nome, d.cpf, enderecoCliente);
 
  cliente.adicionarTelefone(new Telefone("12", `9${(i + 1)}000-000${i + 1}`));
  cliente.adicionarTelefone(new Telefone("12", `9${(i + 1)}111-111${i + 1}`));
 
  empresa.adicionarCliente(cliente);
});
 

console.log(empresa.gerarDescricao());