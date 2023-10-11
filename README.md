
# React Tic Tac Toe Game

In this project, we'll create a simple Tic Tac Toe game using React, a popular JavaScript library for building user interfaces. Tic Tac Toe is a classic two-player game where players take turns marking a square on a 3x3 grid until one player achieves three markers in a row, column, or diagonal.


## Run Locally

Clone the project

```bash
  git clone https://github.com/varunsavaliya/react-tic-tac-toe.git
```

Go to the project directory

```bash
  cd react-tic-tac-toe
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Components:

1. Icon Component:

It renders the icons...

2. Card Component:

Represents a single square on the Tic Tac Toe grid. It displays either 'X', 'O', or a pencil icon.
Handles click events to mark the square with the current player's symbol ('X' or 'O').

3. Grid Component:

Renders the 3x3 grid of Square components.
Manages the game state, including the current player and the state of each square (e.g., 'X', 'O', or empty).
Determines the winner and handles the game restart.

4. App Component:

Orchestrates the overall game logic.
## Game Flow:

Initially, the game begins with an empty grid and 'X' as the starting player.

Players take turns clicking on an empty square to make their move. The Square component updates to display 'X' or 'O' based on the current player.

The Board component checks for a win or a draw after each move. If a win is detected or all squares are filled without a win, the game ends.

When the game ends, the Grid component displays the result, and a button to start a new game.