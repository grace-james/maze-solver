let maze1 = 'xx.exx \n...xxx \n.x.... \nxxxx.. \nx.x..s ' // True
let maze2 = 'xx.exx \n...xxx \n.x.... \nxxxx.. \nx.x..s ' // True
let maze3 = 'xs.x.e \n ...x..' // False

function addToStack(stack, maze, row, col) {
  if (isValid(maze, col, row)) {
    stack.push([row, col])
  }
}

function isValid(maze, col, row) {
  if (col < 0 || row < 0 || col >= maze[0].length || row >= maze.length) {
    return false
  }
  if (maze[row][col] === '.' || maze[row][col] === 'e') {
    return true
  }
  return false
}

function transformToMaze(mazeString) {
  const rows = mazeString.split('\n')
  let maze = rows.map((row) => row.trim().split(''))
  return maze
}

function solvable(mazeString) {
  let maze = transformToMaze(mazeString)

  // Find start position in maze
  const startRow = maze.findIndex((row) => row.includes('s'))
  const startCol = maze[startRow].findIndex((cell) => cell === 's')

  const start = [startRow, startCol]
  let stack = []
  stack.push(start)

  // Solve maze
  while (stack.length > 0) {
    let [row, col] = stack.pop()

    console.log(row, col, maze)
    if (maze[row][col] === 'e') {
      return true
    }
    if (maze[row][col] === 'v') {
      continue
    } else {
      maze[row][col] = 'v'
    }
    addToStack(stack, maze, row + 1, col)
    addToStack(stack, maze, row - 1, col)
    addToStack(stack, maze, row, col + 1)
    addToStack(stack, maze, row, col - 1)
  }
  return false
}

console.log(solvable(maze2))
