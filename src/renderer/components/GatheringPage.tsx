import { css } from '@emotion/react'
import { Paper } from '@material-ui/core'
import React from 'react'
import GatherList from '../static/切片3.png'
import TitlePng from '../static/control.png'
import SwitchPng from '../static/switch.png'
import AddTask from '../static/新增任务.png'
import GameStatus from '../static/切片5.png'
import StartButton from '../static/starttask.png'

const GatheringPage: React.FC = () => {
  return (
    <div
      css={css`
        flex: 1;
        display: grid;
        grid-template-columns: 60% 40%;
        overflow: hidden;
        -webkit-app-region: no-drag;
      `}
    >
      <div
        css={css`
          flex: 1;
          margin-right: 30px;
        `}
      >
        <ModeSelect />
        <PluginList />
      </div>
      <Task />
    </div>
  )
}

export default GatheringPage

const ModeSelect: React.FC = () => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <img src={TitlePng} alt="" />
      <img
        css={css`
          position: absolute;
          right: 0;
        `}
        src={SwitchPng}
        alt=""
      />
    </div>
  )
}

const PluginList: React.FC = () => {
  return (
    <div
      css={css`
        width: 100%;
        img {
          width: 100%;
        }
      `}
    >
      <img src={GatherList} alt="" />
    </div>
  )
}

const Task: React.FC = () => {
  return (
    <div
      css={css`
        margin-left: 20px;
      `}
    >
      <img src={AddTask} alt="" />
      <img src={GameStatus} alt="" />
      <img
        css={css`
          margin-top: 15px;
        `}
        src={StartButton}
        alt=""
      />
    </div>
  )
}

const GatheringItem: React.FC = () => {
  return (
    <Paper
      css={css`
        height: 63px;
        overflow: hidden;
        display: flex;
      `}
    >
      <div
        css={css`
          width: 63px;
          height: 63px;
          background-color: grey;
        `}
      ></div>
    </Paper>
  )
}
