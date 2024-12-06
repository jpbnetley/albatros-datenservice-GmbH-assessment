import React, { DetailedHTMLProps, ReactNode } from "react"
import styles from './styles.module.css'

export type ButtonType = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children?: ReactNode
  variant?: 'default' | 'primary' | 'secondary'
}

const Button = ({
  children,
  variant = 'default',
  ...buttonProps
}: ButtonType) => (
  <button {...buttonProps} className={`${styles['button']} ${styles[variant]}`}>
    {children}
   </button>
)

export default Button