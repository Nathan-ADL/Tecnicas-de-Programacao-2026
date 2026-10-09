import { OperacaoBinaria } from "./OperacaoBinaria";

/**
 * Primeiro número = radicando, segundo número = índice da raiz.
 * Ex.: 27 e 3 → raiz cúbica de 27.
 */
export class Radiciacao extends OperacaoBinaria {
  constructor() {
    super("Radiciação", "√");
  }

  protected operar(radicando: number, indice: number): number {
    if (!Number.isInteger(indice) || indice < 1) {
      throw new Error("O índice da raiz deve ser um inteiro maior ou igual a 1.");
    }
    if (radicando < 0) {
      if (indice % 2 === 0) {
        throw new Error("Não existe raiz real de índice par para número negativo.");
      }
      return -Math.pow(-radicando, 1 / indice);
    }
    return Math.pow(radicando, 1 / indice);
  }

  // Sobrescreve a formatação padrão: "índice√radicando = resultado"
  protected formatar(radicando: number, indice: number, resultado: number): string {
    return `${indice}√${radicando} = ${resultado}`;
  }
}
