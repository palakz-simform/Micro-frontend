# Vue Microfrontend Application with Vite 6

This project consists of four microfrontends: `dashboard`, `cart`, `user`, and `container`. Each microfrontend is a separate application that can be developed and run independently or together.

---

## Folder Structure

- `dashboard`: Microfrontend for the dashboard functionality.
- `cart`: Microfrontend for the shopping cart functionality.
- `user`: Microfrontend for user-related functionality.
- `container`: Shell application that integrates all microfrontends.
- `node_modules`: Dependencies for the main project.
- `package.json`: Main package configuration.
- `README.md`: This documentation file.

---

## Setup

**1. Clone the repository:**
   ```bash
   git clone https://github.com/palakz-simform/Micro-frontend.git
   cd Micro-frontend
   ```
**2. Clone the repository:**
   ```bash
   npm install
   ```
**2. Run All Modules Together:**

To start the development servers for all microfrontends (container, dashboard, cart, user) simultaneously, use the following command:
   ```bash
   npm run dev:all
   ```
This will run the applications on the following ports:

- **Container**: `http://localhost:3000`
- **Dashboard**: `http://localhost:3001`
- **Cart**: `http://localhost:3002`
- **User**: `http://localhost:3003`

