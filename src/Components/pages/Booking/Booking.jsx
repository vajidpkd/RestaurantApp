import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

import buyIcon from "../../../assets/buy_icon.png";
import sellIcon from "../../../assets/sell_icon.png";
import rentIcon from "../../../assets/sell_icon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "../../CustomButton/CustomButton";

const Booking = () => {
  const guide_box = [
    {
      Icon: buyIcon,
      header: "Order Guides",
      linktex: "How to order",
    },
    {
      Icon: sellIcon,
      header: "Booking Guides",
      linktex: "How to Book",
    },
    {
      Icon: rentIcon,
      header: "Payment Guides",
      linktex: "payment Methode",
    },
  ];

  const CustomBox = styled(Box)(({ theme }) => ({
    width: "38%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        How to Book
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
          Everything you need to know when you book for advance slot
        </Typography>
      </CustomBox>

      <GuidesBox>
        {guide_box.map((item) => (
          <GuideBox key={item.header}>
            <img src={item.Icon} alt="buyIcon" />
            <Typography
              variant="body2"
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#383C45",
                my: 1,
              }}
            >
              {item.header}
            </Typography>

            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "16px", color: "#0689FF" }}
              >
                {item.linktex}
              </Typography>
              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>
          </GuideBox>
        ))}
      </GuidesBox>

      <CustomButton
        backgroundColor="#0F1B4C"
        color="#FFF"
        buttonText="See Full Guides"
        guideBtn={true}
      />
    </Box>
  );
};

export default Booking;
