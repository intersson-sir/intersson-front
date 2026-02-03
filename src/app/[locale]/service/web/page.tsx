import { useTranslations } from 'next-intl'

import Methods from '../components/Methods'
import Tasks from '../components/Tasks'
import MainBlock from './components/MainBlock'
import Steps from './components/Steps'

type PageProps = {
  params: {
    locale: string
  }
}

const WebPage = ({ params }: PageProps) => {
  const t = useTranslations('ServiceWeb.Methods')
  const tP = useTranslations('ServiceWeb.Prices')
  const tT = useTranslations('ServiceWeb.Tasks')

  const METHODS_DATA = [
    {
      title: 'Front-end',
      tags: ['React.js', 'Vue.js', 'Next.js', 'Angular']
    },
    {
      title: 'Back-end',
      tags: ['Node.js', 'Python', 'Java', 'Nest.js', 'Golang']
    },
    {
      title: t('db'),
      tags: ['PostgreSQL', 'Redis', 'MongoDB']
    },
    {
      title: 'DevOps',
      tags: ['Docker', 'Nginx', 'Kubernetes']
    }
  ]

  const PRICES_DATA = [
    {
      title: tP('MVP.title'),
      params: [
        tP('MVP.param1'),
        tP('MVP.param2'),
        tP('MVP.param3'),
        tP('MVP.param4'),
        tP('MVP.param5')
      ],
      price: 300_000,
      price_usd: 3000
    },
    {
      title: tP('Business.title'),
      params: [
        tP('Business.param1'),
        tP('Business.param2'),
        tP('Business.param3'),
        tP('Business.param4')
      ],
      price: 1_500_000,
      price_usd: 15_000
    },
    {
      title: tP('Commerc.title'),
      params: [
        tP('Commerc.param1'),
        tP('Commerc.param2'),
        tP('Commerc.param3'),
        tP('Commerc.param4'),
        tP('Commerc.param5')
      ],
      price: 5_000_000,
      price_usd: 50_000
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
    }
  ]
  return (
    <section style={{ overflowX: 'hidden' }}>
      <MainBlock />
      <Steps />
      <Methods data={METHODS_DATA} />
      <Tasks data={TASKS_DATA} />
    </section>
  )
}

export default WebPage
