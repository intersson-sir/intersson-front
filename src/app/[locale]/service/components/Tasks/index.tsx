import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React from 'react'

import URLS from '@/configs/urls'
import Button from '@/ui/Button'

import S from './Tasks.module.scss'

type TaskType = {
  title: string
  value: string
}

type TasksProps = {
  data: TaskType[]
}

const Tasks = ({ data }: TasksProps) => {
  const t = useTranslations('ServiceAI.Tasks')

  return (
    <div className="container">
      <div className={S.wrap}>
        <span className={S.title}>{t('title')}</span>
        <div className={S.list}>
          {data.map((task, index) => {
            return (
              <React.Fragment key={task.title}>
                <div className={S.block}>
                  <div className={S.headBlockInner}>
                    <span className={S.index}>0{index + 1}</span>
                    <span className={S.blockTitle}>{task.title}</span>
                  </div>
                  <div className={S.blockInner}>
                    <span className={S.desc}>{task.value}</span>
                  </div>
                </div>
                <div className={S.line}></div>
              </React.Fragment>
            )
          })}
        </div>
        <div className={S.formInner}>
          <div className={S.form}>
            <span className={S.formTitle}>{t('notAnswer')}</span>
            <span className={S.formDesc}>{t('btnTitle')}</span>
            <Link href={URLS.FORM} className={S.linkBtn}>
              <Button size="m" color="primary">
                {t('btn')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
