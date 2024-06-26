import { AuthContext } from "context/auth";
import { useContext } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthRouter, OnlyPublicRoute, PrivateRoute } from "./index";
import { TradesRouter } from "./TradesRouter";
import { CollectionRouter } from "./CollectionRouter";
import { ProfileRouter } from "./ProfileRouter";
import { RequestsRouter } from "./RequestsRouter";
import { HistoryRouter } from "./HistoryRouter";

export const AppRouter = () => {
  const { isLogged } = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute isAuthenticated={isLogged} />}>
          <Route path="/trades/*" element={<TradesRouter />} />
          <Route path="/profile/" element={<ProfileRouter />} />
          <Route path="/history/*" element={<HistoryRouter />} />
          <Route path="/collection/*" element={<CollectionRouter />} />
          <Route path="/requests/*" element={<RequestsRouter />} />
        </Route>
        <Route element={<OnlyPublicRoute isAuthenticated={isLogged} />}>
          <Route path="/auth/*" element={<AuthRouter />} />
        </Route>
        <Route path="*" element={<Navigate to="/trades"/>} />
      </Routes>
    </Router>
  )
}
