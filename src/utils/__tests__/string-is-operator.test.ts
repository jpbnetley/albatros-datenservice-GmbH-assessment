import { expect, test, describe } from 'vitest'
import MathOperations from "../../types/enums/math-operations"
import stringIsOperator from '../string-is-operator'

describe('stringIsOperator', () => {
  test('if mathoperator + is added, should be valid math operator', () => {
    const data = MathOperations.add
    const response = stringIsOperator(data)
    const correct = true
    
    expect(response).toBe(correct)
  })

  test('if mathoperator invalid is added, should be invalid math operator', () => {
    const data = 'invalidOp'
    const response = stringIsOperator(data)
    const correct = false
    
    expect(response).toBe(correct)
  })
})
