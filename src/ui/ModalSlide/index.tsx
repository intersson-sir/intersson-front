'use client'

import * as DialogRadix from '@radix-ui/react-dialog'
import classNames from 'classnames'

import S from './ModalSlide.module.scss'

export type DialogProps = {
  children: React.ReactNode | JSX.Element
  withoutClose?: boolean
  open: boolean
  toggleOpen: (val: boolean) => void
  className?: string
  scrollable?: boolean
}

const ModalSlide = ({
  children,
  withoutClose,
  open,
  className,
  toggleOpen,
  scrollable
}: DialogProps) => {
  return (
    <DialogRadix.Root open={open} onOpenChange={toggleOpen}>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className={S.DialogOverlay} />
        <DialogRadix.Content
          className={S.ContentWrapper}
          onClick={() => toggleOpen(!open)}
        >
          <div
            className={classNames(className, S.DialogContent)}
            onClick={e => e.stopPropagation()}
          >
            {!withoutClose && (
              <DialogRadix.Close className={S.closeIcon}>
                <span>←</span>
              </DialogRadix.Close>
            )}

            {scrollable ? (
              <div className={S.scrollabel}>{children}</div>
            ) : (
              children
            )}
          </div>
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}

export default ModalSlide
