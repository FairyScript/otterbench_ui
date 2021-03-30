import { css } from "@emotion/react";
import { useHistory, useParams } from "react-router-dom";
import { xiaoWeiLogo } from "../styles/fonts/fonts";

const Header: React.FC = () => {
  return (
    <div css={css`
      height: 45px;
      display: grid;
      grid-template-columns: 3fr 2fr;
    `}>
      <div css={css`
        display: flex;
      `}>
        <Title />
      </div>

      <div css={css`
        display: flex;
      `}>
        <Account />
        <ControlBar />
      </div>
    </div>
  );
}

export default Header


const title = {
  首页: 'HOMEPAGE',
  采集: 'GATHERING',
  生产: 'CRAFTING',
  战斗: 'COMBAT',
  插件: 'PLUGIN',
  设置: 'SETTING',
}
const Title: React.FC = () => {
  const { id } = useParams<{ id: keyof typeof title }>()

  return (
    <div css={css`
      ${xiaoWeiLogo};
      align-self: flex-end;
      font-size: 24px;
    `}>
      {title[id]}
    </div>
  );
}

const Account: React.FC = () => {
  return (
    <div css={css`
      flex: 1;
    `}>

    </div>
  );
}

const ControlBar: React.FC = () => {
  return (
    <div css={css`
      display: flex;
      user-select: none;
      div {
        font-size: 24px;
        margin: 0 10px;
      }
    `}>
      <div onClick={()=>{
        //@ts-ignore
        window.electron.minimize()
      }}>
        -
      </div>

      <div>
        x
      </div>
    </div>
  );
}