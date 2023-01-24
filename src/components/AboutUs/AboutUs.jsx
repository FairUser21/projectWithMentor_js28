import {
  Button,
  Container,
  GlobalStyles,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./AboutUs.css";
import UncontrolledExample from "./UncontrolledExample";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div>
      <header className="headerr">
        <UncontrolledExample />
      </header>
      <div className="block"></div>
      <Container className="cont" sx={{ mt: 10 }}>
        <Typography variant="h2" component="h2" sx={{ color: "white", mb: 5 }}>
          Guns Shop
        </Typography>
        <Box
          style={{
            backgroundImage:
              "url(http://s.fishki.net/upload/post/201506/26/1577816/11791310.jpg)",
          }}
        >
          <div className="about-heading">
            <h2>Who we are</h2>
            <Typography variant="h6" component="p" className="about-text">
              Heckler & Koch GmbH is a German defense manufacturing company that
              manufactures handguns, rifles, submachine guns, and grenade
              launchers. The company is located in Oberndorf am Neckar in the
              German state of Baden-Württemberg, and also has subsidiaries in
              the United Kingdom, France and the United States.
            </Typography>
          </div>
          <Grid sx={{ my: 7 }} container spacing={0}>
            <Grid item xs>
              <p>'50 years on the market'</p>
            </Grid>
            <Grid item xs>
              <p>'1000000 sells'</p>
            </Grid>
            <Grid item xs>
              <p>'guarantee'</p>
            </Grid>
          </Grid>
          <div className="about-heading">
            <h2>What we sell</h2>
            <Typography variant="h6" component="p" className="about-text">
              Second digit: form factor 1 = Magazine fed machine gun 2 = Belt
              fed machine gun 3 = Full sized rifle 4 = Semi-automatic military
              rifle 5 = Select fire carbine 6 = Shoulder fired standalone
              grenade launcher 7 = Underbarrel mounted grenade launcher 8 =
              Hunting and repeating weapons for civilian market Third digit:
              caliber 1 - 7.62×51mm NATO 2 - 7.62×39mm 3 - 5.56×45mm NATO 4 -
              9×19mm Parabellum/.40 S&W/.45 ACP 5 - .50 BMG 6 - HK 4.6×30mm 7 -
              .300 AAC Blackout 8 - 37mm Grenade 9 - 40 mm grenade
            </Typography>
          </div>
        </Box>
        <React.Fragment>
          <GlobalStyles
            styles={{
              h1: { color: "white" },
              p: { color: "white" },
              h2: { color: "white" },
            }}
          />
        </React.Fragment>
      </Container>
      {/* <Box
        sx={{ width: "500", height: "200", backgroundColor: "primary.dark" }}
      ></Box> */}
      <footer className="foooter">
        <div>
          <div>
            <div className="svyaz">Связаться с нами</div>
          </div>
          <div className="thre">
            <a className="aaa" href="tel:777777777">
              777777777
            </a>
            <a className="aaa" href="https://www.instagram.com/ular_bishkek_/">
              <img src="https://www.instagram.com/akvalend_kg/" alt="" />
              ⠀Instagram
            </a>
            <a className="aaa" href="ул. Льва Толстого, Бишкек">
              Адрес
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
// https://cdn.wallpapersafari.com/5/17/XZ9ulU.jpg
