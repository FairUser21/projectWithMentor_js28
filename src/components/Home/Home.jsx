import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Home = () => {
  const StyledBox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  });

  const StyledTypography = styled(Typography)({
    margin: "25% 50px 25% 50px",
    background: "white",
    opacity: "0.7",
  });

  return (
    <div>
      <Box>
        <Typography
          align="center"
          variant="h3"
          sx={{ fontWeight: 900, bgcolor: "lightgrey" }}
        >
          Guns <b style={{ color: "#424242" }}>Shop</b>
        </Typography>
        <Typography align="center" variant="body1" sx={{ fontWeight: 600 }}>
          The Most Trusted Place To Buy Guns
        </Typography>

        <Box
          style={{
            background:
              "url(https://st4.depositphotos.com/2760050/38357/i/600/depositphotos_383572616-stock-photo-man-wear-camouflage-clothes-nature.jpg) no-repeat center",
            backgroundSize: "cover",
            height: 600,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "40%", padding: 20 }}>
            <Box sx={{ background: "#9e9e9e", opacity: "0.8" }}>
              <Typography variant={"h6"} color="#263238" align="center" pt={8}>
                Hunting and Shooting Must-Haves
              </Typography>
              <Typography variant="h4" align="center">
                Don't forget to practice. Aim true. Shoot straight
              </Typography>
              <Typography variant="body1" align="center" pb={8}>
                Bang,Bang!
              </Typography>
              <Button variant="contained" sx={{ marginBottom: 7 }}>
                BUY NOW
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Stack direction={"row"} spacing={4} mt={5}>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-gift-cards-2021-1637270343.jpg)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              GIFT CARDS
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/696928080/photo/weapons-and-military-equipment-for-army-assault-rifle-gun-and-pistol-on-camouflage-background.jpg?s=612x612&w=0&k=20&c=IQi3VUitv7CFJu1sHfofxbRZKns_1n-EVBzz-rX4bMI=)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              WEAPON & FIREARMS
            </StyledTypography>
          </StyledBox>
          <StyledBox
            sx={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1329985663/photo/falling-bullets-on-a-black-background-with-depth-of-field.jpg?s=612x612&w=0&k=20&c=fDdMV1EN4vNnKaCf-dLU0MhMfDKmu1nsIOxs_96ASf4=)",
            }}
          >
            <StyledTypography align="center" variant="h5">
              AMMO
            </StyledTypography>
          </StyledBox>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
