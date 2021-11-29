import React from "react";
import { Box } from "@material-ui/system";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { baseUrl } from "../../constants/contants";
import useRequestData from "../../hooks/useRequestData";
import { useHistory, useParams } from "react-router";

function AdminPage() {
  const history = useHistory();
  const params = useParams();
  const [tripsData, isLoading, errorRequest] = useRequestData(`${baseUrl}/trips`, {});

  const goBack = () => {
    history.goBack()
  }

  const goToDetailsPage = () => {
    history.push(`/trips/${params.trip}`)
  }

  const tripCards = tripsData && tripsData.trips && tripsData.trips.map(trip => {
    return (
      <Box key={trip.id} sx={{ minWidth: 500 }}>
        <Card sx={{ maxWidth: 300 }} key={trip.id} variant="outlined">
          <CardContent variant="outlined">
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              {trip.name}
            </Typography>
            <Typography variant="body2">
              {trip.date} ({trip.durationInDays} dias)
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonGroup variant="contained">
              <Button size="small" onClick={() => goToDetailsPage}>Detalhes</Button>
              <Button size="small">Excluir</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Box>
    )
  })

  return (
    <div>
      <Box >
        <Typography variant="h4" gutterBottom component="div">
          Painel Administrativo
        </Typography>
        <Button variant="contained" onClick={() => goBack()}>Voltar</Button>
        <Button variant="contained">Logout</Button>
        <Button variant="contained">Nova Viagem</Button>
      </Box>
      {tripCards}
    </div>
  );
}

export default AdminPage;