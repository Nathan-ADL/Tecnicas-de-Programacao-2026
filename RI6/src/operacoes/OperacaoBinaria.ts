import { Operacao } from "./Operacao";

/**
 * HERANÇA: toda operação "básica" trabalha com exatamente dois números.
 * Esta classe cuida do que é comum e deixa para as filhas apenas `operar`.
 */
export abstract class OperacaoBinaria extends Operacao {
  private readonly _simbolo: string;

  constructor(nome: string, simbolo: string) {
    super(nome, 2);
    this._simbolo = simbolo;
  }

  protected calcular(valores: number[]): string {
    const [a, b] = valores as [number, number];
    const resultado = this.arredondar(this.operar(a, b));
    return this.formatar(a, b, resultado);
  }

  /** Cada operação concreta define apenas a sua conta. */
  protected abstract operar(a: number, b: number): number;

  /** Formatação padrão: "a símbolo b = resultado". Pode ser sobrescrita. */
  protected formatar(a: number, b: number, resultado: number): string {
    return `${a} ${this._simbolo} ${b} = ${resultado}`;
  }
}
