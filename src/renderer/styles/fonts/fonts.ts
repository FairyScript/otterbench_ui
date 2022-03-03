import { css } from '@emotion/react'
import SourceHanFont from './SourceHanSansCN-Regular.otf'
import XiaoWei from './站酷小薇LOGO体.otf'

export const sourceHan = css`
  font-family: 'SourceHanSans', sans-serif;
  @font-face {
    font-family: 'SourceHanSans';
    src: url(${SourceHanFont});
  }
`

export const xiaoWeiLogo = css`
  font-family: 'xiaoWeiLogo', sans-serif;
  @font-face {
    font-family: 'xiaoWeiLogo';
    src: url(${XiaoWei});
  }
`
