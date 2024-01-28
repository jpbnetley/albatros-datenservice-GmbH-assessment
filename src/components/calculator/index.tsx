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
  const [lastAnswer, setLastAnswer] = useState<number | undefined>()
  const [showCalculationHistory, setShowCalculationHistory] = useState<boolean>(false)

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = event => {
    const textContent = event.currentTarget.textContent ?? ''

    if (displayText.includes(MathOperations.equals) && !stringIsOperator(textContent)) return setDisplayText(textContent)

    setDisplayText(text => `${text}${textContent}`)
  }

  const handleMathOperatorButtonClick: MouseEventHandler<HTMLButtonElement> = event => {
    if (lastAnswer && displayText.includes(MathOperations.equals)) setDisplayText(lastAnswer.toString())
    handleButtonClick(event)
  }

  const handleEqualButtonClick = handleError(
    () => {   
      const hasDisplayText = !!displayText.length
      const answerHasEquals = displayText.includes(MathOperations.equals)
      const endsWithOperator = stringIsOperator(displayText[displayText.length -1])

      if (answerHasEquals || !hasDisplayText || endsWithOperator) return
      
      const answer = calculateMath(displayText)
      setLastAnswer(answer)
      const newDisplayText = `${displayText}=${answer}`
      setDisplayText(newDisplayText)

      setHistory(previousHistory => [...previousHistory, newDisplayText])
  })

  const handleBackspaceButtonClick = () => {
    setDisplayText(text => text.slice(0, text.length -1))
  }

  const handleAllClearButtonCLick = () => {
    setDisplayText('')
  }

  const handleToggleShowCalculationHistory = () => setShowCalculationHistory(showHistory => !showHistory)

  return (
    <div className={styles.container}>
      <ActionsHistory 
       history={history}
       onBackClick={handleToggleShowCalculationHistory} 
       showCalculationHistory={showCalculationHistory} 
      />
      {!showCalculationHistory && (
        <>
          <Display value={displayText} />
          <Keypad 
            onNumberButtonClick={handleButtonClick} 
            onAddButtonClick={handleMathOperatorButtonClick}
            onSubtractButtonClick={handleMathOperatorButtonClick}
            onMultiplyButtonClick={handleMathOperatorButtonClick}
            onDivisionButtonClick={handleMathOperatorButtonClick}
            onClearButtonClick={handleAllClearButtonCLick}
            onEqualButtonClick={handleEqualButtonClick}
            onBackspaceButtonClick={handleBackspaceButtonClick}
            onHistoryButtonClick={handleToggleShowCalculationHistory}
            />
        </>
      )}
    </div>
)}

export default Calculator