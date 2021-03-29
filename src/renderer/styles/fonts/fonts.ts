import { css } from "@emotion/react";
import SourceHanFont from './SourceHanSansCN-Regular.otf'

export const sourceHan = css`
  font-family: 'SourceHanSans', sans-serif;
  @font-face {
    font-family: 'SourceHanSans';
    src: url(${SourceHanFont});
  }
`