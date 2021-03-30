import { css } from '@emotion/react'
import { HashRouter, Redirect, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import MainView from './components/MainView';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Route path="/" exact>
        <Redirect to="/首页"/>
      </Route>
      <div css={css`
        width: 100vw;
        height: 100vh;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 200px auto;
      `}>
        <SideBar />
        <MainView />
      </div>
    </HashRouter>
  );
}
export default App
