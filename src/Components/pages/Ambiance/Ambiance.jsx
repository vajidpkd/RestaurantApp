import { Box, styled, Typography, Container } from "@mui/material";
import React from "react";
import cardImg from "../../../assets/ambience.jpg";

const Ambiance = () => {
  const Text_flex = [
    {
      LargeText: "250+",
      SmallText: "Dishes",
    },
    {
      LargeText: "300+",
      SmallText: "Trusted Clints",
    },
    {
      LargeText: "350+",
      SmallText: "Delivery Per Day",
    },
  ];

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    borderRadius: "100vh",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={cardImg} alt="cardImage" style={{ maxWidth: "100%" }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              You've found a ambiance you love.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#5A6573",
                lineHeight: "27px",
              }}
            >
              Disover the epitome of culinary excellence at Savoria, where every
              visit is an enchanthing rendezvous with the art of dining.
            </Typography>
          </Box>
        </CustomBox>

        <TextFlexBox>
          {Text_flex.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <LargeText>{item.LargeText}</LargeText>
              <SmallText>{item.SmallText}</SmallText>
            </Box>
          ))}
        </TextFlexBox>
      </Container>
    </Box>
  );
};

export default Ambiance;
