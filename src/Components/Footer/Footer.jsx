import { Box, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import React from "react";

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";

const Footer = () => {
  const footer_box = [
    {
      header: "Featured",
      links: [
        { display: "Guides", path: "/" },
        { display: "Services", path: "/" },
        { display: "Contact Us", path: "/" },
      ],
    },
    {
      header: "OverView",
      links: [
        { display: "Location", path: "/" },
        { display: "Partnerships", path: "/" },
        { display: "Terms of use & Privacy Policies", path: "/" },
      ],
    },
  ];

  const scoial_links = [
    {
      header: "Get in touch",
      typography: "keep in touch with our social media pages",
      links: [{ Icon: fbIcon }, { Icon: twitterIcon }, { Icon: instagramIcon }],
    },
  ];

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("p")(() => ({
    fontSize: "16px",
    color: "#000066",
    fontWeight: "300",
    lineHeight: "22px",
    cursor: "pointer",
    "&:hover": {
      color: "#66B2FF",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "#FFF682" }}>
      <CustomContainer>
        {footer_box.map((item,index) => (
          <Box key={index}>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 1,
              }}
            >
              {item.header}
            </Typography>

            {item.links.map((link) => (
              <FooterLink>{link.display}</FooterLink>
            ))}
          </Box>
        ))}

        {scoial_links.map((item) => (
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 1,
              }}
            >
              {item.header}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              {item.typography}
            </Typography>

            <IconBox>
              {item.links.map((link) => (
                <img src={link.Icon} alt="" />
              ))}
            </IconBox>
          </Box>
        ))}
      </CustomContainer>
    </Box>
  );
};

export default Footer;
