import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Modal,
  Box,
  IconButton,
  Rating,
} from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

function FeaturedAdCard({
  title,
  price,
  location,
  category,
  publishedDate,
  seller,
  description,
  //   rating,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          backgroundColor: "#2A2E3F",
          color: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {/* Placeholder for the image */}
        <MKBox
          sx={{
            backgroundColor: "#3A3F50",
            height: "150px",
            borderRadius: "8px 8px 0 0",
          }}
        />
        <CardContent>
          <MKTypography variant="h6" color="white">
            {title}
          </MKTypography>
          <MKTypography variant="body2" color="white">
            S/. {price}
          </MKTypography>
          <MKTypography variant="body2" color="white" mt={1}>
            {location}
          </MKTypography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
          <Button size="small" variant="contained" color="info">
            Guardar
          </Button>
          <Button
            size="small"
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
            onClick={handleOpen}
          >
            Ver detalles
          </Button>
        </CardActions>
      </Card>

      {/* Modal for Ad Details */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="ad-details-modal"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1A1E2D",
            color: "white",
            borderRadius: "8px",
            width: { xs: "90%", sm: "80%", md: "60%" },
            maxWidth: "800px",
            p: 3,
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Left Side: Images */}
          <Box sx={{ flex: 1 }}>
            <MKBox
              sx={{
                backgroundColor: "#3A3F50",
                height: "200px",
                borderRadius: "8px",
                mb: 2,
              }}
            >
              <MKTypography variant="body2" color="white" textAlign="center" pt={8}>
                Imagen principal
              </MKTypography>
            </MKBox>
            <Box display="flex" gap={1}>
              <MKBox
                sx={{
                  backgroundColor: "#3A3F50",
                  height: "60px",
                  width: "60px",
                  borderRadius: "4px",
                }}
              />
              <MKBox
                sx={{
                  backgroundColor: "#3A3F50",
                  height: "60px",
                  width: "60px",
                  borderRadius: "4px",
                }}
              />
              <MKBox
                sx={{
                  backgroundColor: "#3A3F50",
                  height: "60px",
                  width: "60px",
                  borderRadius: "4px",
                }}
              />
            </Box>
          </Box>

          {/* Right Side: Details */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
            <MKTypography variant="h5" color="white">
              {title}
            </MKTypography>
            <MKTypography variant="h6" color="white">
              S/. {price}
            </MKTypography>
            <MKTypography variant="body2" color="white">
              Ubicación: {location}
            </MKTypography>
            <MKTypography variant="body2" color="white">
              Categoría: {category}
            </MKTypography>
            <MKTypography variant="body2" color="white">
              Publicado: {publishedDate}
            </MKTypography>

            {/* Seller Info */}
            <Box
              sx={{
                backgroundColor: "#2A2E3F",
                borderRadius: "8px",
                p: 2,
                mt: 2,
              }}
            >
              <MKTypography variant="body1" color="white">
                {seller.name}
              </MKTypography>
              <MKTypography variant="body2" color="white">
                Miembro desde: {seller.memberSince}
              </MKTypography>
              <Box display="flex" alignItems="center" mt={1}>
                <Rating
                  value={seller.rating}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  sx={{ color: "#FFD700" }}
                />
                <MKTypography variant="body2" color="white" ml={1}>
                  ({seller.rating})
                </MKTypography>
              </Box>
            </Box>

            {/* Contact Button */}
            <MKButton
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#3f51b5",
                "&:hover": { backgroundColor: "#303f9f" },
                mt: 2,
              }}
            >
              Contactar al vendedor
            </MKButton>

            {/* Description */}
            <MKTypography variant="h6" color="white" mt={2}>
              Descripción
            </MKTypography>
            <MKTypography variant="body2" color="white">
              {description}
            </MKTypography>

            {/* Action Buttons */}
            <Box display="flex" gap={1} mt={2}>
              <MKButton
                variant="contained"
                color="info"
                sx={{
                  backgroundColor: "#4A3AFF",
                  "&:hover": { backgroundColor: "#3A2ECC" },
                }}
              >
                Guardar
              </MKButton>
              <MKButton
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": { borderColor: "white", backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                Reportar
              </MKButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

FeaturedAdCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  seller: PropTypes.shape({
    name: PropTypes.string.isRequired,
    memberSince: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default FeaturedAdCard;
