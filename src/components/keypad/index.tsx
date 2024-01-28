import {  MouseEventHandler } from 'react'
import Button from "../button"
import styles from './styles.module.css'
import CalculatorActions from '../../types/enums/calculator-actions'
import MathOperations from '../../types/enums/math-operations'
import KeyPadButtonRow from '../keypad-button-row'

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

    // TODO: update buttons to use svg for history and backspace

  return (
    <div className={styles.container}>
      <Button variant='secondary' onClick={onHistoryButtonClick}><img src='/calculator/history_icon.svg' /></Button>
      <Button variant='secondary' onClick={onClearButtonClick}>{CalculatorActions.clearAll}</Button>
      <Button variant='secondary' onClick={onMultiplyButtonClick}>{MathOperations.multiply}</Button>
      <Button variant='secondary' onClick={onDivisionButtonClick}>{MathOperations.division}</Button>

      <Button variant='secondary' onClick={onAddButtonClick} style={{ gridRowStart: 2, gridColumn: 4 }}>
        {MathOperations.add}
      </Button>
      <Button variant='secondary' onClick={onSubtractButtonClick} style={{ gridRowStart: 3, gridColumn: 4 }}>
        {MathOperations.subtract}
      </Button>
      <Button variant='primary' onClick={onEqualButtonClick}  style={{ gridRowStart: 4, gridRowEnd: 6, gridColumn: 4 }}>
        {MathOperations.equals}
      </Button>

      <KeyPadButtonRow length={3} startValue={7} onClick={onButtonClick} />
      <KeyPadButtonRow length={3} startValue={4} onClick={onButtonClick} />
      <KeyPadButtonRow length={3} startValue={1} onClick={onButtonClick} />

      <Button onClick={onButtonClick}>
        0
      </Button>

      <Button onClick={onBackspaceButtonClick} style={{ gridRowStart: 5, gridColumn: 1 }}>
        <img src='/calculator/back-space.svg' />
      </Button>
      <Button onClick={onButtonClick}>
        {CalculatorActions.dot}
      </Button>
    </div>
  )
}

export default Keypad
