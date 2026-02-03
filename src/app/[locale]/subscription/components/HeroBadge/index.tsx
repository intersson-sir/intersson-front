import S from './HeroBadge.module.scss'
import SparkleIcon from 'public/icons/sparkle.svg'

interface HeroBadgeProps {
  text: string
}

const HeroBadge = ({ text }: HeroBadgeProps) => {
  return (
    <div className={S.badge}>
      <SparkleIcon className={S.sparkle} />
      <span className={S.text}>{text}</span>
    </div>
  )
}

export default HeroBadge
