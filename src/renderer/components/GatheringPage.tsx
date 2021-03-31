import { ClassNames, css } from "@emotion/react";
import { Grid, Paper, StylesProvider, Switch } from "@material-ui/core";
import React from "react";
import OtterTitle from "./OtterTitle";

const GatheringPage: React.FC = () => {
  return (
    <Grid container
      css={css`
        -webkit-app-region: no-drag;
        padding-left: 10px;
        height: 100%;
      `}
    >
      <Grid item xs>
        <AutoGather />
      </Grid>
      <Grid item xs={5}>

      </Grid>
    </Grid>
  );
}

export default GatheringPage

const AutoGather: React.FC = () => {
  return (
    <div css={css`
      display: flex;
    `}>
      <OtterTitle css={css`
        flex:1;
      `}>
        自动采集
      </OtterTitle>
      <OtterSwitch />
    </div>
  );
}

const OtterSwitch: React.FC = () => {

  return (
    null
  );
}