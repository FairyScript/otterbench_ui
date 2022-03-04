import { css } from '@emotion/react'
import { useSpring } from '@react-spring/core'
import { animated } from '@react-spring/web'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Route, useHistory, useParams } from 'react-router'
import { sourceHan } from '../styles/fonts/fonts'

const icons = import.meta.globEager('../assets/menuicons/*.png')

const TabContext = createContext<Function>(() => {})

const MenuList: React.FC = () => {
  const [activeTab, setTab] = useState<HTMLDivElement>()

  return (
    <Route path="/:id">
      <TabContext.Provider value={setTab}>
        <div
          css={css`
            position: relative;
            flex: 1;
          `}
        >
          <MenuItem id="首页" />
          <MenuItem id="采集" />
          <MenuItem id="生产" />
          <MenuItem id="战斗" />
          <MenuItem id="插件" />

          <MenuItem
            id="设置"
            css={css`
              position: absolute;
              width: 100%;
              bottom: 10px;
            `}
          />
          <ActiveTab target={activeTab} />
        </div>
      </TabContext.Provider>
    </Route>
  )
}

export default MenuList

const ActiveTab: React.FC<{ target?: HTMLDivElement }> = ({ target }) => {
  if (!target) return null

  const id = target.id
  const top = target.offsetTop
  const icon = icons[`../assets/menuicons/${id}a.png`].default

  const spring = useSpring({
    from: {
      scale: 1,
    },
    to: async next => {
      await next({ scale: 0.5, config: { duration: 130 } })
      await next({ scale: 1, config: { duration: 70 } })
    },
  })

  return (
    <animated.div
      css={css`
        ${itemCss};
        margin: 0;
        background-color: white;
        box-shadow: 0 0 5px rgba(50, 50, 50, 0.3);
        color: #c2aa91;
        position: absolute;
        width: 100%;

        transition: top 0.2s ease-in-out;
      `}
      style={{
        top: top,
        scale: spring.scale,
      }}
    >
      <div className="container" css={containerCss}>
        <img src={icon as string} alt="" />
        <span>{id}</span>
      </div>
    </animated.div>
  )
}

interface MenuProps extends React.HTMLProps<HTMLDivElement> {
  id: string
}
const MenuItem: React.FC<MenuProps> = props => {
  const { id } = props
  const history = useHistory()
  const params = useParams<{ id: string }>()
  const divRef = useRef(null)
  const setRef = useContext(TabContext)

  const handleClick = () => {
    history.push(`/${id}`)
  }

  const isActive = params.id === id
  useEffect(() => {
    if (isActive) {
      setRef(divRef.current)
    }
  }, [isActive])

  const icon = icons[`../assets/menuicons/${id}.png`].default

  return (
    <div css={itemCss} ref={divRef} {...props} onClick={handleClick}>
      <div className="container" css={containerCss}>
        <img src={icon as unknown as string} alt="" />
        <span>{id}</span>
      </div>
    </div>
  )
}

const itemCss = css`
  user-select: none;

  height: 50px;
  margin: 15px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  -webkit-app-region: no-drag;
`

const containerCss = css`
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
`
