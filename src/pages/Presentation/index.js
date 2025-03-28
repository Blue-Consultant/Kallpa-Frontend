import { useState } from "react";
import Container from "@mui/material/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import FeaturedAdCard from "./components/FeaturedAdCard";
import Slider from "react-slick";
import { Grid } from "@mui/material";

function Presentation() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const featuredAds = [
    {
      title: "Se alquila local",
      price: "1,025",
      location: "Lince",
      category: "Inmobiliaria",
      publishedDate: "15-03-25",
      seller: {
        name: "Juan Mendoza Rabanal",
        memberSince: "2024",
        rating: 4.5,
      },
      description: "Local de 140m2, con agua, luz, dos baños, cocina, piso blanco.",
      rating: 4.5,
    },
    {
      title: "Se necesita personal",
      price: "1,449",
      location: "Los Olivos",
      category: "Trabajo",
      publishedDate: "10-03-25",
      seller: {
        name: "Ana Gómez",
        memberSince: "2023",
        rating: 4.0,
      },
      description: "Se necesita personal para atención al cliente, turno mañana.",
      rating: 4.0,
    },
    {
      title: "TV Samsung 50'",
      price: "1,025",
      location: "Lince",
      category: "Electrónica",
      publishedDate: "12-03-25",
      seller: {
        name: "Carlos Pérez",
        memberSince: "2022",
        rating: 4.8,
      },
      description: "TV Samsung 50 pulgadas, 4K, en perfecto estado.",
      rating: 4.8,
    },
    {
      title: "Se necesita personal",
      price: "1,449",
      location: "Los Olivos",
      category: "Trabajo",
      publishedDate: "10-03-25",
      seller: {
        name: "Ana Gómez",
        memberSince: "2023",
        rating: 4.0,
      },
      description: "Se necesita personal para atención al cliente, turno mañana.",
      rating: 4.0,
    },
    {
      title: "TV Samsung 50'",
      price: "1,025",
      location: "Lince",
      category: "Electrónica",
      publishedDate: "12-03-25",
      seller: {
        name: "Carlos Pérez",
        memberSince: "2022",
        rating: 4.8,
      },
      description: "TV Samsung 50 pulgadas, 4K, en perfecto estado.",
      rating: 4.8,
    },
    {
      title: "Se necesita personal",
      price: "1,449",
      location: "Los Olivos",
      category: "Trabajo",
      publishedDate: "10-03-25",
      seller: {
        name: "Ana Gómez",
        memberSince: "2023",
        rating: 4.0,
      },
      description: "Se necesita personal para atención al cliente, turno mañana.",
      rating: 4.0,
    },
  ];

  const categories = [
    "Trabajo",
    "Ropa",
    "Inmuebles",
    "Hogar",
    "Deportes",
    "Servicios",
    "Electrónica",
    "Vehículos",
    "Cosmética",
    "Juguetes",
    "Educación",
    "Mascotas",
  ];

  return (
    <MKBox
      sx={{
        backgroundColor: isDarkTheme ? "#1A1E2D" : "white",
        minHeight: "100vh",
      }}
    >
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          display: "grid",
          placeItems: "center",
          pt: 12,
        }}
      >
        <Container>
          <Grid container item xs={12} lg={8} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography
              variant="h2"
              color={isDarkTheme ? "white" : "text.primary"}
              mt={-6}
              mb={2}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Encuentra lo que buscas en tu distrito
            </MKTypography>
            <MKTypography
              variant="h5"
              color={isDarkTheme ? "white" : "text.primary"}
              mb={4}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["xl"],
                },
              })}
            >
              La plataforma más segura para comprar y vender productos y servicios en tu zona
            </MKTypography>
            <MKButton color="info" size="large">
              Publicar un anuncio
            </MKButton>
          </Grid>
        </Container>
      </MKBox>

      <Container sx={{ py: 4 }}>
        <MKTypography
          variant="h4"
          color={isDarkTheme ? "white" : "text.primary"}
          mb={4}
          sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}
        >
          Anuncios destacados
        </MKTypography>
        <MKBox
          sx={{
            "& .slick-slide > div": {
              margin: "0 10px",
            },
            "& .slick-list": {
              margin: "0 -10px",
            },
          }}
        >
          <Slider {...settings}>
            {featuredAds.map((ad, index) => (
              <div key={index} style={{ padding: "0 15px" }}>
                <FeaturedAdCard
                  title={ad.title}
                  price={ad.price}
                  location={ad.location}
                  category={ad.category}
                  publishedDate={ad.publishedDate}
                  seller={ad.seller}
                  description={ad.description}
                  rating={ad.rating}
                />
              </div>
            ))}
          </Slider>
        </MKBox>
      </Container>

      {/* Popular Categories Section */}
      <Container sx={{ py: 4 }}>
        <MKTypography
          variant="h4"
          color={isDarkTheme ? "white" : "text.primary"}
          mb={4}
          sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}
        >
          Categorías populares
        </MKTypography>
        <Grid container spacing={2} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <MKButton
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: "#3f51b5",
                  color: "white",
                  textTransform: "none",
                  fontSize: "1rem",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "#303f9f",
                  },
                }}
              >
                {category}
              </MKButton>
            </Grid>
          ))}
        </Grid>
      </Container>

      <MKBox pt={3} px={1} mt={3}>
        <DefaultFooter content={footerRoutes} isDarkTheme={isDarkTheme} />
      </MKBox>
    </MKBox>
  );
}

export default Presentation;
