'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useLocale } from 'next-intl'

import { Link, usePathname } from '@/navigation'

import S from './LocaleSwitch.module.scss'

const LocaleSwitch = ({ onClick }: { onClick?: () => void }) => {
  const locale = useLocale()
  const pathname = usePathname()

  const closeModal = () => {
    onClick && onClick()
  }
  return (
    <div className={S.wrap}>
      <Link
        className={S.wrap}
        locale={'ru'}
        href={pathname}
        onClick={closeModal}
      >
        <Image
          src={'/images/ru.png'}
          width={12}
          height={12}
          alt="ru"
          className={classNames(S.icon, locale === 'en' && S.disabledIcon)}
        />
        <span className={classNames(S.item, locale === 'en' && S.disabled)}>
          ru
        </span>
      </Link>
      <span className={S.slash}>/</span>
      <Link
        className={S.wrap}
        locale={'en'}
        href={pathname}
        onClick={closeModal}
      >
        <Image
          src={'/images/en.png'}
          width={12}
          height={12}
          alt="ru"
          className={classNames(S.icon, locale === 'ru' && S.disabledIcon)}
        />
        <span className={classNames(S.item, locale === 'ru' && S.disabled)}>
          en
        </span>
      </Link>
    </div>
  )
}

export default LocaleSwitch
