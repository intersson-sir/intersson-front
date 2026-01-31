import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import Drop from 'public/icons/projects/drop.svg'
import Everypet from 'public/icons/projects/everypet.svg'
import Merlines from 'public/icons/projects/merlines.svg'
import Rabbit from 'public/icons/projects/rabbit.svg'
import Ruking from 'public/icons/projects/ruking.svg'

import S from './Clients.module.scss'

const Clients = () => {
  const t = useTranslations('AboutPage.Clients')
  return (
    <section className={classNames(S.bg)}>
      <div className={classNames(S.wrapper, 'container')}>
        <span className={S.title}>{t('title')}</span>

        <div className={S.partners}>
          <div className={S.block}>
            <Drop width={75} height={55} />
          </div>
          <div className={S.block}>
            <Ruking width={151} height={40} />
          </div>
          <div className={S.block}>
            <Everypet width={163} height={34} />
          </div>
          <div className={S.block}>
            <Merlines width={164} height={38} />
          </div>
          <div className={S.block}>
            <Rabbit width={66} height={64} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
