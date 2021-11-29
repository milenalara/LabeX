import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import TripsListPage from "../pages/TripsListPage/TripsListPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/application/:trip"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/admin"}>
          <AdminPage />
        </Route>

        <Route exact path={"/admin/create-trip"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/trips"}>
          <TripsListPage />
        </Route>

        <Route exact path={"trips/:trip"}>
          <TripDetailsPage />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router;