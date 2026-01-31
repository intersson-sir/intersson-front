import Info from 'public/icons/info.svg'
import React from 'react'

import S from './Card.module.scss'

type CardType = {
  title: string
  desc: React.ReactNode
  footer: string
}

const Card = ({ desc, footer, title }: CardType) => {
  return (
    <div className={S.wrap}>
      <span className={S.title}>{title}</span>
      <span>{desc}</span>
      <div className={S.footerWrap}>
        <Info width={28} height={28} />
        <span className={S.footer}>{footer}</span>
      </div>
    </div>
  )
}

export default Card
