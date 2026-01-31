import Link from 'next/link'
import { useTranslations } from 'next-intl'

import S from './Email.module.scss'

const MAIL = `mailto:info@softpremier.io?subject=${encodeURIComponent(
  'Soft premier'
)}&body=${encodeURIComponent('Soft premier')}`

const Email = () => {
  const t = useTranslations('Contact')

  return (
    <div className={S.inner}>
      <div className="container">
        <div className={S.wrap}>
          <div className={S.info}>
            <span className={S.title}>{t('mail')}</span>
            <Link href={MAIL} target="_blank" className={S.desc}>
              press@softpremier.io
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Email
