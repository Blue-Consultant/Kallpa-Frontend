/* eslint-disable no-param-reassign */
/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Light mode icon

function DefaultNavbar({ brand, sticky, relative, toggleTheme, isDarkTheme }) {
  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <MKBox
        py={1}
        px={{ xs: 2, sm: 3, lg: 4 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        borderRadius="none"
        shadow="none"
        color="white"
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={{
          background: "linear-gradient(90deg, #1A1A2E 0%, #16213E 100%)",
          backdropFilter: "none",
        }}
      >
        <MKBox display="flex" justifyContent="space-between" alignItems="center">
          {/* Logo */}
          <MKBox component={Link} to="/" lineHeight={1} py={0.75} pl={{ xs: 0, lg: 1 }}>
            <MKTypography variant="h6" fontWeight="bold" color="white" sx={{ fontSize: "1.5rem" }}>
              {brand}
            </MKTypography>
          </MKBox>

          {/* Search Bar */}
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            alignItems="center"
            mx="auto"
            width={{ xs: "100%", sm: "50%", lg: "40%" }}
          >
            <TextField
              placeholder="¿Qué estás buscando?"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon sx={{ color: "white" }}>mic</Icon>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "rgba(255, 255, 255, 0.91)",
                  borderRadius: "20px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  color: "white",
                  "&::placeholder": {
                    color: "white",
                    opacity: 0.7,
                  },
                },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
              }}
            />
          </MKBox>

          {/* Buttons de buscar */}
          <MKButton
            variant="contained"
            color="info"
            size="small"
            sx={{
              backgroundColor: "#4A3AFF",
              borderRadius: "60px",
              textTransform: "none",
              mr: 1,
              "&:hover": {
                backgroundColor: "#3A2ECC",
              },
            }}
          >
            <Icon sx={{ color: "white", mr: 0.5 }}>search</Icon>
          </MKButton>

          {/* Right Side: Cart and Buttons */}
          <MKBox display="flex" alignItems="center">
            {/* Cart Icon */}
            <MKBox display="flex" alignItems="center" mr={2}>
              <Icon sx={{ color: "white !important", mr: 0.5 }}>shopping_cart</Icon>
              <MKTypography variant="body2" color="white">
                S/.0.00
              </MKTypography>
            </MKBox>

            {/* Buttons */}
            <MKButton
              variant="contained"
              color="info"
              size="small"
              sx={{
                backgroundColor: "#4A3AFF",
                borderRadius: "20px",
                textTransform: "none",
                mr: 1,
                "&:hover": {
                  backgroundColor: "#3A2ECC",
                },
              }}
            >
              Registrarse
            </MKButton>
            <MKBox display="flex" alignItems="center">
              <MKButton
                variant="contained"
                color="info"
                size="small"
                sx={{
                  backgroundColor: "#4A3AFF",
                  borderRadius: "20px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#3A2ECC",
                  },
                }}
              >
                Iniciar Sesión
              </MKButton>
              {/* Theme Toggle Button */}
              <MKButton
                variant="contained"
                color="default"
                onClick={toggleTheme}
                sx={{
                  borderRadius: "50%",
                  minWidth: "40px",
                  width: "40px",
                  height: "40px",
                  p: 0,
                  ml: 1,
                  backgroundColor: "#4A3AFF",
                  "&:hover": {
                    backgroundColor: "#3A2ECC",
                  },
                }}
              >
                {isDarkTheme ? (
                  <Brightness7Icon sx={{ color: "white" }} />
                ) : (
                  <Brightness4Icon sx={{ color: "white" }} />
                )}
              </MKButton>
            </MKBox>
          </MKBox>
        </MKBox>
      </MKBox>
    </Container>
  );
}

DefaultNavbar.defaultProps = {
  brand: "KALLPA",
  sticky: false,
  relative: false,
  toggleTheme: () => {},
  isDarkTheme: true,
};

DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  toggleTheme: PropTypes.func,
  isDarkTheme: PropTypes.bool,
};

export default DefaultNavbar;
