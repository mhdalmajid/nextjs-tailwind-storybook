import classNames from 'classnames'
import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Define button behavior. Default: button
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  color?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Button contents
   */
  loading?: boolean
  /**
   * Optional click handler
   */
  onClick?: () => void
}
const buttonStyles = {
  base:
    'text-xl font-semibold border-2 text-center focus:outline-none rounded-full uppercase px-7 py-3 mx-auto block',
}
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  color = 'purple',
  label,
  loading,
  type = 'submit',
  ...props
}) => {
  const clrPurple = {
    'text-purple-400': color === 'purple',
    'border-purple-400': color === 'purple',
    'text-gray-400': color === 'gray',
    'border-gray-400': color === 'gray',
  }

  return (
    <button
      type={type}
      className={classNames(buttonStyles.base, clrPurple)}
      {...props}
    >
      {loading ? '...loading' : label}
    </button>
  )
}
