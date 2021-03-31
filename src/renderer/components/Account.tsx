import { css } from "@emotion/react";
import CircleSvg from '../assets/circle.svg';
import { sourceHan } from "../styles/fonts/fonts";

const Account: React.FC = () => {
  return (
    <div css={css`
      flex: 1;
      display: flex;
      align-items: center;
      div {
        margin: 0 5px;
      }
    `}>
      <Avatar />
      <UserName />
      <VIP />
    </div>
  );
}

export default Account

const Avatar: React.FC = () => {
  return (
    <div css={css`
      width: 40px;
      img {
        display: block;
        margin: auto;
      }
    `}>
      <img src={CircleSvg} />
    </div>
  );
}

const UserName: React.FC = () => {
  return (
    <div css={css`
      ${sourceHan};
    `}>
      獭兹贝特
    </div>
  );
}

const VIP: React.FC = () => {
  return (
    <div css={css`
      width: 1.5em;
      height: 1.5em;
      text-align: center;
      color: #c2aa90;
      border: solid 2px #c2aa90;
      border-radius: 20%;

    `}>
      年
    </div>
  );
}