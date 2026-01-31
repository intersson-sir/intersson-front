import { NextPage } from 'next'

import Wrapper from './components/Wrapper'
import S from './Form.module.scss'

const FormPage: NextPage = () => {
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

export default FormPage
