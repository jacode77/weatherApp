import { Typography, Box, Avatar } from "@mui/material";
import React from "react";
import "./App.css";
import { Forecast } from "./components/Forecast/Forecast";

function App() {
  return (
    <div>
      <header>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Typography
            sx={{
              minWidth: 100,
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: 500,
            }}
          >
            Weather App
          </Typography>
          <Avatar>☀️</Avatar>
        </Box>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>Created by Jacqui Cope ⛈</footer>
    </div>
  );
}

export default App;
