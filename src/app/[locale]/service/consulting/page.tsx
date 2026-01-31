import { useTranslations } from 'next-intl'

import Methods from '../components/Methods'
import Prices from '../components/Prices'
import Projects from '../components/Projects'
import Tasks from '../components/Tasks'
import MainBlock from './components/MainBlock'
import Steps from './components/Steps'
import S from './ConsultingPage.module.scss'

type PageProps = {
  params: {
    locale: string
  }
}

const ConsultingPage = ({ params }: PageProps) => {
  const t = useTranslations('ServiceConsulting.Methods')
  const tP = useTranslations('ServiceConsulting.Prices')
  const tT = useTranslations('ServiceConsulting.Tasks')

  const METHODS_DATA = [
    {
      title: t('system'),
      tags: ['Grafana + Prometheus', 'Elastic Stack', 'Datadog']
    },
    {
      title: t('nagruz'),
      tags: ['Apache JMeter', 'Locust', 'Gatling', 'k6']
    },
    {
      title: t('bez'),
      tags: ['Nessus', 'Burp Suite', 'Snyk', 'Metasploit']
    },
    {
      title: t('review'),
      tags: ['SonarQube', 'ARC-Review', 'ATAM', 'STIG']
    }
  ]

  const PRICES_DATA = [
    {
      title: tP('Express.title'),
      params: [
        tP('Express.param1'),
        tP('Express.param2'),
        tP('Express.param3'),
        tP('Express.param4')
      ],
      price: 400_000,
      price_usd: 4000
    },
    {
      title: tP('Test.title'),
      params: [
        tP('Test.param1'),
        tP('Test.param2'),
        tP('Test.param3'),
        tP('Test.param4')
      ],
      price: 1_000_000,
      price_usd: 10_000
    },
    {
      title: tP('Enterprice.title'),
      params: [
        tP('Enterprice.param1'),
        tP('Enterprice.param2'),
        tP('Enterprice.param3'),
        tP('Enterprice.param4')
      ],
      price: 4_000_000,
      price_usd: 40_000
    }
  ]

  const TASKS_DATA = [
    {
      title: tT('List.param1Title'),
      value: tT('List.param1Desc')
    },
    {
      title: tT('List.param2Title'),
      value: tT('List.param2Desc')
    },
    {
      title: tT('List.param3Title'),
      value: tT('List.param3Desc')
    },
    {
      title: tT('List.param4Title'),
      value: tT('List.param4Desc')
    },
    {
      title: tT('List.param5Title'),
      value: tT('List.param5Desc')
    }
  ]
  return (
    <section style={{ overflowX: 'hidden' }}>
      <MainBlock />
      <Steps />
      <div className={S.methods}>
        <Methods data={METHODS_DATA} />
      </div>
      <Projects />
      <Prices data={PRICES_DATA} locale={params.locale} />
      <Tasks data={TASKS_DATA} />
    </section>
  )
}

export default ConsultingPage
