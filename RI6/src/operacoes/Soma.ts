import { OperacaoBinaria } from "./OperacaoBinaria";

export class Soma extends OperacaoBinaria {
  constructor() {
    super("Soma", "+");
  }

  protected operar(a: number, b: number): number {
    return a + b;
  }
}
