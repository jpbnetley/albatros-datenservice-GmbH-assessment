import MathOperations from '../../types/enums/math-operations'
import styles from './styles.module.css'

export type MathOperatorType = {
  value: string
  variant?: MathOperations.equals
}

const MathOperator = ({ value }: MathOperatorType) => (
  <span className={styles.operator}>
    {value}
  </span>
)

export default MathOperator