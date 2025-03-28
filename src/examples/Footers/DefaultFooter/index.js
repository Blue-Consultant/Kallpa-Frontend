import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

function DefaultFooter({ content, isDarkTheme }) {
  const { menus, copyright } = content;

  return (
    <MKBox component="footer" sx={{ py: 6 }}>
      <Container>
        <Grid container spacing={3}>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={12} sm={4} sx={{ mb: 3 }}>
              <MKTypography
                variant="h6"
                fontWeight="bold"
                textTransform="uppercase"
                color={isDarkTheme ? "white" : "text.primary"}
                mb={2}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.5}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        color={isDarkTheme ? "white" : "text.primary"}
                        sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        color={isDarkTheme ? "white" : "text.primary"}
                        sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          {/* <Grid item xs={12} sx={{ textAlign: "center", mt: 4, mb: 3 }}>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              {socials.map(({ icon, link }) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color={isDarkTheme ? "white" : "text.primary"}
                  sx={{
                    mx: 1,
                    opacity: 0.8,
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid> */}
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <MKTypography
              variant="button"
              color={isDarkTheme ? "white" : "text.primary"}
              sx={{ opacity: 0.8 }}
            >
              {copyright}
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

export default DefaultFooter;
