import stringIsOperator from "../../utils/string-is-operator";
import MathOperations from "../enums/math-operations";

const isMathOperator = (text: string): text is MathOperations => {
  return stringIsOperator(text)
}

export default isMathOperator