import {  MouseEventHandler } from 'react'
import Button from "../button"
import styles from './styles.module.css'
import CalculatorActions from '../../types/enums/calculator-actions'
import MathOperations from '../../types/enums/math-operations'

export type KeypadType = {
  onNumberButtonClick?: MouseEventHandler<HTMLButtonElement>
  onEqualButtonClick?: MouseEventHandler<HTMLButtonElement>
  onSubtractButtonClick?: MouseEventHandler<HTMLButtonElement>
  onAddButtonClick?: MouseEventHandler<HTMLButtonElement>
  onDivisionButtonClick?: MouseEventHandler<HTMLButtonElement>
  onMultiplyButtonClick?: MouseEventHandler<HTMLButtonElement>
  onClearButtonClick?: MouseEventHandler<HTMLButtonElement>
  onHistoryButtonClick?: MouseEventHandler<HTMLButtonElement>
  onBackspaceButtonClick?: MouseEventHandler<HTMLButtonElement>
  onDotButtonClick?: MouseEventHandler<HTMLButtonElement>
}

const Keypad = ({ 
  onNumberButtonClick: onButtonClick,
  onAddButtonClick,
  onClearButtonClick,
  onDivisionButtonClick,
  onEqualButtonClick,
  onHistoryButtonClick,
  onMultiplyButtonClick,
  onSubtractButtonClick,
  onBackspaceButtonClick
 }: KeypadType) => {
  const numberButtons = Array.from({ length: 10 })
    .map((_, index) => (
      <Button onClick={onButtonClick} key={index}>
        {index}
      </Button>
    ))

    // TODO: update buttons to use svg for history and backspace
    // TODO: fix button positions to match design
  return (
    <div className={styles.container}>
      <Button variant='secondary' onClick={onHistoryButtonClick}>{CalculatorActions.history}</Button>
      <Button variant='secondary' onClick={onClearButtonClick}>{CalculatorActions.clearAll}</Button>
      <Button variant='secondary' onClick={onMultiplyButtonClick}>{MathOperations.multiply}</Button>
      <Button variant='secondary' onClick={onDivisionButtonClick}>{MathOperations.division}</Button>
      

      <Button variant='secondary' onClick={onAddButtonClick}>{MathOperations.add}</Button>
      <Button variant='secondary' onClick={onSubtractButtonClick}>{MathOperations.subtract}</Button>
      <Button variant='primary' onClick={onEqualButtonClick}>{MathOperations.equals}</Button>
        {numberButtons}
      <Button onClick={onBackspaceButtonClick}>
        {CalculatorActions.backspace}
      </Button>
      <Button onClick={onButtonClick}>
        {CalculatorActions.dot}
      </Button>
      
    </div>
  )
}

export default Keypad