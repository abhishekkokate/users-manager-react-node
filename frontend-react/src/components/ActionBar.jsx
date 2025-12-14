import React from "react";
import { Box, InputAdornment, TextField, Button, Tooltip, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";

const ActionBar = ({ searchQuery, onSearch, onRefresh, onAdd, loading }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                mb: 4,
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <TextField
                id="searchQuery"
                label="Search User"
                size="medium"
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "text.secondary",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "text.primary",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "text.primary",
                    },
                }}
                color="initial"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value || "")}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: "#fff" }} />
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <Box sx={{ display: "flex", gap: 1 }}>
                <Button variant="contained" startIcon={<AddIcon />} onClick={onAdd} color="primary">
                    Add User
                </Button>
                <Tooltip title="Refresh List">
                    <IconButton onClick={onRefresh} color="primary">
                        <RefreshIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default ActionBar;
