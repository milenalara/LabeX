import React, { useEffect, useState } from "react";
import MarsPicture from "../../assets/mars-landscape.jpg"
import { StyledMarsPicture, ContainerTextAndImage, ContainerTexto } from "./HomePageStyles";
import { Box } from "@material-ui/system";
import { Typography } from "@material-ui/core";

function HomePage() {
  return (
    <ContainerTextAndImage>
      <StyledMarsPicture src={MarsPicture} />
      <div>
        <Typography variant="h4" gutterBottom component="div">
          Já pensou em fazer conhecer Marte? Fazer um tour pelas luas de Júpiter? A LabeX te leva!
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Clique aqui para ver nossas opções de viagens →
        </Typography>
      </div>
    </ContainerTextAndImage>
  );
}

export default HomePage;
