import MathOperations from '../../types/enums/math-operations'
import styles from './styles.module.css'

export type MathOperatorType = {
  value: string
  variant?: MathOperations.equals | 'history'
}



const MathOperator = ({ value, variant }: MathOperatorType) => {
  const calculatedStyles = `
    ${styles.operator} 
    ${variant === MathOperations.equals ? styles.equals : ''}
    ${variant === 'history' ? styles.history : ''}
    `

    console.log({variant})
  
  return (
  <span className={calculatedStyles}>
    {value}
  </span>
)
  }

export default MathOperator