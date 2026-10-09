import { OperacaoBinaria } from "./OperacaoBinaria";

export class Multiplicacao extends OperacaoBinaria {
  constructor() {
    super("Multiplicação", "×");
  }

  protected operar(a: number, b: number): number {
    return a * b;
  }
}
