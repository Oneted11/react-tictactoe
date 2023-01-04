## game flow
- needs to track any clicks that happen on our cells
- needs to check if a valid move has been made
- needs to make sure nothing happens if an already played cell has been clicked
- we should update our game state
- we should validate the game state
- check if a player has won
- check if the game ended in a draw
- either stop the game or change the active player, depending on the above checks
- reflect the updates made on the UI
- rinse and repeat

# Learnings
fast toggle like behavior cannot be done simply by using setState as react batches such especially on onClick events. this is to reduce unneccesary rerenders. There has  to be a prescribed way of doing this. I simply haven't found it yet

# Inspiration

This project copies from [This tutorial by Borna Sepic](https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn?signin=true) simply reactifys the logic