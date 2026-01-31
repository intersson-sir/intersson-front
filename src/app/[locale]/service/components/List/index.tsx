import Link from 'next/link'
import { useTranslations } from 'next-intl'

import URLS from '@/configs/urls'

import S from './List.module.scss'

const List = () => {
  const t = useTranslations('ServicePage.List')

  return (
    <div className="container">
      <div className={S.wrap}>
        <span className={S.title}>{t('title')}</span>
        <div className={S.list}>
          <div className={S.block}>
            <div className={S.headBlockInner}>
              <span className={S.index}>01</span>
              <span className={S.blockTitle}>{t('aiTitle')}</span>
            </div>
            <div className={S.blockInner}>
              <span className={S.desc}>{t('aiDesc')}</span>
              <Link href={URLS.SERVICE_AI}>
                <span className={S.detailsTitle}>{t('details')}</span>
              </Link>
            </div>
          </div>
          <div className={S.line}></div>
          <div className={S.block}>
            <div className={S.headBlockInner}>
              <span className={S.index}>02</span>
              <span className={S.blockTitle}>{t('web3Title')}</span>
            </div>
            <div className={S.blockInner}>
              <span className={S.desc}>{t('web3Desc')}</span>
              <Link href={URLS.SERVICE_WEB3}>
                <span className={S.detailsTitle}>{t('details')}</span>
              </Link>
            </div>
          </div>
          <div className={S.line}></div>
          <div className={S.block}>
            <div className={S.headBlockInner}>
              <span className={S.index}>03</span>
              <span className={S.blockTitle}>{t('mobileTitle')}</span>
            </div>
            <div className={S.blockInner}>
              <span className={S.desc}>{t('mobileDesc')}</span>
              <Link href={URLS.SERVICE_MOBILE}>
                <span className={S.detailsTitle}>{t('details')}</span>
              </Link>
            </div>
          </div>
          <div className={S.line}></div>
          <div className={S.block}>
            <div className={S.headBlockInner}>
              <span className={S.index}>04</span>
              <span className={S.blockTitle}>{t('webTitle')}</span>
            </div>
            <div className={S.blockInner}>
              <span className={S.desc}>{t('webDesc')}</span>
              <Link href={URLS.SERVICE_WEB}>
                <span className={S.detailsTitle}>{t('details')}</span>
              </Link>
            </div>
          </div>
          <div className={S.line}></div>
          <div className={S.block}>
            <div className={S.headBlockInner}>
              <span className={S.index}>05</span>
              <span className={S.blockTitle}>{t('digitalTitle')}</span>
            </div>
            <div className={S.blockInner}>
              <span className={S.desc}>{t('digitalDesc')}</span>
              <Link href={URLS.SERVICE_DIGITAL}>
                <span className={S.detailsTitle}>{t('details')}</span>
              </Link>
            </div>
          </div>
          <div className={S.line}></div>
          <div className={S.block}>
            <div className={S.headBlockInner}>
              <span className={S.index}>06</span>
              <span className={S.blockTitle}>{t('consultingTitle')}</span>
            </div>
            <div className={S.blockInner}>
              <span className={S.desc}>{t('consultingDesc')}</span>
              <Link href={URLS.SERVICE_CONSULTING}>
                <span className={S.detailsTitle}>{t('details')}</span>
              </Link>
            </div>
          </div>
          <div className={S.line}></div>
        </div>
      </div>
    </div>
  )
}

export default List
