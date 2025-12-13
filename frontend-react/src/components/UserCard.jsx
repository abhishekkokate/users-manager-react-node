import React from "react";
import { Container, CardContent, Stack, Avatar, Box, Typography, Chip, IconButton, Icon } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";
import DeleteIcon from "@mui/icons-material/Delete";
import WorkIcon from "@mui/icons-material/Work";

const UserCard = ({ user, onDelete }) => {
    return (
        <Container maxWidth="xs" sx={{ height: "100%", position: "relative", borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Avatar src={user.image} alt={user.firstName[0]} />
                    <Box>
                        <Typography variant="h6" component="div" fontWeight="bold" color="initial">
                            {user.firstName} {user.lastName}
                        </Typography>
                        {user.role === "admin" && (
                            <Chip label={user.role} size="small" color="success" variant="filled" icon={<ManageAccountsIcon />} />
                        )}
                        {user.role === "moderator" && (
                            <Chip label={user.role} size="small" color="secondary" variant="filled" icon={<SupervisorAccountIcon />} />
                        )}
                        {user.role === "user" && <Chip label={user.role} size="small" color="default" variant="filled" icon={<PersonIcon />} />}
                    </Box>
                </Stack>

                <Stack>
                    {user.company?.name && (
                        <Box display="flex" alignItems="center" gap={1} mb={1}>
                            <BusinessIcon color="info" fontSize="small" />
                            <Typography variant="body2" color="text.secondary">
                                {user.company?.name}
                            </Typography>
                        </Box>
                    )}
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                        <WorkIcon color="info" fontSize="small" />
                        <Typography variant="body2" color="text.secondary">
                            {user.company?.title || "Freelancer"}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                        <PublicIcon color="info" fontSize="small" />
                        <Typography variant="body2" color="text.secondary">
                            {user.address?.country || "Unknown"}
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
            <Box sx={{ position: "absolute", right: 2, top: 2 }}>
                <IconButton aria-label="delete" color="error" onClick={() => onDelete(user.id)}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Container>
    );
};

export default UserCard;
