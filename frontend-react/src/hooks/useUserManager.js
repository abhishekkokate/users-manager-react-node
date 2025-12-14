import { useState, useEffect, useCallback, useMemo } from "react";
import { fetchUsers } from "../api/userApi";
import { STATIC_USER } from "../constants/constants";

export const useUserManager = ({ showSnackbar }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const loadUsers = useCallback(async () => {
        setLoading(true);
        try {
            const data = await fetchUsers();
            setUsers(data);
        } catch (err) {
            showSnackbar("error", "Failed to fetch users! Please try again.", 3000);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadUsers();
    }, []);

    const handleDeleteUser = (id) => {
        if (!id) {
            showSnackbar("error", "Action cancelled. Invalid Id to delete!", 3000);
            return;
        }
        setUsers((oldUsers) => oldUsers.filter((u) => u.id !== id));
        showSnackbar("success", "User deleted successfully.", 3000);
    };

    const handleAddUser = () => {
        const newUser = { ...STATIC_USER, id: Date.now() };
        setUsers((oldUsers) => [newUser, ...oldUsers]);
        showSnackbar("success", "User Added successfully.", 3000);
    };

    const handleSearch = (searchString = "") => {
        setSearchQuery(searchString);
    };

    const filteredUsers = useMemo(() => {
        if (!searchQuery) {
            return users;
        }

        const loweredQuery = searchQuery.toLowerCase();

        return users.filter((user) => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase() || "";
            const companyAndTitle = `${user.company?.name || ""} ${user.company?.title || ""}`.toLowerCase() || "";
            const role = user.role || "";
            const country = user.address?.country?.toLowerCase() || "";

            const stringsToCheck = [fullName, companyAndTitle, role, country];

            const isMatchFound = stringsToCheck.some((str) => str.includes(loweredQuery));

            return isMatchFound;
        });
    }, [users, searchQuery]);

    return {
        users: filteredUsers,
        loading,
        addUser: handleAddUser,
        deleteUser: handleDeleteUser,
        refreshUsers: loadUsers,
        onSearch: handleSearch,
    };
};
