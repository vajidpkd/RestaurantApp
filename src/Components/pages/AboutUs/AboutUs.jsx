import { Box, Typography, styled } from "@mui/material";
import React from "react";

const AboutUs = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "38%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: "5rem",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
          borderRadius: "100vh",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        About Us
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Welcome To Our restarunt, where culinay exelience meets warm
          hospitality
        </Typography>
      </CustomBox>
    </Box>
  );
};

export default AboutUs;
