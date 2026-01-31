import { useTranslations } from 'next-intl'

import S from './CookieModal.module.scss'

type CookieModalProps = {
  onAccept: () => void
  onDiscard: () => void
  isOpen: boolean
}

const CookieModal: React.FC<CookieModalProps> = ({
  onAccept,
  onDiscard,
  isOpen
}) => {
  const t = useTranslations('Cookie')
  return (
    <div className={S.wrap} style={{ bottom: isOpen ? '20px' : '-300px' }}>
      <span className={S.title}>🍪 Сookie</span>
      <span className={S.desc}>{t('title')}</span>
      <div className={S.buttons}>
        <button className={S.buttonDark} onClick={onAccept}>
          <span>{t('yes')}</span>
        </button>
        <button className={S.buttonLight} onClick={onDiscard}>
          <span>{t('no')}</span>
        </button>
      </div>
    </div>
  )
}

export default CookieModal
