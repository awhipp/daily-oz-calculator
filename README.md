# Daily Oz Calculator

A daily oz calculator for newborns to determine the amount of food they need based on their weight and the current time.

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
