import { NextPage } from 'next'

import Wrapper from './components/Wrapper'
import S from './SuccessPage.module.scss'

const SuccessPage: NextPage = () => {
  return (
    <div className={S.wrap}>
      <video
        src="/videos/footer.mp4"
        muted
        loop
        autoPlay
        playsInline
        className={S.video}
      ></video>
      <Wrapper />
    </div>
  )
}

export default SuccessPage
