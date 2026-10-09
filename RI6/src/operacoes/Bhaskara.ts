import { Operacao } from "./Operacao";

/**
 * Raízes de ax² + bx + c = 0 pela fórmula de Bhaskara.
 * Herda direto de Operacao porque trabalha com TRÊS números (a, b, c).
 */
export class Bhaskara extends Operacao {
  constructor() {
    super("Equação do 2º grau (Bhaskara)", 3);
  }

  protected calcular(valores: number[]): string {
    const [a, b, c] = valores as [number, number, number];

    if (a === 0) {
      throw new Error("O coeficiente 'a' não pode ser zero (não é uma equação do 2º grau).");
    }

    const delta = b * b - 4 * a * c;
    const cabecalho = `${a}x² + ${b}x + ${c} = 0  →  Δ = ${this.arredondar(delta)}`;

    if (delta < 0) {
      return `${cabecalho}\nNão existem raízes reais (Δ < 0).`;
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = this.arredondar((-b + raizDelta) / (2 * a));
    const x2 = this.arredondar((-b - raizDelta) / (2 * a));

    if (delta === 0) {
      return `${cabecalho}\nUma raiz real (dupla): x = ${x1}`;
    }
    return `${cabecalho}\nx₁ = ${x1}\nx₂ = ${x2}`;
  }
}
