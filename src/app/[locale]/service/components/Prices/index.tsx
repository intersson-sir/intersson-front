import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Dot from 'public/icons/dot.svg'

import URLS from '@/configs/urls'
import Button from '@/ui/Button'

import S from './Prices.module.scss'

type PriceItemType = {
  title: string
  params: string[]
  price: number
  price_usd: number
}

type PricesProps = {
  data: PriceItemType[]
  locale: string
}

const Prices = ({ data, locale }: PricesProps) => {
  const t = useTranslations('ServiceAI.Prices')

  return (
    <div className="container">
      <div className={S.wrap}>
        <span className={S.title}>{t('title')}</span>
        <div className={S.list}>
          {data.map(item => {
            return (
              <div className={S.card} key={item.title}>
                <div className={S.gradient}></div>
                <div className={S.cardInner}>
                  <div className={S.cardTexts}>
                    <span className={S.cardTitle}>{item.title}</span>
                    <div className={S.cardUl}>
                      {item.params.map(param => {
                        return (
                          <div key={param} className={S.cardParam}>
                            <Dot width={10} height={17} />
                            <span className={S.cardParamDesc}>{param}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <span className={S.price}>
                    {t('from')}{' '}
                    {locale === 'ru'
                      ? item.price.toLocaleString('ru-RU')
                      : item.price_usd.toLocaleString('ru-RU')}{' '}
                    {locale === 'ru' ? '₽' : '$'}
                  </span>
                  <Link href={URLS.FORM} className={S.linkBtn}>
                    <Button size="m" color="primary" fullWidth>
                      {t('btn')}
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className={S.mobileBtn}>
          <Link href={URLS.FORM} className={S.linkBtn}>
            <Button size="m" color="primary" fullWidth>
              {t('btn')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Prices
