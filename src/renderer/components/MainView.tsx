import { css } from "@emotion/react";
import { Route } from "react-router";
import GatheringPage from "./GatheringPage";
import Header from "./Header";
import HomePage from "./HomePage";

const MainView: React.FC = () => {
  return (
    <div css={css`
      height: 100%;
      box-sizing: border-box;
      padding: 25px 24px 0px 25px;
      display: flex;
      flex-direction: column;
      background-color:#ebeae9;
    `}>
      <Route path="/:id">
        <Header />
      </Route>
        <Route path="/首页" >
          <HomePage />
        </Route>
        <Route path="/采集" >
          <GatheringPage />
        </Route>
    </div>
  );
}

export default MainView