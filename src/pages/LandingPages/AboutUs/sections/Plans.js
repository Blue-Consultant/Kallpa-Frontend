import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import usePlans from "../hooks/usePlans";
import PlanModal from "./PlanModal";
// import MKButton from "components/MKButton";

function Plans() {
  const {
    plans,
    loading,
    error,
    openModal,
    modalOptions,
    handleOpenModal,
    handleCloseModal,
    selectedPlanName,
  } = usePlans(); // Usa el hook para obtener los planes

  if (loading) {
    return (
      <Typography variant="h6" color="textSecondary">
        Loading plans...
      </Typography>
    ); // Muestra un mensaje mientras carga
  }

  if (error) {
    return <Typography variant="h6" color="error">{`Error: ${error}`}</Typography>; // Muestra un mensaje de error
  }

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
                  {/* Línea horizontal después de afterPrice */}
                  <Box sx={{ borderBottom: "1px solid rgb(117, 111, 111)", mb: 2 }} />
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
                      width: "100%",
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
                      width: "100%",
                    }}
                    onClick={() => handleOpenModal(plan.options, plan.title)}
                  >
                    {plan.buttonGeneral}
                  </Button>
                  {plan.descipPlan && (
                    <>
                      <Typography variant="body2" sx={{ color: "#bdbdbd", mt: 2 }}>
                        {plan.descipPlan} Se aplican terminos y condiciones.
                      </Typography>
                    </>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <PlanModal
          open={openModal}
          onClose={handleCloseModal}
          options={modalOptions}
          planName={selectedPlanName}
        />
      </Container>
    </Box>
  );
}

export default Plans;
