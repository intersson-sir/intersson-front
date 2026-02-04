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

const MobilePage = ({ params: _params }: PageProps) => {
  const t = useTranslations('ServiceMobile.Methods')
  // const tP = useTranslations('ServiceMobile.Prices')
  const tT = useTranslations('ServiceMobile.Tasks')

  const METHODS_DATA = [
    {
      title: 'Front-end',
      tags: ['Flutter', 'Java', 'Swift', 'Kotlin', 'C++', 'React Native']
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

  // const PRICES_DATA = [
  //   {
  //     title: tP('MVP.title'),
  //     params: [
  //       tP('MVP.param1'),
  //       tP('MVP.param2'),
  //       tP('MVP.param3'),
  //       tP('MVP.param4'),
  //       tP('MVP.param5')
  //     ],
  //     price: 500_000,
  //     price_usd: 5000
  //   },
  //   {
  //     title: tP('DEV.title'),
  //     params: [
  //       tP('DEV.param1'),
  //       tP('DEV.param2'),
  //       tP('DEV.param3'),
  //       tP('DEV.param4')
  //     ],
  //     price: 1_500_000,
  //     price_usd: 15_000
  //   },
  //   {
  //     title: tP('App.title'),
  //     params: [
  //       tP('App.param1'),
  //       tP('App.param2'),
  //       tP('App.param3'),
  //       tP('App.param4')
  //     ],
  //     price: 5_000_000,
  //     price_usd: 50_000
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

export default MobilePage
