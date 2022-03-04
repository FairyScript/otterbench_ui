import { css } from '@emotion/react'
import { sourceHan } from '../styles/fonts/fonts'
import Banner from './Banner'
import OtterButton from './OtterButton'
import Status from './PluginStatus'
import png1 from '../static/hjg.jpg'
import png2 from '../static/penu.png'
import png3 from '../static/tzyz.png'

const HomePage: React.FC = () => {
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
        <Banner />
        <PluginList />
      </div>
      <Status />
    </div>
  )
}

export default HomePage

const PluginList: React.FC = () => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          margin: 20px 0 0 10px;

          #today {
            font-size: 18px;
            ${sourceHan};
            flex: 1;
          }
        `}
      >
        <div id="today">今日推荐</div>
        <div id="all">
          <OtterButton>全部插件</OtterButton>
        </div>
      </div>
      <div
        css={css`
          padding-left: 10px;
        `}
      >
        {data.map(v => (
          <ModItem key={v.name} {...v} />
        ))}
      </div>
    </div>
  )
}

const data: ModProps[] = [
  {
    name: 'F92+装修',
    author: 'Redfissure',
    description: '不许偷家（？）',
    price: 35,
    img: png1,
  },
  {
    name: 'Penumbra Otter Edition',
    author: 'NO.2 HUAZI',
    description: 'MOD工具，兼容獭兹贝特1.1.3以上版本',
    price: 0,
    isInstalled: true,
    img: png2,
  },
  {
    name: '全自动深层迷宫',
    author: 'Dev.',
    description: '支持国服5.35版本，可多开',
    price: 128,
    img: png3,
  },
]

interface ModProps {
  name: string
  author: string
  description?: string
  img?: string
  price?: number
  isInstalled?: boolean
}
const ModItem: React.FC<ModProps> = props => {
  return (
    <div
      css={css`
        background-color: white;
        height: 83px;
        margin-top: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(120, 120, 120, 0.5);
        overflow: hidden;
        display: flex;
        position: relative;
      `}
    >
      <PluginImage image={props.img} />
      <PluginText
        name={props.name}
        author={props.author}
        description={props.description}
      />
      <PluginBuy isInstalled={props.isInstalled} price={props.price} />
    </div>
  )
}

const PluginImage: React.FC<{ image?: string }> = ({ image }) => {
  return (
    <div
      css={css`
        width: 83px;
        height: 83px;
        background-color: #ccc;
        overflow: hidden;

        img {
          height: 100%;
          object-fit: cover;
        }
      `}
    >
      <img src={image} alt="" />
    </div>
  )
}

interface TextProps {
  name: string
  author: string
  description?: string
}
const PluginText: React.FC<TextProps> = ({ name, author, description }) => {
  return (
    <div
      css={css`
        margin: 10px 0 10px 30px;
        ${sourceHan};
        flex: 1;
        overflow: hidden;

        div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        #name {
          font-size: 17px;
        }
        #author,
        #description {
          color: #666;
        }
        #author {
          font-size: 12px;
        }
        #description {
          font-size: 14px;
        }
      `}
    >
      <div id="name">{name}</div>
      <div id="author">{author}</div>
      <div id="description">{description || '没有描述'}</div>
    </div>
  )
}

interface BuyProps {
  price?: number
  isInstalled?: boolean
}
const PluginBuy: React.FC<BuyProps> = ({ isInstalled, price }) => {
  return (
    <div
      css={css`
        height: 100%;
        margin-right: 15px;
        display: flex;
        align-items: center;
      `}
    >
      <OtterButton disabled={isInstalled}>
        {isInstalled
          ? '已安装'
          : price?.toLocaleString('zh-CN', {
              style: 'currency',
              currency: 'CNY',
            })}
      </OtterButton>
    </div>
  )
}
