import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const fetchUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data.users || [];
    } catch (err) {
        console.error("Error while Fetching Users: ", err);
    }
};

export { fetchUsers };
