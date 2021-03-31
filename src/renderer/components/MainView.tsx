import { css } from "@emotion/react";
import { Route } from "react-router";
import Header from "./Header";
import HomePage from "./HomePage";

const MainView: React.FC = () => {
  return (
    <div css={css`
      height: 100%;
      box-sizing: border-box;
      padding: 25px 24px 0px 35px;
      display: flex;
      flex-direction: column;
    `}>
      <Route path="/:id">
        <Header />
      </Route>
        <Route path="/首页" >
          <HomePage />
        </Route>
    </div>
  );
}

export default MainView