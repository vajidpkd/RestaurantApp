import { Box, Typography, Container } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { CardData } from "../../../StaticData/Data";
import CustomCard from "../../CustomCard/CustomCard";

const Dishes = () => {
  const DishesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));
  
  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10}}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{
              color: "#000339",
              fontSize: "35px",
              fontWeight: "bold",
              ml: "13px",
            }}
          >
            Featured Dishes
          </Typography>

          <Typography
            sx={{ color: "#5A6473", fontSize: "16px", mt: 1, ml: "13px" }}
          >
            Exploer Variety of South Indian Dishes!!
          </Typography>
        </PropertiesTextBox>

        <DishesBox>
          {CardData.map((foodItme) => (
            <CustomCard
              key={foodItme.id}
              img={foodItme.img}
              price={foodItme.price}
              item={foodItme.item}
              like={foodItme.like}
              heart={foodItme.heart}
              share={foodItme.share}
            />
          ))}
        </DishesBox>
      </Container>
    </Box>
  );
};

export default Dishes;
