import { Container, Toolbar, Typography, AppBar } from "@material-ui/core";

export default function Footer() {
    const getYear = () => new Date().getFullYear()
    return (
        <AppBar position="static" color="primary" style={{background: "#333"}}>
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; {getYear()} Muhammad Saleem Raza
              </Typography>
            </Toolbar>
          </AppBar>
    )
}
