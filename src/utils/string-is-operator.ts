import MathOperations from "../types/enums/math-operations";

/**
 * checks if a string is an operator
 * @param text text to match
 * @returns true if its an operator, false if not
 */
const stringIsOperator = (text: string) => Object.values<string>(MathOperations).includes(text)

export default stringIsOperator