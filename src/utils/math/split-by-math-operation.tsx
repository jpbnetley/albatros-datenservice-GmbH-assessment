import MathOperations from "../../types/enums/math-operations"

const splitByMathOperation = (value: string) => {
  // TODO: split numbers and operator, eg 20-1=19 should be [20, -, 1, =, 19]
  const items = Object.values(MathOperations).reduce<string[]>((accumulator, operator) => {
    if (!value.includes(operator)) return accumulator

    const mathWithOperatorSplit = value.split(operator).flatMap(item => [item, operator])
    return [...accumulator, ...mathWithOperatorSplit]
  }, [])
  
  return items
}

export default splitByMathOperation
