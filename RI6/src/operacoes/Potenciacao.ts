import { OperacaoBinaria } from "./OperacaoBinaria";

export class Potenciacao extends OperacaoBinaria {
  constructor() {
    super("Potenciação", "^");
  }

  protected operar(base: number, expoente: number): number {
    const resultado = Math.pow(base, expoente);
    if (Number.isNaN(resultado)) {
      throw new Error("Resultado não é um número real para esses valores.");
    }
    return resultado;
  }
}
