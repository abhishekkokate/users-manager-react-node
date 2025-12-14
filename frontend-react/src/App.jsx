import "./App.css";
import { Box, Container, Typography, CircularProgress, Grid, createTheme, ThemeProvider } from "@mui/material";
import { useUserManager } from "./hooks/useUserManager";
import UserCard from "./components/UserCard";
import ActionBar from "./components/ActionBar";
import { useSnackbar } from "./hooks/useSnackbar";

const customTheme = createTheme({
    palette: {
        text: {
            primary: "#fff",
            secondary: "#979797",
        },
    },
});

function App() {
    const { showSnackbar, SnackbarComponent } = useSnackbar();
    const { users, loading, addUser, deleteUser, refreshUsers, searchQuery, onSearch } = useUserManager({ showSnackbar });

    return (
        <ThemeProvider theme={customTheme}>
            <Container maxWidth="lg">
                <SnackbarComponent />

                <Box mb={4}>
                    <Typography variant="h4" fontWeight="bold" color="initial">
                        User Management
                    </Typography>
                </Box>

                <ActionBar searchQuery={searchQuery} onSearch={onSearch} onRefresh={refreshUsers} onAdd={addUser} loading={loading}></ActionBar>

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

                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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
