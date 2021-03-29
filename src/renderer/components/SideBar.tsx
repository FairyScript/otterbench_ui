import { css } from "@emotion/react";
import OtterPng from '../assets/Otter_small.png'
import MenuList from "./MenuList";

const SideBar: React.FC = () => {
  return (
    <div css={css`
      height:100%;
      background-color: #c2aa91;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      flex-direction: column;

    `}>
      <Otter />
      <MenuList />
    </div>
  );
}

export default SideBar

const Otter: React.FC = () => {
  return (
    <img
      src={OtterPng}
      alt="Otter"
      css={css`
        width: 100%;
        box-sizing: border-box;
        padding: 35px 10px 10px 10px;
        
      `} />
  );
}