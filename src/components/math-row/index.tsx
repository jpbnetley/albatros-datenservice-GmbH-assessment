export type MathRowType = {
  text: string
}

const MathRow = ({ text }: MathRowType) => {

// TODO: add operator color + blue etc;
  
  return <label>{text}</label>
}

export default MathRow