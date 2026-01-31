'use client'

import { useTranslations } from 'next-intl'

import ReviewCard from './components/ReviewCard'
import S from './Reviews.module.scss'

const ReviewsPage = () => {
  const t = useTranslations('Reviews')

  const reviews = [
    {
      name: 'John Anderson',
      position: 'CEO',
      company: 'TechCorp Inc.',
      logo: '/images/peoples/1.png',
      review: t('review1')
    },
    {
      name: 'Maria Garcia',
      position: 'CTO',
      company: 'Digital Solutions',
      logo: '/images/peoples/2.png',
      review: t('review2')
    },
    {
      name: 'David Chen',
      position: 'Product Manager',
      company: 'Innovation Labs',
      logo: '/images/peoples/3.png',
      review: t('review3')
    },
    {
      name: 'Sarah Williams',
      position: 'Head of Development',
      company: 'Startup Ventures',
      logo: '/images/peoples/4.png',
      review: t('review4')
    },
    {
      name: 'Michael Brown',
      position: 'Founder',
      company: 'E-commerce Plus',
      logo: '/images/peoples/1.png',
      review: t('review5')
    },
    {
      name: 'Emma Wilson',
      position: 'VP of Technology',
      company: 'Global Systems',
      logo: '/images/peoples/2.png',
      review: t('review6')
    }
  ]

  const handleLeaveReview = () => {
    // Redirect to form or open modal
    window.location.href = '/form'
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
    </div>
  )
}

export default ReviewsPage
