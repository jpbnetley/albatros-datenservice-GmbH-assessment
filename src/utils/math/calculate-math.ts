import MathOperations from "../../types/enums/math-operations"
import isMathOperator from "../../types/helper/is-math-operator"
import MATH_CALCULATION_MAP from "../maps/math-calculation-map"
import stringIsOperator from "../string-is-operator"
import splitByMathOperation from "./split-by-math-operation"

export type MathReducer = {
  total?: number
  operator?: MathOperations
}

/**
 * calculates the math based on the string provided
 * caution: this function can throw errors, so should be handled consuming side.
 * @param mathText 
 * @returns the math answer
 */
const calculateMath = (mathText: string) => {
  const mathItems = splitByMathOperation(mathText)

  const {total = 0} =  mathItems.reduce<MathReducer>((accumulator, current, currentIndex): MathReducer => {
    const isOperator = stringIsOperator(current)
    
    const {
      operator,
      total
    } = accumulator

    if (isOperator && isMathOperator(current)) {
      return { ...accumulator, operator: current}
    }

   
    if (Number.isNaN(current)) throw new Error(`Invalid number found: ${current}`)
    
    const parsedNumber = Number.parseInt(current)
    if (currentIndex === 0) return { total: parsedNumber }
    
    const mathOperatorExecution = operator ? MATH_CALCULATION_MAP[operator] : null
    
    if (mathOperatorExecution === null) throw new Error(`Invalid math operation: ${operator}`)

    const answer = mathOperatorExecution(total ?? 0, parsedNumber)
    
    return { total: answer }
  }, {})

  return total
}

export default calculateMath