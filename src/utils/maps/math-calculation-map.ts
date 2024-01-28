import MathOperations from "../../types/enums/math-operations"

const MATH_CALCULATION_MAP = {
  [MathOperations.add]: (val1: number, val2: number) => val1 + val2,
  [MathOperations.division]: (val1: number, val2: number) => val1 / val2,
  [MathOperations.equals]: null,
  [MathOperations.multiply]: (val1: number, val2: number) => val1 * val2,
  [MathOperations.subtract]: (val1: number, val2: number) => val1 - val2,
} as const

export default MATH_CALCULATION_MAP