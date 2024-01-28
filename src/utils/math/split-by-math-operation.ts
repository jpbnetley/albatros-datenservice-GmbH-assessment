import MathOperations from "../../types/enums/math-operations"
import stringIsOperator from "../string-is-operator"

export type MathNumberAccumulatorType = { results: string[], placeHolder?: string }

/**
 * 
 *   console.log({
      test1: splitByMathOperation('1*11/7+12-10=100'),
      test2: splitByMathOperation('1*11'),
      test3: splitByMathOperation('1+11'),
      test4: splitByMathOperation('1+')
    })
 * 
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
