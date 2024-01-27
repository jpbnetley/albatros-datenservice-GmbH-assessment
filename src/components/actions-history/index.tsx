import  {MouseEventHandler } from 'react'
import Button from '../button'
import styles from './styles.module.css'
import MathRow from '../math-row'

export type ActionsHistoryType = {
  history: string[]
  showCalculationHistory?: boolean
  onShowActionHistoryClick?: MouseEventHandler<HTMLButtonElement>
}

const ActionsHistory = ({ 
  history, 
  showCalculationHistory, 
  onShowActionHistoryClick 
}: ActionsHistoryType) => {
  const shouldShowHideButton = showCalculationHistory && onShowActionHistoryClick 

    return (
    <div className={styles.container}>
      {shouldShowHideButton && <Button onClick={onShowActionHistoryClick}>Back</Button>}
      <div className={`${styles.content} ${shouldShowHideButton ? styles['full-screen'] : styles['default-screen']}`}>
        {history.length > 0 && history.map((history, index) => <MathRow key={index} text={history} />)}
      </div>
    </div>
  )
}

export default ActionsHistory