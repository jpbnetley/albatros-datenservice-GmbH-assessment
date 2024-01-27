import MathRow from '../math-row'
import styles from './styles.module.css'

export type DisplayType = {
  value?: string
}

const Display = ({ 
  value, 
}: DisplayType) => {
  
  return (
  <div className={styles.display}>
    {value && <MathRow text={value} />}
  </div>
)
}

export default Display