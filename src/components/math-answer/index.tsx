import styles from './styles.module.css'

export type MathAnswerType = {
  value: string
}

const MathAnswer = ({ value }: MathAnswerType) => (
  <span className={styles.answer}>
    {value}
  </span>
)

export default MathAnswer