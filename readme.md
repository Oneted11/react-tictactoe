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

React batches setState hence making it difficult to do rapid state changes that matter, eg toggles for messages. Still finding a solution.