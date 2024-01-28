import { expect, test, describe } from 'vitest'
import calculateMath from '../math/calculate-math'

describe('calculateMath', () => {
  test('if basic sum is added, should sum correct answer', () => {
    const data = '1+1'
    const response = calculateMath(data)
    const correct = 2
    
    expect(response).toBe(correct)
  })

  test('if basic sum is added multiple times, should sum correct answer', () => {
    const data = '1+1+1+1'
    const response = calculateMath(data)
    const correct = 4
    
    expect(response).toBe(correct)
  })

  test('if basic subtraction is made multiple times, should yield correct answer', () => {
    const data = '1-1-1-1'
    const response = calculateMath(data)
    const correct = -2
    
    expect(response).toBe(correct)
  })

  test('if basic multiplication is made multiple times, should yield correct answer', () => {
    const data = '10 * 20'
    const response = calculateMath(data)
    const correct = 200
    
    expect(response).toBe(correct)
  })

  test('if basic division is made multiple times, should yield correct answer', () => {
    const data = '10 / 10'
    const response = calculateMath(data)
    const correct = 1
    
    expect(response).toBe(correct)
  })
})
