# Soar Task

## Overview

This project is bootstrapped with **Vite**. It leverages modern tools and libraries for efficient development and performance. Here's a brief overview of the key technologies used:

- **Vite**: A modern build tool that provides faster development and build times compared to **create-react-app (CRA)**. Vite uses native ES modules in development and provides an optimized build process, making it a great choice for modern React apps.
- **Redux Toolkit**: Simplifies global state management with less boilerplate and includes powerful features like slices and middleware.
- **Mock Service Worker (MSW)**: Used for mocking API requests. The mock server is configured in `src/mocks/api`.
- **Victory**: A charting library selected for its compatibility with React 19 and later. It is used as a replacement for `react-chartjs-2`, which doesn't support React 19 yet.

---

## Project Setup and Run Instructions

### Prerequisites

- **Node.js** (version 16 or higher recommended)
- **npm** or **yarn** (any package manager of your choice)

### Running the project

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   This will start the Vite development server and the app will be available at `http://localhost:5173` by default.

### Mock API

- The project uses **Mock Service Worker (MSW)** to simulate API calls during development. The mock API is configured in `src/mocks/api`. It intercepts network requests and returns mock data, allowing you to develop and test without needing a live backend.

- MSW is automatically activated during development. If you need to modify the mocked responses, update the files in `src/mocks/api`.
