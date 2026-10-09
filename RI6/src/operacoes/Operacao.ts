/**
 * Classe abstrata: define o "contrato" que toda operação precisa seguir.
 *
 * - ENCAPSULAMENTO: nome e quantidade de números são privados (só leitura via getters).
 * - POLIMORFISMO: quem usa uma Operacao chama sempre `executar()`,
 *   sem saber qual operação concreta está por trás.
 */
export abstract class Operacao {
  private readonly _nome: string;
  private readonly _quantidadeDeNumeros: number;

  constructor(nome: string, quantidadeDeNumeros: number) {
    this._nome = nome;
    this._quantidadeDeNumeros = quantidadeDeNumeros;
  }

  get nome(): string {
    return this._nome;
  }

  get quantidadeDeNumeros(): number {
    return this._quantidadeDeNumeros;
  }

  /** Valida a entrada e delega o cálculo para a classe filha. */
  executar(valores: number[]): string {
    if (valores.length !== this._quantidadeDeNumeros) {
      throw new Error(
        `A operação "${this._nome}" exige ${this._quantidadeDeNumeros} números.`
      );
    }
    return this.calcular(valores);
  }

  /** Cada operação implementa o seu próprio cálculo e devolve o texto do resultado. */
  protected abstract calcular(valores: number[]): string;

  /** Evita ruídos de ponto flutuante (ex.: 3.9999999999999996 → 4). */
  protected arredondar(valor: number): number {
    return Number(valor.toPrecision(12));
  }
}
