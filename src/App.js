import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import SignInBasic from "pages/LandingPages/SignIn/index";
import routes from "routes";
import PropTypes from "prop-types";
import useAuth from "pages/LandingPages/SignIn/hooks/useAuth";

export default function App() {
  const { pathname } = useLocation();
  const { token } = useAuth();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={
              route.protected ? (
                <PrivateRoute isAuthenticated={!!token}>{route.component}</PrivateRoute>
              ) : (
                route.component
              )
            }
            key={route.key}
          />
        );
      }
      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/authentication/sign-in/basic" element={<SignInBasic />} />
        <Route
          path="/presentation"
          element={
            <PrivateRoute isAuthenticated={!!localStorage.getItem("authToken")}>
              <Presentation />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/authentication/sign-in/basic" />} />
      </Routes>
    </ThemeProvider>
  );
}

function PrivateRoute({ children, isAuthenticated }) {
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/authentication/sign-in/basic" state={{ from: location }} />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
