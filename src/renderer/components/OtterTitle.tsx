import { css } from '@emotion/react'
import { sourceHan } from '../styles/fonts/fonts'

const OtterTitle: React.FC<React.HTMLProps<HTMLDivElement>> = props => {
  return (
    <div
      css={css`
        font-size: 18px;
        ${sourceHan};
        flex: 1;
      `}
      {...props}
    />
  )
}

export default OtterTitle
