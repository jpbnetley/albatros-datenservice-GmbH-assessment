import { MouseEventHandler, useState } from "react"
import ActionsHistory from "../actions-history"
import Display from "../display"
import Keypad from "../keypad"
import styles from './styles.module.css'
import MathOperations from "../../types/enums/math-operations"

const Calculator = () => {
  const [history, setHistory] = useState<string[]>([])
  const [displayText, setDisplayText] = useState<string>('')
  const [showCalculationHistory, setShowCalculationHistory] = useState<boolean>(false)

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = event => {
    const textContent = event.currentTarget.textContent ?? ''
    

    if (displayText.includes(MathOperations.equals)){
      setHistory(previousHistory => [...previousHistory, displayText])
      setDisplayText(textContent)
      return
    }

    setDisplayText(text => `${text}${textContent}`)
  }

  const handleEqualButtonClick = () => {   
    const textAnswer: string | undefined = displayText.split(MathOperations.equals)[1]
    if (textAnswer) return
    
    //TODO: calculate answer based on user input
    const answer = 0
    const newDisplayText = `${displayText}=${answer}`
    setDisplayText(newDisplayText)
  }

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