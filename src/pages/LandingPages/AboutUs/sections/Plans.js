import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Plans() {
  const plans = [
    {
      title: "Básico",
      price: "PEN 0 por 1 mes",
      afterPrice: "Después, PEN 19.90 por mes",
      features: [
        "👾 Todo lo del Plan Gratuito.",
        "👾 Anuncio destacado en la lista principal (con distintivo).",
        "👾 Publicación con hasta 5 imágenes.",
        "👾 Prioridad media en los resultados de búsqueda.",
      ],
      buttonText: "Probar 1 mes por PEN 0",
      buttonGeneral: "Un pago único",
      buttonColor: "#ff80b5",
      descipPlan:
        "PEN 0 por 1 mes. Después, cuesta PEN 19.90 al mes. La oferta solo está disponible si aún no probaste Premium. Se aplican Términos.",
    },
    {
      title: "Estandar",
      price: "PEN 0 por 1 mes",
      afterPrice: "Después, PEN 39.90 por mes",
      features: [
        "👾 Todo lo del Plan Básico.",
        "👾 Mayor prioridad en los resultados de búsqueda.",
        "👾 Publicación con hasta 10 imágenes y video.",
        "👾 Estadísticas básicas sobre visitas al anuncio.",
      ],
      buttonText: "Probar 1 mes por PEN 0",
      buttonGeneral: "Un pago único",
      buttonColor: "#ff80b5",
      descipPlan:
        "PEN 0 por 1 mes. Después, cuesta PEN 39.90 al mes. La oferta solo está disponible si aún no probaste Premium. Se aplican Términos.",
    },
    {
      title: "Premium",
      price: "PEN 79.9 al 1 mes",
      features: [
        "👾 Máxima prioridad en resultados de búsqueda.",
        "👾 Publicación con hasta 20 imágenes y videos.",
        "👾 Estadísticas avanzadas y análisis de rendimiento.",
        "👾 Notificaciones personalizadas para compradores interesados.",
        "👾 Anuncio fijado en la sección de destacados.",
      ],
      buttonText: "Obten Premium",
      buttonGeneral: "Un pago único",
      buttonColor: "#ffb74d",
      descipPlan: "El mejor Plan de Kallpa. Se aplican Términos",
    },
  ];

  return (
    <Box component="section" py={6} sx={{ backgroundColor: "white", color: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "#2a2a2a",
                  borderRadius: "25px",
                  minHeight: "570px", // 🔹 Todos los contenedores del mismo tamaño
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: index === 2 ? "#ffa726" : "#ff80b5" }}
                  >
                    {plan.title}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1, color: "#ffffff" }}>
                    {plan.price}
                  </Typography>
                  {plan.afterPrice && (
                    <Typography variant="body2" sx={{ color: "#bdbdbd", mb: 2 }}>
                      {plan.afterPrice}
                    </Typography>
                  )}
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      p: 0,
                      m: 0,
                      textAlign: "left",
                      color: "#ffffff",
                    }}
                  >
                    {plan.features.map((feature, idx) => (
                      <Typography
                        component="li"
                        key={idx}
                        variant="body2"
                        sx={{ mb: 1, color: "#ffffff" }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ mt: "auto" }}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      backgroundColor: plan.buttonColor,
                      color: "#000",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      width: "100%", // 🔹 Botón alineado al 100% del ancho
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      backgroundColor: "transparent",
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      border: "2px solid white",
                      width: "100%", // 🔹 Botón alineado al 100% del ancho
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)", // Ligero fondo blanco al pasar el cursor
                      },
                    }}
                  >
                    {plan.buttonGeneral}
                  </Button>
                  {plan.descipPlan && (
                    <Typography variant="body2" sx={{ color: "#bdbdbd", mt: 2 }}>
                      {plan.descipPlan}
                    </Typography>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Plans;
