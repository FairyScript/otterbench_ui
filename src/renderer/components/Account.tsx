import { css } from '@emotion/react'
import { sourceHan } from '../styles/fonts/fonts'
import OtterJpg from '../static/otter.jpg'
import VIPImg from '../assets/弹窗.png'
import { useState } from 'react'

const Account: React.FC = () => {
  return (
    <div
      css={css`
        flex: 1;
        display: flex;
        align-items: center;
        div {
          margin: 0 5px;
        }
      `}
    >
      <Avatar />
      <UserName />
      <VIP />
    </div>
  )
}

export default Account

const Avatar: React.FC = () => {
  return (
    <div
      css={css`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
          height: 100%;
          display: block;
          margin: auto;
        }
      `}
    >
      <img src={OtterJpg} />
    </div>
  )
}

const UserName: React.FC = () => {
  return (
    <div
      css={css`
        ${sourceHan};
      `}
    >
      越菜越爱玩
    </div>
  )
}

const VIP: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          width: 1.5em;
          height: 1.5em;
          text-align: center;
          color: #c2aa90;
          border: solid 2px #c2aa90;
          border-radius: 20%;
        `}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        年
      </div>
      <img
        css={css`
          position: absolute;
          display: ${open ? 'block' : 'none'};
          left: -80px;
        `}
        src={VIPImg}
        alt=""
      />
    </div>
  )
}
