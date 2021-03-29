import { css, SerializedStyles } from "@emotion/react";
import { Route, useHistory, useParams } from "react-router";
import { sourceHan } from "../styles/fonts/fonts";

const icons = import.meta.globEager('../assets/menuicons/*.png')

const MenuList: React.FC = () => {

  return (
    <Route path="/:id" >
      <div css={css`
        position: relative;
        flex: 1;
      `}>
        <MenuItem id="首页" />
        <MenuItem id="采集" />
        <MenuItem id="生产" />
        <MenuItem id="战斗" />
        <MenuItem id="插件" />
      </div>
      <MenuItem id="设置" />

    </Route>
  );
}

export default MenuList

interface MenuProps {
  id: string;
  style?: SerializedStyles;
}
const MenuItem: React.FC<MenuProps> = ({ id, ...props }) => {
  const history = useHistory()
  const params = useParams<{ id: string }>()

  const handleClick = () => {
    history.push(`/${id}`)
  }

  const isActive = params.id === id
  const icon = icons[`../assets/menuicons/${id}${isActive ? 'a' : ''}.png`].default

  return (
    <div css={css`
      user-select: none;

      height: 50px;
      margin: 15px 0;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around; 
      color: white;

      transition: all .3s ease-in-out;
      ${isActive && css`
        background-color: white;
        box-shadow: 0 0 5px rgba(50,50,50,0.3);
        color: #c2aa91;
      `}

      .container {
        //margin: auto;
        position: relative;
        img {
          position: absolute;
          height: 20px;
          left: -40px;
          top: 1.5px;
        }
        span {
          display: block;
          text-align: center;
          font-size: 17px;
          ${sourceHan};
        }
      }

      ${props.style};
    `}
      onClick={handleClick}
    >
      <div className="container">
        <img src={icon as unknown as string} alt="" />
        <span>{id}</span>
      </div>
    </div>
  );
}
