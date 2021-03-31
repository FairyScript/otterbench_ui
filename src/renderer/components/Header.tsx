import { css } from "@emotion/react";
import { useHistory, useParams } from "react-router-dom";
import { xiaoWeiLogo } from "../styles/fonts/fonts";
import Account from "./Account";

const Header: React.FC = () => {
  return (
    <div css={css`
      height: 45px;
      display: flex;
      margin-bottom: 25px;
      padding-left: 10px;
    `}>
      <Title />

      <div css={css`
        width: 40%;
        display: flex;
        -webkit-app-region: no-drag;
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
  插件: 'PLUGINS',
  设置: 'SETTINGS',
}
const Title: React.FC = () => {
  const { id } = useParams<{ id: keyof typeof title }>()

  return (
    <div css={css`
      ${xiaoWeiLogo};
      font-size: 24px;
      flex: 1;
      align-self: flex-end;

    `}>
      {title[id]}
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

      <div onClick={()=>{
        //@ts-ignore
        window.electron.close()
      }}>
        x
      </div>
    </div>
  );
}