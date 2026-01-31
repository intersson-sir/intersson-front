'use client'

import classNames from 'classnames'
import React, { forwardRef, useState } from 'react'

import S from './Input.module.scss'

export interface TextArea extends React.ComponentPropsWithoutRef<'textarea'> {
  leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
  width?: 'form' | 'full' | 'step'
  label?: string
  errorMessage?: any
}

const TextArea = forwardRef<HTMLTextAreaElement, TextArea>(
  (
    {
      onChange,
      leftSlot,
      rightSlot,
      className,
      rows,
      cols,
      width,
      label,
      errorMessage,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(props.value)
    const inputClassName = classNames(S.el, {
      [S.formWidth]: width === 'form',
      [S.withLeftSpot]: !!leftSlot,
      [S.error]: errorMessage
    })

    const handlerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e)
      setValue(e.target.value)
    }

    return (
      <div className={S.inputWrap}>
        {label && value !== '' && <span className={S.label}>{label}</span>}
        <div
          className={classNames(S.root, className, {
            [S.withLeftSpot]: !!leftSlot
          })}
        >
          {leftSlot && <div className={S.leftSlot}>{leftSlot}</div>}

          <textarea
            ref={ref}
            onChange={handlerChange}
            rows={rows}
            cols={cols}
            className={inputClassName}
            {...props}
          />
          {rightSlot && <div className={S.rightSlot}>{rightSlot}</div>}
        </div>
        <div className={S.errorMessage}>{errorMessage ?? ''}</div>
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
