'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { getReviews } from '@/api/services/reviews'
import ModalSlide from '@/ui/ModalSlide'

import ReviewCard from './components/ReviewCard'
import ReviewForm from './components/ReviewForm'
import S from './Reviews.module.scss'

const ReviewsPage = () => {
  const t = useTranslations('Reviews')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [reviews, setReviews] = useState<any[]>([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getReviews()
        const mappedReviews = res.data.map((item: any) => ({
          name: `${item.first_name} ${item.last_name}`.trim(),
          position: item.position,
          company: item.company_name,
          review: item.review_text,
          logo: item.company_logo
        }))
        setReviews(mappedReviews)
      } catch (error) {
        console.error(error)
      }
    }

    fetchReviews()
  }, [])

  const handleLeaveReview = () => {
    setIsModalOpen(true)
  }

  return (
    <div className={S.wrap}>
      <div className="container">
        <div className={S.header}>
          <h1 className={S.title}>{t('title')}</h1>
          <p className={S.subtitle}>{t('subtitle')}</p>
        </div>

        <div className={S.grid}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        <div className={S.buttonWrapper}>
          <button className={S.leaveReviewBtn} onClick={handleLeaveReview}>
            {t('leaveReview')}
          </button>
        </div>
      </div>

      <ModalSlide open={isModalOpen} toggleOpen={setIsModalOpen} scrollable>
        <ReviewForm />
      </ModalSlide>
    </div>
  )
}

export default ReviewsPage
