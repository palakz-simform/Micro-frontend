# Vue Microfrontend Application with Vite

This project consists of four microfrontends: `dashboard`, `cart`, `user`, and `container`. Each microfrontend is a separate application that can be developed and run independently or together.

---

## Folder Structure

- `dashboard`: Microfrontend for the dashboard functionality.
- `cart`: Microfrontend for the shopping cart functionality.
- `user`: Microfrontend for user-related functionality.
- `container`: Shell application that integrates all microfrontends.


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


## Technologies Used

- **Vue.js (Composition API) + Vite 6**: Vue.js for frontend development with Composition API, and Vite 6 as the build tool and development server.

- **Module Federation**: Implemented using `@originjs/vite-plugin-federation` for microfrontend integration.
- **Pinia**: Used for state management in the microfrontends.

## Author
- Palak Zalavadia (palak.z@simformsolutions.com)