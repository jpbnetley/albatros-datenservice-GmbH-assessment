import MathOperations from "../../types/enums/math-operations"
import stringIsOperator from "../string-is-operator"

export type MathNumberAccumulatorType = { results: string[], placeHolder?: string }

    /**
     * Takes the input and splits the numbers and math operators
     * in arrays. @example ['123','+', '12']
     * @param value that should be split
     * @returns split math and numbers
     */
const splitByMathOperation = (value: string) => {
  const letters =  [...value]
  const lettersMaxIndex = letters.length -1

  const { 
    results
   } = letters.reduce<MathNumberAccumulatorType>((accumulator, current, currentIndex) => {
    const {
      placeHolder,
      results
    } = accumulator

    if (lettersMaxIndex === currentIndex && !stringIsOperator(current)) {
      const newValue = placeHolder ? `${placeHolder}${current}` : current
      return {
        results: [...results, newValue]
      }
    }

    if ((lettersMaxIndex === currentIndex && !stringIsOperator(current)) || current === MathOperations.equals) {
      return {
        results: placeHolder ? [...results, placeHolder, current] : [...results, current]
      }
    }
    
    
    if (stringIsOperator(current)) {
      return {
       results: placeHolder 
        ? [...results, placeHolder, current] 
        : [...results, current],
       }
    }

    return {
      ...accumulator,
      placeHolder: placeHolder ? `${placeHolder}${current}` : current,
    }

  }, {results: []})
      
  return results
}

export default splitByMathOperation
