import { css } from "@emotion/react";

export default css`
::-webkit-scrollbar-track
  {
    border-radius: 5px;
    background-color: transparent;
  }

::-webkit-scrollbar
  {
    width: 5px;
    background-color: transparent;
  }

::-webkit-scrollbar-thumb
  {
    border-radius: 5px;
    box-shadow: inset 0 0 3px rgba(0,0,0,.3);
    background-color: #555;
  }
`