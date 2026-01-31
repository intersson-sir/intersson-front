import Image from 'next/image'
import { useTranslations } from 'next-intl'
import CommentIcon from 'public/icons/comment.svg'

import S from './Methods.module.scss'

type IMethod = {
  title: string
  tags: string[]
}

type MethodsProps = {
  data: IMethod[]
}

const Methods = ({ data }: MethodsProps) => {
  const t = useTranslations('ServiceAI.Methods')

  return (
    <div className="container">
      <div className={S.wrap}>
        <span className={S.title}>{t('title')}</span>
        <div className={S.comment}>
          <CommentIcon width={20} height={20} />
          <span className={S.commentDesc}>{t('comment')}</span>
          <div className={S.manager}>
            <Image
              src={'/images/peoples/4.png'}
              width={45}
              height={45}
              alt="manager"
              style={{ borderRadius: '50%' }}
            />
            <div className={S.managerWrap}>
              <span className={S.managerName}>{t('igor')}</span>
              <span className={S.managerDesc}>{t('role')}</span>
            </div>
          </div>
        </div>
        <div className={S.list}>
          {data.map(item => {
            return (
              <div key={item.title} className={S.item}>
                <span className={S.itemTitle}>{item.title}</span>
                <div className={S.tags}>
                  {item.tags.map(tag => {
                    return (
                      <span className={S.tag} key={tag}>
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Methods
