import "./App.css";
import { Box, Container, Typography, Alert, Snackbar, CircularProgress, Grid, createTheme, ThemeProvider } from "@mui/material";
import Slide from "@mui/material/Slide";
import { useUserManager } from "./hooks/useUserManager";
import UserCard from "./components/UserCard";

const customTheme = createTheme({
    palette: {
        text: {
            primary: "#fff",
            secondary: "#979797",
        },
    },
});

const SlideTransition = (props) => {
    return <Slide {...props} direction="left" />;
};

function App() {
    const { users, loading, error, clearError, deleteUser, } = useUserManager();

    return (
        <ThemeProvider theme={customTheme}>
            <Container maxWidth="lg">
                {error && (
                    <Snackbar
                        open={!!error}
                        autoHideDuration={3000}
                        onClose={() => clearError()}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        slots={{ transition: SlideTransition }}
                    >
                        <Alert onClose={() => clearError()} severity="error" variant="filled" sx={{ width: "100%" }}>
                            {error}
                        </Alert>
                    </Snackbar>
                )}
                <Box mb={4}>
                    <Typography variant="h4" fontWeight="bold" color="initial">
                        User Management
                    </Typography>
                </Box>
                {loading ? (
                    <Box display="flex" justifyContent="center" py={10}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        {!users.length && (
                            <Box textAlign="center" py={5}>
                                <Typography variant="h5" color="warning.main">
                                    No Users Found!
                                </Typography>
                            </Box>
                        )}

                        <Grid container spacing={2}>
                            {users.map((user, i) => (
                                <Grid size={4} key={i}>
                                    <UserCard user={user} onDelete={deleteUser} />
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </Container>
        </ThemeProvider>
    );
}

export default App;
