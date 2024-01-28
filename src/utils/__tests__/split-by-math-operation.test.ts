import { expect, test, describe } from 'vitest'
import splitByMathOperation from '../math/split-by-math-operation'

describe('splitByMathOperation', () => {
  test('if math operation is full equation, should be valid', () => {
    const data = '1+1=2'
    const response = splitByMathOperation(data)
    const correct = ['1','+','1','=','2']
    
    expect(response).toEqual(correct)
  })

  test('if math operation is pre-answer, should be valid', () => {
    const data = '1+1'
    const response = splitByMathOperation(data)
    const correct = ['1','+','1']
    
    expect(response).toEqual(correct)
  })

  test('if math operation is a partial equation, should be valid', () => {
    const data = '1+'
    const response = splitByMathOperation(data)
    const correct = ['1','+']
    
    expect(response).toEqual(correct)
  })

  test('if math operation is just a number, should be valid', () => {
    const data = '1'
    const response = splitByMathOperation(data)
    const correct = ['1']
    
    expect(response).toEqual(correct)
  })
})
