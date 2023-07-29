import { Container, Grid } from "@mui/material";
import MapCard from "../../components/MapCard";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

export default function HomePage() {
    const HomePageTheme = createTheme({
        palette: {
            background: {
                default: "#10062B",
            },
        },
    });
    return (
        <ThemeProvider theme={HomePageTheme}>
            <CssBaseline />
            <Container
                //center container in the middle of the screen

                sx={{
                    m: "auto",
                    mt: 10,
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <Grid container spacing={50}>
                    <Grid container item spacing={100}>
                        <Grid item xs={12} md={6}>
                            <MapCard fill="#605DE3" opacity={0.4} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MapCard fill="#F96108" opacity={0.4} />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={100}>
                        <Grid item xs={12} md={6}>
                            <MapCard fill="#FAB02D" opacity={0.4} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MapCard fill="#7CB518" opacity={0.4} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
