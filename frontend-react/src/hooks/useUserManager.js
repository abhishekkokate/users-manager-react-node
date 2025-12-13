import { useState, useEffect, useCallback } from "react";
import { fetchUsers } from "../api/userApi";

export const useUserManager = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const clearError = () => {
        setError(null);
    };

    const loadUsers = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchUsers();
            setUsers(data);
        } catch (err) {
            setError("Failed to fetch users! Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadUsers();
    }, []);

    const handleDeleteUser = (id) => {
        if (!id) {
            console.error("Action cancelled. Invalid Id to delete!");
            return;
        }
        setUsers((oldUsers) => oldUsers.filter((u) => u.id !== id));
    };

    return {
        users,
        loading,
        error,
        clearError,
        deleteUser: handleDeleteUser,
    };
};
