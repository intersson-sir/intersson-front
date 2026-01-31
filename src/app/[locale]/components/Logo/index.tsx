import Image from 'next/image'
import { useLocale } from 'next-intl'
import LogoTitle from 'public/icons/logo_title.svg'

import { localeType } from '@/configs/config'
import { Link } from '@/navigation'

import S from './Logo.module.scss'

const Logo = () => {
  const locale = useLocale() as localeType
  return (
    <Link className={S.logo} href={'/'} locale={locale}>
      <div className={S.logoImg}>
        <Image src={'/images/logo.png'} width={27} height={27} alt="logo" />
      </div>
      <div className={S.logoImgMobile}>
        <Image src={'/images/logo.png'} width={16} height={16} alt="logo" />
      </div>
      <div className={S.logoTitle}>
        <LogoTitle width={158} height={27} />
      </div>
      <div className={S.logoTitleMobile}>
        <LogoTitle width={85} height={16} />
      </div>
    </Link>
  )
}

export default Logo
