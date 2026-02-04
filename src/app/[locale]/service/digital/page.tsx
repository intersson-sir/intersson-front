import { useTranslations } from 'next-intl'

import Methods from '../components/Methods'
import Tasks from '../components/Tasks'
import MainBlock from './components/MainBlock'
import Steps from './components/Steps'
import S from './Digital.module.scss'

type PageProps = {
  params: {
    locale: string
  }
}

const DigitalPage = ({ params: _params }: PageProps) => {
  const t = useTranslations('ServiceDigital.Methods')
  // const tP = useTranslations('ServiceDigital.Prices')
  const tT = useTranslations('ServiceDigital.Tasks')

  const METHODS_DATA = [
    {
      title: t('methods'),
      tags: ['BPMN 2.0', 'Lean', 'Agile', 'Value Stream Mapping']
    },
    {
      title: t('bpmn'),
      tags: ['Camunda BPM', 'ProcessMaker', 'Activiti']
    },
    {
      title: t('rpa'),
      tags: ['MuleSoft', 'Apache Camel', 'UiPath']
    },
    {
      title: t('analytics'),
      tags: ['Power BI', 'Tableau', 'Grafana']
    }
  ]

  // const PRICES_DATA = [
  //   {
  //     title: tP('Auto.title'),
  //     params: [
  //       tP('Auto.param1'),
  //       tP('Auto.param2'),
  //       tP('Auto.param3'),
  //       tP('Auto.param4'),
  //       tP('Auto.param5')
  //     ],
  //     price: 700_000,
  //     price_usd: 7000
  //   },
  //   {
  //     title: tP('CRM.title'),
  //     params: [
  //       tP('CRM.param1'),
  //       tP('CRM.param2'),
  //       tP('CRM.param3'),
  //       tP('CRM.param4'),
  //       tP('CRM.param5')
  //     ],
  //     price: 2_500_000,
  //     price_usd: 25_000
  //   },
  //   {
  //     title: tP('Digital.title'),
  //     params: [
  //       tP('Digital.param1'),
  //       tP('Digital.param2'),
  //       tP('Digital.param3'),
  //       tP('Digital.param4')
  //     ],
  //     price: 10_000_000,
  //     price_usd: 100_000
  //   }
  // ]

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
      <Tasks data={TASKS_DATA} />
    </section>
  )
}

export default DigitalPage
