import Button, { ButtonType } from "../button"

export type KeyPadButtonRowType = ButtonType & {
  length: number
  startValue: number,
}

const KeyPadButtonRow = ({ length, startValue, ...rest }: KeyPadButtonRowType) => {
  const numberButtons = Array.from({ length })
  .map((_, index) => (
    <Button {...rest} key={index}>
      {startValue + index}
    </Button>
  ))

  return numberButtons
}

export default KeyPadButtonRow