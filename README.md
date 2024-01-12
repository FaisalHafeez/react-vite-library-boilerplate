# React Library Boilerplate - Project Overview

This repository provides a comprehensive boilerplate for a React JS project tailored to meet specific requirements outlined in a conversation with Gary. The primary purpose of this project is to serve as a template for building a React JS library file that can be utilized externally, independent of the main ReactJS project.

## Project Details

### Purpose
The primary goal of this project is to create a template for a React JS library file, with a focus on the following key functionalities:

1. **App.jsx**
   - A React component designed to print `<h1>Welcome to MyReactApp</h1>`.

2. **Development Setup**
   - Utilizes `index.html` and `main.jsx` for local "dev" testing.
   - During the production build, only `App.jsx` gets bundled using Vite. This process aligns with Vite's library mode, ensuring efficient deployment.

3. **Local Testing vs. Build**
   - For local testing, use `main.jsx` and `index.html`.
   - Exclude these files during the build process to avoid including hard-coded properties and data in the production build.

4. **Deployment**
   - Host the build file on a CDN or similar platform.
   - Reference the hosted build file in an HTML file using the provided code snippet.

### Tech Stack
The project employs the following technology stack:

- **React JS:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web development, utilized in library mode.
- **Node.js:** For server-side JavaScript execution during the development process.

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/FaisalHafeez/react-vite-library-boilerplate.git
