import { useTranslations } from 'next-intl'

import Methods from '../components/Methods'
import Prices from '../components/Prices'
import Projects from '../components/Projects'
import Tasks from '../components/Tasks'
import MainBlock from './components/MainBlock'
import Steps from './components/Steps'

type PageProps = {
  params: {
    locale: string
  }
}

const AIPage = ({ params }: PageProps) => {
  const t = useTranslations('ServiceAI.Methods')
  const tP = useTranslations('ServiceAI.Prices')
  const tT = useTranslations('ServiceAI.Tasks')

  const METHODS_DATA = [
    {
      title: 'Data Collection',
      tags: [t('pipe'), t('text')]
    },
    {
      title: 'Model Development',
      tags: ['Python', 'C++', 'PyTorch', 'TensorFlow ']
    },
    {
      title: 'Deployment & MLOps',
      tags: ['Docker/K8s', 'Airflow/Kubeflow', 'TensorFlow Serving/TorchServe']
    }
  ]

  const PRICES_DATA = [
    {
      title: tP('Integration.title'),
      params: [
        tP('Integration.param1'),
        tP('Integration.param2'),
        tP('Integration.param3'),
        tP('Integration.param4'),
        tP('Integration.param5')
      ],
      price: 500_000,
      price_usd: 5000
    },
    {
      title: tP('AI.title'),
      params: [
        tP('AI.param1'),
        tP('AI.param2'),
        tP('AI.param3'),
        tP('AI.param4')
      ],
      price: 3_000_000,
      price_usd: 30_000
    },
    {
      title: tP('DEV.title'),
      params: [tP('DEV.param1'), tP('DEV.param2'), tP('DEV.param3')],
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
      <Methods data={METHODS_DATA} />
      <Projects />
      <Prices data={PRICES_DATA} locale={params.locale} />
      <Tasks data={TASKS_DATA} />
    </section>
  )
}

export default AIPage
