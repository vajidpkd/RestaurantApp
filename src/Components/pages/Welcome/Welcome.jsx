import { Box, Typography } from "@mui/material";
import { styled, Container } from "@mui/system";
import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import welcome from "../../../assets/welcome.png";

const Welcome = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const WelcomeTextBox = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingTop: "6rem",
    [theme.breakpoints.down("md")]: {
      paddingTop: "0",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#FFF",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#FED801", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <WelcomeTextBox>
            <Title variant="h1">
              Discover a place where you'll love to Eat
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
                my: 4,
              }}
            >
              Immerse yourself in the elegant ambiance as you savor each bite,
              accompanied by our extensive selection of hand picked wines and
              carefully curated cocktails.
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#FFF"
              buttonText="More About Us"
              welcomeBtn={true}
            />
          </WelcomeTextBox>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={welcome}
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Welcome;
