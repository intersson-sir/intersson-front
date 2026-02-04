'use client'

import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { getIndustries } from '@/api/services/subscriptions'

import S from './Subscription.module.scss'

// Import pricing component from main page
const PricingPlans = dynamic(() => import('../components/MediaBlock'), {
  ssr: false
})

const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false
})

// Import Iridescence with no SSR
const Iridescence = dynamic(() => import('./components/Iridescence'), {
  ssr: false
})

// Import Silk with no SSR
const Silk = dynamic(() => import('./components/Silk'), {
  ssr: false
})

// Import HeroBadge
const HeroBadge = dynamic(() => import('./components/HeroBadge'), {
  ssr: false
})

const SubscriptionPage = () => {
  const t = useTranslations('Subscription')
  const locale = useLocale()
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkTheme = mounted && (theme === 'dark' || resolvedTheme === 'dark')
  const [industries, setIndustries] = useState<any[]>([])

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await getIndustries()
        console.log('Industries response:', res.data)
        setIndustries(res.data)
      } catch (error) {
        console.error('Industries error:', error)
      }
    }

    fetchIndustries()
  }, [])

  const benefits = [
    {
      title: t('benefit1Title'),
      desc: t('benefit1Desc')
    },
    {
      title: t('benefit2Title'),
      desc: t('benefit2Desc')
    },
    {
      title: t('benefit3Title'),
      desc: t('benefit3Desc')
    },
    {
      title: t('benefit4Title'),
      desc: t('benefit4Desc')
    },
    {
      title: t('benefit5Title'),
      desc: t('benefit5Desc')
    },
    {
      title: t('benefit6Title'),
      desc: t('benefit6Desc')
    }
  ]

  return (
    <div className={S.wrap}>
      {/* Background Animation */}
      {mounted && (
        <div className={S.iridescenceBackground}>
          {isDarkTheme ? (
            <Silk speed={2} scale={1.2} color="#2e1065" noiseIntensity={1.2} />
          ) : (
            <Iridescence
              color={[1, 1, 1]}
              speed={1}
              amplitude={0.1}
              mouseReact
            />
          )}
        </div>
      )}

      {/* Hero Section */}
      <section className={S.hero}>
        <div className="container">
          {mounted && <HeroBadge text={t('heroBadge')} />}
          <h1 className={S.heroTitle}>{t('heroTitle')}</h1>
          <p className={S.heroSubtitle}>{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Built for Entrepreneurs */}
      <section className={S.benefitsSection}>
        <div className="container">
          <h2 className={S.sectionTitle}>{t('benefitsTitle')}</h2>
          <div className={S.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={S.benefitCard}>
                <h3 className={S.benefitTitle}>{benefit.title}</h3>
                <p className={S.benefitDesc}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Industry */}
      <section className={S.industriesSection}>
        <div className="container">
          <h2 className={S.sectionTitle}>{t('industriesTitle')}</h2>
          <div className={S.industriesGrid}>
            {industries.map((industry, index) => (
              <NextLink
                href={`/${locale}/subscription/${industry.id}`}
                key={index}
                className={S.industryCard}
              >
                <span className={S.industryName}>{industry.name}</span>
              </NextLink>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className={S.pricingSection}>
        <PricingPlans />
      </section>

      <div className={S.footer}>
        <Footer forceShow={true} />
      </div>
    </div>
  )
}

export default SubscriptionPage
