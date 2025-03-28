// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Material Kit 2",
    image: logoCT,
    route: "/",
  },
  menus: [
    {
      name: "Ubicación Geográfica",
      items: [
        { name: "Departamentos", href: "#" },
        { name: "Provincias", href: "#" },
        { name: "Distritos", href: "#" },
      ],
    },
    {
      name: "Conócenos",
      items: [
        { name: "Sobre KALLPA", href: "#" },
        { name: "Contacto", href: "#" },
        { name: "Preguntas Frecuentes", href: "#" },
      ],
    },
    {
      name: "Para clientes",
      items: [
        { name: "Registrarse", href: "#" },
        { name: "Iniciar Sesión", href: "#" },
        { name: "Publicar Anunció", href: "#" }, // Fixed typo: "Anunció" to "Anuncio"
        { name: "Contactar Soporte", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular" color="text.secondary">
      © {date} Kallpa |{" "}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
        color="text.secondary"
      >
        Términos y Condiciones
      </MKTypography>{" "}
      |{" "}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
        color="text.secondary"
      >
        Política de Privacidad
      </MKTypography>{" "}
      |{" "}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
        color="text.secondary"
      >
        Contáctanos
      </MKTypography>
    </MKTypography>
  ),
  // socials: [
  //   {
  //     icon: <FacebookIcon />,
  //     link: "https://www.facebook.com/CreativeTim/",
  //   },
  //   {
  //     icon: <InstagramIcon />,
  //     link: "https://instagram.com/creativetim",
  //   },
  // ],
};
