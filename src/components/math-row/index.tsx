import MathOperations from "../../types/enums/math-operations"
import splitByMathOperation from "../../utils/math/split-by-math-operation"
import stringIsOperator from "../../utils/string-is-operator"
import MathAnswer from "../math-answer"
import MathOperator, {MathOperatorType} from "../math-operator"

export type MathRowType = Pick<MathOperatorType, 'variant'> & {
  text: string,
}

const MathRow = ({ text, variant }: MathRowType) => {
  const mathItems = splitByMathOperation(text)
  
  return (
    <label>
     {mathItems.map((item, index) => {
      if (stringIsOperator(item) && item === MathOperations.equals) {
        return <MathOperator value={item} variant={MathOperations.equals} />
      }
      
      if (stringIsOperator(item)) return <MathOperator value={item} variant={variant} />

      if (mathItems.length -1 === index && mathItems[mathItems.length -2] === MathOperations.equals) {
        return <MathAnswer value={item} />
      }

      return item
     })}
    </label>
  )
}

export default MathRow