# 15-Puzzle

This is a simple 15-puzzle game implemented using React and TypeScript. It uses components from the MUI Material library. Row and column count can be set in the **src/constants/constants.ts** file. The puzzle supports any combination of row and column count which can accomodate 16 tiles.

## Installation

1. Clone the repository with `git clone https://github.com/livoszlak/15-puzzle`
2. Navigate to the project directory with `cd 15-puzzle`
3. Install dependencies with `npm install`

### Tangible room for improvement

The tiles are placed on the board using absolute positioning, which made sense when I started the project but also means that the tiles won't expand or shrink dynamically in size with the board component if the browser width changes. However, the puzzle still works from mobile up to desktop on browser refresh, so it will have to do for now.

### Dependencies

- @emotion/react ^11.11.4
- @emotion/styled ^11.11.5
- @mui/material ^5.15.18
- framer-motion ^11.2.5
- react ^18.2.0
- react-dom ^18.2.0

### Dev dependencies

- @types/react ^18.2.66
- @types/react-dom ^18.2.22
- @typescript-eslint/eslint-plugin ^7.2.0
- @typescript-eslint/parser ^7.2.0
- @vitejs/plugin-react-swc ^3.5.0
- eslint ^8.57.0
- eslint-plugin-react-hooks ^4.6.0
- eslint-plugin-react-refresh ^0.4.6
- typescript ^5.2.2
- vite ^5.2.0

### Scripts

`dev` Starts the development server using Vite
`build` Compiles TypeScript files and builds the project using Vite
`lint` Runs ESLint on .ts and .tsx files
`preview` Previews the built project using Vite
