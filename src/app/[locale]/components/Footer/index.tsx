'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'

import Logo from '../Logo'
import S from './Footer.module.scss'

const Footer = ({ forceShow = false }: { forceShow?: boolean }) => {
  const t = useTranslations('Footer')
  const isSubscriptionPage = usePathname().includes('subscription')
  const isFormPage =
    usePathname().includes('form') || (isSubscriptionPage && !forceShow)

  const goToSendMail = () => {
    window.open(URLS.MAIL, '_blank')
  }

  return (
    <>
      {!isFormPage && (
        <footer className={S.wrap}>
          <div className="container">
            <div className={S.content}>
              <Link href={URLS.FORM} className={S.form}>
                <div className={S.titleWrap}>
                  <span className={S.title}>{'→'}</span>
                  <span className={S.title}>{t('title')}</span>
                </div>
                <div className={S.manager}>
                  <Image
                    src={'/images/peoples/4.png'}
                    width={40}
                    height={40}
                    alt="manager"
                    style={{ borderRadius: '50%' }}
                  />
                  <div className={S.managerDescWrap}>
                    <span className={S.managerTitle}>{t('maria')}</span>
                    <span className={S.managerDesc}>{t('manager')}</span>
                  </div>
                </div>
              </Link>
              <div className={S.info}>
                <video
                  playsInline
                  src="/videos/footer.mp4"
                  className={S.video}
                  autoPlay
                  loop
                  muted
                ></video>
                <div className={S.header}>
                  <Logo />
                  <div className={S.buttons}>
                    <Link href={URLS.WHATSAPP} className={S.socialBtn}>
                      WA
                    </Link>
                    <Link href={URLS.TELEGRAM} className={S.socialBtn}>
                      TG
                    </Link>
                    <button onClick={goToSendMail} className={S.socialBtn}>
                      @
                    </button>
                  </div>
                </div>
                <div className={S.list}>
                  <div className={S.links}>
                    <Link href={URLS.ABOUT} className={S.text}>
                      {t('about')}
                    </Link>
                    <Link href={URLS.SERVICE} className={S.text}>
                      {t('prices')}
                    </Link>
                    <Link href={URLS.PROJECTS} className={S.text}>
                      {t('projects')}
                    </Link>
                    <Link href={URLS.CONTACTS} className={S.text}>
                      {t('contacts')}
                    </Link>
                  </div>

                  <div className={S.links}>
                    <span className={S.text}>+39 370 102 24 25</span>
                    <button onClick={goToSendMail} className={S.mailBtn}>
                      <span className={S.text}>info@intersson.com</span>
                    </button>
                  </div>
                  <span className={S.text}>© 2018 – 2026</span>
                  <div className={S.descWrap}>
                    <Link href={URLS.POLICY} className={S.text}>
                      {t('policy')}
                    </Link>
                    {/* <Link href={URLS.POLICY} className={S.text}>
                      {t('usePolicy')}
                    </Link> */}
                  </div>
                </div>
                <div className={S.mobileList}>
                  <div className={S.links}>
                    <Link href={URLS.ABOUT} className={S.text}>
                      {t('about')}
                    </Link>
                    <Link href={URLS.SERVICE} className={S.text}>
                      {t('prices')}
                    </Link>
                    <Link href={URLS.POLICY} className={S.text}>
                      {t('policy')}
                    </Link>
                  </div>
                  <div className={S.links}>
                    <Link href={URLS.PROJECTS} className={S.text}>
                      {t('projects')}
                    </Link>
                    <Link href={URLS.CONTACTS} className={S.text}>
                      {t('contacts')}
                    </Link>
                    {/* <Link href={URLS.POLICY} className={S.text}>
                      {t('usePolicy')}
                    </Link> */}
                  </div>

                  <span className={S.text}>+39 370 102 24 25</span>
                  <button onClick={goToSendMail} className={S.mailBtn}>
                    <span className={S.text}>info@intersson.com</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={S.line}>
            <span className={S.tag}>React</span>
            <span className={S.tag}>Vue</span>
            <span className={S.tag}>Redux</span>
            <span className={S.tag}>Nuxt</span>
            <span className={S.tag}>Typescript</span>
            <span className={S.tag}>PHP</span>
            <span className={S.tag}>Laravel</span>
            <span className={S.tag}>Yii2</span>
          </div>
        </footer>
      )}
    </>
  )
}

export default Footer
