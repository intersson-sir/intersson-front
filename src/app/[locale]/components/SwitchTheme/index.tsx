'use client'

import classNames from 'classnames'
import { useTheme } from 'next-themes'
import Moon from 'public/icons/moon.svg'
import Sun from 'public/icons/sun.svg'

import S from './SwitchTheme.module.scss'

const SwitchTheme = ({ onClick }: { onClick?: () => void }) => {
  const { setTheme, theme } = useTheme()

  const handlerSwitch = () => {
    onClick && onClick()
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <div className={S.wrap}>
      <div className={S.switchInner} onClick={handlerSwitch}>
        <div
          className={classNames(
            S.switchCircle,
            theme === 'light' && S.switchOnRight
          )}
        >
          <div className={S.sun}>
            <Sun width={12} height={12} />
          </div>
          <div className={S.moon}>
            <Moon width={12} height={12} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchTheme
