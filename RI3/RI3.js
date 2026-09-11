class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    getDDDMaiuscula() {
        return String(this.ddd).toUpperCase();
    }
    getDDDMinuscula() {
        return String(this.ddd).toLowerCase();
    }
    getNumeroMaiuscula() {
        return String(this.numero).toUpperCase();
    }
    getNumeroMinuscula() {
        return String(this.numero).toLowerCase();
    }
}

class Endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }

    getRuaMaiuscula() {
        return String(this.rua).toUpperCase();
    }
    getRuaMinuscula() {
        return String(this.rua).toLowerCase();
    }
    getNumeroMaiuscula() {
        return String(this.numero).toUpperCase();
    }
    getNumeroMinuscula() {
        return String(this.numero).toLowerCase();
    }
    getCidadeMaiuscula() {
        return String(this.cidade).toUpperCase();
    }
    getCidadeMinuscula() {
        return String(this.cidade).toLowerCase();
    }
    getEstadoMaiuscula() {
        return String(this.estado).toUpperCase();
    }
    getEstadoMinuscula() {
        return String(this.estado).toLowerCase();
    }
}

class Cliente {
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
    getCpfMaiuscula() {
        return String(this.#cpf).toUpperCase();
    }
    getCpfMinuscula() {
        return String(this.#cpf).toLowerCase();
    }

    getNomeMaiuscula() {
        return String(this.nome).toUpperCase();
    }
    getNomeMinuscula() {
        return String(this.nome).toLowerCase();
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
}

class Empresa {
    #cnpj;

    constructor(razaoSocial, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.telefones = [];
        this.clientes = [];
    }

    getCnpj() {
        return this.#cnpj;
    }
    getCnpjMaiuscula() {
        return String(this.#cnpj).toUpperCase();
    }
    getCnpjMinuscula() {
        return String(this.#cnpj).toLowerCase();
    }

    getRazaoSocialMaiuscula() {
        return String(this.razaoSocial).toUpperCase();
    }
    getRazaoSocialMinuscula() {
        return String(this.razaoSocial).toLowerCase();
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }

    descrever() {
        let texto = "===== EMPRESA =====\n";
        texto += "Razão Social: " + this.razaoSocial + "\n";
        texto += "CNPJ: " + this.#cnpj + "\n";
        texto += "Endereço: " + this.endereco.rua + ", " + this.endereco.numero + " - " + this.endereco.cidade + "/" + this.endereco.estado + "\n";

        texto += "Telefones: ";
        for (let i = 0; i < this.telefones.length; i++) {
            texto += "(" + this.telefones[i].ddd + ") " + this.telefones[i].numero;
            if (i < this.telefones.length - 1) {
                texto += ", ";
            }
        }
        texto += "\n";

        texto += "\n===== CLIENTES =====\n";
        for (let i = 0; i < this.clientes.length; i++) {
            const cliente = this.clientes[i];
            texto += "\n----- Cliente " + (i + 1) + " -----\n";
            texto += "Nome: " + cliente.nome + "\n";
            texto += "CPF: " + cliente.getCpf() + "\n";
            texto += "Endereço: " + cliente.endereco.rua + ", " + cliente.endereco.numero + " - " + cliente.endereco.cidade + "/" + cliente.endereco.estado + "\n";

            texto += "Telefones: ";
            for (let j = 0; j < cliente.telefones.length; j++) {
                texto += "(" + cliente.telefones[j].ddd + ") " + cliente.telefones[j].numero;
                if (j < cliente.telefones.length - 1) {
                    texto += ", ";
                }
            }
            texto += "\n";
        }

        return texto;
    }
}

const enderecoEmpresa = new Endereco("Av. Paulista", 1000, "São Paulo", "SP");
const empresa = new Empresa("Tech Solutions LTDA", "12.345.678/0001-90", enderecoEmpresa);

empresa.adicionarTelefone(new Telefone(11, "3333-4444"));
empresa.adicionarTelefone(new Telefone(11, "98888-7777"));

const dadosClientes = [
    { nome: "Ana Souza", cpf: "111.111.111-11", cidade: "São Paulo" },
    { nome: "Bruno Lima", cpf: "222.222.222-22", cidade: "Campinas" },
    { nome: "Carla Dias", cpf: "333.333.333-33", cidade: "Santos" },
    { nome: "Diego Alves", cpf: "444.444.444-44", cidade: "Sorocaba" },
    { nome: "Elaine Rocha", cpf: "555.555.555-55", cidade: "Osasco" },
];

for (let i = 0; i < dadosClientes.length; i++) {
    const dado = dadosClientes[i];
    const enderecoCliente = new Endereco("Rua das Flores", 100 + i, dado.cidade, "SP");
    const cliente = new Cliente(dado.nome, dado.cpf, enderecoCliente);

    cliente.adicionarTelefone(new Telefone(11, "9000" + i + "-0000"));
    cliente.adicionarTelefone(new Telefone(11, "9000" + i + "-1111"));

    empresa.adicionarCliente(cliente);
}

console.log(empresa.descrever());