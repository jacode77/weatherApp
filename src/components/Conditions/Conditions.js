import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const Conditions = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {props.responseObj.cod === 200 ? (
          <div>
            <Typography ariant="h5" component="div">
              <strong>{props.responseObj.name}</strong>
            </Typography>
            <Typography variant="body2">
              It's currently {Math.round(props.responseObj.main.temp)} degrees
              with {props.responseObj.weather[0].description}
            </Typography>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};
