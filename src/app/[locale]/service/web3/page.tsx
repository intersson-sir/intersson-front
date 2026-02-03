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

const Web3Page = ({ params }: PageProps) => {
  const t = useTranslations('ServiceWeb3.Methods')
  const tP = useTranslations('ServiceWeb3.Prices')
  const tT = useTranslations('ServiceWeb3.Tasks')

  const METHODS_DATA = [
    {
      title: 'Front-end',
      tags: ['ethers.js', 'MetaMask/WaletConnect ']
    },
    {
      title: 'Back-end',
      tags: ['Node.js/TS', 'Python', 'Golang', 'Rust ']
    },
    {
      title: 'Smart-contracts',
      tags: ['Solidity', 'Vyper', 'Rust', 'Hardhat', 'Truffle']
    },
    {
      title: t('db'),
      tags: ['PostgreSQL', 'Redis', 'MongoDB']
    }
  ]

  const PRICES_DATA = [
    {
      title: tP('Token.title'),
      params: [
        tP('Token.param1'),
        tP('Token.param2'),
        tP('Token.param3'),
        tP('Token.param4'),
        tP('Token.param5')
      ],
      price: 1_000_000,
      price_usd: 10_000
    },
    {
      title: tP('DEX.title'),
      params: [
        tP('DEX.param1'),
        tP('DEX.param2'),
        tP('DEX.param3'),
        tP('DEX.param4')
      ],
      price: 5_000_000,
      price_usd: 50_000
    },
    {
      title: tP('Chain.title'),
      params: [
        tP('Chain.param1'),
        tP('Chain.param2'),
        tP('Chain.param3'),
        tP('Chain.param4')
      ],
      price: 10_000_000,
      price_usd: 100_000
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

export default Web3Page
