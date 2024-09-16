import React from "react";
import { useIntl } from "react-intl";
import { Typography, Grid, Divider, Paper } from "@mui/material";

const Hero: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper variant="outlined">
          <img width="300" src="https://docucdn-a.akamaihd.net/olive/images/2.65.0/global-assets/ds-logo-default.svg" />
        </Paper>    
        {/* <Typography variant="h3" data-testid="webapp--header">
          {formatMessage({ id: "hero.heading" })}
        </Typography> */}
        <br />
        <Divider />
        <br />
        <br />
      </Grid>
    </Grid>
  );
};

export default Hero;
