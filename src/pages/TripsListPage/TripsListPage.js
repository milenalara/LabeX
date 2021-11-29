import React, { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, MenuItem, TextField, Typography } from "@material-ui/core";
import { ContainerFilters } from "./TripsListPageStyles";
import { InputAdornment } from "@material-ui/core";
import { ContainerTripCards } from "./TripsListPageStyles";
import { useHistory } from "react-router";
import { baseUrl } from "../../constants/contants";
import useRequestData from "../../hooks/useRequestData";

function TripsListPage() {
  const [tripsData, isLoading, errorRequest] = useRequestData(`${baseUrl}/trips`, {});
  const [destinationInput, setDestinationInput] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const history = useHistory();

  const goToApplicationPage = (tripId) => {
    history.push(`/application/${tripId}`)
  }

  const handleDestinationOnChange = (event) => {
    setDestinationInput(event.target.value);
  }

  const handleFilterOnChange = (event) => {
    setFilterInput(event.target.value);
  }


  const tripCards = tripsData && tripsData.trips && tripsData.trips.map((trip => {
    return (
      <Card sx={{ maxWidth: 300 }} key={trip.id} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {trip.date}
          </Typography>
          <Typography variant="h5" component="div">
            {trip.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {trip.durationInDays} dias
          </Typography>
          <Typography variant="body2">
            {trip.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => goToApplicationPage(trip.id)}
          >
            Inscreva-se!
          </Button>
        </CardActions>
      </Card>
    )
  }))

  const destinationOptions = tripsData && tripsData.trips && tripsData.trips.map((destination) => {
    return (
      <MenuItem key={destination.id} value={destination.planet}>
        {destination.planet}
      </MenuItem>
    )
  }
  )

  const filters = ["Maior valor", "Menor valor", "Destino"]
  const filterOptions = filters.map((filter) => {
    return (
      <MenuItem key={filter} value={filter}>
        {filter}
      </MenuItem>
    )
  })

  return (
    <div>
      <ContainerFilters>
        <TextField
          label="valor mínimo"
          size="small"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}
        />
        <TextField
          label="valor máximo"
          size="small"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}
        />
        <TextField
          select
          label="Destino"
          sx={{ m: 1, width: '25ch' }}
          size="small"
          value={destinationInput}
          onChange={handleDestinationOnChange}
        >
          {destinationOptions}
        </TextField>
        <TextField
          select
          label="Ordenar por"
          sx={{ m: 1, width: '25ch' }}
          size="small"
          value={filterInput}
          onChange={handleFilterOnChange}
        >
          {filterOptions}
        </TextField>
      </ContainerFilters>
      <ContainerTripCards>
        {isLoading && <h2>Carregando...</h2>}
        {!isLoading && tripsData && tripCards}
      </ContainerTripCards>
    </div>
  );
}

export default TripsListPage;
