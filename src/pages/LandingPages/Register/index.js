// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
// import MKAlert from "components/MKAlert";
// import MKStyles from "components/MKStyles/InputStyles.module.css";

// Material Kit 2 React example components
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
// import routes from "routes";

// Imagen de fondo y logo
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import logo from "assets/images/logo-kallpa.png";
import { Link } from "react-router-dom";

function RegisterBasic() {
  return (
    <>
      <MKBox
        px={1}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={2}
        sx={{
          backgroundColor: "black !important",
        }} // Fondo negro
      >
        <Grid Grid container spacing={0} justifyContent="center" alignItems="center" height="100%">
          {/* Left Section: Logo and Greeting */}
          <Grid item xs={11} sm={9} md={5} lg={4} xl={4}>
            <Card
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MKBox display="flex" justifyContent="center" alignItems="center" mb={2} width="40%">
                <MKBox component="img" src={logo} alt="Logo" width="100%" sx={{ height: "auto" }} />
              </MKBox>
            </Card>
          </Grid>

          {/* Right Section: Login Form */}
          <Grid item xs={11} sm={9} md={5} lg={4} xl={4}>
            <Card
              sx={{
                backgroundColor: "#4B38E0",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                height: "400px",
              }}
            >
              <MKBox pt={4} pb={3} px={5}>
                <MKBox display="flex" justifyContent="flex-start" alignItems="center" mb={2}>
                  <MKTypography
                    variant="body2"
                    component={Link}
                    to="/authentication/sign-in/basic"
                    color="white"
                    sx={{
                      color: "white",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>←</span> Volver
                  </MKTypography>
                </MKBox>

                <MKBox component="form" role="form">
                  <MKBox mb={1} width="80%" mx="auto" display="flex" gap={2}>
                    <MKBox width="50%">
                      <MKInput
                        type="text"
                        label="Primer nombre"
                        sx={{
                          backgroundColor: "white !important",
                          borderRadius: "8px",
                          width: "100%",
                        }}
                      />
                    </MKBox>
                    <MKBox width="50%">
                      <MKInput
                        type="text"
                        label="Apellido"
                        sx={{
                          backgroundColor: "white !important",
                          borderRadius: "8px",
                          width: "100%",
                        }}
                      />
                    </MKBox>
                  </MKBox>

                  <MKBox mb={2} width="80%" mx="auto">
                    <MKInput
                      type="email"
                      label="Correo Electrónico"
                      sx={{
                        backgroundColor: "white !important",
                        borderRadius: "8px",
                        width: "100%",
                      }}
                    />
                  </MKBox>

                  <MKBox mb={2} width="80%" mx="auto">
                    <MKInput
                      type="password"
                      label="Contraseña"
                      sx={{
                        backgroundColor: "white !important",
                        borderRadius: "8px",
                        width: "100%",
                      }}
                    />
                  </MKBox>

                  <MKBox mt={4} mb={1} width="80%" mx="auto">
                    <MKButton
                      variant="gradient"
                      // type="submit"
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: "#4B38E0",
                        "&:hover": { backgroundColor: "#4B38E0" },
                        width: "100%",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Registrar
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Al continuar, usted acepta nuestros{" "}
                      <MKTypography
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="danger"
                        fontWeight="medium"
                        textGradient
                      >
                        Términos y condiciones
                      </MKTypography>{" "}
                      y{" "}
                      <MKTypography
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="danger"
                        fontWeight="medium"
                        textGradient
                      >
                        Políticas de privacidad
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default RegisterBasic;
