import styles from './styles.module.css'

export type MathOperatorType = {
  value: string
}

const MathOperator = ({ value }: MathOperatorType) => (
  <span className={styles.operator}>
    {value}
  </span>
)

export default MathOperator