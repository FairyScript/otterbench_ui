import { css, SerializedStyles } from "@emotion/react";

interface ButtonProp extends React.HTMLProps<HTMLDivElement> {
  disabled?: boolean;
}
const OttoButton: React.FC<ButtonProp> = (props) => {
  const { disabled, children } = props
  

  return (
    <div css={[css`
      min-width: 82px;
      width: fit-content;
      height: 35px;
      border-radius: 999px;
      color: white;
      display: flex;
      user-select: none;
      box-shadow: 0 0 5px rgba(128,128,128,0.5);
      
      div {
        text-align: center;
        margin: auto;
      }
    `, css`
      background-color: ${disabled ? '#afafaf' : '#c2aa91'};
    `]}

    {...props}
    >
      <div>
        {children}
      </div>
    </div>
  );
}

export default OttoButton