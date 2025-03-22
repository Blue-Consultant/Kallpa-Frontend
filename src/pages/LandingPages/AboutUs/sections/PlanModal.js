import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

// Componente estilizado para forzar el color blanco
const StyledTypography = styled(Typography)({
  color: "white !important",
});

const PlanModal = ({ open, onClose, options, planName }) => {
  const [selectedOption, setSelectedOption] = useState("");

  if (!Array.isArray(options)) {
    return <StyledTypography>Las opciones no están disponibles</StyledTypography>;
  }

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleContinue = () => {
    alert(`Seleccionaste: ${selectedOption}`);
    onClose();
  };

  // Función para manejar el clic en la opción
  const handleOptionClick = (optionName) => {
    setSelectedOption(optionName);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#002",
          color: "white",
          borderRadius: "20px",
          p: 3,
          maxWidth: 1000,
          width: "70%",
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <StyledTypography variant="h6" sx={{ mb: 2, fontWeight: "bold", fontSize: "20px" }}>
          {planName}
        </StyledTypography>

        {/* Línea horizontal */}
        <Box sx={{ borderBottom: "1px solid rgb(117, 111, 111)", mb: 2 }} />

        <FormControl sx={{ width: "100%", flexGrow: 1 }}>
          <RadioGroup value={selectedOption} onChange={handleChange}>
            {options.map((option, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1.5,
                  p: 1,
                  borderRadius: "8px",
                  bgcolor:
                    selectedOption === option.option_name
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                  "&:hover": {
                    bgcolor:
                      selectedOption === option.option_name
                        ? "rgba(255, 255, 255, 0.2)"
                        : "rgba(255, 255, 255, 0.1)",
                  },
                  cursor: "pointer",
                }}
                onClick={() => handleOptionClick(option.option_name)}
              >
                <Box sx={{ textAlign: "left" }}>
                  <StyledTypography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    {option.option_name}
                  </StyledTypography>
                  <StyledTypography sx={{ fontSize: "0.8rem" }}>
                    {" "}
                    {option.option_value}
                  </StyledTypography>
                </Box>
                <FormControlLabel
                  value={option.option_name}
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-checked": { color: "white" },
                      }}
                    />
                  }
                  label=""
                  sx={{ m: 0 }}
                />
              </Box>
            ))}
          </RadioGroup>
        </FormControl>

        <Typography variant="body2" sx={{ color: "#bdbdbd", mt: 1, fontSize: "0.8rem" }}>
          Ahorro comprado al costo total de una suscripción mensual por la misma duración. El precio
          equivalente muestra el costo por el número de meses correspondientes a modo de referencia.
          Se aplica el precio prepago.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          {" "}
          {/* Reduje de 4 a 2 */}
          <Button
            onClick={onClose}
            sx={{
              backgroundColor: "gray",
              color: "white",
              "&:hover": { backgroundColor: "#555" },
              fontSize: "0.9rem", // Tamaño más pequeño para los botones
              px: 2, // Padding horizontal ajustado
            }}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleContinue}
            sx={{
              backgroundColor: "#ff80b5",
              color: "white",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#ff4e84" },
              fontSize: "0.9rem",
              px: 2,
            }}
            disabled={!selectedOption}
          >
            Continuar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

PlanModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option_name: PropTypes.string.isRequired,
      option_value: PropTypes.string.isRequired,
    })
  ).isRequired,
  planName: PropTypes.string.isRequired,
};

export default PlanModal;
