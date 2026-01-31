'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { getWorks } from '@/api/services/work'
import { TagType, WorkType } from '@/types'

import Card from '../Card'
import S from './Vacancies.module.scss'

const Vacancies = ({
  allWorks,
  allWorksWithTag,
  tags,
  currentActiveTag
}: {
  allWorks: WorkType[]
  allWorksWithTag: WorkType[]
  tags: TagType[]
  currentActiveTag: number | null
}) => {
  const t = useTranslations('Work')
  const [activeTag, setActiveTag] = useState<number | null | 'all'>(null)
  const [works, setWorks] = useState<WorkType[]>([])

  const locale = useLocale()

  useEffect(() => {
    setActiveTag(currentActiveTag)
  }, [currentActiveTag])

  useEffect(() => {
    setWorks(allWorksWithTag)
  }, [allWorksWithTag])

  useEffect(() => {
    if (activeTag) {
      getDataWorks(activeTag)
    }
    if (activeTag === 'all') {
      setWorks([...allWorks])
    }
  }, [activeTag])

  const getDataWorks = async (id: number | 'all') => {
    if (id !== 'all') {
      const { data } = await getWorks(id)
      setWorks(data)
    }
  }

  // const getFullWorks = async (id: number) => {
  //   setIsLoading(true)
  //   const { data } = await getWorks(id)
  //   setWorks(data)
  //   setIsLoading(false)
  // }

  return (
    <section className="container">
      <div className={S.wrapper}>
        <div className={S.titleInner}>
          <span className={S.title}>{t('title')}</span>
          <span className={S.desc}>{t('desc')}</span>
        </div>

        <div className={S.tagsInner}>
          <span className={S.tag}>{t('vacancies')}</span>
          <span className={S.tag}>{t('partOfTeam')}</span>
        </div>

        <motion.div
          className={S.stackInner}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={S.stacks}>
            <motion.span
              onClick={() => {
                setActiveTag('all')
              }}
              className={classNames(S.stackTitle, {
                [S.selected]: activeTag === 'all'
              })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('all')}
            </motion.span>
            {tags.map(elem => {
              const hasWorks = allWorks.find(item => item.tagId === elem.id)
              if (!hasWorks) {
                return null
              }

              return (
                <motion.span
                  key={elem.id}
                  onClick={() => {
                    setActiveTag(elem.id)
                  }}
                  className={classNames(S.stackTitle, {
                    [S.selected]: activeTag === elem.id
                  })}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {locale === 'ru' ? elem.name : elem.name_en}
                </motion.span>
              )
            })}
          </div>

          <>
            {works.length > 0 ? (
              <motion.div
                key={JSON.stringify(works)}
                className={S.cards}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {works.map(item => (
                  <Card key={item.id} item={item} />
                ))}
              </motion.div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span className={S.desc}>{t('empty')}</span>
              </div>
            )}
          </>
        </motion.div>
      </div>
    </section>
  )
}

export default Vacancies
