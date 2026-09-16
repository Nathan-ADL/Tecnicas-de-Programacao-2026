import Descritor from "./Descritorempresa.js";
import Empresa from "./Empresa.js";
import Endereco from "./Endereco.js";
import Funcionario from "./Funcionario.js";
import Telefone from "./Telefone.js";

let endereco = new Endereco(123, "Av. Paulista", "Jardim Paulista", "São Paulo");
let telefone = new Telefone("011", "9-9999-9999");
let funcionario = new Funcionario("Tony Stark", "123456789", "999.999.999-99", endereco, telefone);
let funcionarios = [funcionario];
let telefones = [telefone];
let empresa = new Empresa(funcionarios, endereco, "ABC LTDA", "Mercado online", "999-999-999-999-99", telefones);

let descritor = new Descritor();
descritor.descrever(empresa);