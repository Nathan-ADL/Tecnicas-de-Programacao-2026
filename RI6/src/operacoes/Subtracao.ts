import { OperacaoBinaria } from "./OperacaoBinaria";

export class Subtracao extends OperacaoBinaria {
  constructor() {
    super("Subtração", "-");
  }

  protected operar(a: number, b: number): number {
    return a - b;
  }
}
