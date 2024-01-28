import { MouseEventHandler, useState } from "react"
import ActionsHistory from "../actions-history"
import Display from "../display"
import Keypad from "../keypad"
import styles from './styles.module.css'
import MathOperations from "../../types/enums/math-operations"
import stringIsOperator from "../../utils/string-is-operator"
import calculateMath from "../../utils/math/calculate-math"
import handleError from "../../utils/error-handlers/handle-error"

const Calculator = () => {
  const [history, setHistory] = useState<string[]>([])
  const [displayText, setDisplayText] = useState<string>('')
  const [showCalculationHistory, setShowCalculationHistory] = useState<boolean>(false)

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = event => {
    const textContent = event.currentTarget.textContent ?? ''
    // TODO: 6. When an operation key is pressed to start a new calculation the result of the previous calculation is used as the first number of the new calculation.
    

    if (displayText.includes(MathOperations.equals)){
      setHistory(previousHistory => [...previousHistory, displayText])
      setDisplayText(textContent)
      return
    }

    setDisplayText(text => `${text}${textContent}`)
  }

  const handleEqualButtonClick = handleError(
    () => {   
      const hasDisplayText = !!displayText.length
      const answerHasEquals = !!displayText.split(MathOperations.equals)[1]
      const endsWithOperator = stringIsOperator(displayText[displayText.length -1])

      if (answerHasEquals || !hasDisplayText || endsWithOperator) return
      
      const answer = calculateMath(displayText)
      const newDisplayText = `${displayText}=${answer}`
      setDisplayText(newDisplayText)
  })

  const handleBackspaceButtonClick = () => {
    setDisplayText(text => text.slice(0, text.length -1))
  }

  const handleAllClearButtonCLick = () => {
    setDisplayText('')
  }

  const handleShowCalculationHistory = () => setShowCalculationHistory(history => !history)

  const handleShowCalculatorHistory = () => setShowCalculationHistory(shouldShow => !shouldShow)
  
  return (
    <div className={styles.container}>
      <ActionsHistory 
       history={history}
       onShowActionHistoryClick={handleShowCalculatorHistory} 
       showCalculationHistory={showCalculationHistory} 
      />
      {!showCalculationHistory && (
        <>
          <Display value={displayText} />
          <Keypad 
            onNumberButtonClick={handleButtonClick} 
            onAddButtonClick={handleButtonClick}
            onSubtractButtonClick={handleButtonClick}
            onMultiplyButtonClick={handleButtonClick}
            onDivisionButtonClick={handleButtonClick}
            onClearButtonClick={handleAllClearButtonCLick}
            onEqualButtonClick={handleEqualButtonClick}
            onBackspaceButtonClick={handleBackspaceButtonClick}
            onHistoryButtonClick={handleShowCalculationHistory}
            />
        </>
      )}
    </div>
)}

export default Calculator