import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Operacao } from "./operacoes/Operacao";
import { Soma } from "./operacoes/Soma";
import { Subtracao } from "./operacoes/Subtracao";
import { Multiplicacao } from "./operacoes/Multiplicacao";
import { Divisao } from "./operacoes/Divisao";
import { Potenciacao } from "./operacoes/Potenciacao";
import { Radiciacao } from "./operacoes/Radiciacao";
import { Bhaskara } from "./operacoes/Bhaskara";

export class Calculadora {
  // ENCAPSULAMENTO: a lista de operações não é acessível de fora.
  private readonly operacoes: Operacao[] = [
    new Soma(),
    new Subtracao(),
    new Multiplicacao(),
    new Divisao(),
    new Potenciacao(),
    new Radiciacao(),
    new Bhaskara(),
  ];

  async iniciar(): Promise<void> {
    const rl = readline.createInterface({ input, output });
    console.log("=== Calculadora POO ===");

    try {
      let continuar = true;
      while (continuar) {
        this.mostrarMenu();
        const resposta = (await rl.question("Escolha uma opção: ")).trim();

        if (resposta === "0") {
          continuar = false;
          continue;
        }

        const operacao = this.operacoes[Number(resposta) - 1];
        if (!operacao) {
          console.log("Opção inválida.\n");
          continue;
        }

        try {
          const valores = await this.lerNumeros(rl, operacao);
          // POLIMORFISMO: não importa qual é a operação, o chamado é sempre o mesmo.
          console.log(`\n${operacao.executar(valores)}\n`);
        } catch (erro) {
          console.log(`\nErro: ${(erro as Error).message}\n`);
        }
      }
    } finally {
      rl.close();
    }
    console.log("Até logo!");
  }

  private mostrarMenu(): void {
    this.operacoes.forEach((op, i) => console.log(`${i + 1} - ${op.nome}`));
    console.log("0 - Sair");
  }

  private async lerNumeros(
    rl: readline.Interface,
    operacao: Operacao
  ): Promise<number[]> {
    const perguntas =
      operacao.quantidadeDeNumeros === 3
        ? ["Coeficiente a: ", "Coeficiente b: ", "Coeficiente c: "]
        : ["Primeiro número: ", "Segundo número: "];
    const valores: number[] = [];

    for (const pergunta of perguntas) {
      const texto = (await rl.question(pergunta)).trim().replace(",", ".");
      const numero = Number(texto);
      if (texto === "" || Number.isNaN(numero)) {
        throw new Error(`"${texto}" não é um número válido.`);
      }
      valores.push(numero);
    }
    return valores;
  }
}
