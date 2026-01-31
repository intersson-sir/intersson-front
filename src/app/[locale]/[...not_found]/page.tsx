import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'

import S from './Error.module.scss'

const NotFound = () => {
  const t = useTranslations('Error')

  return (
    <>
      <video
        playsInline
        src="/videos/footer.mp4"
        muted
        loop
        autoPlay
        className={S.video}
      ></video>
      <div className="container">
        <div className={S.wrap}>
          <div className={S.content}>
            <span className={S.title}>404</span>
            <span className={S.desc}>{t('title')}</span>
            <Link className={S.link} href={URLS.MAIN}>
              {t('btn')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
