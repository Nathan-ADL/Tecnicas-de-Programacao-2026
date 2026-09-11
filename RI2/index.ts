class Endereco {
    rua: string;
    numero: number;
    cidade: string;
    estado: string;
    cep: string;

    constructor(rua: string, numero: number, cidade: string, estado: string, cep: string) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }

    getRua(): string {
        return this.rua;
    }
    setRua(novaRua: string): void {
        this.rua = novaRua;
    }
    getRuaMaiuscula(): string {
        return this.rua.toUpperCase();
    }
    getRuaMinuscula(): string {
        return this.rua.toLowerCase();
    }

    getNumero(): number {
        return this.numero;
    }
    setNumero(novoNumero: number): void {
        this.numero = novoNumero;
    }
    getNumeroMaiuscula(): string {
        return String(this.numero).toUpperCase();
    }
    getNumeroMinuscula(): string {
        return String(this.numero).toLowerCase();
    }

    getCidade(): string {
        return this.cidade;
    }
    setCidade(novaCidade: string): void {
        this.cidade = novaCidade;
    }
    getCidadeMaiuscula(): string {
        return this.cidade.toUpperCase();
    }
    getCidadeMinuscula(): string {
        return this.cidade.toLowerCase();
    }

    getEstado(): string {
        return this.estado;
    }
    setEstado(novoEstado: string): void {
        this.estado = novoEstado;
    }
    getEstadoMaiuscula(): string {
        return this.estado.toUpperCase();
    }
    getEstadoMinuscula(): string {
        return this.estado.toLowerCase();
    }

    getCep(): string {
        return this.cep;
    }
    setCep(novoCep: string): void {
        this.cep = novoCep;
    }
    getCepMaiuscula(): string {
        return this.cep.toUpperCase();
    }
    getCepMinuscula(): string {
        return this.cep.toLowerCase();
    }

    getDadosFormatados(): string {
        return this.rua + ", " + this.numero + " - " + this.cidade + "/" + this.estado + " - CEP: " + this.cep;
    }
}

class Telefone {
    ddd: number;
    numero: string;

    constructor(ddd: number, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }

    getDdd(): number {
        return this.ddd;
    }
    setDdd(novoDdd: number): void {
        this.ddd = novoDdd;
    }
    getDddMaiuscula(): string {
        return String(this.ddd).toUpperCase();
    }
    getDddMinuscula(): string {
        return String(this.ddd).toLowerCase();
    }

    getNumero(): string {
        return this.numero;
    }
    setNumero(novoNumero: string): void {
        this.numero = novoNumero;
    }
    getNumeroMaiuscula(): string {
        return this.numero.toUpperCase();
    }
    getNumeroMinuscula(): string {
        return this.numero.toLowerCase();
    }

    getDadosFormatados(): string {
        return "(" + this.ddd + ") " + this.numero;
    }
}

class Cliente {
    nome: string;
    email: string;
    telefone: Telefone;
    endereco: Endereco;

    constructor(nome: string, email: string, telefone: Telefone, endereco: Endereco) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    getNome(): string {
        return this.nome;
    }
    setNome(novoNome: string): void {
        this.nome = novoNome;
    }
    getNomeMaiuscula(): string {
        return this.nome.toUpperCase();
    }
    getNomeMinuscula(): string {
        return this.nome.toLowerCase();
    }

    getEmail(): string {
        return this.email;
    }
    setEmail(novoEmail: string): void {
        this.email = novoEmail;
    }
    getEmailMaiuscula(): string {
        return this.email.toUpperCase();
    }
    getEmailMinuscula(): string {
        return this.email.toLowerCase();
    }

    getTelefone(): Telefone {
        return this.telefone;
    }
    setTelefone(novoTelefone: Telefone): void {
        this.telefone = novoTelefone;
    }

    getEndereco(): Endereco {
        return this.endereco;
    }
    setEndereco(novoEndereco: Endereco): void {
        this.endereco = novoEndereco;
    }

    getDadosFormatados(): string {
        return "Cliente: " + this.nome + "\n" +
            "E-mail: " + this.email + "\n" +
            "Telefone: " + this.telefone.getDadosFormatados() + "\n" +
            "Endereço: " + this.endereco.getDadosFormatados();
    }
}

function ordenarClientesPorNome(clientes: Cliente[]): Cliente[] {
    const clientesOrdenados = clientes.slice();

    clientesOrdenados.sort((clienteA, clienteB) => {
        const nomeA = clienteA.getNome().toLowerCase();
        const nomeB = clienteB.getNome().toLowerCase();

        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    });

    return clientesOrdenados;
}

const endereco1 = new Endereco("Rua das Flores", 123, "São José dos Campos", "SP", "12200-000");
const endereco2 = new Endereco("Avenida Brasil", 456, "São Paulo", "SP", "01000-000");
const endereco3 = new Endereco("Rua Sete de Setembro", 789, "Campinas", "SP", "13000-000");

const telefone1 = new Telefone(12, "98765-4321");
const telefone2 = new Telefone(11, "91234-5678");
const telefone3 = new Telefone(19, "99888-7766");

const cliente1 = new Cliente("Nathan Leão", "nathan@email.com", telefone1, endereco1);
const cliente2 = new Cliente("Bruna Costa", "bruna@email.com", telefone2, endereco2);
const cliente3 = new Cliente("André Martins", "andre@email.com", telefone3, endereco3);

console.log("Nome original:", cliente1.getNome());
cliente1.setNome("Nathan Ariel");
console.log("Nome após set:", cliente1.getNome());

console.log("Nome em maiúscula:", cliente1.getNomeMaiuscula());
console.log("Cidade em minúscula:", endereco1.getCidadeMinuscula());

const clientes: Cliente[] = [cliente1, cliente2, cliente3];

for (let i = 0; i < clientes.length; i++) {
    console.log(clientes[i].getDadosFormatados());
}

const clientesOrdenados = ordenarClientesPorNome(clientes);

for (let j = 0; j < clientesOrdenados.length; j++) {
    console.log(clientesOrdenados[j].getNome());
}

for (let k = 0; k < clientes.length; k++) {
    console.log(clientes[k].getNome());
}