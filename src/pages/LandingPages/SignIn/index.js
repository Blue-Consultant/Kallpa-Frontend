import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKAlert from "components/MKAlert";
import MKStyles from "components/MKStyles/InputStyles.module.css";

// Material Kit 2 React example components
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
// import routes from "routes";

// Imagen de fondo y logo
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import logo from "assets/images/logo-kallpa.png";

// Importa el controlador de login
import { signInController } from "./controllers/signIn.controller";
// Importa el hook de autenticación
import useAuth from "./hooks/useAuth";

function SignInBasic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = await signInController.login(email, password);
      login(authToken);
      navigate("/presentation");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <MKBox
        px={1}
        width="100%"
        height="100vh"
        mx="auto"
        position="relative"
        zIndex={2}
        sx={{ backgroundColor: "black !important" }}
      >
        <Grid container spacing={0} justifyContent="center" alignItems="center" height="100%">
          {/* Left Section: Logo and Greeting */}
          <Grid item xs={11} sm={9} md={5} lg={4} xl={4}>
            <Card
              sx={{
                backgroundColor: "#4B38E0",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                height: "450px", // Increased height (previously 100%)
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MKBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={2}
                width="40%" // Reduced logo size (previously 50%)
              >
                <MKBox component="img" src={logo} alt="Logo" width="100%" sx={{ height: "auto" }} />
              </MKBox>
              <MKTypography
                variant="h3"
                color="white"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "2.5rem",
                }}
              >
                Hola, <br /> Bienvenid@!
              </MKTypography>
            </Card>
          </Grid>

          {/* Right Section: Login Form */}
          <Grid item xs={11} sm={9} md={5} lg={4} xl={4}>
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                height: "450px",
              }}
            >
              <MKBox pt={4} pb={3} px={5}>
                <MKBox display="flex" justifyContent="flex-start" alignItems="center" mb={2}>
                  <MKTypography
                    variant="body2"
                    sx={{
                      color: "#4B38E0", // Texto morado
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>←</span> Volver
                  </MKTypography>
                </MKBox>

                <MKBox component="form" role="form" onSubmit={handleSubmit}>
                  <MKBox mb={2} width="80%" mx="auto">
                    <MKInput
                      type="email"
                      label="Correo Electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={MKStyles.purpleInput} // Aplica la clase del módulo
                      sx={{
                        backgroundColor: "rgba(29, 38, 118, 0.58)",
                        borderRadius: "8px",
                        width: "100%",
                      }}
                    />
                  </MKBox>

                  <MKBox mb={2} width="80%" mx="auto">
                    <MKInput
                      type="password"
                      label="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={MKStyles.purpleInput} // Aplica la clase del módulo
                      sx={{
                        backgroundColor: "rgba(29, 38, 118, 0.58)",
                        borderRadius: "8px",
                        width: "100%",
                      }}
                    />
                  </MKBox>
                  <MKBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                    px={2}
                  >
                    <MKBox display="flex" alignItems="center">
                      <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                      <MKTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                        onClick={handleSetRememberMe}
                        sx={{ cursor: "pointer", userSelect: "none" }}
                      >
                        Recuérdame
                      </MKTypography>
                    </MKBox>
                    <MKTypography
                      variant="button"
                      color="info"
                      sx={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      ¿Olvidaste tu contraseña?
                    </MKTypography>
                  </MKBox>
                  {error && (
                    <MKAlert color="error" sx={{ textAlign: "center", mb: 2 }}>
                      {error}
                    </MKAlert>
                  )}
                  <MKBox mt={4} mb={1} width="80%" mx="auto">
                    <MKButton
                      variant="gradient"
                      // color="info"
                      type="submit"
                      sx={{
                        borderRadius: "8px",
                        backgroundColor: "#4B38E0",
                        "&:hover": {
                          backgroundColor: "#4B38E0",
                        },
                        width: "100%",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Iniciar Sesión
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      ¿No tienes una cuenta?{" "}
                      <MKTypography
                        component={Link}
                        to="/register"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Regístrate aquí
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

export default SignInBasic;
