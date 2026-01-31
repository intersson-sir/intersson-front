import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'

import S from './Form.module.scss'

const Form = () => {
  const t = useTranslations('Team')

  return (
    <Link href={URLS.FORM} className={S.wrap}>
      <span className={S.title}>{t('btn')}</span>
      <span className={S.arrow}>→</span>
    </Link>
  )
}

export default Form
