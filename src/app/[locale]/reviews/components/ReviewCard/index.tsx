import Image from 'next/image'

import S from './ReviewCard.module.scss'

interface ReviewCardProps {
  name: string
  position: string
  company: string
  logo: string
  review: string
}

const ReviewCard = ({
  name,
  position,
  company,
  logo,
  review
}: ReviewCardProps) => {
  return (
    <div className={S.card}>
      <div className={S.header}>
        <div className={S.logo}>
          <Image src={logo} alt={company} width={60} height={60} />
        </div>
        <div className={S.info}>
          <h3 className={S.name}>{name}</h3>
          <p className={S.position}>{position}</p>
          <p className={S.company}>{company}</p>
        </div>
      </div>
      <p className={S.review}>{review}</p>
    </div>
  )
}

export default ReviewCard
