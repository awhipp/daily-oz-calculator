# Daily Oz Calculator

[![Build](https://github.com/awhipp/daily-oz-calculator/actions/workflows/build.yml/badge.svg)](https://github.com/awhipp/daily-oz-calculator/actions/workflows/build.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/7cef31e7-9a11-4655-86fa-169165f1f9ed/deploy-status)](https://app.netlify.com/sites/daily-ounce/deploys)

[Live Preview](https://daily-ounce.netlify.app/)

A calculator for newborns to determine the amount of food they need based on their weight and the current time.

---------

![image](https://github.com/user-attachments/assets/9d4fd1e2-4428-4549-9ea4-193d42ef4208)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Build](#build)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/daily-oz-calculator.git
    cd daily-oz-calculator
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

## Usage

To start the development server, run:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application.

## Development

### Project Structure

- `src/`: Contains the source code of the application.
  - `components/`: React components.
    - `Clock.tsx`: Displays the current time.
    - `WeightInput.tsx`: Input fields for baby's weight.
    - `FormulaCalculator.tsx`: Calculates the ounces of food based on weight and time.
  - `styles/`: CSS files for styling components.
  - `main.tsx`: Entry point of the application.
  - `App.tsx`: Main application component.

### Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm run prettier`: Formats the code using Prettier.

## Build

To build the application for production, run:

```sh
npm run build
```

The output will be in the `dist` directory.

## License

This project is licensed under the MIT License.
