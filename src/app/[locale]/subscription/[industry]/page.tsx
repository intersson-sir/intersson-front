'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/navigation'
import dynamic from 'next/dynamic'

import S from './Industry.module.scss'

const Footer = dynamic(() => import('../../components/Footer'), {
  ssr: false
})

const industryData: Record<string, { name: string; templates: { name: string; pdfUrl: string; heroImage: string }[] }> = {
  'e-commerce': {
    name: 'E-commerce',
    templates: [
      { name: 'Modern Online Store v1', pdfUrl: '/templates/ecommerce_1.pdf', heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80' },
      { name: 'Minimalist Boutique v2', pdfUrl: '/templates/ecommerce_2.pdf', heroImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80' },
      { name: 'Multi-vendor Marketplace v3', pdfUrl: '/templates/ecommerce_3.pdf', heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80' }
    ]
  },
  'healthcare': {
    name: 'Healthcare',
    templates: [
      { name: 'Medical Clinic Portal', pdfUrl: '/templates/healthcare_1.pdf', heroImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80' },
      { name: 'Dentistry Service Template', pdfUrl: '/templates/healthcare_2.pdf', heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80' },
      { name: 'Health & Wellness Blog', pdfUrl: '/templates/healthcare_3.pdf', heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80' }
    ]
  },
  'real-estate': {
    name: 'Real Estate',
    templates: [
      { name: 'Property Listing Platform', pdfUrl: '/templates/realestate_1.pdf', heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80' },
      { name: 'Modern Agency Website', pdfUrl: '/templates/realestate_2.pdf', heroImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80' },
      { name: 'Luxury Rentals Showcase', pdfUrl: '/templates/realestate_3.pdf', heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' }
    ]
  },
  'education': {
    name: 'Education',
    templates: [
      { name: 'E-Learning Dashboard', pdfUrl: '/templates/education_1.pdf', heroImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80' },
      { name: 'University Portal', pdfUrl: '/templates/education_2.pdf', heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80' },
      { name: 'Online Courses Landing', pdfUrl: '/templates/education_3.pdf', heroImage: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800&q=80' }
    ]
  },
  'finance': {
    name: 'Finance',
    templates: [
      { name: 'Fintech App Landing', pdfUrl: '/templates/finance_1.pdf', heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80' },
      { name: 'Banking Service Portal', pdfUrl: '/templates/finance_2.pdf', heroImage: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80' },
      { name: 'Investment Dashboard', pdfUrl: '/templates/finance_3.pdf', heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' }
    ]
  },
  'technology': {
    name: 'Technology',
    templates: [
      { name: 'SaaS Platform Home', pdfUrl: '/templates/tech_1.pdf', heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80' },
      { name: 'AI Startup Landing', pdfUrl: '/templates/tech_2.pdf', heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' },
      { name: 'Software Development Agency', pdfUrl: '/templates/tech_3.pdf', heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80' }
    ]
  },
  'hospitality': {
    name: 'Hospitality',
    templates: [
      { name: 'Boutique Hotel Website', pdfUrl: '/templates/hospitality_1.pdf', heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' },
      { name: 'Restaurant Reservation System', pdfUrl: '/templates/hospitality_2.pdf', heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
      { name: 'Travel Agency Portal', pdfUrl: '/templates/hospitality_3.pdf', heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80' }
    ]
  },
  'marketing': {
    name: 'Marketing',
    templates: [
      { name: 'Creative Agency Portfolio', pdfUrl: '/templates/marketing_1.pdf', heroImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80' },
      { name: 'Digital Marketing Landing', pdfUrl: '/templates/marketing_2.pdf', heroImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80' },
      { name: 'SEO Services Template', pdfUrl: '/templates/marketing_3.pdf', heroImage: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80' }
    ]
  },
  'legal-services': {
    name: 'Legal Services',
    templates: [
      { name: 'Law Firm Corporate Site', pdfUrl: '/templates/legal_1.pdf', heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80' },
      { name: 'Notary Services Landing', pdfUrl: '/templates/legal_2.pdf', heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80' },
      { name: 'Legal Consultant Portal', pdfUrl: '/templates/legal_3.pdf', heroImage: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&q=80' }
    ]
  },
  'food-beverage': {
    name: 'Food & Beverage',
    templates: [
      { name: 'Bakery & Pastry Shop', pdfUrl: '/templates/food_1.pdf', heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80' },
      { name: 'Coffee House Website', pdfUrl: '/templates/food_2.pdf', heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80' },
      { name: 'Food Delivery Platform', pdfUrl: '/templates/food_3.pdf', heroImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80' }
    ]
  }
}

const IndustryPage = () => {
  const params = useParams()
  const industrySlug = params.industry as string
  const data = industryData[industrySlug]

  if (!data) {
    return (
      <div className={S.wrap}>
        <div className="container">
          <h1>Industry not found</h1>
          <Link href="/subscription" className={S.backBtn}>← Back to Subscription</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={S.wrap}>
      <div className="container">
        <Link href="/subscription" className={S.backBtn}>← Back to Subscription</Link>
        
        <section className={S.templatesSection}>
          <h1 className={S.title}>{data.name} Templates</h1>
          <div className={S.templatesGrid}>
            {data.templates.map((template, index) => (
              <div key={index} className={S.templateCard}>
                <div className={S.templateImage}>
                  <Image 
                    src={template.heroImage} 
                    alt={template.name} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={S.templateContent}>
                  <h3 className={S.templateName}>{template.name}</h3>
                  <a 
                    href={template.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={S.downloadBtn}
                  >
                    Download PDF Preview
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className={S.footer}>
        <Footer forceShow={true} />
      </div>
    </div>
  )
}

export default IndustryPage
