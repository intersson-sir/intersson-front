'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { Link } from '@/navigation'
import { useEffect, useState } from 'react'

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
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkTheme = mounted && (theme === 'dark' || resolvedTheme === 'dark')

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

  const industries = [
    { name: 'E-commerce', slug: 'e-commerce' },
    { name: 'Healthcare', slug: 'healthcare' },
    { name: 'Real Estate', slug: 'real-estate' },
    { name: 'Education', slug: 'education' },
    { name: 'Finance', slug: 'finance' },
    { name: 'Technology', slug: 'technology' },
    { name: 'Hospitality', slug: 'hospitality' },
    { name: 'Marketing', slug: 'marketing' },
    { name: 'Legal Services', slug: 'legal-services' },
    { name: 'Food & Beverage', slug: 'food-beverage' }
  ]

  return (
    <div className={S.wrap}>
      {/* Background Animation */}
      {mounted && (
        <div className={S.iridescenceBackground}>
          {isDarkTheme ? (
            <Silk speed={2.0} scale={1.2} color="#2e1065" noiseIntensity={1.2} rotation={0} />
          ) : (
            <Iridescence color={[1, 1, 1]} speed={1.0} amplitude={0.1} mouseReact />
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
              <Link 
                href={`/subscription/${industry.slug}`} 
                key={index} 
                className={S.industryCard}
              >
                <span className={S.industryName}>{industry.name}</span>
              </Link>
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
