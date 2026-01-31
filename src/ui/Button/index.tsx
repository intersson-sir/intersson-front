import classNames from 'classnames'
import { forwardRef } from 'react'

import S from './Button.module.scss'

export type ButtonSize = 'l' | 'm' | 's' | 'square'

export type ButtonColor = 'primary' | 'secondary'

export interface InputProps extends React.ComponentPropsWithoutRef<'button'> {
  size?: ButtonSize
  color?: ButtonColor
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, InputProps>(
  (
    {
      className,
      children,
      color = 'primary',
      size = 'l',
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        className={classNames(
          S.button,
          className,
          S[color],
          S[size],
          fullWidth && S.fullWidth
        )}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

export default Button
