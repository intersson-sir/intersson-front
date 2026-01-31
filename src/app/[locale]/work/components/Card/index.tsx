'use client'

import { useLocale } from 'next-intl'
import { useState } from 'react'

import { WorkType } from '@/types'

import WorkModal from '../WorkModal'
import S from './Card.module.scss'

const Card = ({ item }: { item: WorkType }) => {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()

  return (
    <>
      <WorkModal isOpen={isOpen} onOpen={setIsOpen} item={item} />
      <div className={S.card} onClick={() => setIsOpen(true)}>
        <div className={S.gradient} />
        <div className={S.cardInner}>
          <span className={S.cardTitile}>
            {locale === 'ru' ? item.name : item.name_en}
          </span>
          <span className={S.cardDesc}>
            {locale === 'ru' ? item.desc : item.desc_en}
          </span>

          {item.required && (
            <div className={S.requirments}>
              {locale === 'ru' ? (
                <>
                  {item.required.split(',').map(elem => {
                    return (
                      <span key={elem} className={S.requirment}>
                        {elem}
                      </span>
                    )
                  })}
                </>
              ) : (
                <>
                  {item.required_en && (
                    <>
                      {item.required_en.split(',').map(elem => {
                        return (
                          <span key={elem} className={S.requirment}>
                            {elem}
                          </span>
                        )
                      })}
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Card
