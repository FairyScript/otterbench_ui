import { css } from '@emotion/react'
import __StatusPlaceHolder from '../assets/status.png'
import scrollBar from '../styles/scrollBar'

const Status: React.FC = () => {
  return (
    <div
      css={css`
        height: 100%;
        overflow: overlay;
        ${scrollBar};
      `}
    >
      <img src={__StatusPlaceHolder} alt="" />
    </div>
  )
}

export default Status
