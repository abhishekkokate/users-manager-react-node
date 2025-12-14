# Users Management React & Node

This project is a full-stack demonstration designed to showcase modular frontend development with React and RESTful API design with Node.js.

The repository is structured as a monorepo containing two distinct implementations:

1.  **Frontend:** A React application to view, search, and manage users consumed from the DummyJSON API.
2.  **Backend:** A Node.js/MySQL API demonstrating database schema design, routing, and environment configuration.

## Demo URLs 🔗

-   Frontend: https://users-manager-react.vercel.app/
-   Backend: Will be deployed soon...

## Frontend: User Management Dashboard

A React application to view, search, and manage users consumed from the DummyJSON API.

### Features 🚀

-   **Fetch Users**: Loads user data via Axios.
-   **Search**: Real-time filtering by Name, Company, Role, or Country.
-   **Local State Management**:
    -   Add a static user.
    -   Delete a user from the view.
-   **Responsive UI**: Built with Material UI (MUI).

### Setup Instructions ⚙️

1. **Clone the repository**
1. **Navigate to frontend folder**
    ```bash
    cd  frontend-react
    ```
1. **Install Dependencies**

    ```bash
    npm install
    ```

1. **Run the project**
    ```bash
    npm run dev
    ```

or open Deployed frontend url - https://users-manager-react.vercel.app/

## Backend: Users Dummy API

A Node.js/MySQL API demonstrating database schema design, routing, and environment configuration.

### Features 🚀

-   Mimic structure of DummyApi users list
-   users list from DummyApi stored in MySQL
-   `GET /users` Endpoint to access users

### Setup Instructions ⚙️

1. **Clone the repository**
1. **Navigate to backend folder**
    ```bash
    cd  backend-node
    ```
1. **Install Dependencies**

    ```bash
    npm install
    ```

1. **Run the project**
    ```bash
    node index.js
    ```
