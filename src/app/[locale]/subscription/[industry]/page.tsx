'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/navigation'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

import { getTemplates } from '@/api/services/subscriptions'

import S from './Industry.module.scss'

const Footer = dynamic(() => import('../../components/Footer'), {
  ssr: false
})

const IndustryPage = () => {
  const params = useParams()
  const industryId = params.industry as string
  const [templates, setTemplates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await getTemplates(industryId)
        setTemplates(res.data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }

    if (industryId) {
      fetchTemplates()
    }
  }, [industryId])

  if (loading) {
    return (
      <div className={S.wrap}>
        <div className="container">
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className={S.wrap}>
      <div className="container">
        <Link href="/subscription" className={S.backBtn}>← Back to Subscription</Link>
        
        <section className={S.templatesSection}>
          <h1 className={S.title}>Templates</h1>
          <div className={S.templatesGrid}>
            {templates.map((template, index) => (
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
